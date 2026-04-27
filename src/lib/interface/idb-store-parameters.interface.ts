/**
 * @description Defines the interface for IndexedDB store parameters, which extends the native `IDBObjectStoreParameters` and includes an optional `index` property for defining indexes on the store.
 * @export
 * @interface IDBStoreParameters
 * @extends {IDBObjectStoreParameters}
 */
export interface IDBStoreParameters extends IDBObjectStoreParameters {
  index?: Array<{
    keyPath: string | string[];
    name: string;
    options?: IDBIndexParameters;
  }>;
};
