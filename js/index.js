const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit',(e) =>{
  e.preventDefault();
  contactForm.submit();
  document.getElementById('senderName').value = '';
  document.getElementById('senderEmail').value = '';
  document.getElementById('senderPhone').value = '';
  document.getElementById('message').value = '';
});
