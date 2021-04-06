
const barMenu = document.getElementById('bar-menu')
const navLinks = document.querySelector('.nav-links')
const movileView = window.matchMedia("(max-width:640px)")

barMenu.addEventListener('click', () => {

        navLinks.style.width = '40%';
        navLinks.style.visibility = "visible";
    
     
})

const closeMenu = document.getElementById('close-menu')

closeMenu.addEventListener('click', () => {
    navLinks.style.width = '0%';
    navLinks.style.visibility = 'hidden'
})