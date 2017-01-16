define(["knockout", "moment", "app/models/match", "momentNl"], function (ko, moment, Match) {
    moment.locale('nl');


    return function MatchGrouped(datetime, matches) {
        var self = this;
        
        self.Datum = datetime;
        self.DatumFriendly = moment(datetime, "YYYY-MM-DD").format('dddd DD MMMM');
        self.Matches = ko.observableArray([]);

        ko.utils.arrayForEach(matches, function (item) {
            self.Matches.push(new Match(item));
        });
    }
});