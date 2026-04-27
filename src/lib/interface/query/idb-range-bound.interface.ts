/**
 * @description Defines the type for IndexedDB range bounds, which can be used to specify the lower and upper bounds of a key range when querying an IndexedDB database.
 * This type allows for flexible specification of range bounds, including open and closed intervals, as well as single key queries.
 * @export
 * @template {IDBValidKey} [Lower=IDBValidKey] 
 * @template {IDBValidKey} [Upper=IDBValidKey] 
 * @template {boolean} [LowerOpen=boolean] 
 * @template {boolean} [UpperOpen=boolean] 
 * @template {IDBValidKey} [Only=IDBValidKey] 
 */
export type IDBRangeBound<
  Lower extends IDBValidKey = IDBValidKey,
  Upper extends IDBValidKey = IDBValidKey,
  LowerOpen extends boolean = boolean,
  UpperOpen extends boolean = boolean,
  Only extends IDBValidKey = IDBValidKey
> = {
  lower?: Lower,
  lowerOpen?: LowerOpen,

  upper?: Upper,
  upperOpen?: UpperOpen,

  only?: Only
} | [Lower, Upper, LowerOpen?, UpperOpen?];
