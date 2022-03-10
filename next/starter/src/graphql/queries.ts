/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      file {
        bucket
        key
        region
        mimeType
        localUri
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
        teamProjectId
      }
      createdAt
      updatedAt
      projectTeamId
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        projectTeamId
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      project {
        id
        name
        createdAt
        updatedAt
        projectTeamId
      }
      createdAt
      updatedAt
      teamProjectId
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        teamProjectId
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      email
      Mobile
      customer_notes
      admin_notes
      city {
        id
        name
        country
        zipCode
        createdAt
        updatedAt
      }
      cities
      langs
      owner
      createdAt
      updatedAt
      customerCityId
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        Mobile
        customer_notes
        admin_notes
        cities
        langs
        owner
        createdAt
        updatedAt
        customerCityId
      }
      nextToken
    }
  }
`;
export const searchCustomers = /* GraphQL */ `
  query SearchCustomers(
    $filter: SearchableCustomerFilterInput
    $sort: [SearchableCustomerSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCustomerAggregationInput]
  ) {
    searchCustomers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        email
        Mobile
        customer_notes
        admin_notes
        cities
        langs
        owner
        createdAt
        updatedAt
        customerCityId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
      id
      name
      country
      zipCode
      createdAt
      updatedAt
    }
  }
`;
export const listCities = /* GraphQL */ `
  query ListCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        country
        zipCode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJSONData = /* GraphQL */ `
  query GetJSONData($id: ID!) {
    getJSONData(id: $id) {
      id
      name
      data
      createdAt
      updatedAt
    }
  }
`;
export const listJSONData = /* GraphQL */ `
  query ListJSONData(
    $filter: ModelJSONDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJSONData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAnalytics = /* GraphQL */ `
  query GetAnalytics($msg: String!) {
    getAnalytics(msg: $msg)
  }
`;
