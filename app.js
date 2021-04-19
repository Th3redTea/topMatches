
// Side bar navigation menu code.
const barMenu = document.getElementById('bar-menu')
const navLinks = document.querySelector('.nav-links')
const closeMenu = document.getElementById('close-menu')

barMenu.addEventListener('click', () => {

        navLinks.style.width = '40%';
        navLinks.style.visibility = "visible";
    
})

closeMenu.addEventListener('click', () => {
    navLinks.style.width = '0%';
    navLinks.style.visibility = 'hidden'
})


var today = new Date();
var dd = today.getDate();
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();



//Get Matches of the day 

const key = "a0304240-a167-11eb-a64f-81eb7badeea4" //free API key.
var date_from = String(yyyy + '-' + mm + '-' + dd)
var date_to =  String(yyyy + '-' + mm + '-' + Number(dd+1))
var conatiner = document.getElementById('container')



async function getMatches() {

        const req = await fetch(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${key}&season_id=352&date_from=${date_from}&date_to=${date_to}`)
        const respn = await req.json();
        return respn.data // return an array of objects
}

let isMobile;
let matchMedia = window.matchMedia("(max-width:640px)");

getMatches().then(data => { 
        conatiner.innerHTML="";
        data.forEach(match => {
        console.log(match)

        
        //Home team data
        const homeTeam = match.home_team;
        const hometeamId = homeTeam.id;
        const hometeamLogo = homeTeam.logo;
        const hometeamScore = match.stats.home_score;
        let awayteamName;
        let hometeamName;

        //Away team data
        const awayTeam = match.away_team;
        const awayteamLogo = awayTeam.logo;
        const awayteamScore = match.stats.away_score;
        
        const awayteamId = awayTeam.id;

        if(isMobile){
            awayteamName = awayTeam.short_code;
            hometeamName = homeTeam.short_code;
        }else{
            awayteamName = awayTeam.name;
            hometeamName = homeTeam.name;
        }
        //matche info
        const matchState = match.status;
        let date1 = new Date(match.match_start);
        let matchHour = date1.getHours();
        let matchMinuts = date1.getMinutes();
        console.log(matchMinuts)
        
        if(matchMinuts == 0){
             matchMinuts = date1.getMinutes() + '0'; 
        }

        let game = document.createElement('div');
        game.classList.add('matche')
        game.innerHTML = `
                    <div id="team1">
                        <img id="team1" src="${hometeamLogo}" alt="">
                        <span><a href="team.html">${hometeamName}</a></span>
                    </div>
                    <span id="time">${matchHour}:${matchMinuts}</span>     
                    <div id="team2">
                        <span><a href="team.html">${awayteamName}</a></span>
                        <img src="${awayteamLogo}" alt="" id="team2">
                    </div>
        ` 
        conatiner.appendChild(game)
        }
    )

}
)

matchMedia.addListener(e => {
    isMobile = e.matches;

getMatches().then(data => { 
        conatiner.innerHTML="";
        data.forEach(match => {
        console.log(match)

        //Home team data
        const homeTeam = match.home_team;
        const hometeamId = homeTeam.id;
        const hometeamLogo = homeTeam.logo;
        const hometeamScore = match.stats.home_score;
        let awayteamName;
        let hometeamName;

        //Away team data
        const awayTeam = match.away_team;
        const awayteamLogo = awayTeam.logo;
        const awayteamScore = match.stats.away_score;
        
        const awayteamId = awayTeam.id;

        if(isMobile){
            awayteamName = awayTeam.short_code;
            hometeamName = homeTeam.short_code;
        }else{
            awayteamName = awayTeam.name;
            hometeamName = homeTeam.name;
        }

        //matche info

        const matchState = match.status;
        let date1 = new Date(match.match_start);
        let matchHour = date1.getHours();
        let matchMinuts = date1.getMinutes();

        if(matchMinuts == 0){
            matchMinuts = date1.getMinutes() + '0'; 
        }

        var game = document.createElement('div');
        game.classList.add('matche')
        game.innerHTML = `
                    <div id="team1">
                        <img id="team1" src="${hometeamLogo}" alt="">
                        <span><a href="team.html">${hometeamName}</a></span>
                    </div>
                    <span id="time">${matchHour}:${matchMinuts}</span>     
                    <div id="team2">
                        <span><a href="team.html">${awayteamName}</a></span>
                        <img src="${awayteamLogo}" alt="" id="team2">
                    </div>
        ` 
        conatiner.appendChild(game)
        }
    )

}
)
})


