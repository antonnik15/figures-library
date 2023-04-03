import { Triangle } from '../features/triangle';

test('should create a triangle', () => {
  const triangle = Triangle.createTriangle(
    [
      { x: 3, y: 4 },
      { x: 3, y: 7 },
      { x: 7, y: 7 }
    ],
    'blue'
  );

  expect(triangle.area()).toBe(6);
  expect(triangle.perimeter()).toBe(12);
  expect(triangle.height()).toBe(4);
  expect(triangle.getColor).toBe('blue');
});

test('should throw an Error', () => {
  try {
    Triangle.createTriangle(
      [
        { x: 3, y: 4 },
        { x: 15, y: 7 },
        { x: 7, y: 7 }
      ],
      'red'
    );
  } catch (e) {
    expect(e).not.toBeNull();
  }
});

const triangle = Triangle.createTriangle(
  [
    { x: 3, y: 4 },
    { x: 3, y: 7 },
    { x: 7, y: 7 }
  ],
  'yellow'
);

test('should return right area', () => {
  expect(triangle.area()).not.toBeUndefined();
  expect(triangle.area()).toBe(6);
});

test('should return right diagonal of triangle', () => {
  expect(triangle.height()).not.toBeUndefined();
  expect(triangle.height()).toBe(4);
});

test('should return right perimeter of triangle', () => {
  expect(triangle.perimeter()).not.toBeUndefined();
  expect(triangle.perimeter()).toBe(12);
});

test('should change the line color', () => {
  triangle.changeColor = 'black';
  expect(triangle.getColor).toBe('black');
});
