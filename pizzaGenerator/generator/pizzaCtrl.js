pizzaModule.controller('pizzaCtrl', function ($scope, pizzaService, $firebaseArray) {

    var randomizer = function (arr) {

        var num = (Math.floor(Math.random() * arr.length));

        return arr[num];

    }

    var toppingRef = pizzaService.getToppings();
    var sauceRef = pizzaService.getSauces();
    var crustRef = pizzaService.getCrusts();

    var createPizza = function () {

        $scope.toppingArray = $firebaseArray(toppingRef);
        $scope.toppingArray.$loaded().then(function (array) {
            $scope.selectedTopping = randomizer(array);
        })

        $scope.sauceArray = $firebaseArray(sauceRef);
        $scope.sauceArray.$loaded().then(function (array) {
            $scope.selectedSauce = randomizer(array);
        })

        $scope.crustArray = $firebaseArray(crustRef);
        $scope.crustArray.$loaded().then(function (array) {
            $scope.selectedCrust = randomizer(array);
        })
    }

    //When try again button is clicked, reload page.
    $scope.refreshPage = function () {
        $(document).click(function () {
            location.reload();
        });
    };

    createPizza();
});