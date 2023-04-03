/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/examples/canvas-example.ts":
/*!****************************************!*\
  !*** ./src/examples/canvas-example.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst circle_1 = __webpack_require__(/*! ../features/circle */ \"./src/features/circle/index.ts\");\nconst rectangle_1 = __webpack_require__(/*! ../features/rectangle */ \"./src/features/rectangle/index.ts\");\nconst square_1 = __webpack_require__(/*! ../features/square */ \"./src/features/square/index.ts\");\nconst triangle_1 = __webpack_require__(/*! ../features/triangle */ \"./src/features/triangle/index.ts\");\nconst circle = circle_1.Circle.createCircle({ x: 100, y: 100 }, 100, 'green');\nconsole.log(circle);\nconst rectangle = rectangle_1.Rectangle.createRectangle({ x: 150, y: 120 }, 50, 70, 'red');\nconsole.log(rectangle);\nconst square = square_1.Square.createSquare({ x: 120, y: 200 }, 200, 'blue');\nconsole.log(square);\nconst triangle = triangle_1.Triangle.createTriangle([\n    { x: 100, y: 200 },\n    { x: 500, y: 200 },\n    { x: 300, y: 100 }\n], 'black');\nwindow.onload = () => {\n    const canvas = document.getElementById('myCanvas');\n    const ctx = canvas.getContext('2d');\n    square.draw(ctx);\n    triangle.draw(ctx);\n    rectangle.draw(ctx);\n    circle.draw(ctx);\n};\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/examples/canvas-example.ts?");

/***/ }),

/***/ "./src/features/circle/circle.ts":
/*!***************************************!*\
  !*** ./src/features/circle/circle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Circle = void 0;\nconst error_handler_1 = __webpack_require__(/*! ../../handlers/error-handler */ \"./src/handlers/error-handler.ts\");\nconst shape_1 = __webpack_require__(/*! ../shape */ \"./src/features/shape/index.ts\");\n/**\n * This class describes the internal structure and behavior of the circle object\n */\nclass Circle extends shape_1.Shape {\n    constructor(center, radius, color) {\n        super([center], color);\n        this.radius = radius;\n    }\n    /**\n     * This static method return instance of class Circle\n     *\n     * @param center center coordinate of circle\n     * @param radius circle radius\n     * @param color line color\n     * @returns the instance of class Circle\n     */\n    static createCircle(center, radius, color) {\n        if (radius <= 0) {\n            (0, error_handler_1.errorHandler)(Circle.name);\n        }\n        return new Circle(center, radius, color);\n    }\n    /**\n     * This method return the area of circle\n     *\n     * @returns area of circle\n     */\n    area() {\n        return Math.PI * this.radius * this.radius;\n    }\n    /**\n     * This method return the perimeter of circle\n     *\n     * @returns perimeter of circle\n     */\n    perimeter() {\n        return 2 * Math.PI * this.radius;\n    }\n    /**\n     * This method draws circle in canvas\n     *\n     */\n    draw(ctx) {\n        const center = this.initialPoints[0];\n        ctx.beginPath();\n        ctx.lineWidth = 3;\n        ctx.strokeStyle = this.color;\n        ctx.arc(center.x, center.y, this.radius, 0, Math.PI * 4);\n        ctx.stroke();\n        ctx.closePath();\n    }\n    /**\n     * This accessor return radius of circle\n     *\n     * @returns radius of circle\n     */\n    get getRadius() {\n        return this.radius;\n    }\n    /**\n     * This accessor change radius of circle\n     *\n     */\n    set changeRadius(newRadius) {\n        this.radius = newRadius;\n    }\n    /**\n     * This accessor change line color of circle for drawing figure in canvas\n     *\n     */\n    set changeColor(newColor) {\n        this.color = newColor;\n    }\n    /**\n     * This accessor return line color\n     *\n     * @returns line color\n     */\n    get getColor() {\n        return this.color;\n    }\n}\nexports.Circle = Circle;\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/circle/circle.ts?");

/***/ }),

/***/ "./src/features/circle/index.ts":
/*!**************************************!*\
  !*** ./src/features/circle/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Circle = void 0;\nvar circle_1 = __webpack_require__(/*! ./circle */ \"./src/features/circle/circle.ts\");\nObject.defineProperty(exports, \"Circle\", ({ enumerable: true, get: function () { return circle_1.Circle; } }));\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/circle/index.ts?");

