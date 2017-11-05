"use strict";
//Le cimetière est une zone ou sont envoyé les cartes utilisé, détruite ou défaussé
//il s'agit donc d'un tableau dont on peut récupérer la taille
var Graveyard = /** @class */ (function () {
    function Graveyard() {
        this.graveyard = new Array();
    }
    //recupère le total des cartes du cimetière
    Graveyard.prototype.getGraveTotalCards = function () {
        return this.graveyard.length;
    };
    //ajoute des cartes dans le cimetiere 
    Graveyard.prototype.sendToGrave = function (aCard) {
        this.graveyard.push(aCard);
    };
    //recupère une carte du cimetiere
    Graveyard.prototype.getFromGrave = function (aCard) {
        //  this.graveyard.
    };
    return Graveyard;
}());
//# sourceMappingURL=Graveyard.js.map