// JavaScript - Toggle Project Description
document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', () => {
        const description = title.nextElementSibling;
        const isVisible = description.style.display === 'block';
        description.style.display = isVisible ? 'none' : 'block';
    });
});
// JavaScript - Highlight Input Field on Focus
document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('focus', () => {
        field.style.backgroundColor = '#f0f8ff'; // Light blue when focused
    });

    field.addEventListener('blur', () => {
        field.style.backgroundColor = ''; // Reset to default
    });
});

// JavaScript - Keyboard Shortcuts for Navigation
document.addEventListener('keydown', event => {
    if (event.ctrlKey) { // Check if 'Ctrl' is pressed
        switch (event.key.toLowerCase()) {
            case '1': // Ctrl + 1 navigates to Home
                document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
                break;
            case '2': // Ctrl + 2 navigates to About Me
                document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                break;
            case '3': // Ctrl + 3 navigates to Projects
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                break;
            case '4': // Ctrl + 4 navigates to Contact
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});

