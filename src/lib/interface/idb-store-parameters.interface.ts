// Type.
import { IDBKeyPath } from "../type";
/**
 * @description Defines the interface for IndexedDB store parameters, which extends the native `IDBObjectStoreParameters` and includes an optional `index` property for defining indexes on the store.
 * @export
 * @interface IDBStoreParameters
 * @extends {IDBObjectStoreParameters}
 * @example
 * const storeParameters: IDBStoreParameters = {
 *   keyPath: 'id',
 *   autoIncrement: true,
 *   index: [
 *     {
 *       name: 'nameIndex',
 *       keyPath: 'name',
 *       options: { unique: false },
 *     },
 *     {
 *       name: 'emailIndex',
 *       keyPath: 'email',
 *       options: { unique: true },
 *     },
 *   ],
 * };
 */
export interface IDBStoreParameters extends IDBObjectStoreParameters {
  index?: Array<{
    keyPath: IDBKeyPath;
    name: string;
    options?: IDBIndexParameters;
  }>;
};

/*
const storeParameters: IDBStoreParameters = {
  keyPath: 'id',
  autoIncrement: true,
  index: [
    {
      name: 'nameIndex',
      keyPath: 'name',
      options: { unique: false },
    },
    {
      name: 'emailIndex',
      keyPath: 'email',
      options: { unique: true },
    },
  ],
};
*/