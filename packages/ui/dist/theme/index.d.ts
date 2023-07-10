/// <reference types="react" />
import { ChakraProviderProps, theme as baseTheme } from "@chakra-ui/react";
import { colors } from "./colors";
export { scrollbarStyle } from "./scrollbarStyle";
export { SetDarkMode } from "./SetDarkMode";
export declare type UITheme = Omit<typeof baseTheme, "colors"> & {
    colors: typeof colors;
};
export declare const theme: UITheme;
/** Theme with initial color mode "light" also see {@link SetDarkMode} */
export declare const ThemeProvider: ({ children }: ChakraProviderProps) => JSX.Element;
