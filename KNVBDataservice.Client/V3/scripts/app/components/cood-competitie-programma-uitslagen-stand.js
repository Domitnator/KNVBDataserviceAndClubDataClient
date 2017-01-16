define(["knockout", "app/proxy"], function (ko, proxy) {

    function vm(params) {
        var self = this;

        self.activeTab = ko.observable('stand');

        self.programmaOptions = params.programmaOptions;
        self.uitslagenOptions = params.uitslagenOptions;
        self.standOptions = params.standOptions;

        self.teamid = params.teamid;
        self.district = params.district;
        self.compid = params.compid;
        self.classid = params.classid;
        self.pouleid = params.pouleid;
        self.sessionId = params.sessionId;

        self.rankings = ko.observableArray([]);
        self.loading = ko.observable(true);
       
        self.changeActiveTab = function changeActiveTab(tab) {
            self.activeTab(tab);
        }

    }

    return vm;
});