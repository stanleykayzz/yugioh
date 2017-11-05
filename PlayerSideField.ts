
class PlayerSideField {

    //on déclare les attributs
    graveyard: Graveyard;
    outOfGame: OutZone;
    pendulumZone1: PendulumZone;
    pendulumZone2: PendulumZone;
    fieldZone: FieldZone;
    monsterZone1: MonsterZone;
    monsterZone2: MonsterZone;
    monsterZone3: MonsterZone;
    monsterZone4: MonsterZone;
    monsterZone5: MonsterZone;
    mpZone1: TrapMagicZone;
    mpZone2: TrapMagicZone;
    mpZone3: TrapMagicZone;
    mpZone4: TrapMagicZone;
    mpZone5: TrapMagicZone;
    extraZone: ExtraDeckZone;

    //on crée le terrain d'un joueur
    public constructor() {
        this.graveyard = new Graveyard();
        this.outOfGame = new OutZone();
        this.pendulumZone1 = new PendulumZone();
        this.pendulumZone2 = new PendulumZone();
        this.extraZone = new ExtraDeckZone();
        this.fieldZone = new FieldZone();
        this.monsterZone1 = new MonsterZone();
        this.monsterZone2 = new MonsterZone();
        this.monsterZone3 = new MonsterZone();
        this.monsterZone4 = new MonsterZone();
        this.monsterZone5 = new MonsterZone();
        this.mpZone1 = new TrapMagicZone();
        this.mpZone2 = new TrapMagicZone();
        this.mpZone3 = new TrapMagicZone();
        this.mpZone4 = new TrapMagicZone();
        this.mpZone5 = new TrapMagicZone();
    }

    monsterZone1IsEmpty(): boolean {
        if (this.monsterZone1.monsterPosition.length = 0)
            return true;
        else
            return false;
    }
    monsterZone2IsEmpty(): boolean {
        if (this.monsterZone2.monsterPosition.length = 0)
            return true;
        else
            return false;
    }
    monsterZone3IsEmpty(): boolean {
        if (this.monsterZone3.monsterPosition.length = 0)
            return true;
        else
            return false;
    }
    monsterZone4IsEmpty(): boolean {
        if (this.monsterZone4.monsterPosition.length = 0)
            return true;
        else
            return false;
    }
    monsterZone5IsEmpty(): boolean {
        if (this.monsterZone5.monsterPosition.length = 0)
            return true;
        else
            return false;
    }
}