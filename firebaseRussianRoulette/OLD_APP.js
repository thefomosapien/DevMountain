angular
  .module('todoList', ['firebase'])
  .controller('listCtrl', function ($scope, $firebaseArray) { // ARRAYS
    var ref = new Firebase("https://devmtn-demo.firebaseio.com/jisraelturner/list");
    $scope.list = $firebaseArray(ref)
    $scope.list.$loaded(function(array) {
      console.log(array)
    })
    $scope.addNewItem = function () {
      $scope.list.$add($scope.newItem)
      $scope.newItem = ''
    }
    $scope.removeItem = function (index) {
      $scope.list.$remove(index)
    }
  })
  .controller('infoCtrl', function ($scope, $firebaseObject) { // OBJECTS
    var ref = new Firebase("https://devmtn-demo.firebaseio.com/jisraelturner");
    $scope.info = $firebaseObject(ref.child('info'))
    $scope.info.$loaded(function () {
      console.log($scope.info)
      $scope.info.visits++
      $scope.info.$save()
    })
  })
  .controller('realtimeCtrl', function($scope, $firebaseObject) { // THREE WAY DATA BINDING
    var realtimeObject = $firebaseObject(new Firebase("https://devmtn-demo.firebaseio.com/jisraelturner").child('realtime'));
    realtimeObject.$bindTo($scope, 'realtimeText')
  })
