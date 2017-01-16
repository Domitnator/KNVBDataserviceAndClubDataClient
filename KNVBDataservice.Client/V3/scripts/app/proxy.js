define(["reqwest", "config"], function (reqwest, config) {
    'use strict';

    var initUrl = config.rootUri + "/api/knvb/init?key=" + config.knvbKey + "&path=" + config.knvbPath;
    var competitionsUrl = config.rootUri + "/api/knvb/competitions?key=" + config.knvbKey + "&path=" + config.knvbPath + "&sessionid=";
    var matchesUrl = config.rootUri + "/api/knvb/matches?key=" + config.knvbKey + "&path=" + config.knvbPath + "&sessionid=";
    var teamsUrl = config.rootUri + "/api/knvb/teams?key=" + config.knvbKey + "&path=" + config.knvbPath + "&sessionid=";

    //competitions uri's
    var competitionScheduleUrl = config.rootUri + "/api/knvb/competitionschedule?key=" + config.knvbKey + "&path=" + config.knvbPath + "&sessionid=";
    var competitionResultsUrl = config.rootUri + "/api/knvb/competitionresults?key=" + config.knvbKey + "&path=" + config.knvbPath + "&sessionid=";
    var competitionRankingsUrl = config.rootUri + "/api/knvb/competitionranking?key=" + config.knvbKey + "&path=" + config.knvbPath + "&sessionid=";


    var init = function init() {
        return reqwest({
            url: initUrl,
            method: 'get'
        });
    }

    var getCompetities = function getCompetities(sessionid) {
        return reqwest({
            url: competitionsUrl + sessionid,
            method: 'get'
        });
    }

    var getTeams = function getTeams(sessionid) {
        return reqwest({
            url: teamsUrl + sessionid,
            method: 'get'
        });
    }

    var getMatches = function getMatches(sessionid, querystring) {
        return reqwest({
            url: matchesUrl + sessionid + "&querystring=" + encodeURIComponent(querystring),
            method: 'get'
        });
    }

    var getCompetitionSchedule = function getCompetitionSchedule(sessionid, teamid, district, compid, classid, pouleid, querystring) {
        return reqwest({
            url: competitionScheduleUrl + sessionid + "&teamid=" + teamid + "&district=" + district + "&compid=" + compid + "&classid=" + classid + "&pouleid=" + pouleid + "&querystring=" + encodeURIComponent(querystring),
            method: 'get'
        });
    }

    var getCompetitionResults = function getCompetitionResults(sessionid, teamid, district, compid, classid, pouleid, querystring) {
        return reqwest({
            url: competitionResultsUrl + sessionid + "&teamid=" + teamid + "&district=" + district + "&compid=" + compid + "&classid=" + classid + "&pouleid=" + pouleid + "&querystring=" + encodeURIComponent(querystring),
            method: 'get'
        });
    }

    var getCompetitionRankings = function getCompetitionRankings(sessionid, teamid, district, compid, classid, pouleid, querystring) {
        return reqwest({
            url: competitionRankingsUrl + sessionid + "&teamid=" + teamid + "&district=" + district + "&compid=" + compid + "&classid=" + classid + "&pouleid=" + pouleid + "&querystring=" + encodeURIComponent(querystring),
            method: 'get'
        });
    }

    return {
        init: init,
        getCompetities: getCompetities,
        getTeams: getTeams,
        getMatches: getMatches,
        getCompetitionSchedule: getCompetitionSchedule,
        getCompetitionResults: getCompetitionResults,
        getCompetitionRankings: getCompetitionRankings
    };
});