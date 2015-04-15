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
  }else if (value === '*'){
    multiNums();
  }else if (value === '/'){
    divideNums();
  }else if (value === '-'){
    subNums();
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

function multiNums() {
  var multi = numbers.reduce(function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
  });
  var $div = $('<div>');
  $div.text(multi);
  $('#output').append($div);
}

function divideNums() {
  var divide = numbers.reduce(function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a / b;
  });
  var $div = $('<div>');
  $div.text(divide);
  $('#output').append($div);
}

function subNums() {
  var sub = numbers.reduce(function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
  });
  var $div = $('<div>');
  $div.text(sub);
  $('#output').append($div);
}
