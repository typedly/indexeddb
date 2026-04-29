// Interface.
import type { IDBStoreParameters } from "../interface";
// Type.
import type { IDBSchema } from '../type'
/**
 * @description Defines the type for IndexedDB stores parameters based on a schema descriptor.
 * @export
 * @template {IDBSchema} Schema 
 */
export type IDBStoresFromSchema<Schema extends IDBSchema> = {
  [StoreName in keyof Schema]: IDBStoreParameters;
};

/*
// Example usage: 

type User = {
  id: number;
  name: string;
  email: string;
  tags: string[];
  history: number[];
  profile: {
    bio: string;
    age?: number;
  };
  friends: { id: number; name: string }[];
};

type Post = {
  id: number;
  title: string;
};

type Schema = {
  users: User;
  posts: Post;
};

export class TestClass1<Schema extends IDBSchema> {
  constructor(private stores: IDBStoresFromSchema<Schema>) {}

  public add<Name extends keyof Schema>(store: Name, value: Schema[Name]) {
    // value is fully type-checked against your TypeScript types!
  }
}

const test = new TestClass1<Schema>({
  users: { keyPath: 'id', autoIncrement: true },
  posts: { keyPath: 'id', autoIncrement: true },
});
*/