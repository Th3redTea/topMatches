
// Side bar navigation menu code.
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

//League fixtures of all matches code. 

const leagueTitle = document.getElementById('league-name')
const leagueMatche = Array.from(document.querySelectorAll('.league-mt'))
const league = document.querySelector('.league')

leagueTitle.addEventListener('click', () => {
    leagueMatche.forEach(matche => matche.style.display = 'auto');
}) 
function addDisplay() {
    leagueMatche.forEach(matche => {
        if( matche.style.opacity === "0"){
            matche.style.opacity = "1"
            league.classList.add('show')
        }else if( matche.style.opacity === "1"){
            matche.style.opacity = "0"
            league.classList.remove('show')
        }else{
            matche.style.opacity = "1"
        }


    });
}

leagueTitle.addEventListener('click', addDisplay)