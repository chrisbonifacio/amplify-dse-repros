import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FleetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VehicleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Fleet {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly vehicles?: (Vehicle | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Fleet, FleetMetaData>);
  static copyOf(source: Fleet, mutator: (draft: MutableModel<Fleet, FleetMetaData>) => MutableModel<Fleet, FleetMetaData> | void): Fleet;
}

export declare class Vehicle {
  readonly id: string;
  readonly name: string;
  readonly fleet?: Fleet;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Vehicle, VehicleMetaData>);
  static copyOf(source: Vehicle, mutator: (draft: MutableModel<Vehicle, VehicleMetaData>) => MutableModel<Vehicle, VehicleMetaData> | void): Vehicle;
}