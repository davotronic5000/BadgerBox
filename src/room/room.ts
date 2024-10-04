import { generateCode } from "./generate-room-code";

export class Room {
    readonly id: string;
    constructor() {
        this.id = generateCode();
    }
}

export default Room;
