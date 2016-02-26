angular.module('pizzaGenerator').controller('pizzaCtrl', function ($stateParams, $scope, pizzaService) {

    $stateProvider

        .state('contacts', {
        url: "/contacts",
        templateUrl: 'contacts.html'
    })

})