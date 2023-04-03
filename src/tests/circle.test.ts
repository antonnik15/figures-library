import { Circle } from '../features/circle';

test('should create a circle', () => {
  const circle = Circle.createCircle({ x: 3, y: 4 }, 5, 'red');

  expect(Math.floor(circle.area())).toBe(78);
  expect(Math.floor(circle.perimeter())).toBe(31);
  expect(circle.getRadius).toBe(5);
  expect(circle.getColor).toBe('red');
});

test('should throw an Error', () => {
  try {
    Circle.createCircle({ x: 3, y: 4 }, 0, 'red');
  } catch (e) {
    expect(e).not.toBeNull();
  }
});

const circle = Circle.createCircle({ x: 10, y: 4 }, 8, 'green');

test('should return right area', () => {
  expect(circle.area()).not.toBeUndefined();
  expect(Math.floor(circle.area())).toBe(201);
  expect(circle.getColor).toBe('green');
});

test('should return right perimeter of circle', () => {
  expect(circle.perimeter()).not.toBeUndefined();
  expect(Math.floor(circle.perimeter())).toBe(50);
});

test('should change radius of circe', () => {
  circle.changeRadius = 10;
  expect(Math.floor(circle.area())).toBe(314);
  expect(Math.floor(circle.perimeter())).toBe(62);
  expect(circle.getRadius).toBe(10);
  expect(circle.getColor).toBe('green');
});

test('should change the line color', () => {
  circle.changeColor = 'black';
  expect(circle.getColor).toBe('black');
});
