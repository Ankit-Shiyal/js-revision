
//Arithmetic operator

console.log("Arithmetic Operator ")

let a = 10
let b = 30

console.log("Addition =", a + b)
console.log("Substraction =", a - b)
console.log("Multiplication =", a * b)
console.log("Division =", a / b)
console.log("Modulo =", a % b)
console.log("Exponentiation =", a ** b)

//Assignment Operator

console.log("Assignment Operator ")


a = 5;
b = 8;

a += b;
console.log("Add and assign A =", a);

a -= b;
console.log("Subtract and assign A =", a);

a *= b;
console.log("Multiply and assign A =", a);

a /= b;
console.log("Divide and assign A =", a);

a %= b;
console.log("Modulo and assign A =", a);


//Comparison operator

console.log("Comparison operator")


let A=30
let B="20"

console.log("Equal to =",A==B)

console.log("Strict Equal to =",A===B)

console.log("Not Equal to =", A != B);

console.log("Not Equal to ,check data type =", A !== B);


console.log("Less Than =",A<B)

console.log("Greator Than =",A>B)

console.log("Greator or Equal =",A>=B)

console.log("Less or Equal =",A<=B)



//Logical operator

console.log("logical operator ")

//AND (&&)

let marks1=90
let marks2=80

if(marks1 >=90 &&  marks2 >=80){
    console.log("you have achieve grade A")
}


//OR (||)

let student1=80
let student2=20

if(student1>=40 || student2 >= 40){
    console.log("You crack this exam")
}


//NOT (!)

let Age=18;

if(!(Age>=18)){
    console.log("You cannot give vote")
}else{
    console.log("you can vote")
}


//Ternary Operator


let number = 10;

let check = (number % 2 === 0) ? "Even Number" : "Odd Number";
console.log(check);
