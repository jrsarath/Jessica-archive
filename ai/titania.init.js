require.config({
    paths: {
        // VENDOR DEPENDENCIES
        'jQuery': '/ai/vendor/jquery.min',
        'moment': '/ai/vendor/moment.min',
        // MAIN SCRIPT
        'titania': '/ai/dependencies/titania',
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
    'titania', 
    'commands'
], function ($, moment, titania, commands) {

    // INITIAL SETUP
    var titania = new Titania();
    titania.engine().setLanguage("en-US");
    titania.engine().debug(true);
    // ADD COMMANDS TO ENGINE
    //titania.engine().addCommands(commands);
    // START STT ENGINE
    titania.engine().start();
});