angular.module('quizApp').controller('homeCtrl', function ($stateParams, $scope) {

    $scope.quizzes = [{name: 'Angular'}, {name: 'HTML/CSS'}]
    $scope.pastQuizzes = [];

    var app = angular.module('quizApp');

    app.controller('HomeCtrl', function ($scope, quizList, pastQuizList) {
        console.log(pastQuizList)
        $scope.quizzes = quizList;
        $scope.pastQuizzes = pastQuizList;
    })

});