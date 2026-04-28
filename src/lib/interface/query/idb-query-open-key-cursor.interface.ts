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