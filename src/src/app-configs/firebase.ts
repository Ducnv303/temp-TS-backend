import firebase from 'firebase-admin';

export const CHAINVERSE_FIREBASE_CERT = process.env.CHAINVERSE_FIREBASE_CERT ||  "";

const CERT = JSON.parse((CHAINVERSE_FIREBASE_CERT).replace(/'/g, '"'));

firebase.initializeApp({
	credential: firebase.credential.cert(CERT),
});

export default firebase;