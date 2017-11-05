"use strict";
var PlayerSideField = /** @class */ (function () {
    //on crée le terrain d'un joueur
    function PlayerSideField() {
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
    PlayerSideField.prototype.monsterZone1IsEmpty = function () {
        if (this.monsterZone1.monsterPosition.length = 0)
            return true;
        else
            return false;
    };
    PlayerSideField.prototype.monsterZone2IsEmpty = function () {
        if (this.monsterZone2.monsterPosition.length = 0)
            return true;
        else
            return false;
    };
    PlayerSideField.prototype.monsterZone3IsEmpty = function () {
        if (this.monsterZone3.monsterPosition.length = 0)
            return true;
        else
            return false;
    };
    PlayerSideField.prototype.monsterZone4IsEmpty = function () {
        if (this.monsterZone4.monsterPosition.length = 0)
            return true;
        else
            return false;
    };
    PlayerSideField.prototype.monsterZone5IsEmpty = function () {
        if (this.monsterZone5.monsterPosition.length = 0)
            return true;
        else
            return false;
    };
    return PlayerSideField;
}());
//# sourceMappingURL=PlayerSideField.js.map