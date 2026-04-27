// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Delete Parameters.
 * @export
 * @example
 * const deleteQuery: IDBQueryDelete = {
 *   query: IDBKeyRange.bound(1, 10),
 *   onsuccess: (ev) => console.log('Delete operation successful.', ev),
 *   onerror: (ev) => console.error('Delete operation failed.', ev),
 * };
 */
export interface IDBQueryDelete extends IDBRequestEvents<undefined> {
  query: IDBValidKey | IDBKeyRange;
}

/*
const deleteQuery: IDBQueryDelete = {
  query: IDBKeyRange.bound(1, 10),
  onsuccess: (ev) => console.log('Delete operation successful.', ev),
  onerror: (ev) => console.error('Delete operation failed.', ev),
};
*/