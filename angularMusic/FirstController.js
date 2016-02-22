myApp.controller('FirstCtrl', function ($scope, ourServ) {

    $scope.reallyLike = ourServ.reallyLike;
    $scope.kindOfLike = ourServ.kindOfLike;

    $scope.addArtist = function () {
        var artist = buildArtist();
        ourServ.addNewArtist(artist);
        removeArtist();
    }

    function buildArtist() {
        return {
            name: $scope.name,
            genre: $scope.genre,
            score: $scope.score
        }
    }

    function removeArtist() {
        $scope.name = '';
        $scope.genre = '';
        $scope.score = '';
    }

});