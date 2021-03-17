import '../style/reset.css';
import '../style/small.css';
import '../style/medium.css';
import '../style/big.css';
import gsap from 'gsap';
import Dropdown from './dropdown'
import Modal from './modal';

const dropdown = document.querySelector('[data-dropdown]');
const navLink = document.querySelectorAll('.nav-link');

dropdown.addEventListener('click', Dropdown.toggleFold);

navLink.forEach(link => {
    link.addEventListener('click', Dropdown.fold);
});      

const seeProjectButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.querySelector('[data-modal-overlay]');

seeProjectButtons.forEach( projectButton => {
    let modal = Modal(projectButton, overlay);
    projectButton.addEventListener('click', modal.open);
});


overlay.addEventListener('click', () => {
    const activeModal = document.querySelector('.modal.active');
    gsap.fromTo(activeModal, {scaleY: 1}, {top: "-50vh", scaleY: 0, transformOrigin: "top", ease: "bounce.out", duration: 0.5});
    activeModal.classList.remove('active');
    overlay.classList.remove('active');
});

const projectImages = document.querySelectorAll('[data-image-target]');

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        const heroContainer = document.querySelector(image.dataset.imageTarget);
        const divBackground = image.currentStyle || window.getComputedStyle(image, false);
        const imageUrl = divBackground.backgroundImage.slice(4, -1).replace(/"/g, "");
        heroContainer.style.backgroundImage = `url(${imageUrl})`;
        // need refactor with number 1
        for(let i = 0; i < image.parentElement.childElementCount; i+=1){
            if(image.parentElement.children[i].classList.contains('current-image')) {
                image.parentElement.children[i].classList.remove('current-image');
                image.classList.add('current-image');
            }
        }
        
    });
});

