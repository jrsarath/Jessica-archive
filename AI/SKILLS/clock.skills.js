window.onload = function(){
  include([
    'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js'
  ], function(){
    function momentTime(){
      window.timeNow = moment().format('h:mm a');
    }
    setInterval(momentTime, 1000);
  });
  var clock = {'time please': sayClock};
  function sayClock(){
    jessicaVoice.speak("the time is "+window.timeNow)
  }
  jessica.addCommands(clock);
};
