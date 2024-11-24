"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showReviewTotal = showReviewTotal;
exports.populateUser = populateUser;
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
<<<<<<< HEAD
    var iconDisplay = isLoyalty ? '🏅' : '';
=======
    var iconDisplay = isLoyalty ? '⭐' : '';
>>>>>>> 305e57e (Refectored the Code by adding utils file)
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
