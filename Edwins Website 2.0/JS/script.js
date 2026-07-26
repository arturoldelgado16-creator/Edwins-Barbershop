// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    // close menu after a link is tapped (mobile)
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // Contact form: placeholder submit handling (no backend wired up yet)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (status) {
        status.textContent = "Thanks — we'll get back to you shortly.";
        status.style.color = 'var(--gold)';
      }
      form.reset();
    });
  }
});
