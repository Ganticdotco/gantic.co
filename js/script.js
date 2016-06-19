function Scripticles(){}
(function()
{

  var THIS = this;

  [].forEach.call(document.getElementsByClassName('toggleForm'), function(el) {
    el.addEventListener('click', function() {
      var formo = document.getElementById('overlay-contact-form')
      formo.classList.toggle('active')
    })
  })

  window.onload = function() {
    setTimeout(loadAnim, 1000);
  }

  function loadAnim() {
    var content = document.body
    content.classList.toggle('preload')
  }

}).apply(Scripticles);
