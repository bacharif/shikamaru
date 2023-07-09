import type { Abi, Call, DeclareSignerDetails, DeployAccountSignerDetails, InvocationsSignerDetails, KeyPair, Signature } from "starknet";
import { Signer, typedData } from "starknet";
import type { Cosigner, CosignerMessage, CosignerOffchainMessage } from "./CosignerTypes";
export declare class GuardianSigner extends Signer {
    cosigner: Cosigner;
    constructor(keyPair: KeyPair, cosignerImpl: Cosigner);
    cosignMessage(cosignerMessage: CosignerMessage | CosignerOffchainMessage, isOffchainMessage?: boolean): Promise<Signature>;
    signMessage(typedData: typedData.TypedData, accountAddress: string): Promise<Signature>;
    signTransaction(transactions: Call[], transactionsDetail: InvocationsSignerDetails, abis?: Abi[]): Promise<Signature>;
    signDeployAccountTransaction({ classHash, contractAddress, constructorCalldata, addressSalt, maxFee, version, chainId, nonce, }: DeployAccountSignerDetails): Promise<string[]>;
    signDeclareTransaction({ classHash, senderAddress, chainId, maxFee, version, nonce, }: DeclareSignerDetails): Promise<Signature>;
}
