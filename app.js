
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



//Get Matches of the day 

const key = "9eee3620-99fa-11eb-9962-898dedcc3ac9" //free API key.
const date_from = "2021-04-9"
const date_to = "2021-04-12"

//DOM elements.

var conatiner = document.getElementById('container')



async function getMatches() {

        const req = await fetch(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${key}&season_id=352&&date_from=${date_from}&date_to=${date_to}`)
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
        const matchTime = match.match_start;

        var game = document.createElement('div');
        game.classList.add('matche')
        game.innerHTML = `
                    <div id="team1">
                        <img id="team1" src="${hometeamLogo}" alt="">
                        <span><a href="team.html">${hometeamName}</a></span>
                    </div>
                    <span id="time">21:00</span>     
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

matchMedia.addListener(e=>{
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
        const matchTime = match.match_start;

        var game = document.createElement('div');
        game.classList.add('matche')
        game.innerHTML = `
                    <div id="team1">
                        <img id="team1" src="${hometeamLogo}" alt="">
                        <span><a href="team.html">${hometeamName}</a></span>
                    </div>
                    <span id="time">21:00</span>     
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


