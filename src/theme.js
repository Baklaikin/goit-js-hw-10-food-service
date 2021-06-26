const body = document.querySelector('body');
const theme = localStorage.getItem('theme');
console.log(theme);

const isLightTheme = body.classList.contains('light-theme');
const themeSwitcher = document.querySelector('#theme-switch-toggle');
const localDarkTheme = localStorage.setItem('theme', 'dark-theme');
const localLightTheme = localStorage.setItem('theme', 'light-theme');
console.log(theme);
body.classList.add(theme);

if (theme === 'dark-theme') {
    themeSwitcher.checked = true;
}

themeSwitcher.addEventListener('change', e => {
    if (themeSwitcher.checked === true) {
        
       body.classList.toggle('light-theme');
       body.classList.toggle('dark-theme');
       localStorage.removeItem('theme');
        localStorage.setItem('theme', 'dark-theme');
        console.log(localStorage.getItem('theme'));    
    } else {
         body.classList.toggle('light-theme');
        localStorage.removeItem('theme');
        body.classList.toggle('dark-theme');

        localStorage.setItem('theme', 'light-theme');
        console.log(localStorage.getItem('theme'));
    }
});

// function onWindowRefresh() {
//     console.log( theme);
//     if (theme === null) {
//         body.classList.toggle('light-theme')
//     } else {
//         body.classList.toggle('dark-theme');
//         themeSwitcher.checked = true;
//     }
// }
// body.addEventListener('load', onWindowRefresh);