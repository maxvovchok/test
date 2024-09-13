"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderProduct = void 0;
var RenderProduct = /** @class */ (function () {
    function RenderProduct() {
    }
    RenderProduct.prototype.renderProductList = function (products) {
        return "\n     <ul id=\"product-list\">\n        ".concat(products
            .map(function (product) { return "\n          <li data-id=\"".concat(product.id, "\">\n         <img src=\"").concat(product.images[0], "\" alt=\"\" style=\"width: 500px;\" />\n            <h2>").concat(product.title, "</h2>\n            <p>").concat(product.price, "$</p>\n          </li>"); })
            .join(''), "\n      </ul>\n    ");
    };
    return RenderProduct;
}());
exports.RenderProduct = RenderProduct;
