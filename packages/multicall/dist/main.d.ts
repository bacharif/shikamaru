import DataLoader from "dataloader";
import { Call, ProviderInterface } from "starknet";
import { DataLoaderOptions } from "./dataloader";
export declare class Multicall {
    readonly provider: ProviderInterface;
    readonly address: string;
    readonly dataloader: DataLoader<Call, string[], Call>;
    constructor(provider: ProviderInterface, address?: string, dataLoaderOptions?: DataLoaderOptions);
    call(call: Call): Promise<string[]>;
}
