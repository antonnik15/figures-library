import { InitialPointType } from '../shape/coordinates-type';
import { Shape } from '../shape';
/**
 * This class describes the internal structure and behavior of the triangle object
 */
export declare class Triangle extends Shape {
    private a;
    private b;
    private c;
    constructor(initialPoint: InitialPointType[], color: string, sides: number[]);
    /**
     * This static method return instance of class Triangle
     *
     * @param initialPoints triangle vertices
     * @param color line color
     * @returns the instance of class Triangle
     */
    static createTriangle(initialPoints: InitialPointType[], color: string): Triangle;
    /**
     * This static method checks the possibility of the existence of a triangle
     *
     * @param a
     * @param b
     * @param c
     * @returns true or false
     */
    static existTriangle(a: number, b: number, c: number): boolean;
    /**
     * This static method returns an array of the lengths of the sides of the triangle
     *
     * @param initialPoints triangle vertices
     * @private array of the lengths of the sides of the triangle
     */
    private static getSidesOfTriangle;
    /**
     * This method return the area of triangle
     *
     * @returns area of triangle
     */
    area(): number;
    /**
     * This method return the perimeter of triangle
     *
     * @returns perimeter of triangle
     */
    perimeter(): number;
    /**
     * This method draws triangle in canvas
     *
     */
    draw(ctx: CanvasRenderingContext2D): void;
    /**
     * This method return the height of triangle
     *
     * @returns height of triangle
     */
    height(): number;
    /**
     * This accessor return side length "a" of triangle
     *
     * @returns side length "a" of triangle
     */
    get getA(): number;
    /**
     * This accessor return side length "b" of triangle
     *
     * @returns side length "b" of triangle
     */
    get getB(): number;
    /**
     * This accessor return side length "c" of triangle
     *
     * @returns side length "c" of triangle
     */
    get getC(): number;
    /**
     * This accessor change side length "a" of triangle
     *
     */
    set changeA(newA: number);
    /**
     * This accessor change side length "b" of triangle
     *
     */
    set changeB(newB: number);
    /**
     * This accessor change side length "c" of triangle
     *
     */
    set changeC(newC: number);
    /**
     * this accessor checks the possibility of the existence of a triangle
     * when the value of the length of its sides changes
     *
     * @param a side length "a"
     * @param b side length "b"
     * @param c side length "c"
     * @returns true or false
     */
    existTriangleWithNewSide(a: number, b: number, c: number): boolean;
    /**
     * This accessor change line color of triangle for drawing figure in canvas
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
