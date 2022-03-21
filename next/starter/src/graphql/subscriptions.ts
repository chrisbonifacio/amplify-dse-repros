/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMutateCustomer = /* GraphQL */ `
  subscription OnMutateCustomer {
    onMutateCustomer {
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
export const onUpdateTodoByID = /* GraphQL */ `
  subscription OnUpdateTodoByID($id: ID!) {
    onUpdateTodoByID(id: $id) {
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
export const onCreateMappedTodo = /* GraphQL */ `
  subscription OnCreateMappedTodo {
    onCreateMappedTodo {
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
export const onUpdateMappedTodo = /* GraphQL */ `
  subscription OnUpdateMappedTodo {
    onUpdateMappedTodo {
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
export const onDeleteMappedTodo = /* GraphQL */ `
  subscription OnDeleteMappedTodo {
    onDeleteMappedTodo {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity {
    onCreateCity {
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
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity {
    onUpdateCity {
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
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity {
    onDeleteCity {
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
export const onCreateJSONData = /* GraphQL */ `
  subscription OnCreateJSONData {
    onCreateJSONData {
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
export const onUpdateJSONData = /* GraphQL */ `
  subscription OnUpdateJSONData {
    onUpdateJSONData {
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
export const onDeleteJSONData = /* GraphQL */ `
  subscription OnDeleteJSONData {
    onDeleteJSONData {
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
export const onCreateFlight = /* GraphQL */ `
  subscription OnCreateFlight {
    onCreateFlight {
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
export const onUpdateFlight = /* GraphQL */ `
  subscription OnUpdateFlight {
    onUpdateFlight {
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
export const onDeleteFlight = /* GraphQL */ `
  subscription OnDeleteFlight {
    onDeleteFlight {
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
export const onCreateAircraft = /* GraphQL */ `
  subscription OnCreateAircraft {
    onCreateAircraft {
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
export const onUpdateAircraft = /* GraphQL */ `
  subscription OnUpdateAircraft {
    onUpdateAircraft {
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
export const onDeleteAircraft = /* GraphQL */ `
  subscription OnDeleteAircraft {
    onDeleteAircraft {
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
