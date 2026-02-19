

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const person1 = new Person("Ankit", 20, "Bhavnagar");
const person2 = new Person("Sunil", 22, "Ahmedabad");

console.log(person1.name);
console.log(person2.city);
