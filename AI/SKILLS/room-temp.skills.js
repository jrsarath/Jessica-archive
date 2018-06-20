var roomTemp = {'room temperature': getRoomTemp, 'room temp': getRoomTemp};
function getRoomTemp(){
    $.ajax({
      url: '../CORE/SYSTEM/TEMP/room-temp.php',
      type: 'GET',
      success: function(e){
        if (e == "Unable to read temperature!" || e == "No sensors found!") {
          speak("I was unable to get Room temperature");
        } else {
          var tempC = JSON.parse(e).celcius +" Degree celcius";
          var tempF = JSON.parse(e).fahrenheit +" Degree fahrenheit";
          if (tempUnit == "C") {
            var temp = tempC;
          } else if (tempUnit == "F") {
            var temp = tempF;
          }
          speak("currently, its "+temp)
        }
      }, error: function(e){
        speak("I was unable to get Room temperature")
      }
    });

}
jessica.addCommands(roomTemp);
