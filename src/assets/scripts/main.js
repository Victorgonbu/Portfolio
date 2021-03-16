import '../style/reset.css';
import '../style/small.css';
import '../style/medium.css';
import '../style/big.css';
import gsap from 'gsap';

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

const resetCarrouselSelector = (parentElement) => {
        for(let i = 0; i < parentElement.childElementCount; i+=1){
            if(parentElement.children[i].classList.contains('current-image')){
                parentElement.children[i].classList.remove('current-image');
            }
        }
}

seeProjectButtons.forEach( projectButton => {
    projectButton.addEventListener('click', () => {
        const modal = document.querySelector(projectButton.dataset.modalTarget);
        const defaultHeroImages = document.querySelectorAll('[data-hero-target]');
        // pretty similar to the thing we are doing in project images --refactor number 1
        defaultHeroImages.forEach(defaultImage => {
            const heroImageContainer = document.querySelector(defaultImage.dataset.heroTarget);
            const defaultHeroImage = defaultImage.currentStyle || window.getComputedStyle(defaultImage, false);
            const defaultHeroImageUrl = defaultHeroImage.backgroundImage.slice(4, -1).replace(/"/g, "");
            heroImageContainer.style.backgroundImage = `url(${defaultHeroImageUrl})`
            resetCarrouselSelector(defaultImage.parentElement);
            defaultImage.classList.add('current-image');
            
        });
    
        gsap.fromTo(modal, {scaleX: 0, scaleY: 1, transformOrigin: "left", left: "-50vw", top: "50vh"}, { left: "50vw", scaleX: 1, ease: "expo.out", duration: 0.5});
        modal.classList.add('active');
        overlay.classList.add('active');
    });
});

const closeButtons = document.querySelectorAll('[data-close-button]');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        gsap.fromTo(modal, {scaleY: 1}, {top: "-50vh", scaleY: 0, transformOrigin: "top", ease: "bounce.out", duration: 0.5});
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });
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
