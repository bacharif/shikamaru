import { AccordionButtonProps, AccordionItemProps, AccordionProps, FlexProps } from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactNode } from "react";
export declare const DetailAccordionHeader: FC<PropsWithChildren>;
export declare const DetailAccordion: FC<AccordionProps>;
export declare const DetailAccordionItem: FC<AccordionItemProps>;
export declare const DetailAccordionButton: FC<AccordionButtonProps & {
    label?: ReactNode;
    value?: ReactNode;
}>;
export declare const DetailAccordionPanel: FC<FlexProps>;
export declare const DetailAccordionRow: FC<FlexProps & {
    header?: ReactNode;
    label?: ReactNode;
    copyLabel?: string;
    value?: ReactNode;
    copyValue?: string;
}>;
