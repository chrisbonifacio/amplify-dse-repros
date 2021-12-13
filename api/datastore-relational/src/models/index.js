// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customers, Orders } = initSchema(schema);

export {
  Customers,
  Orders
};