"use client";

import createRoom from "@/room/create-new-room";
import Button from "../button/button";

interface CreateRoomButtonProps {}

const CreateRoomButton = ({}: CreateRoomButtonProps) => {
    return (
        <Button onPress={() => createRoom()} size="lg">
            Create Room
        </Button>
    );
};

export default CreateRoomButton;
