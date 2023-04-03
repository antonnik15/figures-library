import { InitialPointType } from '../shape/coordinates-type';
import { Shape } from '../shape';
/**
 * This class describes the internal structure and behavior of the square object
 */
export declare class Square extends Shape {
    private sideOfSquare;
    private constructor();
    /**
     * This static method return instance of class Square
     *
     * @param startPoint starting coordinate of square
     * @param side length of side Square
     * @param color line color
     * @returns the instance of class Square
     */
    static createSquare(startPoint: InitialPointType, side: number, color: string): Square;
    /**
     * This method return the area of square
     *
     * @returns area of square
     */
    area(): number;
    /**
     * This method return the diagonal of square
     *
     * @returns diagonal of square
     */
    diagonal(): number;
    /**
     * This method return the perimeter of square
     *
     * @returns perimeter of square
     */
    perimeter(): number;
    /**
     * This method draws square in canvas
     *
     */
    draw(ctx: CanvasRenderingContext2D): void;
    /**
     * This accessor change side length of square
     *
     */
    set changeSide(newSide: number);
    /**
     * This accessor return side length of square
     *
     * @returns side length of square
     */
    get getSide(): number;
    /**
     * This accessor change line color of square for drawing figure in canvas
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
