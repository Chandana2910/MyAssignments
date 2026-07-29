// Task-1 Function named 'userProfile' that takes 'name' as parameter
function userProfile(userName){
    console.log(`Hello ${userName}`)
}
userProfile("chandana") 
userProfile('Vihaa Darshan')

//Task-2 - Arrow function named as 'double' that takes number  as parameter
const double = num => num * 2
console.log(double(5));
console.log(double(135));

// Task-3 anonymous function with setTimeout
setTimeout(function(){
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Task4 - Call Back Function
function getUserData(callback) {
  setTimeout(() => {
    const user = {
      name: "Vihaa Darshan",
      age: 4
    };
    callback(user);
  }, 3000);
}

// Calls the function and logs the data
getUserData((user) => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
});
