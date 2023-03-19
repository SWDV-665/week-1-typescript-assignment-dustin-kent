var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, unit, price) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.price = price;
    }
    Grocery.prototype.totalPrice = function () {
        return this.quantity * this.price;
    };
    return Grocery;
}());
var groceries = [
    new Grocery("Milk", 2, "gallons", 3.25),
    new Grocery("Bread", 1, "loaves", 3.75),
    new Grocery("Eggs", 3, "dozens", 3.85),
    new Grocery("Cheese", 1, "package", 3.25),
    new Grocery("Chips", 2, "bags", 4.25)
];
