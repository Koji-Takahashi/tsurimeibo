// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ScanRecord } = initSchema(schema);

export {
  ScanRecord
};