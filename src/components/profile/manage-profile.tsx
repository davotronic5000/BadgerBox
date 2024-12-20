"use client";
import Card from "../card/card";
import Header from "../headers/header";
import EditName from "./edit-name";

interface ManageProfileProps {}

const ManageProfile = ({}: ManageProfileProps) => {
    return (
        <Card className="min-w-full md:min-w-[500px]">
            <div className="flex min-w-full flex-col items-center border-y-4 border-dashed border-gray-200 py-4">
                <Header
                    as="h2"
                    className="rounded-sm bg-lime-500 px-8 py-2 text-gray-800"
                >
                    Profile
                </Header>
            </div>
            <div className="flex w-full flex-col items-center py-4">
                <EditName />
            </div>
        </Card>
    );
};

export default ManageProfile;
