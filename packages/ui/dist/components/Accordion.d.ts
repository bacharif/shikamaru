import { ComponentProps, FC } from "react";
import { ChevronDownIcon } from "./icons";
export declare const accordionTheme: {
    baseStyle?: ((props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        container: {
            bg: string;
            borderRadius: string;
            color: string;
            border: string;
            overflow: string;
        } | {
            border: string;
            borderRadius: string;
            color: string;
            bg?: undefined;
            overflow?: undefined;
        };
        panel: {
            color: string;
        };
        icon: {
            color: string;
        };
        button: {
            bg: string;
            color: string;
            _hover: {
                bg: string;
            };
        } | {
            color: string;
            bg?: undefined;
            _hover?: undefined;
        };
    }) | undefined;
    sizes?: {
        base: {};
        sm: {
            button: {
                fontSize: string;
                lineHeight: string;
                fontWeight: string;
                letterSpacing: string;
                p: number;
            };
            panel: {
                fontSize: string;
                lineHeight: number;
                p: number;
            };
        };
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("button" | "container" | "root" | "panel" | "icon")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: "base" | "sm" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("button" | "container" | "root" | "panel" | "icon")[];
};
export declare const AccordionIcon: FC<ComponentProps<typeof ChevronDownIcon>>;
