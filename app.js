const leagueTitle = document.getElementById('league-name')
const leagueMatche = Array.from(document.querySelectorAll('.league-mt'))
const league = document.querySelector('.league')

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
