"use strict";
var Player = /** @class */ (function () {
    // Player: Turn;
    /*public constructor(nom: string, lp: number, deck: Card, trunk: Card, hand: Card, side: Card, extra: Card, myTurn: Turn;IcanSummon: boolean) {
        this.pseudo = nom;
        this.lifePoints = lp;
        this.deck = deck;
        //this.sideDeck: Card;
        //this.Trunk: Card;
        this.hand: Card;
        this.playerTurn: Turn;
        //this.canNormalSummon: boolean;
        //this.extraDeck: Card;
    }*

    public constructor(nom: string, lp: number, deck: Card[], hand: Card[]) {
        this.playerID = 0;
        this.pseudo = nom;
        this.lifePoints = lp;
        this.deck = deck;
        this.hand = hand;
        this.playerTurn = new Turn();
    }*/
    function Player() {
        this.turnToPlay = false;
        this.playerID = 0;
        this.pseudo = '';
        this.lifePoints = 0;
        this.canNormalSummon = true;
        this.deck = [];
        this.hand = [];
        this.turnToPlay = false;
        this.playerTurn = new Turn();
    }
    Player.prototype.getLifePoints = function () {
        return this.lifePoints;
    };
    Player.prototype.newTurn = function (parameterPlayer) {
        this.playerTurn = new Turn();
    };
    /* directAttack(positionMonsterOnField:number,positionTargetAttack:number): void {
         // TODO implement here
 
     }*/
    Player.prototype.summonMonster = function (playerSide, position) {
        if (this.canNormalSummon == true) {
            if (playerSide.monsterZone1IsEmpty) {
                console.log("Le première zM est vide");
                playerSide.monsterZone1.monsterPosition.push(this.hand[position]);
                this.hand.splice(position, 1);
            }
            else if (playerSide.monsterZone2IsEmpty) {
                console.log("Le deuxième zM est vide");
                playerSide.monsterZone2.monsterPosition.push(this.hand[position]);
                this.hand.splice(position, 1);
            }
            else if (playerSide.monsterZone3IsEmpty) {
                console.log("Le troisième zM est vide");
                playerSide.monsterZone3.monsterPosition.push(this.hand[position]);
                this.hand.splice(position, 1);
            }
            else if (playerSide.monsterZone4IsEmpty) {
                console.log("Le quatrième zM est vide");
                playerSide.monsterZone4.monsterPosition.push(this.hand[position]);
                this.hand.splice(position, 1);
            }
            else if (playerSide.monsterZone5IsEmpty) {
                console.log("Le cinquième zM est vide");
                playerSide.monsterZone5.monsterPosition.push(this.hand[position]);
                this.hand.splice(position, 1);
            }
        }
        else if (this.canNormalSummon == false) {
            console.log("Vous avez deja fait une invocation normal ce tour");
        }
    };
    /*setMonster(playerSide: PlayerSideField, myCard: Monster): void {
        // TODO implement here
        if (playerSide.monsterZone1IsEmpty)
            playerSide.monsterZone1.monsterPosition.push(myCard)
        else if (playerSide.monsterZone2IsEmpty)
            playerSide.monsterZone2.monsterPosition.push(myCard)
        else if (playerSide.monsterZone3IsEmpty)
            playerSide.monsterZone3.monsterPosition.push(myCard)
        else if (playerSide.monsterZone4IsEmpty)
            playerSide.monsterZone4.monsterPosition.push(myCard)
        else if (playerSide.monsterZone5IsEmpty)
            playerSide.monsterZone5.monsterPosition.push(myCard)
    }*/
    Player.prototype.setCardInTMZone = function () {
        // TODO implement here
    };
    Player.prototype.shuffleDeck = function () {
        console.log("Moi, le joueur " + this.pseudo + " Je bat mes cartes ");
    };
    Player.prototype.beginingDuelDraw = function () {
        console.log("C'est le début du duel donc " + this.pseudo + " pioche 5 cartes");
        //on ajoute les 5 cartes du dessus du deck dans la main du joueur
        this.drawCard(5);
    };
    Player.prototype.drawCard = function (many) {
        if (many === void 0) { many = 1; }
        var c = 0;
        //On recupère la carte au sommet du deck et on l'ajoute à la main si il y a au moins une carte dans le deck
        if (this.deck.length > 0) {
            console.log("tu as des cartes dans le deck donc on pioche " + this.pseudo);
            //while (c < many) {
            this.hand.push(this.deck.pop());
            //  c += 1;
            //}
        }
        else {
            //while (c < many) {
            //  this.hand.push(this.deck.pop());
            //c += 1;
            //}
            console.log("vous n'avez plus de carte dans le deck");
            //this.loser = player;
        }
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map