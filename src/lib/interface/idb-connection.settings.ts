import { IDBOpenDBRequestEvents } from "./idb-opendb-request-events.interface";
/**
 * @description Defines the settings for establishing a connection to an IndexedDB database.
 * This interface includes properties for specifying the database name, version, and optional event handlers that can be attached to the `IDBOpenDBRequest` when opening the database.
 * The `name` property is a string that represents the name of the database, while the `version` property is a number that indicates the version of the database.
 * The `events` property is an optional object that adheres to the `IDBOpenDBRequestEvents` interface, allowing developers to handle various events that may occur during the database opening process, such as errors, successful connections, upgrades, and blocked requests.
 * @export
 * @interface IDBConnectionSettings
 * @template {string} DBName 
 * @template {number} Version 
 */
export interface IDBConnectionSettings<DBName extends string, Version extends number> {
  name: DBName;
  version: Version;
  events?: IDBOpenDBRequestEvents;
}

// Example
/*
const connectionSettings: IDBConnectionSettings<'MyDatabase', 1> = {
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
};
*/