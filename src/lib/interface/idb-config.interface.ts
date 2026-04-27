// Type.
import { IDBStoresParameters } from "../type/idb-stores-parameters.type";
/**
 * @description Defines the configuration interface for an IndexedDB database, including the database name, version, and an optional object defining the stores within the database.
 * This interface is used to specify the structure and settings of the IndexedDB database when creating or opening it.
 * @export
 * @interface IDBConfig
 * @template Name 
 * @template {string} [StoreNames=string] 
 * @template {number} [Version=number] 
 */
export interface IDBConfig<
  Name,
  StoreNames extends string = string,
  Version extends number = number
> {
  name: Name,
  stores?: IDBStoresParameters<StoreNames>,
  version: Version
}
