var app = angular.module('userProfiles');

app.controller('MainController', function ($scope, mainService) {
    $scope.getUsers = function () {
        mainService.getUsers().then(function (response) {
            $scope.users = response.data.data;
        });
    }
    $scope.getUsers();
});