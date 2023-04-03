import { errorHandler } from '../../handlers/error-handler';
import { InitialPointType } from '../shape/coordinates-type';
import { Shape } from '../shape';

/**
 * This class describes the internal structure and behavior of the triangle object
 */
export class Triangle extends Shape {
  private a: number;
  private b: number;
  private c: number;

  constructor(initialPoint: InitialPointType[], color: string, sides: number[]) {
    super(initialPoint, color);
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2];
  }

  /**
   * This static method return instance of class Triangle
   *
   * @param initialPoints triangle vertices
   * @param color line color
   * @returns the instance of class Triangle
   */
  static createTriangle(initialPoints: InitialPointType[], color: string): Triangle {
    const sidesArray = this.getSidesOfTriangle(initialPoints);
    const [a, b, c] = [...sidesArray];
    if (!this.existTriangle(a, b, c)) {
      errorHandler(Triangle.name);
    }
    return new Triangle(initialPoints, color, sidesArray);
  }

  /**
   * This static method checks the possibility of the existence of a triangle
   *
   * @param a
   * @param b
   * @param c
   * @returns true or false
   */
  static existTriangle(a: number, b: number, c: number): boolean {
    const maxSide = Math.max(a, b, c);
    return a + b + c - maxSide > maxSide;
  }

  /**
   * This static method returns an array of the lengths of the sides of the triangle
   *
   * @param initialPoints triangle vertices
   * @private array of the lengths of the sides of the triangle
   */
  private static getSidesOfTriangle(initialPoints: InitialPointType[]): number[] {
    const sidesArray: number[] = [];
    for (let i = 0; i < initialPoints.length; i++) {
      if (i === 2) {
        const sideOfTriangle =
          ((initialPoints[0].x - initialPoints[i].x) ** 2 + (initialPoints[0].y - initialPoints[i].y) ** 2) ** (1 / 2);
        sidesArray.push(sideOfTriangle);
        break;
      }
      const side =
        ((initialPoints[i + 1].x - initialPoints[i].x) ** 2 + (initialPoints[i + 1].y - initialPoints[i].y) ** 2) **
        (1 / 2);
      sidesArray.push(side);
    }
    return sidesArray;
  }

  /**
   * This method return the area of triangle
   *
   * @returns area of triangle
   */
  area(): number {
    const p = this.perimeter() / 2;
    return (p * (p - this.a) * (p - this.b) * (p - this.c)) ** (1 / 2);
  }

  /**
   * This method return the perimeter of triangle
   *
   * @returns perimeter of triangle
   */
  perimeter(): number {
    return this.a + this.b + this.c;
  }

  /**
   * This method draws triangle in canvas
   *
   */
  draw(ctx: CanvasRenderingContext2D): void {
    const point1 = this.initialPoints[0];
    const point2 = this.initialPoints[1];
    const point3 = this.initialPoints[2];
    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.lineTo(point2.x, point2.y);
    ctx.lineTo(point3.x, point3.y);
    ctx.lineTo(point1.x, point1.y);
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * This method return the height of triangle
   *
   * @returns height of triangle
   */
  height(): number {
    return (2 * this.area()) / this.a;
  }

  /**
   * This accessor return side length "a" of triangle
   *
   * @returns side length "a" of triangle
   */
  get getA(): number {
    return this.a;
  }

  /**
   * This accessor return side length "b" of triangle
   *
   * @returns side length "b" of triangle
   */
  get getB(): number {
    return this.b;
  }

  /**
   * This accessor return side length "c" of triangle
   *
   * @returns side length "c" of triangle
   */
  get getC(): number {
    return this.c;
  }

  /**
   * This accessor change side length "a" of triangle
   *
   * @param newA new side "a"
   */
  set changeA(newA: number) {
    if (!this.existTriangleWithNewSide(newA, this.getB, this.getC)) {
      errorHandler(Triangle.name);
    }
    this.a = newA;
  }

  /**
   * This accessor change side length "b" of triangle
   *
   * @param newB new side "b"
   */
  set changeB(newB: number) {
    if (!this.existTriangleWithNewSide(this.getA, newB, this.getC)) {
      errorHandler(Triangle.name);
    }
    this.b = newB;
  }

  /**
   * This accessor change side length "c" of triangle
   *
   * @param newC new side "a"
   */
  set changeC(newC: number) {
    if (!this.existTriangleWithNewSide(this.getA, this.getB, newC)) {
      errorHandler(Triangle.name);
    }
    this.c = newC;
  }

  /**
   * this accessor checks the possibility of the existence of a triangle
   * when the value of the length of its sides changes
   *
   * @param a side length "a"
   * @param b side length "b"
   * @param c side length "c"
   * @returns true or false
   */
  existTriangleWithNewSide(a: number, b: number, c: number): boolean {
    const maxSide = Math.max(a, b, c);
    return a + b + c - maxSide > maxSide;
  }

  /**
   * This accessor change line color of triangle for drawing figure in canvas
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
