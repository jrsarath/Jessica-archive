function init() {
  gapi.client.setApiKey("AIzaSyAwmta7h-g2U74ttKX2mg3Ns9ujgl_WyPo");
  gapi.client.load("youtube", "v3", function() {
      // yt api is ready
  });
}
//var searchMusic = {'search for *musicname':searchYoutube}
var searchMusicAndPlay = {'search and play *musicname':searchandplay}
var playMusic = {'play music':startPlayback}
var resumeMusic = {'resume music': resumePlayback, 'resume playing': resumePlayback}
var pauseMusic = {'pause music':pausePlayback, 'pause playing':pausePlayback}
var stopMusic = {'stop music':stopPlayback, 'stop playing':stopPlayback}
var whatsplaying = {"what's playing now": speakPlaying, "what's playing": speakPlaying}

function searchYoutube(musicname){
  var name = musicname;
  speak("Here is what i found");
}
function searchandplay(musicname){
  var name = musicname;
  searchplay(name);
}
function speakPlaying(){
  speak("currently playing "+$("#music-player").attr("data-title"));
}
function startPlayback(){
  speak("Playing "+$("#music-player").attr("data-title"));
  $('#music-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}
function pausePlayback(){
  speak("Music Paused.");
  $('#music-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
}
function resumePlayback(){
  speak("Resuming.");
  $('#music-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}
function stopPlayback(){
  speak("I stopped that");
  $('#music-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}

// YOUTUBE functions
function searchandplay(name){
  var request = gapi.client.youtube.search.list({
       part: "snippet",
       type: "video",
       q: encodeURIComponent(name).replace(/%20/g, "+"),
       maxResults: 3,
       order: "viewCount"
  });
  request.execute(function(response) {
     var results = response.result.items;
     console.log(results);
     $("#music-player").attr("src", "https://www.youtube.com/embed/"+results[0].id.videoId+"?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0&version=3&enablejsapi=1");
     $("#music-player").attr("data-title", results[0].snippet.title);
     /*$.each(results.items, function(index, item) {
       $.get("tpl/item.html", function(data) {
           $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
       });
     });*/
     speak("Playing "+results[0].snippet.title);
  });
}
//jessica.addCommands(searchMusic);
jessica.addCommands(searchMusicAndPlay);
jessica.addCommands(playMusic);
jessica.addCommands(pauseMusic);
jessica.addCommands(resumeMusic);
jessica.addCommands(stopMusic);
jessica.addCommands(whatsplaying);
