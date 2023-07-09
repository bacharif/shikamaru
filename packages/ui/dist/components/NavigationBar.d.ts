import { Button } from "@chakra-ui/react";
import { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { ScrollProps } from "../hooks";
export declare const NavigationBarHeight = 14;
export interface NavigationBarProps extends PropsWithChildren {
    isAbsolute?: boolean;
    leftButton?: ReactNode;
    title?: ReactNode;
    rightButton?: ReactNode;
    scroll?: ScrollProps;
    scrollContent?: ReactNode;
}
export declare const BarIconButton: FC<ComponentProps<typeof Button>>;
export declare const BarBackButton: FC<ComponentProps<typeof BarIconButton>>;
export declare const BarCloseButton: FC<ComponentProps<typeof BarIconButton>>;
export declare const BarAddButton: FC<ComponentProps<typeof BarIconButton>>;
export declare const NavigationBar: FC<NavigationBarProps>;
