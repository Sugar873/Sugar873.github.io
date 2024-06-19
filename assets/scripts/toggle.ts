if (!window.localStorage) {
  console.log('localStorage is not available');
} else {
  const modeSwitcher = document.getElementById('mode-switcher');

  if (modeSwitcher) {
    // Check for saved 'mode' in localStorage
    let currentMode = localStorage.getItem('mode');

    if (currentMode) {
      document.body.classList.add(currentMode);
      modeSwitcher.className = currentMode === 'dark-mode' ? 'fa fa-moon' : 'fa fa-sun';
    } else {
      // If there's no saved mode, default to light mode
      document.body.classList.add('light-mode');
      modeSwitcher.className = 'fa fa-sun';
    }

    // Apply styles to specific elements
    const color = currentMode === 'dark-mode' ? 'var(--text-color-dark)' : 'var(--text-color-light)';
    const bgColor = currentMode === 'dark-mode' ? 'var(--bg-color-dark)' : 'var(--bg-color-light)';

    applyStyles(document.body, color, bgColor);
    applyStyles(document.getElementById('main_content'), bgColor, bgColor);

    // Specify the elements you want to change color
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'li'].forEach(tag => {
      document.querySelectorAll(`#main_content ${tag}`).forEach(el => applyStyles(el as HTMLElement, color));
    });

    // Specify the elements in the navigation table
    ['.nav-table span'].forEach(tag => {
      document.querySelectorAll(tag).forEach(el => {
        if (currentMode === 'dark-mode') {
          el.classList.remove('light-mode');
          el.classList.add('dark-mode');
        } else {
          el.classList.remove('dark-mode');
          el.classList.add('light-mode');
        }
      });
    });

    modeSwitcher.addEventListener('click', function() {
      var body = document.body;
      let mode = 'light-mode';
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        this.className = 'fa fa-sun';
        console.log('Switched to Light Mode');
      } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        this.className = 'fa fa-moon';
        mode = 'dark-mode';
        console.log('Switched to Dark Mode');
      }
      // Save the current mode in localStorage
      localStorage.setItem('mode', mode);

      // Apply styles to specific elements
      const color = mode === 'dark-mode' ? 'var(--text-color-dark)' : 'var(--text-color-light)';
      const bgColor = mode === 'dark-mode' ? 'var(--bg-color-dark)' : 'var(--bg-color-light)';

      applyStyles(document.body, color, bgColor);
      applyStyles(document.getElementById('main_content'), bgColor, bgColor);

      // Specify the elements you want to change color
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'li'].forEach(tag => {
        document.querySelectorAll(`#main_content ${tag}`).forEach(el => applyStyles(el as HTMLElement, color));
      });

      // Specify the elements in the navigation table
      ['.nav-table span'].forEach(tag => {
        document.querySelectorAll(tag).forEach(el => {
          if (mode === 'dark-mode') {
            el.classList.remove('light-mode');
            el.classList.add('dark-mode');
          } else {
            el.classList.remove('dark-mode');
            el.classList.add('light-mode');
          }
        });
      });
    });
  }
}

function applyStyles(element: HTMLElement | null, color: string, bgColor?: string): void {
  if (element) {
    // Check if the element is inside a nav or footer tag
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === 'nav' || parent.tagName.toLowerCase() === 'footer') {
        return;  // If it is, don't apply the styles
      }
      parent = parent.parentElement;
    }

    // If it's not, apply the styles
    element.style.color = color;
    if (bgColor) {
      element.style.backgroundColor = bgColor;
    }
  }
}