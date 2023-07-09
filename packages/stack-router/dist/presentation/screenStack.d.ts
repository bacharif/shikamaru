import { Action as NavigationType } from "history";
import { Location } from "react-router-dom";
import { Presentation, PresentationDirection, ScreenProps } from "../types";
interface UpdateScreenStackProps {
    navigationType: NavigationType;
    currentLocation: Location;
    screens: ScreenProps[];
    declaredPresentationByPath: Record<string, Presentation>;
    paths: string[];
    defaultPresentation?: Presentation | undefined;
}
/**
 * Keep track of screens to determine transitions between them
 *
 * Note that NavigationType does not indicate if a screen is added or removed
 *
 * Makes use of the history `key` prop {@link https://github.com/remix-run/history/blob/main/docs/api-reference.md#locationkey}
 * to determine if a screen already exists in the stack
 *
 */
export declare const updateScreenStack: ({ navigationType, currentLocation, screens, declaredPresentationByPath, paths, defaultPresentation, }: UpdateScreenStackProps) => {
    screens: ScreenProps[];
    poppedScreens: ScreenProps[];
    presentationDirection: PresentationDirection;
};
export {};
