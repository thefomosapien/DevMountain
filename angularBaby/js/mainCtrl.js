app.controller('mainCtrl', function ($scope) {
    $scope.friends = ['Corey', 'Keva', 'River'];
    $scope.addFriend = function () {
        $scope.friends.push($scope.newFriend);
    }

})