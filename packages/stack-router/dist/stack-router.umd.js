(function(T,P){typeof exports=="object"&&typeof module<"u"?P(exports,require("react"),require("@chakra-ui/react"),require("framer-motion"),require("react-router-dom")):typeof define=="function"&&define.amd?define(["exports","react","@chakra-ui/react","framer-motion","react-router-dom"],P):(T=typeof globalThis<"u"?globalThis:T||self,P(T["stack-router"]={},T.React,T.ChakraUIReact,T.FramerMotion,T.ReactRouterDOM))})(this,function(T,P,ue,G,D){"use strict";var Re={},Zt={get exports(){return Re},set exports(e){Re=e}},le={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge;function Qt(){if(Ge)return le;Ge=1;var e=Symbol.for("react.fragment");return le.Fragment=e,le.jsxDEV=void 0,le}var fe={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function qt(){return He||(He=1,process.env.NODE_ENV!=="production"&&function(){var e=P,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),R=Symbol.iterator,U="@@iterator";function L(r){if(r===null||typeof r!="object")return null;var o=R&&r[R]||r[U];return typeof o=="function"?o:null}var A=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(r){{for(var o=arguments.length,i=new Array(o>1?o-1:0),d=1;d<o;d++)i[d-1]=arguments[d];J("error",r,i)}}function J(r,o,i){{var d=A.ReactDebugCurrentFrame,m=d.getStackAddendum();m!==""&&(o+="%s",i=i.concat([m]));var _=i.map(function(b){return String(b)});_.unshift("Warning: "+o),Function.prototype.apply.call(console[r],console,_)}}var Z=!1,Y=!1,Me=!1,V=!1,lo=!1,wt;wt=Symbol.for("react.module.reference");function fo(r){return!!(typeof r=="string"||typeof r=="function"||r===a||r===p||lo||r===c||r===f||r===h||V||r===y||Z||Y||Me||typeof r=="object"&&r!==null&&(r.$$typeof===E||r.$$typeof===g||r.$$typeof===u||r.$$typeof===s||r.$$typeof===l||r.$$typeof===wt||r.getModuleId!==void 0))}function po(r,o,i){var d=r.displayName;if(d)return d;var m=o.displayName||o.name||"";return m!==""?i+"("+m+")":i}function Ct(r){return r.displayName||"Context"}function M(r){if(r==null)return null;if(typeof r.tag=="number"&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case a:return"Fragment";case n:return"Portal";case p:return"Profiler";case c:return"StrictMode";case f:return"Suspense";case h:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case s:var o=r;return Ct(o)+".Consumer";case u:var i=r;return Ct(i._context)+".Provider";case l:return po(r,r.render,"ForwardRef");case g:var d=r.displayName||null;return d!==null?d:M(r.type)||"Memo";case E:{var m=r,_=m._payload,b=m._init;try{return M(b(_))}catch{return null}}}return null}var z=Object.assign,se=0,jt,At,kt,Dt,Ft,Nt,It;function Mt(){}Mt.__reactDisabledLog=!0;function ho(){{if(se===0){jt=console.log,At=console.info,kt=console.warn,Dt=console.error,Ft=console.group,Nt=console.groupCollapsed,It=console.groupEnd;var r={configurable:!0,enumerable:!0,value:Mt,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}se++}}function vo(){{if(se--,se===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:z({},r,{value:jt}),info:z({},r,{value:At}),warn:z({},r,{value:kt}),error:z({},r,{value:Dt}),group:z({},r,{value:Ft}),groupCollapsed:z({},r,{value:Nt}),groupEnd:z({},r,{value:It})})}se<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var $e=A.ReactCurrentDispatcher,Ue;function ye(r,o,i){{if(Ue===void 0)try{throw Error()}catch(m){var d=m.stack.trim().match(/\n( *(at )?)/);Ue=d&&d[1]||""}return`
`+Ue+r}}var Be=!1,_e;{var go=typeof WeakMap=="function"?WeakMap:Map;_e=new go}function $t(r,o){if(!r||Be)return"";{var i=_e.get(r);if(i!==void 0)return i}var d;Be=!0;var m=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var _;_=$e.current,$e.current=null,ho();try{if(o){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch($){d=$}Reflect.construct(r,[],b)}else{try{b.call()}catch($){d=$}r.call(b.prototype)}}else{try{throw Error()}catch($){d=$}r()}}catch($){if($&&d&&typeof $.stack=="string"){for(var v=$.stack.split(`
`),j=d.stack.split(`
`),O=v.length-1,x=j.length-1;O>=1&&x>=0&&v[O]!==j[x];)x--;for(;O>=1&&x>=0;O--,x--)if(v[O]!==j[x]){if(O!==1||x!==1)do if(O--,x--,x<0||v[O]!==j[x]){var k=`
`+v[O].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),typeof r=="function"&&_e.set(r,k),k}while(O>=1&&x>=0);break}}}finally{Be=!1,$e.current=_,vo(),Error.prepareStackTrace=m}var q=r?r.displayName||r.name:"",Jt=q?ye(q):"";return typeof r=="function"&&_e.set(r,Jt),Jt}function bo(r,o,i){return $t(r,!1)}function mo(r){var o=r.prototype;return!!(o&&o.isReactComponent)}function Se(r,o,i){if(r==null)return"";if(typeof r=="function")return $t(r,mo(r));if(typeof r=="string")return ye(r);switch(r){case f:return ye("Suspense");case h:return ye("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case l:return bo(r.render);case g:return Se(r.type,o,i);case E:{var d=r,m=d._payload,_=d._init;try{return Se(_(m),o,i)}catch{}}}return""}var Te=Object.prototype.hasOwnProperty,Ut={},Bt=A.ReactDebugCurrentFrame;function Pe(r){if(r){var o=r._owner,i=Se(r.type,r._source,o?o.type:null);Bt.setExtraStackFrame(i)}else Bt.setExtraStackFrame(null)}function yo(r,o,i,d,m){{var _=Function.call.bind(Te);for(var b in r)if(_(r,b)){var v=void 0;try{if(typeof r[b]!="function"){var j=Error((d||"React class")+": "+i+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}v=r[b](o,b,d,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(O){v=O}v&&!(v instanceof Error)&&(Pe(m),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",i,b,typeof v),Pe(null)),v instanceof Error&&!(v.message in Ut)&&(Ut[v.message]=!0,Pe(m),w("Failed %s type: %s",i,v.message),Pe(null))}}}var _o=Array.isArray;function We(r){return _o(r)}function So(r){{var o=typeof Symbol=="function"&&Symbol.toStringTag,i=o&&r[Symbol.toStringTag]||r.constructor.name||"Object";return i}}function To(r){try{return Wt(r),!1}catch{return!0}}function Wt(r){return""+r}function Lt(r){if(To(r))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",So(r)),Wt(r)}var ce=A.ReactCurrentOwner,Po={key:!0,ref:!0,__self:!0,__source:!0},Yt,Vt,Le;Le={};function Ro(r){if(Te.call(r,"ref")){var o=Object.getOwnPropertyDescriptor(r,"ref").get;if(o&&o.isReactWarning)return!1}return r.ref!==void 0}function Eo(r){if(Te.call(r,"key")){var o=Object.getOwnPropertyDescriptor(r,"key").get;if(o&&o.isReactWarning)return!1}return r.key!==void 0}function Oo(r,o){if(typeof r.ref=="string"&&ce.current&&o&&ce.current.stateNode!==o){var i=M(ce.current.type);Le[i]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',M(ce.current.type),r.ref),Le[i]=!0)}}function xo(r,o){{var i=function(){Yt||(Yt=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};i.isReactWarning=!0,Object.defineProperty(r,"key",{get:i,configurable:!0})}}function wo(r,o){{var i=function(){Vt||(Vt=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};i.isReactWarning=!0,Object.defineProperty(r,"ref",{get:i,configurable:!0})}}var Co=function(r,o,i,d,m,_,b){var v={$$typeof:t,type:r,key:o,ref:i,props:b,_owner:_};return v._store={},Object.defineProperty(v._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(v,"_self",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.defineProperty(v,"_source",{configurable:!1,enumerable:!1,writable:!1,value:m}),Object.freeze&&(Object.freeze(v.props),Object.freeze(v)),v};function jo(r,o,i,d,m){{var _,b={},v=null,j=null;i!==void 0&&(Lt(i),v=""+i),Eo(o)&&(Lt(o.key),v=""+o.key),Ro(o)&&(j=o.ref,Oo(o,m));for(_ in o)Te.call(o,_)&&!Po.hasOwnProperty(_)&&(b[_]=o[_]);if(r&&r.defaultProps){var O=r.defaultProps;for(_ in O)b[_]===void 0&&(b[_]=O[_])}if(v||j){var x=typeof r=="function"?r.displayName||r.name||"Unknown":r;v&&xo(b,x),j&&wo(b,x)}return Co(r,v,j,m,d,ce.current,b)}}var Ye=A.ReactCurrentOwner,zt=A.ReactDebugCurrentFrame;function Q(r){if(r){var o=r._owner,i=Se(r.type,r._source,o?o.type:null);zt.setExtraStackFrame(i)}else zt.setExtraStackFrame(null)}var Ve;Ve=!1;function ze(r){return typeof r=="object"&&r!==null&&r.$$typeof===t}function Gt(){{if(Ye.current){var r=M(Ye.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function Ao(r){{if(r!==void 0){var o=r.fileName.replace(/^.*[\\\/]/,""),i=r.lineNumber;return`

Check your code at `+o+":"+i+"."}return""}}var Ht={};function ko(r){{var o=Gt();if(!o){var i=typeof r=="string"?r:r.displayName||r.name;i&&(o=`

Check the top-level render call using <`+i+">.")}return o}}function Xt(r,o){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var i=ko(o);if(Ht[i])return;Ht[i]=!0;var d="";r&&r._owner&&r._owner!==Ye.current&&(d=" It was passed a child from "+M(r._owner.type)+"."),Q(r),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,d),Q(null)}}function Kt(r,o){{if(typeof r!="object")return;if(We(r))for(var i=0;i<r.length;i++){var d=r[i];ze(d)&&Xt(d,o)}else if(ze(r))r._store&&(r._store.validated=!0);else if(r){var m=L(r);if(typeof m=="function"&&m!==r.entries)for(var _=m.call(r),b;!(b=_.next()).done;)ze(b.value)&&Xt(b.value,o)}}}function Do(r){{var o=r.type;if(o==null||typeof o=="string")return;var i;if(typeof o=="function")i=o.propTypes;else if(typeof o=="object"&&(o.$$typeof===l||o.$$typeof===g))i=o.propTypes;else return;if(i){var d=M(o);yo(i,r.props,"prop",d,r)}else if(o.PropTypes!==void 0&&!Ve){Ve=!0;var m=M(o);w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",m||"Unknown")}typeof o.getDefaultProps=="function"&&!o.getDefaultProps.isReactClassApproved&&w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Fo(r){{for(var o=Object.keys(r.props),i=0;i<o.length;i++){var d=o[i];if(d!=="children"&&d!=="key"){Q(r),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",d),Q(null);break}}r.ref!==null&&(Q(r),w("Invalid attribute `ref` supplied to `React.Fragment`."),Q(null))}}function No(r,o,i,d,m,_){{var b=fo(r);if(!b){var v="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(v+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j=Ao(m);j?v+=j:v+=Gt();var O;r===null?O="null":We(r)?O="array":r!==void 0&&r.$$typeof===t?(O="<"+(M(r.type)||"Unknown")+" />",v=" Did you accidentally export a JSX literal instead of a component?"):O=typeof r,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",O,v)}var x=jo(r,o,i,m,_);if(x==null)return x;if(b){var k=o.children;if(k!==void 0)if(d)if(We(k)){for(var q=0;q<k.length;q++)Kt(k[q],r);Object.freeze&&Object.freeze(k)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Kt(k,r)}return r===a?Fo(x):Do(x),x}}var Io=No;fe.Fragment=a,fe.jsxDEV=Io}()),fe}(function(e){process.env.NODE_ENV==="production"?e.exports=Qt():e.exports=qt()})(Zt);const F=Re.jsxDEV,er={transition:{type:"spring",stiffness:1e3,damping:500,mass:3,bounce:0,restDelta:10,restSpeed:10}},tr={duration:0};var N=(e=>(e.Replace="REPLACE",e.Forwards="FORWARDS",e.Backwards="BACKWARDS",e))(N||{});const Xe=e=>e==="modal"||e==="modalSheet",rr=e=>e==="stacked"||e==="stackedStacked",nr=e=>e==="modalSheet"||e==="pushModalSheet";var ar=typeof global=="object"&&global&&global.Object===Object&&global;const Ke=ar;var or=typeof self=="object"&&self&&self.Object===Object&&self,ir=Ke||or||Function("return this")();const H=ir;var sr=H.Symbol;const de=sr;var Je=Object.prototype,cr=Je.hasOwnProperty,ur=Je.toString,ee=de?de.toStringTag:void 0;function lr(e){var t=cr.call(e,ee),n=e[ee];try{e[ee]=void 0;var a=!0}catch{}var c=ur.call(e);return a&&(t?e[ee]=n:delete e[ee]),c}var fr=Object.prototype,dr=fr.toString;function pr(e){return dr.call(e)}var hr="[object Null]",vr="[object Undefined]",Ze=de?de.toStringTag:void 0;function pe(e){return e==null?e===void 0?vr:hr:Ze&&Ze in Object(e)?lr(e):pr(e)}function te(e){return e!=null&&typeof e=="object"}var gr=Array.isArray;const Ee=gr;function B(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Qe(e){return e}var br="[object AsyncFunction]",mr="[object Function]",yr="[object GeneratorFunction]",_r="[object Proxy]";function Oe(e){if(!B(e))return!1;var t=pe(e);return t==mr||t==yr||t==br||t==_r}var Sr=H["__core-js_shared__"];const xe=Sr;var qe=function(){var e=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Tr(e){return!!qe&&qe in e}var Pr=Function.prototype,Rr=Pr.toString;function Er(e){if(e!=null){try{return Rr.call(e)}catch{}try{return e+""}catch{}}return""}var Or=/[\\^$.*+?()[\]{}|]/g,xr=/^\[object .+?Constructor\]$/,wr=Function.prototype,Cr=Object.prototype,jr=wr.toString,Ar=Cr.hasOwnProperty,kr=RegExp("^"+jr.call(Ar).replace(Or,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Dr(e){if(!B(e)||Tr(e))return!1;var t=Oe(e)?kr:xr;return t.test(Er(e))}function Fr(e,t){return e==null?void 0:e[t]}function we(e,t){var n=Fr(e,t);return Dr(n)?n:void 0}var et=Object.create,Nr=function(){function e(){}return function(t){if(!B(t))return{};if(et)return et(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const Ir=Nr;function Mr(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function $r(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}var Ur=800,Br=16,Wr=Date.now;function Lr(e){var t=0,n=0;return function(){var a=Wr(),c=Br-(a-n);if(n=a,c>0){if(++t>=Ur)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Yr(e){return function(){return e}}var Vr=function(){try{var e=we(Object,"defineProperty");return e({},"",{}),e}catch{}}();const he=Vr;var zr=he?function(e,t){return he(e,"toString",{configurable:!0,enumerable:!1,value:Yr(t),writable:!0})}:Qe,Gr=Lr(zr);const Hr=Gr;var Xr=9007199254740991,Kr=/^(?:0|[1-9]\d*)$/;function tt(e,t){var n=typeof e;return t=t??Xr,!!t&&(n=="number"||n!="symbol"&&Kr.test(e))&&e>-1&&e%1==0&&e<t}function Ce(e,t,n){t=="__proto__"&&he?he(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ve(e,t){return e===t||e!==e&&t!==t}var Jr=Object.prototype,Zr=Jr.hasOwnProperty;function Qr(e,t,n){var a=e[t];(!(Zr.call(e,t)&&ve(a,n))||n===void 0&&!(t in e))&&Ce(e,t,n)}function qr(e,t,n,a){var c=!n;n||(n={});for(var p=-1,u=t.length;++p<u;){var s=t[p],l=a?a(n[s],e[s],s,n,e):void 0;l===void 0&&(l=e[s]),c?Ce(n,s,l):Qr(n,s,l)}return n}var rt=Math.max;function en(e,t,n){return t=rt(t===void 0?e.length-1:t,0),function(){for(var a=arguments,c=-1,p=rt(a.length-t,0),u=Array(p);++c<p;)u[c]=a[t+c];c=-1;for(var s=Array(t+1);++c<t;)s[c]=a[c];return s[t]=n(u),Mr(e,this,s)}}function tn(e,t){return Hr(en(e,t,Qe),e+"")}var rn=9007199254740991;function nt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=rn}function je(e){return e!=null&&nt(e.length)&&!Oe(e)}function nn(e,t,n){if(!B(n))return!1;var a=typeof t;return(a=="number"?je(n)&&tt(t,n.length):a=="string"&&t in n)?ve(n[t],e):!1}function an(e){return tn(function(t,n){var a=-1,c=n.length,p=c>1?n[c-1]:void 0,u=c>2?n[2]:void 0;for(p=e.length>3&&typeof p=="function"?(c--,p):void 0,u&&nn(n[0],n[1],u)&&(p=c<3?void 0:p,c=1),t=Object(t);++a<c;){var s=n[a];s&&e(t,s,a,p)}return t})}var on=Object.prototype;function at(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||on;return e===n}function sn(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}var cn="[object Arguments]";function ot(e){return te(e)&&pe(e)==cn}var it=Object.prototype,un=it.hasOwnProperty,ln=it.propertyIsEnumerable,fn=ot(function(){return arguments}())?ot:function(e){return te(e)&&un.call(e,"callee")&&!ln.call(e,"callee")};const Ae=fn;function dn(){return!1}var st=typeof T=="object"&&T&&!T.nodeType&&T,ct=st&&typeof module=="object"&&module&&!module.nodeType&&module,pn=ct&&ct.exports===st,ut=pn?H.Buffer:void 0,hn=ut?ut.isBuffer:void 0,vn=hn||dn;const lt=vn;var gn="[object Arguments]",bn="[object Array]",mn="[object Boolean]",yn="[object Date]",_n="[object Error]",Sn="[object Function]",Tn="[object Map]",Pn="[object Number]",Rn="[object Object]",En="[object RegExp]",On="[object Set]",xn="[object String]",wn="[object WeakMap]",Cn="[object ArrayBuffer]",jn="[object DataView]",An="[object Float32Array]",kn="[object Float64Array]",Dn="[object Int8Array]",Fn="[object Int16Array]",Nn="[object Int32Array]",In="[object Uint8Array]",Mn="[object Uint8ClampedArray]",$n="[object Uint16Array]",Un="[object Uint32Array]",S={};S[An]=S[kn]=S[Dn]=S[Fn]=S[Nn]=S[In]=S[Mn]=S[$n]=S[Un]=!0,S[gn]=S[bn]=S[Cn]=S[mn]=S[jn]=S[yn]=S[_n]=S[Sn]=S[Tn]=S[Pn]=S[Rn]=S[En]=S[On]=S[xn]=S[wn]=!1;function Bn(e){return te(e)&&nt(e.length)&&!!S[pe(e)]}function Wn(e){return function(t){return e(t)}}var ft=typeof T=="object"&&T&&!T.nodeType&&T,re=ft&&typeof module=="object"&&module&&!module.nodeType&&module,Ln=re&&re.exports===ft,ke=Ln&&Ke.process,Yn=function(){try{var e=re&&re.require&&re.require("util").types;return e||ke&&ke.binding&&ke.binding("util")}catch{}}();const dt=Yn;var pt=dt&&dt.isTypedArray,Vn=pt?Wn(pt):Bn;const ht=Vn;var zn=Object.prototype,Gn=zn.hasOwnProperty;function Hn(e,t){var n=Ee(e),a=!n&&Ae(e),c=!n&&!a&&lt(e),p=!n&&!a&&!c&&ht(e),u=n||a||c||p,s=u?sn(e.length,String):[],l=s.length;for(var f in e)(t||Gn.call(e,f))&&!(u&&(f=="length"||c&&(f=="offset"||f=="parent")||p&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||tt(f,l)))&&s.push(f);return s}function Xn(e,t){return function(n){return e(t(n))}}function Kn(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Jn=Object.prototype,Zn=Jn.hasOwnProperty;function Qn(e){if(!B(e))return Kn(e);var t=at(e),n=[];for(var a in e)a=="constructor"&&(t||!Zn.call(e,a))||n.push(a);return n}function vt(e){return je(e)?Hn(e,!0):Qn(e)}var qn=we(Object,"create");const ne=qn;function ea(){this.__data__=ne?ne(null):{},this.size=0}function ta(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ra="__lodash_hash_undefined__",na=Object.prototype,aa=na.hasOwnProperty;function oa(e){var t=this.__data__;if(ne){var n=t[e];return n===ra?void 0:n}return aa.call(t,e)?t[e]:void 0}var ia=Object.prototype,sa=ia.hasOwnProperty;function ca(e){var t=this.__data__;return ne?t[e]!==void 0:sa.call(t,e)}var ua="__lodash_hash_undefined__";function la(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ne&&t===void 0?ua:t,this}function W(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}W.prototype.clear=ea,W.prototype.delete=ta,W.prototype.get=oa,W.prototype.has=ca,W.prototype.set=la;function fa(){this.__data__=[],this.size=0}function ge(e,t){for(var n=e.length;n--;)if(ve(e[n][0],t))return n;return-1}var da=Array.prototype,pa=da.splice;function ha(e){var t=this.__data__,n=ge(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():pa.call(t,n,1),--this.size,!0}function va(e){var t=this.__data__,n=ge(t,e);return n<0?void 0:t[n][1]}function ga(e){return ge(this.__data__,e)>-1}function ba(e,t){var n=this.__data__,a=ge(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}function I(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}I.prototype.clear=fa,I.prototype.delete=ha,I.prototype.get=va,I.prototype.has=ga,I.prototype.set=ba;var ma=we(H,"Map");const gt=ma;function ya(){this.size=0,this.__data__={hash:new W,map:new(gt||I),string:new W}}function _a(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function be(e,t){var n=e.__data__;return _a(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Sa(e){var t=be(this,e).delete(e);return this.size-=t?1:0,t}function Ta(e){return be(this,e).get(e)}function Pa(e){return be(this,e).has(e)}function Ra(e,t){var n=be(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}function X(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}X.prototype.clear=ya,X.prototype.delete=Sa,X.prototype.get=Ta,X.prototype.has=Pa,X.prototype.set=Ra;var Ea=Xn(Object.getPrototypeOf,Object);const bt=Ea;var Oa="[object Object]",xa=Function.prototype,wa=Object.prototype,mt=xa.toString,Ca=wa.hasOwnProperty,ja=mt.call(Object);function Aa(e){if(!te(e)||pe(e)!=Oa)return!1;var t=bt(e);if(t===null)return!0;var n=Ca.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&mt.call(n)==ja}function ka(){this.__data__=new I,this.size=0}function Da(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Fa(e){return this.__data__.get(e)}function Na(e){return this.__data__.has(e)}var Ia=200;function Ma(e,t){var n=this.__data__;if(n instanceof I){var a=n.__data__;if(!gt||a.length<Ia-1)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new X(a)}return n.set(e,t),this.size=n.size,this}function K(e){var t=this.__data__=new I(e);this.size=t.size}K.prototype.clear=ka,K.prototype.delete=Da,K.prototype.get=Fa,K.prototype.has=Na,K.prototype.set=Ma;var yt=typeof T=="object"&&T&&!T.nodeType&&T,_t=yt&&typeof module=="object"&&module&&!module.nodeType&&module,$a=_t&&_t.exports===yt,St=$a?H.Buffer:void 0,Tt=St?St.allocUnsafe:void 0;function Ua(e,t){if(t)return e.slice();var n=e.length,a=Tt?Tt(n):new e.constructor(n);return e.copy(a),a}var Ba=H.Uint8Array;const Pt=Ba;function Wa(e){var t=new e.constructor(e.byteLength);return new Pt(t).set(new Pt(e)),t}function La(e,t){var n=t?Wa(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ya(e){return typeof e.constructor=="function"&&!at(e)?Ir(bt(e)):{}}function Va(e){return function(t,n,a){for(var c=-1,p=Object(t),u=a(t),s=u.length;s--;){var l=u[e?s:++c];if(n(p[l],l,p)===!1)break}return t}}var za=Va();const Ga=za;function De(e,t,n){(n!==void 0&&!ve(e[t],n)||n===void 0&&!(t in e))&&Ce(e,t,n)}function Ha(e){return te(e)&&je(e)}function Fe(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function Xa(e){return qr(e,vt(e))}function Ka(e,t,n,a,c,p,u){var s=Fe(e,n),l=Fe(t,n),f=u.get(l);if(f){De(e,n,f);return}var h=p?p(s,l,n+"",e,t,u):void 0,g=h===void 0;if(g){var E=Ee(l),y=!E&&lt(l),R=!E&&!y&&ht(l);h=l,E||y||R?Ee(s)?h=s:Ha(s)?h=$r(s):y?(g=!1,h=Ua(l,!0)):R?(g=!1,h=La(l,!0)):h=[]:Aa(l)||Ae(l)?(h=s,Ae(s)?h=Xa(s):(!B(s)||Oe(s))&&(h=Ya(l))):g=!1}g&&(u.set(l,h),c(h,l,a,p,u),u.delete(l)),De(e,n,h)}function Rt(e,t,n,a,c){e!==t&&Ga(t,function(p,u){if(c||(c=new K),B(p))Ka(e,t,u,n,Rt,a,c);else{var s=a?a(Fe(e,u),p,u+"",e,t,c):void 0;s===void 0&&(s=p),De(e,u,s)}},vt)}var Ja=an(function(e,t,n){Rt(e,t,n)});const Za=Ja,Ne=(e,t=!1)=>{const n=Za({},C.push,C[e]);return t?Qa(n):n},Qa=({enter:e,active:t,exit:n})=>({enter:n,active:t,exit:e}),ae={borderTopLeftRadius:"4px",borderTopRightRadius:"4px"},me={filter:"brightness(1)",translateX:0,translateY:0,marginTop:0,scale:1,borderTopLeftRadius:0,borderTopRightRadius:0},C={push:{enter:{filter:"brightness(1)",translateX:"100%",translateY:0,boxShadow:"0 0 0 0 rgba(0, 0, 0, 0)"},active:{...me,boxShadow:"0 0 20px 5px rgba(0, 0, 0, 0.3)"},exit:{filter:"brightness(0.3)",translateX:"-30%",translateY:0}},modal:{get enter(){return C.modal.exit},exit:{...ae,filter:"brightness(1)",translateX:0,translateY:"100%",boxShadow:"0 0 0 0 rgba(0, 0, 0, 0)"}},modalSheet:{get enter(){return C.modal.enter},active:{...ae,filter:"brightness(1)",translateX:0,translateY:0,marginTop:"24px",scale:1,boxShadow:"0 0 20px 5px rgba(0, 0, 0, 0.3)"},get exit(){return C.modal.exit}},pushModalSheet:{get enter(){var e;return{...C.push.enter,marginTop:(e=C.modalSheet.active)==null?void 0:e.marginTop}},get active(){var e;return{...C.push.active,...ae,marginTop:(e=C.modalSheet.active)==null?void 0:e.marginTop}},get exit(){var e;return{...C.push.exit,marginTop:(e=C.modalSheet.active)==null?void 0:e.marginTop}}},stacked:{get enter(){return C.stacked.exit},exit:{...ae,filter:"brightness(0.8)",translateX:0,translateY:0,marginTop:"12px",scale:.9}},stackedStacked:{get enter(){return C.stackedStacked.exit},get active(){return C.stacked.exit},exit:{...ae,filter:"brightness(0)",translateX:0,translateY:0,marginTop:0,scale:.8}},modalStacked:{get enter(){return C.stacked.enter},get active(){return C.stacked.active},get exit(){return C.stacked.exit}},replace:{get enter(){return me},get active(){return me},get exit(){return me}}},qa=({presentationDirection:e,poppedScreens:t,screens:n})=>{var u,s,l;const a={},c=t?[...n,...t]:n,p=e===N.Forwards;for(let f=0;f<c.length;f++){const h=c[f],g=c.slice(f+1),E=p?c.slice(f+1):n.slice(f+1),y=f>0?n.slice(0,f):[],R=E.filter(V=>V.presentation==="modalSheet").length,U=g.filter(V=>V.presentation==="modal").length,A=((u=y.filter(V=>V.presentation!=="push").pop())==null?void 0:u.presentation)==="modalSheet"&&h.presentation==="push",w=h.presentation==="modalSheet"&&((s=g[0])==null?void 0:s.presentation)==="push",J=h.presentation==="modal"&&((l=g[0])==null?void 0:l.presentation)==="push",Z=y.length>0&&y[y.length-1].presentation==="replace",Y=R>1?"stackedStacked":R===1?"stacked":U>0?"modalStacked":w||A?"pushModalSheet":J?"push":Z?"replace":h.presentation,Me=Ne(Y,!p);a[h.path]={variant:Me,presentation:Y,zIndex:f}}if(t.length)if(t[t.length-1].presentation==="replace"){const f="replace",h=Ne(f,!0),g=n[n.length-1];a[g.path]={...a[g.path],variant:h,presentation:f}}else{let f;for(const h of t)if(Xe(h.presentation)&&(f=h.presentation==="modal"?"modal":"modalSheet"),f){const g=Ne(f,!0);a[h.path]={...a[h.path],variant:g,presentation:f}}}return a};var oe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(oe||(oe={})),process.env.NODE_ENV;const Ie=(e,t)=>{if(e){for(const n of t)if(D.matchPath(n,e)!==null)return n}},eo=({navigationType:e,currentLocation:t,screens:n,declaredPresentationByPath:a,paths:c,defaultPresentation:p="push"})=>{const u=Ie(t.pathname,c)||t.pathname;let s=N.Replace,l=[],f=[...n];const h=()=>{const y=Object.keys(a),R=Ie(t.pathname,y),U=R?a[R]:p,{pathname:L,key:A}=t;return{path:u,pathname:L,key:A,presentation:U}},g=n.find(y=>y.key===t.key),E=n.findIndex(y=>y.path===u);if(!g&&E===-1)if(e===oe.Replace){l=[];const y=h();f[Math.max(0,n.length-1)]=y}else{t.key!=="default"&&(s=N.Forwards),l=[];const y=h();f=n.concat(y)}else if(E!==-1){s=N.Backwards,l=n.slice(E+1),f=n.slice(0,E+1);const y=h();f[E]=y}else g&&e===oe.Pop&&n.indexOf(g)===n.length-2&&(s=N.Backwards,l=n.slice(-1),f=n.slice(0,n.length-1));return e===oe.Replace&&(s=N.Replace),{screens:f,poppedScreens:l,presentationDirection:s}},Et=P.createContext(null),to=()=>P.useContext(Et),ro=({defaultPresentation:e,children:t})=>F(Et.Provider,{value:{defaultPresentation:e},children:t},void 0,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutesConfig.tsx",lineNumber:24,columnNumber:5},globalThis),Ot=P.createContext(null),no=()=>P.useContext(Ot);let ie=[];const ao=({declaredPresentationByPath:e,paths:t,children:n})=>{const a=D.useNavigationType(),c=D.useLocation(),p=D.useNavigate(),u=to(),s=P.useRef([]),l=P.useRef([]),f=P.useRef(N.Replace),h=P.useRef(null);P.useEffect(()=>()=>{ie=[...s.current]});const g=P.useMemo(()=>{if(h.current!==c){h.current===null&&ie.length&&ie[ie.length-1].key===c.key&&(s.current=[...ie]),h.current=c;const R=eo({screens:s.current,navigationType:a,currentLocation:c,declaredPresentationByPath:e,paths:t,defaultPresentation:u==null?void 0:u.defaultPresentation});s.current=R.screens,l.current=R.poppedScreens,f.current=R.presentationDirection}return qa({presentationDirection:f.current,poppedScreens:l.current,screens:s.current})},[c,e,a,t,u==null?void 0:u.defaultPresentation]),E=P.useCallback(()=>{const y=[...s.current].reverse().find(R=>Xe(R.presentation));if(y){const R=s.current.indexOf(y);R>0&&p(s.current[R-1].pathname)}},[p]);return F(Ot.Provider,{value:{presentationDirection:f.current,presentationByPath:g,onStackClicked:E},children:n},void 0,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackContext.tsx",lineNumber:127,columnNumber:5},globalThis)},oo=ue.chakra(G.motion.div,{shouldForwardProp:e=>G.isValidMotionProp(e)||ue.shouldForwardProp(e),baseStyle:{display:"flex",flexDirection:"column",position:"absolute",left:0,top:0,right:0,bottom:0,transformOrigin:"50% 0",bg:"bg"}}),io=ue.chakra(G.motion.div,{baseStyle:{position:"absolute",left:0,top:0,right:0,bottom:0}}),so=({path:e,children:t,...n})=>{const a=P.useRef(null),{presentationDirection:c,presentationByPath:p,onStackClicked:u}=no(),[s,l]=G.usePresence(),f=G.useReducedMotion(),{variant:h,presentation:g,zIndex:E}=p[e]||{},{enter:y,active:R,exit:U}=h||{},L=rr(g),A=nr(g);P.useEffect(()=>{!s&&!L&&l()},[s,L,l]),P.useEffect(()=>{const J=Z=>{var Y;s&&!((Y=a.current)!=null&&Y.contains(Z.target))&&(Z.stopPropagation(),u())};return A&&document.addEventListener("mousedown",J),()=>{A&&document.removeEventListener("mousedown",J)}},[A,s,u]);const w=P.useMemo(()=>f||g==="replace"||c===N.Replace?tr:er,[f,g,c]);return F(oo,{ref:a,transition:w,initial:y,animate:R,exit:U,zIndex:E,...n,children:t},void 0,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackScreen.tsx",lineNumber:74,columnNumber:5},globalThis)},xt=(e,t="/")=>{const n={};let a=[];const c=P.Children.map(e,u=>{if(P.isValidElement(u)){let{children:s,element:l}=u.props;const{presentation:f,path:h}=u.props,g=h?D.resolvePath(h,t).pathname:t;if(u.type===D.Route&&(f&&(n[g]=f),a.push(g)),s){const{wrappedChildren:E,declaredPresentationByPath:y,paths:R}=xt(s,g);s=E,Object.assign(n,y),a=a.concat(R)}return l&&h?l=F(so,{path:g,children:l},void 0,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/presentation/getWrappedChildrenAndPresentation.tsx",lineNumber:76,columnNumber:19},globalThis):l=F(io,{children:l},void 0,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/presentation/getWrappedChildrenAndPresentation.tsx",lineNumber:79,columnNumber:19},globalThis),P.cloneElement(u,{element:l},s)}return u}),p=Array.from(new Set(a));return{wrappedChildren:c,declaredPresentationByPath:n,paths:p}},co=({children:e,...t})=>{const n=D.useLocation(),{wrappedChildren:a,declaredPresentationByPath:c,paths:p}=P.useMemo(()=>xt(e),[e]),u=Ie(n.pathname,p);return F(ao,{declaredPresentationByPath:c,paths:p,children:F(ue.Flex,{position:"relative",overflow:"hidden",flexDirection:"column",width:"100%",height:"100%",...t,children:F(G.AnimatePresence,{initial:!1,children:F(D.Routes,{location:n,children:a},u,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutes.tsx",lineNumber:34,columnNumber:11},globalThis)},void 0,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutes.tsx",lineNumber:33,columnNumber:9},globalThis)},void 0,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutes.tsx",lineNumber:25,columnNumber:7},globalThis)},void 0,!1,{fileName:"/Users/0xbacarif/Documents/OnlyDust/shikamaru/packages/stack-router/src/StackRoutes.tsx",lineNumber:21,columnNumber:5},globalThis)},uo=D.Route;T.Route=uo,T.Routes=co,T.RoutesConfig=ro,Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});