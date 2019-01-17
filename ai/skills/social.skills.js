require.config({
  paths: {
    // VENDOR DEPENDENCIES
    'jQuery': '/ai/vendor/jquery-3.3.1.min',
    'titania': '/ai/dependencies/titania'
  },
  shim: {
    'jQuery': {
      exports: '$'
    }
  }
});
define(['jQuery', 'titania'], function ($, titania) {
  var titania = new Titania();
  
  // DEFINE SKILL
  var thanks = {
    'thank you': thankYou
  };

  function thankYou() {
    var res = ['You are welcome ' + user, 'No problem ' + user, 'my pleasure ' + user, 'Mention Not', 'You are welcome', 'No problem', 'my pleasure'];
    titania.speak(res);
  }

  return social = thanks;
});