import {
  queueFetchAndBroadcastWaitingTransactions,
} from './lib/queue';
import { JobsEnum } from './enums/jobsEnum';
import { startJobs } from './jobs';

// Start the instance and define the jobs
(async () => {
  try {
    // Start the instance and define the jobs
    await (async () => {
      try {

        // purge waiting or delayed jobs from queue
        await queueFetchAndBroadcastWaitingTransactions.obliterate({ force: true });

        await startJobs();

        await queueFetchAndBroadcastWaitingTransactions
          .add(JobsEnum.fetchAndBroadcastWaitingTransactions,
            { chainId: 77 },
            {
              jobId: 'repeatqueueFetchAndBroadcastWaitingTransactions',
              repeat: {
                every: 10_000 // every 1 sec
              }
            }
          );
      } catch (err) {
        console.log('error from index');
      }
    })();
  } catch (err) {
    console.error(err);
  }
})();
