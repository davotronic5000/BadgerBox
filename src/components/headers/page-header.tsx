import { ReactNode } from "react";
import Header from "./header";

interface PageProps {
    children?: ReactNode;
}

const Page = ({ children }: PageProps) => {
    return (
        <Header
            as="h1"
            className="md:pattern-size-10 md:shadow-solid-md pattern-dots my-4 rounded-xl border-4 border-lime-500 px-4 py-2 text-center text-lime-500 shadow-solid-sm pattern-bg-slate-700 pattern-lime-800 pattern-opacity-100 pattern-size-4 md:my-10 md:rounded-2xl md:border-8 md:px-10 lg:rounded-3xl lg:border-14 lg:shadow-solid-lg"
        >
            {children}
        </Header>
    );
};

export default Page;
