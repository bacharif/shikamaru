/// <reference types="react" />
export interface ScrollProps {
    scrollTop: number;
    scrollLeft: number;
}
export interface UseScrollProps {
    onScroll?: (scroll: ScrollProps) => void;
}
/**
 * Hook to monitor and return the scroll position of a div.
 *
 * @example
 * ```ts
 * // pass the scroll position of `ContentContainer` into `NavigationBar`
 *
 * const { scrollRef, scroll } = useScroll()
 *
 * <ContentContainer ref={scrollRef}>
 *   ...
 * </ContentContainer>
 * <NavigationBar scroll={scroll} />
 * ```
 */
export declare const useScroll: ({ onScroll: onScrollProp }?: UseScrollProps) => {
    scrollRef: (nextRef: HTMLDivElement | null) => void;
    useScrollRef: import("react").MutableRefObject<HTMLDivElement | null>;
    scroll: ScrollProps;
};
