(function() {
  function homeCtrl($scope, $firebaseObject) {
    var ref = firebase.database().ref();
    $scope.data = $firebaseObject(ref);
  }

  angular
    .module('pomodoro')
    .controller('homeCtrl', ['$scope', '$firebaseObject', homeCtrl]);
})();
