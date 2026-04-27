// Type.
import { IDBRequestHandler } from "../type/idb-request-handler.type";
/**
 * @description Defines the common structure for IndexedDB query methods, including optional success and error handlers.
 * @export
 * @template [RequestResult=any] 
 */
export interface IDBRequestEvents<RequestResult = any> {
  onsuccess?: IDBRequestHandler<RequestResult>;
  onerror?: IDBRequestHandler<RequestResult>;
}
