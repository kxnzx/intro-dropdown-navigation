// SHOW MENU & SWITCH HAMBURGER ICON INTO CLOSE ICON WHEN HAMBURGER BUTTON IS CLICKED
// This tells the browser to pay attention to the following element:
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburgerButton = document.querySelector(".hamburgerButton");
const closeIcon = document.querySelector(".closeIcon");
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const body = document.querySelector(".body");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  // If it's true that the menu class contains the showMenu class, do this:
  if (menu.classList.contains("showMenu")) {
    // Execute this block of code if the specified condition is true:
    menu.classList.remove("showMenu");
    overlay.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
  // If it's false that the menu class contains the showMenu class, do this:
  else {
    // Execute this block of code if the specified condition is false:
    menu.classList.add("showMenu");
    overlay.style.display = "block";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  }
}
// When the hamburger button is clicked, the toggleMenu() will be called, it will check if the menu contains the class showMenu
hamburgerButton.addEventListener("click", toggleMenu);

/* 
The element.classList.contains() method is used to check if an element contains a specific class name. If the element contains the className, the method returns true. Otherwise, it returns false.
Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.

The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.

    Use if to specify a block of code to be executed, if a specified condition is true
    Use else to specify a block of code to be executed, if the same condition is false
    Use else if to specify a new condition to test, if the first condition is false
    Use switch to specify many alternative blocks of code to be executed
*/
