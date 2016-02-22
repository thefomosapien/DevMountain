angular.module('apiApp').controller('swCtrl', function ($scope, swSvc) {

    var promise = swSvc.getStarships()
    promise.then(function (starships) {
        $scope.starships = starships;
    })

})