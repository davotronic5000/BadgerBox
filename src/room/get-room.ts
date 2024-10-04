"use server";

import { createClient } from "redis";
import Room from "./room";

const getRoom = async (code: string) => {
    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
    const room = await client.get(code);
    await client.disconnect();
    if (room) {
        return new Room(room);
    }
};

export default getRoom;
