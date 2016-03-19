'use strict';

var app = angular.module("nuritionalValues", ['ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'tmh.dynamicLocale'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/list', {
                    templateUrl: 'list.html',
                    controller: 'listCtrl'
                }).
                when('/details/:itemName', {
                    templateUrl: 'details.html',
                    controller: 'detailsCtrl'
                }).
                otherwise({
                    redirectTo: '/list'
                });
        }])
    .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)

    .constant('LOCALES', {
        'locales': {
            'en_US': 'English',
            'pl': 'Polski'
        },
        'preferredLocale': 'en_US'
    })

    // Angular debug info
    .config(function($compileProvider, DEBUG_MODE) {
        if (!DEBUG_MODE) {
            $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
        }
    })
    // Angular Translate
    .config(function($translateProvider, DEBUG_MODE, LOCALES) {
        if (DEBUG_MODE) {
            $translateProvider.useMissingTranslationHandlerLog();// warns about missing translates
        }

        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/locale-',
            suffix: '.html'
        });

        $translateProvider.preferredLanguage(LOCALES.preferredLocale);
        $translateProvider.preferredLanguage('pl');
        $translateProvider.useLocalStorage();
    })
    // Angular Dynamic Locale
    .config(function(tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
    })

    .run(function($translate, $window) {
        // console.log($translate.proposedLanguage());
        // console.log($window.navigator.language);
        //$translate.use($window.navigator.language);
    });