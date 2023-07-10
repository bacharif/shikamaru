import { ReactNode } from "react";
import { Presentation } from "../types";
declare type DeclaredPresentationByPath = Record<string, Presentation>;
export interface WrappedChildrenAndPresentation {
    /** the routes wrapped with StackScreen */
    wrappedChildren: ReactNode;
    /** `path` mapped to `presentation` declared in `<Route ... />` */
    declaredPresentationByPath: DeclaredPresentationByPath;
    /** all unique paths */
    paths: string[];
}
/**
 * Iterates Route children and wraps in StackScreen to provide animation with StackRoutes
 * Takes a record mapping route path to presentation
 *
 * converts e.g.
 *
 * `<Route presentation="modal" path="/users/picker" element={<UsersPicker />} />`
 *`
 * into
 *
 * `<Route presentation="modal" path="/users/picker" element={<StackScreen path={"/users/picker"}><UsersPicker /></StackScreen>}/>`
 *
 */
export declare const getWrappedChildrenAndPresentation: (childRoutes: ReactNode, parentPath?: string) => WrappedChildrenAndPresentation;
export {};
