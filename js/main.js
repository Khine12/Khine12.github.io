const toggleBtn = document.getElementById('toggle-theme');

// Set initial icon
if (document.body.classList.contains('dark-mode')) {
  toggleBtn.textContent = '🌞';
} else {
  toggleBtn.textContent = '🌚';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Toggle icon
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '🌞';
  } else {
    toggleBtn.textContent = '🌚';
  }
});
