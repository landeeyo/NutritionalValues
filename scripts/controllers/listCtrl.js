app.controller("listCtrl", function($scope, $location,DataProvider) {
    $scope.items = DataProvider;
});