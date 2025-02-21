import { Member } from "@/member/member";
import { generateCode } from "./generate-room-code";
import { jsonMapSetReviver } from "@/utilities/json-serialisation";

export interface Room {
    id: string;
    members: Map<string, Member>;
    audience: Set<string>;
    players: Set<string>;
}

export const createRoom = (jsonString?: string): Room => {
    if (jsonString) {
        const json = JSON.parse(jsonString, jsonMapSetReviver);
        return json;
    }
    return {
        id: generateCode(),
        members: new Map(),
        audience: new Set(),
        players: new Set(),
    }
}




export default Room;
