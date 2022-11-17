let firstName = prompt("Enter FirstName:");
let email = prompt("Please Enter Email:");
let userName = prompt("Please Enter UserName:");
let userID = parseInt(prompt("Please Enter UserID:")); 
let iDs = [12345678900, 12345678901, 12345678902, 12345678903];
let names = ['Matthew', 'John', 'Camryn', 'Faeez', 'Daniel', 'Lazola'];
let emails = ['matt@Corpmail.com','john12@Corpmail.com','camryn0000@Corpmail.com','fa33z@Corpmail.com','dan13l@Corpmail.com','laz@Corpmail.com'];

function checkCredentials(names, email, userName, userID) {
    if(userName && (userID == iDs[12345678900, 12345678901, 12345678902, 12345678903]) && (email == emails[0, 1, 2, 3, 4, 5]) && firstName == names[0, 1, 2, 3, 4, 5]){
        document.write('Access Granted');
    }else {
        document.write('Access Denied');
    }
}
checkCredentials(names, email, userName, userID);