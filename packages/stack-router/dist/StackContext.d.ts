import { FC, PropsWithChildren } from "react";
import { DeclaredPresentationByPath, PresentationByPath, PresentationDirection } from "./types";
interface StackContextProps {
    presentationDirection: PresentationDirection;
    presentationByPath: PresentationByPath;
    onStackClicked: () => void;
}
export declare const useStackContext: () => StackContextProps;
interface StackContextProviderProps extends PropsWithChildren {
    declaredPresentationByPath: DeclaredPresentationByPath;
    paths: string[];
}
export declare const StackContextProvider: FC<StackContextProviderProps>;
export {};
