const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('#navMenu a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Mohon lengkapi semua field terlebih dahulu.';
    return;
  }

  formStatus.textContent = 'Terima kasih! Pesanmu sudah kami terima.';
  contactForm.reset();
});
