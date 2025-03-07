"use server";

import { jsonMapSetReplacer } from "@/utilities/json-serialisation";
import redisConnect from "@/utilities/redis";
import { redirect } from "next/navigation";
import Room, { createRoom } from "./room";

const createNewRoom = async () => {
    const newRoom = createRoom();
    const client = await redisConnect();

    await client.set(newRoom.id, JSON.stringify(newRoom, jsonMapSetReplacer));
    redirect(`/room/${newRoom.id}/owner`);
};

export const updateRoom = async (room: Room) => {
    const client = await redisConnect();
    await client.set(room.id, JSON.stringify(room, jsonMapSetReplacer));
    console.log("updated");
};

export default createNewRoom;
