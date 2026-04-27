// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Defines the type for an IndexedDB query to clear all records in a store.
 * @export
 * @example
 * const clearQuery: IDBQueryClear = {
 *   onsuccess: (ev) => console.log('Clear operation successful.', ev),
 *   onerror: (ev) => console.error('Clear operation failed.', ev),
 * };
 */
export interface IDBQueryClear extends IDBRequestEvents<undefined> {}

/*
const clearQuery: IDBQueryClear = {
  onsuccess: (ev) => console.log('Clear operation successful.', ev),
  onerror: (ev) => console.error('Clear operation failed.', ev),
};
*/