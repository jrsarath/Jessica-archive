$(document).ready(function() {
    console.clear();
});
  var mic;
  var clear_animation;
  function setup() {
    mic = new p5.AudioIn();
    mic.start();
  }
  function draw() {
    var vol = mic.getLevel();
    if (vol >= "0.01") {
      clearTimeout(window.clear_animation);
      $(".ring-one").removeClass('pulseone');
      $(".ring-two").removeClass('pulsetwo');
      var ringwidth1 = 10+vol*100;
      var ringwidth2 = 20+vol*100;
      $(".ring-one").css('box-shadow', '0 0 0 '+ringwidth1+'px #1f445f');
      $(".ring-two").css('box-shadow', '0 0 0 '+ringwidth2+'px #3e92d2');
      window.clear_animation = setTimeout(reset_animation, 1000);
    } else {
      //console.log("%c"+vol, errorStyle);
    }
  }
  function reset_animation(){
    $(".ring-one, .ring-two").removeAttr("style");
    $(".ring-one").addClass('pulseone');
    $(".ring-two").addClass('pulsetwo');
  }

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audioCtx.createGain();
var mute = document.querySelector('.mute');
var source;

if (navigator.mediaDevices.getUserMedia) {
 navigator.mediaDevices.getUserMedia ({
       audio: true
     },function(stream) { // Success callback
       window.source = audioCtx.createMediaStreamSource(stream);
     },function(err) {// Error callback
       console.log('The following gUM error occured: ' + err);
     }
  );
} else {
   console.log('getUserMedia not supported on your browser!');
}

source.connect(gainNode);
gainNode.connect(audioCtx.destination);

mute.onclick = voiceMute;

function voiceMute() {
  if(mute.id == "") {
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    mute.id = "";
    mute.innerHTML = "Mute";
  }
}
