import { Member } from "@/member/member";
import Room, { createRoom } from "@/room/room";
import { useImmerReducer } from "use-immer";

export const addAudienceMember = (member: Member) => {
    return {
        type: 'ADD_AUDIENCE',
        payload: {
            member
        }
    }
}

type RoomActions = ReturnType<typeof addAudienceMember>

const useRoom = (initialRoom: Room) => {
    const [room, dispatch] = useImmerReducer<Room, RoomActions>((draft, action) => {
        switch (action.type) {
            case 'ADD_AUDIENCE':
                const member = action.payload.member
                draft.members.set(member.id, member)
                draft.audience.add(member.id);
                break;
            default:
                break;
        }
    },initialRoom);
    return {
        room,
        dispatchRoomAction: dispatch,
    }
}

export default useRoom;