"use server";

import { createRoom } from "./room";
import redisConnect from "@/utilities/redis";

const getRoom = async (code: string) => {
    const c = code.toUpperCase();
    if (c.match(/^[A-Z]{4}$/)) {
        const client = await redisConnect();
        const room = await client.get(c);
        if (room) {
            return createRoom(room);
        }
    }
    return null;
};

export default getRoom;
