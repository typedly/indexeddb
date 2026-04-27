/**
 * @description Defines the interface for the result of opening multiple IndexedDB stores, which includes a promise that resolves when the operation is complete, the opened object stores, and the associated transaction.
 * @export
 * @interface IDBOpenStoresResult
 * @template {string} Names 
 * @example
 * const openStoresResult: IDBOpenStoresResult<'users' | 'orders'> = {
 *   done: new Promise((resolve) => resolve()),
 *   stores: {
 *     users: db.transaction('users').objectStore('users'),
 *     orders: db.transaction('orders').objectStore('orders'),
 *   },
 *   transaction: db.transaction(['users', 'orders']),
 * };
 */
export interface IDBOpenStoresResult<Names extends string> {
  done: Promise<void>;
  stores: { [K in Names]: IDBObjectStore };
  transaction: IDBTransaction;
}

/*
const openStoresResult: IDBOpenStoresResult<'users' | 'orders'> = {
  done: new Promise((resolve) => resolve()),
  stores: {
    users: {} as IDBObjectStore,
    orders: {} as IDBObjectStore,
  },
  transaction: {} as IDBTransaction,
};
*/