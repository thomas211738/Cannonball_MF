/**
 * Code for monitoring the progress of subjects through an experiment.
 * Written by Toby Wise (toby.wise@kcl.ac.uk)
 * GNU General Public License v3.0
 */

/**
 * Register a subject in the database for a given experiment and task phase
 * This must be done prior to the start of the task phase and prior to updating any information
 * about the subject for this task phase.
 * WARNING: This will overwrite any existing data for the subject if it already exists.
 * @param {string} firebaseFunctionURL - URL for firebase cloud functions
 * @param {string} key - Unique identifier for the progress monitor account
 * @param {string} experiment - The name of the experiment
 * @param {string} taskPhase - The name of the task phase
 * @param {string} subjectID - The subject ID
 * @returns {void}
 */
export async function registerSubject(
	firebaseFunctionURL: string,
	key: string,
	experiment: string,
	taskPhase: string,
	subjectID: string
): Promise<void> {
	// Cloud function takes key, translates this to UID and updates relevant document
	// and returns something to indicate success or failure
	const response = await fetch(firebaseFunctionURL + '/registerSubject', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			experiment: experiment,
			taskPhase: taskPhase,
			subjectID: subjectID
		})
	});

	const json = await response.json();
	if (response.ok) {
		return Promise.resolve(json.status);
	} else {
		const error = new Error(json.status);
		return Promise.reject(error);
	}
}

/**
 * Update the subject data for a given experiment and task phase
 * @param {string} firebaseFunctionURL - URL for firebase cloud functions
 * @param {string} key - Unique identifier for the progress monitor account
 * @param {string} experiment - The name of the experiment
 * @param {string} taskPhase - The name of the task phase
 * @param {string} subjectID - The subject ID
 * @param {number | null} trialCountIncrement - How much to increment the trial count by, if not specified count is incremented by 1
 * @param {string | null} attentionCheck - Whether the attention check was passed or failed. Set to 'passed' or 'failed', if not specified no change is made
 * @param {boolean | null} terminated - If true, indicates that the subject was terminated. If false or not specified, indicates that the subject was not terminated
 */
export async function incrementProgress(
	firebaseFunctionURL: string,
	key: string,
	experiment: string,
	taskPhase: string,
	subjectID: string,
	trialCountIncrement: number | null = 1,
	attentionCheck: string | null = null,
	terminated: boolean | null = null
): Promise<void> {
	// Cloud function takes key, translates this to UID and updates relevant document
	// and returns something to indicate success or failure
	const response = await fetch(firebaseFunctionURL + '/incrementProgress', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			experiment: experiment,
			taskPhase: taskPhase,
			subjectID: subjectID,
			trialCountIncrement: trialCountIncrement,
			attentionCheck: attentionCheck,
			terminated: terminated
		})
	});

	const json = await response.json();
	if (response.ok) {
		return Promise.resolve(json.status);
	} else {
		const error = new Error(json.status);
		return Promise.reject(error);
	}
}

/**
 * Record error messages on the database
 * @param {string} firebaseFunctionURL - URL for firebase cloud functions
 * @param {string} key - Unique identifier for the progress monitor account
 * @param {string} experiment - The name of the experiment
 * @param {string} taskPhase - The name of the task phase
 * @param {string} subjectID - The subject ID
 * @param {string} errorMessage - The error message to record
 */
export async function recordError(
	firebaseFunctionURL: string,
	key: string,
	experiment: string,
	taskPhase: string,
	subjectID: string,
	errorMessage: unknown
): Promise<void> {
	// Cloud function takes key, translates this to UID and updates relevant document
	// and returns something to indicate success or failure
	const response = await fetch(firebaseFunctionURL + '/recordError', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			experiment: experiment,
			taskPhase: taskPhase,
			subjectID: subjectID,
			errorMsg: errorMessage
		})
	});

	const json = await response.json();
	if (response.ok) {
		return Promise.resolve(json.status);
	} else {
		const error = new Error(json.status);
		return Promise.reject(error);
	}
}

/* EXperiment monitor class */
class ExperimentMonitor {
	private firebaseFunctionURL: string | null;
	private key: string | null;
	private experiment: string | null;
	private taskPhase: string | null;
	private subjectID: string | null;
	private mostRecentSubjectID = '';
	private mostRecentTaskPhase = '';
	private globalErrorMonitoring: boolean;
	private nGlobalErrors: number = 0;
	private globalErrorLimit: number = 10;

	constructor() {
		this.firebaseFunctionURL = null;
		this.key = null;
		this.experiment = null;
		this.taskPhase = null;
		this.subjectID = null;
		this.globalErrorMonitoring = true;
	}

	public init(
		firebaseFunctionURL: string,
		key: string,
		experiment: string,
		globalErrorMonitoring = true
	): void {
		this.firebaseFunctionURL = firebaseFunctionURL;
		this.key = key;
		this.experiment = experiment;
		this.globalErrorMonitoring = globalErrorMonitoring;
	}

	public async registerSubject(taskPhase: string, subjectID: string): Promise<void> {
		if (this.firebaseFunctionURL != null && this.key != null && this.experiment != null) {
			this.mostRecentSubjectID = subjectID;
			this.mostRecentTaskPhase = taskPhase;
			return await registerSubject(
				this.firebaseFunctionURL,
				this.key,
				this.experiment,
				taskPhase,
				subjectID
			);
		}
	}

	public async incrementProgress(
		taskPhase: string,
		subjectID: string,
		trialCountIncrement: number | null = 1,
		attentionCheck: string | null = null,
		terminated: boolean | null = null
	): Promise<void> {
		if (this.firebaseFunctionURL != null && this.key != null && this.experiment != null) {
			this.mostRecentSubjectID = subjectID;
			this.mostRecentTaskPhase = taskPhase;
			return await incrementProgress(
				this.firebaseFunctionURL,
				this.key,
				this.experiment,
				taskPhase,
				subjectID,
				trialCountIncrement,
				attentionCheck,
				terminated
			);
		}
	}

	public async recordError(
		taskPhase: string,
		subjectID: string,
		errorMessage: unknown
	): Promise<void> {
		if (this.firebaseFunctionURL != null && this.key != null && this.experiment != null) {
			this.mostRecentSubjectID = subjectID;
			this.mostRecentTaskPhase = taskPhase;

			const errorObject = {
				message: errorMessage,
				date: new Date()
			};

			return await recordError(
				this.firebaseFunctionURL,
				this.key,
				this.experiment,
				taskPhase,
				subjectID,
				errorObject
			);
		}
	}

	public async recordGlobalError(errorMessage: unknown): Promise<void> {
		if (this.mostRecentTaskPhase.length && this.globalErrorMonitoring && this.nGlobalErrors < this.globalErrorLimit) {
			this.nGlobalErrors += 1;
			this.recordError(this.mostRecentTaskPhase, this.mostRecentSubjectID, errorMessage);
		}
	}
}

const experimentMonitor = new ExperimentMonitor();

// add event listener for errors on window
if (typeof window !== 'undefined') {
	window.addEventListener('error', (event) => {
		// if experimentProgressMonitor isn't mentioned in the error message, then record it
		if (event.error && event.error.message.indexOf('experimentProgressMonitor') === -1) {
			experimentMonitor.recordGlobalError(event.error);
		}
	});

	window.addEventListener('unhandledrejection', (event) => {
		// if experimentProgressMonitor isn't mentioned in the error message, then record it
		if (event.reason && event.reason.fileName.indexOf('experimentProgressMonitor') === -1) {
			experimentMonitor.recordGlobalError(String(event.reason));
		}
	});
}

export default experimentMonitor;
