app.controller("detailsCtrl", function($scope, $routeParams, DataProvider) {
    //console.log($routeParams.itemName);
    //console.log(DataProvider);
    //console.log(DataProvider[$routeParams.itemName]);
    $scope.item = DataProvider[$routeParams.itemName];
});