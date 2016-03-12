app.controller("listCtrl", function($scope, $location) {
    console.log('listCtrl');
    $scope.items = {
        "almonds":
        {
            "name": "Almonds",
            "kcal": 575,
            "fat": 49,
            "protein": 21
        }
    }
});