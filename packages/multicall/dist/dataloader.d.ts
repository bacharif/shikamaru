import DataLoader from "dataloader";
import { Call, ProviderInterface } from "starknet";
export interface DataLoaderOptions {
    maxBatchSize?: number;
    batchInterval?: number;
}
export declare const getDataLoader: (provider: ProviderInterface, multicallAddress: string, options?: DataLoaderOptions) => DataLoader<Call, string[], string>;
