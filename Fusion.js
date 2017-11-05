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
/**
 *
 */
var Fusion = /** @class */ (function (_super) {
    __extends(Fusion, _super);
    function Fusion(nom, des, star, attribut, type, atk, def, effect) {
        var _this = 
        //utilisation du constructeur de la classe parente
        _super.call(this, nom, des, star, attribut, type, atk, def) || this;
        //        super(nom, des, star, attribut, type, atk, def, effect);
        _this.fusionFrame = FrameCard.purple;
        _this.rankOrLevel = rankLevel.level;
        return _this;
    }
    Fusion.prototype.ToString = function () {
        // console.log("carte fusion " + this.name + "avec " + this.rankOrLevel + " de " + this.stars + " étoiles avec une couleur " + this.synchroFrame);
    };
    return Fusion;
}(Monster));
//# sourceMappingURL=Fusion.js.map