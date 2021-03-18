import '../style/reset.css';
import '../style/small.css';
import '../style/medium.css';
import '../style/big.css';
import Dropdown from './dropdown';
import Modal from './modal';

const dropdown = document.querySelector('[data-dropdown]');
const navLink = document.querySelectorAll('.nav-link');

dropdown.addEventListener('click', Dropdown.toggleFold);

navLink.forEach(link => { link.addEventListener('click', Dropdown.fold); });

const seeProjectButtons = document.querySelectorAll('[data-modal-target]');


seeProjectButtons.forEach(project => { project.addEventListener('click', () => { Modal.open(project); }); });

const projectImages = document.querySelectorAll('[data-image-target]');

projectImages.forEach(image => { image.addEventListener('click', () => { Modal.setHeroImage(image); }); });


