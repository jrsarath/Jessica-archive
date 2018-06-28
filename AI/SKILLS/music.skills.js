// init youtube player
var player;
var playlist = [];
var prevPlaylist = [];
function onYouTubeIframeAPIReady() {
    player = new YT.Player('music-player', {
      disablekb:1,
      rel:0,
      events: {
        onStateChange: function(event) {
          if(event.data == 0) {
            console.log("Video ended");
            if (playlist.length > 1) {
              doNext();
            } if (playlist.length == 1) {
              prevPlaylist.push(playlist[0]);
              playlist.shift();
            }
          }
       }
      }
    });
}
function init() {
  gapi.client.setApiKey("AIzaSyAwmta7h-g2U74ttKX2mg3Ns9ujgl_WyPo");
  gapi.client.load("youtube", "v3");
}
//var searchMusic = {'search for *musicname':searchYoutube}
var searchMusicAndPlay = {'search and play *musicname':searchandplay, 'play *musicname':searchandplay};
function searchYoutube(musicname){
  var name = musicname;
  speak("Here is what i found");
}
function searchandplay(musicname){
  var name = musicname;
  if (name == "music" || name == "next" || name == "previous") {
    if (name == "next") {
      if (playlist.length > 1) {
        doNext();
        setTimeout(function() {
          speak("Playing "+player.getVideoData().title);
        }, 1000);
      } else {
        speak("there are No songs in list");
      }
    }
    if (name == "previous") {
      if (prevPlaylist.length >= 1) {
        doPrev();
        setTimeout(function() {
          speak("Playing "+player.getVideoData().title);
        }, 1000);
      } else {
        speak("No songs were played earlier");
      }
    }
    if (name == "music") {

    }
  } else {
    speak("Okay");
    searchplay(name);
  }
}
var whatsplaying = {"what's playing now": speakPlaying, "what's playing": speakPlaying};
function speakPlaying(){
  if (player.getPlayerState() == 2 || player.getPlayerState() == 1 || player.getPlayerState() == -1) {
    speak("currently playing "+player.getVideoData().title);
  } else {
    speak("No song is being played");
  }
}
var playMusic = {'start playing':startPlayback};
function startPlayback(){
  speak("Playing "+player.getVideoData().title);
  player.playVideo();
}
var pauseMusic = {'pause music':pausePlayback, 'pause playing':pausePlayback};
function pausePlayback(){
  if (player.getPlayerState() == 1) {
    speak("Music Paused.");
    player.pauseVideo();
  } else {
    speak("Music isn't playing");
  }
}
var resumeMusic = {'resume music': resumePlayback, 'resume playing': resumePlayback};
function resumePlayback(){
  if (player.getPlayerState() == 2) {
    speak("Resuming.");
    player.playVideo();
  } else {
    speak("Music isn't paused");
  }
}
var stopMusic = {'stop music':stopPlayback, 'stop playing':stopPlayback};
function stopPlayback(){
  if (player.getPlayerState() == 2 || player.getPlayerState() == 1 || player.getPlayerState() == -1) {
    speak("I stopped that");
    player.stopVideo();
  } else {
    speak("Nothing to stop");
  }
}
var queMusic = {'add to list *musicname':addMusicToList};
function addMusicToList(musicname){
    var name = musicname;
    addtoque(name);
}
var nextSong = {'skip to next': playNext};
function playNext(){

}
var prevSong = {'': playPrev};
function playPrev(){

}
var clearList = {'Clear Playlist': clearPlaylist};
function clearPlaylist(){
  window.playlist = [];
  window.prevPlaylist = [];
  speak("Playlist cleared");
}
// YOUTUBE functions
function searchplay(name){ // youtube direct play
  //speak("Okay");
  var request = gapi.client.youtube.search.list({
       part: "snippet",
       type: "video",
       q: encodeURIComponent(name).replace(/%20/g, "+"),
       maxResults: 3,
       order: "relevance"
  });
  request.execute(function(response) {
     var youtubeSearchResults = response.result.items;
     console.log(youtubeSearchResults);
     if (playlist.length == 0) {
       // define first play cmd
       playlist.push(youtubeSearchResults[0].id.videoId);
       player.loadVideoById(playlist[0]);
       speak("Playing "+youtubeSearchResults[0].snippet.title);
       fallbackPlay(youtubeSearchResults);
     } else {
       // define add to list cmd
       playlist.push(youtubeSearchResults[0].id.videoId);
       speak("adding "+youtubeSearchResults[0].snippet.title+" to the list");
     }
  });
}
function addtoque(name){ // youtube add to list
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
     playlist.push(youtubeSearchResults[0].id.videoId);
     speak("adding "+youtubeSearchResults[0].snippet.title+" to the list");
  });
}
function fallbackPlay(youtubeSearchResults){
  setTimeout(function() {
    if (player.getPlayerState() == -1) {
       playlist.splice(playlist.indexOf(youtubeSearchResults[0].id.videoId), 1);
       playlist.push(youtubeSearchResults[1].id.videoId);
       player.loadVideoById(playlist[0]);
    }
  }, 2000);
  setTimeout(function() {
    if (player.getPlayerState() == -1) {
       playlist.splice(playlist.indexOf(youtubeSearchResults[1].id.videoId), 1);
       playlist.push(youtubeSearchResults[2].id.videoId);
       player.loadVideoById(playlist[0]);
    }
  }, 5000);
}
function doNext(){
  prevPlaylist.push(playlist[0]);
  playlist.shift();
  player.loadVideoById(playlist[0]);
}
function doPrev(){
  playlist.unshift(prevPlaylist[prevPlaylist.length-1]);
  prevPlaylist.pop();
  player.loadVideoById(playlist[0]);
}
// END YOUTUBE functions

//jessica.addCommands(searchMusic);
jessica.addCommands(searchMusicAndPlay);
jessica.addCommands(playMusic);
jessica.addCommands(pauseMusic);
jessica.addCommands(resumeMusic);
jessica.addCommands(stopMusic);
jessica.addCommands(whatsplaying);
jessica.addCommands(queMusic);
jessica.addCommands(nextSong);
jessica.addCommands(prevSong);
jessica.addCommands(clearList);
