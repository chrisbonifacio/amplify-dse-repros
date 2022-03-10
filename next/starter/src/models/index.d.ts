import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly key: string;
  readonly region: string;
  readonly mimeType: string;
  readonly localUri: string;
  constructor(init: ModelInit<S3Object>);
}

type CustomerMetaData = {
  readOnlyFields;
}

type CityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
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

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly file?: S3Object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
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