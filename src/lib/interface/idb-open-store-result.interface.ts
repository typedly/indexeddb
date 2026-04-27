/**
 * @description
 * @export
 * @interface IDBOpenStoreResult
 */
export interface IDBOpenStoreResult {
  done: Promise<void>;
  store: IDBObjectStore;
  transaction: IDBTransaction;
}
