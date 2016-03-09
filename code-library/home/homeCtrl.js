(function() {
    'use strict';

    angular.module('code-library').controller("homeCtrl", HomeController)

    function HomeController($scope) {

        $(document).ready(function() {

            // Initialize collapse button
            $(".button-collapse").sideNav();
            // Initialize collapsible (uncomment the line below if you use the dropdown variation)
            // $('.collapsible').collapsible();

        });


    }
} ());
// angular.module('code-library').controller("homeCtrl", function(){
//
//
//
//
// });