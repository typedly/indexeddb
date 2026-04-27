// Type.
import { IDBSchema, InsertValue } from "../../type";
// Interface.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Put Parameters.
 * @export
 * @interface IDBQueryPut
 * @template {IDBSchema} Schema 
 * @template {StoreNames} StoreName 
 * @template {keyof Schema} [StoreNames=keyof Schema] 
 * @extends {IDBRequestEvents<IDBValidKey>}
 * @example
 * const putQuery: IDBQueryPut<{ periodic: { id: number, name: string } }, 'periodic'> = {
 *   value: { id: 1, name: 'Hydrogen' },
 *   key: 1,
 *   onsuccess: (ev) => console.log('Put operation successful.', ev),
 *   onerror: (ev) => console.error('Put operation failed.', ev),
 * };
 */
export interface IDBQueryPut<
  Schema extends IDBSchema,
  StoreName extends StoreNames,
  StoreNames extends keyof Schema = keyof Schema
> extends IDBRequestEvents<IDBValidKey> {
  value: InsertValue<Schema[StoreName]>;
  key?: IDBValidKey;
}

/*
const putQuery: IDBQueryPut<{ periodic: { id: number, name: string } }, 'periodic'> = {
  value: { id: 1, name: 'Hydrogen' },
  key: 1,
  onsuccess: (ev) => console.log('Put operation successful.', ev),
  onerror: (ev) => console.error('Put operation failed.', ev),
};
*/