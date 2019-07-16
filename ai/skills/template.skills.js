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
    var jessica = new jessica();

    // DEFINE SKILL

    // COMBINE AND RETURN ALL COMMANDS
    var commands = $.extend();
    return commands;
});