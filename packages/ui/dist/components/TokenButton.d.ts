import { ComponentProps, FC, ReactNode } from "react";
import { Button } from "./Button";
export interface TokenListItemProps extends ComponentProps<typeof Button> {
    name: string;
    symbol: string;
    image: string;
    getTokenIconUrl: ({ name, url }: {
        name: string;
        url: string;
    }) => string;
    subtitle?: string | ReactNode;
    valueLabelPrimary: string | ReactNode;
    valueLabelSecondary?: string | ReactNode | undefined;
    isLoading?: boolean;
    showTokenSymbol?: boolean;
    errorMessage?: {
        message: string;
        description: string;
    };
}
declare const TokenButton: FC<TokenListItemProps>;
export { TokenButton };
