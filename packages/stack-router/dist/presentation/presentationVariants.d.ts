import { Presentation, PresentationVariant } from "../types";
export declare const variantForPresentation: (presentation: Presentation, reverse?: boolean) => PresentationVariant;
export declare const reverseVariant: ({ enter, active, exit, }: PresentationVariant) => PresentationVariant;
