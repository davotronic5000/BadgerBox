import { ReactNode } from "react";
import {
    Button as ButtonAria,
    ButtonProps as ButtonAriaProps,
} from "react-aria-components";

interface ButtonProps extends ButtonAriaProps {
    children: ReactNode;
    size?: "md" | "lg";
}

const buttonSizes = {
    md: "px-4 py-2 text-xl",
    lg: "px-8 py-4 text-3xl",
};

const Button = ({ children, size = "md", ...rest }: ButtonProps) => {
    return (
        <ButtonAria
            className={`rounded-1xl border-4 border-lime-500 bg-green-800 font-bold uppercase text-lime-500 shadow-solid-sm transition duration-300 hover:bg-green-900 ${buttonSizes[size]}`}
            {...rest}
        >
            {children}
        </ButtonAria>
    );
};

export default Button;
