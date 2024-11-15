"use client";
import Button from "@/components/button/button";
import Card from "@/components/card/card";
import Header from "@/components/headers/header";
import { useCallback, useEffect, useState } from "react";
import MemberList from "./member-list";
import { socket } from "./socket";

interface RoomProps {
    code: string;
}

export interface MemberLists {
    owners: string[];
    players: string[];
    audience: string[];
}

export const defaultMemberLists = {
    owners: [],
    players: [],
    audience: [],
};

const Room = ({ code }: RoomProps) => {
    const [memberList, setMemberList] =
        useState<MemberLists>(defaultMemberLists);
    const [memberStatusType, setMemberStatusType] = useState<
        "player" | "audience"
    >("audience");

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        } else {
            socket.connect();
        }

        function onConnect() {
            console.log("connected");
            socket.emit("joinRoom", code);
        }

        socket.on("connect", onConnect);
        socket.on("memberList", (players) => {
            setMemberList(players);
        });
        socket.on("memberStatus", (member) => {
            setMemberStatusType(member.memberType);
        });
        socket.onAny((event, ...args) => {
            console.log(event, args);
        });

        return () => {
            socket.off("connect", onConnect);
            socket.removeAllListeners();
            socket.offAny();
        };
    }, [code]);
    const joinAsPlayer = useCallback(() => {
        socket.emit("becomePlayer", code);
    }, [code]);
    const joinAsAudience = useCallback(() => {
        socket.emit("becomeAudience", code);
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
                <MemberList title="Players">
                    {memberList.players.map((player) => (
                        <div key={player}>{player}</div>
                    ))}
                    {
                        <Button
                            onPress={
                                memberStatusType === "audience"
                                    ? joinAsPlayer
                                    : joinAsAudience
                            }
                        >
                            {memberStatusType === "audience" ? "Join" : "Leave"}
                        </Button>
                    }
                </MemberList>
                <MemberList title="Audience">
                    {memberList.audience.map((audience) => (
                        <div key={audience}>{audience}</div>
                    ))}
                </MemberList>
            </div>
        </Card>
    );
};

export default Room;
