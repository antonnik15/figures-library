export function errorHandler(figureName: string, additionalParam?: string) {
  let errorMessage: string;
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

function throwError(errorMessage: string, figureName: string) {
  const error: Error = new Error(errorMessage);
  throw {
    Error: error.message,
    figureName
  };
}
