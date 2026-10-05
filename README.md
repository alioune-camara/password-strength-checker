# Password Strength Checker

A simple web page that rates a password as Weak, Medium or Strong.

## How it works
Checks length (12+), uppercase, lowercase, digits and symbols,  
then turns the score into a level.

## How to run
Open index.html in a browser.

## What I learned
- Select page elements with getElementById() and read what the user typed with .value.
- Use addEventListener("click") to run code when the button is clicked.
- Use regular expressions with .test() to check uppercase letters, lowercase letters, digits and symbols.
- Display the result with .textContent.
- Turn a score into a level with a switch statement.

## Privacy
The password never leaves your browser: nothing is sent or stored.
