"use client";
import Button from "@/components/button/button";
import Card from "@/components/card/card";
import Header from "@/components/headers/header";
import { useCallback, useEffect, useState } from "react";
import { socket } from "./socket";

interface RoomProps {
    code: string;
}

const Room = ({ code }: RoomProps) => {
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState("N/A");
    const [lastMessage, setMessage] = useState("N/A");

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);

            socket.io.engine.on("upgrade", (transport) => {
                setTransport(transport.name);
            });
        }

        function onDisconnect() {
            setIsConnected(false);
            setTransport("N/A");
            setMessage("N/A");
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("hello", (value) => {
            setMessage(value);
        });
        socket.onAny((event, ...args) => {
            console.log(event, args);
        });

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("hello");
            socket.off("test");
        };
    }, []);
    const joinAsPlayer = useCallback(() => {
        socket.emit("test", "player");
    }, []);
    return (
        <Card className="min-w-full md:min-w-[500px]">
            <div>
                <p>Status: {isConnected ? "connected" : "disconnected"}</p>
                <p>Transport: {transport}</p>
                <p>Message: {lastMessage}</p>
            </div>
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
                    <Button onPress={joinAsPlayer}>Join</Button>
                </div>
                <div className="rounded-md bg-gray-700 p-4 text-center underline">
                    <Header as="h3">Audience</Header>
                </div>
            </div>
        </Card>
    );
};

export default Room;
