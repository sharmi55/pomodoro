(function() {
  function HomeCtrl($interval) {
// Total time in seconds (25 min)
    this.count = 1500;

    var interval = null;

  //Start button logic
    this.start = function() {
      if(interval === null) {
        interval = $interval(countdown.bind(this), 1000);
      }
    };

  // Later refactor to toggle between pause and play + extra button to reset?

  //Reset button logic
    this.reset = function() {
      $interval.cancel(interval);
      this.count = 1500;
      interval = null;
    };

    function countdown() {
      this.count--;
    };
};

  angular
    .module('pomodoro')
    .controller('HomeCtrl', ['$interval', HomeCtrl]);
})();
