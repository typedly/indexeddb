/**
 * @description Defines the type for IndexedDB transaction events.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction#events
 * @export
 */
export interface IDBTransactionEvents extends Partial<{
  onabort: (this: IDBTransaction, ev: IDBTransactionEventMap['abort']) => any,
  oncomplete: (this: IDBTransaction, ev: IDBTransactionEventMap['complete']) => any,
  onerror: (this: IDBTransaction, ev: IDBTransactionEventMap['error']) => any,
}> {}
