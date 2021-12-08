/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
