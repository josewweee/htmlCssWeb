const toggleButton = document.querySelector('.toggle-button');
const navOptions = document.querySelector('.header-list--mobile');

toggleButton.addEventListener('click', (event) => {
    navOptions.style.display = navOptions.style.display === 'block' ? 'none' : 'block';
})

