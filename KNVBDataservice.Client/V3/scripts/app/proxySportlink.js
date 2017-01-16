define(["reqwest", "config"], function (reqwest, config) {
    'use strict';

    var method = "GET";
    var matchesUrl = config.rootUri + "/api/sportlink/call?querystring=";
    

    var getMatches = function getMatches(querystring) {
        return reqwest({
            url: matchesUrl + encodeURIComponent("programma?client_id=" + config.sportlinkClientId + "&" + querystring),
            method: 'get'
        });
    }

    return {
        //getCompetities: getCompetities,
        //getTeams: getTeams,
        getMatches: getMatches,
        //getCompetitionSchedule: getCompetitionSchedule,
        //getCompetitionResults: getCompetitionResults,
        //getCompetitionRankings: getCompetitionRankings
    };
});