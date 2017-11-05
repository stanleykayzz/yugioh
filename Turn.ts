
class Turn {
    /*
    drawphase: DrawPhase;
    standbyphase: StandbyPhase;
    mainphase1: MainPhase;
    battlephase: BattlePhase;
    mainphase2: MainPhase;
    endphase: EndPhase;
    ---------------------------------------
*/

    drawphase: boolean;
    standbyphase: boolean;
    mainphase1: boolean;
    battlephase: boolean;
    mainphase2: boolean;
    endphase: boolean;
    myTurnCount: number;

    public constructor(/*parameterPlayer: Player*/) {
        //console.log("le joueur doit piocher");
       // console.log("donc le joueur" + parameterPlayer.pseudo + " doit piocher");
        this.drawphase = false;
        this.standbyphase = false;
        this.mainphase1 = false;
        this.battlephase = false;
        this.mainphase2 = false;
        this.endphase = false;
        console.log("Not in a turn for now");
    }

    /*public constructor() {
        this.drawphase = new DrawPhase();
        this.standbyphase = new StandbyPhase();
        this.mainphase1 = new MainPhase();
        this.battlephase = new BattlePhase();
        this.mainphase2 = new MainPhase();
        this.endphase = new EndPhase();
    }*/
    /*
    goToDrawPhase(): void {
        this.drawphase = true;
        console.log("DP");
    }
    goStandByPhase(): void {
        this.drawphase = false;
        this.standbyphase = true;
        console.log("SP");
    }
    goToMainPhase1(): void {
        this.standbyphase = false;
        this.mainphase1 = true;
        console.log("MP1");
    }
    goToBattlePhase(): void {
        this.mainphase1 = false;
        this.battlephase = true;
        console.log("BP");
    }
    goToMainPhase2(): void {
        this.battlephase = false;
        this.mainphase2 = true;

        console.log("MP2");
    }
    goToEndPhase(): void {
        //on peut passer de la mp1, de la mp2 ou de la bp à la ep
        this.mainphase1 = false;
        this.battlephase = false;
        this.mainphase2 = false;
        this.endphase = true;

        console.log("EP");
    }*/
}