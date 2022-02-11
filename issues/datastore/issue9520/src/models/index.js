// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Fleet, Vehicle } = initSchema(schema);

export {
  Fleet,
  Vehicle
};