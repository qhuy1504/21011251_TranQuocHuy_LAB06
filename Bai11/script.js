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
    
const printGoals = () => {
  let len = game.scored.length;
  for (let index = 0; index < len; index++) {
    const element = game.scored[index];
    document.write(`Goal ${index + 1}: ${element}`);
    document.write('<br>');
  }

};
printGoals();
const odds = Object.values(game.odds);
const avgOdd = () => {
  let len = game.scored.length;
  let sum = 0;
  for (const odd of odds) {
    sum += odd;
  }
  return sum / len;
};
document.write(`Average odd: ${avgOdd()}`);
document.write('<br>');
document.write(`Odd of victory: ${game.team1}: ${game.odds.team1}`);
document.write('<br>');
document.write(`Odd of draw: ${game.odds.x}`);
document.write('<br>');
document.write(`Odd of victory: ${game.team2}: ${game.odds.team2}`);
const scores = game.score.reduce((acc, player) => {
  acc[player] = (acc[player] || 0) + 1;
  return acc;
}, {});
document.write('<br>');
document.write(`Scores: ${scores}`);


    