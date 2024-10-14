import { DefaultJobOptions } from 'bullmq/dist/esm/interfaces/base-job-options';
import { parseRedisUrl } from '../lib/extractRedisConfig';

export const environments = {
  queueConfigurationDefault: {
    defaultJobOptions: {
      removeOnComplete: {
        count: 5000
      },
      removeOnFail: {
        count: 5000
      }
    } as DefaultJobOptions,
    connection: parseRedisUrl(process.env.REDISURL || 'redis://...')
  },
};
