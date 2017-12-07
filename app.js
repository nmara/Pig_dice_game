
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = "none"; //Nie potrzebujemy kostki na początku
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function() {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }
}); //funkcja anonimowa

document.querySelector(".btn-hold").addEventListener("click", function () {
    // Add the current score to global score
    scores[activePlayer] += roundScore;
    // Update the ui
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
    // Check if player won the game
});

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
}


//SETTER - bo ustawiamy wartość
//document.querySelector("#current-" + activePlayer).textContent = dice; // Przypisujemy oczka na kostce do bieżącego wyniku

//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

//GETTER - bo pobieramy wartość
//var x = document.querySelector("#score-0").textContent;
//console.log(x); Tak można sprawdzać zawartość html'a w consoli
