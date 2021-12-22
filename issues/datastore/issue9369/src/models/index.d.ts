import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UnitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MeasureHistoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MeasureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HistoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MuscleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoutineMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LibraryRoutineMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LibraryExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExerciseMuscleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoutineExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LibraryRoutineLibraryExerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Unit {
  readonly id: string;
  readonly name?: string;
  readonly isActive?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Unit, UnitMetaData>);
  static copyOf(source: Unit, mutator: (draft: MutableModel<Unit, UnitMetaData>) => MutableModel<Unit, UnitMetaData> | void): Unit;
}

export declare class MeasureHistory {
  readonly id: string;
  readonly date?: string;
  readonly value?: string;
  readonly measureID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MeasureHistory, MeasureHistoryMetaData>);
  static copyOf(source: MeasureHistory, mutator: (draft: MutableModel<MeasureHistory, MeasureHistoryMetaData>) => MutableModel<MeasureHistory, MeasureHistoryMetaData> | void): MeasureHistory;
}

export declare class Measure {
  readonly id: string;
  readonly name?: string;
  readonly measureType?: string;
  readonly measureHistories?: (MeasureHistory | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Measure, MeasureMetaData>);
  static copyOf(source: Measure, mutator: (draft: MutableModel<Measure, MeasureMetaData>) => MutableModel<Measure, MeasureMetaData> | void): Measure;
}

export declare class History {
  readonly id: string;
  readonly date?: string;
  readonly weightLb?: string;
  readonly weightKg?: string;
  readonly exerciseID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<History, HistoryMetaData>);
  static copyOf(source: History, mutator: (draft: MutableModel<History, HistoryMetaData>) => MutableModel<History, HistoryMetaData> | void): History;
}

export declare class Muscle {
  readonly id: string;
  readonly name?: string;
  readonly category?: string;
  readonly image_url?: string;
  readonly exercises?: (ExerciseMuscle | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Muscle, MuscleMetaData>);
  static copyOf(source: Muscle, mutator: (draft: MutableModel<Muscle, MuscleMetaData>) => MutableModel<Muscle, MuscleMetaData> | void): Muscle;
}

export declare class Exercise {
  readonly id: string;
  readonly name?: string;
  readonly routines?: (RoutineExercise | null)[];
  readonly muscles?: (ExerciseMuscle | null)[];
  readonly histories?: (History | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Exercise, ExerciseMetaData>);
  static copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise, ExerciseMetaData>) => MutableModel<Exercise, ExerciseMetaData> | void): Exercise;
}

export declare class Routine {
  readonly id: string;
  readonly name?: string;
  readonly planName?: string;
  readonly exercises?: (RoutineExercise | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Routine, RoutineMetaData>);
  static copyOf(source: Routine, mutator: (draft: MutableModel<Routine, RoutineMetaData>) => MutableModel<Routine, RoutineMetaData> | void): Routine;
}

export declare class LibraryRoutine {
  readonly id: string;
  readonly name?: string;
  readonly planName?: string;
  readonly libraryExercises?: (LibraryRoutineLibraryExercise | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LibraryRoutine, LibraryRoutineMetaData>);
  static copyOf(source: LibraryRoutine, mutator: (draft: MutableModel<LibraryRoutine, LibraryRoutineMetaData>) => MutableModel<LibraryRoutine, LibraryRoutineMetaData> | void): LibraryRoutine;
}

export declare class LibraryExercise {
  readonly id: string;
  readonly name?: string;
  readonly categoryName?: string;
  readonly libraryroutines?: (LibraryRoutineLibraryExercise | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LibraryExercise, LibraryExerciseMetaData>);
  static copyOf(source: LibraryExercise, mutator: (draft: MutableModel<LibraryExercise, LibraryExerciseMetaData>) => MutableModel<LibraryExercise, LibraryExerciseMetaData> | void): LibraryExercise;
}

export declare class ExerciseMuscle {
  readonly id: string;
  readonly muscleID: string;
  readonly exerciseID: string;
  readonly muscle: Muscle;
  readonly exercise: Exercise;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ExerciseMuscle, ExerciseMuscleMetaData>);
  static copyOf(source: ExerciseMuscle, mutator: (draft: MutableModel<ExerciseMuscle, ExerciseMuscleMetaData>) => MutableModel<ExerciseMuscle, ExerciseMuscleMetaData> | void): ExerciseMuscle;
}

export declare class RoutineExercise {
  readonly id: string;
  readonly exerciseID: string;
  readonly routineID: string;
  readonly exercise: Exercise;
  readonly routine: Routine;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<RoutineExercise, RoutineExerciseMetaData>);
  static copyOf(source: RoutineExercise, mutator: (draft: MutableModel<RoutineExercise, RoutineExerciseMetaData>) => MutableModel<RoutineExercise, RoutineExerciseMetaData> | void): RoutineExercise;
}

export declare class LibraryRoutineLibraryExercise {
  readonly id: string;
  readonly libraryRoutineID: string;
  readonly libraryExerciseID: string;
  readonly libraryRoutine: LibraryRoutine;
  readonly libraryExercise: LibraryExercise;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LibraryRoutineLibraryExercise, LibraryRoutineLibraryExerciseMetaData>);
  static copyOf(source: LibraryRoutineLibraryExercise, mutator: (draft: MutableModel<LibraryRoutineLibraryExercise, LibraryRoutineLibraryExerciseMetaData>) => MutableModel<LibraryRoutineLibraryExercise, LibraryRoutineLibraryExerciseMetaData> | void): LibraryRoutineLibraryExercise;
}