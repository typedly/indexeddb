/**
 * @description Defines a type for handling IDBRequest events, which is a function that takes an event and is bound to an IDBRequest of a specific type R.
 * @export
 * @template R 
 */
export type IDBRequestHandler<R> = (this: IDBRequest<R>, ev: Event) => any;