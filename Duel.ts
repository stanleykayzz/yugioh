
class Duel {
    duelists: Player[];
    winner: Player;
    loser: Player;
    draw: Player[];
    countTurns: number;
    GameField: GameField;
    FirstPlayer: Player;
    SecondPlayer: Player;
    duelTurn: Turn;
    canBegin: boolean = false;
    endDuel: boolean = false;
    counterForTurn: number;

    public constructor(playerList: Player[]) {
        this.counterForTurn = 0;
        this.winner = null;
        this.loser = null;
        this.draw = null;
        this.duelists = playerList;
        this.GameField = new GameField();
        this.countTurns = 0;

        this.FirstPlayer = this.duelists[0];//on met le premier en premier pour tests
        this.SecondPlayer = this.duelists[1];//on met le premier en 2nd pour tests

        //on shuffle le deck des joueurs

        this.duelists[0].shuffleDeck();
        this.duelists[1].shuffleDeck();

        //on pioche 5 cartes pour chaque joueurs

        //this.duelists[0].beginingDuelDraw();
        //this.duelists[1].beginingDuelDraw();
        var c = 0;
        while (c < 5) {

            this.FirstPlayer.drawCard();
            this.SecondPlayer.drawCard();
            c++;
        }
        /*
        this.drawCard(this.duelists[0], 5);
        this.drawCard(this.duelists[1], 5);*/

        ///// DuelUntilVictory
        this.canBegin = true;
        this.duelManager(this.duelists);
                
    }
    /*EndOfDuel(): void {
        for (let player of this.duelists) {
            if (player.surrender())
                this.losers.push(player.surrender())
        }
    }*/

    directAttack(attackingPlayer: Player, targetPlayer: Player, positionMonsterOnField: number, positionTargetAttack: number): void {
        // TODO implement here
        //a modifier plus tard eveidement pour avoir plus de precision sur les terrains affecté a chaque joueur( qui game le premier a le premier terrain evidemment)
        if (positionMonsterOnField == 0)
            targetPlayer.lifePoints = targetPlayer.lifePoints - (<Monster>this.GameField.field1.monsterZone1.monsterPosition[0]).attackPoints;
        else if (positionMonsterOnField == 1)
            targetPlayer.lifePoints = targetPlayer.lifePoints - (<Monster>this.GameField.field1.monsterZone1.monsterPosition[1]).attackPoints;
        else if (positionMonsterOnField == 2)
            targetPlayer.lifePoints = targetPlayer.lifePoints - (<Monster>this.GameField.field1.monsterZone1.monsterPosition[2]).attackPoints;
        else if (positionMonsterOnField == 3)
            targetPlayer.lifePoints = targetPlayer.lifePoints - (<Monster>this.GameField.field1.monsterZone1.monsterPosition[3]).attackPoints;
        else if (positionMonsterOnField == 4)
            targetPlayer.lifePoints = targetPlayer.lifePoints - (<Monster>this.GameField.field1.monsterZone1.monsterPosition[4]).attackPoints;
        //on verifie si il y a un gagnant et un perdant
        this.checkForWinner();
    }

    surrender(losingPlayer: Player) {
        console.log("Le joueur " + losingPlayer.pseudo + " viens d'abondonner");
        this.loser = losingPlayer;
        if (this.loser.pseudo == this.FirstPlayer.pseudo)
            this.winner = this.SecondPlayer;
        else
            this.winner = this.FirstPlayer;
        return this;
    }

    checkForWinner(): void {
        if (this.duelists[0].getLifePoints() <= 0) {
            this.loser = this.duelists[0];
            console.log(" " + this.duelists[0] + " loose and " + this.duelists[1] + " win");
            this.winner = this.duelists[1];
        }
        else if (this.duelists[1].getLifePoints() <= 0) {
            this.loser = this.duelists[1];
            console.log(" " + this.duelists[1] + " loose and " + this.duelists[0] + " win");
            this.winner = this.duelists[0];
        }
    }

