<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@typedly/indexeddb - A TypeScript type definitions package for indexeddb."
  />
</a>

## @typedly/indexeddb

<!-- npm badge -->
[![npm version][package-npm-badge-svg]][package-npm-badge]
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub license][package-badge-license]][package-license]

<!-- GitHub badges -->
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub forks][package-badge-forks]][package-forks]
[![GitHub stars][package-badge-stars]][package-stars]
[![GitHub license][package-badge-license]][package-license]

<!-- Sponsors -->
[![GitHub Sponsors][github-badge-sponsor]][github-sponsor-link]
[![Patreon Sponsors][patreon-badge]][patreon-link]

A **TypeScript** type definitions package for [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

## Table of contents

- [Related packages](#related-packages)
- [Installation](#installation)
- [Api](#api)
  - Interface
    - [`IDBConfig`](#idbconfig)
    - [`IDBOpenDBRequestEvents`](#idbopendbrequestevents)
    - [`IDBOpenStoreResult`](#idbopenstoreresult)
    - [`IDBOpenStoresResult`](#idbopenstoresresult)
    - [`IDBOpenTransactionResult`](#idbopentransactionresult)
    - [`IDBQueryTransactionOptions`](#idbquerytransactionoptions)
    - [`IDBRequestEvents`](#idbrequestevents)
    - [`IDBStoreParameters`](#idbstoreparameters)
    - [`IDBStoreQuery`](#idbstorequery)
    - [`IDBTransactionEvents`](#idbtransactionevents)
  - Query
    - [`IDBQueryAdd`](#idbqueryadd)
    - [`IDBQueryClear`](#idbqueryclear)
    - [`IDBQueryCount`](#idbquerycount)
    - [`IDBQueryDelete`](#idbquerydelete)
    - [`IDBQueryGet`](#idbqueryget)
    - [`IDBQueryGetAll`](#idbquerygetall)
    - [`IDBQueryGetAllKeys`](#idbquerygetallkeys)
    - [`IDBQueryGetKey`](#idbquerygetkey)
    - [`IDBQueryIndex`](#idbqueryindex)
    - [`IDBQueryMethod`](#idbquerymethod)
    - [`IDBQueryOpenCursor`](#idbqueryopencursor)
    - [`IDBQueryOpenKeyCursor`](#idbqueryopenkeycursor)
    - [`IDBQueryPut`](#idbqueryput)
    - [`IDBRangeBound`](#idbrangebound)
  - Type
    - [`IDBQueryMethodToStore`](#idbquerymethodtostore)
    - [`IDBQueryStoreToMethod`](#idbquerystoretomethod)
    - [`IDBRequestHandler`](#idbconfig)
    - [`IDBSchema`](#idbconfig)
    - [`IDBStoresFromSchema`](#idbconfig)
    - [`IDBStoresParameters`](#idbconfig)
  - Settings
    - [`IDBConnectionSettings`](#idbconnectionsettings)
    - [`IDBSettings`](#idbsettings)
    - [`IDBSettingsWithConnection`](#idbsettingswithconnection)
  - Utility
    - [`IDBKeyPath`](#idbkeypath)
    - [`InsertValue`](#insertvalue)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)
- [Packages](#packages)

## Related packages

- **[@typescript-package/indexeddb](https://github.com/typescript-package/indexeddb)**: A **TypeScript** wrapper for [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) client-side storage.

## Installation

```bash
npm install @typedly/indexeddb --save-peer
```

## Api

```typescript
import type {
  // Interface.
  IDBConfig,
  IDBOpenDBRequestEvents,
  IDBOpenStoreResult,
  IDBOpenStoresResult,
  IDBOpenTransactionResult,
  IDBQueryTransactionOptions,
  IDBRequestEvents,
  IDBStoreParameters,
  IDBStoreQuery,
  IDBTransactionEvents,
  // Query
  IDBQueryAdd,
  IDBQueryClear,
  IDBQueryCount,
  IDBQueryDelete,
  IDBQueryGet,
  IDBQueryGetAll,
  IDBQueryGetAllKeys,
  IDBQueryGetKey,
  IDBQueryIndex,
  IDBQueryMethod,
  IDBQueryOpenCursor,
  IDBQueryPut,
  IDBRangeBound,
  // Type.
  IDBQueryMethodToStore,
  IDBQueryStoreToMethod,
  IDBRequestHandler,
  IDBSchema,
  IDBStoresFromSchema,
  IDBStoresParameters,
  // Settings.
  IDBConnectionSettings,
  IDBSettings,
  IDBSettingsWithConnection,
  // Utility Types.
  IDBKeyPath,
  InsertValue
} from '@typedly/indexeddb';
```

### Interface

### `IDBConfig`

```typescript
import { IDBConfig } from '@typedly/indexeddb';

const config: IDBConfig<'MyDatabase', 'users' | 'orders', 1> = {
  name: 'MyDatabase',
  version: 1,
  stores: {
    users: {
      keyPath: 'id',
      autoIncrement: true,
      index: [{
        keyPath: 'id',
        name: 'idIndex',
        options: { unique: true }
      }]
    },
    orders: {
      keyPath: 'orderId',
      autoIncrement: true,
    },
  },
}

const indexeddb = indexedDB.open(
  'test-db', // name
  1 // version
);

indexeddb.onupgradeneeded = (event) => {
  const db = (event.target as IDBOpenDBRequest).result;

  if (!config.stores) return;

  for (const [storeName, params] of Object.entries(config.stores)) {
    if (db.objectStoreNames.contains(storeName)) continue;

    const store = db.createObjectStore(storeName, {
      keyPath: params.keyPath, // config.stores[storeName].keyPath
      autoIncrement: params.autoIncrement, // config.stores[storeName].autoIncrement
    });

    params.index?.forEach((idx) => {
      store.createIndex(idx.name, idx.keyPath, idx.options); // config.stores[storeName].index
    });
  }
};
```

### `IDBOpenDBRequestEvents`

```typescript
import { IDBOpenDBRequestEvents } from '@typedly/indexeddb';

const openDBRequest = indexedDB.open('MyDatabase', 1);
const events: IDBOpenDBRequestEvents = {
  onerror: (event) => {
    console.error('Error opening database:', event);
  },
  onsuccess: (event) => {
    console.log('Database opened successfully:', event);
  },
  onupgradeneeded: (event) => {
    console.log('Database upgrade needed:', event);
    const db = openDBRequest.result;
    if (!db.objectStoreNames.contains('users')) {
      db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
    }
  },
  onblocked: (event) => {
    console.warn('Database open request is blocked:', event);
  },
};
Object.assign(openDBRequest, events);
```

### `IDBOpenStoreResult`

```typescript
import { IDBOpenStoreResult } from '@typedly/indexeddb';

const openStoreResult: IDBOpenStoreResult = {
  done: new Promise((resolve) => resolve()),
  store: {} as IDBObjectStore,
  transaction: {} as IDBTransaction,
};
```

### `IDBOpenStoresResult`

```typescript
import { IDBOpenStoresResult } from '@typedly/indexeddb';

const openStoresResult: IDBOpenStoresResult<'users' | 'orders'> = {
  done: new Promise((resolve) => resolve()),
  stores: {
    users: {} as IDBObjectStore,
    orders: {} as IDBObjectStore,
  },
  transaction: {} as IDBTransaction,
};
```

### `IDBOpenTransactionResult`

```typescript
import { IDBOpenTransactionResult } from '@typedly/indexeddb';

const openTransactionResult: IDBOpenTransactionResult = {
  done: new Promise((resolve) => resolve()),
  transaction: {} as IDBTransaction,
};
```

### `IDBQueryTransactionOptions`

```typescript
import { IDBQueryTransactionOptions } from '@typedly/indexeddb';

const transactionOptions: IDBQueryTransactionOptions = {
  mode: 'readwrite',
  ondone: (done) => console.log('Transaction completed:', done),
  ontransaction: (transaction) => console.log('Transaction event:', transaction),
  options: { durability: 'relaxed' },
};
```

### `IDBRequestEvents`

```typescript
import { IDBRequestEvents } from '@typedly/indexeddb';

const requestEvents: IDBRequestEvents<string> = {
  onsuccess: (result) => console.log('Request succeeded with result:', result),
  onerror: (error) => console.error('Request failed with error:', error),
};
```

### `IDBStoreParameters`

```typescript
import { IDBStoreParameters } from '@typedly/indexeddb';

const storeParameters: IDBStoreParameters = {
  keyPath: 'id',
  autoIncrement: true,
  index: [
    {
      name: 'nameIndex',
      keyPath: 'name',
      options: { unique: false },
    },
    {
      name: 'emailIndex',
      keyPath: 'email',
      options: { unique: true },
    },
  ],
};
```

### `IDBStoreQuery`

```typescript
import { IDBStoreQuery } from '@typedly/indexeddb';

const storeQuery: IDBStoreQuery<MySchema, 'users' | 'orders'> = {
  store: (store) => {
    // Perform operations on the store
  },
  method: (method) => {
    // Perform operations using the method
  },
};
```

### `IDBTransactionEvents`

```typescript
import { IDBTransactionEvents } from '@typedly/indexeddb';
```

### `IDBQueryAdd`

```typescript
import { IDBQueryAdd } from '@typedly/indexeddb';

const addQuery: IDBQueryAdd<{ periodic: { id: number, name: string } }, 'periodic'> = {
  value: { id: 1, name: 'Hydrogen' },
  key: 1,
  onsuccess: (ev) => console.log('Add operation successful.', ev),
  onerror: (ev) => console.error('Add operation failed.', ev),
};
```

### `IDBQueryClear`

```typescript
import { IDBQueryClear } from '@typedly/indexeddb';

const clearQuery: IDBQueryClear = {
  onsuccess: (ev) => console.log('Clear operation successful.', ev),
  onerror: (ev) => console.error('Clear operation failed.', ev),
};
```

### `IDBQueryCount`

```typescript
import { IDBQueryCount } from '@typedly/indexeddb';

const countQuery: IDBQueryCount = {
  query: IDBKeyRange.bound(1, 10),
  onsuccess: (ev) => console.log('Count operation successful.', ev),
  onerror: (ev) => console.error('Count operation failed.', ev),
};
```

### `IDBQueryDelete`

```typescript
import { IDBQueryDelete } from '@typedly/indexeddb';

const deleteQuery: IDBQueryDelete = {
  query: IDBKeyRange.bound(1, 10),
  onsuccess: (ev) => console.log('Delete operation successful.', ev),
  onerror: (ev) => console.error('Delete operation failed.', ev),
};
```

### `IDBQueryGet`

```typescript
import { IDBQueryGet } from '@typedly/indexeddb';

const getQuery: IDBQueryGet<'periodic', { periodic: { id: number, name: string } }, 'periodic'> = {
  query: 1,
  onsuccess: (ev) => console.log('Get operation successful.', ev),
  onerror: (ev) => console.error('Get operation failed.', ev),
};
```

### `IDBQueryGetAll`

```typescript
import { IDBQueryGetAll } from '@typedly/indexeddb';

const getAllQuery: IDBQueryGetAll<'periodic', { periodic: { id: number, name: string } }, 'periodic'> = {
  query: IDBKeyRange.bound(1, 10),
  count: 5,
  onsuccess: (ev) => console.log('Get All operation successful.', ev),
  onerror: (ev) => console.error('Get All operation failed.', ev),
};
```

### `IDBQueryGetAllKeys`

```typescript
import { IDBQueryGetAllKeys } from '@typedly/indexeddb';

const getAllKeysQuery: IDBQueryGetAllKeys = {
  query: IDBKeyRange.bound(1, 10),
  count: 5,
  onsuccess: (ev) => console.log('Get All Keys operation successful.', ev),
  onerror: (ev) => console.error('Get All Keys operation failed.', ev),
};
```

### `IDBQueryGetKey`

```typescript
import { IDBQueryGetKey } from '@typedly/indexeddb';

const getKeyQuery: IDBQueryGetKey = {
  query: IDBKeyRange.bound(1, 10),
  onsuccess: (ev) => console.log('Get Key operation successful.', ev),
  onerror: (ev) => console.error('Get Key operation failed.', ev),
};
```

### `IDBQueryIndex`

```typescript
import { IDBQueryIndex } from '@typedly/indexeddb';

const indexQuery: IDBQueryIndex = {
  name: 'indexName',
  onsuccess: (ev) => console.log('Index query operation successful.', ev),
  onerror: (ev) => console.error('Index query operation failed.', ev),
};
```

### `IDBQueryMethod`

```typescript
import { IDBQueryMethod } from '@typedly/indexeddb';

const queryMethod: IDBQueryMethod<{ periodic: { id: number, name: string } }, 'periodic', 'periodic'> = {
  add: {
    storeName: 'periodic',
    value: { id: 1, name: 'Hydrogen' },
    key: 1,
    onsuccess: (ev) => console.log('Add operation successful.', ev),
    onerror: (ev) => console.error('Add operation failed.', ev),
  },
  clear: {
    storeName: 'periodic',
    onsuccess: (ev) => console.log('Clear operation successful.', ev),
    onerror: (ev) => console.error('Clear operation failed.', ev),
  },
  count: {
    storeName: 'periodic',
    query: IDBKeyRange.bound(1, 10),
    onsuccess: (ev) => console.log('Count operation successful.', ev),
    onerror: (ev) => console.error('Count operation failed.', ev),
  },
  delete: {
    storeName: 'periodic',
    query: 1,
    onsuccess: (ev) => console.log('Delete operation successful.', ev),
    onerror: (ev) => console.error('Delete operation failed.', ev),
  },
  get: {
    storeName: 'periodic',
    query: 1,
    onsuccess: (ev) => console.log('Get operation successful.', ev),
    onerror: (ev) => console.error('Get operation failed.', ev),
  },
  getAll: {
    storeName: 'periodic',
    query: IDBKeyRange.bound(1, 10),
    count: 5,
    onsuccess: (ev) => console.log('Get All operation successful.', ev),
    onerror: (ev) => console.error('Get All operation failed.', ev),
  },
  index: {
    storeName: 'periodic',
    name: 'indexName',
    onsuccess: (ev) => console.log('Index operation successful.', ev),
    onerror: (ev) => console.error('Index operation failed.', ev),
  },
  openCursor: {
    storeName: 'periodic',
    query: IDBKeyRange.bound(1, 10),
    direction: 'next',
    onsuccess: (ev) => console.log('Open Cursor operation successful.', ev),
    onerror: (ev) => console.error('Open Cursor operation failed.', ev),
  },
  put: {
    storeName: 'periodic',
    value: { id: 1, name: 'Hydrogen' },
    key: 1,
    onsuccess: (ev) => console.log('Put operation successful.', ev),
    onerror: (ev) => console.error('Put operation failed.', ev),
  },
};
```

### `IDBQueryOpenCursor`

```typescript
import { IDBQueryOpenCursor } from '@typedly/indexeddb';

const openCursorQuery: IDBQueryOpenCursor = {
  query: IDBKeyRange.bound(1, 10),
  direction: 'next',
  onsuccess: (ev) => console.log('Open Cursor operation successful.', ev),
  onerror: (ev) => console.error('Open Cursor operation failed.', ev),
};
```

### `IDBQueryOpenKeyCursor`

```typescript
import { IDBQueryOpenKeyCursor } from '@typedly/indexeddb';

const openKeyCursorQuery: IDBQueryOpenKeyCursor = {
  query: IDBKeyRange.bound(1, 10),
  direction: 'next',
  onsuccess: (ev) => console.log('Open Key Cursor operation successful.', ev),
  onerror: (ev) => console.error('Open Key Cursor operation failed.', ev),
};
```

### `IDBQueryPut`

```typescript
import { IDBQueryPut } from '@typedly/indexeddb';

const putQuery: IDBQueryPut<{ periodic: { id: number, name: string } }, 'periodic'> = {
  value: { id: 1, name: 'Hydrogen' },
  key: 1,
  onsuccess: (ev) => console.log('Put operation successful.', ev),
  onerror: (ev) => console.error('Put operation failed.', ev),
};
```

### `IDBRangeBound`

```typescript
import { IDBRangeBound } from '@typedly/indexeddb';
```

### Type

### `IDBQueryMethodToStore`

```typescript
import { IDBQueryMethodToStore } from '@typedly/indexeddb';

const queryMethodToStore: IDBQueryMethodToStore<{periodic: {id: number, name: string}}> = {
  get: {
    periodic: {
      query: 1,
      onsuccess: (ev) => console.log('Get operation successful.', ev),
      onerror: (ev) => console.error('Get operation failed.', ev),
    }
  },
  put: {
    periodic: {
      value: { id: 1, name: 'Hydrogen' },
      onsuccess: (ev) => console.log('Put operation successful.', ev),
      onerror: (ev) => console.error('Put operation failed.', ev),
    }
  }
};
```

### `IDBQueryStoreToMethod`

```typescript
import { IDBQueryStoreToMethod } from '@typedly/indexeddb';

const queryStoreToMethod: IDBQueryStoreToMethod<{ users: { id: number } }, 'users'> = {
  users: {
    add: { value: { id: 1 } },
    get: { query: 1 },
    clear: {},
    index: { name: 'id' },
    openCursor: { query: IDBKeyRange.lowerBound(1), direction: 'next' }
  }
};
```

### `IDBRequestHandler`

```typescript
import { IDBRequestHandler } from '@typedly/indexeddb';
```

### `IDBSchema`

```typescript
import { IDBSchema } from '@typedly/indexeddb';
```

### `IDBStoresFromSchema`

```typescript
import { IDBStoresFromSchema } from '@typedly/indexeddb';

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
```

### `IDBStoresParameters`

```typescript
import { IDBStoresParameters } from '@typedly/indexeddb';
```

### Settings

### `IDBConnectionSettings`

```typescript
import { IDBConnectionSettings } from '@typedly/indexeddb';

const connectionSettings: IDBConnectionSettings<'MyDatabase', 1> = {
  name: 'MyDatabase',
  version: 1,
  events: {
    onerror: (event) => {
      console.error('Error opening database:', event);
    },
    onsuccess: (event) => {
      console.log('Database opened successfully:', event);
    },
    onupgradeneeded: (event) => {
      console.log('Database upgrade needed:', event);
    },
    onblocked: (event) => {
      console.warn('Database open request blocked:', event);
    }
  }
};
```

### `IDBSettings`

```typescript
import { IDBSettings } from '@typedly/indexeddb';

const settings: IDBSettings<'MyDatabase', 'MyStore', 1> = {
  name: 'MyDatabase',
  version: 1,
  parameters: {
    MyStore: {
      keyPath: 'id',
      autoIncrement: true,
      index: [
        { name: 'nameIndex', keyPath: 'name', options: { unique: false } }
      ]
    }
  },
  connectionEvents: {
    onerror: (event) => {
      console.error('Error opening database:', event);
    },
    onsuccess: (event) => {
      console.log('Database opened successfully:', event);
    },
    onupgradeneeded: (event) => {
      console.log('Database upgrade needed:', event);
    },
    onblocked: (event) => {
      console.warn('Database open request blocked:', event);
    }
  }
};
```

### `IDBSettingsWithConnection`

```typescript
import { IDBSettingsWithConnection } from '@typedly/indexeddb';

const settingsWithConnection: IDBSettingsWithConnection<'MyDatabase', 'MyStore', 1> = {
  parameters: {
    MyStore: {
      keyPath: 'id',
      autoIncrement: true,
      index: [
        { name: 'nameIndex', keyPath: 'name', options: { unique: false } }
      ]
    }
  },
  connection: {
    name: 'MyDatabase',
    version: 1,
    events: {
      onerror: (event) => {
        console.error('Error opening database:', event);
      },
      onsuccess: (event) => {
        console.log('Database opened successfully:', event);
      },
      onupgradeneeded: (event) => {
        console.log('Database upgrade needed:', event);
      },
      onblocked: (event) => {
        console.warn('Database open request blocked:', event);
      }
    }
  }
};
```

### Utility

### `IDBKeyPath`

```typescript
import { IDBKeyPath } from '@typedly/indexeddb';
```

### `InsertValue`

```typescript
import { InsertValue } from '@typedly/indexeddb';
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [4Fund](https://4fund.com/bruubs)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [Ko-fi](https://ko-fi.com/sterblack)
- [OpenCollective](https://opencollective.com/sterblack)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)
- [PayPal](https://paypal.me/sterblack)
- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- ~~[Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)~~

or via Trust Wallet

- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][package-license])

## Packages

- **[@typedly/array](https://github.com/typedly/array)**: A **TypeScript** type definitions package to handle array-related operations.
- **[@typedly/callback](https://github.com/typedly/callback)**: A **TypeScript** type definitions package for asynchronous and synchronous callback functions of various types.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/object](https://github.com/typedly/object)**: A **TypeScript** type definitions package to handle object-related operations.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/property](https://github.com/typedly/property)**: A **TypeScript** type definitions package to handle object property-related operations.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dangularpackage%26type%3Dpatrons&style=flat
[patreon-link]: https://www.patreon.com/join/angularpackage/checkout?fan_landing=true&rid=0

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [package-badge-issues]: https://img.shields.io/github/issues/typedly/indexeddb
  [package-badge-forks]: https://img.shields.io/github/forks/typedly/indexeddb
  [package-badge-stars]: https://img.shields.io/github/stars/typedly/indexeddb
  [package-badge-license]: https://img.shields.io/github/license/typedly/indexeddb
  <!-- GitHub: badges links -->
  [package-issues]: https://github.com/typedly/indexeddb/issues
  [package-forks]: https://github.com/typedly/indexeddb/network
  [package-license]: https://github.com/typedly/indexeddb/blob/master/LICENSE
  [package-stars]: https://github.com/typedly/indexeddb/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [package-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Findexeddb.svg
  [package-npm-badge]: https://badge.fury.io/js/@typedly%2Findexeddb

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
