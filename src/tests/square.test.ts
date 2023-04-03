import { Square } from '../features/square';

test('should create a square', () => {
  const square = Square.createSquare({ x: 4, y: 5 }, 5, 'white');

  expect(square.getSide).toBe(5);
  expect(square.area()).toBe(25);
  expect(square.perimeter()).toBe(20);
  expect(square.getColor).toBe('white');
});

test('should throw an Error', () => {
  try {
    Square.createSquare({ x: 4, y: 5 }, 0, 'white');
  } catch (e) {
    expect(e).not.toBeNull();
  }
});

const square = Square.createSquare({ x: 4, y: 5 }, 10, 'white');

test('should return right area', () => {
  expect(square.area()).not.toBeUndefined();
  expect(square.area()).toBe(100);
  expect(square.getColor).toBe('white');
});

test('should return right diagonal of square', () => {
  expect(square.diagonal()).not.toBeUndefined();
  expect(Math.floor(square.diagonal())).toBe(14);
});

test('should return right perimeter of square', () => {
  expect(square.diagonal()).not.toBeUndefined();
  expect(square.perimeter()).toBe(40);
});

test('should change side of square', () => {
  square.changeSide = 15;
  expect(square.getSide).toBe(15);
  expect(square.area()).toBe(225);
  expect(square.perimeter()).toBe(60);
});

test('should return a side of square', () => {
  expect(square.getSide).toBe(15);
});

test('should change the line color', () => {
  square.changeColor = 'black';
  expect(square.getColor).toBe('black');
});
