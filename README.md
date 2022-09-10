# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Screensize 1440px - Desktop

![Desktop](images/Desktop.gif)

#### Screensize 375px - Mobile

![Mobile](images/Mobile.gif)

### Links

- View my Solution on [Frontend Mentor]()
- View the Live Site [here]()

## My process

- HTML semantics
- JavaScript
- Importing Google Fonts
- Set variables
- Reset default settings
- Styles (Mobile First)

### Built with

- Semantic HTML5 markup
- JavaScript
- SASS custom properties
- CSS Grid
- CSS Flexbox
- Mobile-first workflow
- [Google Fonts](https://fonts.google.com/) - For Fonts

### What I learned

It was surprisingly fun to work on this challenge. I have gained some insight about JavaScript if/else statements and the CSS z-index property.

There are some conditions for the z-index to work:

- it only works on positioned elements such as position:absolute, position:relative, or position:fixed
- avoid using negative values (links won't work anymore when they are on a lower index level with a negative value)
- only use the z-index on the specific element
- avoid using min-height: 100%; on the element that is supposed to be on a lower index level

JavaScript if/else statements:

The if statement tests if a specified condition (which is in between () parentheses) is true or false (these are boolean values). In the boolean data type, there are only two possible values that can be returned: true or false. If the specified condition is true, then the block of code (which is in between the {} curly braces) will be executed. If the specified condition is false, then the block of code will be skipped.

Summary:

- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative blocks of code to be executed

## Author

- Frontend Mentor - [@kxnzx](https://www.frontendmentor.io/profile/kxnzx)
