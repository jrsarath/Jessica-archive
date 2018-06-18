window.onload = function(){
  var clock = {'time please': sayClock};
  function sayClock(){
    jessicaVoice.speak("Time is")
  }
  jessica.addCommands(clock);
};
