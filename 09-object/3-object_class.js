

class Car {
    constructor(Brand, Model, Price, Color) {
        this.Brand = Brand;
        this.Model = Model;
        this.Price = Price;
        this.Color = Color;
    }
}

const Car1 = new Car("BMW", "X5", 8000000, "Black");
console.log("Car Detail 1", Car1);

const Car2 = new Car("Audi", "A4", 6000000, "White");
console.log("Car Detail 2", Car2);

const Car3 = new Car("Toyota", "Fortuner", 4500000, "Silver");
console.log("Car Detail 3", Car3);
