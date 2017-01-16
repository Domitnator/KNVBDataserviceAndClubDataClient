define(["knockout", "app/proxy"], function (ko, proxy) {

    function vmClubprogramma(params) {
        var self = this;
        self.sessionId = params.sessionId;
        self.teams = ko.observableArray([]);
        self.loading = ko.observable(true);
       
        if (self.sessionId() !== "") {
            var sessionsId = self.sessionId();
            activate(sessionsId);
        }

        function activate(sessionid) {
            proxy.getTeams(sessionid).then(function (resp) {
                var objTeams = ko.utils.parseJson(resp);

                self.teams(objTeams.List);

                self.loading(false);

            });
        }

    }

    return vmClubprogramma;
});