import { doc, setDoc } from "firebase/firestore"; // Removed unused updateDoc, fixed semicolon
import { gameConfigSettings } from "./config.js";
import { db } from "./firebaseSetup.js";

/**
 * Initializes the subject data in the Firestore database.
 * @param {object} game - The game object containing config and registry data.
 */
export function initSubject(game) {
    if (!db) {
        console.error("Firestore database not initialized.");
        return;
    }

    if (!game?.config?.studyID || !game?.config?.uid) {
        console.error("Missing studyID or uid in game config.");
        return;
    }

    const docRef = doc(
        db,
        "Cannonball_MF_pilot",
        String(game.config.studyID),
        "subjects",
        String(game.config.uid)
    );

    setDoc(docRef, {
        subjectID: game.registry.get("subjectID"),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        trial_info_file: gameConfigSettings.MF.trialInfoFile,
        trial_data: [],
        attention_checks: [],
    }, { merge: true }) // Added merge: true to avoid overwriting
        .then(() => {
            console.log("Data successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

/**
 * Saves the trial data to the Firestore database.
 * @param {object} game - The game object containing config and registry data.
 */
export function saveData(game) {
    if (!db) {
        console.error("Firestore database not initialized correctly.");
        return;
    }

    if (!game?.config?.studyID || !game?.config?.uid) {
        console.error("Missing studyID or uid in game config.");
        return;
    }


    const docRef = doc(
        db,
        "Cannonball_MF_pilot",
        String(game.config.studyID),
        "subjects",
        String(game.config.uid)
    );

    setDoc(docRef, {
        trial_data: game.registry.get("data") || [],
    }, { merge: true })
        .then(() => {
            console.log("Data successfully saved!");
        })
        .catch((error) => {
            console.error("Error saving document:", error);
        });
}