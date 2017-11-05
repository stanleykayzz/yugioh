"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// un monstre a soit un niveau soit un rang mais des etoiles dans tous les cas
var rankLevel;
(function (rankLevel) {
    rankLevel[rankLevel["rank"] = 0] = "rank";
    rankLevel[rankLevel["level"] = 1] = "level";
})(rankLevel || (rankLevel = {}));
;
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    /*public constructor(nom: string, des: string, star: number, attribut: Attribute, type: MonsterType, atk: number, def: number, effect: Effects) {
        //utilisation du constructeur de la classe parente
        super(nom, des);
        this.attackPoints = atk;
        this.defensePoints = def;
        this.stars = star;
        this.type = type;
        this.attribute = attribut;
        this.rankOrLevel = rankLevel.level;
        //la couleur de la carte est jaune si le monstre n'as pas d'effet sinon elle est orange
        this.frame = FrameCard.yellow;
    }*/
    function Monster(nom, des, star, attribut, type, atk, def) {
        var _this = 
        //utilisation du constructeur de la classe parente
        _super.call(this, nom, des) || this;
        _this.attackPoints = atk;
        _this.defensePoints = def;
        _this.stars = star;
        _this.type = type;
        _this.attribute = attribut;
        _this.rankOrLevel = rankLevel.level;
        //la couleur de la carte est jaune si le monstre n'as pas d'effet sinon elle est orange
        _this.frame = FrameCard.yellow;
        return _this;
    }
    return Monster;
}(Card));
//# sourceMappingURL=Monster.js.map