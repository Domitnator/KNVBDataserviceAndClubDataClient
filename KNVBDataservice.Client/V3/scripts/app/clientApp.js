/// <reference path="proxy.js" />
define(["knockout", "moment", "config", "app/componentLoader", "app/componentLoaderSportlink",
//Component shims
'app/components/cood-club-competities',
'text!app/templates/cood-club-competities.tmpl.html',

'app/components/cood-competitie-programma',
'text!app/templates/cood-competitie-programma.tmpl.html',

'app/components/cood-competitie-uitslagen',
'text!app/templates/cood-competitie-uitslagen.tmpl.html',

'app/components/cood-competitie-stand',
'text!app/templates/cood-competitie-stand.tmpl.html',

'app/components/cood-competitie-programma-uitslagen-stand',
'text!app/templates/cood-competitie-programma-uitslagen-stand.tmpl.html',

'app/components/cood-club-teams',
'text!app/templates/cood-club-teams.tmpl.html',

'app/components/cood-club-programma',
'text!app/templates/cood-club-programma.tmpl.html',

'app/components/cood-club-programma-gegroepeerd',
'text!app/templates/cood-club-programma-gegroepeerd.tmpl.html',

'app/components/cood-club-uitslagen',
'text!app/templates/cood-club-uitslagen.tmpl.html',

'app/components/cood-club-uitslagen-gegroepeerd',
'text!app/templates/cood-club-uitslagen-gegroepeerd.tmpl.html',

'app/components/cood-competitie-stand-uitgebreid',
'text!app/templates/cood-competitie-stand-uitgebreid.tmpl.html',

// Sportlink

'app/components/cood-club-programma',
'text!app/templates/cood-club-programma.tmpl.html',
], function (ko, moment, config, componentLoader, componentLoaderSportlink) {
    'use strict';

    var application = function () {
        var self = this;
        self.currentWeekNumber = moment().week();
        self.sessionId = ko.observable('');
        if (config.sportlinkClientId && config.sportlinkClientId !== '') {
            self.sessionId(config.sportlinkClientId);
            componentLoaderSportlink.load();
        }
        else {
            var sessionIdCallback = function (sessionid) {
                self.sessionId(sessionid);
            }
            componentLoader.load(sessionIdCallback);
        }
    }

    return application;
});