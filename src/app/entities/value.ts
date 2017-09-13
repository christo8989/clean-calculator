export type Value = string;

export function createValue( value: string, append: string ): Value {
  const result = value + append
  if ( !isValid( result ) )
    throw TypeError

  return result
}

const validCharacters = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '.',
]
export function isValid( value: Value ): boolean {
  for( let i = 0; i < value.length; ++i ) {
    const character = value[i]
    if ( !validCharacters.includes( character ))
      return false
  }

  return true
}

export function createNumber( value: Value ): number {
  return Number.parseFloat(value)
}