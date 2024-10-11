import { ReactNode } from "react";

interface CardProps {
    children?: ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div
            className={`flex flex-col items-center rounded-md bg-gray-800 p-4 text-gray-200 shadow-solid-lg ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
