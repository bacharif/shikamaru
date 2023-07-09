import { ComponentProps, FC } from "react";
import { StackScreenContainer } from "./StackScreenContainer";
export interface StackScreenProps extends ComponentProps<typeof StackScreenContainer> {
    /** path specified in `<Route ... />` e.g. `/users/:id` */
    path: string;
}
export declare const StackScreen: FC<StackScreenProps>;
