<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Hi I'm Jessica</title>
    <style>
        * {
          font-family: Helvatica;
          background: #292929;
          }
          body {
            position: fixed;
            height: 100%;
            width: 100%;
          }
          .flex {
            display: flex;
            justify-content: center;
            vertical-align: middle;
            height: inherit;
            align-content: center;
            align-items: center;
            flex-direction: column;
          }
          h2 {
            z-index: 99;
            color: #fff;
            font-family: sans-serif;
            text-align: center;
          }
          .ring-container{
            padding:40px;
            position:relative;
            height:100px;
            width:100px;
          }
          .ring-one {
            position:absolute;
            top:50px;
            left:50px;
            border-radius: 50%;
            box-shadow: 0 0 0 10px #3e92d2;
            height:80px;
            width:80px;
            z-index:5;
          }
          .ring-two {
            position:absolute;
            border-radius: 50%;
            box-shadow: 0 0 0 20px #1f445f;
            height:100px;
            width:100px;
          }
          .pulseone{
            animation: pulse 2s infinite ease-in-out alternate;
          }
          .pulsetwo {
            animation: pulse_two 2s infinite ease-in-out alternate;
          }
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 20px #3e92d2;
            }
            100% {
              box-shadow: 0 0 0 10px #3e92d2;
            }
          }
          @keyframes pulse_two {
            0% {
              box-shadow: 0 0 0 20px #1f445f;
            }
            100% {
              box-shadow: 0 0 0 25px #1f445f;
            }
          }
          .flip {
            animation: flip 2s infinite;
          }
          @keyframes flip{
            0%{
              -webkit-transform: rotateY(180deg);
              -moz-transform: rotateY(180deg);
              -o-transform: rotateY(180deg);
              transform: rotateY(180deg);
            }
            40%{
              -webkit-transform: rotateY(180deg);
              -moz-transform: rotateY(180deg);
              -o-transform: rotateY(180deg);
              transform: rotateY(180deg);
            }
          }
          .fliptwo {
          animation: fliptwo 2s infinite ease-out;
          }
          @keyframes fliptwo{
          20%{
            -webkit-transform: rotateY(180deg);
            -moz-transform: rotateY(180deg);
            -o-transform: rotateY(180deg);
            transform: rotateY(180deg);
          }
          60%{
            -webkit-transform: rotateY(180deg);
            -moz-transform: rotateY(180deg);
            -o-transform: rotateY(180deg);
            transform: rotateY(180deg);
          }
          }
    </style>
  </head>
  <body>

    <div id="music-player" style="display:none;"></div>

    <div class="flex" >
      <div class="ring-container">
          <div class="ring-one pulseone"></div>
          <div class="ring-two pulsetwo"></div>
      </div>
      <h2>Hi I'm Jessica</h2>
    </div>
    <script src="../CORE/PUBLIC/DEPENDENCIES/VENDOR/jquery.min.js" charset="utf-8"></script>
    <script src="../CORE/PUBLIC/DEPENDENCIES/VENDOR/firebase.min.js" charset="utf-8"></script>
    <script src="../CORE/PUBLIC/DEPENDENCIES/VENDOR/moment.min.js" charset="utf-8"></script>
    <script src="../CORE/PUBLIC/DEPENDENCIES/VENDOR/weather.js" charset="utf-8"></script>
    <script src="../CORE/PUBLIC/DEPENDENCIES/VENDOR/p5.js" charset="utf-8"></script>
    <script src="../CORE/PUBLIC/DEPENDENCIES/VENDOR/p5.sound.js" charset="utf-8"></script>
    <script src="https://www.youtube.com/iframe_api"></script>
    <script src="../AI/jessica.init.php" charset="utf-8"></script>
    <script src="https://apis.google.com/js/client.js?onload=init"></script>
    <script src="test.js" charset="utf-8"></script>
    <script type="text/javascript">
      var quotes = [
          "Say : Play 'Any song name'",
          "Ask : time please",
          "Ask : what day it is",
          //"Music Control : mute, unmute, set volume to 'desired number' percent pause music, resume music",
          "Ask : what date it is"
        ];
        setInterval(function() {
          var whichquote = quotes[Math.floor(Math.random() * quotes.length)];
          $("h2").html(whichquote)
        }, 3000);
    </script>
  </body>
</html>
