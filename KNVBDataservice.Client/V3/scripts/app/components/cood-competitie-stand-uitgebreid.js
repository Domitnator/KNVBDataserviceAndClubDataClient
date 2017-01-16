define(["knockout", "app/proxy", "app/common"], function (ko, proxy, common) {

    function vmClubprogramma(params) {
        var self = this;

        self.options = params.options;
        self.teamid = params.teamid;
        self.district = params.district;
        self.compid = params.compid;
        self.classid = params.classid;
        self.pouleid = params.pouleid;
        self.sessionId = params.sessionId;

        self.results = ko.observableArray([]);
        self.loading = ko.observable(true);
       
        if (self.sessionId() !== "") {
            var sessionsId = self.sessionId();
            activate(sessionsId);
        }

        function activate(sessionid) {
            
            proxy.getCompetitionResults(sessionid, self.teamid, self.district, self.compid, self.classid, self.pouleid, self.options ? self.options.filter : "").then(function (resp) {
                var objMatches = ko.utils.parseJson(resp);

                if (objMatches && objMatches.List) {
                    //debugger;
                    var thuisresults = common.groupBy(objMatches.List, function (item) {
                        return [item.ThuisClubNummer];
                    });
                    
                    ko.utils.arrayForEach(thuisresults, function (o) {
                        console.log(o);
                    });
                }

                self.loading(false);

            });



        }

    }

    return vmClubprogramma;
});