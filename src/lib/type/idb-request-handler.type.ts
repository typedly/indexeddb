/**
 * @description Defines a type for handling IDBRequest events, which is a function that takes an event and is bound to an IDBRequest of a specific type R.
 * @export
 * @template Result 
 */
export type IDBRequestHandler<Result> = (this: IDBRequest<Result>, ev: Event) => any;