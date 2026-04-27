/**
 * @description Defines the shape of the event handlers that can be attached to an `IDBOpenDBRequest` when opening an IndexedDB database.
 * This interface includes optional properties for handling the `error`, `success`, `upgradeneeded`, and `blocked` events that may occur during the database opening process.
 * Each event handler is a function that receives the corresponding event object and is bound to the context of the `IDBOpenDBRequest`.
 * @export
 * @interface IDBOpenDBRequestEvents
 * @example
 * const openDBRequest = indexedDB.open('MyDatabase', 1);
 * const events: IDBOpenDBRequestEvents = {
 *   onerror: (event) => {
 *     console.error('Error opening database:', event);
 *   },
 *   onsuccess: (event) => {
 *     console.log('Database opened successfully:', event);
 *   },
 *   onupgradeneeded: (event) => {
 *     console.log('Database upgrade needed:', event);
 *     const db = openDBRequest.result;
 *     if (!db.objectStoreNames.contains('users')) {
 *       db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
 *     }
 *   },
 *   onblocked: (event) => {
 *     console.warn('Database open request is blocked:', event);
 *   },
 * };
 * Object.assign(openDBRequest, events);
 */
export interface IDBOpenDBRequestEvents {
  onerror?: ((this: IDBOpenDBRequest, ev: Event) => any) | null,
  onsuccess?: ((this: IDBOpenDBRequest, ev: Event) => any) | null,
  onupgradeneeded?: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null,
  onblocked?: ((ev: Event) => any) | null
}

/*
const openDBRequest = indexedDB.open('MyDatabase', 1);
const events: IDBOpenDBRequestEvents = {
  onerror: (event) => {
    console.error('Error opening database:', event);
  },
  onsuccess: (event) => {
    console.log('Database opened successfully:', event);
  },
  onupgradeneeded: (event) => {
    console.log('Database upgrade needed:', event);
    const db = openDBRequest.result;
    if (!db.objectStoreNames.contains('users')) {
      db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
    }
  },
  onblocked: (event) => {
    console.warn('Database open request is blocked:', event);
  },
};
Object.assign(openDBRequest, events);
*/