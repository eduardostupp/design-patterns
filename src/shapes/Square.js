class Square {
    constructor(side) {
        this.side = side;
    }

    getArea() {
        return this.side ** 2;
    }
}

module.exports = Square;
