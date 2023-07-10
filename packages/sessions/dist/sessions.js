var k = Object.defineProperty;
var T = (t, s, e) => s in t ? k(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var g = (t, s, e) => (T(t, typeof s != "symbol" ? s + "" : s, e), e);
import { stark as h, number as l, hash as m, typedData as F, merkle as I, Account as b, constants as E, transaction as y } from "starknet";
const A = "0x31c70ed28f4b0faf39b2f97d8f0a61a36968319c13fe6f2051b8de5a15f3d9b", N = "0x2f0026e78543f036f33e26a8f5891b88c58dc1e20cbbfaf0bb53274da6fa568";
async function O(t, s) {
  const { result: e } = await s.callContract({
    contractAddress: t,
    entrypoint: "isPlugin",
    calldata: h.compileCalldata({ classHash: A })
  });
  return !l.toBN(e[0]).isZero();
}
function S({ contractAddress: t, selector: s }) {
  return m.computeHashOnElements([
    N,
    t,
    F.prepareSelector(s)
  ]);
}
function w(t) {
  return new I.MerkleTree(t.map(S));
}
function P(t) {
  const { root: s } = w(t.policies);
  return { ...t, root: s };
}
async function L(t, s) {
  const { expires: e, key: n, policies: a, root: r } = P(t), o = await s.signMessage({
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
      chainId: s.chainId
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
function v(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var B = C;
function C(t, s) {
  if (!t)
    throw new Error(s || "Assertion failed");
}
C.equal = function(s, e, n) {
  if (s != e)
    throw new Error(n || "Assertion failed: " + s + " != " + e);
};
const _ = /* @__PURE__ */ v(B);
class $ extends b {
  constructor(e, n, a, r) {
    super(e, n, a);
    g(this, "merkleTree");
    this.signedSession = r, this.merkleTree = w(r.policies), _(r.root === this.merkleTree.root, "Invalid session");
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
      const a = S({
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
      maxFee: E.ZERO,
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
    ), x = h.estimatedFeeToMaxFee(u.overall_fee);
    return {
      ...u,
      suggestedMaxFee: x
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
  $ as SessionAccount,
  w as createMerkleTreeForPolicies,
  L as createSession,
  $ as default,
  S as preparePolicy,
  P as prepareSession,
  O as supportsSessions
};
