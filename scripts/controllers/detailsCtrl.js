app.controller("detailsCtrl", function($scope, $routeParams, DataProvider) {
    $scope.item = DataProvider[$routeParams.itemName];
    $scope.item.name = $routeParams.itemName;
});