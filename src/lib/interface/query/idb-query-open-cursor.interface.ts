// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
// Interface.
import { IDBRangeBound } from "./idb-range-bound.interface";
/**
 * @description
 * @export
 * @interface IDBQueryOpenCursor
 * @extends {IDBRequestEvents<IDBCursorWithValue | null>}
 */
export interface IDBQueryOpenCursor extends IDBRequestEvents<IDBCursorWithValue | null> {
  query?: IDBValidKey | IDBKeyRange | null;
  direction?: IDBCursorDirection;
  key?: IDBValidKey;
  range?: IDBRangeBound;
}
