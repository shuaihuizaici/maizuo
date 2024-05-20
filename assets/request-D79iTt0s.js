import{J as Xe,K as Ge,M as Y,j as Qe,N as Ze,a as x,B as ge,O as Ye,P as et,Q as W,R as K,S as tt,U as le,I as nt,V as rt,W as st,X as ot,Y as it,Z as at,y as z,$ as ct,z as lt,r as ut,a0 as ft,a1 as dt}from"./index-WWJJeb02.js";let L=0;function pt(e){e?(L||document.body.classList.add("van-toast--unclickable"),L++):L&&(L--,L||document.body.classList.remove("van-toast--unclickable"))}const[ht,k]=Xe("toast"),mt=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],yt={icon:String,show:Boolean,type:W("text"),overlay:Boolean,message:K,iconSize:K,duration:tt(2e3),position:W("middle"),teleport:[String,Object],wordBreak:String,className:le,iconPrefix:String,transition:W("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:le,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:K};var Ae=Ge({name:ht,props:yt,emits:["update:show"],setup(e,{emit:t,slots:n}){let r,s=!1;const o=()=>{const c=e.show&&e.forbidClick;s!==c&&(s=c,pt(s))},i=c=>t("update:show",c),l=()=>{e.closeOnClick&&i(!1)},p=()=>clearTimeout(r),h=()=>{const{icon:c,type:y,iconSize:E,iconPrefix:f,loadingType:d}=e;if(c||y==="success"||y==="fail")return x(nt,{name:c||y,size:E,class:k("icon"),classPrefix:f},null);if(y==="loading")return x(rt,{class:k("loading"),size:E,type:d},null)},u=()=>{const{type:c,message:y}=e;if(n.message)return x("div",{class:k("text")},[n.message()]);if(st(y)&&y!=="")return c==="html"?x("div",{key:0,class:k("text"),innerHTML:String(y)},null):x("div",{class:k("text")},[y])};return Y(()=>[e.show,e.forbidClick],o),Y(()=>[e.show,e.type,e.message,e.duration],()=>{p(),e.show&&e.duration>0&&(r=setTimeout(()=>{i(!1)},e.duration))}),Qe(o),Ze(o),()=>x(et,ge({class:[k([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:l,onClosed:p,"onUpdate:show":i},Ye(e,mt)),{default:()=>[h(),u()]})}});function wt(){const e=it({show:!1}),t=s=>{e.show=s},n=s=>{z(e,s,{transitionAppear:!0}),t(!0)},r=()=>t(!1);return at({open:n,close:r,toggle:t}),{open:n,close:r,state:e,toggle:t}}function bt(e){const t=ot(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const Et={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let B=[],St=!1,ue=z({},Et);const Ot=new Map;function Te(e){return ct(e)?e:{message:e}}function Rt(){const{instance:e,unmount:t}=bt({setup(){const n=ut(""),{open:r,state:s,close:o,toggle:i}=wt(),l=()=>{},p=()=>x(Ae,ge(s,{onClosed:l,"onUpdate:show":i}),null);return Y(n,h=>{s.message=h}),ft().render=p,{open:r,close:o,message:n}}});return e}function gt(){if(!B.length||St){const e=Rt();B.push(e)}return B[B.length-1]}function At(e={}){if(!lt)return{};const t=gt(),n=Te(e);return t.open(z({},ue,Ot.get(n.type||ue.type),n)),t}const Tt=e=>t=>At(z({type:e},Te(t))),Ct=Tt("loading"),fe=e=>{B.length&&B[0].close()};dt(Ae);function Ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:Pt}=Object.prototype,{getPrototypeOf:oe}=Object,v=(e=>t=>{const n=Pt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>v(t)===e),J=e=>t=>typeof t===e,{isArray:_}=Array,D=J("undefined");function xt(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Pe=A("ArrayBuffer");function Nt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Pe(e.buffer),t}const kt=J("string"),O=J("function"),xe=J("number"),V=e=>e!==null&&typeof e=="object",Bt=e=>e===!0||e===!1,H=e=>{if(v(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ft=A("Date"),_t=A("File"),Lt=A("Blob"),Ut=A("FileList"),Dt=e=>V(e)&&O(e.pipe),jt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=v(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},It=A("URLSearchParams"),Mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ne(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ke=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Be=e=>!D(e)&&e!==ke;function ee(){const{caseless:e}=Be(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ne(t,s)||s;H(t[o])&&H(r)?t[o]=ee(t[o],r):H(r)?t[o]=ee({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const Ht=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&O(s)?e[o]=Ce(s,n):e[o]=s},{allOwnKeys:r}),e),qt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},vt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Jt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Vt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},$t=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),Wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Kt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Xt=A("HTMLFormElement"),Gt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Qt=A("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Zt=e=>{Fe(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Yt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},en=()=>{},tn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),X="abcdefghijklmnopqrstuvwxyz",pe="0123456789",_e={DIGIT:pe,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+pe},nn=(e=16,t=_e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function rn(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const sn=e=>{const t=new Array(10),n=(r,s)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return j(r,(i,l)=>{const p=n(i,s+1);!D(p)&&(o[l]=p)}),t[s]=void 0,o}}return r};return n(e,0)},on=A("AsyncFunction"),an=e=>e&&(V(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:_,isArrayBuffer:Pe,isBuffer:xt,isFormData:jt,isArrayBufferView:Nt,isString:kt,isNumber:xe,isBoolean:Bt,isObject:V,isPlainObject:H,isUndefined:D,isDate:Ft,isFile:_t,isBlob:Lt,isRegExp:Qt,isFunction:O,isStream:Dt,isURLSearchParams:It,isTypedArray:$t,isFileList:Ut,forEach:j,merge:ee,extend:Ht,trim:Mt,stripBOM:qt,inherits:zt,toFlatObject:vt,kindOf:v,kindOfTest:A,endsWith:Jt,toArray:Vt,forEachEntry:Wt,matchAll:Kt,isHTMLForm:Xt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Fe,freezeMethods:Zt,toObjectSet:Yt,toCamelCase:Gt,noop:en,toFiniteNumber:tn,findKey:Ne,global:ke,isContextDefined:Be,ALPHABET:_e,generateString:nn,isSpecCompliantForm:rn,toJSONObject:sn,isAsyncFn:on,isThenable:an};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=m.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ue[e]={value:e}});Object.defineProperties(m,Ue);Object.defineProperty(Le,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const cn=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function De(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(s,o){return s=De(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function ln(e){return a.isArray(e)&&!e.some(te)}const un=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,b){return!a.isUndefined(b[d])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,b){let S=f;if(f&&!b&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&ln(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(S=a.toArray(f)))return d=De(d),S.forEach(function(C,Ke){!(a.isUndefined(C)||C===null)&&t.append(i===!0?he([d],Ke,o):i===null?d:d+"[]",h(C))}),!1}return te(f)?!0:(t.append(he(b,d,o),h(f)),!1)}const c=[],y=Object.assign(un,{defaultVisitor:u,convertValue:h,isVisitable:te});function E(f,d){if(!a.isUndefined(f)){if(c.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));c.push(f),a.forEach(f,function(S,T){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(T)?T.trim():T,d,y))===!0&&E(S,d?d.concat(T):[T])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&$(e,this,t)}const je=ie.prototype;je.append=function(t,n){this._pairs.push([t,n])};je.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function fn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||fn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ye{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dn=typeof URLSearchParams<"u"?URLSearchParams:ie,pn=typeof FormData<"u"?FormData:null,hn=typeof Blob<"u"?Blob:null,mn={isBrowser:!0,classes:{URLSearchParams:dn,FormData:pn,Blob:hn},protocols:["http","https","file","blob","url","data"]},He=typeof window<"u"&&typeof document<"u",yn=(e=>He&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),wn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:He,hasStandardBrowserEnv:yn,hasStandardBrowserWebWorkerEnv:wn},Symbol.toStringTag,{value:"Module"})),g={...bn,...mn};function En(e,t){return $(e,new g.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return g.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Sn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function On(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=On(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Sn(r),s,n,0)}),n}return null}function Rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const I={transitional:Me,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return En(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return $(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Rn(t)):t}],transformResponse:[function(t){const n=this.transitional||I.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.classes.FormData,Blob:g.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{I.headers[e]={}});const gn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),An=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&gn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},we=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function Tn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Cn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Pn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function xn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class R{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,p,h){const u=U(p);if(!u)throw new Error("header name must be a non-empty string");const c=a.findKey(s,u);(!c||s[c]===void 0||h===!0||h===void 0&&s[c]!==!1)&&(s[c||p]=q(l))}const i=(l,p)=>a.forEach(l,(h,u)=>o(h,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Cn(t)?i(An(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=U(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Tn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=U(i),i){const l=a.findKey(r,i);l&&(!n||G(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const l=t?Pn(o):String(o).trim();l!==o&&delete n[o],n[l]=q(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[we]=this[we]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=U(i);r[l]||(xn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}R.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(R.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(R);function Q(e,t){const n=this||I,r=t||n,s=R.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ze(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function Nn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const kn=g.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Bn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Fn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!Bn(t)?Fn(e,t):t}const _n=g.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Ln(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Un(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),u=r[o];i||(i=h),n[s]=p,r[s]=h;let c=o,y=0;for(;c!==s;)y+=n[c++],c=c%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const E=u&&h-u;return E?Math.round(y*1e3/E):void 0}}function be(e,t){let n=0;const r=Un(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,p=r(l),h=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Dn=typeof XMLHttpRequest<"u",jn=Dn&&function(e){return new Promise(function(n,r){let s=e.data;const o=R.from(e.headers).normalize();let{responseType:i,withXSRFToken:l}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let u;if(a.isFormData(s)){if(g.hasStandardBrowserEnv||g.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[d,...b]=u?u.split(";").map(S=>S.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...b].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+b))}const y=ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ie(y,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function E(){if(!c)return;const d=R.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:d,config:e,request:c};Nn(function(C){n(C),h()},function(C){r(C),h()},S),c=null}if("onloadend"in c?c.onloadend=E:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(E)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||Me;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new m(b,S.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},g.hasStandardBrowserEnv&&(l&&a.isFunction(l)&&(l=l(e)),l||l!==!1&&_n(y))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&kn.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(b,S){c.setRequestHeader(S,b)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{c&&(r(!d||d.type?new M(null,e,c):d),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=Ln(y);if(f&&g.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},ne={http:cn,xhr:jn};a.forEach(ne,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ee=e=>`- ${e}`,In=e=>a.isFunction(e)||e===null||e===!1,Je={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!In(n)&&(r=ne[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,p])=>`adapter ${l} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ee).join(`
`):" "+Ee(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ne};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Se(e){return Z(e),e.headers=R.from(e.headers),e.data=Q.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Je.getAdapter(e.adapter||I.adapter)(e).then(function(r){return Z(e),r.data=Q.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return ze(r)||(Z(e),r&&r.response&&(r.response.data=Q.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const Oe=e=>e instanceof R?{...e}:e;function F(e,t){t=t||{};const n={};function r(h,u,c){return a.isPlainObject(h)&&a.isPlainObject(u)?a.merge.call({caseless:c},h,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(h,u,c){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h,c)}else return r(h,u,c)}function o(h,u){if(!a.isUndefined(u))return r(void 0,u)}function i(h,u){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,u)}function l(h,u,c){if(c in t)return r(h,u);if(c in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(h,u)=>s(Oe(h),Oe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const c=p[u]||s,y=c(e[u],t[u],u);a.isUndefined(y)&&c!==l||(n[u]=y)}),n}const Ve="1.6.8",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Re={};ae.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ve+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Re[i]&&(Re[i]=!0),t?t(o,i,l):!0}};function Mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],p=l===void 0||i(l,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const re={assertOptions:Mn,validators:ae},P=re.validators;class N{constructor(t){this.defaults=t,this.interceptors={request:new ye,response:new ye}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:re.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=R.concat(i,o);const l=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,l.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let u,c=0,y;if(!p){const f=[Se.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,h),y=f.length,u=Promise.resolve(n);c<y;)u=u.then(f[c++],f[c++]);return u}y=l.length;let E=n;for(c=0;c<y;){const f=l[c++],d=l[c++];try{E=f(E)}catch(b){d.call(this,b);break}}try{u=Se.call(this,E)}catch(f){return Promise.reject(f)}for(c=0,y=h.length;c<y;)u=u.then(h[c++],h[c++]);return u}getUri(t){t=F(this.defaults,t);const n=ve(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){N.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(F(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}N.prototype[t]=n(),N.prototype[t+"Form"]=n(!0)});class ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new M(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ce(function(s){t=s}),cancel:t}}}function Hn(e){return function(n){return e.apply(null,n)}}function qn(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});function $e(e){const t=new N(e),n=Ce(N.prototype.request,t);return a.extend(n,N.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return $e(F(e,s))},n}const w=$e(I);w.Axios=N;w.CanceledError=M;w.CancelToken=ce;w.isCancel=ze;w.VERSION=Ve;w.toFormData=$;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Hn;w.isAxiosError=qn;w.mergeConfig=F;w.AxiosHeaders=R;w.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Je.getAdapter;w.HttpStatusCode=se;w.default=w;const We=w.create({baseURL:"http://www.young1024.com:1234/",timeout:3e3});We.interceptors.request.use(function(e){return Ct({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0}),e},function(e){return Promise.reject(e)});We.interceptors.response.use(function(e){let t=e.data;return t.status===0?(fe(),t):(fe(),Promise.reject(t.msg))},function(e){return Promise.reject(e)});export{We as i,bt as m,wt as u};