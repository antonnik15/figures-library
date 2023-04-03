"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const error_handler_1 = require("../../handlers/error-handler");
const shape_1 = require("../shape");
/**
 * This class describes the internal structure and behavior of the square object
 */
class Square extends shape_1.Shape {
    constructor(initialPoint, sideOfSquare, color) {
        super([initialPoint], color);
        this.sideOfSquare = sideOfSquare;
    }
    /**
     * This static method return instance of class Square
     *
     * @param startPoint starting coordinate of square
     * @param side length of side Square
     * @param color line color
     * @returns the instance of class Square
     */
    static createSquare(startPoint, side, color) {
        if (side <= 0) {
            (0, error_handler_1.errorHandler)(Square.name);
        }
        return new Square(startPoint, side, color);
    }
    /**
     * This method return the area of square
     *
     * @returns area of square
     */
    area() {
        return this.sideOfSquare * this.sideOfSquare;
    }
    /**
     * This method return the diagonal of square
     *
     * @returns diagonal of square
     */
    diagonal() {
        return this.sideOfSquare * 2 ** (1 / 2);
    }
    /**
     * This method return the perimeter of square
     *
     * @returns perimeter of square
     */
    perimeter() {
        return 4 * this.sideOfSquare;
    }
    /**
     * This method draws square in canvas
     *
     */
    draw(ctx) {
        const topPoint = this.initialPoints[0];
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.rect(topPoint.x, topPoint.y, this.sideOfSquare, this.sideOfSquare);
        ctx.stroke();
        ctx.closePath();
    }
    /**
     * This accessor change side length of square
     *
     */
    set changeSide(newSide) {
        this.sideOfSquare = newSide;
    }
    /**
     * This accessor return side length of square
     *
     * @returns side length of square
     */
    get getSide() {
        return this.sideOfSquare;
    }
    /**
     * This accessor change line color of square for drawing figure in canvas
     *
     */
    set changeColor(newColor) {
        this.color = newColor;
    }
    /**
     * This accessor return line color
     *
     * @returns line color
     */
    get getColor() {
        return this.color;
    }
}
exports.Square = Square;
