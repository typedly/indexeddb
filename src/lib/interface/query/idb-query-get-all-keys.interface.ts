import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Get All Keys Parameters.
 * @export
 * @interface IDBQueryGetAllKeys
 * @extends {IDBRequestEvents<IDBValidKey[]>}
 */
export interface IDBQueryGetAllKeys extends IDBRequestEvents<IDBValidKey[]> {
  query?: IDBValidKey | IDBKeyRange | null | undefined,
  count?: number
}
