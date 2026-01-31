(() => {
  const form = document.querySelector('.access-form');
  const toast = document.querySelector('.access-toast');
  if (!form || !toast) return;
  const button = form.querySelector('button[type="submit"]');

  const showToast = (message) => {
    toast.textContent = message ? message.toUpperCase() : 'SUBMITTED';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button) button.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });
      if (!response.ok) throw new Error('Network error');
      form.reset();
      showToast('Submitted');
    } catch (error) {
      showToast('Failed');
    } finally {
      if (button) button.disabled = false;
    }
  });
})();
