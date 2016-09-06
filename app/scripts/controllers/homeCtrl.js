(function() {
  function HomeCtrl($scope, $firebaseObject) {
    var ref = firebase.database().ref();
    $scope.data = $firebaseObject(ref);
  }

  angular
    .module('pomodoro')
    .controller('HomeCtrl', ['$scope', '$firebaseObject', HomeCtrl]);
})();
