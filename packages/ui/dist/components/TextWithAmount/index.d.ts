import { BigNumberish } from "ethers";
import { ReactElement } from "react";
export declare const TextWithAmount: ({ amount, decimals, children, }: {
    amount: BigNumberish;
    children: ReactElement;
    decimals?: number | undefined;
}) => JSX.Element;
export default TextWithAmount;
