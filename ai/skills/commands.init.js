require.config({
    paths: {
        // MAIN CLASS
        'jessica': '/ai/dependencies/jessica',
        // SKILLS
        'clock': '/ai/skills/clock.skills',
        'social': '/ai/skills/social.skills'
    }
});
require([
    'jessica',
    'clock',
    'social'
], function (
    jessica, 
    clock, 
    social
) {
    var jessica = new Jessica();
    var commands = $.extend(clock, social);

    // ADD BOOTSTRAPPED COMMANDS
    jessica.engine().addCommands(commands); 
});