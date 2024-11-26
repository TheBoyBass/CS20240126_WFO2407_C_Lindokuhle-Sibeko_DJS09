"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showReviewTotal = showReviewTotal;
exports.populateUser = populateUser;
exports.showDetails = showDetails;
exports.makeMultiple = makeMultiple;
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var enums_1 = require("./enums");
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = enums_1.LoyaltyUser.GOLD_USER ? '🏅' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function showDetails(value, element, price) {
    if (value) {
        var priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
function makeMultiple(value) {
    if (value > 1) {
        return 's';
    }
}
