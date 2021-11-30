/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPart = /* GraphQL */ `
  mutation CreatePart(
    $input: CreatePartInput!
    $condition: ModelPartConditionInput
  ) {
    createPart(input: $input, condition: $condition) {
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
export const updatePart = /* GraphQL */ `
  mutation UpdatePart(
    $input: UpdatePartInput!
    $condition: ModelPartConditionInput
  ) {
    updatePart(input: $input, condition: $condition) {
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
export const deletePart = /* GraphQL */ `
  mutation DeletePart(
    $input: DeletePartInput!
    $condition: ModelPartConditionInput
  ) {
    deletePart(input: $input, condition: $condition) {
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
