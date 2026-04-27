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
 * @example
 * const config: IDBConfig<'MyDatabase', 'users' | 'orders', 1> = {
 *   name: 'MyDatabase',
 *   version: 1,
 *   stores: {
 *     users: {
 *       keyPath: 'id',
 *       autoIncrement: true,
 *     },
 *     orders: {
 *       keyPath: 'orderId',
 *       autoIncrement: true,
 *     },
 *   },
 * };
 */
export interface IDBConfig<
  Name extends string = string,
  StoreNames extends string = string,
  Version extends number = number
> {
  name: Name,
  stores: IDBStoresParameters<StoreNames>,
  version: Version
}

/*
const config: IDBConfig<'MyDatabase', 'users' | 'orders', 1> = {
  name: 'MyDatabase',
  version: 1,
  stores: {
    users: {
      keyPath: 'id',
      autoIncrement: true,
      index: [{
        keyPath: 'id',
        name: 'idIndex',
        options: { unique: true }
      }]
    },
    orders: {
      keyPath: 'orderId',
      autoIncrement: true,
    },
  },
}


const indexeddb = indexedDB.open(
  'test-db', // name
  1 // version
);

indexeddb.onupgradeneeded = (event) => {
  const db = (event.target as IDBOpenDBRequest).result;

  if (!config.stores) return;

  for (const [storeName, params] of Object.entries(config.stores)) {
    if (db.objectStoreNames.contains(storeName)) continue;

    const store = db.createObjectStore(storeName, {
      keyPath: params.keyPath, // config.stores[storeName].keyPath
      autoIncrement: params.autoIncrement, // config.stores[storeName].autoIncrement
    });

    params.index?.forEach((idx) => {
      store.createIndex(idx.name, idx.keyPath, idx.options); // config.stores[storeName].index
    });
  }
};
*/