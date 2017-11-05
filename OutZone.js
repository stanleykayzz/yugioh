"use strict";
var OutZone = /** @class */ (function () {
    function OutZone() {
        this.outZone = new Array();
    }
    //recupère le total des cartes hors jeu
    OutZone.prototype.getTotalOutCards = function () {
        return this.outZone.length;
    };
    //ajoute des cartes dans la zone hors jeu 
    OutZone.prototype.sendToOut = function (aCard) {
        this.outZone.push(aCard);
    };
    //recupère une carte de la zone de hors jeu
    OutZone.prototype.getFromOut = function (aCard) {
        //  this.graveyard.
    };
    return OutZone;
}());
//# sourceMappingURL=OutZone.js.map