import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly key: string;
  readonly region: string;
  readonly mimeType: string;
  readonly localUri: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class AircraftSpecs {
  readonly passenger?: boolean;
  readonly fuel?: string;
  constructor(init: ModelInit<AircraftSpecs>);
}

type CustomerMetaData = {
  readOnlyFields;
}

type CityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MappedTodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JSONDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FlightMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AircraftMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Customer {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly Mobile: string;
  readonly customer_notes: string;
  readonly admin_notes: string;
  readonly city?: City;
  readonly cities?: string;
  readonly langs?: (string | null)[];
  readonly owner?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly customerCityId?: string;
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

export declare class City {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly zipCode: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<City, CityMetaData>);
  static copyOf(source: City, mutator: (draft: MutableModel<City, CityMetaData>) => MutableModel<City, CityMetaData> | void): City;
}

export declare class MappedTodo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly file?: S3Object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MappedTodo, MappedTodoMetaData>);
  static copyOf(source: MappedTodo, mutator: (draft: MutableModel<MappedTodo, MappedTodoMetaData>) => MutableModel<MappedTodo, MappedTodoMetaData> | void): MappedTodo;
}

export declare class Project {
  readonly id: string;
  readonly name?: string;
  readonly team?: Team;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly projectTeamId?: string;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Team {
  readonly id: string;
  readonly name: string;
  readonly project?: Project;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team, TeamMetaData>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

export declare class JSONData {
  readonly id: string;
  readonly name: string;
  readonly data: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<JSONData, JSONDataMetaData>);
  static copyOf(source: JSONData, mutator: (draft: MutableModel<JSONData, JSONDataMetaData>) => MutableModel<JSONData, JSONDataMetaData> | void): JSONData;
}

export declare class Flight {
  readonly id: string;
  readonly pilot: string;
  readonly airplane?: Aircraft;
  readonly airplaneId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Flight, FlightMetaData>);
  static copyOf(source: Flight, mutator: (draft: MutableModel<Flight, FlightMetaData>) => MutableModel<Flight, FlightMetaData> | void): Flight;
}

export declare class Aircraft {
  readonly id: string;
  readonly registration: string;
  readonly category?: string;
  readonly lastIndex?: string;
  readonly specs?: AircraftSpecs;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Aircraft, AircraftMetaData>);
  static copyOf(source: Aircraft, mutator: (draft: MutableModel<Aircraft, AircraftMetaData>) => MutableModel<Aircraft, AircraftMetaData> | void): Aircraft;
}