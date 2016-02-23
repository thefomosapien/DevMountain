angular.module('quizApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {



    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'components/home/homeView.html',
            controller: 'homeCtrl'
        })

    $urlRouterProvider.otherwise('/');

})