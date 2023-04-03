import { InitialPointType } from '../shape/coordinates-type';
import { Shape } from '../shape';
/**
 * This class describes the internal structure and behavior of the rectangle object
 */
export declare class Rectangle extends Shape {
    private width;
    private height;
    constructor(startPoint: InitialPointType, width: number, height: number, color: string);
    /**
     *
     * @param startPoint starting coordinate of rectangle
     * @param width width of rectangle
     * @param length length of rectangle
     * @param color line color
     * @returns the instance of class Rectangle
     */
    static createRectangle(startPoint: InitialPointType, width: number, length: number, color: string): Rectangle;
    /**
     * This method return the area of rectangle
     *
     * @returns area of rectangle
     */
    area(): number;
    /**
     * This method return the diagonal of rectangle
     *
     * @returns diagonal of rectangle
     */
    diagonal(): number;
    /**
     * This method return the perimeter of rectangle
     *
     * @returns perimeter of rectangle
     */
    perimeter(): number;
    /**
     * This method draws rectangle in canvas
     *
     */
    draw(ctx: CanvasRenderingContext2D): void;
    /**
     * This accessor change width of rectangle
     *
     */
    set changeWidth(newWidth: number);
    /**
     * This accessor change length of rectangle
     *
     */
    set changeLength(newLength: number);
    /**
     * This accessor return width of rectangle
     *
     * @returns width of rectangle
     */
    get getWidth(): number;
    /**
     * This accessor return length of rectangle
     *
     * @returns length of rectangle
     */
    get getLength(): number;
    /**
     * This accessor change line color of rectangle for drawing figure in canvas
     *
     */
    set changeColor(newColor: string);
    /**
     * This accessor return line color
     *
     * @returns line color
     */
    get getColor(): string;
}
