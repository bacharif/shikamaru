export declare const menuTheme: {
    baseStyle?: {
        button: {
            fontWeight: string;
        };
        list: {
            py: number;
            borderRadius: string;
            border: string;
            bg: string;
            overflow: string;
            boxShadow: string;
        };
        item: {
            p: number;
            fontWeight: string;
            color: string;
            _hover: {
                color: string;
                bg: string;
            };
            _focus: {
                color: string;
                bg: string;
            };
            ".chakra-menu__icon-wrapper": {
                fontSize: string;
            };
        };
    } | undefined;
    sizes?: {
        "2xs": {
            button: {
                minHeight: number;
                fontSize: string;
            };
            item: {
                minHeight: number;
                fontSize: string;
            };
        };
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("button" | "list" | "divider" | "item" | "groupTitle" | "command")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: "2xs" | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("button" | "list" | "divider" | "item" | "groupTitle" | "command")[];
};
