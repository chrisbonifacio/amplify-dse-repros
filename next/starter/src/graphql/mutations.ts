/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMappedTodo = /* GraphQL */ `
  mutation CreateMappedTodo(
    $input: CreateMappedTodoInput!
    $condition: ModelMappedTodoConditionInput
  ) {
    createMappedTodo(input: $input, condition: $condition) {
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
export const updateMappedTodo = /* GraphQL */ `
  mutation UpdateMappedTodo(
    $input: UpdateMappedTodoInput!
    $condition: ModelMappedTodoConditionInput
  ) {
    updateMappedTodo(input: $input, condition: $condition) {
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
export const deleteMappedTodo = /* GraphQL */ `
  mutation DeleteMappedTodo(
    $input: DeleteMappedTodoInput!
    $condition: ModelMappedTodoConditionInput
  ) {
    deleteMappedTodo(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFlight = /* GraphQL */ `
  mutation CreateFlight(
    $input: CreateFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    createFlight(input: $input, condition: $condition) {
      id
      pilot
      airplane {
        id
        registration
        category
        lastIndex
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      airplaneId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateFlight = /* GraphQL */ `
  mutation UpdateFlight(
    $input: UpdateFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    updateFlight(input: $input, condition: $condition) {
      id
      pilot
      airplane {
        id
        registration
        category
        lastIndex
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      airplaneId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteFlight = /* GraphQL */ `
  mutation DeleteFlight(
    $input: DeleteFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    deleteFlight(input: $input, condition: $condition) {
      id
      pilot
      airplane {
        id
        registration
        category
        lastIndex
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      airplaneId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAircraft = /* GraphQL */ `
  mutation CreateAircraft(
    $input: CreateAircraftInput!
    $condition: ModelAircraftConditionInput
  ) {
    createAircraft(input: $input, condition: $condition) {
      id
      registration
      category
      lastIndex
      specs {
        passenger
        fuel
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAircraft = /* GraphQL */ `
  mutation UpdateAircraft(
    $input: UpdateAircraftInput!
    $condition: ModelAircraftConditionInput
  ) {
    updateAircraft(input: $input, condition: $condition) {
      id
      registration
      category
      lastIndex
      specs {
        passenger
        fuel
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAircraft = /* GraphQL */ `
  mutation DeleteAircraft(
    $input: DeleteAircraftInput!
    $condition: ModelAircraftConditionInput
  ) {
    deleteAircraft(input: $input, condition: $condition) {
      id
      registration
      category
      lastIndex
      specs {
        passenger
        fuel
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
