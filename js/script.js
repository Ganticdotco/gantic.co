function ContactFormScript(){}
(function()
{

  var THIS = this;

  [].forEach.call(document.getElementsByClassName('toggleForm'), function(el) {
  el.addEventListener('click', function() {
    var formo = document.getElementById('overlay-contact-form')
    formo.classList.toggle('active')
  })
})

}).apply(ContactFormScript);
