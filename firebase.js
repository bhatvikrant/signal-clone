import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCwEb7k_fiGwubRq0bSuSpgvQ_EKNnDP6A",
	authDomain: "signal-clone-ae388.firebaseapp.com",
	projectId: "signal-clone-ae388",
	storageBucket: "signal-clone-ae388.appspot.com",
	messagingSenderId: "17125491069",
	appId: "1:17125491069:web:5327b81d4db7eac344cc14",
	measurementId: "G-Q9W2CDZXTC",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
