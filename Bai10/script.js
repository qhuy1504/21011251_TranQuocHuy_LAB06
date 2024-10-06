const game = {
  team1: "Bayern Munich", 
  team2: "Borrussia Dortmund", players: [
    ["Neuer",
    "Pavard",
    "Martinez",
    "Aauher",
    "Kinnich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandawski",],
    [  "Burki",
    "Schulz",
    "Hummels",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",]
  ],
    
  
    score: "4:0",
    scored: ["Lewandawski", "Gnarby", "Lewandouski", "Hummels"],
    date: "Now 9th, 2037", 
    odds: 
    {
    team1: 1.33,
    x: 3.254,
    team2: 6.5,
    },
    };
    
    const [players1] = game.players[0];
    const [players2] = game.players[0];
const gk = players1[0];
const fieldPlayers = players1.slice(1);

const allPlayers = [...players1, ...players2];
const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
const { team1, x: draw, team2 } = game.odds;

const printGoals = (...players) => 
  document.write(`${players.length} goals were scored by: ${players.join(",")}`);
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
const likelyWinner = (team1 < team2 && game.team1) || game.team2;
document.write('<br>');
document.write(`${likelyWinner} is more likely to win`);


    