require.config({
    paths: {
        // MAIN CLASS
        'titania': '/ai/dependencies/titania',
        // SKILLS
        'clock': '/ai/skills/clock.skills',
        'social': '/ai/skills/social.skills'
    }
});
require([
    'titania',
    'clock',
    'social'
], function (
    titania, 
    clock, 
    social
) {
    var titania = new Titania();
    var commands = $.extend(clock, social);

    // ADD BOOTSTRAPPED COMMANDS
    titania.engine().addCommands(commands); 
});