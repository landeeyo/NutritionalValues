app.controller("listCtrl", function($scope, $location, DataProvider) {
    $scope.items = DataProvider;

    $scope.details = function(name) {
        console.log(name);
        $location.path('/details/' + name);  
    }
});