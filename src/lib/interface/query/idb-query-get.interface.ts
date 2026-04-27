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
 */
export interface IDBQueryGet<
  StoreName extends StoreNames,
  Schema extends IDBSchema,
  StoreNames extends keyof Schema = keyof Schema
> extends IDBRequestEvents<Schema[StoreName]> {
  query: IDBValidKey | IDBKeyRange;
}
