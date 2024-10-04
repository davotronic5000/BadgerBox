import getRoom from "@/room/get-room";
import NoRoom from "./no-room";

interface RoomProps {
    params: { code: string };
}

const Room = async ({ params }: RoomProps) => {
    const room = await getRoom(params.code);
    if (room) {
        return (
            <h3 className="shadow-solid-lg my-10 rounded-3xl border-8 border-lime-500 bg-slate-700 px-10 py-4 text-center font-title text-7xl text-lime-500">
                {params.code}
            </h3>
        );
    }
    return <NoRoom code={params.code} />;
};

export default Room;
