function Scripticles(){}
(function()
{

  var THIS = this;

  [].forEach.call(document.getElementsByClassName('toggleForm'), function(el) {
    el.addEventListener('click', function() {
      var highlights = document.getElementsByClassName('contactSwitch');
      var highlightCount = highlights.length;
      for (var i = 0; i < highlightCount; i++) {
        highlights[i].classList.toggle('contactState');
      }
      var scrollTop = function() {
        window.scrollTo(0, 0);
      };
    })
  })

  window.onload = function() {
    var content = document.getElementById('container');
    content.classList.toggle('preload');
  }

}).apply(Scripticles);
