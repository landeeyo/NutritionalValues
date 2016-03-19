app.filter('grams', function() {
    return function(input) {
        if(input == undefined || input == 0){
            return "-";
        }
        return (!!input) ? input + " g" : '';
    }
});