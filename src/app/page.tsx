import CreateRoomButton from "@/components/create-room-button";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-4 p-4">
            <h1 className="text-center font-title text-9xl">BadgerBox</h1>
            <CreateRoomButton />

            <h1 className="text-center font-title text-5xl uppercase">5FORT</h1>
            <h1 className="text-center font-title text-5xl uppercase">IFO1T</h1>
            <h1 className="text-center font-title text-5xl uppercase">LS50T</h1>
            <h1 className="text-center font-title text-5xl uppercase">1LLO0</h1>
        </div>
    );
}
