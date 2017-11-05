"use strict";
//classe mainphase
//durant la mainphase le joueur pose, invoque, des monstres et des cartes pièges et magique
var MainPhase = /** @class */ (function () {
    function MainPhase() {
        console.log("mainphase en cours, je peux invoquer, poser des cartes etc...");
    }
    /*
    on pose une carte qu'on passe en paramètre et dont on choisi la position
    params (Carte, position)
    */
    MainPhase.prototype.setMonsterCard = function (carte, position) {
        console.log("Je pose un monstre");
    };
    MainPhase.prototype.setMagicAndTrapCard = function () {
        console.log("Je pose une carte magie ou piege");
    };
    return MainPhase;
}());
//# sourceMappingURL=MainPhase.js.map