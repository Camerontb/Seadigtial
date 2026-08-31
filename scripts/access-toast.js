(() => {
  const form = document.querySelector('.access-form');
  const toast = document.querySelector('.access-toast');
  if (!form || !toast) return;
  const button = form.querySelector('button[type="submit"]');
  const buttonLabel = button ? button.textContent : '';

  const showToast = (message, success) => {
    toast.textContent = message ? message.toUpperCase() : 'SUBMITTED';
    toast.style.borderColor = success ? 'var(--mint-deep)' : 'var(--coral)';
    toast.style.color = success ? 'var(--mint-deep)' : 'var(--coral)';
    toast.style.background = success
      ? 'rgba(122, 191, 179, 0.12)'
      : 'rgba(212, 128, 106, 0.12)';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 5000);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button) {
      button.disabled = true;
      button.textContent = 'Sending...';
    }
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });
      if (!response.ok) throw new Error('Network error');
      form.reset();
      showToast('Application received — we\'ll be in touch', true);
    } catch (error) {
      showToast('Failed — please email admin@seadigital.com.au', false);
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = buttonLabel;
      }
    }
  });
})();
