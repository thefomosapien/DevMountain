angular.module('miniRouting', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl',
            url: '/'
        })

    .state('settings', {
        templateUrl: 'js/settings/settingsTmpl.html',
        controller: 'settingsCtrl',
        url: '/settings'
    })

    .state('products', {
        templateUrl: 'js/products/productTmpl.html',
        controller: 'productsCtrl',
        url: '/products/:id'
    })

    $urlRouterProvider
        .otherwise('/');

});