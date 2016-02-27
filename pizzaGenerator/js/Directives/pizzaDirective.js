angular.module('pizzaGenerator').directive('pizzaComplete', function () {

    return {
        restrict: 'E',
        scope: {
            pizzaInfo: '=category'
        },
        templateUrl: 'Templates/pizzaDirectiveTmpl.html'
    };

})