var N = Object.defineProperty;
var w = (i, r, s) => r in i ? N(i, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[r] = s;
var d = (i, r, s) => (w(i, typeof r != "symbol" ? r + "" : r, s), s);
import { Signer as y, number as e, addAddressPadding as p, transaction as M } from "starknet";
class x extends y {
  constructor(s, n) {
    super(s);
    d(this, "cosigner");
    this.cosigner = n;
  }
  async cosignMessage(s, n = !1) {
    const t = await this.cosigner(s, n);
    return [
      e.toBN(t.signature.r).toString(),
      e.toBN(t.signature.s).toString()
    ];
  }
  async signMessage(s, n) {
    const t = await super.signMessage(s, n), a = {
      message: s,
      accountAddress: p(n),
      chain: "starknet"
    }, o = await this.cosignMessage(a, !0);
    return [...t, ...o];
  }
  async signTransaction(s, n, t) {
    const a = await super.signTransaction(
      s,
      n,
      t
    ), o = M.fromCallsToExecuteCalldata(s), g = {
      contractAddress: p(n.walletAddress),
      version: e.toBN(n.version).toString(10),
      calldata: o.map((u) => e.toHex(e.toBN(u))),
      maxFee: e.toBN(n.maxFee).toString(10),
      chainId: e.toBN(n.chainId).toString(10),
      nonce: e.toBN(n.nonce).toString(10)
    }, c = await this.cosignMessage({
      message: g,
      type: "starknet"
    });
    return [...a, ...c];
  }
  async signDeployAccountTransaction({
    classHash: s,
    contractAddress: n,
    constructorCalldata: t,
    addressSalt: a,
    maxFee: o,
    version: g,
    chainId: c,
    nonce: u
  }) {
    const l = await super.signDeployAccountTransaction({
      classHash: s,
      contractAddress: n,
      constructorCalldata: t,
      addressSalt: a,
      maxFee: o,
      version: g,
      chainId: c,
      nonce: u
    }), m = {
      classHash: s,
      salt: a,
      calldata: t.map(
        (B) => e.toHex(e.toBN(B))
      ),
      maxFee: e.toBN(o).toString(10),
      chainId: e.toBN(c).toString(10),
      version: g
    }, S = await this.cosignMessage({
      message: m,
      type: "starknetDeploy"
    });
    return [...l, ...S];
  }
  async signDeclareTransaction({
    classHash: s,
    senderAddress: n,
    chainId: t,
    maxFee: a,
    version: o,
    nonce: g
  }) {
    return console.warn("TODO: implement GuardianSigner signDeclareTransaction"), super.signDeclareTransaction({
      classHash: s,
      senderAddress: n,
      chainId: t,
      maxFee: a,
      version: o,
      nonce: g
    });
  }
}
export {
  x as GuardianSigner
};
