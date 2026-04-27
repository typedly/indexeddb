import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Get All Keys Parameters.
 * @export
 * @interface IDBQueryGetAllKeys
 * @extends {IDBRequestEvents<IDBValidKey[]>}
 * @example
 * const getAllKeysQuery: IDBQueryGetAllKeys = {
 *   query: IDBKeyRange.bound(1, 10),
 *   count: 5,
 *   onsuccess: (ev) => console.log('Get All Keys operation successful.', ev),
 *   onerror: (ev) => console.error('Get All Keys operation failed.', ev),
 * };
 */
export interface IDBQueryGetAllKeys extends IDBRequestEvents<IDBValidKey[]> {
  query?: IDBValidKey | IDBKeyRange | null | undefined,
  count?: number
}

/*
const getAllKeysQuery: IDBQueryGetAllKeys = {
  query: IDBKeyRange.bound(1, 10),
  count: 5,
  onsuccess: (ev) => console.log('Get All Keys operation successful.', ev),
  onerror: (ev) => console.error('Get All Keys operation failed.', ev),
};
*/