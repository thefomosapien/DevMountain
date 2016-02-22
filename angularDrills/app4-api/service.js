angular.module('apiApp').service('swSvc', function ($q, $http) {

    var baseUrl = "http://swapi.co/api/";

    this.getStarships = function () {
        var later = $q.defer();
        //Promise 1

        //Promise 2
        //If you return http, then you return promise. If not, no return.
        $http({
            method: 'GET',
            url: baseUrl + 'starships/'
        }).then(function (response) {
            later.resolve(response.data);
        })

        return later.promise;
    }

})