angular.module('funstuff', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: '../views/loginTmpl.html'
    })
    .state('store', {
        url: '/store',
        templateUrl: '../views/storeTmpl.html'
    })
    $urlRouterProvider.otherwise('/login');
    
})
