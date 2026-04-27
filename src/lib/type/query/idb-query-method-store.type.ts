// Type.
import { IDBQueryAdd } from "../../interface/query/idb-query-add.interface";
import { IDBQueryClear } from "../../interface/query/idb-query-clear.interface";
import { IDBQueryCount } from "../../interface/query/idb-query-count.interface";
import { IDBQueryDelete } from "../../interface/query/idb-query-delete.interface";
import { IDBQueryGet } from "../../interface/query/idb-query-get.interface";
import { IDBQueryGetAll } from "../../interface/query/idb-query-get-all.interface";
import { IDBQueryGetAllKeys } from "../../interface/query/idb-query-get-all-keys.interface";
import { IDBQueryGetKey } from "../../interface/query/idb-query-get-key.interface";
import { IDBQueryIndex } from "../../interface/query/idb-query-index.interface";
import { IDBQueryOpenCursor } from "../../interface/query/idb-query-open-cursor.interface";
import { IDBQueryPut } from "../../interface/query/idb-query-put.interface";
import { IDBSchema } from "../idb-schema.type";
/**
 * @description  Query Method Store.
 * Variant Method -> StoreName -> QueryMethod
 * @export
 * @typedef {IDBQueryMethod_Store}
 * @template {IDBSchema} Schema 
 * @template {keyof Schema & string} [StoreNames=keyof Schema & string] 
 */
export type IDBQueryMethod_Store<
  Schema extends IDBSchema,
  StoreNames extends keyof Schema & string = keyof Schema & string,
> = Partial<{
  add: Partial<{ [StoreName in StoreNames]: IDBQueryAdd<Schema, StoreName, StoreNames> }>,
  clear: Partial<{ [StoreName in StoreNames]: IDBQueryClear }>,
  count: Partial<{ [StoreName in StoreNames]: IDBQueryCount }>,
  delete: Partial<{ [StoreName in StoreNames]: IDBQueryDelete }>,

  // Get.
  get: Partial<{ [StoreName in StoreNames]: IDBQueryGet<StoreName, Schema, StoreNames> }>,
  getAll: Partial<{ [StoreName in StoreNames]: IDBQueryGetAll<StoreName, Schema, StoreNames> }>,
  getAllKeys?: Partial<{ [StoreName in StoreNames]: IDBQueryGetAllKeys }>,
  getKey?: Partial<{ [StoreName in StoreNames]: IDBQueryGetKey }>,

  index: Partial<{ [StoreName in StoreNames]: IDBQueryIndex }>,

  // Cursor.
  openCursor: Partial<{ [StoreName in StoreNames]: IDBQueryOpenCursor }>,
  // openKeyCursor?: Partial<{ [StoreName in StoreNames]: IDBQueryOpenKeyCursor<StoreName> }>,

  put: Partial<{ [StoreName in StoreNames]: IDBQueryPut<Schema, StoreName, StoreNames> }>,
}>;

// Examples.
// const test: IndexedDBQueryInput<{periodic: {id: number, name: string}}> 
// test.get?.periodic

// const test: IDBQueryMethod_Store<{periodic: {id: number, name: string}}> = {
//   get: {
//     periodic: {
//       query: 1,
//       onsuccess: (ev) => console.log('Get operation successful.', ev),
//       onerror: (ev) => console.error('Get operation failed.', ev),
//     }
//   },
//   put: {
//     periodic: {
//       value: { id: 1, name: 'Hydrogen' },
//       onsuccess: (ev) => console.log('Put operation successful.', ev),
//       onerror: (ev) => console.error('Put operation failed.', ev),
//     }
//   }
// };

// const keyOf: keyof IDBQueryMethod_Store<{periodic: {id: number, name: string}}> = 'get';