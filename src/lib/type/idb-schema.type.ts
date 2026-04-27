/**
 * @description Defines the interface for IndexedDB schema, which is a record of store names and their corresponding types.
 * @export
 * @template {string} [K=string] 
 * @template [V=unknown] 
 */
export type IDBSchema<
  K extends string = string,
  V = unknown
> = Record<K, V>;