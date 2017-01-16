define(["moment"], function (moment) {
    var spLastInitDate = "alt148_LastInitDate";
    var spSessionID = "alt148_SessionId";

    function localstorageIsAvailable() {
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    var getLastInitialised = function () {  
        if (localstorageIsAvailable()) {
            var lastInitDate = localStorage.getItem(spLastInitDate);

            if (lastInitDate) {
                return moment(lastInitDate);
            }
        }

        return moment().set({ 'year': 1900, 'month': 1, 'date': 1 });
    }

    var setLastInitialised = function (momentDateTime) {
        if (localstorageIsAvailable()) {
            localStorage.setItem(spLastInitDate, momentDateTime.format());
        }
    }

    var getKNVBSessionId = function () {
        if(localstorageIsAvailable()) {
            var sessionId = localStorage.getItem(spSessionID);

            if (sessionId) {
                return sessionId;
            }
       }

        return '';
     }

    var setKNVBSessionId = function (sessionId) {
        if (localstorageIsAvailable()) {
            localStorage.setItem(spSessionID, sessionId);
        }
    }

    return {
        getLastInitialised: getLastInitialised,
        setLastInitialised: setLastInitialised,
        getKNVBSessionId: getKNVBSessionId,
        setKNVBSessionId: setKNVBSessionId
    }

});