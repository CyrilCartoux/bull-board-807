/**
 * Extracts the redis config from the environment variables
 * @param redisUrl
 */
export function parseRedisUrl (redisUrl) {
  const [host, port] = redisUrl.replace('redis://', '').split(':');
  return { host, port: parseInt(port, 10) || 6379 };
}
