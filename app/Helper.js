"use strict";
var BASE_URL = 'https://project-9827f.firebaseio.com/';
var PRODUCT_BASE_URL = 'https://products-d4caf.firebaseio.com/';
var Helper = (function () {
    function Helper() {
    }
    Helper.buildUrl = function (url) {
        if (url === void 0) { url = ''; }
        return BASE_URL + url + '.json';
    };
    ;
    Helper.buildProductUrl = function (url) {
        if (url === void 0) { url = ''; }
        return PRODUCT_BASE_URL + url + '.json';
    };
    ;
    return Helper;
}());
exports.Helper = Helper;
//Product/-KXD_NdCjtrIjU0A6KV4/reviews 
//# sourceMappingURL=Helper.js.map