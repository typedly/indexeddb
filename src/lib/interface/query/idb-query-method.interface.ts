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
import { IDBQueryPut } from "./idb-query-put.interface";
/**
 * @description Query method input.
 * @export
 * @interface IDBQueryMethod
 * @template {IDBSchema} Schema 
 * @template {StoreNames} StoreName 
 * @template {keyof Schema} StoreNames 
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
  put: {storeName: StoreName} & IDBQueryPut<Schema, StoreName, StoreNames>,
};
