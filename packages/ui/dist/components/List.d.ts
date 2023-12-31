export declare const listTheme: {
    baseStyle?: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
        keys: ("container" | "icon" | "item")[];
    }> | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "icon" | "item")[];
        }>;
    } | undefined;
    variants?: {
        bordered: () => {
            container: {
                fontSize: string;
                lineHeight: number;
                border: string;
                borderColor: string;
                rounded: string;
                counterReset: string;
                marginInlineStart: number;
                margin: number;
            };
            item: {
                display: string;
                alignItems: string;
                py: number;
                px: number;
                gap: number;
                _notLast: {
                    borderBottom: string;
                    borderColor: string;
                };
                "&::before": {
                    display: string;
                    content: string;
                    backgroundColor: string;
                    counterIncrement: string;
                    rounded: string;
                    width: number;
                    height: number;
                    flexShrink: number;
                    textAlign: string;
                    alignItems: string;
                    justifyContent: string;
                };
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "bordered" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "icon" | "item")[];
};
