function closeOffcanvas(targetId) {
  var offcanvas = document.getElementById('offcanvasExample');
  var targetElement = document.querySelector(targetId);

  if (offcanvas && targetElement) {
    var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);

    if (offcanvasInstance) {
      offcanvasInstance.hide();
      setTimeout(function () {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }
}

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit',(e) =>{
  e.preventDefault();
  contactForm.submit();
  document.getElementById('senderName').value = '';
  document.getElementById('senderEmail').value = '';
  document.getElementById('senderPhone').value = '';
  document.getElementById('message').value = '';
});
