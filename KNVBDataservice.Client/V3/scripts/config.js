define(['module'], function (module) {
    return {
        clubname: module.config().clubname,
        rootUri: module.config().rootUri,
        templatePath: module.config().templatePath,
        knvbKey: module.config().knvbKey,
        knvbPath: module.config().knvbPath,
        sportlinkClientId: module.config().sportlinkClientId
    }
});