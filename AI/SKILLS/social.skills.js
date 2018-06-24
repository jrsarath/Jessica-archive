var thanks = {'thank you':thankYou};
function thankYou(){
  var res = ['You are welcome '+user, 'No problem '+user, 'my pleasure '+user, 'Mention Not', 'You are welcome', 'No problem', 'my pleasure'];
  speak(res.response());
}
jessica.addCommands(thanks);
