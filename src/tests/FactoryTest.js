const ShapeFactory = require('../models/ShapeFactory');

const circle = ShapeFactory.createShape('circle', 5);
console.log(circle.getArea()); // 78.5398...

const square = ShapeFactory.createShape('square', 4);
console.log(square.getArea()); // 16

const rectangle = ShapeFactory.createShape('rectangle', 3, 6);
console.log(rectangle.getArea()); // 18
