import { FC, PropsWithChildren } from "react";
import { Presentation } from "./types";
interface StackRoutesConfigProps {
    defaultPresentation: Presentation;
}
export declare const useStackRoutesConfig: () => StackRoutesConfigProps;
interface StackContextProviderProps extends PropsWithChildren, StackRoutesConfigProps {
}
export declare const StackRoutesConfig: FC<StackContextProviderProps>;
export {};
