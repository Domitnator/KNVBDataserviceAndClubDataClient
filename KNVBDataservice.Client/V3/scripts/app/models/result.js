define(["knockout", "moment", "komapping", "config", "app/common", "momentNl"], function (ko, moment, komapping, config, common) {
    moment.locale('nl');
    ko.mapping = komapping;

    var mapping = {
        'observe': [''] //All properties should not be observable
    }

    return function Result(result) {
        var self = this;
        
        //Map all properties
        ko.mapping.fromJS(result, mapping, self);

        //Append Tijd
        self.DatumMoment = common.createMomentDate(self.Datum, self.Tijd);
        self.Tijd = self.Tijd.slice(0, 2) + ':' + self.Tijd.slice(2);
        self.Wedstrijd = common.createWedtrijd(self.ThuisClub, self.UitClub, config.clubname);
        self.IsAfgelast = common.createIsAfgelast(self.Bijzonderheden);
        self.Uitslag = common.createUitslag(self.PuntenTeam1, self.PuntenTeam2, self.IsAfgelast);
        self.Datum = self.DatumMoment.format('ddd DD MMM');
        self.DatumVolledig = self.DatumMoment.format('DD-MM-YYYY HH:mm');
        self.CompetitieTypeNaam = common.createCompetitieTypeNaam(self.CompType);
    }
});