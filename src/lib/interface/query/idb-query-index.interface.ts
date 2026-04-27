// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Defines the type for an IndexedDB query to access an index in a store.
 * @export
 * @example
 * const indexQuery: IDBQueryIndex = {
 *   name: 'indexName',
 *   onsuccess: (ev) => console.log('Index query operation successful.', ev),
 *   onerror: (ev) => console.error('Index query operation failed.', ev),
 * };
 */
export interface IDBQueryIndex extends IDBRequestEvents<any[]> {
  name: string;
}

/*
const indexQuery: IDBQueryIndex = {
  name: 'indexName',
  onsuccess: (ev) => console.log('Index query operation successful.', ev),
  onerror: (ev) => console.error('Index query operation failed.', ev),
};
*/