// Function Name isOddOrEven
function isOddOrEven(number) {
    
    // 3. condition to check number is odd or even
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 2. Declare and initialize the variable
let myNumber = 26;

// 4. Call the function and print the result
let result = isOddOrEven(myNumber);
console.log("The number " + myNumber + " is " + result + ".");