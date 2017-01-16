define(["knockout", "moment"], function (ko, moment) {
   
    var groupBy = function groupBy(array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        })
    }

    var createWedtrijd = function createWedtrijd(thuisclub, uitclub, clubname) {
        if (clubname && clubname != '') {
            var thuisclubContainsClubname = thuisclub.toLowerCase().indexOf(clubname.toLowerCase()) > -1;
            var uitclubContainsClubname = uitclub.toLowerCase().indexOf(clubname.toLowerCase()) > -1;

            thuisclub = thuisclubContainsClubname ? "<strong>" + thuisclub + "</strong>" : thuisclub;
            uitclub = uitclubContainsClubname ? "<strong>" + uitclub + "</strong>" : uitclub;
        }

        return thuisclub + ' - ' + uitclub;
    }

    var createRankingName = function createRankingName(teamname, clubname) {
        if (clubname && clubname != '') {
            var teamnameContainsClubname = teamname.toLowerCase().indexOf(clubname.toLowerCase()) > -1;
           
            return teamnameContainsClubname ? "<strong>" + teamname + "</strong>" : teamname;
        }

        return teamname;
    }

    var createUitslag = function createUitslag(puntenteam1, puntenteam2, isafgelast) {
        if (isafgelast)
            return 'afgelast';

        if (puntenteam1 == null && puntenteam2 == null)
            return 'onbekend';
        else if (puntenteam1 >= 0 && puntenteam2 >= 0)
            return puntenteam1 + ' - ' + puntenteam2;
        else
            return 'onbekend';
    }

    var createMomentDate = function createMomentDate(datum, tijd) {
        return moment(datum + " " + tijd, "YYYY-MM-DD HH:mm");
    }

    var createIsAfgelast = function createIsAfgelast(bijzonderheden) {
        var afgelast = false;

        if (bijzonderheden == 'AFG') {
            afgelast = true;
        }

        return afgelast;
    }

    var createCompetitieTypeNaam = function createCompetitieTypeNaam(comptype) {
        switch (comptype) {
            case 'B':
                return 'Beker';
            case 'V':
                return 'Oefen (Vriendschappelijk)';
            case 'N':
                return 'Nacompetitie';
            case 'R':
                return 'Competitie (regulier)';
            default:
                return 'Onbekend'
        }
    }

    var getCompetitieAfkorting = function getCompetitieAfkorting(competitiesoort) {
        switch (competitiesoort) {
            case 'beker':
                return 'B';
            case 'oefen':
                return 'V';
            case 'nacompetitie':
                return 'N';
            case 'regulier':
                return 'R';
            default:
                return 'R'
        }
    }

    var sortByDate = function sortByDate(l, r) {
        var dateA = new Date(l.Datum).getTime();
        var dateB = new Date(r.Datum).getTime();
        return dateA > dateB ? 1 : -1;

        //return Math.random() > Math.random();
    }

    return {
        groupBy: groupBy,
        createWedtrijd: createWedtrijd,
        createUitslag: createUitslag,
        createMomentDate: createMomentDate,
        createRankingName: createRankingName,
        createIsAfgelast: createIsAfgelast,
        createCompetitieTypeNaam: createCompetitieTypeNaam,
        sortByDate: sortByDate,
        getCompetitieAfkorting: getCompetitieAfkorting
    }
});