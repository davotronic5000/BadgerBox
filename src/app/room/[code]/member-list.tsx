import Header from "@/components/headers/header";
import { ReactNode } from "react";

interface MemberListProps {
    title: ReactNode;
    children?: ReactNode;
}

const MemberList = ({ children, title }: MemberListProps) => {
    return (
        <div className="flex flex-col items-center gap-y-2 rounded-md bg-gray-700 p-4 text-center">
            <Header as="h3" className="underline">
                {title}
            </Header>
            {children}
        </div>
    );
};

export default MemberList;