/***/ }),

/***/ "./src/features/rectangle/index.ts":
/*!*****************************************!*\
  !*** ./src/features/rectangle/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Rectangle = void 0;\nvar rectangle_1 = __webpack_require__(/*! ./rectangle */ \"./src/features/rectangle/rectangle.ts\");\nObject.defineProperty(exports, \"Rectangle\", ({ enumerable: true, get: function () { return rectangle_1.Rectangle; } }));\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/rectangle/index.ts?");

/***/ }),

/***/ "./src/features/rectangle/rectangle.ts":
/*!*********************************************!*\
  !*** ./src/features/rectangle/rectangle.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Rectangle = void 0;\nconst error_handler_1 = __webpack_require__(/*! ../../handlers/error-handler */ \"./src/handlers/error-handler.ts\");\nconst shape_1 = __webpack_require__(/*! ../shape */ \"./src/features/shape/index.ts\");\n/**\n * This class describes the internal structure and behavior of the rectangle object\n */\nclass Rectangle extends shape_1.Shape {\n    constructor(startPoint, width, height, color) {\n        super([startPoint], color);\n        this.width = width;\n        this.height = height;\n    }\n    /**\n     *\n     * @param startPoint starting coordinate of rectangle\n     * @param width width of rectangle\n     * @param length length of rectangle\n     * @param color line color\n     * @returns the instance of class Rectangle\n     */\n    static createRectangle(startPoint, width, length, color) {\n        if (width <= 0) {\n            (0, error_handler_1.errorHandler)(Rectangle.name, 'width');\n        }\n        if (length <= 0) {\n            (0, error_handler_1.errorHandler)(Rectangle.name, 'length');\n        }\n        return new Rectangle(startPoint, width, length, color);\n    }\n    /**\n     * This method return the area of rectangle\n     *\n     * @returns area of rectangle\n     */\n    area() {\n        return this.width * this.height;\n    }\n    /**\n     * This method return the diagonal of rectangle\n     *\n     * @returns diagonal of rectangle\n     */\n    diagonal() {\n        return (this.width ** 2 + this.height ** 2) ** (1 / 2);\n    }\n    /**\n     * This method return the perimeter of rectangle\n     *\n     * @returns perimeter of rectangle\n     */\n    perimeter() {\n        return 2 * this.width + 2 * this.height;\n    }\n    /**\n     * This method draws rectangle in canvas\n     *\n     */\n    draw(ctx) {\n        const topPoint = this.initialPoints[0];\n        ctx.beginPath();\n        ctx.lineWidth = 3;\n        ctx.strokeStyle = this.color;\n        ctx.rect(topPoint.x, topPoint.y, this.width, this.height);\n        ctx.stroke();\n        ctx.closePath();\n    }\n    /**\n     * This accessor change width of rectangle\n     *\n     */\n    set changeWidth(newWidth) {\n        this.width = newWidth;\n    }\n    /**\n     * This accessor change length of rectangle\n     *\n     */\n    set changeLength(newLength) {\n        this.height = newLength;\n    }\n    /**\n     * This accessor return width of rectangle\n     *\n     * @returns width of rectangle\n     */\n    get getWidth() {\n        return this.width;\n    }\n    /**\n     * This accessor return length of rectangle\n     *\n     * @returns length of rectangle\n     */\n    get getLength() {\n        return this.height;\n    }\n    /**\n     * This accessor change line color of rectangle for drawing figure in canvas\n     *\n     */\n    set changeColor(newColor) {\n        this.color = newColor;\n    }\n    /**\n     * This accessor return line color\n     *\n     * @returns line color\n     */\n    get getColor() {\n        return this.color;\n    }\n}\nexports.Rectangle = Rectangle;\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/rectangle/rectangle.ts?");

/***/ }),

/***/ "./src/features/shape/index.ts":
/*!*************************************!*\
  !*** ./src/features/shape/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Shape = void 0;\nvar shape_1 = __webpack_require__(/*! ./shape */ \"./src/features/shape/shape.ts\");\nObject.defineProperty(exports, \"Shape\", ({ enumerable: true, get: function () { return shape_1.Shape; } }));\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/shape/index.ts?");

