import { ChakraComponent } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
declare const variants: {
    default: {
        bg: string;
        fg: string;
    };
    primary: {
        bg: string;
        fg: string;
    };
    removed: {
        bg: string;
        fg: string;
    };
    success: {
        bg: string;
        fg: string;
    };
    warning: {
        bg: string;
        fg: string;
    };
    danger: {
        bg: string;
        fg: string;
    };
};
export declare type FlowHeaderVariant = keyof typeof variants;
export interface FlowHeaderProps {
    title: ReactNode;
    subtitle?: ReactNode;
    variant?: FlowHeaderVariant;
    size?: "md" | "lg";
    icon?: ChakraComponent<"svg">;
    isLoading?: boolean;
}
declare const FlowHeader: FC<FlowHeaderProps>;
export { FlowHeader };
