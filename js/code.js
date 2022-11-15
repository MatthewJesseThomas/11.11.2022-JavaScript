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
// =========================================================
//Nested-If-Statements//
// let age = 18;
// let salary = 5000;
// if(age > 17) {
//     if(salary >= 5000) {
//         document.write("You are qualified");
//     }else {
//         document.write("Present your second payslip");
//     }
// }else {
//     document.write("You are not qualified");
// }
// =========================================================
//Best-Approach//
// if((age > 17) && (salary >= 5000)) {
//     document.write("Your are qualified");
// }else {
//     document.write("You are not qualified");
// }
// =========================================================
//Switch-Statements//
// let marks = 100;
// switch(marks) {
//     case 100:
//     case 95:
//         document.write("Grade A");
//     break;
//     case 91:
//     case 90:
//     case 87:
//         document.write("Grade B");
//     break;
//     case 50:
//         document.write("passed");
//     break;
//     case 49:
//         document.write("Failed");
//     break;
//     default:
//         document.write("ERROR404 Not Found!");

// }
// =========================================================
//Challenge-2//
// let marks = parseInt(prompt("Enter Marks"));
//     switch(true) {
//         case marks> 90:
//             document.write("You're Awesome");
//         break;
//         case marks> 70: 
//             document.write("Distinction");
//         break;
//         case marks> 50: 
//             document.write("Passed");
//         break;
//         case marks <= 49: 
//         document.write("Failed");
//         break;
//         default: document.write('sum ting wong')
//     }
// =========================================================
/*Different loop in JS:
- for
- for in: Loop through object's properties
- for of: Loop through the values 
- while
- do while
*/
// for(let i = 0; i<10; i++) {
    // if (i % 2 == 0){
    // console.log(i);
    // }
    // if(i == 5) break;
//     if(i == 4) continue;
//     console.log(i);
// }
//Break and Continue//
// =========================================================
//For-In
// let person = {
//     name: 'Samiel',
//     surname: 'Amen',
//     subject:['Divination', 'Necromancy',
//             'HolyHealing', 'Angelic-Wrath'],
//     address: {
//         streetName: 'Purgatory Dr',
//         country: 'Hell',
//         complexName: 'Avernos',
//     }
// }
// for(let data in person){
//     if (data != 'address')
//     console.log(`${data}: ${person[data]}`)
// } 
// console.log(person.address)
// console.log(
//     `
//     Name: ${person.name}
//     Surname:${person.surname}
//     Street Name:${person.address.streetName}
//     `
// )
// =========================================================
//For-Of//
// let numbers = [9, 7, 4, 34, 8];
// for(let number of numbers) {
//         console.log(number);
// }
// for(let i =0; i<numbers.length; i++) {
//     console.log(numbers[i]);
// } 
// =========================================================
//While-Loop//
// let cnt = 0;
// while(true) {
//     if(cnt < numbers.length){
//         console.log(numbers[cnt]);
//     }else{
//         break;
//     }
//     cnt++;
// }
// =========================================================
//Factory-Function//
//It Is A Function that returns an Object, an there is no need to use a new keyword when attempting to create an instance.//
// function userDetails(firstName, surname, age) {
//     return {
//         firstName: firstName,
//         surname: surname,
//         age: age,
//         display: function() {
//             console.log(`Name:${firstName}\nSurname:${surname}\nAge:${age}`);
//         }
//     }
// }
//Create an Instance//
// let person1 = userDetails('Joel','Mukanya');
// person1.firstName = "Tshimanga";
// person1.display();
// console.log("===================");
// const person2 = userDetails('Oslin', 'Johnson');
// person2.display();
// =========================================================
//Constructor-Function//
//-Allows the Use of the "this." to work on a constructor-function,to return the object.//
//Example-1//
// function personDetails(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }
// let person1 = new personDetails('Joel','Mukanya');
//
// console.log(`Name:${person1.name}\nSurname:${person1.surname}`)
// =========================================================
//JavaScript-Thus-Far//
// let firstName = prompt("Enter FirstName:");
// let email = prompt("Please Enter Email:");
// let userName = prompt("Please Enter UserName:");
// let userID = parseInt(prompt("Please Enter UserID:")); 
// let iDs = [12345678900, 12345678901, 12345678902, 12345678903];
// let names = ['Matthew', 'John', 'Camryn', 'Faeez', 'Daniel', 'Lazola'];
// let emails = ['matt@Corpmail.com','john12@Corpmail.com','camryn0000@Corpmail.com','fa33z@Corpmail.com','dan13l@Corpmail.com','laz@Corpmail.com'];

// function checkCredentials(name, email, userName, userID) {
//     if(userName && (userID.include) && (email == emails[0, 1, 2, 3, 4, 5]) && firstName == names[0, 1, 2, 3, 4, 5]){
//         document.write('Access Granted');
//     }else {
//         document.write('Access Denied');
//     }
// }
// checkCredentials(name, email, userName, userID);
// =========================================================
