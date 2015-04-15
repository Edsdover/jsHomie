'use strict';

$(document).ready(init);
var numbers = [];

function init(){
  $('#return').click(printToPage);
}

function printToPage(){
  var oldText = $('#output').text();
  var value = $('input').val();
  if (value === '='){
    sumNumbers();
  }else{
    numbers.push(value);
    $('#output').text(oldText + ' ' + value);
    $('#input').val('');
  }
}

function sumNumbers() {
  var sum = numbers.reduce(function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
  });
  var $div = $('<div>');
  $div.text(sum);
  $('#output').append($div);
}
