// Type.
import { IDBRequestHandler } from "../type/idb-request-handler.type";
/**
 * @description Defines the common structure for IndexedDB query methods, including optional success and error handlers.
 * @export
 * @template [RequestResult=any] 
 * @example
 * const requestEvents: IDBRequestEvents<string> = {
 *   onsuccess: (result) => console.log('Request succeeded with result:', result),
 *   onerror: (error) => console.error('Request failed with error:', error),
 * };
 */
export interface IDBRequestEvents<RequestResult = any> {
  onsuccess?: IDBRequestHandler<RequestResult>;
  onerror?: IDBRequestHandler<RequestResult>;
}

/*
const requestEvents: IDBRequestEvents<string> = {
  onsuccess: (result) => console.log('Request succeeded with result:', result),
  onerror: (error) => console.error('Request failed with error:', error),
};
*/