module.exports = {
  // From http://codetheory.in/weighted-biased-random-number-generation-with-javascript-based-on-probability/
  getRandomItem: function(list, weight) {
    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
      return prev + cur;
    });

    var random_num = rand(0, total_weight);
    var weight_sum = 0;

    for (var i = 0; i < list.length; i++) {
      weight_sum += weight[i];
      weight_sum = +weight_sum.toFixed(2);

      if (random_num <= weight_sum)
        return list[i];
    }
  }
};