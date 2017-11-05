"use strict";
/**
La classe GameField est la classe du terrain entier composé du
terrain de jeu des deux duelistes donc des deux playerSideField
 */
var GameField = /** @class */ (function () {
    //field3: PlayerSideField;
    function GameField() {
        this.field1 = new PlayerSideField();
        this.field2 = new PlayerSideField();
    }
    return GameField;
}());
//# sourceMappingURL=GameField.js.map