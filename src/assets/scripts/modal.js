import gsap from 'gsap';

const Modal = (projectButton, overlay) => {
    const defaultHeroImages = document.querySelectorAll('[data-hero-target]');
    const modal = document.querySelector(projectButton.dataset.modalTarget);
    const closeButtons = document.querySelectorAll('[data-close-button]');

    const setContainer = () => {
        gsap.fromTo(modal, {scaleX: 0, scaleY: 1, transformOrigin: "left", left: "-50vw", top: "50vh"}, { left: "50vw", scaleX: 1, ease: "expo.out", duration: 0.35});
        modal.classList.add('active');
    }

    const setOverlay = (overlay) => {
        overlay.classList.add('active');
    }

    const hide = (element) => {
        element.classList.remove('active');
    }

    const resetCarrouselSelector = (parentElement) => {
        for(let i = 0; i < parentElement.childElementCount; i+=1){
            if(parentElement.children[i].classList.contains('current-image')){
                parentElement.children[i].classList.remove('current-image');
            }
        }
    }

    const setDefaultCarrouselSelector = (defaultImage) => {
        defaultImage.classList.add('current-image');
    }

    const setHeroImage = (defaultImage) => {
        const heroImageContainer = document.querySelector(defaultImage.dataset.heroTarget);
        const defaultHeroImage = defaultImage.currentStyle || window.getComputedStyle(defaultImage, false);
        const defaultHeroImageUrl = defaultHeroImage.backgroundImage.slice(4, -1).replace(/"/g, "");
        heroImageContainer.style.backgroundImage = `url(${defaultHeroImageUrl})`
        resetCarrouselSelector(defaultImage.parentElement);
        setDefaultCarrouselSelector(defaultImage);
    }

    const open = () => {
        setContainer();
        setOverlay(overlay);
    }

    const close = (event) => {
        const modal = event.path[1];
        gsap.fromTo(modal, {scaleY: 1}, {top: "-50vh", scaleY: 0, transformOrigin: "top", ease: "bounce.out", duration: 0.5});
        hide(modal);
        hide(overlay);
    }

    defaultHeroImages.forEach(setHeroImage);
    closeButtons.forEach(button => { button.addEventListener('click', close) });

    return {
        open
    }
}

export default Modal;