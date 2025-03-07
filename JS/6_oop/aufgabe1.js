class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

let laptop = new Product("HackerLaptop", 300, "dieser Laptop macht dich wie ein Hacker");
console.log(laptop.price);