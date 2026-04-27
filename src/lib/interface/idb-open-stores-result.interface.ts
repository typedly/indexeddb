/**
 * @description
 * @export
 * @interface IDBOpenStoresResult
 * @template {string} Names 
 */
export interface IDBOpenStoresResult<Names extends string> {
  done: Promise<void>;
  stores: { [K in Names]: IDBObjectStore };
  transaction: IDBTransaction;
}