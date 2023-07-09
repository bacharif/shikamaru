import { Call, ProviderInterface } from "starknet";
export declare const aggregate: (provider: ProviderInterface, multicallAddress: string, calls: Call[]) => Promise<(string[] | Error)[]>;
