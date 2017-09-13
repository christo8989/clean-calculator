export enum Operation {
  Add,
  Subtract,
  Multiply,
  Divide,
}

export function execute( value1: number, value2: number, operator: Operation ): number {
  let result: number = null;
  switch( operator ) {
    case Operation.Add: 
      result = add(value1, value2)
      break;
    case Operation.Subtract: 
      result = subtract(value1, value2)
      break;
    case Operation.Multiply: 
      result = multiply(value1, value2)
      break;
    case Operation.Divide: 
      result = divide(value1, value2)
      break;
    default:
      throw Error('Operation not found.')
  }

  return result;
}

function add( value1: number, value2: number ): number {
  return value1 + value2;
}

function subtract( value1: number, value2: number ): number {
  return value1 - value2;
}

function multiply( value1: number, value2: number ): number {
  return value1 * value2;
}

function divide( value1: number, value2: number ): number {
  return value1 / value2;
}