angular.module('pizzaGenerator').service('adminService', [function ($firebaseArray) {

    //Creating a new Firebase database and it's URL//
    var baseUrl = "https://pizzagenerator.firebaseio.com"

    this.createTopping = function () {
        var toppingInstance = new Firebase(baseUrl + "/toppings");
        console.log(toppingInstance)
        return $firebaseArray(toppingInstance);
    }

    this.createSauce = function () {
        var sauceInstance = new Firebase(baseUrl + '/sauces');
        return sauceInstance;
    }

    this.createCrusts = function () {
        var crustInstance = new Firebase(baseUrl + '/crusts');
        return crustInstance;
    }

}]);