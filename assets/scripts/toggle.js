if (!window.localStorage) {
    console.log('localStorage is not available');
}
else {
    var modeSwitcher = document.getElementById('mode-switcher');
    if (modeSwitcher) {
        // Check for saved 'mode' in localStorage
        var currentMode_1 = localStorage.getItem('mode');
        if (currentMode_1) {
            document.body.classList.add(currentMode_1);
            modeSwitcher.className = currentMode_1 === 'dark-mode' ? 'fa fa-moon' : 'fa fa-sun';
        }
        else {
            // If there's no saved mode, default to light mode
            document.body.classList.add('light-mode');
            modeSwitcher.className = 'fa fa-sun';
        }
        // Apply styles to specific elements
        var color_1 = currentMode_1 === 'dark-mode' ? 'var(--text-color-dark)' : 'var(--text-color-light)';
        var bgColor = currentMode_1 === 'dark-mode' ? 'var(--bg-color-dark)' : 'var(--bg-color-light)';
        applyStyles(document.body, color_1, bgColor);
        applyStyles(document.getElementById('main_content'), bgColor, bgColor);
        // Specify the elements you want to change color
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'li'].forEach(function (tag) {
            document.querySelectorAll("#main_content ".concat(tag)).forEach(function (el) { return applyStyles(el, color_1); });
        });
        // Specify the elements in the navigation table
        ['.nav-table span'].forEach(function (tag) {
            document.querySelectorAll(tag).forEach(function (el) {
                if (currentMode_1 === 'dark-mode') {
                    el.classList.remove('light-mode');
                    el.classList.add('dark-mode');
                }
                else {
                    el.classList.remove('dark-mode');
                    el.classList.add('light-mode');
                }
            });
        });
        modeSwitcher.addEventListener('click', function () {
            var body = document.body;
            var mode = 'light-mode';
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                this.className = 'fa fa-sun';
                console.log('Switched to Light Mode');
            }
            else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                this.className = 'fa fa-moon';
                mode = 'dark-mode';
                console.log('Switched to Dark Mode');
            }
            // Save the current mode in localStorage
            localStorage.setItem('mode', mode);
            // Apply styles to specific elements
            var color = mode === 'dark-mode' ? 'var(--text-color-dark)' : 'var(--text-color-light)';
            var bgColor = mode === 'dark-mode' ? 'var(--bg-color-dark)' : 'var(--bg-color-light)';
            applyStyles(document.body, color, bgColor);
            applyStyles(document.getElementById('main_content'), bgColor, bgColor);
            // Specify the elements you want to change color
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'li'].forEach(function (tag) {
                document.querySelectorAll("#main_content ".concat(tag)).forEach(function (el) { return applyStyles(el, color); });
            });
            // Specify the elements in the navigation table
            ['.nav-table span'].forEach(function (tag) {
                document.querySelectorAll(tag).forEach(function (el) {
                    if (mode === 'dark-mode') {
                        el.classList.remove('light-mode');
                        el.classList.add('dark-mode');
                    }
                    else {
                        el.classList.remove('dark-mode');
                        el.classList.add('light-mode');
                    }
                });
            });
        });
    }
}
function applyStyles(element, color, bgColor) {
    if (element) {
        // Check if the element is inside a nav or footer tag
        var parent_1 = element.parentElement;
        while (parent_1) {
            if (parent_1.tagName.toLowerCase() === 'nav' || parent_1.tagName.toLowerCase() === 'footer') {
                return; // If it is, don't apply the styles
            }
            parent_1 = parent_1.parentElement;
        }
        // If it's not, apply the styles
        element.style.color = color;
        if (bgColor) {
            element.style.backgroundColor = bgColor;
        }
    }
}
