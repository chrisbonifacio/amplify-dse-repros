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
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
        teamProjectId
      }
      createdAt
      updatedAt
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
        teamProjectId
      }
      createdAt
      updatedAt
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
        teamProjectId
      }
      createdAt
      updatedAt
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
        projectTeamId
      }
      createdAt
      updatedAt
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
        projectTeamId
      }
      createdAt
      updatedAt
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
        projectTeamId
      }
      createdAt
      updatedAt
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
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity {
    onCreateCity {
      id
      name
      country
      zipCode
      createdAt
      updatedAt
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
    }
  }
`;
