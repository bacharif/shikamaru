import { FC } from "react";
import { NavigationBarProps } from "./NavigationBar";
declare type BaseNavigationContainerProps = Omit<NavigationBarProps, "scroll">;
export interface NavigationContainerProps extends BaseNavigationContainerProps {
    /** Unique id for persisting scroll position - if provided, scroll position will be restored when navigating 'back' to this component. See {@link useScrollRestoration} */
    scrollKey?: string;
}
/**
 * Combines {@link NavigationBar} and {@link ScrollContainer} and sets up the scroll interaction between them
 */
export declare const NavigationContainer: FC<NavigationContainerProps>;
export {};
