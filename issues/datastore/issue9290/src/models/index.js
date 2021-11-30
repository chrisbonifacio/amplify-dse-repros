// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Part } = initSchema(schema);

export {
  Part
};