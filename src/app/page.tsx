import CreateRoomButton from "@/components/create-room-button";

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-y-4 p-4">
            <h1 className="shadow-solid-lg border-14 pattern-dots pattern-lime-800 pattern-bg-slate-700 pattern-size-10 pattern-opacity-100 mb-10 rounded-3xl border-lime-500 px-10 py-4 text-center font-title text-9xl text-lime-500">
                BadgerBox
            </h1>
            <CreateRoomButton />
        </div>
    );
}
