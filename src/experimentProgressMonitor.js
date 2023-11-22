/**
 * Code for monitoring the progress of subjects through an experiment.
 * Written by Toby Wise (toby.wise@kcl.ac.uk)
 * GNU General Public License v3.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export function registerSubject(firebaseFunctionURL, key, experiment, taskPhase, subjectID) {
    return __awaiter(this, void 0, void 0, function* () {
        // Cloud function takes key, translates this to UID and updates relevant document
        // and returns something to indicate success or failure
        const response = yield fetch(firebaseFunctionURL + '/registerSubject', {
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
        const json = yield response.json();
        if (response.ok) {
            return Promise.resolve(json.status);
        }
        else {
            const error = new Error(json.status);
            return Promise.reject(error);
        }
    });
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
export function incrementProgress(firebaseFunctionURL, key, experiment, taskPhase, subjectID, trialCountIncrement = 1, attentionCheck = null, terminated = null) {
    return __awaiter(this, void 0, void 0, function* () {
        // Cloud function takes key, translates this to UID and updates relevant document
        // and returns something to indicate success or failure
        const response = yield fetch(firebaseFunctionURL + '/incrementProgress', {
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
        const json = yield response.json();
        if (response.ok) {
            return Promise.resolve(json.status);
        }
        else {
            const error = new Error(json.status);
            return Promise.reject(error);
        }
    });
}
export function completePhase(firebaseFunctionURL, key, experiment, taskPhase, subjectID) {
    return __awaiter(this, void 0, void 0, function* () {
        // Cloud function takes key, translates this to UID and updates relevant document
        // and returns something to indicate success or failure
        const response = yield fetch(firebaseFunctionURL + '/completePhase', {
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
        const json = yield response.json();
        if (response.ok) {
            return Promise.resolve(json.status);
        }
        else {
            const error = new Error(json.status);
            return Promise.reject(error);
        }
    });
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
export function recordError(firebaseFunctionURL, key, experiment, taskPhase, subjectID, errorMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        // Cloud function takes key, translates this to UID and updates relevant document
        // and returns something to indicate success or failure
        const response = yield fetch(firebaseFunctionURL + '/recordError', {
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
        const json = yield response.json();
        if (response.ok) {
            return Promise.resolve(json.status);
        }
        else {
            const error = new Error(json.status);
            return Promise.reject(error);
        }
    });
}
/* EXperiment monitor class */
class ExperimentMonitor {
    constructor() {
        this.mostRecentSubjectID = '';
        this.mostRecentTaskPhase = '';
        this.nGlobalErrors = 0;
        this.globalErrorLimit = 10;
        this.firebaseFunctionURL = null;
        this.key = null;
        this.experiment = null;
        this.taskPhase = null;
        this.subjectID = null;
        this.globalErrorMonitoring = true;
    }
    init(firebaseFunctionURL, key, experiment, globalErrorMonitoring = true) {
        this.firebaseFunctionURL = firebaseFunctionURL;
        this.key = key;
        this.experiment = experiment;
        this.globalErrorMonitoring = globalErrorMonitoring;
    }
    registerSubject(taskPhase, subjectID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.firebaseFunctionURL != null && this.key != null && this.experiment != null) {
                this.mostRecentSubjectID = subjectID;
                this.mostRecentTaskPhase = taskPhase;
                return yield registerSubject(this.firebaseFunctionURL, this.key, this.experiment, taskPhase, subjectID);
            }
        });
    }
    incrementProgress(taskPhase, subjectID, trialCountIncrement = 1, attentionCheck = null, terminated = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.firebaseFunctionURL != null && this.key != null && this.experiment != null) {
                this.mostRecentSubjectID = subjectID;
                this.mostRecentTaskPhase = taskPhase;
                return yield incrementProgress(this.firebaseFunctionURL, this.key, this.experiment, taskPhase, subjectID, trialCountIncrement, attentionCheck, terminated);
            }
        });
    }
    completePhase(taskPhase, subjectID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.firebaseFunctionURL != null && this.key != null && this.experiment != null) {
                this.mostRecentSubjectID = subjectID;
                this.mostRecentTaskPhase = taskPhase;
                return yield completePhase(this.firebaseFunctionURL, this.key, this.experiment, taskPhase, subjectID);
            }
        });
    }
    recordError(taskPhase, subjectID, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.firebaseFunctionURL != null && this.key != null && this.experiment != null) {
                this.mostRecentSubjectID = subjectID;
                this.mostRecentTaskPhase = taskPhase;
                const errorObject = {
                    message: errorMessage,
                    date: new Date()
                };
                return yield recordError(this.firebaseFunctionURL, this.key, this.experiment, taskPhase, subjectID, errorObject);
            }
        });
    }
    recordGlobalError(errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.mostRecentTaskPhase.length && this.globalErrorMonitoring && this.nGlobalErrors < this.globalErrorLimit) {
                this.nGlobalErrors += 1;
                this.recordError(this.mostRecentTaskPhase, this.mostRecentSubjectID, errorMessage);
            }
        });
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
