import CreateRoomButton from "@/components/create-room-button";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-4 p-4">
            <h1 className="text-center font-title text-9xl">BadgerBox</h1>
            <CreateRoomButton />
        </div>
    );
}
