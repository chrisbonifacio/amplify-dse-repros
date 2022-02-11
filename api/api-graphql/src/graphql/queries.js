/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotebook = /* GraphQL */ `
  query GetNotebook($id: ID!) {
    getNotebook(id: $id) {
      id
      title
      description
      color
      editors
      readers
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotebooks = /* GraphQL */ `
  query ListNotebooks(
    $filter: ModelNotebookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotebooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        color
        editors
        readers
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
