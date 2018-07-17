<?php
  header("Content-type: application/javascript");
  // include base DEPENDENCIES
  require '../AI/DEPENDENCIES/jessica.recognition.js'; // include recognition DEPENDENCIES
  require '../AI/DEPENDENCIES/jessica.voice.js'; // include voice DEPENDENCIES
?>

/* FIREBASE CONFIG */
// initiate FIREBASE
var config = { // FIREBASE config
    apiKey: "AIzaSyBtxfoMSjgtOtZve3e62MiSziIRTEfA02Q",
    authDomain: "jrs-jessica.firebaseapp.com",
    databaseURL: "https://jrs-jessica.firebaseio.com",
    projectId: "jrs-jessica",
    storageBucket: "jrs-jessica.appspot.com",
    messagingSenderId: "344096794282"
  };
firebase.initializeApp(config);
var liveDB = firebase.database().ref();
/* END FIREBASE CONFIG */

/* JESSICA CORE */
// set jessica voice and recognition defaults
jessica.setLanguage("en-US");
jessica.debug(true);
jessicaVoice.setDefaultVoice("US English Female");

// PERSONAL Settings
var user = "Junior"; // what should JESSICA call you
var tempUnit = "C"; // Temp UNIT - "C" - celcius or "F"- fahrenheit
var baseLocation = 'Kolkata'; // Default location weather purposes
// EXTRA Functions
Array.prototype.response = function () { // picking up random responses for natural feels
    return this[Math.floor(Math.random() * this.length)]
}
// include SKILLS
<?php
  foreach (glob("../AI/SKILLS/*.skills.js") as $filename){
    include $filename;
  }
?>
//WAKEUP call
var wakeUP = jessica.getSpeechRecognizer();
jessica.start({autostart:true, continuous: true});
/* END JESSICA CORE */
