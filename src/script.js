// Define the IDs of the pages in the app
const pages = ['page1', 'page2'];

/**
 * Show the requested page and hide all others.
 * Also update the document's title.
 */
function showPage(pageId) {
  const titles = {
    page1: 'Password Generator',
    page2: 'Type of Passwords',
  };

  // Hide all pages
  pages.forEach(id => {
    const page = document.getElementById(id);
    if (page) {
      page.setAttribute('hidden', true); // Make sure it's hidden
      page.style.display = 'none';
    }
  });

  // Show the requested page
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.removeAttribute('hidden');
    activePage.style.display = 'block';
  }

  // Update the browser tab title
  document.title = titles[pageId] || 'Password Generator';
}

/**
 * Navigate to a new page and add it to browser history
 */
function goToGenerator(pageId) {
  showPage(pageId);
  history.pushState({ page: pageId }, '', '#' + pageId);
}

/**
 * Listen for back/forward browser navigation
 */
window.addEventListener('popstate', (event) => {
  const pageId = event.state?.page || 'page1';
  showPage(pageId);
});

/**
 * On initial page load, show the correct page based on the URL hash,
 * and add the current state to history if it doesn't exist.
 */
window.addEventListener('DOMContentLoaded', () => {
  const initialPage = location.hash.replace('#', '') || 'page1';

  // Add history state only if it's not already there
  if (!history.state) {
    history.pushState({ page: initialPage }, '', '#' + initialPage);
  }

  showPage(initialPage);
});
// Add password length input listener
 function setupSlider(sliderId, displayId, activeColor = '#4caf50', inactiveColor = '#ddd') {
    const slider = document.getElementById(sliderId);
    const display = document.getElementById(displayId);

    if (slider && display) {
      function update() {
        const value = slider.value;
        const percentage = (value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, ${activeColor} ${percentage}%, ${inactiveColor} ${percentage}%)`;
        display.textContent = value;
      }

      update(); // set on load
      slider.addEventListener('input', update);
    }
  }

  setupSlider('passwordLength', 'lengthValue'); // for PC
  setupSlider('mobilePasswordLength', 'mobileLengthValue'); // for mobile

 // ✅ Handle all Yes/No button groups
  const yesNoSections = document.querySelectorAll('.flex.justify-around');

  yesNoSections.forEach(section => {
    const buttons = section.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Reset both buttons in this section
        buttons.forEach(btn => btn.style.backgroundColor = '#393939');
        // Set clicked button red
        button.style.backgroundColor = '#BD0000';
      });
    });
  });

   // Select only the toggle buttons for Numbers, Small, Capital, Special
  const toggleOptionButtons = document.querySelectorAll('#phones ');

  toggleOptionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isActive = button.style.backgroundColor === 'rgb(189, 0, 0)';
      button.style.backgroundColor = isActive ? '#393939' : '#BD0000';
    });
  });
   // Toggle "how many passwords" buttons
  const countButtons = document.querySelectorAll('.flex.justify-center.gap-4 button');

  countButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isActive = button.style.backgroundColor === 'rgb(189, 0, 0)';
      button.style.backgroundColor = isActive ? '#393939' : '#BD0000';
    });
  });