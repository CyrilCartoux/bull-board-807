import { Queue } from 'bullmq';
import { JobsEnum } from '../enums/jobsEnum';
import { environments } from '../config/environment';
import { mergeDefaultConfig } from './mergeDefaultConfig';

const getQueueName = (jobName: string) => {
  const queueName = '77_' + jobName;
  return queueName;
};

export const queueTrackPendingTransaction = new Queue(
  getQueueName(JobsEnum.trackPendingTransaction),
  {
    ...environments.queueConfigurationDefault,
    defaultJobOptions: mergeDefaultConfig({
      attempts: 5,
      backoff: {
        type: 'exponential',
        delay: 2000
      },
      removeOnComplete: {
        count: 10_000
      },
      removeOnFail: {
        count: 1000
      }
    })
  }
);


export const queueFetchAndBroadcastWaitingTransactions = new Queue(
  getQueueName(JobsEnum.fetchAndBroadcastWaitingTransactions),
  {
    ...environments.queueConfigurationDefault
  }
);
