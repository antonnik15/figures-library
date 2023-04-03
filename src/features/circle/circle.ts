import { errorHandler } from '../../handlers/error-handler';
import { InitialPointType } from '../shape/coordinates-type';
import { Shape } from '../shape';

/**
 * This class describes the internal structure and behavior of the circle object
 */
export class Circle extends Shape {
  constructor(center: InitialPointType, private radius: number, color: string) {
    super([center], color);
  }

  /**
   * This static method return instance of class Circle
   *
   * @param center center coordinate of circle
   * @param radius circle radius
   * @param color line color
   * @returns the instance of class Circle
   */
  static createCircle(center: InitialPointType, radius: number, color: string): Circle {
    if (radius <= 0) {
      errorHandler(Circle.name);
    }
    return new Circle(center, radius, color);
  }

  /**
   * This method return the area of circle
   *
   * @returns area of circle
   */
  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  /**
   * This method return the perimeter of circle
   *
   * @returns perimeter of circle
   */
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  /**
   * This method draws circle in canvas
   *
   */
  draw(ctx: CanvasRenderingContext2D): void {
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
  get getRadius(): number {
    return this.radius;
  }

  /**
   * This accessor change radius of circle
   *
   */
  set changeRadius(newRadius: number) {
    this.radius = newRadius;
  }

  /**
   * This accessor change line color of circle for drawing figure in canvas
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
