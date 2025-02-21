import { createClient } from 'redis';

const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));

const redisConnect = async () => {
    if (!client.isOpen) {
        await client.connect();
    }
    return client;
}

export default redisConnect;