(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))m(q);new MutationObserver(q=>{for(const X of q)if(X.type==="childList")for(const L of X.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&m(L)}).observe(document,{childList:!0,subtree:!0});function j(q){const X={};return q.integrity&&(X.integrity=q.integrity),q.referrerPolicy&&(X.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?X.credentials="include":q.crossOrigin==="anonymous"?X.credentials="omit":X.credentials="same-origin",X}function m(q){if(q.ep)return;q.ep=!0;const X=j(q);fetch(q.href,X)}})();var no={exports:{}},bn={};var pd;function $h(){if(pd)return bn;pd=1;var A=Symbol.for("react.transitional.element"),R=Symbol.for("react.fragment");function j(m,q,X){var L=null;if(X!==void 0&&(L=""+X),q.key!==void 0&&(L=""+q.key),"key"in q){X={};for(var Q in q)Q!=="key"&&(X[Q]=q[Q])}else X=q;return q=X.ref,{$$typeof:A,type:m,key:L,ref:q!==void 0?q:null,props:X}}return bn.Fragment=R,bn.jsx=j,bn.jsxs=j,bn}var vd;function Fh(){return vd||(vd=1,no.exports=$h()),no.exports}var z=Fh(),uo={exports:{}},Y={};var gd;function Ih(){if(gd)return Y;gd=1;var A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),F=Symbol.iterator;function Rt(s){return s===null||typeof s!="object"?null:(s=F&&s[F]||s["@@iterator"],typeof s=="function"?s:null)}var Gt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ht=Object.assign,Ne={};function Wt(s,E,x){this.props=s,this.context=E,this.refs=Ne,this.updater=x||Gt}Wt.prototype.isReactComponent={},Wt.prototype.setState=function(s,E){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,E,"setState")},Wt.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function ke(){}ke.prototype=Wt.prototype;function _t(s,E,x){this.props=s,this.context=E,this.refs=Ne,this.updater=x||Gt}var ie=_t.prototype=new ke;ie.constructor=_t,Ht(ie,Wt.prototype),ie.isPureReactComponent=!0;var Te=Array.isArray;function Lt(){}var I={H:null,A:null,T:null,S:null},Yt=Object.prototype.hasOwnProperty;function Ee(s,E,x){var O=x.ref;return{$$typeof:A,type:s,key:E,ref:O!==void 0?O:null,props:x}}function Xl(s,E){return Ee(s.type,E,s.props)}function Ae(s){return typeof s=="object"&&s!==null&&s.$$typeof===A}function Xt(s){var E={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(x){return E[x]})}var Tl=/\/+/g;function Oe(s,E){return typeof s=="object"&&s!==null&&s.key!=null?Xt(""+s.key):E.toString(36)}function ve(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Lt,Lt):(s.status="pending",s.then(function(E){s.status==="pending"&&(s.status="fulfilled",s.value=E)},function(E){s.status==="pending"&&(s.status="rejected",s.reason=E)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function S(s,E,x,O,Z){var K=typeof s;(K==="undefined"||K==="boolean")&&(s=null);var at=!1;if(s===null)at=!0;else switch(K){case"bigint":case"string":case"number":at=!0;break;case"object":switch(s.$$typeof){case A:case R:at=!0;break;case B:return at=s._init,S(at(s._payload),E,x,O,Z)}}if(at)return Z=Z(s),at=O===""?"."+Oe(s,0):O,Te(Z)?(x="",at!=null&&(x=at.replace(Tl,"$&/")+"/"),S(Z,E,x,"",function(Ca){return Ca})):Z!=null&&(Ae(Z)&&(Z=Xl(Z,x+(Z.key==null||s&&s.key===Z.key?"":(""+Z.key).replace(Tl,"$&/")+"/")+at)),E.push(Z)),1;at=0;var qt=O===""?".":O+":";if(Te(s))for(var vt=0;vt<s.length;vt++)O=s[vt],K=qt+Oe(O,vt),at+=S(O,E,x,K,Z);else if(vt=Rt(s),typeof vt=="function")for(s=vt.call(s),vt=0;!(O=s.next()).done;)O=O.value,K=qt+Oe(O,vt++),at+=S(O,E,x,K,Z);else if(K==="object"){if(typeof s.then=="function")return S(ve(s),E,x,O,Z);throw E=String(s),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return at}function C(s,E,x){if(s==null)return s;var O=[],Z=0;return S(s,O,"","",function(K){return E.call(x,K,Z++)}),O}function G(s){if(s._status===-1){var E=s._result;E=E(),E.then(function(x){(s._status===0||s._status===-1)&&(s._status=1,s._result=x)},function(x){(s._status===0||s._status===-1)&&(s._status=2,s._result=x)}),s._status===-1&&(s._status=0,s._result=E)}if(s._status===1)return s._result.default;throw s._result}var it=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},st={map:C,forEach:function(s,E,x){C(s,function(){E.apply(this,arguments)},x)},count:function(s){var E=0;return C(s,function(){E++}),E},toArray:function(s){return C(s,function(E){return E})||[]},only:function(s){if(!Ae(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return Y.Activity=U,Y.Children=st,Y.Component=Wt,Y.Fragment=j,Y.Profiler=q,Y.PureComponent=_t,Y.StrictMode=m,Y.Suspense=D,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,Y.__COMPILER_RUNTIME={__proto__:null,c:function(s){return I.H.useMemoCache(s)}},Y.cache=function(s){return function(){return s.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(s,E,x){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var O=Ht({},s.props),Z=s.key;if(E!=null)for(K in E.key!==void 0&&(Z=""+E.key),E)!Yt.call(E,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&E.ref===void 0||(O[K]=E[K]);var K=arguments.length-2;if(K===1)O.children=x;else if(1<K){for(var at=Array(K),qt=0;qt<K;qt++)at[qt]=arguments[qt+2];O.children=at}return Ee(s.type,Z,O)},Y.createContext=function(s){return s={$$typeof:L,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:X,_context:s},s},Y.createElement=function(s,E,x){var O,Z={},K=null;if(E!=null)for(O in E.key!==void 0&&(K=""+E.key),E)Yt.call(E,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(Z[O]=E[O]);var at=arguments.length-2;if(at===1)Z.children=x;else if(1<at){for(var qt=Array(at),vt=0;vt<at;vt++)qt[vt]=arguments[vt+2];Z.children=qt}if(s&&s.defaultProps)for(O in at=s.defaultProps,at)Z[O]===void 0&&(Z[O]=at[O]);return Ee(s,K,Z)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(s){return{$$typeof:Q,render:s}},Y.isValidElement=Ae,Y.lazy=function(s){return{$$typeof:B,_payload:{_status:-1,_result:s},_init:G}},Y.memo=function(s,E){return{$$typeof:g,type:s,compare:E===void 0?null:E}},Y.startTransition=function(s){var E=I.T,x={};I.T=x;try{var O=s(),Z=I.S;Z!==null&&Z(x,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(Lt,it)}catch(K){it(K)}finally{E!==null&&x.types!==null&&(E.types=x.types),I.T=E}},Y.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},Y.use=function(s){return I.H.use(s)},Y.useActionState=function(s,E,x){return I.H.useActionState(s,E,x)},Y.useCallback=function(s,E){return I.H.useCallback(s,E)},Y.useContext=function(s){return I.H.useContext(s)},Y.useDebugValue=function(){},Y.useDeferredValue=function(s,E){return I.H.useDeferredValue(s,E)},Y.useEffect=function(s,E){return I.H.useEffect(s,E)},Y.useEffectEvent=function(s){return I.H.useEffectEvent(s)},Y.useId=function(){return I.H.useId()},Y.useImperativeHandle=function(s,E,x){return I.H.useImperativeHandle(s,E,x)},Y.useInsertionEffect=function(s,E){return I.H.useInsertionEffect(s,E)},Y.useLayoutEffect=function(s,E){return I.H.useLayoutEffect(s,E)},Y.useMemo=function(s,E){return I.H.useMemo(s,E)},Y.useOptimistic=function(s,E){return I.H.useOptimistic(s,E)},Y.useReducer=function(s,E,x){return I.H.useReducer(s,E,x)},Y.useRef=function(s){return I.H.useRef(s)},Y.useState=function(s){return I.H.useState(s)},Y.useSyncExternalStore=function(s,E,x){return I.H.useSyncExternalStore(s,E,x)},Y.useTransition=function(){return I.H.useTransition()},Y.version="19.2.0",Y}var Sd;function so(){return Sd||(Sd=1,uo.exports=Ih()),uo.exports}var bl=so(),io={exports:{}},Tn={},co={exports:{}},oo={};var bd;function Ph(){return bd||(bd=1,(function(A){function R(S,C){var G=S.length;S.push(C);t:for(;0<G;){var it=G-1>>>1,st=S[it];if(0<q(st,C))S[it]=C,S[G]=st,G=it;else break t}}function j(S){return S.length===0?null:S[0]}function m(S){if(S.length===0)return null;var C=S[0],G=S.pop();if(G!==C){S[0]=G;t:for(var it=0,st=S.length,s=st>>>1;it<s;){var E=2*(it+1)-1,x=S[E],O=E+1,Z=S[O];if(0>q(x,G))O<st&&0>q(Z,x)?(S[it]=Z,S[O]=G,it=O):(S[it]=x,S[E]=G,it=E);else if(O<st&&0>q(Z,G))S[it]=Z,S[O]=G,it=O;else break t}}return C}function q(S,C){var G=S.sortIndex-C.sortIndex;return G!==0?G:S.id-C.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var X=performance;A.unstable_now=function(){return X.now()}}else{var L=Date,Q=L.now();A.unstable_now=function(){return L.now()-Q}}var D=[],g=[],B=1,U=null,F=3,Rt=!1,Gt=!1,Ht=!1,Ne=!1,Wt=typeof setTimeout=="function"?setTimeout:null,ke=typeof clearTimeout=="function"?clearTimeout:null,_t=typeof setImmediate<"u"?setImmediate:null;function ie(S){for(var C=j(g);C!==null;){if(C.callback===null)m(g);else if(C.startTime<=S)m(g),C.sortIndex=C.expirationTime,R(D,C);else break;C=j(g)}}function Te(S){if(Ht=!1,ie(S),!Gt)if(j(D)!==null)Gt=!0,Lt||(Lt=!0,Xt());else{var C=j(g);C!==null&&ve(Te,C.startTime-S)}}var Lt=!1,I=-1,Yt=5,Ee=-1;function Xl(){return Ne?!0:!(A.unstable_now()-Ee<Yt)}function Ae(){if(Ne=!1,Lt){var S=A.unstable_now();Ee=S;var C=!0;try{t:{Gt=!1,Ht&&(Ht=!1,ke(I),I=-1),Rt=!0;var G=F;try{e:{for(ie(S),U=j(D);U!==null&&!(U.expirationTime>S&&Xl());){var it=U.callback;if(typeof it=="function"){U.callback=null,F=U.priorityLevel;var st=it(U.expirationTime<=S);if(S=A.unstable_now(),typeof st=="function"){U.callback=st,ie(S),C=!0;break e}U===j(D)&&m(D),ie(S)}else m(D);U=j(D)}if(U!==null)C=!0;else{var s=j(g);s!==null&&ve(Te,s.startTime-S),C=!1}}break t}finally{U=null,F=G,Rt=!1}C=void 0}}finally{C?Xt():Lt=!1}}}var Xt;if(typeof _t=="function")Xt=function(){_t(Ae)};else if(typeof MessageChannel<"u"){var Tl=new MessageChannel,Oe=Tl.port2;Tl.port1.onmessage=Ae,Xt=function(){Oe.postMessage(null)}}else Xt=function(){Wt(Ae,0)};function ve(S,C){I=Wt(function(){S(A.unstable_now())},C)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(S){S.callback=null},A.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yt=0<S?Math.floor(1e3/S):5},A.unstable_getCurrentPriorityLevel=function(){return F},A.unstable_next=function(S){switch(F){case 1:case 2:case 3:var C=3;break;default:C=F}var G=F;F=C;try{return S()}finally{F=G}},A.unstable_requestPaint=function(){Ne=!0},A.unstable_runWithPriority=function(S,C){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var G=F;F=S;try{return C()}finally{F=G}},A.unstable_scheduleCallback=function(S,C,G){var it=A.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?it+G:it):G=it,S){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=G+st,S={id:B++,callback:C,priorityLevel:S,startTime:G,expirationTime:st,sortIndex:-1},G>it?(S.sortIndex=G,R(g,S),j(D)===null&&S===j(g)&&(Ht?(ke(I),I=-1):Ht=!0,ve(Te,G-it))):(S.sortIndex=st,R(D,S),Gt||Rt||(Gt=!0,Lt||(Lt=!0,Xt()))),S},A.unstable_shouldYield=Xl,A.unstable_wrapCallback=function(S){var C=F;return function(){var G=F;F=C;try{return S.apply(this,arguments)}finally{F=G}}}})(oo)),oo}var Td;function ty(){return Td||(Td=1,co.exports=Ph()),co.exports}var fo={exports:{}},jt={};var Ed;function ey(){if(Ed)return jt;Ed=1;var A=so();function R(D){var g="https://react.dev/errors/"+D;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)g+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+D+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(){}var m={d:{f:j,r:function(){throw Error(R(522))},D:j,C:j,L:j,m:j,X:j,S:j,M:j},p:0,findDOMNode:null},q=Symbol.for("react.portal");function X(D,g,B){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:U==null?null:""+U,children:D,containerInfo:g,implementation:B}}var L=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Q(D,g){if(D==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,jt.createPortal=function(D,g){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(R(299));return X(D,g,null,B)},jt.flushSync=function(D){var g=L.T,B=m.p;try{if(L.T=null,m.p=2,D)return D()}finally{L.T=g,m.p=B,m.d.f()}},jt.preconnect=function(D,g){typeof D=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,m.d.C(D,g))},jt.prefetchDNS=function(D){typeof D=="string"&&m.d.D(D)},jt.preinit=function(D,g){if(typeof D=="string"&&g&&typeof g.as=="string"){var B=g.as,U=Q(B,g.crossOrigin),F=typeof g.integrity=="string"?g.integrity:void 0,Rt=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;B==="style"?m.d.S(D,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:U,integrity:F,fetchPriority:Rt}):B==="script"&&m.d.X(D,{crossOrigin:U,integrity:F,fetchPriority:Rt,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},jt.preinitModule=function(D,g){if(typeof D=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var B=Q(g.as,g.crossOrigin);m.d.M(D,{crossOrigin:B,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&m.d.M(D)},jt.preload=function(D,g){if(typeof D=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var B=g.as,U=Q(B,g.crossOrigin);m.d.L(D,B,{crossOrigin:U,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},jt.preloadModule=function(D,g){if(typeof D=="string")if(g){var B=Q(g.as,g.crossOrigin);m.d.m(D,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:B,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else m.d.m(D)},jt.requestFormReset=function(D){m.d.r(D)},jt.unstable_batchedUpdates=function(D,g){return D(g)},jt.useFormState=function(D,g,B){return L.H.useFormState(D,g,B)},jt.useFormStatus=function(){return L.H.useHostTransitionStatus()},jt.version="19.2.0",jt}var Ad;function ly(){if(Ad)return fo.exports;Ad=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(R){console.error(R)}}return A(),fo.exports=ey(),fo.exports}var zd;function ay(){if(zd)return Tn;zd=1;var A=ty(),R=so(),j=ly();function m(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function X(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function L(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Q(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(X(t)!==t)throw Error(m(188))}function g(t){var e=t.alternate;if(!e){if(e=X(t),e===null)throw Error(m(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return D(n),t;if(u===a)return D(n),e;u=u.sibling}throw Error(m(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?t:e}function B(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=B(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,F=Symbol.for("react.element"),Rt=Symbol.for("react.transitional.element"),Gt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Wt=Symbol.for("react.profiler"),ke=Symbol.for("react.consumer"),_t=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Xl=Symbol.for("react.memo_cache_sentinel"),Ae=Symbol.iterator;function Xt(t){return t===null||typeof t!="object"?null:(t=Ae&&t[Ae]||t["@@iterator"],typeof t=="function"?t:null)}var Tl=Symbol.for("react.client.reference");function Oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tl?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ht:return"Fragment";case Wt:return"Profiler";case Ne:return"StrictMode";case Te:return"Suspense";case Lt:return"SuspenseList";case Ee:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Gt:return"Portal";case _t:return t.displayName||"Context";case ke:return(t._context.displayName||"Context")+".Consumer";case ie:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:Oe(t.type)||"Memo";case Yt:e=t._payload,t=t._init;try{return Oe(t(e))}catch{}}return null}var ve=Array.isArray,S=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},it=[],st=-1;function s(t){return{current:t}}function E(t){0>st||(t.current=it[st],it[st]=null,st--)}function x(t,e){st++,it[st]=t.current,t.current=e}var O=s(null),Z=s(null),K=s(null),at=s(null);function qt(t,e){switch(x(K,e),x(Z,t),x(O,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Lr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Lr(e),t=Yr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}E(O),x(O,t)}function vt(){E(O),E(Z),E(K)}function Ca(t){t.memoizedState!==null&&x(at,t);var e=O.current,l=Yr(e,t.type);e!==l&&(x(Z,t),x(O,l))}function En(t){Z.current===t&&(E(O),E(Z)),at.current===t&&(E(at),pn._currentValue=G)}var Yu,ho;function El(t){if(Yu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||"",ho=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yu+t+ho}var Xu=!1;function Qu(t,e){if(!t||Xu)return"";Xu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(p){var y=p}Reflect.construct(t,[],T)}else{try{T.call()}catch(p){y=p}t.call(T.prototype)}}else{try{throw Error()}catch(p){y=p}(T=t())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(p){if(p&&y&&typeof p.stack=="string")return[p.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var o=i.split(`
`),h=c.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===h.length)for(a=o.length-1,n=h.length-1;1<=a&&0<=n&&o[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==h[n]){var v=`
`+o[a].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=a&&0<=n);break}}}finally{Xu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?El(l):""}function xd(t,e){switch(t.tag){case 26:case 27:case 5:return El(t.type);case 16:return El("Lazy");case 13:return t.child!==e&&e!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return Qu(t.type,!1);case 11:return Qu(t.type.render,!1);case 1:return Qu(t.type,!0);case 31:return El("Activity");default:return""}}function yo(t){try{var e="",l=null;do e+=xd(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Zu=Object.prototype.hasOwnProperty,Vu=A.unstable_scheduleCallback,Ju=A.unstable_cancelCallback,Nd=A.unstable_shouldYield,Od=A.unstable_requestPaint,$t=A.unstable_now,Md=A.unstable_getCurrentPriorityLevel,po=A.unstable_ImmediatePriority,vo=A.unstable_UserBlockingPriority,An=A.unstable_NormalPriority,Ud=A.unstable_LowPriority,go=A.unstable_IdlePriority,Rd=A.log,_d=A.unstable_setDisableYieldValue,xa=null,Ft=null;function We(t){if(typeof Rd=="function"&&_d(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(xa,t)}catch{}}var It=Math.clz32?Math.clz32:qd,jd=Math.log,Hd=Math.LN2;function qd(t){return t>>>=0,t===0?32:31-(jd(t)/Hd|0)|0}var zn=256,Dn=262144,Cn=4194304;function Al(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Al(a):(i&=c,i!==0?n=Al(i):l||(l=c&~t,l!==0&&(n=Al(l))))):(c=a&~u,c!==0?n=Al(c):i!==0?n=Al(i):l||(l=a&~t,l!==0&&(n=Al(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function Na(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function So(){var t=Cn;return Cn<<=1,(Cn&62914560)===0&&(Cn=4194304),t}function Ku(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Oa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gd(t,e,l,a,n,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,o=t.expirationTimes,h=t.hiddenUpdates;for(l=i&~l;0<l;){var v=31-It(l),T=1<<v;c[v]=0,o[v]=-1;var y=h[v];if(y!==null)for(h[v]=null,v=0;v<y.length;v++){var p=y[v];p!==null&&(p.lane&=-536870913)}l&=~T}a!==0&&bo(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function bo(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-It(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function To(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-It(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Eo(t,e){var l=e&-e;return l=(l&42)!==0?1:wu(l),(l&(t.suspendedLanes|e))!==0?0:l}function wu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ku(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ao(){var t=C.p;return t!==0?t:(t=window.event,t===void 0?32:fd(t.type))}function zo(t,e){var l=C.p;try{return C.p=t,e()}finally{C.p=l}}var $e=Math.random().toString(36).slice(2),xt="__reactFiber$"+$e,Qt="__reactProps$"+$e,Ql="__reactContainer$"+$e,Wu="__reactEvents$"+$e,Ld="__reactListeners$"+$e,Yd="__reactHandles$"+$e,Do="__reactResources$"+$e,Ma="__reactMarker$"+$e;function $u(t){delete t[xt],delete t[Qt],delete t[Wu],delete t[Ld],delete t[Yd]}function Zl(t){var e=t[xt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ql]||l[xt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=wr(t);t!==null;){if(l=t[xt])return l;t=wr(t)}return e}t=l,l=t.parentNode}return null}function Vl(t){if(t=t[xt]||t[Ql]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ua(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(m(33))}function Jl(t){var e=t[Do];return e||(e=t[Do]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Dt(t){t[Ma]=!0}var Co=new Set,xo={};function zl(t,e){Kl(t,e),Kl(t+"Capture",e)}function Kl(t,e){for(xo[t]=e,t=0;t<e.length;t++)Co.add(e[t])}var Xd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),No={},Oo={};function Qd(t){return Zu.call(Oo,t)?!0:Zu.call(No,t)?!1:Xd.test(t)?Oo[t]=!0:(No[t]=!0,!1)}function Nn(t,e,l){if(Qd(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function On(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Me(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zd(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fu(t){if(!t._valueTracker){var e=Mo(t)?"checked":"value";t._valueTracker=Zd(t,e,""+t[e])}}function Uo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Mo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vd=/[\n"\\]/g;function oe(t){return t.replace(Vd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Iu(t,e,l,a,n,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ce(e)):t.value!==""+ce(e)&&(t.value=""+ce(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Pu(t,i,ce(e)):l!=null?Pu(t,i,ce(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ce(c):t.removeAttribute("name")}function Ro(t,e,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Fu(t);return}l=l!=null?""+ce(l):"",e=e!=null?""+ce(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Fu(t)}function Pu(t,e,l){e==="number"&&Mn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function wl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ce(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function _o(t,e,l){if(e!=null&&(e=""+ce(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ce(l):""}function jo(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(m(92));if(ve(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ce(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Fu(t)}function kl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Jd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ho(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Jd.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function qo(t,e,l){if(e!=null&&typeof e!="object")throw Error(m(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Ho(t,n,a)}else for(var u in e)e.hasOwnProperty(u)&&Ho(t,u,e[u])}function ti(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(t){return wd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ue(){}var ei=null;function li(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wl=null,$l=null;function Bo(t){var e=Vl(t);if(e&&(t=e.stateNode)){var l=t[Qt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Iu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+oe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Qt]||null;if(!n)throw Error(m(90));Iu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Uo(a)}break t;case"textarea":_o(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&wl(t,!!l.multiple,e,!1)}}}var ai=!1;function Go(t,e,l){if(ai)return t(e,l);ai=!0;try{var a=t(e);return a}finally{if(ai=!1,(Wl!==null||$l!==null)&&(gu(),Wl&&(e=Wl,t=$l,$l=Wl=null,Bo(e),t)))for(e=0;e<t.length;e++)Bo(t[e])}}function Ra(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Qt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(m(231,e,typeof l));return l}var Re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=!1;if(Re)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){ni=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{ni=!1}var Fe=null,ui=null,Rn=null;function Lo(){if(Rn)return Rn;var t,e=ui,l=e.length,a,n="value"in Fe?Fe.value:Fe.textContent,u=n.length;for(t=0;t<l&&e[t]===n[t];t++);var i=l-t;for(a=1;a<=i&&e[l-a]===n[u-a];a++);return Rn=n.slice(t,1<a?1-a:void 0)}function _n(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jn(){return!0}function Yo(){return!1}function Zt(t){function e(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?jn:Yo,this.isPropagationStopped=Yo,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),e}var Dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Zt(Dl),ja=U({},Dl,{view:0,detail:0}),kd=Zt(ja),ii,ci,Ha,qn=U({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(ii=t.screenX-Ha.screenX,ci=t.screenY-Ha.screenY):ci=ii=0,Ha=t),ii)},movementY:function(t){return"movementY"in t?t.movementY:ci}}),Xo=Zt(qn),Wd=U({},qn,{dataTransfer:0}),$d=Zt(Wd),Fd=U({},ja,{relatedTarget:0}),oi=Zt(Fd),Id=U({},Dl,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=Zt(Id),tm=U({},Dl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),em=Zt(tm),lm=U({},Dl,{data:0}),Qo=Zt(lm),am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=um[t])?!!e[t]:!1}function fi(){return im}var cm=U({},ja,{key:function(t){if(t.key){var e=am[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_n(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(t){return t.type==="keypress"?_n(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_n(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),om=Zt(cm),fm=U({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=Zt(fm),sm=U({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),rm=Zt(sm),dm=U({},Dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=Zt(dm),hm=U({},qn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ym=Zt(hm),pm=U({},Dl,{newState:0,oldState:0}),vm=Zt(pm),gm=[9,13,27,32],si=Re&&"CompositionEvent"in window,qa=null;Re&&"documentMode"in document&&(qa=document.documentMode);var Sm=Re&&"TextEvent"in window&&!qa,Vo=Re&&(!si||qa&&8<qa&&11>=qa),Jo=" ",Ko=!1;function wo(t,e){switch(t){case"keyup":return gm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ko(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fl=!1;function bm(t,e){switch(t){case"compositionend":return ko(e);case"keypress":return e.which!==32?null:(Ko=!0,Jo);case"textInput":return t=e.data,t===Jo&&Ko?null:t;default:return null}}function Tm(t,e){if(Fl)return t==="compositionend"||!si&&wo(t,e)?(t=Lo(),Rn=ui=Fe=null,Fl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vo&&e.locale!=="ko"?null:e.data;default:return null}}var Em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Em[t.type]:e==="textarea"}function $o(t,e,l,a){Wl?$l?$l.push(a):$l=[a]:Wl=a,e=Du(e,"onChange"),0<e.length&&(l=new Hn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Ba=null,Ga=null;function Am(t){_r(t,0)}function Bn(t){var e=Ua(t);if(Uo(e))return t}function Fo(t,e){if(t==="change")return e}var Io=!1;if(Re){var ri;if(Re){var di="oninput"in document;if(!di){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),di=typeof Po.oninput=="function"}ri=di}else ri=!1;Io=ri&&(!document.documentMode||9<document.documentMode)}function tf(){Ba&&(Ba.detachEvent("onpropertychange",ef),Ga=Ba=null)}function ef(t){if(t.propertyName==="value"&&Bn(Ga)){var e=[];$o(e,Ga,t,li(t)),Go(Am,e)}}function zm(t,e,l){t==="focusin"?(tf(),Ba=e,Ga=l,Ba.attachEvent("onpropertychange",ef)):t==="focusout"&&tf()}function Dm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bn(Ga)}function Cm(t,e){if(t==="click")return Bn(e)}function xm(t,e){if(t==="input"||t==="change")return Bn(e)}function Nm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:Nm;function La(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Zu.call(e,n)||!Pt(t[n],e[n]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function af(t,e){var l=lf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=lf(l)}}function nf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Mn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Mn(t.document)}return e}function mi(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Om=Re&&"documentMode"in document&&11>=document.documentMode,Il=null,hi=null,Ya=null,yi=!1;function cf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;yi||Il==null||Il!==Mn(a)||(a=Il,"selectionStart"in a&&mi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ya&&La(Ya,a)||(Ya=a,a=Du(hi,"onSelect"),0<a.length&&(e=new Hn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Il)))}function Cl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Pl={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},pi={},of={};Re&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete Pl.animationend.animation,delete Pl.animationiteration.animation,delete Pl.animationstart.animation),"TransitionEvent"in window||delete Pl.transitionend.transition);function xl(t){if(pi[t])return pi[t];if(!Pl[t])return t;var e=Pl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in of)return pi[t]=e[l];return t}var ff=xl("animationend"),sf=xl("animationiteration"),rf=xl("animationstart"),Mm=xl("transitionrun"),Um=xl("transitionstart"),Rm=xl("transitioncancel"),df=xl("transitionend"),mf=new Map,vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vi.push("scrollEnd");function ge(t,e){mf.set(t,e),zl(e,[t])}var Gn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fe=[],ta=0,gi=0;function Ln(){for(var t=ta,e=gi=ta=0;e<t;){var l=fe[e];fe[e++]=null;var a=fe[e];fe[e++]=null;var n=fe[e];fe[e++]=null;var u=fe[e];if(fe[e++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&hf(l,n,u)}}function Yn(t,e,l,a){fe[ta++]=t,fe[ta++]=e,fe[ta++]=l,fe[ta++]=a,gi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Si(t,e,l,a){return Yn(t,e,l,a),Xn(t)}function Nl(t,e){return Yn(t,null,null,e),Xn(t)}function hf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&e!==null&&(n=31-It(l),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),u):null}function Xn(t){if(50<fn)throw fn=0,Nc=null,Error(m(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ea={};function _m(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function te(t,e,l,a){return new _m(t,e,l,a)}function bi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _e(t,e){var l=t.alternate;return l===null?(l=te(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function yf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Qn(t,e,l,a,n,u){var i=0;if(a=t,typeof t=="function")bi(t)&&(i=1);else if(typeof t=="string")i=Gh(t,l,O.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ee:return t=te(31,l,e,n),t.elementType=Ee,t.lanes=u,t;case Ht:return Ol(l.children,n,u,e);case Ne:i=8,n|=24;break;case Wt:return t=te(12,l,e,n|2),t.elementType=Wt,t.lanes=u,t;case Te:return t=te(13,l,e,n),t.elementType=Te,t.lanes=u,t;case Lt:return t=te(19,l,e,n),t.elementType=Lt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _t:i=10;break t;case ke:i=9;break t;case ie:i=11;break t;case I:i=14;break t;case Yt:i=16,a=null;break t}i=29,l=Error(m(130,t===null?"null":typeof t,"")),a=null}return e=te(i,l,e,n),e.elementType=t,e.type=a,e.lanes=u,e}function Ol(t,e,l,a){return t=te(7,t,a,e),t.lanes=l,t}function Ti(t,e,l){return t=te(6,t,null,e),t.lanes=l,t}function pf(t){var e=te(18,null,null,0);return e.stateNode=t,e}function Ei(t,e,l){return e=te(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var vf=new WeakMap;function se(t,e){if(typeof t=="object"&&t!==null){var l=vf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:yo(e)},vf.set(t,e),e)}return{value:t,source:e,stack:yo(e)}}var la=[],aa=0,Zn=null,Xa=0,re=[],de=0,Ie=null,ze=1,De="";function je(t,e){la[aa++]=Xa,la[aa++]=Zn,Zn=t,Xa=e}function gf(t,e,l){re[de++]=ze,re[de++]=De,re[de++]=Ie,Ie=t;var a=ze;t=De;var n=32-It(a)-1;a&=~(1<<n),l+=1;var u=32-It(e)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,ze=1<<32-It(e)+n|l<<n|a,De=u+t}else ze=1<<u|l<<n|a,De=t}function Ai(t){t.return!==null&&(je(t,1),gf(t,1,0))}function zi(t){for(;t===Zn;)Zn=la[--aa],la[aa]=null,Xa=la[--aa],la[aa]=null;for(;t===Ie;)Ie=re[--de],re[de]=null,De=re[--de],re[de]=null,ze=re[--de],re[de]=null}function Sf(t,e){re[de++]=ze,re[de++]=De,re[de++]=Ie,ze=e.id,De=e.overflow,Ie=t}var Nt=null,dt=null,P=!1,Pe=null,me=!1,Di=Error(m(519));function tl(t){var e=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(se(e,t)),Di}function bf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[xt]=t,e[Qt]=a,l){case"dialog":k("cancel",e),k("close",e);break;case"iframe":case"object":case"embed":k("load",e);break;case"video":case"audio":for(l=0;l<rn.length;l++)k(rn[l],e);break;case"source":k("error",e);break;case"img":case"image":case"link":k("error",e),k("load",e);break;case"details":k("toggle",e);break;case"input":k("invalid",e),Ro(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":k("invalid",e);break;case"textarea":k("invalid",e),jo(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Br(e.textContent,l)?(a.popover!=null&&(k("beforetoggle",e),k("toggle",e)),a.onScroll!=null&&k("scroll",e),a.onScrollEnd!=null&&k("scrollend",e),a.onClick!=null&&(e.onclick=Ue),e=!0):e=!1,e||tl(t,!0)}function Tf(t){for(Nt=t.return;Nt;)switch(Nt.tag){case 5:case 31:case 13:me=!1;return;case 27:case 3:me=!0;return;default:Nt=Nt.return}}function na(t){if(t!==Nt)return!1;if(!P)return Tf(t),P=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Zc(t.type,t.memoizedProps)),l=!l),l&&dt&&tl(t),Tf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=Kr(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=Kr(t)}else e===27?(e=dt,hl(t.type)?(t=kc,kc=null,dt=t):dt=e):dt=Nt?ye(t.stateNode.nextSibling):null;return!0}function Ml(){dt=Nt=null,P=!1}function Ci(){var t=Pe;return t!==null&&(wt===null?wt=t:wt.push.apply(wt,t),Pe=null),t}function Qa(t){Pe===null?Pe=[t]:Pe.push(t)}var xi=s(null),Ul=null,He=null;function el(t,e,l){x(xi,e._currentValue),e._currentValue=l}function qe(t){t._currentValue=xi.current,E(xi)}function Ni(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Oi(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=n;for(var o=0;o<e.length;o++)if(c.context===e[o]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),Ni(u.return,l,t),a||(i=null);break t}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(m(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Ni(i,l,t),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ua(t,e,l,a){t=null;for(var n=e,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(m(387));if(i=i.memoizedProps,i!==null){var c=n.type;Pt(n.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(n===at.current){if(i=n.alternate,i===null)throw Error(m(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(pn):t=[pn])}n=n.return}t!==null&&Oi(e,t,l,a),e.flags|=262144}function Vn(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rl(t){Ul=t,He=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ot(t){return Ef(Ul,t)}function Jn(t,e){return Ul===null&&Rl(t),Ef(t,e)}function Ef(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},He===null){if(t===null)throw Error(m(308));He=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else He=He.next=e;return l}var jm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Hm=A.unstable_scheduleCallback,qm=A.unstable_NormalPriority,bt={$$typeof:_t,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mi(){return{controller:new jm,data:new Map,refCount:0}}function Za(t){t.refCount--,t.refCount===0&&Hm(qm,function(){t.controller.abort()})}var Va=null,Ui=0,ia=0,ca=null;function Bm(t,e){if(Va===null){var l=Va=[];Ui=0,ia=jc(),ca={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ui++,e.then(Af,Af),e}function Af(){if(--Ui===0&&Va!==null){ca!==null&&(ca.status="fulfilled");var t=Va;Va=null,ia=0,ca=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var zf=S.S;S.S=function(t,e){cr=$t(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Bm(t,e),zf!==null&&zf(t,e)};var _l=s(null);function Ri(){var t=_l.current;return t!==null?t:rt.pooledCache}function Kn(t,e){e===null?x(_l,_l.current):x(_l,e.pool)}function Df(){var t=Ri();return t===null?null:{parent:bt._currentValue,pool:t}}var oa=Error(m(460)),_i=Error(m(474)),wn=Error(m(542)),kn={then:function(){}};function Cf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ue,Ue),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Of(t),t;default:if(typeof e.status=="string")e.then(Ue,Ue);else{if(t=rt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Of(t),t}throw Hl=e,oa}}function jl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Hl=l,oa):l}}var Hl=null;function Nf(){if(Hl===null)throw Error(m(459));var t=Hl;return Hl=null,t}function Of(t){if(t===oa||t===wn)throw Error(m(483))}var fa=null,Ja=0;function Wn(t){var e=Ja;return Ja+=1,fa===null&&(fa=[]),xf(fa,t,e)}function Ka(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function $n(t,e){throw e.$$typeof===F?Error(m(525)):(t=Object.prototype.toString.call(e),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Mf(t){function e(r,f){if(t){var d=r.deletions;d===null?(r.deletions=[f],r.flags|=16):d.push(f)}}function l(r,f){if(!t)return null;for(;f!==null;)e(r,f),f=f.sibling;return null}function a(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function n(r,f){return r=_e(r,f),r.index=0,r.sibling=null,r}function u(r,f,d){return r.index=d,t?(d=r.alternate,d!==null?(d=d.index,d<f?(r.flags|=67108866,f):d):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function i(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,d,b){return f===null||f.tag!==6?(f=Ti(d,r.mode,b),f.return=r,f):(f=n(f,d),f.return=r,f)}function o(r,f,d,b){var _=d.type;return _===Ht?v(r,f,d.props.children,b,d.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Yt&&jl(_)===f.type)?(f=n(f,d.props),Ka(f,d),f.return=r,f):(f=Qn(d.type,d.key,d.props,null,r.mode,b),Ka(f,d),f.return=r,f)}function h(r,f,d,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=Ei(d,r.mode,b),f.return=r,f):(f=n(f,d.children||[]),f.return=r,f)}function v(r,f,d,b,_){return f===null||f.tag!==7?(f=Ol(d,r.mode,b,_),f.return=r,f):(f=n(f,d),f.return=r,f)}function T(r,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ti(""+f,r.mode,d),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Rt:return d=Qn(f.type,f.key,f.props,null,r.mode,d),Ka(d,f),d.return=r,d;case Gt:return f=Ei(f,r.mode,d),f.return=r,f;case Yt:return f=jl(f),T(r,f,d)}if(ve(f)||Xt(f))return f=Ol(f,r.mode,d,null),f.return=r,f;if(typeof f.then=="function")return T(r,Wn(f),d);if(f.$$typeof===_t)return T(r,Jn(r,f),d);$n(r,f)}return null}function y(r,f,d,b){var _=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return _!==null?null:c(r,f,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Rt:return d.key===_?o(r,f,d,b):null;case Gt:return d.key===_?h(r,f,d,b):null;case Yt:return d=jl(d),y(r,f,d,b)}if(ve(d)||Xt(d))return _!==null?null:v(r,f,d,b,null);if(typeof d.then=="function")return y(r,f,Wn(d),b);if(d.$$typeof===_t)return y(r,f,Jn(r,d),b);$n(r,d)}return null}function p(r,f,d,b,_){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return r=r.get(d)||null,c(f,r,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Rt:return r=r.get(b.key===null?d:b.key)||null,o(f,r,b,_);case Gt:return r=r.get(b.key===null?d:b.key)||null,h(f,r,b,_);case Yt:return b=jl(b),p(r,f,d,b,_)}if(ve(b)||Xt(b))return r=r.get(d)||null,v(f,r,b,_,null);if(typeof b.then=="function")return p(r,f,d,Wn(b),_);if(b.$$typeof===_t)return p(r,f,d,Jn(f,b),_);$n(f,b)}return null}function N(r,f,d,b){for(var _=null,tt=null,M=f,J=f=0,$=null;M!==null&&J<d.length;J++){M.index>J?($=M,M=null):$=M.sibling;var et=y(r,M,d[J],b);if(et===null){M===null&&(M=$);break}t&&M&&et.alternate===null&&e(r,M),f=u(et,f,J),tt===null?_=et:tt.sibling=et,tt=et,M=$}if(J===d.length)return l(r,M),P&&je(r,J),_;if(M===null){for(;J<d.length;J++)M=T(r,d[J],b),M!==null&&(f=u(M,f,J),tt===null?_=M:tt.sibling=M,tt=M);return P&&je(r,J),_}for(M=a(M);J<d.length;J++)$=p(M,r,J,d[J],b),$!==null&&(t&&$.alternate!==null&&M.delete($.key===null?J:$.key),f=u($,f,J),tt===null?_=$:tt.sibling=$,tt=$);return t&&M.forEach(function(Sl){return e(r,Sl)}),P&&je(r,J),_}function H(r,f,d,b){if(d==null)throw Error(m(151));for(var _=null,tt=null,M=f,J=f=0,$=null,et=d.next();M!==null&&!et.done;J++,et=d.next()){M.index>J?($=M,M=null):$=M.sibling;var Sl=y(r,M,et.value,b);if(Sl===null){M===null&&(M=$);break}t&&M&&Sl.alternate===null&&e(r,M),f=u(Sl,f,J),tt===null?_=Sl:tt.sibling=Sl,tt=Sl,M=$}if(et.done)return l(r,M),P&&je(r,J),_;if(M===null){for(;!et.done;J++,et=d.next())et=T(r,et.value,b),et!==null&&(f=u(et,f,J),tt===null?_=et:tt.sibling=et,tt=et);return P&&je(r,J),_}for(M=a(M);!et.done;J++,et=d.next())et=p(M,r,J,et.value,b),et!==null&&(t&&et.alternate!==null&&M.delete(et.key===null?J:et.key),f=u(et,f,J),tt===null?_=et:tt.sibling=et,tt=et);return t&&M.forEach(function(Wh){return e(r,Wh)}),P&&je(r,J),_}function ft(r,f,d,b){if(typeof d=="object"&&d!==null&&d.type===Ht&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Rt:t:{for(var _=d.key;f!==null;){if(f.key===_){if(_=d.type,_===Ht){if(f.tag===7){l(r,f.sibling),b=n(f,d.props.children),b.return=r,r=b;break t}}else if(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Yt&&jl(_)===f.type){l(r,f.sibling),b=n(f,d.props),Ka(b,d),b.return=r,r=b;break t}l(r,f);break}else e(r,f);f=f.sibling}d.type===Ht?(b=Ol(d.props.children,r.mode,b,d.key),b.return=r,r=b):(b=Qn(d.type,d.key,d.props,null,r.mode,b),Ka(b,d),b.return=r,r=b)}return i(r);case Gt:t:{for(_=d.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){l(r,f.sibling),b=n(f,d.children||[]),b.return=r,r=b;break t}else{l(r,f);break}else e(r,f);f=f.sibling}b=Ei(d,r.mode,b),b.return=r,r=b}return i(r);case Yt:return d=jl(d),ft(r,f,d,b)}if(ve(d))return N(r,f,d,b);if(Xt(d)){if(_=Xt(d),typeof _!="function")throw Error(m(150));return d=_.call(d),H(r,f,d,b)}if(typeof d.then=="function")return ft(r,f,Wn(d),b);if(d.$$typeof===_t)return ft(r,f,Jn(r,d),b);$n(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(l(r,f.sibling),b=n(f,d),b.return=r,r=b):(l(r,f),b=Ti(d,r.mode,b),b.return=r,r=b),i(r)):l(r,f)}return function(r,f,d,b){try{Ja=0;var _=ft(r,f,d,b);return fa=null,_}catch(M){if(M===oa||M===wn)throw M;var tt=te(29,M,null,r.mode);return tt.lanes=b,tt.return=r,tt}finally{}}}var ql=Mf(!0),Uf=Mf(!1),ll=!1;function ji(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hi(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function al(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function nl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(lt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Xn(t),hf(t,null,l),e}return Yn(t,a,e,l),Xn(t)}function wa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,To(t,l)}}function qi(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=e:u=u.next=e}else n=u=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Bi=!1;function ka(){if(Bi){var t=ca;if(t!==null)throw t}}function Wa(t,e,l,a){Bi=!1;var n=t.updateQueue;ll=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var o=c,h=o.next;o.next=null,i===null?u=h:i.next=h,i=o;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==i&&(c===null?v.firstBaseUpdate=h:c.next=h,v.lastBaseUpdate=o))}if(u!==null){var T=n.baseState;i=0,v=h=o=null,c=u;do{var y=c.lane&-536870913,p=y!==c.lane;if(p?(W&y)===y:(a&y)===y){y!==0&&y===ia&&(Bi=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var N=t,H=c;y=e;var ft=l;switch(H.tag){case 1:if(N=H.payload,typeof N=="function"){T=N.call(ft,T,y);break t}T=N;break t;case 3:N.flags=N.flags&-65537|128;case 0:if(N=H.payload,y=typeof N=="function"?N.call(ft,T,y):N,y==null)break t;T=U({},T,y);break t;case 2:ll=!0}}y=c.callback,y!==null&&(t.flags|=64,p&&(t.flags|=8192),p=n.callbacks,p===null?n.callbacks=[y]:p.push(y))}else p={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(h=v=p,o=T):v=v.next=p,i|=y;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;p=c,c=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);v===null&&(o=T),n.baseState=o,n.firstBaseUpdate=h,n.lastBaseUpdate=v,u===null&&(n.shared.lanes=0),fl|=i,t.lanes=i,t.memoizedState=T}}function Rf(t,e){if(typeof t!="function")throw Error(m(191,t));t.call(e)}function _f(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Rf(l[t],e)}var sa=s(null),Fn=s(0);function jf(t,e){t=Je,x(Fn,t),x(sa,e),Je=t|e.baseLanes}function Gi(){x(Fn,Je),x(sa,sa.current)}function Li(){Je=Fn.current,E(sa),E(Fn)}var ee=s(null),he=null;function ul(t){var e=t.alternate;x(gt,gt.current&1),x(ee,t),he===null&&(e===null||sa.current!==null||e.memoizedState!==null)&&(he=t)}function Yi(t){x(gt,gt.current),x(ee,t),he===null&&(he=t)}function Hf(t){t.tag===22?(x(gt,gt.current),x(ee,t),he===null&&(he=t)):il()}function il(){x(gt,gt.current),x(ee,ee.current)}function le(t){E(ee),he===t&&(he=null),E(gt)}var gt=s(0);function In(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Kc(l)||wc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Be=0,V=null,ct=null,Tt=null,Pn=!1,ra=!1,Bl=!1,tu=0,$a=0,da=null,Lm=0;function yt(){throw Error(m(321))}function Xi(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Pt(t[l],e[l]))return!1;return!0}function Qi(t,e,l,a,n,u){return Be=u,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,S.H=t===null||t.memoizedState===null?gs:ac,Bl=!1,u=l(a,n),Bl=!1,ra&&(u=Bf(e,l,a,n)),qf(t),u}function qf(t){S.H=Pa;var e=ct!==null&&ct.next!==null;if(Be=0,Tt=ct=V=null,Pn=!1,$a=0,da=null,e)throw Error(m(300));t===null||Et||(t=t.dependencies,t!==null&&Vn(t)&&(Et=!0))}function Bf(t,e,l,a){V=t;var n=0;do{if(ra&&(da=null),$a=0,ra=!1,25<=n)throw Error(m(301));if(n+=1,Tt=ct=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=Ss,u=e(l,a)}while(ra);return u}function Ym(){var t=S.H,e=t.useState()[0];return e=typeof e.then=="function"?Fa(e):e,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(V.flags|=1024),e}function Zi(){var t=tu!==0;return tu=0,t}function Vi(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Ji(t){if(Pn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Pn=!1}Be=0,Tt=ct=V=null,ra=!1,$a=tu=0,da=null}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?V.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function St(){if(ct===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=Tt===null?V.memoizedState:Tt.next;if(e!==null)Tt=e,ct=t;else{if(t===null)throw V.alternate===null?Error(m(467)):Error(m(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Tt===null?V.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(t){var e=$a;return $a+=1,da===null&&(da=[]),t=xf(da,t,e),e=V,(Tt===null?e.memoizedState:Tt.next)===null&&(e=e.alternate,S.H=e===null||e.memoizedState===null?gs:ac),t}function lu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fa(t);if(t.$$typeof===_t)return Ot(t)}throw Error(m(438,String(t)))}function Ki(t){var e=null,l=V.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=eu(),V.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Xl;return e.index++,l}function Ge(t,e){return typeof e=="function"?e(t):e}function au(t){var e=St();return wi(e,ct,t)}function wi(t,e,l){var a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var n=t.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}e.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{e=n.next;var c=i=null,o=null,h=e,v=!1;do{var T=h.lane&-536870913;if(T!==h.lane?(W&T)===T:(Be&T)===T){var y=h.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===ia&&(v=!0);else if((Be&y)===y){h=h.next,y===ia&&(v=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(c=o=T,i=u):o=o.next=T,V.lanes|=y,fl|=y;T=h.action,Bl&&l(u,T),u=h.hasEagerState?h.eagerState:l(u,T)}else y={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(c=o=y,i=u):o=o.next=y,V.lanes|=T,fl|=T;h=h.next}while(h!==null&&h!==e);if(o===null?i=u:o.next=c,!Pt(u,t.memoizedState)&&(Et=!0,v&&(l=ca,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=o,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function ki(t){var e=St(),l=e.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,u=e.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);Pt(u,e.memoizedState)||(Et=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Gf(t,e,l){var a=V,n=St(),u=P;if(u){if(l===void 0)throw Error(m(407));l=l()}else l=e();var i=!Pt((ct||n).memoizedState,l);if(i&&(n.memoizedState=l,Et=!0),n=n.queue,Fi(Xf.bind(null,a,n,t),[t]),n.getSnapshot!==e||i||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Yf.bind(null,a,n,l,e),null),rt===null)throw Error(m(349));u||(Be&127)!==0||Lf(a,e,l)}return l}function Lf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=V.updateQueue,e===null?(e=eu(),V.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Yf(t,e,l,a){e.value=l,e.getSnapshot=a,Qf(e)&&Zf(t)}function Xf(t,e,l){return l(function(){Qf(e)&&Zf(t)})}function Qf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Pt(t,l)}catch{return!0}}function Zf(t){var e=Nl(t,2);e!==null&&kt(e,t,2)}function Wi(t){var e=Bt();if(typeof t=="function"){var l=t;if(t=l(),Bl){We(!0);try{l()}finally{We(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:t},e}function Vf(t,e,l,a){return t.baseState=l,wi(t,ct,typeof a=="function"?a:Ge)}function Xm(t,e,l,a,n){if(iu(t))throw Error(m(485));if(t=e.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Jf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Jf(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var u=S.T,i={};S.T=i;try{var c=l(n,a),o=S.S;o!==null&&o(i,c),Kf(t,e,c)}catch(h){$i(t,e,h)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=l(n,a),Kf(t,e,u)}catch(h){$i(t,e,h)}}function Kf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){wf(t,e,a)},function(a){return $i(t,e,a)}):wf(t,e,l)}function wf(t,e,l){e.status="fulfilled",e.value=l,kf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Jf(t,l)))}function $i(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,kf(e),e=e.next;while(e!==a)}t.action=null}function kf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Wf(t,e){return e}function $f(t,e){if(P){var l=rt.formState;if(l!==null){t:{var a=V;if(P){if(dt){e:{for(var n=dt,u=me;n.nodeType!==8;){if(!u){n=null;break e}if(n=ye(n.nextSibling),n===null){n=null;break e}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){dt=ye(n.nextSibling),a=n.data==="F!";break t}}tl(a)}a=!1}a&&(e=l[0])}}return l=Bt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wf,lastRenderedState:e},l.queue=a,l=ys.bind(null,V,a),a.dispatch=l,a=Wi(!1),u=lc.bind(null,V,!1,a.queue),a=Bt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Xm.bind(null,V,n,u,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Ff(t){var e=St();return If(e,ct,t)}function If(t,e,l){if(e=wi(t,e,Wf)[0],t=au(Ge)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Fa(e)}catch(i){throw i===oa?wn:i}else a=e;e=St();var n=e.queue,u=n.dispatch;return l!==e.memoizedState&&(V.flags|=2048,ma(9,{destroy:void 0},Qm.bind(null,n,l),null)),[a,u,t]}function Qm(t,e){t.action=e}function Pf(t){var e=St(),l=ct;if(l!==null)return If(e,l,t);St(),e=e.memoizedState,l=St();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ma(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=V.updateQueue,e===null&&(e=eu(),V.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ts(){return St().memoizedState}function nu(t,e,l,a){var n=Bt();V.flags|=t,n.memoizedState=ma(1|e,{destroy:void 0},l,a===void 0?null:a)}function uu(t,e,l,a){var n=St();a=a===void 0?null:a;var u=n.memoizedState.inst;ct!==null&&a!==null&&Xi(a,ct.memoizedState.deps)?n.memoizedState=ma(e,u,l,a):(V.flags|=t,n.memoizedState=ma(1|e,u,l,a))}function es(t,e){nu(8390656,8,t,e)}function Fi(t,e){uu(2048,8,t,e)}function Zm(t){V.flags|=4;var e=V.updateQueue;if(e===null)e=eu(),V.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function ls(t){var e=St().memoizedState;return Zm({ref:e,nextImpl:t}),function(){if((lt&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}function as(t,e){return uu(4,2,t,e)}function ns(t,e){return uu(4,4,t,e)}function us(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function is(t,e,l){l=l!=null?l.concat([t]):null,uu(4,4,us.bind(null,e,t),l)}function Ii(){}function cs(t,e){var l=St();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Xi(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function os(t,e){var l=St();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Xi(e,a[1]))return a[0];if(a=t(),Bl){We(!0);try{t()}finally{We(!1)}}return l.memoizedState=[a,e],a}function Pi(t,e,l){return l===void 0||(Be&1073741824)!==0&&(W&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=fr(),V.lanes|=t,fl|=t,l)}function fs(t,e,l,a){return Pt(l,e)?l:sa.current!==null?(t=Pi(t,l,a),Pt(t,e)||(Et=!0),t):(Be&42)===0||(Be&1073741824)!==0&&(W&261930)===0?(Et=!0,t.memoizedState=l):(t=fr(),V.lanes|=t,fl|=t,e)}function ss(t,e,l,a,n){var u=C.p;C.p=u!==0&&8>u?u:8;var i=S.T,c={};S.T=c,lc(t,!1,e,l);try{var o=n(),h=S.S;if(h!==null&&h(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var v=Gm(o,a);Ia(t,e,v,ue(t))}else Ia(t,e,a,ue(t))}catch(T){Ia(t,e,{then:function(){},status:"rejected",reason:T},ue())}finally{C.p=u,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Vm(){}function tc(t,e,l,a){if(t.tag!==5)throw Error(m(476));var n=rs(t).queue;ss(t,n,e,G,l===null?Vm:function(){return ds(t),l(a)})}function rs(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:G},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ds(t){var e=rs(t);e.next===null&&(e=t.alternate.memoizedState),Ia(t,e.next.queue,{},ue())}function ec(){return Ot(pn)}function ms(){return St().memoizedState}function hs(){return St().memoizedState}function Jm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ue();t=al(l);var a=nl(e,t,l);a!==null&&(kt(a,e,l),wa(a,e,l)),e={cache:Mi()},t.payload=e;return}e=e.return}}function Km(t,e,l){var a=ue();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},iu(t)?ps(e,l):(l=Si(t,e,l,a),l!==null&&(kt(l,t,a),vs(l,e,a)))}function ys(t,e,l){var a=ue();Ia(t,e,l,a)}function Ia(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(iu(t))ps(e,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,Pt(c,i))return Yn(t,e,n,0),rt===null&&Ln(),!1}catch{}finally{}if(l=Si(t,e,n,a),l!==null)return kt(l,t,a),vs(l,e,a),!0}return!1}function lc(t,e,l,a){if(a={lane:2,revertLane:jc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},iu(t)){if(e)throw Error(m(479))}else e=Si(t,l,a,2),e!==null&&kt(e,t,2)}function iu(t){var e=t.alternate;return t===V||e!==null&&e===V}function ps(t,e){ra=Pn=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function vs(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,To(t,l)}}var Pa={readContext:Ot,use:lu,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt};Pa.useEffectEvent=yt;var gs={readContext:Ot,use:lu,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:es,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,nu(4194308,4,us.bind(null,e,t),l)},useLayoutEffect:function(t,e){return nu(4194308,4,t,e)},useInsertionEffect:function(t,e){nu(4,2,t,e)},useMemo:function(t,e){var l=Bt();e=e===void 0?null:e;var a=t();if(Bl){We(!0);try{t()}finally{We(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Bt();if(l!==void 0){var n=l(e);if(Bl){We(!0);try{l(e)}finally{We(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Km.bind(null,V,t),[a.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:function(t){t=Wi(t);var e=t.queue,l=ys.bind(null,V,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Ii,useDeferredValue:function(t,e){var l=Bt();return Pi(l,t,e)},useTransition:function(){var t=Wi(!1);return t=ss.bind(null,V,t.queue,!0,!1),Bt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=V,n=Bt();if(P){if(l===void 0)throw Error(m(407));l=l()}else{if(l=e(),rt===null)throw Error(m(349));(W&127)!==0||Lf(a,e,l)}n.memoizedState=l;var u={value:l,getSnapshot:e};return n.queue=u,es(Xf.bind(null,a,u,t),[t]),a.flags|=2048,ma(9,{destroy:void 0},Yf.bind(null,a,u,l,e),null),l},useId:function(){var t=Bt(),e=rt.identifierPrefix;if(P){var l=De,a=ze;l=(a&~(1<<32-It(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=tu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Lm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ec,useFormState:$f,useActionState:$f,useOptimistic:function(t){var e=Bt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=lc.bind(null,V,!0,l),l.dispatch=e,[t,e]},useMemoCache:Ki,useCacheRefresh:function(){return Bt().memoizedState=Jm.bind(null,V)},useEffectEvent:function(t){var e=Bt(),l={impl:t};return e.memoizedState=l,function(){if((lt&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},ac={readContext:Ot,use:lu,useCallback:cs,useContext:Ot,useEffect:Fi,useImperativeHandle:is,useInsertionEffect:as,useLayoutEffect:ns,useMemo:os,useReducer:au,useRef:ts,useState:function(){return au(Ge)},useDebugValue:Ii,useDeferredValue:function(t,e){var l=St();return fs(l,ct.memoizedState,t,e)},useTransition:function(){var t=au(Ge)[0],e=St().memoizedState;return[typeof t=="boolean"?t:Fa(t),e]},useSyncExternalStore:Gf,useId:ms,useHostTransitionStatus:ec,useFormState:Ff,useActionState:Ff,useOptimistic:function(t,e){var l=St();return Vf(l,ct,t,e)},useMemoCache:Ki,useCacheRefresh:hs};ac.useEffectEvent=ls;var Ss={readContext:Ot,use:lu,useCallback:cs,useContext:Ot,useEffect:Fi,useImperativeHandle:is,useInsertionEffect:as,useLayoutEffect:ns,useMemo:os,useReducer:ki,useRef:ts,useState:function(){return ki(Ge)},useDebugValue:Ii,useDeferredValue:function(t,e){var l=St();return ct===null?Pi(l,t,e):fs(l,ct.memoizedState,t,e)},useTransition:function(){var t=ki(Ge)[0],e=St().memoizedState;return[typeof t=="boolean"?t:Fa(t),e]},useSyncExternalStore:Gf,useId:ms,useHostTransitionStatus:ec,useFormState:Pf,useActionState:Pf,useOptimistic:function(t,e){var l=St();return ct!==null?Vf(l,ct,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ki,useCacheRefresh:hs};Ss.useEffectEvent=ls;function nc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:U({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var uc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ue(),n=al(a);n.payload=e,l!=null&&(n.callback=l),e=nl(t,n,a),e!==null&&(kt(e,t,a),wa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ue(),n=al(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=nl(t,n,a),e!==null&&(kt(e,t,a),wa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ue(),a=al(l);a.tag=2,e!=null&&(a.callback=e),e=nl(t,a,l),e!==null&&(kt(e,t,l),wa(e,t,l))}};function bs(t,e,l,a,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,i):e.prototype&&e.prototype.isPureReactComponent?!La(l,a)||!La(n,u):!0}function Ts(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function Gl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=U({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Es(t){Gn(t)}function As(t){console.error(t)}function zs(t){Gn(t)}function cu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Ds(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ic(t,e,l){return l=al(l),l.tag=3,l.payload={element:null},l.callback=function(){cu(t,e)},l}function Cs(t){return t=al(t),t.tag=3,t}function xs(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;t.payload=function(){return n(u)},t.callback=function(){Ds(e,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ds(e,l,a),typeof n!="function"&&(sl===null?sl=new Set([this]):sl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function wm(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ua(e,l,n,!0),l=ee.current,l!==null){switch(l.tag){case 31:case 13:return he===null?Su():l.alternate===null&&pt===0&&(pt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===kn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Uc(t,a,n)),!1;case 22:return l.flags|=65536,a===kn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Uc(t,a,n)),!1}throw Error(m(435,l.tag))}return Uc(t,a,n),Su(),!1}if(P)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Di&&(t=Error(m(422),{cause:a}),Qa(se(t,l)))):(a!==Di&&(e=Error(m(423),{cause:a}),Qa(se(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=se(a,l),n=ic(t.stateNode,a,n),qi(t,n),pt!==4&&(pt=2)),!1;var u=Error(m(520),{cause:a});if(u=se(u,l),on===null?on=[u]:on.push(u),pt!==4&&(pt=2),e===null)return!0;a=se(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=ic(l.stateNode,a,t),qi(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(sl===null||!sl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Cs(n),xs(n,t,l,a),qi(l,n),!1}l=l.return}while(l!==null);return!1}var cc=Error(m(461)),Et=!1;function Mt(t,e,l,a){e.child=t===null?Uf(e,null,l,a):ql(e,t.child,l,a)}function Ns(t,e,l,a,n){l=l.render;var u=e.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Rl(e),a=Qi(t,e,l,i,u,n),c=Zi(),t!==null&&!Et?(Vi(t,e,n),Le(t,e,n)):(P&&c&&Ai(e),e.flags|=1,Mt(t,e,a,n),e.child)}function Os(t,e,l,a,n){if(t===null){var u=l.type;return typeof u=="function"&&!bi(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Ms(t,e,u,a,n)):(t=Qn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!yc(t,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:La,l(i,a)&&t.ref===e.ref)return Le(t,e,n)}return e.flags|=1,t=_e(u,a),t.ref=e.ref,t.return=e,e.child=t}function Ms(t,e,l,a,n){if(t!==null){var u=t.memoizedProps;if(La(u,a)&&t.ref===e.ref)if(Et=!1,e.pendingProps=a=u,yc(t,n))(t.flags&131072)!==0&&(Et=!0);else return e.lanes=t.lanes,Le(t,e,n)}return oc(t,e,l,a,n)}function Us(t,e,l,a){var n=a.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,e.child=null;return Rs(t,e,u,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kn(e,u!==null?u.cachePool:null),u!==null?jf(e,u):Gi(),Hf(e);else return a=e.lanes=536870912,Rs(t,e,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(Kn(e,u.cachePool),jf(e,u),il(),e.memoizedState=null):(t!==null&&Kn(e,null),Gi(),il());return Mt(t,e,n,l),e.child}function tn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Rs(t,e,l,a,n){var u=Ri();return u=u===null?null:{parent:bt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Kn(e,null),Gi(),Hf(e),t!==null&&ua(t,e,a,!0),e.childLanes=n,null}function ou(t,e){return e=su({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function _s(t,e,l){return ql(e,t.child,null,l),t=ou(e,e.pendingProps),t.flags|=2,le(e),e.memoizedState=null,t}function km(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(P){if(a.mode==="hidden")return t=ou(e,a),e.lanes=536870912,tn(null,t);if(Yi(e),(t=dt)?(t=Jr(t,me),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:ze,overflow:De}:null,retryLane:536870912,hydrationErrors:null},l=pf(t),l.return=e,e.child=l,Nt=e,dt=null)):t=null,t===null)throw tl(e);return e.lanes=536870912,null}return ou(e,a)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(Yi(e),n)if(e.flags&256)e.flags&=-257,e=_s(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(m(558));else if(Et||ua(t,e,l,!1),n=(l&t.childLanes)!==0,Et||n){if(a=rt,a!==null&&(i=Eo(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Nl(t,i),kt(a,t,i),cc;Su(),e=_s(t,e,l)}else t=u.treeContext,dt=ye(i.nextSibling),Nt=e,P=!0,Pe=null,me=!1,t!==null&&Sf(e,t),e=ou(e,a),e.flags|=4096;return e}return t=_e(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function fu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function oc(t,e,l,a,n){return Rl(e),l=Qi(t,e,l,a,void 0,n),a=Zi(),t!==null&&!Et?(Vi(t,e,n),Le(t,e,n)):(P&&a&&Ai(e),e.flags|=1,Mt(t,e,l,n),e.child)}function js(t,e,l,a,n,u){return Rl(e),e.updateQueue=null,l=Bf(e,a,l,n),qf(t),a=Zi(),t!==null&&!Et?(Vi(t,e,u),Le(t,e,u)):(P&&a&&Ai(e),e.flags|=1,Mt(t,e,l,u),e.child)}function Hs(t,e,l,a,n){if(Rl(e),e.stateNode===null){var u=ea,i=l.contextType;typeof i=="object"&&i!==null&&(u=Ot(i)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=uc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},ji(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?Ot(i):ea,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(nc(e,l,i,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&uc.enqueueReplaceState(u,u.state,null),Wa(e,a,u,n),ka(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var c=e.memoizedProps,o=Gl(l,c);u.props=o;var h=u.context,v=l.contextType;i=ea,typeof v=="object"&&v!==null&&(i=Ot(v));var T=l.getDerivedStateFromProps;v=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,v||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||h!==i)&&Ts(e,u,a,i),ll=!1;var y=e.memoizedState;u.state=y,Wa(e,a,u,n),ka(),h=e.memoizedState,c||y!==h||ll?(typeof T=="function"&&(nc(e,l,T,a),h=e.memoizedState),(o=ll||bs(e,l,o,a,y,h,i))?(v||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=h),u.props=a,u.state=h,u.context=i,a=o):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,Hi(t,e),i=e.memoizedProps,v=Gl(l,i),u.props=v,T=e.pendingProps,y=u.context,h=l.contextType,o=ea,typeof h=="object"&&h!==null&&(o=Ot(h)),c=l.getDerivedStateFromProps,(h=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==T||y!==o)&&Ts(e,u,a,o),ll=!1,y=e.memoizedState,u.state=y,Wa(e,a,u,n),ka();var p=e.memoizedState;i!==T||y!==p||ll||t!==null&&t.dependencies!==null&&Vn(t.dependencies)?(typeof c=="function"&&(nc(e,l,c,a),p=e.memoizedState),(v=ll||bs(e,l,v,a,y,p,o)||t!==null&&t.dependencies!==null&&Vn(t.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,p,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,p,o)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=p),u.props=a,u.state=p,u.context=o,a=v):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,fu(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=ql(e,t.child,null,n),e.child=ql(e,null,l,n)):Mt(t,e,l,n),e.memoizedState=u.state,t=e.child):t=Le(t,e,n),t}function qs(t,e,l,a){return Ml(),e.flags|=256,Mt(t,e,l,a),e.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(t){return{baseLanes:t,cachePool:Df()}}function rc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=ne),t}function Bs(t,e,l){var a=e.pendingProps,n=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(gt.current&2)!==0),i&&(n=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(P){if(n?ul(e):il(),(t=dt)?(t=Jr(t,me),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:ze,overflow:De}:null,retryLane:536870912,hydrationErrors:null},l=pf(t),l.return=e,e.child=l,Nt=e,dt=null)):t=null,t===null)throw tl(e);return wc(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(il(),n=e.mode,c=su({mode:"hidden",children:c},n),a=Ol(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=sc(l),a.childLanes=rc(t,i,l),e.memoizedState=fc,tn(null,a)):(ul(e),dc(e,c))}var o=t.memoizedState;if(o!==null&&(c=o.dehydrated,c!==null)){if(u)e.flags&256?(ul(e),e.flags&=-257,e=mc(t,e,l)):e.memoizedState!==null?(il(),e.child=t.child,e.flags|=128,e=null):(il(),c=a.fallback,n=e.mode,a=su({mode:"visible",children:a.children},n),c=Ol(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,ql(e,t.child,null,l),a=e.child,a.memoizedState=sc(l),a.childLanes=rc(t,i,l),e.memoizedState=fc,e=tn(null,a));else if(ul(e),wc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var h=i.dgst;i=h,a=Error(m(419)),a.stack="",a.digest=i,Qa({value:a,source:null,stack:null}),e=mc(t,e,l)}else if(Et||ua(t,e,l,!1),i=(l&t.childLanes)!==0,Et||i){if(i=rt,i!==null&&(a=Eo(i,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,Nl(t,a),kt(i,t,a),cc;Kc(c)||Su(),e=mc(t,e,l)}else Kc(c)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,dt=ye(c.nextSibling),Nt=e,P=!0,Pe=null,me=!1,t!==null&&Sf(e,t),e=dc(e,a.children),e.flags|=4096);return e}return n?(il(),c=a.fallback,n=e.mode,o=t.child,h=o.sibling,a=_e(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,h!==null?c=_e(h,c):(c=Ol(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,tn(null,a),a=e.child,c=t.child.memoizedState,c===null?c=sc(l):(n=c.cachePool,n!==null?(o=bt._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Df(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=rc(t,i,l),e.memoizedState=fc,tn(t.child,a)):(ul(e),l=t.child,t=l.sibling,l=_e(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function dc(t,e){return e=su({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function su(t,e){return t=te(22,t,null,e),t.lanes=0,t}function mc(t,e,l){return ql(e,t.child,null,l),t=dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gs(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ni(t.return,e,l)}function hc(t,e,l,a,n,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function Ls(t,e,l){var a=e.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=gt.current,c=(i&2)!==0;if(c?(i=i&1|2,e.flags|=128):i&=1,x(gt,i),Mt(t,e,a,l),a=P?Xa:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gs(t,l,e);else if(t.tag===19)Gs(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&In(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),hc(e,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&In(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}hc(e,!0,l,null,u,a);break;case"together":hc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Le(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),fl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ua(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(m(153));if(e.child!==null){for(t=e.child,l=_e(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=_e(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function yc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Vn(t)))}function Wm(t,e,l){switch(e.tag){case 3:qt(e,e.stateNode.containerInfo),el(e,bt,t.memoizedState.cache),Ml();break;case 27:case 5:Ca(e);break;case 4:qt(e,e.stateNode.containerInfo);break;case 10:el(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Yi(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(ul(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Bs(t,e,l):(ul(e),t=Le(t,e,l),t!==null?t.sibling:null);ul(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ua(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Ls(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),x(gt,gt.current),a)break;return null;case 22:return e.lanes=0,Us(t,e,l,e.pendingProps);case 24:el(e,bt,t.memoizedState.cache)}return Le(t,e,l)}function Ys(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Et=!0;else{if(!yc(t,l)&&(e.flags&128)===0)return Et=!1,Wm(t,e,l);Et=(t.flags&131072)!==0}else Et=!1,P&&(e.flags&1048576)!==0&&gf(e,Xa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=jl(e.elementType),e.type=t,typeof t=="function")bi(t)?(a=Gl(t,a),e.tag=1,e=Hs(null,e,t,a,l)):(e.tag=0,e=oc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===ie){e.tag=11,e=Ns(null,e,t,a,l);break t}else if(n===I){e.tag=14,e=Os(null,e,t,a,l);break t}}throw e=Oe(t)||t,Error(m(306,e,""))}}return e;case 0:return oc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Gl(a,e.pendingProps),Hs(t,e,a,n,l);case 3:t:{if(qt(e,e.stateNode.containerInfo),t===null)throw Error(m(387));a=e.pendingProps;var u=e.memoizedState;n=u.element,Hi(t,e),Wa(e,a,null,l);var i=e.memoizedState;if(a=i.cache,el(e,bt,a),a!==u.cache&&Oi(e,[bt],l,!0),ka(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=qs(t,e,a,l);break t}else if(a!==n){n=se(Error(m(424)),e),Qa(n),e=qs(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(dt=ye(t.firstChild),Nt=e,P=!0,Pe=null,me=!0,l=Uf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ml(),a===n){e=Le(t,e,l);break t}Mt(t,e,a,l)}e=e.child}return e;case 26:return fu(t,e),t===null?(l=Fr(e.type,null,e.pendingProps,null))?e.memoizedState=l:P||(l=e.type,t=e.pendingProps,a=Cu(K.current).createElement(l),a[xt]=e,a[Qt]=t,Ut(a,l,t),Dt(a),e.stateNode=a):e.memoizedState=Fr(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ca(e),t===null&&P&&(a=e.stateNode=kr(e.type,e.pendingProps,K.current),Nt=e,me=!0,n=dt,hl(e.type)?(kc=n,dt=ye(a.firstChild)):dt=n),Mt(t,e,e.pendingProps.children,l),fu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&P&&((n=a=dt)&&(a=Dh(a,e.type,e.pendingProps,me),a!==null?(e.stateNode=a,Nt=e,dt=ye(a.firstChild),me=!1,n=!0):n=!1),n||tl(e)),Ca(e),n=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,a=u.children,Zc(n,u)?a=null:i!==null&&Zc(n,i)&&(e.flags|=32),e.memoizedState!==null&&(n=Qi(t,e,Ym,null,null,l),pn._currentValue=n),fu(t,e),Mt(t,e,a,l),e.child;case 6:return t===null&&P&&((t=l=dt)&&(l=Ch(l,e.pendingProps,me),l!==null?(e.stateNode=l,Nt=e,dt=null,t=!0):t=!1),t||tl(e)),null;case 13:return Bs(t,e,l);case 4:return qt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ql(e,null,a,l):Mt(t,e,a,l),e.child;case 11:return Ns(t,e,e.type,e.pendingProps,l);case 7:return Mt(t,e,e.pendingProps,l),e.child;case 8:return Mt(t,e,e.pendingProps.children,l),e.child;case 12:return Mt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,el(e,e.type,a.value),Mt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Rl(e),n=Ot(n),a=a(n),e.flags|=1,Mt(t,e,a,l),e.child;case 14:return Os(t,e,e.type,e.pendingProps,l);case 15:return Ms(t,e,e.type,e.pendingProps,l);case 19:return Ls(t,e,l);case 31:return km(t,e,l);case 22:return Us(t,e,l,e.pendingProps);case 24:return Rl(e),a=Ot(bt),t===null?(n=Ri(),n===null&&(n=rt,u=Mi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),e.memoizedState={parent:a,cache:n},ji(e),el(e,bt,n)):((t.lanes&l)!==0&&(Hi(t,e),Wa(e,null,null,l),ka()),n=t.memoizedState,u=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),el(e,bt,a)):(a=u.cache,el(e,bt,a),a!==n.cache&&Oi(e,[bt],l,!0))),Mt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Ye(t){t.flags|=4}function pc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(mr())t.flags|=8192;else throw Hl=kn,_i}else t.flags&=-16777217}function Xs(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ld(e))if(mr())t.flags|=8192;else throw Hl=kn,_i}function ru(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?So():536870912,t.lanes|=e,va|=e)}function en(t,e){if(!P)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function $m(t,e,l){var a=e.pendingProps;switch(zi(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),qe(bt),vt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(na(e)?Ye(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ci())),mt(e),null;case 26:var n=e.type,u=e.memoizedState;return t===null?(Ye(e),u!==null?(mt(e),Xs(e,u)):(mt(e),pc(e,n,null,a,l))):u?u!==t.memoizedState?(Ye(e),mt(e),Xs(e,u)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ye(e),mt(e),pc(e,n,t,a,l)),null;case 27:if(En(e),l=K.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(!a){if(e.stateNode===null)throw Error(m(166));return mt(e),null}t=O.current,na(e)?bf(e):(t=kr(n,a,l),e.stateNode=t,Ye(e))}return mt(e),null;case 5:if(En(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(!a){if(e.stateNode===null)throw Error(m(166));return mt(e),null}if(u=O.current,na(e))bf(e);else{var i=Cu(K.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[xt]=e,u[Qt]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(Ut(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ye(e)}}return mt(e),pc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(m(166));if(t=K.current,na(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Nt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[xt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Br(t.nodeValue,l)),t||tl(e,!0)}else t=Cu(t).createTextNode(a),t[xt]=e,e.stateNode=t}return mt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=na(e),l!==null){if(t===null){if(!a)throw Error(m(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[xt]=e}else Ml(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else l=Ci(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(le(e),e):(le(e),null);if((e.flags&128)!==0)throw Error(m(558))}return mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=na(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(m(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[xt]=e}else Ml(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=Ci(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(le(e),e):(le(e),null)}return le(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),ru(e,e.updateQueue),mt(e),null);case 4:return vt(),t===null&&Gc(e.stateNode.containerInfo),mt(e),null;case 10:return qe(e.type),mt(e),null;case 19:if(E(gt),a=e.memoizedState,a===null)return mt(e),null;if(n=(e.flags&128)!==0,u=a.rendering,u===null)if(n)en(a,!1);else{if(pt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=In(t),u!==null){for(e.flags|=128,en(a,!1),t=u.updateQueue,e.updateQueue=t,ru(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)yf(l,t),l=l.sibling;return x(gt,gt.current&1|2),P&&je(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&$t()>pu&&(e.flags|=128,n=!0,en(a,!1),e.lanes=4194304)}else{if(!n)if(t=In(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,ru(e,t),en(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!P)return mt(e),null}else 2*$t()-a.renderingStartTime>pu&&l!==536870912&&(e.flags|=128,n=!0,en(a,!1),e.lanes=4194304);a.isBackwards?(u.sibling=e.child,e.child=u):(t=a.last,t!==null?t.sibling=u:e.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=$t(),t.sibling=null,l=gt.current,x(gt,n?l&1|2:l&1),P&&je(e,a.treeForkCount),t):(mt(e),null);case 22:case 23:return le(e),Li(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),l=e.updateQueue,l!==null&&ru(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&E(_l),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),qe(bt),mt(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function Fm(t,e){switch(zi(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qe(bt),vt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return En(e),null;case 31:if(e.memoizedState!==null){if(le(e),e.alternate===null)throw Error(m(340));Ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(le(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return E(gt),null;case 4:return vt(),null;case 10:return qe(e.type),null;case 22:case 23:return le(e),Li(),t!==null&&E(_l),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return qe(bt),null;case 25:return null;default:return null}}function Qs(t,e){switch(zi(e),e.tag){case 3:qe(bt),vt();break;case 26:case 27:case 5:En(e);break;case 4:vt();break;case 31:e.memoizedState!==null&&le(e);break;case 13:le(e);break;case 19:E(gt);break;case 10:qe(e.type);break;case 22:case 23:le(e),Li(),t!==null&&E(_l);break;case 24:qe(bt)}}function ln(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){ut(e,e.return,c)}}function cl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=e;var o=l,h=c;try{h()}catch(v){ut(n,o,v)}}}a=a.next}while(a!==u)}}catch(v){ut(e,e.return,v)}}function Zs(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{_f(e,l)}catch(a){ut(t,t.return,a)}}}function Vs(t,e,l){l.props=Gl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){ut(t,e,a)}}function an(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){ut(t,e,n)}}function Ce(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ut(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ut(t,e,n)}else l.current=null}function Js(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ut(t,t.return,n)}}function vc(t,e,l){try{var a=t.stateNode;Sh(a,t.type,l,e),a[Qt]=e}catch(n){ut(t,t.return,n)}}function Ks(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&hl(t.type)||t.tag===4}function gc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ks(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&hl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ue));else if(a!==4&&(a===27&&hl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Sc(t,e,l),t=t.sibling;t!==null;)Sc(t,e,l),t=t.sibling}function du(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&hl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(du(t,e,l),t=t.sibling;t!==null;)du(t,e,l),t=t.sibling}function ws(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ut(e,a,l),e[xt]=t,e[Qt]=l}catch(u){ut(t,t.return,u)}}var Xe=!1,At=!1,bc=!1,ks=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function Im(t,e){if(t=t.containerInfo,Xc=_u,t=uf(t),mi(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var i=0,c=-1,o=-1,h=0,v=0,T=t,y=null;e:for(;;){for(var p;T!==l||n!==0&&T.nodeType!==3||(c=i+n),T!==u||a!==0&&T.nodeType!==3||(o=i+a),T.nodeType===3&&(i+=T.nodeValue.length),(p=T.firstChild)!==null;)y=T,T=p;for(;;){if(T===t)break e;if(y===l&&++h===n&&(c=i),y===u&&++v===a&&(o=i),(p=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=p}l=c===-1||o===-1?null:{start:c,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Qc={focusedElem:t,selectionRange:l},_u=!1,Ct=e;Ct!==null;)if(e=Ct,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ct=t;else for(;Ct!==null;){switch(e=Ct,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var N=Gl(l.type,n);t=a.getSnapshotBeforeUpdate(N,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(H){ut(l,l.return,H)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Jc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=e.sibling,t!==null){t.return=e.return,Ct=t;break}Ct=e.return}}function Ws(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ze(t,l),a&4&&ln(5,l);break;case 1:if(Ze(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){ut(l,l.return,i)}else{var n=Gl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){ut(l,l.return,i)}}a&64&&Zs(l),a&512&&an(l,l.return);break;case 3:if(Ze(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{_f(t,e)}catch(i){ut(l,l.return,i)}}break;case 27:e===null&&a&4&&ws(l);case 26:case 5:Ze(t,l),e===null&&a&4&&Js(l),a&512&&an(l,l.return);break;case 12:Ze(t,l);break;case 31:Ze(t,l),a&4&&Is(t,l);break;case 13:Ze(t,l),a&4&&Ps(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=ch.bind(null,l),xh(t,l))));break;case 22:if(a=l.memoizedState!==null||Xe,!a){e=e!==null&&e.memoizedState!==null||At,n=Xe;var u=At;Xe=a,(At=e)&&!u?Ve(t,l,(l.subtreeFlags&8772)!==0):Ze(t,l),Xe=n,At=u}break;case 30:break;default:Ze(t,l)}}function $s(t){var e=t.alternate;e!==null&&(t.alternate=null,$s(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$u(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ht=null,Vt=!1;function Qe(t,e,l){for(l=l.child;l!==null;)Fs(t,e,l),l=l.sibling}function Fs(t,e,l){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(xa,l)}catch{}switch(l.tag){case 26:At||Ce(l,e),Qe(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:At||Ce(l,e);var a=ht,n=Vt;hl(l.type)&&(ht=l.stateNode,Vt=!1),Qe(t,e,l),mn(l.stateNode),ht=a,Vt=n;break;case 5:At||Ce(l,e);case 6:if(a=ht,n=Vt,ht=null,Qe(t,e,l),ht=a,Vt=n,ht!==null)if(Vt)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(l.stateNode)}catch(u){ut(l,e,u)}else try{ht.removeChild(l.stateNode)}catch(u){ut(l,e,u)}break;case 18:ht!==null&&(Vt?(t=ht,Zr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Da(t)):Zr(ht,l.stateNode));break;case 4:a=ht,n=Vt,ht=l.stateNode.containerInfo,Vt=!0,Qe(t,e,l),ht=a,Vt=n;break;case 0:case 11:case 14:case 15:cl(2,l,e),At||cl(4,l,e),Qe(t,e,l);break;case 1:At||(Ce(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Vs(l,e,a)),Qe(t,e,l);break;case 21:Qe(t,e,l);break;case 22:At=(a=At)||l.memoizedState!==null,Qe(t,e,l),At=a;break;default:Qe(t,e,l)}}function Is(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Da(t)}catch(l){ut(e,e.return,l)}}}function Ps(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Da(t)}catch(l){ut(e,e.return,l)}}function Pm(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ks),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ks),e;default:throw Error(m(435,t.tag))}}function mu(t,e){var l=Pm(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=oh.bind(null,t,a);a.then(n,n)}})}function Jt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=t,i=e,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(hl(c.type)){ht=c.stateNode,Vt=!1;break t}break;case 5:ht=c.stateNode,Vt=!1;break t;case 3:case 4:ht=c.stateNode.containerInfo,Vt=!0;break t}c=c.return}if(ht===null)throw Error(m(160));Fs(u,i,n),ht=null,Vt=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)tr(e,t),e=e.sibling}var Se=null;function tr(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jt(e,t),Kt(t),a&4&&(cl(3,t,t.return),ln(3,t),cl(5,t,t.return));break;case 1:Jt(e,t),Kt(t),a&512&&(At||l===null||Ce(l,l.return)),a&64&&Xe&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Se;if(Jt(e,t),Kt(t),a&512&&(At||l===null||Ce(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ma]||u[xt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Ut(u,a,l),u[xt]=t,Dt(u),a=u;break t;case"link":var i=td("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break e}}u=n.createElement(a),Ut(u,a,l),n.head.appendChild(u);break;case"meta":if(i=td("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break e}}u=n.createElement(a),Ut(u,a,l),n.head.appendChild(u);break;default:throw Error(m(468,a))}u[xt]=t,Dt(u),a=u}t.stateNode=a}else ed(n,t.type,t.stateNode);else t.stateNode=Pr(n,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?ed(n,t.type,t.stateNode):Pr(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&vc(t,t.memoizedProps,l.memoizedProps)}break;case 27:Jt(e,t),Kt(t),a&512&&(At||l===null||Ce(l,l.return)),l!==null&&a&4&&vc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Jt(e,t),Kt(t),a&512&&(At||l===null||Ce(l,l.return)),t.flags&32){n=t.stateNode;try{kl(n,"")}catch(N){ut(t,t.return,N)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,vc(t,n,l!==null?l.memoizedProps:n)),a&1024&&(bc=!0);break;case 6:if(Jt(e,t),Kt(t),a&4){if(t.stateNode===null)throw Error(m(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(N){ut(t,t.return,N)}}break;case 3:if(Ou=null,n=Se,Se=xu(e.containerInfo),Jt(e,t),Se=n,Kt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(N){ut(t,t.return,N)}bc&&(bc=!1,er(t));break;case 4:a=Se,Se=xu(t.stateNode.containerInfo),Jt(e,t),Kt(t),Se=a;break;case 12:Jt(e,t),Kt(t);break;case 31:Jt(e,t),Kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,mu(t,a)));break;case 13:Jt(e,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(yu=$t()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,mu(t,a)));break;case 22:n=t.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,h=Xe,v=At;if(Xe=h||n,At=v||o,Jt(e,t),At=v,Xe=h,Kt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||o||Xe||At||Ll(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){o=l=e;try{if(u=o.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=o.stateNode;var T=o.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(N){ut(o,o.return,N)}}}else if(e.tag===6){if(l===null){o=e;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(N){ut(o,o.return,N)}}}else if(e.tag===18){if(l===null){o=e;try{var p=o.stateNode;n?Vr(p,!0):Vr(o.stateNode,!1)}catch(N){ut(o,o.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,mu(t,l))));break;case 19:Jt(e,t),Kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,mu(t,a)));break;case 30:break;case 21:break;default:Jt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Ks(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var n=l.stateNode,u=gc(t);du(t,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(kl(i,""),l.flags&=-33);var c=gc(t);du(t,c,i);break;case 3:case 4:var o=l.stateNode.containerInfo,h=gc(t);Sc(t,h,o);break;default:throw Error(m(161))}}catch(v){ut(t,t.return,v)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function er(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;er(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ze(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ws(t,e.alternate,e),e=e.sibling}function Ll(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:cl(4,e,e.return),Ll(e);break;case 1:Ce(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Vs(e,e.return,l),Ll(e);break;case 27:mn(e.stateNode);case 26:case 5:Ce(e,e.return),Ll(e);break;case 22:e.memoizedState===null&&Ll(e);break;case 30:Ll(e);break;default:Ll(e)}t=t.sibling}}function Ve(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:Ve(n,u,l),ln(4,u);break;case 1:if(Ve(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){ut(a,a.return,h)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Rf(o[n],c)}catch(h){ut(a,a.return,h)}}l&&i&64&&Zs(u),an(u,u.return);break;case 27:ws(u);case 26:case 5:Ve(n,u,l),l&&a===null&&i&4&&Js(u),an(u,u.return);break;case 12:Ve(n,u,l);break;case 31:Ve(n,u,l),l&&i&4&&Is(n,u);break;case 13:Ve(n,u,l),l&&i&4&&Ps(n,u);break;case 22:u.memoizedState===null&&Ve(n,u,l),an(u,u.return);break;case 30:break;default:Ve(n,u,l)}e=e.sibling}}function Tc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Za(l))}function Ec(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Za(t))}function be(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lr(t,e,l,a),e=e.sibling}function lr(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:be(t,e,l,a),n&2048&&ln(9,e);break;case 1:be(t,e,l,a);break;case 3:be(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Za(t)));break;case 12:if(n&2048){be(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){ut(e,e.return,o)}}else be(t,e,l,a);break;case 31:be(t,e,l,a);break;case 13:be(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?be(t,e,l,a):nn(t,e):u._visibility&2?be(t,e,l,a):(u._visibility|=2,ha(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Tc(i,e);break;case 24:be(t,e,l,a),n&2048&&Ec(e.alternate,e);break;default:be(t,e,l,a)}}function ha(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,c=l,o=a,h=i.flags;switch(i.tag){case 0:case 11:case 15:ha(u,i,c,o,n),ln(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?ha(u,i,c,o,n):nn(u,i):(v._visibility|=2,ha(u,i,c,o,n)),n&&h&2048&&Tc(i.alternate,i);break;case 24:ha(u,i,c,o,n),n&&h&2048&&Ec(i.alternate,i);break;default:ha(u,i,c,o,n)}e=e.sibling}}function nn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:nn(l,a),n&2048&&Tc(a.alternate,a);break;case 24:nn(l,a),n&2048&&Ec(a.alternate,a);break;default:nn(l,a)}e=e.sibling}}var un=8192;function ya(t,e,l){if(t.subtreeFlags&un)for(t=t.child;t!==null;)ar(t,e,l),t=t.sibling}function ar(t,e,l){switch(t.tag){case 26:ya(t,e,l),t.flags&un&&t.memoizedState!==null&&Lh(l,Se,t.memoizedState,t.memoizedProps);break;case 5:ya(t,e,l);break;case 3:case 4:var a=Se;Se=xu(t.stateNode.containerInfo),ya(t,e,l),Se=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=un,un=16777216,ya(t,e,l),un=a):ya(t,e,l));break;default:ya(t,e,l)}}function nr(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function cn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ct=a,ir(a,t)}nr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ur(t),t=t.sibling}function ur(t){switch(t.tag){case 0:case 11:case 15:cn(t),t.flags&2048&&cl(9,t,t.return);break;case 3:cn(t);break;case 12:cn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,hu(t)):cn(t);break;default:cn(t)}}function hu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ct=a,ir(a,t)}nr(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:cl(8,e,e.return),hu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,hu(e));break;default:hu(e)}t=t.sibling}}function ir(t,e){for(;Ct!==null;){var l=Ct;switch(l.tag){case 0:case 11:case 15:cl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ct=a;else t:for(l=t;Ct!==null;){a=Ct;var n=a.sibling,u=a.return;if($s(a),a===l){Ct=null;break t}if(n!==null){n.return=u,Ct=n;break t}Ct=u}}}var th={getCacheForType:function(t){var e=Ot(bt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Ot(bt).controller.signal}},eh=typeof WeakMap=="function"?WeakMap:Map,lt=0,rt=null,w=null,W=0,nt=0,ae=null,ol=!1,pa=!1,Ac=!1,Je=0,pt=0,fl=0,Yl=0,zc=0,ne=0,va=0,on=null,wt=null,Dc=!1,yu=0,cr=0,pu=1/0,vu=null,sl=null,zt=0,rl=null,ga=null,Ke=0,Cc=0,xc=null,or=null,fn=0,Nc=null;function ue(){return(lt&2)!==0&&W!==0?W&-W:S.T!==null?jc():Ao()}function fr(){if(ne===0)if((W&536870912)===0||P){var t=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),ne=t}else ne=536870912;return t=ee.current,t!==null&&(t.flags|=32),ne}function kt(t,e,l){(t===rt&&(nt===2||nt===9)||t.cancelPendingCommit!==null)&&(Sa(t,0),dl(t,W,ne,!1)),Oa(t,l),((lt&2)===0||t!==rt)&&(t===rt&&((lt&2)===0&&(Yl|=l),pt===4&&dl(t,W,ne,!1)),xe(t))}function sr(t,e,l){if((lt&6)!==0)throw Error(m(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Na(t,e),n=a?nh(t,e):Mc(t,e,!0),u=a;do{if(n===0){pa&&!a&&dl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!lh(l)){n=Mc(t,e,!1),u=!1;continue}if(n===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;n=on;var o=c.current.memoizedState.isDehydrated;if(o&&(Sa(c,i).flags|=256),i=Mc(c,i,!1),i!==2){if(Ac&&!o){c.errorRecoveryDisabledLanes|=u,Yl|=u,n=4;break t}u=wt,wt=n,u!==null&&(wt===null?wt=u:wt.push.apply(wt,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Sa(t,0),dl(t,e,0,!0);break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:dl(a,e,ne,!ol);break t;case 2:wt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(n=yu+300-$t(),10<n)){if(dl(a,e,ne,!ol),xn(a,0,!0)!==0)break t;Ke=e,a.timeoutHandle=Xr(rr.bind(null,a,l,wt,vu,Dc,e,ne,Yl,va,ol,u,"Throttled",-0,0),n);break t}rr(a,l,wt,vu,Dc,e,ne,Yl,va,ol,u,null,-0,0)}}break}while(!0);xe(t)}function rr(t,e,l,a,n,u,i,c,o,h,v,T,y,p){if(t.timeoutHandle=-1,T=e.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ue},ar(e,u,T);var N=(u&62914560)===u?yu-$t():(u&4194048)===u?cr-$t():0;if(N=Yh(T,N),N!==null){Ke=u,t.cancelPendingCommit=N(Sr.bind(null,t,e,u,l,a,n,i,c,o,v,T,null,y,p)),dl(t,u,i,!h);return}}Sr(t,e,u,l,a,n,i,c,o)}function lh(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!Pt(u(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dl(t,e,l,a){e&=~zc,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var u=31-It(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&bo(t,l,e)}function gu(){return(lt&6)===0?(sn(0),!1):!0}function Oc(){if(w!==null){if(nt===0)var t=w.return;else t=w,He=Ul=null,Ji(t),fa=null,Ja=0,t=w;for(;t!==null;)Qs(t.alternate,t),t=t.return;w=null}}function Sa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Eh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ke=0,Oc(),rt=t,w=l=_e(t.current,null),W=e,nt=0,ae=null,ol=!1,pa=Na(t,e),Ac=!1,va=ne=zc=Yl=fl=pt=0,wt=on=null,Dc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-It(a),u=1<<n;e|=t[n],a&=~u}return Je=e,Ln(),l}function dr(t,e){V=null,S.H=Pa,e===oa||e===wn?(e=Nf(),nt=3):e===_i?(e=Nf(),nt=4):nt=e===cc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ae=e,w===null&&(pt=1,cu(t,se(e,t.current)))}function mr(){var t=ee.current;return t===null?!0:(W&4194048)===W?he===null:(W&62914560)===W||(W&536870912)!==0?t===he:!1}function hr(){var t=S.H;return S.H=Pa,t===null?Pa:t}function yr(){var t=S.A;return S.A=th,t}function Su(){pt=4,ol||(W&4194048)!==W&&ee.current!==null||(pa=!0),(fl&134217727)===0&&(Yl&134217727)===0||rt===null||dl(rt,W,ne,!1)}function Mc(t,e,l){var a=lt;lt|=2;var n=hr(),u=yr();(rt!==t||W!==e)&&(vu=null,Sa(t,e)),e=!1;var i=pt;t:do try{if(nt!==0&&w!==null){var c=w,o=ae;switch(nt){case 8:Oc(),i=6;break t;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var h=nt;if(nt=0,ae=null,ba(t,c,o,h),l&&pa){i=0;break t}break;default:h=nt,nt=0,ae=null,ba(t,c,o,h)}}ah(),i=pt;break}catch(v){dr(t,v)}while(!0);return e&&t.shellSuspendCounter++,He=Ul=null,lt=a,S.H=n,S.A=u,w===null&&(rt=null,W=0,Ln()),i}function ah(){for(;w!==null;)pr(w)}function nh(t,e){var l=lt;lt|=2;var a=hr(),n=yr();rt!==t||W!==e?(vu=null,pu=$t()+500,Sa(t,e)):pa=Na(t,e);t:do try{if(nt!==0&&w!==null){e=w;var u=ae;e:switch(nt){case 1:nt=0,ae=null,ba(t,e,u,1);break;case 2:case 9:if(Cf(u)){nt=0,ae=null,vr(e);break}e=function(){nt!==2&&nt!==9||rt!==t||(nt=7),xe(t)},u.then(e,e);break t;case 3:nt=7;break t;case 4:nt=5;break t;case 7:Cf(u)?(nt=0,ae=null,vr(e)):(nt=0,ae=null,ba(t,e,u,7));break;case 5:var i=null;switch(w.tag){case 26:i=w.memoizedState;case 5:case 27:var c=w;if(i?ld(i):c.stateNode.complete){nt=0,ae=null;var o=c.sibling;if(o!==null)w=o;else{var h=c.return;h!==null?(w=h,bu(h)):w=null}break e}}nt=0,ae=null,ba(t,e,u,5);break;case 6:nt=0,ae=null,ba(t,e,u,6);break;case 8:Oc(),pt=6;break t;default:throw Error(m(462))}}uh();break}catch(v){dr(t,v)}while(!0);return He=Ul=null,S.H=a,S.A=n,lt=l,w!==null?0:(rt=null,W=0,Ln(),pt)}function uh(){for(;w!==null&&!Nd();)pr(w)}function pr(t){var e=Ys(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?bu(t):w=e}function vr(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=js(l,e,e.pendingProps,e.type,void 0,W);break;case 11:e=js(l,e,e.pendingProps,e.type.render,e.ref,W);break;case 5:Ji(e);default:Qs(l,e),e=w=yf(e,Je),e=Ys(l,e,Je)}t.memoizedProps=t.pendingProps,e===null?bu(t):w=e}function ba(t,e,l,a){He=Ul=null,Ji(e),fa=null,Ja=0;var n=e.return;try{if(wm(t,n,e,l,W)){pt=1,cu(t,se(l,t.current)),w=null;return}}catch(u){if(n!==null)throw w=n,u;pt=1,cu(t,se(l,t.current)),w=null;return}e.flags&32768?(P||a===1?t=!0:pa||(W&536870912)!==0?t=!1:(ol=t=!0,(a===2||a===9||a===3||a===6)&&(a=ee.current,a!==null&&a.tag===13&&(a.flags|=16384))),gr(e,t)):bu(e)}function bu(t){var e=t;do{if((e.flags&32768)!==0){gr(e,ol);return}t=e.return;var l=$m(e.alternate,e,Je);if(l!==null){w=l;return}if(e=e.sibling,e!==null){w=e;return}w=e=t}while(e!==null);pt===0&&(pt=5)}function gr(t,e){do{var l=Fm(t.alternate,t);if(l!==null){l.flags&=32767,w=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){w=t;return}w=t=l}while(t!==null);pt=6,w=null}function Sr(t,e,l,a,n,u,i,c,o){t.cancelPendingCommit=null;do Tu();while(zt!==0);if((lt&6)!==0)throw Error(m(327));if(e!==null){if(e===t.current)throw Error(m(177));if(u=e.lanes|e.childLanes,u|=gi,Gd(t,l,u,i,c,o),t===rt&&(w=rt=null,W=0),ga=e,rl=t,Ke=l,Cc=u,xc=n,or=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fh(An,function(){return zr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=C.p,C.p=2,i=lt,lt|=4;try{Im(t,e,l)}finally{lt=i,C.p=n,S.T=a}}zt=1,br(),Tr(),Er()}}function br(){if(zt===1){zt=0;var t=rl,e=ga,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var a=C.p;C.p=2;var n=lt;lt|=4;try{tr(e,t);var u=Qc,i=uf(t.containerInfo),c=u.focusedElem,o=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&nf(c.ownerDocument.documentElement,c)){if(o!==null&&mi(c)){var h=o.start,v=o.end;if(v===void 0&&(v=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(v,c.value.length);else{var T=c.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var p=y.getSelection(),N=c.textContent.length,H=Math.min(o.start,N),ft=o.end===void 0?H:Math.min(o.end,N);!p.extend&&H>ft&&(i=ft,ft=H,H=i);var r=af(c,H),f=af(c,ft);if(r&&f&&(p.rangeCount!==1||p.anchorNode!==r.node||p.anchorOffset!==r.offset||p.focusNode!==f.node||p.focusOffset!==f.offset)){var d=T.createRange();d.setStart(r.node,r.offset),p.removeAllRanges(),H>ft?(p.addRange(d),p.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),p.addRange(d))}}}}for(T=[],p=c;p=p.parentNode;)p.nodeType===1&&T.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<T.length;c++){var b=T[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}_u=!!Xc,Qc=Xc=null}finally{lt=n,C.p=a,S.T=l}}t.current=e,zt=2}}function Tr(){if(zt===2){zt=0;var t=rl,e=ga,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var a=C.p;C.p=2;var n=lt;lt|=4;try{Ws(t,e.alternate,e)}finally{lt=n,C.p=a,S.T=l}}zt=3}}function Er(){if(zt===4||zt===3){zt=0,Od();var t=rl,e=ga,l=Ke,a=or;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?zt=5:(zt=0,ga=rl=null,Ar(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(sl=null),ku(l),e=e.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(xa,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=S.T,n=C.p,C.p=2,S.T=null;try{for(var u=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{S.T=e,C.p=n}}(Ke&3)!==0&&Tu(),xe(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Nc?fn++:(fn=0,Nc=t):fn=0,sn(0)}}function Ar(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Za(e)))}function Tu(){return br(),Tr(),Er(),zr()}function zr(){if(zt!==5)return!1;var t=rl,e=Cc;Cc=0;var l=ku(Ke),a=S.T,n=C.p;try{C.p=32>l?32:l,S.T=null,l=xc,xc=null;var u=rl,i=Ke;if(zt=0,ga=rl=null,Ke=0,(lt&6)!==0)throw Error(m(331));var c=lt;if(lt|=4,ur(u.current),lr(u,u.current,i,l),lt=c,sn(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(xa,u)}catch{}return!0}finally{C.p=n,S.T=a,Ar(t,e)}}function Dr(t,e,l){e=se(l,e),e=ic(t.stateNode,e,2),t=nl(t,e,2),t!==null&&(Oa(t,2),xe(t))}function ut(t,e,l){if(t.tag===3)Dr(t,t,l);else for(;e!==null;){if(e.tag===3){Dr(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(sl===null||!sl.has(a))){t=se(l,t),l=Cs(2),a=nl(e,l,2),a!==null&&(xs(l,a,e,t),Oa(a,2),xe(a));break}}e=e.return}}function Uc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new eh;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Ac=!0,n.add(l),t=ih.bind(null,t,e,l),e.then(t,t))}function ih(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,rt===t&&(W&l)===l&&(pt===4||pt===3&&(W&62914560)===W&&300>$t()-yu?(lt&2)===0&&Sa(t,0):zc|=l,va===W&&(va=0)),xe(t)}function Cr(t,e){e===0&&(e=So()),t=Nl(t,e),t!==null&&(Oa(t,e),xe(t))}function ch(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Cr(t,l)}function oh(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(e),Cr(t,l)}function fh(t,e){return Vu(t,e)}var Eu=null,Ta=null,Rc=!1,Au=!1,_c=!1,ml=0;function xe(t){t!==Ta&&t.next===null&&(Ta===null?Eu=Ta=t:Ta=Ta.next=t),Au=!0,Rc||(Rc=!0,rh())}function sn(t,e){if(!_c&&Au){_c=!0;do for(var l=!1,a=Eu;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-It(42|t)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Mr(a,u))}else u=W,u=xn(a,a===rt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Na(a,u)||(l=!0,Mr(a,u));a=a.next}while(l);_c=!1}}function sh(){xr()}function xr(){Au=Rc=!1;var t=0;ml!==0&&Th()&&(t=ml);for(var e=$t(),l=null,a=Eu;a!==null;){var n=a.next,u=Nr(a,e);u===0?(a.next=null,l===null?Eu=n:l.next=n,n===null&&(Ta=l)):(l=a,(t!==0||(u&3)!==0)&&(Au=!0)),a=n}zt!==0&&zt!==5||sn(t),ml!==0&&(ml=0)}function Nr(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-It(u),c=1<<i,o=n[i];o===-1?((c&l)===0||(c&a)!==0)&&(n[i]=Bd(c,e)):o<=e&&(t.expiredLanes|=c),u&=~c}if(e=rt,l=W,l=xn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(nt===2||nt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ju(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Na(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Ju(a),ku(l)){case 2:case 8:l=vo;break;case 32:l=An;break;case 268435456:l=go;break;default:l=An}return a=Or.bind(null,t),l=Vu(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Ju(a),t.callbackPriority=2,t.callbackNode=null,2}function Or(t,e){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Tu()&&t.callbackNode!==l)return null;var a=W;return a=xn(t,t===rt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(sr(t,a,e),Nr(t,$t()),t.callbackNode!=null&&t.callbackNode===l?Or.bind(null,t):null)}function Mr(t,e){if(Tu())return null;sr(t,e,!0)}function rh(){Ah(function(){(lt&6)!==0?Vu(po,sh):xr()})}function jc(){if(ml===0){var t=ia;t===0&&(t=zn,zn<<=1,(zn&261888)===0&&(zn=256)),ml=t}return ml}function Ur(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Un(""+t)}function Rr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function dh(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var u=Ur((n[Qt]||null).action),i=a.submitter;i&&(e=(e=i[Qt]||null)?Ur(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var c=new Hn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ml!==0){var o=i?Rr(n,i):new FormData(n);tc(l,{pending:!0,data:o,method:n.method,action:u},null,o)}}else typeof u=="function"&&(c.preventDefault(),o=i?Rr(n,i):new FormData(n),tc(l,{pending:!0,data:o,method:n.method,action:u},u,o))},currentTarget:n}]})}}for(var Hc=0;Hc<vi.length;Hc++){var qc=vi[Hc],mh=qc.toLowerCase(),hh=qc[0].toUpperCase()+qc.slice(1);ge(mh,"on"+hh)}ge(ff,"onAnimationEnd"),ge(sf,"onAnimationIteration"),ge(rf,"onAnimationStart"),ge("dblclick","onDoubleClick"),ge("focusin","onFocus"),ge("focusout","onBlur"),ge(Mm,"onTransitionRun"),ge(Um,"onTransitionStart"),ge(Rm,"onTransitionCancel"),ge(df,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),zl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zl("onBeforeInput",["compositionend","keypress","textInput","paste"]),zl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rn));function _r(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var i=a.length-1;0<=i;i--){var c=a[i],o=c.instance,h=c.currentTarget;if(c=c.listener,o!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=h;try{u(n)}catch(v){Gn(v)}n.currentTarget=null,u=o}else for(i=0;i<a.length;i++){if(c=a[i],o=c.instance,h=c.currentTarget,c=c.listener,o!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=h;try{u(n)}catch(v){Gn(v)}n.currentTarget=null,u=o}}}}function k(t,e){var l=e[Wu];l===void 0&&(l=e[Wu]=new Set);var a=t+"__bubble";l.has(a)||(jr(e,t,2,!1),l.add(a))}function Bc(t,e,l){var a=0;e&&(a|=4),jr(l,t,a,e)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Gc(t){if(!t[zu]){t[zu]=!0,Co.forEach(function(l){l!=="selectionchange"&&(yh.has(l)||Bc(l,!1,t),Bc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zu]||(e[zu]=!0,Bc("selectionchange",!1,e))}}function jr(t,e,l,a){switch(fd(e)){case 2:var n=Zh;break;case 8:n=Vh;break;default:n=Pc}l=n.bind(null,e,l,t),n=void 0,!ni||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Lc(t,e,l,a,n){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Zl(c),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){a=u=i;continue t}c=c.parentNode}}a=a.return}Go(function(){var h=u,v=li(l),T=[];t:{var y=mf.get(t);if(y!==void 0){var p=Hn,N=t;switch(t){case"keypress":if(_n(l)===0)break t;case"keydown":case"keyup":p=om;break;case"focusin":N="focus",p=oi;break;case"focusout":N="blur",p=oi;break;case"beforeblur":case"afterblur":p=oi;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rm;break;case ff:case sf:case rf:p=Pd;break;case df:p=mm;break;case"scroll":case"scrollend":p=kd;break;case"wheel":p=ym;break;case"copy":case"cut":case"paste":p=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zo;break;case"toggle":case"beforetoggle":p=vm}var H=(e&4)!==0,ft=!H&&(t==="scroll"||t==="scrollend"),r=H?y!==null?y+"Capture":null:y;H=[];for(var f=h,d;f!==null;){var b=f;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||r===null||(b=Ra(f,r),b!=null&&H.push(dn(f,b,d))),ft)break;f=f.return}0<H.length&&(y=new p(y,N,null,l,v),T.push({event:y,listeners:H}))}}if((e&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",y&&l!==ei&&(N=l.relatedTarget||l.fromElement)&&(Zl(N)||N[Ql]))break t;if((p||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,p?(N=l.relatedTarget||l.toElement,p=h,N=N?Zl(N):null,N!==null&&(ft=X(N),H=N.tag,N!==ft||H!==5&&H!==27&&H!==6)&&(N=null)):(p=null,N=h),p!==N)){if(H=Xo,b="onMouseLeave",r="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(H=Zo,b="onPointerLeave",r="onPointerEnter",f="pointer"),ft=p==null?y:Ua(p),d=N==null?y:Ua(N),y=new H(b,f+"leave",p,l,v),y.target=ft,y.relatedTarget=d,b=null,Zl(v)===h&&(H=new H(r,f+"enter",N,l,v),H.target=d,H.relatedTarget=ft,b=H),ft=b,p&&N)e:{for(H=ph,r=p,f=N,d=0,b=r;b;b=H(b))d++;b=0;for(var _=f;_;_=H(_))b++;for(;0<d-b;)r=H(r),d--;for(;0<b-d;)f=H(f),b--;for(;d--;){if(r===f||f!==null&&r===f.alternate){H=r;break e}r=H(r),f=H(f)}H=null}else H=null;p!==null&&Hr(T,y,p,H,!1),N!==null&&ft!==null&&Hr(T,ft,N,H,!0)}}t:{if(y=h?Ua(h):window,p=y.nodeName&&y.nodeName.toLowerCase(),p==="select"||p==="input"&&y.type==="file")var tt=Fo;else if(Wo(y))if(Io)tt=xm;else{tt=Dm;var M=zm}else p=y.nodeName,!p||p.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&ti(h.elementType)&&(tt=Fo):tt=Cm;if(tt&&(tt=tt(t,h))){$o(T,tt,l,v);break t}M&&M(t,y,h),t==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&Pu(y,"number",y.value)}switch(M=h?Ua(h):window,t){case"focusin":(Wo(M)||M.contentEditable==="true")&&(Il=M,hi=h,Ya=null);break;case"focusout":Ya=hi=Il=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,cf(T,l,v);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":cf(T,l,v)}var J;if(si)t:{switch(t){case"compositionstart":var $="onCompositionStart";break t;case"compositionend":$="onCompositionEnd";break t;case"compositionupdate":$="onCompositionUpdate";break t}$=void 0}else Fl?wo(t,l)&&($="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&($="onCompositionStart");$&&(Vo&&l.locale!=="ko"&&(Fl||$!=="onCompositionStart"?$==="onCompositionEnd"&&Fl&&(J=Lo()):(Fe=v,ui="value"in Fe?Fe.value:Fe.textContent,Fl=!0)),M=Du(h,$),0<M.length&&($=new Qo($,t,null,l,v),T.push({event:$,listeners:M}),J?$.data=J:(J=ko(l),J!==null&&($.data=J)))),(J=Sm?bm(t,l):Tm(t,l))&&($=Du(h,"onBeforeInput"),0<$.length&&(M=new Qo("onBeforeInput","beforeinput",null,l,v),T.push({event:M,listeners:$}),M.data=J)),dh(T,t,h,l,v)}_r(T,e)})}function dn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Du(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ra(t,l),n!=null&&a.unshift(dn(t,n,u)),n=Ra(t,e),n!=null&&a.push(dn(t,n,u))),t.tag===3)return a;t=t.return}return[]}function ph(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hr(t,e,l,a,n){for(var u=e._reactName,i=[];l!==null&&l!==a;){var c=l,o=c.alternate,h=c.stateNode;if(c=c.tag,o!==null&&o===a)break;c!==5&&c!==26&&c!==27||h===null||(o=h,n?(h=Ra(l,u),h!=null&&i.unshift(dn(l,h,o))):n||(h=Ra(l,u),h!=null&&i.push(dn(l,h,o)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var vh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function qr(t){return(typeof t=="string"?t:""+t).replace(vh,`
`).replace(gh,"")}function Br(t,e){return e=qr(e),qr(t)===e}function ot(t,e,l,a,n,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||kl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&kl(t,""+a);break;case"className":On(t,"class",a);break;case"tabIndex":On(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":On(t,l,a);break;case"style":qo(t,a,u);break;case"data":if(e!=="object"){On(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Un(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&ot(t,e,"name",n.name,n,null),ot(t,e,"formEncType",n.formEncType,n,null),ot(t,e,"formMethod",n.formMethod,n,null),ot(t,e,"formTarget",n.formTarget,n,null)):(ot(t,e,"encType",n.encType,n,null),ot(t,e,"method",n.method,n,null),ot(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Un(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ue);break;case"onScroll":a!=null&&k("scroll",t);break;case"onScrollEnd":a!=null&&k("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Un(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":k("beforetoggle",t),k("toggle",t),Nn(t,"popover",a);break;case"xlinkActuate":Me(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Me(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Me(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Me(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Me(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Me(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Me(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Me(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Me(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Kd.get(l)||l,Nn(t,l,a))}}function Yc(t,e,l,a,n,u){switch(l){case"style":qo(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=l}}break;case"children":typeof a=="string"?kl(t,a):(typeof a=="number"||typeof a=="bigint")&&kl(t,""+a);break;case"onScroll":a!=null&&k("scroll",t);break;case"onScrollEnd":a!=null&&k("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ue);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xo.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),u=t[Qt]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Nn(t,l,a)}}}function Ut(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",t),k("load",t);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ot(t,e,u,i,l,null)}}n&&ot(t,e,"srcSet",l.srcSet,l,null),a&&ot(t,e,"src",l.src,l,null);return;case"input":k("invalid",t);var c=u=i=n=null,o=null,h=null;for(a in l)if(l.hasOwnProperty(a)){var v=l[a];if(v!=null)switch(a){case"name":n=v;break;case"type":i=v;break;case"checked":o=v;break;case"defaultChecked":h=v;break;case"value":u=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,e));break;default:ot(t,e,a,v,l,null)}}Ro(t,u,c,o,h,i,n,!1);return;case"select":k("invalid",t),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:ot(t,e,n,c,l,null)}e=u,l=i,t.multiple=!!a,e!=null?wl(t,!!a,e,!1):l!=null&&wl(t,!!a,l,!0);return;case"textarea":k("invalid",t),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:ot(t,e,i,c,l,null)}jo(t,a,n,u);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ot(t,e,o,a,l,null)}return;case"dialog":k("beforetoggle",t),k("toggle",t),k("cancel",t),k("close",t);break;case"iframe":case"object":k("load",t);break;case"video":case"audio":for(a=0;a<rn.length;a++)k(rn[a],t);break;case"image":k("error",t),k("load",t);break;case"details":k("toggle",t);break;case"embed":case"source":case"link":k("error",t),k("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ot(t,e,h,a,l,null)}return;default:if(ti(e)){for(v in l)l.hasOwnProperty(v)&&(a=l[v],a!==void 0&&Yc(t,e,v,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ot(t,e,c,a,l,null))}function Sh(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,o=null,h=null,v=null;for(p in l){var T=l[p];if(l.hasOwnProperty(p)&&T!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=T;default:a.hasOwnProperty(p)||ot(t,e,p,null,a,T)}}for(var y in a){var p=a[y];if(T=l[y],a.hasOwnProperty(y)&&(p!=null||T!=null))switch(y){case"type":u=p;break;case"name":n=p;break;case"checked":h=p;break;case"defaultChecked":v=p;break;case"value":i=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,e));break;default:p!==T&&ot(t,e,y,p,a,T)}}Iu(t,i,c,o,h,v,u,n);return;case"select":p=i=c=y=null;for(u in l)if(o=l[u],l.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":p=o;default:a.hasOwnProperty(u)||ot(t,e,u,null,a,o)}for(n in a)if(u=a[n],o=l[n],a.hasOwnProperty(n)&&(u!=null||o!=null))switch(n){case"value":y=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==o&&ot(t,e,n,u,a,o)}e=c,l=i,a=p,y!=null?wl(t,!!l,y,!1):!!a!=!!l&&(e!=null?wl(t,!!l,e,!0):wl(t,!!l,l?[]:"",!1));return;case"textarea":p=y=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ot(t,e,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":y=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==u&&ot(t,e,i,n,a,u)}_o(t,y,p);return;case"option":for(var N in l)if(y=l[N],l.hasOwnProperty(N)&&y!=null&&!a.hasOwnProperty(N))switch(N){case"selected":t.selected=!1;break;default:ot(t,e,N,null,a,y)}for(o in a)if(y=a[o],p=l[o],a.hasOwnProperty(o)&&y!==p&&(y!=null||p!=null))switch(o){case"selected":t.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ot(t,e,o,y,a,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in l)y=l[H],l.hasOwnProperty(H)&&y!=null&&!a.hasOwnProperty(H)&&ot(t,e,H,null,a,y);for(h in a)if(y=a[h],p=l[h],a.hasOwnProperty(h)&&y!==p&&(y!=null||p!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,e));break;default:ot(t,e,h,y,a,p)}return;default:if(ti(e)){for(var ft in l)y=l[ft],l.hasOwnProperty(ft)&&y!==void 0&&!a.hasOwnProperty(ft)&&Yc(t,e,ft,void 0,a,y);for(v in a)y=a[v],p=l[v],!a.hasOwnProperty(v)||y===p||y===void 0&&p===void 0||Yc(t,e,v,y,a,p);return}}for(var r in l)y=l[r],l.hasOwnProperty(r)&&y!=null&&!a.hasOwnProperty(r)&&ot(t,e,r,null,a,y);for(T in a)y=a[T],p=l[T],!a.hasOwnProperty(T)||y===p||y==null&&p==null||ot(t,e,T,y,a,p)}function Gr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Gr(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var o=l[a],h=o.startTime;if(h>c)break;var v=o.transferSize,T=o.initiatorType;v&&Gr(T)&&(o=o.responseEnd,i+=v*(o<c?1:(c-h)/(o-h)))}if(--a,e+=8*(u+i)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xc=null,Qc=null;function Cu(t){return t.nodeType===9?t:t.ownerDocument}function Lr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vc=null;function Th(){var t=window.event;return t&&t.type==="popstate"?t===Vc?!1:(Vc=t,!0):(Vc=null,!1)}var Xr=typeof setTimeout=="function"?setTimeout:void 0,Eh=typeof clearTimeout=="function"?clearTimeout:void 0,Qr=typeof Promise=="function"?Promise:void 0,Ah=typeof queueMicrotask=="function"?queueMicrotask:typeof Qr<"u"?function(t){return Qr.resolve(null).then(t).catch(zh)}:Xr;function zh(t){setTimeout(function(){throw t})}function hl(t){return t==="head"}function Zr(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Da(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")mn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,mn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Ma]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&mn(t.ownerDocument.body);l=n}while(l);Da(e)}function Vr(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Jc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Jc(l),$u(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Dh(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ma])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=ye(t.nextSibling),t===null)break}return null}function Ch(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=ye(t.nextSibling),t===null))return null;return t}function Jr(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ye(t.nextSibling),t===null))return null;return t}function Kc(t){return t.data==="$?"||t.data==="$~"}function wc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function xh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function ye(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var kc=null;function Kr(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return ye(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function wr(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function kr(t,e,l){switch(e=Cu(l),t){case"html":if(t=e.documentElement,!t)throw Error(m(452));return t;case"head":if(t=e.head,!t)throw Error(m(453));return t;case"body":if(t=e.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function mn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$u(t)}var pe=new Map,Wr=new Set;function xu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var we=C.d;C.d={f:Nh,r:Oh,D:Mh,C:Uh,L:Rh,m:_h,X:Hh,S:jh,M:qh};function Nh(){var t=we.f(),e=gu();return t||e}function Oh(t){var e=Vl(t);e!==null&&e.tag===5&&e.type==="form"?ds(e):we.r(t)}var Ea=typeof document>"u"?null:document;function $r(t,e,l){var a=Ea;if(a&&typeof e=="string"&&e){var n=oe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Wr.has(n)||(Wr.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Ut(e,"link",t),Dt(e),a.head.appendChild(e)))}}function Mh(t){we.D(t),$r("dns-prefetch",t,null)}function Uh(t,e){we.C(t,e),$r("preconnect",t,e)}function Rh(t,e,l){we.L(t,e,l);var a=Ea;if(a&&t&&e){var n='link[rel="preload"][as="'+oe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+oe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+oe(l.imageSizes)+'"]')):n+='[href="'+oe(t)+'"]';var u=n;switch(e){case"style":u=Aa(t);break;case"script":u=za(t)}pe.has(u)||(t=U({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),pe.set(u,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(hn(u))||e==="script"&&a.querySelector(yn(u))||(e=a.createElement("link"),Ut(e,"link",t),Dt(e),a.head.appendChild(e)))}}function _h(t,e){we.m(t,e);var l=Ea;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+oe(a)+'"][href="'+oe(t)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=za(t)}if(!pe.has(u)&&(t=U({rel:"modulepreload",href:t},e),pe.set(u,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(u)))return}a=l.createElement("link"),Ut(a,"link",t),Dt(a),l.head.appendChild(a)}}}function jh(t,e,l){we.S(t,e,l);var a=Ea;if(a&&t){var n=Jl(a).hoistableStyles,u=Aa(t);e=e||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(hn(u)))c.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},l),(l=pe.get(u))&&Wc(t,l);var o=i=a.createElement("link");Dt(o),Ut(o,"link",t),o._p=new Promise(function(h,v){o.onload=h,o.onerror=v}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Nu(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Hh(t,e){we.X(t,e);var l=Ea;if(l&&t){var a=Jl(l).hoistableScripts,n=za(t),u=a.get(n);u||(u=l.querySelector(yn(n)),u||(t=U({src:t,async:!0},e),(e=pe.get(n))&&$c(t,e),u=l.createElement("script"),Dt(u),Ut(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function qh(t,e){we.M(t,e);var l=Ea;if(l&&t){var a=Jl(l).hoistableScripts,n=za(t),u=a.get(n);u||(u=l.querySelector(yn(n)),u||(t=U({src:t,async:!0,type:"module"},e),(e=pe.get(n))&&$c(t,e),u=l.createElement("script"),Dt(u),Ut(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Fr(t,e,l,a){var n=(n=K.current)?xu(n):null;if(!n)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Aa(l.href),l=Jl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Aa(l.href);var u=Jl(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(hn(t)))&&!u._p&&(i.instance=u,i.state.loading=5),pe.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},pe.set(t,l),u||Bh(n,t,l,i.state))),e&&a===null)throw Error(m(528,""));return i}if(e&&a!==null)throw Error(m(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=za(l),l=Jl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function Aa(t){return'href="'+oe(t)+'"'}function hn(t){return'link[rel="stylesheet"]['+t+"]"}function Ir(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Bh(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Ut(e,"link",l),Dt(e),t.head.appendChild(e))}function za(t){return'[src="'+oe(t)+'"]'}function yn(t){return"script[async]"+t}function Pr(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+oe(l.href)+'"]');if(a)return e.instance=a,Dt(a),a;var n=U({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Dt(a),Ut(a,"style",n),Nu(a,l.precedence,t),e.instance=a;case"stylesheet":n=Aa(l.href);var u=t.querySelector(hn(n));if(u)return e.state.loading|=4,e.instance=u,Dt(u),u;a=Ir(l),(n=pe.get(n))&&Wc(a,n),u=(t.ownerDocument||t).createElement("link"),Dt(u);var i=u;return i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),Ut(u,"link",a),e.state.loading|=4,Nu(u,l.precedence,t),e.instance=u;case"script":return u=za(l.src),(n=t.querySelector(yn(u)))?(e.instance=n,Dt(n),n):(a=l,(n=pe.get(u))&&(a=U({},l),$c(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Dt(n),Ut(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Nu(a,l.precedence,t));return e.instance}function Nu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===e)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Wc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function $c(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ou=null;function td(t,e,l){if(Ou===null){var a=new Map,n=Ou=new Map;n.set(l,a)}else n=Ou,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var u=l[n];if(!(u[Ma]||u[xt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function ed(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Gh(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ld(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Lh(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Aa(a.href),u=e.querySelector(hn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Mu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,Dt(u);return}u=e.ownerDocument||e,a=Ir(a),(n=pe.get(n))&&Wc(a,n),u=u.createElement("link"),Dt(u);var i=u;i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),Ut(u,"link",a),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Mu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Fc=0;function Yh(t,e){return t.stylesheets&&t.count===0&&Ru(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Ru(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Fc===0&&(Fc=62500*bh());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ru(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Fc?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uu=null;function Ru(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uu=new Map,e.forEach(Xh,t),Uu=null,Mu.call(t))}function Xh(t,e){if(!(e.state.loading&4)){var l=Uu.get(t);if(l)var a=l.get(null);else{l=new Map,Uu.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=e.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=Mu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var pn={$$typeof:_t,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Qh(t,e,l,a,n,u,i,c,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ku(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.hiddenUpdates=Ku(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ad(t,e,l,a,n,u,i,c,o,h,v,T){return t=new Qh(t,e,l,i,o,h,v,T,c),e=1,u===!0&&(e|=24),u=te(3,null,null,e),t.current=u,u.stateNode=t,e=Mi(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},ji(u),t}function nd(t){return t?(t=ea,t):ea}function ud(t,e,l,a,n,u){n=nd(n),a.context===null?a.context=n:a.pendingContext=n,a=al(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=nl(t,a,e),l!==null&&(kt(l,t,e),wa(l,t,e))}function id(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Ic(t,e){id(t,e),(t=t.alternate)&&id(t,e)}function cd(t){if(t.tag===13||t.tag===31){var e=Nl(t,67108864);e!==null&&kt(e,t,67108864),Ic(t,67108864)}}function od(t){if(t.tag===13||t.tag===31){var e=ue();e=wu(e);var l=Nl(t,e);l!==null&&kt(l,t,e),Ic(t,e)}}var _u=!0;function Zh(t,e,l,a){var n=S.T;S.T=null;var u=C.p;try{C.p=2,Pc(t,e,l,a)}finally{C.p=u,S.T=n}}function Vh(t,e,l,a){var n=S.T;S.T=null;var u=C.p;try{C.p=8,Pc(t,e,l,a)}finally{C.p=u,S.T=n}}function Pc(t,e,l,a){if(_u){var n=to(a);if(n===null)Lc(t,e,a,ju,l),sd(t,a);else if(Kh(n,t,e,l,a))a.stopPropagation();else if(sd(t,a),e&4&&-1<Jh.indexOf(t)){for(;n!==null;){var u=Vl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Al(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var o=1<<31-It(i);c.entanglements[1]|=o,i&=~o}xe(u),(lt&6)===0&&(pu=$t()+500,sn(0))}}break;case 31:case 13:c=Nl(u,2),c!==null&&kt(c,u,2),gu(),Ic(u,2)}if(u=to(a),u===null&&Lc(t,e,a,ju,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Lc(t,e,a,null,l)}}function to(t){return t=li(t),eo(t)}var ju=null;function eo(t){if(ju=null,t=Zl(t),t!==null){var e=X(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=L(e),t!==null)return t;t=null}else if(l===31){if(t=Q(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ju=t,null}function fd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Md()){case po:return 2;case vo:return 8;case An:case Ud:return 32;case go:return 268435456;default:return 32}default:return 32}}var lo=!1,yl=null,pl=null,vl=null,vn=new Map,gn=new Map,gl=[],Jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sd(t,e){switch(t){case"focusin":case"focusout":yl=null;break;case"dragenter":case"dragleave":pl=null;break;case"mouseover":case"mouseout":vl=null;break;case"pointerover":case"pointerout":vn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(e.pointerId)}}function Sn(t,e,l,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},e!==null&&(e=Vl(e),e!==null&&cd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Kh(t,e,l,a,n){switch(e){case"focusin":return yl=Sn(yl,t,e,l,a,n),!0;case"dragenter":return pl=Sn(pl,t,e,l,a,n),!0;case"mouseover":return vl=Sn(vl,t,e,l,a,n),!0;case"pointerover":var u=n.pointerId;return vn.set(u,Sn(vn.get(u)||null,t,e,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,gn.set(u,Sn(gn.get(u)||null,t,e,l,a,n)),!0}return!1}function rd(t){var e=Zl(t.target);if(e!==null){var l=X(e);if(l!==null){if(e=l.tag,e===13){if(e=L(l),e!==null){t.blockedOn=e,zo(t.priority,function(){od(l)});return}}else if(e===31){if(e=Q(l),e!==null){t.blockedOn=e,zo(t.priority,function(){od(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=to(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);ei=a,l.target.dispatchEvent(a),ei=null}else return e=Vl(l),e!==null&&cd(e),t.blockedOn=l,!1;e.shift()}return!0}function dd(t,e,l){Hu(t)&&l.delete(e)}function wh(){lo=!1,yl!==null&&Hu(yl)&&(yl=null),pl!==null&&Hu(pl)&&(pl=null),vl!==null&&Hu(vl)&&(vl=null),vn.forEach(dd),gn.forEach(dd)}function qu(t,e){t.blockedOn===e&&(t.blockedOn=null,lo||(lo=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,wh)))}var Bu=null;function md(t){Bu!==t&&(Bu=t,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Bu===t&&(Bu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(eo(a||l)===null)continue;break}var u=Vl(l);u!==null&&(t.splice(e,3),e-=3,tc(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Da(t){function e(o){return qu(o,t)}yl!==null&&qu(yl,t),pl!==null&&qu(pl,t),vl!==null&&qu(vl,t),vn.forEach(e),gn.forEach(e);for(var l=0;l<gl.length;l++){var a=gl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<gl.length&&(l=gl[0],l.blockedOn===null);)rd(l),l.blockedOn===null&&gl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Qt]||null;if(typeof u=="function")i||md(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Qt]||null)c=i.formAction;else if(eo(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),md(l)}}}function hd(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function ao(t){this._internalRoot=t}Gu.prototype.render=ao.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(m(409));var l=e.current,a=ue();ud(l,a,t,e,null,null)},Gu.prototype.unmount=ao.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ud(t.current,2,null,t,null,null),gu(),e[Ql]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ao();t={blockedOn:null,target:t,priority:e};for(var l=0;l<gl.length&&e!==0&&e<gl[l].priority;l++);gl.splice(l,0,t),l===0&&rd(t)}};var yd=R.version;if(yd!=="19.2.0")throw Error(m(527,yd,"19.2.0"));C.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=g(e),t=t!==null?B(t):null,t=t===null?null:t.stateNode,t};var kh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{xa=Lu.inject(kh),Ft=Lu}catch{}}return Tn.createRoot=function(t,e){if(!q(t))throw Error(m(299));var l=!1,a="",n=Es,u=As,i=zs;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ad(t,1,!1,null,null,l,a,null,n,u,i,hd),t[Ql]=e.current,Gc(t),new ao(e)},Tn.hydrateRoot=function(t,e,l){if(!q(t))throw Error(m(299));var a=!1,n="",u=Es,i=As,c=zs,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),e=ad(t,1,!0,e,l??null,a,n,o,u,i,c,hd),e.context=nd(null),l=e.current,a=ue(),a=wu(a),n=al(a),n.callback=null,nl(l,n,a),l=a,e.current.lanes=l,Oa(e,l),xe(e),t[Ql]=e.current,Gc(t),new Gu(e)},Tn.version="19.2.0",Tn}var Dd;function ny(){if(Dd)return io.exports;Dd=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(R){console.error(R)}}return A(),io.exports=ay(),io.exports}var uy=ny();const iy=[{day:1,title:"React의 시작과 JSX",description:"React의 핵심 개념을 이해하고, JavaScript를 확장한 JSX 문법으로 첫 번째 컴포넌트를 만들어봅니다.",duration:"1시간",topics:[{title:"React란 무엇인가?",content:"React는 사용자 인터페이스(UI)를 구축하기 위한 선언형, 컴포넌트 기반 JavaScript 라이브러리입니다. Virtual DOM을 사용하여 효율적인 렌더링을 제공합니다."},{title:"JSX (JavaScript XML)",content:"JSX는 JavaScript 코드 안에서 UI 구조를 HTML과 비슷하게 작성할 수 있게 해주는 문법입니다. 브라우저가 이해하기 전에 Babel과 같은 도구가 일반 JavaScript로 변환합니다.",code:`function HelloWorld() {
  return (
    <div ^^className^^="container">
      <h1>Hello, React!</h1>
      <p>This is JSX.</p>
    </div>
  );
}`},{title:"JSX의 규칙과 Fragment",content:"반드시 하나의 부모 요소로 감싸야 합니다. HTML class 속성 대신 className을 사용해야 합니다. 불필요한 div를 추가하고 싶지 않다면 <React.Fragment> 또는 단축 문법인 <>...</>를 사용하세요.",code:`function App() {
  return (
    ^^<>^^
      <Header />
      <Main />
      <Footer />
    ^^</>^^
  );
}`},{title:"JSX 내의 표현식과 스타일",content:"중괄호 {}를 사용하여 변수나 표현식을 넣을 수 있습니다. 인라인 스타일은 객체 형태로 작성하며 camelCase를 사용합니다.",code:`const name = "React";
const style = { 
  ^^color^^: "blue", 
  ^^fontSize^^: "20px" 
};

const element = <h1 ^^style={style}^^>Hello, {name}</h1>;`}],challenge:{title:"자기소개 카드 만들기",description:"JSX를 사용하여 자신의 이름, 목표, 좋아하는 기술 스택이 담긴 간단한 프로필 카드를 화면에 출력해보세요. 스타일 객체를 사용하여 꾸며보세요.",solution:`function ProfileCard() {
  const myStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    color: "#333"
  };

  return (
    <div style={myStyle}>
      <h2>김철수</h2>
      <p>목표: 풀스택 개발자</p>
      <p>좋아하는 기술: React, Node.js</p>
    </div>
  );
}`}},{day:2,title:"컴포넌트와 Props",description:"UI를 재사용 가능한 독립적인 조각(컴포넌트)으로 나누고, 부모에서 자식으로 데이터(Props)를 전달하는 법을 배웁니다.",duration:"1.5시간",topics:[{title:"함수형 컴포넌트",content:"React 컴포넌트는 데이터를 가진 'props' 객체 인자를 받아 React 요소를 반환하는 단순한 JavaScript 함수입니다. 대문자로 시작해야 합니다.",code:`function Welcome(^^props^^) {
  return <h1>Hello, {^^props.name^^}</h1>;
}`},{title:"Props 구조 분해 할당과 기본값",content:"매개변수 부분에서 구조 분해 할당을 사용하면 코드가 깔끔해집니다. 기본값을 설정하여 props가 없을 때를 대비할 수 있습니다.",code:`function Button({ ^^label^^, ^^color^^ = "blue" }) {
  return <button style={{ color }}>{label}</button>;
}`},{title:"Children Prop",content:"컴포넌트 태그 사이에 넣은 내용은 children이라는 특별한 prop으로 전달됩니다. 레이아웃 컴포넌트를 만들 때 유용합니다.",code:`function Card({ ^^children^^ }) {
  return <div className="card-box">{^^children^^}</div>;
}

// 사용
<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>`}],challenge:{title:"재사용 가능한 버튼 컴포넌트",description:"text와 color를 props로 받아서 스타일이 적용된 버튼을 렌더링하는 Button 컴포넌트를 만들고, 여러 번 재사용해보세요.",solution:`function Button({ text, color = "blue" }) {
  const style = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px"
  };

  return <button style={style}>{text}</button>;
}

// 사용 예시
// <Button text="확인" color="green" />
// <Button text="취소" color="red" />`}},{day:3,title:"State(상태) 관리와 이벤트",description:"컴포넌트 내부에서 변경되는 데이터인 State를 관리하고, 사용자의 클릭/입력 이벤트를 처리하여 상호작용하는 UI를 만듭니다.",duration:"2시간",topics:[{title:"useState 훅 이해하기",content:"useState는 상태값과 그 상태를 업데이트하는 함수를 반환합니다. 상태가 변경되면 컴포넌트는 다시 렌더링됩니다.",code:`import { ^^useState^^ } from "react";

function Counter() {
  const [^^count^^, ^^setCount^^] = useState(0); // 초기값 0
  
  return (
    <button onClick={() => setCount(count + 1)}>
      클릭 횟수: {count}
    </button>
  );
}`},{title:"함수형 업데이트 (Functional Update)",content:"이전 상태값을 기반으로 업데이트할 때는 콜백 함수를 사용하는 것이 안전합니다. 특히 비동기 상황이나 연속된 업데이트에서 중요합니다.",code:`// 안전한 방식
setCount(^^prevCount => prevCount + 1^^);
setCount(prevCount => prevCount + 1); // 정확히 2 증가`},{title:"객체 상태 관리하기",content:"객체를 업데이트할 때는 Spread 연산자(...)를 사용하여 기존 값을 복사한 후 변경해야 불변성이 유지됩니다.",code:`const [user, setUser] = useState({ name: "Kim", age: 20 });

const updateName = () => {
  setUser({ ^^...user^^, name: "Lee" }); // age는 유지됨
};`}],challenge:{title:"좋아요 버튼 만들기",description:"버튼을 클릭하면 '좋아요' 숫자가 올라가고, 버튼 색상이 변경되는 컴포넌트를 만들어보세요.",solution:`function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setLikes(prev => prev + 1);
    setIsLiked(true);
  };

  return (
    <button 
      onClick={handleClick}
      style={{ backgroundColor: isLiked ? "pink" : "grey" }}
    >
      좋아요 {likes}
    </button>
  );
}`}},{day:4,title:"조건부 렌더링과 리스트",description:"상황에 따라 다른 UI를 보여주는 조건부 렌더링과, 배열 데이터를 효율적으로 화면에 뿌려주는 리스트 렌더링을 익힙니다.",duration:"1.5시간",topics:[{title:"조건부 렌더링 패턴",content:"&& 연산자는 조건이 참일 때만 렌더링하고, 삼항 연산자(? :)는 참/거짓에 따라 다른 UI를 보여줍니다.",code:`function UserGreeting({ user }) {
  return (
    <div>
      {user ^^?^^ <h1>Welcome, {user.name}!</h1> ^^:^^ <button>Login</button>}
      {user ^^&&^^ <p>You have unread messages.</p>}
    </div>
  );
}`},{title:"리스트 렌더링과 Key의 중요성",content:"map()을 사용할 때 key prop은 필수입니다. key는 React가 어떤 항목이 변경, 추가, 삭제되었는지 식별하는 데 도움을 줍니다. 인덱스(index)보다는 고유 ID를 사용하는 것이 좋습니다.",code:`const todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build App' }
];

function TodoList() {
  return (
    <ul>
      {todos.^^map^^(todo => (
        <li ^^key={todo.id}^^>{todo.text}</li>
      ))}
    </ul>
  );
}`}],challenge:{title:"필터링 가능한 리스트",description:"사용자 목록 배열을 만들고, 버튼을 누르면 '관리자'인 사용자만 화면에 필터링해서 보여주는 기능을 구현해보세요.",solution:`function UserList() {
  const [users] = useState([
    { id: 1, name: "Kim", role: "Admin" },
    { id: 2, name: "Lee", role: "User" },
    { id: 3, name: "Park", role: "Admin" }
  ]);
  const [filterAdmin, setFilterAdmin] = useState(false);

  const filteredUsers = filterAdmin 
    ? users.filter(u => u.role === "Admin") 
    : users;

  return (
    <div>
      <button onClick={() => setFilterAdmin(!filterAdmin)}>
        {filterAdmin ? "모두 보기" : "관리자만 보기"}
      </button>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
}`}},{day:5,title:"Effect와 컴포넌트 생명주기",description:"useEffect를 사용하여 데이터 가져오기, 구독, 타이머 등 컴포넌트 외부와 상호작용하는 부수 효과(Side Effects)를 제어합니다.",duration:"2시간",topics:[{title:"useEffect와 의존성 배열 (Dependency Array)",content:"의존성 배열에 있는 값이 변할 때만 Effect가 실행됩니다. 빈 배열([])은 마운트 시 1회만 실행됨을 의미합니다.",code:`^^useEffect^^(() => {
  console.log("마운트 될 때 실행");
}, ^^[]^^);

useEffect(() => {
  console.log("count가 변할 때마다 실행");
}, [count]);`},{title:"Cleanup 함수 (뒷정리)",content:"컴포넌트가 언마운트되거나 다음 Effect가 실행되기 전에 정리 작업을 수행합니다. 이벤트 리스너 제거나 타이머 해제에 필수적입니다.",code:`useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => clearInterval(timer); // ^^정리 함수^^
}, []);`}],challenge:{title:"윈도우 리사이즈 감지기",description:"useEffect를 사용하여 브라우저 창의 크기가 바뀔 때마다 현재 가로 폭을 화면에 표시하는 컴포넌트를 만드세요. (이벤트 리스너 제거 필수!)",solution:`function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <h1>현재 창 너비: {width}px</h1>;
}`}},{day:6,title:"폼(Form) 핸들링",description:"사용자의 입력을 관리하는 Controlled Component 패턴과 폼 유효성 검사 기초를 배웁니다.",duration:"2시간",topics:[{title:"제어 컴포넌트 (Controlled Component)",content:"input의 value를 React state로 관리하여, 입력값이 항상 React 상태와 동기화되도록 만듭니다.",code:`function NameForm() {
  const [value, setValue] = useState('');

  return (
    <input 
      type="text" 
      ^^value={value}^^ 
      ^^onChange={(e) => setValue(e.target.value)}^^ 
    />
  );
}`},{title:"다중 입력 제어하기",content:"여러 개의 input을 하나의 state 객체로 관리하는 효율적인 방법입니다. input의 name 속성을 활용합니다.",code:`const [inputs, setInputs] = useState({ name: '', email: '' });

const onChange = (e) => {
  const { name, value } = e.target;
  setInputs({ ...inputs, [name]: value });
};`},{title:"useRef로 비제어 컴포넌트 접근하기",content:"값이 바뀔 때마다 렌더링할 필요가 없거나, DOM에 직접 접근해야 할 때(예: 포커스 주기) useRef를 사용합니다.",code:`const inputRef = ^^useRef^^();

const focusInput = () => {
  inputRef.current.focus();
};`}],challenge:{title:"로그인 폼 만들기",description:"아이디와 비밀번호를 입력받고, 비밀번호가 8자 미만이면 에러 메시지를 보여주는 폼을 만들어보세요.",solution:`function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    alert(\`로그인 시도: \${id}\`);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={id} 
        onChange={e => setId(e.target.value)} 
        placeholder="ID" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button type="submit">로그인</button>
    </form>
  );
}`}},{day:7,title:"스타일링 전략",description:"CSS Modules, Styled Components, Tailwind CSS 등 React에서 자주 쓰이는 스타일링 방식을 알아봅니다.",duration:"2시간",topics:[{title:"CSS Modules",content:"CSS 클래스 이름 충돌을 방지하기 위해 파일 단위로 스코프를 제한하는 방식입니다. [name].module.css 파일을 만들어 사용합니다.",code:`import styles from './Button.^^module.css^^';

function Button() {
  return <button className={^^styles.error^^}>Error</button>;
}`},{title:"CSS-in-JS (Styled Components)",content:"JavaScript 파일 안에 CSS를 작성하는 방식입니다. props에 따라 동적으로 스타일을 변경하기 쉽습니다.",code:'const Button = ^^styled.button^^`\n  background: ${props => props.primary ? "blue" : "white"};\n  color: ${props => props.primary ? "white" : "blue"};\n`;'}],challenge:{title:"다크 모드 버튼",description:"버튼 하나를 만들고, 클릭 상태(활성/비활성)에 따라 색상이 완전히 바뀌는 스타일링을 적용해보세요.",solution:`import styles from './DarkModeBtn.module.css';
        // CSS: .dark { background: black; color: white; } .light { background: white; color: black; }

        function DarkModeBtn() {
        const [isDark, setIsDark] = useState(false);

        return(
    <button 
      className = { isDark? styles.dark : styles.light }
      onClick = {() => setIsDark(!isDark)}
    >
  { isDark? "Dark Mode": "Light Mode" }
    </button >
  );
}`}},{day:8,title:"React Router (SPA)",description:"React Router를 사용하여 페이지 새로고침 없이 화면을 전환하는 SPA(Single Page Application)를 구현합니다.",duration:"2.5시간",topics:[{title:"기본 라우팅 설정",content:"BrowserRouter, Routes, Route 컴포넌트를 사용하여 URL 경로에 따라 다른 컴포넌트를 보여줍니다.",code:`import { ^^ BrowserRouter ^^, ^^ Routes ^^, ^^ Route ^^ } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
} `},{title:"Link와 useNavigate",content:"a 태그 대신 Link 컴포넌트를 사용하여 페이지를 이동하고, useNavigate 훅으로 프로그래밍 방식으로 이동합니다.",code:`import { ^^ Link ^^, ^^ useNavigate ^^ } from "react-router-dom";

function Home() {
  const navigate = ^^ useNavigate ^^ ();
  return (
    <>
      <Link to="/about">About으로 이동</Link>
      <button onClick={() => navigate('/about')}>이동</button>
    </>
  );
} `}],challenge:{title:"간단한 블로그 라우팅",description:"메인 페이지, 글 목록 페이지, 글 상세 페이지(/post/:id)를 만들고 라우팅을 연결해보세요. useParams를 사용하여 ID를 가져와보세요.",solution:`import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  return <h1>포스트 ID: {id}</h1>;
}

// App.js
// <Route path="/post/:id" element={<PostDetail />} />`}},{day:9,title:"Context API와 전역 상태",description:"Props Drilling 문제를 해결하기 위해 Context API를 사용하여 전역적으로 데이터를 공유하는 법을 배웁니다.",duration:"2시간",topics:[{title:"Context 생성과 Provider",content:"createContext로 컨텍스트를 만들고, Provider로 하위 컴포넌트들에게 데이터를 공급합니다.",code:`const ThemeContext = ^^createContext^^('light');

function App() {
  return (
    <ThemeContext.^^Provider^^ value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}`},{title:"useContext 사용하기",content:"하위 컴포넌트에서는 useContext 훅을 사용하여 Provider가 공급한 값을 손쉽게 가져다 쓸 수 있습니다.",code:`function ThemedButton() {
  const theme = ^^useContext^^(ThemeContext);
  return <button className={theme}>I am {theme}</button>;
}`}],challenge:{title:"테마 스위처 구현",description:"Context를 사용하여 앱 전체의 테마(Light/Dark)를 토글하는 기능을 구현해보세요.",solution:`const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme(t => t === "light" ? "dark" : "light");
  
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedBtn() {
  const { theme, toggle } = useContext(ThemeContext);
  return <button onClick={toggle}>Current: {theme}</button>;
}`}},{day:10,title:"고급 Hooks 정복",description:"useMemo, useCallback, useRef 등 성능 최적화와 DOM 접근을 위한 고급 훅들을 마스터합니다.",duration:"3시간",topics:[{title:"useMemo (값 캐싱)",content:"복잡한 계산 결과를 메모리에 저장(캐싱)하여, 의존성 값이 바뀌지 않는 한 재계산을 방지합니다.",code:`const expensiveValue = ^^useMemo^^(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`},{title:"useCallback (함수 캐싱)",content:"함수를 메모이제이션하여 자식 컴포넌트에 props로 전달할 때 불필요한 렌더링을 방지합니다.",code:`const handleClick = ^^useCallback^^(() => {
  doSomething(a, b);
}, [a, b]);`}],challenge:{title:"렌더링 최적화 실험",description:"console.log를 찍어보며, React.memo와 useCallback을 사용했을 때와 안 했을 때의 자식 컴포넌트 렌더링 횟수 차이를 확인해보세요.",solution:`const Child = React.memo(({ onClick }) => {
  console.log("Child Render");
  return <button onClick={onClick}>Click me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  
  // useCallback이 없으면 Parent가 렌더링될 때마다 함수가 새로 생성되어
  // Child도 같이 리렌더링됨 (React.memo가 있어도)
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </>
  );
}`}},{day:11,title:"API 연동과 비동기 처리",description:"fetch나 axios를 사용하여 서버에서 데이터를 받아오고, 로딩/에러 상태를 처리하는 패턴을 익힙니다.",duration:"2.5시간",topics:[{title:"데이터 Fetching 패턴",content:"useEffect 안에서 비동기 함수를 호출하여 데이터를 가져오고 state에 저장합니다. 로딩 상태와 에러 상태 관리가 중요합니다.",code:`useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = ^^await^^ fetch('/api/users');
      if (!response.ok) throw new Error('Network response was not ok');
      const json = ^^await^^ response.json();
      setUsers(json);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  fetchData();
}, []);`}],challenge:{title:"뉴스 뷰어 만들기",description:"무료 API(예: JSONPlaceholder)를 사용하여 게시글 목록을 불러오고, 로딩 중일 때는 'Loading...'을, 에러 발생 시 에러 메시지를 보여주세요.",solution:`function NewsViewer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <ul>
      {data.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}`}},{day:12,title:"커스텀 Hook 만들기",description:"반복되는 로직을 나만의 Hook으로 분리하여 코드의 재사용성을 극대화하는 방법을 배웁니다.",duration:"2시간",topics:[{title:"Custom Hook 규칙",content:"이름이 'use'로 시작해야 하며, 내부에서 다른 Hook을 호출할 수 있습니다. 로직을 캡슐화하여 공유할 때 강력합니다.",code:`function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}`}],challenge:{title:"useFetch 훅 만들기",description:"URL을 넣으면 { data, loading, error } 객체를 반환하는 useFetch 커스텀 훅을 직접 만들어보세요.",solution:`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}`}},{day:13,title:"상태 관리 라이브러리 (Redux Toolkit)",description:"대규모 애플리케이션에서 복잡한 상태를 체계적으로 관리하기 위한 Redux Toolkit의 기초를 배웁니다.",duration:"3시간",topics:[{title:"Store와 Slice",content:"전역 상태 저장소인 Store와, 상태의 일부분과 변경 로직을 정의하는 Slice 개념을 이해합니다.",code:`const counterSlice = ^^createSlice^^({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 }
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;`},{title:"useSelector와 useDispatch",content:"컴포넌트에서 Redux 상태를 읽거나(useSelector), 액션을 발생시켜(useDispatch) 상태를 변경합니다.",code:`const count = ^^useSelector^^(state => state.counter.value);
const dispatch = ^^useDispatch^^();

<button onClick={() => dispatch(increment())}>+</button>`}],challenge:{title:"쇼핑카트 구현하기",description:"Redux를 사용하여 상품 목록에서 '담기'를 누르면 장바구니에 추가되고, 장바구니에서 수량을 변경하는 기능을 구현해보세요.",solution:`// slice.js
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    }
  }
});

// Component
const dispatch = useDispatch();
<button onClick={() => dispatch(addItem({ id: 1, name: 'Apple' }))}>
  Add to Cart
</button>`}},{day:14,title:"성능 최적화와 배포",description:"React 앱의 성능을 분석하고 최적화하는 기법과, 실제 웹에 배포하는 과정을 경험합니다.",duration:"2시간",topics:[{title:"Code Splitting (Lazy Loading)",content:"React.lazy와 Suspense를 사용하여 당장 필요하지 않은 컴포넌트는 나중에 불러와 초기 로딩 속도를 높입니다.",code:`const OtherComponent = React.^^lazy^^(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <^^Suspense^^ fallback={<div>Loading...</div>}>
      <OtherComponent />
    </^^Suspense^^>
  );
} `},{title:"배포하기 (Vercel/Netlify)",content:"npm run build 명령어로 프로덕션 빌드를 생성하고, Vercel이나 Netlify 같은 플랫폼을 통해 전 세계에 배포합니다."}],challenge:{title:"나만의 포트폴리오 배포",description:"지금까지 만든 예제들을 모아 포트폴리오 사이트를 만들고, 실제 URL로 접속 가능하게 배포해보세요."}},{day:15,title:"Next.js 맛보기 (React의 미래)",description:"React 기반의 풀스택 프레임워크인 Next.js의 기본 개념(SSR, 파일 기반 라우팅)을 살펴보고 확장성을 고민해봅니다.",duration:"2시간",topics:[{title:"SSR vs CSR",content:"클라이언트 사이드 렌더링(CSR)과 서버 사이드 렌더링(SSR)의 차이점을 이해하고, Next.js가 주는 이점을 알아봅니다."},{title:"파일 기반 라우팅",content:"pages 폴더(또는 app 디렉토리)에 파일을 만들면 자동으로 라우팅이 되는 Next.js의 편리한 시스템을 체험합니다."}],challenge:{title:"Next.js 프로젝트 생성해보기",description:"create-next-app을 사용하여 Next.js 프로젝트를 생성하고, 첫 페이지를 띄워보세요."}}],cy=[{day:1,title:"자바스크립트 시작하기",description:"프로그래밍의 기초, 변수와 데이터 타입을 배우고 첫 코드를 작성해봅니다.",duration:"1시간",topics:[{title:"Hello, JavaScript!",content:"자바스크립트는 웹 페이지를 동적으로 만들어주는 프로그래밍 언어입니다. 브라우저 개발자 도구(F12)의 Console 탭에서 바로 실행해볼 수 있습니다.",code:`console.log("Hello, ^^World!^^");
console.warn("This is a warning!");
console.error("This is an error!");`},{title:"변수 선언 (let, const)",content:"데이터를 저장할 공간인 변수를 만듭니다. ES6부터는 var 대신 let(변경 가능)과 const(변경 불가능)를 주로 사용합니다. 변수명은 의미있게 짓는 것이 중요합니다 (camelCase 사용).",code:`^^let^^ userName = "Alice"; // 변경 가능
^^const^^ PI = 3.14;        // 변경 불가능 (상수)
userName = "Bob";       // 가능
// PI = 3.14159;        // 에러 발생! Assignment to constant variable.`},{title:"기본 데이터 타입과 typeof",content:"자바스크립트의 동적 타이핑 특징과 기본 자료형을 알아봅니다. typeof 연산자로 타입을 확인할 수 있습니다.",code:`const message = "Hi";     // String
const count = 10;         // Number
const isDone = true;      // Boolean
const empty = null;       // Object (초기화된 빈 값)
let notDefined;           // Undefined (정의되지 않음)

console.log(^^typeof^^ message); // "string"
console.log(^^typeof^^ count);   // "number"`},{title:"템플릿 리터럴 (Template Literals)",content:"백틱(`)을 사용하면 문자열 내에서 변수를 쉽게 사용할 수 있습니다.",code:`const name = "JavaScript";
const year = 2024;
// 기존 방식
console.log("Hello, " + name + " " + year);
// 템플릿 리터럴
console.log(\`Hello, ^^\${name}^^ ^^\${year}^^\`);`}],challenge:{title:"나만의 명함 만들기",description:"이름, 직업, 나이를 변수에 저장하고, 템플릿 리터럴을 사용하여 '제 이름은 OOO이고, 직업은 OOO입니다.' 형식으로 출력해보세요.",solution:'const name = "김철수";\nconst job = "프론트엔드 개발자";\nconst age = 25;\n\nconsole.log(`제 이름은 ${name}이고, 직업은 ${job}입니다.`);'}},{day:2,title:"연산자와 제어 흐름",description:"데이터를 계산하고 상황에 따라 다른 코드를 실행하는 로직을 만듭니다.",duration:"1.5시간",topics:[{title:"산술 및 비교 연산자",content:"기본적인 사칙연산과 값의 크기를 비교하는 연산자입니다. ===는 값과 타입이 모두 같은지 비교합니다.",code:`console.log(10 % 3);      // 1 (나머지)
console.log(2 ** 3);      // 8 (거듭제곱)
console.log(10 == "10");  // true (값만 비교)
console.log(10 ^^===^^ "10"); // false (타입까지 비교 - 권장)`},{title:"논리 연산자와 Truthy/Falsy",content:"AND(&&), OR(||), NOT(!) 연산자와 자바스크립트에서 거짓으로 취급되는 값(0, '', null, undefined, NaN)을 이해합니다.",code:`const user = { name: "Alice" };
// 단축 평가 (Short-circuit evaluation)
const name = user.name ^^||^^ "Guest"; // user.name이 없으면 "Guest"
const isAdult = true ^^&&^^ true;      // true`},{title:"조건문 (if-else, switch)",content:"조건에 따라 실행 흐름을 분기합니다. 조건이 많을 때는 switch문이 가독성이 좋을 수 있습니다.",code:`const rank = "B";

switch (^^rank^^) {
  case "A":
    console.log("최고에요!");
    break;
  case "B":
    console.log("좋아요!");
    break;
  default:
    console.log("화이팅!");
}`},{title:"삼항 연산자",content:"간단한 if-else 문을 한 줄로 표현할 때 유용합니다.",code:`const age = 20;
const status = age >= 18 ^^?^^ "성인" ^^:^^ "미성년자";
console.log(status);`}],challenge:{title:"학점 계산기",description:"점수(0~100)가 주어졌을 때, 90점 이상 A, 80점 이상 B, 그 외 C를 출력하는 코드를 삼항 연산자나 if문을 사용하여 작성하세요.",solution:`const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}

console.log(grade);

// 삼항 연산자 버전
// const grade = score >= 90 ? "A" : (score >= 80 ? "B" : "C");`}},{day:3,title:"반복문과 스코프",description:"반복되는 작업을 효율적으로 처리하고, 변수의 유효 범위(Scope)를 이해합니다.",duration:"1.5시간",topics:[{title:"for 반복문과 break/continue",content:"가장 기본적인 반복문입니다. break로 반복을 중단하거나 continue로 다음 반복으로 건너뛸 수 있습니다.",code:`for (let i = 1; i <= 5; i++) {
    if (i === 3) ^^continue^^; // 3은 건너뜀
    console.log(i);        // 1, 2, 4, 5
} `},{title:"for...of 와 for...in",content:"배열이나 객체를 순회할 때 사용하는 모던한 반복문입니다.",code:`const fruits = ["Apple", "Banana"];
// 배열 값 순회
for (const fruit ^^of^^ fruits) {
    console.log(fruit);
}

const user = { name: "Kim", age: 30 };
// 객체 키 순회
for (const key ^^in^^ user) {
    console.log(\`\${key}: \${user[key]}\`);
}`},{title:"while 반복문",content:"조건이 참인 동안 계속 실행됩니다. 무한 루프에 빠지지 않도록 주의해야 합니다.",code:`let count = 0;
while (^^count < 3^^) {
  console.log(count);
  count++;
}`}],challenge:{title:"짝수만 더하기",description:"1부터 10까지의 숫자 중 짝수만 골라서 모두 더한 값을 출력하는 코드를 작성하세요.",solution:`let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("짝수의 합:", sum);`}},{day:4,title:"함수 심화",description:"함수의 다양한 선언 방식, 매개변수 처리, 그리고 스코프 개념을 깊이 있게 다룹니다.",duration:"2시간",topics:[{title:"함수 선언식 vs 표현식 vs 화살표 함수",content:"함수를 만드는 다양한 방법과 그 차이를 이해합니다. 화살표 함수는 this 바인딩 방식이 다릅니다.",code:`// 선언식
    function add(a, b) { return a + b; }

    // 표현식
    const sub = function (a, b) { return a - b; };

    // 화살표 함수 (return 생략 가능)
    const mul = (a, b) ^^=>^^ a * b; `},{title:"매개변수 기본값과 Rest 파라미터",content:"매개변수가 전달되지 않았을 때의 기본값을 설정하거나, 개수가 정해지지 않은 인자를 배열로 받을 수 있습니다.",code:`function greet(name = "Guest") {
        console.log(\`Hello, \${name}\`);
}

function sum(^^...numbers^^) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`},{title:"스코프 (Scope)와 호이스팅",content:"변수가 어디서 접근 가능한지를 결정하는 규칙입니다. let/const는 블록 스코프를 가집니다.",code:`let global = "전역";

function test() {
  let local = "지역";
  console.log(global); // 가능
}
// console.log(local); // 에러! 함수 밖에서 접근 불가`}],challenge:{title:"최대값 찾기 함수",description:"숫자들을 인자로 몇 개든 받아서 그 중 가장 큰 수를 반환하는 max(...numbers) 함수를 구현해보세요.",solution:`function max(...numbers) {
  let maxNum = numbers[0];
  for (const num of numbers) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
  
  // 더 간단한 방법:
  // return Math.max(...numbers);
}

console.log(max(1, 5, 3, 9, 2)); // 9`}},{day:5,title:"배열과 객체 마스터",description:"실무에서 가장 많이 쓰이는 배열 메서드와 객체 조작법을 익힙니다.",duration:"2.5시간",topics:[{title:"배열 고차 함수 (map, filter, reduce)",content:"데이터를 변환하거나 필터링할 때 필수적인 메서드들입니다. 원본 배열을 변경하지 않고 새로운 배열을 반환합니다.",code:`const nums = [1, 2, 3, 4, 5];

        // 제곱하기
        const squared = nums.^^map^^(n => n * n); // [1, 4, 9, 16, 25]

        // 짝수만 필터링
        const evens = nums.^^filter^^(n => n % 2 === 0); // [2, 4]

        // 합계 구하기
        const sum = nums.^^reduce^^((acc, cur) => acc + cur, 0); // 15`},{title:"객체 조작 (Object.keys, values, entries)",content:"객체의 키나 값들을 배열로 변환하여 다루기 쉽게 만듭니다.",code:`const user = { name: "Alice", age: 25 };

console.log(^^Object.keys^^(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Alice", 25]
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25]]`},{title:"구조 분해 할당과 Spread 심화",content:"중첩된 객체나 배열에서 데이터를 우아하게 추출하고 병합하는 방법입니다.",code:`const user = { 
  id: 1, 
  info: { name: "Kim", skill: "JS" } 
};
const ^^ { info: { name } } ^^ = user; // "Kim"

const updatedUser = { ^^...user^^, active: true }; // 객체 복사 및 추가`}],challenge:{title:"쇼핑 카트 총액 계산",description:"상품 객체({ name, price, qty })들이 담긴 배열에서 reduce를 사용하여 총 주문 금액을 계산하세요.",solution:`const cart = [
  { name: "사과", price: 1000, qty: 2 },
  { name: "바나나", price: 2000, qty: 1 },
  { name: "우유", price: 1500, qty: 3 }
];

const total = cart.reduce((acc, item) => {
  return acc + (item.price * item.qty);
}, 0);

console.log("총액:", total); // 8500`}},{day:6,title:"ES6+ 모던 문법",description:"코드를 더 안전하고 간결하게 만들어주는 최신 문법들을 배웁니다.",duration:"2시간",topics:[{title:"옵셔널 체이닝 (?.)",content:"객체의 속성이 존재하는지 확인하지 않고도 안전하게 접근할 수 있습니다. 없으면 undefined를 반환합니다.",code:`const user = {};
        // console.log(user.address.street); // 에러 발생!
        console.log(user.address^^?.^^street); // undefined (에러 없음)`},{title:"Nullish 병합 연산자 (??)",content:"|| 연산자와 달리, 오직 null이나 undefined일 때만 오른쪽 값을 반환합니다. (0이나 ''은 유효한 값으로 취급)",code:`const count = 0;
const num1 = count || 10; // 10 (0을 거짓으로 취급)
const num2 = count ^^??^^ 10; // 0 (0은 null/undefined가 아님)`},{title:"모듈 시스템 (import/export)",content:"코드를 여러 파일로 나누고 필요한 것만 가져와서 사용하는 방법입니다. HTML에서 script 태그에 type='module' 속성이 필요합니다.",code:`// math.js
^^export^^ const add = (a, b) => a + b;

// app.js
^^import^^ { add } from './math.js';
console.log(add(1, 2));`}],challenge:{title:"안전한 데이터 접근",description:"중첩된 객체에서 옵셔널 체이닝과 Nullish 병합 연산자를 사용하여, 데이터가 없을 때 '정보 없음'을 출력하는 코드를 작성하세요.",solution:`const user = {
  profile: {
    // name: "Alice" // 주석 처리하여 테스트
  }
};

const userName = user.profile?.name ?? "정보 없음";
console.log(userName);`}},{day:7,title:"비동기 프로그래밍",description:"서버 통신, 타이머 등 시간이 걸리는 작업을 처리하는 비동기 로직을 완벽하게 이해합니다.",duration:"2.5시간",topics:[{title:"Promise와 then/catch",content:"비동기 작업의 성공/실패를 처리하는 객체입니다. 콜백 지옥을 해결해줍니다.",code:`const fetchUser = () => {
            return new ^^Promise^^((resolve, reject) => {
                setTimeout(() => resolve("User Data"), 1000);
            });
        };

        fetchUser()
            .then(data => console.log(data))
            .catch(err => console.error(err)); `},{title:"async / await",content:"Promise를 동기 코드처럼 작성할 수 있게 해주는 문법적 설탕(Syntactic Sugar)입니다. try/catch로 에러를 처리합니다.",code:`^^async^^ function getUser() {
            try {
                const data = ^^await^^ fetchUser();
                console.log(data);
            } catch (e) {
                console.log("에러 발생:", e);
            }
        } `},{title:"Promise.all",content:"여러 비동기 작업을 병렬로 동시에 처리하고, 모두 완료될 때까지 기다립니다.",code:`const p1 = Promise.resolve(1);
        const p2 = Promise.resolve(2);

        const results = await ^^Promise.all^^([p1, p2]);
        console.log(results); // [1, 2]`}],challenge:{title:"순차적 vs 병렬 실행",description:"두 개의 1초 걸리는 비동기 함수를 만들고, await로 순차 실행했을 때와 Promise.all로 병렬 실행했을 때의 시간 차이를 확인해보세요.",solution:`const wait1s = () => new Promise(res => setTimeout(res, 1000));

async function test() {
  console.time("Sequential");
  await wait1s();
  await wait1s();
  console.timeEnd("Sequential"); // 약 2초

  console.time("Parallel");
  await Promise.all([wait1s(), wait1s()]);
  console.timeEnd("Parallel"); // 약 1초
}

test();`}},{day:8,title:"DOM 조작과 이벤트",description:"자바스크립트로 웹 페이지의 요소를 동적으로 변경하고 사용자와 상호작용합니다.",duration:"2시간",topics:[{title:"요소 선택과 스타일 변경",content:"querySelector로 요소를 찾고, style 속성이나 classList를 사용하여 스타일을 변경합니다.",code:`const box = document.^^querySelector^^('.box');
        box.style.backgroundColor = 'red';
        box.classList.add('active'); // 클래스 추가
        box.classList.remove('hidden'); // 클래스 제거`},{title:"요소 생성과 추가 (createElement)",content:"새로운 HTML 요소를 만들어서 화면에 추가합니다.",code:`const list = document.getElementById('list');
const newItem = document.^^createElement^^('li');
newItem.innerText = "새로운 아이템";
list.appendChild(newItem);`},{title:"이벤트 리스너와 이벤트 객체",content:"클릭, 입력 등의 이벤트를 감지하고, 이벤트 객체(e)를 통해 상세 정보를 얻습니다.",code:`const btn = document.querySelector('button');
btn.^^addEventListener^^('click', (e) => {
  console.log("클릭된 좌표:", e.clientX, e.clientY);
  e.target.innerText = "클릭됨!";
});`}],challenge:{title:"할 일 목록(Todo) 만들기",description:"input에 내용을 입력하고 버튼을 누르면, 아래 리스트에 새로운 항목이 추가되는 기능을 구현해보세요.",solution:`// HTML: <input id="input" /> <button id="btn">추가</button> <ul id="list"></ul>

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', () => {
  if (input.value === '') return;
  
  const li = document.createElement('li');
  li.innerText = input.value;
  list.appendChild(li);
  
  input.value = ''; // 입력창 초기화
});`}}],oy=[{day:1,title:"Node.js 시작하기 & NPM",description:"Node.js 환경을 설정하고 패키지 매니저(NPM)의 기본 사용법을 익힙니다.",duration:"1.5시간",topics:[{title:"Node.js와 런타임",content:"Chrome V8 엔진 기반의 자바스크립트 런타임인 Node.js의 특징(이벤트 기반, 비동기 I/O)을 이해합니다.",code:`console.log("Hello, Node.js!");
console.log("Arch:", process.arch);
console.log("Platform:", process.platform);`},{title:"NPM과 package.json",content:"Node Package Manager를 통해 외부 라이브러리를 관리하는 방법을 배웁니다. `npm init`으로 프로젝트를 시작합니다.",code:`// package.json 예시
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "dayjs": "^1.11.10"
  }
}`}],challenge:{title:"프로젝트 초기화",description:"새 폴더를 만들고 `npm init -y`로 초기화한 뒤, `figlet` 패키지를 설치하여 터미널에 멋진 아스키 아트를 출력하는 코드를 작성하세요.",solution:`// 1. npm install figlet
// 2. index.js 작성
import figlet from 'figlet';

figlet('Node.js', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});`}},{day:2,title:"모듈 시스템과 내장 모듈",description:"CommonJS와 ES Modules의 차이를 이해하고, 유용한 내장 모듈들을 활용해봅니다.",duration:"2시간",topics:[{title:"모듈 내보내기/가져오기",content:"코드를 분리하여 재사용성을 높입니다. 최신 표준인 ES Modules(import/export)를 주로 사용합니다.",code:`// utils.js
export const sayHi = (name) => \`Hi, \${name}!\`;

// main.js
import { sayHi } from './utils.js';
console.log(sayHi('Alice'));`},{title:"OS와 Path 모듈",content:"운영체제 정보에 접근하거나 파일 경로를 다룰 때 사용하는 내장 모듈입니다.",code:`import os from 'os';
import path from 'path';

console.log(os.cpus().length); // CPU 코어 수
const fullPath = path.join('users', 'documents', 'file.txt');
console.log(fullPath); // users/documents/file.txt (OS에 맞게 구분자 처리)`}],challenge:{title:"시스템 정보 출력기",description:"현재 사용 중인 OS의 종류, 총 메모리 용량, 사용 가능한 메모리 용량을 출력하는 스크립트를 작성하세요.",solution:"import os from 'os';\n\nconst totalMem = os.totalmem() / (1024 * 1024 * 1024); // GB 단위 변환\nconst freeMem = os.freemem() / (1024 * 1024 * 1024);\n\nconsole.log(`OS Type: ${os.type()}`);\nconsole.log(`Total Memory: ${totalMem.toFixed(2)} GB`);\nconsole.log(`Free Memory: ${freeMem.toFixed(2)} GB`);"}},{day:3,title:"비동기 프로그래밍 심화",description:"Node.js의 핵심인 비동기 처리를 마스터합니다. Callback, Promise, Async/Await의 진화를 이해합니다.",duration:"2.5시간",topics:[{title:"Callback Hell과 Promise",content:"콜백 지옥을 해결하기 위해 등장한 Promise 객체의 사용법과 체이닝을 배웁니다.",code:`const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("성공!"), 1000);
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));`},{title:"Async / Await",content:"비동기 코드를 동기 코드처럼 읽기 쉽게 작성하는 현대적인 방법입니다.",code:`const run = async () => {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};
run();`}],challenge:{title:"비동기 파일 읽기",description:"fs.readFile(콜백 방식)을 Promise로 감싸서 직접 promisify 해보고, async/await로 파일을 읽는 함수를 만들어보세요.",solution:`import fs from 'fs';

const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

async function main() {
  try {
    const data = await readFilePromise('./package.json');
    console.log(data);
  } catch (err) {
    console.error("파일 읽기 실패:", err);
  }
}
main();`}},{day:4,title:"파일 시스템과 스트림",description:"대용량 데이터를 효율적으로 처리하기 위한 스트림(Stream)과 버퍼(Buffer)를 이해합니다.",duration:"2시간",topics:[{title:"fs 모듈 (Promises API)",content:"파일 생성, 읽기, 수정, 삭제(CRUD) 작업을 수행합니다.",code:`import fs from 'fs/promises';

await fs.writeFile('test.txt', 'Hello');
const data = await fs.readFile('test.txt', 'utf8');
await fs.unlink('test.txt'); // 삭제`},{title:"Stream과 Pipe",content:"파일을 조각(chunk)내어 전송하는 스트림 방식을 통해 메모리 효율을 높입니다.",code:`import fs from 'fs';

const readStream = fs.createReadStream('large-file.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream); // 읽은 데이터를 바로 씀`}],challenge:{title:"파일 복사기 만들기",description:"스트림을 사용하여 원본 파일을 읽어 복사본을 만드는 `copyFile.js`를 작성하세요. 복사가 완료되면 '복사 완료'를 출력해야 합니다.",solution:`import fs from 'fs';

const rs = fs.createReadStream('source.txt');
const ws = fs.createWriteStream('dest.txt');

rs.pipe(ws);

ws.on('finish', () => {
  console.log('파일 복사가 완료되었습니다.');
});`}},{day:5,title:"HTTP 웹 서버 구축",description:"프레임워크 없이 순수 Node.js로 웹 서버를 만들며 HTTP 프로토콜의 원리를 익힙니다.",duration:"2시간",topics:[{title:"http 모듈로 서버 띄우기",content:"요청(Request)과 응답(Response) 객체를 다루는 법을 배웁니다.",code:`import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
});

server.listen(8080);`},{title:"URL 파싱과 라우팅",content:"요청된 URL에 따라 다른 콘텐츠를 보여주는 라우팅 로직을 구현합니다.",code:`// req.url 확인
if (req.url === '/') {
  res.end('Home');
} else if (req.url === '/login') {
  res.end('Login Page');
}`}],challenge:{title:"간단한 API 서버",description:"`GET /time` 요청이 오면 현재 시간을 JSON으로 응답하고, 그 외의 요청은 404를 반환하는 서버를 만드세요.",solution:`import http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ time: new Date().toISOString() }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);`}},{day:6,title:"Express.js 시작하기",description:"Node.js의 표준 웹 프레임워크인 Express를 사용하여 서버 개발 생산성을 높입니다.",duration:"2시간",topics:[{title:"Express 설치 및 기본 구조",content:"http 모듈의 복잡한 보일러플레이트를 제거하고 간결하게 서버를 작성합니다.",code:`import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000);`},{title:"정적 파일 제공 (Static Files)",content:"이미지, CSS, HTML 파일 등을 브라우저에 제공하는 방법을 배웁니다.",code:`app.use(express.static('public'));
// public 폴더 안의 파일들이 루트 경로로 접근 가능해짐`}],challenge:{title:"HTML 파일 서빙",description:"public 폴더에 index.html을 만들고, Express 서버를 통해 해당 파일이 브라우저에 보이도록 설정하세요.",solution:`import express from 'express';
import path from 'path';

const app = express();

// 'public' 폴더를 정적 파일 경로로 지정
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('http://localhost:3000 에서 확인하세요.');
});`}},{day:7,title:"미들웨어와 에러 핸들링",description:"Express의 핵심인 미들웨어 패턴을 이해하고, 에러를 우아하게 처리하는 법을 배웁니다.",duration:"2.5시간",topics:[{title:"미들웨어의 동작 원리",content:"요청이 들어와서 응답이 나갈 때까지 거쳐가는 함수들입니다. `next()`로 다음 단계로 넘깁니다.",code:`app.use((req, res, next) => {
  console.log('모든 요청에 대해 실행됨');
  next();
});`},{title:"에러 처리 미들웨어",content:"인자가 4개인 미들웨어는 에러 처리 전용입니다.",code:`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`}],challenge:{title:"요청 시간 기록기",description:"모든 요청에 대해 요청이 들어온 시각과 URL을 콘솔에 찍는 미들웨어를 작성하세요.",solution:`const timeLogger = (req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(\`[\${time}] \${req.method} \${req.url}\`);
  next();
};

app.use(timeLogger);`}},{day:8,title:"REST API 설계 및 구현",description:"자원을 명시하고 HTTP 메서드로 행위를 결정하는 RESTful API를 설계합니다.",duration:"3시간",topics:[{title:"REST 원칙과 HTTP Method",content:"GET(조회), POST(생성), PUT/PATCH(수정), DELETE(삭제)의 의미를 명확히 이해합니다.",code:`// 좋은 예
GET /users/1
POST /users

// 나쁜 예
GET /getUsers
POST /createUser`},{title:"Router로 코드 분리",content:"API 경로별로 파일을 나누어 관리합니다.",code:`// routes/users.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => { ... });

export default router;

// app.js
app.use('/users', userRouter);`}],challenge:{title:"게시판 API 구조 잡기",description:"게시글(posts)과 댓글(comments)을 위한 라우터를 각각 만들고 app.js에 연결하세요.",solution:`// routes/posts.js
const router = express.Router();
router.get('/', (req, res) => res.send('Post List'));
export default router;

// routes/comments.js
const router = express.Router();
router.get('/', (req, res) => res.send('Comment List'));
export default router;

// app.js
import postRouter from './routes/posts.js';
import commentRouter from './routes/comments.js';

app.use('/posts', postRouter);
app.use('/comments', commentRouter);`}},{day:9,title:"데이터베이스 연동 (MongoDB)",description:"NoSQL 데이터베이스인 MongoDB와 ODM인 Mongoose를 사용하여 데이터를 영구 저장합니다.",duration:"3시간",topics:[{title:"MongoDB와 Mongoose 연결",content:"데이터베이스에 접속하고 스키마(Schema)를 정의합니다.",code:`import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/myapp');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('User', UserSchema);`},{title:"데이터 생성 및 조회",content:"Model을 사용하여 DB에 데이터를 넣고 찾습니다.",code:`// 생성
const user = new User({ name: 'Kim', age: 20 });
await user.save();

// 조회
const users = await User.find({ age: { $gte: 20 } });`}],challenge:{title:"회원가입 API",description:"POST /register 요청으로 { name, email }을 받아 DB에 저장하는 API를 만드세요.",solution:`app.post('/register', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`}},{day:10,title:"CRUD 완성하기",description:"DB와 연동하여 완전한 CRUD(Create, Read, Update, Delete) 기능을 구현합니다.",duration:"3시간",topics:[{title:"수정과 삭제",content:"findByIdAndUpdate, findByIdAndDelete 메서드를 활용합니다.",code:`// 수정
await User.findByIdAndUpdate(id, { age: 21 });

// 삭제
await User.findByIdAndDelete(id);`},{title:"비동기 에러 처리",content:"async 함수 내부의 에러를 catch하여 클라이언트에게 적절한 응답을 보냅니다.",code:`try {
  // DB 작업
} catch (error) {
  res.status(500).json({ message: "서버 에러" });
}`}],challenge:{title:"상품 관리 API",description:"상품(Product) 모델을 정의하고, ID로 특정 상품을 수정하고 삭제하는 API를 구현하세요.",solution:`// PUT /products/:id
app.put('/products/:id', async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE /products/:id
app.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send('Deleted');
});`}},{day:11,title:"인증과 보안 (Authentication)",description:"사용자 로그인 기능을 구현하고 JWT(JSON Web Token)를 통해 인증 상태를 관리합니다.",duration:"4시간",topics:[{title:"비밀번호 암호화 (Bcrypt)",content:"비밀번호를 평문으로 저장하면 안 됩니다. 해시 함수를 이용해 암호화합니다.",code:`import bcrypt from 'bcrypt';
const hashedPassword = await bcrypt.hash('mypassword', 10);
const match = await bcrypt.compare('mypassword', hashedPassword);`},{title:"JWT 발급과 검증",content:"로그인 성공 시 토큰을 발급하고, 이후 요청에서 토큰을 확인하여 유저를 식별합니다.",code:`import jwt from 'jsonwebtoken';
const token = jwt.sign({ id: user._id }, 'SECRET_KEY');

// 검증
const decoded = jwt.verify(token, 'SECRET_KEY');`}],challenge:{title:"로그인 API",description:"이메일과 비밀번호를 받아 검증하고, 일치하면 JWT 토큰을 반환하는 로그인 로직을 작성하세요.",solution:`app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('User not found');

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id }, 'SECRET');
  res.header('auth-token', token).send(token);
});`}},{day:12,title:"배포와 환경 변수",description:"개발한 서버를 실제 환경에 배포하기 위한 준비를 합니다.",duration:"2시간",topics:[{title:"환경 변수 관리 (dotenv)",content:"DB 주소, 비밀 키 등 민감한 정보는 코드에 하드코딩하지 않고 .env 파일로 관리합니다.",code:`// .env 파일
DB_URL=mongodb://...
PORT=3000

// app.js
import 'dotenv/config';
console.log(process.env.PORT);`},{title:"PM2로 프로세스 관리",content:"서버가 꺼지지 않게 관리해주는 프로세스 매니저 PM2를 알아봅니다.",code:`npm install pm2 -g
pm2 start app.js`}],challenge:{title:"배포 준비하기",description:"프로젝트의 포트 번호와 DB 연결 주소를 환경 변수로 분리하고, npm start 스크립트를 설정하세요.",solution:`// package.json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}

// app.js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => ...);`}}],fy=[{day:1,title:"NestJS 시작하기 & 아키텍처",description:"NestJS의 철학과 기본 구조를 이해하고, 첫 번째 프로젝트를 생성합니다.",duration:"1.5시간",topics:[{title:"NestJS란?",content:"Angular의 영향을 받은 구조적이고 확장 가능한 Node.js 프레임워크입니다. TypeScript를 기본으로 지원합니다.",code:`// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();`},{title:"Module 구조",content:"NestJS는 모듈 단위로 애플리케이션을 구성합니다. Root Module에서 시작하여 트리 구조를 이룹니다.",code:`// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`}],challenge:{title:"Hello NestJS",description:"Nest CLI를 설치하고 새 프로젝트를 생성한 뒤, 'Hello NestJS World!'를 반환하는 기본 라우트를 만들어보세요.",solution:`// app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello NestJS World!';
  }
}`}},{day:2,title:"Controller와 Routing",description:"클라이언트의 요청을 받아 처리하는 Controller의 역할과 데코레이터를 배웁니다.",duration:"2시간",topics:[{title:"기본 라우팅",content:"@Controller와 @Get, @Post 등의 데코레이터로 엔드포인트를 정의합니다.",code:`@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}`},{title:"요청 객체 다루기",content:"@Req, @Body, @Query, @Param 등을 사용하여 요청 데이터에 접근합니다.",code:`@Post()
create(@Body() createCatDto: any) {
  return 'This action adds a new cat';
}

@Get(':id')
findOne(@Param('id') id: string) {
  return \`This action returns a #\${id} cat\`;
}`}],challenge:{title:"사용자 API 만들기",description:"'/users' 경로로 들어오는 GET, POST 요청을 처리하는 Controller를 작성하세요. (POST 요청은 body 내용을 그대로 반환)",solution:`import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return '모든 유저 조회';
  }

  @Post()
  create(@Body() userData: any) {
    return userData;
  }
}`}},{day:3,title:"Provider와 의존성 주입 (DI)",description:"NestJS의 핵심인 Dependency Injection 패턴과 Provider(Service)의 역할을 이해합니다.",duration:"2.5시간",topics:[{title:"Service 만들기",content:"비즈니스 로직은 Service에 작성하고 @Injectable() 데코레이터를 붙입니다.",code:`@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}`},{title:"의존성 주입",content:"Controller의 생성자에서 Service를 주입받아 사용합니다.",code:`@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}`}],challenge:{title:"할 일 목록 서비스",description:"메모리에 할 일(Todo) 목록을 저장하고 관리하는 TodoService를 만들고 Controller에 연결하세요.",solution:`// todo.service.ts
@Injectable()
export class TodoService {
  private todos = [];
  
  add(task: string) {
    this.todos.push(task);
  }
  
  getAll() {
    return this.todos;
  }
}

// todo.controller.ts
@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}
  
  @Get()
  getTodos() {
    return this.todoService.getAll();
  }
}`}},{day:4,title:"DTO와 유효성 검사 (Validation)",description:"데이터 전송 객체(DTO)를 정의하고 class-validator를 이용해 입력값을 검증합니다.",duration:"2시간",topics:[{title:"DTO (Data Transfer Object)",content:"계층 간 데이터 교환을 위한 객체를 클래스로 정의합니다.",code:`export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}`},{title:"Validation Pipe",content:"ValidationPipe를 전역 또는 핸들러 레벨에 적용하여 DTO의 유효성을 자동으로 검사합니다.",code:`// main.ts
app.useGlobalPipes(new ValidationPipe());

// create-cat.dto.ts
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}`}],challenge:{title:"회원가입 유효성 검사",description:"이메일(email 형식)과 비밀번호(최소 6자)를 필수로 받는 CreateUserDto를 작성하고 적용하세요.",solution:`import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

// Controller에서 사용
@Post()
create(@Body() createUserDto: CreateUserDto) {
  return '유효성 검사 통과';
}`}},{day:5,title:"TypeORM과 데이터베이스",description:"TypeORM을 사용하여 관계형 데이터베이스(PostgreSQL, MySQL 등)와 연동합니다.",duration:"3시간",topics:[{title:"Entity 정의",content:"데이터베이스 테이블과 매핑되는 클래스(Entity)를 정의합니다.",code:`@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ default: true })
  isActive: boolean;
}`},{title:"Repository 패턴",content:"Repository를 주입받아 DB 작업을 수행합니다.",code:`@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}`}],challenge:{title:"상품 엔티티 만들기",description:"상품명(name), 가격(price), 재고(stock) 컬럼을 가진 Product 엔티티를 정의하세요.",solution:`import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  stock: number;
}`}},{day:6,title:"CRUD 실전 구현",description:"지금까지 배운 내용을 종합하여 게시판의 CRUD(생성, 조회, 수정, 삭제) 기능을 완성합니다.",duration:"3시간",topics:[{title:"예외 처리 (Exception Filters)",content:"HTTP 예외를 적절하게 던지고 처리하는 방법을 배웁니다.",code:`const user = await this.usersRepository.findOneBy({ id });
if (!user) {
  throw new NotFoundException('User not found');
}`},{title:"전체 흐름 연결",content:"Controller -> Service -> Repository로 이어지는 데이터 흐름을 완성합니다.",code:`// Controller
@Delete(':id')
remove(@Param('id') id: string) {
  return this.usersService.remove(+id);
}

// Service
async remove(id: number): Promise<void> {
  await this.usersRepository.delete(id);
}`}],challenge:{title:"게시글 수정 기능",description:"특정 ID의 게시글을 수정하는 Update 로직을 구현하세요. (존재하지 않으면 404 에러)",solution:`// Service
async update(id: number, updateBoardDto: UpdateBoardDto) {
  const board = await this.boardRepository.findOneBy({ id });
  if (!board) {
    throw new NotFoundException(\`Board with ID \${id} not found\`);
  }
  // 업데이트 로직...
  return this.boardRepository.save({ ...board, ...updateBoardDto });
}`}},{day:7,title:"인증과 보안 (Guards)",description:"Guard를 사용하여 특정 라우트에 대한 접근 권한을 제어하고, JWT 인증을 적용합니다.",duration:"3.5시간",topics:[{title:"Guards",content:"요청을 처리하기 전에 권한이 있는지 확인합니다. @UseGuards()로 적용합니다.",code:`@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}`},{title:"JWT Strategy",content:"Passport 라이브러리와 함께 JWT 전략을 구현하여 토큰을 검증합니다.",code:`@UseGuards(AuthGuard('jwt'))
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}`}],challenge:{title:"관리자 전용 라우트",description:"RolesGuard를 만들어 'admin' 권한을 가진 사용자만 접근할 수 있는 API를 만드세요.",solution:`// RolesGuard 구현 (생략)

@Post()
@Roles('admin')
@UseGuards(AuthGuard, RolesGuard)
create(@Body() createDto: CreateDto) {
  return this.service.create(createDto);
}`}}],sy=[{day:1,title:"Next.js 시작하기 & App Router",description:"React 프레임워크인 Next.js의 기본 개념과 App Router 구조를 이해합니다.",duration:"1.5시간",topics:[{title:"Next.js란?",content:"풀스택 웹 애플리케이션을 위한 React 프레임워크입니다. 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원합니다.",code:`npx create-next-app@latest my-app
cd my-app
npm run dev`},{title:"App Router 구조",content:"파일 시스템 기반 라우팅을 사용합니다. `app` 폴더 내의 폴더 구조가 URL 경로가 됩니다.",code:`app/
  page.tsx      // / 경로
  about/
    page.tsx    // /about 경로
  layout.tsx    // 공통 레이아웃`}],challenge:{title:"첫 페이지 만들기",description:"새 Next.js 프로젝트를 생성하고, `/about` 페이지를 만들어 'About Page'라는 텍스트를 띄워보세요.",solution:`// app/about/page.tsx
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my first Next.js page!</p>
    </div>
  );
}`}},{day:2,title:"Routing과 Navigation",description:"페이지 간 이동과 동적 라우팅(Dynamic Routing)을 구현하는 방법을 배웁니다.",duration:"2시간",topics:[{title:"Link 컴포넌트",content:"`<a>` 태그 대신 `<Link>` 컴포넌트를 사용하여 클라이언트 사이드 네비게이션을 구현합니다.",code:`import Link from 'next/link';

export default function Home() {
  return <Link href="/about">Go to About</Link>;
}`},{title:"동적 라우팅 (Dynamic Routes)",content:"대괄호 `[param]`을 사용하여 동적인 경로를 처리합니다.",code:`// app/posts/[id]/page.tsx
export default function Post({ params }: { params: { id: string } }) {
  return <h1>Post ID: {params.id}</h1>;
}`}],challenge:{title:"블로그 포스트 네비게이션",description:"메인 페이지에 포스트 목록(1, 2, 3)을 만들고, 클릭하면 `/posts/[id]`로 이동하여 해당 ID를 출력하게 하세요.",solution:`// app/page.tsx
import Link from 'next/link';

export default function Home() {
  const posts = [1, 2, 3];
  return (
    <ul>
      {posts.map(id => (
        <li key={id}>
          <Link href={\`/posts/\${id}\`}>Post {id}</Link>
        </li>
      ))}
    </ul>
  );
}`}},{day:3,title:"Server vs Client Components",description:"Next.js 13+의 핵심인 서버 컴포넌트와 클라이언트 컴포넌트의 차이를 이해합니다.",duration:"2시간",topics:[{title:"Server Components (기본값)",content:"서버에서 렌더링되며, DB 접근 등 보안이 필요한 작업에 유리합니다. 브라우저 API(useState, useEffect)는 사용할 수 없습니다.",code:`// 기본적으로 모든 컴포넌트는 서버 컴포넌트입니다.
export default async function Page() {
  const data = await getData(); // 서버에서 직접 데이터 호출 가능
  return <div>{data}</div>;
}`},{title:"Client Components",content:"상호작용(onClick, onChange)이나 상태 관리(useState)가 필요할 때 `'use client'` 지시어를 사용합니다.",code:`'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}],challenge:{title:"인터랙티브 버튼 만들기",description:"서버 컴포넌트인 `page.tsx` 안에 클라이언트 컴포넌트인 `LikeButton`을 만들어 포함시키세요.",solution:`// app/LikeButton.tsx
'use client';
import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(likes + 1)}>Likes: {likes}</button>;
}

// app/page.tsx
import LikeButton from './LikeButton';

export default function Page() {
  return (
    <div>
      <h1>Post Title</h1>
      <LikeButton />
    </div>
  );
}`}},{day:4,title:"Data Fetching",description:"서버 컴포넌트에서 데이터를 가져오는 방법과 로딩/에러 상태를 처리하는 방법을 배웁니다.",duration:"2.5시간",topics:[{title:"async / await 데이터 호출",content:"서버 컴포넌트는 그 자체로 async 함수가 될 수 있어, 데이터를 직관적으로 가져올 수 있습니다.",code:`async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{JSON.stringify(data)}</main>;
}`},{title:"Loading UI & Error Handling",content:"`loading.tsx`와 `error.tsx` 파일을 통해 로딩 상태와 에러를 우아하게 처리합니다.",code:`// app/loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}

// app/error.tsx
'use client';
export default function Error({ error, reset }) {
  return <button onClick={() => reset()}>Try again</button>;
}`}],challenge:{title:"외부 API 데이터 표시",description:"`jsonplaceholder` API를 사용하여 사용자 목록을 가져와 화면에 표시하는 페이지를 만드세요.",solution:`export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}},{day:5,title:"Server Actions",description:"API 라우트를 따로 만들지 않고, 서버 함수를 직접 호출하여 폼 데이터를 처리합니다.",duration:"2.5시간",topics:[{title:"Server Actions 정의",content:"`'use server'` 지시어를 사용하여 서버에서 실행될 함수를 정의합니다.",code:`// app/actions.ts
'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.post.create({ data: { title } });
}`},{title:"Form 연결",content:"form 태그의 `action` 속성에 서버 액션 함수를 연결합니다.",code:`import { createPost } from './actions';

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}`}],challenge:{title:"간단한 방명록",description:"Server Action을 사용하여 입력받은 메시지를 콘솔에 출력하는 폼을 만드세요.",solution:`// app/page.tsx
export default function Guestbook() {
  async function addMessage(formData: FormData) {
    'use server';
    const message = formData.get('message');
    console.log('New message:', message);
  }

  return (
    <form action={addMessage}>
      <input name="message" placeholder="Leave a message..." />
      <button type="submit">Send</button>
    </form>
  );
}`}},{day:6,title:"Styling & Optimization",description:"Tailwind CSS, CSS Modules 등 스타일링 방법과 폰트/이미지 최적화를 배웁니다.",duration:"2시간",topics:[{title:"Next/Image",content:"`<Image>` 컴포넌트를 사용하여 이미지를 자동으로 최적화(Resizing, Lazy loading)합니다.",code:`import Image from 'next/image';
import profilePic from './me.png';

export default function Page() {
  return <Image src={profilePic} alt="Me" />;
}`},{title:"Next/Font",content:"구글 폰트를 최적화하여 레이아웃 시프트(CLS) 없이 사용합니다.",code:`import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return <body className={inter.className}>{children}</body>;
}`}],challenge:{title:"갤러리 페이지",description:"`next/image`를 사용하여 외부 이미지(예: Unsplash)를 최적화하여 보여주는 그리드 레이아웃을 만드세요.",solution:`import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Image 
        src="https://images.unsplash.com/photo-123" 
        alt="Photo" 
        width={300} 
        height={300} 
      />
    </div>
  );
}
// next.config.js에서 images.domains 설정 필요`}},{day:7,title:"배포 (Deployment)",description:"Vercel을 통해 Next.js 애플리케이션을 전 세계에 배포하는 과정을 실습합니다.",duration:"1.5시간",topics:[{title:"Vercel 배포",content:"GitHub 레포지토리를 연결하면 `git push`만으로 자동으로 빌드 및 배포가 진행됩니다.",code:"// 별도의 코드 없이 Vercel 대시보드에서 설정"},{title:"환경 변수 설정",content:"Vercel 프로젝트 설정에서 Production 환경 변수를 안전하게 관리합니다.",code:"process.env.NEXT_PUBLIC_API_URL"}],challenge:{title:"나만의 포트폴리오 배포",description:"지금까지 만든 Next.js 프로젝트를 Vercel에 배포하고, 실제 접속 가능한 URL을 공유하세요.",solution:`// 1. GitHub에 코드 푸시
// 2. Vercel.com 로그인
// 3. 'Add New Project' -> 레포지토리 선택 -> Deploy`}}],ry=[{day:1,title:"Express 시작하기 & 서버 구축",description:"Node.js를 위한 빠르고 개방적인 웹 프레임워크인 Express의 기초를 다집니다.",duration:"1.5시간",topics:[{title:"Express란?",content:"Node.js 환경에서 웹 서버를 쉽게 구축할 수 있게 도와주는 프레임워크입니다. 미들웨어 구조를 기반으로 유연한 확장이 가능합니다.",code:`npm init -y
npm install express`},{title:"Hello World 서버",content:"가장 기본적인 웹 서버를 띄우고 루트 경로('/') 요청에 응답해봅니다.",code:`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});`}],challenge:{title:"나만의 서버 만들기",description:"3000번 포트에서 실행되며, '/about' 경로로 접속했을 때 본인의 이름을 응답하는 서버를 만드세요.",solution:`const express = require('express');
const app = express();

app.get('/about', (req, res) => {
  res.send('My name is Developer');
});

app.listen(3000);`}},{day:2,title:"Routing & Middleware",description:"Express의 핵심인 라우팅 시스템과 미들웨어의 동작 원리를 이해합니다.",duration:"2시간",topics:[{title:"Routing",content:"HTTP 메서드(GET, POST 등)와 URL 경로에 따라 애플리케이션이 어떻게 응답할지 정의합니다.",code:`app.get('/users', (req, res) => { ... });
app.post('/users', (req, res) => { ... });
app.put('/users/:id', (req, res) => { ... });`},{title:"Middleware",content:"요청과 응답 사이클 중간에 위치하여 기능을 수행하는 함수입니다. 로깅, 파싱 등에 사용됩니다.",code:`app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// JSON 파싱 미들웨어
app.use(express.json());`}],challenge:{title:"요청 로거 만들기",description:"모든 요청에 대해 'METHOD URL' 형식(예: 'GET /users')으로 콘솔에 로그를 남기는 미들웨어를 작성하세요.",solution:"app.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n});"}},{day:3,title:"REST API Design",description:"자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 RESTful API를 설계하고 구현합니다.",duration:"2.5시간",topics:[{title:"REST 원칙",content:"자원(Resource)은 URI로, 행위(Verb)는 HTTP Method로, 표현(Representation)은 JSON 등으로 처리합니다.",code:`GET /articles      // 목록 조회
GET /articles/1    // 상세 조회
POST /articles     // 생성
PUT /articles/1    // 수정
DELETE /articles/1 // 삭제`},{title:"Router 객체",content:"라우트를 모듈화하여 관리하기 위해 express.Router()를 사용합니다.",code:`// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { ... });

module.exports = router;

// app.js
app.use('/users', userRouter);`}],challenge:{title:"Todo API 만들기",description:"메모리 상의 배열을 사용하여 Todo 리스트의 CRUD(Create, Read, Update, Delete) API를 구현하세요.",solution:`const todos = [];
app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});`}},{day:4,title:"Error Handling & Validation",description:"안정적인 서버를 위해 에러를 적절히 처리하고, 들어오는 데이터의 유효성을 검사합니다.",duration:"2시간",topics:[{title:"에러 처리 미들웨어",content:"4개의 인자(err, req, res, next)를 가지는 미들웨어는 에러 처리를 담당합니다.",code:`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`},{title:"입력값 검증",content:"클라이언트가 보낸 데이터가 올바른 형식인지 확인해야 합니다. (예: express-validator 사용)",code:`if (!req.body.email) {
  return res.status(400).json({ error: 'Email is required' });
}`}],challenge:{title:"안전한 API 만들기",description:"사용자 생성 API에서 이름이 없거나 2글자 미만일 경우 400 Bad Request 에러를 응답하도록 구현하세요.",solution:`app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name || name.length < 2) {
    return res.status(400).json({ error: 'Invalid name' });
  }
  // ... 사용자 생성 로직
});`}},{day:5,title:"Database Integration (MongoDB)",description:"NoSQL 데이터베이스인 MongoDB와 ODM인 Mongoose를 사용하여 데이터를 영구 저장합니다.",duration:"3시간",topics:[{title:"Mongoose 연결",content:"Node.js와 MongoDB를 연결하고 스키마를 정의합니다.",code:`const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', UserSchema);`},{title:"DB 쿼리",content:"모델을 사용하여 데이터를 조회, 생성, 수정, 삭제합니다.",code:`// 생성
const user = new User({ name: 'Kim' });
await user.save();

// 조회
const users = await User.find();`}],challenge:{title:"DB 연동 Todo API",description:"Day 3에서 만든 Todo API를 Mongoose를 사용하여 실제 DB에 저장되도록 수정하세요.",solution:`app.post('/todos', async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.status(201).json(todo);
});`}},{day:6,title:"Authentication (JWT)",description:"JSON Web Token(JWT)을 사용하여 사용자 인증 및 인가 시스템을 구현합니다.",duration:"3시간",topics:[{title:"JWT 발급",content:"로그인 성공 시 사용자 정보를 담은 토큰을 생성하여 클라이언트에 전달합니다.",code:`const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
res.json({ token });`},{title:"인증 미들웨어",content:"요청 헤더의 토큰을 검증하여 유효한 사용자인지 확인합니다.",code:`const auth = (req, res, next) => {
  const token = req.header('Authorization');
  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch(e) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};`}],challenge:{title:"보호된 라우트",description:"로그인한 사용자만 접근할 수 있는 '/profile' 라우트를 구현하세요.",solution:"app.get('/profile', auth, (req, res) => {\n  res.json({ message: `Hello user ${req.user.id}` });\n});"}},{day:7,title:"Deployment",description:"완성된 Express 애플리케이션을 클라우드 환경(예: Render, Heroku)에 배포합니다.",duration:"1.5시간",topics:[{title:"환경 변수 설정",content:"포트, DB 주소, 비밀 키 등 민감한 정보는 환경 변수로 관리합니다.",code:`require('dotenv').config();
const port = process.env.PORT || 3000;`},{title:"배포 준비",content:"package.json의 start 스크립트를 설정하고, 프로덕션 환경에 맞는 설정을 확인합니다.",code:`"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}`}],challenge:{title:"Hello Express 배포",description:"간단한 Express 서버를 클라우드 서비스에 배포하고 접속 URL을 확인하세요.",solution:`// 1. 코드를 GitHub에 푸시
// 2. 클라우드 서비스(Render 등)에서 레포지토리 연결
// 3. 환경 변수 설정 후 배포`}}],ro=[{id:"js",title:"JavaScript 101",description:"웹 개발의 기본, 자바스크립트 문법과 핵심 개념을 8일 만에 마스터하세요.",heroTitle:"JavaScript 기초 다지기",heroDesc:"프로그래밍의 시작, 자바스크립트의 핵심 개념을 탄탄하게 다져보세요.",icon:"💛",themeColor:"js",data:cy},{id:"react",title:"React 101",description:"모던 웹 개발의 대세, 리액트의 기초부터 실전 배포까지 15일 완성 코스.",heroTitle:"React 마스터 여정",heroDesc:"하루 1-2시간, 체계적인 커리큘럼으로 React의 기초부터 실전까지 완벽하게 마스터하세요.",icon:"⚛️",themeColor:"react",data:iy},{id:"node",title:"Node.js 101",description:"자바스크립트로 서버를 만드는 첫걸음. Node.js의 핵심부터 Express 서버 구축까지.",heroTitle:"Node.js 백엔드 입문",heroDesc:"프론트엔드를 넘어 백엔드까지, 자바스크립트 하나로 풀스택 개발자에 도전하세요.",icon:"🟩",themeColor:"node",data:oy},{id:"express",title:"Express 101",description:"Node.js를 위한 빠르고 개방적인 웹 프레임워크. 미들웨어부터 DB 연동까지.",heroTitle:"Express 서버 구축",heroDesc:"가장 인기 있는 Node.js 프레임워크로 강력하고 유연한 백엔드 API를 만들어보세요.",icon:"🚂",themeColor:"express",data:ry},{id:"nestjs",title:"NestJS 101",description:"Node.js의 스프링, NestJS로 견고하고 확장 가능한 백엔드 서버를 구축해보세요.",heroTitle:"NestJS 아키텍처 마스터",heroDesc:"체계적인 모듈 시스템과 DI 패턴을 익히고, 엔터프라이즈급 백엔드 개발에 도전하세요.",icon:"🦁",themeColor:"nestjs",data:fy},{id:"nextjs",title:"Next.js 101",description:"React의 완성형 프레임워크. App Router부터 배포까지 풀스택 개발을 경험하세요.",heroTitle:"Next.js 풀스택 완성",heroDesc:"서버 컴포넌트와 최신 기능을 활용하여 빠르고 SEO 친화적인 웹 애플리케이션을 만드세요.",icon:"▲",themeColor:"nextjs",data:sy}];function dy(){const[A,R]=bl.useState(null),[j,m]=bl.useState(null);bl.useEffect(()=>{const Q=()=>{const g=window.location.hash.match(/^#\/([^/]+)(?:\/day\/(\d+))?/);if(g){const B=g[1],U=g[2]?parseInt(g[2]):null;if(ro.some(F=>F.id===B)){R(B),m(U);return}}R(null),m(null)};return Q(),window.addEventListener("hashchange",Q),()=>window.removeEventListener("hashchange",Q)},[]),bl.useEffect(()=>{const Q=D=>{if(D.key==="Backspace"){const g=D.target;g.tagName==="INPUT"||g.tagName==="TEXTAREA"||g.isContentEditable||(j!==null?(D.preventDefault(),X(A)):A!==null&&(D.preventDefault(),q()))}};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[A,j]);const q=()=>{window.location.hash=""},X=Q=>{window.location.hash=`#/${Q}`};return{course:A,selectedDay:j,navigateToHome:q,navigateToCourse:X,navigateToDay:Q=>{window.location.hash=`#/${A}/day/${Q}`}}}function my(A){const[R,j]=bl.useState(()=>{const L=localStorage.getItem("completedDays_v2");if(!L)return{react:{},js:{}};const Q=JSON.parse(L);if(Array.isArray(Q.react)){const D=new Date().toLocaleString(),g={react:{},js:{}};return Q.react.forEach(B=>g.react[B]=D),Q.js.forEach(B=>g.js[B]=D),g}return Q});return{completedDays:R,toggleComplete:L=>{if(!A)return;const Q=R[A]||{},D=!!Q[L];let g;if(D)g={...Q},delete g[L];else{const U=new Date().toLocaleString();g={...Q,[L]:U}}const B={...R,[A]:g};j(B),localStorage.setItem("completedDays_v2",JSON.stringify(B))},isCompleted:L=>A?!!R[A]?.[L]:!1,getCompletedDate:L=>A?R[A]?.[L]:null}}function mo({children:A,headerContent:R}){return z.jsxs("div",{className:"app",children:[z.jsx("header",{className:"header",children:z.jsx("div",{className:"container",children:R})}),z.jsx("main",{className:"main-content",children:A}),z.jsx("footer",{className:"footer",children:z.jsx("div",{className:"container",children:z.jsx("p",{children:"Designed for your Coding Journey 🚀"})})})]})}function hy({onNavigate:A}){const R=z.jsxs("div",{className:"logo",children:[z.jsx("div",{className:"logo-icon",children:"🚀"}),z.jsx("span",{className:"gradient-text",children:"DevMastery"})]});return z.jsx(mo,{headerContent:R,children:z.jsxs("div",{className:"container",children:[z.jsxs("div",{className:"hero",children:[z.jsx("h1",{children:z.jsx("span",{className:"gradient-text",children:"학습할 과정을 선택하세요"})}),z.jsx("p",{className:"hero-desc",children:"기초부터 심화까지, 당신의 개발 여정을 함께합니다."})]}),z.jsx("div",{className:"course-selection",children:ro.map(j=>z.jsxs("div",{className:`course-card ${j.themeColor}-card`,onClick:()=>A(j.id),children:[z.jsx("div",{className:"course-icon",children:j.icon}),z.jsx("h2",{children:j.title}),z.jsx("p",{children:j.description}),z.jsx("span",{className:"btn-text",children:"시작하기 →"})]},j.id))})]})})}function yy({courseData:A,curriculum:R,completedDays:j,onNavigateDay:m,onNavigateHome:q}){const X=z.jsxs("div",{className:"header-content",children:[z.jsxs("div",{className:"logo",onClick:q,style:{cursor:"pointer"},children:[z.jsx("div",{className:"logo-icon",children:A?.icon}),z.jsx("span",{className:"gradient-text",children:A?.title})]}),z.jsx("button",{onClick:q,className:"btn btn-outline btn-home",children:"🏠 코스 변경"})]});return z.jsx(mo,{headerContent:X,children:z.jsxs("div",{className:"container",children:[z.jsxs("div",{className:"hero",children:[z.jsx("h1",{children:z.jsx("span",{className:"gradient-text",children:A?.heroTitle})}),z.jsx("p",{className:"hero-desc",children:A?.heroDesc})]}),z.jsx("div",{className:"curriculum-grid",children:R.map(L=>{const Q=j?.[L.day],D=!!Q;return z.jsxs("div",{className:`card ${D?"card-completed":""}`,onClick:()=>m(L.day),children:[D&&z.jsx("div",{className:"card-check",children:"✓"}),z.jsxs("div",{className:"card-header",children:[z.jsxs("span",{className:"day-badge",children:["Day ",L.day]}),z.jsxs("span",{className:"duration",children:["⏱️ ",L.duration]})]}),z.jsx("h3",{children:L.title}),z.jsx("p",{children:L.description}),D&&z.jsxs("p",{style:{fontSize:"0.8rem",color:"#4caf50",marginTop:"5px"},children:[Q," 완료"]}),z.jsx("div",{className:"card-footer",children:"학습하기 →"})]},L.day)})})]})})}function Cd({code:A}){const R=A.split("^^");return z.jsx("pre",{className:"code-block",children:z.jsx("code",{children:R.map((j,m)=>m%2===1?z.jsx("span",{className:"hl-highlight",children:j},m):j)})})}function py({courseData:A,lesson:R,nextLesson:j,completedDate:m,onNavigateHome:q,onNavigateCourse:X,onNavigateDay:L,onToggleComplete:Q}){const[D,g]=bl.useState(!1),B=!!m;bl.useEffect(()=>{g(!1)},[R.day]);const U=z.jsxs("div",{className:"header-content",children:[z.jsxs("div",{className:"logo",onClick:q,style:{cursor:"pointer"},children:[z.jsx("div",{className:"logo-icon",children:A?.icon}),z.jsx("span",{className:"gradient-text",children:A?.title})]}),z.jsxs("div",{className:"nav-buttons",children:[z.jsx("button",{onClick:X,className:"btn btn-outline",children:"목록으로"}),z.jsx("button",{onClick:q,className:"btn btn-outline btn-home",children:"🏠 홈"})]})]});return z.jsx(mo,{headerContent:U,children:z.jsxs("div",{className:"container lesson-container",children:[z.jsx("button",{onClick:X,className:"back-btn",children:"← 목록으로 돌아가기"}),z.jsxs("div",{className:"lesson-header",children:[z.jsxs("div",{className:"lesson-meta",children:[z.jsxs("span",{className:"tag",children:["Day ",R.day]}),z.jsxs("span",{className:"duration",children:["⏱️ ",R.duration]})]}),z.jsx("h1",{children:R.title}),z.jsx("p",{className:"lesson-desc",children:R.description})]}),z.jsx("div",{className:"topics",children:R.topics.map((F,Rt)=>z.jsxs("section",{className:"topic-card",children:[z.jsxs("h2",{children:[z.jsx("span",{className:"topic-number",children:Rt+1}),F.title]}),z.jsx("p",{children:F.content}),F.code&&z.jsx(Cd,{code:F.code})]},Rt))}),z.jsxs("section",{className:"challenge-card",children:[z.jsx("div",{className:"challenge-icon",children:"💡"}),z.jsxs("div",{style:{width:"100%"},children:[z.jsx("h2",{children:"오늘의 도전 과제"}),z.jsx("h3",{children:R.challenge.title}),z.jsx("p",{children:R.challenge.description}),z.jsx("div",{className:"hint-box",children:"💡 힌트: 이 페이지의 코드를 참고하여 직접 실습해보세요!"}),z.jsx("div",{style:{marginTop:"15px"},children:z.jsx("button",{onClick:()=>g(!D),className:"btn btn-outline",style:{padding:"5px 10px",fontSize:"0.9rem"},children:D?"🙈 정답 숨기기":"👀 정답 보기"})}),D&&R.challenge.solution&&z.jsx("div",{style:{marginTop:"15px"},children:z.jsx(Cd,{code:R.challenge.solution})})]})]}),z.jsxs("div",{className:"action-bar",children:[z.jsx("button",{onClick:()=>Q(R.day),className:`btn ${B?"btn-completed":"btn-outline"}`,children:B?`✓ 완료됨 (${m})`:"완료 표시하기"}),j&&z.jsx("button",{onClick:()=>L(j.day),className:"btn btn-primary",children:"다음 수업 →"})]})]})})}function vy(){const{course:A,selectedDay:R,navigateToHome:j,navigateToCourse:m,navigateToDay:q}=dy(),{completedDays:X,toggleComplete:L,getCompletedDate:Q}=my(A),D=ro.find(B=>B.id===A),g=D?.data||[];if(!A)return z.jsx(hy,{onNavigate:m});if(R){const B=g.find(F=>F.day===R),U=g.find(F=>F.day===R+1);return B?z.jsx(py,{courseData:D,lesson:B,nextLesson:U,completedDate:Q(R),onNavigateHome:j,onNavigateCourse:()=>m(A),onNavigateDay:q,onToggleComplete:L}):z.jsx("div",{children:"Loading..."})}return z.jsx(yy,{courseData:D,curriculum:g,completedDays:X[A],onNavigateDay:q,onNavigateHome:j})}uy.createRoot(document.getElementById("root")).render(z.jsx(bl.StrictMode,{children:z.jsx(vy,{})}));
