document.addEventListener("DOMContentLoaded", function(event) {
    var rocks = document.getElementsByClassName("rock");
    var orderArray = [];

    var rocksArray = Array.from(rocks);
    rocksArray.forEach(function(element, index) {
      orderArray.push(index);
    });

    var numberRocks = rocks.length;
    var counter = numberRocks - 1;
    rocksArray.forEach(function(element) {
      var randomNumber = Math.floor(Math.random() * orderArray.length - 1);
      var randomPlace = orderArray.splice(randomNumber, 1);
      element.style = `order:${randomPlace}`;
    });
});
