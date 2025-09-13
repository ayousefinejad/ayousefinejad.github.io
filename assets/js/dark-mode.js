// Dark Mode Toggle Functionality
(function() {
  'use strict';

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the theme immediately to prevent flash
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Dark mode toggle function
  function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update the theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save the preference
    localStorage.setItem('theme', newTheme);
    
    // Update the toggle button icon
    updateToggleIcon(newTheme);
  }

  // Update the toggle button icon based on current theme
  function updateToggleIcon(theme) {
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
      const icon = toggleButton.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'fas fa-sun';
          toggleButton.setAttribute('title', 'Switch to light mode');
        } else {
          icon.className = 'fas fa-moon';
          toggleButton.setAttribute('title', 'Switch to dark mode');
        }
      }
    }
  }

  // Initialize the toggle button when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleDarkMode);
      
      // Set initial icon state
      const currentTheme = document.documentElement.getAttribute('data-theme');
      updateToggleIcon(currentTheme);
    }
  });

  // Listen for system theme changes
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Only apply system preference if no user preference is saved
    if (!localStorage.getItem('theme')) {
      mediaQuery.addListener(function(e) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateToggleIcon(newTheme);
      });
    }
  }
})();
