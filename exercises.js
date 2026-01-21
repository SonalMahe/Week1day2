//1.simple function
function sayHello(){
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
function subtract(a, b){
    console.log(a - b);
}
subtract(10,3);

//4. return value-
function square(number){
    sum = number* number;
    console.log(sum);
}
square(8);

function square(number) {
    return number * number;
}
const result= square(9);
console.log("The return value of number is" ,+ result);