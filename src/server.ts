/**
 * This is used to see the dashboard
 */
import bodyParser from 'body-parser';
import express from 'express';
import { environments } from './config/environment';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { JobsEnum } from './enums/jobsEnum';
import { Queue } from 'bullmq';

(async () => {
  try {
    // Start the instance and define the jobs
    await (async () => {

      const app = express();

      /**
       * Queues setup for Bull Dashboard
       */
      const chains = [77];
      chains.forEach((chainId) => {
        const path = '/admin/queues/' + chainId;
        const serverAdapter = new ExpressAdapter();
        serverAdapter.setBasePath(path);

        const queueNames = Object.values(JobsEnum);
        const queues: Queue[] = [];

        queueNames.forEach((queueName) => {
          queues.push(
            new Queue(`${chainId}_${queueName}`, {
              ...environments.queueConfigurationDefault
            })
          );
        });
        createBullBoard({
          queues: queues.map((queue) => new BullAdapter(queue, {})),
          serverAdapter
        });
        app.use(
          path,
          serverAdapter.getRouter()
        );
      });

      app.use(bodyParser.json());
      app.get('/', (req, res) => {
        res.send('Well done!');
      });

      app.listen(3232, () => {
        console.log('The server is listening on port 3232!');
      });
    })();
  } catch (err) {
    console.error(err);
  }
})();
