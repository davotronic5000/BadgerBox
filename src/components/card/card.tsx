import { ReactNode } from "react";

interface CardProps {
    children?: ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div
            className={`md:shadow-solid-md flex flex-col items-center rounded-md bg-gray-800 p-4 text-gray-200 shadow-solid-sm lg:shadow-solid-lg ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
