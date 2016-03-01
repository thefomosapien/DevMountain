pizzaModule.controller('adminCtrl', function ($scope, $firebaseArray, adminService) {

    var toppingRef = adminService.createTopping();

    var sauceRef = adminService.createSauce();

    var crustRef = adminService.createCrust();


    //Create new Firebase array for each item//
    $scope.toppings = $firebaseArray(toppingRef);
    $scope.sauces = $firebaseArray(sauceRef);
    $scope.crusts = $firebaseArray(crustRef);

    $scope.addTopping = function (toppingObj) {
        $scope.toppings.$add({
            name: toppingObj.name,
            description: toppingObj.description,
            img: toppingObj.img
        })
    }

    $scope.addSauce = function (sauceObj) {
        $scope.sauces.$add({
            name: sauceObj.name,
            description: sauceObj.description,
            img: sauceObj.img
        })
    }

    $scope.addCrust = function (crustObj) {
        $scope.crusts.$add({
            name: crustObj.name,
            description: crustObj.description,
            img: crustObj.img

        })
    }
});