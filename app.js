
const barMenu = document.getElementById('bar-menu')
const navLinks = document.querySelector('.nav-links')
// const movileView = window.matchMedia("(max-width:640px)")
const closeMenu = document.getElementById('close-menu')

barMenu.addEventListener('click', () => {

        navLinks.style.width = '40%';
        navLinks.style.visibility = "visible";
    
     
})



closeMenu.addEventListener('click', () => {
    navLinks.style.width = '0%';
    navLinks.style.visibility = 'hidden'
})