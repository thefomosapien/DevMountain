pizzaModule.controller('pizzaCtrl', function ($scope, pizzaService, $firebaseArray) {

    var randomizer = function (arr) {

        var num = (Math.floor(Math.random() * arr.length));

        //        return arr.$keyFor(num);

    }

    var createPizza = function () {

        $scope.toppingArray = $firebaseArray(pizzaService.getToppings());
        $scope.selectedTopping = randomizer($scope.toppingArray);
        console.log($scope.toppingArray[0].name);


        //        $scope.selectedTopping = $scope.toppingType[0];

        $scope.sauceType = randomizer(pizzaService.getSauces());

        //        $scope.selectedSauce = $scope.sauceType[0];

        $scope.crustType = randomizer(pizzaService.getCrusts());

        //        $scope.selectedCrust = $scope.crustType[0];    
    }

    createPizza();
});