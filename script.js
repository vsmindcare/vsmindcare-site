// VS MindCare — shared behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
  // Consultation request email
  var consultationForm = document.getElementById('consultation-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = document.getElementById('patient-name').value.trim();
      var email = document.getElementById('patient-email').value.trim();
      var phone = document.getElementById('patient-phone').value.trim();
      var method = document.getElementById('contact-method').value;
      var callbackTime = document.getElementById('callback-time').value.trim() || 'No preference provided';

      var subject = 'Free consultation request from ' + name;
      var body = [
        'New free consultation request',
        '',
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + phone,
        'Preferred contact method: ' + method,
        'Preferred callback time: ' + callbackTime,
        '',
        'The prospective patient consented to being contacted by VS MindCare.',
        'No medical information was requested by this form.'
      ].join('\n');

      document.getElementById('form-status').textContent =
        'Your email app is opening. Please review the prepared message and press Send. We will contact you within 24 hours.';

      window.location.href = 'mailto:info@vsmindcare.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

});
