var leagueTitle = document.getElementsByClassName('league-name')
var leagueMatche = Array.from(document.getElementsByClassName('league-mt'))

leagueTitle.addEventListener('click', () => {
    leagueMatche.forEach(matche => matche.style.display = 'auto');
})