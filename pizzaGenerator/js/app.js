angular.module('pizzaGenerator', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('landing', {
        url: '/',
        templateUrl: 'Templates/landingTmpl.html',
        controller: 'landingCtrl'
    })

    .state('pizza', {
        url: '/pizza',
        templateUrl: 'Templates/pizzaTmpl.html',
        controller: 'pizzaCtrl'
    })

    .state('map', {
        url: '/map',
        templateUrl: 'Templates/mapTmpl.html',
        controller: 'mapCtrl'
    });

    $urlRouterProvider.otherwise('/');
})