var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];


var randomItem = spellen[Math.floor(Math.random()*spellen.length)];
document.getElementById("spel").innerHTML = randomItem