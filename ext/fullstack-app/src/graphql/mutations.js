/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPublicTodo = /* GraphQL */ `
  mutation CreatePublicTodo(
    $input: CreatePublicTodoInput!
    $condition: ModelPublicTodoConditionInput
  ) {
    createPublicTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const updatePublicTodo = /* GraphQL */ `
  mutation UpdatePublicTodo(
    $input: UpdatePublicTodoInput!
    $condition: ModelPublicTodoConditionInput
  ) {
    updatePublicTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const deletePublicTodo = /* GraphQL */ `
  mutation DeletePublicTodo(
    $input: DeletePublicTodoInput!
    $condition: ModelPublicTodoConditionInput
  ) {
    deletePublicTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
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
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
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
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
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
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      owner
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
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      owner
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
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      owner
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
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const createIAMTodo = /* GraphQL */ `
  mutation CreateIAMTodo(
    $input: CreateIAMTodoInput!
    $condition: ModelIAMTodoConditionInput
  ) {
    createIAMTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const updateIAMTodo = /* GraphQL */ `
  mutation UpdateIAMTodo(
    $input: UpdateIAMTodoInput!
    $condition: ModelIAMTodoConditionInput
  ) {
    updateIAMTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const deleteIAMTodo = /* GraphQL */ `
  mutation DeleteIAMTodo(
    $input: DeleteIAMTodoInput!
    $condition: ModelIAMTodoConditionInput
  ) {
    deleteIAMTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateTodo = /* GraphQL */ `
  mutation CreatePrivateTodo(
    $input: CreatePrivateTodoInput!
    $condition: ModelPrivateTodoConditionInput
  ) {
    createPrivateTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateTodo = /* GraphQL */ `
  mutation UpdatePrivateTodo(
    $input: UpdatePrivateTodoInput!
    $condition: ModelPrivateTodoConditionInput
  ) {
    updatePrivateTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateTodo = /* GraphQL */ `
  mutation DeletePrivateTodo(
    $input: DeletePrivateTodoInput!
    $condition: ModelPrivateTodoConditionInput
  ) {
    deletePrivateTodo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
      owner
    }
  }
`;
