import { generateCode } from "./generate-room-code";

export class Room {
    readonly id: string;
    constructor(jsonString?: string) {
        if (jsonString) {
            const json = JSON.parse(jsonString);
            this.id = json.id;
        }
        this.id = generateCode();
    }
}

export default Room;
