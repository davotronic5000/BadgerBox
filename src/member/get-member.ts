"use server";

import redisConnect from "@/utilities/redis";
import { createMember } from "./member";

const getMember = async (id: string | null) => {
        const client = await redisConnect() ;
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
        return member;
};

export default getMember;
