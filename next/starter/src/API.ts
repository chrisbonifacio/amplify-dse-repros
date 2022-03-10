/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  file?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  key: string,
  region: string,
  mimeType: string,
  localUri: string,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  file?: S3Object | null,
  createdAt: string,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  key: string,
  region: string,
  mimeType: string,
  localUri: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  file?: S3ObjectInput | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name?: string | null,
  projectTeamId?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  projectTeamId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name?: string | null,
  team?: Team | null,
  createdAt: string,
  updatedAt: string,
  projectTeamId?: string | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  teamProjectId?: string | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  projectTeamId?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
  teamProjectId?: string | null,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
  teamProjectId?: ModelIDInput | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  teamProjectId?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  name: string,
  email: string,
  Mobile: string,
  customer_notes: string,
  admin_notes: string,
  cities?: string | null,
  langs?: Array< string | null > | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  customerCityId?: string | null,
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  Mobile?: ModelStringInput | null,
  customer_notes?: ModelStringInput | null,
  admin_notes?: ModelStringInput | null,
  cities?: ModelStringInput | null,
  langs?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
  customerCityId?: ModelIDInput | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  name: string,
  email: string,
  Mobile: string,
  customer_notes: string,
  admin_notes: string,
  city?: City | null,
  cities?: string | null,
  langs?: Array< string | null > | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  customerCityId?: string | null,
};

export type City = {
  __typename: "City",
  id: string,
  name: string,
  country: string,
  zipCode: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  Mobile?: string | null,
  customer_notes?: string | null,
  admin_notes?: string | null,
  cities?: string | null,
  langs?: Array< string | null > | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  customerCityId?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateCityInput = {
  id?: string | null,
  name: string,
  country: string,
  zipCode: string,
};

export type ModelCityConditionInput = {
  name?: ModelStringInput | null,
  country?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  and?: Array< ModelCityConditionInput | null > | null,
  or?: Array< ModelCityConditionInput | null > | null,
  not?: ModelCityConditionInput | null,
};

export type UpdateCityInput = {
  id: string,
  name?: string | null,
  country?: string | null,
  zipCode?: string | null,
};

export type DeleteCityInput = {
  id: string,
};

export type CreateJSONDataInput = {
  id?: string | null,
  name: string,
  data: string,
};

export type ModelJSONDataConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelJSONDataConditionInput | null > | null,
  or?: Array< ModelJSONDataConditionInput | null > | null,
  not?: ModelJSONDataConditionInput | null,
};

