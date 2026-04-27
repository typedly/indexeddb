/**
 * @description
 * @export
 * @interface IDBOpenTransactionResult
 */
export interface IDBOpenTransactionResult {
  done: Promise<void>;
  transaction: IDBTransaction;
}
