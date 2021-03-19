import gsap from 'gsap';

const Modal = (() => {
  const defaultHeroImages = document.querySelectorAll('[data-hero-target]');
  const closeButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.querySelector('[data-modal-overlay]');

  const setContainer = (modal) => {
    gsap.fromTo(modal, {
      scaleX: 0, scaleY: 1, transformOrigin: 'left', left: '-50vw', top: '50vh',
    }, {
      left: '50vw', scaleX: 1, ease: 'expo.out', duration: 0.35,
    });
    modal.classList.add('active');
  };

  const setOverlay = (overlay) => {
    overlay.classList.add('active');
  };

  const hide = (element) => {
    element.classList.remove('active');
  };

  const resetCarrouselSelector = (parentElement) => {
    for (let i = 0; i < parentElement.childElementCount; i += 1) {
      if (parentElement.children[i].classList.contains('current-image')) {
        parentElement.children[i].classList.remove('current-image');
      }
    }
  };

  const setCarrouselSelector = (image) => {
    image.classList.add('current-image');
  };

  const setHeroImage = (image) => {
    const heroImageContainer = document.querySelector(image.dataset.heroTarget)
    || document.querySelector(image.dataset.imageTarget);
    const defaultHeroImage = image.currentStyle || window.getComputedStyle(image, false);
    const defaultHeroImageUrl = defaultHeroImage.backgroundImage.slice(4, -1).replace(/"/g, '');
    heroImageContainer.style.backgroundImage = `url(${defaultHeroImageUrl})`;
    resetCarrouselSelector(image.parentElement);
    setCarrouselSelector(image);
  };

  const open = (projectButton) => {
    const modal = document.querySelector(projectButton.dataset.modalTarget);
    setContainer(modal);
    setOverlay(overlay);
  };

  const close = (modal) => {
    gsap.fromTo(modal, { scaleY: 1 }, {
      top: '-50vh', scaleY: 0, transformOrigin: 'top', ease: 'bounce.out', duration: 0.5,
    });
    hide(modal);
    hide(overlay);
  };

  overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal.active');
    close(modal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const modal = document.querySelector('.modal.active');
      if (modal) close(modal);
    }
  });

  defaultHeroImages.forEach(setHeroImage);
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      close(modal);
    });
  });

  return {
    open,
    setHeroImage,
  };
})();

export default Modal;