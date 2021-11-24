/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePublicTodo = /* GraphQL */ `
  subscription OnCreatePublicTodo {
    onCreatePublicTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePublicTodo = /* GraphQL */ `
  subscription OnUpdatePublicTodo {
    onUpdatePublicTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePublicTodo = /* GraphQL */ `
  subscription OnDeletePublicTodo {
    onDeletePublicTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($owner: String) {
    onCreateBlog(owner: $owner) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($owner: String) {
    onUpdateBlog(owner: $owner) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($owner: String) {
    onDeleteBlog(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateIAMTodo = /* GraphQL */ `
  subscription OnCreateIAMTodo {
    onCreateIAMTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIAMTodo = /* GraphQL */ `
  subscription OnUpdateIAMTodo {
    onUpdateIAMTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIAMTodo = /* GraphQL */ `
  subscription OnDeleteIAMTodo {
    onDeleteIAMTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateTodo = /* GraphQL */ `
  subscription OnCreatePrivateTodo {
    onCreatePrivateTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePrivateTodo = /* GraphQL */ `
  subscription OnUpdatePrivateTodo {
    onUpdatePrivateTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePrivateTodo = /* GraphQL */ `
  subscription OnDeletePrivateTodo {
    onDeletePrivateTodo {
      id
      title
      completed
      createdAt
      updatedAt
    }
  }
`;
