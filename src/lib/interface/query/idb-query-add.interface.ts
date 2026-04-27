// Type.
import { IDBSchema } from "../../type";
// Interface.
import { IDBRequestEvents } from "../idb-request-events.interface";
// Interface.
/**
 * @description Query Add Parameters.
 * @export
 * @template {StoreNames} StoreName 
 * @template {object} StoreSchema 
 * @template {keyof StoreSchema} [StoreNames=keyof StoreSchema] 
 */
export interface IDBQueryAdd<
  StoreSchema extends IDBSchema,
  StoreName extends StoreNames,
  StoreNames extends keyof StoreSchema = keyof StoreSchema
> extends IDBRequestEvents<IDBValidKey> {
  value: StoreSchema[StoreName],
  key?: IDBValidKey,
};
