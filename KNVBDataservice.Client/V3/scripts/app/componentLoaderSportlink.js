define(['knockout', 'config', 'app/proxy', 'app/localStorage', "moment"], function (ko, config, proxy, localStorage, moment) {
   

    var load = function load() {
        var self = this;
       
        var namingConventionLoader = {
            getConfig: function (name, callback) {
                // 1. Viewmodels are classes corresponding to the component name.
                //    e.g., my-component maps to MyApp.MyComponentViewModel
                // 2. Templates are in elements whose ID is the component name
                //    plus '-template'.    
                if (name.startsWith("cood")) {
                    //debugger;
                    var viewModelConfig = {
                        require: 'app/components/' + name
                    };

                    var templateConfig = {
                        require: getTemplatePath(name) + '.tmpl.html',
                    };

                    callback({ viewModel: viewModelConfig, template: templateConfig });

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
    }

    return {
        load: load
    }


});