/***/ }),

/***/ "./src/features/shape/shape.ts":
/*!*************************************!*\
  !*** ./src/features/shape/shape.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Shape = void 0;\n/**\n * This class is abstract class for describing behavior of different figures\n */\nclass Shape {\n    constructor(initialPoints, color) {\n        this.initialPoints = initialPoints;\n        this.color = color;\n    }\n}\nexports.Shape = Shape;\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/shape/shape.ts?");

/***/ }),

/***/ "./src/features/square/index.ts":
/*!**************************************!*\
  !*** ./src/features/square/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Square = void 0;\nvar square_1 = __webpack_require__(/*! ./square */ \"./src/features/square/square.ts\");\nObject.defineProperty(exports, \"Square\", ({ enumerable: true, get: function () { return square_1.Square; } }));\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/square/index.ts?");

/***/ }),

/***/ "./src/features/square/square.ts":
/*!***************************************!*\
  !*** ./src/features/square/square.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Square = void 0;\nconst error_handler_1 = __webpack_require__(/*! ../../handlers/error-handler */ \"./src/handlers/error-handler.ts\");\nconst shape_1 = __webpack_require__(/*! ../shape */ \"./src/features/shape/index.ts\");\n/**\n * This class describes the internal structure and behavior of the square object\n */\nclass Square extends shape_1.Shape {\n    constructor(initialPoint, sideOfSquare, color) {\n        super([initialPoint], color);\n        this.sideOfSquare = sideOfSquare;\n    }\n    /**\n     * This static method return instance of class Square\n     *\n     * @param startPoint starting coordinate of square\n     * @param side length of side Square\n     * @param color line color\n     * @returns the instance of class Square\n     */\n    static createSquare(startPoint, side, color) {\n        if (side <= 0) {\n            (0, error_handler_1.errorHandler)(Square.name);\n        }\n        return new Square(startPoint, side, color);\n    }\n    /**\n     * This method return the area of square\n     *\n     * @returns area of square\n     */\n    area() {\n        return this.sideOfSquare * this.sideOfSquare;\n    }\n    /**\n     * This method return the diagonal of square\n     *\n     * @returns diagonal of square\n     */\n    diagonal() {\n        return this.sideOfSquare * 2 ** (1 / 2);\n    }\n    /**\n     * This method return the perimeter of square\n     *\n     * @returns perimeter of square\n     */\n    perimeter() {\n        return 4 * this.sideOfSquare;\n    }\n    /**\n     * This method draws square in canvas\n     *\n     */\n    draw(ctx) {\n        const topPoint = this.initialPoints[0];\n        ctx.beginPath();\n        ctx.lineWidth = 3;\n        ctx.strokeStyle = this.color;\n        ctx.rect(topPoint.x, topPoint.y, this.sideOfSquare, this.sideOfSquare);\n        ctx.stroke();\n        ctx.closePath();\n    }\n    /**\n     * This accessor change side length of square\n     *\n     */\n    set changeSide(newSide) {\n        this.sideOfSquare = newSide;\n    }\n    /**\n     * This accessor return side length of square\n     *\n     * @returns side length of square\n     */\n    get getSide() {\n        return this.sideOfSquare;\n    }\n    /**\n     * This accessor change line color of square for drawing figure in canvas\n     *\n     */\n    set changeColor(newColor) {\n        this.color = newColor;\n    }\n    /**\n     * This accessor return line color\n     *\n     * @returns line color\n     */\n    get getColor() {\n        return this.color;\n    }\n}\nexports.Square = Square;\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/square/square.ts?");

/***/ }),

/***/ "./src/features/triangle/index.ts":
/*!****************************************!*\
  !*** ./src/features/triangle/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Triangle = void 0;\nvar triangle_1 = __webpack_require__(/*! ./triangle */ \"./src/features/triangle/triangle.ts\");\nObject.defineProperty(exports, \"Triangle\", ({ enumerable: true, get: function () { return triangle_1.Triangle; } }));\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/triangle/index.ts?");

/***/ }),

