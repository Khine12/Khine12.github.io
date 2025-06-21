const toggleBtn = document.getElementById('toggle-theme');

// Set initial icon to match dark mode
toggleBtn.textContent = '☀️';

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Toggle icon
  if (toggleBtn.textContent === '🌙') {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});
