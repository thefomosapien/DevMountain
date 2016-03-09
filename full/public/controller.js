angular.module('menu').controller('mainCtrl', function ($scope, $http) {
    
    $scope.getFood = function () {
        $http.get('/api/food').then(function(response) {
            $scope.foods = response.data;
        })
    }
    
    $scope.getFood();
    
})