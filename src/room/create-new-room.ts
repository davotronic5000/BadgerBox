"use server";

import { redirect } from "next/navigation";
import Room, { createRoom } from "./room";
import {jsonMapSetReplacer} from '@/utilities/json-serialisation';
import redisClient from "@/utilities/redis";
import { Member } from "@/member/member";

const createNewRoom = async () => {
    const newRoom = createRoom();
    const client = await redisClient;

    await client.set(newRoom.id, JSON.stringify(newRoom, jsonMapSetReplacer));
    redirect(`/room/${newRoom.id}/owner`);
};

export const addMember = (room: Room) => async (member: Member)  => {
    room.members.set(member.id, member);
    room.audience.add(member.id);
    const client = await redisClient;
    await client.set(room.id, JSON.stringify(room, jsonMapSetReplacer));
}

export default createNewRoom;
