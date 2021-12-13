import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CustomersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrdersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Customers {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customers, CustomersMetaData>);
  static copyOf(source: Customers, mutator: (draft: MutableModel<Customers, CustomersMetaData>) => MutableModel<Customers, CustomersMetaData> | void): Customers;
}

export declare class Orders {
  readonly id: string;
  readonly customerId: string;
  readonly orderDate?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Orders, OrdersMetaData>);
  static copyOf(source: Orders, mutator: (draft: MutableModel<Orders, OrdersMetaData>) => MutableModel<Orders, OrdersMetaData> | void): Orders;
}