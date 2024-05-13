import {
    doc,
    setDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";


/**
 * Initializes the subject data in the Firestore database.
 * @param {object} game - The game object.
 */
export function initSubject(game) {
    const docRef = doc(
        game.config.db,
        "Cannonball_MF_pilot",
        game.config.studyID,
        "subjects",
        game.config.uid
    );

    setDoc(docRef, {
        subjectID: game.registry.get("subjectID"),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        trial_data: [],
        attention_checks: [],
    })
        .then(() => {
            console.log("Data successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

/**
 * Saves the trial data to the Firestore database.
 * @param {object} scene - The scene object.
 */
export function saveData(game) {
    // Get a reference to the document in the Firestore database
    const docRef = doc(
        game.config.db,
        "Cannonball_MF_pilot",
        game.config.studyID,
        "subjects",
        game.config.uid
    );
    // Get the existing document
    getDoc(docRef)
        .then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                if (data.trial_data.length == 180) {
                    // If the subject has completed 180 trials, save their data in a new document in the 'completedSubjects' collection
                    const completedDocRef = doc(game.config.db, 'Cannonball_MF_pilot', game.config.studyID, 'completedSubjects', game.config.uid);
                    setDoc(completedDocRef, {
                        trial_data: game.registry.get("data"),
                    })
                        .then(() => {
                            console.log("Data successfully updated in completedSubjects!");
                        })
                        .catch((error) => {
                            console.error("Error updating document in completedSubjects: ", error);
                        });
                }
            }
        })
        .catch((error) => {
            console.error("Error getting document: ", error);
        });


    






    
    // Update the document with the trial data
    updateDoc(docRef, {
        trial_data: game.registry.get("data"),
    })
        .then(() => {
            // Log a success message when the data is successfully updated
            console.log("Data successfully updated!");
        })
        .catch((error) => {
            // Log an error message if there is an error updating the document
            console.error("Error updating document: ", error);
        });
}
