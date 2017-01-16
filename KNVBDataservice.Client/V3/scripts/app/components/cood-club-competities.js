define(["knockout", "app/proxy"], function (ko, proxy) {

    function vmClubprogramma(params) {
        var self = this;
        self.sessionId = params.sessionId;
        self.competities = ko.observableArray([]);
        self.loading = ko.observable(true);
       
        if (self.sessionId() !== "") {
            var sessionsId = self.sessionId();
            activate(sessionsId);
        }

        function activate(sessionid) {
            proxy.getCompetities(sessionid).then(function (resp) {
                var objCompetities = ko.utils.parseJson(resp);

                self.competities(objCompetities.List);

                self.loading(false);

            });
        }

    }

    return vmClubprogramma;
});