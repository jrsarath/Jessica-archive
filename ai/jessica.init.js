require.config({
    paths: {
        // VENDOR DEPENDENCIES
        'jQuery': '/ai/vendor/jquery.min',
        'moment': '/ai/vendor/moment.min',
        // MAIN SCRIPT
        'jessica': '/ai/dependencies/jessica',
        // COMMANDS
        'commands': '/ai/skills/commands.init'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});
require([
    'jQuery',
    'jessica', 
    'commands'
], function ($, moment, jessica, commands) {

    // INITIAL SETUP
    var jessica = new Jessica();
    jessica.engine().setLanguage("en-US");
    jessica.engine().debug(true);
    // ADD COMMANDS TO ENGINE
    //jessica.engine().addCommands(commands);
    // START STT ENGINE
    jessica.engine().start();
});