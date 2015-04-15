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
  displayInput(sum);
}

function multiNums() {
  var multi = numbers.reduce(function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
  });
  displayInput(multi);
}

function divideNums() {
  var divide = numbers.reduce(function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a / b;
  });
  displayInput(divide);
}

function subNums() {
  var sub = numbers.reduce(function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
  });
  displayInput(sub);
}

function displayInput(message){
  var $div = $('<div>');
  $div.text(message);
  $('#output').append($div);
}
