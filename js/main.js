const usesDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false;
const favicon = document.getElementById('favicon');
const manifest = document.getElementById('manifest');

function switchIcon(usesDarkMode) {
    if (usesDarkMode) {
        favicon.href = 'https://luandersonn.com/images/alunoufc/app-logo-dark.png';
    } else {
        favicon.href = 'https://luandersonn.com/images/alunoufc/app-logo-light.png';
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (e) => switchIcon(e.matches));
switchIcon(usesDarkMode);