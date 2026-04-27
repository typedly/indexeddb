/**
 * @description Defines a type that can represent either a single value of type T or an array of values of type T.
 * @export
 * @template T The type of the value(s) that can be represented by this type.
 */
export type OneOrMany<T> = T | T[];
