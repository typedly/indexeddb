// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
// Interface.
import { IDBRangeBound } from "./idb-range-bound.interface";
/**
 * @description Defines the type for an IndexedDB query to open a cursor on a store or index.
 * @export
 * @interface IDBQueryOpenCursor
 * @extends {IDBRequestEvents<IDBCursorWithValue | null>}
 * @example
 * const openCursorQuery: IDBQueryOpenCursor = {
 *   query: IDBKeyRange.bound(1, 10),
 *   direction: 'next',
 *   onsuccess: (ev) => console.log('Open Cursor operation successful.', ev),
 *   onerror: (ev) => console.error('Open Cursor operation failed.', ev),
 * };
 */
export interface IDBQueryOpenCursor extends IDBRequestEvents<IDBCursorWithValue | null> {
  query?: IDBValidKey | IDBKeyRange | null;
  direction?: IDBCursorDirection;
  key?: IDBValidKey;
  range?: IDBRangeBound;
}

/*
const openCursorQuery: IDBQueryOpenCursor = {
  query: IDBKeyRange.bound(1, 10),
  direction: 'next',
  onsuccess: (ev) => console.log('Open Cursor operation successful.', ev),
  onerror: (ev) => console.error('Open Cursor operation failed.', ev),
};
*/