import { doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { gameConfigSettings } from "./config.js";

/**
 * Initializes the subject data in the Firestore database.
 * If the subject exists in the previous session, moves them to the current session with the same trial info file.
 * @param {object} game - The game object.
 * @param {number} currentSessionNumber - The current session number (1, 2, or 3).
 */
export async function initSubject(game, currentSessionNumber) {
    const db = game.config.db;
    const uid = game.config.uid;

    const currentSessionPath = `Cannonball_MF_test_retest_3sessions/session ${currentSessionNumber}/subjects`;
    const previousSessionPath = `Cannonball_MF_test_retest_3sessions/session ${currentSessionNumber - 1}/subjects`;
    const currentDocRef = doc(db, currentSessionPath, uid);

    try {
        // Check if the participant already exists in the current session
        const currentDocSnap = await getDoc(currentDocRef);
        if (currentDocSnap.exists()) {
            console.log(`Participant already exists in session ${currentSessionNumber}`);
            return; // Do nothing if they already exist
        }

        // Initialize for Session 1 or retrieve trial info file from the previous session
        let trialInfoFile = gameConfigSettings.MF.trialInfoFile;

        if (currentSessionNumber > 1) {
            // Check the previous session for the participant's trial info file
            const previousDocRef = doc(db, previousSessionPath, uid);
            const previousDocSnap = await getDoc(previousDocRef);

            if (previousDocSnap.exists()) {
                trialInfoFile = previousDocSnap.data().trial_info_file;
                console.log(`Using trial info file from session ${currentSessionNumber - 1}: ${trialInfoFile}`);
            } else {
                console.warn(`No data found for participant in session ${currentSessionNumber - 1}`);
            }
        }

        // Save the participant to the current session with the trial info file
        await setDoc(currentDocRef, {
            subjectID: game.registry.get("subjectID"),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            trial_info_file: trialInfoFile,
            trial_data: [], // Placeholder for trial data
            attention_checks: [], // Placeholder for attention checks
        });

        console.log(`Participant initialized for session ${currentSessionNumber} with trial info file: ${trialInfoFile}`);
    } catch (error) {
        console.error(`Error initializing participant for session ${currentSessionNumber}:`, error);
    }
}

/**
 * Saves the trial data to the Firestore database.
 * @param {object} game - The game object.
 */
export function saveData(game) {
    const docRef = doc(
        game.config.db,
        "Cannonball_MF_test_retest_3sessions",
        game.config.studyID,
        "subjects",
        game.config.uid
    );

    // Update the document with the trial data
    updateDoc(docRef, {
        trial_data: game.registry.get("data"),
    })
        .then(() => {
            console.log("Data successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
}
