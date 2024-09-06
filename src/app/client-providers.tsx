"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { RouterProvider } from "react-aria-components";

interface ClientProvidersProps {
    children?: ReactNode;
}

declare module "react-aria-components" {
    interface RouterConfig {
        routerOptions: NonNullable<
            Parameters<ReturnType<typeof useRouter>["push"]>[1]
        >;
    }
}

const ClientProviders = ({ children }: ClientProvidersProps) => {
    const router = useRouter();
    return (
        <RouterProvider navigate={router.push as (path: string) => void}>
            {children}
        </RouterProvider>
    );
};

export default ClientProviders;
