// TASK 1
// Hide the boxes.
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "none";
document.getElementById("three").style.display = "none";

// Display at 1, 2, and 3 seconds.
window.setTimeout(cardOne, 1000);
window.setTimeout(cardTwo, 2000);
window.setTimeout(cardThree, 3000);

// Create functions to use with setTimeout(). 
function cardOne() {
    document.getElementById("one").style.display = "initial";
}

function cardTwo() {
    document.getElementById("two").style.display = "initial";
}

function cardThree() {
    document.getElementById("three").style.display = "initial";
}


// TASK 2
// Create a function to modify the most popular background color. 
function changeBackground(color) {

    // Select the element id and change the background color.
    document.getElementById("two").style.background = color;
 }
 
 // Modify background color on load.
 window.addEventListener("load",function() { changeBackground("#FFCF2D") });
 // window.addEventListener("load",changeBackground); <---- can be done this way but no parameters could be passed. 


 
 // Task 3
 //Using JavaScript, modify each of the signup buttons to have the same color.
let buttons = document.querySelectorAll(".signup-button");
buttons.forEach(button => {
    button.style.background = "#12aaeb";
})
 
 // Task 4 Make the $5.99 text to be twice as big.
function Size60(){
    document.getElementById('price').style.fontSize="40px";
};

Size60()


// Task 5
// call JS function to display a popup

function popUp() {
  alert("you are signed in");  
}


// Task 6 
// Ask the user for their email and then display under the sign up button they clicked. 
function popUpone() {
    let person = prompt("Please enter your email", "");
    let text; 
    document.getElementById("emptyone").innerHTML = person; 
}

function popUptwo() {
    let person = prompt("Please enter your email", "");
    let text;
    document.getElementById("emptytwo").innerHTML = person; 
}

function popUpthree() {
    let person = prompt("Please enter your email", "");
    let text;
    document.getElementById("emptythree").innerHTML = person; 
}

//Hi Moon 