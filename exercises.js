//1.simple function
function sayHello() {
    console.log("Hello from Node.js!");
}
sayHello();


//2. Parameters-
function welcomeUser(name) {
    console.log(`Welcome, ${name}!`)
}
welcomeUser("Sonal");
welcomeUser("Aviraj");


//3.Multiple Parameters-
function subtract(a, b) {
    console.log(a - b);
}
subtract(10, 3);


//4. return value- (Is this also right way ?)

// function square(number){
//     sum = number* number;
//     console.log(sum);
// }
// square(8);

function square(number) {
    return number * number;
}
const result = square(9);
console.log("The return value of number is", + result);


//5. Profile Function-
const profile = (firstName, age, isLikeCoding) => {
    console.log("Hi, I am " + firstName + "." + "I am " + age + " " + "years old, and it is" + " " + isLikeCoding + " that i like coding.");
    // firstName = "Sonal";
    // age = 38;
    // isLikeCoding = true
}
profile("Sonal", 38, true);


//6. Default Parameters-
const greetWithTime = (firstName, timeOfDay = "morning") => {
    console.log("Good " + timeOfDay + "," + firstName + "!")
};
greetWithTime("Sonal");
greetWithTime("Sonal", "evening");



//7. Calculator Function-
const calculator= (a, b , operator) =>{
 if(operator === "add"){
    return a + b;
} else if (operator === "subtract") {
    return a - b ;
} else if ( operator === "multiply"){
    return a*b ;
} else if (operator === "divide"){
    return a/b;
} else {
    return "invalid operator";
}
}
console.log(calculator(10,6,"add"));
console.log(calculator(10,6,"subtract"));
console.log(calculator(10,6,"multiply"));
console.log(calculator(18,6,"divide"));
console.log(calculator(10,6,""));


//8. Arrow function 
const square= (number) => {
    return number*number;
}
console.log(square(11));

//9. Bonus Challenge-
const isAdult= (age) =>{
    if(age >= 18) {
return "Hello you are adult!"
    } else if(age <= 18){
        return "Hello, you are not adult, you need to wait!"
    }
};
console.log(isAdult(20));
console.log(isAdult(12));