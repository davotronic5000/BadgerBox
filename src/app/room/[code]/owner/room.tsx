"use client";
import Card from "@/components/card/card";
import Header from "@/components/headers/header";
import { useCallback, useEffect } from "react";
import MemberList from "../member-list";
import { socket } from "../socket";
import useMemberList from "../use-member-list";

interface RoomProps {
    code: string;
}

const Room = ({ code }: RoomProps) => {
    const { audienceList, playerList } = useMemberList();

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        } else {
            socket.connect();
        }

        function onConnect() {
            console.log("connected");
            socket.emit("joinRoomAsOwner", code);
        }

        socket.on("connect", onConnect);

        socket.onAny((event, ...args) => {
            console.log(event, args);
        });

        return () => {
            socket.off("connect", onConnect);
            socket.removeAllListeners();
            socket.offAny();
        };
    }, [code]);
    const demotePlayer = useCallback(
        (playerId: string) => {
            socket.emit("demotePlayer", code, playerId);
        },
        [code],
    );
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
                    members={playerList.items}
                    demotePlayerFunction={demotePlayer}
                ></MemberList>
                <MemberList
                    title="Audience"
                    members={audienceList.items}
                ></MemberList>
            </div>
        </Card>
    );
};

export default Room;
