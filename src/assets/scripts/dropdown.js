const Dropdown = (() => {
    const dropdownMenu = document.querySelector('[data-dropdown-menu]');

    const toggleFold = () => { dropdownMenu.classList.toggle('active') }

    const fold = () => { dropdownMenu.classList.remove('active') }
    return {
        toggleFold, 
        fold
    }
})();

export default Dropdown;