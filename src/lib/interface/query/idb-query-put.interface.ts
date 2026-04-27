// Type.
import { IDBSchema } from "../../type";
// Interface.
import { IDBRequestEvents } from "../idb-request-events.interface";
/**
 * @description Query Put Parameters.
 * @export
 * @interface IDBQueryPut
 * @typedef {IDBQueryPut}
 * @template {IDBSchema} Schema 
 * @template {StoreNames} StoreName 
 * @template {keyof Schema} [StoreNames=keyof Schema] 
 * @extends {IDBRequestEvents<IDBValidKey>}
 */
export interface IDBQueryPut<
  Schema extends IDBSchema,
  StoreName extends StoreNames,
  StoreNames extends keyof Schema = keyof Schema
> extends IDBRequestEvents<IDBValidKey> {
  value: Schema[StoreName];
  key?: IDBValidKey;
}
