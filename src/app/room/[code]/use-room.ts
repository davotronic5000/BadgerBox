import { Member } from "@/member/member";
import { updateRoom } from "@/room/create-new-room";
import getRoom from "@/room/get-room";
import Room from "@/room/room";
import { enableMapSet, produce } from "immer";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";

enableMapSet();

const useRoom = (initialRoom: Room) => {
    const [room, updateRoomState] = useState(initialRoom);

    const addMember = useCallback(
        async (
            member: Member,
            role: "audience" | "players",
            updateDatabase: boolean = false,
        ) => {
            const oppositeRole = role === "audience" ? "players" : "audience";
            let existingRoom = room;
            if (updateDatabase) {
                const dbRoom = await getRoom(room.id);
                if (dbRoom) {
                    existingRoom = dbRoom;
                } else {
                    redirect("/room/no-room");
                }
            }
            const newRoom = produce((draft: Room) => {
                draft.members.set(member.id, member);
                draft[role].add(member.id);
                draft[oppositeRole].delete(member.id);
            })(existingRoom);
            if (updateDatabase) {
                await updateRoom(newRoom);
            }
            updateRoomState(newRoom);
        },
        [updateRoomState, room],
    );

    const updateMember = useCallback(
        async (memberId: string, role: "audience" | "players") => {
            const oppositeRole = role === "audience" ? "players" : "audience";
            const newRoom = produce((draft: Room) => {
                draft[role].add(memberId);
                draft[oppositeRole].delete(memberId);
            })(room);
            updateRoomState(newRoom);
        },
        [updateRoomState, room],
    );

    return {
        room,
        addMember,
        updateMember,
    };
};

export default useRoom;
