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

    // COMBINE AND RETURN ALL COMMANDS
    var commands = $.extend();
    return commands;
});