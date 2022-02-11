/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateModule = /* GraphQL */ `
  subscription OnCreateModule {
    onCreateModule {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModule = /* GraphQL */ `
  subscription OnUpdateModule {
    onUpdateModule {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModule = /* GraphQL */ `
  subscription OnDeleteModule {
    onDeleteModule {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePermission = /* GraphQL */ `
  subscription OnCreatePermission {
    onCreatePermission {
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
export const onUpdatePermission = /* GraphQL */ `
  subscription OnUpdatePermission {
    onUpdatePermission {
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
export const onDeletePermission = /* GraphQL */ `
  subscription OnDeletePermission {
    onDeletePermission {
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
