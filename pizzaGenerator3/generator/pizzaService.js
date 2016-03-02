pizzaModule.service('pizzaService', function ($firebaseArray) {

    var baseGetUrl = 'https://pizzagenerator.firebaseio.com/';

    this.getToppings = function () {
        var toppingRef = new Firebase(baseGetUrl + 'toppings');
        return toppingRef;
    }

    this.getSauces = function () {
        var sauceRef = new Firebase(baseGetUrl + 'sauces');
        var sauceArray = $firebaseArray(sauceRef);
        return sauceArray;

    }

    this.getCrusts = function () {
        var crustRef = new Firebase(baseGetUrl + 'crusts');
        var crustArray = $firebaseArray(crustRef);
        return crustArray;
    }
});