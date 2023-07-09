import { FC } from "react";
import { RouteProps } from "react-router-dom";
import { Presentation } from "./types";
type StackRouteProps = RouteProps & {
    presentation?: Presentation;
};
/** adds the 'presentation' prop to a {@link Route} */
export declare const StackRoute: FC<StackRouteProps>;
export {};