/***/ "./src/features/triangle/triangle.ts":
/*!*******************************************!*\
  !*** ./src/features/triangle/triangle.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Triangle = void 0;\nconst error_handler_1 = __webpack_require__(/*! ../../handlers/error-handler */ \"./src/handlers/error-handler.ts\");\nconst shape_1 = __webpack_require__(/*! ../shape */ \"./src/features/shape/index.ts\");\n/**\n * This class describes the internal structure and behavior of the triangle object\n */\nclass Triangle extends shape_1.Shape {\n    constructor(initialPoint, color, sides) {\n        super(initialPoint, color);\n        this.a = sides[0];\n        this.b = sides[1];\n        this.c = sides[2];\n    }\n    /**\n     * This static method return instance of class Triangle\n     *\n     * @param initialPoints triangle vertices\n     * @param color line color\n     * @returns the instance of class Triangle\n     */\n    static createTriangle(initialPoints, color) {\n        const sidesArray = this.getSidesOfTriangle(initialPoints);\n        const [a, b, c] = [...sidesArray];\n        if (!this.existTriangle(a, b, c)) {\n            (0, error_handler_1.errorHandler)(Triangle.name);\n        }\n        return new Triangle(initialPoints, color, sidesArray);\n    }\n    /**\n     * This static method checks the possibility of the existence of a triangle\n     *\n     * @param a\n     * @param b\n     * @param c\n     * @returns true or false\n     */\n    static existTriangle(a, b, c) {\n        const maxSide = Math.max(a, b, c);\n        return a + b + c - maxSide > maxSide;\n    }\n    /**\n     * This static method returns an array of the lengths of the sides of the triangle\n     *\n     * @param initialPoints triangle vertices\n     * @private array of the lengths of the sides of the triangle\n     */\n    static getSidesOfTriangle(initialPoints) {\n        const sidesArray = [];\n        for (let i = 0; i < initialPoints.length; i++) {\n            if (i === 2) {\n                const sideOfTriangle = ((initialPoints[0].x - initialPoints[i].x) ** 2 + (initialPoints[0].y - initialPoints[i].y) ** 2) ** (1 / 2);\n                sidesArray.push(sideOfTriangle);\n                break;\n            }\n            const side = ((initialPoints[i + 1].x - initialPoints[i].x) ** 2 + (initialPoints[i + 1].y - initialPoints[i].y) ** 2) **\n                (1 / 2);\n            sidesArray.push(side);\n        }\n        return sidesArray;\n    }\n    /**\n     * This method return the area of triangle\n     *\n     * @returns area of triangle\n     */\n    area() {\n        const p = this.perimeter() / 2;\n        return (p * (p - this.a) * (p - this.b) * (p - this.c)) ** (1 / 2);\n    }\n    /**\n     * This method return the perimeter of triangle\n     *\n     * @returns perimeter of triangle\n     */\n    perimeter() {\n        return this.a + this.b + this.c;\n    }\n    /**\n     * This method draws triangle in canvas\n     *\n     */\n    draw(ctx) {\n        const point1 = this.initialPoints[0];\n        const point2 = this.initialPoints[1];\n        const point3 = this.initialPoints[2];\n        ctx.beginPath();\n        ctx.moveTo(point1.x, point1.y);\n        ctx.lineWidth = 3;\n        ctx.strokeStyle = this.color;\n        ctx.lineTo(point2.x, point2.y);\n        ctx.lineTo(point3.x, point3.y);\n        ctx.lineTo(point1.x, point1.y);\n        ctx.stroke();\n        ctx.closePath();\n    }\n    /**\n     * This method return the height of triangle\n     *\n     * @returns height of triangle\n     */\n    height() {\n        return (2 * this.area()) / this.a;\n    }\n    /**\n     * This accessor return side length \"a\" of triangle\n     *\n     * @returns side length \"a\" of triangle\n     */\n    get getA() {\n        return this.a;\n    }\n    /**\n     * This accessor return side length \"b\" of triangle\n     *\n     * @returns side length \"b\" of triangle\n     */\n    get getB() {\n        return this.b;\n    }\n    /**\n     * This accessor return side length \"c\" of triangle\n     *\n     * @returns side length \"c\" of triangle\n     */\n    get getC() {\n        return this.c;\n    }\n    /**\n     * This accessor change side length \"a\" of triangle\n     *\n     */\n    set changeA(newA) {\n        if (!this.existTriangleWithNewSide(newA, this.getB, this.getC)) {\n            (0, error_handler_1.errorHandler)(Triangle.name);\n        }\n        this.a = newA;\n    }\n    /**\n     * This accessor change side length \"b\" of triangle\n     *\n     */\n    set changeB(newB) {\n        if (!this.existTriangleWithNewSide(this.getA, newB, this.getC)) {\n            (0, error_handler_1.errorHandler)(Triangle.name);\n        }\n        this.b = newB;\n    }\n    /**\n     * This accessor change side length \"c\" of triangle\n     *\n     */\n    set changeC(newC) {\n        if (!this.existTriangleWithNewSide(this.getA, this.getB, newC)) {\n            (0, error_handler_1.errorHandler)(Triangle.name);\n        }\n        this.c = newC;\n    }\n    /**\n     * this accessor checks the possibility of the existence of a triangle\n     * when the value of the length of its sides changes\n     *\n     * @param a side length \"a\"\n     * @param b side length \"b\"\n     * @param c side length \"c\"\n     * @returns true or false\n     */\n    existTriangleWithNewSide(a, b, c) {\n        const maxSide = Math.max(a, b, c);\n        return a + b + c - maxSide > maxSide;\n    }\n    /**\n     * This accessor change line color of triangle for drawing figure in canvas\n     *\n     */\n    set changeColor(newColor) {\n        this.color = newColor;\n    }\n    /**\n     * This accessor return line color\n     *\n     * @returns line color\n     */\n    get getColor() {\n        return this.color;\n    }\n}\nexports.Triangle = Triangle;\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/features/triangle/triangle.ts?");

