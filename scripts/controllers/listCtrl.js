app.controller("listCtrl", function($scope, $location, DataProvider) {
    console.log('listCtrl');
    console.log(DataProvider.items);
    $scope.labels = DataProvider.labels;
    $scope.items = DataProvider.items;
});