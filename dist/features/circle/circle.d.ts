import { InitialPointType } from '../shape/coordinates-type';
import { Shape } from '../shape';
/**
 * This class describes the internal structure and behavior of the circle object
 */
export declare class Circle extends Shape {
    private radius;
    constructor(center: InitialPointType, radius: number, color: string);
    /**
     * This static method return instance of class Circle
     *
     * @param center center coordinate of circle
     * @param radius circle radius
     * @param color line color
     * @returns the instance of class Circle
     */
    static createCircle(center: InitialPointType, radius: number, color: string): Circle;
    /**
     * This method return the area of circle
     *
     * @returns area of circle
     */
    area(): number;
    /**
     * This method return the perimeter of circle
     *
     * @returns perimeter of circle
     */
    perimeter(): number;
    /**
     * This method draws circle in canvas
     *
     */
    draw(ctx: CanvasRenderingContext2D): void;
    /**
     * This accessor return radius of circle
     *
     * @returns radius of circle
     */
    get getRadius(): number;
    /**
     * This accessor change radius of circle
     *
     */
    set changeRadius(newRadius: number);
    /**
     * This accessor change line color of circle for drawing figure in canvas
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
