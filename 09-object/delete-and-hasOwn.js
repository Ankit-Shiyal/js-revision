const car = {
    brand: "BMW",
    model: "M5",
    year: 2025
};

delete car.year
console.log(car)

console.log(car.hasOwnProperty("year"))
console.log(car.hasOwnProperty("model"))

console.log(Object.keys(car))
console.log(Object.values(car))

