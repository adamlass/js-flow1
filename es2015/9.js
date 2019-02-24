class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }

    getColor() {
        return this._color
    }
    setColor(color) {
        this._color = color
    }
    toString() {
        return `Color: ${this._color}`
    }
}


class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this._radius = radius

    }
    getArea() {
        //not real calcs
        return 2 * this._radius;
    }
    getPerimeter() {
        return this._radius;
    }

    getRadius() {
        return this._radius
    }
    setRadius(radius) {
        this._radius = radius
    }
}

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius)
        this._height = height
    }

    getArea() {
        //not real calc
        return 2 * this._radius;
    }

    //getter format
    get area() { return 2 * this._radius }

    getPerimeter() {
        return undefined;
    }
    //getter format
    get perimeter() { return undefined }


    getVolume() {
        //not real calc
        return 2 * this._radius * this._height
    }
    get volume() { return 2 * this._radius * this._height }

    getHeight() {
        return this._height
    }

    get height() { return this._height }

    setHeight(height) {
        this._height = height
    }

    //setter format
    set height(height) { this._height = height}
}

let cylinder = new Cylinder("red", 2, 4)

console.log(cylinder.height, cylinder.perimeter);

cylinder.height = 5
console.log(cylinder)

let shape = new Shape("green")
shape.setColor("dinmor")

let circle = new Circle("red", 2);
console.log('area:', circle.getArea());
circle.setRadius(3)
console.log(circle.getRadius());


console.log(circle);

console.log(shape);





