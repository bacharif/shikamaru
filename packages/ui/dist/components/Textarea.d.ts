import { Textarea } from "@chakra-ui/react";
export { Textarea };
export declare const textareaTheme: {
    baseStyle?: {
        transitionProperty: string;
        transitionDuration: string;
    } | undefined;
    sizes?: {
        md: {
            px: string;
            py: string;
            fontSize: string;
            fontWeight: string;
            borderRadius: string;
            minHeight: string;
            h: string;
        };
    } | undefined;
    variants?: {
        outline: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            bg: string;
            border: string;
            borderColor: string;
            _placeholder: {
                color: string;
            };
            _hover: {
                borderColor: string;
            };
            _invalid: {
                borderColor: string;
                boxShadow: string;
                _hover: {
                    borderColor: string;
                };
                _focusVisible: {
                    borderColor: string;
                    boxShadow: string;
                };
            };
            _focusVisible: {
                borderColor: string;
                boxShadow: string;
            };
        };
        filled: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            bg: string;
            border: string;
            _placeholder: {
                color: string;
            };
            _hover: {
                bg: string;
            };
            _invalid: {
                boxShadow: string;
                _focusVisible: {
                    boxShadow: string;
                };
            };
            _focusVisible: {
                bg: string;
                boxShadow: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: "md" | undefined;
        variant?: "outline" | "filled" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
