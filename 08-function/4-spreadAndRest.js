

let num1 = [1, 2, 3, 4];

let num2 = [...num1, 5, 6]

console.log(num2)


// rest

function Addnumber(...number) {
    console.log(number)
}

Addnumber(10, 20, 30)