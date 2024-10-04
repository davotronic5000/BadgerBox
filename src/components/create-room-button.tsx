"use client";

import createRoom from "@/room/create-new-room";

interface CreateRoomButtonProps {}

const CreateRoomButton = ({}: CreateRoomButtonProps) => {
    return (
        <button
            className="shadow-solid-sm rounded-1xl border-4 border-lime-500 bg-green-800 px-4 py-2 text-xl font-bold uppercase text-lime-500 transition duration-300 hover:bg-green-900"
            onClick={() => createRoom()}
        >
            Create Room
        </button>
    );
};

export default CreateRoomButton;
