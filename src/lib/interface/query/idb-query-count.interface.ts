// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Count Parameters.
 * @export
 */
export interface IDBQueryCount extends IDBRequestEvents<number> {
  query?: IDBValidKey | IDBKeyRange;
}