var app = angular.module("nuritionalValues", ['ngRoute']);

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

// configure our routes
// app.config(function($routeProvider) {
//     $routeProvider

//         // route for the home page
//         .when('/', {
//             templateUrl: 'home.html',
//             controller: 'mainCtrl'
//         })

//         // route for the about page
//         .when('/list', {
//             templateUrl: 'list.html',
//             controller: 'listCtrl'
//         })

//         // route for the contact page
//         .when('/details', {
//             templateUrl: 'details.html',
//             controller: 'detailsCtrl'
//         });
// });

// // create the controller and inject Angular's $scope
// scotchApp.controller('mainController', function($scope) {
//     // create a message to display in our view
//     $scope.message = 'Everyone come and see how good I look!';
// });

// app.controller('listCtrl', function($scope) {
//     $scope.message = 'Look! I am an about page.';
// });

// app.controller('detailsCtrl', function($scope) {
//     $scope.message = 'Contact us! JK. This is just a demo.';
// });