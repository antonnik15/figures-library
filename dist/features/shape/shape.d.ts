import { InitialPointType } from './coordinates-type';
/**
 * This class is abstract class for describing behavior of different figures
 */
export declare abstract class Shape {
    protected initialPoints: InitialPointType[];
    protected color: string;
    protected constructor(initialPoints: InitialPointType[], color: string);
    abstract area(): number;
    abstract perimeter(): number;
    abstract set changeColor(newColor: string);
    abstract get getColor(): string;
    abstract draw(ctx: CanvasRenderingContext2D): void;
}
