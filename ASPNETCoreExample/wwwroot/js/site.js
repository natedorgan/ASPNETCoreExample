// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function newColor() {
    document.getElementById("header").style.color = "gold";
}

function oldColor() {
    document.getElementById("header").style.color = "maroon";
}

function moveBox() {
  
var speed = 6,
    
    moveBox = function(moveBy) {
      var el = document.getElementById('box'),
          left = el.offsetLeft;
      
      if ( (moveBy > 0 && left > 500) || (moveBy < 0 && left < 51) ) {
        clearTimeout(timer);
        timer = setInterval(function() {
          moveBox(moveBy * -1);  // to change direction
        }, speed);
      }
      
      el.style.left = left + moveBy + 'px';

    };
  
var timer = setInterval(
  function() { 
    moveBox(5); 
  }
  , speed);
  
}
