import { worker as fetchAndBroadcastWaitingTransactionsWorker } from './fetchAndBroadcastWaitingTransactions/fetchAndBroadcastWaitingTransactions';

/**
 * This function will start all the jobs
 */
export const startJobs = async () => {
  console.info('starting jobs');
  fetchAndBroadcastWaitingTransactionsWorker.run();
  console.info('queues && workers have been imported and are running');
};
