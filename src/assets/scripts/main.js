import '../style/reset.css';
import '../style/small.css';
import '../style/medium.css';
import '../style/big.css';

const dropdown = document.querySelector('[data-dropdown]');
const dropdownMenu = document.querySelector('[data-dropdown-menu]');

dropdown.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
    });
});