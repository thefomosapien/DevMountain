angular.module("arrayApp").controller("arrayController", function($scope, svc) {
    $scope.data = svc.getData();
})