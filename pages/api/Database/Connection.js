// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: 'AIzaSyAaqmQRsn9JaPrykXOSywUWJ9L08xSSLBQ',
    authDomain: 'talkmate-31fac.firebaseapp.com',
    projectId: 'talkmate-31fac'
});

const db = getFirestore(firebaseApp);

export { firebaseApp, db }