/**
 * @description Defines the interface for IndexedDB schema, which is a record of store names and their corresponding types.
 * @export
 * @template {string} [K=string] 
 * @template {Record<string, unknown>} [V=Record<string, unknown>] 
 */
export type IDBSchema<
  K extends string = string,
  V extends Record<string, unknown> = Record<string, unknown>
> = Record<K, V>;