// Interface.
import { IDBTransactionEvents } from "./idb-transaction-events.interface";
/**
 * @description Defines the interface for options when performing a transaction query in IndexedDB, which includes the transaction mode, event handlers for transaction completion and transaction events, and additional transaction options.
 * @export
 * @interface IDBQueryTransactionOptions
 * @extends {IDBTransactionEvents}
 * @example
 * const transactionOptions: IDBQueryTransactionOptions = {
 *   mode: 'readwrite',
 *   ondone: (done) => console.log('Transaction completed:', done),
 *   ontransaction: (transaction) => console.log('Transaction event:', transaction),
 *   options: { durability: 'relaxed' },
 * };
 */
export interface IDBQueryTransactionOptions extends IDBTransactionEvents {
  mode?: IDBTransactionMode;
  ondone?: (done: Promise<void>) => any;
  ontransaction?: (transaction: IDBTransaction) => any;
  options?: IDBTransactionOptions;
};

/*
const transactionOptions: IDBQueryTransactionOptions = {
  mode: 'readwrite',
  ondone: (done) => console.log('Transaction completed:', done),
  ontransaction: (transaction) => console.log('Transaction event:', transaction),
  options: { durability: 'relaxed' },
};
*/