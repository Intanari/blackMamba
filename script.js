const toggleTheme = document.getElementById('toogle-theme');
const body = document.body;
const wrapper = document.querySelector('.wrapper');

toggleTheme.addEventListener('change', () => {
    body.classList.toggle('dark', toggleTheme.checked);
    wrapper.classList.toggle('dark', toggleTheme.checked);
});