/**
 * @description Defines the interface for the result of opening an IndexedDB transaction, which includes a promise that resolves when the operation is complete and the associated transaction.
 * @export
 * @interface IDBOpenTransactionResult
 * @example
 * const openTransactionResult: IDBOpenTransactionResult = {
 *   done: new Promise((resolve) => resolve()),
 *   transaction: db.transaction('storeName'),
 * };
 */
export interface IDBOpenTransactionResult {
  done: Promise<void>;
  transaction: IDBTransaction;
}

/*
const openTransactionResult: IDBOpenTransactionResult = {
  done: new Promise((resolve) => resolve()),
  transaction: {} as IDBTransaction,
};
*/