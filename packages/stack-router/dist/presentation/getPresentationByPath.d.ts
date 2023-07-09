import { PresentationByPath, PresentationDirection } from "../types";
import { ScreenProps } from "../types";
interface GetPresentationByPathProps {
    presentationDirection: PresentationDirection;
    poppedScreens: ScreenProps[];
    screens: ScreenProps[];
}
export declare const getPresentationByPath: ({ presentationDirection, poppedScreens, screens, }: GetPresentationByPathProps) => PresentationByPath;
export {};
