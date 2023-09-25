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
