import { Button } from "@chakra-ui/react";
/** as a convenience */
export { Button };
export declare const buttonTheme: {
    baseStyle?: ((props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        display: string;
        alignIitems: string;
        justifyContent: string;
        outline: string;
        border: string;
        textAlign: string;
        rounded: string;
        fontWeight: string;
        _active: {
            transform: string;
        };
        cursor: string;
        _disabled: {
            pointerEvents: string;
        };
        _focusVisible: {
            boxShadow: string;
        };
    }) | undefined;
    sizes?: {
        auto: {};
        "3xs": {
            px: string;
            py: number;
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        "2xs": {
            minHeight: number;
            px: number;
            py: number;
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        xs: {
            minHeight: number;
            px: number;
            py: number;
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        sm: {
            minHeight: number;
            px: number;
            py: number;
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        md: {
            minHeight: number;
            px: number;
            py: number;
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        lg: {
            minHeight: number;
            px: number;
            py: number;
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
    } | undefined;
    variants?: {
        outline: {};
        solid: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            bg: string;
            color: string;
            _hover: {
                bg: string;
                color?: undefined;
            };
            _active: {
                bg: string;
                color?: undefined;
            };
            boxShadow?: undefined;
        } | {
            bg: string;
            color: string;
            boxShadow: string;
            _hover: {
                color: string;
                bg: string;
            };
            _active: {
                color: string;
                bg: string;
            };
        } | {
            bg: string;
            color: string;
            _hover: {
                color: string;
                bg: string;
            };
            _active: {
                color: string;
                bg: string;
            };
            boxShadow?: undefined;
        };
    } | undefined;
    defaultProps?: {
        size?: "sm" | "md" | "lg" | "auto" | "3xs" | "2xs" | "xs" | undefined;
        variant?: "outline" | "solid" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
export declare const ButtonRect: import("@chakra-ui/system/dist/system.types").ChakraComponent<import("@chakra-ui/system/dist/system.types").ComponentWithAs<"button", import("@chakra-ui/button/dist/button").ButtonProps>, {}>;
