"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const error_handler_1 = require("../../handlers/error-handler");
const shape_1 = require("../shape");
/**
 * This class describes the internal structure and behavior of the rectangle object
 */
class Rectangle extends shape_1.Shape {
    constructor(startPoint, width, height, color) {
        super([startPoint], color);
        this.width = width;
        this.height = height;
    }
    /**
     *
     * @param startPoint starting coordinate of rectangle
     * @param width width of rectangle
     * @param length length of rectangle
     * @param color line color
     * @returns the instance of class Rectangle
     */
    static createRectangle(startPoint, width, length, color) {
        if (width <= 0) {
            (0, error_handler_1.errorHandler)(Rectangle.name, 'width');
        }
        if (length <= 0) {
            (0, error_handler_1.errorHandler)(Rectangle.name, 'length');
        }
        return new Rectangle(startPoint, width, length, color);
    }
    /**
     * This method return the area of rectangle
     *
     * @returns area of rectangle
     */
    area() {
        return this.width * this.height;
    }
    /**
     * This method return the diagonal of rectangle
     *
     * @returns diagonal of rectangle
     */
    diagonal() {
        return (this.width ** 2 + this.height ** 2) ** (1 / 2);
    }
    /**
     * This method return the perimeter of rectangle
     *
     * @returns perimeter of rectangle
     */
    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
    /**
     * This method draws rectangle in canvas
     *
     */
    draw(ctx) {
        const topPoint = this.initialPoints[0];
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.rect(topPoint.x, topPoint.y, this.width, this.height);
        ctx.stroke();
        ctx.closePath();
    }
    /**
     * This accessor change width of rectangle
     *
     * @param newWidth new width for rectangle
     */
    set changeWidth(newWidth) {
        this.width = newWidth;
    }
    /**
     * This accessor change length of rectangle
     *
     * @param newLength new length for rectangle
     */
    set changeLength(newLength) {
        this.height = newLength;
    }
    /**
     * This accessor return width of rectangle
     *
     * @returns width of rectangle
     */
    get getWidth() {
        return this.width;
    }
    /**
     * This accessor return length of rectangle
     *
     * @returns length of rectangle
     */
    get getLength() {
        return this.height;
    }
    /**
     * This accessor change line color of rectangle for drawing figure in canvas
     *
     * @param newColor new line color
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
exports.Rectangle = Rectangle;
