"use strict";
var MonsterZone = /** @class */ (function () {
    function MonsterZone() {
        this.monsterPosition = new Array();
    }
    return MonsterZone;
}());
var monsterPositionOnField;
(function (monsterPositionOnField) {
    monsterPositionOnField[monsterPositionOnField["faceUpAttack"] = 0] = "faceUpAttack";
    monsterPositionOnField[monsterPositionOnField["faceUpDefense"] = 1] = "faceUpDefense";
    monsterPositionOnField[monsterPositionOnField["faceDownAttack"] = 2] = "faceDownAttack";
    monsterPositionOnField[monsterPositionOnField["faceDownDefense"] = 3] = "faceDownDefense";
})(monsterPositionOnField || (monsterPositionOnField = {}));
//# sourceMappingURL=MonsterZone.js.map