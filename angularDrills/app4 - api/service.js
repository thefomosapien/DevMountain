angular.module('apiApp', []).service('biscuit', function ($http) {

    this.getPokemon = function (name) {
        return $http.get('http://pokeapi.co/api/v2/pokemon/' + name).then(function (response) {
            console.log(response);
            return response.data;
        })
    }

})