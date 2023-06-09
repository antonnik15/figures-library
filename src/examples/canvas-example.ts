import { Circle } from '../features/circle';
import { Rectangle } from '../features/rectangle';
import { Square } from '../features/square';
import { Triangle } from '../features/triangle';

const circle: Circle = Circle.createCircle({ x: 1190, y: 150 }, 100, 'green');

const square: Square = Square.createSquare({ x: 850, y: 50 }, 200, 'blue');

const triangle: Triangle = Triangle.createTriangle(
  [
    { x: 550, y: 250 },
    { x: 750, y: 250 },
    { x: 650, y: 50 }
  ],
  'black'
);

const rectangle: Rectangle = Rectangle.createRectangle({ x: 150, y: 50 }, 350, 200, 'red');

window.onload = () => {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  square.draw(ctx as CanvasRenderingContext2D);
  triangle.draw(ctx as CanvasRenderingContext2D);
  rectangle.draw(ctx as CanvasRenderingContext2D);
  circle.draw(ctx as CanvasRenderingContext2D);
};
