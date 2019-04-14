require.config({
    paths: {
        // VENDOR DEPENDENCIES
        'jQuery': '/ai/vendor/jquery.min',
        'moment': '/ai/vendor/moment.min',
        // MAIN SCRIPT
        'elisa': '/ai/dependencies/elisa',
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
    'elisa', 
    'commands'
], function ($, moment, titania, commands) {

    // INITIAL SETUP
    var elisa = new Elisa();
    elisa.engine().setLanguage("en-US");
    elisa.engine().debug(true);
    // ADD COMMANDS TO ENGINE
    //elisa.engine().addCommands(commands);
    // START STT ENGINE
    elisa.engine().start();
});