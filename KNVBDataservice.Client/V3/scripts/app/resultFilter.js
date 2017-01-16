define(["knockout", "app/models/match"], function (ko, Match) {
    
    var filterMatches = function (matches) {
        var matchesWithResults = [];

        ko.utils.arrayForEach(matches, function (item) {
            var match = new Match(item)

            if (match.Uitslag !== 'onbekend') {
                matchesWithResults.push(item);
            }

        });

        return matchesWithResults;
    }


    return {
        filterMatches: filterMatches
    }

});