/***/ }),

/***/ "./src/handlers/error-handler.ts":
/*!***************************************!*\
  !*** ./src/handlers/error-handler.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.errorHandler = void 0;\nfunction errorHandler(figureName, additionalParam) {\n    let errorMessage;\n    switch (figureName) {\n        case 'Square':\n            errorMessage = 'Side of Square can be more than 0';\n            throwError(errorMessage, figureName);\n            break;\n        case 'Rectangle':\n            if (additionalParam === 'width') {\n                errorMessage = 'The width of the rectangle must be greater than 0';\n                throwError(errorMessage, figureName);\n            }\n            if (additionalParam === 'length') {\n                errorMessage = 'the length of the rectangle must be greater than 0';\n                throwError(errorMessage, figureName);\n            }\n            break;\n        case 'Triangle':\n            errorMessage = 'This triangle does not exist';\n            throwError(errorMessage, figureName);\n            break;\n        case 'Circle':\n            errorMessage = 'The radius must be greater than 0';\n            throwError(errorMessage, figureName);\n            break;\n    }\n}\nexports.errorHandler = errorHandler;\nfunction throwError(errorMessage, figureName) {\n    const error = new Error(errorMessage);\n    throw {\n        Error: error.message,\n        figureName\n    };\n}\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/handlers/error-handler.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Triangle = exports.Rectangle = exports.Square = exports.Circle = exports.Shape = void 0;\nconst shape_1 = __webpack_require__(/*! ./features/shape */ \"./src/features/shape/index.ts\");\nObject.defineProperty(exports, \"Shape\", ({ enumerable: true, get: function () { return shape_1.Shape; } }));\nconst circle_1 = __webpack_require__(/*! ./features/circle */ \"./src/features/circle/index.ts\");\nObject.defineProperty(exports, \"Circle\", ({ enumerable: true, get: function () { return circle_1.Circle; } }));\nconst rectangle_1 = __webpack_require__(/*! ./features/rectangle */ \"./src/features/rectangle/index.ts\");\nObject.defineProperty(exports, \"Rectangle\", ({ enumerable: true, get: function () { return rectangle_1.Rectangle; } }));\nconst square_1 = __webpack_require__(/*! ./features/square */ \"./src/features/square/index.ts\");\nObject.defineProperty(exports, \"Square\", ({ enumerable: true, get: function () { return square_1.Square; } }));\nconst triangle_1 = __webpack_require__(/*! ./features/triangle */ \"./src/features/triangle/index.ts\");\nObject.defineProperty(exports, \"Triangle\", ({ enumerable: true, get: function () { return triangle_1.Triangle; } }));\n\n\n//# sourceURL=webpack://lib-figure-implementation/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/examples/canvas-example.ts");
/******/ 	
/******/ })()
;