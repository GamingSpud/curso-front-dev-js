const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileBurger = document.querySelector('.menu')

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileBurger.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');}
);



function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}