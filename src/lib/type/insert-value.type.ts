/**
 * @description Defines the InsertValue type, which represents the value to be inserted into an IndexedDB store.
 * If the value has an 'id' property, it can be either the full object or the object without the 'id' property.
 * @export
 * @template T 
 */
export type InsertValue<T> = T extends { id: any } ? Omit<T, 'id'> | T : T;