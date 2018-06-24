function momentTime(){
  window.timeNow = moment().format('h:mm a');
  window.weekDay = moment().format('dddd');
  window.date = moment().format('MMMM Do YYYY');
} setInterval(momentTime, 1000);
var clock = {'time please': sayClock};
function sayClock(){
  var res = ["the time is "+window.timeNow, "its "+window.timeNow, "it's currently "+window.timeNow];
  speak(res.response());
}
var weekDayToday = {'what day it is': sayWeekDay};
function sayWeekDay(){
  var res = ["its "+window.weekDay+" today", "its "+window.weekDay];
  speak(res.response());
}
var dateToday = {'what date it is': sayDate};
function sayDate(){
  speak("its "+window.date+" today");
}
jessica.addCommands(clock);
jessica.addCommands(weekDayToday);
jessica.addCommands(dateToday);
