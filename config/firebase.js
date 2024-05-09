import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore/lite";
import {
    getStorage,
    ref,
    uploadBytes,
    uploadBytesResumable,
    listAll,
    getDownloadURL,
    copyObject,
    deleteObject,
} from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_FIREBASE,
    authDomain: "sinoscan-725d0.firebaseapp.com",
    projectId: "sinoscan-725d0",
    storageBucket: "sinoscan-725d0.appspot.com",
    messagingSenderId: "609804417279",
    appId: "1:609804417279:web:c9264a25781b185073f4ca",
    measurementId: "G-73SSL8H8EC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };

export const fetchFirestoreData = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export const uploadFiles = async (files) => {
    const storageRef = storage.ref();
    const fileLinks = [];

    for (const file of files) {
        const fileRef = storageRef.child(`uploads_US/${file.name}`);
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();
        fileLinks.push(fileUrl);
    }
    console.log(fileLinks);
    return fileLinks; // Array of file URLs
};

export const uploadFilesToTempStorage = async (files) => {
    const storageRef = getStorage(); // Make sure this is correctly initialized and accessible here
    const uploadTasks = files.map((file) => {
        console.log("Uploading file:", file.path, file.size, file.type); // Confirm file properties are correct

        const timestamp = new Date().getTime();
        const fileRef = ref(storageRef, `temp_US/${timestamp}_${file.path}`); // Ensure file.name is used correctly

        return uploadBytes(fileRef, file.file) // Use the actual File object
            .then(() => getDownloadURL(fileRef))
            .then((downloadURL) => {
                console.log(`File uploaded: ${downloadURL}`);
                return downloadURL;
            })
            .catch((error) => {
                console.error("Upload error:", error);
                throw error; // Rethrow or handle as needed
            });
    });
    return Promise.all(uploadTasks);
};

export const moveFileToPermanentStorage = async (tempFilePath, permanentFilePath) => {
    const storageRef = ref(storage);
    const tempFileRef = ref(storageRef, tempFilePath);
    const permanentFileRef = ref(storageRef, permanentFilePath);

    try {
        // Copy the file to the new location
        await copyObject(tempFileRef, permanentFileRef);

        // Delete the temporary file
        await deleteObject(tempFileRef);
        console.log("File moved successfully!");
    } catch (error) {
        console.error("Error moving file:", error);
    }
};

// Function to move file from temporary to permanent storage
export const moveToPermanentStorage = async (tempFileUrls) => {
    const storageRef = getStorage();
    const moves = tempFileUrls.map(async (url) => {
        const tempRef = ref(storageRef, url); // Create reference to temp file
        const permanentPath = `permanent/${url.split("/").pop()}`; // Generate permanent path
        const permanentRef = ref(storageRef, permanentPath); // Create reference to permanent file

        try {
            // Copy file from temp to permanent location
            // Simulate the copy operation since Firebase does not support direct copy
            const blob = await fetch(url).then((res) => res.blob()); // Download the file as a blob
            await uploadBytes(permanentRef, blob); // Upload the blob to the permanent location
            console.log(`File moved to: ${permanentPath}`);

            // Delete the temporary file
            await deleteObject(tempRef);
            console.log(`Temp file deleted: ${url}`);

            // Return the download URL of the moved file
            return await getDownloadURL(permanentRef);
        } catch (error) {
            console.error("Error moving or deleting file:", error);
            throw error; // Rethrow or handle as needed
        }
    });

    return Promise.all(moves);
};

export const saveToFirestore = async (userData) => {
    try {
        // Specify the collection name where you want to store the data
        const collectionRef = collection(db, JSON.parse(process.env.NEXT_DEV) ? "dev_data_US" : "live_data_US");
        console.log("LOG UISERDATA: ", userData);
        // Add the user data to the collection
        await addDoc(collectionRef, userData);

        // Return true to indicate success
        console.log("DATA WAS SAVED");
        return true;
    } catch (error) {
        console.error("Error saving user data:", error);
        // Return false to indicate failure
        return false;
    }
};

// const uploadImageAndGetURL = async (imageFile) => {
//     console.log("IT WORKS");
//     try {
//         const storageRef = ref(storage, "imagesLive/" + imageFile.name); // Create a reference to the image storage path
//         const snapshot = await uploadBytes(storageRef, imageFile); // Upload the image bytes
//         const imageDownloadURL = await getDownloadURL(storageRef); // Get the image download URL
//         console.log(imageDownloadURL);
//         return imageDownloadURL;
//     } catch (error) {
//         console.error("Error uploading image:", error);
//         throw error;
//     }
// };

// export default uploadImageAndGetURL;
