import { Circle } from '../features/circle';
import { Rectangle } from '../features/rectangle';
import { Square } from '../features/square';
import { Triangle } from '../features/triangle';

const circle = Circle.createCircle({ x: 100, y: 100 }, 100, 'green');
console.log(circle);

const rectangle = Rectangle.createRectangle({ x: 150, y: 120 }, 50, 70, 'red');
console.log(rectangle);

const square = Square.createSquare({ x: 120, y: 200 }, 200, 'blue');
console.log(square);

const triangle = Triangle.createTriangle(
  [
    { x: 100, y: 200 },
    { x: 500, y: 200 },
    { x: 300, y: 100 }
  ],
  'black'
);

window.onload = () => {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  square.draw(ctx as CanvasRenderingContext2D);
  triangle.draw(ctx as CanvasRenderingContext2D);
  rectangle.draw(ctx as CanvasRenderingContext2D);
  circle.draw(ctx as CanvasRenderingContext2D);
};
