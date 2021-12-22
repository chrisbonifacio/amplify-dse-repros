// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Unit, MeasureHistory, Measure, History, Muscle, Exercise, Routine, LibraryRoutine, LibraryExercise, ExerciseMuscle, RoutineExercise, LibraryRoutineLibraryExercise } = initSchema(schema);

export {
  Unit,
  MeasureHistory,
  Measure,
  History,
  Muscle,
  Exercise,
  Routine,
  LibraryRoutine,
  LibraryExercise,
  ExerciseMuscle,
  RoutineExercise,
  LibraryRoutineLibraryExercise
};