import { Input } from "@chakra-ui/react";
export { Input };
export declare const baseStyle: {
    field: {};
};
export declare const variantOutline: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    field: {
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
};
export declare const variantFilled: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    field: {
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
};
export declare const variantFlat: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    field: {
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
};
export declare const sizes: {
    md: {
        px: string;
        py: string;
        fontSize: string;
        fontWeight: string;
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
};
export declare const inputTheme: {
    baseStyle?: {
        field: {};
    } | undefined;
    sizes?: {
        md: {
            field: {
                px: string;
                py: string;
                fontSize: string;
                fontWeight: string;
                borderRadius: string;
                minHeight: string;
            };
            addon: {
                px: string;
                py: string;
                fontSize: string;
                fontWeight: string;
                borderRadius: string;
                minHeight: string;
            };
        };
        pill: {
            field: {
                px: string;
                py: string;
                fontSize: string;
                fontWeight: string;
                borderRadius: string;
                minHeight: string;
                textAlign: string;
            };
            addon: {
                px: string;
                py: string;
                fontSize: string;
                fontWeight: string;
                borderRadius: string;
                minHeight: string;
                textAlign: string;
            };
        };
    } | undefined;
    variants?: {
        outline: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            field: {
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
        };
        filled: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            field: {
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
        };
        flat: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
            field: {
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
        };
    } | undefined;
    defaultProps?: {
        size?: "md" | "pill" | undefined;
        variant?: "outline" | "filled" | "flat" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("element" | "addon" | "field")[];
};
