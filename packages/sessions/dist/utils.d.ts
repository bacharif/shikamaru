import { AccountInterface, ProviderInterface, Signature, merkle } from "starknet";
export interface Policy {
    contractAddress: string;
    selector: string;
}
export interface RequestSession {
    key: string;
    expires: number;
    policies: Policy[];
}
export interface PreparedSession extends RequestSession {
    root: string;
}
export interface SignedSession extends PreparedSession {
    signature: Signature;
}
export declare const SESSION_PLUGIN_CLASS_HASH = "0x31c70ed28f4b0faf39b2f97d8f0a61a36968319c13fe6f2051b8de5a15f3d9b";
export declare function supportsSessions(address: string, provider: ProviderInterface): Promise<boolean>;
export declare function preparePolicy({ contractAddress, selector }: Policy): string;
export declare function createMerkleTreeForPolicies(policies: Policy[]): merkle.MerkleTree;
export declare function prepareSession(session: RequestSession): PreparedSession;
export declare function createSession(session: RequestSession, account: AccountInterface): Promise<SignedSession>;
