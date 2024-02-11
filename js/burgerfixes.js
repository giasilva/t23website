
  // går ej att scrolla när menyn är öppen
document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.querySelector('.checkbox');
  const body = document.querySelector('body');
  
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  });
});

  // klicka utanför menyn för att stänga
document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.querySelector('.checkbox');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  checkbox.addEventListener('change', function() {
      if (this.checked) {
          overlay.style.display = 'block'; // Show the overlay when the menu is open
          body.style.overflow = 'hidden'; // Prevent scrolling on the body when the menu is open
      } else {
          overlay.style.display = 'none'; // Hide the overlay when the menu is closed
          body.style.overflow = 'auto'; // Allow scrolling on the body when the menu is closed
      }
  });

  overlay.addEventListener('click', function() {
      checkbox.checked = false; // Uncheck the checkbox when the overlay is clicked
      overlay.style.display = 'none'; // Hide the overlay
      body.style.overflow = 'auto'; // Allow scrolling on the body
  });
});
