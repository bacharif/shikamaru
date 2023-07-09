var k = Object.defineProperty;
var T = (s, t, e) => t in s ? k(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var g = (s, t, e) => (T(s, typeof t != "symbol" ? t + "" : t, e), e);
import { stark as h, number as l, hash as m, typedData as F, merkle as I, Account as b, constants as N, transaction as y } from "starknet";
const A = "0x31c70ed28f4b0faf39b2f97d8f0a61a36968319c13fe6f2051b8de5a15f3d9b", v = "0x2f0026e78543f036f33e26a8f5891b88c58dc1e20cbbfaf0bb53274da6fa568";
async function _(s, t) {
  const { result: e } = await t.callContract({
    contractAddress: s,
    entrypoint: "isPlugin",
    calldata: h.compileCalldata({ classHash: A })
  });
  return !l.toBN(e[0]).isZero();
}
function x({ contractAddress: s, selector: t }) {
  return m.computeHashOnElements([
    v,
    s,
    F.prepareSelector(t)
  ]);
}
function S(s) {
  return new I.MerkleTree(s.map(x));
}
function E(s) {
  const { root: t } = S(s.policies);
  return { ...s, root: t };
}
async function M(s, t) {
  const { expires: e, key: n, policies: a, root: r } = E(s), o = await t.signMessage({
    primaryType: "Session",
    types: {
      Policy: [
        { name: "contractAddress", type: "felt" },
        { name: "selector", type: "selector" }
      ],
      Session: [
        { name: "key", type: "felt" },
        { name: "expires", type: "felt" },
        { name: "root", type: "merkletree", contains: "Policy" }
      ],
      StarkNetDomain: [{ name: "chainId", type: "felt" }]
    },
    domain: {
      chainId: t.chainId
    },
    message: {
      key: n,
      expires: e,
      root: a
      // we can pass the policy to the message, when argent x works with type merkletree (starknet.js update)
    }
  });
  return {
    key: n,
    policies: a,
    expires: e,
    root: r,
    signature: o
  };
}
var P = w;
function w(s, t) {
  if (!s)
    throw new Error(t || "Assertion failed");
}
w.equal = function(t, e, n) {
  if (t != e)
    throw new Error(n || "Assertion failed: " + t + " != " + e);
};
class L extends b {
  constructor(e, n, a, r) {
    super(e, n, a);
    g(this, "merkleTree");
    this.signedSession = r, this.merkleTree = S(r.policies), P(r.root === this.merkleTree.root, "Invalid session");
  }
  async sessionToCall(e, n) {
    return {
      contractAddress: this.address,
      entrypoint: "use_plugin",
      calldata: h.compileCalldata({
        classHash: A,
        signer: await this.signer.getPubKey(),
        expires: e.expires.toString(),
        root: e.root,
        proofLength: n[0].length.toString(),
        ...n.reduce(
          (a, r, o) => ({
            ...a,
            ...r.reduce(
              (i, c, d) => ({ ...i, [`proof${o}:${d}`]: c }),
              {}
            )
          }),
          {}
        ),
        token1: e.signature[0],
        token2: e.signature[1]
      })
    };
  }
  proofCalls(e) {
    return e.map((n) => {
      const a = x({
        contractAddress: n.contractAddress,
        selector: n.entrypoint
      });
      return this.merkleTree.getProof(a);
    });
  }
  async extendCallsBySession(e, n) {
    const a = this.proofCalls(e);
    return [await this.sessionToCall(n, a), ...e];
  }
  async estimateInvokeFee(e, { nonce: n, blockIdentifier: a } = {}) {
    const r = await this.extendCallsBySession(
      Array.isArray(e) ? e : [e],
      this.signedSession
    ), o = l.toBN(n ?? await this.getNonce()), i = l.toBN(m.feeTransactionVersion), c = await this.getChainId(), d = {
      walletAddress: this.address,
      nonce: l.toBN(o),
      maxFee: N.ZERO,
      version: i,
      chainId: c
    }, p = await this.signer.signTransaction(
      r,
      d
    ), f = y.fromCallsToExecuteCalldata(r), u = await super.getInvokeEstimateFee(
      {
        contractAddress: this.address,
        calldata: f,
        signature: p
      },
      { version: i, nonce: o },
      a
    ), C = h.estimatedFeeToMaxFee(u.overall_fee);
    return {
      ...u,
      suggestedMaxFee: C
    };
  }
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
  async execute(e, n = void 0, a = {}) {
    const r = await this.extendCallsBySession(
      Array.isArray(e) ? e : [e],
      this.signedSession
    ), o = l.toBN(
      a.nonce ?? await this.getNonce()
    );
    let i = "0";
    if (a.maxFee || a.maxFee === 0)
      i = a.maxFee;
    else {
      const { suggestedMaxFee: u } = await this.estimateInvokeFee(
        Array.isArray(e) ? e : [e],
        {
          nonce: o
        }
      );
      i = u.toString();
    }
    const c = l.toBN(m.transactionVersion), d = {
      walletAddress: this.address,
      nonce: o,
      maxFee: i,
      version: c,
      chainId: this.chainId
    }, p = await this.signer.signTransaction(
      r,
      d,
      n
    ), f = y.fromCallsToExecuteCalldata(r);
    return this.invokeFunction(
      {
        contractAddress: this.address,
        calldata: f,
        signature: p
      },
      {
        maxFee: i,
        version: c,
        nonce: o
      }
    );
  }
}
export {
  A as SESSION_PLUGIN_CLASS_HASH,
  L as SessionAccount,
  S as createMerkleTreeForPolicies,
  M as createSession,
  L as default,
  x as preparePolicy,
  E as prepareSession,
  _ as supportsSessions
};
