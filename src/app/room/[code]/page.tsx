import getRoom from "@/room/get-room";
import NoRoom from "./no-room";
import Room from "./room";

interface PageProps {
    params: { code: string };
}

const Page = async ({ params }: PageProps) => {
    const code = params.code.toUpperCase();
    const room = await getRoom(code);
    if (room) {
        return <Room room={room} />;
    }
    return <NoRoom code={code} />;
};

export default Page;
