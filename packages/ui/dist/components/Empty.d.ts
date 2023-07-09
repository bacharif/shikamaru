import { Button } from "@chakra-ui/react";
import { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
export interface EmptyProps extends PropsWithChildren {
    icon?: ReactNode;
    title?: ReactNode;
}
export declare const Empty: FC<EmptyProps>;
export declare const EmptyButton: FC<ComponentProps<typeof Button>>;
