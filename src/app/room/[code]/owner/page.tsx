import getRoom from "@/room/get-room";
import NoRoom from "../no-room";
import Room from "./room";

interface PageProps {
    params: { code: string };
}

const Page = async ({ params }: PageProps) => {
    const room = await getRoom(params.code);
    if (room) {
        return <Room code={params.code} />;
    }
    return <NoRoom code={params.code} />;
};

export default Page;
