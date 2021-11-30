import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Part {
  readonly id: string;
  readonly make?: string;
  readonly model?: string;
  readonly name?: string;
  readonly registrationNumber?: string;
  readonly listed?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Part, PartMetaData>);
  static copyOf(source: Part, mutator: (draft: MutableModel<Part, PartMetaData>) => MutableModel<Part, PartMetaData> | void): Part;
}