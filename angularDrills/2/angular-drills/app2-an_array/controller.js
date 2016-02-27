angular.module('arrayApp').controller('arrayController', function ($scope, arrayService) {

    $scope.getDatInfo = function () {
        $scope.data = arrayService.giveData();
    }

    $scope.getDatInfo();

})