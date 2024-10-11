import { ReactNode } from "react";
import Header from "./header";

interface PageProps {
    children?: ReactNode;
}

const Page = ({ children }: PageProps) => {
    return (
        <Header
            as="h1"
            className="pattern-size-10 pattern-dots my-10 rounded-3xl border-14 border-lime-500 px-10 py-4 text-center text-lime-500 shadow-solid-lg pattern-bg-slate-700 pattern-lime-800 pattern-opacity-100"
        >
            {children}
        </Header>
    );
};

export default Page;
