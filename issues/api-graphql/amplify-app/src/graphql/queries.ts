/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIssueComment = /* GraphQL */ `
  query GetIssueComment($id: ID!) {
    getIssueComment(id: $id) {
      id
      issueID
      createdAt
      updatedAt
      author
      comment
    }
  }
`;
export const listIssueComments = /* GraphQL */ `
  query ListIssueComments(
    $filter: ModelIssueCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssueComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        issueID
        createdAt
        updatedAt
        author
        comment
      }
      nextToken
    }
  }
`;
