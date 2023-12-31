import { SimpleGridProps } from "@chakra-ui/react";
import { FC } from "react";
interface SeedInputProps extends Omit<SimpleGridProps, "onChange"> {
    length?: 12;
    onChange?: (seed: string) => void;
}
export declare const SeedInput: FC<SeedInputProps>;
export {};
