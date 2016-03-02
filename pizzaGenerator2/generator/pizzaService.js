angular.module('pizzaGenerator').service('pizzaService', function ($http) {

    var getRandomPizza = function () {

        var completePizza = {};

        completePizza.toppings = getToppings();
        completePizza.sauces = getSauces();
        completePizza.crusts = getCrusts();

        return completePizza;

    }

    getToppings = function () {
        return $http({
            method: 'GET',
            url: '/toppings'
        }).then(function (response) {
            return response;
        })
    }

    getSauces = function () {
        return $http({
            method: 'GET',
            url: '/sauces'
        }).then(function (response) {
            return response;
        })
    }

    getCrusts = function () {
        return $http({
            method: 'GET',
            url: '/crusts'
        }).then(function (response) {
            return response;
        })
    }
});