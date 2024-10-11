"use client";
import Card from "@/components/card/card";
import Header from "@/components/headers/header";
import { useEffect, useState } from "react";
import { socket } from "../socket";

interface RoomProps {
    code: string;
}

const Room = ({ code }: RoomProps) => {
    const [playerList, setPlayerList] = useState<string[]>([]);

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
        socket.on("playerList", (players) => {
            setPlayerList(players);
        });
        socket.onAny((event, ...args) => {
            console.log(event, args);
        });

        return () => {
            socket.off("connect", onConnect);
            socket.removeAllListeners();
            socket.offAny();
        };
    }, []);
    return (
        <Card className="min-w-full md:min-w-[500px]">
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
                <div className="rounded-md bg-gray-700 p-4 text-center underline">
                    <Header as="h3">Players</Header>
                    {playerList.map((player) => (
                        <div key={player}>{player}</div>
                    ))}
                </div>
                <div className="rounded-md bg-gray-700 p-4 text-center underline">
                    <Header as="h3">Audience</Header>
                </div>
            </div>
        </Card>
    );
};

export default Room;
