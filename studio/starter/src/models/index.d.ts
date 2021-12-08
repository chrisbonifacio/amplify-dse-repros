import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BodyAreaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BodyArea {
  readonly id: string;
  readonly key?: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BodyArea, BodyAreaMetaData>);
  static copyOf(source: BodyArea, mutator: (draft: MutableModel<BodyArea, BodyAreaMetaData>) => MutableModel<BodyArea, BodyAreaMetaData> | void): BodyArea;
}