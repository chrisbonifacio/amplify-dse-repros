/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMeasureHistory = /* GraphQL */ `
  query GetMeasureHistory($id: ID!) {
    getMeasureHistory(id: $id) {
      id
      date
      value
      measureID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listMeasureHistories = /* GraphQL */ `
  query ListMeasureHistories(
    $filter: ModelMeasureHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeasureHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        value
        measureID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMeasureHistories = /* GraphQL */ `
  query SyncMeasureHistories(
    $filter: ModelMeasureHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMeasureHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        value
        measureID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      date
      weightLb
      weightKg
      exerciseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listHistories = /* GraphQL */ `
  query ListHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        weightLb
        weightKg
        exerciseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHistories = /* GraphQL */ `
  query SyncHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        weightLb
        weightKg
        exerciseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      name
      routines {
        items {
          id
          exerciseID
          routineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      muscles {
        items {
          id
          muscleID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      histories {
        items {
          id
          date
          weightLb
          weightKg
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        routines {
          nextToken
          startedAt
        }
        muscles {
          nextToken
          startedAt
        }
        histories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExercises = /* GraphQL */ `
  query SyncExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        routines {
          nextToken
          startedAt
        }
        muscles {
          nextToken
          startedAt
        }
        histories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getRoutine = /* GraphQL */ `
  query GetRoutine($id: ID!) {
    getRoutine(id: $id) {
      id
      name
      planName
      exercises {
        items {
          id
          exerciseID
          routineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listRoutines = /* GraphQL */ `
  query ListRoutines(
    $filter: ModelRoutineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        planName
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRoutines = /* GraphQL */ `
  query SyncRoutines(
    $filter: ModelRoutineFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoutines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        planName
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getRoutineExercise = /* GraphQL */ `
  query GetRoutineExercise($id: ID!) {
    getRoutineExercise(id: $id) {
      id
      exerciseID
      routineID
      exercise {
        id
        name
        routines {
          nextToken
          startedAt
        }
        muscles {
          nextToken
          startedAt
        }
        histories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      routine {
        id
        name
        planName
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listRoutineExercises = /* GraphQL */ `
  query ListRoutineExercises(
    $filter: ModelRoutineExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutineExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exerciseID
        routineID
        exercise {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        routine {
          id
          name
          planName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRoutineExercises = /* GraphQL */ `
  query SyncRoutineExercises(
    $filter: ModelRoutineExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoutineExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        exerciseID
        routineID
        exercise {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        routine {
          id
          name
          planName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      id
      name
      isActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUnits = /* GraphQL */ `
  query SyncUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUnits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        isActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMeasure = /* GraphQL */ `
  query GetMeasure($id: ID!) {
    getMeasure(id: $id) {
      id
      name
      measureType
      measureHistories {
        items {
          id
          date
          value
          measureID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMeasures = /* GraphQL */ `
  query ListMeasures(
    $filter: ModelMeasureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeasures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        measureType
        measureHistories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMeasures = /* GraphQL */ `
  query SyncMeasures(
    $filter: ModelMeasureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMeasures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        measureType
        measureHistories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMuscle = /* GraphQL */ `
  query GetMuscle($id: ID!) {
    getMuscle(id: $id) {
      id
      name
      category
      image_url
      exercises {
        items {
          id
          muscleID
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMuscles = /* GraphQL */ `
  query ListMuscles(
    $filter: ModelMuscleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMuscles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        image_url
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMuscles = /* GraphQL */ `
  query SyncMuscles(
    $filter: ModelMuscleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMuscles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        category
        image_url
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLibraryRoutine = /* GraphQL */ `
  query GetLibraryRoutine($id: ID!) {
    getLibraryRoutine(id: $id) {
      id
      name
      planName
      libraryExercises {
        items {
          id
          libraryRoutineID
          libraryExerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLibraryRoutines = /* GraphQL */ `
  query ListLibraryRoutines(
    $filter: ModelLibraryRoutineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLibraryRoutines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        planName
        libraryExercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLibraryRoutines = /* GraphQL */ `
  query SyncLibraryRoutines(
    $filter: ModelLibraryRoutineFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLibraryRoutines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        planName
        libraryExercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLibraryExercise = /* GraphQL */ `
  query GetLibraryExercise($id: ID!) {
    getLibraryExercise(id: $id) {
      id
      name
      categoryName
      libraryroutines {
        items {
          id
          libraryRoutineID
          libraryExerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLibraryExercises = /* GraphQL */ `
  query ListLibraryExercises(
    $filter: ModelLibraryExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLibraryExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        categoryName
        libraryroutines {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLibraryExercises = /* GraphQL */ `
  query SyncLibraryExercises(
    $filter: ModelLibraryExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLibraryExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        categoryName
        libraryroutines {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getExerciseMuscle = /* GraphQL */ `
  query GetExerciseMuscle($id: ID!) {
    getExerciseMuscle(id: $id) {
      id
      muscleID
      exerciseID
      muscle {
        id
        name
        category
        image_url
        exercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      exercise {
        id
        name
        routines {
          nextToken
          startedAt
        }
        muscles {
          nextToken
          startedAt
        }
        histories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listExerciseMuscles = /* GraphQL */ `
  query ListExerciseMuscles(
    $filter: ModelExerciseMuscleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseMuscles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        muscleID
        exerciseID
        muscle {
          id
          name
          category
          image_url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        exercise {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExerciseMuscles = /* GraphQL */ `
  query SyncExerciseMuscles(
    $filter: ModelExerciseMuscleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExerciseMuscles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        muscleID
        exerciseID
        muscle {
          id
          name
          category
          image_url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        exercise {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getLibraryRoutineLibraryExercise = /* GraphQL */ `
  query GetLibraryRoutineLibraryExercise($id: ID!) {
    getLibraryRoutineLibraryExercise(id: $id) {
      id
      libraryRoutineID
      libraryExerciseID
      libraryRoutine {
        id
        name
        planName
        libraryExercises {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      libraryExercise {
        id
        name
        categoryName
        libraryroutines {
          nextToken
          startedAt
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
export const listLibraryRoutineLibraryExercises = /* GraphQL */ `
  query ListLibraryRoutineLibraryExercises(
    $filter: ModelLibraryRoutineLibraryExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLibraryRoutineLibraryExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        libraryRoutineID
        libraryExerciseID
        libraryRoutine {
          id
          name
          planName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        libraryExercise {
          id
          name
          categoryName
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
      nextToken
      startedAt
    }
  }
`;
export const syncLibraryRoutineLibraryExercises = /* GraphQL */ `
  query SyncLibraryRoutineLibraryExercises(
    $filter: ModelLibraryRoutineLibraryExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLibraryRoutineLibraryExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        libraryRoutineID
        libraryExerciseID
        libraryRoutine {
          id
          name
          planName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        libraryExercise {
          id
          name
          categoryName
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
      nextToken
      startedAt
    }
  }
`;
