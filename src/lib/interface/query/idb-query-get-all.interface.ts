// Type.
import { IDBSchema } from "../../type";
// Interface.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Get All Parameters.
 * @export
 * @template {StoreNames} StoreName 
 * @template {object} Schema 
 * @template {keyof Schema} [StoreNames=keyof Schema] 
 * @example
 * const getAllQuery: IDBQueryGetAll<'periodic', { periodic: { id: number, name: string } }, 'periodic'> = {
 *   query: IDBKeyRange.bound(1, 10),
 *   count: 5,
 *   onsuccess: (ev) => console.log('Get All operation successful.', ev),
 *   onerror: (ev) => console.error('Get All operation failed.', ev),
 * };
 */
export interface IDBQueryGetAll<
  StoreName extends StoreNames,
  Schema extends IDBSchema,
  StoreNames extends keyof Schema = keyof Schema
> extends IDBRequestEvents<Schema[StoreName][]> {
  query?: IDBValidKey | IDBKeyRange | null | undefined;
  count?: number;
}

/*
const getAllQuery: IDBQueryGetAll<'periodic', { periodic: { id: number, name: string } }, 'periodic'> = {
  query: IDBKeyRange.bound(1, 10),
  count: 5,
  onsuccess: (ev) => console.log('Get All operation successful.', ev),
  onerror: (ev) => console.error('Get All operation failed.', ev),
};
*/