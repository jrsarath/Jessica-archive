function init() {
  gapi.client.setApiKey("AIzaSyAwmta7h-g2U74ttKX2mg3Ns9ujgl_WyPo");
  gapi.client.load("youtube", "v3", function() {
      // yt api is ready
  });
}
var searchMusic = {'search for *musicname':searchYoutube}
var playMusic = {'play music':startPlayback}
var pauseMusic = {'pause music':pausePlayback}
var stopMusic = {'stop music':stopPlayback}
function searchYoutube(musicname){
  var name = musicname;
  speak("Here is what i found");
  search(name);
}
function startPlayback(){
  speak("Playing "+$("#music-player").attr("data-title"));
  $('#music-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}
function pausePlayback(){
  speak("Paused.");
  $('#music-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
}
function stopPlayback(){
  speak("I stopped that");
  $('#music-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}
function search(name){
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
     $("#music-player").attr("src", "https://www.youtube.com/embed/"+results[0].id.videoId+"?rel=0&amp;controls=0&amp;showinfo=0&version=3&enablejsapi=1");
     $("#music-player").attr("data-title", results[0].snippet.title);
     /*$.each(results.items, function(index, item) {
       $.get("tpl/item.html", function(data) {
           $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
       });
     });*/
  });
}
jessica.addCommands(searchMusic);
jessica.addCommands(playMusic);
jessica.addCommands(pauseMusic);
jessica.addCommands(stopMusic);
