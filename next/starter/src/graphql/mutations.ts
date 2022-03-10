/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
      id
      name
      country
      zipCode
      createdAt
      updatedAt
    }
  }
`;
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
      id
      name
      country
      zipCode
      createdAt
      updatedAt
    }
  }
`;
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
      id
      name
      country
      zipCode
      createdAt
      updatedAt
    }
  }
`;
export const createJSONData = /* GraphQL */ `
  mutation CreateJSONData(
    $input: CreateJSONDataInput!
    $condition: ModelJSONDataConditionInput
  ) {
    createJSONData(input: $input, condition: $condition) {
      id
      name
      data
      createdAt
      updatedAt
    }
  }
`;
export const updateJSONData = /* GraphQL */ `
  mutation UpdateJSONData(
    $input: UpdateJSONDataInput!
    $condition: ModelJSONDataConditionInput
  ) {
    updateJSONData(input: $input, condition: $condition) {
      id
      name
      data
      createdAt
      updatedAt
    }
  }
`;
export const deleteJSONData = /* GraphQL */ `
  mutation DeleteJSONData(
    $input: DeleteJSONDataInput!
    $condition: ModelJSONDataConditionInput
  ) {
    deleteJSONData(input: $input, condition: $condition) {
      id
      name
      data
      createdAt
      updatedAt
    }
  }
`;
