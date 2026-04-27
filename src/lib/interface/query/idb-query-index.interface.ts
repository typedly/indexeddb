// Type.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Defines the type for an IndexedDB query to access an index in a store.
 * @export
 */
export interface IDBQueryIndex extends IDBRequestEvents<any[]> {
  name: string;
}
