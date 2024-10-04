"use server";

import { createClient } from "redis";
import Room from "./room";

const createRoom = async () => {
    const newRoom = new Room();
    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();

    await client.set(newRoom.id, JSON.stringify(newRoom));
};

export default createRoom;
