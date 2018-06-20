var clearConsole = {'Clear console': clearConsoleLog};
function clearConsoleLog(){
  console.clear();
  speak("Console Cleared")
}
jessica.addCommands(clearConsole);
