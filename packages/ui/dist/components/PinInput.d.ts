import { PinInput, PinInputField } from "@chakra-ui/react";
export { PinInputField, PinInput };
export declare const pinInputTheme: {
    baseStyle?: {
        textAlign: string;
        field: {};
    } | undefined;
    sizes?: {
        md: {
            w: number;
            px: number;
            fontSize: string;
            lineHeight: number;
            fontWeight: string;
            py: string;
            borderRadius: string;
            minHeight: string;
        };
        pill: {
            px: string;
            py: string;
            fontSize: string;
            fontWeight: string;
            borderRadius: string;
            minHeight: string;
            textAlign: string;
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
        flat: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
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
        size?: "md" | "pill" | undefined;
        variant?: "outline" | "filled" | "flat" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
