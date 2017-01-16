define(["knockout"], function (ko) {
    
    var filterMatches = function (csv_teamids, matches) {
        var arTeamIds = csv_teamids.split(',');
        var arMatches = [];
        ko.utils.arrayForEach(arTeamIds, function (teamid) {
            
            var foundmatches = getMatches(teamid, matches);

            if (foundmatches && foundmatches.length) {
                for (var i = 0; i < foundmatches.length; i++) {
                    arMatches.push(foundmatches[i]);
                }
            }
        });

        return arMatches;
    }

    function getMatches(teamid, list) {

        var tmpList = [];

        for (var i = 0; i < list.length; i++) {
            if (list[i].thuisteamid == teamid || list[i].uitteamid == teamid) {
                tmpList.push(list[i]);
            }
        }
        return tmpList;
    }


    return {
        filterMatches: filterMatches
    }

});