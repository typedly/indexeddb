/**
 * @description
 * @export
 * @template {number} [Lower=number] 
 * @template {number} [Upper=number] 
 * @template {boolean} [LowerOpen=boolean] 
 * @template {boolean} [UpperOpen=boolean] 
 * @template [Only=any] 
 */
export type IDBRangeBound<
  Lower extends number = number,
  Upper extends number = number,
  LowerOpen extends boolean = boolean,
  UpperOpen extends boolean = boolean,
  Only = any
> = {
  lower?: Lower,
  lowerOpen?: LowerOpen,

  upper?: Upper,
  upperOpen?: UpperOpen,

  only?: Only
} | [Lower, Upper, LowerOpen?, UpperOpen?];
