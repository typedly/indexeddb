/**
 * @description Defines the shape of the event handlers that can be attached to an `IDBOpenDBRequest` when opening an IndexedDB database.
 * This interface includes optional properties for handling the `error`, `success`, `upgradeneeded`, and `blocked` events that may occur during the database opening process.
 * Each event handler is a function that receives the corresponding event object and is bound to the context of the `IDBOpenDBRequest`.
 * @export
 * @interface IDBOpenDBRequestEvents
 */
export interface IDBOpenDBRequestEvents {
  onerror?: ((this: IDBOpenDBRequest, ev: Event) => any) | null,
  onsuccess?: ((this: IDBOpenDBRequest, ev: Event) => any) | null,
  onupgradeneeded?: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null,
  onblocked?: ((ev: Event) => any) | null
}
