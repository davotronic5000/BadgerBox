import { ReactNode } from "react";
import {
    Button as ButtonAria,
    ButtonProps as ButtonAriaProps,
} from "react-aria-components";

interface ButtonProps extends ButtonAriaProps {
    children: ReactNode;
    size?: "md" | "lg" | "icon";
    icon?: ReactNode;
}

const buttonSizes = {
    md: "px-4 py-2 text-xl",
    lg: "px-8 py-4 text-3xl",
    icon: "p-1 !border-2 text-sm",
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
            className={`rounded-1xl flex items-center border-4 border-lime-500 bg-green-800 font-bold uppercase leading-none text-lime-500 shadow-solid-sm transition duration-300 hover:bg-green-900 ${buttonSizes[size]} ${className}`}
            {...rest}
        >
            {icon}{" "}
            <span className={`pt-0.5 ${icon ? "pl-1" : ""}`}>{children}</span>
        </ButtonAria>
    );
};

export default Button;
