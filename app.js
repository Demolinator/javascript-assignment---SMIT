// Question 1


// function clos (abc) {
//     abc = 5;
//     return function (def) {
//         console.log(abc + def);
//     }
// }

// let closGb = clos();
// closGb(10);       // <== Enter any desired number 


// Question 2


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function recur (arr, value) {
//     if (arr.length === 0) {
//         return false;
//     } else if (arr[0] === value) {
//         return true;
//     } else {
//         return recur(arr.slice(1), value);   // <== add recursion number
//     }
// }

// console.log(recur(arr, 3));  // <== yeh true hai, add any number
// console.log(recur(arr, 10));  // <== yeh false hai, add any number


// Question 3


// let newPara = function para (text) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = text;
//     let body = document.querySelector("body");
//     body.appendChild(paragraph);
// }

// newPara("This is a new paragraph!");  // <== add any pargraph you desire


// Question 4


// let newList = function list (text) {
//     let unorderedList = document.querySelector("ul");
//     let listItem = document.createElement("li");
//     listItem.textContent = text;
//     unorderedList.appendChild(listItem);
// }

// newList("New list");  // <== you can give any value you like, and call the function again and create another li


// Question 5


// let cBC = function changeBackgroundColor (element, color) {
//     element.style.backgroundColor = color;
// }
// let myElement = document.getElementById("my-element");
// cBC(myElement, "blue");  // <== change the color to your liking


// Question 6


// let object = {
//     name: "Talal Ahmed",
//     rollNo: 125091,
//     class: "JavaScript"
// };

// function saveToLocalStorage(key) {
//     localStorage.setItem(key, JSON.stringify(object));
// }
// function loadFromLocalStorage(key) {
//     let data = localStorage.getItem(key);
//     if (data) {
//         return JSON.parse(data);
//     }
//     return null;
// };

// saveToLocalStorage();
// console.log(loadFromLocalStorage());


// Question 7


// let object = {
//     name: "Talal Ahmed",
//     rollNo: 125091,
//     class: "JavaScript"
// };

// function saveToLocalStorage(key) {
//     localStorage.setItem(key, JSON.stringify(object));
// }

// let rOFLS = function retrieveObjectFromLocalStorage(key) {
//     let item = localStorage.getItem(key);
//     return JSON.parse(item);
// }

// console.log(rOFLS());


// Question 8


// function saveObjectToLocalStorage(obj) {
//     Object.keys(obj).forEach(function(key) {
//     localStorage.setItem(key, JSON.stringify(obj[key]));
// });
//     let newObj = {};
//     Object.keys(obj).forEach(function(key) {
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//     });
//     return newObj;
// }

// let myObj = {
//     name: "Talal Ahmed",
//     age: 18,
//     email: "ta234567801@gmail.com"
// };

// let savedObj = saveObjectToLocalStorage(myObj);

// console.log(savedObj); 