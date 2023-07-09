import { UseToastOptions } from "@chakra-ui/react";
import { ReactNode } from "react";
/** Wraps Chakra `useToast()` with a custom component render */
interface ToastOptions extends UseToastOptions {
    icon?: ReactNode;
}
export declare const useToast: (defaultOptions?: ToastOptions) => (options: UseToastOptions) => import("@chakra-ui/toast/dist/toast.types-76829e6b").b;
export {};
