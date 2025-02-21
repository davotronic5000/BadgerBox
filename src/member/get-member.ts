"use server";

import { createMember } from "./member";
import redisClient from "@/utilities/redis";

const getMember = async (id: string | null) => {
        const client = await redisClient;
        let member;
        if (id) {
            const dbMember = await client.get(id);
            if (dbMember) {
                member = createMember(dbMember);
            }
        }
        if (!member) {
            member = createMember();
            await client.set(member.id, JSON.stringify(member))
        }
        await client.disconnect();
        return member;
};

export default getMember;
