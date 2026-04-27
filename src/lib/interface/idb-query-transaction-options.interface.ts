// Interface.
import { IDBTransactionEvents } from "./idb-transaction-events.interface";
/**
 * @description
 * @export
 * @interface IDBQueryTransactionOptions
 * @extends {IDBTransactionEvents}
 */
export interface IDBQueryTransactionOptions extends IDBTransactionEvents {
  mode?: IDBTransactionMode;
  ondone?: (done: Promise<void>) => any;
  ontransaction?: (transaction: IDBTransaction) => any;
  options?: IDBTransactionOptions;
};
