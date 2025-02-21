import { createClient } from 'redis';

const createRedisClient = () => {
    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    return client.connect();
}

const redisClient = createRedisClient();

export default redisClient;