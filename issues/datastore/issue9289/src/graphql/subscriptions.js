/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      uid
      username
      title
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      uid
      username
      title
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      uid
      username
      title
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      username
      email
      posts {
        nextToken
        startedAt
      }
      profile {
        id
        bio
        website
        avatar
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileUserId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileId
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      username
      email
      posts {
        nextToken
        startedAt
      }
      profile {
        id
        bio
        website
        avatar
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileUserId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileId
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      username
      email
      posts {
        nextToken
        startedAt
      }
      profile {
        id
        bio
        website
        avatar
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileUserId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileId
      owner
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileId
        owner
      }
      bio
      website
      avatar
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileUserId
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileId
        owner
      }
      bio
      website
      avatar
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileUserId
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileId
        owner
      }
      bio
      website
      avatar
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileUserId
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileId
        owner
      }
      title
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPostsId
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileId
        owner
      }
      title
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPostsId
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileId
        owner
      }
      title
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPostsId
      owner
    }
  }
`;
