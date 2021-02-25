"use strict";
exports.__esModule = true;
var pay = {
    payid: 256389,
    name: "kishore",
    bank: "sbi",
    branch: "sholinganallur",
    dopayment: function () {
        return "payment sucessful";
    }
};
console.log(pay.dopayment());
var upimode = /** @class */ (function () {
    function upimode() {
    }
    upimode.prototype.dopayment = function () {
        return "upi sucessful";
    };
    return upimode;
}());
var card = /** @class */ (function () {
    function card() {
    }
    card.prototype.dopayment = function () {
        return "debited from your card";
    };
    return card;
}());
var upi = new upimode();
console.log(upi.dopayment());
var cd = new card();
console.log(cd.dopayment());
