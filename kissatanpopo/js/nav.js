const menuOpen = document.querySelector('.js-menu-open');
const menuClose = document.querySelector('.js-menu-close');
const menu = document.querySelector('.js-menu');
const navLinks = document.querySelectorAll('.js-menu a'); 

menuOpen.addEventListener('click', () => {
    menu.classList.add('active'); 
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active'); 
    });
});
