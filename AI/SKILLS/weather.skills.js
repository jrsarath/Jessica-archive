var weather_now = {"what's the weather like": weatherNow};
function weatherNow(){
  $.simpleWeather({
    location: baseLocation,
    //woeid: '', // use woeid if normal text location doesnt works
    unit: tempUnit,
    success: function(weather) {
      speak("It's currently "+weather.temp+" degree at "+weather.city);
    },
    error: function(error) {
      speak("I was unable to look for weather data");
    }
  });
}
jessica.addCommands(weather_now);
