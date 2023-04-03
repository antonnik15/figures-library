"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const error_handler_1 = require("../../handlers/error-handler");
const shape_1 = require("../shape");
/**
 * This class describes the internal structure and behavior of the circle object
 */
class Circle extends shape_1.Shape {
    constructor(center, radius, color) {
        super([center], color);
        this.radius = radius;
    }
    /**
     * This static method return instance of class Circle
     *
     * @param center center coordinate of circle
     * @param radius circle radius
     * @param color line color
     * @returns the instance of class Circle
     */
    static createCircle(center, radius, color) {
        if (radius <= 0) {
            (0, error_handler_1.errorHandler)(Circle.name);
        }
        return new Circle(center, radius, color);
    }
    /**
     * This method return the area of circle
     *
     * @returns area of circle
     */
    area() {
        return Math.PI * this.radius * this.radius;
    }
    /**
     * This method return the perimeter of circle
     *
     * @returns perimeter of circle
     */
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
    /**
     * This method draws circle in canvas
     *
     */
    draw(ctx) {
        const center = this.initialPoints[0];
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(center.x, center.y, this.radius, 0, Math.PI * 4);
        ctx.stroke();
        ctx.closePath();
    }
    /**
     * This accessor return radius of circle
     *
     * @returns radius of circle
     */
    get getRadius() {
        return this.radius;
    }
    /**
     * This accessor change radius of circle
     *
     * @param newRadius new radius
     */
    set changeRadius(newRadius) {
        this.radius = newRadius;
    }
    /**
     * This accessor change line color of circle for drawing figure in canvas
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
exports.Circle = Circle;
