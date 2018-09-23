import * as firebase from "firebase"
var config = {
    apiKey: "AIzaSyD1OlRmpRStX3bSQbNJSlKufr-CrADBc30",
    authDomain: "evaglmemo.firebaseapp.com",
    databaseURL: "https://evaglmemo.firebaseio.com",
    projectId: "evaglmemo",
    storageBucket: "evaglmemo.appspot.com",
    messagingSenderId: "66653274358"
};
firebase.initializeApp(config);
var db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export default db;