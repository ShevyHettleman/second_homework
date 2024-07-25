let text = ""; //empty string to hold the output.
let i = 1; // We set loop counter starting number to 1


do { 
    if (i % 3 === 0 && i % 5 === 0 ) {
        text += "FizzBuzz";
    } else
    if (i % 3 === 0) {
        text += "Fizz";
    } else
    if (i % 5 === 0) {
        text += "Buzz";
    } else {
        text += i; // if not divisible by 3/5 or 3&5 then else is executed. Which says to add value of i to the string.
    }
    text += "\n";  // Adds a newline character to the text string after each entry. 
    i++; // Takes loop variable of i and increases value by 1
}

while (i <= 100); //Loop will run as long as less than or equal to 100
console.log(text); 