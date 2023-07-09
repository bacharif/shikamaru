import { ComponentProps, FC, ReactNode } from "react";
export declare const TabBarHeight = 16;
export declare const TabBar: import("@chakra-ui/system/dist/system.types").ChakraComponent<import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/layout/dist/flex").FlexProps>, {}>;
export declare const TabContainer: import("@chakra-ui/system/dist/system.types").ChakraComponent<import("@chakra-ui/system/dist/system.types").ChakraComponent<"div", {}>, {}>;
export declare const TabIconContainer: import("@chakra-ui/system/dist/system.types").ChakraComponent<import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/layout/dist/box").SquareProps>, {}>;
export declare const TabBadge: import("@chakra-ui/system/dist/system.types").ChakraComponent<import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/layout/dist/box").SquareProps>, {}>;
export interface TabProps extends ComponentProps<typeof TabContainer> {
    icon: ReactNode;
    label?: string;
    badgeLabel?: string | number;
    badgeDescription?: string;
}
export declare const Tab: FC<TabProps>;
