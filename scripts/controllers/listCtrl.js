app.controller("listCtrl", function($scope, $location, $linq, DataProvider) {
    $scope.items = DataProvider;

    $scope.details = function(name) {
        console.log(name);
        $location.path('/details/' + name);
    }

    $scope.search = function() {
        if ($scope.searchedValue != undefined && $scope.searchedValue.length > 0) {
            var queryResult = $linq.Enumerable().From(DataProvider)
                .Where(function(x) { return x.Key.toLowerCase().indexOf($scope.searchedValue.toLowerCase()) > -1 })
                .OrderBy(function(x) { return x.Key })
                .Select(function(x) { return x })
                .ToArray();
            //Converting array to object
            var result = {};
            for (var i = 0, len = queryResult.length; i < len; i++) {
                result[queryResult[i].Key] = queryResult[i].Value;
            }
            $scope.items = result;            
        } else {
            $scope.items = DataProvider;
        }
    }
});