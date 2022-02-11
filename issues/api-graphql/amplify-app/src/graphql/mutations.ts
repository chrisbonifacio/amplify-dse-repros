/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIssueComment = /* GraphQL */ `
  mutation CreateIssueComment(
    $input: CreateIssueCommentInput!
    $condition: ModelIssueCommentConditionInput
  ) {
    createIssueComment(input: $input, condition: $condition) {
      id
      issueID
      createdAt
      updatedAt
      author
      comment
    }
  }
`;
export const updateIssueComment = /* GraphQL */ `
  mutation UpdateIssueComment(
    $input: UpdateIssueCommentInput!
    $condition: ModelIssueCommentConditionInput
  ) {
    updateIssueComment(input: $input, condition: $condition) {
      id
      issueID
      createdAt
      updatedAt
      author
      comment
    }
  }
`;
export const deleteIssueComment = /* GraphQL */ `
  mutation DeleteIssueComment(
    $input: DeleteIssueCommentInput!
    $condition: ModelIssueCommentConditionInput
  ) {
    deleteIssueComment(input: $input, condition: $condition) {
      id
      issueID
      createdAt
      updatedAt
      author
      comment
    }
  }
`;
