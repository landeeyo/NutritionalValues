'use strict';

var app = angular.module("nuritionalValues", ['ngRoute', 'pascalprecht.translate']);

app.config(['$routeProvider',
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
    }]);

app.constant('LOCALES', {
    'locales': {
        'ru_RU': 'Русский',
        'en_US': 'English'
    },
    'preferredLocale': 'en_US'
});

app.config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
});

// app.config(function ($translateProvider) {
//     $translateProvider.useStaticFilesLoader({
//         prefix: 'resources/locale-',// path to translations files
//         suffix: '.json'// suffix, currently- extension of the translations
//     });
//     $translateProvider.preferredLanguage('en_US');// is applied on first load
//     $translateProvider.useLocalStorage();// saves selected language to localStorage
// })

// angular.module('translateApp').service('LocaleService', function ($translate, LOCALES, $rootScope, tmhDynamicLocale) {
//     'use strict';
//     // PREPARING LOCALES INFO
//     var localesObj = LOCALES.locales;

//     // locales and locales display names
//     var _LOCALES = Object.keys(localesObj);
//     if (!_LOCALES || _LOCALES.length === 0) {
//       console.error('There are no _LOCALES provided');
//     }
//     var _LOCALES_DISPLAY_NAMES = [];
//     _LOCALES.forEach(function (locale) {
//       _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
//     });
    
//     // STORING CURRENT LOCALE
//     var currentLocale = $translate.proposedLanguage();// because of async loading
    
//     // METHODS
//     var checkLocaleIsValid = function (locale) {
//       return _LOCALES.indexOf(locale) !== -1;
//     };
    
//     var setLocale = function (locale) {
//       if (!checkLocaleIsValid(locale)) {
//         console.error('Locale name "' + locale + '" is invalid');
//         return;
//       }
//       currentLocale = locale;// updating current locale
    
//       // asking angular-translate to load and apply proper translations
//       $translate.use(locale);
//     };
    
//     // EVENTS
//     // on successful applying translations by angular-translate
//     $rootScope.$on('$translateChangeSuccess', function (event, data) {
//       document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html
    
//        // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
//       tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
//     });
    
//     return {
//       getLocaleDisplayName: function () {
//         return localesObj[currentLocale];
//       },
//       setLocaleByDisplayName: function (localeDisplayName) {
//         setLocale(
//           _LOCALES[
//             _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)// get locale index
//             ]
//         );
//       },
//       getLocalesDisplayNames: function () {
//         return _LOCALES_DISPLAY_NAMES;
//       }
//     };
// });

app.factory('DataProvider', function() {
    return {
        labels:
        {
            "pl":
            {
                "fat": "tłuszcz",
                "fats": "tłuszcze",
                "protein": "białko",
                "kcal": "kcal"
            },
            "en":
            {
                "fat": "fat",
                "fats": "fats",
                "protein": "protein",
                "kcal": "kcal"
            }
        },
        items:
        {
            "almonds":
            {
                "name":"Almond",
                "kcal": 575,
                "fat": 49,
                "protein": 21
            }
        }
    };
});