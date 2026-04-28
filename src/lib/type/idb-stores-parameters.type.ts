// Interface.
import type { IDBStoreParameters } from "../interface";
/**
 * @description Defines the type for IndexedDB stores parameters.
 * @export
 * @template {string} [StoreName=string] 
 */
export type IDBStoresParameters<StoreName extends string = string> = {
  [Name in StoreName]: IDBStoreParameters;
};
