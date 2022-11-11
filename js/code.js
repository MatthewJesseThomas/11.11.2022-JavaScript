//If-Statement//
// let numb1 = 12;
// if(numb1 > 13) {
//     document.write("Greater than 13");
// }else {
//     document.write("Less than 13");
// }
//Conditional-Statements//
// function greaterNum(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }
// console.log(greaterNum(5, 10));
// ========================================================
//Second-Approach//
// function isNumber(onlyNumber) {
//     if(Number.isFinite (onlyNumber)) {
//         document.write(`${onlyNumber} is a number`);
//     }else {
//         document.write(`${onlyNumber} is not a number`);
//     }
// }
//Call-A-Function//
// let myNumber = 23;
// isNumber(myNumber);
// =======================================================
//Challenge//
// function isNumber(onlyNumber) {
//     if (Number.isInteger(onlyNumber) ) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function addNumbers(num1, num2) {
//     if (isNumber(num1) && isNumber(num2) ) {
//        document.write(num1 + num2 + ' These is a number ');
//     } else {
//         document.write('These are not numbers')
//     }
// }
// addNumbers(5, 9);
// =========================================================
//Challenge-2nd-Approach//
// function addition(numb1, numb2) {
//     if((Number.isFinite(numb1)) &&
//     (Number.isFinite(numb2)) ) return numb1 + numb2;
//     return `${numb1} / ${numb2} is not a number`;
// }
// console.log(addition(8, 7));
// =========================================================
//Function-Own-Exercise//
// let userName = prompt("Please Enter UserName:");
// let userID = parseInt(prompt("Please Enter UserID:")); 
// let iDs = [12345678900, 12345678901, 12345678902, 12345678903];

// function checkCredentials(userName, userID) {
//     if(userName && (userID == iDs[1])){
//         document.write('Access Granted');
//     }else {
//         document.write('Access Denied');
//     }
// }
// checkCredentials(userName, userID);
// =========================================================
//Function/S
// function addition(num1, num2) {
//     console.log(num1 + num2);
// }
// addition(8, 2);
// addition(11, 13);






