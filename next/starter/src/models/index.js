// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customer, City, MappedTodo, Project, Team, JSONData, Flight, Aircraft, S3Object, AircraftSpecs } = initSchema(schema);

export {
  Customer,
  City,
  MappedTodo,
  Project,
  Team,
  JSONData,
  Flight,
  Aircraft,
  S3Object,
  AircraftSpecs
};