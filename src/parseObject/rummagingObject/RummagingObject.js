"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RummagingObject = void 0;
var RummagingObject = /** @class */ (function () {
    function RummagingObject(object) {
        this.object = object;
    }
    RummagingObject.prototype.takingProducts = function () {
        return this.object.products;
    };
    return RummagingObject;
}());
exports.RummagingObject = RummagingObject;
