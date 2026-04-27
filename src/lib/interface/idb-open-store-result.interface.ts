/**
 * @description Defines the interface for the result of opening an IndexedDB store, which includes a promise that resolves when the operation is complete, the opened object store, and the associated transaction.
 * @export
 * @interface IDBOpenStoreResult
 * @example
 * const openStoreResult: IDBOpenStoreResult = {
 *   done: new Promise((resolve) => resolve()),
 *   store: db.transaction('storeName').objectStore('storeName'),
 *   transaction: db.transaction('storeName'),
 * };
 */
export interface IDBOpenStoreResult {
  done: Promise<void>;
  store: IDBObjectStore;
  transaction: IDBTransaction;
}

/*
const openStoreResult: IDBOpenStoreResult = {
  done: new Promise((resolve) => resolve()),
  store: {} as IDBObjectStore,
  transaction: {} as IDBTransaction,
};
*/