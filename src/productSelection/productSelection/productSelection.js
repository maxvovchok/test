"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSelection = void 0;
var ProductSelection = /** @class */ (function () {
    function ProductSelection(listId, onProductSelect) {
        var _this = this;
        this.list = document.getElementById(listId);
        if (this.list) {
            this.list.addEventListener('click', function (event) {
                return _this.handleClick(event, onProductSelect);
            });
        }
        else {
            console.error("Element with ID \"".concat(listId, "\" not found."));
        }
    }
    ProductSelection.prototype.handleClick = function (event, onProductSelect) {
        var target = event.target;
        var listItem = target.closest('li');
        if (listItem && listItem.getAttribute('data-id')) {
            var productId = Number(listItem.getAttribute('data-id'));
            onProductSelect(productId);
        }
    };
    return ProductSelection;
}());
exports.ProductSelection = ProductSelection;
