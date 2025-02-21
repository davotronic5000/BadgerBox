"use server";

import { redirect } from "next/navigation";
import Room, { createRoom } from "./room";
import {jsonMapSetReplacer} from '@/utilities/json-serialisation';
import { Member } from "@/member/member";
import redisConnect from "@/utilities/redis";

const createNewRoom = async () => {
    const newRoom = createRoom();
    const client = await redisConnect();

    await client.set(newRoom.id, JSON.stringify(newRoom, jsonMapSetReplacer));
    redirect(`/room/${newRoom.id}/owner`);
};

export const addMember = async (room: Room)  => {
    const client = await redisConnect();
    await client.set(room.id, JSON.stringify(room, jsonMapSetReplacer));
}

export default createNewRoom;
