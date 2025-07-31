document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thanks for your message! (This form does not actually send messages.)";
});
