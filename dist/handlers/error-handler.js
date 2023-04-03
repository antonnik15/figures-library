"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(figureName, additionalParam) {
    let errorMessage;
    switch (figureName) {
        case 'Square':
            errorMessage = 'Side of Square can be more than 0';
            throwError(errorMessage, figureName);
            break;
        case 'Rectangle':
            if (additionalParam === 'width') {
                errorMessage = 'The width of the rectangle must be greater than 0';
                throwError(errorMessage, figureName);
            }
            if (additionalParam === 'length') {
                errorMessage = 'the length of the rectangle must be greater than 0';
                throwError(errorMessage, figureName);
            }
            break;
        case 'Triangle':
            errorMessage = 'This triangle does not exist';
            throwError(errorMessage, figureName);
            break;
        case 'Circle':
            errorMessage = 'The radius must be greater than 0';
            throwError(errorMessage, figureName);
            break;
    }
}
exports.errorHandler = errorHandler;
function throwError(errorMessage, figureName) {
    const error = new Error(errorMessage);
    throw {
        Error: error.message,
        figureName
    };
}
