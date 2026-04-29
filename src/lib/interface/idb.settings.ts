import { IDBStoresParameters } from "../type";
import { IDBOpenDBRequestEvents } from "./idb-opendb-request-events.interface";
/**
 * @description Defines the settings for configuring an IndexedDB database, including the database name, version, object store parameters, and optional event handlers for the connection process.
 * This interface includes properties for specifying the database name (`name`), the version of the database (`version`), and the parameters for the object stores (`parameters`) that will be created or accessed within the database.
 * Additionally, it includes an optional `connectionEvents` property that adheres to the `IDBOpenDBRequestEvents` interface, allowing developers to handle various events that may occur during the connection process, such as errors, successful connections, upgrades, and blocked requests.
 * @export
 * @interface IDBSettings
 * @template {string} DBName The type of database name.
 * @template {string} StoreNames The type of object store names.
 * @template {number} Version The type of database version.
 */
export interface IDBSettings<DBName extends string, StoreNames extends string, Version extends number> {
  name: DBName,
  parameters: IDBStoresParameters<StoreNames>,
  version: Version,
  connectionEvents?: IDBOpenDBRequestEvents
}

// Example
/*
const settings: IDBSettings<'MyDatabase', 'MyStore', 1> = {
  name: 'MyDatabase',
  version: 1,
  parameters: {
    MyStore: {
      keyPath: 'id',
      autoIncrement: true,
      index: [
        { name: 'nameIndex', keyPath: 'name', options: { unique: false } }
      ]
    }
  },
  connectionEvents: {
    onerror: (event) => {
      console.error('Error opening database:', event);
    },
    onsuccess: (event) => {
      console.log('Database opened successfully:', event);
    },
    onupgradeneeded: (event) => {
      console.log('Database upgrade needed:', event);
    },
    onblocked: (event) => {
      console.warn('Database open request blocked:', event);
    }
  }
};
*/