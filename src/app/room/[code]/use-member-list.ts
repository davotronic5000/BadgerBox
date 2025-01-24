import { Member } from "@/member/member";
import { useListData } from "react-stately";
import { socket } from "./socket";
import { useCallback, useEffect } from "react";

export type memberType = "owner" | "player" | "audience";

const useMemberList = () => {
    const playerList = useListData<Member>({
        initialItems: [],
        getKey: (item) => item.id,
    });
    const audienceList = useListData<Member>({
        initialItems: [],
        getKey: (item) => item.id,
    });

    const addNewMember = useCallback((type: memberType, member: Member) => {
        if (type === "audience" || type === 'player') {
            const list = type === 'audience' ? audienceList : playerList;
            if (list.getItem(member.id)) {
                list.update(member.id, member);
            } else {
                list.append(member);
            }
        };
    }, [audienceList, playerList]);
    const updateMember = useCallback((type: memberType, id: string) => {
        if (type === "audience" || type === 'player') {
            const oldList = type === 'player' ? audienceList : playerList;
            const newList = type === 'audience' ? audienceList : playerList;
            const oldListMember = oldList.getItem(id);
            if (oldListMember) {
                newList.append(oldListMember);
                oldList.remove(id);
            }
        }
    }, [audienceList, playerList] )

    useEffect(() => {
        if (!socket.connected) {
            socket.connect();
        }

        socket.on(
            "newMember",
            (payload: {
                id: string;
                member: Member;
                memberType: memberType;
            }) => {
                addNewMember(payload.memberType, payload.member);
            },
        );

        socket.on(
            "updatedMember",
            (payload: { id: string; memberType: memberType }) => {
                updateMember(payload.memberType, payload.id);
            },
        );

        return () => {
            socket.off('newMember');
            socket.off('updatedMember');
        };
    }, [addNewMember])
    return {
        audienceList,
        playerList,
    }
}

export default useMemberList;