// Type.
import { IDBSchema, IDBQueryStore_Method, IDBQueryMethod_Store } from "../type";
/**
 * @description Defines the shape of the query object that can be passed to the IDBQuery constructor or its methods.
 * @export
 * @interface IDBStoreQuery
 * @template {IDBSchema} Schema The database schema type.
 * @template {keyof Schema & string} StoreNames The store names defined in the schema.
 * @example
 * const storeQuery: IDBStoreQuery<MySchema, 'users' | 'orders'> = {
 *   store: (store) => {
 *     // Perform operations on the store
 *   },
 *   method: (method) => {
 *     // Perform operations using the method
 *   },
 * };
 */
export interface IDBStoreQuery<
  Schema extends IDBSchema,
  StoreNames extends keyof Schema & string
> {
  store?: IDBQueryStore_Method<Schema, StoreNames, StoreNames>,
  method?: IDBQueryMethod_Store<Schema, StoreNames>
}

/*
const storeQuery: IDBStoreQuery<MySchema, 'users' | 'orders'> = {
  store: (store) => {
    // Perform operations on the store
  },
  method: (method) => {
    // Perform operations using the method
  },
};
*/