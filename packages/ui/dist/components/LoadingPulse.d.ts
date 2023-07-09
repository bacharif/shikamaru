import { BoxProps } from "@chakra-ui/react";
import { FC } from "react";
export interface LoadingPulseProps extends BoxProps {
    isLoading?: boolean;
}
declare const LoadingPulse: FC<LoadingPulseProps>;
export { LoadingPulse };
