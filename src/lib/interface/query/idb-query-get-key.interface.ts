import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Get Key Parameters.
 * @export
 * @example
 * const getKeyQuery: IDBQueryGetKey = {
 *   query: IDBKeyRange.bound(1, 10),
 *   onsuccess: (ev) => console.log('Get Key operation successful.', ev),
 *   onerror: (ev) => console.error('Get Key operation failed.', ev),
 * };
 */
export interface IDBQueryGetKey extends IDBRequestEvents<IDBValidKey | undefined> {
  query: IDBValidKey | IDBKeyRange;
}

/*
const getKeyQuery: IDBQueryGetKey = {
  query: IDBKeyRange.bound(1, 10),
  onsuccess: (ev) => console.log('Get Key operation successful.', ev),
  onerror: (ev) => console.error('Get Key operation failed.', ev),
};
*/