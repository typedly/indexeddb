// Type.
import { IDBSchema } from "../../type";
// Interface.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Add Parameters.
 * @export
 * @template {StoreNames} StoreName 
 * @template {object} StoreSchema 
 * @template {keyof StoreSchema} [StoreNames=keyof StoreSchema] 
 * @example
 * const addQuery: IDBQueryAdd<{ periodic: { id: number, name: string } }, 'periodic'> = {
 *   value: { id: 1, name: 'Hydrogen' },
 *   key: 1,
 *   onsuccess: (ev) => console.log('Add operation successful.', ev),
 *   onerror: (ev) => console.error('Add operation failed.', ev),
 * };
 */
export interface IDBQueryAdd<
  StoreSchema extends IDBSchema,
  StoreName extends StoreNames,
  StoreNames extends keyof StoreSchema = keyof StoreSchema
> extends IDBRequestEvents<IDBValidKey> {
  value: StoreSchema[StoreName],
  key?: IDBValidKey,
};

/*
const addQuery: IDBQueryAdd<{ periodic: { id: number, name: string } }, 'periodic'> = {
  value: { id: 1, name: 'Hydrogen' },
  key: 1,
  onsuccess: (ev) => console.log('Add operation successful.', ev),
  onerror: (ev) => console.error('Add operation failed.', ev),
};
*/