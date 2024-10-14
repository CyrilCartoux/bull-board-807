/**
 * This job will fetch the waiting transactions in the database
 * update them to queued : true
 * and send them to the "sendTransaction" job
 */
import { Worker } from 'bullmq';

import { fetchAndBroadcastFactory } from './fetchAndBroadcastWaitingTransactionsJobFactory';
import { queueFetchAndBroadcastWaitingTransactions } from '../../lib/queue';
import { environments } from '../../config/environment';

export const queue = queueFetchAndBroadcastWaitingTransactions;

export const worker = new Worker(
  queue.name,
  fetchAndBroadcastFactory(),
  {
    connection: environments.queueConfigurationDefault.connection,
    autorun: false,
    concurrency: 1
  }
);
