/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPublicTodo = /* GraphQL */ `
  query GetPublicTodo($id: ID!) {
    getPublicTodo(id: $id) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const listPublicTodos = /* GraphQL */ `
  query ListPublicTodos(
    $filter: ModelPublicTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        completed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          title
          blogID
          createdAt
          updatedAt
          owner
        }
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getIAMTodo = /* GraphQL */ `
  query GetIAMTodo($id: ID!) {
    getIAMTodo(id: $id) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const listIAMTodos = /* GraphQL */ `
  query ListIAMTodos(
    $filter: ModelIAMTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIAMTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        completed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateTodo = /* GraphQL */ `
  query GetPrivateTodo($id: ID!) {
    getPrivateTodo(id: $id) {
      id
      title
      completed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateTodos = /* GraphQL */ `
  query ListPrivateTodos(
    $filter: ModelPrivateTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        completed
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
