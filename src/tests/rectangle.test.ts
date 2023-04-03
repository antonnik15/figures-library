import { Rectangle } from '../features/rectangle';

test('should create a rectangle', () => {
  const rectangle = Rectangle.createRectangle({ x: 3, y: 4 }, 10, 15, 'blue');

  expect(rectangle.area()).toBe(150);
  expect(rectangle.perimeter()).toBe(50);
  expect(rectangle.getWidth).toBe(10);
  expect(rectangle.getLength).toBe(15);
  expect(rectangle.getColor).toBe('blue');
});

test('should throw an Error', () => {
  try {
    Rectangle.createRectangle({ x: 3, y: 4 }, 0, 15, 'red');
  } catch (e) {
    expect(e).not.toBeNull();
  }

  try {
    Rectangle.createRectangle({ x: 3, y: 4 }, 1, 0, 'red');
  } catch (e) {
    expect(e).not.toBeNull();
  }
});

const rectangle = Rectangle.createRectangle({ x: 10, y: 4 }, 8, 15, 'yellow');

test('should return right area', () => {
  expect(rectangle.area()).not.toBeUndefined();
  expect(rectangle.area()).toBe(120);
});

test('should return right diagonal of rectangle', () => {
  expect(rectangle.diagonal()).not.toBeUndefined();
  expect(Math.floor(rectangle.diagonal())).toBe(17);
});

test('should return right perimeter of rectangle', () => {
  expect(rectangle.perimeter()).not.toBeUndefined();
  expect(rectangle.perimeter()).toBe(46);
});

test('should change width of rectangle', () => {
  rectangle.changeWidth = 5;
  expect(rectangle.area()).toBe(75);
  expect(rectangle.perimeter()).toBe(40);
  expect(rectangle.getWidth).toBe(5);
  expect(rectangle.getLength).toBe(15);
  expect(rectangle.getColor).toBe('yellow');
});

test('should change length of rectangle', () => {
  rectangle.changeLength = 12;
  expect(rectangle.area()).toBe(60);
  expect(rectangle.perimeter()).toBe(34);
  expect(rectangle.getWidth).toBe(5);
  expect(rectangle.getLength).toBe(12);
  expect(rectangle.getColor).toBe('yellow');
});

test('should return a width of rectangle', () => {
  expect(rectangle.getWidth).toBe(5);
});

test('should return a length of rectangle', () => {
  expect(rectangle.getLength).toBe(12);
});

test('should change the line color', () => {
  rectangle.changeColor = 'black';
  expect(rectangle.getLength).toBe(12);
  expect(rectangle.getColor).toBe('black');
});
