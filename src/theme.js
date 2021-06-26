const body = document.querySelector('body');
const localTheme = localStorage.getItem('theme');
const themeSwitcher = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


if (localTheme === 'dark-theme') {
    themeSwitcher.checked = true;
    body.classList.add(Theme.DARK);
}

body.classList.add(localTheme);

themeSwitcher.addEventListener('change', e => {
    if (themeSwitcher.checked === true) {
        
       body.classList.toggle('light-theme');
       body.classList.toggle('dark-theme');
       localStorage.removeItem('theme');
       localStorage.setItem('theme', Theme.DARK);
        
    } else {
        body.classList.toggle('light-theme');
        localStorage.removeItem('theme');
        body.classList.toggle('dark-theme');

        localStorage.setItem('theme', Theme.LIGHT);
    }
});
