'use strict';

$(document).ready(function() {
  $('.ripple').on('click', function (event) {
    event.preventDefault();

    var $div = $('<div/>'),
    btnOffset = $(this).offset(),
    xPos = event.pageX - btnOffset.left,
    yPos = event.pageY - btnOffset.top;

    $div.addClass('ripple-effect');
    var $ripple = $('.ripple-effect');

    $ripple.css('height', $(this).height());
    $ripple.css('width', $(this).height());
    $div.css({
      top: yPos - ($ripple.height()/2),
      left: xPos - ($ripple.width()/2),
      background: '#89669b'
    }) 
    .appendTo($(this));

    window.setTimeout(function() { $div.remove(); }, 2000);
  });

  var mapping = {
    'q': 0, 'a': 0, 'z': 0, 'w': 1, 's': 1, 'x': 1,
    'e': 2, 'd': 2, 'c': 2, 'r': 3, 'f': 3, 'v': 3,
    't': 3, 'g': 3, 'b': 3, 'y': 4, 'h': 4, 'n': 4,
    'u': 4, 'j': 4, 'm': 4, 'i': 5, 'k': 5, 'o': 6,
    'l': 6, 'p': 7
  };
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var locations = ['a', 's', 'd', 'f', 'j', 'k', 'l', 'p'];
  $.getJSON('englishf.json', function(json, textStatus) {
     simulate(json, mapping, locations); 
  });

  function simulate(freq, mapping, locations) {
    var distance = 0, count = 0, current = 'a';
    for (var i = 0; i < locations.length; i ++)
      $('#' + locations[i]).addClass('active');
    var run = function() {
      count += 1;
      current = getRandomItem(letters, freq[current.charCodeAt(0) - 'a'.charCodeAt(0)]);
      $('#' + current).click();
      $('#' + current).addClass('active');
      $('#textarea').append(current);
      if (locations[mapping[current]] != current) {
        distance += 1;
        $('#' + locations[mapping[current]]).removeClass('active');
        locations[mapping[current]] = current
      }
      $('#dist-stat>.value').text(distance);
      $('#dist-letters>.value').text(count);
      window.setTimeout(run, 500);
    }
    run();
  }
});

// From http://codetheory.in/weighted-biased-random-number-generation-with-javascript-based-on-probability/
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomItem(list, weight) {
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