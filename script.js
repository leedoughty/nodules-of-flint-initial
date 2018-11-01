var rocks = document.getElementsByClassName("rock");
console.log(rocks);
var orderArray = [];

var rocksArray = Array.from(rocks);
rocksArray.forEach(function(element, index) {
  orderArray.push(index);
});

// rock1.style = "order:2";
var numberRocks = rocks.length;
var counter = numberRocks - 1;
rocksArray.forEach(function(element) {
  var randomNumber = Math.floor(Math.random() * orderArray.length - 1);
  var randomPlace = orderArray.splice(randomNumber, 1);
  element.style = `order:${randomPlace}`;
});
