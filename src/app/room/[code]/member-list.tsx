import Button from "@/components/button/button";
import Header from "@/components/headers/header";
import { Member } from "@/member/member";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";
import { ListBox, ListBoxItem } from "react-aria-components";

interface MemberListProps {
    title: string;
    members: Map<string, Member>;
    attendees: Set<string>;
    children?: ReactNode;
    demotePlayerFunction?: (memberId: string) => void;
}

const MemberList = ({
    children,
    members,
    attendees,
    demotePlayerFunction,
    title,
}: MemberListProps) => {
    return (
        <div className="flex flex-col items-center gap-y-2 rounded-md bg-gray-700 p-4 text-center">
            <Header as="h3" className="underline">
                {title}
            </Header>
            <ListBox aria-label={title}>
                {Array.from(attendees.values()).map((id) => {
                    const item = members.get(id);
                    if (item) {
                        return (
                            <ListBoxItem
                                textValue={item.name}
                                className="flex items-center"
                                key={id}
                            >
                                {item.name}
                                {demotePlayerFunction && (
                                    <Button
                                        onPress={() =>
                                            demotePlayerFunction(item.id)
                                        }
                                        size="icon"
                                        className="ml-2"
                                        icon={
                                            <XCircleIcon className="size-4" />
                                        }
                                    >
                                        Kick
                                    </Button>
                                )}
                            </ListBoxItem>
                        );
                    }
                    return null;
                })}
            </ListBox>
            {children}
        </div>
    );
};

export default MemberList;
