define(["knockout", "app/proxySportlink", "app/models/matchSportlink", "app/teamFilterSportlink"], function (ko, proxy, Match, teamFilter) {

    function vmClubprogramma(params) {
        var self = this;
        self.options = params.options;
        //self.clientId = params.sessionId;

        self.programma = ko.observableArray([]);
        self.csvTeamids = params.options && params.options.csvTeamIds || '';
        self.reverseOrder = params.options && params.options.reverseOrder || false;
        self.loading = ko.observable(true);
        
    
        activate();

        function activate() {
            proxy.getMatches(self.options ? self.options.filter : "").then(function (resp) {
                var objMatches = ko.utils.parseJson(resp);
                console.log(objMatches);
                if (objMatches) {
                    debugger;
                    var list = objMatches;

                    if (self.csvTeamids) {
                        list = teamFilter.filterMatches(self.csvTeamids, list)
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