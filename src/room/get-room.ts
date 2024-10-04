"use server";

import { createClient } from "redis";
import Room from "./room";

const getRoom = async (code: string) => {
    const c = code.toUpperCase();
    if (c.match(/^[A-Z]{4}$/)) {
        const client = createClient();
        client.on("error", (err) => console.log("Redis Client Error", err));
        await client.connect();
        const room = await client.get(c);
        await client.disconnect();
        if (room) {
            return new Room(room);
        }
    }
    return null;
};

export default getRoom;
