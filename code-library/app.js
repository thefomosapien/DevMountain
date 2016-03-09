var pizzaModule = angular.module('code-library', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        
            .state('home', {
                url: '/',
                templateUrl: 'home/homeTemp.html'
            })

            .state('angular', {
                url: '/angular',
                templateUrl: 'templates/angularTemp.html',
                controller: 'angularCtrl'
            })

            .state('html', {
                url: '/html',
                templateUrl: 'templates/htmlTemp.html',
                controller: 'htmlCtrl'
            })

            .state('css', {
                url: '/css',
                templateUrl: 'templ/cssTemp.html',
                controller: 'cssCtrl'
            })

        $urlRouterProvider.otherwise('/');
    })
