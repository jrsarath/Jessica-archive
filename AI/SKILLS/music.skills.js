// init youtube player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('music-player');
}

function init() {
  gapi.client.setApiKey("AIzaSyAwmta7h-g2U74ttKX2mg3Ns9ujgl_WyPo");
  gapi.client.load("youtube", "v3");
}
//var searchMusic = {'search for *musicname':searchYoutube}
var searchMusicAndPlay = {'search and play *musicname':searchandplay, 'play *musicname':searchandplay};
var playMusic = {'play music':startPlayback};
var resumeMusic = {'resume music': resumePlayback, 'resume playing': resumePlayback};
var pauseMusic = {'pause music':pausePlayback, 'pause playing':pausePlayback};
var stopMusic = {'stop music':stopPlayback, 'stop playing':stopPlayback};
var whatsplaying = {"what's playing now": speakPlaying, "what's playing": speakPlaying};

function searchYoutube(musicname){
  var name = musicname;
  speak("Here is what i found");
}
function searchandplay(musicname){
  var name = musicname;
  searchplay(name);
}
function speakPlaying(){
  if (player.getPlayerState() == 2 || player.getPlayerState() == 1 || player.getPlayerState() == -1) {
    speak("currently playing "+$("#music-player").attr("data-title"));
  } else {
    speak("No song is being played");
  }
}
function startPlayback(){
  speak("Playing "+$("#music-player").attr("data-title"));
  player.playVideo();
}
function pausePlayback(){
  if (player.getPlayerState() == 1) {
    speak("Music Paused.");
    player.pauseVideo();
  } else {
    speak("Music isn't playing");
  }
}
function resumePlayback(){
  if (player.getPlayerState() == 2) {
    speak("Resuming.");
    player.playVideo();
  } else {
    speak("Music isn't paused");
  }
}
function stopPlayback(){
  if (player.getPlayerState() == 2 || player.getPlayerState() == 1 || player.getPlayerState() == -1) {
    speak("I stopped that");
    player.stopVideo();
  } else {
    speak("Nothing to stop");
  }
}

// YOUTUBE functions
function searchandplay(name){
  //speak("Okay");
  var request = gapi.client.youtube.search.list({
       part: "snippet",
       type: "video",
       q: encodeURIComponent(name).replace(/%20/g, "+"),
       maxResults: 3,
       order: "relevance"
  });
  request.execute(function(response) {
     window.youtubeSearchResults = response.result.items;
     console.log(youtubeSearchResults);
     player.loadVideoById(youtubeSearchResults[0].id.videoId);
     $("#music-player").attr("data-title", youtubeSearchResults[0].snippet.title);
     speak("Playing "+youtubeSearchResults[0].snippet.title);
  });
  setTimeout(function() {
    if (player.getPlayerState() == -1) {
       player.loadVideoById(youtubeSearchResults[1].id.videoId);
    }
  }, 2000);
  setTimeout(function() {
    if (player.getPlayerState() == -1) {
       player.loadVideoById(youtubeSearchResults[2].id.videoId);
    }
  }, 5000);
}
//jessica.addCommands(searchMusic);
jessica.addCommands(searchMusicAndPlay);
jessica.addCommands(playMusic);
jessica.addCommands(pauseMusic);
jessica.addCommands(resumeMusic);
jessica.addCommands(stopMusic);
jessica.addCommands(whatsplaying);
