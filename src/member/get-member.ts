"use server";

import { createClient } from "redis";
import { createMember, Member } from "./member";

const getMember = async (id: string | null) => {
        const client = createClient();
        client.on("error", (err) => console.log("Redis Client Error", err));
        await client.connect();
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
