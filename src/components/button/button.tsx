import { ReactNode } from "react";
import {
    Button as ButtonAria,
    ButtonProps as ButtonAriaProps,
} from "react-aria-components";

interface ButtonProps extends ButtonAriaProps {
    children?: ReactNode;
    size?: "md" | "lg" | "icon";
    icon?: ReactNode;
}

const buttonSizes = {
    md: "px-2 py-1 text-lg border-2 md:px-4 md:py-2 md:text-xl md:border-4 shadow-solid-sm",
    lg: "px-4 py-2 text-xl border-2 md:px-6 md:text-2xl md:border-4 lg:px-8 lg:py-4 lg:text-3xl shadow-solid-sm",
    icon: "p-1 text-sm bg-slate-800",
};

const Button = ({
    children,
    size = "md",
    icon,
    className,
    ...rest
}: ButtonProps) => {
    return (
        <ButtonAria
            className={`rounded-1xl flex items-center border-lime-500 bg-green-800 font-bold uppercase leading-none text-lime-500 transition duration-300 hover:bg-green-900 ${buttonSizes[size]} ${className}`}
            {...rest}
        >
            {icon}{" "}
            {children && (
                <span className={`pt-0.5 ${icon ? "pl-1" : ""}`}>
                    {children}
                </span>
            )}
        </ButtonAria>
    );
};

export default Button;
