export declare enum ColorMode {
    HSL = "HSL" /** Color key determines lightness only */,
    HCL = "HCL" /** Color key determines lightness with constant chroma, like Material Design */
}
/**
 * Make colour variants for Chakra from a single colour
 * @param baseColor The base colour for the variants, will be variant.500
 * @param mode The mode to use for creating the colour variants
 */
export declare const makeColorVariants: (baseColor: string, mode?: ColorMode) => Record<100 | 600 | 900 | 50 | 200 | 300 | 400 | 500 | 700 | 800, string>;
