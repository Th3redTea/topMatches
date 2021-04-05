
const barMenu = document.getElementById('bar-menu')
const navLinks = document.getElementById('nav-links')

barMenu.addEventListener('click', () => {

    if ( navLinks.style.width === '0%' && navLinks.style.visibility === "hidden"){
        navLinks.style.width = '40%';
        navLinks.style.visibility = "visible";
    }else if (navLinks.style.width === '40%' && navLinks.style.visibility === "visible") {
        navLinks.style.width = '0%';
        navLinks.style.visibility = 'hidden';
    }
    
     
})

const closeMenu = document.getElementById('close-menu')

closeMenu.addEventListener('click', () => {
    navLinks.style.width = '0%';
    navLinks.style.visibility = 'hidden'
})