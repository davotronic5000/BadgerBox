"use client";
interface CreateRoomButtonProps {}

const CreateRoomButton = ({}: CreateRoomButtonProps) => {
    return (
        <button
            onClick={() => {
                console.log("create room");
            }}
        >
            Create Room
        </button>
    );
};

export default CreateRoomButton;
