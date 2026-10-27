const initContactForm = () => {
  const form = document.querySelector('#contactForm');
  const status = document.querySelector('.form-status');

  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'Cliente';

    status.textContent = `Mensagem enviada com sucesso, ${name}! Nossa equipe entrará em contato em breve.`;
    form.reset();
  });
};

initContactForm();
