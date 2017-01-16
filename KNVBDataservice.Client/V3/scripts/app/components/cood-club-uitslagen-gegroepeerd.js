define(["knockout", "app/common", "app/proxy", "app/models/matchGrouped", "app/teamFilter", "app/resultFilter"], function (ko, common, proxy, MatchGrouped, teamFilter, resultFilter) {

    function vmClubprogramma(params) {
        var self = this;
        self.options = params.options;
        self.sessionId = params.sessionId;

        self.programmaGrouped = ko.observableArray([]);
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

                    list = resultFilter.filterMatches(list);

                    var result = common.groupBy(list, function (item) {
                        return [item.Datum];
                    });

                    if (!self.csvTeamids && self.reverseOrder)
                        result.reverse();

                    ko.utils.arrayForEach(result, function (o) {
                        self.programmaGrouped.push(new MatchGrouped(o[0].Datum, o));
                    });

                    //Sort on date if csvTeamIds are given
                    if (self.csvTeamids) {
                        self.programmaGrouped().sort(common.sortByDate);

                        if (self.reverseOrder) {
                            self.programmaGrouped.reverse();
                        }

                        self.programmaGrouped.valueHasMutated();
                    }
                }

                self.loading(false);

            });
        }

    }

    return vmClubprogramma;
});