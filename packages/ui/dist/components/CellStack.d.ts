import { ChakraComponent } from "@chakra-ui/react";
import { ReactNode } from "react";
/** A vertical collection of Cells with standardised spacing */
export declare const CellStack: ChakraComponent<import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/layout/dist/flex").FlexProps>, {}>;
export declare const SpacerCell: ChakraComponent<import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/layout/dist/flex").FlexProps>, {}>;
export declare const HeaderCell: ChakraComponent<ChakraComponent<"h6", {}>, {}>;
export declare type ButtonCellProps = ChakraComponent<"button", {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    extendedDescription?: ReactNode;
}>;
export declare const ButtonCell: ButtonCellProps;
