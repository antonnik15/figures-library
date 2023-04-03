# lib-figure-implementation

> lib-figure-implementation - a library that allows you to create and work with various geometric shapes.
> The library architecture allows you to draw shapes in HTML using the canvas element
>
## Features

- Full TypeScript support
- Support all platforms
- Easy to use

## Table of contents
- [Quick start](#quick-start)
  - [Install](#install)
- [Examples](#Examples)
  - [Example of using the library](#example-of-using-the-library)
  - [Instructions for drawing shapes using canvas](#instructions-for-drawing-shapes-using-canvas)
- Classes
  - [Circle](docs/classes/Circle.md)
  - [Rectangle](docs/classes/Rectangle.md)
  - [Shape](docs/classes/Shape.md)
  - [Square](docs/classes/Square.md)
  - [Triangle](docs/classes/Triangle.md)
- Type Aliases
  - [InitialPointType](docs/modules.md#initialpointtype)

## Type Aliases

### InitialPointType

Ƭ **InitialPointType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[features/shape/coordinates-type.ts:1](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/coordinates-type.ts#L1)

## Quick start

### Install

First make sure that you have installed Node.js.

Next install lib-figure-implementation from the command line using yarn or npm:

#### yarn:

```shell
yarn add lib-figure-implementation
```

#### npm:

```shell
npm install lib-figure-implementation --save
```

Ready! Now you can use the lib-figure-implementation library in your project.


## Examples

### Example of using the library
```TS
const circle = Circle.createCircle({ x: 1190, y: 150 }, 100, 'green');
// => instance of class Circle to the variable circle

const square = Square.createSquare({ x: 850, y: 50 }, 200, 'blue');
// => instance of class Square in square
 
const triangle = Triangle.createTriangle(
  [
    { x: 550, y: 250 },
    { x: 750, y: 250 },
    { x: 650, y: 50 }
  ],
  'black'
);
// => instance of class Triangle to the variable triangle

const rectangle = Rectangle.createRectangle({ x: 150, y: 50 }, 350, 200, 'red');
// => instance of class Rectangle to the variable rectangle

circle.area()
// => circle area value

circle.perimeter()
// => circle perimeter value

circle.draw()
// => draw circle in canvas

rectangle.area()
// => rectangle area value

triangle.area()
// => triangle area value

circle.changeColor("white")
// => change line color of circle
```

### Instructions for drawing shapes using canvas

#### Initialize your project with the command:

```shell
yarn init --yes
```

#### You need to add the following dependencies to your project:

```shell
yarn add typescript @types/node webpack ts-loader webpack-cli lib-figure-implementation 
```

#### Create a tsconfig.json in the root of the project directory and paste the following code snippet:

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "declaration": true,
    "sourceMap": false,
    "outDir": "./dist",
    "noEmit": false,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true, 
    "skipLibCheck": true,
    "allowJs": false
  },
  "include": ["src/index.ts"],
  "exclude": ["node_modules"]
}
```

#### Add the script to the package.json to run webpack:

```shell
{
  "scripts": {
    "dev": "webpack --config webpack.config.js"
  }
```

#### Create a webpack.config.js at the root of the project and paste the following code snippet:

```shell
module.exports = {
    entry: ["entry point of your project"],
    output: {
        filename: 'filename-of-final-bundle.js in your project',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'] // allow importing TypeScript files
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: "development",
};
```

#### Create index.html file with this simple structure:

```shell
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Canvas</title>
        <script src="/dist/bundle.js(--path to your bundle file--)"></script>
  </head>
    <body>
      <canvas id="myCanvas" width="1300" height="1000"> </canvas>
    </body>
</html>
```

#### Create an index.ts file where you can create shapes using the lib-figure-implementation library, for example:

```shell
const circle = Circle.createCircle({ x: 1190, y: 150 }, 100, 'green');

const square = Square.createSquare({ x: 850, y: 50 }, 200, 'blue');

const triangle = Triangle.createTriangle(
    [
        { x: 550, y: 250 },
        { x: 750, y: 250 },
        { x: 650, y: 50 }
    ],
    'black'
);

const rectangle = Rectangle.createRectangle({ x: 150, y: 50 }, 350, 200, 'red');

window.onload = () => {
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    square.draw(ctx as CanvasRenderingContext2D);
    triangle.draw(ctx as CanvasRenderingContext2D);
    rectangle.draw(ctx as CanvasRenderingContext2D);
    circle.draw(ctx as CanvasRenderingContext2D);
};
```

#### Run the following command to start webpack:

```shell
yarn dev 
```

#### Open index.html file in the browser. 
#### Congratulations, you have built the necessary figures!









