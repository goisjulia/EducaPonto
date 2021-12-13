

let isMenuOpen = false;

window.onload = function () {
    ScrollReveal().reveal('.reveal-section', { reset: false, interval: 1, delay: 500 });
};

const toggleMenu = (event) => {
    if (isMenuOpen) {
        event.target.classList.remove('close-button');
        document.getElementsByTagName('nav')[0].classList.remove('nav-purple');
        document.getElementsByTagName('nav')[0].classList.add('nav-main-blue');
        document.getElementsByClassName('nav-links')[0].classList.add('nav-hide');
        document.getElementsByClassName('nav-links')[0].classList.remove('nav-show');
        setTimeout(function () { document.getElementsByClassName('nav-links')[0].classList.remove('nav-hide') }, 1000);

    } else {
        event.target.classList.add('close-button');
        document.getElementsByTagName('nav')[0].classList.remove('nav-main-blue');
        document.getElementsByTagName('nav')[0].classList.add('nav-purple');
        document.getElementsByClassName('nav-links')[0].classList.add('nav-show');
    }
    isMenuOpen = !isMenuOpen;
}