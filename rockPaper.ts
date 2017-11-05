
//Pour faire un duel
var rock = "rock", paper = "paper", scissor = "scissor";
var myChoice: string, yourChoice: string;
var result: string;
var resultChoice: string;

//le gagnant du pfc choisit le premier à jouer donc on crée les variables à choisir
//on crée une variable enum pour le premier ou deuxieme à jouer
enum playerOrder { First, Second };
//chaque joueurs a ses phases de duels

//on fait d'abord une partie de pierre feuille ciseaux
//le joueur choisi entre pierre feuille et ciseau
//lorsqu'il clique la carte, la valeur de la variable myChoice prend la valeur de la carte

$('div.scissor').on("click", function () { console.log("scissor"); myChoice = "scissor"; });
$('div.rock').on("click", function () { console.log("rock"); myChoice = "rock"; });
$('div.paper').on("click", function () { console.log("paper"); myChoice = "paper"; });

function whoIsGoingFirst(myChoice: string, yourChoice: string): void {
    if (myChoice == "paper") {
        if (yourChoice == "paper") {
            console.log("Match null");
            result = "Match null";
        }
        else if (yourChoice == "rock") {
            console.log("I win");
            result = "I win";
        }
        else if (yourChoice == "scissor") {
            console.log("I lose");
            result = "I lose";
        }
    }
    else if (myChoice == "rock") {
        if (yourChoice == "paper") {
            console.log("I lose");
            result = "I lose";
        }
        else if (yourChoice == "rock") {
            console.log("Match null");
            result = "Match null";
        }
        else if (yourChoice == "scissor") {
            console.log("I win");
            result = "I win";
        }
    }
    else if (myChoice == "scissor") {
        if (yourChoice == "paper") {
            console.log("I win");
            result = "I win";
        }
        else if (yourChoice == "rock") {
            console.log("I lose");
            result = "I lose";
        }
        else if (yourChoice == "scissor") {
            console.log("Match null");
            result = "Match null";
        }
    }
}
var position;
//le gagnant du pierre feuille ciseau choisi qui prend la main
if (result == "I win")
    whatIsMyTurn(position);

function whatIsMyTurn(whatPosition: string): void {
    if (whatPosition == "First")
        console.log("Je suis le premier");
    else if (whatPosition == "Second")
    { console.log("Je suis le deuxième"); }
}