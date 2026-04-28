// Type.
import { IDBSchema } from "../../type";
// Interface.
import { IDBQueryAdd } from "./idb-query-add.interface";
import { IDBQueryClear } from "./idb-query-clear.interface";
import { IDBQueryCount } from "./idb-query-count.interface";
import { IDBQueryDelete } from "./idb-query-delete.interface";
import { IDBQueryGet } from "./idb-query-get.interface";
import { IDBQueryGetAll } from "./idb-query-get-all.interface";
import { IDBQueryIndex } from "./idb-query-index.interface";
import { IDBQueryOpenCursor } from "./idb-query-open-cursor.interface";
import { IDBQueryOpenKeyCursor } from "./idb-query-open-key-cursor.interface";
import { IDBQueryPut } from "./idb-query-put.interface";
/**
 * @description Query method input.
 * @export
 * @interface IDBQueryMethod
 * @template {IDBSchema} Schema 
 * @template {StoreNames} StoreName 
 * @template {keyof Schema} StoreNames 
 * @example
 * const queryMethod: IDBQueryMethod<{ periodic: { id: number, name: string } }, 'periodic', 'periodic'> = {
 *   add: {
 *     storeName: 'periodic',
 *     value: { id: 1, name: 'Hydrogen' },
 *     key: 1,
 *     onsuccess: (ev) => console.log('Add operation successful.', ev),
 *     onerror: (ev) => console.error('Add operation failed.', ev),
 *   },
 *   clear: {
 *     storeName: 'periodic',
 *     onsuccess: (ev) => console.log('Clear operation successful.', ev),
 *     onerror: (ev) => console.error('Clear operation failed.', ev),
 *   },
 *   count: {
 *     storeName: 'periodic',
 *     query: IDBKeyRange.bound(1, 10),
 *     onsuccess: (ev) => console.log('Count operation successful.', ev),
 *     onerror: (ev) => console.error('Count operation failed.', ev),
 *   },
 *   delete: {
 *     storeName: 'periodic',
 *     query: 1,
 *     onsuccess: (ev) => console.log('Delete operation successful.', ev),
 *     onerror: (ev) => console.error('Delete operation failed.', ev),
 *   },
 *   get: {
 *     storeName: 'periodic',
 *     query: 1,
 *     onsuccess: (ev) => console.log('Get operation successful.', ev),
 *     onerror: (ev) => console.error('Get operation failed.', ev),
 *   },
 *   getAll: {
 *     storeName: 'periodic',
 *     query: IDBKeyRange.bound(1, 10),
 *     count: 5,
 *     onsuccess: (ev) => console.log('Get All operation successful.', ev),
 *     onerror: (ev) => console.error('Get All operation failed.', ev),
 *   },
 *   index: {
 *     storeName: 'periodic',
 *     name: 'indexName',
 *     onsuccess: (ev) => console.log('Index operation successful.', ev),
 *     onerror: (ev) => console.error('Index operation failed.', ev),
 *   },
 *   openCursor: {
 *     storeName: 'periodic',
 *     query: IDBKeyRange.bound(1, 10),
 *     direction: 'next',
 *     onsuccess: (ev) => console.log('Open Cursor operation successful.', ev),
 *     onerror: (ev) => console.error('Open Cursor operation failed.', ev),
 *   },
 *   put: {
 *     storeName: 'periodic',
 *     value: { id: 1, name: 'Hydrogen' },
 *     key: 1,
 *     onsuccess: (ev) => console.log('Put operation successful.', ev),
 *     onerror: (ev) => console.error('Put operation failed.', ev),
 *   },
 * }; 
 */
export interface IDBQueryMethod<
  Schema extends IDBSchema,
  StoreName extends StoreNames,
  StoreNames extends keyof Schema
> {
  add: {storeName: StoreName} & IDBQueryAdd<Schema, StoreName, StoreNames>,
  clear: {storeName: StoreName} & IDBQueryClear,
  count: {storeName: StoreName} & IDBQueryCount,
  delete: {storeName: StoreName} & IDBQueryDelete,
  get: {storeName: StoreName} & IDBQueryGet<StoreName, Schema, StoreNames>,
  getAll: {storeName: StoreName} & IDBQueryGetAll<StoreName, Schema, StoreNames>,
  index: {storeName: StoreName} & IDBQueryIndex,
  openCursor: { storeName: StoreName } & IDBQueryOpenCursor,
  openKeyCursor: { storeName: StoreName } & IDBQueryOpenKeyCursor,
  put: {storeName: StoreName} & IDBQueryPut<Schema, StoreName, StoreNames>,
};

/*
const queryMethod: IDBQueryMethod<{ periodic: { id: number, name: string } }, 'periodic', 'periodic'> = {
  add: {
    storeName: 'periodic',
    value: { id: 1, name: 'Hydrogen' },
    key: 1,
    onsuccess: (ev) => console.log('Add operation successful.', ev),
    onerror: (ev) => console.error('Add operation failed.', ev),
  },
  clear: {
    storeName: 'periodic',
    onsuccess: (ev) => console.log('Clear operation successful.', ev),
    onerror: (ev) => console.error('Clear operation failed.', ev),
  },
  count: {
    storeName: 'periodic',
    query: IDBKeyRange.bound(1, 10),
    onsuccess: (ev) => console.log('Count operation successful.', ev),
    onerror: (ev) => console.error('Count operation failed.', ev),
  },
  delete: {
    storeName: 'periodic',
    query: 1,
    onsuccess: (ev) => console.log('Delete operation successful.', ev),
    onerror: (ev) => console.error('Delete operation failed.', ev),
  },
  get: {
    storeName: 'periodic',
    query: 1,
    onsuccess: (ev) => console.log('Get operation successful.', ev),
    onerror: (ev) => console.error('Get operation failed.', ev),
  },
  getAll: {
    storeName: 'periodic',
    query: IDBKeyRange.bound(1, 10),
    count: 5,
    onsuccess: (ev) => console.log('Get All operation successful.', ev),
    onerror: (ev) => console.error('Get All operation failed.', ev),
  },
  index: {
    storeName: 'periodic',
    name: 'indexName',
    onsuccess: (ev) => console.log('Index operation successful.', ev),
    onerror: (ev) => console.error('Index operation failed.', ev),
  },
  openCursor: {
    storeName: 'periodic',
    query: IDBKeyRange.bound(1, 10),
    direction: 'next',
    onsuccess: (ev) => console.log('Open Cursor operation successful.', ev),
    onerror: (ev) => console.error('Open Cursor operation failed.', ev),
  },
  put: {
    storeName: 'periodic',
    value: { id: 1, name: 'Hydrogen' },
    key: 1,
    onsuccess: (ev) => console.log('Put operation successful.', ev),
    onerror: (ev) => console.error('Put operation failed.', ev),
  },
};
*/