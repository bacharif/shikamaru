import type { IStarknetWindowObject } from "get-starknet";
export type { EventHandler, EventType, GetStarknetWalletOptions, IGetStarknetWallet, IStarknetWindowObject, IStorageWrapper, ModalOptions, WalletProvider, } from "get-starknet";
export { disconnect } from "get-starknet";
/**
 * Get the Starknet window object.
 *
 * @deprecated Please use the connect export and the returned wallet object instead.
 * @returns {Promise<IStarknetWindowObject>}
 */
export declare const getStarknet: () => IStarknetWindowObject;
/**
 * Connect to a Starknet wallet.
 *
 * @dev Use the community version `get-starknet` from npm instead.
 * @param {GetStarknetWalletOptions} [options]
 * @returns {Promise<IStarknetWindowObject>}
 */
export declare const connect: (options?: GetStarknetWalletOptions) => Promise<IStarknetWindowObject | undefined>;
//# sourceMappingURL=index.d.ts.map