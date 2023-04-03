import { errorHandler } from '../../handlers/error-handler';
import { InitialPointType } from '../shape/coordinates-type';
import { Shape } from '../shape';

/**
 * This class describes the internal structure and behavior of the rectangle object
 */
export class Rectangle extends Shape {
  constructor(startPoint: InitialPointType, private width: number, private height: number, color: string) {
    super([startPoint], color);
  }

  /**
   *
   * @param startPoint starting coordinate of rectangle
   * @param width width of rectangle
   * @param length length of rectangle
   * @param color line color
   * @returns the instance of class Rectangle
   */
  static createRectangle(startPoint: InitialPointType, width: number, length: number, color: string): Rectangle {
    if (width <= 0) {
      errorHandler(Rectangle.name, 'width');
    }
    if (length <= 0) {
      errorHandler(Rectangle.name, 'length');
    }
    return new Rectangle(startPoint, width, length, color);
  }

  /**
   * This method return the area of rectangle
   *
   * @returns area of rectangle
   */
  area(): number {
    return this.width * this.height;
  }

  /**
   * This method return the diagonal of rectangle
   *
   * @returns diagonal of rectangle
   */
  diagonal(): number {
    return (this.width ** 2 + this.height ** 2) ** (1 / 2);
  }

  /**
   * This method return the perimeter of rectangle
   *
   * @returns perimeter of rectangle
   */
  perimeter(): number {
    return 2 * this.width + 2 * this.height;
  }

  /**
   * This method draws rectangle in canvas
   *
   */
  draw(ctx: CanvasRenderingContext2D): void {
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
  set changeWidth(newWidth: number) {
    this.width = newWidth;
  }

  /**
   * This accessor change length of rectangle
   *
   * @param newLength new length for rectangle
   */
  set changeLength(newLength: number) {
    this.height = newLength;
  }

  /**
   * This accessor return width of rectangle
   *
   * @returns width of rectangle
   */
  get getWidth(): number {
    return this.width;
  }

  /**
   * This accessor return length of rectangle
   *
   * @returns length of rectangle
   */
  get getLength(): number {
    return this.height;
  }

  /**
   * This accessor change line color of rectangle for drawing figure in canvas
   *
   * @param newColor new line color
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
