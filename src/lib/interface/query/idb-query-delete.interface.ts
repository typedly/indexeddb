// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Delete Parameters.
 * @export
 */
export interface IDBQueryDelete extends IDBRequestEvents<undefined> {
  query: IDBValidKey | IDBKeyRange;
}
