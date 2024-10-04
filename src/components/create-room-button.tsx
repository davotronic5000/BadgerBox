"use client";

import createRoom from "@/room/create-new-room";

interface CreateRoomButtonProps {}

const CreateRoomButton = ({}: CreateRoomButtonProps) => {
    return <button onClick={() => createRoom()}>Create Room</button>;
};

export default CreateRoomButton;
