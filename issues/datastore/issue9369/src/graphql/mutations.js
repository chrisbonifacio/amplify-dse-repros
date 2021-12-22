/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMeasureHistory = /* GraphQL */ `
  mutation CreateMeasureHistory(
    $input: CreateMeasureHistoryInput!
    $condition: ModelMeasureHistoryConditionInput
  ) {
    createMeasureHistory(input: $input, condition: $condition) {
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
export const updateMeasureHistory = /* GraphQL */ `
  mutation UpdateMeasureHistory(
    $input: UpdateMeasureHistoryInput!
    $condition: ModelMeasureHistoryConditionInput
  ) {
    updateMeasureHistory(input: $input, condition: $condition) {
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
export const deleteMeasureHistory = /* GraphQL */ `
  mutation DeleteMeasureHistory(
    $input: DeleteMeasureHistoryInput!
    $condition: ModelMeasureHistoryConditionInput
  ) {
    deleteMeasureHistory(input: $input, condition: $condition) {
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
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
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
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
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
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
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
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
export const createRoutine = /* GraphQL */ `
  mutation CreateRoutine(
    $input: CreateRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    createRoutine(input: $input, condition: $condition) {
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
export const updateRoutine = /* GraphQL */ `
  mutation UpdateRoutine(
    $input: UpdateRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    updateRoutine(input: $input, condition: $condition) {
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
export const deleteRoutine = /* GraphQL */ `
  mutation DeleteRoutine(
    $input: DeleteRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    deleteRoutine(input: $input, condition: $condition) {
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
export const createRoutineExercise = /* GraphQL */ `
  mutation CreateRoutineExercise(
    $input: CreateRoutineExerciseInput!
    $condition: ModelRoutineExerciseConditionInput
  ) {
    createRoutineExercise(input: $input, condition: $condition) {
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
export const updateRoutineExercise = /* GraphQL */ `
  mutation UpdateRoutineExercise(
    $input: UpdateRoutineExerciseInput!
    $condition: ModelRoutineExerciseConditionInput
  ) {
    updateRoutineExercise(input: $input, condition: $condition) {
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
export const deleteRoutineExercise = /* GraphQL */ `
  mutation DeleteRoutineExercise(
    $input: DeleteRoutineExerciseInput!
    $condition: ModelRoutineExerciseConditionInput
  ) {
    deleteRoutineExercise(input: $input, condition: $condition) {
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
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
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
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
export const createMeasure = /* GraphQL */ `
  mutation CreateMeasure(
    $input: CreateMeasureInput!
    $condition: ModelMeasureConditionInput
  ) {
    createMeasure(input: $input, condition: $condition) {
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
export const updateMeasure = /* GraphQL */ `
  mutation UpdateMeasure(
    $input: UpdateMeasureInput!
    $condition: ModelMeasureConditionInput
  ) {
    updateMeasure(input: $input, condition: $condition) {
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
export const deleteMeasure = /* GraphQL */ `
  mutation DeleteMeasure(
    $input: DeleteMeasureInput!
    $condition: ModelMeasureConditionInput
  ) {
    deleteMeasure(input: $input, condition: $condition) {
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
export const createMuscle = /* GraphQL */ `
  mutation CreateMuscle(
    $input: CreateMuscleInput!
    $condition: ModelMuscleConditionInput
  ) {
    createMuscle(input: $input, condition: $condition) {
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
export const updateMuscle = /* GraphQL */ `
  mutation UpdateMuscle(
    $input: UpdateMuscleInput!
    $condition: ModelMuscleConditionInput
  ) {
    updateMuscle(input: $input, condition: $condition) {
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
export const deleteMuscle = /* GraphQL */ `
  mutation DeleteMuscle(
    $input: DeleteMuscleInput!
    $condition: ModelMuscleConditionInput
  ) {
    deleteMuscle(input: $input, condition: $condition) {
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
export const createLibraryRoutine = /* GraphQL */ `
  mutation CreateLibraryRoutine(
    $input: CreateLibraryRoutineInput!
    $condition: ModelLibraryRoutineConditionInput
  ) {
    createLibraryRoutine(input: $input, condition: $condition) {
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
export const updateLibraryRoutine = /* GraphQL */ `
  mutation UpdateLibraryRoutine(
    $input: UpdateLibraryRoutineInput!
    $condition: ModelLibraryRoutineConditionInput
  ) {
    updateLibraryRoutine(input: $input, condition: $condition) {
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
export const deleteLibraryRoutine = /* GraphQL */ `
  mutation DeleteLibraryRoutine(
    $input: DeleteLibraryRoutineInput!
    $condition: ModelLibraryRoutineConditionInput
  ) {
    deleteLibraryRoutine(input: $input, condition: $condition) {
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
export const createLibraryExercise = /* GraphQL */ `
  mutation CreateLibraryExercise(
    $input: CreateLibraryExerciseInput!
    $condition: ModelLibraryExerciseConditionInput
  ) {
    createLibraryExercise(input: $input, condition: $condition) {
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
export const updateLibraryExercise = /* GraphQL */ `
  mutation UpdateLibraryExercise(
    $input: UpdateLibraryExerciseInput!
    $condition: ModelLibraryExerciseConditionInput
  ) {
    updateLibraryExercise(input: $input, condition: $condition) {
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
export const deleteLibraryExercise = /* GraphQL */ `
  mutation DeleteLibraryExercise(
    $input: DeleteLibraryExerciseInput!
    $condition: ModelLibraryExerciseConditionInput
  ) {
    deleteLibraryExercise(input: $input, condition: $condition) {
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
export const createExerciseMuscle = /* GraphQL */ `
  mutation CreateExerciseMuscle(
    $input: CreateExerciseMuscleInput!
    $condition: ModelExerciseMuscleConditionInput
  ) {
    createExerciseMuscle(input: $input, condition: $condition) {
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
export const updateExerciseMuscle = /* GraphQL */ `
  mutation UpdateExerciseMuscle(
    $input: UpdateExerciseMuscleInput!
    $condition: ModelExerciseMuscleConditionInput
  ) {
    updateExerciseMuscle(input: $input, condition: $condition) {
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
export const deleteExerciseMuscle = /* GraphQL */ `
  mutation DeleteExerciseMuscle(
    $input: DeleteExerciseMuscleInput!
    $condition: ModelExerciseMuscleConditionInput
  ) {
    deleteExerciseMuscle(input: $input, condition: $condition) {
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
export const createLibraryRoutineLibraryExercise = /* GraphQL */ `
  mutation CreateLibraryRoutineLibraryExercise(
    $input: CreateLibraryRoutineLibraryExerciseInput!
    $condition: ModelLibraryRoutineLibraryExerciseConditionInput
  ) {
    createLibraryRoutineLibraryExercise(input: $input, condition: $condition) {
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
export const updateLibraryRoutineLibraryExercise = /* GraphQL */ `
  mutation UpdateLibraryRoutineLibraryExercise(
    $input: UpdateLibraryRoutineLibraryExerciseInput!
    $condition: ModelLibraryRoutineLibraryExerciseConditionInput
  ) {
    updateLibraryRoutineLibraryExercise(input: $input, condition: $condition) {
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
export const deleteLibraryRoutineLibraryExercise = /* GraphQL */ `
  mutation DeleteLibraryRoutineLibraryExercise(
    $input: DeleteLibraryRoutineLibraryExerciseInput!
    $condition: ModelLibraryRoutineLibraryExerciseConditionInput
  ) {
    deleteLibraryRoutineLibraryExercise(input: $input, condition: $condition) {
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
