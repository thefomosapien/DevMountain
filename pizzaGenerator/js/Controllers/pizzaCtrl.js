angular.module('pizzaGenerator').controller('pizzaCtrl', function ($stateParams, $scope, pizzaService, $state) {

    $scope.topping = {
        name: 'Sausage',
        description: 'A sausage is a food usually made from ground meat, often pork, beef or veal, along with salt, spices and breadcrumbs.',
        img: 'css/Images/sausage.jpg'
    };

    $scope.sauce = {
        name: 'Marinara Sauce',
        description: 'Marinara sauce is an Italian red sauce that originated in Naples, usually made with tomatoes, garlic, herbs, salt and onions.',
        img: 'css/Images/red-sauce.jpg'
    };

    $scope.crust = {
        name: 'Thin Crust',
        description: 'New York pizza is a style of pizza characterized by thin-crust pies that are hand tossed. It has a crust which is crisp.',
        img: 'css/Images/thin-crust.jpg'
    };

})