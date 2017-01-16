define(["knockout", "app/proxy", "app/models/match", "app/teamFilter"], function (ko, proxy, Match, teamFilter) {

    function vmClubprogramma(params) {
        var self = this;
        self.options = params.options;
        self.sessionId = params.sessionId;

        self.programma = ko.observableArray([]);
        self.csvTeamids = params.options && params.options.csvTeamIds || '';
        self.reverseOrder = params.options && params.options.reverseOrder || false;
        self.loading = ko.observable(true);
        
        if (self.sessionId() !== "") {
            var sessionsId = self.sessionId();
            activate(sessionsId);
        }

        function activate(sessionid) {
            proxy.getMatches(sessionid, self.options ? self.options.filter : "").then(function (resp) {
                var objMatches = ko.utils.parseJson(resp);

                if (objMatches && objMatches.List) {
                    var list = null;
                    if (self.csvTeamids) {
                        list = teamFilter.filterMatches(self.csvTeamids, objMatches.List)
                    }
                    else {
                        list = objMatches.List;
                    }

                    if (self.reverseOrder)
                        list.reverse();

                    ko.utils.arrayForEach(list, function (item) {
                        self.programma.push(new Match(item));
                    });
                }
                self.loading(false);

            });
        }

    }

    return vmClubprogramma;
});