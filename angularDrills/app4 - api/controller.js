angular.module('apiApp', ).controller('gravy', function (@scope, biscuit) {

    $scope.iChooseYou = function (name) {
        biscuit.getPokemon(name).then(function (response) {
            $scope.poke = response;
        })
    }


})