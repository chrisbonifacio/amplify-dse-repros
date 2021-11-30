/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPart = /* GraphQL */ `
  query GetPart($id: ID!) {
    getPart(id: $id) {
      id
      make
      model
      name
      registrationNumber
      listed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listParts = /* GraphQL */ `
  query ListParts(
    $filter: ModelPartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        make
        model
        name
        registrationNumber
        listed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncParts = /* GraphQL */ `
  query SyncParts(
    $filter: ModelPartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        make
        model
        name
        registrationNumber
        listed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
