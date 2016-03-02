angular.module('pizzaGenerator').controller('adminCtrl', ['$scope', '$firebaseArray', 'topping', function ($scope, $firebaseArray, toppingRef, sauce, crust) {

    console.log('bitch');

    //Create new Firebase array for each item//
//    $scope.topppings = $firebaseArray(topping);
//    $scope.sauces = $firebaseArray(sauce);
//    $scope.crusts = $firebaseArray(crust);

    $scope.addTopping = function (topping) {
        topppingRef.$add({
            topping: topping
        })
    }

    $scope.addSauce = function (sauces) {
        $scope.sauces.$add({
            sauce: sauces
        })
    }

    $scope.addCrust = function (crusts) {
        $scope.crusts.$add({
            crust: crusts
        })
    }

}]);