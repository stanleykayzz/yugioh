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
var Pendulum = /** @class */ (function (_super) {
    __extends(Pendulum, _super);
    function Pendulum(nom, des, star, scales, attribut, type, atk, def, effect) {
        var _this = 
        //utilisation du constructeur de la classe parente
        //super(nom, des, star, attribut, type, atk, def, effect);
        _super.call(this, nom, des, star, attribut, type, atk, def) || this;
        _this.scale = scales;
        _this.hasMonsterEffects = false;
        if (_this.hasMonsterEffects == true) {
            _this.pendulumFrame = FrameCard.greenOrange;
        }
        else {
            _this.pendulumFrame = FrameCard.greenYellow;
        }
        _this.rankOrLevel = rankLevel.level;
        return _this;
    }
    Pendulum.prototype.ToString = function () {
        console.log("carte pendulum " + this.name + "avec " + this.rankOrLevel + " de " + this.stars + " étoiles avec une couleur " + this.pendulumFrame);
    };
    return Pendulum;
}(Monster));
//# sourceMappingURL=Pendulum.js.map