export type JSONData = {
  __typename: "JSONData",
  id: string,
  name: string,
  data: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJSONDataInput = {
  id: string,
  name?: string | null,
  data?: string | null,
};

export type DeleteJSONDataInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  projectTeamId?: ModelIDInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
  teamProjectId?: ModelIDInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  Mobile?: ModelStringInput | null,
  customer_notes?: ModelStringInput | null,
  admin_notes?: ModelStringInput | null,
  cities?: ModelStringInput | null,
  langs?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
  customerCityId?: ModelIDInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type SearchableCustomerFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  Mobile?: SearchableStringFilterInput | null,
  customer_notes?: SearchableStringFilterInput | null,
  admin_notes?: SearchableStringFilterInput | null,
  cities?: SearchableStringFilterInput | null,
  langs?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  customerCityId?: SearchableIDFilterInput | null,
  and?: Array< SearchableCustomerFilterInput | null > | null,
  or?: Array< SearchableCustomerFilterInput | null > | null,
  not?: SearchableCustomerFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableCustomerSortInput = {
  field?: SearchableCustomerSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCustomerSortableFields {
  id = "id",
  name = "name",
  email = "email",
  Mobile = "Mobile",
  customer_notes = "customer_notes",
  admin_notes = "admin_notes",
  cities = "cities",
  langs = "langs",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  customerCityId = "customerCityId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableCustomerAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableCustomerAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableCustomerAggregateField {
  id = "id",
  name = "name",
  email = "email",
  Mobile = "Mobile",
  customer_notes = "customer_notes",
  admin_notes = "admin_notes",
  cities = "cities",
  langs = "langs",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  customerCityId = "customerCityId",
}


export type SearchableCustomerConnection = {
  __typename: "SearchableCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelCityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  country?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  and?: Array< ModelCityFilterInput | null > | null,
  or?: Array< ModelCityFilterInput | null > | null,
  not?: ModelCityFilterInput | null,
};

export type ModelCityConnection = {
  __typename: "ModelCityConnection",
  items:  Array<City | null >,
  nextToken?: string | null,
};

export type ModelJSONDataFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelJSONDataFilterInput | null > | null,
  or?: Array< ModelJSONDataFilterInput | null > | null,
  not?: ModelJSONDataFilterInput | null,
};

export type ModelJSONDataConnection = {
  __typename: "ModelJSONDataConnection",
  items:  Array<JSONData | null >,
  nextToken?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
      localUri: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
      localUri: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
      localUri: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      teamProjectId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      teamProjectId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      teamProjectId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    project?:  {
      __typename: "Project",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamProjectId?: string | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    project?:  {
      __typename: "Project",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamProjectId?: string | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    project?:  {
      __typename: "Project",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamProjectId?: string | null,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    email: string,
    Mobile: string,
    customer_notes: string,
    admin_notes: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    cities?: string | null,
    langs?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    customerCityId?: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    email: string,
    Mobile: string,
    customer_notes: string,
    admin_notes: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    cities?: string | null,
    langs?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    customerCityId?: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    email: string,
    Mobile: string,
    customer_notes: string,
    admin_notes: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    cities?: string | null,
    langs?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    customerCityId?: string | null,
  } | null,
};

export type CreateCityMutationVariables = {
  input: CreateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type CreateCityMutation = {
  createCity?:  {
    __typename: "City",
    id: string,
    name: string,
    country: string,
    zipCode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCityMutationVariables = {
  input: UpdateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type UpdateCityMutation = {
  updateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    country: string,
    zipCode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCityMutationVariables = {
  input: DeleteCityInput,
  condition?: ModelCityConditionInput | null,
};

export type DeleteCityMutation = {
  deleteCity?:  {
    __typename: "City",
    id: string,
    name: string,
    country: string,
    zipCode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJSONDataMutationVariables = {
  input: CreateJSONDataInput,
  condition?: ModelJSONDataConditionInput | null,
};

export type CreateJSONDataMutation = {
  createJSONData?:  {
    __typename: "JSONData",
    id: string,
    name: string,
    data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJSONDataMutationVariables = {
  input: UpdateJSONDataInput,
  condition?: ModelJSONDataConditionInput | null,
};

export type UpdateJSONDataMutation = {
  updateJSONData?:  {
    __typename: "JSONData",
    id: string,
    name: string,
    data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJSONDataMutationVariables = {
  input: DeleteJSONDataInput,
  condition?: ModelJSONDataConditionInput | null,
};

export type DeleteJSONDataMutation = {
  deleteJSONData?:  {
    __typename: "JSONData",
    id: string,
    name: string,
    data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
      localUri: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      teamProjectId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    project?:  {
      __typename: "Project",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamProjectId?: string | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      teamProjectId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    email: string,
    Mobile: string,
    customer_notes: string,
    admin_notes: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    cities?: string | null,
    langs?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    customerCityId?: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      name: string,
      email: string,
      Mobile: string,
      customer_notes: string,
      admin_notes: string,
      cities?: string | null,
      langs?: Array< string | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      customerCityId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchCustomersQueryVariables = {
  filter?: SearchableCustomerFilterInput | null,
  sort?: Array< SearchableCustomerSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableCustomerAggregationInput | null > | null,
};

export type SearchCustomersQuery = {
  searchCustomers?:  {
    __typename: "SearchableCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      name: string,
      email: string,
      Mobile: string,
      customer_notes: string,
      admin_notes: string,
      cities?: string | null,
      langs?: Array< string | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      customerCityId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetCityQueryVariables = {
  id: string,
};

export type GetCityQuery = {
  getCity?:  {
    __typename: "City",
    id: string,
    name: string,
    country: string,
    zipCode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCitiesQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCitiesQuery = {
  listCities?:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetJSONDataQueryVariables = {
  id: string,
};

export type GetJSONDataQuery = {
  getJSONData?:  {
    __typename: "JSONData",
    id: string,
    name: string,
    data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJSONDataQueryVariables = {
  filter?: ModelJSONDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJSONDataQuery = {
  listJSONData?:  {
    __typename: "ModelJSONDataConnection",
    items:  Array< {
      __typename: "JSONData",
      id: string,
      name: string,
      data: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAnalyticsQueryVariables = {
  msg: string,
};

export type GetAnalyticsQuery = {
  getAnalytics?: string | null,
};

export type OnMutateCustomerSubscription = {
  onMutateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    email: string,
    Mobile: string,
    customer_notes: string,
    admin_notes: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    cities?: string | null,
    langs?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    customerCityId?: string | null,
  } | null,
};

export type OnUpdateTodoByIDSubscriptionVariables = {
  id: string,
};

export type OnUpdateTodoByIDSubscription = {
  onUpdateTodoByID?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
      localUri: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
      localUri: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
      localUri: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      mimeType: string,
      localUri: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      teamProjectId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      teamProjectId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      teamProjectId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTeamId?: string | null,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    project?:  {
      __typename: "Project",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamProjectId?: string | null,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    project?:  {
      __typename: "Project",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamProjectId?: string | null,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    project?:  {
      __typename: "Project",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTeamId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamProjectId?: string | null,
  } | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    email: string,
    Mobile: string,
    customer_notes: string,
    admin_notes: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    cities?: string | null,
    langs?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    customerCityId?: string | null,
  } | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    email: string,
    Mobile: string,
    customer_notes: string,
    admin_notes: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    cities?: string | null,
    langs?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    customerCityId?: string | null,
  } | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    email: string,
    Mobile: string,
    customer_notes: string,
    admin_notes: string,
    city?:  {
      __typename: "City",
      id: string,
      name: string,
      country: string,
      zipCode: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    cities?: string | null,
    langs?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    customerCityId?: string | null,
  } | null,
};

export type OnCreateCitySubscription = {
  onCreateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    country: string,
    zipCode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCitySubscription = {
  onUpdateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    country: string,
    zipCode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCitySubscription = {
  onDeleteCity?:  {
    __typename: "City",
    id: string,
    name: string,
    country: string,
    zipCode: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJSONDataSubscription = {
  onCreateJSONData?:  {
    __typename: "JSONData",
    id: string,
    name: string,
    data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJSONDataSubscription = {
  onUpdateJSONData?:  {
    __typename: "JSONData",
    id: string,
    name: string,
    data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJSONDataSubscription = {
  onDeleteJSONData?:  {
    __typename: "JSONData",
    id: string,
    name: string,
    data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
