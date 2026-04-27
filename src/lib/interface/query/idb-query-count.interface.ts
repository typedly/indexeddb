// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Count Parameters.
 * @export
 * @example
 * const countQuery: IDBQueryCount = {
 *   query: IDBKeyRange.bound(1, 10),
 *   onsuccess: (ev) => console.log('Count operation successful.', ev),
 *   onerror: (ev) => console.error('Count operation failed.', ev),
 * };
 */
export interface IDBQueryCount extends IDBRequestEvents<number> {
  query?: IDBValidKey | IDBKeyRange;
}

/*
const countQuery: IDBQueryCount = {
  query: IDBKeyRange.bound(1, 10),
  onsuccess: (ev) => console.log('Count operation successful.', ev),
  onerror: (ev) => console.error('Count operation failed.', ev),
};
*/