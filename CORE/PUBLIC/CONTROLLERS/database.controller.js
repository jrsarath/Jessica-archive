// Init Firebase
var config = {
    apiKey: "AIzaSyBtxfoMSjgtOtZve3e62MiSziIRTEfA02Q",
    authDomain: "jrs-jessica.firebaseapp.com",
    databaseURL: "https://jrs-jessica.firebaseio.com",
    projectId: "jrs-jessica",
    storageBucket: "jrs-jessica.appspot.com",
    messagingSenderId: "344096794282"
  };
firebase.initializeApp(config);
// End init firebase
var liveDB = firebase.database().ref();
