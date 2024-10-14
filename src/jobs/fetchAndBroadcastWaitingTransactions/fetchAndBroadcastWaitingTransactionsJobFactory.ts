/**
 * This job will fetch the waiting transactions in the database
*/
import { JobsEnum } from '../../enums/jobsEnum';
import { Job } from 'bullmq';

export const fetchAndBroadcastFactory =
  () => async (job: Job<{ origin: JobsEnum; error: any; chainId: string }>) => {
    try {

      job.log(`👀 Found waiting transactions in x NMP...`);

    } catch (err) {
      job.log(`❌ Error from fetchAndBroadcastWaitingTransactions ${err}`);
      console.error({
        error: err
      });
    }
  };
