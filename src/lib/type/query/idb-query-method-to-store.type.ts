// Interface & Type.
import type { IDBQueryAdd } from "../../interface/query/idb-query-add.interface";
import type { IDBQueryClear } from "../../interface/query/idb-query-clear.interface";
import type { IDBQueryCount } from "../../interface/query/idb-query-count.interface";
import type { IDBQueryDelete } from "../../interface/query/idb-query-delete.interface";
import type { IDBQueryGet } from "../../interface/query/idb-query-get.interface";
import type { IDBQueryGetAll } from "../../interface/query/idb-query-get-all.interface";
import type { IDBQueryGetAllKeys } from "../../interface/query/idb-query-get-all-keys.interface";
import type { IDBQueryGetKey } from "../../interface/query/idb-query-get-key.interface";
import type { IDBQueryIndex } from "../../interface/query/idb-query-index.interface";
import type { IDBQueryOpenCursor } from "../../interface/query/idb-query-open-cursor.interface";
import type { IDBQueryOpenKeyCursor } from "../../interface";
import type { IDBQueryPut } from "../../interface/query/idb-query-put.interface";
import type { IDBSchema } from "../idb-schema.type";
import type { OneOrMany } from "@typedly/utility";
/**
 * @description  Query Method Store.
 * Variant Method -> StoreName -> QueryMethod
 * @export
 * @template {IDBSchema} Schema 
 * @template {keyof Schema & string} [StoreNames=keyof Schema & string] 
 */
export type IDBQueryMethodToStore<
  Schema extends IDBSchema,
  StoreNames extends keyof Schema & string = keyof Schema & string,
> = Partial<{
  add: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryAdd<Schema, StoreName, StoreNames>> }>,
  clear: Partial<{ [StoreName in StoreNames]: IDBQueryClear }>,
  count: Partial<{ [StoreName in StoreNames]: IDBQueryCount }>,
  delete: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryDelete> }>,

  // Get.
  get: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryGet<StoreName, Schema, StoreNames>> }>,
  getAll: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryGetAll<StoreName, Schema, StoreNames>> }>,
  getAllKeys?: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryGetAllKeys> }>,
  getKey?: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryGetKey> }>,

  index: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryIndex> }>,

  // Cursor.
  openCursor: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryOpenCursor> }>,
  openKeyCursor?: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryOpenKeyCursor> }>,

  put: Partial<{ [StoreName in StoreNames]: OneOrMany<IDBQueryPut<Schema, StoreName, StoreNames>> }>,
}>;

// Examples.
// const queryMethodToStore: IDBQueryMethodToStore<{periodic: {id: number, name: string}}> = {
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

// const keyOf: keyof IDBQueryMethodToStore<{periodic: {id: number, name: string}}> = 'get';