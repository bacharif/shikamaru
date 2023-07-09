import { AlertProps as ChakraAlertProps } from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactNode } from "react";
export declare const alertTheme: {
    baseStyle?: ((props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        container: {
            display: string;
            alignItems: string;
        };
        icon: {
            rounded: string;
            bg: string;
            color: string;
            fontSize: string;
            w: number;
            h: number;
            alignItems: string;
            justifyContent: string;
        };
        title: {
            letterSpacing: string;
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
        description: {
            fontSize: string;
            lineHeight: string;
            fontWeight: string;
        };
    }) | undefined;
    sizes?: {
        base: {
            container: {
                px: number;
                py: number;
                rounded: string;
            };
        };
        lg: {
            container: {
                p: number;
                rounded: string;
            };
            title: {
                fontSize: string;
                lineHeight: number;
                fontWeight: string;
            };
            description: {
                fontWeight: string;
                color: string;
                fontSize: string;
                lineHeight: number;
            };
        };
    } | undefined;
    variants?: {
        subtle: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            container: {
                bg: string;
                _hover: {
                    bg: string;
                } | {
                    bg?: undefined;
                };
                _active: {
                    bg: string;
                } | {
                    bg?: undefined;
                };
            };
            description: {
                color: string;
            };
        };
        solid: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            container: {
                bg: string;
                _hover: {
                    bg: string;
                } | {
                    bg?: undefined;
                };
                _active: {
                    bg: string;
                } | {
                    bg?: undefined;
                };
            };
            description: {
                color: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: "base" | "lg" | undefined;
        variant?: "solid" | "subtle" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("title" | "container" | "icon" | "description" | "spinner")[];
};
export interface AlertProps extends PropsWithChildren, Omit<ChakraAlertProps, "children"> {
    title?: string;
    description?: string;
    icon?: ReactNode;
}
/**
 * Wraps Chakra Alert {@link https://chakra-ui.com/docs/components/alert}
 * with a simpler API for most common use cases of title, description and icon
 */
export declare const Alert: FC<AlertProps>;
/**
 * Wraps Chakra Alert {@link https://chakra-ui.com/docs/components/alert}
 * with Button behaviour
 */
export declare const AlertButton: FC<AlertProps>;
