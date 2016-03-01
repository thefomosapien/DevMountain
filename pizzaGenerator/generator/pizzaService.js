pizzaModule.service('pizzaService', function ($firebaseArray) {

    var baseGetUrl = 'https://pizzagenerator.firebaseio.com/';

    this.getToppings = function () {
        var toppingRef = new Firebase(baseGetUrl + 'toppings');
        return toppingRef;
    }

    this.getSauces = function () {
        var sauceRef = new Firebase(baseGetUrl + 'sauces');
        return sauceRef;

    }

    this.getCrusts = function () {
        var crustRef = new Firebase(baseGetUrl + 'crusts');
        return crustRef;
    }
});