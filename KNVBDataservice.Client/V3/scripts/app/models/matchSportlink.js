define(["knockout", "moment", "komapping", "config", "app/common", "momentNl"], function (ko, moment, komapping, config, common) {
    moment.locale('nl');
    ko.mapping = komapping;

    var mapping = {
        'observe': [''] //All properties should not be observable
    }

    return function Match(match) {
        var self = this;
        
        //Map all properties
        ko.mapping.fromJS(match, mapping, self);

        //Create custom properties
        self._datumMoment = moment(self.wedstrijddatum);
        self._wedstrijd = common.createWedtrijd(self.thuisteam, self.uitteam, config.clubname);
        self._isAfgelast = common.createIsAfgelast(self.status);
        self._uitslag = common.createUitslag(self.PuntenTeam1, self.PuntenTeam2, self._isAfgelast);
        self._datum = self._datumMoment.format('ddd DD MMM');
        self._datumVolledig = self._datumMoment.format('DD-MM-YYYY HH:mm');
        self._competitieafkorting = common.getCompetitieAfkorting(self.competitiesoort);
    }
});