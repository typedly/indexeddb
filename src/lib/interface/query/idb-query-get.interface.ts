// Type.
import { IDBSchema } from "../../type";
// Interface.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Get Parameters.
 * @export
 * @template {StoreNames} StoreName 
 * @template {object} Schema 
 * @template {keyof Schema} [StoreNames=keyof Schema] 
 * @example
 * const getQuery: IDBQueryGet<'periodic', { periodic: { id: number, name: string } }, 'periodic'> = {
 *   query: 1,
 *   onsuccess: (ev) => console.log('Get operation successful.', ev),
 *   onerror: (ev) => console.error('Get operation failed.', ev),
 * };
 */
export interface IDBQueryGet<
  StoreName extends StoreNames,
  Schema extends IDBSchema,
  StoreNames extends keyof Schema = keyof Schema
> extends IDBRequestEvents<Schema[StoreName]> {
  query: IDBValidKey | IDBKeyRange;
}

/*
const getQuery: IDBQueryGet<'periodic', { periodic: { id: number, name: string } }, 'periodic'> = {
  query: 1,
  onsuccess: (ev) => console.log('Get operation successful.', ev),
  onerror: (ev) => console.error('Get operation failed.', ev),
};
*/