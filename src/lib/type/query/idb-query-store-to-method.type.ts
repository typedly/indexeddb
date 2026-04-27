// Interface.
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
// Type.
import { IDBSchema, OneOrMany } from "..";
/**
 * @description Query by Store to Method Type.
 * Variant store -> method
 * @export
 * @template {IDBSchema} Schema 
 * @template {StoreNames} StoreName 
 * @template {keyof Schema & string} [StoreNames=keyof Schema & string] 
 */
export type IDBQueryStoreToMethod<
  Schema extends IDBSchema,
  StoreName extends StoreNames,
  StoreNames extends keyof Schema & string = keyof Schema & string,
> = Partial<{
  [Name in StoreName]: Partial<{
    add: OneOrMany<IDBQueryAdd<Schema, Name, StoreNames>>;
    put: OneOrMany<IDBQueryPut<Schema, Name, StoreNames>>;

    get: OneOrMany<IDBQueryGet<Name, Schema, StoreNames>>;
    getAll: OneOrMany<IDBQueryGetAll<Name, Schema, StoreNames>>;
    getAllKeys: OneOrMany<IDBQueryGetAllKeys>;
    getKey: OneOrMany<IDBQueryGetKey>;

    clear: OneOrMany<IDBQueryClear>;
    delete: OneOrMany<IDBQueryDelete>;
    count: OneOrMany<IDBQueryCount>;

    index: OneOrMany<IDBQueryIndex>;
    openCursor: OneOrMany<IDBQueryOpenCursor>;
  }>
}>;

// const queryStoreToMethod: IDBQueryStoreToMethod<{ users: { id: number } }, 'users'> = {
//   users: {
//     add: { value: { id: 1 } },
//     get: { query: 1 },
//     clear: {},
//     index: { name: 'id' },
//     openCursor: { query: IDBKeyRange.lowerBound(1), direction: 'next' }
//   }
// };
