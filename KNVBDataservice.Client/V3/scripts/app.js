require(['config'], function (config) {
   
    requirejs.config({
        baseUrl: 'scripts',
        paths: {
            config: 'config',
            knockout: 'lib/knockout-3.4.0',
            komapping: "lib/knockout.mapping",
            reqwest: 'lib/reqwest.min',
            moment: "lib/moment",
            knockoutAmdHelpers: "lib/knockout-amd-helpers.min",
            momentNl: "lib/moment.nl",
            text: "lib/text",
            startswith: "lib/startswith"
        },
        shim: {
            komapping: {
                deps: ['knockout'],
                exports: 'komapping'
            }
        }
    });

    requirejs(['app/main']);
});