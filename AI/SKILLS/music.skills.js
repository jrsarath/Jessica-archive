// init youtube player
var player;
var playlist = [];
var previousIndex = 0;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('music-player', {
      disablekb:1,
      rel:0,
      events: {
        onStateChange: function(event) {
          if(event.data == -1 || event.data == 0) {
            var index = player.getPlaylistIndex();
            if(player.getPlaylist().length != playlist.length) {
              player.loadPlaylist(playlist, previousIndex+1);
            }
            previousIndex = index;
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
  searchplay(name);
}
var whatsplaying = {"what's playing now": speakPlaying, "what's playing": speakPlaying};
function speakPlaying(){
  if (player.getPlayerState() == 2 || player.getPlayerState() == 1 || player.getPlayerState() == -1) {
    speak("currently playing "+$("#music-player").attr("data-title"));
  } else {
    speak("No song is being played");
  }
}
var playMusic = {'play music':startPlayback};
function startPlayback(){
  speak("Playing "+$("#music-player").attr("data-title"));
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

// YOUTUBE functions
function searchandplay(name){ // youtube direct play
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
       player.loadPlaylist(playlist);
       $("#music-player").attr("data-title", youtubeSearchResults[0].snippet.title);
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
       playlist = [];
       playlist.push(youtubeSearchResults[1].id.videoId);
       player.loadPlaylist(playlist);
    }
  }, 2000);
  setTimeout(function() {
    if (player.getPlayerState() == -1) {
       playlist = [];
       playlist.push(youtubeSearchResults[2].id.videoId);
       player.loadPlaylist(playlist);
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
jessica.addCommands(queMusic);
