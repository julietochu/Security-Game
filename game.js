
let loops = 0;
let peopleVisible = false;
let gameScore = 0;

function startGame() {
    loops = 0
    gameScore = 0;
    peopleVisible = false;
    gameLoop()
}

function gameLoop() {
    peopleVisible = !peopleVisible;
    createCharacters();
    loops++;
    if (loops < 12) {
        setTimeout(gameLoop, peopleVisible ? 1000 : 3000);
    }
    else {
        alert("You scored " + gameScore)
    }
}
function createCharacters() {
    let cards = document.getElementsByClassName("card-small");
    let classToSet = peopleVisible ? "character visible" : "character hidden";
    for (let index = 0; index <= 5; index++) {
        console.log("cards", cards[index])
        cards[index].className = "card-small " + classToSet;
        console.log("card-small", cards[index]);
        cards[index].innerHTML = "";
        cards[index].onclick = function () {
            gameScore -= 2;
        }
    }

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    cards[randomNumber - 1].innerHTML = "";
    cards[randomNumber - 1].onclick = function () {
        gameScore++;
    }
    cards[randomNumber - 1].className = "card-small " + classToSet + " thief";
}



