define(["knockout", "moment", "komapping", "config", "app/common"], function (ko, moment, komapping, config, common) {
    ko.mapping = komapping;

    var mapping = {
        'observe': [''] //All properties should not be observable
    }

    return function Match(match) {
        var self = this;

        //Map all properties
        ko.mapping.fromJS(match, mapping, self);

        self.naam = common.createRankingName(self.naam, config.clubname);
    }
});