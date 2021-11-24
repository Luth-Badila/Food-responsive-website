// Menu sticky
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Menu
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigationBar = document.querySelector('.navbar');
    menuToggle.classList.toggle('active')
    navigationBar.classList.toggle('active')
}