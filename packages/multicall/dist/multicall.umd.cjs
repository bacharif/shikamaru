(function(s,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("starknet")):typeof define=="function"&&define.amd?define(["exports","starknet"],o):(s=typeof globalThis<"u"?globalThis:s||self,o(s.multicall={},s.starknet))})(this,function(s,o){"use strict";var K=Object.defineProperty;var j=(s,o,h)=>o in s?K(s,o,{enumerable:!0,configurable:!0,writable:!0,value:h}):s[o]=h;var S=(s,o,h)=>(j(s,typeof o!="symbol"?o+"":o,h),h);var h=function(){function e(n,t){if(typeof n!="function")throw new TypeError("DataLoader must be constructed with a function which accepts "+("Array<key> and returns Promise<Array<value>>, but got: "+n+"."));this._batchLoadFn=n,this._maxBatchSize=E(t),this._batchScheduleFn=C(t),this._cacheKeyFn=M(t),this._cacheMap=P(t),this._batch=null,this.name=B(t)}var r=e.prototype;return r.load=function(t){if(t==null)throw new TypeError("The loader.load() function must be called with a value, "+("but got: "+String(t)+"."));var a=T(this),c=this._cacheMap,i=this._cacheKeyFn(t);if(c){var u=c.get(i);if(u){var l=a.cacheHits||(a.cacheHits=[]);return new Promise(function(f){l.push(function(){f(u)})})}}a.keys.push(t);var d=new Promise(function(f,g){a.callbacks.push({resolve:f,reject:g})});return c&&c.set(i,d),d},r.loadMany=function(t){if(!w(t))throw new TypeError("The loader.loadMany() function must be called with Array<key> "+("but got: "+t+"."));for(var a=[],c=0;c<t.length;c++)a.push(this.load(t[c]).catch(function(i){return i}));return Promise.all(a)},r.clear=function(t){var a=this._cacheMap;if(a){var c=this._cacheKeyFn(t);a.delete(c)}return this},r.clearAll=function(){var t=this._cacheMap;return t&&t.clear(),this},r.prime=function(t,a){var c=this._cacheMap;if(c){var i=this._cacheKeyFn(t);if(c.get(i)===void 0){var u;a instanceof Error?(u=Promise.reject(a),u.catch(function(){})):u=Promise.resolve(a),c.set(i,u)}}return this},e}(),A=typeof process=="object"&&typeof process.nextTick=="function"?function(e){y||(y=Promise.resolve()),y.then(function(){process.nextTick(e)})}:typeof setImmediate=="function"?function(e){setImmediate(e)}:function(e){setTimeout(e)},y;function T(e){var r=e._batch;if(r!==null&&!r.hasDispatched&&r.keys.length<e._maxBatchSize)return r;var n={hasDispatched:!1,keys:[],callbacks:[]};return e._batch=n,e._batchScheduleFn(function(){_(e,n)}),n}function _(e,r){if(r.hasDispatched=!0,r.keys.length===0){p(r);return}var n;try{n=e._batchLoadFn(r.keys)}catch(t){return m(e,r,new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function "+("errored synchronously: "+String(t)+".")))}if(!n||typeof n.then!="function")return m(e,r,new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did "+("not return a Promise: "+String(n)+".")));n.then(function(t){if(!w(t))throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did "+("not return a Promise of an Array: "+String(t)+"."));if(t.length!==r.keys.length)throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys."+(`

Keys:
`+String(r.keys))+(`

Values:
`+String(t)));p(r);for(var a=0;a<r.callbacks.length;a++){var c=t[a];c instanceof Error?r.callbacks[a].reject(c):r.callbacks[a].resolve(c)}}).catch(function(t){m(e,r,t)})}function m(e,r,n){p(r);for(var t=0;t<r.keys.length;t++)e.clear(r.keys[t]),r.callbacks[t].reject(n)}function p(e){if(e.cacheHits)for(var r=0;r<e.cacheHits.length;r++)e.cacheHits[r]()}function E(e){var r=!e||e.batch!==!1;if(!r)return 1;var n=e&&e.maxBatchSize;if(n===void 0)return 1/0;if(typeof n!="number"||n<1)throw new TypeError("maxBatchSize must be a positive number: "+n);return n}function C(e){var r=e&&e.batchScheduleFn;if(r===void 0)return A;if(typeof r!="function")throw new TypeError("batchScheduleFn must be a function: "+r);return r}function M(e){var r=e&&e.cacheKeyFn;if(r===void 0)return function(n){return n};if(typeof r!="function")throw new TypeError("cacheKeyFn must be a function: "+r);return r}function P(e){var r=!e||e.cache!==!1;if(!r)return null;var n=e&&e.cacheMap;if(n===void 0)return new Map;if(n!==null){var t=["get","set","delete","clear"],a=t.filter(function(c){return n&&typeof n[c]!="function"});if(a.length!==0)throw new TypeError("Custom cacheMap missing methods: "+a.join(", "))}return n}function B(e){return e&&e.name?e.name:null}function w(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&(e.length===0||e.length>0&&Object.prototype.hasOwnProperty.call(e,e.length-1))}var k=h;const v=e=>{if(e.length===0)return[];const[r,...n]=e,t=o.number.toBN(r).toNumber(),a=n.slice(0,t),c=n.slice(t);return[a,...v(c)]},L=e=>{var r;try{const n=(r=e.toString().match(/Error message: multicall (\d+) failed/))==null?void 0:r[1];if(n===void 0)throw e;return parseInt(n,10)}catch{throw e}},x=async(e,r)=>(await Promise.allSettled(r.map(t=>e.callContract({contractAddress:t.contractAddress,entrypoint:t.entrypoint,calldata:o.stark.compileCalldata(t.calldata??[])}).then(a=>a.result)))).map(t=>t.status==="fulfilled"?t.value:t.reason),b=async(e,r,n)=>{if(n.length===0)return[];try{const t=await e.callContract({contractAddress:r,entrypoint:"aggregate",calldata:o.transaction.fromCallsToExecuteCalldata([...n])}),[a,c,...i]=t.result;return v(i)}catch(t){if(!(t instanceof Error))throw t;if(t instanceof o.GatewayError&&t.errorCode==="StarknetErrorCode.UNINITIALIZED_CONTRACT")return x(e,n);const a=L(t),c=n.filter((u,l)=>l!==a),i=await b(e,r,c);return[...i.slice(0,a),t,...i.slice(a)]}},D=(e,r,n={batchInterval:500,maxBatchSize:10})=>{const t=new k(async a=>(t.clearAll(),b(e,r,a)),{maxBatchSize:n.maxBatchSize,batchScheduleFn(a){setTimeout(a,n.batchInterval)},cacheKeyFn(a){const{contractAddress:c,entrypoint:i,calldata:u=[]}=a,l=o.number.toHex(o.number.toBN(c)),d=o.hash.getSelector(i),f=u.map(g=>o.number.toHex(o.number.toBN(g))).join("-");return`${l}--${d}--${f}`}});return t},F="0x05754af3760f3356da99aea5c3ec39ccac7783d925a19666ebbeca58ff0087f4";class I{constructor(r,n=F,t){S(this,"dataloader");this.provider=r,this.address=n,this.dataloader=D(r,n,t)}call(r){return this.dataloader.load(r)}}s.Multicall=I,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});