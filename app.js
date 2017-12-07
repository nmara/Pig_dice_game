
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#current-" + activePlayer).textContent = dice; // Przypisujemy oczka na kostce do bieżącego wyniku

//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";
