require.config({
  paths: {
    // VENDOR DEPENDENCIES
    'titania': '/ai/dependencies/titania',
    'simple_weather': '/ai/vendor/simple-weather'
  }
});
require(['titania', 'simple_weather'], function (titania, weather) {
  var weather_now = {
    "what's the weather like": weatherNow
  };
  function weatherNow() {
    $.simpleWeather({
      location: baseLocation,
      //woeid: '', // use woeid if normal text location doesnt works
      unit: tempUnit,
      success: function (weather) {
        speak("It's currently " + weather.temp + " degree at " + weather.city);
      },
      error: function (error) {
        speak("I was unable to look for weather data");
      }
    });
  }
  titania.addCommands(weather_now);
});

