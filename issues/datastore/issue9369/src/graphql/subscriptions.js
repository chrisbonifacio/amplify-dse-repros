/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMeasureHistory = /* GraphQL */ `
  subscription OnCreateMeasureHistory($owner: String) {
    onCreateMeasureHistory(owner: $owner) {
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
export const onUpdateMeasureHistory = /* GraphQL */ `
  subscription OnUpdateMeasureHistory($owner: String) {
    onUpdateMeasureHistory(owner: $owner) {
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
export const onDeleteMeasureHistory = /* GraphQL */ `
  subscription OnDeleteMeasureHistory($owner: String) {
    onDeleteMeasureHistory(owner: $owner) {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($owner: String) {
    onCreateHistory(owner: $owner) {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($owner: String) {
    onUpdateHistory(owner: $owner) {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($owner: String) {
    onDeleteHistory(owner: $owner) {
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
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($owner: String) {
    onCreateExercise(owner: $owner) {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($owner: String) {
    onUpdateExercise(owner: $owner) {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($owner: String) {
    onDeleteExercise(owner: $owner) {
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
export const onCreateRoutine = /* GraphQL */ `
  subscription OnCreateRoutine($owner: String) {
    onCreateRoutine(owner: $owner) {
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
export const onUpdateRoutine = /* GraphQL */ `
  subscription OnUpdateRoutine($owner: String) {
    onUpdateRoutine(owner: $owner) {
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
export const onDeleteRoutine = /* GraphQL */ `
  subscription OnDeleteRoutine($owner: String) {
    onDeleteRoutine(owner: $owner) {
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
export const onCreateRoutineExercise = /* GraphQL */ `
  subscription OnCreateRoutineExercise($owner: String) {
    onCreateRoutineExercise(owner: $owner) {
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
export const onUpdateRoutineExercise = /* GraphQL */ `
  subscription OnUpdateRoutineExercise($owner: String) {
    onUpdateRoutineExercise(owner: $owner) {
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
export const onDeleteRoutineExercise = /* GraphQL */ `
  subscription OnDeleteRoutineExercise($owner: String) {
    onDeleteRoutineExercise(owner: $owner) {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit {
    onCreateUnit {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit {
    onUpdateUnit {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit {
    onDeleteUnit {
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
export const onCreateMeasure = /* GraphQL */ `
  subscription OnCreateMeasure {
    onCreateMeasure {
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
export const onUpdateMeasure = /* GraphQL */ `
  subscription OnUpdateMeasure {
    onUpdateMeasure {
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
export const onDeleteMeasure = /* GraphQL */ `
  subscription OnDeleteMeasure {
    onDeleteMeasure {
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
export const onCreateMuscle = /* GraphQL */ `
  subscription OnCreateMuscle {
    onCreateMuscle {
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
export const onUpdateMuscle = /* GraphQL */ `
  subscription OnUpdateMuscle {
    onUpdateMuscle {
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
export const onDeleteMuscle = /* GraphQL */ `
  subscription OnDeleteMuscle {
    onDeleteMuscle {
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
export const onCreateLibraryRoutine = /* GraphQL */ `
  subscription OnCreateLibraryRoutine {
    onCreateLibraryRoutine {
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
export const onUpdateLibraryRoutine = /* GraphQL */ `
  subscription OnUpdateLibraryRoutine {
    onUpdateLibraryRoutine {
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
export const onDeleteLibraryRoutine = /* GraphQL */ `
  subscription OnDeleteLibraryRoutine {
    onDeleteLibraryRoutine {
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
export const onCreateLibraryExercise = /* GraphQL */ `
  subscription OnCreateLibraryExercise {
    onCreateLibraryExercise {
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
export const onUpdateLibraryExercise = /* GraphQL */ `
  subscription OnUpdateLibraryExercise {
    onUpdateLibraryExercise {
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
export const onDeleteLibraryExercise = /* GraphQL */ `
  subscription OnDeleteLibraryExercise {
    onDeleteLibraryExercise {
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
export const onCreateExerciseMuscle = /* GraphQL */ `
  subscription OnCreateExerciseMuscle($owner: String) {
    onCreateExerciseMuscle(owner: $owner) {
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
export const onUpdateExerciseMuscle = /* GraphQL */ `
  subscription OnUpdateExerciseMuscle($owner: String) {
    onUpdateExerciseMuscle(owner: $owner) {
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
export const onDeleteExerciseMuscle = /* GraphQL */ `
  subscription OnDeleteExerciseMuscle($owner: String) {
    onDeleteExerciseMuscle(owner: $owner) {
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
export const onCreateLibraryRoutineLibraryExercise = /* GraphQL */ `
  subscription OnCreateLibraryRoutineLibraryExercise {
    onCreateLibraryRoutineLibraryExercise {
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
export const onUpdateLibraryRoutineLibraryExercise = /* GraphQL */ `
  subscription OnUpdateLibraryRoutineLibraryExercise {
    onUpdateLibraryRoutineLibraryExercise {
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
export const onDeleteLibraryRoutineLibraryExercise = /* GraphQL */ `
  subscription OnDeleteLibraryRoutineLibraryExercise {
    onDeleteLibraryRoutineLibraryExercise {
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
