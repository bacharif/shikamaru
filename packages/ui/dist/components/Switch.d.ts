import { Switch } from "@chakra-ui/react";
export { Switch };
export declare const switchTheme: {
    baseStyle?: {
        track: {
            bg: string;
            _checked: {
                bg: string;
            };
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("track" | "container" | "thumb")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("track" | "container" | "thumb")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("track" | "container" | "thumb")[];
};
