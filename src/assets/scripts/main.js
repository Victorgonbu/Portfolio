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

const seeProjectButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.querySelector('[data-modal-overlay]');

seeProjectButtons.forEach( projectButton => {
    projectButton.addEventListener('click', () => {
        const modal = document.querySelector(projectButton.dataset.modalTarget);
        modal.classList.add('active');
        overlay.classList.add('active');
    });
});

const closeButtons = document.querySelectorAll('[data-close-button]');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });
});

overlay.addEventListener('click', () => {
    const activeModal = document.querySelector('.modal.active');
    activeModal.classList.remove('active');
    overlay.classList.remove('active');
});

