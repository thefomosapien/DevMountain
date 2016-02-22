angular.module('arrayApp').controller('arrayController', function ($scope, arrayService) {

    $scope.myData = arrayService.getData();

});