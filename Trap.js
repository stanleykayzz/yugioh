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
//Classe AudioDestinationNode cartes des cartes type piege
var Trap = /** @class */ (function (_super) {
    __extends(Trap, _super);
    function Trap(nom, def) {
        var _this = _super.call(this, nom, def) || this;
        _this.setFront();
        _this.activable = false;
        return _this;
    }
    Trap.prototype.isActivable = function () {
        // TODO implement here
    };
    return Trap;
}(Card));
//# sourceMappingURL=Trap.js.map