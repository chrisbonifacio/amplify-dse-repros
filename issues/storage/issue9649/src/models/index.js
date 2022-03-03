// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customer, City, Todo, Project, Team, S3Object } = initSchema(schema);

export {
  Customer,
  City,
  Todo,
  Project,
  Team,
  S3Object
};