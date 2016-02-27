angular.module('pizzaGenerator').service('pizzaService', function () {

    this.topping = {
        name: 'Sausage',
        description: 'A sausage is a food usually made from ground meat, often pork, beef or veal, along with salt, spices and breadcrumbs, with a skin around it.',
        img: 'css/Images/sausage.jpg'
    };

    this.sauce = {
        name: 'Marinara Sauce',
        description: 'Marinara sauce is an Italian sauce that originated in Naples, usually made with tomatoes, garlic, herbs, and onions. Its many variations can include the addition of capers, olives and spices. It is occasionally sweetened with a dash of red wine.',
        img: 'css/Images/red-sauce.jpg'
    };

    this.crust = {
        name: 'Thin Crust',
        description: 'New York–style pizza is a style of pizza characterized by large hand-tossed thin-crust pies, often sold in wide slices to-go. It has a crust which is crisp along its edge yet soft enough beneath its toppings to be folded in half to eat.',
        img: 'css/Images/thin-crust.jpg'
    };

    this.topping = function () {
        return this.topping;
    }

    this.sauce = function () {
        return this.sauce;
    }

    this.crust = function () {
        return this.crust;
    }


});