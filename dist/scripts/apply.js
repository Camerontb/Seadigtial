(() => {
  const form = document.getElementById('apply-form');
  const done = document.querySelector('.form-done');
  const errorBox = form && form.querySelector('.form-error');
  const button = form && form.querySelector('button[type="submit"]');
  if (!form || !done || !errorBox || !button) return;
  const buttonLabel = button.textContent;
  const ADMIN = 'admin@seadigital.com.au';

  // The hero's email field starts the same application
  const heroForm = document.getElementById('hero-apply');
  if (heroForm) {
    heroForm.addEventListener('submit', (event) => {
      const heroEmail = heroForm.querySelector('input[type="email"]');
      if (!heroEmail.checkValidity()) return;
      event.preventDefault();
      form.querySelector('#pilot-email').value = heroEmail.value.trim();
      document.getElementById('apply').scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
      form.querySelector('#pilot-name').focus({ preventScroll: true });
    });
  }

  const messages = {
    name: 'Enter your name so we know who to reply to.',
    email: 'Enter an email address we can reply to, like you@pilotage.org.',
    role: 'Choose the role closest to yours.',
  };

  const clearFieldError = (field) => {
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    const msg = document.getElementById(`${field.id}-msg`);
    if (msg) msg.remove();
  };

  const showFieldError = (field) => {
    clearFieldError(field);
    const msg = document.createElement('p');
    msg.className = 'field-msg';
    msg.id = `${field.id}-msg`;
    msg.textContent = messages[field.name] || 'Check this field.';
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', msg.id);
    field.insertAdjacentElement('afterend', msg);
  };

  form.querySelectorAll('[required]').forEach((field) => {
    field.addEventListener('input', () => { if (field.checkValidity()) clearFieldError(field); });
    field.addEventListener('change', () => { if (field.checkValidity()) clearFieldError(field); });
  });

  const showError = (detail) => {
    errorBox.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = `Couldn't send your application${detail ? ` (${detail})` : ''}. Your answers are still here, so you can try again, or email them to `;
    const a = document.createElement('a');
    a.href = `mailto:${ADMIN}?subject=${encodeURIComponent('EMPX test pilot application')}`;
    a.textContent = ADMIN;
    p.append(a, '.');
    errorBox.append(p);
    errorBox.hidden = false;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorBox.hidden = true;

    const invalid = [...form.querySelectorAll('[required]')].filter((f) => !f.checkValidity());
    form.querySelectorAll('[required]').forEach(clearFieldError);
    if (invalid.length) {
      invalid.forEach(showFieldError);
      invalid[0].focus();
      return;
    }

    button.disabled = true;
    button.textContent = 'Sending…';
    form.setAttribute('aria-busy', 'true');
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) {
        let detail = '';
        try {
          const data = await response.json();
          if (data && Array.isArray(data.errors) && data.errors[0]) detail = data.errors[0].message;
        } catch (e) { /* no JSON body */ }
        throw new Error(detail);
      }
      done.querySelector('.done-email').textContent = form.querySelector('#pilot-email').value.trim();
      form.hidden = true;
      form.previousElementSibling.hidden = true;
      form.previousElementSibling.previousElementSibling.hidden = true;
      done.hidden = false;
      done.focus();
    } catch (error) {
      showError(error && error.message ? error.message : navigator.onLine === false ? 'you appear to be offline' : '');
    } finally {
      button.disabled = false;
      button.textContent = buttonLabel;
      form.removeAttribute('aria-busy');
    }
  });
})();
