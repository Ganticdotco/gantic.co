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

  document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementsByClassName('container')
    container.classList.remove('not-ready')
  })

}).apply(Scripticles);
