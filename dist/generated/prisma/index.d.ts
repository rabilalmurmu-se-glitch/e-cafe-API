
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Types
 * 
 */
export type Types = $Result.DefaultSelection<Prisma.$TypesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Items
 * 
 */
export type Items = $Result.DefaultSelection<Prisma.$ItemsPayload>
/**
 * Model OrderList
 * 
 */
export type OrderList = $Result.DefaultSelection<Prisma.$OrderListPayload>
/**
 * Model ListItems
 * 
 */
export type ListItems = $Result.DefaultSelection<Prisma.$ListItemsPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Genders: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Genders = (typeof Genders)[keyof typeof Genders]


export const UserTypes: {
  CUSTOMER: 'CUSTOMER',
  OWNER: 'OWNER',
  MAMBER: 'MAMBER'
};

export type UserTypes = (typeof UserTypes)[keyof typeof UserTypes]


export const OrderStatus: {
  CREATED: 'CREATED',
  ORDERED: 'ORDERED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Genders = $Enums.Genders

export const Genders: typeof $Enums.Genders

export type UserTypes = $Enums.UserTypes

export const UserTypes: typeof $Enums.UserTypes

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shops
 * const shops = await prisma.shop.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Shops
   * const shops = await prisma.shop.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.types`: Exposes CRUD operations for the **Types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.types.findMany()
    * ```
    */
  get types(): Prisma.TypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderList`: Exposes CRUD operations for the **OrderList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderLists
    * const orderLists = await prisma.orderList.findMany()
    * ```
    */
  get orderList(): Prisma.OrderListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listItems`: Exposes CRUD operations for the **ListItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListItems
    * const listItems = await prisma.listItems.findMany()
    * ```
    */
  get listItems(): Prisma.ListItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Shop: 'Shop',
    Users: 'Users',
    Types: 'Types',
    Categories: 'Categories',
    Items: 'Items',
    OrderList: 'OrderList',
    ListItems: 'ListItems',
    Payment: 'Payment',
    Orders: 'Orders'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shop" | "users" | "types" | "categories" | "items" | "orderList" | "listItems" | "payment" | "orders"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Types: {
        payload: Prisma.$TypesPayload<ExtArgs>
        fields: Prisma.TypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          findFirst: {
            args: Prisma.TypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          findMany: {
            args: Prisma.TypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>[]
          }
          create: {
            args: Prisma.TypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          createMany: {
            args: Prisma.TypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>[]
          }
          delete: {
            args: Prisma.TypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          update: {
            args: Prisma.TypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          deleteMany: {
            args: Prisma.TypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>[]
          }
          upsert: {
            args: Prisma.TypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          aggregate: {
            args: Prisma.TypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypes>
          }
          groupBy: {
            args: Prisma.TypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypesCountArgs<ExtArgs>
            result: $Utils.Optional<TypesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Items: {
        payload: Prisma.$ItemsPayload<ExtArgs>
        fields: Prisma.ItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findFirst: {
            args: Prisma.ItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findMany: {
            args: Prisma.ItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          create: {
            args: Prisma.ItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          createMany: {
            args: Prisma.ItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          delete: {
            args: Prisma.ItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          update: {
            args: Prisma.ItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          deleteMany: {
            args: Prisma.ItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          upsert: {
            args: Prisma.ItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.ItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      OrderList: {
        payload: Prisma.$OrderListPayload<ExtArgs>
        fields: Prisma.OrderListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>
          }
          findFirst: {
            args: Prisma.OrderListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>
          }
          findMany: {
            args: Prisma.OrderListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>[]
          }
          create: {
            args: Prisma.OrderListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>
          }
          createMany: {
            args: Prisma.OrderListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>[]
          }
          delete: {
            args: Prisma.OrderListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>
          }
          update: {
            args: Prisma.OrderListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>
          }
          deleteMany: {
            args: Prisma.OrderListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>[]
          }
          upsert: {
            args: Prisma.OrderListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderListPayload>
          }
          aggregate: {
            args: Prisma.OrderListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderList>
          }
          groupBy: {
            args: Prisma.OrderListGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderListGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderListCountArgs<ExtArgs>
            result: $Utils.Optional<OrderListCountAggregateOutputType> | number
          }
        }
      }
      ListItems: {
        payload: Prisma.$ListItemsPayload<ExtArgs>
        fields: Prisma.ListItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>
          }
          findFirst: {
            args: Prisma.ListItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>
          }
          findMany: {
            args: Prisma.ListItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>[]
          }
          create: {
            args: Prisma.ListItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>
          }
          createMany: {
            args: Prisma.ListItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>[]
          }
          delete: {
            args: Prisma.ListItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>
          }
          update: {
            args: Prisma.ListItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>
          }
          deleteMany: {
            args: Prisma.ListItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>[]
          }
          upsert: {
            args: Prisma.ListItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemsPayload>
          }
          aggregate: {
            args: Prisma.ListItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListItems>
          }
          groupBy: {
            args: Prisma.ListItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ListItemsCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    shop?: ShopOmit
    users?: UsersOmit
    types?: TypesOmit
    categories?: CategoriesOmit
    items?: ItemsOmit
    orderList?: OrderListOmit
    listItems?: ListItemsOmit
    payment?: PaymentOmit
    orders?: OrdersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    Categories: number
    Items: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | ShopCountOutputTypeCountCategoriesArgs
    Items?: boolean | ShopCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    OrderList: number
    Orders: number
    Payment: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderList?: boolean | UsersCountOutputTypeCountOrderListArgs
    Orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    Payment?: boolean | UsersCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrderListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderListWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type TypesCountOutputType
   */

  export type TypesCountOutputType = {
    Categories: number
  }

  export type TypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | TypesCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * TypesCountOutputType without action
   */
  export type TypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypesCountOutputType
     */
    select?: TypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypesCountOutputType without action
   */
  export type TypesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    Items: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Items?: boolean | CategoriesCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
  }


  /**
   * Count Type ItemsCountOutputType
   */

  export type ItemsCountOutputType = {
    ListItems: number
  }

  export type ItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ListItems?: boolean | ItemsCountOutputTypeCountListItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsCountOutputType
     */
    select?: ItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeCountListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemsWhereInput
  }


  /**
   * Count Type OrderListCountOutputType
   */

  export type OrderListCountOutputType = {
    ListItems: number
    Orders: number
  }

  export type OrderListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ListItems?: boolean | OrderListCountOutputTypeCountListItemsArgs
    Orders?: boolean | OrderListCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * OrderListCountOutputType without action
   */
  export type OrderListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderListCountOutputType
     */
    select?: OrderListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderListCountOutputType without action
   */
  export type OrderListCountOutputTypeCountListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemsWhereInput
  }

  /**
   * OrderListCountOutputType without action
   */
  export type OrderListCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    Payment: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | OrdersCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    email: string | null
    phone: string | null
    owner: string | null
    banner: string | null
    logo: string | null
    about_shop: string | null
    shop_mission: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    email: string | null
    phone: string | null
    owner: string | null
    banner: string | null
    logo: string | null
    about_shop: string | null
    shop_mission: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    address: number
    email: number
    phone: number
    owner: number
    banner: number
    logo: number
    about_shop: number
    shop_mission: number
    social: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    email?: true
    phone?: true
    owner?: true
    banner?: true
    logo?: true
    about_shop?: true
    shop_mission?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    email?: true
    phone?: true
    owner?: true
    banner?: true
    logo?: true
    about_shop?: true
    shop_mission?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    email?: true
    phone?: true
    owner?: true
    banner?: true
    logo?: true
    about_shop?: true
    shop_mission?: true
    social?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: number
    name: string
    address: string
    email: string
    phone: string
    owner: string
    banner: string
    logo: string
    about_shop: string
    shop_mission: string
    social: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    owner?: boolean
    banner?: boolean
    logo?: boolean
    about_shop?: boolean
    shop_mission?: boolean
    social?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Categories?: boolean | Shop$CategoriesArgs<ExtArgs>
    Items?: boolean | Shop$ItemsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    owner?: boolean
    banner?: boolean
    logo?: boolean
    about_shop?: boolean
    shop_mission?: boolean
    social?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    owner?: boolean
    banner?: boolean
    logo?: boolean
    about_shop?: boolean
    shop_mission?: boolean
    social?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    owner?: boolean
    banner?: boolean
    logo?: boolean
    about_shop?: boolean
    shop_mission?: boolean
    social?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "email" | "phone" | "owner" | "banner" | "logo" | "about_shop" | "shop_mission" | "social" | "createdAt" | "updatedAt", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | Shop$CategoriesArgs<ExtArgs>
    Items?: boolean | Shop$ItemsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      Categories: Prisma.$CategoriesPayload<ExtArgs>[]
      Items: Prisma.$ItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      email: string
      phone: string
      owner: string
      banner: string
      logo: string
      about_shop: string
      shop_mission: string
      social: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Categories<T extends Shop$CategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$CategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Items<T extends Shop$ItemsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'Int'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly address: FieldRef<"Shop", 'String'>
    readonly email: FieldRef<"Shop", 'String'>
    readonly phone: FieldRef<"Shop", 'String'>
    readonly owner: FieldRef<"Shop", 'String'>
    readonly banner: FieldRef<"Shop", 'String'>
    readonly logo: FieldRef<"Shop", 'String'>
    readonly about_shop: FieldRef<"Shop", 'String'>
    readonly shop_mission: FieldRef<"Shop", 'String'>
    readonly social: FieldRef<"Shop", 'Json'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.Categories
   */
  export type Shop$CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    cursor?: CategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Shop.Items
   */
  export type Shop$ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    cursor?: ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    address: string | null
    gender: $Enums.Genders | null
    type: $Enums.UserTypes | null
    about: string | null
    createdAt: Date | null
    photo: string | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    address: string | null
    gender: $Enums.Genders | null
    type: $Enums.UserTypes | null
    about: string | null
    createdAt: Date | null
    photo: string | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    address: number
    gender: number
    type: number
    about: number
    createdAt: number
    photo: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    address?: true
    gender?: true
    type?: true
    about?: true
    createdAt?: true
    photo?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    address?: true
    gender?: true
    type?: true
    about?: true
    createdAt?: true
    photo?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    address?: true
    gender?: true
    type?: true
    about?: true
    createdAt?: true
    photo?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    password: string
    address: string | null
    gender: $Enums.Genders
    type: $Enums.UserTypes
    about: string | null
    createdAt: Date
    photo: string | null
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    gender?: boolean
    type?: boolean
    about?: boolean
    createdAt?: boolean
    photo?: boolean
    updatedAt?: boolean
    OrderList?: boolean | Users$OrderListArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    Payment?: boolean | Users$PaymentArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    gender?: boolean
    type?: boolean
    about?: boolean
    createdAt?: boolean
    photo?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    gender?: boolean
    type?: boolean
    about?: boolean
    createdAt?: boolean
    photo?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    gender?: boolean
    type?: boolean
    about?: boolean
    createdAt?: boolean
    photo?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "address" | "gender" | "type" | "about" | "createdAt" | "photo" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderList?: boolean | Users$OrderListArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    Payment?: boolean | Users$PaymentArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      OrderList: Prisma.$OrderListPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      password: string
      address: string | null
      gender: $Enums.Genders
      type: $Enums.UserTypes
      about: string | null
      createdAt: Date
      photo: string | null
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderList<T extends Users$OrderListArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrderListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends Users$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends Users$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Users$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly gender: FieldRef<"Users", 'Genders'>
    readonly type: FieldRef<"Users", 'UserTypes'>
    readonly about: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly photo: FieldRef<"Users", 'String'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.OrderList
   */
  export type Users$OrderListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    where?: OrderListWhereInput
    orderBy?: OrderListOrderByWithRelationInput | OrderListOrderByWithRelationInput[]
    cursor?: OrderListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderListScalarFieldEnum | OrderListScalarFieldEnum[]
  }

  /**
   * Users.Orders
   */
  export type Users$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.Payment
   */
  export type Users$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Types
   */

  export type AggregateTypes = {
    _count: TypesCountAggregateOutputType | null
    _avg: TypesAvgAggregateOutputType | null
    _sum: TypesSumAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  export type TypesAvgAggregateOutputType = {
    id: number | null
  }

  export type TypesSumAggregateOutputType = {
    id: number | null
  }

  export type TypesMinAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TypesMaxAggregateOutputType = {
    id: number | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TypesCountAggregateOutputType = {
    id: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TypesAvgAggregateInputType = {
    id?: true
  }

  export type TypesSumAggregateInputType = {
    id?: true
  }

  export type TypesMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TypesMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TypesCountAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to aggregate.
     */
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypesMaxAggregateInputType
  }

  export type GetTypesAggregateType<T extends TypesAggregateArgs> = {
        [P in keyof T & keyof AggregateTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypes[P]>
      : GetScalarType<T[P], AggregateTypes[P]>
  }




  export type TypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypesWhereInput
    orderBy?: TypesOrderByWithAggregationInput | TypesOrderByWithAggregationInput[]
    by: TypesScalarFieldEnum[] | TypesScalarFieldEnum
    having?: TypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypesCountAggregateInputType | true
    _avg?: TypesAvgAggregateInputType
    _sum?: TypesSumAggregateInputType
    _min?: TypesMinAggregateInputType
    _max?: TypesMaxAggregateInputType
  }

  export type TypesGroupByOutputType = {
    id: number
    type: string
    createdAt: Date
    updatedAt: Date
    _count: TypesCountAggregateOutputType | null
    _avg: TypesAvgAggregateOutputType | null
    _sum: TypesSumAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  type GetTypesGroupByPayload<T extends TypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypesGroupByOutputType[P]>
            : GetScalarType<T[P], TypesGroupByOutputType[P]>
        }
      >
    >


  export type TypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Categories?: boolean | Types$CategoriesArgs<ExtArgs>
    _count?: boolean | TypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["types"]>

  export type TypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["types"]>

  export type TypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["types"]>

  export type TypesSelectScalar = {
    id?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["types"]>
  export type TypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | Types$CategoriesArgs<ExtArgs>
    _count?: boolean | TypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Types"
    objects: {
      Categories: Prisma.$CategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["types"]>
    composites: {}
  }

  type TypesGetPayload<S extends boolean | null | undefined | TypesDefaultArgs> = $Result.GetResult<Prisma.$TypesPayload, S>

  type TypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypesCountAggregateInputType | true
    }

  export interface TypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Types'], meta: { name: 'Types' } }
    /**
     * Find zero or one Types that matches the filter.
     * @param {TypesFindUniqueArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypesFindUniqueArgs>(args: SelectSubset<T, TypesFindUniqueArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypesFindUniqueOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypesFindUniqueOrThrowArgs>(args: SelectSubset<T, TypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindFirstArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypesFindFirstArgs>(args?: SelectSubset<T, TypesFindFirstArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindFirstOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypesFindFirstOrThrowArgs>(args?: SelectSubset<T, TypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.types.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typesWithIdOnly = await prisma.types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypesFindManyArgs>(args?: SelectSubset<T, TypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Types.
     * @param {TypesCreateArgs} args - Arguments to create a Types.
     * @example
     * // Create one Types
     * const Types = await prisma.types.create({
     *   data: {
     *     // ... data to create a Types
     *   }
     * })
     * 
     */
    create<T extends TypesCreateArgs>(args: SelectSubset<T, TypesCreateArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypesCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const types = await prisma.types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypesCreateManyArgs>(args?: SelectSubset<T, TypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {TypesCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const types = await prisma.types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typesWithIdOnly = await prisma.types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypesCreateManyAndReturnArgs>(args?: SelectSubset<T, TypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Types.
     * @param {TypesDeleteArgs} args - Arguments to delete one Types.
     * @example
     * // Delete one Types
     * const Types = await prisma.types.delete({
     *   where: {
     *     // ... filter to delete one Types
     *   }
     * })
     * 
     */
    delete<T extends TypesDeleteArgs>(args: SelectSubset<T, TypesDeleteArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Types.
     * @param {TypesUpdateArgs} args - Arguments to update one Types.
     * @example
     * // Update one Types
     * const types = await prisma.types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypesUpdateArgs>(args: SelectSubset<T, TypesUpdateArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypesDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypesDeleteManyArgs>(args?: SelectSubset<T, TypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypesUpdateManyArgs>(args: SelectSubset<T, TypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {TypesUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `id`
     * const typesWithIdOnly = await prisma.types.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypesUpdateManyAndReturnArgs>(args: SelectSubset<T, TypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Types.
     * @param {TypesUpsertArgs} args - Arguments to update or create a Types.
     * @example
     * // Update or create a Types
     * const types = await prisma.types.upsert({
     *   create: {
     *     // ... data to create a Types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Types we want to update
     *   }
     * })
     */
    upsert<T extends TypesUpsertArgs>(args: SelectSubset<T, TypesUpsertArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.types.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypesCountArgs>(
      args?: Subset<T, TypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypesAggregateArgs>(args: Subset<T, TypesAggregateArgs>): Prisma.PrismaPromise<GetTypesAggregateType<T>>

    /**
     * Group by Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypesGroupByArgs['orderBy'] }
        : { orderBy?: TypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Types model
   */
  readonly fields: TypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Categories<T extends Types$CategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Types$CategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Types model
   */
  interface TypesFieldRefs {
    readonly id: FieldRef<"Types", 'Int'>
    readonly type: FieldRef<"Types", 'String'>
    readonly createdAt: FieldRef<"Types", 'DateTime'>
    readonly updatedAt: FieldRef<"Types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Types findUnique
   */
  export type TypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where: TypesWhereUniqueInput
  }

  /**
   * Types findUniqueOrThrow
   */
  export type TypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where: TypesWhereUniqueInput
  }

  /**
   * Types findFirst
   */
  export type TypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * Types findFirstOrThrow
   */
  export type TypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * Types findMany
   */
  export type TypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * Types create
   */
  export type TypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * The data needed to create a Types.
     */
    data: XOR<TypesCreateInput, TypesUncheckedCreateInput>
  }

  /**
   * Types createMany
   */
  export type TypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypesCreateManyInput | TypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Types createManyAndReturn
   */
  export type TypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * The data used to create many Types.
     */
    data: TypesCreateManyInput | TypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Types update
   */
  export type TypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * The data needed to update a Types.
     */
    data: XOR<TypesUpdateInput, TypesUncheckedUpdateInput>
    /**
     * Choose, which Types to update.
     */
    where: TypesWhereUniqueInput
  }

  /**
   * Types updateMany
   */
  export type TypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypesUpdateManyMutationInput, TypesUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypesWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Types updateManyAndReturn
   */
  export type TypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * The data used to update Types.
     */
    data: XOR<TypesUpdateManyMutationInput, TypesUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypesWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Types upsert
   */
  export type TypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * The filter to search for the Types to update in case it exists.
     */
    where: TypesWhereUniqueInput
    /**
     * In case the Types found by the `where` argument doesn't exist, create a new Types with this data.
     */
    create: XOR<TypesCreateInput, TypesUncheckedCreateInput>
    /**
     * In case the Types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypesUpdateInput, TypesUncheckedUpdateInput>
  }

  /**
   * Types delete
   */
  export type TypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter which Types to delete.
     */
    where: TypesWhereUniqueInput
  }

  /**
   * Types deleteMany
   */
  export type TypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypesWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Types.Categories
   */
  export type Types$CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    cursor?: CategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Types without action
   */
  export type TypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Types
     */
    omit?: TypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    type_id: number | null
    shop_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    type_id: number | null
    shop_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    type_id: number | null
    shop_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    photo: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type_id: number | null
    shop_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    photo: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    type_id: number
    shop_id: number
    createdAt: number
    updatedAt: number
    photo: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    type_id?: true
    shop_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    type_id?: true
    shop_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    type_id?: true
    shop_id?: true
    createdAt?: true
    updatedAt?: true
    photo?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    type_id?: true
    shop_id?: true
    createdAt?: true
    updatedAt?: true
    photo?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    type_id?: true
    shop_id?: true
    createdAt?: true
    updatedAt?: true
    photo?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    type_id: number
    shop_id: number
    createdAt: Date
    updatedAt: Date
    photo: string | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type_id?: boolean
    shop_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    type?: boolean | TypesDefaultArgs<ExtArgs>
    Items?: boolean | Categories$ItemsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type_id?: boolean
    shop_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    type?: boolean | TypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type_id?: boolean
    shop_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    type?: boolean | TypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    type_id?: boolean
    shop_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type_id" | "shop_id" | "createdAt" | "updatedAt" | "photo", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    type?: boolean | TypesDefaultArgs<ExtArgs>
    Items?: boolean | Categories$ItemsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    type?: boolean | TypesDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    type?: boolean | TypesDefaultArgs<ExtArgs>
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      type: Prisma.$TypesPayload<ExtArgs>
      Items: Prisma.$ItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type_id: number
      shop_id: number
      createdAt: Date
      updatedAt: Date
      photo: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends TypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypesDefaultArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Items<T extends Categories$ItemsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly type_id: FieldRef<"Categories", 'Int'>
    readonly shop_id: FieldRef<"Categories", 'Int'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
    readonly photo: FieldRef<"Categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.Items
   */
  export type Categories$ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    cursor?: ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    category_id: number | null
    shop_id: number | null
  }

  export type ItemsSumAggregateOutputType = {
    id: number | null
    price: number | null
    category_id: number | null
    shop_id: number | null
  }

  export type ItemsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    category_id: number | null
    shop_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    photo: string | null
  }

  export type ItemsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    category_id: number | null
    shop_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    photo: string | null
  }

  export type ItemsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    category_id: number
    shop_id: number
    createdAt: number
    updatedAt: number
    photo: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    id?: true
    price?: true
    category_id?: true
    shop_id?: true
  }

  export type ItemsSumAggregateInputType = {
    id?: true
    price?: true
    category_id?: true
    shop_id?: true
  }

  export type ItemsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category_id?: true
    shop_id?: true
    createdAt?: true
    updatedAt?: true
    photo?: true
  }

  export type ItemsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category_id?: true
    shop_id?: true
    createdAt?: true
    updatedAt?: true
    photo?: true
  }

  export type ItemsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category_id?: true
    shop_id?: true
    createdAt?: true
    updatedAt?: true
    photo?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to aggregate.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithAggregationInput | ItemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    id: number
    name: string
    description: string
    price: number
    category_id: number
    shop_id: number
    createdAt: Date
    updatedAt: Date
    photo: string | null
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category_id?: boolean
    shop_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    ListItems?: boolean | Items$ListItemsArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category_id?: boolean
    shop_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category_id?: boolean
    shop_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category_id?: boolean
    shop_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean
  }

  export type ItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "category_id" | "shop_id" | "createdAt" | "updatedAt" | "photo", ExtArgs["result"]["items"]>
  export type ItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    ListItems?: boolean | Items$ListItemsArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Items"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
      ListItems: Prisma.$ListItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      price: number
      category_id: number
      shop_id: number
      createdAt: Date
      updatedAt: Date
      photo: string | null
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type ItemsGetPayload<S extends boolean | null | undefined | ItemsDefaultArgs> = $Result.GetResult<Prisma.$ItemsPayload, S>

  type ItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface ItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Items'], meta: { name: 'Items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemsFindUniqueArgs>(args: SelectSubset<T, ItemsFindUniqueArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemsFindFirstArgs>(args?: SelectSubset<T, ItemsFindFirstArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemsWithIdOnly = await prisma.items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemsFindManyArgs>(args?: SelectSubset<T, ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends ItemsCreateArgs>(args: SelectSubset<T, ItemsCreateArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemsCreateManyArgs>(args?: SelectSubset<T, ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemsCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemsWithIdOnly = await prisma.items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends ItemsDeleteArgs>(args: SelectSubset<T, ItemsDeleteArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemsUpdateArgs>(args: SelectSubset<T, ItemsUpdateArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemsDeleteManyArgs>(args?: SelectSubset<T, ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemsUpdateManyArgs>(args: SelectSubset<T, ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemsUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemsWithIdOnly = await prisma.items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends ItemsUpsertArgs>(args: SelectSubset<T, ItemsUpsertArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Items model
   */
  readonly fields: ItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ListItems<T extends Items$ListItemsArgs<ExtArgs> = {}>(args?: Subset<T, Items$ListItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Items model
   */
  interface ItemsFieldRefs {
    readonly id: FieldRef<"Items", 'Int'>
    readonly name: FieldRef<"Items", 'String'>
    readonly description: FieldRef<"Items", 'String'>
    readonly price: FieldRef<"Items", 'Int'>
    readonly category_id: FieldRef<"Items", 'Int'>
    readonly shop_id: FieldRef<"Items", 'Int'>
    readonly createdAt: FieldRef<"Items", 'DateTime'>
    readonly updatedAt: FieldRef<"Items", 'DateTime'>
    readonly photo: FieldRef<"Items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Items findUnique
   */
  export type ItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findFirst
   */
  export type ItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findMany
   */
  export type ItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items create
   */
  export type ItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Items.
     */
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }

  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Items createManyAndReturn
   */
  export type ItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Items update
   */
  export type ItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Items.
     */
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Items updateManyAndReturn
   */
  export type ItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Items upsert
   */
  export type ItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Items to update in case it exists.
     */
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     */
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }

  /**
   * Items delete
   */
  export type ItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter which Items to delete.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Items.ListItems
   */
  export type Items$ListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    where?: ListItemsWhereInput
    orderBy?: ListItemsOrderByWithRelationInput | ListItemsOrderByWithRelationInput[]
    cursor?: ListItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListItemsScalarFieldEnum | ListItemsScalarFieldEnum[]
  }

  /**
   * Items without action
   */
  export type ItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
  }


  /**
   * Model OrderList
   */

  export type AggregateOrderList = {
    _count: OrderListCountAggregateOutputType | null
    _avg: OrderListAvgAggregateOutputType | null
    _sum: OrderListSumAggregateOutputType | null
    _min: OrderListMinAggregateOutputType | null
    _max: OrderListMaxAggregateOutputType | null
  }

  export type OrderListAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type OrderListSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type OrderListMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.OrderStatus | null
  }

  export type OrderListMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.OrderStatus | null
  }

  export type OrderListCountAggregateOutputType = {
    id: number
    user_id: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type OrderListAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type OrderListSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type OrderListMinAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type OrderListMaxAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type OrderListCountAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type OrderListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderList to aggregate.
     */
    where?: OrderListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLists to fetch.
     */
    orderBy?: OrderListOrderByWithRelationInput | OrderListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderLists
    **/
    _count?: true | OrderListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderListMaxAggregateInputType
  }

  export type GetOrderListAggregateType<T extends OrderListAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderList[P]>
      : GetScalarType<T[P], AggregateOrderList[P]>
  }




  export type OrderListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderListWhereInput
    orderBy?: OrderListOrderByWithAggregationInput | OrderListOrderByWithAggregationInput[]
    by: OrderListScalarFieldEnum[] | OrderListScalarFieldEnum
    having?: OrderListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderListCountAggregateInputType | true
    _avg?: OrderListAvgAggregateInputType
    _sum?: OrderListSumAggregateInputType
    _min?: OrderListMinAggregateInputType
    _max?: OrderListMaxAggregateInputType
  }

  export type OrderListGroupByOutputType = {
    id: number
    user_id: number
    createdAt: Date
    updatedAt: Date
    status: $Enums.OrderStatus
    _count: OrderListCountAggregateOutputType | null
    _avg: OrderListAvgAggregateOutputType | null
    _sum: OrderListSumAggregateOutputType | null
    _min: OrderListMinAggregateOutputType | null
    _max: OrderListMaxAggregateOutputType | null
  }

  type GetOrderListGroupByPayload<T extends OrderListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderListGroupByOutputType[P]>
            : GetScalarType<T[P], OrderListGroupByOutputType[P]>
        }
      >
    >


  export type OrderListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    ListItems?: boolean | OrderList$ListItemsArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Orders?: boolean | OrderList$OrdersArgs<ExtArgs>
    _count?: boolean | OrderListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderList"]>

  export type OrderListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderList"]>

  export type OrderListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderList"]>

  export type OrderListSelectScalar = {
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type OrderListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["orderList"]>
  export type OrderListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ListItems?: boolean | OrderList$ListItemsArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Orders?: boolean | OrderList$OrdersArgs<ExtArgs>
    _count?: boolean | OrderListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrderListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrderListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderList"
    objects: {
      ListItems: Prisma.$ListItemsPayload<ExtArgs>[]
      user: Prisma.$UsersPayload<ExtArgs>
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      createdAt: Date
      updatedAt: Date
      status: $Enums.OrderStatus
    }, ExtArgs["result"]["orderList"]>
    composites: {}
  }

  type OrderListGetPayload<S extends boolean | null | undefined | OrderListDefaultArgs> = $Result.GetResult<Prisma.$OrderListPayload, S>

  type OrderListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderListCountAggregateInputType | true
    }

  export interface OrderListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderList'], meta: { name: 'OrderList' } }
    /**
     * Find zero or one OrderList that matches the filter.
     * @param {OrderListFindUniqueArgs} args - Arguments to find a OrderList
     * @example
     * // Get one OrderList
     * const orderList = await prisma.orderList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderListFindUniqueArgs>(args: SelectSubset<T, OrderListFindUniqueArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderListFindUniqueOrThrowArgs} args - Arguments to find a OrderList
     * @example
     * // Get one OrderList
     * const orderList = await prisma.orderList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderListFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderListFindFirstArgs} args - Arguments to find a OrderList
     * @example
     * // Get one OrderList
     * const orderList = await prisma.orderList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderListFindFirstArgs>(args?: SelectSubset<T, OrderListFindFirstArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderListFindFirstOrThrowArgs} args - Arguments to find a OrderList
     * @example
     * // Get one OrderList
     * const orderList = await prisma.orderList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderListFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderListFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderLists
     * const orderLists = await prisma.orderList.findMany()
     * 
     * // Get first 10 OrderLists
     * const orderLists = await prisma.orderList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderListWithIdOnly = await prisma.orderList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderListFindManyArgs>(args?: SelectSubset<T, OrderListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderList.
     * @param {OrderListCreateArgs} args - Arguments to create a OrderList.
     * @example
     * // Create one OrderList
     * const OrderList = await prisma.orderList.create({
     *   data: {
     *     // ... data to create a OrderList
     *   }
     * })
     * 
     */
    create<T extends OrderListCreateArgs>(args: SelectSubset<T, OrderListCreateArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderLists.
     * @param {OrderListCreateManyArgs} args - Arguments to create many OrderLists.
     * @example
     * // Create many OrderLists
     * const orderList = await prisma.orderList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderListCreateManyArgs>(args?: SelectSubset<T, OrderListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderLists and returns the data saved in the database.
     * @param {OrderListCreateManyAndReturnArgs} args - Arguments to create many OrderLists.
     * @example
     * // Create many OrderLists
     * const orderList = await prisma.orderList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderLists and only return the `id`
     * const orderListWithIdOnly = await prisma.orderList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderListCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderList.
     * @param {OrderListDeleteArgs} args - Arguments to delete one OrderList.
     * @example
     * // Delete one OrderList
     * const OrderList = await prisma.orderList.delete({
     *   where: {
     *     // ... filter to delete one OrderList
     *   }
     * })
     * 
     */
    delete<T extends OrderListDeleteArgs>(args: SelectSubset<T, OrderListDeleteArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderList.
     * @param {OrderListUpdateArgs} args - Arguments to update one OrderList.
     * @example
     * // Update one OrderList
     * const orderList = await prisma.orderList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderListUpdateArgs>(args: SelectSubset<T, OrderListUpdateArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderLists.
     * @param {OrderListDeleteManyArgs} args - Arguments to filter OrderLists to delete.
     * @example
     * // Delete a few OrderLists
     * const { count } = await prisma.orderList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderListDeleteManyArgs>(args?: SelectSubset<T, OrderListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderLists
     * const orderList = await prisma.orderList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderListUpdateManyArgs>(args: SelectSubset<T, OrderListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderLists and returns the data updated in the database.
     * @param {OrderListUpdateManyAndReturnArgs} args - Arguments to update many OrderLists.
     * @example
     * // Update many OrderLists
     * const orderList = await prisma.orderList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderLists and only return the `id`
     * const orderListWithIdOnly = await prisma.orderList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderListUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderList.
     * @param {OrderListUpsertArgs} args - Arguments to update or create a OrderList.
     * @example
     * // Update or create a OrderList
     * const orderList = await prisma.orderList.upsert({
     *   create: {
     *     // ... data to create a OrderList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderList we want to update
     *   }
     * })
     */
    upsert<T extends OrderListUpsertArgs>(args: SelectSubset<T, OrderListUpsertArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderListCountArgs} args - Arguments to filter OrderLists to count.
     * @example
     * // Count the number of OrderLists
     * const count = await prisma.orderList.count({
     *   where: {
     *     // ... the filter for the OrderLists we want to count
     *   }
     * })
    **/
    count<T extends OrderListCountArgs>(
      args?: Subset<T, OrderListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderListAggregateArgs>(args: Subset<T, OrderListAggregateArgs>): Prisma.PrismaPromise<GetOrderListAggregateType<T>>

    /**
     * Group by OrderList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderListGroupByArgs['orderBy'] }
        : { orderBy?: OrderListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderList model
   */
  readonly fields: OrderListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ListItems<T extends OrderList$ListItemsArgs<ExtArgs> = {}>(args?: Subset<T, OrderList$ListItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Orders<T extends OrderList$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, OrderList$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderList model
   */
  interface OrderListFieldRefs {
    readonly id: FieldRef<"OrderList", 'Int'>
    readonly user_id: FieldRef<"OrderList", 'Int'>
    readonly createdAt: FieldRef<"OrderList", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderList", 'DateTime'>
    readonly status: FieldRef<"OrderList", 'OrderStatus'>
  }
    

  // Custom InputTypes
  /**
   * OrderList findUnique
   */
  export type OrderListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * Filter, which OrderList to fetch.
     */
    where: OrderListWhereUniqueInput
  }

  /**
   * OrderList findUniqueOrThrow
   */
  export type OrderListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * Filter, which OrderList to fetch.
     */
    where: OrderListWhereUniqueInput
  }

  /**
   * OrderList findFirst
   */
  export type OrderListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * Filter, which OrderList to fetch.
     */
    where?: OrderListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLists to fetch.
     */
    orderBy?: OrderListOrderByWithRelationInput | OrderListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderLists.
     */
    cursor?: OrderListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderLists.
     */
    distinct?: OrderListScalarFieldEnum | OrderListScalarFieldEnum[]
  }

  /**
   * OrderList findFirstOrThrow
   */
  export type OrderListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * Filter, which OrderList to fetch.
     */
    where?: OrderListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLists to fetch.
     */
    orderBy?: OrderListOrderByWithRelationInput | OrderListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderLists.
     */
    cursor?: OrderListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderLists.
     */
    distinct?: OrderListScalarFieldEnum | OrderListScalarFieldEnum[]
  }

  /**
   * OrderList findMany
   */
  export type OrderListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * Filter, which OrderLists to fetch.
     */
    where?: OrderListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderLists to fetch.
     */
    orderBy?: OrderListOrderByWithRelationInput | OrderListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderLists.
     */
    cursor?: OrderListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderLists.
     */
    skip?: number
    distinct?: OrderListScalarFieldEnum | OrderListScalarFieldEnum[]
  }

  /**
   * OrderList create
   */
  export type OrderListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderList.
     */
    data: XOR<OrderListCreateInput, OrderListUncheckedCreateInput>
  }

  /**
   * OrderList createMany
   */
  export type OrderListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderLists.
     */
    data: OrderListCreateManyInput | OrderListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderList createManyAndReturn
   */
  export type OrderListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * The data used to create many OrderLists.
     */
    data: OrderListCreateManyInput | OrderListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderList update
   */
  export type OrderListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderList.
     */
    data: XOR<OrderListUpdateInput, OrderListUncheckedUpdateInput>
    /**
     * Choose, which OrderList to update.
     */
    where: OrderListWhereUniqueInput
  }

  /**
   * OrderList updateMany
   */
  export type OrderListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderLists.
     */
    data: XOR<OrderListUpdateManyMutationInput, OrderListUncheckedUpdateManyInput>
    /**
     * Filter which OrderLists to update
     */
    where?: OrderListWhereInput
    /**
     * Limit how many OrderLists to update.
     */
    limit?: number
  }

  /**
   * OrderList updateManyAndReturn
   */
  export type OrderListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * The data used to update OrderLists.
     */
    data: XOR<OrderListUpdateManyMutationInput, OrderListUncheckedUpdateManyInput>
    /**
     * Filter which OrderLists to update
     */
    where?: OrderListWhereInput
    /**
     * Limit how many OrderLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderList upsert
   */
  export type OrderListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderList to update in case it exists.
     */
    where: OrderListWhereUniqueInput
    /**
     * In case the OrderList found by the `where` argument doesn't exist, create a new OrderList with this data.
     */
    create: XOR<OrderListCreateInput, OrderListUncheckedCreateInput>
    /**
     * In case the OrderList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderListUpdateInput, OrderListUncheckedUpdateInput>
  }

  /**
   * OrderList delete
   */
  export type OrderListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
    /**
     * Filter which OrderList to delete.
     */
    where: OrderListWhereUniqueInput
  }

  /**
   * OrderList deleteMany
   */
  export type OrderListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderLists to delete
     */
    where?: OrderListWhereInput
    /**
     * Limit how many OrderLists to delete.
     */
    limit?: number
  }

  /**
   * OrderList.ListItems
   */
  export type OrderList$ListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    where?: ListItemsWhereInput
    orderBy?: ListItemsOrderByWithRelationInput | ListItemsOrderByWithRelationInput[]
    cursor?: ListItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListItemsScalarFieldEnum | ListItemsScalarFieldEnum[]
  }

  /**
   * OrderList.Orders
   */
  export type OrderList$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * OrderList without action
   */
  export type OrderListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderList
     */
    select?: OrderListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderList
     */
    omit?: OrderListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderListInclude<ExtArgs> | null
  }


  /**
   * Model ListItems
   */

  export type AggregateListItems = {
    _count: ListItemsCountAggregateOutputType | null
    _avg: ListItemsAvgAggregateOutputType | null
    _sum: ListItemsSumAggregateOutputType | null
    _min: ListItemsMinAggregateOutputType | null
    _max: ListItemsMaxAggregateOutputType | null
  }

  export type ListItemsAvgAggregateOutputType = {
    id: number | null
    order_list_id: number | null
    item_id: number | null
    quantity: number | null
  }

  export type ListItemsSumAggregateOutputType = {
    id: number | null
    order_list_id: number | null
    item_id: number | null
    quantity: number | null
  }

  export type ListItemsMinAggregateOutputType = {
    id: number | null
    order_list_id: number | null
    item_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    quantity: number | null
  }

  export type ListItemsMaxAggregateOutputType = {
    id: number | null
    order_list_id: number | null
    item_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    quantity: number | null
  }

  export type ListItemsCountAggregateOutputType = {
    id: number
    order_list_id: number
    item_id: number
    createdAt: number
    updatedAt: number
    quantity: number
    _all: number
  }


  export type ListItemsAvgAggregateInputType = {
    id?: true
    order_list_id?: true
    item_id?: true
    quantity?: true
  }

  export type ListItemsSumAggregateInputType = {
    id?: true
    order_list_id?: true
    item_id?: true
    quantity?: true
  }

  export type ListItemsMinAggregateInputType = {
    id?: true
    order_list_id?: true
    item_id?: true
    createdAt?: true
    updatedAt?: true
    quantity?: true
  }

  export type ListItemsMaxAggregateInputType = {
    id?: true
    order_list_id?: true
    item_id?: true
    createdAt?: true
    updatedAt?: true
    quantity?: true
  }

  export type ListItemsCountAggregateInputType = {
    id?: true
    order_list_id?: true
    item_id?: true
    createdAt?: true
    updatedAt?: true
    quantity?: true
    _all?: true
  }

  export type ListItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListItems to aggregate.
     */
    where?: ListItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemsOrderByWithRelationInput | ListItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListItems
    **/
    _count?: true | ListItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListItemsMaxAggregateInputType
  }

  export type GetListItemsAggregateType<T extends ListItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateListItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListItems[P]>
      : GetScalarType<T[P], AggregateListItems[P]>
  }




  export type ListItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemsWhereInput
    orderBy?: ListItemsOrderByWithAggregationInput | ListItemsOrderByWithAggregationInput[]
    by: ListItemsScalarFieldEnum[] | ListItemsScalarFieldEnum
    having?: ListItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListItemsCountAggregateInputType | true
    _avg?: ListItemsAvgAggregateInputType
    _sum?: ListItemsSumAggregateInputType
    _min?: ListItemsMinAggregateInputType
    _max?: ListItemsMaxAggregateInputType
  }

  export type ListItemsGroupByOutputType = {
    id: number
    order_list_id: number
    item_id: number
    createdAt: Date
    updatedAt: Date
    quantity: number
    _count: ListItemsCountAggregateOutputType | null
    _avg: ListItemsAvgAggregateOutputType | null
    _sum: ListItemsSumAggregateOutputType | null
    _min: ListItemsMinAggregateOutputType | null
    _max: ListItemsMaxAggregateOutputType | null
  }

  type GetListItemsGroupByPayload<T extends ListItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ListItemsGroupByOutputType[P]>
        }
      >
    >


  export type ListItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_list_id?: boolean
    item_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quantity?: boolean
    item?: boolean | ItemsDefaultArgs<ExtArgs>
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItems"]>

  export type ListItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_list_id?: boolean
    item_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quantity?: boolean
    item?: boolean | ItemsDefaultArgs<ExtArgs>
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItems"]>

  export type ListItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_list_id?: boolean
    item_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quantity?: boolean
    item?: boolean | ItemsDefaultArgs<ExtArgs>
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItems"]>

  export type ListItemsSelectScalar = {
    id?: boolean
    order_list_id?: boolean
    item_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quantity?: boolean
  }

  export type ListItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_list_id" | "item_id" | "createdAt" | "updatedAt" | "quantity", ExtArgs["result"]["listItems"]>
  export type ListItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemsDefaultArgs<ExtArgs>
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
  }
  export type ListItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemsDefaultArgs<ExtArgs>
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
  }
  export type ListItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemsDefaultArgs<ExtArgs>
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
  }

  export type $ListItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListItems"
    objects: {
      item: Prisma.$ItemsPayload<ExtArgs>
      order_list: Prisma.$OrderListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_list_id: number
      item_id: number
      createdAt: Date
      updatedAt: Date
      quantity: number
    }, ExtArgs["result"]["listItems"]>
    composites: {}
  }

  type ListItemsGetPayload<S extends boolean | null | undefined | ListItemsDefaultArgs> = $Result.GetResult<Prisma.$ListItemsPayload, S>

  type ListItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListItemsCountAggregateInputType | true
    }

  export interface ListItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListItems'], meta: { name: 'ListItems' } }
    /**
     * Find zero or one ListItems that matches the filter.
     * @param {ListItemsFindUniqueArgs} args - Arguments to find a ListItems
     * @example
     * // Get one ListItems
     * const listItems = await prisma.listItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListItemsFindUniqueArgs>(args: SelectSubset<T, ListItemsFindUniqueArgs<ExtArgs>>): Prisma__ListItemsClient<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListItemsFindUniqueOrThrowArgs} args - Arguments to find a ListItems
     * @example
     * // Get one ListItems
     * const listItems = await prisma.listItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, ListItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListItemsClient<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemsFindFirstArgs} args - Arguments to find a ListItems
     * @example
     * // Get one ListItems
     * const listItems = await prisma.listItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListItemsFindFirstArgs>(args?: SelectSubset<T, ListItemsFindFirstArgs<ExtArgs>>): Prisma__ListItemsClient<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemsFindFirstOrThrowArgs} args - Arguments to find a ListItems
     * @example
     * // Get one ListItems
     * const listItems = await prisma.listItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, ListItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListItemsClient<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListItems
     * const listItems = await prisma.listItems.findMany()
     * 
     * // Get first 10 ListItems
     * const listItems = await prisma.listItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listItemsWithIdOnly = await prisma.listItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListItemsFindManyArgs>(args?: SelectSubset<T, ListItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListItems.
     * @param {ListItemsCreateArgs} args - Arguments to create a ListItems.
     * @example
     * // Create one ListItems
     * const ListItems = await prisma.listItems.create({
     *   data: {
     *     // ... data to create a ListItems
     *   }
     * })
     * 
     */
    create<T extends ListItemsCreateArgs>(args: SelectSubset<T, ListItemsCreateArgs<ExtArgs>>): Prisma__ListItemsClient<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListItems.
     * @param {ListItemsCreateManyArgs} args - Arguments to create many ListItems.
     * @example
     * // Create many ListItems
     * const listItems = await prisma.listItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListItemsCreateManyArgs>(args?: SelectSubset<T, ListItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListItems and returns the data saved in the database.
     * @param {ListItemsCreateManyAndReturnArgs} args - Arguments to create many ListItems.
     * @example
     * // Create many ListItems
     * const listItems = await prisma.listItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListItems and only return the `id`
     * const listItemsWithIdOnly = await prisma.listItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, ListItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListItems.
     * @param {ListItemsDeleteArgs} args - Arguments to delete one ListItems.
     * @example
     * // Delete one ListItems
     * const ListItems = await prisma.listItems.delete({
     *   where: {
     *     // ... filter to delete one ListItems
     *   }
     * })
     * 
     */
    delete<T extends ListItemsDeleteArgs>(args: SelectSubset<T, ListItemsDeleteArgs<ExtArgs>>): Prisma__ListItemsClient<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListItems.
     * @param {ListItemsUpdateArgs} args - Arguments to update one ListItems.
     * @example
     * // Update one ListItems
     * const listItems = await prisma.listItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListItemsUpdateArgs>(args: SelectSubset<T, ListItemsUpdateArgs<ExtArgs>>): Prisma__ListItemsClient<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListItems.
     * @param {ListItemsDeleteManyArgs} args - Arguments to filter ListItems to delete.
     * @example
     * // Delete a few ListItems
     * const { count } = await prisma.listItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListItemsDeleteManyArgs>(args?: SelectSubset<T, ListItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListItems
     * const listItems = await prisma.listItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListItemsUpdateManyArgs>(args: SelectSubset<T, ListItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListItems and returns the data updated in the database.
     * @param {ListItemsUpdateManyAndReturnArgs} args - Arguments to update many ListItems.
     * @example
     * // Update many ListItems
     * const listItems = await prisma.listItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListItems and only return the `id`
     * const listItemsWithIdOnly = await prisma.listItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, ListItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListItems.
     * @param {ListItemsUpsertArgs} args - Arguments to update or create a ListItems.
     * @example
     * // Update or create a ListItems
     * const listItems = await prisma.listItems.upsert({
     *   create: {
     *     // ... data to create a ListItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListItems we want to update
     *   }
     * })
     */
    upsert<T extends ListItemsUpsertArgs>(args: SelectSubset<T, ListItemsUpsertArgs<ExtArgs>>): Prisma__ListItemsClient<$Result.GetResult<Prisma.$ListItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemsCountArgs} args - Arguments to filter ListItems to count.
     * @example
     * // Count the number of ListItems
     * const count = await prisma.listItems.count({
     *   where: {
     *     // ... the filter for the ListItems we want to count
     *   }
     * })
    **/
    count<T extends ListItemsCountArgs>(
      args?: Subset<T, ListItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListItemsAggregateArgs>(args: Subset<T, ListItemsAggregateArgs>): Prisma.PrismaPromise<GetListItemsAggregateType<T>>

    /**
     * Group by ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListItemsGroupByArgs['orderBy'] }
        : { orderBy?: ListItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListItems model
   */
  readonly fields: ListItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemsDefaultArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_list<T extends OrderListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderListDefaultArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListItems model
   */
  interface ListItemsFieldRefs {
    readonly id: FieldRef<"ListItems", 'Int'>
    readonly order_list_id: FieldRef<"ListItems", 'Int'>
    readonly item_id: FieldRef<"ListItems", 'Int'>
    readonly createdAt: FieldRef<"ListItems", 'DateTime'>
    readonly updatedAt: FieldRef<"ListItems", 'DateTime'>
    readonly quantity: FieldRef<"ListItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListItems findUnique
   */
  export type ListItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * Filter, which ListItems to fetch.
     */
    where: ListItemsWhereUniqueInput
  }

  /**
   * ListItems findUniqueOrThrow
   */
  export type ListItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * Filter, which ListItems to fetch.
     */
    where: ListItemsWhereUniqueInput
  }

  /**
   * ListItems findFirst
   */
  export type ListItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * Filter, which ListItems to fetch.
     */
    where?: ListItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemsOrderByWithRelationInput | ListItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListItems.
     */
    cursor?: ListItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListItems.
     */
    distinct?: ListItemsScalarFieldEnum | ListItemsScalarFieldEnum[]
  }

  /**
   * ListItems findFirstOrThrow
   */
  export type ListItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * Filter, which ListItems to fetch.
     */
    where?: ListItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemsOrderByWithRelationInput | ListItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListItems.
     */
    cursor?: ListItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListItems.
     */
    distinct?: ListItemsScalarFieldEnum | ListItemsScalarFieldEnum[]
  }

  /**
   * ListItems findMany
   */
  export type ListItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * Filter, which ListItems to fetch.
     */
    where?: ListItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemsOrderByWithRelationInput | ListItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListItems.
     */
    cursor?: ListItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    distinct?: ListItemsScalarFieldEnum | ListItemsScalarFieldEnum[]
  }

  /**
   * ListItems create
   */
  export type ListItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a ListItems.
     */
    data: XOR<ListItemsCreateInput, ListItemsUncheckedCreateInput>
  }

  /**
   * ListItems createMany
   */
  export type ListItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListItems.
     */
    data: ListItemsCreateManyInput | ListItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListItems createManyAndReturn
   */
  export type ListItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * The data used to create many ListItems.
     */
    data: ListItemsCreateManyInput | ListItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListItems update
   */
  export type ListItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a ListItems.
     */
    data: XOR<ListItemsUpdateInput, ListItemsUncheckedUpdateInput>
    /**
     * Choose, which ListItems to update.
     */
    where: ListItemsWhereUniqueInput
  }

  /**
   * ListItems updateMany
   */
  export type ListItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListItems.
     */
    data: XOR<ListItemsUpdateManyMutationInput, ListItemsUncheckedUpdateManyInput>
    /**
     * Filter which ListItems to update
     */
    where?: ListItemsWhereInput
    /**
     * Limit how many ListItems to update.
     */
    limit?: number
  }

  /**
   * ListItems updateManyAndReturn
   */
  export type ListItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * The data used to update ListItems.
     */
    data: XOR<ListItemsUpdateManyMutationInput, ListItemsUncheckedUpdateManyInput>
    /**
     * Filter which ListItems to update
     */
    where?: ListItemsWhereInput
    /**
     * Limit how many ListItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListItems upsert
   */
  export type ListItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the ListItems to update in case it exists.
     */
    where: ListItemsWhereUniqueInput
    /**
     * In case the ListItems found by the `where` argument doesn't exist, create a new ListItems with this data.
     */
    create: XOR<ListItemsCreateInput, ListItemsUncheckedCreateInput>
    /**
     * In case the ListItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListItemsUpdateInput, ListItemsUncheckedUpdateInput>
  }

  /**
   * ListItems delete
   */
  export type ListItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
    /**
     * Filter which ListItems to delete.
     */
    where: ListItemsWhereUniqueInput
  }

  /**
   * ListItems deleteMany
   */
  export type ListItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListItems to delete
     */
    where?: ListItemsWhereInput
    /**
     * Limit how many ListItems to delete.
     */
    limit?: number
  }

  /**
   * ListItems without action
   */
  export type ListItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItems
     */
    select?: ListItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItems
     */
    omit?: ListItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemsInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    amount: number | null
    currency: string | null
    payment_method: string | null
    transaction_id: string | null
    order_id: string | null
    status: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    currency: string | null
    payment_method: string | null
    transaction_id: string | null
    order_id: string | null
    status: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    currency: number
    payment_method: number
    transaction_id: number
    order_id: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    payment_method?: true
    transaction_id?: true
    order_id?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    payment_method?: true
    transaction_id?: true
    order_id?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    payment_method?: true
    transaction_id?: true
    order_id?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    amount: number
    currency: string
    payment_method: string | null
    transaction_id: string | null
    order_id: string | null
    status: string
    userId: number | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    order_id?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | Payment$orderArgs<ExtArgs>
    user?: boolean | Payment$userArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    order_id?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | Payment$orderArgs<ExtArgs>
    user?: boolean | Payment$userArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    order_id?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | Payment$orderArgs<ExtArgs>
    user?: boolean | Payment$userArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    currency?: boolean
    payment_method?: boolean
    transaction_id?: boolean
    order_id?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "currency" | "payment_method" | "transaction_id" | "order_id" | "status" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Payment$orderArgs<ExtArgs>
    user?: boolean | Payment$userArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Payment$orderArgs<ExtArgs>
    user?: boolean | Payment$userArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Payment$orderArgs<ExtArgs>
    user?: boolean | Payment$userArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs> | null
      user: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      currency: string
      payment_method: string | null
      transaction_id: string | null
      order_id: string | null
      status: string
      userId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends Payment$orderArgs<ExtArgs> = {}>(args?: Subset<T, Payment$orderArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Payment$userArgs<ExtArgs> = {}>(args?: Subset<T, Payment$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly payment_method: FieldRef<"Payment", 'String'>
    readonly transaction_id: FieldRef<"Payment", 'String'>
    readonly order_id: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'Int'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.order
   */
  export type Payment$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
  }

  /**
   * Payment.user
   */
  export type Payment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    order_list_id: number | null
    user_id: number | null
    total_price: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    order_list_id: number | null
    user_id: number | null
    total_price: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    order_id: string | null
    order_list_id: number | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    total_price: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    order_id: string | null
    order_list_id: number | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    total_price: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    order_id: number
    order_list_id: number
    user_id: number
    createdAt: number
    updatedAt: number
    status: number
    total_price: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    order_list_id?: true
    user_id?: true
    total_price?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    order_list_id?: true
    user_id?: true
    total_price?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    order_id?: true
    order_list_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    total_price?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    order_id?: true
    order_list_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    total_price?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    order_id?: true
    order_list_id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    total_price?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    order_id: string
    order_list_id: number
    user_id: number
    createdAt: Date
    updatedAt: Date
    status: string
    total_price: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    order_list_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    total_price?: boolean
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Payment?: boolean | Orders$PaymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    order_list_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    total_price?: boolean
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    order_list_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    total_price?: boolean
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    order_id?: boolean
    order_list_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    total_price?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "order_list_id" | "user_id" | "createdAt" | "updatedAt" | "status" | "total_price", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Payment?: boolean | Orders$PaymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_list?: boolean | OrderListDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      order_list: Prisma.$OrderListPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: string
      order_list_id: number
      user_id: number
      createdAt: Date
      updatedAt: Date
      status: string
      total_price: number
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_list<T extends OrderListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderListDefaultArgs<ExtArgs>>): Prisma__OrderListClient<$Result.GetResult<Prisma.$OrderListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Payment<T extends Orders$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Orders$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly order_id: FieldRef<"Orders", 'String'>
    readonly order_list_id: FieldRef<"Orders", 'Int'>
    readonly user_id: FieldRef<"Orders", 'Int'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
    readonly status: FieldRef<"Orders", 'String'>
    readonly total_price: FieldRef<"Orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.Payment
   */
  export type Orders$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    email: 'email',
    phone: 'phone',
    owner: 'owner',
    banner: 'banner',
    logo: 'logo',
    about_shop: 'about_shop',
    shop_mission: 'shop_mission',
    social: 'social',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    address: 'address',
    gender: 'gender',
    type: 'type',
    about: 'about',
    createdAt: 'createdAt',
    photo: 'photo',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TypesScalarFieldEnum: {
    id: 'id',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TypesScalarFieldEnum = (typeof TypesScalarFieldEnum)[keyof typeof TypesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type_id: 'type_id',
    shop_id: 'shop_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    photo: 'photo'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    category_id: 'category_id',
    shop_id: 'shop_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    photo: 'photo'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const OrderListScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type OrderListScalarFieldEnum = (typeof OrderListScalarFieldEnum)[keyof typeof OrderListScalarFieldEnum]


  export const ListItemsScalarFieldEnum: {
    id: 'id',
    order_list_id: 'order_list_id',
    item_id: 'item_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    quantity: 'quantity'
  };

  export type ListItemsScalarFieldEnum = (typeof ListItemsScalarFieldEnum)[keyof typeof ListItemsScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    currency: 'currency',
    payment_method: 'payment_method',
    transaction_id: 'transaction_id',
    order_id: 'order_id',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    order_list_id: 'order_list_id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    total_price: 'total_price'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Genders'
   */
  export type EnumGendersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genders'>
    


  /**
   * Reference to a field of type 'Genders[]'
   */
  export type ListEnumGendersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genders[]'>
    


  /**
   * Reference to a field of type 'UserTypes'
   */
  export type EnumUserTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserTypes'>
    


  /**
   * Reference to a field of type 'UserTypes[]'
   */
  export type ListEnumUserTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserTypes[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: IntFilter<"Shop"> | number
    name?: StringFilter<"Shop"> | string
    address?: StringFilter<"Shop"> | string
    email?: StringFilter<"Shop"> | string
    phone?: StringFilter<"Shop"> | string
    owner?: StringFilter<"Shop"> | string
    banner?: StringFilter<"Shop"> | string
    logo?: StringFilter<"Shop"> | string
    about_shop?: StringFilter<"Shop"> | string
    shop_mission?: StringFilter<"Shop"> | string
    social?: JsonFilter<"Shop">
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    Categories?: CategoriesListRelationFilter
    Items?: ItemsListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    owner?: SortOrder
    banner?: SortOrder
    logo?: SortOrder
    about_shop?: SortOrder
    shop_mission?: SortOrder
    social?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Categories?: CategoriesOrderByRelationAggregateInput
    Items?: ItemsOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    address?: StringFilter<"Shop"> | string
    email?: StringFilter<"Shop"> | string
    phone?: StringFilter<"Shop"> | string
    owner?: StringFilter<"Shop"> | string
    banner?: StringFilter<"Shop"> | string
    logo?: StringFilter<"Shop"> | string
    about_shop?: StringFilter<"Shop"> | string
    shop_mission?: StringFilter<"Shop"> | string
    social?: JsonFilter<"Shop">
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    Categories?: CategoriesListRelationFilter
    Items?: ItemsListRelationFilter
  }, "id" | "id" | "name">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    owner?: SortOrder
    banner?: SortOrder
    logo?: SortOrder
    about_shop?: SortOrder
    shop_mission?: SortOrder
    social?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shop"> | number
    name?: StringWithAggregatesFilter<"Shop"> | string
    address?: StringWithAggregatesFilter<"Shop"> | string
    email?: StringWithAggregatesFilter<"Shop"> | string
    phone?: StringWithAggregatesFilter<"Shop"> | string
    owner?: StringWithAggregatesFilter<"Shop"> | string
    banner?: StringWithAggregatesFilter<"Shop"> | string
    logo?: StringWithAggregatesFilter<"Shop"> | string
    about_shop?: StringWithAggregatesFilter<"Shop"> | string
    shop_mission?: StringWithAggregatesFilter<"Shop"> | string
    social?: JsonWithAggregatesFilter<"Shop">
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringNullableFilter<"Users"> | string | null
    password?: StringFilter<"Users"> | string
    address?: StringNullableFilter<"Users"> | string | null
    gender?: EnumGendersFilter<"Users"> | $Enums.Genders
    type?: EnumUserTypesFilter<"Users"> | $Enums.UserTypes
    about?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    photo?: StringNullableFilter<"Users"> | string | null
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    OrderList?: OrderListListRelationFilter
    Orders?: OrdersListRelationFilter
    Payment?: PaymentListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    gender?: SortOrder
    type?: SortOrder
    about?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    photo?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    OrderList?: OrderListOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringNullableFilter<"Users"> | string | null
    password?: StringFilter<"Users"> | string
    address?: StringNullableFilter<"Users"> | string | null
    gender?: EnumGendersFilter<"Users"> | $Enums.Genders
    type?: EnumUserTypesFilter<"Users"> | $Enums.UserTypes
    about?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    photo?: StringNullableFilter<"Users"> | string | null
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    OrderList?: OrderListListRelationFilter
    Orders?: OrdersListRelationFilter
    Payment?: PaymentListRelationFilter
  }, "id" | "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    gender?: SortOrder
    type?: SortOrder
    about?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    photo?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringWithAggregatesFilter<"Users"> | string
    address?: StringNullableWithAggregatesFilter<"Users"> | string | null
    gender?: EnumGendersWithAggregatesFilter<"Users"> | $Enums.Genders
    type?: EnumUserTypesWithAggregatesFilter<"Users"> | $Enums.UserTypes
    about?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    photo?: StringNullableWithAggregatesFilter<"Users"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type TypesWhereInput = {
    AND?: TypesWhereInput | TypesWhereInput[]
    OR?: TypesWhereInput[]
    NOT?: TypesWhereInput | TypesWhereInput[]
    id?: IntFilter<"Types"> | number
    type?: StringFilter<"Types"> | string
    createdAt?: DateTimeFilter<"Types"> | Date | string
    updatedAt?: DateTimeFilter<"Types"> | Date | string
    Categories?: CategoriesListRelationFilter
  }

  export type TypesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Categories?: CategoriesOrderByRelationAggregateInput
  }

  export type TypesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TypesWhereInput | TypesWhereInput[]
    OR?: TypesWhereInput[]
    NOT?: TypesWhereInput | TypesWhereInput[]
    type?: StringFilter<"Types"> | string
    createdAt?: DateTimeFilter<"Types"> | Date | string
    updatedAt?: DateTimeFilter<"Types"> | Date | string
    Categories?: CategoriesListRelationFilter
  }, "id" | "id">

  export type TypesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TypesCountOrderByAggregateInput
    _avg?: TypesAvgOrderByAggregateInput
    _max?: TypesMaxOrderByAggregateInput
    _min?: TypesMinOrderByAggregateInput
    _sum?: TypesSumOrderByAggregateInput
  }

  export type TypesScalarWhereWithAggregatesInput = {
    AND?: TypesScalarWhereWithAggregatesInput | TypesScalarWhereWithAggregatesInput[]
    OR?: TypesScalarWhereWithAggregatesInput[]
    NOT?: TypesScalarWhereWithAggregatesInput | TypesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Types"> | number
    type?: StringWithAggregatesFilter<"Types"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Types"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Types"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    type_id?: IntFilter<"Categories"> | number
    shop_id?: IntFilter<"Categories"> | number
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    photo?: StringNullableFilter<"Categories"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    type?: XOR<TypesScalarRelationFilter, TypesWhereInput>
    Items?: ItemsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrderInput | SortOrder
    shop?: ShopOrderByWithRelationInput
    type?: TypesOrderByWithRelationInput
    Items?: ItemsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    type_id?: IntFilter<"Categories"> | number
    shop_id?: IntFilter<"Categories"> | number
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    photo?: StringNullableFilter<"Categories"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    type?: XOR<TypesScalarRelationFilter, TypesWhereInput>
    Items?: ItemsListRelationFilter
  }, "id" | "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    type_id?: IntWithAggregatesFilter<"Categories"> | number
    shop_id?: IntWithAggregatesFilter<"Categories"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    photo?: StringNullableWithAggregatesFilter<"Categories"> | string | null
  }

  export type ItemsWhereInput = {
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    id?: IntFilter<"Items"> | number
    name?: StringFilter<"Items"> | string
    description?: StringFilter<"Items"> | string
    price?: IntFilter<"Items"> | number
    category_id?: IntFilter<"Items"> | number
    shop_id?: IntFilter<"Items"> | number
    createdAt?: DateTimeFilter<"Items"> | Date | string
    updatedAt?: DateTimeFilter<"Items"> | Date | string
    photo?: StringNullableFilter<"Items"> | string | null
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    ListItems?: ListItemsListRelationFilter
  }

  export type ItemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrderInput | SortOrder
    category?: CategoriesOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    ListItems?: ListItemsOrderByRelationAggregateInput
  }

  export type ItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    name?: StringFilter<"Items"> | string
    description?: StringFilter<"Items"> | string
    price?: IntFilter<"Items"> | number
    category_id?: IntFilter<"Items"> | number
    shop_id?: IntFilter<"Items"> | number
    createdAt?: DateTimeFilter<"Items"> | Date | string
    updatedAt?: DateTimeFilter<"Items"> | Date | string
    photo?: StringNullableFilter<"Items"> | string | null
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    ListItems?: ListItemsListRelationFilter
  }, "id" | "id">

  export type ItemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _avg?: ItemsAvgOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
    _sum?: ItemsSumOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    OR?: ItemsScalarWhereWithAggregatesInput[]
    NOT?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Items"> | number
    name?: StringWithAggregatesFilter<"Items"> | string
    description?: StringWithAggregatesFilter<"Items"> | string
    price?: IntWithAggregatesFilter<"Items"> | number
    category_id?: IntWithAggregatesFilter<"Items"> | number
    shop_id?: IntWithAggregatesFilter<"Items"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Items"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Items"> | Date | string
    photo?: StringNullableWithAggregatesFilter<"Items"> | string | null
  }

  export type OrderListWhereInput = {
    AND?: OrderListWhereInput | OrderListWhereInput[]
    OR?: OrderListWhereInput[]
    NOT?: OrderListWhereInput | OrderListWhereInput[]
    id?: IntFilter<"OrderList"> | number
    user_id?: IntFilter<"OrderList"> | number
    createdAt?: DateTimeFilter<"OrderList"> | Date | string
    updatedAt?: DateTimeFilter<"OrderList"> | Date | string
    status?: EnumOrderStatusFilter<"OrderList"> | $Enums.OrderStatus
    ListItems?: ListItemsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Orders?: OrdersListRelationFilter
  }

  export type OrderListOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    ListItems?: ListItemsOrderByRelationAggregateInput
    user?: UsersOrderByWithRelationInput
    Orders?: OrdersOrderByRelationAggregateInput
  }

  export type OrderListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderListWhereInput | OrderListWhereInput[]
    OR?: OrderListWhereInput[]
    NOT?: OrderListWhereInput | OrderListWhereInput[]
    user_id?: IntFilter<"OrderList"> | number
    createdAt?: DateTimeFilter<"OrderList"> | Date | string
    updatedAt?: DateTimeFilter<"OrderList"> | Date | string
    status?: EnumOrderStatusFilter<"OrderList"> | $Enums.OrderStatus
    ListItems?: ListItemsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Orders?: OrdersListRelationFilter
  }, "id" | "id">

  export type OrderListOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: OrderListCountOrderByAggregateInput
    _avg?: OrderListAvgOrderByAggregateInput
    _max?: OrderListMaxOrderByAggregateInput
    _min?: OrderListMinOrderByAggregateInput
    _sum?: OrderListSumOrderByAggregateInput
  }

  export type OrderListScalarWhereWithAggregatesInput = {
    AND?: OrderListScalarWhereWithAggregatesInput | OrderListScalarWhereWithAggregatesInput[]
    OR?: OrderListScalarWhereWithAggregatesInput[]
    NOT?: OrderListScalarWhereWithAggregatesInput | OrderListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderList"> | number
    user_id?: IntWithAggregatesFilter<"OrderList"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderList"> | Date | string
    status?: EnumOrderStatusWithAggregatesFilter<"OrderList"> | $Enums.OrderStatus
  }

  export type ListItemsWhereInput = {
    AND?: ListItemsWhereInput | ListItemsWhereInput[]
    OR?: ListItemsWhereInput[]
    NOT?: ListItemsWhereInput | ListItemsWhereInput[]
    id?: IntFilter<"ListItems"> | number
    order_list_id?: IntFilter<"ListItems"> | number
    item_id?: IntFilter<"ListItems"> | number
    createdAt?: DateTimeFilter<"ListItems"> | Date | string
    updatedAt?: DateTimeFilter<"ListItems"> | Date | string
    quantity?: IntFilter<"ListItems"> | number
    item?: XOR<ItemsScalarRelationFilter, ItemsWhereInput>
    order_list?: XOR<OrderListScalarRelationFilter, OrderListWhereInput>
  }

  export type ListItemsOrderByWithRelationInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    item_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
    item?: ItemsOrderByWithRelationInput
    order_list?: OrderListOrderByWithRelationInput
  }

  export type ListItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListItemsWhereInput | ListItemsWhereInput[]
    OR?: ListItemsWhereInput[]
    NOT?: ListItemsWhereInput | ListItemsWhereInput[]
    order_list_id?: IntFilter<"ListItems"> | number
    item_id?: IntFilter<"ListItems"> | number
    createdAt?: DateTimeFilter<"ListItems"> | Date | string
    updatedAt?: DateTimeFilter<"ListItems"> | Date | string
    quantity?: IntFilter<"ListItems"> | number
    item?: XOR<ItemsScalarRelationFilter, ItemsWhereInput>
    order_list?: XOR<OrderListScalarRelationFilter, OrderListWhereInput>
  }, "id" | "id">

  export type ListItemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    item_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
    _count?: ListItemsCountOrderByAggregateInput
    _avg?: ListItemsAvgOrderByAggregateInput
    _max?: ListItemsMaxOrderByAggregateInput
    _min?: ListItemsMinOrderByAggregateInput
    _sum?: ListItemsSumOrderByAggregateInput
  }

  export type ListItemsScalarWhereWithAggregatesInput = {
    AND?: ListItemsScalarWhereWithAggregatesInput | ListItemsScalarWhereWithAggregatesInput[]
    OR?: ListItemsScalarWhereWithAggregatesInput[]
    NOT?: ListItemsScalarWhereWithAggregatesInput | ListItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListItems"> | number
    order_list_id?: IntWithAggregatesFilter<"ListItems"> | number
    item_id?: IntWithAggregatesFilter<"ListItems"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ListItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ListItems"> | Date | string
    quantity?: IntWithAggregatesFilter<"ListItems"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    payment_method?: StringNullableFilter<"Payment"> | string | null
    transaction_id?: StringNullableFilter<"Payment"> | string | null
    order_id?: StringNullableFilter<"Payment"> | string | null
    status?: StringFilter<"Payment"> | string
    userId?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrdersOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transaction_id?: string
    order_id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    payment_method?: StringNullableFilter<"Payment"> | string | null
    status?: StringFilter<"Payment"> | string
    userId?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id" | "transaction_id" | "order_id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    transaction_id?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    payment_method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    transaction_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    order_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: StringWithAggregatesFilter<"Payment"> | string
    userId?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    order_id?: StringFilter<"Orders"> | string
    order_list_id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    status?: StringFilter<"Orders"> | string
    total_price?: IntFilter<"Orders"> | number
    order_list?: XOR<OrderListScalarRelationFilter, OrderListWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Payment?: PaymentListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    order_list_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
    order_list?: OrderListOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    Payment?: PaymentOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    order_list_id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    status?: StringFilter<"Orders"> | string
    total_price?: IntFilter<"Orders"> | number
    order_list?: XOR<OrderListScalarRelationFilter, OrderListWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Payment?: PaymentListRelationFilter
  }, "id" | "id" | "order_id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    order_list_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    order_id?: StringWithAggregatesFilter<"Orders"> | string
    order_list_id?: IntWithAggregatesFilter<"Orders"> | number
    user_id?: IntWithAggregatesFilter<"Orders"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    status?: StringWithAggregatesFilter<"Orders"> | string
    total_price?: IntWithAggregatesFilter<"Orders"> | number
  }

  export type ShopCreateInput = {
    name: string
    address: string
    email: string
    phone: string
    owner: string
    banner: string
    logo: string
    about_shop: string
    shop_mission: string
    social: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Categories?: CategoriesCreateNestedManyWithoutShopInput
    Items?: ItemsCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    email: string
    phone: string
    owner: string
    banner: string
    logo: string
    about_shop: string
    shop_mission: string
    social: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Categories?: CategoriesUncheckedCreateNestedManyWithoutShopInput
    Items?: ItemsUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    about_shop?: StringFieldUpdateOperationsInput | string
    shop_mission?: StringFieldUpdateOperationsInput | string
    social?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Categories?: CategoriesUpdateManyWithoutShopNestedInput
    Items?: ItemsUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    about_shop?: StringFieldUpdateOperationsInput | string
    shop_mission?: StringFieldUpdateOperationsInput | string
    social?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Categories?: CategoriesUncheckedUpdateManyWithoutShopNestedInput
    Items?: ItemsUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: number
    name: string
    address: string
    email: string
    phone: string
    owner: string
    banner: string
    logo: string
    about_shop: string
    shop_mission: string
    social: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    about_shop?: StringFieldUpdateOperationsInput | string
    shop_mission?: StringFieldUpdateOperationsInput | string
    social?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    about_shop?: StringFieldUpdateOperationsInput | string
    shop_mission?: StringFieldUpdateOperationsInput | string
    social?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
    OrderList?: OrderListCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
    OrderList?: OrderListUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderList?: OrderListUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderList?: OrderListUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypesCreateInput = {
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Categories?: CategoriesCreateNestedManyWithoutTypeInput
  }

  export type TypesUncheckedCreateInput = {
    id?: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Categories?: CategoriesUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypesUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Categories?: CategoriesUpdateManyWithoutTypeNestedInput
  }

  export type TypesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Categories?: CategoriesUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypesCreateManyInput = {
    id?: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypesUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    shop: ShopCreateNestedOneWithoutCategoriesInput
    type: TypesCreateNestedOneWithoutCategoriesInput
    Items?: ItemsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    type_id: number
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    Items?: ItemsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutCategoriesNestedInput
    type?: TypesUpdateOneRequiredWithoutCategoriesNestedInput
    Items?: ItemsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type_id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Items?: ItemsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    type_id: number
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type_id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemsCreateInput = {
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    category: CategoriesCreateNestedOneWithoutItemsInput
    shop: ShopCreateNestedOneWithoutItemsInput
    ListItems?: ListItemsCreateNestedManyWithoutItemInput
  }

  export type ItemsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    price: number
    category_id: number
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    ListItems?: ListItemsUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoriesUpdateOneRequiredWithoutItemsNestedInput
    shop?: ShopUpdateOneRequiredWithoutItemsNestedInput
    ListItems?: ListItemsUpdateManyWithoutItemNestedInput
  }

  export type ItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ListItems?: ListItemsUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemsCreateManyInput = {
    id?: number
    name: string
    description: string
    price: number
    category_id: number
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
  }

  export type ItemsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderListCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
    ListItems?: ListItemsCreateNestedManyWithoutOrder_listInput
    user: UsersCreateNestedOneWithoutOrderListInput
    Orders?: OrdersCreateNestedManyWithoutOrder_listInput
  }

  export type OrderListUncheckedCreateInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
    ListItems?: ListItemsUncheckedCreateNestedManyWithoutOrder_listInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutOrder_listInput
  }

  export type OrderListUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    ListItems?: ListItemsUpdateManyWithoutOrder_listNestedInput
    user?: UsersUpdateOneRequiredWithoutOrderListNestedInput
    Orders?: OrdersUpdateManyWithoutOrder_listNestedInput
  }

  export type OrderListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    ListItems?: ListItemsUncheckedUpdateManyWithoutOrder_listNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutOrder_listNestedInput
  }

  export type OrderListCreateManyInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
  }

  export type OrderListUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type OrderListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ListItemsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
    item: ItemsCreateNestedOneWithoutListItemsInput
    order_list: OrderListCreateNestedOneWithoutListItemsInput
  }

  export type ListItemsUncheckedCreateInput = {
    id?: number
    order_list_id: number
    item_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
  }

  export type ListItemsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemsUpdateOneRequiredWithoutListItemsNestedInput
    order_list?: OrderListUpdateOneRequiredWithoutListItemsNestedInput
  }

  export type ListItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_list_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemsCreateManyInput = {
    id?: number
    order_list_id: number
    item_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
  }

  export type ListItemsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_list_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrdersCreateNestedOneWithoutPaymentInput
    user?: UsersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    order_id?: string | null
    status: string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneWithoutPaymentNestedInput
    user?: UsersUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    order_id?: string | null
    status: string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    order_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
    order_list: OrderListCreateNestedOneWithoutOrdersInput
    user: UsersCreateNestedOneWithoutOrdersInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    order_id: string
    order_list_id: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    order_list?: OrderListUpdateOneRequiredWithoutOrdersNestedInput
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    order_list_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    order_id: string
    order_list_id: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
  }

  export type OrdersUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    order_list_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoriesListRelationFilter = {
    every?: CategoriesWhereInput
    some?: CategoriesWhereInput
    none?: CategoriesWhereInput
  }

  export type ItemsListRelationFilter = {
    every?: ItemsWhereInput
    some?: ItemsWhereInput
    none?: ItemsWhereInput
  }

  export type CategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    owner?: SortOrder
    banner?: SortOrder
    logo?: SortOrder
    about_shop?: SortOrder
    shop_mission?: SortOrder
    social?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    owner?: SortOrder
    banner?: SortOrder
    logo?: SortOrder
    about_shop?: SortOrder
    shop_mission?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    owner?: SortOrder
    banner?: SortOrder
    logo?: SortOrder
    about_shop?: SortOrder
    shop_mission?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGendersFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel>
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    not?: NestedEnumGendersFilter<$PrismaModel> | $Enums.Genders
  }

  export type EnumUserTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypes | EnumUserTypesFieldRefInput<$PrismaModel>
    in?: $Enums.UserTypes[] | ListEnumUserTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTypes[] | ListEnumUserTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypesFilter<$PrismaModel> | $Enums.UserTypes
  }

  export type OrderListListRelationFilter = {
    every?: OrderListWhereInput
    some?: OrderListWhereInput
    none?: OrderListWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    about?: SortOrder
    createdAt?: SortOrder
    photo?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    about?: SortOrder
    createdAt?: SortOrder
    photo?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    about?: SortOrder
    createdAt?: SortOrder
    photo?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGendersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel>
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    not?: NestedEnumGendersWithAggregatesFilter<$PrismaModel> | $Enums.Genders
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGendersFilter<$PrismaModel>
    _max?: NestedEnumGendersFilter<$PrismaModel>
  }

  export type EnumUserTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypes | EnumUserTypesFieldRefInput<$PrismaModel>
    in?: $Enums.UserTypes[] | ListEnumUserTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTypes[] | ListEnumUserTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypesWithAggregatesFilter<$PrismaModel> | $Enums.UserTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypesFilter<$PrismaModel>
    _max?: NestedEnumUserTypesFilter<$PrismaModel>
  }

  export type TypesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type TypesScalarRelationFilter = {
    is?: TypesWhereInput
    isNot?: TypesWhereInput
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    shop_id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    shop_id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type ListItemsListRelationFilter = {
    every?: ListItemsWhereInput
    some?: ListItemsWhereInput
    none?: ListItemsWhereInput
  }

  export type ListItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrder
  }

  export type ItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    shop_id?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    shop_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: SortOrder
  }

  export type ItemsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    shop_id?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type OrderListCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type OrderListAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type OrderListMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type OrderListMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type OrderListSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type ItemsScalarRelationFilter = {
    is?: ItemsWhereInput
    isNot?: ItemsWhereInput
  }

  export type OrderListScalarRelationFilter = {
    is?: OrderListWhereInput
    isNot?: OrderListWhereInput
  }

  export type ListItemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    item_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
  }

  export type ListItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
  }

  export type ListItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    item_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
  }

  export type ListItemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    item_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
  }

  export type ListItemsSumOrderByAggregateInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: OrdersWhereInput | null
    isNot?: OrdersWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrder
    transaction_id?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    order_list_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    order_list_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    order_list_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    order_list_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
  }

  export type CategoriesCreateNestedManyWithoutShopInput = {
    create?: XOR<CategoriesCreateWithoutShopInput, CategoriesUncheckedCreateWithoutShopInput> | CategoriesCreateWithoutShopInput[] | CategoriesUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutShopInput | CategoriesCreateOrConnectWithoutShopInput[]
    createMany?: CategoriesCreateManyShopInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type ItemsCreateNestedManyWithoutShopInput = {
    create?: XOR<ItemsCreateWithoutShopInput, ItemsUncheckedCreateWithoutShopInput> | ItemsCreateWithoutShopInput[] | ItemsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutShopInput | ItemsCreateOrConnectWithoutShopInput[]
    createMany?: ItemsCreateManyShopInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type CategoriesUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<CategoriesCreateWithoutShopInput, CategoriesUncheckedCreateWithoutShopInput> | CategoriesCreateWithoutShopInput[] | CategoriesUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutShopInput | CategoriesCreateOrConnectWithoutShopInput[]
    createMany?: CategoriesCreateManyShopInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type ItemsUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ItemsCreateWithoutShopInput, ItemsUncheckedCreateWithoutShopInput> | ItemsCreateWithoutShopInput[] | ItemsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutShopInput | ItemsCreateOrConnectWithoutShopInput[]
    createMany?: ItemsCreateManyShopInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoriesUpdateManyWithoutShopNestedInput = {
    create?: XOR<CategoriesCreateWithoutShopInput, CategoriesUncheckedCreateWithoutShopInput> | CategoriesCreateWithoutShopInput[] | CategoriesUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutShopInput | CategoriesCreateOrConnectWithoutShopInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutShopInput | CategoriesUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CategoriesCreateManyShopInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutShopInput | CategoriesUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutShopInput | CategoriesUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type ItemsUpdateManyWithoutShopNestedInput = {
    create?: XOR<ItemsCreateWithoutShopInput, ItemsUncheckedCreateWithoutShopInput> | ItemsCreateWithoutShopInput[] | ItemsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutShopInput | ItemsCreateOrConnectWithoutShopInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutShopInput | ItemsUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ItemsCreateManyShopInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutShopInput | ItemsUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutShopInput | ItemsUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriesUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<CategoriesCreateWithoutShopInput, CategoriesUncheckedCreateWithoutShopInput> | CategoriesCreateWithoutShopInput[] | CategoriesUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutShopInput | CategoriesCreateOrConnectWithoutShopInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutShopInput | CategoriesUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CategoriesCreateManyShopInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutShopInput | CategoriesUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutShopInput | CategoriesUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type ItemsUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ItemsCreateWithoutShopInput, ItemsUncheckedCreateWithoutShopInput> | ItemsCreateWithoutShopInput[] | ItemsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutShopInput | ItemsCreateOrConnectWithoutShopInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutShopInput | ItemsUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ItemsCreateManyShopInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutShopInput | ItemsUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutShopInput | ItemsUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type OrderListCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderListCreateWithoutUserInput, OrderListUncheckedCreateWithoutUserInput> | OrderListCreateWithoutUserInput[] | OrderListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderListCreateOrConnectWithoutUserInput | OrderListCreateOrConnectWithoutUserInput[]
    createMany?: OrderListCreateManyUserInputEnvelope
    connect?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type OrderListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderListCreateWithoutUserInput, OrderListUncheckedCreateWithoutUserInput> | OrderListCreateWithoutUserInput[] | OrderListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderListCreateOrConnectWithoutUserInput | OrderListCreateOrConnectWithoutUserInput[]
    createMany?: OrderListCreateManyUserInputEnvelope
    connect?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGendersFieldUpdateOperationsInput = {
    set?: $Enums.Genders
  }

  export type EnumUserTypesFieldUpdateOperationsInput = {
    set?: $Enums.UserTypes
  }

  export type OrderListUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderListCreateWithoutUserInput, OrderListUncheckedCreateWithoutUserInput> | OrderListCreateWithoutUserInput[] | OrderListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderListCreateOrConnectWithoutUserInput | OrderListCreateOrConnectWithoutUserInput[]
    upsert?: OrderListUpsertWithWhereUniqueWithoutUserInput | OrderListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderListCreateManyUserInputEnvelope
    set?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
    disconnect?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
    delete?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
    connect?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
    update?: OrderListUpdateWithWhereUniqueWithoutUserInput | OrderListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderListUpdateManyWithWhereWithoutUserInput | OrderListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderListScalarWhereInput | OrderListScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type OrderListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderListCreateWithoutUserInput, OrderListUncheckedCreateWithoutUserInput> | OrderListCreateWithoutUserInput[] | OrderListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderListCreateOrConnectWithoutUserInput | OrderListCreateOrConnectWithoutUserInput[]
    upsert?: OrderListUpsertWithWhereUniqueWithoutUserInput | OrderListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderListCreateManyUserInputEnvelope
    set?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
    disconnect?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
    delete?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
    connect?: OrderListWhereUniqueInput | OrderListWhereUniqueInput[]
    update?: OrderListUpdateWithWhereUniqueWithoutUserInput | OrderListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderListUpdateManyWithWhereWithoutUserInput | OrderListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderListScalarWhereInput | OrderListScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CategoriesCreateNestedManyWithoutTypeInput = {
    create?: XOR<CategoriesCreateWithoutTypeInput, CategoriesUncheckedCreateWithoutTypeInput> | CategoriesCreateWithoutTypeInput[] | CategoriesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutTypeInput | CategoriesCreateOrConnectWithoutTypeInput[]
    createMany?: CategoriesCreateManyTypeInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type CategoriesUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<CategoriesCreateWithoutTypeInput, CategoriesUncheckedCreateWithoutTypeInput> | CategoriesCreateWithoutTypeInput[] | CategoriesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutTypeInput | CategoriesCreateOrConnectWithoutTypeInput[]
    createMany?: CategoriesCreateManyTypeInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type CategoriesUpdateManyWithoutTypeNestedInput = {
    create?: XOR<CategoriesCreateWithoutTypeInput, CategoriesUncheckedCreateWithoutTypeInput> | CategoriesCreateWithoutTypeInput[] | CategoriesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutTypeInput | CategoriesCreateOrConnectWithoutTypeInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutTypeInput | CategoriesUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: CategoriesCreateManyTypeInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutTypeInput | CategoriesUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutTypeInput | CategoriesUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type CategoriesUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<CategoriesCreateWithoutTypeInput, CategoriesUncheckedCreateWithoutTypeInput> | CategoriesCreateWithoutTypeInput[] | CategoriesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutTypeInput | CategoriesCreateOrConnectWithoutTypeInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutTypeInput | CategoriesUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: CategoriesCreateManyTypeInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutTypeInput | CategoriesUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutTypeInput | CategoriesUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ShopCreateWithoutCategoriesInput, ShopUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutCategoriesInput
    connect?: ShopWhereUniqueInput
  }

  export type TypesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TypesCreateWithoutCategoriesInput, TypesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TypesCreateOrConnectWithoutCategoriesInput
    connect?: TypesWhereUniqueInput
  }

  export type ItemsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ItemsCreateWithoutCategoryInput, ItemsUncheckedCreateWithoutCategoryInput> | ItemsCreateWithoutCategoryInput[] | ItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutCategoryInput | ItemsCreateOrConnectWithoutCategoryInput[]
    createMany?: ItemsCreateManyCategoryInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type ItemsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ItemsCreateWithoutCategoryInput, ItemsUncheckedCreateWithoutCategoryInput> | ItemsCreateWithoutCategoryInput[] | ItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutCategoryInput | ItemsCreateOrConnectWithoutCategoryInput[]
    createMany?: ItemsCreateManyCategoryInputEnvelope
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
  }

  export type ShopUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ShopCreateWithoutCategoriesInput, ShopUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutCategoriesInput
    upsert?: ShopUpsertWithoutCategoriesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutCategoriesInput, ShopUpdateWithoutCategoriesInput>, ShopUncheckedUpdateWithoutCategoriesInput>
  }

  export type TypesUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TypesCreateWithoutCategoriesInput, TypesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TypesCreateOrConnectWithoutCategoriesInput
    upsert?: TypesUpsertWithoutCategoriesInput
    connect?: TypesWhereUniqueInput
    update?: XOR<XOR<TypesUpdateToOneWithWhereWithoutCategoriesInput, TypesUpdateWithoutCategoriesInput>, TypesUncheckedUpdateWithoutCategoriesInput>
  }

  export type ItemsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ItemsCreateWithoutCategoryInput, ItemsUncheckedCreateWithoutCategoryInput> | ItemsCreateWithoutCategoryInput[] | ItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutCategoryInput | ItemsCreateOrConnectWithoutCategoryInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutCategoryInput | ItemsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ItemsCreateManyCategoryInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutCategoryInput | ItemsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutCategoryInput | ItemsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type ItemsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ItemsCreateWithoutCategoryInput, ItemsUncheckedCreateWithoutCategoryInput> | ItemsCreateWithoutCategoryInput[] | ItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemsCreateOrConnectWithoutCategoryInput | ItemsCreateOrConnectWithoutCategoryInput[]
    upsert?: ItemsUpsertWithWhereUniqueWithoutCategoryInput | ItemsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ItemsCreateManyCategoryInputEnvelope
    set?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    disconnect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    delete?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    connect?: ItemsWhereUniqueInput | ItemsWhereUniqueInput[]
    update?: ItemsUpdateWithWhereUniqueWithoutCategoryInput | ItemsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ItemsUpdateManyWithWhereWithoutCategoryInput | ItemsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutItemsInput = {
    create?: XOR<CategoriesCreateWithoutItemsInput, CategoriesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutItemsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutItemsInput = {
    create?: XOR<ShopCreateWithoutItemsInput, ShopUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutItemsInput
    connect?: ShopWhereUniqueInput
  }

  export type ListItemsCreateNestedManyWithoutItemInput = {
    create?: XOR<ListItemsCreateWithoutItemInput, ListItemsUncheckedCreateWithoutItemInput> | ListItemsCreateWithoutItemInput[] | ListItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ListItemsCreateOrConnectWithoutItemInput | ListItemsCreateOrConnectWithoutItemInput[]
    createMany?: ListItemsCreateManyItemInputEnvelope
    connect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
  }

  export type ListItemsUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ListItemsCreateWithoutItemInput, ListItemsUncheckedCreateWithoutItemInput> | ListItemsCreateWithoutItemInput[] | ListItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ListItemsCreateOrConnectWithoutItemInput | ListItemsCreateOrConnectWithoutItemInput[]
    createMany?: ListItemsCreateManyItemInputEnvelope
    connect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CategoriesCreateWithoutItemsInput, CategoriesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutItemsInput
    upsert?: CategoriesUpsertWithoutItemsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutItemsInput, CategoriesUpdateWithoutItemsInput>, CategoriesUncheckedUpdateWithoutItemsInput>
  }

  export type ShopUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ShopCreateWithoutItemsInput, ShopUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutItemsInput
    upsert?: ShopUpsertWithoutItemsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutItemsInput, ShopUpdateWithoutItemsInput>, ShopUncheckedUpdateWithoutItemsInput>
  }

  export type ListItemsUpdateManyWithoutItemNestedInput = {
    create?: XOR<ListItemsCreateWithoutItemInput, ListItemsUncheckedCreateWithoutItemInput> | ListItemsCreateWithoutItemInput[] | ListItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ListItemsCreateOrConnectWithoutItemInput | ListItemsCreateOrConnectWithoutItemInput[]
    upsert?: ListItemsUpsertWithWhereUniqueWithoutItemInput | ListItemsUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ListItemsCreateManyItemInputEnvelope
    set?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    disconnect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    delete?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    connect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    update?: ListItemsUpdateWithWhereUniqueWithoutItemInput | ListItemsUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ListItemsUpdateManyWithWhereWithoutItemInput | ListItemsUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ListItemsScalarWhereInput | ListItemsScalarWhereInput[]
  }

  export type ListItemsUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ListItemsCreateWithoutItemInput, ListItemsUncheckedCreateWithoutItemInput> | ListItemsCreateWithoutItemInput[] | ListItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ListItemsCreateOrConnectWithoutItemInput | ListItemsCreateOrConnectWithoutItemInput[]
    upsert?: ListItemsUpsertWithWhereUniqueWithoutItemInput | ListItemsUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ListItemsCreateManyItemInputEnvelope
    set?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    disconnect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    delete?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    connect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    update?: ListItemsUpdateWithWhereUniqueWithoutItemInput | ListItemsUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ListItemsUpdateManyWithWhereWithoutItemInput | ListItemsUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ListItemsScalarWhereInput | ListItemsScalarWhereInput[]
  }

  export type ListItemsCreateNestedManyWithoutOrder_listInput = {
    create?: XOR<ListItemsCreateWithoutOrder_listInput, ListItemsUncheckedCreateWithoutOrder_listInput> | ListItemsCreateWithoutOrder_listInput[] | ListItemsUncheckedCreateWithoutOrder_listInput[]
    connectOrCreate?: ListItemsCreateOrConnectWithoutOrder_listInput | ListItemsCreateOrConnectWithoutOrder_listInput[]
    createMany?: ListItemsCreateManyOrder_listInputEnvelope
    connect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutOrderListInput = {
    create?: XOR<UsersCreateWithoutOrderListInput, UsersUncheckedCreateWithoutOrderListInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrderListInput
    connect?: UsersWhereUniqueInput
  }

  export type OrdersCreateNestedManyWithoutOrder_listInput = {
    create?: XOR<OrdersCreateWithoutOrder_listInput, OrdersUncheckedCreateWithoutOrder_listInput> | OrdersCreateWithoutOrder_listInput[] | OrdersUncheckedCreateWithoutOrder_listInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_listInput | OrdersCreateOrConnectWithoutOrder_listInput[]
    createMany?: OrdersCreateManyOrder_listInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ListItemsUncheckedCreateNestedManyWithoutOrder_listInput = {
    create?: XOR<ListItemsCreateWithoutOrder_listInput, ListItemsUncheckedCreateWithoutOrder_listInput> | ListItemsCreateWithoutOrder_listInput[] | ListItemsUncheckedCreateWithoutOrder_listInput[]
    connectOrCreate?: ListItemsCreateOrConnectWithoutOrder_listInput | ListItemsCreateOrConnectWithoutOrder_listInput[]
    createMany?: ListItemsCreateManyOrder_listInputEnvelope
    connect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutOrder_listInput = {
    create?: XOR<OrdersCreateWithoutOrder_listInput, OrdersUncheckedCreateWithoutOrder_listInput> | OrdersCreateWithoutOrder_listInput[] | OrdersUncheckedCreateWithoutOrder_listInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_listInput | OrdersCreateOrConnectWithoutOrder_listInput[]
    createMany?: OrdersCreateManyOrder_listInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type ListItemsUpdateManyWithoutOrder_listNestedInput = {
    create?: XOR<ListItemsCreateWithoutOrder_listInput, ListItemsUncheckedCreateWithoutOrder_listInput> | ListItemsCreateWithoutOrder_listInput[] | ListItemsUncheckedCreateWithoutOrder_listInput[]
    connectOrCreate?: ListItemsCreateOrConnectWithoutOrder_listInput | ListItemsCreateOrConnectWithoutOrder_listInput[]
    upsert?: ListItemsUpsertWithWhereUniqueWithoutOrder_listInput | ListItemsUpsertWithWhereUniqueWithoutOrder_listInput[]
    createMany?: ListItemsCreateManyOrder_listInputEnvelope
    set?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    disconnect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    delete?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    connect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    update?: ListItemsUpdateWithWhereUniqueWithoutOrder_listInput | ListItemsUpdateWithWhereUniqueWithoutOrder_listInput[]
    updateMany?: ListItemsUpdateManyWithWhereWithoutOrder_listInput | ListItemsUpdateManyWithWhereWithoutOrder_listInput[]
    deleteMany?: ListItemsScalarWhereInput | ListItemsScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutOrderListNestedInput = {
    create?: XOR<UsersCreateWithoutOrderListInput, UsersUncheckedCreateWithoutOrderListInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrderListInput
    upsert?: UsersUpsertWithoutOrderListInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrderListInput, UsersUpdateWithoutOrderListInput>, UsersUncheckedUpdateWithoutOrderListInput>
  }

  export type OrdersUpdateManyWithoutOrder_listNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_listInput, OrdersUncheckedCreateWithoutOrder_listInput> | OrdersCreateWithoutOrder_listInput[] | OrdersUncheckedCreateWithoutOrder_listInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_listInput | OrdersCreateOrConnectWithoutOrder_listInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutOrder_listInput | OrdersUpsertWithWhereUniqueWithoutOrder_listInput[]
    createMany?: OrdersCreateManyOrder_listInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutOrder_listInput | OrdersUpdateWithWhereUniqueWithoutOrder_listInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutOrder_listInput | OrdersUpdateManyWithWhereWithoutOrder_listInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ListItemsUncheckedUpdateManyWithoutOrder_listNestedInput = {
    create?: XOR<ListItemsCreateWithoutOrder_listInput, ListItemsUncheckedCreateWithoutOrder_listInput> | ListItemsCreateWithoutOrder_listInput[] | ListItemsUncheckedCreateWithoutOrder_listInput[]
    connectOrCreate?: ListItemsCreateOrConnectWithoutOrder_listInput | ListItemsCreateOrConnectWithoutOrder_listInput[]
    upsert?: ListItemsUpsertWithWhereUniqueWithoutOrder_listInput | ListItemsUpsertWithWhereUniqueWithoutOrder_listInput[]
    createMany?: ListItemsCreateManyOrder_listInputEnvelope
    set?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    disconnect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    delete?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    connect?: ListItemsWhereUniqueInput | ListItemsWhereUniqueInput[]
    update?: ListItemsUpdateWithWhereUniqueWithoutOrder_listInput | ListItemsUpdateWithWhereUniqueWithoutOrder_listInput[]
    updateMany?: ListItemsUpdateManyWithWhereWithoutOrder_listInput | ListItemsUpdateManyWithWhereWithoutOrder_listInput[]
    deleteMany?: ListItemsScalarWhereInput | ListItemsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutOrder_listNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_listInput, OrdersUncheckedCreateWithoutOrder_listInput> | OrdersCreateWithoutOrder_listInput[] | OrdersUncheckedCreateWithoutOrder_listInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_listInput | OrdersCreateOrConnectWithoutOrder_listInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutOrder_listInput | OrdersUpsertWithWhereUniqueWithoutOrder_listInput[]
    createMany?: OrdersCreateManyOrder_listInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutOrder_listInput | OrdersUpdateWithWhereUniqueWithoutOrder_listInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutOrder_listInput | OrdersUpdateManyWithWhereWithoutOrder_listInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ItemsCreateNestedOneWithoutListItemsInput = {
    create?: XOR<ItemsCreateWithoutListItemsInput, ItemsUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutListItemsInput
    connect?: ItemsWhereUniqueInput
  }

  export type OrderListCreateNestedOneWithoutListItemsInput = {
    create?: XOR<OrderListCreateWithoutListItemsInput, OrderListUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: OrderListCreateOrConnectWithoutListItemsInput
    connect?: OrderListWhereUniqueInput
  }

  export type ItemsUpdateOneRequiredWithoutListItemsNestedInput = {
    create?: XOR<ItemsCreateWithoutListItemsInput, ItemsUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutListItemsInput
    upsert?: ItemsUpsertWithoutListItemsInput
    connect?: ItemsWhereUniqueInput
    update?: XOR<XOR<ItemsUpdateToOneWithWhereWithoutListItemsInput, ItemsUpdateWithoutListItemsInput>, ItemsUncheckedUpdateWithoutListItemsInput>
  }

  export type OrderListUpdateOneRequiredWithoutListItemsNestedInput = {
    create?: XOR<OrderListCreateWithoutListItemsInput, OrderListUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: OrderListCreateOrConnectWithoutListItemsInput
    upsert?: OrderListUpsertWithoutListItemsInput
    connect?: OrderListWhereUniqueInput
    update?: XOR<XOR<OrderListUpdateToOneWithWhereWithoutListItemsInput, OrderListUpdateWithoutListItemsInput>, OrderListUncheckedUpdateWithoutListItemsInput>
  }

  export type OrdersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UsersCreateWithoutPaymentInput, UsersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPaymentInput
    connect?: UsersWhereUniqueInput
  }

  export type OrdersUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    upsert?: OrdersUpsertWithoutPaymentInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentInput, OrdersUpdateWithoutPaymentInput>, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type UsersUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<UsersCreateWithoutPaymentInput, UsersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPaymentInput
    upsert?: UsersUpsertWithoutPaymentInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPaymentInput, UsersUpdateWithoutPaymentInput>, UsersUncheckedUpdateWithoutPaymentInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderListCreateNestedOneWithoutOrdersInput = {
    create?: XOR<OrderListCreateWithoutOrdersInput, OrderListUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderListCreateOrConnectWithoutOrdersInput
    connect?: OrderListWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type OrderListUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<OrderListCreateWithoutOrdersInput, OrderListUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderListCreateOrConnectWithoutOrdersInput
    upsert?: OrderListUpsertWithoutOrdersInput
    connect?: OrderListWhereUniqueInput
    update?: XOR<XOR<OrderListUpdateToOneWithWhereWithoutOrdersInput, OrderListUpdateWithoutOrdersInput>, OrderListUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGendersFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel>
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    not?: NestedEnumGendersFilter<$PrismaModel> | $Enums.Genders
  }

  export type NestedEnumUserTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypes | EnumUserTypesFieldRefInput<$PrismaModel>
    in?: $Enums.UserTypes[] | ListEnumUserTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTypes[] | ListEnumUserTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypesFilter<$PrismaModel> | $Enums.UserTypes
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGendersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel>
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    not?: NestedEnumGendersWithAggregatesFilter<$PrismaModel> | $Enums.Genders
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGendersFilter<$PrismaModel>
    _max?: NestedEnumGendersFilter<$PrismaModel>
  }

  export type NestedEnumUserTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTypes | EnumUserTypesFieldRefInput<$PrismaModel>
    in?: $Enums.UserTypes[] | ListEnumUserTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTypes[] | ListEnumUserTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypesWithAggregatesFilter<$PrismaModel> | $Enums.UserTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypesFilter<$PrismaModel>
    _max?: NestedEnumUserTypesFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesCreateWithoutShopInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    type: TypesCreateNestedOneWithoutCategoriesInput
    Items?: ItemsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutShopInput = {
    id?: number
    name: string
    type_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    Items?: ItemsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutShopInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutShopInput, CategoriesUncheckedCreateWithoutShopInput>
  }

  export type CategoriesCreateManyShopInputEnvelope = {
    data: CategoriesCreateManyShopInput | CategoriesCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ItemsCreateWithoutShopInput = {
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    category: CategoriesCreateNestedOneWithoutItemsInput
    ListItems?: ListItemsCreateNestedManyWithoutItemInput
  }

  export type ItemsUncheckedCreateWithoutShopInput = {
    id?: number
    name: string
    description: string
    price: number
    category_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    ListItems?: ListItemsUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemsCreateOrConnectWithoutShopInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutShopInput, ItemsUncheckedCreateWithoutShopInput>
  }

  export type ItemsCreateManyShopInputEnvelope = {
    data: ItemsCreateManyShopInput | ItemsCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithWhereUniqueWithoutShopInput = {
    where: CategoriesWhereUniqueInput
    update: XOR<CategoriesUpdateWithoutShopInput, CategoriesUncheckedUpdateWithoutShopInput>
    create: XOR<CategoriesCreateWithoutShopInput, CategoriesUncheckedCreateWithoutShopInput>
  }

  export type CategoriesUpdateWithWhereUniqueWithoutShopInput = {
    where: CategoriesWhereUniqueInput
    data: XOR<CategoriesUpdateWithoutShopInput, CategoriesUncheckedUpdateWithoutShopInput>
  }

  export type CategoriesUpdateManyWithWhereWithoutShopInput = {
    where: CategoriesScalarWhereInput
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyWithoutShopInput>
  }

  export type CategoriesScalarWhereInput = {
    AND?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    OR?: CategoriesScalarWhereInput[]
    NOT?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    type_id?: IntFilter<"Categories"> | number
    shop_id?: IntFilter<"Categories"> | number
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    photo?: StringNullableFilter<"Categories"> | string | null
  }

  export type ItemsUpsertWithWhereUniqueWithoutShopInput = {
    where: ItemsWhereUniqueInput
    update: XOR<ItemsUpdateWithoutShopInput, ItemsUncheckedUpdateWithoutShopInput>
    create: XOR<ItemsCreateWithoutShopInput, ItemsUncheckedCreateWithoutShopInput>
  }

  export type ItemsUpdateWithWhereUniqueWithoutShopInput = {
    where: ItemsWhereUniqueInput
    data: XOR<ItemsUpdateWithoutShopInput, ItemsUncheckedUpdateWithoutShopInput>
  }

  export type ItemsUpdateManyWithWhereWithoutShopInput = {
    where: ItemsScalarWhereInput
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyWithoutShopInput>
  }

  export type ItemsScalarWhereInput = {
    AND?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
    OR?: ItemsScalarWhereInput[]
    NOT?: ItemsScalarWhereInput | ItemsScalarWhereInput[]
    id?: IntFilter<"Items"> | number
    name?: StringFilter<"Items"> | string
    description?: StringFilter<"Items"> | string
    price?: IntFilter<"Items"> | number
    category_id?: IntFilter<"Items"> | number
    shop_id?: IntFilter<"Items"> | number
    createdAt?: DateTimeFilter<"Items"> | Date | string
    updatedAt?: DateTimeFilter<"Items"> | Date | string
    photo?: StringNullableFilter<"Items"> | string | null
  }

  export type OrderListCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
    ListItems?: ListItemsCreateNestedManyWithoutOrder_listInput
    Orders?: OrdersCreateNestedManyWithoutOrder_listInput
  }

  export type OrderListUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
    ListItems?: ListItemsUncheckedCreateNestedManyWithoutOrder_listInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutOrder_listInput
  }

  export type OrderListCreateOrConnectWithoutUserInput = {
    where: OrderListWhereUniqueInput
    create: XOR<OrderListCreateWithoutUserInput, OrderListUncheckedCreateWithoutUserInput>
  }

  export type OrderListCreateManyUserInputEnvelope = {
    data: OrderListCreateManyUserInput | OrderListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    order_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
    order_list: OrderListCreateNestedOneWithoutOrdersInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: number
    order_id: string
    order_list_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    order_id?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderListUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderListWhereUniqueInput
    update: XOR<OrderListUpdateWithoutUserInput, OrderListUncheckedUpdateWithoutUserInput>
    create: XOR<OrderListCreateWithoutUserInput, OrderListUncheckedCreateWithoutUserInput>
  }

  export type OrderListUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderListWhereUniqueInput
    data: XOR<OrderListUpdateWithoutUserInput, OrderListUncheckedUpdateWithoutUserInput>
  }

  export type OrderListUpdateManyWithWhereWithoutUserInput = {
    where: OrderListScalarWhereInput
    data: XOR<OrderListUpdateManyMutationInput, OrderListUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderListScalarWhereInput = {
    AND?: OrderListScalarWhereInput | OrderListScalarWhereInput[]
    OR?: OrderListScalarWhereInput[]
    NOT?: OrderListScalarWhereInput | OrderListScalarWhereInput[]
    id?: IntFilter<"OrderList"> | number
    user_id?: IntFilter<"OrderList"> | number
    createdAt?: DateTimeFilter<"OrderList"> | Date | string
    updatedAt?: DateTimeFilter<"OrderList"> | Date | string
    status?: EnumOrderStatusFilter<"OrderList"> | $Enums.OrderStatus
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    order_id?: StringFilter<"Orders"> | string
    order_list_id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    status?: StringFilter<"Orders"> | string
    total_price?: IntFilter<"Orders"> | number
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    payment_method?: StringNullableFilter<"Payment"> | string | null
    transaction_id?: StringNullableFilter<"Payment"> | string | null
    order_id?: StringNullableFilter<"Payment"> | string | null
    status?: StringFilter<"Payment"> | string
    userId?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type CategoriesCreateWithoutTypeInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    shop: ShopCreateNestedOneWithoutCategoriesInput
    Items?: ItemsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    Items?: ItemsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutTypeInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutTypeInput, CategoriesUncheckedCreateWithoutTypeInput>
  }

  export type CategoriesCreateManyTypeInputEnvelope = {
    data: CategoriesCreateManyTypeInput | CategoriesCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithWhereUniqueWithoutTypeInput = {
    where: CategoriesWhereUniqueInput
    update: XOR<CategoriesUpdateWithoutTypeInput, CategoriesUncheckedUpdateWithoutTypeInput>
    create: XOR<CategoriesCreateWithoutTypeInput, CategoriesUncheckedCreateWithoutTypeInput>
  }

  export type CategoriesUpdateWithWhereUniqueWithoutTypeInput = {
    where: CategoriesWhereUniqueInput
    data: XOR<CategoriesUpdateWithoutTypeInput, CategoriesUncheckedUpdateWithoutTypeInput>
  }

  export type CategoriesUpdateManyWithWhereWithoutTypeInput = {
    where: CategoriesScalarWhereInput
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyWithoutTypeInput>
  }

  export type ShopCreateWithoutCategoriesInput = {
    name: string
    address: string
    email: string
    phone: string
    owner: string
    banner: string
    logo: string
    about_shop: string
    shop_mission: string
    social: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Items?: ItemsCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    address: string
    email: string
    phone: string
    owner: string
    banner: string
    logo: string
    about_shop: string
    shop_mission: string
    social: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Items?: ItemsUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutCategoriesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutCategoriesInput, ShopUncheckedCreateWithoutCategoriesInput>
  }

  export type TypesCreateWithoutCategoriesInput = {
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypesCreateOrConnectWithoutCategoriesInput = {
    where: TypesWhereUniqueInput
    create: XOR<TypesCreateWithoutCategoriesInput, TypesUncheckedCreateWithoutCategoriesInput>
  }

  export type ItemsCreateWithoutCategoryInput = {
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    shop: ShopCreateNestedOneWithoutItemsInput
    ListItems?: ListItemsCreateNestedManyWithoutItemInput
  }

  export type ItemsUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    price: number
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    ListItems?: ListItemsUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemsCreateOrConnectWithoutCategoryInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutCategoryInput, ItemsUncheckedCreateWithoutCategoryInput>
  }

  export type ItemsCreateManyCategoryInputEnvelope = {
    data: ItemsCreateManyCategoryInput | ItemsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutCategoriesInput = {
    update: XOR<ShopUpdateWithoutCategoriesInput, ShopUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ShopCreateWithoutCategoriesInput, ShopUncheckedCreateWithoutCategoriesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutCategoriesInput, ShopUncheckedUpdateWithoutCategoriesInput>
  }

  export type ShopUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    about_shop?: StringFieldUpdateOperationsInput | string
    shop_mission?: StringFieldUpdateOperationsInput | string
    social?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Items?: ItemsUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    about_shop?: StringFieldUpdateOperationsInput | string
    shop_mission?: StringFieldUpdateOperationsInput | string
    social?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Items?: ItemsUncheckedUpdateManyWithoutShopNestedInput
  }

  export type TypesUpsertWithoutCategoriesInput = {
    update: XOR<TypesUpdateWithoutCategoriesInput, TypesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TypesCreateWithoutCategoriesInput, TypesUncheckedCreateWithoutCategoriesInput>
    where?: TypesWhereInput
  }

  export type TypesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TypesWhereInput
    data: XOR<TypesUpdateWithoutCategoriesInput, TypesUncheckedUpdateWithoutCategoriesInput>
  }

  export type TypesUpdateWithoutCategoriesInput = {
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ItemsWhereUniqueInput
    update: XOR<ItemsUpdateWithoutCategoryInput, ItemsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ItemsCreateWithoutCategoryInput, ItemsUncheckedCreateWithoutCategoryInput>
  }

  export type ItemsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ItemsWhereUniqueInput
    data: XOR<ItemsUpdateWithoutCategoryInput, ItemsUncheckedUpdateWithoutCategoryInput>
  }

  export type ItemsUpdateManyWithWhereWithoutCategoryInput = {
    where: ItemsScalarWhereInput
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoriesCreateWithoutItemsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    shop: ShopCreateNestedOneWithoutCategoriesInput
    type: TypesCreateNestedOneWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    type_id: number
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
  }

  export type CategoriesCreateOrConnectWithoutItemsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutItemsInput, CategoriesUncheckedCreateWithoutItemsInput>
  }

  export type ShopCreateWithoutItemsInput = {
    name: string
    address: string
    email: string
    phone: string
    owner: string
    banner: string
    logo: string
    about_shop: string
    shop_mission: string
    social: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Categories?: CategoriesCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    address: string
    email: string
    phone: string
    owner: string
    banner: string
    logo: string
    about_shop: string
    shop_mission: string
    social: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Categories?: CategoriesUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutItemsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutItemsInput, ShopUncheckedCreateWithoutItemsInput>
  }

  export type ListItemsCreateWithoutItemInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
    order_list: OrderListCreateNestedOneWithoutListItemsInput
  }

  export type ListItemsUncheckedCreateWithoutItemInput = {
    id?: number
    order_list_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
  }

  export type ListItemsCreateOrConnectWithoutItemInput = {
    where: ListItemsWhereUniqueInput
    create: XOR<ListItemsCreateWithoutItemInput, ListItemsUncheckedCreateWithoutItemInput>
  }

  export type ListItemsCreateManyItemInputEnvelope = {
    data: ListItemsCreateManyItemInput | ListItemsCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutItemsInput = {
    update: XOR<CategoriesUpdateWithoutItemsInput, CategoriesUncheckedUpdateWithoutItemsInput>
    create: XOR<CategoriesCreateWithoutItemsInput, CategoriesUncheckedCreateWithoutItemsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutItemsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutItemsInput, CategoriesUncheckedUpdateWithoutItemsInput>
  }

  export type CategoriesUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutCategoriesNestedInput
    type?: TypesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type_id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopUpsertWithoutItemsInput = {
    update: XOR<ShopUpdateWithoutItemsInput, ShopUncheckedUpdateWithoutItemsInput>
    create: XOR<ShopCreateWithoutItemsInput, ShopUncheckedCreateWithoutItemsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutItemsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutItemsInput, ShopUncheckedUpdateWithoutItemsInput>
  }

  export type ShopUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    about_shop?: StringFieldUpdateOperationsInput | string
    shop_mission?: StringFieldUpdateOperationsInput | string
    social?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Categories?: CategoriesUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    about_shop?: StringFieldUpdateOperationsInput | string
    shop_mission?: StringFieldUpdateOperationsInput | string
    social?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Categories?: CategoriesUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ListItemsUpsertWithWhereUniqueWithoutItemInput = {
    where: ListItemsWhereUniqueInput
    update: XOR<ListItemsUpdateWithoutItemInput, ListItemsUncheckedUpdateWithoutItemInput>
    create: XOR<ListItemsCreateWithoutItemInput, ListItemsUncheckedCreateWithoutItemInput>
  }

  export type ListItemsUpdateWithWhereUniqueWithoutItemInput = {
    where: ListItemsWhereUniqueInput
    data: XOR<ListItemsUpdateWithoutItemInput, ListItemsUncheckedUpdateWithoutItemInput>
  }

  export type ListItemsUpdateManyWithWhereWithoutItemInput = {
    where: ListItemsScalarWhereInput
    data: XOR<ListItemsUpdateManyMutationInput, ListItemsUncheckedUpdateManyWithoutItemInput>
  }

  export type ListItemsScalarWhereInput = {
    AND?: ListItemsScalarWhereInput | ListItemsScalarWhereInput[]
    OR?: ListItemsScalarWhereInput[]
    NOT?: ListItemsScalarWhereInput | ListItemsScalarWhereInput[]
    id?: IntFilter<"ListItems"> | number
    order_list_id?: IntFilter<"ListItems"> | number
    item_id?: IntFilter<"ListItems"> | number
    createdAt?: DateTimeFilter<"ListItems"> | Date | string
    updatedAt?: DateTimeFilter<"ListItems"> | Date | string
    quantity?: IntFilter<"ListItems"> | number
  }

  export type ListItemsCreateWithoutOrder_listInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
    item: ItemsCreateNestedOneWithoutListItemsInput
  }

  export type ListItemsUncheckedCreateWithoutOrder_listInput = {
    id?: number
    item_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
  }

  export type ListItemsCreateOrConnectWithoutOrder_listInput = {
    where: ListItemsWhereUniqueInput
    create: XOR<ListItemsCreateWithoutOrder_listInput, ListItemsUncheckedCreateWithoutOrder_listInput>
  }

  export type ListItemsCreateManyOrder_listInputEnvelope = {
    data: ListItemsCreateManyOrder_listInput | ListItemsCreateManyOrder_listInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutOrderListInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOrderListInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOrderListInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrderListInput, UsersUncheckedCreateWithoutOrderListInput>
  }

  export type OrdersCreateWithoutOrder_listInput = {
    order_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
    user: UsersCreateNestedOneWithoutOrdersInput
    Payment?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutOrder_listInput = {
    id?: number
    order_id: string
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
    Payment?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrder_listInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_listInput, OrdersUncheckedCreateWithoutOrder_listInput>
  }

  export type OrdersCreateManyOrder_listInputEnvelope = {
    data: OrdersCreateManyOrder_listInput | OrdersCreateManyOrder_listInput[]
    skipDuplicates?: boolean
  }

  export type ListItemsUpsertWithWhereUniqueWithoutOrder_listInput = {
    where: ListItemsWhereUniqueInput
    update: XOR<ListItemsUpdateWithoutOrder_listInput, ListItemsUncheckedUpdateWithoutOrder_listInput>
    create: XOR<ListItemsCreateWithoutOrder_listInput, ListItemsUncheckedCreateWithoutOrder_listInput>
  }

  export type ListItemsUpdateWithWhereUniqueWithoutOrder_listInput = {
    where: ListItemsWhereUniqueInput
    data: XOR<ListItemsUpdateWithoutOrder_listInput, ListItemsUncheckedUpdateWithoutOrder_listInput>
  }

  export type ListItemsUpdateManyWithWhereWithoutOrder_listInput = {
    where: ListItemsScalarWhereInput
    data: XOR<ListItemsUpdateManyMutationInput, ListItemsUncheckedUpdateManyWithoutOrder_listInput>
  }

  export type UsersUpsertWithoutOrderListInput = {
    update: XOR<UsersUpdateWithoutOrderListInput, UsersUncheckedUpdateWithoutOrderListInput>
    create: XOR<UsersCreateWithoutOrderListInput, UsersUncheckedCreateWithoutOrderListInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrderListInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrderListInput, UsersUncheckedUpdateWithoutOrderListInput>
  }

  export type UsersUpdateWithoutOrderListInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrderListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrdersUpsertWithWhereUniqueWithoutOrder_listInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutOrder_listInput, OrdersUncheckedUpdateWithoutOrder_listInput>
    create: XOR<OrdersCreateWithoutOrder_listInput, OrdersUncheckedCreateWithoutOrder_listInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutOrder_listInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutOrder_listInput, OrdersUncheckedUpdateWithoutOrder_listInput>
  }

  export type OrdersUpdateManyWithWhereWithoutOrder_listInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutOrder_listInput>
  }

  export type ItemsCreateWithoutListItemsInput = {
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
    category: CategoriesCreateNestedOneWithoutItemsInput
    shop: ShopCreateNestedOneWithoutItemsInput
  }

  export type ItemsUncheckedCreateWithoutListItemsInput = {
    id?: number
    name: string
    description: string
    price: number
    category_id: number
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
  }

  export type ItemsCreateOrConnectWithoutListItemsInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutListItemsInput, ItemsUncheckedCreateWithoutListItemsInput>
  }

  export type OrderListCreateWithoutListItemsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
    user: UsersCreateNestedOneWithoutOrderListInput
    Orders?: OrdersCreateNestedManyWithoutOrder_listInput
  }

  export type OrderListUncheckedCreateWithoutListItemsInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
    Orders?: OrdersUncheckedCreateNestedManyWithoutOrder_listInput
  }

  export type OrderListCreateOrConnectWithoutListItemsInput = {
    where: OrderListWhereUniqueInput
    create: XOR<OrderListCreateWithoutListItemsInput, OrderListUncheckedCreateWithoutListItemsInput>
  }

  export type ItemsUpsertWithoutListItemsInput = {
    update: XOR<ItemsUpdateWithoutListItemsInput, ItemsUncheckedUpdateWithoutListItemsInput>
    create: XOR<ItemsCreateWithoutListItemsInput, ItemsUncheckedCreateWithoutListItemsInput>
    where?: ItemsWhereInput
  }

  export type ItemsUpdateToOneWithWhereWithoutListItemsInput = {
    where?: ItemsWhereInput
    data: XOR<ItemsUpdateWithoutListItemsInput, ItemsUncheckedUpdateWithoutListItemsInput>
  }

  export type ItemsUpdateWithoutListItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoriesUpdateOneRequiredWithoutItemsNestedInput
    shop?: ShopUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemsUncheckedUpdateWithoutListItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderListUpsertWithoutListItemsInput = {
    update: XOR<OrderListUpdateWithoutListItemsInput, OrderListUncheckedUpdateWithoutListItemsInput>
    create: XOR<OrderListCreateWithoutListItemsInput, OrderListUncheckedCreateWithoutListItemsInput>
    where?: OrderListWhereInput
  }

  export type OrderListUpdateToOneWithWhereWithoutListItemsInput = {
    where?: OrderListWhereInput
    data: XOR<OrderListUpdateWithoutListItemsInput, OrderListUncheckedUpdateWithoutListItemsInput>
  }

  export type OrderListUpdateWithoutListItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    user?: UsersUpdateOneRequiredWithoutOrderListNestedInput
    Orders?: OrdersUpdateManyWithoutOrder_listNestedInput
  }

  export type OrderListUncheckedUpdateWithoutListItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    Orders?: OrdersUncheckedUpdateManyWithoutOrder_listNestedInput
  }

  export type OrdersCreateWithoutPaymentInput = {
    order_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
    order_list: OrderListCreateNestedOneWithoutOrdersInput
    user: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutPaymentInput = {
    id?: number
    order_id: string
    order_list_id: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
  }

  export type OrdersCreateOrConnectWithoutPaymentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
  }

  export type UsersCreateWithoutPaymentInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
    OrderList?: OrderListCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPaymentInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
    OrderList?: OrderListUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPaymentInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPaymentInput, UsersUncheckedCreateWithoutPaymentInput>
  }

  export type OrdersUpsertWithoutPaymentInput = {
    update: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateWithoutPaymentInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    order_list?: OrderListUpdateOneRequiredWithoutOrdersNestedInput
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    order_list_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
  }

  export type UsersUpsertWithoutPaymentInput = {
    update: XOR<UsersUpdateWithoutPaymentInput, UsersUncheckedUpdateWithoutPaymentInput>
    create: XOR<UsersCreateWithoutPaymentInput, UsersUncheckedCreateWithoutPaymentInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPaymentInput, UsersUncheckedUpdateWithoutPaymentInput>
  }

  export type UsersUpdateWithoutPaymentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderList?: OrderListUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderList?: OrderListUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderListCreateWithoutOrdersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
    ListItems?: ListItemsCreateNestedManyWithoutOrder_listInput
    user: UsersCreateNestedOneWithoutOrderListInput
  }

  export type OrderListUncheckedCreateWithoutOrdersInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
    ListItems?: ListItemsUncheckedCreateNestedManyWithoutOrder_listInput
  }

  export type OrderListCreateOrConnectWithoutOrdersInput = {
    where: OrderListWhereUniqueInput
    create: XOR<OrderListCreateWithoutOrdersInput, OrderListUncheckedCreateWithoutOrdersInput>
  }

  export type UsersCreateWithoutOrdersInput = {
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
    OrderList?: OrderListCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    password: string
    address?: string | null
    gender: $Enums.Genders
    type?: $Enums.UserTypes
    about?: string | null
    createdAt?: Date | string
    photo?: string | null
    updatedAt?: Date | string
    OrderList?: OrderListUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentCreateWithoutOrderInput = {
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UsersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: number
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    status: string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentCreateManyOrderInputEnvelope = {
    data: PaymentCreateManyOrderInput | PaymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderListUpsertWithoutOrdersInput = {
    update: XOR<OrderListUpdateWithoutOrdersInput, OrderListUncheckedUpdateWithoutOrdersInput>
    create: XOR<OrderListCreateWithoutOrdersInput, OrderListUncheckedCreateWithoutOrdersInput>
    where?: OrderListWhereInput
  }

  export type OrderListUpdateToOneWithWhereWithoutOrdersInput = {
    where?: OrderListWhereInput
    data: XOR<OrderListUpdateWithoutOrdersInput, OrderListUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderListUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    ListItems?: ListItemsUpdateManyWithoutOrder_listNestedInput
    user?: UsersUpdateOneRequiredWithoutOrderListNestedInput
  }

  export type OrderListUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    ListItems?: ListItemsUncheckedUpdateManyWithoutOrder_listNestedInput
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderList?: OrderListUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    type?: EnumUserTypesFieldUpdateOperationsInput | $Enums.UserTypes
    about?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderList?: OrderListUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type CategoriesCreateManyShopInput = {
    id?: number
    name: string
    type_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
  }

  export type ItemsCreateManyShopInput = {
    id?: number
    name: string
    description: string
    price: number
    category_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
  }

  export type CategoriesUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: TypesUpdateOneRequiredWithoutCategoriesNestedInput
    Items?: ItemsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Items?: ItemsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemsUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoriesUpdateOneRequiredWithoutItemsNestedInput
    ListItems?: ListItemsUpdateManyWithoutItemNestedInput
  }

  export type ItemsUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ListItems?: ListItemsUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemsUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderListCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.OrderStatus
  }

  export type OrdersCreateManyUserInput = {
    id?: number
    order_id: string
    order_list_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
  }

  export type PaymentCreateManyUserInput = {
    id?: number
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    order_id?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderListUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    ListItems?: ListItemsUpdateManyWithoutOrder_listNestedInput
    Orders?: OrdersUpdateManyWithoutOrder_listNestedInput
  }

  export type OrderListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    ListItems?: ListItemsUncheckedUpdateManyWithoutOrder_listNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutOrder_listNestedInput
  }

  export type OrderListUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type OrdersUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    order_list?: OrderListUpdateOneRequiredWithoutOrdersNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    order_list_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    order_list_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateManyTypeInput = {
    id?: number
    name: string
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
  }

  export type CategoriesUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutCategoriesNestedInput
    Items?: ItemsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Items?: ItemsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemsCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
    price: number
    shop_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photo?: string | null
  }

  export type ItemsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutItemsNestedInput
    ListItems?: ListItemsUpdateManyWithoutItemNestedInput
  }

  export type ItemsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    ListItems?: ListItemsUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListItemsCreateManyItemInput = {
    id?: number
    order_list_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
  }

  export type ListItemsUpdateWithoutItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_list?: OrderListUpdateOneRequiredWithoutListItemsNestedInput
  }

  export type ListItemsUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_list_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemsUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_list_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemsCreateManyOrder_listInput = {
    id?: number
    item_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity?: number
  }

  export type OrdersCreateManyOrder_listInput = {
    id?: number
    order_id: string
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status: string
    total_price: number
  }

  export type ListItemsUpdateWithoutOrder_listInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemsUpdateOneRequiredWithoutListItemsNestedInput
  }

  export type ListItemsUncheckedUpdateWithoutOrder_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemsUncheckedUpdateManyWithoutOrder_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutOrder_listInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    Payment?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrder_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    Payment?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutOrder_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyOrderInput = {
    id?: number
    amount: number
    currency?: string
    payment_method?: string | null
    transaction_id?: string | null
    status: string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutOrderInput = {
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}