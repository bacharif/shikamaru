var b = Object.defineProperty;
var A = (e, t, n) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => (A(e, typeof t != "symbol" ? t + "" : t, n), n);
import { transaction as S, GatewayError as _, number as h, stark as E, hash as C } from "starknet";
function T(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var k = /* @__PURE__ */ function() {
  function e(n, r) {
    if (typeof n != "function")
      throw new TypeError("DataLoader must be constructed with a function which accepts " + ("Array<key> and returns Promise<Array<value>>, but got: " + n + "."));
    this._batchLoadFn = n, this._maxBatchSize = D(r), this._batchScheduleFn = L(r), this._cacheKeyFn = F(r), this._cacheMap = I(r), this._batch = null, this.name = K(r);
  }
  var t = e.prototype;
  return t.load = function(r) {
    if (r == null)
      throw new TypeError("The loader.load() function must be called with a value, " + ("but got: " + String(r) + "."));
    var a = P(this), c = this._cacheMap, o = this._cacheKeyFn(r);
    if (c) {
      var i = c.get(o);
      if (i) {
        var s = a.cacheHits || (a.cacheHits = []);
        return new Promise(function(u) {
          s.push(function() {
            u(i);
          });
        });
      }
    }
    a.keys.push(r);
    var l = new Promise(function(u, f) {
      a.callbacks.push({
        resolve: u,
        reject: f
      });
    });
    return c && c.set(o, l), l;
  }, t.loadMany = function(r) {
    if (!g(r))
      throw new TypeError("The loader.loadMany() function must be called with Array<key> " + ("but got: " + r + "."));
    for (var a = [], c = 0; c < r.length; c++)
      a.push(this.load(r[c]).catch(function(o) {
        return o;
      }));
    return Promise.all(a);
  }, t.clear = function(r) {
    var a = this._cacheMap;
    if (a) {
      var c = this._cacheKeyFn(r);
      a.delete(c);
    }
    return this;
  }, t.clearAll = function() {
    var r = this._cacheMap;
    return r && r.clear(), this;
  }, t.prime = function(r, a) {
    var c = this._cacheMap;
    if (c) {
      var o = this._cacheKeyFn(r);
      if (c.get(o) === void 0) {
        var i;
        a instanceof Error ? (i = Promise.reject(a), i.catch(function() {
        })) : i = Promise.resolve(a), c.set(o, i);
      }
    }
    return this;
  }, e;
}(), M = typeof process == "object" && typeof process.nextTick == "function" ? function(e) {
  d || (d = Promise.resolve()), d.then(function() {
    process.nextTick(e);
  });
} : typeof setImmediate == "function" ? function(e) {
  setImmediate(e);
} : function(e) {
  setTimeout(e);
}, d;
function P(e) {
  var t = e._batch;
  if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
    return t;
  var n = {
    hasDispatched: !1,
    keys: [],
    callbacks: []
  };
  return e._batch = n, e._batchScheduleFn(function() {
    B(e, n);
  }), n;
}
function B(e, t) {
  if (t.hasDispatched = !0, t.keys.length === 0) {
    m(t);
    return;
  }
  var n;
  try {
    n = e._batchLoadFn(t.keys);
  } catch (r) {
    return y(e, t, new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function " + ("errored synchronously: " + String(r) + ".")));
  }
  if (!n || typeof n.then != "function")
    return y(e, t, new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " + ("not return a Promise: " + String(n) + ".")));
  n.then(function(r) {
    if (!g(r))
      throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " + ("not return a Promise of an Array: " + String(r) + "."));
    if (r.length !== t.keys.length)
      throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys." + (`

Keys:
` + String(t.keys)) + (`

Values:
` + String(r)));
    m(t);
    for (var a = 0; a < t.callbacks.length; a++) {
      var c = r[a];
      c instanceof Error ? t.callbacks[a].reject(c) : t.callbacks[a].resolve(c);
    }
  }).catch(function(r) {
    y(e, t, r);
  });
}
function y(e, t, n) {
  m(t);
  for (var r = 0; r < t.keys.length; r++)
    e.clear(t.keys[r]), t.callbacks[r].reject(n);
}
function m(e) {
  if (e.cacheHits)
    for (var t = 0; t < e.cacheHits.length; t++)
      e.cacheHits[t]();
}
function D(e) {
  var t = !e || e.batch !== !1;
  if (!t)
    return 1;
  var n = e && e.maxBatchSize;
  if (n === void 0)
    return 1 / 0;
  if (typeof n != "number" || n < 1)
    throw new TypeError("maxBatchSize must be a positive number: " + n);
  return n;
}
function L(e) {
  var t = e && e.batchScheduleFn;
  if (t === void 0)
    return M;
  if (typeof t != "function")
    throw new TypeError("batchScheduleFn must be a function: " + t);
  return t;
}
function F(e) {
  var t = e && e.cacheKeyFn;
  if (t === void 0)
    return function(n) {
      return n;
    };
  if (typeof t != "function")
    throw new TypeError("cacheKeyFn must be a function: " + t);
  return t;
}
function I(e) {
  var t = !e || e.cache !== !1;
  if (!t)
    return null;
  var n = e && e.cacheMap;
  if (n === void 0)
    return /* @__PURE__ */ new Map();
  if (n !== null) {
    var r = ["get", "set", "delete", "clear"], a = r.filter(function(c) {
      return n && typeof n[c] != "function";
    });
    if (a.length !== 0)
      throw new TypeError("Custom cacheMap missing methods: " + a.join(", "));
  }
  return n;
}
function K(e) {
  return e && e.name ? e.name : null;
}
function g(e) {
  return typeof e == "object" && e !== null && typeof e.length == "number" && (e.length === 0 || e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1));
}
var x = k;
const j = /* @__PURE__ */ T(x), w = (e) => {
  if (e.length === 0)
    return [];
  const [t, ...n] = e, r = h.toBN(t).toNumber(), a = n.slice(0, r), c = n.slice(r);
  return [a, ...w(c)];
}, z = (e) => {
  var t;
  try {
    const n = (t = e.toString().match(/Error message: multicall (\d+) failed/)) == null ? void 0 : t[1];
    if (n === void 0)
      throw e;
    return parseInt(n, 10);
  } catch {
    throw e;
  }
}, N = async (e, t) => (await Promise.allSettled(
  t.map(
    (r) => e.callContract({
      contractAddress: r.contractAddress,
      entrypoint: r.entrypoint,
      calldata: E.compileCalldata(r.calldata ?? [])
    }).then((a) => a.result)
  )
)).map((r) => r.status === "fulfilled" ? r.value : r.reason), v = async (e, t, n) => {
  if (n.length === 0)
    return [];
  try {
    const r = await e.callContract({
      contractAddress: t,
      entrypoint: "aggregate",
      calldata: S.fromCallsToExecuteCalldata([...n])
    }), [a, c, ...o] = r.result;
    return w(o);
  } catch (r) {
    if (!(r instanceof Error))
      throw r;
    if (r instanceof _ && r.errorCode === "StarknetErrorCode.UNINITIALIZED_CONTRACT")
      return N(e, n);
    const a = z(r), c = n.filter((i, s) => s !== a), o = await v(
      e,
      t,
      c
    );
    return [
      ...o.slice(0, a),
      r,
      ...o.slice(a)
    ];
  }
}, H = (e, t, n = {
  batchInterval: 500,
  maxBatchSize: 10
}) => {
  const r = new j(
    async (a) => (r.clearAll(), v(e, t, a)),
    {
      maxBatchSize: n.maxBatchSize,
      batchScheduleFn(a) {
        setTimeout(a, n.batchInterval);
      },
      cacheKeyFn(a) {
        const { contractAddress: c, entrypoint: o, calldata: i = [] } = a, s = h.toHex(
          h.toBN(c)
        ), l = C.getSelector(o), u = i.map((f) => h.toHex(h.toBN(f))).join("-");
        return `${s}--${l}--${u}`;
      }
    }
  );
  return r;
}, R = "0x05754af3760f3356da99aea5c3ec39ccac7783d925a19666ebbeca58ff0087f4";
class $ {
  constructor(t, n = R, r) {
    p(this, "dataloader");
    this.provider = t, this.address = n, this.dataloader = H(t, n, r);
  }
  call(t) {
    return this.dataloader.load(t);
  }
}
export {
  $ as Multicall
};
