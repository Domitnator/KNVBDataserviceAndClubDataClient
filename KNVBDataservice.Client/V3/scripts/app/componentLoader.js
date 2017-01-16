define(['knockout', 'config', 'app/proxy', 'app/localStorage', "moment"], function (ko, config, proxy, localStorage, moment) {
   
    var load = function load(sessionIdCallback) {
        var self = this;
        self.sessionId = '';
        
        var namingConventionLoader = {
            getConfig: function (name, callback) {
                if (name.startsWith("cood")) {
                    var viewModelConfig = {
                        require: 'app/components/' + name
                    };

                    var templateConfig = {
                        require: getTemplatePath(name) + '.tmpl.html',
                    };

                    var lastInitData = localStorage.getLastInitialised();

                    if (lastInitData.year() == 1900) {
                        initKNVBDataservice().then(function () {
                            callback({ viewModel: viewModelConfig, template: templateConfig });
                        });
                    }
                    else {
                        var diff = moment().diff(lastInitData, 'minutes')

                        //Renew session token after 30 minutes
                        if (diff > 30) {
                            initKNVBDataservice().then(function () {
                                callback({ viewModel: viewModelConfig, template: templateConfig });
                            });
                        }
                        else {
                            var sid = localStorage.getKNVBSessionId();
                            self.sessionId = sid;
                            sessionIdCallback(sid);
                            callback({ viewModel: viewModelConfig, template: templateConfig });
                        }
                    }
                   

                }
                else {
                    callback(null);
                }
            }
        };

        // Register it. Make it take priority over the default loader.
        ko.components.loaders.unshift(namingConventionLoader);

        function getTemplatePath(templatename) {
            if (config && config.templatePath) {
                return 'text!' + config.templatePath + '/' + templatename;
            }

            return 'text!app/templates/' + templatename;
        }

        function initKNVBDataservice() {
            return proxy.init().then(function (sessionid) {
                self.sessionId = sessionid;

                localStorage.setLastInitialised(moment());
                localStorage.setKNVBSessionId(sessionid);

                sessionIdCallback(sessionid);
            });
        }
    }

    return {
        load: load
    }


});