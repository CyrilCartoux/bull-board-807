import { DefaultJobOptions } from 'bullmq/dist/esm/interfaces/base-job-options';
import { merge } from 'lodash';
import { environments } from '../config/environment';

/**
 * Return a default config merged with the config passed as parameter
 * @param config
 */
export const mergeDefaultConfig = (config:DefaultJobOptions):DefaultJobOptions => {
  return merge<DefaultJobOptions>(environments.queueConfigurationDefault, config);
};
