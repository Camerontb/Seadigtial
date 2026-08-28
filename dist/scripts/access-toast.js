(() => {
  const form = document.querySelector('.access-form');
  const toast = document.querySelector('.access-toast');
  if (!form || !toast) return;
  const button = form.querySelector('button[type="submit"]');

  const showToast = (message, success) => {
    toast.textContent = message ? message.toUpperCase() : 'SUBMITTED';
    toast.style.borderColor = success ? 'rgba(0,255,136,0.5)' : 'rgba(255,80,80,0.5)';
    toast.style.color = success ? '#00ff88' : '#ff5050';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 4000);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button) {
      button.disabled = true;
      button.textContent = 'SENDING...';
    }
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });
      if (!response.ok) throw new Error('Network error');
      form.reset();
      showToast('Request sent — we\'ll be in touch', true);
    } catch (error) {
      showToast('Failed — try emailing us directly', false);
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = 'REQUEST ACCESS';
      }
    }
  });
})();
