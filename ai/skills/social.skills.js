require.config({
  paths: {
    // VENDOR DEPENDENCIES
    'jQuery': '/ai/vendor/jquery-3.3.1.min',
    'jessica': '/ai/dependencies/jessica'
  },
  shim: {
    'jQuery': {
      exports: '$'
    }
  }
});
define(['jQuery', 'jessica'], function ($, jessica) {
  var jessica = new Jessica();
  
  // DEFINE SKILL
  var thanks = {
    'thank you': thankYou
  };

  function thankYou() {
    var res = ['You are welcome ' + user, 'No problem ' + user, 'my pleasure ' + user, 'Mention Not', 'You are welcome', 'No problem', 'my pleasure'];
    jessica.speak(res);
  }

  return social = thanks;
});