/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTranscription = /* GraphQL */ `
  subscription OnCreateTranscription {
    onCreateTranscription {
      id
      author
      coverage
      dateLastUpdated
      userLastUpdated
      length
      issues
      comments
      tags
      source
      index
      title
      type
      isPrivate
      disableAnalyzer
      editor {
        items {
          id
          transcriptionId
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTranscription = /* GraphQL */ `
  subscription OnUpdateTranscription {
    onUpdateTranscription {
      id
      author
      coverage
      dateLastUpdated
      userLastUpdated
      length
      issues
      comments
      tags
      source
      index
      title
      type
      isPrivate
      disableAnalyzer
      editor {
        items {
          id
          transcriptionId
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTranscription = /* GraphQL */ `
  subscription OnDeleteTranscription {
    onDeleteTranscription {
      id
      author
      coverage
      dateLastUpdated
      userLastUpdated
      length
      issues
      comments
      tags
      source
      index
      title
      type
      isPrivate
      disableAnalyzer
      editor {
        items {
          id
          transcriptionId
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion {
    onCreateRegion {
      id
      start
      end
      text
      issues
      isNote
      comments
      translation
      dateLastUpdated
      userLastUpdated
      transcriptionId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion {
    onUpdateRegion {
      id
      start
      end
      text
      issues
      isNote
      comments
      translation
      dateLastUpdated
      userLastUpdated
      transcriptionId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion {
    onDeleteRegion {
      id
      start
      end
      text
      issues
      isNote
      comments
      translation
      dateLastUpdated
      userLastUpdated
      transcriptionId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCursor = /* GraphQL */ `
  subscription OnCreateCursor {
    onCreateCursor {
      id
      user
      cursor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCursor = /* GraphQL */ `
  subscription OnUpdateCursor {
    onUpdateCursor {
      id
      user
      cursor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCursor = /* GraphQL */ `
  subscription OnDeleteCursor {
    onDeleteCursor {
      id
      user
      cursor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRegionLock = /* GraphQL */ `
  subscription OnCreateRegionLock {
    onCreateRegionLock {
      id
      transcriptionId
      deleteTime
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRegionLock = /* GraphQL */ `
  subscription OnUpdateRegionLock {
    onUpdateRegionLock {
      id
      transcriptionId
      deleteTime
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRegionLock = /* GraphQL */ `
  subscription OnDeleteRegionLock {
    onDeleteRegionLock {
      id
      transcriptionId
      deleteTime
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEditor = /* GraphQL */ `
  subscription OnCreateEditor {
    onCreateEditor {
      email
      username
      transcriptions {
        items {
          id
          transcriptionId
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEditor = /* GraphQL */ `
  subscription OnUpdateEditor {
    onUpdateEditor {
      email
      username
      transcriptions {
        items {
          id
          transcriptionId
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEditor = /* GraphQL */ `
  subscription OnDeleteEditor {
    onDeleteEditor {
      email
      username
      transcriptions {
        items {
          id
          transcriptionId
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTranscriptionEditor = /* GraphQL */ `
  subscription OnCreateTranscriptionEditor {
    onCreateTranscriptionEditor {
      id
      transcriptionId
      username
      transcription {
        id
        author
        coverage
        dateLastUpdated
        userLastUpdated
        length
        issues
        comments
        tags
        source
        index
        title
        type
        isPrivate
        disableAnalyzer
        editor {
          nextToken
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      editor {
        email
        username
        transcriptions {
          nextToken
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTranscriptionEditor = /* GraphQL */ `
  subscription OnUpdateTranscriptionEditor {
    onUpdateTranscriptionEditor {
      id
      transcriptionId
      username
      transcription {
        id
        author
        coverage
        dateLastUpdated
        userLastUpdated
        length
        issues
        comments
        tags
        source
        index
        title
        type
        isPrivate
        disableAnalyzer
        editor {
          nextToken
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      editor {
        email
        username
        transcriptions {
          nextToken
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTranscriptionEditor = /* GraphQL */ `
  subscription OnDeleteTranscriptionEditor {
    onDeleteTranscriptionEditor {
      id
      transcriptionId
      username
      transcription {
        id
        author
        coverage
        dateLastUpdated
        userLastUpdated
        length
        issues
        comments
        tags
        source
        index
        title
        type
        isPrivate
        disableAnalyzer
        editor {
          nextToken
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      editor {
        email
        username
        transcriptions {
          nextToken
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
