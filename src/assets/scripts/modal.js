import gsap from 'gsap';

const Modal = (projectButton, overlay) => {
    const defaultHeroImages = document.querySelectorAll('[data-hero-target]');
    const modal = document.querySelector(projectButton.dataset.modalTarget);

    const setContainer = () => {
        gsap.fromTo(modal, {scaleX: 0, scaleY: 1, transformOrigin: "left", left: "-50vw", top: "50vh"}, { left: "50vw", scaleX: 1, ease: "expo.out", duration: 0.35});
        modal.classList.add('active');
    }

    const setOverlay = (overlay) => {
        overlay.classList.add('active');
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
    defaultHeroImages.forEach(setHeroImage);
    

    return {
        open
    }
}

export default Modal;