import { FC, PropsWithChildren } from "react";
interface CopyTooltipProps extends PropsWithChildren {
    copyValue: string;
    prompt?: string;
    message?: string;
    autoDismiss?: boolean;
}
export declare const CopyTooltip: FC<CopyTooltipProps>;
export {};
