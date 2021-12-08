// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BodyArea } = initSchema(schema);

export {
  BodyArea
};