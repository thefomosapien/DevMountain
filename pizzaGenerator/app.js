var pizzaModule = angular.module('pizzaGenerator', ['ui.router', 'firebase'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'landing/landingTmpl.html'
        })

    .state('pizza', {
        url: '/pizza',
        templateUrl: 'generator/pizzaTmpl.html',
        controller: 'pizzaCtrl'
            //        resolve: [
            //            randomFunction: function(pizzaCtrl) {
            //            return 
            //                //            }
            //            ]
    })

    .state('map', {
        url: '/map',
        templateUrl: 'map/mapTmpl.html',
        controller: 'mapCtrl'
    })

    .state('admin', {
        url: '/admin',
        templateUrl: './admin/admin.html',
        controller: 'adminCtrl'
    })

    $urlRouterProvider.otherwise('/');
})