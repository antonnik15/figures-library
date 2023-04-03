import { errorHandler } from '../../handlers/error-handler';
import { InitialPointType } from '../shape/coordinates-type';
import { Shape } from '../shape';

/**
 * This class describes the internal structure and behavior of the square object
 */
export class Square extends Shape {
  private constructor(initialPoint: InitialPointType, private sideOfSquare: number, color: string) {
    super([initialPoint], color);
  }

  /**
   * This static method return instance of class Square
   *
   * @param startPoint starting coordinate of square
   * @param side length of side Square
   * @param color line color
   * @returns the instance of class Square
   */
  static createSquare(startPoint: InitialPointType, side: number, color: string): Square {
    if (side <= 0) {
      errorHandler(Square.name);
    }
    return new Square(startPoint, side, color);
  }

  /**
   * This method return the area of square
   *
   * @returns area of square
   */
  area(): number {
    return this.sideOfSquare * this.sideOfSquare;
  }

  /**
   * This method return the diagonal of square
   *
   * @returns diagonal of square
   */
  diagonal(): number {
    return this.sideOfSquare * 2 ** (1 / 2);
  }

  /**
   * This method return the perimeter of square
   *
   * @returns perimeter of square
   */
  perimeter(): number {
    return 4 * this.sideOfSquare;
  }

  /**
   * This method draws square in canvas
   *
   */
  draw(ctx: CanvasRenderingContext2D): void {
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
  set changeSide(newSide: number) {
    this.sideOfSquare = newSide;
  }

  /**
   * This accessor return side length of square
   *
   * @returns side length of square
   */
  get getSide(): number {
    return this.sideOfSquare;
  }

  /**
   * This accessor change line color of square for drawing figure in canvas
   *
   */
  set changeColor(newColor: string) {
    this.color = newColor;
  }

  /**
   * This accessor return line color
   *
   * @returns line color
   */
  get getColor(): string {
    return this.color;
  }
}
