function EM(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function MM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vv={exports:{}},Hc={},Gv={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=Symbol.for("react.element"),TM=Symbol.for("react.portal"),wM=Symbol.for("react.fragment"),AM=Symbol.for("react.strict_mode"),RM=Symbol.for("react.profiler"),CM=Symbol.for("react.provider"),PM=Symbol.for("react.context"),bM=Symbol.for("react.forward_ref"),LM=Symbol.for("react.suspense"),DM=Symbol.for("react.memo"),IM=Symbol.for("react.lazy"),k_=Symbol.iterator;function UM(t){return t===null||typeof t!="object"?null:(t=k_&&t[k_]||t["@@iterator"],typeof t=="function"?t:null)}var Wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jv=Object.assign,Xv={};function oa(t,e,n){this.props=t,this.context=e,this.refs=Xv,this.updater=n||Wv}oa.prototype.isReactComponent={};oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yv(){}Yv.prototype=oa.prototype;function Kp(t,e,n){this.props=t,this.context=e,this.refs=Xv,this.updater=n||Wv}var Zp=Kp.prototype=new Yv;Zp.constructor=Kp;jv(Zp,oa.prototype);Zp.isPureReactComponent=!0;var B_=Array.isArray,qv=Object.prototype.hasOwnProperty,Qp={current:null},$v={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qv.call(e,i)&&!$v.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bl,type:t,key:s,ref:o,props:r,_owner:Qp.current}}function NM(t,e){return{$$typeof:bl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jp(t){return typeof t=="object"&&t!==null&&t.$$typeof===bl}function OM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var z_=/\/+/g;function wf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OM(""+t.key):e.toString(36)}function Du(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bl:case TM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wf(o,0):i,B_(r)?(n="",t!=null&&(n=t.replace(z_,"$&/")+"/"),Du(r,e,n,"",function(u){return u})):r!=null&&(Jp(r)&&(r=NM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(z_,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",B_(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wf(s,a);o+=Du(s,e,n,l,r)}else if(l=UM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wf(s,a++),o+=Du(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gl(t,e,n){if(t==null)return t;var i=[],r=0;return Du(t,i,"","",function(s){return e.call(n,s,r++)}),i}function FM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},Iu={transition:null},kM={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Iu,ReactCurrentOwner:Qp};function Zv(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Gl,forEach:function(t,e,n){Gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gl(t,function(){e++}),e},toArray:function(t){return Gl(t,function(e){return e})||[]},only:function(t){if(!Jp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=oa;ze.Fragment=wM;ze.Profiler=RM;ze.PureComponent=Kp;ze.StrictMode=AM;ze.Suspense=LM;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kM;ze.act=Zv;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qv.call(e,l)&&!$v.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:bl,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:PM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CM,_context:t},t.Consumer=t};ze.createElement=Kv;ze.createFactory=function(t){var e=Kv.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:bM,render:t}};ze.isValidElement=Jp;ze.lazy=function(t){return{$$typeof:IM,_payload:{_status:-1,_result:t},_init:FM}};ze.memo=function(t,e){return{$$typeof:DM,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Iu.transition;Iu.transition={};try{t()}finally{Iu.transition=e}};ze.unstable_act=Zv;ze.useCallback=function(t,e){return dn.current.useCallback(t,e)};ze.useContext=function(t){return dn.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};ze.useEffect=function(t,e){return dn.current.useEffect(t,e)};ze.useId=function(){return dn.current.useId()};ze.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return dn.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};ze.useRef=function(t){return dn.current.useRef(t)};ze.useState=function(t){return dn.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return dn.current.useTransition()};ze.version="18.3.1";Gv.exports=ze;var ie=Gv.exports;const BM=MM(ie),zM=EM({__proto__:null,default:BM},[ie]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HM=ie,VM=Symbol.for("react.element"),GM=Symbol.for("react.fragment"),WM=Object.prototype.hasOwnProperty,jM=HM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XM={key:!0,ref:!0,__self:!0,__source:!0};function Qv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)WM.call(e,i)&&!XM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:VM,type:t,key:s,ref:o,props:r,_owner:jM.current}}Hc.Fragment=GM;Hc.jsx=Qv;Hc.jsxs=Qv;Vv.exports=Hc;var Z=Vv.exports,Jv={exports:{}},qn={},ex={exports:{}},tx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,j){var q=b.length;b.push(j);e:for(;0<q;){var Q=q-1>>>1,le=b[Q];if(0<r(le,j))b[Q]=j,b[q]=le,q=Q;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var j=b[0],q=b.pop();if(q!==j){b[0]=q;e:for(var Q=0,le=b.length,Ae=le>>>1;Q<Ae;){var B=2*(Q+1)-1,te=b[B],fe=B+1,he=b[fe];if(0>r(te,q))fe<le&&0>r(he,te)?(b[Q]=he,b[fe]=q,Q=fe):(b[Q]=te,b[B]=q,Q=B);else if(fe<le&&0>r(he,q))b[Q]=he,b[fe]=q,Q=fe;else break e}}return j}function r(b,j){var q=b.sortIndex-j.sortIndex;return q!==0?q:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,g=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(b){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=b)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function y(b){if(_=!1,x(b),!g)if(n(l)!==null)g=!0,N(A);else{var j=n(u);j!==null&&W(y,j.startTime-b)}}function A(b,j){g=!1,_&&(_=!1,h(C),C=-1),m=!0;var q=d;try{for(x(j),f=n(l);f!==null&&(!(f.expirationTime>j)||b&&!T());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,d=f.priorityLevel;var le=Q(f.expirationTime<=j);j=t.unstable_now(),typeof le=="function"?f.callback=le:f===n(l)&&i(l),x(j)}else i(l);f=n(l)}if(f!==null)var Ae=!0;else{var B=n(u);B!==null&&W(y,B.startTime-j),Ae=!1}return Ae}finally{f=null,d=q,m=!1}}var w=!1,E=null,C=-1,D=5,S=-1;function T(){return!(t.unstable_now()-S<D)}function z(){if(E!==null){var b=t.unstable_now();S=b;var j=!0;try{j=E(!0,b)}finally{j?k():(w=!1,E=null)}}else w=!1}var k;if(typeof v=="function")k=function(){v(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,K=Y.port2;Y.port1.onmessage=z,k=function(){K.postMessage(null)}}else k=function(){p(z,0)};function N(b){E=b,w||(w=!0,k())}function W(b,j){C=p(function(){b(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,N(A))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var q=d;d=j;try{return b()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=d;d=b;try{return j()}finally{d=q}},t.unstable_scheduleCallback=function(b,j,q){var Q=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Q+q:Q):q=Q,b){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=q+le,b={id:c++,callback:j,priorityLevel:b,startTime:q,expirationTime:le,sortIndex:-1},q>Q?(b.sortIndex=q,e(u,b),n(l)===null&&b===n(u)&&(_?(h(C),C=-1):_=!0,W(y,q-Q))):(b.sortIndex=le,e(l,b),g||m||(g=!0,N(A))),b},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(b){var j=d;return function(){var q=d;d=j;try{return b.apply(this,arguments)}finally{d=q}}}})(tx);ex.exports=tx;var YM=ex.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qM=ie,Xn=YM;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nx=new Set,el={};function Vs(t,e){Vo(t,e),Vo(t+"Capture",e)}function Vo(t,e){for(el[t]=e,t=0;t<e.length;t++)nx.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gh=Object.prototype.hasOwnProperty,$M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H_={},V_={};function KM(t){return Gh.call(V_,t)?!0:Gh.call(H_,t)?!1:$M.test(t)?V_[t]=!0:(H_[t]=!0,!1)}function ZM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QM(t,e,n,i){if(e===null||typeof e>"u"||ZM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var em=/[\-:]([a-z])/g;function tm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(em,tm);qt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(em,tm);qt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(em,tm);qt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function nm(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QM(e,n,r,i)&&(n=null),i||r===null?KM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hr=qM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),ho=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),Wh=Symbol.for("react.profiler"),ix=Symbol.for("react.provider"),rx=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),Xh=Symbol.for("react.suspense_list"),sm=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),sx=Symbol.for("react.offscreen"),G_=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=G_&&t[G_]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Af;function Da(t){if(Af===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Af=e&&e[1]||""}return`
`+Af+t}var Rf=!1;function Cf(t,e){if(!t||Rf)return"";Rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function JM(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=Cf(t.type,!1),t;case 11:return t=Cf(t.type.render,!1),t;case 1:return t=Cf(t.type,!0),t;default:return""}}function Yh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case po:return"Fragment";case ho:return"Portal";case Wh:return"Profiler";case im:return"StrictMode";case jh:return"Suspense";case Xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rx:return(t.displayName||"Context")+".Consumer";case ix:return(t._context.displayName||"Context")+".Provider";case rm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sm:return e=t.displayName||null,e!==null?e:Yh(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return Yh(t(e))}catch{}}return null}function e1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yh(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ox(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t1(t){var e=ox(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jl(t){t._valueTracker||(t._valueTracker=t1(t))}function ax(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ox(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qh(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function W_(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lx(t,e){e=e.checked,e!=null&&nm(t,"checked",e,!1)}function $h(t,e){lx(t,e);var n=Yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kh(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function j_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kh(t,e,n){(e!=="number"||nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function Po(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function X_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ia(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function ux(t,e){var n=Yr(e.value),i=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Y_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xl,fx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xl=Xl||document.createElement("div"),Xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n1=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){n1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function hx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function dx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var i1=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jh(t,e){if(e){if(i1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function om(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nd=null,bo=null,Lo=null;function q_(t){if(t=Il(t)){if(typeof nd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Xc(e),nd(t.stateNode,t.type,e))}}function px(t){bo?Lo?Lo.push(t):Lo=[t]:bo=t}function mx(){if(bo){var t=bo,e=Lo;if(Lo=bo=null,q_(t),e)for(t=0;t<e.length;t++)q_(e[t])}}function _x(t,e){return t(e)}function gx(){}var Pf=!1;function vx(t,e,n){if(Pf)return t(e,n);Pf=!0;try{return _x(t,e,n)}finally{Pf=!1,(bo!==null||Lo!==null)&&(gx(),mx())}}function nl(t,e){var n=t.stateNode;if(n===null)return null;var i=Xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var id=!1;if(sr)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){id=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{id=!1}function r1(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var za=!1,ic=null,rc=!1,rd=null,s1={onError:function(t){za=!0,ic=t}};function o1(t,e,n,i,r,s,o,a,l){za=!1,ic=null,r1.apply(s1,arguments)}function a1(t,e,n,i,r,s,o,a,l){if(o1.apply(this,arguments),za){if(za){var u=ic;za=!1,ic=null}else throw Error(se(198));rc||(rc=!0,rd=u)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $_(t){if(Gs(t)!==t)throw Error(se(188))}function l1(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return $_(r),t;if(s===i)return $_(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function yx(t){return t=l1(t),t!==null?Sx(t):null}function Sx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sx(t);if(e!==null)return e;t=t.sibling}return null}var Ex=Xn.unstable_scheduleCallback,K_=Xn.unstable_cancelCallback,u1=Xn.unstable_shouldYield,c1=Xn.unstable_requestPaint,Pt=Xn.unstable_now,f1=Xn.unstable_getCurrentPriorityLevel,am=Xn.unstable_ImmediatePriority,Mx=Xn.unstable_UserBlockingPriority,sc=Xn.unstable_NormalPriority,h1=Xn.unstable_LowPriority,Tx=Xn.unstable_IdlePriority,Vc=null,Ni=null;function d1(t){if(Ni&&typeof Ni.onCommitFiberRoot=="function")try{Ni.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var Mi=Math.clz32?Math.clz32:_1,p1=Math.log,m1=Math.LN2;function _1(t){return t>>>=0,t===0?32:31-(p1(t)/m1|0)|0}var Yl=64,ql=4194304;function Ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ua(a):(s&=o,s!==0&&(i=Ua(s)))}else o=n&~r,o!==0?i=Ua(o):s!==0&&(i=Ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Mi(e),r=1<<n,i|=t[n],e&=~r;return i}function g1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=g1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wx(){var t=Yl;return Yl<<=1,!(Yl&4194240)&&(Yl=64),t}function bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mi(e),t[e]=n}function x1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function lm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Ax(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rx,um,Cx,Px,bx,od=!1,$l=[],Nr=null,Or=null,Fr=null,il=new Map,rl=new Map,wr=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Z_(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(e.pointerId)}}function va(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Il(e),e!==null&&um(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function S1(t,e,n,i,r){switch(e){case"focusin":return Nr=va(Nr,t,e,n,i,r),!0;case"dragenter":return Or=va(Or,t,e,n,i,r),!0;case"mouseover":return Fr=va(Fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return il.set(s,va(il.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,rl.set(s,va(rl.get(s)||null,t,e,n,i,r)),!0}return!1}function Lx(t){var e=xs(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=xx(n),e!==null){t.blockedOn=e,bx(t.priority,function(){Cx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);td=i,n.target.dispatchEvent(i),td=null}else return e=Il(n),e!==null&&um(e),t.blockedOn=n,!1;e.shift()}return!0}function Q_(t,e,n){Uu(t)&&n.delete(e)}function E1(){od=!1,Nr!==null&&Uu(Nr)&&(Nr=null),Or!==null&&Uu(Or)&&(Or=null),Fr!==null&&Uu(Fr)&&(Fr=null),il.forEach(Q_),rl.forEach(Q_)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,od||(od=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,E1)))}function sl(t){function e(r){return xa(r,t)}if(0<$l.length){xa($l[0],t);for(var n=1;n<$l.length;n++){var i=$l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Nr!==null&&xa(Nr,t),Or!==null&&xa(Or,t),Fr!==null&&xa(Fr,t),il.forEach(e),rl.forEach(e),n=0;n<wr.length;n++)i=wr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)Lx(n),n.blockedOn===null&&wr.shift()}var Do=hr.ReactCurrentBatchConfig,ac=!0;function M1(t,e,n,i){var r=nt,s=Do.transition;Do.transition=null;try{nt=1,cm(t,e,n,i)}finally{nt=r,Do.transition=s}}function T1(t,e,n,i){var r=nt,s=Do.transition;Do.transition=null;try{nt=4,cm(t,e,n,i)}finally{nt=r,Do.transition=s}}function cm(t,e,n,i){if(ac){var r=ad(t,e,n,i);if(r===null)zf(t,e,i,lc,n),Z_(t,i);else if(S1(r,t,e,n,i))i.stopPropagation();else if(Z_(t,i),e&4&&-1<y1.indexOf(t)){for(;r!==null;){var s=Il(r);if(s!==null&&Rx(s),s=ad(t,e,n,i),s===null&&zf(t,e,i,lc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zf(t,e,i,null,n)}}var lc=null;function ad(t,e,n,i){if(lc=null,t=om(i),t=xs(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lc=t,null}function Dx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f1()){case am:return 1;case Mx:return 4;case sc:case h1:return 16;case Tx:return 536870912;default:return 16}default:return 16}}var Cr=null,fm=null,Nu=null;function Ix(){if(Nu)return Nu;var t,e=fm,n=e.length,i,r="value"in Cr?Cr.value:Cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Nu=r.slice(t,1<i?1-i:void 0)}function Ou(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function J_(){return!1}function $n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kl:J_,this.isPropagationStopped=J_,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),e}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hm=$n(aa),Dl=Et({},aa,{view:0,detail:0}),w1=$n(Dl),Lf,Df,ya,Gc=Et({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(Lf=t.screenX-ya.screenX,Df=t.screenY-ya.screenY):Df=Lf=0,ya=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:Df}}),eg=$n(Gc),A1=Et({},Gc,{dataTransfer:0}),R1=$n(A1),C1=Et({},Dl,{relatedTarget:0}),If=$n(C1),P1=Et({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=$n(P1),L1=Et({},aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D1=$n(L1),I1=Et({},aa,{data:0}),tg=$n(I1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O1[t])?!!e[t]:!1}function dm(){return F1}var k1=Et({},Dl,{key:function(t){if(t.key){var e=U1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ou(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dm,charCode:function(t){return t.type==="keypress"?Ou(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ou(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B1=$n(k1),z1=Et({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=$n(z1),H1=Et({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dm}),V1=$n(H1),G1=Et({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),W1=$n(G1),j1=Et({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X1=$n(j1),Y1=[9,13,27,32],pm=sr&&"CompositionEvent"in window,Ha=null;sr&&"documentMode"in document&&(Ha=document.documentMode);var q1=sr&&"TextEvent"in window&&!Ha,Ux=sr&&(!pm||Ha&&8<Ha&&11>=Ha),ig=" ",rg=!1;function Nx(t,e){switch(t){case"keyup":return Y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ox(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mo=!1;function $1(t,e){switch(t){case"compositionend":return Ox(e);case"keypress":return e.which!==32?null:(rg=!0,ig);case"textInput":return t=e.data,t===ig&&rg?null:t;default:return null}}function K1(t,e){if(mo)return t==="compositionend"||!pm&&Nx(t,e)?(t=Ix(),Nu=fm=Cr=null,mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ux&&e.locale!=="ko"?null:e.data;default:return null}}var Z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Z1[t.type]:e==="textarea"}function Fx(t,e,n,i){px(i),e=uc(e,"onChange"),0<e.length&&(n=new hm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Va=null,ol=null;function Q1(t){qx(t,0)}function Wc(t){var e=vo(t);if(ax(e))return t}function J1(t,e){if(t==="change")return e}var kx=!1;if(sr){var Uf;if(sr){var Nf="oninput"in document;if(!Nf){var og=document.createElement("div");og.setAttribute("oninput","return;"),Nf=typeof og.oninput=="function"}Uf=Nf}else Uf=!1;kx=Uf&&(!document.documentMode||9<document.documentMode)}function ag(){Va&&(Va.detachEvent("onpropertychange",Bx),ol=Va=null)}function Bx(t){if(t.propertyName==="value"&&Wc(ol)){var e=[];Fx(e,ol,t,om(t)),vx(Q1,e)}}function eT(t,e,n){t==="focusin"?(ag(),Va=e,ol=n,Va.attachEvent("onpropertychange",Bx)):t==="focusout"&&ag()}function tT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(ol)}function nT(t,e){if(t==="click")return Wc(e)}function iT(t,e){if(t==="input"||t==="change")return Wc(e)}function rT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wi=typeof Object.is=="function"?Object.is:rT;function al(t,e){if(wi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gh.call(e,r)||!wi(t[r],e[r]))return!1}return!0}function lg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,e){var n=lg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lg(n)}}function zx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hx(){for(var t=window,e=nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nc(t.document)}return e}function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sT(t){var e=Hx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zx(n.ownerDocument.documentElement,n)){if(i!==null&&mm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ug(n,s);var o=ug(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oT=sr&&"documentMode"in document&&11>=document.documentMode,_o=null,ld=null,Ga=null,ud=!1;function cg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||_o==null||_o!==nc(i)||(i=_o,"selectionStart"in i&&mm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ga&&al(Ga,i)||(Ga=i,i=uc(ld,"onSelect"),0<i.length&&(e=new hm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_o)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var go={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},Of={},Vx={};sr&&(Vx=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function jc(t){if(Of[t])return Of[t];if(!go[t])return t;var e=go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vx)return Of[t]=e[n];return t}var Gx=jc("animationend"),Wx=jc("animationiteration"),jx=jc("animationstart"),Xx=jc("transitionend"),Yx=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(t,e){Yx.set(t,e),Vs(e,[t])}for(var Ff=0;Ff<fg.length;Ff++){var kf=fg[Ff],aT=kf.toLowerCase(),lT=kf[0].toUpperCase()+kf.slice(1);Jr(aT,"on"+lT)}Jr(Gx,"onAnimationEnd");Jr(Wx,"onAnimationIteration");Jr(jx,"onAnimationStart");Jr("dblclick","onDoubleClick");Jr("focusin","onFocus");Jr("focusout","onBlur");Jr(Xx,"onTransitionEnd");Vo("onMouseEnter",["mouseout","mouseover"]);Vo("onMouseLeave",["mouseout","mouseover"]);Vo("onPointerEnter",["pointerout","pointerover"]);Vo("onPointerLeave",["pointerout","pointerover"]);Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function hg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,a1(i,e,void 0,t),t.currentTarget=null}function qx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;hg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;hg(r,a,u),s=l}}}if(rc)throw t=rd,rc=!1,rd=null,t}function ht(t,e){var n=e[pd];n===void 0&&(n=e[pd]=new Set);var i=t+"__bubble";n.has(i)||($x(e,t,2,!1),n.add(i))}function Bf(t,e,n){var i=0;e&&(i|=4),$x(n,t,i,e)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function ll(t){if(!t[Ql]){t[Ql]=!0,nx.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||Bf(n,!1,t),Bf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ql]||(e[Ql]=!0,Bf("selectionchange",!1,e))}}function $x(t,e,n,i){switch(Dx(e)){case 1:var r=M1;break;case 4:r=T1;break;default:r=cm}n=r.bind(null,e,n,t),r=void 0,!id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}vx(function(){var u=s,c=om(n),f=[];e:{var d=Yx.get(t);if(d!==void 0){var m=hm,g=t;switch(t){case"keypress":if(Ou(n)===0)break e;case"keydown":case"keyup":m=B1;break;case"focusin":g="focus",m=If;break;case"focusout":g="blur",m=If;break;case"beforeblur":case"afterblur":m=If;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=R1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=V1;break;case Gx:case Wx:case jx:m=b1;break;case Xx:m=W1;break;case"scroll":m=w1;break;case"wheel":m=X1;break;case"copy":case"cut":case"paste":m=D1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ng}var _=(e&4)!==0,p=!_&&t==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=nl(v,h),y!=null&&_.push(ul(v,y,x)))),p)break;v=v.return}0<_.length&&(d=new m(d,g,null,n,c),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==td&&(g=n.relatedTarget||n.fromElement)&&(xs(g)||g[or]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?xs(g):null,g!==null&&(p=Gs(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(_=eg,y="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=ng,y="onPointerLeave",h="onPointerEnter",v="pointer"),p=m==null?d:vo(m),x=g==null?d:vo(g),d=new _(y,v+"leave",m,n,c),d.target=p,d.relatedTarget=x,y=null,xs(c)===u&&(_=new _(h,v+"enter",g,n,c),_.target=x,_.relatedTarget=p,y=_),p=y,m&&g)t:{for(_=m,h=g,v=0,x=_;x;x=$s(x))v++;for(x=0,y=h;y;y=$s(y))x++;for(;0<v-x;)_=$s(_),v--;for(;0<x-v;)h=$s(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=$s(_),h=$s(h)}_=null}else _=null;m!==null&&dg(f,d,m,_,!1),g!==null&&p!==null&&dg(f,p,g,_,!0)}}e:{if(d=u?vo(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=J1;else if(sg(d))if(kx)A=iT;else{A=tT;var w=eT}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=nT);if(A&&(A=A(t,u))){Fx(f,A,n,c);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Kh(d,"number",d.value)}switch(w=u?vo(u):window,t){case"focusin":(sg(w)||w.contentEditable==="true")&&(_o=w,ld=u,Ga=null);break;case"focusout":Ga=ld=_o=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,cg(f,n,c);break;case"selectionchange":if(oT)break;case"keydown":case"keyup":cg(f,n,c)}var E;if(pm)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else mo?Nx(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ux&&n.locale!=="ko"&&(mo||C!=="onCompositionStart"?C==="onCompositionEnd"&&mo&&(E=Ix()):(Cr=c,fm="value"in Cr?Cr.value:Cr.textContent,mo=!0)),w=uc(u,C),0<w.length&&(C=new tg(C,t,null,n,c),f.push({event:C,listeners:w}),E?C.data=E:(E=Ox(n),E!==null&&(C.data=E)))),(E=q1?$1(t,n):K1(t,n))&&(u=uc(u,"onBeforeInput"),0<u.length&&(c=new tg("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=E))}qx(f,e)})}function ul(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=nl(t,n),s!=null&&i.unshift(ul(t,s,r)),s=nl(t,e),s!=null&&i.push(ul(t,s,r))),t=t.return}return i}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=nl(n,s),l!=null&&o.unshift(ul(n,l,a))):r||(l=nl(n,s),l!=null&&o.push(ul(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function pg(t){return(typeof t=="string"?t:""+t).replace(cT,`
`).replace(fT,"")}function Jl(t,e,n){if(e=pg(e),pg(t)!==e&&n)throw Error(se(425))}function cc(){}var cd=null,fd=null;function hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,hT=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,dT=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(t){return mg.resolve(null).then(t).catch(pT)}:dd;function pT(t){setTimeout(function(){throw t})}function Hf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sl(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var la=Math.random().toString(36).slice(2),Di="__reactFiber$"+la,cl="__reactProps$"+la,or="__reactContainer$"+la,pd="__reactEvents$"+la,mT="__reactListeners$"+la,_T="__reactHandles$"+la;function xs(t){var e=t[Di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_g(t);t!==null;){if(n=t[Di])return n;t=_g(t)}return e}t=n,n=t.parentNode}return null}function Il(t){return t=t[Di]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Xc(t){return t[cl]||null}var md=[],xo=-1;function es(t){return{current:t}}function pt(t){0>xo||(t.current=md[xo],md[xo]=null,xo--)}function ut(t,e){xo++,md[xo]=t.current,t.current=e}var qr={},sn=es(qr),Sn=es(!1),Ds=qr;function Go(t,e){var n=t.type.contextTypes;if(!n)return qr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function fc(){pt(Sn),pt(sn)}function gg(t,e,n){if(sn.current!==qr)throw Error(se(168));ut(sn,e),ut(Sn,n)}function Kx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,e1(t)||"Unknown",r));return Et({},n,i)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,Ds=sn.current,ut(sn,t),ut(Sn,Sn.current),!0}function vg(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Kx(t,e,Ds),i.__reactInternalMemoizedMergedChildContext=t,pt(Sn),pt(sn),ut(sn,t)):pt(Sn),ut(Sn,n)}var Ki=null,Yc=!1,Vf=!1;function Zx(t){Ki===null?Ki=[t]:Ki.push(t)}function gT(t){Yc=!0,Zx(t)}function ts(){if(!Vf&&Ki!==null){Vf=!0;var t=0,e=nt;try{var n=Ki;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ki=null,Yc=!1}catch(r){throw Ki!==null&&(Ki=Ki.slice(t+1)),Ex(am,ts),r}finally{nt=e,Vf=!1}}return null}var yo=[],So=0,dc=null,pc=0,Jn=[],ei=0,Is=null,Ji=1,er="";function ds(t,e){yo[So++]=pc,yo[So++]=dc,dc=t,pc=e}function Qx(t,e,n){Jn[ei++]=Ji,Jn[ei++]=er,Jn[ei++]=Is,Is=t;var i=Ji;t=er;var r=32-Mi(i)-1;i&=~(1<<r),n+=1;var s=32-Mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ji=1<<32-Mi(e)+r|n<<r|i,er=s+t}else Ji=1<<s|n<<r|i,er=t}function _m(t){t.return!==null&&(ds(t,1),Qx(t,1,0))}function gm(t){for(;t===dc;)dc=yo[--So],yo[So]=null,pc=yo[--So],yo[So]=null;for(;t===Is;)Is=Jn[--ei],Jn[ei]=null,er=Jn[--ei],Jn[ei]=null,Ji=Jn[--ei],Jn[ei]=null}var Gn=null,zn=null,_t=!1,xi=null;function Jx(t,e){var n=ti(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gn=t,zn=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gn=t,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Is!==null?{id:Ji,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ti(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gn=t,zn=null,!0):!1;default:return!1}}function _d(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(_t){var e=zn;if(e){var n=e;if(!xg(t,e)){if(_d(t))throw Error(se(418));e=kr(n.nextSibling);var i=Gn;e&&xg(t,e)?Jx(i,n):(t.flags=t.flags&-4097|2,_t=!1,Gn=t)}}else{if(_d(t))throw Error(se(418));t.flags=t.flags&-4097|2,_t=!1,Gn=t}}}function yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function eu(t){if(t!==Gn)return!1;if(!_t)return yg(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hd(t.type,t.memoizedProps)),e&&(e=zn)){if(_d(t))throw ey(),Error(se(418));for(;e;)Jx(t,e),e=kr(e.nextSibling)}if(yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zn=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zn=null}}else zn=Gn?kr(t.stateNode.nextSibling):null;return!0}function ey(){for(var t=zn;t;)t=kr(t.nextSibling)}function Wo(){zn=Gn=null,_t=!1}function vm(t){xi===null?xi=[t]:xi.push(t)}var vT=hr.ReactCurrentBatchConfig;function Sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function tu(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sg(t){var e=t._init;return e(t._payload)}function ty(t){function e(h,v){if(t){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Vr(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=$f(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var A=x.type;return A===po?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Er&&Sg(A)===v.type)?(y=r(v,x.props),y.ref=Sa(h,v,x),y.return=h,y):(y=Gu(x.type,x.key,x.props,null,h.mode,y),y.ref=Sa(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Kf(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,A){return v===null||v.tag!==7?(v=As(x,h.mode,y,A),v.return=h,v):(v=r(v,x),v.return=h,v)}function f(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$f(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wl:return x=Gu(v.type,v.key,v.props,null,h.mode,x),x.ref=Sa(h,null,v),x.return=h,x;case ho:return v=Kf(v,h.mode,x),v.return=h,v;case Er:var y=v._init;return f(h,y(v._payload),x)}if(Ia(v)||_a(v))return v=As(v,h.mode,x,null),v.return=h,v;tu(h,v)}return null}function d(h,v,x,y){var A=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wl:return x.key===A?l(h,v,x,y):null;case ho:return x.key===A?u(h,v,x,y):null;case Er:return A=x._init,d(h,v,A(x._payload),y)}if(Ia(x)||_a(x))return A!==null?null:c(h,v,x,y,null);tu(h,x)}return null}function m(h,v,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wl:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,A);case ho:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,A);case Er:var w=y._init;return m(h,v,x,w(y._payload),A)}if(Ia(y)||_a(y))return h=h.get(x)||null,c(v,h,y,A,null);tu(v,y)}return null}function g(h,v,x,y){for(var A=null,w=null,E=v,C=v=0,D=null;E!==null&&C<x.length;C++){E.index>C?(D=E,E=null):D=E.sibling;var S=d(h,E,x[C],y);if(S===null){E===null&&(E=D);break}t&&E&&S.alternate===null&&e(h,E),v=s(S,v,C),w===null?A=S:w.sibling=S,w=S,E=D}if(C===x.length)return n(h,E),_t&&ds(h,C),A;if(E===null){for(;C<x.length;C++)E=f(h,x[C],y),E!==null&&(v=s(E,v,C),w===null?A=E:w.sibling=E,w=E);return _t&&ds(h,C),A}for(E=i(h,E);C<x.length;C++)D=m(E,h,C,x[C],y),D!==null&&(t&&D.alternate!==null&&E.delete(D.key===null?C:D.key),v=s(D,v,C),w===null?A=D:w.sibling=D,w=D);return t&&E.forEach(function(T){return e(h,T)}),_t&&ds(h,C),A}function _(h,v,x,y){var A=_a(x);if(typeof A!="function")throw Error(se(150));if(x=A.call(x),x==null)throw Error(se(151));for(var w=A=null,E=v,C=v=0,D=null,S=x.next();E!==null&&!S.done;C++,S=x.next()){E.index>C?(D=E,E=null):D=E.sibling;var T=d(h,E,S.value,y);if(T===null){E===null&&(E=D);break}t&&E&&T.alternate===null&&e(h,E),v=s(T,v,C),w===null?A=T:w.sibling=T,w=T,E=D}if(S.done)return n(h,E),_t&&ds(h,C),A;if(E===null){for(;!S.done;C++,S=x.next())S=f(h,S.value,y),S!==null&&(v=s(S,v,C),w===null?A=S:w.sibling=S,w=S);return _t&&ds(h,C),A}for(E=i(h,E);!S.done;C++,S=x.next())S=m(E,h,C,S.value,y),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?C:S.key),v=s(S,v,C),w===null?A=S:w.sibling=S,w=S);return t&&E.forEach(function(z){return e(h,z)}),_t&&ds(h,C),A}function p(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===po&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wl:e:{for(var A=x.key,w=v;w!==null;){if(w.key===A){if(A=x.type,A===po){if(w.tag===7){n(h,w.sibling),v=r(w,x.props.children),v.return=h,h=v;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Er&&Sg(A)===w.type){n(h,w.sibling),v=r(w,x.props),v.ref=Sa(h,w,x),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}x.type===po?(v=As(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=Gu(x.type,x.key,x.props,null,h.mode,y),y.ref=Sa(h,v,x),y.return=h,h=y)}return o(h);case ho:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Kf(x,h.mode,y),v.return=h,h=v}return o(h);case Er:return w=x._init,p(h,v,w(x._payload),y)}if(Ia(x))return g(h,v,x,y);if(_a(x))return _(h,v,x,y);tu(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,x),v.return=h,h=v):(n(h,v),v=$f(x,h.mode,y),v.return=h,h=v),o(h)):n(h,v)}return p}var jo=ty(!0),ny=ty(!1),mc=es(null),_c=null,Eo=null,xm=null;function ym(){xm=Eo=_c=null}function Sm(t){var e=mc.current;pt(mc),t._currentValue=e}function vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Io(t,e){_c=t,xm=Eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function li(t){var e=t._currentValue;if(xm!==t)if(t={context:t,memoizedValue:e,next:null},Eo===null){if(_c===null)throw Error(se(308));Eo=t,_c.dependencies={lanes:0,firstContext:t}}else Eo=Eo.next=t;return e}var ys=null;function Em(t){ys===null?ys=[t]:ys.push(t)}function iy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Em(e)):(n.next=r.next,r.next=n),e.interleaved=n,ar(t,i)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function Mm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ry(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ar(t,n)}return r=i.interleaved,r===null?(e.next=e,Em(i)):(e.next=r.next,r.next=e),i.interleaved=e,ar(t,n)}function Fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lm(t,n)}}function Eg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gc(t,e,n,i){var r=t.updateQueue;Mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,m=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(m,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(m,f,d):g,d==null)break e;f=Et({},f,d);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ns|=o,t.lanes=o,t.memoizedState=f}}function Mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ul={},Oi=es(Ul),fl=es(Ul),hl=es(Ul);function Ss(t){if(t===Ul)throw Error(se(174));return t}function Tm(t,e){switch(ut(hl,e),ut(fl,t),ut(Oi,Ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qh(e,t)}pt(Oi),ut(Oi,e)}function Xo(){pt(Oi),pt(fl),pt(hl)}function sy(t){Ss(hl.current);var e=Ss(Oi.current),n=Qh(e,t.type);e!==n&&(ut(fl,t),ut(Oi,n))}function wm(t){fl.current===t&&(pt(Oi),pt(fl))}var vt=es(0);function vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gf=[];function Am(){for(var t=0;t<Gf.length;t++)Gf[t]._workInProgressVersionPrimary=null;Gf.length=0}var ku=hr.ReactCurrentDispatcher,Wf=hr.ReactCurrentBatchConfig,Us=0,St=null,Ot=null,Ht=null,xc=!1,Wa=!1,dl=0,xT=0;function $t(){throw Error(se(321))}function Rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wi(t[n],e[n]))return!1;return!0}function Cm(t,e,n,i,r,s){if(Us=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ku.current=t===null||t.memoizedState===null?MT:TT,t=n(i,r),Wa){s=0;do{if(Wa=!1,dl=0,25<=s)throw Error(se(301));s+=1,Ht=Ot=null,e.updateQueue=null,ku.current=wT,t=n(i,r)}while(Wa)}if(ku.current=yc,e=Ot!==null&&Ot.next!==null,Us=0,Ht=Ot=St=null,xc=!1,e)throw Error(se(300));return t}function Pm(){var t=dl!==0;return dl=0,t}function Ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?St.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function ui(){if(Ot===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Ht===null?St.memoizedState:Ht.next;if(e!==null)Ht=e,Ot=t;else{if(t===null)throw Error(se(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Ht===null?St.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function pl(t,e){return typeof e=="function"?e(t):e}function jf(t){var e=ui(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Us&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,St.lanes|=c,Ns|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,wi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xf(t){var e=ui(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);wi(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function oy(){}function ay(t,e){var n=St,i=ui(),r=e(),s=!wi(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,bm(cy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,ml(9,uy.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(se(349));Us&30||ly(n,e,r)}return r}function ly(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uy(t,e,n,i){e.value=n,e.getSnapshot=i,fy(e)&&hy(t)}function cy(t,e,n){return n(function(){fy(e)&&hy(t)})}function fy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wi(t,n)}catch{return!0}}function hy(t){var e=ar(t,1);e!==null&&Ti(e,t,1,-1)}function Tg(t){var e=Ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:t},e.queue=t,t=t.dispatch=ET.bind(null,St,t),[e.memoizedState,t]}function ml(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dy(){return ui().memoizedState}function Bu(t,e,n,i){var r=Ci();St.flags|=t,r.memoizedState=ml(1|e,n,void 0,i===void 0?null:i)}function qc(t,e,n,i){var r=ui();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Rm(i,o.deps)){r.memoizedState=ml(e,n,s,i);return}}St.flags|=t,r.memoizedState=ml(1|e,n,s,i)}function wg(t,e){return Bu(8390656,8,t,e)}function bm(t,e){return qc(2048,8,t,e)}function py(t,e){return qc(4,2,t,e)}function my(t,e){return qc(4,4,t,e)}function _y(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gy(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,_y.bind(null,e,t),n)}function Lm(){}function vy(t,e){var n=ui();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function xy(t,e){var n=ui();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function yy(t,e,n){return Us&21?(wi(n,e)||(n=wx(),St.lanes|=n,Ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function yT(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Wf.transition;Wf.transition={};try{t(!1),e()}finally{nt=n,Wf.transition=i}}function Sy(){return ui().memoizedState}function ST(t,e,n){var i=Hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ey(t))My(e,n);else if(n=iy(t,e,n,i),n!==null){var r=cn();Ti(n,t,i,r),Ty(n,e,i)}}function ET(t,e,n){var i=Hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ey(t))My(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,wi(a,o)){var l=e.interleaved;l===null?(r.next=r,Em(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=iy(t,e,r,i),n!==null&&(r=cn(),Ti(n,t,i,r),Ty(n,e,i))}}function Ey(t){var e=t.alternate;return t===St||e!==null&&e===St}function My(t,e){Wa=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ty(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lm(t,n)}}var yc={readContext:li,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},MT={readContext:li,useCallback:function(t,e){return Ci().memoizedState=[t,e===void 0?null:e],t},useContext:li,useEffect:wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4194308,4,_y.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bu(4,2,t,e)},useMemo:function(t,e){var n=Ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ST.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=Ci();return t={current:t},e.memoizedState=t},useState:Tg,useDebugValue:Lm,useDeferredValue:function(t){return Ci().memoizedState=t},useTransition:function(){var t=Tg(!1),e=t[0];return t=yT.bind(null,t[1]),Ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=Ci();if(_t){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Gt===null)throw Error(se(349));Us&30||ly(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,wg(cy.bind(null,i,s,t),[t]),i.flags|=2048,ml(9,uy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ci(),e=Gt.identifierPrefix;if(_t){var n=er,i=Ji;n=(i&~(1<<32-Mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=dl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TT={readContext:li,useCallback:vy,useContext:li,useEffect:bm,useImperativeHandle:gy,useInsertionEffect:py,useLayoutEffect:my,useMemo:xy,useReducer:jf,useRef:dy,useState:function(){return jf(pl)},useDebugValue:Lm,useDeferredValue:function(t){var e=ui();return yy(e,Ot.memoizedState,t)},useTransition:function(){var t=jf(pl)[0],e=ui().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:Sy,unstable_isNewReconciler:!1},wT={readContext:li,useCallback:vy,useContext:li,useEffect:bm,useImperativeHandle:gy,useInsertionEffect:py,useLayoutEffect:my,useMemo:xy,useReducer:Xf,useRef:dy,useState:function(){return Xf(pl)},useDebugValue:Lm,useDeferredValue:function(t){var e=ui();return Ot===null?e.memoizedState=t:yy(e,Ot.memoizedState,t)},useTransition:function(){var t=Xf(pl)[0],e=ui().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:Sy,unstable_isNewReconciler:!1};function gi(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $c={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Hr(t),s=ir(i,r);s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,r),e!==null&&(Ti(e,t,r,i),Fu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Hr(t),s=ir(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,r),e!==null&&(Ti(e,t,r,i),Fu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=Hr(t),r=ir(n,i);r.tag=2,e!=null&&(r.callback=e),e=Br(t,r,i),e!==null&&(Ti(e,t,i,n),Fu(e,t,i))}};function Ag(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!al(n,i)||!al(r,s):!0}function wy(t,e,n){var i=!1,r=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=li(s):(r=En(e)?Ds:sn.current,i=e.contextTypes,s=(i=i!=null)?Go(t,r):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$c,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&$c.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=li(s):(s=En(e)?Ds:sn.current,r.context=Go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$c.enqueueReplaceState(r,r.state,null),gc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Yo(t,e){try{var n="",i=e;do n+=JM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AT=typeof WeakMap=="function"?WeakMap:Map;function Ay(t,e,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ec||(Ec=!0,Ld=i),Sd(t,e)},n}function Ry(t,e,n){n=ir(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sd(t,e),typeof i!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new AT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zT.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ir(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var RT=hr.ReactCurrentOwner,yn=!1;function ln(t,e,n,i){e.child=t===null?ny(e,null,n,i):jo(e,t.child,n,i)}function Lg(t,e,n,i,r){n=n.render;var s=e.ref;return Io(e,r),i=Cm(t,e,n,i,s,r),n=Pm(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,lr(t,e,r)):(_t&&n&&_m(e),e.flags|=1,ln(t,e,i,r),e.child)}function Dg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cy(t,e,s,i,r)):(t=Gu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(o,i)&&t.ref===e.ref)return lr(t,e,r)}return e.flags|=1,t=Vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Cy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(al(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,lr(t,e,r)}return Ed(t,e,n,i,r)}function Py(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(To,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(To,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(To,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(To,Fn),Fn|=i;return ln(t,e,r,n),e.child}function by(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,i,r){var s=En(n)?Ds:sn.current;return s=Go(e,s),Io(e,r),n=Cm(t,e,n,i,s,r),i=Pm(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,lr(t,e,r)):(_t&&i&&_m(e),e.flags|=1,ln(t,e,n,r),e.child)}function Ig(t,e,n,i,r){if(En(n)){var s=!0;hc(e)}else s=!1;if(Io(e,r),e.stateNode===null)zu(t,e),wy(e,n,i),yd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=li(u):(u=En(n)?Ds:sn.current,u=Go(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Rg(e,o,i,u),Mr=!1;var d=e.memoizedState;o.state=d,gc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Sn.current||Mr?(typeof c=="function"&&(xd(e,n,c,i),l=e.memoizedState),(a=Mr||Ag(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ry(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:gi(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=li(l):(l=En(n)?Ds:sn.current,l=Go(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Rg(e,o,i,l),Mr=!1,d=e.memoizedState,o.state=d,gc(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||Sn.current||Mr?(typeof m=="function"&&(xd(e,n,m,i),g=e.memoizedState),(u=Mr||Ag(e,n,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Md(t,e,n,i,s,r)}function Md(t,e,n,i,r,s){by(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&vg(e,n,!1),lr(t,e,s);i=e.stateNode,RT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=jo(e,t.child,null,s),e.child=jo(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&vg(e,n,!0),e.child}function Ly(t){var e=t.stateNode;e.pendingContext?gg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gg(t,e.context,!1),Tm(t,e.containerInfo)}function Ug(t,e,n,i,r){return Wo(),vm(r),e.flags|=256,ln(t,e,n,i),e.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dy(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(vt,r&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,i,0,null),t=As(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wd(n),e.memoizedState=Td,t):Dm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return CT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vr(a,s):(s=As(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Td,i}return s=t.child,t=s.sibling,i=Vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dm(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nu(t,e,n,i){return i!==null&&vm(i),jo(e,t.child,null,n),t=Dm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Yf(Error(se(422))),nu(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Qc({mode:"visible",children:i.children},r,0,null),s=As(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&jo(e,t.child,null,o),e.child.memoizedState=wd(o),e.memoizedState=Td,s);if(!(e.mode&1))return nu(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Yf(s,i,void 0),nu(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ar(t,r),Ti(i,t,r,-1))}return km(),i=Yf(Error(se(421))),nu(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=HT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,zn=kr(r.nextSibling),Gn=e,_t=!0,xi=null,t!==null&&(Jn[ei++]=Ji,Jn[ei++]=er,Jn[ei++]=Is,Ji=t.id,er=t.overflow,Is=e),e=Dm(e,i.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vd(t.return,e,n)}function qf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Iy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qf(e,!0,n,null,s);break;case"together":qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PT(t,e,n){switch(e.tag){case 3:Ly(e),Wo();break;case 5:sy(e);break;case 1:En(e.type)&&hc(e);break;case 4:Tm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?Dy(t,e,n):(ut(vt,vt.current&1),t=lr(t,e,n),t!==null?t.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Iy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,Py(t,e,n)}return lr(t,e,n)}var Uy,Ad,Ny,Oy;Uy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};Ny=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ss(Oi.current);var s=null;switch(n){case"input":r=qh(t,r),i=qh(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Zh(t,r),i=Zh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cc)}Jh(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(el.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(el.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Oy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ea(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bT(t,e,n){var i=e.pendingProps;switch(gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return En(e.type)&&fc(),Kt(e),null;case 3:return i=e.stateNode,Xo(),pt(Sn),pt(sn),Am(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(eu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xi!==null&&(Ud(xi),xi=null))),Ad(t,e),Kt(e),null;case 5:wm(e);var r=Ss(hl.current);if(n=e.type,t!==null&&e.stateNode!=null)Ny(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Kt(e),null}if(t=Ss(Oi.current),eu(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Di]=e,i[cl]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)ht(Na[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":W_(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":X_(i,s),ht("invalid",i)}Jh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jl(i.textContent,a,t),r=["children",""+a]):el.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":jl(i),j_(i,s,!0);break;case"textarea":jl(i),Y_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Di]=e,t[cl]=i,Uy(t,e,!1,!1),e.stateNode=t;e:{switch(o=ed(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)ht(Na[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":W_(t,i),r=qh(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),ht("invalid",t);break;case"textarea":X_(t,i),r=Zh(t,i),ht("invalid",t);break;default:r=i}Jh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&tl(t,l):typeof l=="number"&&tl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(el.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&nm(t,s,l,o))}switch(n){case"input":jl(t),j_(t,i,!1);break;case"textarea":jl(t),Y_(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Po(t,!!i.multiple,s,!1):i.defaultValue!=null&&Po(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)Oy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Ss(hl.current),Ss(Oi.current),eu(e)){if(i=e.stateNode,n=e.memoizedProps,i[Di]=e,(s=i.nodeValue!==n)&&(t=Gn,t!==null))switch(t.tag){case 3:Jl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Di]=e,e.stateNode=i}return Kt(e),null;case 13:if(pt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&zn!==null&&e.mode&1&&!(e.flags&128))ey(),Wo(),e.flags|=98560,s=!1;else if(s=eu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Di]=e}else Wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else xi!==null&&(Ud(xi),xi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Ft===0&&(Ft=3):km())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Xo(),Ad(t,e),t===null&&ll(e.stateNode.containerInfo),Kt(e),null;case 10:return Sm(e.type._context),Kt(e),null;case 17:return En(e.type)&&fc(),Kt(e),null;case 19:if(pt(vt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ea(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vc(t),o!==null){for(e.flags|=128,Ea(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>qo&&(e.flags|=128,i=!0,Ea(s,!1),e.lanes=4194304)}else{if(!i)if(t=vc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Kt(e),null}else 2*Pt()-s.renderingStartTime>qo&&n!==1073741824&&(e.flags|=128,i=!0,Ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=vt.current,ut(vt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Fm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function LT(t,e){switch(gm(e),e.tag){case 1:return En(e.type)&&fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xo(),pt(Sn),pt(sn),Am(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wm(e),null;case 13:if(pt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(vt),null;case 4:return Xo(),null;case 10:return Sm(e.type._context),null;case 22:case 23:return Fm(),null;case 24:return null;default:return null}}var iu=!1,Jt=!1,DT=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Rd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Og=!1;function IT(t,e){if(cd=ac,t=Hx(),mm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:t,selectionRange:n},ac=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,p=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:gi(e.type,_),p);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return g=Og,Og=!1,g}function ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rd(e,n,s)}r=r.next}while(r!==i)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fy(t){var e=t.alternate;e!==null&&(t.alternate=null,Fy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Di],delete e[cl],delete e[pd],delete e[mT],delete e[_T])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ky(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ky(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cc));else if(i!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var Xt=null,vi=!1;function pr(t,e,n){for(n=n.child;n!==null;)By(t,e,n),n=n.sibling}function By(t,e,n){if(Ni&&typeof Ni.onCommitFiberUnmount=="function")try{Ni.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:Jt||Mo(n,e);case 6:var i=Xt,r=vi;Xt=null,pr(t,e,n),Xt=i,vi=r,Xt!==null&&(vi?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(vi?(t=Xt,n=n.stateNode,t.nodeType===8?Hf(t.parentNode,n):t.nodeType===1&&Hf(t,n),sl(t)):Hf(Xt,n.stateNode));break;case 4:i=Xt,r=vi,Xt=n.stateNode.containerInfo,vi=!0,pr(t,e,n),Xt=i,vi=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rd(n,e,o),r=r.next}while(r!==i)}pr(t,e,n);break;case 1:if(!Jt&&(Mo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,pr(t,e,n),Jt=i):pr(t,e,n);break;default:pr(t,e,n)}}function kg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DT),e.forEach(function(i){var r=VT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function di(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,vi=!1;break e;case 3:Xt=a.stateNode.containerInfo,vi=!0;break e;case 4:Xt=a.stateNode.containerInfo,vi=!0;break e}a=a.return}if(Xt===null)throw Error(se(160));By(s,o,r),Xt=null,vi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zy(e,t),e=e.sibling}function zy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(di(e,t),Ri(t),i&4){try{ja(3,t,t.return),Kc(3,t)}catch(_){Tt(t,t.return,_)}try{ja(5,t,t.return)}catch(_){Tt(t,t.return,_)}}break;case 1:di(e,t),Ri(t),i&512&&n!==null&&Mo(n,n.return);break;case 5:if(di(e,t),Ri(t),i&512&&n!==null&&Mo(n,n.return),t.flags&32){var r=t.stateNode;try{tl(r,"")}catch(_){Tt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lx(r,s),ed(a,o);var u=ed(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?dx(r,f):c==="dangerouslySetInnerHTML"?fx(r,f):c==="children"?tl(r,f):nm(r,c,f,u)}switch(a){case"input":$h(r,s);break;case"textarea":ux(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Po(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Po(r,!!s.multiple,s.defaultValue,!0):Po(r,!!s.multiple,s.multiple?[]:"",!1))}r[cl]=s}catch(_){Tt(t,t.return,_)}}break;case 6:if(di(e,t),Ri(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Tt(t,t.return,_)}}break;case 3:if(di(e,t),Ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(e.containerInfo)}catch(_){Tt(t,t.return,_)}break;case 4:di(e,t),Ri(t);break;case 13:di(e,t),Ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nm=Pt())),i&4&&kg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(u=Jt)||c,di(e,t),Jt=u):di(e,t),Ri(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ge=t,c=t.child;c!==null;){for(f=ge=c;ge!==null;){switch(d=ge,m=d.child,d.tag){case 0:case 11:case 14:case 15:ja(4,d,d.return);break;case 1:Mo(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Tt(i,n,_)}}break;case 5:Mo(d,d.return);break;case 22:if(d.memoizedState!==null){zg(f);continue}}m!==null?(m.return=d,ge=m):zg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hx("display",o))}catch(_){Tt(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Tt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:di(e,t),Ri(t),i&4&&kg(t);break;case 21:break;default:di(e,t),Ri(t)}}function Ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ky(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(tl(r,""),i.flags&=-33);var s=Fg(t);bd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Fg(t);Pd(t,a,o);break;default:throw Error(se(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UT(t,e,n){ge=t,Hy(t)}function Hy(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||iu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=iu;var u=Jt;if(iu=o,(Jt=l)&&!u)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Hg(r):l!==null?(l.return=o,ge=l):Hg(r);for(;s!==null;)ge=s,Hy(s),s=s.sibling;ge=r,iu=a,Jt=u}Bg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Bg(t)}}function Bg(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:gi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&sl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Jt||e.flags&512&&Cd(e)}catch(d){Tt(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function zg(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Hg(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Cd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Cd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var NT=Math.ceil,Sc=hr.ReactCurrentDispatcher,Im=hr.ReactCurrentOwner,si=hr.ReactCurrentBatchConfig,qe=0,Gt=null,It=null,Yt=0,Fn=0,To=es(0),Ft=0,_l=null,Ns=0,Zc=0,Um=0,Xa=null,vn=null,Nm=0,qo=1/0,qi=null,Ec=!1,Ld=null,zr=null,ru=!1,Pr=null,Mc=0,Ya=0,Dd=null,Hu=-1,Vu=0;function cn(){return qe&6?Pt():Hu!==-1?Hu:Hu=Pt()}function Hr(t){return t.mode&1?qe&2&&Yt!==0?Yt&-Yt:vT.transition!==null?(Vu===0&&(Vu=wx()),Vu):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Dx(t.type)),t):1}function Ti(t,e,n,i){if(50<Ya)throw Ya=0,Dd=null,Error(se(185));Ll(t,n,i),(!(qe&2)||t!==Gt)&&(t===Gt&&(!(qe&2)&&(Zc|=n),Ft===4&&Ar(t,Yt)),Mn(t,i),n===1&&qe===0&&!(e.mode&1)&&(qo=Pt()+500,Yc&&ts()))}function Mn(t,e){var n=t.callbackNode;v1(t,e);var i=oc(t,t===Gt?Yt:0);if(i===0)n!==null&&K_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&K_(n),e===1)t.tag===0?gT(Vg.bind(null,t)):Zx(Vg.bind(null,t)),dT(function(){!(qe&6)&&ts()}),n=null;else{switch(Ax(i)){case 1:n=am;break;case 4:n=Mx;break;case 16:n=sc;break;case 536870912:n=Tx;break;default:n=sc}n=$y(n,Vy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vy(t,e){if(Hu=-1,Vu=0,qe&6)throw Error(se(327));var n=t.callbackNode;if(Uo()&&t.callbackNode!==n)return null;var i=oc(t,t===Gt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tc(t,i);else{e=i;var r=qe;qe|=2;var s=Wy();(Gt!==t||Yt!==e)&&(qi=null,qo=Pt()+500,ws(t,e));do try{kT();break}catch(a){Gy(t,a)}while(!0);ym(),Sc.current=s,qe=r,It!==null?e=0:(Gt=null,Yt=0,e=Ft)}if(e!==0){if(e===2&&(r=sd(t),r!==0&&(i=r,e=Id(t,r))),e===1)throw n=_l,ws(t,0),Ar(t,i),Mn(t,Pt()),n;if(e===6)Ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!OT(r)&&(e=Tc(t,i),e===2&&(s=sd(t),s!==0&&(i=s,e=Id(t,s))),e===1))throw n=_l,ws(t,0),Ar(t,i),Mn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:ps(t,vn,qi);break;case 3:if(Ar(t,i),(i&130023424)===i&&(e=Nm+500-Pt(),10<e)){if(oc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dd(ps.bind(null,t,vn,qi),e);break}ps(t,vn,qi);break;case 4:if(Ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NT(i/1960))-i,10<i){t.timeoutHandle=dd(ps.bind(null,t,vn,qi),i);break}ps(t,vn,qi);break;case 5:ps(t,vn,qi);break;default:throw Error(se(329))}}}return Mn(t,Pt()),t.callbackNode===n?Vy.bind(null,t):null}function Id(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(ws(t,e).flags|=256),t=Tc(t,e),t!==2&&(e=vn,vn=n,e!==null&&Ud(e)),t}function Ud(t){vn===null?vn=t:vn.push.apply(vn,t)}function OT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!wi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Um,e&=~Zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mi(e),i=1<<n;t[n]=-1,e&=~i}}function Vg(t){if(qe&6)throw Error(se(327));Uo();var e=oc(t,0);if(!(e&1))return Mn(t,Pt()),null;var n=Tc(t,e);if(t.tag!==0&&n===2){var i=sd(t);i!==0&&(e=i,n=Id(t,i))}if(n===1)throw n=_l,ws(t,0),Ar(t,e),Mn(t,Pt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ps(t,vn,qi),Mn(t,Pt()),null}function Om(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(qo=Pt()+500,Yc&&ts())}}function Os(t){Pr!==null&&Pr.tag===0&&!(qe&6)&&Uo();var e=qe;qe|=1;var n=si.transition,i=nt;try{if(si.transition=null,nt=1,t)return t()}finally{nt=i,si.transition=n,qe=e,!(qe&6)&&ts()}}function Fm(){Fn=To.current,pt(To)}function ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hT(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(gm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fc();break;case 3:Xo(),pt(Sn),pt(sn),Am();break;case 5:wm(i);break;case 4:Xo();break;case 13:pt(vt);break;case 19:pt(vt);break;case 10:Sm(i.type._context);break;case 22:case 23:Fm()}n=n.return}if(Gt=t,It=t=Vr(t.current,null),Yt=Fn=e,Ft=0,_l=null,Um=Zc=Ns=0,vn=Xa=null,ys!==null){for(e=0;e<ys.length;e++)if(n=ys[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ys=null}return t}function Gy(t,e){do{var n=It;try{if(ym(),ku.current=yc,xc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xc=!1}if(Us=0,Ht=Ot=St=null,Wa=!1,dl=0,Im.current=null,n===null||n.return===null){Ft=1,_l=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Pg(o);if(m!==null){m.flags&=-257,bg(m,o,a,s,e),m.mode&1&&Cg(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Cg(s,u,e),km();break e}l=Error(se(426))}}else if(_t&&a.mode&1){var p=Pg(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),bg(p,o,a,s,e),vm(Yo(l,a));break e}}s=l=Yo(l,a),Ft!==4&&(Ft=2),Xa===null?Xa=[s]:Xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Ay(s,l,e);Eg(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zr===null||!zr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ry(s,a,e);Eg(s,y);break e}}s=s.return}while(s!==null)}Xy(n)}catch(A){e=A,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function Wy(){var t=Sc.current;return Sc.current=yc,t===null?yc:t}function km(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Gt===null||!(Ns&268435455)&&!(Zc&268435455)||Ar(Gt,Yt)}function Tc(t,e){var n=qe;qe|=2;var i=Wy();(Gt!==t||Yt!==e)&&(qi=null,ws(t,e));do try{FT();break}catch(r){Gy(t,r)}while(!0);if(ym(),qe=n,Sc.current=i,It!==null)throw Error(se(261));return Gt=null,Yt=0,Ft}function FT(){for(;It!==null;)jy(It)}function kT(){for(;It!==null&&!u1();)jy(It)}function jy(t){var e=qy(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?Xy(t):It=e,Im.current=null}function Xy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LT(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,It=null;return}}else if(n=bT(n,e,Fn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ft===0&&(Ft=5)}function ps(t,e,n){var i=nt,r=si.transition;try{si.transition=null,nt=1,BT(t,e,n,i)}finally{si.transition=r,nt=i}return null}function BT(t,e,n,i){do Uo();while(Pr!==null);if(qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(x1(t,s),t===Gt&&(It=Gt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ru||(ru=!0,$y(sc,function(){return Uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=si.transition,si.transition=null;var o=nt;nt=1;var a=qe;qe|=4,Im.current=null,IT(t,n),zy(n,t),sT(fd),ac=!!cd,fd=cd=null,t.current=n,UT(n),c1(),qe=a,nt=o,si.transition=s}else t.current=n;if(ru&&(ru=!1,Pr=t,Mc=r),s=t.pendingLanes,s===0&&(zr=null),d1(n.stateNode),Mn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ec)throw Ec=!1,t=Ld,Ld=null,t;return Mc&1&&t.tag!==0&&Uo(),s=t.pendingLanes,s&1?t===Dd?Ya++:(Ya=0,Dd=t):Ya=0,ts(),null}function Uo(){if(Pr!==null){var t=Ax(Mc),e=si.transition,n=nt;try{if(si.transition=null,nt=16>t?16:t,Pr===null)var i=!1;else{if(t=Pr,Pr=null,Mc=0,qe&6)throw Error(se(331));var r=qe;for(qe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ge=u;ge!==null;){var c=ge;switch(c.tag){case 0:case 11:case 15:ja(8,c,s)}var f=c.child;if(f!==null)f.return=c,ge=f;else for(;ge!==null;){c=ge;var d=c.sibling,m=c.return;if(Fy(c),c===u){ge=null;break}if(d!==null){d.return=m,ge=d;break}ge=m}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ja(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var v=t.current;for(ge=v;ge!==null;){o=ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ge=x;else e:for(o=v;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kc(9,a)}}catch(A){Tt(a,a.return,A)}if(a===o){ge=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ge=y;break e}ge=a.return}}if(qe=r,ts(),Ni&&typeof Ni.onPostCommitFiberRoot=="function")try{Ni.onPostCommitFiberRoot(Vc,t)}catch{}i=!0}return i}finally{nt=n,si.transition=e}}return!1}function Gg(t,e,n){e=Yo(n,e),e=Ay(t,e,1),t=Br(t,e,1),e=cn(),t!==null&&(Ll(t,1,e),Mn(t,e))}function Tt(t,e,n){if(t.tag===3)Gg(t,t,n);else for(;e!==null;){if(e.tag===3){Gg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zr===null||!zr.has(i))){t=Yo(n,t),t=Ry(e,t,1),e=Br(e,t,1),t=cn(),e!==null&&(Ll(e,1,t),Mn(e,t));break}}e=e.return}}function zT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Yt&n)===n&&(Ft===4||Ft===3&&(Yt&130023424)===Yt&&500>Pt()-Nm?ws(t,0):Um|=n),Mn(t,e)}function Yy(t,e){e===0&&(t.mode&1?(e=ql,ql<<=1,!(ql&130023424)&&(ql=4194304)):e=1);var n=cn();t=ar(t,e),t!==null&&(Ll(t,e,n),Mn(t,n))}function HT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yy(t,n)}function VT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Yy(t,n)}var qy;qy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,PT(t,e,n);yn=!!(t.flags&131072)}else yn=!1,_t&&e.flags&1048576&&Qx(e,pc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zu(t,e),t=e.pendingProps;var r=Go(e,sn.current);Io(e,n),r=Cm(null,e,i,t,r,n);var s=Pm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mm(e),r.updater=$c,e.stateNode=r,r._reactInternals=e,yd(e,i,t,n),e=Md(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&_m(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(zu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=WT(i),t=gi(i,t),r){case 0:e=Ed(null,e,i,t,n);break e;case 1:e=Ig(null,e,i,t,n);break e;case 11:e=Lg(null,e,i,t,n);break e;case 14:e=Dg(null,e,i,gi(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),Ed(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),Ig(t,e,i,r,n);case 3:e:{if(Ly(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ry(t,e),gc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Yo(Error(se(423)),e),e=Ug(t,e,i,n,r);break e}else if(i!==r){r=Yo(Error(se(424)),e),e=Ug(t,e,i,n,r);break e}else for(zn=kr(e.stateNode.containerInfo.firstChild),Gn=e,_t=!0,xi=null,n=ny(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wo(),i===r){e=lr(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return sy(e),t===null&&gd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hd(i,r)?o=null:s!==null&&hd(i,s)&&(e.flags|=32),by(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&gd(e),null;case 13:return Dy(t,e,n);case 4:return Tm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=jo(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),Lg(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(mc,i._currentValue),i._currentValue=o,s!==null)if(wi(s.value,o)){if(s.children===r.children&&!Sn.current){e=lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ir(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Io(e,n),r=li(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=gi(i,e.pendingProps),r=gi(i.type,r),Dg(t,e,i,r,n);case 15:return Cy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),zu(t,e),e.tag=1,En(i)?(t=!0,hc(e)):t=!1,Io(e,n),wy(e,i,r),yd(e,i,r,n),Md(null,e,i,!0,t,n);case 19:return Iy(t,e,n);case 22:return Py(t,e,n)}throw Error(se(156,e.tag))};function $y(t,e){return Ex(t,e)}function GT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,e,n,i){return new GT(t,e,n,i)}function Bm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WT(t){if(typeof t=="function")return Bm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rm)return 11;if(t===sm)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=ti(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Bm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case po:return As(n.children,r,s,e);case im:o=8,r|=8;break;case Wh:return t=ti(12,n,e,r|2),t.elementType=Wh,t.lanes=s,t;case jh:return t=ti(13,n,e,r),t.elementType=jh,t.lanes=s,t;case Xh:return t=ti(19,n,e,r),t.elementType=Xh,t.lanes=s,t;case sx:return Qc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ix:o=10;break e;case rx:o=9;break e;case rm:o=11;break e;case sm:o=14;break e;case Er:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=ti(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function As(t,e,n,i){return t=ti(7,t,i,e),t.lanes=n,t}function Qc(t,e,n,i){return t=ti(22,t,i,e),t.elementType=sx,t.lanes=n,t.stateNode={isHidden:!1},t}function $f(t,e,n){return t=ti(6,t,null,e),t.lanes=n,t}function Kf(t,e,n){return e=ti(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bf(0),this.expirationTimes=bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zm(t,e,n,i,r,s,o,a,l){return t=new jT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ti(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mm(s),t}function XT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ky(t){if(!t)return qr;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(En(n))return Kx(t,n,e)}return e}function Zy(t,e,n,i,r,s,o,a,l){return t=zm(n,i,!0,t,r,s,o,a,l),t.context=Ky(null),n=t.current,i=cn(),r=Hr(n),s=ir(i,r),s.callback=e??null,Br(n,s,r),t.current.lanes=r,Ll(t,r,i),Mn(t,i),t}function Jc(t,e,n,i){var r=e.current,s=cn(),o=Hr(r);return n=Ky(n),e.context===null?e.context=n:e.pendingContext=n,e=ir(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Br(r,e,o),t!==null&&(Ti(t,r,o,s),Fu(t,r,o)),o}function wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hm(t,e){Wg(t,e),(t=t.alternate)&&Wg(t,e)}function YT(){return null}var Qy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vm(t){this._internalRoot=t}ef.prototype.render=Vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Jc(t,e,null,null)};ef.prototype.unmount=Vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Os(function(){Jc(null,t,null,null)}),e[or]=null}};function ef(t){this._internalRoot=t}ef.prototype.unstable_scheduleHydration=function(t){if(t){var e=Px();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&Lx(t)}};function Gm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function qT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=wc(o);s.call(u)}}var o=Zy(e,i,t,0,null,!1,!1,"",jg);return t._reactRootContainer=o,t[or]=o.current,ll(t.nodeType===8?t.parentNode:t),Os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=wc(l);a.call(u)}}var l=zm(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=l,t[or]=l.current,ll(t.nodeType===8?t.parentNode:t),Os(function(){Jc(e,l,n,i)}),l}function nf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=wc(o);a.call(l)}}Jc(e,o,t,r)}else o=qT(n,e,t,r,i);return wc(o)}Rx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ua(e.pendingLanes);n!==0&&(lm(e,n|1),Mn(e,Pt()),!(qe&6)&&(qo=Pt()+500,ts()))}break;case 13:Os(function(){var i=ar(t,1);if(i!==null){var r=cn();Ti(i,t,1,r)}}),Hm(t,1)}};um=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=cn();Ti(e,t,134217728,n)}Hm(t,134217728)}};Cx=function(t){if(t.tag===13){var e=Hr(t),n=ar(t,e);if(n!==null){var i=cn();Ti(n,t,e,i)}Hm(t,e)}};Px=function(){return nt};bx=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};nd=function(t,e,n){switch(e){case"input":if($h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xc(i);if(!r)throw Error(se(90));ax(i),$h(i,r)}}}break;case"textarea":ux(t,n);break;case"select":e=n.value,e!=null&&Po(t,!!n.multiple,e,!1)}};_x=Om;gx=Os;var $T={usingClientEntryPoint:!1,Events:[Il,vo,Xc,px,mx,Om]},Ma={findFiberByHostInstance:xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KT={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yx(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||YT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Vc=su.inject(KT),Ni=su}catch{}}qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;qn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gm(e))throw Error(se(200));return XT(t,e,null,n)};qn.createRoot=function(t,e){if(!Gm(t))throw Error(se(299));var n=!1,i="",r=Qy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zm(t,1,!1,null,null,n,!1,i,r),t[or]=e.current,ll(t.nodeType===8?t.parentNode:t),new Vm(e)};qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=yx(e),t=t===null?null:t.stateNode,t};qn.flushSync=function(t){return Os(t)};qn.hydrate=function(t,e,n){if(!tf(e))throw Error(se(200));return nf(null,t,e,!0,n)};qn.hydrateRoot=function(t,e,n){if(!Gm(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Qy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zy(e,null,t,1,n??null,r,!1,s,o),t[or]=e.current,ll(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ef(e)};qn.render=function(t,e,n){if(!tf(e))throw Error(se(200));return nf(null,t,e,!1,n)};qn.unmountComponentAtNode=function(t){if(!tf(t))throw Error(se(40));return t._reactRootContainer?(Os(function(){nf(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};qn.unstable_batchedUpdates=Om;qn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tf(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return nf(t,e,n,!1,i)};qn.version="18.3.1-next-f1338f8080-20240426";function Jy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jy)}catch(t){console.error(t)}}Jy(),Jv.exports=qn;var ZT=Jv.exports,eS,Xg=ZT;eS=Xg.createRoot,Xg.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gl.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const Yg="popstate";function QT(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Nd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ac(r)}return ew(e,n,null,t)}function Ut(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JT(){return Math.random().toString(36).substr(2,8)}function qg(t,e){return{usr:t.state,key:t.key,idx:e}}function Nd(t,e,n,i){return n===void 0&&(n=null),gl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ua(e):e,{state:n,key:e&&e.key||i||JT()})}function Ac(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ua(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function ew(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=br.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(gl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=br.Pop;let p=c(),h=p==null?null:p-u;u=p,l&&l({action:a,location:_.location,delta:h})}function d(p,h){a=br.Push;let v=Nd(_.location,p,h);u=c()+1;let x=qg(v,u),y=_.createHref(v);try{o.pushState(x,"",y)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(y)}s&&l&&l({action:a,location:_.location,delta:1})}function m(p,h){a=br.Replace;let v=Nd(_.location,p,h);u=c();let x=qg(v,u),y=_.createHref(v);o.replaceState(x,"",y),s&&l&&l({action:a,location:_.location,delta:0})}function g(p){let h=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Ac(p);return v=v.replace(/ $/,"%20"),Ut(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let _={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Yg,f),l=p,()=>{r.removeEventListener(Yg,f),l=null}},createHref(p){return e(r,p)},createURL:g,encodeLocation(p){let h=g(p);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:m,go(p){return o.go(p)}};return _}var $g;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($g||($g={}));function tw(t,e,n){return n===void 0&&(n="/"),nw(t,e,n,!1)}function nw(t,e,n,i){let r=typeof e=="string"?ua(e):e,s=Wm(r.pathname||"/",n);if(s==null)return null;let o=nS(t);iw(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=pw(s);a=hw(o[l],u,i)}return a}function nS(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ut(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Gr([i,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ut(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:cw(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of iS(s.path))r(s,o,l)}),e}function iS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=iS(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function iw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:fw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const rw=/^:[\w-]+$/,sw=3,ow=2,aw=1,lw=10,uw=-2,Kg=t=>t==="*";function cw(t,e){let n=t.split("/"),i=n.length;return n.some(Kg)&&(i+=uw),e&&(i+=ow),n.filter(r=>!Kg(r)).reduce((r,s)=>r+(rw.test(s)?sw:s===""?aw:lw),i)}function fw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function hw(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",f=Zg({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=Zg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Gr([s,f.pathname]),pathnameBase:vw(Gr([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=Gr([s,f.pathnameBase]))}return o}function Zg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=dw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let _=a[f]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const g=a[f];return m&&!g?u[d]=void 0:u[d]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function dw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),tS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function pw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function mw(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ua(t):t;return{pathname:n?n.startsWith("/")?n:_w(n,e):e,search:xw(i),hash:yw(r)}}function _w(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Zf(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rS(t,e){let n=gw(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function sS(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ua(t):(r=gl({},t),Ut(!r.pathname||!r.pathname.includes("?"),Zf("?","pathname","search",r)),Ut(!r.pathname||!r.pathname.includes("#"),Zf("#","pathname","hash",r)),Ut(!r.search||!r.search.includes("#"),Zf("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=mw(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Gr=t=>t.join("/").replace(/\/\/+/g,"/"),vw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Sw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const oS=["post","put","patch","delete"];new Set(oS);const Ew=["get",...oS];new Set(Ew);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vl.apply(this,arguments)}const jm=ie.createContext(null),Mw=ie.createContext(null),Ws=ie.createContext(null),rf=ie.createContext(null),js=ie.createContext({outlet:null,matches:[],isDataRoute:!1}),aS=ie.createContext(null);function Tw(t,e){let{relative:n}=e===void 0?{}:e;Nl()||Ut(!1);let{basename:i,navigator:r}=ie.useContext(Ws),{hash:s,pathname:o,search:a}=uS(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Gr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Nl(){return ie.useContext(rf)!=null}function sf(){return Nl()||Ut(!1),ie.useContext(rf).location}function lS(t){ie.useContext(Ws).static||ie.useLayoutEffect(t)}function ww(){let{isDataRoute:t}=ie.useContext(js);return t?kw():Aw()}function Aw(){Nl()||Ut(!1);let t=ie.useContext(jm),{basename:e,future:n,navigator:i}=ie.useContext(Ws),{matches:r}=ie.useContext(js),{pathname:s}=sf(),o=JSON.stringify(rS(r,n.v7_relativeSplatPath)),a=ie.useRef(!1);return lS(()=>{a.current=!0}),ie.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let f=sS(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Gr([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,o,s,t])}function uS(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ie.useContext(Ws),{matches:r}=ie.useContext(js),{pathname:s}=sf(),o=JSON.stringify(rS(r,i.v7_relativeSplatPath));return ie.useMemo(()=>sS(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Rw(t,e){return Cw(t,e)}function Cw(t,e,n,i){Nl()||Ut(!1);let{navigator:r}=ie.useContext(Ws),{matches:s}=ie.useContext(js),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=sf(),c;if(e){var f;let p=typeof e=="string"?ua(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||Ut(!1),c=p}else c=u;let d=c.pathname||"/",m=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=tw(t,{pathname:m}),_=Iw(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Gr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Gr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&_?ie.createElement(rf.Provider,{value:{location:vl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:br.Pop}},_):_}function Pw(){let t=Fw(),e=Sw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),n?ie.createElement("pre",{style:r},n):null,null)}const bw=ie.createElement(Pw,null);class Lw extends ie.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ie.createElement(js.Provider,{value:this.props.routeContext},ie.createElement(aS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dw(t){let{routeContext:e,match:n,children:i}=t,r=ie.useContext(jm);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ie.createElement(js.Provider,{value:e},i)}function Iw(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||Ut(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:m}=n,g=f.route.loader&&d[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,d)=>{let m,g=!1,_=null,p=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||bw,l&&(u<0&&d===0?(g=!0,p=null):u===d&&(g=!0,p=f.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,d+1)),v=()=>{let x;return m?x=_:g?x=p:f.route.Component?x=ie.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=c,ie.createElement(Dw,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?ie.createElement(Lw,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var cS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cS||{}),Rc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Rc||{});function Uw(t){let e=ie.useContext(jm);return e||Ut(!1),e}function Nw(t){let e=ie.useContext(Mw);return e||Ut(!1),e}function Ow(t){let e=ie.useContext(js);return e||Ut(!1),e}function fS(t){let e=Ow(),n=e.matches[e.matches.length-1];return n.route.id||Ut(!1),n.route.id}function Fw(){var t;let e=ie.useContext(aS),n=Nw(Rc.UseRouteError),i=fS(Rc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function kw(){let{router:t}=Uw(cS.UseNavigateStable),e=fS(Rc.UseNavigateStable),n=ie.useRef(!1);return lS(()=>{n.current=!0}),ie.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,vl({fromRouteId:e},s)))},[t,e])}function Od(t){Ut(!1)}function Bw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=br.Pop,navigator:s,static:o=!1,future:a}=t;Nl()&&Ut(!1);let l=e.replace(/^\/*/,"/"),u=ie.useMemo(()=>({basename:l,navigator:s,static:o,future:vl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=ua(i));let{pathname:c="/",search:f="",hash:d="",state:m=null,key:g="default"}=i,_=ie.useMemo(()=>{let p=Wm(c,l);return p==null?null:{location:{pathname:p,search:f,hash:d,state:m,key:g},navigationType:r}},[l,c,f,d,m,g,r]);return _==null?null:ie.createElement(Ws.Provider,{value:u},ie.createElement(rf.Provider,{children:n,value:_}))}function zw(t){let{children:e,location:n}=t;return Rw(Fd(e),n)}new Promise(()=>{});function Fd(t,e){e===void 0&&(e=[]);let n=[];return ie.Children.forEach(t,(i,r)=>{if(!ie.isValidElement(i))return;let s=[...e,r];if(i.type===ie.Fragment){n.push.apply(n,Fd(i.props.children,s));return}i.type!==Od&&Ut(!1),!i.props.index||!i.props.children||Ut(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Fd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kd(){return kd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},kd.apply(this,arguments)}function Hw(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Vw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Gw(t,e){return t.button===0&&(!e||e==="_self")&&!Vw(t)}const Ww=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],jw="6";try{window.__reactRouterVersion=jw}catch{}const Xw="startTransition",Qg=zM[Xw];function Yw(t){let{basename:e,children:n,future:i,window:r}=t,s=ie.useRef();s.current==null&&(s.current=QT({window:r,v5Compat:!0}));let o=s.current,[a,l]=ie.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=ie.useCallback(f=>{u&&Qg?Qg(()=>l(f)):l(f)},[l,u]);return ie.useLayoutEffect(()=>o.listen(c),[o,c]),ie.createElement(Bw,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const qw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kw=ie.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,d=Hw(e,Ww),{basename:m}=ie.useContext(Ws),g,_=!1;if(typeof u=="string"&&$w.test(u)&&(g=u,qw))try{let x=new URL(window.location.href),y=u.startsWith("//")?new URL(x.protocol+u):new URL(u),A=Wm(y.pathname,m);y.origin===x.origin&&A!=null?u=A+y.search+y.hash:_=!0}catch{}let p=Tw(u,{relative:r}),h=Zw(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:r,unstable_viewTransition:f});function v(x){i&&i(x),x.defaultPrevented||h(x)}return ie.createElement("a",kd({},d,{href:g||p,onClick:_||s?i:v,ref:n,target:l}))});var Jg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Jg||(Jg={}));var e0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(e0||(e0={}));function Zw(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=ww(),u=sf(),c=uS(t,{relative:o});return ie.useCallback(f=>{if(Gw(f,n)){f.preventDefault();let d=i!==void 0?i:Ac(u)===Ac(c);l(t,{replace:d,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,i,r,n,t,s,o,a])}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xm="169",No={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qw=0,t0=1,Jw=2,hS=1,eA=2,Yi=3,$r=0,Tn=1,Qi=2,rr=0,Oo=1,n0=2,i0=3,r0=4,tA=5,gs=100,nA=101,iA=102,rA=103,sA=104,oA=200,aA=201,lA=202,uA=203,Bd=204,zd=205,cA=206,fA=207,hA=208,dA=209,pA=210,mA=211,_A=212,gA=213,vA=214,Hd=0,Vd=1,Gd=2,$o=3,Wd=4,jd=5,Xd=6,Yd=7,Ym=0,xA=1,yA=2,Wr=0,SA=1,EA=2,MA=3,TA=4,wA=5,AA=6,RA=7,dS=300,Ko=301,Zo=302,qd=303,$d=304,of=306,Kd=1e3,Es=1001,Zd=1002,ni=1003,CA=1004,ou=1005,yi=1006,Qf=1007,Lr=1008,ur=1009,pS=1010,mS=1011,xl=1012,qm=1013,Fs=1014,tr=1015,ca=1016,$m=1017,Km=1018,Qo=1020,_S=35902,gS=1021,vS=1022,Ei=1023,xS=1024,yS=1025,Fo=1026,Jo=1027,SS=1028,Zm=1029,ES=1030,Qm=1031,Jm=1033,Wu=33776,ju=33777,Xu=33778,Yu=33779,Qd=35840,Jd=35841,ep=35842,tp=35843,np=36196,ip=37492,rp=37496,sp=37808,op=37809,ap=37810,lp=37811,up=37812,cp=37813,fp=37814,hp=37815,dp=37816,pp=37817,mp=37818,_p=37819,gp=37820,vp=37821,qu=36492,xp=36494,yp=36495,MS=36283,Sp=36284,Ep=36285,Mp=36286,PA=3200,bA=3201,TS=0,LA=1,Rr="",Pi="srgb",ns="srgb-linear",e_="display-p3",af="display-p3-linear",Cc="linear",dt="srgb",Pc="rec709",bc="p3",Ks=7680,s0=519,DA=512,IA=513,UA=514,wS=515,NA=516,OA=517,FA=518,kA=519,o0=35044,a0="300 es",nr=2e3,Lc=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let l0=1234567;const qa=Math.PI/180,yl=180/Math.PI;function fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function t_(t,e){return(t%e+e)%e}function BA(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function zA(t,e,n){return t!==e?(n-t)/(e-t):0}function $a(t,e,n){return(1-n)*t+n*e}function HA(t,e,n,i){return $a(t,e,1-Math.exp(-n*i))}function VA(t,e=1){return e-Math.abs(t_(t,e*2)-e)}function GA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function WA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function jA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function XA(t,e){return t+Math.random()*(e-t)}function YA(t){return t*(.5-Math.random())}function qA(t){t!==void 0&&(l0=t);let e=l0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $A(t){return t*qa}function KA(t){return t*yl}function ZA(t){return(t&t-1)===0&&t!==0}function QA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function JA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eR(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*f,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*f,a*u);break;case"ZXZ":t.set(l*f,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*g,l*m,a*u);break;case"YXY":t.set(l*m,a*c,l*g,a*u);break;case"ZYZ":t.set(l*g,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const tR={DEG2RAD:qa,RAD2DEG:yl,generateUUID:fa,clamp:en,euclideanModulo:t_,mapLinear:BA,inverseLerp:zA,lerp:$a,damp:HA,pingpong:VA,smoothstep:GA,smootherstep:WA,randInt:jA,randFloat:XA,randFloatSpread:YA,seededRandom:qA,degToRad:$A,radToDeg:KA,isPowerOfTwo:ZA,ceilPowerOfTwo:QA,floorPowerOfTwo:JA,setQuaternionFromProperEuler:eR,normalize:on,denormalize:fo};class be{constructor(e=0,n=0){be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],g=i[8],_=r[0],p=r[3],h=r[6],v=r[1],x=r[4],y=r[7],A=r[2],w=r[5],E=r[8];return s[0]=o*_+a*v+l*A,s[3]=o*p+a*x+l*w,s[6]=o*h+a*y+l*E,s[1]=u*_+c*v+f*A,s[4]=u*p+c*x+f*w,s[7]=u*h+c*y+f*E,s[2]=d*_+m*v+g*A,s[5]=d*p+m*x+g*w,s[8]=d*h+m*y+g*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,m=u*s-o*l,g=n*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=m*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Jf.makeScale(e,n)),this}rotate(e){return this.premultiply(Jf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Jf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new Be;function AS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nR(){const t=Sl("canvas");return t.style.display="block",t}const u0={};function $u(t){t in u0||(u0[t]=!0,console.warn(t))}function iR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function rR(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sR(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const c0=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),f0=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[ns]:{transfer:Cc,primaries:Pc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Pi]:{transfer:dt,primaries:Pc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[af]:{transfer:Cc,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(f0),fromReference:t=>t.applyMatrix3(c0)},[e_]:{transfer:dt,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(f0),fromReference:t=>t.applyMatrix3(c0).convertLinearToSRGB()}},oR=new Set([ns,af]),et={enabled:!0,_workingColorSpace:ns,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!oR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ta[e].toReference,r=Ta[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ta[t].primaries},getTransfer:function(t){return t===Rr?Cc:Ta[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ta[e].luminanceCoefficients)}};function ko(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function eh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zs;class aR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zs===void 0&&(Zs=Sl("canvas")),Zs.width=e.width,Zs.height=e.height;const i=Zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ko(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ko(n[i]/255)*255):n[i]=ko(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lR=0;class RS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=fa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(th(r[o].image)):s.push(th(r[o]))}else s=th(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function th(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?aR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uR=0;class fn extends Xs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Es,r=Es,s=yi,o=Lr,a=Ei,l=ur,u=fn.DEFAULT_ANISOTROPY,c=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=fa(),this.name="",this.source=new RS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kd:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kd:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=dS;fn.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,y=(m+1)/2,A=(h+1)/2,w=(c+d)/4,E=(f+_)/4,C=(g+p)/4;return x>y&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=E/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=C/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=E/s,r=C/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(d-c)/v,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cR extends Xs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new RS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends cR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class CS extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fR extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||u!==m||c!==g){let p=1-a;const h=l*d+u*m+c*g+f*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,h*v);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const y=a*v;if(l=l*p+d*y,u=u*p+m*y,c=c*p+g*y,f=f*p+_*y,p===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=A,u*=A,c*=A,f*=A}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*m-u*d,e[n+1]=l*g+c*d+u*f-a*m,e[n+2]=u*g+c*m+a*d-l*f,e[n+3]=c*g-a*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f-d*m*g;break;case"YXZ":this._x=d*c*f+u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f+d*m*g;break;case"ZXY":this._x=d*c*f-u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f-d*m*g;break;case"ZYX":this._x=d*c*f-u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f+d*m*g;break;case"YZX":this._x=d*c*f+u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f-d*m*g;break;case"XZY":this._x=d*c*f-u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(h0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(h0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new F,h0=new ks;class Ol{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),au.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),au.copy(i.boundingBox)),au.applyMatrix4(e.matrixWorld),this.union(au)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),lu.subVectors(this.max,wa),Qs.subVectors(e.a,wa),Js.subVectors(e.b,wa),eo.subVectors(e.c,wa),mr.subVectors(Js,Qs),_r.subVectors(eo,Js),ss.subVectors(Qs,eo);let n=[0,-mr.z,mr.y,0,-_r.z,_r.y,0,-ss.z,ss.y,mr.z,0,-mr.x,_r.z,0,-_r.x,ss.z,0,-ss.x,-mr.y,mr.x,0,-_r.y,_r.x,0,-ss.y,ss.x,0];return!ih(n,Qs,Js,eo,lu)||(n=[1,0,0,0,1,0,0,0,1],!ih(n,Qs,Js,eo,lu))?!1:(uu.crossVectors(mr,_r),n=[uu.x,uu.y,uu.z],ih(n,Qs,Js,eo,lu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new F,new F,new F,new F,new F,new F,new F,new F],pi=new F,au=new Ol,Qs=new F,Js=new F,eo=new F,mr=new F,_r=new F,ss=new F,wa=new F,lu=new F,uu=new F,os=new F;function ih(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){os.fromArray(t,s);const a=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),l=e.dot(os),u=n.dot(os),c=i.dot(os);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const hR=new Ol,Aa=new F,rh=new F;class lf{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const n=Aa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(rh)),this.expandByPoint(Aa.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new F,sh=new F,cu=new F,gr=new F,oh=new F,fu=new F,ah=new F;class uf{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,n),Gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sh.copy(e).add(n).multiplyScalar(.5),cu.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(sh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(cu),a=gr.dot(this.direction),l=-gr.dot(cu),u=gr.lengthSq(),c=Math.abs(1-o*o);let f,d,m,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const _=1/c;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sh).addScaledVector(cu,d),m}intersectSphere(e,n){Gi.subVectors(e.center,this.origin);const i=Gi.dot(this.direction),r=Gi.dot(Gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,n,i,r,s){oh.subVectors(n,e),fu.subVectors(i,e),ah.crossVectors(oh,fu);let o=this.direction.dot(ah),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gr.subVectors(this.origin,e);const l=a*this.direction.dot(fu.crossVectors(gr,fu));if(l<0)return null;const u=a*this.direction.dot(oh.cross(gr));if(u<0||l+u>o)return null;const c=-a*gr.dot(ah);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,u,c,f,d,m,g,_,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,m,g,_,p)}set(e,n,i,r,s,o,a,l,u,c,f,d,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/to.setFromMatrixColumn(e,0).length(),s=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*f,g=a*c,_=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+g*u,n[5]=d-_*u,n[9]=-a*l,n[2]=_-d*u,n[6]=g+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,g=u*c,_=u*f;n[0]=d+_*a,n[4]=g*a-m,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=m*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,g=u*c,_=u*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*c,n[9]=_-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*f,g=a*c,_=a*f;n[0]=l*c,n[4]=g*u-m,n[8]=d*u+_,n[1]=l*f,n[5]=_*u+d,n[9]=m*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=_-d*f,n[8]=g*f+m,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,m=o*u,g=a*l,_=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+_,n[5]=o*c,n[9]=m*f-g,n[2]=g*f-m,n[6]=a*c,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dR,e,pR)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),vr.crossVectors(i,Nn),vr.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),vr.crossVectors(i,Nn)),vr.normalize(),hu.crossVectors(Nn,vr),r[0]=vr.x,r[4]=hu.x,r[8]=Nn.x,r[1]=vr.y,r[5]=hu.y,r[9]=Nn.y,r[2]=vr.z,r[6]=hu.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],v=i[3],x=i[7],y=i[11],A=i[15],w=r[0],E=r[4],C=r[8],D=r[12],S=r[1],T=r[5],z=r[9],k=r[13],Y=r[2],K=r[6],N=r[10],W=r[14],b=r[3],j=r[7],q=r[11],Q=r[15];return s[0]=o*w+a*S+l*Y+u*b,s[4]=o*E+a*T+l*K+u*j,s[8]=o*C+a*z+l*N+u*q,s[12]=o*D+a*k+l*W+u*Q,s[1]=c*w+f*S+d*Y+m*b,s[5]=c*E+f*T+d*K+m*j,s[9]=c*C+f*z+d*N+m*q,s[13]=c*D+f*k+d*W+m*Q,s[2]=g*w+_*S+p*Y+h*b,s[6]=g*E+_*T+p*K+h*j,s[10]=g*C+_*z+p*N+h*q,s[14]=g*D+_*k+p*W+h*Q,s[3]=v*w+x*S+y*Y+A*b,s[7]=v*E+x*T+y*K+A*j,s[11]=v*C+x*z+y*N+A*q,s[15]=v*D+x*k+y*W+A*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*m-i*l*m)+_*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+p*(+n*u*f-n*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],v=f*p*u-_*d*u+_*l*m-a*p*m-f*l*h+a*d*h,x=g*d*u-c*p*u-g*l*m+o*p*m+c*l*h-o*d*h,y=c*_*u-g*f*u+g*a*m-o*_*m-c*a*h+o*f*h,A=g*f*l-c*_*l-g*a*d+o*_*d+c*a*p-o*f*p,w=n*v+i*x+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*h-i*d*h)*E,e[2]=(a*p*s-_*l*s+_*r*u-i*p*u-a*r*h+i*l*h)*E,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*m-i*l*m)*E,e[4]=x*E,e[5]=(c*p*s-g*d*s+g*r*m-n*p*m-c*r*h+n*d*h)*E,e[6]=(g*l*s-o*p*s-g*r*u+n*p*u+o*r*h-n*l*h)*E,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*m+n*l*m)*E,e[8]=y*E,e[9]=(g*f*s-c*_*s-g*i*m+n*_*m+c*i*h-n*f*h)*E,e[10]=(o*_*s-g*a*s+g*i*u-n*_*u-o*i*h+n*a*h)*E,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*m-n*a*m)*E,e[12]=A*E,e[13]=(c*_*r-g*f*r+g*i*d-n*_*d-c*i*p+n*f*p)*E,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*p-n*a*p)*E,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,m=s*c,g=s*f,_=o*c,p=o*f,h=a*f,v=l*u,x=l*c,y=l*f,A=i.x,w=i.y,E=i.z;return r[0]=(1-(_+h))*A,r[1]=(m+y)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(d+h))*w,r[6]=(p+v)*w,r[7]=0,r[8]=(g+x)*E,r[9]=(p-v)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=to.set(r[0],r[1],r[2]).length();const o=to.set(r[4],r[5],r[6]).length(),a=to.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mi.copy(this);const u=1/s,c=1/o,f=1/a;return mi.elements[0]*=u,mi.elements[1]*=u,mi.elements[2]*=u,mi.elements[4]*=c,mi.elements[5]*=c,mi.elements[6]*=c,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,n.setFromRotationMatrix(mi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=nr){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let m,g;if(a===nr)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lc)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=nr){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,m=(i+r)*c;let g,_;if(a===nr)g=(o+s)*f,_=-2*f;else if(a===Lc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const to=new F,mi=new mt,dR=new F(0,0,0),pR=new F(1,1,1),vr=new F,hu=new F,Nn=new F,d0=new mt,p0=new ks;class ki{constructor(e=0,n=0,i=0,r=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-en(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return d0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return p0.setFromEuler(this),this.setFromQuaternion(p0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mR=0;const m0=new F,no=new ks,Wi=new mt,du=new F,Ra=new F,_R=new F,gR=new ks,_0=new F(1,0,0),g0=new F(0,1,0),v0=new F(0,0,1),x0={type:"added"},vR={type:"removed"},io={type:"childadded",child:null},lh={type:"childremoved",child:null};class hn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new F,n=new ki,i=new ks,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Be}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(_0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(v0,e)}translateOnAxis(e,n){return m0.copy(e).applyQuaternion(this.quaternion),this.position.add(m0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(v0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?du.copy(e):du.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Ra,du,this.up):Wi.lookAt(du,Ra,this.up),this.quaternion.setFromRotationMatrix(Wi),r&&(Wi.extractRotation(r.matrixWorld),no.setFromRotationMatrix(Wi),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x0),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vR),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x0),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,_R),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,gR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new F(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new F,ji=new F,uh=new F,Xi=new F,ro=new F,so=new F,y0=new F,ch=new F,fh=new F,hh=new F,dh=new st,ph=new st,mh=new st;class Si{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),_i.subVectors(e,n),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){_i.subVectors(r,n),ji.subVectors(i,n),uh.subVectors(e,n);const o=_i.dot(_i),a=_i.dot(ji),l=_i.dot(uh),u=ji.dot(ji),c=ji.dot(uh),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,i),mh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(dh,s.x),o.addScaledVector(ph,s.y),o.addScaledVector(mh,s.z),o}static isFrontFacing(e,n,i,r){return _i.subVectors(i,n),ji.subVectors(e,n),_i.cross(ji).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),_i.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ro.subVectors(r,i),so.subVectors(s,i),ch.subVectors(e,i);const l=ro.dot(ch),u=so.dot(ch);if(l<=0&&u<=0)return n.copy(i);fh.subVectors(e,r);const c=ro.dot(fh),f=so.dot(fh);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ro,o);hh.subVectors(e,s);const m=ro.dot(hh),g=so.dot(hh);if(g>=0&&m<=g)return n.copy(s);const _=m*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(so,a);const p=c*g-m*f;if(p<=0&&f-c>=0&&m-g>=0)return y0.subVectors(s,r),a=(f-c)/(f-c+(m-g)),n.copy(r).addScaledVector(y0,a);const h=1/(p+_+d);return o=_*h,a=d*h,n.copy(i).addScaledVector(ro,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const PS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},pu={h:0,s:0,l:0};function _h(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=t_(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_h(o,s,e+1/3),this.g=_h(o,s,e),this.b=_h(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pi){const i=PS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}copyLinearToSRGB(e){return this.r=eh(e.r),this.g=eh(e.g),this.b=eh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return et.fromWorkingColorSpace(Qt.copy(this),e),Math.round(en(Qt.r*255,0,255))*65536+Math.round(en(Qt.g*255,0,255))*256+Math.round(en(Qt.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Pi){et.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Pi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(pu);const i=$a(xr.h,pu.h,n),r=$a(xr.s,pu.s,n),s=$a(xr.l,pu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new He;He.NAMES=PS;let xR=0;class ha extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xR++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=Oo,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=zd,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(i.blending=this.blending),this.side!==$r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bd&&(i.blendSrc=this.blendSrc),this.blendDst!==zd&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class i_ extends ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new F,mu=new be;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=o0,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mu.fromBufferAttribute(this,n),mu.applyMatrix3(e),this.setXY(n,mu.x,mu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o0&&(e.usage=this.usage),e}}class bS extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class LS extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ai extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let yR=0;const Zn=new mt,gh=new hn,oo=new F,On=new Ol,Ca=new Ol,zt=new F;class ci extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AS(e)?LS:bS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ca.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(On.min,Ca.min),On.expandByPoint(zt),zt.addVectors(On.max,Ca.max),On.expandByPoint(zt)):(On.expandByPoint(Ca.min),On.expandByPoint(Ca.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)zt.fromBufferAttribute(a,u),l&&(oo.fromBufferAttribute(e,u),zt.add(oo)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new F,l[C]=new F;const u=new F,c=new F,f=new F,d=new be,m=new be,g=new be,_=new F,p=new F;function h(C,D,S){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,D),g.fromBufferAttribute(s,S),c.sub(u),f.sub(u),m.sub(d),g.sub(d);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(T),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(T),a[C].add(_),a[D].add(_),a[S].add(_),l[C].add(p),l[D].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,D=v.length;C<D;++C){const S=v[C],T=S.start,z=S.count;for(let k=T,Y=T+z;k<Y;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new F,y=new F,A=new F,w=new F;function E(C){A.fromBufferAttribute(r,C),w.copy(A);const D=a[C];x.copy(D),x.sub(A.multiplyScalar(A.dot(D))).normalize(),y.crossVectors(w,D);const T=y.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,T)}for(let C=0,D=v.length;C<D;++C){const S=v[C],T=S.start,z=S.count;for(let k=T,Y=T+z;k<Y;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,f=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*c;for(let h=0;h<c;h++)d[g++]=u[m++]}return new oi(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S0=new mt,as=new uf,_u=new lf,E0=new F,gu=new F,vu=new F,xu=new F,vh=new F,yu=new F,M0=new F,Su=new F;class Hn extends hn{constructor(e=new ci,n=new i_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(vh.fromBufferAttribute(f,e),o?yu.addScaledVector(vh,c):yu.addScaledVector(vh.sub(n),c))}n.add(yu)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_u.copy(i.boundingSphere),_u.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(_u.containsPoint(as.origin)===!1&&(as.intersectSphere(_u,E0)===null||as.origin.distanceToSquared(E0)>(e.far-e.near)**2))&&(S0.copy(s).invert(),as.copy(e.ray).applyMatrix4(S0),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,as)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,A=x;y<A;y+=3){const w=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);r=Eu(this,h,e,i,u,c,f,w,E,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);r=Eu(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,A=x;y<A;y+=3){const w=y,E=y+1,C=y+2;r=Eu(this,h,e,i,u,c,f,w,E,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const v=p,x=p+1,y=p+2;r=Eu(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function SR(t,e,n,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$r,a),l===null)return null;Su.copy(a),Su.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Su);return u<n.near||u>n.far?null:{distance:u,point:Su.clone(),object:t}}function Eu(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,gu),t.getVertexPosition(l,vu),t.getVertexPosition(u,xu);const c=SR(t,e,n,i,gu,vu,xu,M0);if(c){const f=new F;Si.getBarycoord(M0,gu,vu,xu,f),r&&(c.uv=Si.getInterpolatedAttribute(r,a,l,u,f,new be)),s&&(c.uv1=Si.getInterpolatedAttribute(s,a,l,u,f,new be)),o&&(c.normal=Si.getInterpolatedAttribute(o,a,l,u,f,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new F,materialIndex:0};Si.getNormal(gu,vu,xu,d.normal),c.face=d,c.barycoord=f}return c}class Fl extends ci{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(u,3)),this.setAttribute("normal",new ai(c,3)),this.setAttribute("uv",new ai(f,2));function g(_,p,h,v,x,y,A,w,E,C,D){const S=y/E,T=A/C,z=y/2,k=A/2,Y=w/2,K=E+1,N=C+1;let W=0,b=0;const j=new F;for(let q=0;q<N;q++){const Q=q*T-k;for(let le=0;le<K;le++){const Ae=le*S-z;j[_]=Ae*v,j[p]=Q*x,j[h]=Y,u.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[h]=w>0?1:-1,c.push(j.x,j.y,j.z),f.push(le/E),f.push(1-q/C),W+=1}}for(let q=0;q<C;q++)for(let Q=0;Q<E;Q++){const le=d+Q+K*q,Ae=d+Q+K*(q+1),B=d+(Q+1)+K*(q+1),te=d+(Q+1)+K*q;l.push(le,Ae,te),l.push(Ae,B,te),b+=6}a.addGroup(m,b,D),m+=b,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=ea(t[n]);for(const r in i)e[r]=i[r]}return e}function ER(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function DS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const IS={clone:ea,merge:an};var MR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MR,this.fragmentShader=TR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=ER(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class US extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=nr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new F,T0=new be,w0=new be;class xn extends US{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,T0,w0),n.subVectors(w0,T0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ao=-90,lo=1;class wR extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(ao,lo,e,n);r.layers=this.layers,this.add(r);const s=new xn(ao,lo,e,n);s.layers=this.layers,this.add(s);const o=new xn(ao,lo,e,n);o.layers=this.layers,this.add(o);const a=new xn(ao,lo,e,n);a.layers=this.layers,this.add(a);const l=new xn(ao,lo,e,n);l.layers=this.layers,this.add(l);const u=new xn(ao,lo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class NS extends fn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ko,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OS extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new NS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fl(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:rr});s.uniforms.tEquirect.value=n;const o=new Hn(r,s),a=n.minFilter;return n.minFilter===Lr&&(n.minFilter=yi),new wR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xh=new F,AR=new F,RR=new Be;class Tr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xh.subVectors(i,n).cross(AR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RR.getNormalMatrix(e),r=this.coplanarPoint(xh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new lf,Mu=new F;class r_{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=nr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,p-m,y-h).normalize(),i[1].setComponents(l+s,d+u,p+m,y+h).normalize(),i[2].setComponents(l+o,d+c,p+g,y+v).normalize(),i[3].setComponents(l-o,d-c,p-g,y-v).normalize(),i[4].setComponents(l-a,d-f,p-_,y-x).normalize(),n===nr)i[5].setComponents(l+a,d+f,p+_,y+x).normalize();else if(n===Lc)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Mu.x=r.normal.x>0?e.max.x:e.min.x,Mu.y=r.normal.y>0?e.max.y:e.min.y,Mu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function FS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function CR(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class cf extends ci{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,m=[],g=[],_=[],p=[];for(let h=0;h<c;h++){const v=h*d-o;for(let x=0;x<u;x++){const y=x*f-s;g.push(y,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),A=v+1+u*(h+1),w=v+1+u*h;m.push(x,y,w),m.push(y,A,w)}this.setIndex(m),this.setAttribute("position",new ai(g,3)),this.setAttribute("normal",new ai(_,3)),this.setAttribute("uv",new ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.width,e.height,e.widthSegments,e.heightSegments)}}var PR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$R=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sC="gl_FragColor = linearToOutputTexel( gl_FragColor );",oC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_C=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$C=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_P=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$P=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:PR,alphahash_pars_fragment:bR,alphamap_fragment:LR,alphamap_pars_fragment:DR,alphatest_fragment:IR,alphatest_pars_fragment:UR,aomap_fragment:NR,aomap_pars_fragment:OR,batching_pars_vertex:FR,batching_vertex:kR,begin_vertex:BR,beginnormal_vertex:zR,bsdfs:HR,iridescence_fragment:VR,bumpmap_pars_fragment:GR,clipping_planes_fragment:WR,clipping_planes_pars_fragment:jR,clipping_planes_pars_vertex:XR,clipping_planes_vertex:YR,color_fragment:qR,color_pars_fragment:$R,color_pars_vertex:KR,color_vertex:ZR,common:QR,cube_uv_reflection_fragment:JR,defaultnormal_vertex:eC,displacementmap_pars_vertex:tC,displacementmap_vertex:nC,emissivemap_fragment:iC,emissivemap_pars_fragment:rC,colorspace_fragment:sC,colorspace_pars_fragment:oC,envmap_fragment:aC,envmap_common_pars_fragment:lC,envmap_pars_fragment:uC,envmap_pars_vertex:cC,envmap_physical_pars_fragment:SC,envmap_vertex:fC,fog_vertex:hC,fog_pars_vertex:dC,fog_fragment:pC,fog_pars_fragment:mC,gradientmap_pars_fragment:_C,lightmap_pars_fragment:gC,lights_lambert_fragment:vC,lights_lambert_pars_fragment:xC,lights_pars_begin:yC,lights_toon_fragment:EC,lights_toon_pars_fragment:MC,lights_phong_fragment:TC,lights_phong_pars_fragment:wC,lights_physical_fragment:AC,lights_physical_pars_fragment:RC,lights_fragment_begin:CC,lights_fragment_maps:PC,lights_fragment_end:bC,logdepthbuf_fragment:LC,logdepthbuf_pars_fragment:DC,logdepthbuf_pars_vertex:IC,logdepthbuf_vertex:UC,map_fragment:NC,map_pars_fragment:OC,map_particle_fragment:FC,map_particle_pars_fragment:kC,metalnessmap_fragment:BC,metalnessmap_pars_fragment:zC,morphinstance_vertex:HC,morphcolor_vertex:VC,morphnormal_vertex:GC,morphtarget_pars_vertex:WC,morphtarget_vertex:jC,normal_fragment_begin:XC,normal_fragment_maps:YC,normal_pars_fragment:qC,normal_pars_vertex:$C,normal_vertex:KC,normalmap_pars_fragment:ZC,clearcoat_normal_fragment_begin:QC,clearcoat_normal_fragment_maps:JC,clearcoat_pars_fragment:eP,iridescence_pars_fragment:tP,opaque_fragment:nP,packing:iP,premultiplied_alpha_fragment:rP,project_vertex:sP,dithering_fragment:oP,dithering_pars_fragment:aP,roughnessmap_fragment:lP,roughnessmap_pars_fragment:uP,shadowmap_pars_fragment:cP,shadowmap_pars_vertex:fP,shadowmap_vertex:hP,shadowmask_pars_fragment:dP,skinbase_vertex:pP,skinning_pars_vertex:mP,skinning_vertex:_P,skinnormal_vertex:gP,specularmap_fragment:vP,specularmap_pars_fragment:xP,tonemapping_fragment:yP,tonemapping_pars_fragment:SP,transmission_fragment:EP,transmission_pars_fragment:MP,uv_pars_fragment:TP,uv_pars_vertex:wP,uv_vertex:AP,worldpos_vertex:RP,background_vert:CP,background_frag:PP,backgroundCube_vert:bP,backgroundCube_frag:LP,cube_vert:DP,cube_frag:IP,depth_vert:UP,depth_frag:NP,distanceRGBA_vert:OP,distanceRGBA_frag:FP,equirect_vert:kP,equirect_frag:BP,linedashed_vert:zP,linedashed_frag:HP,meshbasic_vert:VP,meshbasic_frag:GP,meshlambert_vert:WP,meshlambert_frag:jP,meshmatcap_vert:XP,meshmatcap_frag:YP,meshnormal_vert:qP,meshnormal_frag:$P,meshphong_vert:KP,meshphong_frag:ZP,meshphysical_vert:QP,meshphysical_frag:JP,meshtoon_vert:eb,meshtoon_frag:tb,points_vert:nb,points_frag:ib,shadow_vert:rb,shadow_frag:sb,sprite_vert:ob,sprite_frag:ab},ue={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Li={basic:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:an([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:an([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:an([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:an([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:an([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:an([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:an([ue.common,ue.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:an([ue.lights,ue.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Li.physical={uniforms:an([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Tu={r:0,b:0,g:0},us=new ki,lb=new mt;function ub(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,u,c,f=null,d=0,m=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===of)?(c===void 0&&(c=new Hn(new Fl(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:ea(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),us.copy(x.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lb.makeRotationFromEuler(us)),c.material.toneMapped=et.getTransfer(y.colorSpace)!==dt,(f!==y||d!==y.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Hn(new cf(2,2),new Bi({name:"BackgroundMaterial",uniforms:ea(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=et.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Tu,DS(t)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:_,addToRenderList:p}}function cb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,T,z,k,Y){let K=!1;const N=f(k,z,T);s!==N&&(s=N,u(s.object)),K=m(S,k,z,Y),K&&g(S,k,z,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(S,T,z,k),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,T,z){const k=z.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let K=Y[T.id];K===void 0&&(K={},Y[T.id]=K);let N=K[k];return N===void 0&&(N=d(l()),K[k]=N),N}function d(S){const T=[],z=[],k=[];for(let Y=0;Y<n;Y++)T[Y]=0,z[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:k,object:S,attributes:{},index:null}}function m(S,T,z,k){const Y=s.attributes,K=T.attributes;let N=0;const W=z.getAttributes();for(const b in W)if(W[b].location>=0){const q=Y[b];let Q=K[b];if(Q===void 0&&(b==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),b==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),q===void 0||q.attribute!==Q||Q&&q.data!==Q.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function g(S,T,z,k){const Y={},K=T.attributes;let N=0;const W=z.getAttributes();for(const b in W)if(W[b].location>=0){let q=K[b];q===void 0&&(b==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),b==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const Q={};Q.attribute=q,q&&q.data&&(Q.data=q.data),Y[b]=Q,N++}s.attributes=Y,s.attributesNum=N,s.index=k}function _(){const S=s.newAttributes;for(let T=0,z=S.length;T<z;T++)S[T]=0}function p(S){h(S,0)}function h(S,T){const z=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;z[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),Y[S]!==T&&(t.vertexAttribDivisor(S,T),Y[S]=T)}function v(){const S=s.newAttributes,T=s.enabledAttributes;for(let z=0,k=T.length;z<k;z++)T[z]!==S[z]&&(t.disableVertexAttribArray(z),T[z]=0)}function x(S,T,z,k,Y,K,N){N===!0?t.vertexAttribIPointer(S,T,z,Y,K):t.vertexAttribPointer(S,T,z,k,Y,K)}function y(S,T,z,k){_();const Y=k.attributes,K=z.getAttributes(),N=T.defaultAttributeValues;for(const W in K){const b=K[W];if(b.location>=0){let j=Y[W];if(j===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const q=j.normalized,Q=j.itemSize,le=e.get(j);if(le===void 0)continue;const Ae=le.buffer,B=le.type,te=le.bytesPerElement,fe=B===t.INT||B===t.UNSIGNED_INT||j.gpuType===qm;if(j.isInterleavedBufferAttribute){const he=j.data,Ne=he.stride,Ce=j.offset;if(he.isInstancedInterleavedBuffer){for(let je=0;je<b.locationSize;je++)h(b.location+je,he.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let je=0;je<b.locationSize;je++)p(b.location+je);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let je=0;je<b.locationSize;je++)x(b.location+je,Q/b.locationSize,B,q,Ne*te,(Ce+Q/b.locationSize*je)*te,fe)}else{if(j.isInstancedBufferAttribute){for(let he=0;he<b.locationSize;he++)h(b.location+he,j.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let he=0;he<b.locationSize;he++)p(b.location+he);t.bindBuffer(t.ARRAY_BUFFER,Ae);for(let he=0;he<b.locationSize;he++)x(b.location+he,Q/b.locationSize,B,q,Q*te,Q/b.locationSize*he*te,fe)}}else if(N!==void 0){const q=N[W];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(b.location,q);break;case 3:t.vertexAttrib3fv(b.location,q);break;case 4:t.vertexAttrib4fv(b.location,q);break;default:t.vertexAttrib1fv(b.location,q)}}}}v()}function A(){C();for(const S in i){const T=i[S];for(const z in T){const k=T[z];for(const Y in k)c(k[Y].object),delete k[Y];delete T[z]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const T=i[S.id];for(const z in T){const k=T[z];for(const Y in k)c(k[Y].object),delete k[Y];delete T[z]}delete i[S.id]}function E(S){for(const T in i){const z=i[T];if(z[S.id]===void 0)continue;const k=z[S.id];for(const Y in k)c(k[Y].object),delete k[Y];delete z[S.id]}}function C(){D(),o=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function fb(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];n.update(m,i,1)}function l(u,c,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_];for(let _=0;_<d.length;_++)n.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Ei&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ur&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==tr&&!C)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function db(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Tr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(g,d,x,m);for(let A=0;A!==x;++A)y[A]=n[A];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,y=m;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function pb(t){let e=new WeakMap;function n(o,a){return a===qd?o.mapping=Ko:a===$d&&(o.mapping=Zo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qd||a===$d)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new OS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class kS extends US{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ao=4,A0=[.125,.215,.35,.446,.526,.582],vs=20,yh=new kS,R0=new He;let Sh=null,Eh=0,Mh=0,Th=!1;const ms=(1+Math.sqrt(5))/2,uo=1/ms,C0=[new F(-ms,uo,0),new F(ms,uo,0),new F(-uo,0,ms),new F(uo,0,ms),new F(0,ms,-uo),new F(0,ms,uo),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class P0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Sh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Eh,Mh),this._renderer.xr.enabled=Th,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ko||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:ca,format:Ei,colorSpace:ns,depthBuffer:!1},r=b0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mb(s)),this._blurMaterial=_b(s,e,n)}return r}_compileMaterial(e){const n=new Hn(this._lodPlanes[0],e);this._renderer.compile(n,yh)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(R0),c.toneMapping=Wr,c.autoClear=!1;const m=new i_({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Hn(new Fl,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(R0),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;wu(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ko||e.mapping===Zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=D0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wu(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,yh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=C0[(r-s-1)%C0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Hn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vs-1),_=s/g,p=isFinite(s)?1+Math.floor(c*_):vs;p>vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vs}`);const h=[];let v=0;for(let E=0;E<vs;++E){const C=E/_,D=Math.exp(-C*C/2);h.push(D),E===0?v+=D:E<p&&(v+=2*D)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[r],A=3*y*(r>x-Ao?r-x+Ao:0),w=4*(this._cubeSize-y);wu(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(f,yh)}}function mb(t){const e=[],n=[],i=[];let r=t;const s=t-Ao+1+A0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ao?l=A0[o-t+Ao-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,_=3,p=2,h=1,v=new Float32Array(_*g*m),x=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let w=0;w<m;w++){const E=w%3*2/3-1,C=w>2?0:-1,D=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(D,_*g*w),x.set(d,p*g*w);const S=[w,w,w,w,w,w];y.set(S,h*g*w)}const A=new ci;A.setAttribute("position",new oi(v,_)),A.setAttribute("uv",new oi(x,p)),A.setAttribute("faceIndex",new oi(y,h)),e.push(A),r>Ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function b0(t,e,n){const i=new Kr(t,e,n);return i.texture.mapping=of,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wu(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _b(t,e,n){const i=new Float32Array(vs),r=new F(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:s_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function L0(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:s_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function D0(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:s_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function s_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===qd||l===$d,c=l===Ko||l===Zo;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new P0(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new P0(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function vb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$u("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xb(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],t.ARRAY_BUFFER)}}function u(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,y=v.length;x<y;x+=3){const A=v[x+0],w=v[x+1],E=v[x+2];d.push(A,w,w,E,E,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const A=x+0,w=x+1,E=x+2;d.push(A,w,w,E,E,A)}}else return;const p=new(AS(d)?LS:bS)(d,1);p.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function yb(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function u(d,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,d*o,g),n.update(m,i,g))}function c(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];n.update(p,i,1)}function f(d,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)u(d[h]/o,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,_,0,g);let h=0;for(let v=0;v<g;v++)h+=m[v];for(let v=0;v<_.length;v++)n.update(h,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Sb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Eb(t,e,n){const i=new WeakMap,r=new st;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*w*4*f),C=new CS(E,A,w,f);C.type=tr,C.needsUpdate=!0;const D=y*4;for(let T=0;T<f;T++){const z=h[T],k=v[T],Y=x[T],K=A*w*4*T;for(let N=0;N<z.count;N++){const W=N*D;g===!0&&(r.fromBufferAttribute(z,N),E[K+W+0]=r.x,E[K+W+1]=r.y,E[K+W+2]=r.z,E[K+W+3]=0),_===!0&&(r.fromBufferAttribute(k,N),E[K+W+4]=r.x,E[K+W+5]=r.y,E[K+W+6]=r.z,E[K+W+7]=0),p===!0&&(r.fromBufferAttribute(Y,N),E[K+W+8]=r.x,E[K+W+9]=r.y,E[K+W+10]=r.z,E[K+W+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new be(A,w)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Mb(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class BS extends fn{constructor(e,n,i,r,s,o,a,l,u,c=Fo){if(c!==Fo&&c!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fo&&(i=Fs),i===void 0&&c===Jo&&(i=Qo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zS=new fn,I0=new BS(1,1),HS=new CS,VS=new fR,GS=new NS,U0=[],N0=[],O0=new Float32Array(16),F0=new Float32Array(9),k0=new Float32Array(4);function da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=U0[r];if(s===void 0&&(s=new Float32Array(r),U0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ff(t,e){let n=N0[e];n===void 0&&(n=new Int32Array(e),N0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Tb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function Cb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;k0.set(i),t.uniformMatrix2fv(this.addr,!1,k0),Bt(n,i)}}function Pb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;F0.set(i),t.uniformMatrix3fv(this.addr,!1,F0),Bt(n,i)}}function bb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;O0.set(i),t.uniformMatrix4fv(this.addr,!1,O0),Bt(n,i)}}function Lb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function Ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function Nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function Bb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(I0.compareFunction=wS,s=I0):s=zS,n.setTexture2D(e||s,r)}function zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||VS,r)}function Hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||GS,r)}function Vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||HS,r)}function Gb(t){switch(t){case 5126:return Tb;case 35664:return wb;case 35665:return Ab;case 35666:return Rb;case 35674:return Cb;case 35675:return Pb;case 35676:return bb;case 5124:case 35670:return Lb;case 35667:case 35671:return Db;case 35668:case 35672:return Ib;case 35669:case 35673:return Ub;case 5125:return Nb;case 36294:return Ob;case 36295:return Fb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Vb}}function Wb(t,e){t.uniform1fv(this.addr,e)}function jb(t,e){const n=da(e,this.size,2);t.uniform2fv(this.addr,n)}function Xb(t,e){const n=da(e,this.size,3);t.uniform3fv(this.addr,n)}function Yb(t,e){const n=da(e,this.size,4);t.uniform4fv(this.addr,n)}function qb(t,e){const n=da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $b(t,e){const n=da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Kb(t,e){const n=da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Zb(t,e){t.uniform1iv(this.addr,e)}function Qb(t,e){t.uniform2iv(this.addr,e)}function Jb(t,e){t.uniform3iv(this.addr,e)}function eL(t,e){t.uniform4iv(this.addr,e)}function tL(t,e){t.uniform1uiv(this.addr,e)}function nL(t,e){t.uniform2uiv(this.addr,e)}function iL(t,e){t.uniform3uiv(this.addr,e)}function rL(t,e){t.uniform4uiv(this.addr,e)}function sL(t,e,n){const i=this.cache,r=e.length,s=ff(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||zS,s[o])}function oL(t,e,n){const i=this.cache,r=e.length,s=ff(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||VS,s[o])}function aL(t,e,n){const i=this.cache,r=e.length,s=ff(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||GS,s[o])}function lL(t,e,n){const i=this.cache,r=e.length,s=ff(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||HS,s[o])}function uL(t){switch(t){case 5126:return Wb;case 35664:return jb;case 35665:return Xb;case 35666:return Yb;case 35674:return qb;case 35675:return $b;case 35676:return Kb;case 5124:case 35670:return Zb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return eL;case 5125:return tL;case 36294:return nL;case 36295:return iL;case 36296:return rL;case 35678:case 36198:case 36298:case 36306:case 35682:return sL;case 35679:case 36299:case 36307:return oL;case 35680:case 36300:case 36308:case 36293:return aL;case 36289:case 36303:case 36311:case 36292:return lL}}class cL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Gb(n.type)}}class fL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uL(n.type)}}class hL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function B0(t,e){t.seq.push(e),t.map[e.id]=e}function dL(t,e,n){const i=t.name,r=i.length;for(wh.lastIndex=0;;){const s=wh.exec(i),o=wh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){B0(n,u===void 0?new cL(a,t,e):new fL(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new hL(a),B0(n,f)),n=f}}}class Ku{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);dL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function z0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pL=37297;let mL=0;function _L(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function gL(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===bc&&n===Pc?i="LinearDisplayP3ToLinearSRGB":e===Pc&&n===bc&&(i="LinearSRGBToLinearDisplayP3"),t){case ns:case af:return[i,"LinearTransferOETF"];case Pi:case e_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function H0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_L(t.getShaderSource(e),o)}else return r}function vL(t,e){const n=gL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xL(t,e){let n;switch(e){case SA:n="Linear";break;case EA:n="Reinhard";break;case MA:n="Cineon";break;case TA:n="ACESFilmic";break;case AA:n="AgX";break;case RA:n="Neutral";break;case wA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Au=new F;function yL(){et.getLuminanceCoefficients(Au);const t=Au.x.toFixed(4),e=Au.y.toFixed(4),n=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function EL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ML(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Oa(t){return t!==""}function V0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(t){return t.replace(TL,AL)}const wL=new Map;function AL(t,e){let n=ke[e];if(n===void 0){const i=wL.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tp(n)}const RL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(t){return t.replace(RL,CL)}function CL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function j0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===eA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function bL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ko:case Zo:e="ENVMAP_TYPE_CUBE";break;case of:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zo:e="ENVMAP_MODE_REFRACTION";break}return e}function DL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ym:e="ENVMAP_BLENDING_MULTIPLY";break;case xA:e="ENVMAP_BLENDING_MIX";break;case yA:e="ENVMAP_BLENDING_ADD";break}return e}function IL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function UL(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=PL(n),u=bL(n),c=LL(n),f=DL(n),d=IL(n),m=SL(n),g=EL(s),_=r.createProgram();let p,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Oa).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Oa).join(`
`),h.length>0&&(h+=`
`)):(p=[j0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),h=[j0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wr?"#define TONE_MAPPING":"",n.toneMapping!==Wr?ke.tonemapping_pars_fragment:"",n.toneMapping!==Wr?xL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,vL("linearToOutputTexel",n.outputColorSpace),yL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),o=Tp(o),o=V0(o,n),o=G0(o,n),a=Tp(a),a=V0(a,n),a=G0(a,n),o=W0(o),a=W0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===a0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===a0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+p+o,y=v+h+a,A=z0(r,r.VERTEX_SHADER,x),w=z0(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(T){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(A).trim(),Y=r.getShaderInfoLog(w).trim();let K=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,A,w);else{const W=H0(r,A,"vertex"),b=H0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+W+`
`+b)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||Y==="")&&(N=!1);N&&(T.diagnostics={runnable:K,programLog:z,vertexShader:{log:k,prefix:p},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(A),r.deleteShader(w),C=new Ku(r,_),D=ML(r,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let D;this.getAttributes=function(){return D===void 0&&E(this),D};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,pL)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let NL=0;class OL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FL(e),n.set(e,i)),i}}class FL{constructor(e){this.id=NL++,this.code=e,this.usedTimes=0}}function kL(t,e,n,i,r,s,o){const a=new n_,l=new OL,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return u.add(S),S===0?"uv":`uv${S}`}function h(S,T,z,k,Y){const K=k.fog,N=Y.geometry,W=S.isMeshStandardMaterial?k.environment:null,b=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),j=b&&b.mapping===of?b.image.height:null,q=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,le=Q!==void 0?Q.length:0;let Ae=0;N.morphAttributes.position!==void 0&&(Ae=1),N.morphAttributes.normal!==void 0&&(Ae=2),N.morphAttributes.color!==void 0&&(Ae=3);let B,te,fe,he;if(q){const _n=Li[q];B=_n.vertexShader,te=_n.fragmentShader}else B=S.vertexShader,te=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),he=l.getFragmentShaderID(S);const Ne=t.getRenderTarget(),Ce=Y.isInstancedMesh===!0,je=Y.isBatchedMesh===!0,it=!!S.map,Xe=!!S.matcap,L=!!b,Dn=!!S.aoMap,Ge=!!S.lightMap,$e=!!S.bumpMap,Le=!!S.normalMap,ct=!!S.displacementMap,Ue=!!S.emissiveMap,P=!!S.metalnessMap,M=!!S.roughnessMap,H=S.anisotropy>0,ee=S.clearcoat>0,re=S.dispersion>0,J=S.iridescence>0,Me=S.sheen>0,ce=S.transmission>0,ve=H&&!!S.anisotropyMap,Ke=ee&&!!S.clearcoatMap,oe=ee&&!!S.clearcoatNormalMap,xe=ee&&!!S.clearcoatRoughnessMap,De=J&&!!S.iridescenceMap,Ie=J&&!!S.iridescenceThicknessMap,ye=Me&&!!S.sheenColorMap,We=Me&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,at=!!S.specularColorMap,I=!!S.specularIntensityMap,me=ce&&!!S.transmissionMap,$=ce&&!!S.thicknessMap,ne=!!S.gradientMap,de=!!S.alphaMap,_e=S.alphaTest>0,Ye=!!S.alphaHash,bt=!!S.extensions;let mn=Wr;S.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(mn=t.toneMapping);const Ze={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:B,fragmentShader:te,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:he,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:je,batchingColor:je&&Y._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&Y.instanceColor!==null,instancingMorph:Ce&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:ns,alphaToCoverage:!!S.alphaToCoverage,map:it,matcap:Xe,envMap:L,envMapMode:L&&b.mapping,envMapCubeUVHeight:j,aoMap:Dn,lightMap:Ge,bumpMap:$e,normalMap:Le,displacementMap:m&&ct,emissiveMap:Ue,normalMapObjectSpace:Le&&S.normalMapType===LA,normalMapTangentSpace:Le&&S.normalMapType===TS,metalnessMap:P,roughnessMap:M,anisotropy:H,anisotropyMap:ve,clearcoat:ee,clearcoatMap:Ke,clearcoatNormalMap:oe,clearcoatRoughnessMap:xe,dispersion:re,iridescence:J,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:Me,sheenColorMap:ye,sheenRoughnessMap:We,specularMap:Oe,specularColorMap:at,specularIntensityMap:I,transmission:ce,transmissionMap:me,thicknessMap:$,gradientMap:ne,opaque:S.transparent===!1&&S.blending===Oo&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:_e,alphaHash:Ye,combine:S.combine,mapUv:it&&p(S.map.channel),aoMapUv:Dn&&p(S.aoMap.channel),lightMapUv:Ge&&p(S.lightMap.channel),bumpMapUv:$e&&p(S.bumpMap.channel),normalMapUv:Le&&p(S.normalMap.channel),displacementMapUv:ct&&p(S.displacementMap.channel),emissiveMapUv:Ue&&p(S.emissiveMap.channel),metalnessMapUv:P&&p(S.metalnessMap.channel),roughnessMapUv:M&&p(S.roughnessMap.channel),anisotropyMapUv:ve&&p(S.anisotropyMap.channel),clearcoatMapUv:Ke&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(S.sheenRoughnessMap.channel),specularMapUv:Oe&&p(S.specularMap.channel),specularColorMapUv:at&&p(S.specularColorMap.channel),specularIntensityMapUv:I&&p(S.specularIntensityMap.channel),transmissionMapUv:me&&p(S.transmissionMap.channel),thicknessMapUv:$&&p(S.thicknessMap.channel),alphaMapUv:de&&p(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Le||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(it||de),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:mn,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qi,flipSided:S.side===Tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:bt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&S.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=u.has(1),Ze.vertexUv2s=u.has(2),Ze.vertexUv3s=u.has(3),u.clear(),Ze}function v(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)T.push(z),T.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(x(T,S),y(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function y(S,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){const T=_[S.type];let z;if(T){const k=Li[T];z=IS.clone(k.uniforms)}else z=S.uniforms;return z}function w(S,T){let z;for(let k=0,Y=c.length;k<Y;k++){const K=c[k];if(K.cacheKey===T){z=K,++z.usedTimes;break}}return z===void 0&&(z=new UL(t,T,S,s),c.push(z)),z}function E(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:A,acquireProgram:w,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:D}}function BL(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function zL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function X0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Y0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,g,_,p){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function a(f,d,m,g,_,p){const h=o(f,d,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(f,d,m,g,_,p){const h=o(f,d,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||zL),i.length>1&&i.sort(d||X0),r.length>1&&r.sort(d||X0)}function c(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function HL(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Y0,t.set(i,[o])):r>=s.length?(o=new Y0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function VL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new He};break;case"SpotLight":n={position:new F,direction:new F,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function GL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WL=0;function jL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XL(t){const e=new VL,n=GL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new mt,o=new mt;function a(u){let c=0,f=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,v=0,x=0,y=0,A=0,w=0,E=0;u.sort(jL);for(let D=0,S=u.length;D<S;D++){const T=u[D],z=T.color,k=T.intensity,Y=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=z.r*k,f+=z.g*k,d+=z.b*k;else if(T.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(T.sh.coefficients[N],k);E++}else if(T.isDirectionalLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const W=T.shadow,b=n.get(T);b.shadowIntensity=W.intensity,b.shadowBias=W.bias,b.shadowNormalBias=W.normalBias,b.shadowRadius=W.radius,b.shadowMapSize=W.mapSize,i.directionalShadow[m]=b,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=T.shadow.matrix,v++}i.directional[m]=N,m++}else if(T.isSpotLight){const N=e.get(T);N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(z).multiplyScalar(k),N.distance=Y,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,i.spot[_]=N;const W=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,W.updateMatrices(T),T.castShadow&&w++),i.spotLightMatrix[_]=W.matrix,T.castShadow){const b=n.get(T);b.shadowIntensity=W.intensity,b.shadowBias=W.bias,b.shadowNormalBias=W.normalBias,b.shadowRadius=W.radius,b.shadowMapSize=W.mapSize,i.spotShadow[_]=b,i.spotShadowMap[_]=K,y++}_++}else if(T.isRectAreaLight){const N=e.get(T);N.color.copy(z).multiplyScalar(k),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=N,p++}else if(T.isPointLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),N.distance=T.distance,N.decay=T.decay,T.castShadow){const W=T.shadow,b=n.get(T);b.shadowIntensity=W.intensity,b.shadowBias=W.bias,b.shadowNormalBias=W.normalBias,b.shadowRadius=W.radius,b.shadowMapSize=W.mapSize,b.shadowCameraNear=W.camera.near,b.shadowCameraFar=W.camera.far,i.pointShadow[g]=b,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=N,g++}else if(T.isHemisphereLight){const N=e.get(T);N.skyColor.copy(T.color).multiplyScalar(k),N.groundColor.copy(T.groundColor).multiplyScalar(k),i.hemi[h]=N,h++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==h||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==A||C.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=h,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=A,C.numLightProbes=E,i.version=WL++)}function l(u,c){let f=0,d=0,m=0,g=0,_=0;const p=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(x.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function q0(t){const e=new XL(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function YL(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new q0(t),e.set(r,[a])):s>=o.length?(a=new q0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class qL extends ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $L extends ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QL(t,e,n){let i=new r_;const r=new be,s=new be,o=new st,a=new qL({depthPacking:bA}),l=new $L,u={},c=n.maxTextureSize,f={[$r]:Tn,[Tn]:$r,[Qi]:Qi},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:KL,fragmentShader:ZL}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ci;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Hn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hS;let h=this.type;this.render=function(w,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const D=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),z=t.state;z.setBlending(rr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=h!==Yi&&this.type===Yi,Y=h===Yi&&this.type!==Yi;for(let K=0,N=w.length;K<N;K++){const W=w[K],b=W.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const j=b.getFrameExtents();if(r.multiply(j),s.copy(b.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,b.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,b.mapSize.y=s.y)),b.map===null||k===!0||Y===!0){const Q=this.type!==Yi?{minFilter:ni,magFilter:ni}:{};b.map!==null&&b.map.dispose(),b.map=new Kr(r.x,r.y,Q),b.map.texture.name=W.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const q=b.getViewportCount();for(let Q=0;Q<q;Q++){const le=b.getViewport(Q);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),z.viewport(o),b.updateMatrices(W,Q),i=b.getFrustum(),y(E,C,b.camera,W,this.type)}b.isPointLightShadow!==!0&&this.type===Yi&&v(b,C),b.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(D,S,T)};function v(w,E){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kr(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(E,null,C,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(E,null,C,m,_,null)}function x(w,E,C,D){let S=null;const T=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)S=T;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=S.uuid,k=E.uuid;let Y=u[z];Y===void 0&&(Y={},u[z]=Y);let K=Y[k];K===void 0&&(K=S.clone(),Y[k]=K,E.addEventListener("dispose",A)),S=K}if(S.visible=E.visible,S.wireframe=E.wireframe,D===Yi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=C}return S}function y(w,E,C,D,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const k=e.update(w),Y=w.material;if(Array.isArray(Y)){const K=k.groups;for(let N=0,W=K.length;N<W;N++){const b=K[N],j=Y[b.materialIndex];if(j&&j.visible){const q=x(w,j,D,S);w.onBeforeShadow(t,w,E,C,k,q,b),t.renderBufferDirect(C,null,k,q,w,b),w.onAfterShadow(t,w,E,C,k,q,b)}}}else if(Y.visible){const K=x(w,Y,D,S);w.onBeforeShadow(t,w,E,C,k,K,null),t.renderBufferDirect(C,null,k,K,w,null),w.onAfterShadow(t,w,E,C,k,K,null)}}const z=w.children;for(let k=0,Y=z.length;k<Y;k++)y(z[k],E,C,D,S)}function A(w){w.target.removeEventListener("dispose",A);for(const C in u){const D=u[C],S=w.target.uuid;S in D&&(D[S].dispose(),delete D[S])}}}const JL={[Hd]:Vd,[Gd]:Xd,[Wd]:Yd,[$o]:jd,[Vd]:Hd,[Xd]:Gd,[Yd]:Wd,[jd]:$o};function e2(t){function e(){let I=!1;const me=new st;let $=null;const ne=new st(0,0,0,0);return{setMask:function(de){$!==de&&!I&&(t.colorMask(de,de,de,de),$=de)},setLocked:function(de){I=de},setClear:function(de,_e,Ye,bt,mn){mn===!0&&(de*=bt,_e*=bt,Ye*=bt),me.set(de,_e,Ye,bt),ne.equals(me)===!1&&(t.clearColor(de,_e,Ye,bt),ne.copy(me))},reset:function(){I=!1,$=null,ne.set(-1,0,0,0)}}}function n(){let I=!1,me=!1,$=null,ne=null,de=null;return{setReversed:function(_e){me=_e},setTest:function(_e){_e?fe(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(_e){$!==_e&&!I&&(t.depthMask(_e),$=_e)},setFunc:function(_e){if(me&&(_e=JL[_e]),ne!==_e){switch(_e){case Hd:t.depthFunc(t.NEVER);break;case Vd:t.depthFunc(t.ALWAYS);break;case Gd:t.depthFunc(t.LESS);break;case $o:t.depthFunc(t.LEQUAL);break;case Wd:t.depthFunc(t.EQUAL);break;case jd:t.depthFunc(t.GEQUAL);break;case Xd:t.depthFunc(t.GREATER);break;case Yd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=_e}},setLocked:function(_e){I=_e},setClear:function(_e){de!==_e&&(t.clearDepth(_e),de=_e)},reset:function(){I=!1,$=null,ne=null,de=null}}}function i(){let I=!1,me=null,$=null,ne=null,de=null,_e=null,Ye=null,bt=null,mn=null;return{setTest:function(Ze){I||(Ze?fe(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(Ze){me!==Ze&&!I&&(t.stencilMask(Ze),me=Ze)},setFunc:function(Ze,_n,Hi){($!==Ze||ne!==_n||de!==Hi)&&(t.stencilFunc(Ze,_n,Hi),$=Ze,ne=_n,de=Hi)},setOp:function(Ze,_n,Hi){(_e!==Ze||Ye!==_n||bt!==Hi)&&(t.stencilOp(Ze,_n,Hi),_e=Ze,Ye=_n,bt=Hi)},setLocked:function(Ze){I=Ze},setClear:function(Ze){mn!==Ze&&(t.clearStencil(Ze),mn=Ze)},reset:function(){I=!1,me=null,$=null,ne=null,de=null,_e=null,Ye=null,bt=null,mn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],m=null,g=!1,_=null,p=null,h=null,v=null,x=null,y=null,A=null,w=new He(0,0,0),E=0,C=!1,D=null,S=null,T=null,z=null,k=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,N=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=N>=2);let b=null,j={};const q=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),le=new st().fromArray(q),Ae=new st().fromArray(Q);function B(I,me,$,ne){const de=new Uint8Array(4),_e=t.createTexture();t.bindTexture(I,_e),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<$;Ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(me+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return _e}const te={};te[t.TEXTURE_2D]=B(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=B(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=B(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=B(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc($o),Ge(!1),$e(t0),fe(t.CULL_FACE),L(rr);function fe(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function he(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Ne(I,me){return c[I]!==me?(t.bindFramebuffer(I,me),c[I]=me,I===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Ce(I,me){let $=d,ne=!1;if(I){$=f.get(me),$===void 0&&($=[],f.set(me,$));const de=I.textures;if($.length!==de.length||$[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,Ye=de.length;_e<Ye;_e++)$[_e]=t.COLOR_ATTACHMENT0+_e;$.length=de.length,ne=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ne=!0);ne&&t.drawBuffers($)}function je(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const it={[gs]:t.FUNC_ADD,[nA]:t.FUNC_SUBTRACT,[iA]:t.FUNC_REVERSE_SUBTRACT};it[rA]=t.MIN,it[sA]=t.MAX;const Xe={[oA]:t.ZERO,[aA]:t.ONE,[lA]:t.SRC_COLOR,[Bd]:t.SRC_ALPHA,[pA]:t.SRC_ALPHA_SATURATE,[hA]:t.DST_COLOR,[cA]:t.DST_ALPHA,[uA]:t.ONE_MINUS_SRC_COLOR,[zd]:t.ONE_MINUS_SRC_ALPHA,[dA]:t.ONE_MINUS_DST_COLOR,[fA]:t.ONE_MINUS_DST_ALPHA,[mA]:t.CONSTANT_COLOR,[_A]:t.ONE_MINUS_CONSTANT_COLOR,[gA]:t.CONSTANT_ALPHA,[vA]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,me,$,ne,de,_e,Ye,bt,mn,Ze){if(I===rr){g===!0&&(he(t.BLEND),g=!1);return}if(g===!1&&(fe(t.BLEND),g=!0),I!==tA){if(I!==_||Ze!==C){if((p!==gs||x!==gs)&&(t.blendEquation(t.FUNC_ADD),p=gs,x=gs),Ze)switch(I){case Oo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case n0:t.blendFunc(t.ONE,t.ONE);break;case i0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case r0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Oo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case n0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case i0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case r0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,v=null,y=null,A=null,w.set(0,0,0),E=0,_=I,C=Ze}return}de=de||me,_e=_e||$,Ye=Ye||ne,(me!==p||de!==x)&&(t.blendEquationSeparate(it[me],it[de]),p=me,x=de),($!==h||ne!==v||_e!==y||Ye!==A)&&(t.blendFuncSeparate(Xe[$],Xe[ne],Xe[_e],Xe[Ye]),h=$,v=ne,y=_e,A=Ye),(bt.equals(w)===!1||mn!==E)&&(t.blendColor(bt.r,bt.g,bt.b,mn),w.copy(bt),E=mn),_=I,C=!1}function Dn(I,me){I.side===Qi?he(t.CULL_FACE):fe(t.CULL_FACE);let $=I.side===Tn;me&&($=!$),Ge($),I.blending===Oo&&I.transparent===!1?L(rr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ne=I.stencilWrite;o.setTest(ne),ne&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ct(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){D!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),D=I)}function $e(I){I!==Qw?(fe(t.CULL_FACE),I!==S&&(I===t0?t.cullFace(t.BACK):I===Jw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),S=I}function Le(I){I!==T&&(K&&t.lineWidth(I),T=I)}function ct(I,me,$){I?(fe(t.POLYGON_OFFSET_FILL),(z!==me||k!==$)&&(t.polygonOffset(me,$),z=me,k=$)):he(t.POLYGON_OFFSET_FILL)}function Ue(I){I?fe(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function P(I){I===void 0&&(I=t.TEXTURE0+Y-1),b!==I&&(t.activeTexture(I),b=I)}function M(I,me,$){$===void 0&&(b===null?$=t.TEXTURE0+Y-1:$=b);let ne=j[$];ne===void 0&&(ne={type:void 0,texture:void 0},j[$]=ne),(ne.type!==I||ne.texture!==me)&&(b!==$&&(t.activeTexture($),b=$),t.bindTexture(I,me||te[I]),ne.type=I,ne.texture=me)}function H(){const I=j[b];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){le.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),le.copy(I))}function ye(I){Ae.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ae.copy(I))}function We(I,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let ne=$.get(I);ne===void 0&&(ne=t.getUniformBlockIndex(me,I.name),$.set(I,ne))}function Oe(I,me){const ne=l.get(me).get(I);a.get(me)!==ne&&(t.uniformBlockBinding(me,ne,I.__bindingPointIndex),a.set(me,ne))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},b=null,j={},c={},f=new WeakMap,d=[],m=null,g=!1,_=null,p=null,h=null,v=null,x=null,y=null,A=null,w=new He(0,0,0),E=0,C=!1,D=null,S=null,T=null,z=null,k=null,le.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:he,bindFramebuffer:Ne,drawBuffers:Ce,useProgram:je,setBlending:L,setMaterial:Dn,setFlipSided:Ge,setCullFace:$e,setLineWidth:Le,setPolygonOffset:ct,setScissorTest:Ue,activeTexture:P,bindTexture:M,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:xe,texImage3D:De,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:Ke,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Ie,viewport:ye,reset:at}}function $0(t,e,n,i){const r=t2(i);switch(n){case gS:return t*e;case xS:return t*e;case yS:return t*e*2;case SS:return t*e/r.components*r.byteLength;case Zm:return t*e/r.components*r.byteLength;case ES:return t*e*2/r.components*r.byteLength;case Qm:return t*e*2/r.components*r.byteLength;case vS:return t*e*3/r.components*r.byteLength;case Ei:return t*e*4/r.components*r.byteLength;case Jm:return t*e*4/r.components*r.byteLength;case Wu:case ju:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xu:case Yu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:case tp:return Math.max(t,16)*Math.max(e,8)/4;case Qd:case ep:return Math.max(t,8)*Math.max(e,8)/2;case np:case ip:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qu:case xp:case yp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case MS:case Sp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ep:case Mp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function t2(t){switch(t){case ur:case pS:return{byteLength:1,components:1};case xl:case mS:case ca:return{byteLength:2,components:1};case $m:case Km:return{byteLength:2,components:4};case Fs:case qm:case tr:return{byteLength:4,components:1};case _S:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function n2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new be,c=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return m?new OffscreenCanvas(P,M):Sl("canvas")}function _(P,M,H){let ee=1;const re=Ue(P);if((re.width>H||re.height>H)&&(ee=H/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(ee*re.width),Me=Math.floor(ee*re.height);f===void 0&&(f=g(J,Me));const ce=M?g(J,Me):f;return ce.width=J,ce.height=Me,ce.getContext("2d").drawImage(P,0,0,J,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Me+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==ni&&P.minFilter!==yi}function h(P){t.generateMipmap(P)}function v(P,M,H,ee,re=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=M;if(M===t.RED&&(H===t.FLOAT&&(J=t.R32F),H===t.HALF_FLOAT&&(J=t.R16F),H===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.R8UI),H===t.UNSIGNED_SHORT&&(J=t.R16UI),H===t.UNSIGNED_INT&&(J=t.R32UI),H===t.BYTE&&(J=t.R8I),H===t.SHORT&&(J=t.R16I),H===t.INT&&(J=t.R32I)),M===t.RG&&(H===t.FLOAT&&(J=t.RG32F),H===t.HALF_FLOAT&&(J=t.RG16F),H===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RG8UI),H===t.UNSIGNED_SHORT&&(J=t.RG16UI),H===t.UNSIGNED_INT&&(J=t.RG32UI),H===t.BYTE&&(J=t.RG8I),H===t.SHORT&&(J=t.RG16I),H===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGB8UI),H===t.UNSIGNED_SHORT&&(J=t.RGB16UI),H===t.UNSIGNED_INT&&(J=t.RGB32UI),H===t.BYTE&&(J=t.RGB8I),H===t.SHORT&&(J=t.RGB16I),H===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),H===t.UNSIGNED_INT&&(J=t.RGBA32UI),H===t.BYTE&&(J=t.RGBA8I),H===t.SHORT&&(J=t.RGBA16I),H===t.INT&&(J=t.RGBA32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const Me=re?Cc:et.getTransfer(ee);H===t.FLOAT&&(J=t.RGBA32F),H===t.HALF_FLOAT&&(J=t.RGBA16F),H===t.UNSIGNED_BYTE&&(J=Me===dt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(P,M){let H;return P?M===null||M===Fs||M===Qo?H=t.DEPTH24_STENCIL8:M===tr?H=t.DEPTH32F_STENCIL8:M===xl&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fs||M===Qo?H=t.DEPTH_COMPONENT24:M===tr?H=t.DEPTH_COMPONENT32F:M===xl&&(H=t.DEPTH_COMPONENT16),H}function y(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==ni&&P.minFilter!==yi?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function A(P){const M=P.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&c.delete(M)}function w(P){const M=P.target;M.removeEventListener("dispose",w),D(M)}function E(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,ee=d.get(H);if(ee){const re=ee[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(P),Object.keys(ee).length===0&&d.delete(H)}i.remove(P)}function C(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const H=P.source,ee=d.get(H);delete ee[M.__cacheKey],o.memory.textures--}function D(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let re=0;re<M.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let ee=0,re=H.length;ee<re;ee++){const J=i.get(H[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(H[ee])}i.remove(P)}let S=0;function T(){S=0}function z(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Y(P,M){const H=i.get(P);if(P.isVideoTexture&&Le(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(H,P,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function K(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ae(H,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function N(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ae(H,P,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function W(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){B(H,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const b={[Kd]:t.REPEAT,[Es]:t.CLAMP_TO_EDGE,[Zd]:t.MIRRORED_REPEAT},j={[ni]:t.NEAREST,[CA]:t.NEAREST_MIPMAP_NEAREST,[ou]:t.NEAREST_MIPMAP_LINEAR,[yi]:t.LINEAR,[Qf]:t.LINEAR_MIPMAP_NEAREST,[Lr]:t.LINEAR_MIPMAP_LINEAR},q={[DA]:t.NEVER,[kA]:t.ALWAYS,[IA]:t.LESS,[wS]:t.LEQUAL,[UA]:t.EQUAL,[FA]:t.GEQUAL,[NA]:t.GREATER,[OA]:t.NOTEQUAL};function Q(P,M){if(M.type===tr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yi||M.magFilter===Qf||M.magFilter===ou||M.magFilter===Lr||M.minFilter===yi||M.minFilter===Qf||M.minFilter===ou||M.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,b[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,b[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,b[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,j[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ni||M.minFilter!==ou&&M.minFilter!==Lr||M.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",A));const ee=M.source;let re=d.get(ee);re===void 0&&(re={},d.set(ee,re));const J=k(M);if(J!==P.__cacheKey){re[J]===void 0&&(re[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[J].usedTimes++;const Me=re[P.__cacheKey];Me!==void 0&&(re[P.__cacheKey].usedTimes--,Me.usedTimes===0&&C(M)),P.__cacheKey=J,P.__webglTexture=re[J].texture}return H}function Ae(P,M,H){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const re=le(P,M),J=M.source;n.bindTexture(ee,P.__webglTexture,t.TEXTURE0+H);const Me=i.get(J);if(J.version!==Me.__version||re===!0){n.activeTexture(t.TEXTURE0+H);const ce=et.getPrimaries(et.workingColorSpace),ve=M.colorSpace===Rr?null:et.getPrimaries(M.colorSpace),Ke=M.colorSpace===Rr||ce===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let oe=_(M.image,!1,r.maxTextureSize);oe=ct(M,oe);const xe=s.convert(M.format,M.colorSpace),De=s.convert(M.type);let Ie=v(M.internalFormat,xe,De,M.colorSpace,M.isVideoTexture);Q(ee,M);let ye;const We=M.mipmaps,Oe=M.isVideoTexture!==!0,at=Me.__version===void 0||re===!0,I=J.dataReady,me=y(M,oe);if(M.isDepthTexture)Ie=x(M.format===Jo,M.type),at&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ie,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,xe,De,null));else if(M.isDataTexture)if(We.length>0){Oe&&at&&n.texStorage2D(t.TEXTURE_2D,me,Ie,We[0].width,We[0].height);for(let $=0,ne=We.length;$<ne;$++)ye=We[$],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ye.width,ye.height,xe,De,ye.data):n.texImage2D(t.TEXTURE_2D,$,Ie,ye.width,ye.height,0,xe,De,ye.data);M.generateMipmaps=!1}else Oe?(at&&n.texStorage2D(t.TEXTURE_2D,me,Ie,oe.width,oe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,xe,De,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ie,We[0].width,We[0].height,oe.depth);for(let $=0,ne=We.length;$<ne;$++)if(ye=We[$],M.format!==Ei)if(xe!==null)if(Oe){if(I)if(M.layerUpdates.size>0){const de=$0(ye.width,ye.height,M.format,M.type);for(const _e of M.layerUpdates){const Ye=ye.data.subarray(_e*de/ye.data.BYTES_PER_ELEMENT,(_e+1)*de/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,_e,ye.width,ye.height,1,xe,Ye,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,oe.depth,xe,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ie,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,oe.depth,xe,De,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ie,ye.width,ye.height,oe.depth,0,xe,De,ye.data)}else{Oe&&at&&n.texStorage2D(t.TEXTURE_2D,me,Ie,We[0].width,We[0].height);for(let $=0,ne=We.length;$<ne;$++)ye=We[$],M.format!==Ei?xe!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ye.width,ye.height,xe,De,ye.data):n.texImage2D(t.TEXTURE_2D,$,Ie,ye.width,ye.height,0,xe,De,ye.data)}else if(M.isDataArrayTexture)if(Oe){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ie,oe.width,oe.height,oe.depth),I)if(M.layerUpdates.size>0){const $=$0(oe.width,oe.height,M.format,M.type);for(const ne of M.layerUpdates){const de=oe.data.subarray(ne*$/oe.data.BYTES_PER_ELEMENT,(ne+1)*$/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,xe,De,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(M.isData3DTexture)Oe?(at&&n.texStorage3D(t.TEXTURE_3D,me,Ie,oe.width,oe.height,oe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(M.isFramebufferTexture){if(at)if(Oe)n.texStorage2D(t.TEXTURE_2D,me,Ie,oe.width,oe.height);else{let $=oe.width,ne=oe.height;for(let de=0;de<me;de++)n.texImage2D(t.TEXTURE_2D,de,Ie,$,ne,0,xe,De,null),$>>=1,ne>>=1}}else if(We.length>0){if(Oe&&at){const $=Ue(We[0]);n.texStorage2D(t.TEXTURE_2D,me,Ie,$.width,$.height)}for(let $=0,ne=We.length;$<ne;$++)ye=We[$],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,xe,De,ye):n.texImage2D(t.TEXTURE_2D,$,Ie,xe,De,ye);M.generateMipmaps=!1}else if(Oe){if(at){const $=Ue(oe);n.texStorage2D(t.TEXTURE_2D,me,Ie,$.width,$.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ie,xe,De,oe);p(M)&&h(ee),Me.__version=J.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function B(P,M,H){if(M.image.length!==6)return;const ee=le(P,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const J=i.get(re);if(re.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const Me=et.getPrimaries(et.workingColorSpace),ce=M.colorSpace===Rr?null:et.getPrimaries(M.colorSpace),ve=M.colorSpace===Rr||Me===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!Ke&&!oe?xe[ne]=_(M.image[ne],!0,r.maxCubemapSize):xe[ne]=oe?M.image[ne].image:M.image[ne],xe[ne]=ct(M,xe[ne]);const De=xe[0],Ie=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),We=v(M.internalFormat,Ie,ye,M.colorSpace),Oe=M.isVideoTexture!==!0,at=J.__version===void 0||ee===!0,I=re.dataReady;let me=y(M,De);Q(t.TEXTURE_CUBE_MAP,M);let $;if(Ke){Oe&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,We,De.width,De.height);for(let ne=0;ne<6;ne++){$=xe[ne].mipmaps;for(let de=0;de<$.length;de++){const _e=$[de];M.format!==Ei?Ie!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,_e.width,_e.height,Ie,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,We,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,_e.width,_e.height,Ie,ye,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,We,_e.width,_e.height,0,Ie,ye,_e.data)}}}else{if($=M.mipmaps,Oe&&at){$.length>0&&me++;const ne=Ue(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,We,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,Ie,ye,xe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,xe[ne].width,xe[ne].height,0,Ie,ye,xe[ne].data);for(let de=0;de<$.length;de++){const Ye=$[de].image[ne].image;Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Ye.width,Ye.height,Ie,ye,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,We,Ye.width,Ye.height,0,Ie,ye,Ye.data)}}else{Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,ye,xe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,Ie,ye,xe[ne]);for(let de=0;de<$.length;de++){const _e=$[de];Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Ie,ye,_e.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,We,Ie,ye,_e.image[ne])}}}p(M)&&h(t.TEXTURE_CUBE_MAP),J.__version=re.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function te(P,M,H,ee,re,J){const Me=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),ve=v(H.internalFormat,Me,ce,H.colorSpace);if(!i.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>J),xe=Math.max(1,M.height>>J);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,J,ve,oe,xe,M.depth,0,Me,ce,null):n.texImage2D(re,J,ve,oe,xe,0,Me,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,i.get(H).__webglTexture,0,Ge(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,i.get(H).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(P,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const ee=M.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,J=x(M.stencilBuffer,re),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Ge(M);$e(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,J,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,P)}else{const ee=M.textures;for(let re=0;re<ee.length;re++){const J=ee[re],Me=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),ve=v(J.internalFormat,Me,ce,J.colorSpace),Ke=Ge(M);H&&$e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,ve,M.width,M.height):$e(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,re=Ge(M);if(M.depthTexture.format===Fo)$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Jo)$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=ee}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,P)}else if(H){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),fe(M.__webglDepthbuffer[ee],P,!1);else{const re=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),fe(M.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(P,M,H){const ee=i.get(P);M!==void 0&&te(ee.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ne(P)}function je(P){const M=P.texture,H=i.get(P),ee=i.get(M);P.addEventListener("dispose",w);const re=P.textures,J=P.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let ve=0;ve<M.mipmaps.length;ve++)H.__webglFramebuffer[ce][ve]=t.createFramebuffer()}else H.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)H.__webglFramebuffer[ce]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ce=0,ve=re.length;ce<ve;ce++){const Ke=i.get(re[ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&$e(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const ve=re[ce];H.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ce]);const Ke=s.convert(ve.format,ve.colorSpace),oe=s.convert(ve.type),xe=v(ve.internalFormat,Ke,oe,ve.colorSpace,P.isXRRenderTarget===!0),De=Ge(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,H.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Q(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)te(H.__webglFramebuffer[ce][ve],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else te(H.__webglFramebuffer[ce],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ce=0,ve=re.length;ce<ve;ce++){const Ke=re[ce],oe=i.get(Ke);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),Q(t.TEXTURE_2D,Ke),te(H.__webglFramebuffer,P,Ke,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),p(Ke)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ee.__webglTexture),Q(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)te(H.__webglFramebuffer[ve],P,M,t.COLOR_ATTACHMENT0,ce,ve);else te(H.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,ce,0);p(M)&&h(ce),n.unbindTexture()}P.depthBuffer&&Ne(P)}function it(P){const M=P.textures;for(let H=0,ee=M.length;H<ee;H++){const re=M[H];if(p(re)){const J=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(re).__webglTexture;n.bindTexture(J,Me),h(J),n.unbindTexture()}}}const Xe=[],L=[];function Dn(P){if(P.samples>0){if($e(P)===!1){const M=P.textures,H=P.width,ee=P.height;let re=t.COLOR_BUFFER_BIT;const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(P),ce=M.length>1;if(ce)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Ke=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,H,ee,0,0,H,ee,re,t.NEAREST),l===!0&&(Xe.length=0,L.length=0,Xe.push(t.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Xe.push(J),L.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Ke=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ge(P){return Math.min(r.maxSamples,P.samples)}function $e(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(P){const M=o.render.frame;c.get(P)!==M&&(c.set(P,M),P.update())}function ct(P,M){const H=P.colorSpace,ee=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==ns&&H!==Rr&&(et.getTransfer(H)===dt?(ee!==Ei||re!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=T,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=W,this.rebindTextures=Ce,this.setupRenderTarget=je,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=$e}function i2(t,e){function n(i,r=Rr){let s;const o=et.getTransfer(r);if(i===ur)return t.UNSIGNED_BYTE;if(i===$m)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Km)return t.UNSIGNED_SHORT_5_5_5_1;if(i===_S)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===pS)return t.BYTE;if(i===mS)return t.SHORT;if(i===xl)return t.UNSIGNED_SHORT;if(i===qm)return t.INT;if(i===Fs)return t.UNSIGNED_INT;if(i===tr)return t.FLOAT;if(i===ca)return t.HALF_FLOAT;if(i===gS)return t.ALPHA;if(i===vS)return t.RGB;if(i===Ei)return t.RGBA;if(i===xS)return t.LUMINANCE;if(i===yS)return t.LUMINANCE_ALPHA;if(i===Fo)return t.DEPTH_COMPONENT;if(i===Jo)return t.DEPTH_STENCIL;if(i===SS)return t.RED;if(i===Zm)return t.RED_INTEGER;if(i===ES)return t.RG;if(i===Qm)return t.RG_INTEGER;if(i===Jm)return t.RGBA_INTEGER;if(i===Wu||i===ju||i===Xu||i===Yu)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ju)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ju)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qd||i===Jd||i===ep||i===tp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===np||i===ip||i===rp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===np||i===ip)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sp||i===op||i===ap||i===lp||i===up||i===cp||i===fp||i===hp||i===dp||i===pp||i===mp||i===_p||i===gp||i===vp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===op)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ap)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===up)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_p)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qu||i===xp||i===yp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qu)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===MS||i===Sp||i===Ep||i===Mp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ep)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class r2 extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ru extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s2={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),h=this._getHandJoint(u,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ru;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const o2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new fn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Bi({vertexShader:o2,fragmentShader:a2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hn(new cf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u2 extends Xs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,m=null,g=null;const _=new l2,p=n.getContextAttributes();let h=null,v=null;const x=[],y=[],A=new be;let w=null;const E=new xn;E.layers.enable(1),E.viewport=new st;const C=new xn;C.layers.enable(2),C.viewport=new st;const D=[E,C],S=new r2;S.layers.enable(1),S.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let te=x[B];return te===void 0&&(te=new Ah,x[B]=te),te.getTargetRaySpace()},this.getControllerGrip=function(B){let te=x[B];return te===void 0&&(te=new Ah,x[B]=te),te.getGripSpace()},this.getHand=function(B){let te=x[B];return te===void 0&&(te=new Ah,x[B]=te),te.getHandSpace()};function k(B){const te=y.indexOf(B.inputSource);if(te===-1)return;const fe=x[te];fe!==void 0&&(fe.update(B.inputSource,B.frame,u||o),fe.dispatchEvent({type:B.type,data:B.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let B=0;B<x.length;B++){const te=y[B];te!==null&&(y[B]=null,x[B].disconnect(te))}T=null,z=null,_.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,v=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Kr(m.framebufferWidth,m.framebufferHeight,{format:Ei,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,fe=null,he=null;p.depth&&(he=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?Jo:Fo,fe=p.stencil?Qo:Fs);const Ne={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Kr(d.textureWidth,d.textureHeight,{format:Ei,type:ur,depthTexture:new BS(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(B){for(let te=0;te<B.removed.length;te++){const fe=B.removed[te],he=y.indexOf(fe);he>=0&&(y[he]=null,x[he].disconnect(fe))}for(let te=0;te<B.added.length;te++){const fe=B.added[te];let he=y.indexOf(fe);if(he===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=y.length){y.push(fe),he=Ce;break}else if(y[Ce]===null){y[Ce]=fe,he=Ce;break}if(he===-1)break}const Ne=x[he];Ne&&Ne.connect(fe)}}const N=new F,W=new F;function b(B,te,fe){N.setFromMatrixPosition(te.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);const he=N.distanceTo(W),Ne=te.projectionMatrix.elements,Ce=fe.projectionMatrix.elements,je=Ne[14]/(Ne[10]-1),it=Ne[14]/(Ne[10]+1),Xe=(Ne[9]+1)/Ne[5],L=(Ne[9]-1)/Ne[5],Dn=(Ne[8]-1)/Ne[0],Ge=(Ce[8]+1)/Ce[0],$e=je*Dn,Le=je*Ge,ct=he/(-Dn+Ge),Ue=ct*-Dn;if(te.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ue),B.translateZ(ct),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Ne[10]===-1)B.projectionMatrix.copy(te.projectionMatrix),B.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const P=je+ct,M=it+ct,H=$e-Ue,ee=Le+(he-Ue),re=Xe*it/M*P,J=L*it/M*P;B.projectionMatrix.makePerspective(H,ee,re,J,P,M),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function j(B,te){te===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(te.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let te=B.near,fe=B.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),S.near=C.near=E.near=te,S.far=C.far=E.far=fe,(T!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,z=S.far);const he=B.parent,Ne=S.cameras;j(S,he);for(let Ce=0;Ce<Ne.length;Ce++)j(Ne[Ce],he);Ne.length===2?b(S,E,C):S.projectionMatrix.copy(E.projectionMatrix),q(B,S,he)};function q(B,te,fe){fe===null?B.matrix.copy(te.matrixWorld):(B.matrix.copy(fe.matrixWorld),B.matrix.invert(),B.matrix.multiply(te.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(te.projectionMatrix),B.projectionMatrixInverse.copy(te.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=yl*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Q=null;function le(B,te){if(c=te.getViewerPose(u||o),g=te,c!==null){const fe=c.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let he=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Ce=0;Ce<fe.length;Ce++){const je=fe[Ce];let it=null;if(m!==null)it=m.getViewport(je);else{const L=f.getViewSubImage(d,je);it=L.viewport,Ce===0&&(e.setRenderTargetTextures(v,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let Xe=D[Ce];Xe===void 0&&(Xe=new xn,Xe.layers.enable(Ce),Xe.viewport=new st,D[Ce]=Xe),Xe.matrix.fromArray(je.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(je.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(it.x,it.y,it.width,it.height),Ce===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(Xe)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ce=f.getDepthInformation(fe[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let fe=0;fe<x.length;fe++){const he=y[fe],Ne=x[fe];he!==null&&Ne!==void 0&&Ne.update(he,te,u||o)}Q&&Q(B,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ae=new FS;Ae.setAnimationLoop(le),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}const cs=new ki,c2=new mt;function f2(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,DS(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),c(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,v,x):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Tn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Tn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,y=v.envMapRotation;x&&(p.envMap.value=x,cs.copy(y),cs.x*=-1,cs.y*=-1,cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),p.envMapRotation.value.setFromMatrix4(c2.makeRotationFromEuler(cs)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,v,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*v,p.scale.value=x*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,v){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const v=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",p));const A=x.program;i.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const y=t.createBuffer(),A=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],y=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let D=0,S=C.length;D<S;D++){const T=C[D];if(m(T,w,D,A)===!0){const z=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let Y=0;for(let K=0;K<k.length;K++){const N=k[K],W=_(N);typeof N=="number"||typeof N=="boolean"?(T.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,z+Y,T.__data)):N.isMatrix3?(T.__data[0]=N.elements[0],T.__data[1]=N.elements[1],T.__data[2]=N.elements[2],T.__data[3]=0,T.__data[4]=N.elements[3],T.__data[5]=N.elements[4],T.__data[6]=N.elements[5],T.__data[7]=0,T.__data[8]=N.elements[6],T.__data[9]=N.elements[7],T.__data[10]=N.elements[8],T.__data[11]=0):(N.toArray(T.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,y,A){const w=v.value,E=x+"_"+y;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const C=A[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const A=16;for(let E=0,C=x.length;E<C;E++){const D=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,T=D.length;S<T;S++){const z=D[S],k=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,K=k.length;Y<K;Y++){const N=k[Y],W=_(N),b=y%A,j=b%W.boundary,q=b+j;y+=j,q!==0&&A-q<W.storage&&(y+=A-q),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=W.storage}}}const w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class WS{constructor(e={}){const{canvas:n=nR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pi,this.toneMapping=Wr,this.toneMappingExposure=1;const x=this;let y=!1,A=0,w=0,E=null,C=-1,D=null;const S=new st,T=new st;let z=null;const k=new He(0);let Y=0,K=n.width,N=n.height,W=1,b=null,j=null;const q=new st(0,0,K,N),Q=new st(0,0,K,N);let le=!1;const Ae=new r_;let B=!1,te=!1;const fe=new mt,he=new mt,Ne=new F,Ce=new st,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Xe(){return E===null?W:1}let L=i;function Dn(R,U){return n.getContext(R,U)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xm}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",_e,!1),L===null){const U="webgl2";if(L=Dn(U,R),L===null)throw Dn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ge,$e,Le,ct,Ue,P,M,H,ee,re,J,Me,ce,ve,Ke,oe,xe,De,Ie,ye,We,Oe,at,I;function me(){Ge=new vb(L),Ge.init(),Oe=new i2(L,Ge),$e=new hb(L,Ge,e,Oe),Le=new e2(L),$e.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),ct=new Sb(L),Ue=new BL,P=new n2(L,Ge,Le,Ue,$e,Oe,ct),M=new pb(x),H=new gb(x),ee=new CR(L),at=new cb(L,ee),re=new xb(L,ee,ct,at),J=new Mb(L,re,ee,ct),Ie=new Eb(L,$e,P),oe=new db(Ue),Me=new kL(x,M,H,Ge,$e,at,oe),ce=new f2(x,Ue),ve=new HL,Ke=new YL(Ge),De=new ub(x,M,H,Le,J,d,l),xe=new QL(x,J,$e),I=new h2(L,ct,$e,Le),ye=new fb(L,Ge,ct),We=new yb(L,Ge,ct),ct.programs=Me.programs,x.capabilities=$e,x.extensions=Ge,x.properties=Ue,x.renderLists=ve,x.shadowMap=xe,x.state=Le,x.info=ct}me();const $=new u2(x,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=Ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(K,N,!1))},this.getSize=function(R){return R.set(K,N)},this.setSize=function(R,U,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,N=U,n.width=Math.floor(R*W),n.height=Math.floor(U*W),V===!0&&(n.style.width=R+"px",n.style.height=U+"px"),this.setViewport(0,0,R,U)},this.getDrawingBufferSize=function(R){return R.set(K*W,N*W).floor()},this.setDrawingBufferSize=function(R,U,V){K=R,N=U,W=V,n.width=Math.floor(R*V),n.height=Math.floor(U*V),this.setViewport(0,0,R,U)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,U,V,G){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,U,V,G),Le.viewport(S.copy(q).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,U,V,G){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,U,V,G),Le.scissor(T.copy(Q).multiplyScalar(W).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){Le.setScissorTest(le=R)},this.setOpaqueSort=function(R){b=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(R=!0,U=!0,V=!0){let G=0;if(R){let O=!1;if(E!==null){const ae=E.texture.format;O=ae===Jm||ae===Qm||ae===Zm}if(O){const ae=E.texture.type,pe=ae===ur||ae===Fs||ae===xl||ae===Qo||ae===$m||ae===Km,Se=De.getClearColor(),Ee=De.getClearAlpha(),Re=Se.r,Pe=Se.g,Te=Se.b;pe?(m[0]=Re,m[1]=Pe,m[2]=Te,m[3]=Ee,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Re,g[1]=Pe,g[2]=Te,g[3]=Ee,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),ve.dispose(),Ke.dispose(),Ue.dispose(),M.dispose(),H.dispose(),J.dispose(),at.dispose(),I.dispose(),Me.dispose(),$.dispose(),$.removeEventListener("sessionstart",b_),$.removeEventListener("sessionend",L_),rs.stop()};function ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ct.autoReset,U=xe.enabled,V=xe.autoUpdate,G=xe.needsUpdate,O=xe.type;me(),ct.autoReset=R,xe.enabled=U,xe.autoUpdate=V,xe.needsUpdate=G,xe.type=O}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ye(R){const U=R.target;U.removeEventListener("dispose",Ye),bt(U)}function bt(R){mn(R),Ue.remove(R)}function mn(R){const U=Ue.get(R).programs;U!==void 0&&(U.forEach(function(V){Me.releaseProgram(V)}),R.isShaderMaterial&&Me.releaseShaderCache(R))}this.renderBufferDirect=function(R,U,V,G,O,ae){U===null&&(U=je);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Se=vM(R,U,V,G,O);Le.setMaterial(G,pe);let Ee=V.index,Re=1;if(G.wireframe===!0){if(Ee=re.getWireframeAttribute(V),Ee===void 0)return;Re=2}const Pe=V.drawRange,Te=V.attributes.position;let tt=Pe.start*Re,ft=(Pe.start+Pe.count)*Re;ae!==null&&(tt=Math.max(tt,ae.start*Re),ft=Math.min(ft,(ae.start+ae.count)*Re)),Ee!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Ee.count)):Te!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Te.count));const Mt=ft-tt;if(Mt<0||Mt===1/0)return;at.setup(O,G,Se,V,Ee);let In,Qe=ye;if(Ee!==null&&(In=ee.get(Ee),Qe=We,Qe.setIndex(In)),O.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*Xe()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(O.isLine){let we=G.linewidth;we===void 0&&(we=1),Le.setLineWidth(we*Xe()),O.isLineSegments?Qe.setMode(L.LINES):O.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else O.isPoints?Qe.setMode(L.POINTS):O.isSprite&&Qe.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const we=O._multiDrawStarts,jt=O._multiDrawCounts,Je=O._multiDrawCount,hi=Ee?ee.get(Ee).bytesPerElement:1,qs=Ue.get(G).currentProgram.getUniforms();for(let Un=0;Un<Je;Un++)qs.setValue(L,"_gl_DrawID",Un),Qe.render(we[Un]/hi,jt[Un])}else if(O.isInstancedMesh)Qe.renderInstances(tt,Mt,O.count);else if(V.isInstancedBufferGeometry){const we=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,jt=Math.min(V.instanceCount,we);Qe.renderInstances(tt,Mt,jt)}else Qe.render(tt,Mt)};function Ze(R,U,V){R.transparent===!0&&R.side===Qi&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,Vl(R,U,V),R.side=$r,R.needsUpdate=!0,Vl(R,U,V),R.side=Qi):Vl(R,U,V)}this.compile=function(R,U,V=null){V===null&&(V=R),p=Ke.get(V),p.init(U),v.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),R!==V&&R.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return R.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ae=O.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Se=ae[pe];Ze(Se,V,O),G.add(Se)}else Ze(ae,V,O),G.add(ae)}),v.pop(),p=null,G},this.compileAsync=function(R,U,V=null){const G=this.compile(R,U,V);return new Promise(O=>{function ae(){if(G.forEach(function(pe){Ue.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){O(R);return}setTimeout(ae,10)}Ge.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let _n=null;function Hi(R){_n&&_n(R)}function b_(){rs.stop()}function L_(){rs.start()}const rs=new FS;rs.setAnimationLoop(Hi),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(R){_n=R,$.setAnimationLoop(R),R===null?rs.stop():rs.start()},$.addEventListener("sessionstart",b_),$.addEventListener("sessionend",L_),this.render=function(R,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,U,E),p=Ke.get(R,v.length),p.init(U),v.push(p),he.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ae.setFromProjectionMatrix(he),te=this.localClippingEnabled,B=oe.init(this.clippingPlanes,te),_=ve.get(R,h.length),_.init(),h.push(_),$.enabled===!0&&$.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&Sf(ae,U,-1/0,x.sortObjects)}Sf(R,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(b,j),it=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,it&&De.addToRenderList(_,R),this.info.render.frame++,B===!0&&oe.beginShadows();const V=p.state.shadowsArray;xe.render(V,R,U),B===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,O=_.transmissive;if(p.setupLights(),U.isArrayCamera){const ae=U.cameras;if(O.length>0)for(let pe=0,Se=ae.length;pe<Se;pe++){const Ee=ae[pe];I_(G,O,R,Ee)}it&&De.render(R);for(let pe=0,Se=ae.length;pe<Se;pe++){const Ee=ae[pe];D_(_,R,Ee,Ee.viewport)}}else O.length>0&&I_(G,O,R,U),it&&De.render(R),D_(_,R,U);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,U),at.resetDefaultState(),C=-1,D=null,v.pop(),v.length>0?(p=v[v.length-1],B===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Sf(R,U,V,G){if(R.visible===!1)return;if(R.layers.test(U.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(U);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ae.intersectsSprite(R)){G&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const pe=J.update(R),Se=R.material;Se.visible&&_.push(R,pe,Se,V,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ae.intersectsObject(R))){const pe=J.update(R),Se=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ce.copy(pe.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Se)){const Ee=pe.groups;for(let Re=0,Pe=Ee.length;Re<Pe;Re++){const Te=Ee[Re],tt=Se[Te.materialIndex];tt&&tt.visible&&_.push(R,pe,tt,V,Ce.z,Te)}}else Se.visible&&_.push(R,pe,Se,V,Ce.z,null)}}const ae=R.children;for(let pe=0,Se=ae.length;pe<Se;pe++)Sf(ae[pe],U,V,G)}function D_(R,U,V,G){const O=R.opaque,ae=R.transmissive,pe=R.transparent;p.setupLightsView(V),B===!0&&oe.setGlobalState(x.clippingPlanes,V),G&&Le.viewport(S.copy(G)),O.length>0&&Hl(O,U,V),ae.length>0&&Hl(ae,U,V),pe.length>0&&Hl(pe,U,V),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function I_(R,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Kr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ca:ur,minFilter:Lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ae=p.state.transmissionRenderTarget[G.id],pe=G.viewport||S;ae.setSize(pe.z,pe.w);const Se=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(k),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),it&&De.render(V);const Ee=x.toneMapping;x.toneMapping=Wr;const Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),B===!0&&oe.setGlobalState(x.clippingPlanes,G),Hl(R,V,G),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Te=0,tt=U.length;Te<tt;Te++){const ft=U[Te],Mt=ft.object,In=ft.geometry,Qe=ft.material,we=ft.group;if(Qe.side===Qi&&Mt.layers.test(G.layers)){const jt=Qe.side;Qe.side=Tn,Qe.needsUpdate=!0,U_(Mt,V,G,In,Qe,we),Qe.side=jt,Qe.needsUpdate=!0,Pe=!0}}Pe===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}x.setRenderTarget(Se),x.setClearColor(k,Y),Re!==void 0&&(G.viewport=Re),x.toneMapping=Ee}function Hl(R,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ae=R.length;O<ae;O++){const pe=R[O],Se=pe.object,Ee=pe.geometry,Re=G===null?pe.material:G,Pe=pe.group;Se.layers.test(V.layers)&&U_(Se,U,V,Ee,Re,Pe)}}function U_(R,U,V,G,O,ae){R.onBeforeRender(x,U,V,G,O,ae),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.onBeforeRender(x,U,V,G,R,ae),O.transparent===!0&&O.side===Qi&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,x.renderBufferDirect(V,U,G,O,R,ae),O.side=$r,O.needsUpdate=!0,x.renderBufferDirect(V,U,G,O,R,ae),O.side=Qi):x.renderBufferDirect(V,U,G,O,R,ae),R.onAfterRender(x,U,V,G,O,ae)}function Vl(R,U,V){U.isScene!==!0&&(U=je);const G=Ue.get(R),O=p.state.lights,ae=p.state.shadowsArray,pe=O.state.version,Se=Me.getParameters(R,O.state,ae,U,V),Ee=Me.getProgramCacheKey(Se);let Re=G.programs;G.environment=R.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(R.isMeshStandardMaterial?H:M).get(R.envMap||G.environment),G.envMapRotation=G.environment!==null&&R.envMap===null?U.environmentRotation:R.envMapRotation,Re===void 0&&(R.addEventListener("dispose",Ye),Re=new Map,G.programs=Re);let Pe=Re.get(Ee);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===pe)return O_(R,Se),Pe}else Se.uniforms=Me.getUniforms(R),R.onBeforeCompile(Se,x),Pe=Me.acquireProgram(Se,Ee),Re.set(Ee,Pe),G.uniforms=Se.uniforms;const Te=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Te.clippingPlanes=oe.uniform),O_(R,Se),G.needsLights=yM(R),G.lightsStateVersion=pe,G.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function N_(R){if(R.uniformsList===null){const U=R.currentProgram.getUniforms();R.uniformsList=Ku.seqWithValue(U.seq,R.uniforms)}return R.uniformsList}function O_(R,U){const V=Ue.get(R);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function vM(R,U,V,G,O){U.isScene!==!0&&(U=je),P.resetTextureUnits();const ae=U.fog,pe=G.isMeshStandardMaterial?U.environment:null,Se=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ns,Ee=(G.isMeshStandardMaterial?H:M).get(G.envMap||pe),Re=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!V.morphAttributes.position,tt=!!V.morphAttributes.normal,ft=!!V.morphAttributes.color;let Mt=Wr;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const In=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=In!==void 0?In.length:0,we=Ue.get(G),jt=p.state.lights;if(B===!0&&(te===!0||R!==D)){const Kn=R===D&&G.id===C;oe.setState(G,R,Kn)}let Je=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==jt.state.version||we.outputColorSpace!==Se||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==Ee||G.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==oe.numPlanes||we.numIntersection!==oe.numIntersection)||we.vertexAlphas!==Re||we.vertexTangents!==Pe||we.morphTargets!==Te||we.morphNormals!==tt||we.morphColors!==ft||we.toneMapping!==Mt||we.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,we.__version=G.version);let hi=we.currentProgram;Je===!0&&(hi=Vl(G,U,O));let qs=!1,Un=!1,Ef=!1;const Rt=hi.getUniforms(),dr=we.uniforms;if(Le.useProgram(hi.program)&&(qs=!0,Un=!0,Ef=!0),G.id!==C&&(C=G.id,Un=!0),qs||D!==R){$e.reverseDepthBuffer?(fe.copy(R.projectionMatrix),rR(fe),sR(fe),Rt.setValue(L,"projectionMatrix",fe)):Rt.setValue(L,"projectionMatrix",R.projectionMatrix),Rt.setValue(L,"viewMatrix",R.matrixWorldInverse);const Kn=Rt.map.cameraPosition;Kn!==void 0&&Kn.setValue(L,Ne.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&Rt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Un=!0,Ef=!0)}if(O.isSkinnedMesh){Rt.setOptional(L,O,"bindMatrix"),Rt.setOptional(L,O,"bindMatrixInverse");const Kn=O.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),Rt.setValue(L,"boneTexture",Kn.boneTexture,P))}O.isBatchedMesh&&(Rt.setOptional(L,O,"batchingTexture"),Rt.setValue(L,"batchingTexture",O._matricesTexture,P),Rt.setOptional(L,O,"batchingIdTexture"),Rt.setValue(L,"batchingIdTexture",O._indirectTexture,P),Rt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Rt.setValue(L,"batchingColorTexture",O._colorsTexture,P));const Mf=V.morphAttributes;if((Mf.position!==void 0||Mf.normal!==void 0||Mf.color!==void 0)&&Ie.update(O,V,hi),(Un||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,Rt.setValue(L,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dr.envMap.value=Ee,dr.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(dr.envMapIntensity.value=U.environmentIntensity),Un&&(Rt.setValue(L,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&xM(dr,Ef),ae&&G.fog===!0&&ce.refreshFogUniforms(dr,ae),ce.refreshMaterialUniforms(dr,G,W,N,p.state.transmissionRenderTarget[R.id]),Ku.upload(L,N_(we),dr,P)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ku.upload(L,N_(we),dr,P),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(L,"center",O.center),Rt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Rt.setValue(L,"normalMatrix",O.normalMatrix),Rt.setValue(L,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Kn=G.uniformsGroups;for(let Tf=0,SM=Kn.length;Tf<SM;Tf++){const F_=Kn[Tf];I.update(F_,hi),I.bind(F_,hi)}}return hi}function xM(R,U){R.ambientLightColor.needsUpdate=U,R.lightProbe.needsUpdate=U,R.directionalLights.needsUpdate=U,R.directionalLightShadows.needsUpdate=U,R.pointLights.needsUpdate=U,R.pointLightShadows.needsUpdate=U,R.spotLights.needsUpdate=U,R.spotLightShadows.needsUpdate=U,R.rectAreaLights.needsUpdate=U,R.hemisphereLights.needsUpdate=U}function yM(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,U,V){Ue.get(R.texture).__webglTexture=U,Ue.get(R.depthTexture).__webglTexture=V;const G=Ue.get(R);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,U){const V=Ue.get(R);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(R,U=0,V=0){E=R,A=U,w=V;let G=!0,O=null,ae=!1,pe=!1;if(R){const Ee=Ue.get(R);if(Ee.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Ee.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Ee.__hasExternalTextures)P.rebindTextures(R,Ue.get(R.texture).__webglTexture,Ue.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Te=R.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&Ue.has(Te)&&(R.width!==Te.image.width||R.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Re=R.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(pe=!0);const Pe=Ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?O=Pe[U][V]:O=Pe[U],ae=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?O=Ue.get(R).__webglMultisampledFramebuffer:Array.isArray(Pe)?O=Pe[V]:O=Pe,S.copy(R.viewport),T.copy(R.scissor),z=R.scissorTest}else S.copy(q).multiplyScalar(W).floor(),T.copy(Q).multiplyScalar(W).floor(),z=le;if(Le.bindFramebuffer(L.FRAMEBUFFER,O)&&G&&Le.drawBuffers(R,O),Le.viewport(S),Le.scissor(T),Le.setScissorTest(z),ae){const Ee=Ue.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,V)}else if(pe){const Ee=Ue.get(R.texture),Re=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Re)}C=-1},this.readRenderTargetPixels=function(R,U,V,G,O,ae,pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){Le.bindFramebuffer(L.FRAMEBUFFER,Se);try{const Ee=R.texture,Re=Ee.format,Pe=Ee.type;if(!$e.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=R.width-G&&V>=0&&V<=R.height-O&&L.readPixels(U,V,G,O,Oe.convert(Re),Oe.convert(Pe),ae)}finally{const Ee=E!==null?Ue.get(E).__webglFramebuffer:null;Le.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(R,U,V,G,O,ae,pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){const Ee=R.texture,Re=Ee.format,Pe=Ee.type;if(!$e.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=R.width-G&&V>=0&&V<=R.height-O){Le.bindFramebuffer(L.FRAMEBUFFER,Se);const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(U,V,G,O,Oe.convert(Re),Oe.convert(Pe),0);const tt=E!==null?Ue.get(E).__webglFramebuffer:null;Le.bindFramebuffer(L.FRAMEBUFFER,tt);const ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await iR(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(Te),L.deleteSync(ft),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,U=null,V=0){R.isTexture!==!0&&($u("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,R=arguments[1]);const G=Math.pow(2,-V),O=Math.floor(R.image.width*G),ae=Math.floor(R.image.height*G),pe=U!==null?U.x:0,Se=U!==null?U.y:0;P.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,pe,Se,O,ae),Le.unbindTexture()},this.copyTextureToTexture=function(R,U,V=null,G=null,O=0){R.isTexture!==!0&&($u("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1],U=arguments[2],O=arguments[3]||0,V=null);let ae,pe,Se,Ee,Re,Pe;V!==null?(ae=V.max.x-V.min.x,pe=V.max.y-V.min.y,Se=V.min.x,Ee=V.min.y):(ae=R.image.width,pe=R.image.height,Se=0,Ee=0),G!==null?(Re=G.x,Pe=G.y):(Re=0,Pe=0);const Te=Oe.convert(U.format),tt=Oe.convert(U.type);P.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ft=L.getParameter(L.UNPACK_ROW_LENGTH),Mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),In=L.getParameter(L.UNPACK_SKIP_PIXELS),Qe=L.getParameter(L.UNPACK_SKIP_ROWS),we=L.getParameter(L.UNPACK_SKIP_IMAGES),jt=R.isCompressedTexture?R.mipmaps[O]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,jt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Re,Pe,ae,pe,Te,tt,jt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Re,Pe,jt.width,jt.height,Te,jt.data):L.texSubImage2D(L.TEXTURE_2D,O,Re,Pe,ae,pe,Te,tt,jt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,In),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),O===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(R,U,V=null,G=null,O=0){R.isTexture!==!0&&($u("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,R=arguments[2],U=arguments[3],O=arguments[4]||0);let ae,pe,Se,Ee,Re,Pe,Te,tt,ft;const Mt=R.isCompressedTexture?R.mipmaps[O]:R.image;V!==null?(ae=V.max.x-V.min.x,pe=V.max.y-V.min.y,Se=V.max.z-V.min.z,Ee=V.min.x,Re=V.min.y,Pe=V.min.z):(ae=Mt.width,pe=Mt.height,Se=Mt.depth,Ee=0,Re=0,Pe=0),G!==null?(Te=G.x,tt=G.y,ft=G.z):(Te=0,tt=0,ft=0);const In=Oe.convert(U.format),Qe=Oe.convert(U.type);let we;if(U.isData3DTexture)P.setTexture3D(U,0),we=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)P.setTexture2DArray(U,0),we=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hi=L.getParameter(L.UNPACK_SKIP_PIXELS),qs=L.getParameter(L.UNPACK_SKIP_ROWS),Un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(we,O,Te,tt,ft,ae,pe,Se,In,Qe,Mt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(we,O,Te,tt,ft,ae,pe,Se,In,Mt.data):L.texSubImage3D(we,O,Te,tt,ft,ae,pe,Se,In,Qe,Mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hi),L.pixelStorei(L.UNPACK_SKIP_ROWS,qs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Un),O===0&&U.generateMipmaps&&L.generateMipmap(we),Le.unbindTexture()},this.initRenderTarget=function(R){Ue.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Le.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,Le.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===e_?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===af?"display-p3":"srgb"}}class jS extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class wp extends ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K0=new mt,Ap=new uf,Cu=new lf,Pu=new F;class Z0 extends hn{constructor(e=new ci,n=new wp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cu.copy(i.boundingSphere),Cu.applyMatrix4(r),Cu.radius+=s,e.ray.intersectsSphere(Cu)===!1)return;K0.copy(r).invert(),Ap.copy(e.ray).applyMatrix4(K0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=u.getX(g);Pu.fromBufferAttribute(f,p),Q0(Pu,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Pu.fromBufferAttribute(f,g),Q0(Pu,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Q0(t,e,n,i,r,s,o){const a=Ap.distanceSqToPoint(t);if(a<n){const l=new F;Ap.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ka extends ci{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new F,d=new F,m=[],g=[],_=[],p=[];for(let h=0;h<=i;h++){const v=[],x=h/i;let y=0;h===0&&o===0?y=.5/n:h===i&&l===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){const w=A/n;f.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(w+y,1-x),v.push(u++)}c.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const x=c[h][v+1],y=c[h][v],A=c[h+1][v],w=c[h+1][v+1];(h!==0||o>0)&&m.push(x,y,w),(h!==i-1||l<Math.PI)&&m.push(y,A,w)}this.setIndex(m),this.setAttribute("position",new ai(g,3)),this.setAttribute("normal",new ai(_,3)),this.setAttribute("uv",new ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class J0 extends ha{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TS,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ev={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class d2{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const m=u[f],g=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}}const p2=new d2;class o_{constructor(e){this.manager=e!==void 0?e:p2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}o_.DEFAULT_MATERIAL_NAME="__DEFAULT";class m2 extends o_{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ev.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Sl("img");function l(){c(),ev.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tv extends o_{constructor(e){super(e)}load(e,n,i,r){const s=new fn,o=new m2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class XS extends hn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Rh=new mt,nv=new F,iv=new F;class _2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new r_,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;nv.setFromMatrixPosition(e.matrixWorld),n.position.copy(nv),iv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(iv),n.updateMatrixWorld(),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rv=new mt,Pa=new F,Ch=new F;class g2 extends _2{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Pa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Pa),Ch.copy(i.position),Ch.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ch),i.updateMatrixWorld(),r.makeTranslation(-Pa.x,-Pa.y,-Pa.z),rv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rv)}}class v2 extends XS{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new g2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class x2 extends XS{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class y2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=sv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function sv(){return performance.now()}const ov=new mt;class S2{constructor(e,n,i=0,r=1/0){this.ray=new uf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new n_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ov.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ov),this}intersectObject(e,n=!0,i=[]){return Rp(e,this,i,n),i.sort(av),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Rp(e[r],this,i,n);return i.sort(av),i}}function av(t,e){return t.distance-e.distance}function Rp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Rp(s[o],e,n,!0)}}class lv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(en(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E2 extends Xs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xm);function $i(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function YS(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ta={duration:.5,overwrite:!1,delay:0},a_,nn,gt,ii=1e8,lt=1/ii,Cp=Math.PI*2,M2=Cp/4,T2=0,qS=Math.sqrt,w2=Math.cos,A2=Math.sin,Wt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},cr=function(e){return typeof e=="number"},l_=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},wn=function(e){return e!==!1},u_=function(){return typeof window<"u"},bu=function(e){return wt(e)||Wt(e)},$S=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,Pp=/(?:-?\.?\d|\.)+/gi,KS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ph=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ZS=/[+-]=-?[.\d]+/,QS=/[^,'"\[\]\s]+/gi,R2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,bi,bp,c_,Yn={},Dc={},JS,eE=function(e){return(Dc=Bs(e,Yn))&&Ln},f_=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},El=function(e,n){return!n&&console.warn(e)},tE=function(e,n){return e&&(Yn[e]=n)&&Dc&&(Dc[e]=n)||Yn},Ml=function(){return 0},C2={suppressEvents:!0,isStart:!0,kill:!1},Zu={suppressEvents:!0,kill:!1},P2={suppressEvents:!0},h_={},jr=[],Lp={},nE,kn={},bh={},uv=30,Qu=[],d_="",p_=function(e){var n=e[0],i,r;if(zi(n)||wt(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Qu.length;r--&&!Qu[r].targetTest(n););i=Qu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new AE(e[r],i)))||e.splice(r,1);return e},Rs=function(e){return e._gsap||p_(ri(e))[0]._gsap},iE=function(e,n,i){return(i=e[n])&&wt(i)?e[n]():l_(i)&&e.getAttribute&&e.getAttribute(n)||i},An=function(e,n){return(e=e.split(",")).forEach(n)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},Bo=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},b2=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},Ic=function(){var e=jr.length,n=jr.slice(0),i,r;for(Lp={},jr.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},rE=function(e,n,i,r){jr.length&&!nn&&Ic(),e.render(n,i,nn&&n<0&&(e._initted||e._startAt)),jr.length&&!nn&&Ic()},sE=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(QS).length<2?n:Wt(e)?e.trim():e},oE=function(e){return e},fi=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},L2=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Bs=function(e,n){for(var i in n)e[i]=n[i];return e},cv=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=zi(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},Uc=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},Za=function(e){var n=e.parent||xt,i=e.keyframes?L2(rn(e.keyframes)):fi;if(wn(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},D2=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},aE=function(e,n,i,r,s){var o=e[r],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=o,n.parent=n._dp=e,n},hf=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,o=n._next;s?s._next=o:e[i]===n&&(e[i]=o),o?o._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},Zr=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cs=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},I2=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Dp=function(e,n,i,r){return e._startAt&&(nn?e._startAt.revert(Zu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},U2=function t(e){return!e||e._ts&&t(e.parent)},fv=function(e){return e._repeat?na(e._tTime,e=e.duration()+e._rDelay)*e:0},na=function(e,n){var i=Math.floor(e/=n);return e&&i===e?i-1:i},Nc=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},df=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},pf=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Vt(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),df(e),i._dirty||Cs(i,e)),e},lE=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=Nc(e.rawTime(),n),(!n._dur||kl(0,n.totalDuration(),i)-n._tTime>lt)&&n.render(i,!0)),Cs(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-lt}},Ii=function(e,n,i,r){return n.parent&&Zr(n),n._start=Vt((cr(i)?i:i||e!==xt?Qn(e,i,n):e._time)+n._delay),n._end=Vt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),aE(e,n,"_first","_last",e._sort?"_start":0),Ip(n)||(e._recent=n),r||lE(e,n),e._ts<0&&pf(e,e._tTime),e},uE=function(e,n){return(Yn.ScrollTrigger||f_("scrollTrigger",n))&&Yn.ScrollTrigger.create(n,e)},cE=function(e,n,i,r,s){if(__(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&nE!==Bn.frame)return jr.push(e),e._lazy=[s,r],1},N2=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Ip=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},O2=function(e,n,i,r){var s=e.ratio,o=n<0||!n&&(!e._start&&N2(e)&&!(!e._initted&&Ip(e))||(e._ts<0||e._dp._ts<0)&&!Ip(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=kl(0,e._tDur,n),c=na(l,a),e._yoyo&&c&1&&(o=1-o),c!==na(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||nn||r||e._zTime===lt||!n&&e._zTime){if(!e._initted&&cE(e,n,r,i,l))return;for(f=e._zTime,e._zTime=n||(i?lt:0),i||(i=n&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;n<0&&Dp(e,n,i,!0),e._onUpdate&&!i&&Vn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Vn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&Zr(e,1),!i&&!nn&&(Vn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},F2=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},ia=function(e,n,i,r){var s=e._repeat,o=Vt(n)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Vt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&pf(e,e._tTime=e._tDur*a),e.parent&&df(e),i||Cs(e.parent,e),e},hv=function(e){return e instanceof un?Cs(e):ia(e,e._dur)},k2={_start:0,endTime:Ml,totalDuration:Ml},Qn=function t(e,n,i){var r=e.labels,s=e._recent||k2,o=e.duration()>=ii?s.endTime(!1):e._dur,a,l,u;return Wt(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),u=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(n in r||(r[n]=o),r[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),u&&i&&(l=l/100*(rn(i)?i[0]:i).totalDuration()),a>1?t(e,n.substr(0,a-1),i)+l:o+l)):n==null?o:+n},Qa=function(e,n,i){var r=cr(n[1]),s=(r?2:1)+(e<2?0:1),o=n[s],a,l;if(r&&(o.duration=n[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;o.immediateRender=wn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=n[s-1]}return new Dt(n[0],o,n[s+1])},is=function(e,n){return e||e===0?n(e):n},kl=function(e,n,i){return i<e?e:i>n?n:i},tn=function(e,n){return!Wt(e)||!(n=R2.exec(e))?"":n[1]},B2=function(e,n,i){return is(i,function(r){return kl(e,n,r)})},Up=[].slice,fE=function(e,n){return e&&zi(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==bi},z2=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Wt(r)&&!n||fE(r,1)?(s=i).push.apply(s,ri(r)):i.push(r)})||i},ri=function(e,n,i){return gt&&!n&&gt.selector?gt.selector(e):Wt(e)&&!i&&(bp||!ra())?Up.call((n||c_).querySelectorAll(e),0):rn(e)?z2(e,i):fE(e)?Up.call(e,0):e?[e]:[]},Np=function(e){return e=ri(e)[0]||El("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return ri(n,i.querySelectorAll?i:i===e?El("Invalid scope")||c_.createElement("div"):e)}},hE=function(e){return e.sort(function(){return .5-Math.random()})},dE=function(e){if(wt(e))return e;var n=zi(e)?e:{each:e},i=Ps(n.ease),r=n.from||0,s=parseFloat(n.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=n.axis,c=r,f=r;return Wt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,m,g){var _=(g||n).length,p=o[_],h,v,x,y,A,w,E,C,D;if(!p){if(D=n.grid==="auto"?0:(n.grid||[1,ii])[1],!D){for(E=-ii;E<(E=g[D++].getBoundingClientRect().left)&&D<_;);D<_&&D--}for(p=o[_]=[],h=l?Math.min(D,_)*c-.5:r%D,v=D===ii?0:l?_*f/D-.5:r/D|0,E=0,C=ii,w=0;w<_;w++)x=w%D-h,y=v-(w/D|0),p[w]=A=u?Math.abs(u==="y"?y:x):qS(x*x+y*y),A>E&&(E=A),A<C&&(C=A);r==="random"&&hE(p),p.max=E-C,p.min=C,p.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(D>_?_-1:u?u==="y"?_/D:D:Math.max(D,_/D))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=tn(n.amount||n.each)||0,i=i&&_<0?ME(i):i}return _=(p[d]-p.min)/p.max||0,Vt(p.b+(i?i(_):_)*p.v)+p.u}},Op=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Vt(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(cr(i)?0:tn(i))}},pE=function(e,n){var i=rn(e),r,s;return!i&&zi(e)&&(r=i=e.radius||ii,e.values?(e=ri(e.values),(s=!cr(e[0]))&&(r*=r)):e=Op(e.increment)),is(n,i?wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ii,c=0,f=e.length,d,m;f--;)s?(d=e[f].x-a,m=e[f].y-l,d=d*d+m*m):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||cr(o)?c:c+tn(o)}:Op(e))},mE=function(e,n,i,r){return is(rn(e)?!n:i===!0?!!(i=0):!r,function(){return rn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},H2=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,o){return o(s)},r)}},V2=function(e,n){return function(i){return e(parseFloat(i))+(n||tn(i))}},G2=function(e,n,i){return gE(e,n,0,1,i)},_E=function(e,n,i){return is(i,function(r){return e[~~n(r)]})},W2=function t(e,n,i){var r=n-e;return rn(e)?_E(e,t(0,e.length),n):is(i,function(s){return(r+(s-e)%r)%r+e})},j2=function t(e,n,i){var r=n-e,s=r*2;return rn(e)?_E(e,t(0,e.length-1),n):is(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Tl=function(e){for(var n=0,i="",r,s,o,a;~(r=e.indexOf("random(",n));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?QS:Pp),i+=e.substr(n,r-n)+mE(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),n=o+1;return i+e.substr(n,e.length-n)},gE=function(e,n,i,r,s){var o=n-e,a=r-i;return is(s,function(l){return i+((l-e)/o*a||0)})},X2=function t(e,n,i,r){var s=isNaN(e+n)?0:function(m){return(1-m)*e+m*n};if(!s){var o=Wt(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},n={p:n};else if(rn(e)&&!rn(n)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(t(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return c[_](g-_)},i=n}else r||(e=Bs(rn(e)?[]:{},e));if(!c){for(l in n)m_.call(a,e,l,"get",n[l]);s=function(g){return x_(g,a)||(o?e.p:e)}}}return is(i,s)},dv=function(e,n,i){var r=e.labels,s=ii,o,a,l;for(o in r)a=r[o]-n,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Vn=function(e,n,i){var r=e.vars,s=r[n],o=gt,a=e._ctx,l,u,c;if(s)return l=r[n+"Params"],u=r.callbackScope||e,i&&jr.length&&Ic(),a&&(gt=a),c=l?s.apply(u,l):s.call(u),gt=o,c},Fa=function(e){return Zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&Vn(e,"onInterrupt"),e},Co,vE=[],xE=function(e){if(e)if(e=!e.name&&e.default||e,u_()||e.headless){var n=e.name,i=wt(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:Ml,render:x_,add:m_,kill:lD,modifier:aD,rawVars:0},o={targetTest:0,get:0,getSetter:v_,aliases:{},register:0};if(ra(),e!==r){if(kn[n])return;fi(r,fi(Uc(e,s),o)),Bs(r.prototype,Bs(s,Uc(e,o))),kn[r.prop=n]=r,e.targetTest&&(Qu.push(r),h_[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}tE(n,r),e.register&&e.register(Ln,r,Rn)}else vE.push(e)},ot=255,ka={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Lh=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*ot+.5|0},yE=function(e,n,i){var r=e?cr(e)?[e>>16,e>>8&ot,e&ot]:0:ka.black,s,o,a,l,u,c,f,d,m,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ka[e])r=ka[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ot,r&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Pp),!n)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Lh(l+1/3,s,o),r[1]=Lh(l,s,o),r[2]=Lh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(KS),i&&r.length<4&&(r[3]=1),r}else r=e.match(Pp)||ka.transparent;r=r.map(Number)}return n&&!g&&(s=r[0]/ot,o=r[1]/ot,a=r[2]/ot,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(m=f-d,u=c>.5?m/(2-f-d):m/(f+d),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},SE=function(e){var n=[],i=[],r=-1;return e.split(Xr).forEach(function(s){var o=s.match(Ro)||[];n.push.apply(n,o),i.push(r+=o.length+1)}),n.c=i,n},pv=function(e,n,i){var r="",s=(e+r).match(Xr),o=n?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=yE(d,n,1))&&o+(n?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=SE(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Xr,"1").split(Ro),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Xr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Xr=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ka)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Y2=/hsl[a]?\(/,EE=function(e){var n=e.join(" "),i;if(Xr.lastIndex=0,Xr.test(n))return i=Y2.test(n),e[1]=pv(e[1],i),e[0]=pv(e[0],i,SE(e[1])),!0},wl,Bn=function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,m,g=function _(p){var h=t()-r,v=p===!0,x,y,A,w;if((h>e||h<0)&&(i+=h-n),r+=h,A=r-i,x=A-o,(x>0||v)&&(w=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(m=0;m<a.length;m++)a[m](A,d,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){JS&&(!bp&&u_()&&(bi=bp=window,c_=bi.document||{},Yn.gsap=Ln,(bi.gsapVersions||(bi.gsapVersions=[])).push(Ln.version),eE(Dc||bi.GreenSockGlobals||!bi.gsap&&bi||{}),vE.forEach(xE)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(p){return setTimeout(p,o-f.time*1e3+1|0)},wl=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),wl=0,u=Ml},lagSmoothing:function(p,h){e=p||1/0,n=Math.min(h||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,h,v){var x=h?function(y,A,w,E){p(y,A,w,E),f.remove(x)}:p;return f.remove(p),a[v?"unshift":"push"](x),ra(),x},remove:function(p,h){~(h=a.indexOf(p))&&a.splice(h,1)&&m>=h&&m--},_listeners:a},f}(),ra=function(){return!wl&&Bn.wake()},Ve={},q2=/^[\d.\-M][\d.\-,\s]/,$2=/["']/g,K2=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),n[r]=isNaN(u)?u.replace($2,"").trim():+u,r=l.substr(a+1).trim();return n},Z2=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},Q2=function(e){var n=(e+"").split("("),i=Ve[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[K2(n[1])]:Z2(e).split(",").map(sE)):Ve._CE&&q2.test(e)?Ve._CE("",e):i},ME=function(e){return function(n){return 1-e(1-n)}},TE=function t(e,n){for(var i=e._first,r;i;)i instanceof un?t(i,n):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==n&&(i.timeline?t(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},Ps=function(e,n){return e&&(wt(e)?e:Ve[e]||Q2(e))||n},Ys=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},o;return An(e,function(a){Ve[a]=Yn[a]=s,Ve[o=a.toLowerCase()]=i;for(var l in s)Ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[a+"."+l]=s[l]}),s},wE=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Dh=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),o=s/Cp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*A2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:wE(a);return s=Cp/s,l.config=function(u,c){return t(e,u,c)},l},Ih=function t(e,n){n===void 0&&(n=1.70158);var i=function(o){return o?--o*o*((n+1)*o+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:wE(i);return r.config=function(s){return t(e,s)},r};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Ys(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Ys("Elastic",Dh("in"),Dh("out"),Dh());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(a){return a<n?t*a*a:a<i?t*Math.pow(a-1.5/e,2)+.75:a<r?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};Ys("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ys("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});Ys("Circ",function(t){return-(qS(1-t*t)-1)});Ys("Sine",function(t){return t===1?1:-w2(t*M2)+1});Ys("Back",Ih("in"),Ih("out"),Ih());Ve.SteppedEase=Ve.steps=Yn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,o=1-lt;return function(a){return((r*kl(0,o,a)|0)+s)*i}}};ta.ease=Ve["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return d_+=t+","+t+"Params,"});var AE=function(e,n){this.id=T2++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:iE,this.set=n?n.getSetter:v_},Al=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,ia(this,+n.duration,1,1),this.data=n.data,gt&&(this._ctx=gt,gt.data.push(this)),wl||Bn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ia(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ra(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pf(this,i),!s._dp||s.parent||lE(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===lt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),rE(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+fv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+fv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?na(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Nc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-lt?0:this._rts,this.totalTime(kl(-Math.abs(this._delay),this._tDur,s),r!==!1),df(this),I2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ra(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ii(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(wn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=P2);var r=nn;return nn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),nn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,hv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,hv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Qn(this,i),wn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,wn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-lt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=wt(i)?i:oE,a=function(){var u=r.then;r.then=null,wt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Fa(this)},t}();fi(Al.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var un=function(t){YS(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=wn(i.sortChildren),xt&&Ii(i.parent||xt,$i(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&uE($i(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,o){return Qa(0,arguments,this),this},n.from=function(r,s,o){return Qa(1,arguments,this),this},n.fromTo=function(r,s,o,a){return Qa(2,arguments,this),this},n.set=function(r,s,o){return s.duration=0,s.parent=this,Za(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Dt(r,s,Qn(this,o),1),this},n.call=function(r,s,o){return Ii(this,Dt.delayedCall(0,r,s),o)},n.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Dt(r,o,Qn(this,l)),this},n.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Za(o).immediateRender=wn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},n.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Za(a).immediateRender=wn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},n.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Vt(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,m,g,_,p,h,v,x,y,A,w,E;if(this!==xt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,x=this._ts,h=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,p=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(d=Vt(c%p),c===l?(_=this._repeat,d=u):(_=~~(c/p),_&&_===c/p&&(d=u,_--),d>u&&(d=u)),A=na(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(d=u-d,E=1),_!==A&&!this._lock){var C=w&&A&1,D=C===(w&&_&1);if(_<A&&(C=!C),a=C?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Vt(_*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,D&&(this._lock=2,a=C?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;TE(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=F2(this,Vt(a),Vt(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!_&&(Vn(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,o),d!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=-lt);break}}m=g}else{m=this._last;for(var S=r<0?r:d;m;){if(g=m._prev,(m._act||S<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(S-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(S-m._start)*m._ts,s,o||nn&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=S?-lt:lt);break}}m=g}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-lt)._zTime=d>=a?1:-1,this._ts))return this._start=y,df(this),this.render(r,s,o);this._onUpdate&&!s&&Vn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Zr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Vn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var o=this;if(cr(s)||(s=Qn(this,s,r)),!(r instanceof Al)){if(rn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Wt(r))return this.addLabel(r,s);if(wt(r))r=Dt.delayedCall(0,r);else return this}return this!==r?Ii(this,r,s):this},n.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ii);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Dt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},n.remove=function(r){return Wt(r)?this.removeLabel(r):wt(r)?this.killTweensOf(r):(hf(this,r),r===this._recent&&(this._recent=this._last),Cs(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(Bn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=Qn(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,o){var a=Dt.delayedCall(0,s||Ml,o);return a.data="isPause",this._hasPause=1,Ii(this,a,Qn(this,r))},n.removePause=function(r){var s=this._first;for(r=Qn(this,r);s;)s._start===r&&s.data==="isPause"&&Zr(s),s=s._next},n.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Dr!==a[l]&&a[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var o=[],a=ri(r),l=this._first,u=cr(s),c;l;)l instanceof Dt?b2(l._targets,a)&&(u?(!Dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},n.tweenTo=function(r,s){s=s||{};var o=this,a=Qn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,m,g=Dt.to(o,fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||lt,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==p&&ia(g,p,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,f||[])}},s));return d?g.render(0):g},n.tweenFromTo=function(r,s,o){return this.tweenTo(s,fi({startAt:{time:Qn(this,r)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),dv(this,Qn(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),dv(this,Qn(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+lt)},n.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Cs(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Cs(this)},n.totalDuration=function(r){var s=0,o=this,a=o._last,l=ii,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ii(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ia(o,o===xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(xt._ts&&(rE(xt,Nc(r,xt)),nE=Bn.frame),Bn.frame>=uv){uv+=Wn.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&Wn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e}(Al);fi(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var J2=function(e,n,i,r,s,o,a){var l=new Rn(this._pt,e,n,0,1,DE,null,s),u=0,c=0,f,d,m,g,_,p,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Tl(r)),o&&(v=[i,r],o(v,e,n),i=v[0],r=v[1]),d=i.match(Ph)||[];f=Ph.exec(r);)g=f[0],_=r.substring(u,f.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[c++]&&(p=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:p,c:g.charAt(1)==="="?Bo(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},u=Ph.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(ZS.test(r)||h)&&(l.e=0),this._pt=l,l},m_=function(e,n,i,r,s,o,a,l,u,c){wt(r)&&(r=r(s||0,e,o));var f=e[n],d=i!=="get"?i:wt(f)?u?e[n.indexOf("set")||!wt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():f,m=wt(f)?u?rD:bE:g_,g;if(Wt(r)&&(~r.indexOf("random(")&&(r=Tl(r)),r.charAt(1)==="="&&(g=Bo(d,r)+(tn(d)||0),(g||g===0)&&(r=g))),!c||d!==r||Fp)return!isNaN(d*r)&&r!==""?(g=new Rn(this._pt,e,n,+d||0,r-(d||0),typeof f=="boolean"?oD:LE,0,m),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(n in e)&&f_(n,r),J2.call(this,e,n,d,r,m,l||Wn.stringFilter,u))},eD=function(e,n,i,r,s){if(wt(e)&&(e=Ja(e,s,n,i,r)),!zi(e)||e.style&&e.nodeType||rn(e)||$S(e))return Wt(e)?Ja(e,s,n,i,r):e;var o={},a;for(a in e)o[a]=Ja(e[a],s,n,i,r);return o},RE=function(e,n,i,r,s,o){var a,l,u,c;if(kn[e]&&(a=new kn[e]).init(s,a.rawVars?n[e]:eD(n[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Rn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Co))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Dr,Fp,__=function t(e,n,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,m=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:p,x=e._overwrite==="auto"&&!a_,y=e.timeline,A,w,E,C,D,S,T,z,k,Y,K,N,W;if(y&&(!d||!s)&&(s="none"),e._ease=Ps(s,ta.ease),e._yEase=f?ME(Ps(f===!0?s:f,ta.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(z=p[0]?Rs(p[0]).harness:0,N=z&&r[z.prop],A=Uc(r,h_),_&&(_._zTime<0&&_.progress(1),n<0&&c&&a&&!m?_.render(-1,!0):_.revert(c&&g?Zu:C2),_._lazy=0),o){if(Zr(e._startAt=Dt.set(p,fi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&wn(l),startAt:null,delay:0,onUpdate:u&&function(){return Vn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(nn||!a&&!m)&&e._startAt.revert(Zu),a&&g&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(c&&g&&!_){if(n&&(a=!1),E=fi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&wn(l),immediateRender:a,stagger:0,parent:h},A),N&&(E[z.prop]=N),Zr(e._startAt=Dt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(nn?e._startAt.revert(Zu):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,lt,lt);else if(!n)return}for(e._pt=e._ptCache=0,l=g&&wn(l)||l&&!g,w=0;w<p.length;w++){if(D=p[w],T=D._gsap||p_(p)[w]._gsap,e._ptLookup[w]=Y={},Lp[T.id]&&jr.length&&Ic(),K=v===p?w:v.indexOf(D),z&&(k=new z).init(D,N||A,e,K,v)!==!1&&(e._pt=C=new Rn(e._pt,D,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(b){Y[b]=C}),k.priority&&(S=1)),!z||N)for(E in A)kn[E]&&(k=RE(E,A,e,K,D,v))?k.priority&&(S=1):Y[E]=C=m_.call(e,D,E,"get",A[E],K,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(D,e._op[w]),x&&e._pt&&(Dr=e,xt.killTweensOf(D,Y,e.globalTime(n)),W=!e.parent,Dr=0),e._pt&&l&&(Lp[T.id]=1)}S&&IE(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!W,d&&n<=0&&y.render(ii,!0,!0)},tD=function(e,n,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,f,d,m;if(!u)for(u=e._ptCache[n]=[],d=e._ptLookup,m=e._targets.length;m--;){if(c=d[m][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return Fp=1,e.vars[n]="+=0",__(e,a),Fp=0,l?El(n+" not eligible for reset"):1;u.push(c)}for(m=u.length;m--;)f=u[m],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Ct(i)+tn(f.e)),f.b&&(f.b=c.s+tn(f.b))},nD=function(e,n){var i=e[0]?Rs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return n;s=Bs({},n);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},iD=function(e,n,i,r){var s=n.ease||r||"power1.inOut",o,a;if(rn(n))a=i[e]||(i[e]=[]),n.forEach(function(l,u){return a.push({t:u/(n.length-1)*100,v:l,e:s})});else for(o in n)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:n[o],e:s})},Ja=function(e,n,i,r,s){return wt(e)?e.call(n,i,r,s):Wt(e)&&~e.indexOf("random(")?Tl(e):e},CE=d_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",PE={};An(CE+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return PE[t]=1});var Dt=function(t){YS(e,t);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=t.call(this,o?r:Za(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,h=l.yoyoEase,v=r.parent||xt,x=(rn(i)||$S(i)?cr(i[0]):"length"in r)?[i]:ri(i),y,A,w,E,C,D,S,T;if(a._targets=x.length?p_(x):El("GSAP target "+i+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||d||bu(u)||bu(c)){if(r=a.vars,y=a.timeline=new un({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=$i(a),y._start=0,d||bu(u)||bu(c)){if(E=x.length,S=d&&dE(d),zi(d))for(C in d)~CE.indexOf(C)&&(T||(T={}),T[C]=d[C]);for(A=0;A<E;A++)w=Uc(r,PE),w.stagger=0,h&&(w.yoyoEase=h),T&&Bs(w,T),D=x[A],w.duration=+Ja(u,$i(a),A,D,x),w.delay=(+Ja(c,$i(a),A,D,x)||0)-a._delay,!d&&E===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(D,w,S?S(A,D,x):0),y._ease=Ve.none;y.duration()?u=c=0:a.timeline=0}else if(g){Za(fi(y.vars.defaults,{ease:"none"})),y._ease=Ps(g.ease||r.ease||"none");var z=0,k,Y,K;if(rn(g))g.forEach(function(N){return y.to(x,N,">")}),y.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||iD(C,g[C],w,g.easeEach);for(C in w)for(k=w[C].sort(function(N,W){return N.t-W.t}),z=0,A=0;A<k.length;A++)Y=k[A],K={ease:Y.e,duration:(Y.t-(A?k[A-1].t:0))/100*u},K[C]=Y.v,y.to(x,K,z),z+=K.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return m===!0&&!a_&&(Dr=$i(a),xt.killTweensOf(x),Dr=0),Ii(v,$i(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===Vt(v._time)&&wn(f)&&U2($i(a))&&v.data!=="nested")&&(a._tTime=-lt,a.render(Math.max(0,-c)||0)),p&&uE($i(a),p),a}var n=e.prototype;return n.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-lt&&!c?l:r<lt?0:r,d,m,g,_,p,h,v,x,y;if(!u)O2(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(d=Vt(f%_),f===l?(g=this._repeat,d=u):(g=~~(f/_),g&&g===Vt(f/_)&&(d=u,g--),d>u&&(d=u)),h=this._yoyo&&g&1,h&&(y=this._yEase,d=u-d),p=na(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(x&&this._yEase&&TE(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Vt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(cE(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(d/u),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!g&&(Vn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Dp(this,r,s,o),Vn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Vn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Dp(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Zr(this,1),!s&&!(c&&!a)&&(f||a||h)&&(Vn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,o,a,l){wl||Bn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||__(this,u),c=this._ease(u/this._dur),tD(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(pf(this,0),this.parent||aE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Dr&&Dr.vars.overwrite!==!0)._first||Fa(this),this.parent&&o!==this.timeline.totalDuration()&&ia(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ri(r):a,u=this._ptLookup,c=this._pt,f,d,m,g,_,p,h;if((!s||s==="all")&&D2(a,l))return s==="all"&&(this._pt=0),Fa(this);for(f=this._op=this._op||[],s!=="all"&&(Wt(s)&&(_={},An(s,function(v){return _[v]=1}),s=_),s=nD(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=u[h],s==="all"?(f[h]=s,g=d,m={}):(m=f[h]=f[h]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&hf(this,p,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&c&&Fa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Qa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Qa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return xt.killTweensOf(r,s,o)},e}(Al);fi(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(t){Dt[t]=function(){var e=new un,n=Up.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var g_=function(e,n,i){return e[n]=i},bE=function(e,n,i){return e[n](i)},rD=function(e,n,i,r){return e[n](r.fp,i)},sD=function(e,n,i){return e.setAttribute(n,i)},v_=function(e,n){return wt(e[n])?bE:l_(e[n])&&e.setAttribute?sD:g_},LE=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},oD=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},DE=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},x_=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},aD=function(e,n,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,n,i),s=o},lD=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?hf(this,n,"_pt"):n.dep||(i=1),n=r;return!i},uD=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},IE=function(e){for(var n=e._pt,i,r,s,o;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:o)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:o=n,n=i}e._pt=s},Rn=function(){function t(n,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||LE,this.d=l||this,this.set=u||g_,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=uD,this.m=i,this.mt=s,this.tween=r},t}();An(d_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return h_[t]=1});Yn.TweenMax=Yn.TweenLite=Dt;Yn.TimelineLite=Yn.TimelineMax=un;xt=new un({sortChildren:!1,defaults:ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=EE;var bs=[],Ju={},cD=[],mv=0,fD=0,Uh=function(e){return(Ju[e]||cD).map(function(n){return n()})},kp=function(){var e=Date.now(),n=[];e-mv>2&&(Uh("matchMediaInit"),bs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=bi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&n.push(i))}),Uh("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),mv=e,Uh("matchMedia"))},UE=function(){function t(n,i){this.selector=i&&Np(i),this.data=[],this._r=[],this.isReverted=!1,this.id=fD++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){wt(i)&&(s=r,r=i,i=wt);var o=this,a=function(){var u=gt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Np(s)),gt=o,f=r.apply(o,arguments),wt(f)&&o._r.push(f),gt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=gt;gt=null,i(this),gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Dt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof un?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Dt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=bs.length;o--;)bs[o].id===this.id&&bs.splice(o,1)},e.revert=function(i){this.kill(i||{})},t}(),hD=function(){function t(n){this.contexts=[],this.scope=n,gt&&gt.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){zi(i)||(i={matches:i});var o=new UE(0,s||this.scope),a=o.conditions={},l,u,c;gt&&!o.selector&&(o.selector=gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=bi.matchMedia(i[u]),l&&(bs.indexOf(o)<0&&bs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(kp):l.addEventListener("change",kp)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t}(),Oc={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return xE(r)})},timeline:function(e){return new un(e)},getTweensOf:function(e,n){return xt.getTweensOf(e,n)},getProperty:function(e,n,i,r){Wt(e)&&(e=ri(e)[0]);var s=Rs(e||{}).get,o=i?oE:sE;return i==="native"&&(i=""),e&&(n?o((kn[n]&&kn[n].get||s)(e,n,i,r)):function(a,l,u){return o((kn[a]&&kn[a].get||s)(e,a,l,u))})},quickSetter:function(e,n,i){if(e=ri(e),e.length>1){var r=e.map(function(c){return Ln.quickSetter(c,n,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=kn[n],a=Rs(e),l=a.harness&&(a.harness.aliases||{})[n]||n,u=o?function(c){var f=new o;Co._pt=0,f.init(e,i?c+i:c,Co,0,[e]),f.render(1,f),Co._pt&&x_(1,Co)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,n,i){var r,s=Ln.to(e,Bs((r={},r[n]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(n,l,u,c)};return o.tween=s,o},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ps(e.ease,ta.ease)),cv(ta,e||{})},config:function(e){return cv(Wn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!kn[a]&&!Yn[a]&&El(n+" effect requires "+a+" plugin.")}),bh[n]=function(a,l,u){return i(ri(a),fi(l||{},s),u)},o&&(un.prototype[n]=function(a,l,u){return this.add(bh[n](a,zi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,n){Ve[e]=Ps(n)},parseEase:function(e,n){return arguments.length?Ps(e,n):Ve},getById:function(e){return xt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new un(e),r,s;for(i.smoothChildTiming=wn(e.smoothChildTiming),xt.remove(i),i._dp=0,i._time=i._tTime=xt._time,r=xt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Dt&&r.vars.onComplete===r._targets[0]))&&Ii(i,r,r._start-r._delay),r=s;return Ii(xt,i,0),i},context:function(e,n){return e?new UE(e,n):gt},matchMedia:function(e){return new hD(e)},matchMediaRefresh:function(){return bs.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||kp()},addEventListener:function(e,n){var i=Ju[e]||(Ju[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Ju[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:W2,wrapYoyo:j2,distribute:dE,random:mE,snap:pE,normalize:G2,getUnit:tn,clamp:B2,splitColor:yE,toArray:ri,selector:Np,mapRange:gE,pipe:H2,unitize:V2,interpolate:X2,shuffle:hE},install:eE,effects:bh,ticker:Bn,updateRoot:un.updateRoot,plugins:kn,globalTimeline:xt,core:{PropTween:Rn,globals:tE,Tween:Dt,Timeline:un,Animation:Al,getCache:Rs,_removeLinkedListItem:hf,reverting:function(){return nn},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return a_=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Oc[t]=Dt[t]});Bn.add(un.updateRoot);Co=Oc.to({},{duration:0});var dD=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},pD=function(e,n){var i=e._targets,r,s,o;for(r in n)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=dD(o,r)),o&&o.modifier&&o.modifier(n[r],e,i[s],r))},Nh=function(e,n){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Wt(s)&&(l={},An(s,function(c){return l[c]=1}),s=l),n){l={};for(u in s)l[u]=n(s[u]);s=l}pD(a,s)}}}},Ln=Oc.registerPlugin({name:"attr",init:function(e,n,i,r,s){var o,a,l;this.tween=i;for(o in n)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",n[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,n){for(var i=n._pt;i;)nn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},Nh("roundProps",Op),Nh("modifiers"),Nh("snap",pE))||Oc;Dt.version=un.version=Ln.version="3.12.5";JS=1;u_()&&ra();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _v,Ir,zo,y_,Ms,gv,S_,mD=function(){return typeof window<"u"},fr={},_s=180/Math.PI,Ho=Math.PI/180,co=Math.atan2,vv=1e8,E_=/([A-Z])/g,_D=/(left|right|width|margin|padding|x)/i,gD=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bp=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},vD=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},xD=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},yD=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},NE=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},OE=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},SD=function(e,n,i){return e.style[n]=i},ED=function(e,n,i){return e.style.setProperty(n,i)},MD=function(e,n,i){return e._gsap[n]=i},TD=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},wD=function(e,n,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},AD=function(e,n,i,r,s){var o=e._gsap;o[n]=i,o.renderTransform(s,o)},yt="transform",Cn=yt+"Origin",RD=function t(e,n){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in fr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Zi(r,a)}):this.tfm[e]=o.x?o[e]:Zi(r,e),e===Cn&&(this.tfm.zOrigin=o.zOrigin);else return Ui.transform.split(",").forEach(function(a){return t.call(i,a,n)});if(this.props.indexOf(yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Cn,n,"")),e=yt}(s||n)&&this.props.push(e,n,s[e])},FE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},CD=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(E_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=S_(),(!s||!s.isStart)&&!i[yt]&&(FE(i),r.zOrigin&&i[Cn]&&(i[Cn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kE=function(e,n){var i={target:e,props:[],revert:CD,save:RD};return e._gsap||Ln.core.getCache(e),n&&n.split(",").forEach(function(r){return i.save(r)}),i},BE,zp=function(e,n){var i=Ir.createElementNS?Ir.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ir.createElement(e);return i&&i.style?i:Ir.createElement(e)},Fi=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(E_,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,sa(n)||n,1)||""},xv="O,Moz,ms,Ms,Webkit".split(","),sa=function(e,n,i){var r=n||Ms,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(xv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?xv[o]:"")+e},Hp=function(){mD()&&window.document&&(_v=window,Ir=_v.document,zo=Ir.documentElement,Ms=zp("div")||{style:{}},zp("div"),yt=sa(yt),Cn=yt+"Origin",Ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",BE=!!sa("perspective"),S_=Ln.core.reverting,y_=1)},Oh=function t(e){var n=zp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(zo.appendChild(n),n.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),zo.removeChild(n),this.style.cssText=s,o},yv=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},zE=function(e){var n;try{n=e.getBBox()}catch{n=Oh.call(e,!0)}return n&&(n.width||n.height)||e.getBBox===Oh||(n=Oh.call(e,!0)),n&&!n.width&&!n.x&&!n.y?{x:+yv(e,["x","cx","x1"])||0,y:+yv(e,["y","cy","y1"])||0,width:0,height:0}:n},HE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zE(e))},zs=function(e,n){if(n){var i=e.style,r;n in fr&&n!==Cn&&(n=yt),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(E_,"-$1").toLowerCase())):i.removeAttribute(n)}},Ur=function(e,n,i,r,s,o){var a=new Rn(e._pt,n,i,0,1,o?OE:NE);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Sv={deg:1,rad:1,turn:1},PD={grid:1,flex:1},Qr=function t(e,n,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Ms.style,l=_D.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",m=r==="%",g,_,p,h;if(r===o||!s||Sv[r]||Sv[o])return s;if(o!=="px"&&!d&&(s=t(e,n,i,"px")),h=e.getCTM&&HE(e),(m||o==="%")&&(fr[n]||~n.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[c],Ct(m?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:r),_=~n.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ir||!_.appendChild)&&(_=Ir.body),p=_._gsap,p&&m&&p.width&&l&&p.time===Bn.time&&!p.uncache)return Ct(s/p.width*f);if(m&&(n==="height"||n==="width")){var v=e.style[n];e.style[n]=f+r,g=e[c],v?e.style[n]=v:zs(e,n)}else(m||o==="%")&&!PD[Fi(_,"display")]&&(a.position=Fi(e,"position")),_===e&&(a.position="static"),_.appendChild(Ms),g=Ms[c],_.removeChild(Ms),a.position="absolute";return l&&m&&(p=Rs(_),p.time=Bn.time,p.width=_[c]),Ct(d?g*s/f:g&&s?f/g*s:0)},Zi=function(e,n,i,r){var s;return y_||Hp(),n in Ui&&n!=="transform"&&(n=Ui[n],~n.indexOf(",")&&(n=n.split(",")[0])),fr[n]&&n!=="transform"?(s=Cl(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:kc(Fi(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Fc[n]&&Fc[n](e,n,i)||Fi(e,n)||iE(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Qr(e,n,s,i)+i:s},bD=function(e,n,i,r){if(!i||i==="none"){var s=sa(n,e,1),o=s&&Fi(e,s,1);o&&o!==i?(n=s,i=o):n==="borderColor"&&(i=Fi(e,"borderTopColor"))}var a=new Rn(this._pt,e.style,n,0,1,DE),l=0,u=0,c,f,d,m,g,_,p,h,v,x,y,A;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[n],e.style[n]=r,r=Fi(e,n)||r,_?e.style[n]=_:zs(e,n)),c=[i,r],EE(c),i=c[0],r=c[1],d=i.match(Ro)||[],A=r.match(Ro)||[],A.length){for(;f=Ro.exec(r);)p=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=d[u++]||"")&&(m=parseFloat(_)||0,y=_.substr((m+"").length),p.charAt(1)==="="&&(p=Bo(m,p)+y),h=parseFloat(p),x=p.substr((h+"").length),l=Ro.lastIndex-x.length,x||(x=x||Wn.units[n]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(m=Qr(e,n,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:m,c:h-m,m:g&&g<4||n==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=n==="display"&&r==="none"?OE:NE;return ZS.test(r)&&(a.e=0),this._pt=a,a},Ev={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},LD=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=Ev[i]||i,n[1]=Ev[r]||r,n.join(" ")},DD=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],fr[a]&&(l=1,a=a==="transformOrigin"?Cn:yt),zs(i,a);l&&(zs(i,yt),o&&(o.svg&&i.removeAttribute("transform"),Cl(i,1),o.uncache=1,FE(r)))}},Fc={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Rn(e._pt,n,i,0,0,DD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Rl=[1,0,0,1,0,0],VE={},GE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mv=function(e){var n=Fi(e,yt);return GE(n)?Rl:n.substr(7).match(KS).map(Ct)},M_=function(e,n){var i=e._gsap||Rs(e),r=e.style,s=Mv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Rl:s):(s===Rl&&!e.offsetParent&&e!==zo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,zo.appendChild(e)),s=Mv(e),l?r.display=l:zs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):zo.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vp=function(e,n,i,r,s,o){var a=e._gsap,l=s||M_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],h=l[4],v=l[5],x=n.split(" "),y=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,E,C,D;i?l!==Rl&&(E=m*p-g*_)&&(C=y*(p/E)+A*(-_/E)+(_*v-p*h)/E,D=y*(-g/E)+A*(m/E)-(m*v-g*h)/E,y=C,A=D):(w=zE(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&a.smooth?(h=y-u,v=A-c,a.xOffset=f+(h*m+v*_)-h,a.yOffset=d+(h*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!r,a.origin=n,a.originIsAbsolute=!!i,e.style[Cn]="0px 0px",o&&(Ur(o,a,"xOrigin",u,y),Ur(o,a,"yOrigin",c,A),Ur(o,a,"xOffset",f,a.xOffset),Ur(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},Cl=function(e,n){var i=e._gsap||new AE(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Fi(e,Cn)||"0",c,f,d,m,g,_,p,h,v,x,y,A,w,E,C,D,S,T,z,k,Y,K,N,W,b,j,q,Q,le,Ae,B,te;return c=f=d=_=p=h=v=x=y=0,m=g=1,i.svg=!!(e.getCTM&&HE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),r.scale=r.rotate=r.translate="none"),E=M_(e,i.svg),i.svg&&(i.uncache?(b=e.getBBox(),u=i.xOrigin-b.x+"px "+(i.yOrigin-b.y)+"px",W=""):W=!n&&e.getAttribute("data-svg-origin"),Vp(e,W||u,!!W||i.originIsAbsolute,i.smooth!==!1,E)),A=i.xOrigin||0,w=i.yOrigin||0,E!==Rl&&(T=E[0],z=E[1],k=E[2],Y=E[3],c=K=E[4],f=N=E[5],E.length===6?(m=Math.sqrt(T*T+z*z),g=Math.sqrt(Y*Y+k*k),_=T||z?co(z,T)*_s:0,v=k||Y?co(k,Y)*_s+_:0,v&&(g*=Math.abs(Math.cos(v*Ho))),i.svg&&(c-=A-(A*T+w*k),f-=w-(A*z+w*Y))):(te=E[6],Ae=E[7],q=E[8],Q=E[9],le=E[10],B=E[11],c=E[12],f=E[13],d=E[14],C=co(te,le),p=C*_s,C&&(D=Math.cos(-C),S=Math.sin(-C),W=K*D+q*S,b=N*D+Q*S,j=te*D+le*S,q=K*-S+q*D,Q=N*-S+Q*D,le=te*-S+le*D,B=Ae*-S+B*D,K=W,N=b,te=j),C=co(-k,le),h=C*_s,C&&(D=Math.cos(-C),S=Math.sin(-C),W=T*D-q*S,b=z*D-Q*S,j=k*D-le*S,B=Y*S+B*D,T=W,z=b,k=j),C=co(z,T),_=C*_s,C&&(D=Math.cos(C),S=Math.sin(C),W=T*D+z*S,b=K*D+N*S,z=z*D-T*S,N=N*D-K*S,T=W,K=b),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,h=180-h),m=Ct(Math.sqrt(T*T+z*z+k*k)),g=Ct(Math.sqrt(N*N+te*te)),C=co(K,N),v=Math.abs(C)>2e-4?C*_s:0,y=B?1/(B<0?-B:B):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!GE(Fi(e,yt)),W&&e.setAttribute("transform",W))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(m*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=c-((i.xPercent=c&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Ct(m),i.scaleY=Ct(g),i.rotation=Ct(_)+a,i.rotationX=Ct(p)+a,i.rotationY=Ct(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Cn]=kc(u)),i.xOffset=i.yOffset=0,i.force3D=Wn.force3D,i.renderTransform=i.svg?UD:BE?WE:ID,i.uncache=0,i},kc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fh=function(e,n,i){var r=tn(n);return Ct(parseFloat(n)+parseFloat(Qr(e,"x",i+"px",r)))+r},ID=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,WE(e,n)},fs="0deg",ba="0px",hs=") ",WE=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,m=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",A=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==fs||c!==fs)){var w=parseFloat(c)*Ho,E=Math.sin(w),C=Math.cos(w),D;w=parseFloat(f)*Ho,D=Math.cos(w),o=Fh(v,o,E*D*-x),a=Fh(v,a,-Math.sin(w)*-x),l=Fh(v,l,C*D*-x+x)}p!==ba&&(y+="perspective("+p+hs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||o!==ba||a!==ba||l!==ba)&&(y+=l!==ba||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hs),u!==fs&&(y+="rotate("+u+hs),c!==fs&&(y+="rotateY("+c+hs),f!==fs&&(y+="rotateX("+f+hs),(d!==fs||m!==fs)&&(y+="skew("+d+", "+m+hs),(g!==1||_!==1)&&(y+="scale("+g+", "+_+hs),v.style[yt]=y||"translate(0, 0)"},UD=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,m=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),A,w,E,C,D;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ho,u*=Ho,A=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-u)*-d,C=Math.cos(l-u)*d,u&&(c*=Ho,D=Math.tan(u-c),D=Math.sqrt(1+D*D),E*=D,C*=D,c&&(D=Math.tan(c),D=Math.sqrt(1+D*D),A*=D,w*=D)),A=Ct(A),w=Ct(w),E=Ct(E),C=Ct(C)):(A=f,C=d,w=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Qr(m,"x",o,"px"),y=Qr(m,"y",a,"px")),(g||_||p||h)&&(x=Ct(x+g-(g*A+_*E)+p),y=Ct(y+_-(g*w+_*C)+h)),(r||s)&&(D=m.getBBox(),x=Ct(x+r/100*D.width),y=Ct(y+s/100*D.height)),D="matrix("+A+","+w+","+E+","+C+","+x+","+y+")",m.setAttribute("transform",D),v&&(m.style[yt]=D)},ND=function(e,n,i,r,s){var o=360,a=Wt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?_s:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*vv)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*vv)%o-~~(u/o)*o)),e._pt=d=new Rn(e._pt,n,i,r,u,vD),d.e=c,d.u="deg",e._props.push(i),d},Tv=function(e,n){for(var i in n)e[i]=n[i];return e},OD=function(e,n,i){var r=Tv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,m,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[yt]=n,a=Cl(i,1),zs(i,yt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[yt],o[yt]=n,a=Cl(i,1),o[yt]=u);for(l in fr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=tn(u),g=tn(c),f=m!==g?Qr(i,l,u,g):parseFloat(u),d=parseFloat(c),e._pt=new Rn(e._pt,a,l,f,d-f,Bp),e._pt.u=g||0,e._props.push(l));Tv(a,r)};An("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",o=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(a){return e<2?t+a:"border"+a+t});Fc[e>1?"border"+t:t]=function(a,l,u,c,f){var d,m;if(arguments.length<4)return d=o.map(function(g){return Zi(a,g,u)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(c+"").split(" "),m={},o.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,m,f)}});var jE={name:"css",register:Hp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,m,g,_,p,h,v,x,y,A,w,E,C;y_||Hp(),this.styles=this.styles||kE(e),C=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(c=n[_],!(kn[_]&&RE(_,n,i,r,e,s)))){if(m=typeof c,g=Fc[_],m==="function"&&(c=c.call(i,r,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=Tl(c)),g)g(this,e,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Xr.lastIndex=0,Xr.test(u)||(p=tn(u),h=tn(c)),h?p!==h&&(u=Qr(e,_,u,h)+h):p&&(c+=p),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Wt(u)&&~u.indexOf("random(")&&(u=Tl(u)),tn(u+"")||u==="auto"||(u+=Wn.units[_]||tn(Zi(e,_))||""),(u+"").charAt(1)==="="&&(u=Zi(e,_))):u=Zi(e,_),d=parseFloat(u),v=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in Ui&&(_==="autoAlpha"&&(d===1&&Zi(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),Ur(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ui[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in fr,x){if(this.styles.save(_),y||(A=e._gsap,A.renderTransform&&!n.parseTransform||Cl(e,n.parseTransform),w=n.smoothOrigin!==!1&&A.smooth,y=this._pt=new Rn(this._pt,a,yt,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new Rn(this._pt,A,"scaleY",A.scaleY,(v?Bo(A.scaleY,v+f):f)-A.scaleY||0,Bp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Cn,0,a[Cn]),c=LD(c),A.svg?Vp(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==A.zOrigin&&Ur(this,A,"zOrigin",A.zOrigin,h),Ur(this,a,_,kc(u),kc(c)));continue}else if(_==="svgOrigin"){Vp(e,c,1,w,0,this);continue}else if(_ in VE){ND(this,A,_,d,v?Bo(d,v+c):c);continue}else if(_==="smoothOrigin"){Ur(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){OD(this,c,e);continue}}else _ in a||(_=sa(_)||_);if(x||(f||f===0)&&(d||d===0)&&!gD.test(c)&&_ in a)p=(u+"").substr((d+"").length),f||(f=0),h=tn(c)||(_ in Wn.units?Wn.units[_]:p),p!==h&&(d=Qr(e,_,u,h)),this._pt=new Rn(this._pt,x?A:a,_,d,(v?Bo(d,v+f):f)-d,!x&&(h==="px"||_==="zIndex")&&n.autoRound!==!1?yD:Bp),this._pt.u=h||0,p!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=xD);else if(_ in a)bD.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){f_(_,c);continue}x||(_ in a?C.push(_,0,a[_]):C.push(_,1,u||e[_])),o.push(_)}}E&&IE(this)},render:function(e,n){if(n.tween._time||!S_())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:Zi,aliases:Ui,getSetter:function(e,n,i){var r=Ui[n];return r&&r.indexOf(",")<0&&(n=r),n in fr&&n!==Cn&&(e._gsap.x||Zi(e,"x"))?i&&gv===i?n==="scale"?TD:MD:(gv=i||{})&&(n==="scale"?wD:AD):e.style&&!l_(e.style[n])?SD:~n.indexOf("-")?ED:v_(e,n)},core:{_removeProperty:zs,_getMatrix:M_}};Ln.utils.checkPrefix=sa;Ln.core.getStyleSaver=kE;(function(t,e,n,i){var r=An(t+","+e+","+n,function(s){fr[s]=1});An(e,function(s){Wn.units[s]="deg",VE[s]=1}),Ui[r[13]]=t+","+e,An(i,function(s){var o=s.split(":");Ui[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Wn.units[t]="px"});Ln.registerPlugin(jE);var XE=Ln.registerPlugin(jE)||Ln;XE.core.Tween;const FD=({toggleSidebar:t,handleZoom:e,cloudTextureUrl:n="src/assets/earthCloud.png",galaxyTextureUrl:i="src/assets/galaxy.png",earthTextureUrl:r="src/assets/2k_earth_daymap.jpg",lightIntensity:s=100,initialCameraPositionZ:o=10,rotationSpeed:a=2e-4,zoomedCameraPositionZ:l=2,starCount:u=3e3})=>{const c=ie.useRef(null),f=ie.useRef(null),d=ie.useRef(null),m=ie.useRef(null),g=ie.useRef(null),_=ie.useRef(null),p=ie.useRef(!1),h=ie.useRef(!1),v=ie.useRef([]);return ie.useEffect(()=>{if(!h.current){const w=c.current,E=new jS,C=new xn(45,window.innerWidth/window.innerHeight,.1,1e3),D=new WS({canvas:w,antialias:!0});f.current=E,d.current=C,m.current=D,C.position.z=o,D.setSize(window.innerWidth,window.innerHeight),D.setPixelRatio(Math.min(window.devicePixelRatio,2));const S=new x2(16777215,.01);E.add(S);const T=new v2(16777215,s);T.position.set(5,3,5),E.add(T);const z=new Ka(.6,32,32),k=new tv().load(r),Y=new J0({map:k,roughness:1,metalness:0,shininess:50,specular:new He("grey"),reflectivity:1}),K=new Hn(z,Y);E.add(K),g.current=K;const N=new Ka(.605,32,32),W=new tv().load(n),b=new J0({map:W,transparent:!0,opacity:.8}),j=new Hn(N,b);E.add(j),_.current=j;const q=new Ka(.04,16,16),Q=new i_({color:16777215});for(let le=0;le<u;le++){const Ae=new Hn(q,Q),B=200;Ae.position.set((Math.random()-.5)*B*2,(Math.random()-.5)*B*2,(Math.random()-.5)*B*2),v.current.push(Ae),E.add(Ae)}h.current=!0}const x=()=>{g.current&&_.current&&m.current&&f.current&&d.current&&(g.current.rotation.y+=a,_.current.rotation.y+=a*.8,m.current.render(f.current,d.current)),requestAnimationFrame(x)};x();const y=()=>{d.current&&m.current&&(d.current.aspect=window.innerWidth/window.innerHeight,d.current.updateProjectionMatrix(),m.current.setSize(window.innerWidth,window.innerHeight))},A=()=>{if(d.current){p.current=!p.current;const w=p.current?l:o;XE.to(d.current.position,{z:w,duration:1,ease:"power2.inOut",onUpdate:()=>e(d.current.position.z),onComplete:t})}};return window.addEventListener("resize",y),c.current.addEventListener("click",A),()=>{window.removeEventListener("resize",y),c.current.removeEventListener("click",A),m.current&&m.current.dispose(),g.current&&(g.current.geometry.dispose(),g.current.material.dispose()),_.current&&(_.current.geometry.dispose(),_.current.material.dispose()),v.current.forEach(w=>{w.geometry.dispose(),w.material.dispose()})}},[t,e,r,n,i,s,o,a,l,u]),Z.jsx("canvas",{ref:c,style:{width:"100%",height:"100%"}})},kD="/assets/sidebar-audio-YOZz1MtX.mp3",BD=({isVisible:t})=>{const[e,n]=ie.useState(null),[i,r]=ie.useState(300),s=ie.useRef(null),o=1e3,a=h=>{let v=0;h.volume=v,h.play();const x=setInterval(()=>{v<1?(v+=.05,h.volume=Math.min(v,1)):clearInterval(x)},o/20)},l=h=>{let v=h.volume;const x=setInterval(()=>{v>0?(v-=.05,h.volume=Math.max(v,0)):(clearInterval(x),h.pause(),h.currentTime=0)},o/20)};ie.useEffect(()=>{const h=s.current;h&&(t?a(h):l(h))},[t]);const u=h=>{if(e!==h)return null;switch(h){case"exoplanet":return Z.jsxs("div",{className:"content",children:[Z.jsx("h2",{children:"🌌 What is an Exoplanet?"}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Definition:"})," An exoplanet is a planet that orbits a star outside our solar system."]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Description:"})," Exoplanets come in a wide variety of sizes, from gas giants larger than Jupiter to small, rocky worlds like Earth. They are of great interest in the search for potential habitable worlds beyond our solar system."]}),Z.jsx("p",{children:Z.jsx("strong",{children:"Related links:"})}),Z.jsxs("ul",{children:[Z.jsx("li",{children:Z.jsx("a",{href:"https://exoplanetarchive.ipac.caltech.edu/",children:"NASA Exoplanet Archive"})}),Z.jsx("li",{children:Z.jsx("a",{href:"https://www.cosmos.esa.int/web/cheops",children:"ESA's Cheops Mission"})}),Z.jsx("li",{children:Z.jsx("a",{href:"https://exoplanetzoo.org/",children:"CSA's Exoplanet Zoo"})})]})]});case"nasa":return Z.jsxs("div",{className:"content",children:[Z.jsx("h2",{children:"🔗 NASA Resources"}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Description:"})," Explore cutting-edge resources from NASA to study exoplanets and celestial bodies."]}),Z.jsxs("ul",{children:[Z.jsxs("li",{children:[Z.jsx("strong",{children:"NASA Exoplanet Archive:"})," A comprehensive catalog of confirmed exoplanets with detailed information about their properties and host stars."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"Gaia DR3 Catalog:"})," A precise three-dimensional database of about one billion stars in our galaxy and beyond."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"Deep Star Maps 2020:"})," Example of a detailed sky map constructed from star catalogs."]})]})]});case"esa":return Z.jsxs("div",{className:"content",children:[Z.jsx("h2",{children:"🔗 ESA Resources"}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Description:"})," Discover European Space Agency tools and datasets for exoplanet research and space exploration."]}),Z.jsxs("ul",{children:[Z.jsxs("li",{children:[Z.jsx("strong",{children:"Hack an Exoplanet:"})," An educational activity allowing access to real-time satellite observation data from ESA's Cheops mission."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"Human and Robotic Exploration Data Archive:"})," A collection of results from ESA-funded experiments across various scientific areas and space platforms."]})]})]});case"csa":return Z.jsxs("div",{className:"content",children:[Z.jsx("h2",{children:"🔗 CSA Resources"}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Description:"})," Access Canadian Space Agency resources for astronomy and exoplanet studies."]}),Z.jsxs("ul",{children:[Z.jsxs("li",{children:[Z.jsx("strong",{children:"Exoplanet Zoo:"})," An exploration of famous exoplanets and their potential habitability."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"Canadian Astronomy Data Centre:"})," A repository of the Government of Canada's astronomy open data."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"NIRISS Exoplanet Data:"})," Example data used to detect potentially habitable exoplanets using the NIRISS instrument on the James Webb Space Telescope."]})]})]});case"data":return Z.jsxs("div",{className:"content",children:[Z.jsx("h2",{children:"📊 Data & Catalogs"}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Description:"})," Find comprehensive databases and catalogs for exoplanet and stellar research."]}),Z.jsxs("ul",{children:[Z.jsxs("li",{children:[Z.jsx("strong",{children:"NASA Exoplanet Archive:"})," Detailed catalog of confirmed exoplanets and their properties."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"Gaia DR3 Catalog:"})," Extensive database of stars in and beyond our galaxy."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"Canadian Astronomy Data Centre:"})," Repository of Canadian astronomy data."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"BRITE Constellation Mission Data:"})," Open light curve data from the BRITE Constellation Mission."]})]})]});case"tutorials":return Z.jsxs("div",{className:"content",children:[Z.jsx("h2",{children:"📚 Tutorials & Educational Activities"}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Description:"})," Learn how to work with exoplanet data through hands-on tutorials and educational resources."]}),Z.jsxs("ul",{children:[Z.jsxs("li",{children:[Z.jsx("strong",{children:"Hack an Exoplanet (ESA):"})," Educational activity using real-time data from ESA's Cheops mission."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"James Webb Space Telescope Tutorial:"})," Guide on how to download and utilize JWST data."]}),Z.jsxs("li",{children:[Z.jsx("strong",{children:"BRITE Constellation Mission Tutorial:"})," Instructions for using open light curve data, which can aid in exoplanet detection."]})]})]});default:return null}},c=h=>{n(v=>v===h?null:h)},f=h=>{h.preventDefault(),document.addEventListener("mousemove",d),document.addEventListener("mouseup",m)},d=h=>{const v=h.clientX;r(v>100?v:100)},m=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",m)},g=h=>{h.preventDefault(),document.addEventListener("touchmove",_),document.addEventListener("touchend",p)},_=h=>{const x=h.touches[0].clientX;r(x>100?x:100)},p=()=>{document.removeEventListener("touchmove",_),document.removeEventListener("touchend",p)};return Z.jsxs("div",{className:`card ${t?"visible":"hidden"}`,style:{width:i},children:[Z.jsx("div",{className:"drag-handle",onMouseDown:f,onTouchStart:g}),Z.jsx("h1",{children:"Bifröst"}),Z.jsxs("ul",{children:[Z.jsxs("li",{children:[Z.jsx("button",{onClick:()=>c("exoplanet"),children:"What is an Exoplanet?"}),u("exoplanet")]}),Z.jsxs("li",{children:[Z.jsx("button",{onClick:()=>c("nasa"),children:"NASA Resources"}),u("nasa")]}),Z.jsxs("li",{children:[Z.jsx("button",{onClick:()=>c("esa"),children:"ESA Resources"}),u("esa")]}),Z.jsxs("li",{children:[Z.jsx("button",{onClick:()=>c("csa"),children:"CSA Resources"}),u("csa")]}),Z.jsxs("li",{children:[Z.jsx("button",{onClick:()=>c("data"),children:"Data & Catalogs"}),u("data")]}),Z.jsxs("li",{children:[Z.jsx("button",{onClick:()=>c("tutorials"),children:"Tutorials & Educational Activities"}),u("tutorials")]})]}),Z.jsx("audio",{ref:s,src:kD,loop:!0})]})},zD=({label:t,to:e,external:n,...i})=>n?Z.jsx("a",{href:e,...i,target:"_blank",rel:"noopener noreferrer",children:t}):Z.jsx(Kw,{to:e,className:"button",...i,children:t}),HD=({isVisible:t})=>Z.jsx("div",{className:"overlay-title",style:{opacity:t?1:0},children:Z.jsx("h3",{children:"Bifröst"})}),VD=()=>{const[t,e]=ie.useState(!1),[n,i]=ie.useState(!0),[r,s]=ie.useState(!1),o=()=>{e(l=>!l)},a=l=>{i(l>6)};return ie.useEffect(()=>{if(t){const l=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(l),s(!1)}}else s(!1)},[t]),Z.jsxs("div",{className:"homePage",children:[Z.jsx(FD,{toggleSidebar:o,handleZoom:a}),Z.jsx(HD,{isVisible:n}),Z.jsx(BD,{isVisible:t}),r&&Z.jsx(zD,{to:"/exoskyview",label:"Sky View 🚀"})]})},GD={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class mf{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const WD=new kS(-1,1,1,-1,0,1);class jD extends ci{constructor(){super(),this.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ai([0,2,0,0,2,0],2))}}const XD=new jD;class YD{constructor(e){this._mesh=new Hn(XD,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,WD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class qD extends mf{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Bi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=IS.clone(e.uniforms),this.material=new Bi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new YD(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wv extends mf{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class $D extends mf{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class KD{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new be);this._width=i.width,this._height=i.height,n=new Kr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ca}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qD(GD),this.copyPass.material.blending=rr,this.clock=new y2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wv!==void 0&&(o instanceof wv?i=!0:o instanceof $D&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ZD extends mf{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Av={type:"change"},T_={type:"start"},YE={type:"end"},Lu=new uf,Rv=new Tr,QD=Math.cos(70*tR.DEG2RAD),Nt=new F,gn=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kh=1e-6;class JD extends E2{constructor(e,n=null){super(e,n),this.state=rt.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:No.ROTATE,MIDDLE:No.DOLLY,RIGHT:No.PAN},this.touches={ONE:wo.ROTATE,TWO:wo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new ks,this._lastTargetPosition=new F,this._quat=new ks().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lv,this._sphericalDelta=new lv,this._scale=1,this._panOffset=new F,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new F,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tI.bind(this),this._onPointerDown=eI.bind(this),this._onPointerUp=nI.bind(this),this._onContextMenu=uI.bind(this),this._onMouseWheel=sI.bind(this),this._onKeyDown=oI.bind(this),this._onTouchStart=aI.bind(this),this._onTouchMove=lI.bind(this),this._onMouseDown=iI.bind(this),this._onMouseMove=rI.bind(this),this._interceptControlDown=cI.bind(this),this._interceptControlUp=fI.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Av),this.update(),this.state=rt.NONE}update(e=null){const n=this.object.position;Nt.copy(n).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),r<-Math.PI?r+=gn:r>Math.PI&&(r-=gn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new F(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lu.origin.copy(this.object.position),Lu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lu.direction))<QD?this.object.lookAt(this.target):(Rv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lu.intersectPlane(Rv,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kh||this._lastTargetPosition.distanceToSquared(this.target)>kh?(this.dispatchEvent(Av),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Nt.setFromMatrixColumn(n,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,n){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(n,1):(Nt.setFromMatrixColumn(n,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Nt.copy(r).sub(this.target);let s=Nt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function eI(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function tI(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function nI(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(YE),this.state=rt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function iI(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case No.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=rt.DOLLY;break;case No.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=rt.ROTATE}break;case No.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(T_)}function rI(t){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function sI(t){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(t.preventDefault(),this.dispatchEvent(T_),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(YE))}function oI(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function aI(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case wo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=rt.TOUCH_ROTATE;break;case wo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case wo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=rt.TOUCH_DOLLY_PAN;break;case wo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(T_)}function lI(t){switch(this._trackPointer(t),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=rt.NONE}}function uI(t){this.enabled!==!1&&t.preventDefault()}function cI(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fI(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qE(t,e){return function(){return t.apply(e,arguments)}}const{toString:hI}=Object.prototype,{getPrototypeOf:w_}=Object,_f=(t=>e=>{const n=hI.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ai=t=>(t=t.toLowerCase(),e=>_f(e)===t),gf=t=>e=>typeof e===t,{isArray:pa}=Array,Pl=gf("undefined");function dI(t){return t!==null&&!Pl(t)&&t.constructor!==null&&!Pl(t.constructor)&&jn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const $E=Ai("ArrayBuffer");function pI(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&$E(t.buffer),e}const mI=gf("string"),jn=gf("function"),KE=gf("number"),vf=t=>t!==null&&typeof t=="object",_I=t=>t===!0||t===!1,ec=t=>{if(_f(t)!=="object")return!1;const e=w_(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},gI=Ai("Date"),vI=Ai("File"),xI=Ai("Blob"),yI=Ai("FileList"),SI=t=>vf(t)&&jn(t.pipe),EI=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||jn(t.append)&&((e=_f(t))==="formdata"||e==="object"&&jn(t.toString)&&t.toString()==="[object FormData]"))},MI=Ai("URLSearchParams"),[TI,wI,AI,RI]=["ReadableStream","Request","Response","Headers"].map(Ai),CI=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),pa(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function ZE(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,QE=t=>!Pl(t)&&t!==Ts;function Gp(){const{caseless:t}=QE(this)&&this||{},e={},n=(i,r)=>{const s=t&&ZE(e,r)||r;ec(e[s])&&ec(i)?e[s]=Gp(e[s],i):ec(i)?e[s]=Gp({},i):pa(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Bl(arguments[i],n);return e}const PI=(t,e,n,{allOwnKeys:i}={})=>(Bl(e,(r,s)=>{n&&jn(r)?t[s]=qE(r,n):t[s]=r},{allOwnKeys:i}),t),bI=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),LI=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},DI=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&w_(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},II=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},UI=t=>{if(!t)return null;if(pa(t))return t;let e=t.length;if(!KE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},NI=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&w_(Uint8Array)),OI=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},FI=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},kI=Ai("HTMLFormElement"),BI=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Cv=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),zI=Ai("RegExp"),JE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Bl(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},HI=t=>{JE(t,(e,n)=>{if(jn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(jn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},VI=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return pa(t)?i(t):i(String(t).split(e)),n},GI=()=>{},WI=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Bh="abcdefghijklmnopqrstuvwxyz",Pv="0123456789",eM={DIGIT:Pv,ALPHA:Bh,ALPHA_DIGIT:Bh+Bh.toUpperCase()+Pv},jI=(t=16,e=eM.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function XI(t){return!!(t&&jn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const YI=t=>{const e=new Array(10),n=(i,r)=>{if(vf(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=pa(i)?[]:{};return Bl(i,(o,a)=>{const l=n(o,r+1);!Pl(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},qI=Ai("AsyncFunction"),$I=t=>t&&(vf(t)||jn(t))&&jn(t.then)&&jn(t.catch),tM=((t,e)=>t?setImmediate:e?((n,i)=>(Ts.addEventListener("message",({source:r,data:s})=>{r===Ts&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Ts.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",jn(Ts.postMessage)),KI=typeof queueMicrotask<"u"?queueMicrotask.bind(Ts):typeof process<"u"&&process.nextTick||tM,X={isArray:pa,isArrayBuffer:$E,isBuffer:dI,isFormData:EI,isArrayBufferView:pI,isString:mI,isNumber:KE,isBoolean:_I,isObject:vf,isPlainObject:ec,isReadableStream:TI,isRequest:wI,isResponse:AI,isHeaders:RI,isUndefined:Pl,isDate:gI,isFile:vI,isBlob:xI,isRegExp:zI,isFunction:jn,isStream:SI,isURLSearchParams:MI,isTypedArray:NI,isFileList:yI,forEach:Bl,merge:Gp,extend:PI,trim:CI,stripBOM:bI,inherits:LI,toFlatObject:DI,kindOf:_f,kindOfTest:Ai,endsWith:II,toArray:UI,forEachEntry:OI,matchAll:FI,isHTMLForm:kI,hasOwnProperty:Cv,hasOwnProp:Cv,reduceDescriptors:JE,freezeMethods:HI,toObjectSet:VI,toCamelCase:BI,noop:GI,toFiniteNumber:WI,findKey:ZE,global:Ts,isContextDefined:QE,ALPHABET:eM,generateString:jI,isSpecCompliantForm:XI,toJSONObject:YI,isAsyncFn:qI,isThenable:$I,setImmediate:tM,asap:KI};function Fe(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}X.inherits(Fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.status}}});const nM=Fe.prototype,iM={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{iM[t]={value:t}});Object.defineProperties(Fe,iM);Object.defineProperty(nM,"isAxiosError",{value:!0});Fe.from=(t,e,n,i,r,s)=>{const o=Object.create(nM);return X.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Fe.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const ZI=null;function Wp(t){return X.isPlainObject(t)||X.isArray(t)}function rM(t){return X.endsWith(t,"[]")?t.slice(0,-2):t}function bv(t,e,n){return t?t.concat(e).map(function(r,s){return r=rM(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function QI(t){return X.isArray(t)&&!t.some(Wp)}const JI=X.toFlatObject(X,{},null,function(e){return/^is[A-Z]/.test(e)});function xf(t,e,n){if(!X.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=X.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!X.isUndefined(p[_])});const i=n.metaTokens,r=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&X.isSpecCompliantForm(e);if(!X.isFunction(r))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(X.isDate(g))return g.toISOString();if(!l&&X.isBlob(g))throw new Fe("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(g)||X.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,_,p){let h=g;if(g&&!p&&typeof g=="object"){if(X.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(X.isArray(g)&&QI(g)||(X.isFileList(g)||X.endsWith(_,"[]"))&&(h=X.toArray(g)))return _=rM(_),h.forEach(function(x,y){!(X.isUndefined(x)||x===null)&&e.append(o===!0?bv([_],y,s):o===null?_:_+"[]",u(x))}),!1}return Wp(g)?!0:(e.append(bv(p,_,s),u(g)),!1)}const f=[],d=Object.assign(JI,{defaultVisitor:c,convertValue:u,isVisitable:Wp});function m(g,_){if(!X.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(g),X.forEach(g,function(h,v){(!(X.isUndefined(h)||h===null)&&r.call(e,h,X.isString(v)?v.trim():v,_,d))===!0&&m(h,_?_.concat(v):[v])}),f.pop()}}if(!X.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Lv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function A_(t,e){this._pairs=[],t&&xf(t,this,e)}const sM=A_.prototype;sM.append=function(e,n){this._pairs.push([e,n])};sM.toString=function(e){const n=e?function(i){return e.call(this,i,Lv)}:Lv;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function eU(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oM(t,e,n){if(!e)return t;const i=n&&n.encode||eU,r=n&&n.serialize;let s;if(r?s=r(e,n):s=X.isURLSearchParams(e)?e.toString():new A_(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Dv{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){X.forEach(this.handlers,function(i){i!==null&&e(i)})}}const aM={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tU=typeof URLSearchParams<"u"?URLSearchParams:A_,nU=typeof FormData<"u"?FormData:null,iU=typeof Blob<"u"?Blob:null,rU={isBrowser:!0,classes:{URLSearchParams:tU,FormData:nU,Blob:iU},protocols:["http","https","file","blob","url","data"]},R_=typeof window<"u"&&typeof document<"u",jp=typeof navigator=="object"&&navigator||void 0,sU=R_&&(!jp||["ReactNative","NativeScript","NS"].indexOf(jp.product)<0),oU=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",aU=R_&&window.location.href||"http://localhost",lU=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:R_,hasStandardBrowserEnv:sU,hasStandardBrowserWebWorkerEnv:oU,navigator:jp,origin:aU},Symbol.toStringTag,{value:"Module"})),Pn={...lU,...rU};function uU(t,e){return xf(t,new Pn.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Pn.isNode&&X.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function cU(t){return X.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function fU(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function lM(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&X.isArray(r)?r.length:o,l?(X.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!X.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&X.isArray(r[o])&&(r[o]=fU(r[o])),!a)}if(X.isFormData(t)&&X.isFunction(t.entries)){const n={};return X.forEachEntry(t,(i,r)=>{e(cU(i),r,n,0)}),n}return null}function hU(t,e,n){if(X.isString(t))try{return(e||JSON.parse)(t),X.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(0,JSON.stringify)(t)}const zl={transitional:aM,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=X.isObject(e);if(s&&X.isHTMLForm(e)&&(e=new FormData(e)),X.isFormData(e))return r?JSON.stringify(lM(e)):e;if(X.isArrayBuffer(e)||X.isBuffer(e)||X.isStream(e)||X.isFile(e)||X.isBlob(e)||X.isReadableStream(e))return e;if(X.isArrayBufferView(e))return e.buffer;if(X.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return uU(e,this.formSerializer).toString();if((a=X.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return xf(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),hU(e)):e}],transformResponse:[function(e){const n=this.transitional||zl.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(X.isResponse(e)||X.isReadableStream(e))return e;if(e&&X.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Fe.from(a,Fe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pn.classes.FormData,Blob:Pn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch"],t=>{zl.headers[t]={}});const dU=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pU=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&dU[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Iv=Symbol("internals");function La(t){return t&&String(t).trim().toLowerCase()}function tc(t){return t===!1||t==null?t:X.isArray(t)?t.map(tc):String(t)}function mU(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const _U=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function zh(t,e,n,i,r){if(X.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!X.isString(e)){if(X.isString(i))return e.indexOf(i)!==-1;if(X.isRegExp(i))return i.test(e)}}function gU(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function vU(t,e){const n=X.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class bn{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,u){const c=La(l);if(!c)throw new Error("header name must be a non-empty string");const f=X.findKey(r,c);(!f||r[f]===void 0||u===!0||u===void 0&&r[f]!==!1)&&(r[f||l]=tc(a))}const o=(a,l)=>X.forEach(a,(u,c)=>s(u,c,l));if(X.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(X.isString(e)&&(e=e.trim())&&!_U(e))o(pU(e),n);else if(X.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=La(e),e){const i=X.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return mU(r);if(X.isFunction(n))return n.call(this,r,i);if(X.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=La(e),e){const i=X.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||zh(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=La(o),o){const a=X.findKey(i,o);a&&(!n||zh(i,i[a],a,n))&&(delete i[a],r=!0)}}return X.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||zh(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return X.forEach(this,(r,s)=>{const o=X.findKey(i,s);if(o){n[o]=tc(r),delete n[s];return}const a=e?gU(s):String(s).trim();a!==s&&delete n[s],n[a]=tc(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return X.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&X.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Iv]=this[Iv]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=La(o);i[a]||(vU(r,o),i[a]=!0)}return X.isArray(e)?e.forEach(s):s(e),this}}bn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);X.reduceDescriptors(bn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});X.freezeMethods(bn);function Hh(t,e){const n=this||zl,i=e||n,r=bn.from(i.headers);let s=i.data;return X.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function uM(t){return!!(t&&t.__CANCEL__)}function ma(t,e,n){Fe.call(this,t??"canceled",Fe.ERR_CANCELED,e,n),this.name="CanceledError"}X.inherits(ma,Fe,{__CANCEL__:!0});function cM(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Fe("Request failed with status code "+n.status,[Fe.ERR_BAD_REQUEST,Fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function xU(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function yU(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=i[s];o||(o=u),n[r]=l,i[r]=u;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),u-o<e)return;const m=c&&u-c;return m?Math.round(d*1e3/m):void 0}}function SU(t,e){let n=0,i=1e3/e,r,s;const o=(u,c=Date.now())=>{n=c,r=null,s&&(clearTimeout(s),s=null),t.apply(null,u)};return[(...u)=>{const c=Date.now(),f=c-n;f>=i?o(u,c):(r=u,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Bc=(t,e,n=3)=>{let i=0;const r=yU(50,250);return SU(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,u=r(l),c=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-o)/u:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Uv=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Nv=t=>(...e)=>X.asap(()=>t(...e)),EU=Pn.hasStandardBrowserEnv?function(){const e=Pn.navigator&&/(msie|trident)/i.test(Pn.navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=X.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}(),MU=Pn.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];X.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),X.isString(i)&&o.push("path="+i),X.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function TU(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function wU(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function fM(t,e){return t&&!TU(e)?wU(t,e):e}const Ov=t=>t instanceof bn?{...t}:t;function Hs(t,e){e=e||{};const n={};function i(u,c,f){return X.isPlainObject(u)&&X.isPlainObject(c)?X.merge.call({caseless:f},u,c):X.isPlainObject(c)?X.merge({},c):X.isArray(c)?c.slice():c}function r(u,c,f){if(X.isUndefined(c)){if(!X.isUndefined(u))return i(void 0,u,f)}else return i(u,c,f)}function s(u,c){if(!X.isUndefined(c))return i(void 0,c)}function o(u,c){if(X.isUndefined(c)){if(!X.isUndefined(u))return i(void 0,u)}else return i(void 0,c)}function a(u,c,f){if(f in e)return i(u,c);if(f in t)return i(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>r(Ov(u),Ov(c),!0)};return X.forEach(Object.keys(Object.assign({},t,e)),function(c){const f=l[c]||r,d=f(t[c],e[c],c);X.isUndefined(d)&&f!==a||(n[c]=d)}),n}const hM=t=>{const e=Hs({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=bn.from(o),e.url=oM(fM(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(X.isFormData(n)){if(Pn.hasStandardBrowserEnv||Pn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...c]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...c].join("; "))}}if(Pn.hasStandardBrowserEnv&&(i&&X.isFunction(i)&&(i=i(e)),i||i!==!1&&EU(e.url))){const u=r&&s&&MU.read(s);u&&o.set(r,u)}return e},AU=typeof XMLHttpRequest<"u",RU=AU&&function(t){return new Promise(function(n,i){const r=hM(t);let s=r.data;const o=bn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=r,c,f,d,m,g;function _(){m&&m(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(c),r.signal&&r.signal.removeEventListener("abort",c)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function h(){if(!p)return;const x=bn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:x,config:t,request:p};cM(function(E){n(E),_()},function(E){i(E),_()},A),p=null}"onloadend"in p?p.onloadend=h:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(h)},p.onabort=function(){p&&(i(new Fe("Request aborted",Fe.ECONNABORTED,t,p)),p=null)},p.onerror=function(){i(new Fe("Network Error",Fe.ERR_NETWORK,t,p)),p=null},p.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const A=r.transitional||aM;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new Fe(y,A.clarifyTimeoutError?Fe.ETIMEDOUT:Fe.ECONNABORTED,t,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&X.forEach(o.toJSON(),function(y,A){p.setRequestHeader(A,y)}),X.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),u&&([d,g]=Bc(u,!0),p.addEventListener("progress",d)),l&&p.upload&&([f,m]=Bc(l),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(c=x=>{p&&(i(!x||x.type?new ma(null,t,p):x),p.abort(),p=null)},r.cancelToken&&r.cancelToken.subscribe(c),r.signal&&(r.signal.aborted?c():r.signal.addEventListener("abort",c)));const v=xU(r.url);if(v&&Pn.protocols.indexOf(v)===-1){i(new Fe("Unsupported protocol "+v+":",Fe.ERR_BAD_REQUEST,t));return}p.send(s||null)})},CU=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(u){if(!r){r=!0,a();const c=u instanceof Error?u:this.reason;i.abort(c instanceof Fe?c:new ma(c instanceof Error?c.message:c))}};let o=e&&setTimeout(()=>{o=null,s(new Fe(`timeout ${e} of ms exceeded`,Fe.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),t=null)};t.forEach(u=>u.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>X.asap(a),l}},PU=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},bU=async function*(t,e){for await(const n of LU(t))yield*PU(n,e)},LU=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Fv=(t,e,n,i)=>{const r=bU(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await r.next();if(u){a(),l.close();return}let f=c.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},yf=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",dM=yf&&typeof ReadableStream=="function",DU=yf&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),pM=(t,...e)=>{try{return!!t(...e)}catch{return!1}},IU=dM&&pM(()=>{let t=!1;const e=new Request(Pn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),kv=64*1024,Xp=dM&&pM(()=>X.isReadableStream(new Response("").body)),zc={stream:Xp&&(t=>t.body)};yf&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!zc[e]&&(zc[e]=X.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Fe(`Response type '${e}' is not supported`,Fe.ERR_NOT_SUPPORT,i)})})})(new Response);const UU=async t=>{if(t==null)return 0;if(X.isBlob(t))return t.size;if(X.isSpecCompliantForm(t))return(await new Request(Pn.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(X.isArrayBufferView(t)||X.isArrayBuffer(t))return t.byteLength;if(X.isURLSearchParams(t)&&(t=t+""),X.isString(t))return(await DU(t)).byteLength},NU=async(t,e)=>{const n=X.toFiniteNumber(t.getContentLength());return n??UU(e)},OU=yf&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:f="same-origin",fetchOptions:d}=hM(t);u=u?(u+"").toLowerCase():"text";let m=CU([r,s&&s.toAbortSignal()],o),g;const _=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let p;try{if(l&&IU&&n!=="get"&&n!=="head"&&(p=await NU(c,i))!==0){let A=new Request(e,{method:"POST",body:i,duplex:"half"}),w;if(X.isFormData(i)&&(w=A.headers.get("content-type"))&&c.setContentType(w),A.body){const[E,C]=Uv(p,Bc(Nv(l)));i=Fv(A.body,kv,E,C)}}X.isString(f)||(f=f?"include":"omit");const h="credentials"in Request.prototype;g=new Request(e,{...d,signal:m,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:i,duplex:"half",credentials:h?f:void 0});let v=await fetch(g);const x=Xp&&(u==="stream"||u==="response");if(Xp&&(a||x&&_)){const A={};["status","statusText","headers"].forEach(D=>{A[D]=v[D]});const w=X.toFiniteNumber(v.headers.get("content-length")),[E,C]=a&&Uv(w,Bc(Nv(a),!0))||[];v=new Response(Fv(v.body,kv,E,()=>{C&&C(),_&&_()}),A)}u=u||"text";let y=await zc[X.findKey(zc,u)||"text"](v,t);return!x&&_&&_(),await new Promise((A,w)=>{cM(A,w,{data:y,headers:bn.from(v.headers),status:v.status,statusText:v.statusText,config:t,request:g})})}catch(h){throw _&&_(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new Fe("Network Error",Fe.ERR_NETWORK,t,g),{cause:h.cause||h}):Fe.from(h,h&&h.code,t,g)}}),Yp={http:ZI,xhr:RU,fetch:OU};X.forEach(Yp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Bv=t=>`- ${t}`,FU=t=>X.isFunction(t)||t===null||t===!1,mM={getAdapter:t=>{t=X.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!FU(n)&&(i=Yp[(o=String(n)).toLowerCase()],i===void 0))throw new Fe(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Bv).join(`
`):" "+Bv(s[0]):"as no adapter specified";throw new Fe("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Yp};function Vh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ma(null,t)}function zv(t){return Vh(t),t.headers=bn.from(t.headers),t.data=Hh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),mM.getAdapter(t.adapter||zl.adapter)(t).then(function(i){return Vh(t),i.data=Hh.call(t,t.transformResponse,i),i.headers=bn.from(i.headers),i},function(i){return uM(i)||(Vh(t),i&&i.response&&(i.response.data=Hh.call(t,t.transformResponse,i.response),i.response.headers=bn.from(i.response.headers))),Promise.reject(i)})}const _M="1.7.7",C_={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{C_[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Hv={};C_.transitional=function(e,n,i){function r(s,o){return"[Axios v"+_M+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Fe(r(o," has been removed"+(n?" in "+n:"")),Fe.ERR_DEPRECATED);return n&&!Hv[o]&&(Hv[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function kU(t,e,n){if(typeof t!="object")throw new Fe("options must be an object",Fe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Fe("option "+s+" must be "+l,Fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Fe("Unknown option "+s,Fe.ERR_BAD_OPTION)}}const qp={assertOptions:kU,validators:C_},Sr=qp.validators;class Ls{constructor(e){this.defaults=e,this.interceptors={request:new Dv,response:new Dv}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Hs(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&qp.assertOptions(i,{silentJSONParsing:Sr.transitional(Sr.boolean),forcedJSONParsing:Sr.transitional(Sr.boolean),clarifyTimeoutError:Sr.transitional(Sr.boolean)},!1),r!=null&&(X.isFunction(r)?n.paramsSerializer={serialize:r}:qp.assertOptions(r,{encode:Sr.function,serialize:Sr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&X.merge(s.common,s[n.method]);s&&X.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=bn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const u=[];this.interceptors.response.forEach(function(_){u.push(_.fulfilled,_.rejected)});let c,f=0,d;if(!l){const g=[zv.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),d=g.length,c=Promise.resolve(n);f<d;)c=c.then(g[f++],g[f++]);return c}d=a.length;let m=n;for(f=0;f<d;){const g=a[f++],_=a[f++];try{m=g(m)}catch(p){_.call(this,p);break}}try{c=zv.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,d=u.length;f<d;)c=c.then(u[f++],u[f++]);return c}getUri(e){e=Hs(this.defaults,e);const n=fM(e.baseURL,e.url);return oM(n,e.params,e.paramsSerializer)}}X.forEach(["delete","get","head","options"],function(e){Ls.prototype[e]=function(n,i){return this.request(Hs(i||{},{method:e,url:n,data:(i||{}).data}))}});X.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Hs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ls.prototype[e]=n(),Ls.prototype[e+"Form"]=n(!0)});class P_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new ma(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new P_(function(r){e=r}),cancel:e}}}function BU(t){return function(n){return t.apply(null,n)}}function zU(t){return X.isObject(t)&&t.isAxiosError===!0}const $p={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($p).forEach(([t,e])=>{$p[e]=t});function gM(t){const e=new Ls(t),n=qE(Ls.prototype.request,e);return X.extend(n,Ls.prototype,e,{allOwnKeys:!0}),X.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return gM(Hs(t,r))},n}const At=gM(zl);At.Axios=Ls;At.CanceledError=ma;At.CancelToken=P_;At.isCancel=uM;At.VERSION=_M;At.toFormData=xf;At.AxiosError=Fe;At.Cancel=At.CanceledError;At.all=function(e){return Promise.all(e)};At.spread=BU;At.isAxiosError=zU;At.mergeConfig=Hs;At.AxiosHeaders=bn;At.formToJSON=t=>lM(X.isHTMLForm(t)?new FormData(t):t);At.getAdapter=mM.getAdapter;At.HttpStatusCode=$p;At.default=At;function HU(){const t=ie.useRef(null),e=ie.useRef(null),n=ie.useRef(),i=ie.useRef(),r=new S2,s=new be,[o,a]=ie.useState(null),[l,u]=ie.useState(null),[c,f]=ie.useState(!0),[d,m]=ie.useState(!0),[g,_]=ie.useState(!0),p=ie.useRef(),[h,v]=ie.useState(5);var x=60;const y=ie.useRef(null),[A,w]=ie.useState(!1);new OS(128,{generateMipmaps:!0,minFilter:Lr}),ie.useEffect(()=>{const N=async(Ae,B)=>{try{m(!0);const te={index:Ae,view_distance:B},fe=await At.get("http://127.0.0.1:5000/exoview",{params:te});n.current.far=B*100,n.current.updateProjectionMatrix(),a(fe.data)}catch(te){console.error("Error fetching stars data:",te)}finally{m(!1)}},W=async()=>{try{f(!0);const Ae=await At.get("http://127.0.0.1:5000/load_csv",{});u(Ae.data)}catch(Ae){console.error("Error fetching stars data:",Ae)}finally{f(!1)}};N(h,x),W();const b=new jS;e.current=b,n.current=new xn(75,window.innerWidth/window.innerHeight,1,1e4),n.current.position.z=.1,b.add(y),i.current=new WS({antialias:!0}),i.current.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(i.current.domElement);const j=new ZD(b,n.current),q=new KD(i.current);q.addPass(j);const Q=new JD(n.current,i.current.domElement);Q.minZoom=1,Q.enableDamping=!0,Q.dampingFactor=.05,Q.rotateSpeed=-.25;function le(){requestAnimationFrame(le),Q.update(),q.render()}return le(),()=>{t.current.removeChild(i.current.domElement)}},[]);const E=()=>{console.log("Stars data:",o);const N=e.current.children.find(B=>B.type==="Points");N&&e.current.remove(N),p.current=new ci;const W=new wp({color:16777215,size:.5,sizeAttenuation:!0}),b=Object.values(o.x),j=Object.values(o.y),q=Object.values(o.z);console.log("xArray:",b),console.log("yArray:",j),console.log("zArray:",q);const Q=Math.min(b.length,j.length,q.length),le=new Float32Array(Q*3);console.log("Length:",Q);for(let B=0;B<Q;B++)le[B*3]=b[B]||0,le[B*3+1]=j[B]||0,le[B*3+2]=q[B]||0;console.log("Flattened array:",le),p.current.setAttribute("position",new oi(le,3));const Ae=new Z0(p.current,W);e.current.add(Ae)};ie.useEffect(()=>{o&&e.current&&(console.log("Stars data:",o),E())},[o]);const C=()=>{const N=e.current.children.find(B=>B.type==="Points");N&&e.current.remove(N),p.current=new ci;const W=new wp({color:16777215,size:.5,sizeAttenuation:!0}),b=Object.values(l.x),j=Object.values(l.y),q=Object.values(l.z);console.log("xArray:",b),console.log("yArray:",j),console.log("zArray:",q);const Q=Math.min(b.length,j.length,q.length),le=new Float32Array(Q*3);console.log("Length:",Q);for(let B=0;B<Q;B++)le[B*3]=b[B]||0,le[B*3+1]=j[B]||0,le[B*3+2]=q[B]||0;console.log("Flattened array:",le),p.current.setAttribute("position",new oi(le,3));const Ae=new Z0(p.current,W);e.current.add(Ae)};ie.useEffect(()=>{l&&e.current&&(C(),console.log("Stars data:",l))},[l]);const D=N=>{const W=new be;if(W.x=N.clientX/window.innerWidth*2-1,W.y=-(N.clientY/window.innerHeight)*2+1,S(),document.getElementById("planetList").innerHTML="",closestStar&&closestStar.distance<100){const b=[],j=data.hostname[closestStar.index];data.hostname.forEach((q,Q)=>{if(q===j){b.push(data.pl_name[Q]);const le=document.createElement("li");le.textContent=`Planet ${data.pl_name[Q]}`,le.addEventListener("click",()=>{z(data.Index[Q]),console.log(`Planet Index: ${data.Index[Q]}`)}),document.getElementById("planetList").appendChild(le)}}),b.length>0&&(document.getElementById("listContainer").style.display="block",console.log(`Planets: ${b.join(", ")}`))}else console.log("No star clicked"),document.getElementById("listContainer").style.display="none",document.getElementById("planetList").innerHTML=""};function S(){const N=new F;return r.setFromCamera(s,n.current),r.ray.origin.add(r.ray.direction.clone().multiplyScalar(500)),N.copy(r.ray.origin),N}ie.useEffect(()=>(window.addEventListener("click",D),()=>{window.removeEventListener("click",D)}),[l]);const T=()=>{v(0)};function z(N){v(N),k()}const k=()=>{w(N=>!N)};ie.useEffect(()=>{(async(W,b)=>{try{m(!0);const j={index:W,view_distance:b},q=await At.get("http://127.0.0.1:5000/exoview",{params:j});n.current.far=b*100,n.current.updateProjectionMatrix(),a(q.data)}catch(j){console.error("Error fetching stars data:",j)}finally{m(!1)}})(h,x)},[h,x]);const Y=()=>{_(!g),g?E():C()},K=()=>{if(y.current){const N=N.current,W=e.current,b=b.current;y.current.update(N,W),y.current.renderTarget.texture;const j=256,q=256,Q=document.createElement("canvas");Q.width=j,Q.height=q;const le=Q.getContext("2d"),Ae=new Uint8Array(j*q*4);N.readRenderTargetPixels(y.current.renderTarget,0,0,j,q,Ae);const B=new ImageData(new Uint8ClampedArray(Ae),j,q);le.putImageData(B,0,0),window.open().document.body.appendChild(Q)}};return Z.jsxs("div",{style:{position:"relative"},children:[h!==0&&Z.jsx("button",{style:{position:"absolute",zIndex:10,top:"20px",left:"20px",padding:"10px 20px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},onClick:T,children:"Go to Earth View"}),h==0&&Z.jsx("button",{style:{position:"absolute",zIndex:10,top:"20px",right:"20px",padding:"10px 20px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},onClick:Y,children:"Toggle View"}),Z.jsx("button",{style:{position:"absolute",zIndex:10,bottom:"20px",left:"20px",padding:"10px 20px",backgroundColor:"#3498db",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},onClick:K,children:"Print"}),Z.jsx("div",{style:{position:"absolute",zIndex:10,bottom:"20px",right:"20px",maxHeight:"300px",overflowY:"auto",backgroundColor:"rgba(255, 255, 255, 0.1)",border:"2px solid white",borderRadius:"8px",padding:"10px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)"},children:Z.jsx("ul",{style:{padding:"5px 0",cursor:"pointer",color:"white"},children:l&&l.pl_name&&Z.jsx("ul",{children:Object.keys(l.pl_name).map(N=>Z.jsxs("li",{onClick:()=>z(l.Index[N]),children:[l.pl_name[N]," "]},N))})})}),Z.jsx("div",{ref:t}),d&&Z.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",padding:"20px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Z.jsx("div",{className:"spinner",style:{border:"4px solid #f3f3f3",borderTop:"4px solid #3498db",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),Z.jsx("p",{style:{marginTop:"10px"},children:"Fetching data..."})]}),Z.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]})}function VU(){return Z.jsx(Yw,{children:Z.jsxs(zw,{children:[Z.jsx(Od,{path:"/",element:Z.jsx(VD,{})}),Z.jsx(Od,{path:"/exoskyview",element:Z.jsx(HU,{})})]})})}eS(document.getElementById("root")).render(Z.jsx(ie.StrictMode,{children:Z.jsx(VU,{})}));
