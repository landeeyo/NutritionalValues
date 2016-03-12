app.filter('grams', function() {
    return function(input) {
        return (!!input) ? input + " g" : '';
    }
});