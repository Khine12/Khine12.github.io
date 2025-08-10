const toggleBtn = document.getElementById('toggle-theme');

function applyTheme(theme) {
  document.body.classList.remove('dark-mode', 'light-mode');
  document.body.classList.add(theme);
  toggleBtn.textContent = theme === 'dark-mode' ? '🌞' : '🌚';
  localStorage.setItem('theme', theme);
}

// Init: use saved theme if present; otherwise default to dark
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark-mode' || saved === 'light-mode') {
    applyTheme(saved);
  } else {
    applyTheme('dark-mode'); // default
  }
})();

toggleBtn.addEventListener('click', () => {
  const next = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
  applyTheme(next);
});
