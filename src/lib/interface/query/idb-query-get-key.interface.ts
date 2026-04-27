import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Get Key Parameters.
 * @export
 */
export interface IDBQueryGetKey extends IDBRequestEvents<IDBValidKey | undefined> {
  query: IDBValidKey | IDBKeyRange;
}
