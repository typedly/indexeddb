// Interface.
import type { IDBRequestEvents } from "../idb-request-events.interface";
import type { IDBRangeBound } from "./idb-range-bound.interface";
/**
 * @description Defines the type for an IndexedDB query to open a key cursor on a store or index.
 * @export
 * @interface IDBQueryOpenKeyCursor
 * @extends {IDBRequestEvents<IDBCursor | null>}
 */
export interface IDBQueryOpenKeyCursor extends IDBRequestEvents<IDBCursor | null> {
  query?: IDBValidKey | IDBKeyRange | null;
  direction?: IDBCursorDirection;
  key?: IDBValidKey;
  range?: IDBRangeBound;
}

/*
const openKeyCursorQuery: IDBQueryOpenKeyCursor = {
  query: IDBKeyRange.bound(1, 10),
  direction: 'next',
  onsuccess: (ev) => console.log('Open Key Cursor operation successful.', ev),
  onerror: (ev) => console.error('Open Key Cursor operation failed.', ev),
};
*/