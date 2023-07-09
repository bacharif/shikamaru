import { Abi, Account, AccountInterface, Call, EstimateFee, EstimateFeeDetails, InvocationsDetails, InvokeFunctionResponse, KeyPair, ProviderInterface, ProviderOptions, SignerInterface, merkle } from "starknet";
import { SignedSession } from "./utils";
export declare class SessionAccount extends Account implements AccountInterface {
    signedSession: SignedSession;
    merkleTree: merkle.MerkleTree;
    constructor(providerOrOptions: ProviderOptions | ProviderInterface, address: string, keyPairOrSigner: KeyPair | SignerInterface, signedSession: SignedSession);
    private sessionToCall;
    private proofCalls;
    private extendCallsBySession;
    estimateInvokeFee(calls: Call | Call[], { nonce: providedNonce, blockIdentifier }?: EstimateFeeDetails): Promise<EstimateFee>;
    /**
     * Invoke execute function in account contract
     *
     * [Reference](https://github.com/starkware-libs/cairo-lang/blob/f464ec4797361b6be8989e36e02ec690e74ef285/src/starkware/starknet/services/api/gateway/gateway_client.py#L13-L17)
     *
     * @param calls - one or more calls to be executed
     * @param abis - one or more abis which can be used to display the calls
     * @param transactionsDetail - optional transaction details
     * @returns a confirmation of invoking a function on the starknet contract
     */
    execute(calls: Call | Call[], abis?: Abi[] | undefined, transactionsDetail?: InvocationsDetails): Promise<InvokeFunctionResponse>;
}
