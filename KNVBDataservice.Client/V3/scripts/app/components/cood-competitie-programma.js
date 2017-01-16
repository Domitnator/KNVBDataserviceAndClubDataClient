define(["knockout", "app/proxy", "app/models/match"], function (ko, proxy, Match) {

    function vmClubprogramma(params) {
        var self = this;

        self.options = params.options;
        self.teamid = params.teamid;
        self.district = params.district;
        self.compid = params.compid;
        self.classid = params.classid;
        self.pouleid = params.pouleid;
        self.sessionId = params.sessionId;

        self.programma = ko.observableArray([]);
        self.loading = ko.observable(true);
       
        if (self.sessionId() !== "") {
            var sessionsId = self.sessionId();
            activate(sessionsId);
        }

        function activate(sessionid) {
           
            proxy.getCompetitionSchedule(sessionid, self.teamid, self.district, self.compid, self.classid, self.pouleid, self.options ? self.options.filter : "").then(function (resp) {
                var objMatches = ko.utils.parseJson(resp);

                if (objMatches && objMatches.List) {
                    ko.utils.arrayForEach(objMatches.List, function (item) {
                        self.programma.push(new Match(item));
                    });
                }
                self.loading(false);

            });
        }

    }

    return vmClubprogramma;
});