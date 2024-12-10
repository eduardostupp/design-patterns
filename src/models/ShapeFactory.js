class ShapeFactory {
    static createShape(type, ...params) {
        const shapeMap = {
            circle: require('../shapes/Circle'),
            square: require('../shapes/Square'),
            rectangle: require('../shapes/Rectangle'),
        };

        const ShapeClass = shapeMap[type.toLowerCase()];
        if (!ShapeClass) {
            throw new Error(`Shape type "${type}" not recognized.`);
        }
        return new ShapeClass(...params);
    }
}

module.exports = ShapeFactory;
