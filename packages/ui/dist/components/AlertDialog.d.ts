import { AlertDialogProps as ChakraAlertDialogProps } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
export interface AlertDialogProps extends PropsWithChildren, Omit<ChakraAlertDialogProps, "onClose" | "leastDestructiveRef" | "children"> {
    onCancel: () => void;
    cancelTitle?: string;
    onDestroy?: () => void;
    destroyTitle?: string;
    onConfirm?: () => void;
    confirmTitle?: string;
    title: string;
    message?: string;
}
/**
 * Wraps Chakra AlertDialog {@link https://chakra-ui.com/docs/components/alert-dialog}
 * with a simpler API for most common use cases of cancel, confirm or destroy
 */
export declare const AlertDialog: FC<AlertDialogProps>;
