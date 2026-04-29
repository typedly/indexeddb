import { IDBStoresParameters } from "../type";
import { IDBConnectionSettings } from "./idb-connection.settings";
/**
 * @description Defines the settings for configuring an IndexedDB database, including the parameters for object stores and the connection settings required to establish a connection to the database.
 * This interface includes a `parameters` property that adheres to the `IDBStoresParameters` type, which specifies the configuration for the object stores within the database.
 * It also includes a `connection` property that adheres to the `IDBConnectionSettings` interface, which contains the necessary information for connecting to the database, such as the database name, version, and optional event handlers for the connection process.
 * @export
 * @interface IDBSettingsWithConnection
 * @template {string} DBName The type of database name.
 * @template {string} StoreNames The type of object store names.
 * @template {number} Version The type of database version.
 */
export interface IDBSettingsWithConnection<DBName extends string, StoreNames extends string, Version extends number> {
  parameters: IDBStoresParameters<StoreNames>,
  connection: IDBConnectionSettings<DBName, Version>
}

// Example
/*
const settingsWithConnection: IDBSettingsWithConnection<'MyDatabase', 'MyStore', 1> = {
  parameters: {
    MyStore: {
      keyPath: 'id',
      autoIncrement: true,
      index: [
        { name: 'nameIndex', keyPath: 'name', options: { unique: false } }
      ]
    }
  },
  connection: {
    name: 'MyDatabase',
    version: 1,
    events: {
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
  }
};
*/
