// Contact form validation — checks empty fields, email format, and
// digits-only phone numbers before allowing a (simulated) submission.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const fields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    message: document.getElementById('message'),
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d+$/;

  function setError(field, message) {
    const errorEl = document.getElementById(`${field.id}-error`);
    if (message) {
      field.classList.add('error');
      if (errorEl) errorEl.textContent = message;
    } else {
      field.classList.remove('error');
      if (errorEl) errorEl.textContent = '';
    }
  }

  function validateField(field) {
    const value = field.value.trim();

    if (value === '') {
      setError(field, 'This field cannot be empty.');
      return false;
    }

    if (field.id === 'email' && !emailPattern.test(value)) {
      setError(field, 'Enter a valid email address (e.g. name@example.com).');
      return false;
    }

    if (field.id === 'phone' && !phonePattern.test(value)) {
      setError(field, 'Phone number must contain digits only.');
      return false;
    }

    setError(field, '');
    return true;
  }

  // Validate as the user leaves each field
  Object.values(fields).forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const results = Object.values(fields).map((field) => validateField(field));
    const allValid = results.every(Boolean);

    status.classList.remove('success', 'failure');

    if (!allValid) {
      status.classList.add('failure');
      status.textContent = 'Please correct the highlighted fields before submitting.';
      return;
    }

    // No backend is connected yet — this simulates a successful submission.
    status.classList.add('success');
    status.textContent = `Thanks, ${fields.name.value.trim()}. Your message has been noted (form is not yet connected to a server).`;
    form.reset();
  });
});