    //Fonction qui va gérer le bon déroulement du duel jusqu'à la victoire d'un des joueurs
    duelManager(listOfPlayers: Player[]): void {
        if (this.winner == null || this.loser == null || this.draw == null) {
            //au début les deux ne peuvent pas donc on met le premier a true
            if (listOfPlayers[0].turnToPlay == false && listOfPlayers[1].turnToPlay == false) {
                //on fait jouer chacun tour à tour
                listOfPlayers[this.counterForTurn].turnToPlay = true;
                if (listOfPlayers[this.counterForTurn].playerTurn.endphase == true) {
                    listOfPlayers[this.counterForTurn].turnToPlay = false;
                    if (this.counterForTurn == 0) {
                        this.counterForTurn = 1;
                    }
                    else {
                        this.counterForTurn = 0;
                    }
                    listOfPlayers[this.counterForTurn].turnToPlay = true;
                }
            }
            else if (listOfPlayers[0].turnToPlay == true && listOfPlayers[1].turnToPlay == false) {
                if (listOfPlayers[0].playerTurn.endphase == true) {
                    listOfPlayers[0].turnToPlay = false;
                    listOfPlayers[1].turnToPlay = true;
                }
            }
            else if (listOfPlayers[1].turnToPlay == true && listOfPlayers[0].turnToPlay == false) {
                if (listOfPlayers[1].playerTurn.endphase == true) {
                    listOfPlayers[1].turnToPlay = false;
                    listOfPlayers[0].turnToPlay = true;
                }
            }

        }
    }

    /*
    drawCard(player:Player,many: number = 1): void {
        var c = 0;
        //On recupère la carte au sommet du deck et on l'ajoute à la main si il y a au moins une carte dans le deck
        if (player.deck.length > 0) {
            console.log("tu as des cartes dans le deck donc on pioche");
            while (c < many) {
                player.hand.push(player.deck.pop());
                c += 1;
            }
        }
        else {
            while (c < many) {
                player.hand.push(player.deck.pop());
                c += 1;
            }
            console.log("vous n'avez plus de carte dans le deck");
            this.loser = player;
        }
    }*/

    summonMonster(player:Player,playerSide: PlayerSideField, handCardPosition: number): void {
        if (player.canNormalSummon == true) {
            if (playerSide.monsterZone1IsEmpty) {
                playerSide.monsterZone1.monsterPosition.push(player.hand[handCardPosition]);
                player.hand.splice(handCardPosition, 1);
            }
            else if (playerSide.monsterZone2IsEmpty) {
                console.log("Le deuxième zM est vide");
                playerSide.monsterZone2.monsterPosition.push(player.hand[handCardPosition]);
                player.hand.splice(handCardPosition, 1);
            }
            else if (playerSide.monsterZone3IsEmpty) {
                console.log("Le troisième zM est vide");
                playerSide.monsterZone3.monsterPosition.push(player.hand[handCardPosition]);
                player.hand.splice(handCardPosition, 1);
            }

            else if (playerSide.monsterZone4IsEmpty) {
                console.log("Le quatrième zM est vide");
                playerSide.monsterZone4.monsterPosition.push(player.hand[handCardPosition]);
                player.hand.splice(handCardPosition, 1);
            }
            else if (playerSide.monsterZone5IsEmpty) {
                console.log("Le cinquième zM est vide");
                playerSide.monsterZone5.monsterPosition.push(player.hand[handCardPosition]);
                player.hand.splice(handCardPosition, 1);
            }
            //On ne fait qu'une invocation normale par tour donc après cNs is false
            player.canNormalSummon = false;
        }
        else if (player.canNormalSummon == false) {
            console.log("Vous avez deja fait une invocation normal ce tour");
        }
    }
    
    goToDrawPhase(player: Player): void {
        player.playerTurn.drawphase = true;
        console.log("DP");
        player.drawCard();
    }
    goToStandByPhase(player: Player): void {
        player.playerTurn.drawphase = false;
        player.playerTurn.standbyphase = true;
        console.log("SP");
    }
    goToMainPhase1(player: Player): void {
        player.playerTurn.standbyphase = false;
        player.playerTurn.mainphase1 = true;
        console.log("MP1");
    }
    goToBattlePhase(player: Player): void {
        player.playerTurn.mainphase1 = false;
        player.playerTurn.battlephase = true;
        console.log("BP");
    }
    goToMainPhase2(player: Player): void {
        player.playerTurn.battlephase = false;
        player.playerTurn.mainphase2 = true;
        console.log("MP2");
    }
    goToEndPhase(player: Player): void {
        //on peut passer de la mp1, de la mp2 ou de la bp à la ep
        player.playerTurn.mainphase1 = false;
        player.playerTurn.battlephase = false;
        player.playerTurn.mainphase2 = false;
        player.playerTurn.endphase = true;
        console.log("EP");
    }

}

/////////////////////////////////////
////////////////////////////////////
//ON DOIT UTILISER UN EVENTHANDLER
//Lorsque chaque joueurs active la enphase, on appel la fonction duelmanager qui changera le joueur qui peut jouer
//On peut aussi appeler la fonction duel manager manuellement a la fin d echaque endphase PLUS SIMPLE