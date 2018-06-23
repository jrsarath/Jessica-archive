var volAsWish = {'set volume to *vol%': setVolumeToWish}
function setVolumeToWish(vol){
  player.setVolume(vol);
  speak("Volume set to "+vol+"%");
}
var mute = {'mute': muteThis}
function muteThis(){
  if (player.isMuted() == false) {
    player.mute();
    speak("muted");
  } else {
    speak("Already muted");
  }
}
var unmute = {'unmute': unmuteThis}
function unmuteThis() {
  if (player.isMuted() == true) {
    player.unMute();
    speak("unmuted");
  } else {
    speak("volume is already on");
  }
}

jessica.addCommands(volAsWish);
jessica.addCommands(mute);
jessica.addCommands(unmute);
