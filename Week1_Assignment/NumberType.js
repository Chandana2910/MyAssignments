// create function called numberType that takes num as parameter
function numberType(num){
    let result =""; //Declare and initialize the variable

if (num > 0){// number is positive
    result = "Positive" ;
}else if (num <0){ //number is negative
    result = "Negative";
}else { //Number is zero
    result = "Zero";
}
return result;
}

//Call the function and print the result 
console.log("The entered number is " + numberType(-29));
console.log("The entered number is " + numberType(15))
console.log("The entered number is " + numberType(0));






