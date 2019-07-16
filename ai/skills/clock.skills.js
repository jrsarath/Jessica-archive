require.config({
  paths: {
    // VENDOR DEPENDENCIES
    'jQuery': '/ai/vendor/jquery-3.3.1.min',
    'jessica': '/ai/dependencies/jessica',
    'moment': '/ai/vendor/moment.min'
  },
  shim: {
    'jQuery': {
      exports: '$'
    }
  }
});
define(['jQuery', 'jessica', 'moment'], function ($, jessica, moment) {
      var jessica = new Jessica();
      // TIME
      function momentTime() {
        window.timeNow = moment().format('h:mm a');
        window.weekDay = moment().format('dddd');
        window.date = moment().format('MMMM Do YYYY');
      }
      setInterval(momentTime, 1000);
      var clock = {
        'time please': sayClock
      };

      function sayClock() {
        var res = ["the time is " + window.timeNow, "its " + window.timeNow, "it's currently " + window.timeNow];
        jessica.speak(res);
      }

      // WEEK DAY
      var weekDayToday = {
        'what day it is': sayWeekDay
      };

      function sayWeekDay() {
        var res = ["its " + window.weekDay + " today", "its " + window.weekDay];
        jessica.speak(res);
      }

      // DATE
      var dateToday = {
        'what date it is': sayDate
      };

      function sayDate() {
        jessica.speak("its " + window.date + " today");
      }
    // COMBINE AND RETURN ALL COMMANDS
    var commands = $.extend(clock, weekDayToday, dateToday);
    return commands;
});