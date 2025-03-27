import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseSetup.js"; // Import db from your setup file
import { gameConfigSettings } from "./config.js";

export async function initSubject(game, currentSessionNumber) {
    if (!db) {
        console.error("Firestore database not initialized.");
        return;
    }

    const uid = game.config.uid;
    const currentSessionPath = `Cannonball_MF_test_retest_3sessions/session ${currentSessionNumber}/subjects`;
    const previousSessionPath = `Cannonball_MF_test_retest_3sessions/session ${currentSessionNumber - 1}/subjects`;
    const currentDocRef = doc(db, currentSessionPath, uid);

    try {
        const currentDocSnap = await getDoc(currentDocRef);
        if (currentDocSnap.exists()) {
            console.log(`Participant already exists in session ${currentSessionNumber}`);
            return;
        }

        let trialInfoFile = gameConfigSettings.MF.trialInfoFile;
        if (currentSessionNumber > 1) {
            const previousDocRef = doc(db, previousSessionPath, uid);
            const previousDocSnap = await getDoc(previousDocRef);
            if (previousDocSnap.exists()) {
                trialInfoFile = previousDocSnap.data().trial_info_file;
                console.log(`Using trial info file from session ${currentSessionNumber - 1}: ${trialInfoFile}`);
            } else {
                console.warn(`No data found for participant in session ${currentSessionNumber - 1}`);
            }
        }

        await setDoc(currentDocRef, {
            subjectID: game.registry.get("subjectID"),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            trial_info_file: trialInfoFile,
            trial_data: [],
            attention_checks: [],
        }, { merge: true });

        console.log(`Participant initialized for session ${currentSessionNumber} with trial info file: ${trialInfoFile}`);
    } catch (error) {
        console.error(`Error initializing participant for session ${currentSessionNumber}:`, error);
    }
}

export function saveData(game) {
    if (!db) {
        console.error("Firestore database not initialized.");
        return;
    }

    const docRef = doc(
        db,
        "Cannonball_MF_test_retest_3sessions",
        String(game.config.studyID),
        "subjects",
        String(game.config.uid)
    );

    updateDoc(docRef, {
        trial_data: game.registry.get("data") || [],
    })
        .then(() => {
            console.log("Data successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document:", error);
        });
}