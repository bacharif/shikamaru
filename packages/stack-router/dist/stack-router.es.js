import Or, { createContext as wt, useContext as Ct, useRef as te, useEffect as De, useMemo as Ue, useCallback as wr, Children as Cr, isValidElement as jr, cloneElement as Ar } from "react";
import { chakra as jt, shouldForwardProp as Dr, Flex as kr } from "@chakra-ui/react";
import { motion as At, isValidMotionProp as $r, usePresence as Fr, useReducedMotion as Nr, AnimatePresence as Ir } from "framer-motion";
import { matchPath as Mr, useNavigationType as Ur, useLocation as Dt, useNavigate as Br, resolvePath as Wr, Route as kt, Routes as Yr } from "react-router-dom";
var ke = {}, Lr = {
  get exports() {
    return ke;
  },
  set exports(e) {
    ke = e;
  }
}, fe = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Vr() {
  if (pt)
    return fe;
  pt = 1;
  var e = Symbol.for("react.fragment");
  return fe.Fragment = e, fe.jsxDEV = void 0, fe;
}
var de = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function zr() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Or, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), T = Symbol.iterator, N = "@@iterator";
    function I(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = T && r[T] || r[N];
      return typeof o == "function" ? o : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(r) {
      {
        for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
          i[d - 1] = arguments[d];
        L("error", r, i);
      }
    }
    function L(r, o, i) {
      {
        var d = C.ReactDebugCurrentFrame, m = d.getStackAddendum();
        m !== "" && (o += "%s", i = i.concat([m]));
        var _ = i.map(function(b) {
          return String(b);
        });
        _.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, _);
      }
    }
    var V = !1, M = !1, _e = !1, U = !1, tr = !1, Ve;
    Ve = Symbol.for("react.module.reference");
    function rr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === a || r === p || tr || r === u || r === f || r === h || U || r === y || V || M || _e || typeof r == "object" && r !== null && (r.$$typeof === x || r.$$typeof === g || r.$$typeof === c || r.$$typeof === s || r.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === Ve || r.getModuleId !== void 0));
    }
    function nr(r, o, i) {
      var d = r.displayName;
      if (d)
        return d;
      var m = o.displayName || o.name || "";
      return m !== "" ? i + "(" + m + ")" : i;
    }
    function ze(r) {
      return r.displayName || "Context";
    }
    function A(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case p:
          return "Profiler";
        case u:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            var o = r;
            return ze(o) + ".Consumer";
          case c:
            var i = r;
            return ze(i._context) + ".Provider";
          case l:
            return nr(r, r.render, "ForwardRef");
          case g:
            var d = r.displayName || null;
            return d !== null ? d : A(r.type) || "Memo";
          case x: {
            var m = r, _ = m._payload, b = m._init;
            try {
              return A(b(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, K = 0, Ge, He, Xe, qe, Ke, Je, Ze;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function ar() {
      {
        if (K === 0) {
          Ge = console.log, He = console.info, Xe = console.warn, qe = console.error, Ke = console.group, Je = console.groupCollapsed, Ze = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        K++;
      }
    }
    function or() {
      {
        if (K--, K === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, r, {
              value: Ge
            }),
            info: B({}, r, {
              value: He
            }),
            warn: B({}, r, {
              value: Xe
            }),
            error: B({}, r, {
              value: qe
            }),
            group: B({}, r, {
              value: Ke
            }),
            groupCollapsed: B({}, r, {
              value: Je
            }),
            groupEnd: B({}, r, {
              value: Ze
            })
          });
        }
        K < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Se = C.ReactCurrentDispatcher, Te;
    function ie(r, o, i) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (m) {
            var d = m.stack.trim().match(/\n( *(at )?)/);
            Te = d && d[1] || "";
          }
        return `
` + Te + r;
      }
    }
    var xe = !1, se;
    {
      var ir = typeof WeakMap == "function" ? WeakMap : Map;
      se = new ir();
    }
    function et(r, o) {
      if (!r || xe)
        return "";
      {
        var i = se.get(r);
        if (i !== void 0)
          return i;
      }
      var d;
      xe = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = Se.current, Se.current = null, ar();
      try {
        if (o) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (D) {
              d = D;
            }
            Reflect.construct(r, [], b);
          } else {
            try {
              b.call();
            } catch (D) {
              d = D;
            }
            r.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            d = D;
          }
          r();
        }
      } catch (D) {
        if (D && d && typeof D.stack == "string") {
          for (var v = D.stack.split(`
`), w = d.stack.split(`
`), P = v.length - 1, R = w.length - 1; P >= 1 && R >= 0 && v[P] !== w[R]; )
            R--;
          for (; P >= 1 && R >= 0; P--, R--)
            if (v[P] !== w[R]) {
              if (P !== 1 || R !== 1)
                do
                  if (P--, R--, R < 0 || v[P] !== w[R]) {
                    var j = `
` + v[P].replace(" at new ", " at ");
                    return r.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", r.displayName)), typeof r == "function" && se.set(r, j), j;
                  }
                while (P >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        xe = !1, Se.current = _, or(), Error.prepareStackTrace = m;
      }
      var G = r ? r.displayName || r.name : "", dt = G ? ie(G) : "";
      return typeof r == "function" && se.set(r, dt), dt;
    }
    function sr(r, o, i) {
      return et(r, !1);
    }
    function ur(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function ue(r, o, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return et(r, ur(r));
      if (typeof r == "string")
        return ie(r);
      switch (r) {
        case f:
          return ie("Suspense");
        case h:
          return ie("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            return sr(r.render);
          case g:
            return ue(r.type, o, i);
          case x: {
            var d = r, m = d._payload, _ = d._init;
            try {
              return ue(_(m), o, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, tt = {}, rt = C.ReactDebugCurrentFrame;
    function le(r) {
      if (r) {
        var o = r._owner, i = ue(r.type, r._source, o ? o.type : null);
        rt.setExtraStackFrame(i);
      } else
        rt.setExtraStackFrame(null);
    }
    function cr(r, o, i, d, m) {
      {
        var _ = Function.call.bind(ce);
        for (var b in r)
          if (_(r, b)) {
            var v = void 0;
            try {
              if (typeof r[b] != "function") {
                var w = Error((d || "React class") + ": " + i + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              v = r[b](o, b, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              v = P;
            }
            v && !(v instanceof Error) && (le(m), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, b, typeof v), le(null)), v instanceof Error && !(v.message in tt) && (tt[v.message] = !0, le(m), E("Failed %s type: %s", i, v.message), le(null));
          }
      }
    }
    var lr = Array.isArray;
    function Pe(r) {
      return lr(r);
    }
    function fr(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, i = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function dr(r) {
      try {
        return nt(r), !1;
      } catch {
        return !0;
      }
    }
    function nt(r) {
      return "" + r;
    }
    function at(r) {
      if (dr(r))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fr(r)), nt(r);
    }
    var J = C.ReactCurrentOwner, pr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ot, it, Re;
    Re = {};
    function hr(r) {
      if (ce.call(r, "ref")) {
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function vr(r) {
      if (ce.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function gr(r, o) {
      if (typeof r.ref == "string" && J.current && o && J.current.stateNode !== o) {
        var i = A(J.current.type);
        Re[i] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(J.current.type), r.ref), Re[i] = !0);
      }
    }
    function br(r, o) {
      {
        var i = function() {
          ot || (ot = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function mr(r, o) {
      {
        var i = function() {
          it || (it = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var yr = function(r, o, i, d, m, _, b) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: i,
        props: b,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function _r(r, o, i, d, m) {
      {
        var _, b = {}, v = null, w = null;
        i !== void 0 && (at(i), v = "" + i), vr(o) && (at(o.key), v = "" + o.key), hr(o) && (w = o.ref, gr(o, m));
        for (_ in o)
          ce.call(o, _) && !pr.hasOwnProperty(_) && (b[_] = o[_]);
        if (r && r.defaultProps) {
          var P = r.defaultProps;
          for (_ in P)
            b[_] === void 0 && (b[_] = P[_]);
        }
        if (v || w) {
          var R = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          v && br(b, R), w && mr(b, R);
        }
        return yr(r, v, w, m, d, J.current, b);
      }
    }
    var Ee = C.ReactCurrentOwner, st = C.ReactDebugCurrentFrame;
    function z(r) {
      if (r) {
        var o = r._owner, i = ue(r.type, r._source, o ? o.type : null);
        st.setExtraStackFrame(i);
      } else
        st.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function we(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function ut() {
      {
        if (Ee.current) {
          var r = A(Ee.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Sr(r) {
      {
        if (r !== void 0) {
          var o = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + o + ":" + i + ".";
        }
        return "";
      }
    }
    var ct = {};
    function Tr(r) {
      {
        var o = ut();
        if (!o) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (o = `

Check the top-level render call using <` + i + ">.");
        }
        return o;
      }
    }
    function lt(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = Tr(o);
        if (ct[i])
          return;
        ct[i] = !0;
        var d = "";
        r && r._owner && r._owner !== Ee.current && (d = " It was passed a child from " + A(r._owner.type) + "."), z(r), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), z(null);
      }
    }
    function ft(r, o) {
      {
        if (typeof r != "object")
          return;
        if (Pe(r))
          for (var i = 0; i < r.length; i++) {
            var d = r[i];
            we(d) && lt(d, o);
          }
        else if (we(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var m = I(r);
          if (typeof m == "function" && m !== r.entries)
            for (var _ = m.call(r), b; !(b = _.next()).done; )
              we(b.value) && lt(b.value, o);
        }
      }
    }
    function xr(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var i;
        if (typeof o == "function")
          i = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === g))
          i = o.propTypes;
        else
          return;
        if (i) {
          var d = A(o);
          cr(i, r.props, "prop", d, r);
        } else if (o.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var m = A(o);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pr(r) {
      {
        for (var o = Object.keys(r.props), i = 0; i < o.length; i++) {
          var d = o[i];
          if (d !== "children" && d !== "key") {
            z(r), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), z(null);
            break;
          }
        }
        r.ref !== null && (z(r), E("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Rr(r, o, i, d, m, _) {
      {
        var b = rr(r);
        if (!b) {
          var v = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = Sr(m);
          w ? v += w : v += ut();
          var P;
          r === null ? P = "null" : Pe(r) ? P = "array" : r !== void 0 && r.$$typeof === t ? (P = "<" + (A(r.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : P = typeof r, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, v);
        }
        var R = _r(r, o, i, m, _);
        if (R == null)
          return R;
        if (b) {
          var j = o.children;
          if (j !== void 0)
            if (d)
              if (Pe(j)) {
                for (var G = 0; G < j.length; G++)
                  ft(j[G], r);
                Object.freeze && Object.freeze(j);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(j, r);
        }
        return r === a ? Pr(R) : xr(R), R;
      }
    }
    var Er = Rr;
    de.Fragment = a, de.jsxDEV = Er;
  }()), de;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Vr() : e.exports = zr();
})(Lr);
const $ = ke.jsxDEV, Gr = {
  // duration: 3, /** uncomment to slow animations for debugging */
  transition: {
    type: "spring",
    stiffness: 1e3,
    damping: 500,
    mass: 3,
    bounce: 0,
    restDelta: 10,
    restSpeed: 10
  }
}, Hr = {
  duration: 0
};
var k = /* @__PURE__ */ ((e) => (e.Replace = "REPLACE", e.Forwards = "FORWARDS", e.Backwards = "BACKWARDS", e))(k || {});
const $t = (e) => e === "modal" || e === "modalSheet", Xr = (e) => e === "stacked" || e === "stackedStacked", qr = (e) => e === "modalSheet" || e === "pushModalSheet";
var Kr = typeof global == "object" && global && global.Object === Object && global;
const Ft = Kr;
var Jr = typeof self == "object" && self && self.Object === Object && self, Zr = Ft || Jr || Function("return this")();
const H = Zr;
var Qr = H.Symbol;
const he = Qr;
var Nt = Object.prototype, en = Nt.hasOwnProperty, tn = Nt.toString, Z = he ? he.toStringTag : void 0;
function rn(e) {
  var t = en.call(e, Z), n = e[Z];
  try {
    e[Z] = void 0;
    var a = !0;
  } catch {
  }
  var u = tn.call(e);
  return a && (t ? e[Z] = n : delete e[Z]), u;
}
var nn = Object.prototype, an = nn.toString;
function on(e) {
  return an.call(e);
}
var sn = "[object Null]", un = "[object Undefined]", vt = he ? he.toStringTag : void 0;
function ge(e) {
  return e == null ? e === void 0 ? un : sn : vt && vt in Object(e) ? rn(e) : on(e);
}
function oe(e) {
  return e != null && typeof e == "object";
}
var cn = Array.isArray;
const $e = cn;
function Y(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function It(e) {
  return e;
}
var ln = "[object AsyncFunction]", fn = "[object Function]", dn = "[object GeneratorFunction]", pn = "[object Proxy]";
function Be(e) {
  if (!Y(e))
    return !1;
  var t = ge(e);
  return t == fn || t == dn || t == ln || t == pn;
}
var hn = H["__core-js_shared__"];
const Ce = hn;
var gt = function() {
  var e = /[^.]+$/.exec(Ce && Ce.keys && Ce.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vn(e) {
  return !!gt && gt in e;
}
var gn = Function.prototype, bn = gn.toString;
function mn(e) {
  if (e != null) {
    try {
      return bn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var yn = /[\\^$.*+?()[\]{}|]/g, _n = /^\[object .+?Constructor\]$/, Sn = Function.prototype, Tn = Object.prototype, xn = Sn.toString, Pn = Tn.hasOwnProperty, Rn = RegExp(
  "^" + xn.call(Pn).replace(yn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function En(e) {
  if (!Y(e) || vn(e))
    return !1;
  var t = Be(e) ? Rn : _n;
  return t.test(mn(e));
}
function On(e, t) {
  return e == null ? void 0 : e[t];
}
function We(e, t) {
  var n = On(e, t);
  return En(n) ? n : void 0;
}
var bt = Object.create, wn = function() {
  function e() {
  }
  return function(t) {
    if (!Y(t))
      return {};
    if (bt)
      return bt(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Cn = wn;
function jn(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function An(e, t) {
  var n = -1, a = e.length;
  for (t || (t = Array(a)); ++n < a; )
    t[n] = e[n];
  return t;
}
var Dn = 800, kn = 16, $n = Date.now;
function Fn(e) {
  var t = 0, n = 0;
  return function() {
    var a = $n(), u = kn - (a - n);
    if (n = a, u > 0) {
      if (++t >= Dn)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Nn(e) {
  return function() {
    return e;
  };
}
var In = function() {
  try {
    var e = We(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ve = In;
var Mn = ve ? function(e, t) {
  return ve(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Nn(t),
    writable: !0
  });
} : It;
const Un = Mn;
var Bn = Fn(Un);
const Wn = Bn;
var Yn = 9007199254740991, Ln = /^(?:0|[1-9]\d*)$/;
function Mt(e, t) {
  var n = typeof e;
  return t = t ?? Yn, !!t && (n == "number" || n != "symbol" && Ln.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ye(e, t, n) {
  t == "__proto__" && ve ? ve(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function be(e, t) {
  return e === t || e !== e && t !== t;
}
var Vn = Object.prototype, zn = Vn.hasOwnProperty;
function Gn(e, t, n) {
  var a = e[t];
  (!(zn.call(e, t) && be(a, n)) || n === void 0 && !(t in e)) && Ye(e, t, n);
}
function Hn(e, t, n, a) {
  var u = !n;
  n || (n = {});
  for (var p = -1, c = t.length; ++p < c; ) {
    var s = t[p], l = a ? a(n[s], e[s], s, n, e) : void 0;
    l === void 0 && (l = e[s]), u ? Ye(n, s, l) : Gn(n, s, l);
  }
  return n;
}
var mt = Math.max;
function Xn(e, t, n) {
  return t = mt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, u = -1, p = mt(a.length - t, 0), c = Array(p); ++u < p; )
      c[u] = a[t + u];
    u = -1;
    for (var s = Array(t + 1); ++u < t; )
      s[u] = a[u];
    return s[t] = n(c), jn(e, this, s);
  };
}
function qn(e, t) {
  return Wn(Xn(e, t, It), e + "");
}
var Kn = 9007199254740991;
function Ut(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Kn;
}
function Le(e) {
  return e != null && Ut(e.length) && !Be(e);
}
function Jn(e, t, n) {
  if (!Y(n))
    return !1;
  var a = typeof t;
  return (a == "number" ? Le(n) && Mt(t, n.length) : a == "string" && t in n) ? be(n[t], e) : !1;
}
function Zn(e) {
  return qn(function(t, n) {
    var a = -1, u = n.length, p = u > 1 ? n[u - 1] : void 0, c = u > 2 ? n[2] : void 0;
    for (p = e.length > 3 && typeof p == "function" ? (u--, p) : void 0, c && Jn(n[0], n[1], c) && (p = u < 3 ? void 0 : p, u = 1), t = Object(t); ++a < u; ) {
      var s = n[a];
      s && e(t, s, a, p);
    }
    return t;
  });
}
var Qn = Object.prototype;
function Bt(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Qn;
  return e === n;
}
function ea(e, t) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = t(n);
  return a;
}
var ta = "[object Arguments]";
function yt(e) {
  return oe(e) && ge(e) == ta;
}
var Wt = Object.prototype, ra = Wt.hasOwnProperty, na = Wt.propertyIsEnumerable, aa = yt(function() {
  return arguments;
}()) ? yt : function(e) {
  return oe(e) && ra.call(e, "callee") && !na.call(e, "callee");
};
const Fe = aa;
function oa() {
  return !1;
}
var Yt = typeof exports == "object" && exports && !exports.nodeType && exports, _t = Yt && typeof module == "object" && module && !module.nodeType && module, ia = _t && _t.exports === Yt, St = ia ? H.Buffer : void 0, sa = St ? St.isBuffer : void 0, ua = sa || oa;
const Lt = ua;
var ca = "[object Arguments]", la = "[object Array]", fa = "[object Boolean]", da = "[object Date]", pa = "[object Error]", ha = "[object Function]", va = "[object Map]", ga = "[object Number]", ba = "[object Object]", ma = "[object RegExp]", ya = "[object Set]", _a = "[object String]", Sa = "[object WeakMap]", Ta = "[object ArrayBuffer]", xa = "[object DataView]", Pa = "[object Float32Array]", Ra = "[object Float64Array]", Ea = "[object Int8Array]", Oa = "[object Int16Array]", wa = "[object Int32Array]", Ca = "[object Uint8Array]", ja = "[object Uint8ClampedArray]", Aa = "[object Uint16Array]", Da = "[object Uint32Array]", S = {};
S[Pa] = S[Ra] = S[Ea] = S[Oa] = S[wa] = S[Ca] = S[ja] = S[Aa] = S[Da] = !0;
S[ca] = S[la] = S[Ta] = S[fa] = S[xa] = S[da] = S[pa] = S[ha] = S[va] = S[ga] = S[ba] = S[ma] = S[ya] = S[_a] = S[Sa] = !1;
function ka(e) {
  return oe(e) && Ut(e.length) && !!S[ge(e)];
}
function $a(e) {
  return function(t) {
    return e(t);
  };
}
var Vt = typeof exports == "object" && exports && !exports.nodeType && exports, re = Vt && typeof module == "object" && module && !module.nodeType && module, Fa = re && re.exports === Vt, je = Fa && Ft.process, Na = function() {
  try {
    var e = re && re.require && re.require("util").types;
    return e || je && je.binding && je.binding("util");
  } catch {
  }
}();
const Tt = Na;
var xt = Tt && Tt.isTypedArray, Ia = xt ? $a(xt) : ka;
const zt = Ia;
var Ma = Object.prototype, Ua = Ma.hasOwnProperty;
function Ba(e, t) {
  var n = $e(e), a = !n && Fe(e), u = !n && !a && Lt(e), p = !n && !a && !u && zt(e), c = n || a || u || p, s = c ? ea(e.length, String) : [], l = s.length;
  for (var f in e)
    (t || Ua.call(e, f)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    u && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    p && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Mt(f, l))) && s.push(f);
  return s;
}
function Wa(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function Ya(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var La = Object.prototype, Va = La.hasOwnProperty;
function za(e) {
  if (!Y(e))
    return Ya(e);
  var t = Bt(e), n = [];
  for (var a in e)
    a == "constructor" && (t || !Va.call(e, a)) || n.push(a);
  return n;
}
function Gt(e) {
  return Le(e) ? Ba(e, !0) : za(e);
}
var Ga = We(Object, "create");
const ae = Ga;
function Ha() {
  this.__data__ = ae ? ae(null) : {}, this.size = 0;
}
function Xa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qa = "__lodash_hash_undefined__", Ka = Object.prototype, Ja = Ka.hasOwnProperty;
function Za(e) {
  var t = this.__data__;
  if (ae) {
    var n = t[e];
    return n === qa ? void 0 : n;
  }
  return Ja.call(t, e) ? t[e] : void 0;
}
var Qa = Object.prototype, eo = Qa.hasOwnProperty;
function to(e) {
  var t = this.__data__;
  return ae ? t[e] !== void 0 : eo.call(t, e);
}
var ro = "__lodash_hash_undefined__";
function no(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ae && t === void 0 ? ro : t, this;
}
function W(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
W.prototype.clear = Ha;
W.prototype.delete = Xa;
W.prototype.get = Za;
W.prototype.has = to;
W.prototype.set = no;
function ao() {
  this.__data__ = [], this.size = 0;
}
function me(e, t) {
  for (var n = e.length; n--; )
    if (be(e[n][0], t))
      return n;
  return -1;
}
var oo = Array.prototype, io = oo.splice;
function so(e) {
  var t = this.__data__, n = me(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : io.call(t, n, 1), --this.size, !0;
}
function uo(e) {
  var t = this.__data__, n = me(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function co(e) {
  return me(this.__data__, e) > -1;
}
function lo(e, t) {
  var n = this.__data__, a = me(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function F(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
F.prototype.clear = ao;
F.prototype.delete = so;
F.prototype.get = uo;
F.prototype.has = co;
F.prototype.set = lo;
var fo = We(H, "Map");
const Ht = fo;
function po() {
  this.size = 0, this.__data__ = {
    hash: new W(),
    map: new (Ht || F)(),
    string: new W()
  };
}
function ho(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ye(e, t) {
  var n = e.__data__;
  return ho(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function vo(e) {
  var t = ye(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function go(e) {
  return ye(this, e).get(e);
}
function bo(e) {
  return ye(this, e).has(e);
}
function mo(e, t) {
  var n = ye(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function X(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
X.prototype.clear = po;
X.prototype.delete = vo;
X.prototype.get = go;
X.prototype.has = bo;
X.prototype.set = mo;
var yo = Wa(Object.getPrototypeOf, Object);
const Xt = yo;
var _o = "[object Object]", So = Function.prototype, To = Object.prototype, qt = So.toString, xo = To.hasOwnProperty, Po = qt.call(Object);
function Ro(e) {
  if (!oe(e) || ge(e) != _o)
    return !1;
  var t = Xt(e);
  if (t === null)
    return !0;
  var n = xo.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && qt.call(n) == Po;
}
function Eo() {
  this.__data__ = new F(), this.size = 0;
}
function Oo(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function wo(e) {
  return this.__data__.get(e);
}
function Co(e) {
  return this.__data__.has(e);
}
var jo = 200;
function Ao(e, t) {
  var n = this.__data__;
  if (n instanceof F) {
    var a = n.__data__;
    if (!Ht || a.length < jo - 1)
      return a.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new X(a);
  }
  return n.set(e, t), this.size = n.size, this;
}
function q(e) {
  var t = this.__data__ = new F(e);
  this.size = t.size;
}
q.prototype.clear = Eo;
q.prototype.delete = Oo;
q.prototype.get = wo;
q.prototype.has = Co;
q.prototype.set = Ao;
var Kt = typeof exports == "object" && exports && !exports.nodeType && exports, Pt = Kt && typeof module == "object" && module && !module.nodeType && module, Do = Pt && Pt.exports === Kt, Rt = Do ? H.Buffer : void 0, Et = Rt ? Rt.allocUnsafe : void 0;
function ko(e, t) {
  if (t)
    return e.slice();
  var n = e.length, a = Et ? Et(n) : new e.constructor(n);
  return e.copy(a), a;
}
var $o = H.Uint8Array;
const Ot = $o;
function Fo(e) {
  var t = new e.constructor(e.byteLength);
  return new Ot(t).set(new Ot(e)), t;
}
function No(e, t) {
  var n = t ? Fo(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function Io(e) {
  return typeof e.constructor == "function" && !Bt(e) ? Cn(Xt(e)) : {};
}
function Mo(e) {
  return function(t, n, a) {
    for (var u = -1, p = Object(t), c = a(t), s = c.length; s--; ) {
      var l = c[e ? s : ++u];
      if (n(p[l], l, p) === !1)
        break;
    }
    return t;
  };
}
var Uo = Mo();
const Bo = Uo;
function Ne(e, t, n) {
  (n !== void 0 && !be(e[t], n) || n === void 0 && !(t in e)) && Ye(e, t, n);
}
function Wo(e) {
  return oe(e) && Le(e);
}
function Ie(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Yo(e) {
  return Hn(e, Gt(e));
}
function Lo(e, t, n, a, u, p, c) {
  var s = Ie(e, n), l = Ie(t, n), f = c.get(l);
  if (f) {
    Ne(e, n, f);
    return;
  }
  var h = p ? p(s, l, n + "", e, t, c) : void 0, g = h === void 0;
  if (g) {
    var x = $e(l), y = !x && Lt(l), T = !x && !y && zt(l);
    h = l, x || y || T ? $e(s) ? h = s : Wo(s) ? h = An(s) : y ? (g = !1, h = ko(l, !0)) : T ? (g = !1, h = No(l, !0)) : h = [] : Ro(l) || Fe(l) ? (h = s, Fe(s) ? h = Yo(s) : (!Y(s) || Be(s)) && (h = Io(l))) : g = !1;
  }
  g && (c.set(l, h), u(h, l, a, p, c), c.delete(l)), Ne(e, n, h);
}
function Jt(e, t, n, a, u) {
  e !== t && Bo(t, function(p, c) {
    if (u || (u = new q()), Y(p))
      Lo(e, t, c, n, Jt, a, u);
    else {
      var s = a ? a(Ie(e, c), p, c + "", e, t, u) : void 0;
      s === void 0 && (s = p), Ne(e, c, s);
    }
  }, Gt);
}
var Vo = Zn(function(e, t, n) {
  Jt(e, t, n);
});
const zo = Vo, Ae = (e, t = !1) => {
  const n = zo(
    {},
    O.push,
    O[e]
  );
  return t ? Go(n) : n;
}, Go = ({
  enter: e,
  active: t,
  exit: n
}) => ({
  enter: n,
  active: t,
  exit: e
}), Q = {
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px"
}, pe = {
  filter: "brightness(1)",
  translateX: 0,
  translateY: 0,
  marginTop: 0,
  scale: 1,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0
}, O = {
  /** horizontal */
  push: {
    enter: {
      filter: "brightness(1)",
      translateX: "100%",
      translateY: 0,
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)"
    },
    active: {
      ...pe,
      boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.3)"
    },
    exit: {
      filter: "brightness(0.3)",
      translateX: "-30%",
      translateY: 0
    }
  },
  /** vertical covering whole screen */
  modal: {
    get enter() {
      return O.modal.exit;
    },
    exit: {
      ...Q,
      filter: "brightness(1)",
      translateX: 0,
      translateY: "100%",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)"
    }
  },
  /** vertical with previous screens visibly 'stacked' */
  modalSheet: {
    get enter() {
      return O.modal.enter;
    },
    active: {
      ...Q,
      filter: "brightness(1)",
      translateX: 0,
      translateY: 0,
      marginTop: "24px",
      scale: 1,
      boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.3)"
    },
    get exit() {
      return O.modal.exit;
    }
  },
  /** horizontal within a modal sheet */
  pushModalSheet: {
    get enter() {
      var e;
      return {
        ...O.push.enter,
        marginTop: (e = O.modalSheet.active) == null ? void 0 : e.marginTop
      };
    },
    get active() {
      var e;
      return {
        ...O.push.active,
        ...Q,
        marginTop: (e = O.modalSheet.active) == null ? void 0 : e.marginTop
      };
    },
    get exit() {
      var e;
      return {
        ...O.push.exit,
        marginTop: (e = O.modalSheet.active) == null ? void 0 : e.marginTop
      };
    }
  },
  /** stacked behind modalSheet */
  stacked: {
    get enter() {
      return O.stacked.exit;
    },
    exit: {
      ...Q,
      filter: "brightness(0.8)",
      translateX: 0,
      translateY: 0,
      marginTop: "12px",
      scale: 0.9
    }
  },
  /** stacked behind stacked (visually hidden) */
  stackedStacked: {
    get enter() {
      return O.stackedStacked.exit;
    },
    get active() {
      return O.stacked.exit;
    },
    exit: {
      ...Q,
      filter: "brightness(0)",
      translateX: 0,
      translateY: 0,
      marginTop: 0,
      scale: 0.8
    }
  },
  /** beneath modal (same as animation 'stacked' but not persistent) */
  modalStacked: {
    get enter() {
      return O.stacked.enter;
    },
    get active() {
      return O.stacked.active;
    },
    get exit() {
      return O.stacked.exit;
    }
  },
  /** no animation */
  replace: {
    get enter() {
      return pe;
    },
    get active() {
      return pe;
    },
    get exit() {
      return pe;
    }
  }
}, Ho = ({
  presentationDirection: e,
  poppedScreens: t,
  screens: n
}) => {
  var c, s, l;
  const a = {}, u = t ? [...n, ...t] : n, p = e === k.Forwards;
  for (let f = 0; f < u.length; f++) {
    const h = u[f], g = u.slice(f + 1), x = p ? u.slice(f + 1) : n.slice(f + 1), y = f > 0 ? n.slice(0, f) : [], T = x.filter(
      (U) => U.presentation === "modalSheet"
    ).length, N = g.filter(
      (U) => U.presentation === "modal"
    ).length, C = ((c = y.filter((U) => U.presentation !== "push").pop()) == null ? void 0 : c.presentation) === "modalSheet" && h.presentation === "push", E = h.presentation === "modalSheet" && ((s = g[0]) == null ? void 0 : s.presentation) === "push", L = h.presentation === "modal" && ((l = g[0]) == null ? void 0 : l.presentation) === "push", V = y.length > 0 && y[y.length - 1].presentation === "replace", M = T > 1 ? "stackedStacked" : T === 1 ? "stacked" : N > 0 ? "modalStacked" : E || C ? "pushModalSheet" : L ? "push" : V ? "replace" : h.presentation, _e = Ae(M, !p);
    a[h.path] = {
      variant: _e,
      presentation: M,
      zIndex: f
    };
  }
  if (t.length)
    if (t[t.length - 1].presentation === "replace") {
      const f = "replace", h = Ae(f, !0), g = n[n.length - 1];
      a[g.path] = {
        ...a[g.path],
        variant: h,
        presentation: f
      };
    } else {
      let f;
      for (const h of t)
        if ($t(h.presentation) && (f = h.presentation === "modal" ? "modal" : "modalSheet"), f) {
          const g = Ae(
            f,
            !0
          );
          a[h.path] = {
            ...a[h.path],
            variant: g,
            presentation: f
          };
        }
    }
  return a;
};
var ne;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ne || (ne = {}));
process.env.NODE_ENV;
const Me = (e, t) => {
  if (e) {
    for (const n of t)
      if (Mr(n, e) !== null)
        return n;
  }
}, Xo = ({
  navigationType: e,
  currentLocation: t,
  screens: n,
  declaredPresentationByPath: a,
  paths: u,
  defaultPresentation: p = "push"
}) => {
  const c = Me(t.pathname, u) || t.pathname;
  let s = k.Replace, l = [], f = [...n];
  const h = () => {
    const y = Object.keys(a), T = Me(
      t.pathname,
      y
    ), N = T ? a[T] : p, { pathname: I, key: C } = t;
    return {
      path: c,
      pathname: I,
      key: C,
      presentation: N
    };
  }, g = n.find(
    (y) => y.key === t.key
  ), x = n.findIndex(
    (y) => y.path === c
  );
  if (!g && x === -1)
    if (e === ne.Replace) {
      l = [];
      const y = h();
      f[Math.max(0, n.length - 1)] = y;
    } else {
      t.key !== "default" && (s = k.Forwards), l = [];
      const y = h();
      f = n.concat(y);
    }
  else if (x !== -1) {
    s = k.Backwards, l = n.slice(x + 1), f = n.slice(0, x + 1);
    const y = h();
    f[x] = y;
  } else
    g && e === ne.Pop && n.indexOf(g) === n.length - 2 && (s = k.Backwards, l = n.slice(-1), f = n.slice(0, n.length - 1));
  return e === ne.Replace && (s = k.Replace), {
    screens: f,
    poppedScreens: l,
    presentationDirection: s
  };
}, Zt = wt(null), qo = () => Ct(Zt), oi = ({
  defaultPresentation: e,
  children: t
}) => /* @__PURE__ */ $(
  Zt.Provider,
  {
    value: {
      defaultPresentation: e
    },
    children: t
  },
  void 0,
  !1,
  {
    fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutesConfig.tsx",
    lineNumber: 24,
    columnNumber: 5
  },
  globalThis
), Qt = wt(null), Ko = () => Ct(Qt);
let ee = [];
const Jo = ({
  declaredPresentationByPath: e,
  paths: t,
  children: n
}) => {
  const a = Ur(), u = Dt(), p = Br(), c = qo(), s = te([]), l = te([]), f = te(k.Replace), h = te(null);
  De(() => () => {
    ee = [...s.current];
  });
  const g = Ue(() => {
    if (h.current !== u) {
      h.current === null && ee.length && ee[ee.length - 1].key === u.key && (s.current = [...ee]), h.current = u;
      const T = Xo({
        screens: s.current,
        navigationType: a,
        currentLocation: u,
        declaredPresentationByPath: e,
        paths: t,
        defaultPresentation: c == null ? void 0 : c.defaultPresentation
      });
      s.current = T.screens, l.current = T.poppedScreens, f.current = T.presentationDirection;
    }
    return Ho({
      presentationDirection: f.current,
      poppedScreens: l.current,
      screens: s.current
    });
  }, [
    u,
    e,
    a,
    t,
    c == null ? void 0 : c.defaultPresentation
  ]), x = wr(() => {
    const y = [...s.current].reverse().find((T) => $t(T.presentation));
    if (y) {
      const T = s.current.indexOf(y);
      T > 0 && p(s.current[T - 1].pathname);
    }
  }, [p]);
  return /* @__PURE__ */ $(
    Qt.Provider,
    {
      value: {
        presentationDirection: f.current,
        presentationByPath: g,
        onStackClicked: x
      },
      children: n
    },
    void 0,
    !1,
    {
      fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackContext.tsx",
      lineNumber: 127,
      columnNumber: 5
    },
    globalThis
  );
}, Zo = jt(At.div, {
  shouldForwardProp: (e) => $r(e) || Dr(e),
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    transformOrigin: "50% 0",
    bg: "bg"
  }
}), Qo = jt(At.div, {
  baseStyle: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
}), ei = ({
  path: e,
  children: t,
  ...n
}) => {
  const a = te(null), {
    presentationDirection: u,
    presentationByPath: p,
    onStackClicked: c
  } = Ko(), [s, l] = Fr(), f = Nr(), { variant: h, presentation: g, zIndex: x } = p[e] || {}, { enter: y, active: T, exit: N } = h || {}, I = Xr(g), C = qr(g);
  De(() => {
    !s && !I && l();
  }, [s, I, l]), De(() => {
    const L = (V) => {
      var M;
      s && !((M = a.current) != null && M.contains(V.target)) && (V.stopPropagation(), c());
    };
    return C && document.addEventListener("mousedown", L), () => {
      C && document.removeEventListener("mousedown", L);
    };
  }, [C, s, c]);
  const E = Ue(() => f || g === "replace" || u === k.Replace ? Hr : Gr, [f, g, u]);
  return /* @__PURE__ */ $(
    Zo,
    {
      ref: a,
      transition: E,
      initial: y,
      animate: T,
      exit: N,
      zIndex: x,
      ...n,
      children: t
    },
    void 0,
    !1,
    {
      fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackScreen.tsx",
      lineNumber: 74,
      columnNumber: 5
    },
    globalThis
  );
}, er = (e, t = "/") => {
  const n = {};
  let a = [];
  const u = Cr.map(e, (c) => {
    if (jr(c)) {
      let { children: s, element: l } = c.props;
      const { presentation: f, path: h } = c.props, g = h ? Wr(h, t).pathname : t;
      if (c.type === kt && (f && (n[g] = f), a.push(g)), s) {
        const {
          wrappedChildren: x,
          declaredPresentationByPath: y,
          paths: T
        } = er(s, g);
        s = x, Object.assign(n, y), a = a.concat(T);
      }
      return l && h ? l = /* @__PURE__ */ $(ei, { path: g, children: l }, void 0, !1, {
        fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/presentation/getWrappedChildrenAndPresentation.tsx",
        lineNumber: 76,
        columnNumber: 19
      }, globalThis) : l = /* @__PURE__ */ $(Qo, { children: l }, void 0, !1, {
        fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/presentation/getWrappedChildrenAndPresentation.tsx",
        lineNumber: 79,
        columnNumber: 19
      }, globalThis), Ar(
        c,
        {
          element: l
        },
        s
      );
    }
    return c;
  }), p = Array.from(new Set(a));
  return {
    wrappedChildren: u,
    declaredPresentationByPath: n,
    paths: p
  };
}, ii = ({
  children: e,
  ...t
}) => {
  const n = Dt(), { wrappedChildren: a, declaredPresentationByPath: u, paths: p } = Ue(
    () => er(e),
    [e]
  ), c = Me(n.pathname, p);
  return /* @__PURE__ */ $(
    Jo,
    {
      declaredPresentationByPath: u,
      paths: p,
      children: /* @__PURE__ */ $(
        kr,
        {
          position: "relative",
          overflow: "hidden",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          ...t,
          children: /* @__PURE__ */ $(Ir, { initial: !1, children: /* @__PURE__ */ $(Yr, { location: n, children: a }, c, !1, {
            fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutes.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, globalThis) }, void 0, !1, {
            fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutes.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, globalThis)
        },
        void 0,
        !1,
        {
          fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutes.tsx",
          lineNumber: 25,
          columnNumber: 7
        },
        globalThis
      )
    },
    void 0,
    !1,
    {
      fileName: "/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutes.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    globalThis
  );
}, si = kt;
export {
  si as Route,
  ii as Routes,
  oi as RoutesConfig
};
