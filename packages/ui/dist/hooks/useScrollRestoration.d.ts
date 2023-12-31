import { ScrollProps, useScroll } from "./useScroll";
export interface IScrollRestorationStorage {
    get: (key: string) => ScrollProps | undefined;
    set: (key: string, value: ScrollProps) => void;
}
/**
 * Hook providing same functionality as {@link useScroll} but which also restores scroll position
 *
 * @param storageKey Unique id for persisting scroll position - if provided, scroll position will be restored when navigating 'back' to this component
 * @param storage Storage to use, defaults to volatile memory
 * @returns See {@link useScroll}
 */
export declare const useScrollRestoration: (storageKey: string, storage?: IScrollRestorationStorage | undefined) => ReturnType<typeof useScroll>;
