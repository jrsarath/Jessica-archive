var clearConsole = {'Clear console': clearConsoleLog, 'clear the console': clearConsoleLog,'Clear the console please': clearConsoleLog};
function clearConsoleLog(){
  console.clear();
  speak("Console Cleared")
}
jessica.addCommands(clearConsole);
