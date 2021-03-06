/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTranscription = /* GraphQL */ `
  mutation CreateTranscription(
    $input: CreateTranscriptionInput!
    $condition: ModelTranscriptionConditionInput
  ) {
    createTranscription(input: $input, condition: $condition) {
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
export const updateTranscription = /* GraphQL */ `
  mutation UpdateTranscription(
    $input: UpdateTranscriptionInput!
    $condition: ModelTranscriptionConditionInput
  ) {
    updateTranscription(input: $input, condition: $condition) {
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
export const deleteTranscription = /* GraphQL */ `
  mutation DeleteTranscription(
    $input: DeleteTranscriptionInput!
    $condition: ModelTranscriptionConditionInput
  ) {
    deleteTranscription(input: $input, condition: $condition) {
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
export const createRegion = /* GraphQL */ `
  mutation CreateRegion(
    $input: CreateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    createRegion(input: $input, condition: $condition) {
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
export const updateRegion = /* GraphQL */ `
  mutation UpdateRegion(
    $input: UpdateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    updateRegion(input: $input, condition: $condition) {
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
export const deleteRegion = /* GraphQL */ `
  mutation DeleteRegion(
    $input: DeleteRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    deleteRegion(input: $input, condition: $condition) {
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
export const createCursor = /* GraphQL */ `
  mutation CreateCursor(
    $input: CreateCursorInput!
    $condition: ModelCursorConditionInput
  ) {
    createCursor(input: $input, condition: $condition) {
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
export const updateCursor = /* GraphQL */ `
  mutation UpdateCursor(
    $input: UpdateCursorInput!
    $condition: ModelCursorConditionInput
  ) {
    updateCursor(input: $input, condition: $condition) {
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
export const deleteCursor = /* GraphQL */ `
  mutation DeleteCursor(
    $input: DeleteCursorInput!
    $condition: ModelCursorConditionInput
  ) {
    deleteCursor(input: $input, condition: $condition) {
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
export const createRegionLock = /* GraphQL */ `
  mutation CreateRegionLock(
    $input: CreateRegionLockInput!
    $condition: ModelRegionLockConditionInput
  ) {
    createRegionLock(input: $input, condition: $condition) {
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
export const updateRegionLock = /* GraphQL */ `
  mutation UpdateRegionLock(
    $input: UpdateRegionLockInput!
    $condition: ModelRegionLockConditionInput
  ) {
    updateRegionLock(input: $input, condition: $condition) {
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
export const deleteRegionLock = /* GraphQL */ `
  mutation DeleteRegionLock(
    $input: DeleteRegionLockInput!
    $condition: ModelRegionLockConditionInput
  ) {
    deleteRegionLock(input: $input, condition: $condition) {
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
export const createEditor = /* GraphQL */ `
  mutation CreateEditor(
    $input: CreateEditorInput!
    $condition: ModelEditorConditionInput
  ) {
    createEditor(input: $input, condition: $condition) {
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
export const updateEditor = /* GraphQL */ `
  mutation UpdateEditor(
    $input: UpdateEditorInput!
    $condition: ModelEditorConditionInput
  ) {
    updateEditor(input: $input, condition: $condition) {
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
export const deleteEditor = /* GraphQL */ `
  mutation DeleteEditor(
    $input: DeleteEditorInput!
    $condition: ModelEditorConditionInput
  ) {
    deleteEditor(input: $input, condition: $condition) {
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
export const createTranscriptionEditor = /* GraphQL */ `
  mutation CreateTranscriptionEditor(
    $input: CreateTranscriptionEditorInput!
    $condition: ModelTranscriptionEditorConditionInput
  ) {
    createTranscriptionEditor(input: $input, condition: $condition) {
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
export const updateTranscriptionEditor = /* GraphQL */ `
  mutation UpdateTranscriptionEditor(
    $input: UpdateTranscriptionEditorInput!
    $condition: ModelTranscriptionEditorConditionInput
  ) {
    updateTranscriptionEditor(input: $input, condition: $condition) {
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
export const deleteTranscriptionEditor = /* GraphQL */ `
  mutation DeleteTranscriptionEditor(
    $input: DeleteTranscriptionEditorInput!
    $condition: ModelTranscriptionEditorConditionInput
  ) {
    deleteTranscriptionEditor(input: $input, condition: $condition) {
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
