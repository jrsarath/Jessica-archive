var clearConsole = {'Clear console': clearConsoleLog, 'clear the console': clearConsoleLog,'Clear the console please': clearConsoleLog};
function clearConsoleLog(){
  console.clear();
  speak("Console Cleared")
}
var reloadSelf = {'reload yourself': reload};
function reload(){
  speak("Reloading.");
  location.reload();
}
jessica.addCommands(clearConsole);
jessica.addCommands(reloadSelf);
