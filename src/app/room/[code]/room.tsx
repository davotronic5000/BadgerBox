"use client";
import Button from "@/components/button/button";
import Card from "@/components/card/card";
import Header from "@/components/headers/header";
import getMember from "@/member/get-member";
import { Member } from "@/member/member";
import {
    getMemberIDFromLocalStorage,
    storeMemberIDInLocalStorage,
} from "@/member/member-local-storage";
import useRoom, { addAudienceMember } from "@/reducers/use-room";
import Room from "@/room/room";
import { useCallback, useEffect, useState } from "react";
import MemberList from "./member-list";
import { socket } from "./socket";
import { memberType } from "./use-member-list";

interface RoomProps {
    initialRoom: Room;
}

const GameRoom = ({ initialRoom }: RoomProps) => {
    const { room, dispatchRoomAction } = useRoom(initialRoom);
    const code = room.id;
    const [memberStatusType, setMemberStatusType] = useState<memberType | null>(
        null,
    );
    const [member, setMember] = useState<Member | null>(null);

    useEffect(() => {
        async function handleMember() {
            if (!member) {
                const existingId = getMemberIDFromLocalStorage();
                const newMember = await getMember(existingId);
                if (existingId !== newMember.id) {
                    storeMemberIDInLocalStorage(newMember.id);
                }
                setMember(newMember);
            }
        }
        handleMember();
    }, [setMember, member]);

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        } else {
            socket.connect();
        }

        async function onConnect() {
            if (member && memberStatusType === null) {
                socket.emit("joinRoom", code, member.id, member);
                dispatchRoomAction(addAudienceMember(member));
            }
        }

        socket.on("connect", onConnect);
        socket.on(
            "newMember",
            (payload: {
                id: string;
                member: Member;
                memberType: memberType;
            }) => {
                if (payload.id === member?.id) {
                    setMemberStatusType(payload.memberType);
                }
            },
        );

        socket.onAny((event, ...args) => {
            console.log(event, args);
        });

        return () => {
            socket.off("connect", onConnect);
            socket.removeAllListeners();
            socket.offAny();
        };
    }, [code, member, memberStatusType, room]);
    const joinAsPlayer = useCallback(() => {
        socket.emit("becomePlayer", code);
        setMemberStatusType("player");
    }, [code]);
    const joinAsAudience = useCallback(() => {
        socket.emit("becomeAudience", code);
        setMemberStatusType("audience");
    }, [code]);
    return (
        <Card className="w-4/5 min-w-full md:min-w-[500px]">
            <div className="flex min-w-full flex-col items-center border-y-4 border-dashed border-gray-200 py-4">
                <Header as="h4">Room Code</Header>
                <Header
                    as="h2"
                    className="rounded-sm bg-lime-500 px-8 py-2 text-gray-800"
                >
                    {code}
                </Header>
            </div>
            <div className="grid min-w-full grid-cols-2 gap-4 p-4">
                <MemberList
                    title="Players"
                    members={room.members}
                    attendees={room.players}
                >
                    <Button
                        onPress={
                            memberStatusType === "audience"
                                ? joinAsPlayer
                                : joinAsAudience
                        }
                    >
                        {memberStatusType === "audience" ? "Join" : "Leave"}
                    </Button>
                </MemberList>
                <MemberList
                    title="Audience"
                    members={room.members}
                    attendees={room.audience}
                ></MemberList>
            </div>
        </Card>
    );
};

export default GameRoom;
