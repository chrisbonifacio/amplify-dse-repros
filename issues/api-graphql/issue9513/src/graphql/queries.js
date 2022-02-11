/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getModule = /* GraphQL */ `
  query GetModule($id: ID!) {
    getModule(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listModules = /* GraphQL */ `
  query ListModules(
    $filter: ModelModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPermission = /* GraphQL */ `
  query GetPermission($id: ID!) {
    getPermission(id: $id) {
      id
      name
      module {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      permissionModuleId
    }
  }
`;
export const listPermissions = /* GraphQL */ `
  query ListPermissions(
    $filter: ModelPermissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPermissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        module {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        permissionModuleId
      }
      nextToken
    }
  }
`;
