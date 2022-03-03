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
      _version
      _deleted
      _lastChangedAt
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
        file {
          bucket
          key
          region
          mimeType
          localUri
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTeamId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        team {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamProjectId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        projectTeamId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        team {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamProjectId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        projectTeamId
      }
      nextToken
      startedAt
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
        team {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamProjectId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        projectTeamId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTeamId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        project {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTeamId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      cities
      langs
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        city {
          id
          name
          country
          zipCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        cities
        langs
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCityId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
        }
        cities
        langs
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCityId
      }
      nextToken
      startedAt
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
        city {
          id
          name
          country
          zipCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        cities
        langs
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCities = /* GraphQL */ `
  query SyncCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        country
        zipCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAnalytics = /* GraphQL */ `
  query GetAnalytics($msg: String!) {
    getAnalytics(msg: $msg)
  }
`;
