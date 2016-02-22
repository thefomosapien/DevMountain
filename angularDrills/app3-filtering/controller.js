angular.module("app3").controller("ctrl", function ($scope, svc) {

    $scope.data = svc.getData();

    $scope.filterObj = {
        email: ".com",
        phone: "1"
    }

})