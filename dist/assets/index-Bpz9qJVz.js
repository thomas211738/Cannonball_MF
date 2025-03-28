var Th=Object.defineProperty;var Eh=(n,e,t)=>e in n?Th(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Nt=(n,e,t)=>Eh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var ua={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ih=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],c=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,I=(o&3)<<4|c>>4;let b=(c&15)<<2|d>>6,S=d&63;h||(S=64,a||(b=64)),i.push(t[p],t[I],t[b],t[S])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ih(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||I==null)throw new wh;const b=o<<2|c>>4;if(i.push(b),d!==64){const S=c<<4&240|d>>2;if(i.push(S),I!==64){const k=d<<6&192|I;i.push(k)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ah=function(n){const e=Rl(n);return Pl.encodeByteArray(e,!0)},Ni=function(n){return Ah(n).replace(/\./g,"")},Cl=function(n){try{return Pl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=()=>bh().__FIREBASE_DEFAULTS__,Rh=()=>{if(typeof process>"u"||typeof ua>"u")return;const n=ua.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ph=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cl(n[1]);return e&&JSON.parse(e)},Zi=()=>{try{return Sh()||Rh()||Ph()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kl=n=>{var e,t;return(t=(e=Zi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ch=n=>{const e=kl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Dl=()=>{var n;return(n=Zi())===null||n===void 0?void 0:n.config},xl=n=>{var e;return(e=Zi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ni(JSON.stringify(t)),Ni(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Vh(){var n;const e=(n=Zi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Oh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lh(){const n=ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fh(){return!Vh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bh(){try{return typeof indexedDB=="object"}catch{return!1}}function Uh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="FirebaseError";class Qe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=jh,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?$h(o,i):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Qe(s,c,i)}}function $h(n,e){return n.replace(qh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const qh=/\{\$([^}]+)}/g;function zh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Oi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],a=e[s];if(ha(o)&&ha(a)){if(!Oi(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ha(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Gh(n,e){const t=new Hh(n,e);return t.subscribe.bind(t)}class Hh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Wh(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Fs),s.error===void 0&&(s.error=Fs),s.complete===void 0&&(s.complete=Fs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){return n&&n._delegate?n._delegate:n}class wt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new kh;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xh(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qh(n){return n===Tt?void 0:n}function Xh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Jh={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Zh=$.INFO,ed={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},td=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ed[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Er{constructor(e){this.name=e,this._logLevel=Zh,this._logHandler=td,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const nd=(n,e)=>e.some(t=>n instanceof t);let da,fa;function id(){return da||(da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vl=new WeakMap,Ys=new WeakMap,Nl=new WeakMap,Bs=new WeakMap,Ir=new WeakMap;function rd(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(at(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vl.set(t,n)}).catch(()=>{}),Ir.set(e,n),e}function od(n){if(Ys.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ys.set(n,e)}let Js={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ys.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return at(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ad(n){Js=n(Js)}function ld(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Us(this),e,...t);return Nl.set(i,e.sort?e.sort():[e]),at(i)}:sd().includes(n)?function(...e){return n.apply(Us(this),e),at(Vl.get(this))}:function(...e){return at(n.apply(Us(this),e))}}function cd(n){return typeof n=="function"?ld(n):(n instanceof IDBTransaction&&od(n),nd(n,id())?new Proxy(n,Js):n)}function at(n){if(n instanceof IDBRequest)return rd(n);if(Bs.has(n))return Bs.get(n);const e=cd(n);return e!==n&&(Bs.set(n,e),Ir.set(e,n)),e}const Us=n=>Ir.get(n);function ud(n,e,{blocked:t,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),c=at(a);return i&&a.addEventListener("upgradeneeded",h=>{i(at(a.result),h.oldVersion,h.newVersion,at(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const hd=["get","getKey","getAll","getAllKeys","count"],dd=["put","add","delete","clear"],js=new Map;function pa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(js.get(e))return js.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=dd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||hd.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&h.done]))[0]};return js.set(e,o),o}ad(n=>({...n,get:(e,t,i)=>pa(e,t)||n.get(e,t,i),has:(e,t)=>!!pa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function pd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zs="@firebase/app",ga="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new Er("@firebase/app"),gd="@firebase/app-compat",md="@firebase/analytics-compat",_d="@firebase/analytics",yd="@firebase/app-check-compat",vd="@firebase/app-check",Td="@firebase/auth",Ed="@firebase/auth-compat",Id="@firebase/database",wd="@firebase/data-connect",Ad="@firebase/database-compat",bd="@firebase/functions",Sd="@firebase/functions-compat",Rd="@firebase/installations",Pd="@firebase/installations-compat",Cd="@firebase/messaging",kd="@firebase/messaging-compat",Dd="@firebase/performance",xd="@firebase/performance-compat",Vd="@firebase/remote-config",Nd="@firebase/remote-config-compat",Od="@firebase/storage",Md="@firebase/storage-compat",Ld="@firebase/firestore",Fd="@firebase/vertexai-preview",Bd="@firebase/firestore-compat",Ud="firebase",jd="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="[DEFAULT]",$d={[Zs]:"fire-core",[gd]:"fire-core-compat",[_d]:"fire-analytics",[md]:"fire-analytics-compat",[vd]:"fire-app-check",[yd]:"fire-app-check-compat",[Td]:"fire-auth",[Ed]:"fire-auth-compat",[Id]:"fire-rtdb",[wd]:"fire-data-connect",[Ad]:"fire-rtdb-compat",[bd]:"fire-fn",[Sd]:"fire-fn-compat",[Rd]:"fire-iid",[Pd]:"fire-iid-compat",[Cd]:"fire-fcm",[kd]:"fire-fcm-compat",[Dd]:"fire-perf",[xd]:"fire-perf-compat",[Vd]:"fire-rc",[Nd]:"fire-rc-compat",[Od]:"fire-gcs",[Md]:"fire-gcs-compat",[Ld]:"fire-fst",[Bd]:"fire-fst-compat",[Fd]:"fire-vertex","fire-js":"fire-js",[Ud]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Map,qd=new Map,tr=new Map;function ma(n,e){try{n.container.addComponent(e)}catch(t){ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zt(n){const e=n.name;if(tr.has(e))return ze.debug(`There were multiple attempts to register component ${e}.`),!1;tr.set(e,n);for(const t of Mi.values())ma(t,n);for(const t of qd.values())ma(t,n);return!0}function wr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Be(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lt=new Gn("app","Firebase",zd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=jd;function Ol(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:er,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw lt.create("bad-app-name",{appName:String(s)});if(t||(t=Dl()),!t)throw lt.create("no-options");const o=Mi.get(s);if(o){if(Oi(t,o.options)&&Oi(i,o.config))return o;throw lt.create("duplicate-app",{appName:s})}const a=new Yh(s);for(const h of tr.values())a.addComponent(h);const c=new Gd(t,i,a);return Mi.set(s,c),c}function Ml(n=er){const e=Mi.get(n);if(!e&&n===er&&Dl())return Ol();if(!e)throw lt.create("no-app",{appName:n});return e}function ct(n,e,t){var i;let s=(i=$d[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ze.warn(c.join(" "));return}zt(new wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="firebase-heartbeat-database",Wd=1,On="firebase-heartbeat-store";let $s=null;function Ll(){return $s||($s=ud(Hd,Wd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(On)}catch(t){console.warn(t)}}}}).catch(n=>{throw lt.create("idb-open",{originalErrorMessage:n.message})})),$s}async function Kd(n){try{const t=(await Ll()).transaction(On),i=await t.objectStore(On).get(Fl(n));return await t.done,i}catch(e){if(e instanceof Qe)ze.warn(e.message);else{const t=lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ze.warn(t.message)}}}async function _a(n,e){try{const i=(await Ll()).transaction(On,"readwrite");await i.objectStore(On).put(e,Fl(n)),await i.done}catch(t){if(t instanceof Qe)ze.warn(t.message);else{const i=lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ze.warn(i.message)}}}function Fl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=1024,Xd=30*24*60*60*1e3;class Yd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ya();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Xd}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ze.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ya(),{heartbeatsToSend:i,unsentEntries:s}=Jd(this._heartbeatsCache.heartbeats),o=Ni(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ze.warn(t),""}}}function ya(){return new Date().toISOString().substring(0,10)}function Jd(n,e=Qd){const t=[];let i=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),va(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),va(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Zd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bh()?Uh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _a(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _a(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function va(n){return Ni(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n){zt(new wt("platform-logger",e=>new fd(e),"PRIVATE")),zt(new wt("heartbeat",e=>new Yd(e),"PRIVATE")),ct(Zs,ga,n),ct(Zs,ga,"esm2017"),ct("fire-js","")}ef("");var tf="firebase",nf="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(tf,nf,"app");var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var It,Bl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,T,w){for(var m=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)m[Me-2]=arguments[Me];return g.prototype[T].apply(y,m)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,_){_||(_=0);var y=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)y[T]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],T=v.g[2];var w=v.g[3],m=g+(w^_&(T^w))+y[0]+3614090360&4294967295;g=_+(m<<7&4294967295|m>>>25),m=w+(T^g&(_^T))+y[1]+3905402710&4294967295,w=g+(m<<12&4294967295|m>>>20),m=T+(_^w&(g^_))+y[2]+606105819&4294967295,T=w+(m<<17&4294967295|m>>>15),m=_+(g^T&(w^g))+y[3]+3250441966&4294967295,_=T+(m<<22&4294967295|m>>>10),m=g+(w^_&(T^w))+y[4]+4118548399&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(T^g&(_^T))+y[5]+1200080426&4294967295,w=g+(m<<12&4294967295|m>>>20),m=T+(_^w&(g^_))+y[6]+2821735955&4294967295,T=w+(m<<17&4294967295|m>>>15),m=_+(g^T&(w^g))+y[7]+4249261313&4294967295,_=T+(m<<22&4294967295|m>>>10),m=g+(w^_&(T^w))+y[8]+1770035416&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(T^g&(_^T))+y[9]+2336552879&4294967295,w=g+(m<<12&4294967295|m>>>20),m=T+(_^w&(g^_))+y[10]+4294925233&4294967295,T=w+(m<<17&4294967295|m>>>15),m=_+(g^T&(w^g))+y[11]+2304563134&4294967295,_=T+(m<<22&4294967295|m>>>10),m=g+(w^_&(T^w))+y[12]+1804603682&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(T^g&(_^T))+y[13]+4254626195&4294967295,w=g+(m<<12&4294967295|m>>>20),m=T+(_^w&(g^_))+y[14]+2792965006&4294967295,T=w+(m<<17&4294967295|m>>>15),m=_+(g^T&(w^g))+y[15]+1236535329&4294967295,_=T+(m<<22&4294967295|m>>>10),m=g+(T^w&(_^T))+y[1]+4129170786&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^T&(g^_))+y[6]+3225465664&4294967295,w=g+(m<<9&4294967295|m>>>23),m=T+(g^_&(w^g))+y[11]+643717713&4294967295,T=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(T^w))+y[0]+3921069994&4294967295,_=T+(m<<20&4294967295|m>>>12),m=g+(T^w&(_^T))+y[5]+3593408605&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^T&(g^_))+y[10]+38016083&4294967295,w=g+(m<<9&4294967295|m>>>23),m=T+(g^_&(w^g))+y[15]+3634488961&4294967295,T=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(T^w))+y[4]+3889429448&4294967295,_=T+(m<<20&4294967295|m>>>12),m=g+(T^w&(_^T))+y[9]+568446438&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^T&(g^_))+y[14]+3275163606&4294967295,w=g+(m<<9&4294967295|m>>>23),m=T+(g^_&(w^g))+y[3]+4107603335&4294967295,T=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(T^w))+y[8]+1163531501&4294967295,_=T+(m<<20&4294967295|m>>>12),m=g+(T^w&(_^T))+y[13]+2850285829&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^T&(g^_))+y[2]+4243563512&4294967295,w=g+(m<<9&4294967295|m>>>23),m=T+(g^_&(w^g))+y[7]+1735328473&4294967295,T=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(T^w))+y[12]+2368359562&4294967295,_=T+(m<<20&4294967295|m>>>12),m=g+(_^T^w)+y[5]+4294588738&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^T)+y[8]+2272392833&4294967295,w=g+(m<<11&4294967295|m>>>21),m=T+(w^g^_)+y[11]+1839030562&4294967295,T=w+(m<<16&4294967295|m>>>16),m=_+(T^w^g)+y[14]+4259657740&4294967295,_=T+(m<<23&4294967295|m>>>9),m=g+(_^T^w)+y[1]+2763975236&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^T)+y[4]+1272893353&4294967295,w=g+(m<<11&4294967295|m>>>21),m=T+(w^g^_)+y[7]+4139469664&4294967295,T=w+(m<<16&4294967295|m>>>16),m=_+(T^w^g)+y[10]+3200236656&4294967295,_=T+(m<<23&4294967295|m>>>9),m=g+(_^T^w)+y[13]+681279174&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^T)+y[0]+3936430074&4294967295,w=g+(m<<11&4294967295|m>>>21),m=T+(w^g^_)+y[3]+3572445317&4294967295,T=w+(m<<16&4294967295|m>>>16),m=_+(T^w^g)+y[6]+76029189&4294967295,_=T+(m<<23&4294967295|m>>>9),m=g+(_^T^w)+y[9]+3654602809&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^T)+y[12]+3873151461&4294967295,w=g+(m<<11&4294967295|m>>>21),m=T+(w^g^_)+y[15]+530742520&4294967295,T=w+(m<<16&4294967295|m>>>16),m=_+(T^w^g)+y[2]+3299628645&4294967295,_=T+(m<<23&4294967295|m>>>9),m=g+(T^(_|~w))+y[0]+4096336452&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~T))+y[7]+1126891415&4294967295,w=g+(m<<10&4294967295|m>>>22),m=T+(g^(w|~_))+y[14]+2878612391&4294967295,T=w+(m<<15&4294967295|m>>>17),m=_+(w^(T|~g))+y[5]+4237533241&4294967295,_=T+(m<<21&4294967295|m>>>11),m=g+(T^(_|~w))+y[12]+1700485571&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~T))+y[3]+2399980690&4294967295,w=g+(m<<10&4294967295|m>>>22),m=T+(g^(w|~_))+y[10]+4293915773&4294967295,T=w+(m<<15&4294967295|m>>>17),m=_+(w^(T|~g))+y[1]+2240044497&4294967295,_=T+(m<<21&4294967295|m>>>11),m=g+(T^(_|~w))+y[8]+1873313359&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~T))+y[15]+4264355552&4294967295,w=g+(m<<10&4294967295|m>>>22),m=T+(g^(w|~_))+y[6]+2734768916&4294967295,T=w+(m<<15&4294967295|m>>>17),m=_+(w^(T|~g))+y[13]+1309151649&4294967295,_=T+(m<<21&4294967295|m>>>11),m=g+(T^(_|~w))+y[4]+4149444226&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~T))+y[11]+3174756917&4294967295,w=g+(m<<10&4294967295|m>>>22),m=T+(g^(w|~_))+y[2]+718787259&4294967295,T=w+(m<<15&4294967295|m>>>17),m=_+(w^(T|~g))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(T+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+w&4294967295}i.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,y=this.B,T=this.h,w=0;w<g;){if(T==0)for(;w<=_;)s(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<g;)if(y[T++]=v.charCodeAt(w++),T==this.blockSize){s(this,y),T=0;break}}else for(;w<g;)if(y[T++]=v[w++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=g},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var y=0;32>y;y+=8)v[_++]=this.g[g]>>>y&255;return v};function o(v,g){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function a(v,g){this.h=g;for(var _=[],y=!0,T=v.length-1;0<=T;T--){var w=v[T]|0;y&&w==g||(_[T]=w,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(g){return new a([g|0],0>g?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return I;if(0>v)return D(d(-v));for(var g=[],_=1,y=0;v>=_;y++)g[y]=v/_|0,_*=4294967296;return new a(g,0)}function p(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return D(p(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),y=I,T=0;T<v.length;T+=8){var w=Math.min(8,v.length-T),m=parseInt(v.substring(T,T+w),g);8>w?(w=d(Math.pow(g,w)),y=y.j(w).add(d(m))):(y=y.j(_),y=y.add(d(m)))}return y}var I=h(0),b=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(V(this))return"-"+D(this).toString(v);for(var g=d(Math.pow(v,6)),_=this,y="";;){var T=ee(_,g).g;_=j(_,T.j(g));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,k(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function V(v){return v.h==-1}n.l=function(v){return v=j(this,v),V(v)?-1:k(v)?0:1};function D(v){for(var g=v.g.length,_=[],y=0;y<g;y++)_[y]=~v.g[y];return new a(_,~v.h).add(b)}n.abs=function(){return V(this)?D(this):this},n.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],y=0,T=0;T<=g;T++){var w=y+(this.i(T)&65535)+(v.i(T)&65535),m=(w>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=m>>>16,w&=65535,m&=65535,_[T]=m<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(v,g){return v.add(D(g))}n.j=function(v){if(k(this)||k(v))return I;if(V(this))return V(v)?D(this).j(D(v)):D(D(this).j(v));if(V(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],y=0;y<2*g;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var w=this.i(y)>>>16,m=this.i(y)&65535,Me=v.i(T)>>>16,rn=v.i(T)&65535;_[2*y+2*T]+=m*rn,H(_,2*y+2*T),_[2*y+2*T+1]+=w*rn,H(_,2*y+2*T+1),_[2*y+2*T+1]+=m*Me,H(_,2*y+2*T+1),_[2*y+2*T+2]+=w*Me,H(_,2*y+2*T+2)}for(y=0;y<g;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=g;y<2*g;y++)_[y]=0;return new a(_,0)};function H(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function W(v,g){this.g=v,this.h=g}function ee(v,g){if(k(g))throw Error("division by zero");if(k(v))return new W(I,I);if(V(v))return g=ee(D(v),g),new W(D(g.g),D(g.h));if(V(g))return g=ee(v,D(g)),new W(D(g.g),g.h);if(30<v.g.length){if(V(v)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var _=b,y=g;0>=y.l(v);)_=we(_),y=we(y);var T=te(_,1),w=te(y,1);for(y=te(y,2),_=te(_,2);!k(y);){var m=w.add(y);0>=m.l(v)&&(T=T.add(_),w=m),y=te(y,1),_=te(_,1)}return g=j(v,T.j(g)),new W(T,g)}for(T=I;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),m=w.j(g);V(m)||0<m.l(v);)_-=y,w=d(_),m=w.j(g);k(w)&&(w=b),T=T.add(w),v=j(v,m)}return new W(T,v)}n.A=function(v){return ee(this,v).h},n.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function we(v){for(var g=v.g.length+1,_=[],y=0;y<g;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function te(v,g){var _=g>>5;g%=32;for(var y=v.g.length-_,T=[],w=0;w<y;w++)T[w]=0<g?v.i(w+_)>>>g|v.i(w+_+1)<<32-g:v.i(w+_);return new a(T,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Bl=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,It=a}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ul,An,jl,Si,nr,$l,ql,zl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,u){return r==Array.prototype||r==Object.prototype||(r[l]=u.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ei=="object"&&Ei];for(var l=0;l<r.length;++l){var u=r[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=t(this);function s(r,l){if(l)e:{var u=i;r=r.split(".");for(var f=0;f<r.length-1;f++){var E=r[f];if(!(E in u))break e;u=u[E]}r=r[r.length-1],f=u[r],l=l(f),l!=f&&l!=null&&e(u,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var u=0,f=!1,E={next:function(){if(!f&&u<r.length){var A=u++;return{value:l(A,r[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function d(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function p(r,l,u){return r.call.apply(r.bind,arguments)}function I(r,l,u){if(!r)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,f),r.apply(l,E)}}return function(){return r.apply(l,arguments)}}function b(r,l,u){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:I,b.apply(null,arguments)}function S(r,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function k(r,l){function u(){}u.prototype=l.prototype,r.aa=l.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(f,E,A){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return l.prototype[E].apply(f,C)}}function V(r){const l=r.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=r[f];return u}return[]}function D(r,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const E=r.length||0,A=f.length||0;r.length=E+A;for(let C=0;C<A;C++)r[E+C]=f[C]}else r.push(f)}}class j{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function H(r){return/^[\s\xa0]*$/.test(r)}function W(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function ee(r){return ee[" "](r),r}ee[" "]=function(){};var we=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function te(r,l,u){for(const f in r)l.call(u,r[f],f,r)}function v(r,l){for(const u in r)l.call(void 0,r[u],u,r)}function g(r){const l={};for(const u in r)l[u]=r[u];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(r,l){let u,f;for(let E=1;E<arguments.length;E++){f=arguments[E];for(u in f)r[u]=f[u];for(let A=0;A<_.length;A++)u=_[A],Object.prototype.hasOwnProperty.call(f,u)&&(r[u]=f[u])}}function T(r){var l=1;r=r.split(":");const u=[];for(;0<l&&r.length;)u.push(r.shift()),l--;return r.length&&u.push(r.join(":")),u}function w(r){c.setTimeout(()=>{throw r},0)}function m(){var r=ps;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class Me{constructor(){this.h=this.g=null}add(l,u){const f=rn.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var rn=new j(()=>new Bu,r=>r.reset());class Bu{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let on,an=!1,ps=new Me,co=()=>{const r=c.Promise.resolve(void 0);on=()=>{r.then(Uu)}};var Uu=()=>{for(var r;r=m();){try{r.h.call(r.g)}catch(u){w(u)}var l=rn;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}an=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var ju=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return r}();function ln(r,l){if(de.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(we){e:{try{ee(l.nodeName);var E=!0;break e}catch{}E=!1}E||(l=null)}}else u=="mouseover"?l=r.fromElement:u=="mouseout"&&(l=r.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:$u[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&ln.aa.h.call(this)}}k(ln,de);var $u={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var ni="closure_listenable_"+(1e6*Math.random()|0),qu=0;function zu(r,l,u,f,E){this.listener=r,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=E,this.key=++qu,this.da=this.fa=!1}function ii(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function si(r){this.src=r,this.g={},this.h=0}si.prototype.add=function(r,l,u,f,E){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var C=ms(r,l,f,E);return-1<C?(l=r[C],u||(l.fa=!1)):(l=new zu(l,this.src,A,!!f,E),l.fa=u,r.push(l)),l};function gs(r,l){var u=l.type;if(u in r.g){var f=r.g[u],E=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=E)&&Array.prototype.splice.call(f,E,1),A&&(ii(l),r.g[u].length==0&&(delete r.g[u],r.h--))}}function ms(r,l,u,f){for(var E=0;E<r.length;++E){var A=r[E];if(!A.da&&A.listener==l&&A.capture==!!u&&A.ha==f)return E}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),ys={};function uo(r,l,u,f,E){if(Array.isArray(l)){for(var A=0;A<l.length;A++)uo(r,l[A],u,f,E);return null}return u=po(u),r&&r[ni]?r.K(l,u,d(f)?!!f.capture:!1,E):Gu(r,l,u,!1,f,E)}function Gu(r,l,u,f,E,A){if(!l)throw Error("Invalid event type");var C=d(E)?!!E.capture:!!E,Q=Ts(r);if(Q||(r[_s]=Q=new si(r)),u=Q.add(l,u,f,C,A),u.proxy)return u;if(f=Hu(),u.proxy=f,f.src=r,f.listener=u,r.addEventListener)ju||(E=C),E===void 0&&(E=!1),r.addEventListener(l.toString(),f,E);else if(r.attachEvent)r.attachEvent(fo(l.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Hu(){function r(u){return l.call(r.src,r.listener,u)}const l=Wu;return r}function ho(r,l,u,f,E){if(Array.isArray(l))for(var A=0;A<l.length;A++)ho(r,l[A],u,f,E);else f=d(f)?!!f.capture:!!f,u=po(u),r&&r[ni]?(r=r.i,l=String(l).toString(),l in r.g&&(A=r.g[l],u=ms(A,u,f,E),-1<u&&(ii(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete r.g[l],r.h--)))):r&&(r=Ts(r))&&(l=r.g[l.toString()],r=-1,l&&(r=ms(l,u,f,E)),(u=-1<r?l[r]:null)&&vs(u))}function vs(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[ni])gs(l.i,r);else{var u=r.type,f=r.proxy;l.removeEventListener?l.removeEventListener(u,f,r.capture):l.detachEvent?l.detachEvent(fo(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Ts(l))?(gs(u,r),u.h==0&&(u.src=null,l[_s]=null)):ii(r)}}}function fo(r){return r in ys?ys[r]:ys[r]="on"+r}function Wu(r,l){if(r.da)r=!0;else{l=new ln(l,this);var u=r.listener,f=r.ha||r.src;r.fa&&vs(r),r=u.call(f,l)}return r}function Ts(r){return r=r[_s],r instanceof si?r:null}var Es="__closure_events_fn_"+(1e9*Math.random()>>>0);function po(r){return typeof r=="function"?r:(r[Es]||(r[Es]=function(l){return r.handleEvent(l)}),r[Es])}function fe(){Xe.call(this),this.i=new si(this),this.M=this,this.F=null}k(fe,Xe),fe.prototype[ni]=!0,fe.prototype.removeEventListener=function(r,l,u,f){ho(this,r,l,u,f)};function Te(r,l){var u,f=r.F;if(f)for(u=[];f;f=f.F)u.push(f);if(r=r.M,f=l.type||l,typeof l=="string")l=new de(l,r);else if(l instanceof de)l.target=l.target||r;else{var E=l;l=new de(f,r),y(l,E)}if(E=!0,u)for(var A=u.length-1;0<=A;A--){var C=l.g=u[A];E=ri(C,f,!0,l)&&E}if(C=l.g=r,E=ri(C,f,!0,l)&&E,E=ri(C,f,!1,l)&&E,u)for(A=0;A<u.length;A++)C=l.g=u[A],E=ri(C,f,!1,l)&&E}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var u=r.g[l],f=0;f<u.length;f++)ii(u[f]);delete r.g[l],r.h--}}this.F=null},fe.prototype.K=function(r,l,u,f){return this.i.add(String(r),l,!1,u,f)},fe.prototype.L=function(r,l,u,f){return this.i.add(String(r),l,!0,u,f)};function ri(r,l,u,f){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var E=!0,A=0;A<l.length;++A){var C=l[A];if(C&&!C.da&&C.capture==u){var Q=C.listener,ae=C.ha||C.src;C.fa&&gs(r.i,C),E=Q.call(ae,f)!==!1&&E}}return E&&!f.defaultPrevented}function go(r,l,u){if(typeof r=="function")u&&(r=b(r,u));else if(r&&typeof r.handleEvent=="function")r=b(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(r,l||0)}function mo(r){r.g=go(()=>{r.g=null,r.i&&(r.i=!1,mo(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class Ku extends Xe{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:mo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cn(r){Xe.call(this),this.h=r,this.g={}}k(cn,Xe);var _o=[];function yo(r){te(r.g,function(l,u){this.g.hasOwnProperty(u)&&vs(l)},r),r.g={}}cn.prototype.N=function(){cn.aa.N.call(this),yo(this)},cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Is=c.JSON.stringify,Qu=c.JSON.parse,Xu=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function ws(){}ws.prototype.h=null;function vo(r){return r.h||(r.h=r.i())}function To(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function As(){de.call(this,"d")}k(As,de);function bs(){de.call(this,"c")}k(bs,de);var mt={},Eo=null;function oi(){return Eo=Eo||new fe}mt.La="serverreachability";function Io(r){de.call(this,mt.La,r)}k(Io,de);function hn(r){const l=oi();Te(l,new Io(l))}mt.STAT_EVENT="statevent";function wo(r,l){de.call(this,mt.STAT_EVENT,r),this.stat=l}k(wo,de);function Ee(r){const l=oi();Te(l,new wo(l,r))}mt.Ma="timingevent";function Ao(r,l){de.call(this,mt.Ma,r),this.size=l}k(Ao,de);function dn(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},l)}function fn(){this.g=!0}fn.prototype.xa=function(){this.g=!1};function Yu(r,l,u,f,E,A){r.info(function(){if(r.g)if(A)for(var C="",Q=A.split("&"),ae=0;ae<Q.length;ae++){var z=Q[ae].split("=");if(1<z.length){var pe=z[0];z=z[1];var ge=pe.split("_");C=2<=ge.length&&ge[1]=="type"?C+(pe+"="+z+"&"):C+(pe+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+f+") [attempt "+E+"]: "+l+`
`+u+`
`+C})}function Ju(r,l,u,f,E,A,C){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+E+"]: "+l+`
`+u+`
`+A+" "+C})}function kt(r,l,u,f){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+eh(r,u)+(f?" "+f:"")})}function Zu(r,l){r.info(function(){return"TIMEOUT: "+l})}fn.prototype.info=function(){};function eh(r,l){if(!r.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var f=u[r];if(!(2>f.length)){var E=f[1];if(Array.isArray(E)&&!(1>E.length)){var A=E[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<E.length;C++)E[C]=""}}}}return Is(u)}catch{return l}}var ai={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ss;function li(){}k(li,ws),li.prototype.g=function(){return new XMLHttpRequest},li.prototype.i=function(){return{}},Ss=new li;function Ye(r,l,u,f){this.j=r,this.i=l,this.l=u,this.R=f||1,this.U=new cn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new So}function So(){this.i=null,this.g="",this.h=!1}var Ro={},Rs={};function Ps(r,l,u){r.L=1,r.v=di(Le(l)),r.m=u,r.P=!0,Po(r,null)}function Po(r,l){r.F=Date.now(),ci(r),r.A=Le(r.v);var u=r.A,f=r.R;Array.isArray(f)||(f=[String(f)]),$o(u.i,"t",f),r.C=0,u=r.j.J,r.h=new So,r.g=oa(r.j,u?l:null,!r.m),0<r.O&&(r.M=new Ku(b(r.Y,r,r.g),r.O)),l=r.U,u=r.g,f=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(_o[0]=E.toString()),E=_o);for(var A=0;A<E.length;A++){var C=uo(u,E[A],f||l.handleEvent,!1,l.h||l);if(!C)break;l.g[C.key]=C}l=r.H?g(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),hn(),Yu(r.i,r.u,r.A,r.l,r.R,r.m)}Ye.prototype.ca=function(r){r=r.target;const l=this.M;l&&Fe(r)==3?l.j():this.Y(r)},Ye.prototype.Y=function(r){try{if(r==this.g)e:{const ge=Fe(this.g);var l=this.g.Ba();const Vt=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||ge!=4||l==7||(l==8||0>=Vt?hn(3):hn(2)),Cs(this);var u=this.g.Z();this.X=u;t:if(Co(this)){var f=Qo(this.g);r="";var E=f.length,A=Fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_t(this),pn(this);var C="";break t}this.h.i=new c.TextDecoder}for(l=0;l<E;l++)this.h.h=!0,r+=this.h.i.decode(f[l],{stream:!(A&&l==E-1)});f.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=u==200,Ju(this.i,this.u,this.A,this.l,this.R,ge,u),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,ae=this.g;if((Q=ae.g?ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Q)){var z=Q;break t}}z=null}if(u=z)kt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ks(this,u);else{this.o=!1,this.s=3,Ee(12),_t(this),pn(this);break e}}if(this.P){u=!0;let Se;for(;!this.J&&this.C<C.length;)if(Se=th(this,C),Se==Rs){ge==4&&(this.s=4,Ee(14),u=!1),kt(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==Ro){this.s=4,Ee(15),kt(this.i,this.l,C,"[Invalid Chunk]"),u=!1;break}else kt(this.i,this.l,Se,null),ks(this,Se);if(Co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||C.length!=0||this.h.h||(this.s=1,Ee(16),u=!1),this.o=this.o&&u,!u)kt(this.i,this.l,C,"[Invalid Chunked Response]"),_t(this),pn(this);else if(0<C.length&&!this.W){this.W=!0;var pe=this.j;pe.g==this&&pe.ba&&!pe.M&&(pe.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Ms(pe),pe.M=!0,Ee(11))}}else kt(this.i,this.l,C,null),ks(this,C);ge==4&&_t(this),this.o&&!this.J&&(ge==4?na(this.j,this):(this.o=!1,ci(this)))}else yh(this.g),u==400&&0<C.indexOf("Unknown SID")?(this.s=3,Ee(12)):(this.s=0,Ee(13)),_t(this),pn(this)}}}catch{}finally{}};function Co(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function th(r,l){var u=r.C,f=l.indexOf(`
`,u);return f==-1?Rs:(u=Number(l.substring(u,f)),isNaN(u)?Ro:(f+=1,f+u>l.length?Rs:(l=l.slice(f,f+u),r.C=f+u,l)))}Ye.prototype.cancel=function(){this.J=!0,_t(this)};function ci(r){r.S=Date.now()+r.I,ko(r,r.I)}function ko(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=dn(b(r.ba,r),l)}function Cs(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Ye.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Zu(this.i,this.A),this.L!=2&&(hn(),Ee(17)),_t(this),this.s=2,pn(this)):ko(this,this.S-r)};function pn(r){r.j.G==0||r.J||na(r.j,r)}function _t(r){Cs(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,yo(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function ks(r,l){try{var u=r.j;if(u.G!=0&&(u.g==r||Ds(u.h,r))){if(!r.K&&Ds(u.h,r)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var E=f;if(E[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)yi(u),mi(u);else break e;Os(u),Ee(18)}}else u.za=E[1],0<u.za-u.T&&37500>E[2]&&u.F&&u.v==0&&!u.C&&(u.C=dn(b(u.Za,u),6e3));if(1>=Vo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else vt(u,11)}else if((r.K||u.g==r)&&yi(u),!H(l))for(E=u.Da.g.parse(l),l=0;l<E.length;l++){let z=E[l];if(u.T=z[0],z=z[1],u.G==2)if(z[0]=="c"){u.K=z[1],u.ia=z[2];const pe=z[3];pe!=null&&(u.la=pe,u.j.info("VER="+u.la));const ge=z[4];ge!=null&&(u.Aa=ge,u.j.info("SVER="+u.Aa));const Vt=z[5];Vt!=null&&typeof Vt=="number"&&0<Vt&&(f=1.5*Vt,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Se=r.g;if(Se){const Ti=Se.g?Se.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ti){var A=f.h;A.g||Ti.indexOf("spdy")==-1&&Ti.indexOf("quic")==-1&&Ti.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(xs(A,A.h),A.h=null))}if(f.D){const Ls=Se.g?Se.g.getResponseHeader("X-HTTP-Session-Id"):null;Ls&&(f.ya=Ls,X(f.I,f.D,Ls))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var C=r;if(f.qa=ra(f,f.J?f.ia:null,f.W),C.K){No(f.h,C);var Q=C,ae=f.L;ae&&(Q.I=ae),Q.B&&(Cs(Q),ci(Q)),f.g=C}else ea(f);0<u.i.length&&_i(u)}else z[0]!="stop"&&z[0]!="close"||vt(u,7);else u.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?vt(u,7):Ns(u):z[0]!="noop"&&u.l&&u.l.ta(z),u.v=0)}}hn(4)}catch{}}var nh=class{constructor(r,l){this.g=r,this.map=l}};function Do(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xo(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Vo(r){return r.h?1:r.g?r.g.size:0}function Ds(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function xs(r,l){r.g?r.g.add(l):r.h=l}function No(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}Do.prototype.cancel=function(){if(this.i=Oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Oo(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const u of r.g.values())l=l.concat(u.D);return l}return V(r.i)}function ih(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var l=[],u=r.length,f=0;f<u;f++)l.push(r[f]);return l}l=[],u=0;for(f in r)l[u++]=r[f];return l}function sh(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var l=[];r=r.length;for(var u=0;u<r;u++)l.push(u);return l}l=[],u=0;for(const f in r)l[u++]=f;return l}}}function Mo(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var u=sh(r),f=ih(r),E=f.length,A=0;A<E;A++)l.call(void 0,f[A],u&&u[A],r)}var Lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rh(r,l){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var f=r[u].indexOf("="),E=null;if(0<=f){var A=r[u].substring(0,f);E=r[u].substring(f+1)}else A=r[u];l(A,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function yt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof yt){this.h=r.h,ui(this,r.j),this.o=r.o,this.g=r.g,hi(this,r.s),this.l=r.l;var l=r.i,u=new _n;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Fo(this,u),this.m=r.m}else r&&(l=String(r).match(Lo))?(this.h=!1,ui(this,l[1]||"",!0),this.o=gn(l[2]||""),this.g=gn(l[3]||"",!0),hi(this,l[4]),this.l=gn(l[5]||"",!0),Fo(this,l[6]||"",!0),this.m=gn(l[7]||"")):(this.h=!1,this.i=new _n(null,this.h))}yt.prototype.toString=function(){var r=[],l=this.j;l&&r.push(mn(l,Bo,!0),":");var u=this.g;return(u||l=="file")&&(r.push("//"),(l=this.o)&&r.push(mn(l,Bo,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(mn(u,u.charAt(0)=="/"?lh:ah,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",mn(u,uh)),r.join("")};function Le(r){return new yt(r)}function ui(r,l,u){r.j=u?gn(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function hi(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function Fo(r,l,u){l instanceof _n?(r.i=l,hh(r.i,r.h)):(u||(l=mn(l,ch)),r.i=new _n(l,r.h))}function X(r,l,u){r.i.set(l,u)}function di(r){return X(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function gn(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function mn(r,l,u){return typeof r=="string"?(r=encodeURI(r).replace(l,oh),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function oh(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Bo=/[#\/\?@]/g,ah=/[#\?:]/g,lh=/[#\?]/g,ch=/[#\?@]/g,uh=/#/g;function _n(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function Je(r){r.g||(r.g=new Map,r.h=0,r.i&&rh(r.i,function(l,u){r.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=_n.prototype,n.add=function(r,l){Je(this),this.i=null,r=Dt(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(l),this.h+=1,this};function Uo(r,l){Je(r),l=Dt(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function jo(r,l){return Je(r),l=Dt(r,l),r.g.has(l)}n.forEach=function(r,l){Je(this),this.g.forEach(function(u,f){u.forEach(function(E){r.call(l,E,f,this)},this)},this)},n.na=function(){Je(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const E=r[f];for(let A=0;A<E.length;A++)u.push(l[f])}return u},n.V=function(r){Je(this);let l=[];if(typeof r=="string")jo(this,r)&&(l=l.concat(this.g.get(Dt(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)l=l.concat(r[u])}return l},n.set=function(r,l){return Je(this),this.i=null,r=Dt(this,r),jo(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},n.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function $o(r,l,u){Uo(r,l),0<u.length&&(r.i=null,r.g.set(Dt(r,l),V(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const A=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var E=A;C[f]!==""&&(E+="="+encodeURIComponent(String(C[f]))),r.push(E)}}return this.i=r.join("&")};function Dt(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function hh(r,l){l&&!r.j&&(Je(r),r.i=null,r.g.forEach(function(u,f){var E=f.toLowerCase();f!=E&&(Uo(this,f),$o(this,E,u))},r)),r.j=l}function dh(r,l){const u=new fn;if(c.Image){const f=new Image;f.onload=S(Ze,u,"TestLoadImage: loaded",!0,l,f),f.onerror=S(Ze,u,"TestLoadImage: error",!1,l,f),f.onabort=S(Ze,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(Ze,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else l(!1)}function fh(r,l){const u=new fn,f=new AbortController,E=setTimeout(()=>{f.abort(),Ze(u,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:f.signal}).then(A=>{clearTimeout(E),A.ok?Ze(u,"TestPingServer: ok",!0,l):Ze(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(E),Ze(u,"TestPingServer: error",!1,l)})}function Ze(r,l,u,f,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),f(u)}catch{}}function ph(){this.g=new Xu}function gh(r,l,u){const f=u||"";try{Mo(r,function(E,A){let C=E;d(E)&&(C=Is(E)),l.push(f+A+"="+encodeURIComponent(C))})}catch(E){throw l.push(f+"type="+encodeURIComponent("_badmap")),E}}function fi(r){this.l=r.Ub||null,this.j=r.eb||!1}k(fi,ws),fi.prototype.g=function(){return new pi(this.l,this.j)},fi.prototype.i=function(r){return function(){return r}}({});function pi(r,l){fe.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(pi,fe),n=pi.prototype,n.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,vn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qo(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function qo(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?yn(this):vn(this),this.readyState==3&&qo(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,yn(this))},n.Qa=function(r){this.g&&(this.response=r,yn(this))},n.ga=function(){this.g&&yn(this)};function yn(r){r.readyState=4,r.l=null,r.j=null,r.v=null,vn(r)}n.setRequestHeader=function(r,l){this.u.append(r,l)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=l.next();return r.join(`\r
`)};function vn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function zo(r){let l="";return te(r,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Vs(r,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=zo(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):X(r,l,u))}function J(r){fe.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,fe);var mh=/^https?$/i,_h=["POST","PUT"];n=J.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ss.g(),this.v=this.o?vo(this.o):vo(Ss),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(A){Go(this,A);return}if(r=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var E in f)u.set(E,f[E]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())u.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),E=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(_h,l,void 0))||f||E||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of u)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ko(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){Go(this,A)}};function Go(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,Ho(r),gi(r)}function Ho(r){r.A||(r.A=!0,Te(r,"complete"),Te(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Te(this,"complete"),Te(this,"abort"),gi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gi(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wo(this):this.bb())},n.bb=function(){Wo(this)};function Wo(r){if(r.h&&typeof a<"u"&&(!r.v[1]||Fe(r)!=4||r.Z()!=2)){if(r.u&&Fe(r)==4)go(r.Ea,0,r);else if(Te(r,"readystatechange"),Fe(r)==4){r.h=!1;try{const C=r.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=C===0){var E=String(r.D).match(Lo)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),f=!mh.test(E?E.toLowerCase():"")}u=f}if(u)Te(r,"complete"),Te(r,"success");else{r.m=6;try{var A=2<Fe(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Ho(r)}}finally{gi(r)}}}}function gi(r,l){if(r.g){Ko(r);const u=r.g,f=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||Te(r,"ready");try{u.onreadystatechange=f}catch{}}}function Ko(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Fe(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Fe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),Qu(l)}};function Qo(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function yh(r){const l={};r=(r.g&&2<=Fe(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(H(r[f]))continue;var u=T(r[f]);const E=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=l[E]||[];l[E]=A,A.push(u)}v(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tn(r,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||l}function Xo(r){this.Aa=0,this.i=[],this.j=new fn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,r),this.cb=Tn("retryDelaySeedMs",1e4,r),this.Wa=Tn("forwardChannelMaxRetries",2,r),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Do(r&&r.concurrentRequestLimit),this.Da=new ph,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xo.prototype,n.la=8,n.G=1,n.connect=function(r,l,u,f){Ee(0),this.W=r,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=ra(this,null,this.W),_i(this)};function Ns(r){if(Yo(r),r.G==3){var l=r.U++,u=Le(r.I);if(X(u,"SID",r.K),X(u,"RID",l),X(u,"TYPE","terminate"),En(r,u),l=new Ye(r,r.j,l),l.L=2,l.v=di(Le(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=oa(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ci(l)}sa(r)}function mi(r){r.g&&(Ms(r),r.g.cancel(),r.g=null)}function Yo(r){mi(r),r.u&&(c.clearTimeout(r.u),r.u=null),yi(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function _i(r){if(!xo(r.h)&&!r.s){r.s=!0;var l=r.Ga;on||co(),an||(on(),an=!0),ps.add(l,r),r.B=0}}function vh(r,l){return Vo(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=dn(b(r.Ga,r,l),ia(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new Ye(this,this.j,r);let A=this.o;if(this.S&&(A?(A=g(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(E.H=A,A=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Zo(this,E,l),u=Le(this.I),X(u,"RID",r),X(u,"CVER",22),this.D&&X(u,"X-HTTP-Session-Id",this.D),En(this,u),A&&(this.O?l="headers="+encodeURIComponent(String(zo(A)))+"&"+l:this.m&&Vs(u,this.m,A)),xs(this.h,E),this.Ua&&X(u,"TYPE","init"),this.P?(X(u,"$req",l),X(u,"SID","null"),E.T=!0,Ps(E,u,null)):Ps(E,u,l),this.G=2}}else this.G==3&&(r?Jo(this,r):this.i.length==0||xo(this.h)||Jo(this))};function Jo(r,l){var u;l?u=l.l:u=r.U++;const f=Le(r.I);X(f,"SID",r.K),X(f,"RID",u),X(f,"AID",r.T),En(r,f),r.m&&r.o&&Vs(f,r.m,r.o),u=new Ye(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),l&&(r.i=l.D.concat(r.i)),l=Zo(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),xs(r.h,u),Ps(u,f,l)}function En(r,l){r.H&&te(r.H,function(u,f){X(l,f,u)}),r.l&&Mo({},function(u,f){X(l,f,u)})}function Zo(r,l,u){u=Math.min(r.i.length,u);var f=r.l?b(r.l.Na,r.l,r):null;e:{var E=r.i;let A=-1;for(;;){const C=["count="+u];A==-1?0<u?(A=E[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let Q=!0;for(let ae=0;ae<u;ae++){let z=E[ae].g;const pe=E[ae].map;if(z-=A,0>z)A=Math.max(0,E[ae].g-100),Q=!1;else try{gh(pe,C,"req"+z+"_")}catch{f&&f(pe)}}if(Q){f=C.join("&");break e}}}return r=r.i.splice(0,u),l.D=r,f}function ea(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;on||co(),an||(on(),an=!0),ps.add(l,r),r.v=0}}function Os(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=dn(b(r.Fa,r),ia(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ta(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=dn(b(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ee(10),mi(this),ta(this))};function Ms(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function ta(r){r.g=new Ye(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=Le(r.qa);X(l,"RID","rpc"),X(l,"SID",r.K),X(l,"AID",r.T),X(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&X(l,"TO",r.ja),X(l,"TYPE","xmlhttp"),En(r,l),r.m&&r.o&&Vs(l,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=di(Le(l)),u.m=null,u.P=!0,Po(u,r)}n.Za=function(){this.C!=null&&(this.C=null,mi(this),Os(this),Ee(19))};function yi(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function na(r,l){var u=null;if(r.g==l){yi(r),Ms(r),r.g=null;var f=2}else if(Ds(r.h,l))u=l.D,No(r.h,l),f=1;else return;if(r.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var E=r.B;f=oi(),Te(f,new Ao(f,u)),_i(r)}else ea(r);else if(E=l.s,E==3||E==0&&0<l.X||!(f==1&&vh(r,l)||f==2&&Os(r)))switch(u&&0<u.length&&(l=r.h,l.i=l.i.concat(u)),E){case 1:vt(r,5);break;case 4:vt(r,10);break;case 3:vt(r,6);break;default:vt(r,2)}}}function ia(r,l){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*l}function vt(r,l){if(r.j.info("Error code "+l),l==2){var u=b(r.fb,r),f=r.Xa;const E=!f;f=new yt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ui(f,"https"),di(f),E?dh(f.toString(),u):fh(f.toString(),u)}else Ee(2);r.G=0,r.l&&r.l.sa(l),sa(r),Yo(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function sa(r){if(r.G=0,r.ka=[],r.l){const l=Oo(r.h);(l.length!=0||r.i.length!=0)&&(D(r.ka,l),D(r.ka,r.i),r.h.i.length=0,V(r.i),r.i.length=0),r.l.ra()}}function ra(r,l,u){var f=u instanceof yt?Le(u):new yt(u);if(f.g!="")l&&(f.g=l+"."+f.g),hi(f,f.s);else{var E=c.location;f=E.protocol,l=l?l+"."+E.hostname:E.hostname,E=+E.port;var A=new yt(null);f&&ui(A,f),l&&(A.g=l),E&&hi(A,E),u&&(A.l=u),f=A}return u=r.D,l=r.ya,u&&l&&X(f,u,l),X(f,"VER",r.la),En(r,f),f}function oa(r,l,u){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new J(new fi({eb:u})):new J(r.pa),l.Ha(r.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function aa(){}n=aa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vi(){}vi.prototype.g=function(r,l){return new Ie(r,l)};function Ie(r,l){fe.call(this),this.g=new Xo(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!H(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!H(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new xt(this)}k(Ie,fe),Ie.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ie.prototype.close=function(){Ns(this.g)},Ie.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Is(r),r=u);l.i.push(new nh(l.Ya++,r)),l.G==3&&_i(l)},Ie.prototype.N=function(){this.g.l=null,delete this.j,Ns(this.g),delete this.g,Ie.aa.N.call(this)};function la(r){As.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){e:{for(const u in l){r=u;break e}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}k(la,As);function ca(){bs.call(this),this.status=1}k(ca,bs);function xt(r){this.g=r}k(xt,aa),xt.prototype.ua=function(){Te(this.g,"a")},xt.prototype.ta=function(r){Te(this.g,new la(r))},xt.prototype.sa=function(r){Te(this.g,new ca)},xt.prototype.ra=function(){Te(this.g,"b")},vi.prototype.createWebChannel=vi.prototype.g,Ie.prototype.send=Ie.prototype.o,Ie.prototype.open=Ie.prototype.m,Ie.prototype.close=Ie.prototype.close,zl=function(){return new vi},ql=function(){return oi()},$l=mt,nr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ai.NO_ERROR=0,ai.TIMEOUT=8,ai.HTTP_ERROR=6,Si=ai,bo.COMPLETE="complete",jl=bo,To.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",fe.prototype.listen=fe.prototype.K,An=To,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Ul=J}).apply(typeof Ei<"u"?Ei:typeof self<"u"?self:typeof window<"u"?window:{});const Ea="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Er("@firebase/firestore");function In(){return At.logLevel}function x(n,...e){if(At.logLevel<=$.DEBUG){const t=e.map(Ar);At.debug(`Firestore (${Zt}): ${n}`,...t)}}function Ge(n,...e){if(At.logLevel<=$.ERROR){const t=e.map(Ar);At.error(`Firestore (${Zt}): ${n}`,...t)}}function Gt(n,...e){if(At.logLevel<=$.WARN){const t=e.map(Ar);At.warn(`Firestore (${Zt}): ${n}`,...t)}}function Ar(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n="Unexpected state"){const e=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+n;throw Ge(e),new Error(e)}function K(n,e){n||L()}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Qe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class rf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class of{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0);let i=this.i;const s=h=>this.i!==i?(i=this.i,t(h)):Promise.resolve();let o=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ut,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ut)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(K(typeof i.accessToken=="string"),new Gl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new _e(e)}}class af{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lf{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new af(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uf{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){K(this.o===void 0);const i=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.R=t.token,new cf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=hf(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<t&&(i+=e.charAt(s[o]%e.length))}return i}}function G(n,e){return n<e?-1:n>e?1:0}function Ht(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new re(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new re(0,0))}static max(){return new F(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,i){t===void 0?t=0:t>e.length&&L(),i===void 0?i=e.length-t:i>e.length-t&&L(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const o=e.get(s),a=t.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Z extends Mn{construct(e,t,i){return new Z(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const df=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Mn{construct(e,t,i){return new ce(e,t,i)}static isValidIdentifier(e){return df.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const o=()=>{if(i.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(i+=c,s++):(o(),s++)}if(o(),a)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Z.fromString(e))}static fromName(e){return new O(Z.fromString(e).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Z(e.slice()))}}function ff(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(i===1e9?new re(t+1,0):new re(t,i));return new dt(s,O.empty(),e)}function pf(n){return new dt(n.readTime,n.key,-1)}class dt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new dt(F.min(),O.empty(),-1)}static max(){return new dt(F.max(),O.empty(),-1)}}function gf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==mf)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,i)=>{t(e)})}static reject(e){return new R((t,i)=>{i(e)})}static waitFor(e){return new R((t,i)=>{let s=0,o=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&t()},h=>i(h))}),a=!0,o===s&&t()})}static or(e){let t=R.resolve(!1);for(const i of e)t=t.next(s=>s?R.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,o)=>{i.push(t.call(this,s,o))}),this.waitFor(i)}static mapArray(e,t){return new R((i,s)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++c,c===o&&i(a)},p=>s(p))}})}static doWhile(e,t){return new R((i,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):i()};o()})}}function yf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Kn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}br.oe=-1;function es(n){return n==null}function Li(n){return n===0&&1/n==-1/0}function vf(n){return typeof n=="number"&&Number.isInteger(n)&&!Li(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function en(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Wl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.comparator=e,this.root=t||le.EMPTY}insert(e,t){return new Y(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,le.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ii(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ii(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ii(this.root,e,this.comparator,!0)}}class Ii{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class le{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??le.RED,this.left=s??le.EMPTY,this.right=o??le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,o){return new le(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return le.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}le.EMPTY=null,le.RED=!0,le.BLACK=!1;le.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,i,s,o){return this}insert(e,t,i){return new le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wa(this.data.getIterator())}getIteratorFrom(e){return new wa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class wa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Pe([])}unionWith(e){let t=new ue(ce.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Pe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ht(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Kl("Invalid base64 string: "+o):o}}(e);return new he(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Tf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(n){if(K(!!n),typeof n=="string"){let e=0;const t=Tf.exec(n);if(K(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bt(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Rr(n){const e=n.mapValue.fields.__previous_value__;return Sr(e)?Rr(e):e}function Ln(n){const e=ft(n.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,i,s,o,a,c,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class Fn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi={mapValue:{}};function St(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sr(n)?4:wf(n)?9007199254740991:If(n)?10:11:L()}function Ne(n,e){if(n===e)return!0;const t=St(n);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ln(n).isEqual(Ln(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ft(s.timestampValue),c=ft(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return bt(s.bytesValue).isEqual(bt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return ne(s.geoPointValue.latitude)===ne(o.geoPointValue.latitude)&&ne(s.geoPointValue.longitude)===ne(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ne(s.integerValue)===ne(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ne(s.doubleValue),c=ne(o.doubleValue);return a===c?Li(a)===Li(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Ht(n.arrayValue.values||[],e.arrayValue.values||[],Ne);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ia(a)!==Ia(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ne(a[h],c[h])))return!1;return!0}(n,e);default:return L()}}function Bn(n,e){return(n.values||[]).find(t=>Ne(t,e))!==void 0}function Wt(n,e){if(n===e)return 0;const t=St(n),i=St(e);if(t!==i)return G(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=ne(o.integerValue||o.doubleValue),h=ne(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return Aa(n.timestampValue,e.timestampValue);case 4:return Aa(Ln(n),Ln(e));case 5:return G(n.stringValue,e.stringValue);case 6:return function(o,a){const c=bt(o),h=bt(a);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const p=G(c[d],h[d]);if(p!==0)return p}return G(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=G(ne(o.latitude),ne(a.latitude));return c!==0?c:G(ne(o.longitude),ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ba(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,h,d,p;const I=o.fields||{},b=a.fields||{},S=(c=I.value)===null||c===void 0?void 0:c.arrayValue,k=(h=b.value)===null||h===void 0?void 0:h.arrayValue,V=G(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:ba(S,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===wi.mapValue&&a===wi.mapValue)return 0;if(o===wi.mapValue)return 1;if(a===wi.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let I=0;I<h.length&&I<p.length;++I){const b=G(h[I],p[I]);if(b!==0)return b;const S=Wt(c[h[I]],d[p[I]]);if(S!==0)return S}return G(h.length,p.length)}(n.mapValue,e.mapValue);default:throw L()}}function Aa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=ft(n),i=ft(e),s=G(t.seconds,i.seconds);return s!==0?s:G(t.nanos,i.nanos)}function ba(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const o=Wt(t[s],i[s]);if(o)return o}return G(t.length,i.length)}function Kt(n){return ir(n)}function ir(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=ft(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const o of t.values||[])s?s=!1:i+=",",i+=ir(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ir(t.fields[a])}`;return s+"}"}(n.mapValue):L()}function sr(n){return!!n&&"integerValue"in n}function Pr(n){return!!n&&"arrayValue"in n}function Sa(n){return!!n&&"nullValue"in n}function Ra(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ri(n){return!!n&&"mapValue"in n}function If(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Rn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return en(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Rn(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function wf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ri(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rn(t)}setAll(e){let t=ce.emptyPath(),i={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,i,s),i={},s=[],t=c.popLast()}a?i[c.lastSegment()]=Rn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,s)}delete(e){const t=this.field(e.popLast());Ri(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ne(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Ri(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){en(t,(s,o)=>e[s]=o);for(const s of i)delete e[s]}clone(){return new Ae(Rn(this.value))}}function Ql(n){const e=[];return en(n.fields,(t,i)=>{const s=new ce([t]);if(Ri(i)){const o=Ql(i.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Pe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,i,s,o,a,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ye(e,0,F.min(),F.min(),F.min(),Ae.empty(),0)}static newFoundDocument(e,t,i,s){return new ye(e,1,t,F.min(),i,s,0)}static newNoDocument(e,t){return new ye(e,2,t,F.min(),F.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,F.min(),F.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){this.position=e,this.inclusive=t}}function Pa(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?i=O.comparator(O.fromName(a.referenceValue),t.key):i=Wt(a,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ca(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ne(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Af(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{}class se extends Xl{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Sf(e,t,i):t==="array-contains"?new Cf(e,i):t==="in"?new kf(e,i):t==="not-in"?new Df(e,i):t==="array-contains-any"?new xf(e,i):new se(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Rf(e,i):new Pf(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Wt(t,this.value)):t!==null&&St(this.value)===St(t)&&this.matchesComparison(Wt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oe extends Xl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Oe(e,t)}matches(e){return Yl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yl(n){return n.op==="and"}function Jl(n){return bf(n)&&Yl(n)}function bf(n){for(const e of n.filters)if(e instanceof Oe)return!1;return!0}function rr(n){if(n instanceof se)return n.field.canonicalString()+n.op.toString()+Kt(n.value);if(Jl(n))return n.filters.map(e=>rr(e)).join(",");{const e=n.filters.map(t=>rr(t)).join(",");return`${n.op}(${e})`}}function Zl(n,e){return n instanceof se?function(i,s){return s instanceof se&&i.op===s.op&&i.field.isEqual(s.field)&&Ne(i.value,s.value)}(n,e):n instanceof Oe?function(i,s){return s instanceof Oe&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,a,c)=>o&&Zl(a,s.filters[c]),!0):!1}(n,e):void L()}function ec(n){return n instanceof se?function(t){return`${t.field.canonicalString()} ${t.op} ${Kt(t.value)}`}(n):n instanceof Oe?function(t){return t.op.toString()+" {"+t.getFilters().map(ec).join(" ,")+"}"}(n):"Filter"}class Sf extends se{constructor(e,t,i){super(e,t,i),this.key=O.fromName(i.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Rf extends se{constructor(e,t){super(e,"in",t),this.keys=tc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pf extends se{constructor(e,t){super(e,"not-in",t),this.keys=tc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>O.fromName(i.referenceValue))}class Cf extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pr(t)&&Bn(t.arrayValue,this.value)}}class kf extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bn(this.value.arrayValue,t)}}class Df extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Bn(this.value.arrayValue,t)}}class xf extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Bn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t=null,i=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function ka(n,e=null,t=[],i=[],s=null,o=null,a=null){return new Vf(n,e,t,i,s,o,a)}function Cr(n){const e=B(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>rr(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),es(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Kt(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Kt(i)).join(",")),e.ue=t}return e.ue}function kr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Af(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ca(n.startAt,e.startAt)&&Ca(n.endAt,e.endAt)}function or(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t=null,i=[],s=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Nf(n,e,t,i,s,o,a,c){return new ts(n,e,t,i,s,o,a,c)}function Dr(n){return new ts(n)}function Da(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Of(n){return n.collectionGroup!==null}function Pn(n){const e=B(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ue(ce.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Bi(o,i))}),t.has(ce.keyField().canonicalString())||e.ce.push(new Bi(ce.keyField(),i))}return e.ce}function ke(n){const e=B(n);return e.le||(e.le=Mf(e,Pn(n))),e.le}function Mf(n,e){if(n.limitType==="F")return ka(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Bi(s.field,o)});const t=n.endAt?new Fi(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Fi(n.startAt.position,n.startAt.inclusive):null;return ka(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function ar(n,e,t){return new ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ns(n,e){return kr(ke(n),ke(e))&&n.limitType===e.limitType}function nc(n){return`${Cr(ke(n))}|lt:${n.limitType}`}function Ot(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>ec(s)).join(", ")}]`),es(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Kt(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Kt(s)).join(",")),`Target(${i})`}(ke(n))}; limitType=${n.limitType})`}function is(n,e){return e.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):O.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,e)&&function(i,s){for(const o of Pn(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(a,c,h){const d=Pa(a,c,h);return a.inclusive?d<=0:d<0}(i.startAt,Pn(i),s)||i.endAt&&!function(a,c,h){const d=Pa(a,c,h);return a.inclusive?d>=0:d>0}(i.endAt,Pn(i),s))}(n,e)}function Lf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ic(n){return(e,t)=>{let i=!1;for(const s of Pn(n)){const o=Ff(s,e,t);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Ff(n,e,t){const i=n.field.isKeyField()?O.comparator(e.key,t.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Wt(h,d):L()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){en(this.inner,(t,i)=>{for(const[s,o]of i)e(s,o)})}isEmpty(){return Wl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Y(O.comparator);function He(){return Bf}const sc=new Y(O.comparator);function bn(...n){let e=sc;for(const t of n)e=e.insert(t.key,t);return e}function rc(n){let e=sc;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Et(){return Cn()}function oc(){return Cn()}function Cn(){return new tn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Uf=new Y(O.comparator),jf=new ue(O.comparator);function U(...n){let e=jf;for(const t of n)e=e.add(t);return e}const $f=new ue(G);function qf(){return $f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(e)?"-0":e}}function ac(n){return{integerValue:""+n}}function zf(n,e){return vf(e)?ac(e):xr(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this._=void 0}}function Gf(n,e,t){return n instanceof Ui?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Sr(o)&&(o=Rr(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof Un?cc(n,e):n instanceof jn?uc(n,e):function(s,o){const a=lc(s,o),c=xa(a)+xa(s.Pe);return sr(a)&&sr(s.Pe)?ac(c):xr(s.serializer,c)}(n,e)}function Hf(n,e,t){return n instanceof Un?cc(n,e):n instanceof jn?uc(n,e):t}function lc(n,e){return n instanceof ji?function(i){return sr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}class Ui extends ss{}class Un extends ss{constructor(e){super(),this.elements=e}}function cc(n,e){const t=hc(e);for(const i of n.elements)t.some(s=>Ne(s,i))||t.push(i);return{arrayValue:{values:t}}}class jn extends ss{constructor(e){super(),this.elements=e}}function uc(n,e){let t=hc(e);for(const i of n.elements)t=t.filter(s=>!Ne(s,i));return{arrayValue:{values:t}}}class ji extends ss{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function xa(n){return ne(n.integerValue||n.doubleValue)}function hc(n){return Pr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Wf(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof Un&&s instanceof Un||i instanceof jn&&s instanceof jn?Ht(i.elements,s.elements,Ne):i instanceof ji&&s instanceof ji?Ne(i.Pe,s.Pe):i instanceof Ui&&s instanceof Ui}(n.transform,e.transform)}class Kf{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rs{}function dc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pc(n.key,qe.none()):new Qn(n.key,n.data,qe.none());{const t=n.data,i=Ae.empty();let s=new ue(ce.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?i.delete(o):i.set(o,a),s=s.add(o)}return new Pt(n.key,i,new Pe(s.toArray()),qe.none())}}function Qf(n,e,t){n instanceof Qn?function(s,o,a){const c=s.value.clone(),h=Na(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Pt?function(s,o,a){if(!Pi(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Na(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(fc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function kn(n,e,t,i){return n instanceof Qn?function(o,a,c,h){if(!Pi(o.precondition,a))return c;const d=o.value.clone(),p=Oa(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,i):n instanceof Pt?function(o,a,c,h){if(!Pi(o.precondition,a))return c;const d=Oa(o.fieldTransforms,h,a),p=a.data;return p.setAll(fc(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,i):function(o,a,c){return Pi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Xf(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),o=lc(i.transform,s||null);o!=null&&(t===null&&(t=Ae.empty()),t.set(i.field,o))}return t||null}function Va(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Ht(i,s,(o,a)=>Wf(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qn extends rs{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pt extends rs{constructor(e,t,i,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function fc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Na(n,e,t){const i=new Map;K(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,c=e.data.field(o.field);i.set(o.field,Hf(a,c,t[s]))}return i}function Oa(n,e,t){const i=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);i.set(s.field,Gf(o,a,e))}return i}class pc extends rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yf extends rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Qf(o,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=kn(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=kn(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=oc();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(s.key)?null:c;const h=dc(a,c);h!==null&&i.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),U())}isEqual(e){return this.batchId===e.batchId&&Ht(this.mutations,e.mutations,(t,i)=>Va(t,i))&&Ht(this.baseMutations,e.baseMutations,(t,i)=>Va(t,i))}}class Vr{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){K(e.mutations.length===i.length);let s=function(){return Uf}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,i[a].version);return new Vr(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,q;function tp(n){switch(n){default:return L();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function gc(n){if(n===void 0)return Ge("GRPC error has no .code"),P.UNKNOWN;switch(n){case ie.OK:return P.OK;case ie.CANCELLED:return P.CANCELLED;case ie.UNKNOWN:return P.UNKNOWN;case ie.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ie.INTERNAL:return P.INTERNAL;case ie.UNAVAILABLE:return P.UNAVAILABLE;case ie.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ie.NOT_FOUND:return P.NOT_FOUND;case ie.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ie.ABORTED:return P.ABORTED;case ie.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ie.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(q=ie||(ie={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new It([4294967295,4294967295],0);function Ma(n){const e=np().encode(n),t=new Bl;return t.update(e),new Uint8Array(t.digest())}function La(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new It([t,i],0),new It([s,o],0)]}class Nr{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Sn(`Invalid padding: ${t}`);if(i<0)throw new Sn(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Sn(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Sn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=It.fromNumber(this.Ie)}Ee(e,t,i){let s=e.add(t.multiply(It.fromNumber(i)));return s.compare(ip)===1&&(s=new It([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Ma(e),[i,s]=La(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(i,s,o);if(!this.de(a))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Nr(o,s,t);return i.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Ma(e),[i,s]=La(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(i,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Sn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t,i,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Xn.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new os(F.min(),s,new Y(G),He(),U())}}class Xn{constructor(e,t,i,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Xn(i,t,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,i,s){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=s}}class mc{constructor(e,t){this.targetId=e,this.me=t}}class _c{constructor(e,t,i=he.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Fa{constructor(){this.fe=0,this.ge=Ua(),this.pe=he.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=U(),t=U(),i=U();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:L()}}),new Xn(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Ua()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,K(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sp{constructor(e){this.Le=e,this.Be=new Map,this.ke=He(),this.qe=Ba(),this.Qe=new Y(G)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:L()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,i=e.me.count,s=this.Je(t);if(s){const o=s.target;if(or(o))if(i===0){const a=new O(o.path);this.Ue(t,a,ye.newNoDocument(a,F.min()))}else K(i===1);else{const a=this.Ye(t);if(a!==i){const c=this.Ze(e),h=c?this.Xe(c,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=t;let a,c;try{a=bt(i).toUint8Array()}catch(h){if(h instanceof Kl)return Gt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Nr(a,s,o)}catch(h){return Gt(h instanceof Sn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,o,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&or(c.target)){const h=new O(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,ye.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let i=U();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(i=i.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new os(e,t,this.Qe,this.ke,i);return this.ke=He(),this.qe=Ba(),this.Qe=new Y(G),s}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Fa,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ue(G),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fa),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ba(){return new Y(O.comparator)}function Ua(){return new Y(O.comparator)}const rp={asc:"ASCENDING",desc:"DESCENDING"},op={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ap={and:"AND",or:"OR"};class lp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lr(n,e){return n.useProto3Json||es(e)?e:{value:e}}function $i(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cp(n,e){return $i(n,e.toTimestamp())}function De(n){return K(!!n),F.fromTimestamp(function(t){const i=ft(t);return new re(i.seconds,i.nanos)}(n))}function Or(n,e){return cr(n,e).canonicalString()}function cr(n,e){const t=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vc(n){const e=Z.fromString(n);return K(Ac(e)),e}function ur(n,e){return Or(n.databaseId,e.path)}function qs(n,e){const t=vc(e);if(t.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Ec(t))}function Tc(n,e){return Or(n.databaseId,e)}function up(n){const e=vc(n);return e.length===4?Z.emptyPath():Ec(e)}function hr(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ec(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ja(n,e,t){return{name:ur(n,e),fields:t.value.mapValue.fields}}function hp(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(K(p===void 0||typeof p=="string"),he.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array),he.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?P.UNKNOWN:gc(d.code);return new N(p,d.message||"")}(a);t=new _c(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=qs(n,i.document.name),o=De(i.document.updateTime),a=i.document.createTime?De(i.document.createTime):F.min(),c=new Ae({mapValue:{fields:i.document.fields}}),h=ye.newFoundDocument(s,o,a,c),d=i.targetIds||[],p=i.removedTargetIds||[];t=new Ci(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=qs(n,i.document),o=i.readTime?De(i.readTime):F.min(),a=ye.newNoDocument(s,o),c=i.removedTargetIds||[];t=new Ci([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=qs(n,i.document),o=i.removedTargetIds||[];t=new Ci([],o,s,null)}else{if(!("filter"in e))return L();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,a=new ep(s,o),c=i.targetId;t=new mc(c,a)}}return t}function dp(n,e){let t;if(e instanceof Qn)t={update:ja(n,e.key,e.value)};else if(e instanceof pc)t={delete:ur(n,e.key)};else if(e instanceof Pt)t={update:ja(n,e.key,e.data),updateMask:Ep(e.fieldMask)};else{if(!(e instanceof Yf))return L();t={verify:ur(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(o,a){const c=a.transform;if(c instanceof Ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Un)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof jn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ji)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw L()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:cp(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(n,e.precondition)),t}function fp(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(s,o){let a=s.updateTime?De(s.updateTime):De(o);return a.isEqual(F.min())&&(a=De(o)),new Kf(a,s.transformResults||[])}(t,e))):[]}function pp(n,e){return{documents:[Tc(n,e.path)]}}function gp(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Tc(n,s);const o=function(d){if(d.length!==0)return wc(Oe.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(b){return{field:Mt(b.field),direction:yp(b.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=lr(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function mp(n){let e=up(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){K(i===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(I){const b=Ic(I);return b instanceof Oe&&Jl(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(b=>function(k){return new Bi(Lt(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(b))}(t.orderBy));let c=null;t.limit&&(c=function(I){let b;return b=typeof I=="object"?I.value:I,es(b)?null:b}(t.limit));let h=null;t.startAt&&(h=function(I){const b=!!I.before,S=I.values||[];return new Fi(S,b)}(t.startAt));let d=null;return t.endAt&&(d=function(I){const b=!I.before,S=I.values||[];return new Fi(S,b)}(t.endAt)),Nf(e,s,a,o,c,"F",h,d)}function _p(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ic(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Lt(t.unaryFilter.field);return se.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Lt(t.unaryFilter.field);return se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Lt(t.unaryFilter.field);return se.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Lt(t.unaryFilter.field);return se.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(t){return se.create(Lt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Oe.create(t.compositeFilter.filters.map(i=>Ic(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(t.compositeFilter.op))}(n):L()}function yp(n){return rp[n]}function vp(n){return op[n]}function Tp(n){return ap[n]}function Mt(n){return{fieldPath:n.canonicalString()}}function Lt(n){return ce.fromServerFormat(n.fieldPath)}function wc(n){return n instanceof se?function(t){if(t.op==="=="){if(Ra(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NAN"}};if(Sa(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ra(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NOT_NAN"}};if(Sa(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mt(t.field),op:vp(t.op),value:t.value}}}(n):n instanceof Oe?function(t){const i=t.getFilters().map(s=>wc(s));return i.length===1?i[0]:{compositeFilter:{op:Tp(t.op),filters:i}}}(n):L()}function Ep(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ac(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,i,s,o=F.min(),a=F.min(),c=he.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.ct=e}}function wp(n){const e=mp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ar(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.un=new bp}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(dt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(dt.min())}updateCollectionGroup(e,t,i){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class bp{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new ue(Z.comparator),o=!s.has(i);return this.index[t]=s.add(i),o}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ue(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qt(0)}static kn(){return new Qt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.changes=new tn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?R.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&kn(i.mutation,s,Pe.empty(),re.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,U()).next(()=>i))}getLocalViewOfDocuments(e,t,i=U()){const s=Et();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(o=>{let a=bn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const i=Et();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,U()))}populateOverlays(e,t,i){const s=[];return i.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,i,s){let o=He();const a=Cn(),c=function(){return Cn()}();return t.forEach((h,d)=>{const p=i.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Pt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),kn(p.mutation,d,p.mutation.getFieldMask(),re.now())):a.set(d.key,Pe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var I;return c.set(d,new Rp(p,(I=a.get(d))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(e,t){const i=Cn();let s=new Y((a,c)=>a-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=i.get(h)||Pe.empty();p=c.applyToLocalView(d,p),i.set(h,p);const I=(s.get(c.batchId)||U()).add(h);s=s.insert(c.batchId,I)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,p=h.value,I=oc();p.forEach(b=>{if(!o.has(b)){const S=dc(t.get(b),i.get(b));S!==null&&I.set(b,S),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,I))}return R.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Of(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-o.size):R.resolve(Et());let c=-1,h=o;return a.next(d=>R.forEach(d,(p,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(p)?R.resolve():this.remoteDocumentCache.getEntry(e,p).next(b=>{h=h.insert(p,b)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,U())).next(p=>({batchId:c,changes:rc(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(i=>{let s=bn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const o=t.collectionGroup;let a=bn();return this.indexManager.getCollectionParents(e,o).next(c=>R.forEach(c,h=>{const d=function(I,b){return new ts(b,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next(p=>{p.forEach((I,b)=>{a=a.insert(I,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ye.newInvalidDocument(p)))});let c=bn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&kn(p.mutation,d,Pe.empty(),re.now()),is(t,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:De(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:wp(s.bundledQuery),readTime:De(s.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.overlays=new Y(O.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Et();return R.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,o)=>{this.ht(e,t,o)}),R.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(e,t,i){const s=Et(),o=t.length+1,a=new O(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>i&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let o=new Y((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let p=o.get(d.largestBatchId);p===null&&(p=Et(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Et(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return R.resolve(c)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Zf(t,i));let o=this.Ir.get(t);o===void 0&&(o=U(),this.Ir.set(t,o)),this.Ir.set(t,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.Tr=new ue(oe.Er),this.dr=new ue(oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new oe(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new oe(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new O(new Z([])),i=new oe(t,e),s=new oe(t,e+1),o=[];return this.dr.forEachInRange([i,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new O(new Z([])),i=new oe(t,e),s=new oe(t,e+1);let o=U();return this.dr.forEachInRange([i,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new oe(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class oe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return O.comparator(e.key,t.key)||G(e.wr,t.wr)}static Ar(e,t){return G(e.wr,t.wr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ue(oe.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Jf(o,t,i,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new oe(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.vr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new oe(t,0),s=new oe(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],a=>{const c=this.Dr(a.wr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new ue(G);return t.forEach(s=>{const o=new oe(s,0),a=new oe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{i=i.add(c.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let o=i;O.isDocumentKey(o)||(o=o.child(""));const a=new oe(new O(o),0);let c=new ue(G);return this.br.forEachWhile(h=>{const d=h.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),R.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(i=>{const s=this.Dr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){K(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(t.mutations,s=>{const o=new oe(s.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new oe(t,0),s=this.br.firstAfterOrEqual(i);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.Mr=e,this.docs=function(){return new Y(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),o=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return R.resolve(i?i.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let i=He();return t.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():ye.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let o=He();const a=t.path,c=new O(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||gf(pf(p),i)<=0||(s.has(p.key)||is(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(e,t,i,s){L()}Or(e,t){return R.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Np(this)}getSize(e){return R.resolve(this.size)}}class Np extends Sp{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(i)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.persistence=e,this.Nr=new tn(t=>Cr(t),kr),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Mr,this.targetCount=0,this.kr=Qt.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Qt(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,i){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return R.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),R.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return R.resolve(i)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new br(0),this.Kr=!1,this.Kr=!0,this.$r=new Dp,this.referenceDelegate=e(this),this.Ur=new Op(this),this.indexManager=new Ap,this.remoteDocumentCache=function(s){return new Vp(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Ip(t),this.Gr=new Cp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new xp(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){x("MemoryPersistence","Starting transaction:",e);const s=new Lp(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(e,t){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class Lp extends _f{constructor(e){super(),this.currentSequenceNumber=e}}class Lr{constructor(e){this.persistence=e,this.Jr=new Mr,this.Yr=null}static Zr(e){return new Lr(e)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),R.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=O.fromPath(i);return this.ei(e,s).next(o=>{o||t.removeEntry(s,F.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=s}static Wi(e,t){let i=U(),s=U();for(const o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Fr(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Fh()?8:yf(ve())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,s){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,s,i).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Fp;return this.Xi(e,t,a).next(c=>{if(o.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>o.result)}es(e,t,i,s){return i.documentReadCount<this.ji?(In()<=$.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Ot(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(In()<=$.DEBUG&&x("QueryEngine","Query:",Ot(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(In()<=$.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Ot(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ke(t))):R.resolve())}Yi(e,t){if(Da(t))return R.resolve(null);let i=ke(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ar(t,null,"F"),i=ke(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const a=U(...o);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,i).next(h=>{const d=this.ts(t,c);return this.ns(t,d,a,h.readTime)?this.Yi(e,ar(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,i,s){return Da(t)||s.isEqual(F.min())?R.resolve(null):this.Ji.getDocuments(e,i).next(o=>{const a=this.ts(t,o);return this.ns(t,a,i,s)?R.resolve(null):(In()<=$.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ot(t)),this.rs(e,a,t,ff(s,-1)).next(c=>c))})}ts(e,t){let i=new ue(ic(e));return t.forEach((s,o)=>{is(e,o)&&(i=i.add(o))}),i}ns(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(e,t,i){return In()<=$.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ot(t)),this.Ji.getDocumentsMatchingQuery(e,t,dt.min(),i)}rs(e,t,i,s){return this.Ji.getDocumentsMatchingQuery(e,i,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t,i,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Y(G),this._s=new tn(o=>Cr(o),kr),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function jp(n,e,t,i){return new Up(n,e,t,i)}async function bc(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{const a=[],c=[];let h=U();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(i,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function $p(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,p){const I=d.batch,b=I.keys();let S=R.resolve();return b.forEach(k=>{S=S.next(()=>p.getEntry(h,k)).next(V=>{const D=d.docVersions.get(k);K(D!==null),V.version.compareTo(D)<0&&(I.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(t,i,e,o).next(()=>o.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let h=U();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Sc(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function qp(n,e){const t=B(n),i=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((p,I)=>{const b=s.get(I);if(!b)return;c.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,I).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,I)));let S=b.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?S=S.withResumeToken(he.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,i)),s=s.insert(I,S),function(V,D,j){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(b,S,p)&&c.push(t.Ur.updateTargetData(o,S))});let h=He(),d=U();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(zp(o,a,e.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!i.isEqual(F.min())){const p=t.Ur.getLastRemoteSnapshotVersion(o).next(I=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,i));c.push(p)}return R.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=s,o))}function zp(n,e,t){let i=U(),s=U();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let a=He();return t.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function Gp(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Hp(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Ur.getTargetData(i,e).next(o=>o?(s=o,R.resolve(s)):t.Ur.allocateTargetId(i).next(a=>(s=new ot(e,a,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.os.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function dr(n,e,t){const i=B(n),s=i.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",o,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Kn(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.os=i.os.remove(e),i._s.delete(s.target)}function $a(n,e,t){const i=B(n);let s=F.min(),o=U();return i.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const I=B(h),b=I._s.get(p);return b!==void 0?R.resolve(I.os.get(b)):I.Ur.getTargetData(d,p)}(i,a,ke(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>i.ss.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?o:U())).next(c=>(Wp(i,Lf(e),c),{documents:c,Ts:o})))}function Wp(n,e,t){let i=n.us.get(e)||F.min();t.forEach((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.us.set(e,i)}class qa{constructor(){this.activeTargetIds=qf()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kp{constructor(){this.so=new qa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qa,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai=null;function zs(){return Ai===null?Ai=function(){return 268435456+Math.round(2147483648*Math.random())}():Ai++,"0x"+Ai.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="WebChannelConnection";class Jp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(t,i,s,o,a){const c=zs(),h=this.xo(t,i.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,s).then(p=>(x("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw Gt("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",h,"request:",s),p})}Lo(t,i,s,o,a,c){return this.Mo(t,i,s,o,a)}Oo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,a)=>t[a]=o),s&&s.headers.forEach((o,a)=>t[a]=o)}xo(t,i){const s=Xp[t];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,s){const o=zs();return new Promise((a,c)=>{const h=new Ul;h.setWithCredentials(!0),h.listenOnce(jl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Si.NO_ERROR:const p=h.getResponseJson();x(me,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Si.TIMEOUT:x(me,`RPC '${e}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Si.HTTP_ERROR:const I=h.getStatus();if(x(me,`RPC '${e}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const k=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(S.status);c(new N(k,S.message))}else c(new N(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{x(me,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);x(me,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",d,i,15)})}Bo(e,t,i){const s=zs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=zl(),c=ql(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,i),h.encodeInitMessageHeaders=!0;const p=o.join("");x(me,`Creating RPC '${e}' stream ${s}: ${p}`,h);const I=a.createWebChannel(p,h);let b=!1,S=!1;const k=new Yp({Io:D=>{S?x(me,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(b||(x(me,`Opening RPC '${e}' stream ${s} transport.`),I.open(),b=!0),x(me,`RPC '${e}' stream ${s} sending:`,D),I.send(D))},To:()=>I.close()}),V=(D,j,H)=>{D.listen(j,W=>{try{H(W)}catch(ee){setTimeout(()=>{throw ee},0)}})};return V(I,An.EventType.OPEN,()=>{S||(x(me,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),V(I,An.EventType.CLOSE,()=>{S||(S=!0,x(me,`RPC '${e}' stream ${s} transport closed`),k.So())}),V(I,An.EventType.ERROR,D=>{S||(S=!0,Gt(me,`RPC '${e}' stream ${s} transport errored:`,D),k.So(new N(P.UNAVAILABLE,"The operation could not be completed")))}),V(I,An.EventType.MESSAGE,D=>{var j;if(!S){const H=D.data[0];K(!!H);const W=H,ee=W.error||((j=W[0])===null||j===void 0?void 0:j.error);if(ee){x(me,`RPC '${e}' stream ${s} received error:`,ee);const we=ee.status;let te=function(_){const y=ie[_];if(y!==void 0)return gc(y)}(we),v=ee.message;te===void 0&&(te=P.INTERNAL,v="Unknown error status: "+we+" with message "+ee.message),S=!0,k.So(new N(te,v)),I.close()}else x(me,`RPC '${e}' stream ${s} received:`,H),k.bo(H)}}),V(c,$l.STAT_EVENT,D=>{D.stat===nr.PROXY?x(me,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===nr.NOPROXY&&x(me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Gs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){return new lp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,i=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-i);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,i,s,o,a,c,h){this.ui=e,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Rc(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Ge(t.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===t&&this.P_(i,s)},i=>{e(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zp extends Pc{constructor(e,t,i,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=hp(this.serializer,e),i=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?De(a.readTime):F.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=hr(this.serializer),t.addTarget=function(o,a){let c;const h=a.target;if(c=or(h)?{documents:pp(o,h)}:{query:gp(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=yc(o,a.resumeToken);const d=lr(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=$i(o,a.snapshotVersion.toTimestamp());const d=lr(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const i=_p(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=hr(this.serializer),t.removeTarget=e,this.a_(t)}}class eg extends Pc{constructor(e,t,i,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return K(!!e.streamToken),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=fp(e.writeResults,e.commitTime),i=De(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=hr(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>dp(this.serializer,i))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,cr(t,i),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Lo(e,t,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,cr(t,i),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ng{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ge(t),this.D_=!1):x("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,i,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{i.enqueueAndForget(async()=>{Ct(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=B(h);d.L_.add(4),await Yn(d),d.q_.set("Unknown"),d.L_.delete(4),await ls(d)}(this))})}),this.q_=new ng(i,s)}}async function ls(n){if(Ct(n))for(const e of n.B_)await e(!0)}async function Yn(n){for(const e of n.B_)await e(!1)}function Cc(n,e){const t=B(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),$r(t)?jr(t):nn(t).r_()&&Ur(t,e))}function Br(n,e){const t=B(n),i=nn(t);t.N_.delete(e),i.r_()&&kc(t,e),t.N_.size===0&&(i.r_()?i.o_():Ct(t)&&t.q_.set("Unknown"))}function Ur(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}nn(n).A_(e)}function kc(n,e){n.Q_.xe(e),nn(n).R_(e)}function jr(n){n.Q_=new sp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),nn(n).start(),n.q_.v_()}function $r(n){return Ct(n)&&!nn(n).n_()&&n.N_.size>0}function Ct(n){return B(n).L_.size===0}function Dc(n){n.Q_=void 0}async function sg(n){n.q_.set("Online")}async function rg(n){n.N_.forEach((e,t)=>{Ur(n,e)})}async function og(n,e){Dc(n),$r(n)?(n.q_.M_(e),jr(n)):n.q_.set("Unknown")}async function ag(n,e,t){if(n.q_.set("Online"),e instanceof _c&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(i){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await qi(n,i)}else if(e instanceof Ci?n.Q_.Ke(e):e instanceof mc?n.Q_.He(e):n.Q_.We(e),!t.isEqual(F.min()))try{const i=await Sc(n.localStore);t.compareTo(i)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(he.EMPTY_BYTE_STRING,p.snapshotVersion)),kc(o,h);const I=new ot(p.target,h,d,p.sequenceNumber);Ur(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(i){x("RemoteStore","Failed to raise snapshot:",i),await qi(n,i)}}async function qi(n,e,t){if(!Kn(e))throw e;n.L_.add(1),await Yn(n),n.q_.set("Offline"),t||(t=()=>Sc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ls(n)})}function xc(n,e){return e().catch(t=>qi(n,t,e))}async function cs(n){const e=B(n),t=pt(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;lg(e);)try{const s=await Gp(e.localStore,i);if(s===null){e.O_.length===0&&t.o_();break}i=s.batchId,cg(e,s)}catch(s){await qi(e,s)}Vc(e)&&Nc(e)}function lg(n){return Ct(n)&&n.O_.length<10}function cg(n,e){n.O_.push(e);const t=pt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Vc(n){return Ct(n)&&!pt(n).n_()&&n.O_.length>0}function Nc(n){pt(n).start()}async function ug(n){pt(n).p_()}async function hg(n){const e=pt(n);for(const t of n.O_)e.m_(t.mutations)}async function dg(n,e,t){const i=n.O_.shift(),s=Vr.from(i,e,t);await xc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await cs(n)}async function fg(n,e){e&&pt(n).V_&&await async function(i,s){if(function(a){return tp(a)&&a!==P.ABORTED}(s.code)){const o=i.O_.shift();pt(i).s_(),await xc(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await cs(i)}}(n,e),Vc(n)&&Nc(n)}async function Ga(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const i=Ct(t);t.L_.add(3),await Yn(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ls(t)}async function pg(n,e){const t=B(n);e?(t.L_.delete(2),await ls(t)):e||(t.L_.add(2),await Yn(t),t.q_.set("Unknown"))}function nn(n){return n.K_||(n.K_=function(t,i,s){const o=B(t);return o.w_(),new Zp(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:sg.bind(null,n),Ro:rg.bind(null,n),mo:og.bind(null,n),d_:ag.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),$r(n)?jr(n):n.q_.set("Unknown")):(await n.K_.stop(),Dc(n))})),n.K_}function pt(n){return n.U_||(n.U_=function(t,i,s){const o=B(t);return o.w_(),new eg(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ug.bind(null,n),mo:fg.bind(null,n),f_:hg.bind(null,n),g_:dg.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await cs(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,i,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,o){const a=Date.now()+i,c=new qr(e,t,a,s,o);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zr(n,e){if(Ge("AsyncQueue",`${e}: ${n}`),Kn(n))return new N(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e?(t,i)=>e(t,i)||O.comparator(t.key,i.key):(t,i)=>O.comparator(t.key,i.key),this.keyedMap=bn(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new Bt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Bt;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.W_=new Y(O.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):L():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Xt{constructor(e,t,i,s,o,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Xt(e,t,Bt.emptySet(t),a,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ns(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class mg{constructor(){this.queries=Wa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const s=B(t),o=s.queries;s.queries=Wa(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(i)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Wa(){return new tn(n=>nc(n),ns)}async function _g(n,e){const t=B(n);let i=3;const s=e.query;let o=t.queries.get(s);o?!o.H_()&&e.J_()&&(i=2):(o=new gg,i=e.J_()?0:1);try{switch(i){case 0:o.z_=await t.onListen(s,!0);break;case 1:o.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=zr(a,`Initialization of query '${Ot(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Gr(t)}async function yg(n,e){const t=B(n),i=e.query;let s=3;const o=t.queries.get(i);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=e.J_()?0:1:!o.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function vg(n,e){const t=B(n);let i=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(i=!0);a.z_=s}}i&&Gr(t)}function Tg(n,e,t){const i=B(n),s=i.queries.get(e);if(s)for(const o of s.j_)o.onError(t);i.queries.delete(e)}function Gr(n){n.Y_.forEach(e=>{e.next()})}var fr,Ka;(Ka=fr||(fr={})).ea="default",Ka.Cache="cache";class Eg{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Xt(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Xt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==fr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.key=e}}class Mc{constructor(e){this.key=e}}class Ig{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=ic(e),this.Ra=new Bt(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Ha,s=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,I)=>{const b=s.get(p),S=is(this.query,I)?I:null,k=!!b&&this.mutatedKeys.has(b.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;b&&S?b.data.isEqual(S.data)?k!==V&&(i.track({type:3,doc:S}),D=!0):this.ga(b,S)||(i.track({type:2,doc:S}),D=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!b&&S?(i.track({type:0,doc:S}),D=!0):b&&!S&&(i.track({type:1,doc:b}),D=!0,(h||d)&&(c=!0)),D&&(S?(a=a.add(S),o=V?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),i.track({type:1,doc:p})}return{Ra:a,fa:i,ns:c,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,I)=>function(S,k){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return V(S)-V(k)}(p.type,I.type)||this.Aa(p.doc,I.doc)),this.pa(i),s=s!=null&&s;const c=t&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Xt(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ha,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=U(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new Mc(i))}),this.da.forEach(i=>{e.has(i)||t.push(new Oc(i))}),t}ba(e){this.Ta=e.Ts,this.da=U();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Xt.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wg{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Ag{constructor(e){this.key=e,this.va=!1}}class bg{constructor(e,t,i,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new tn(c=>nc(c),ns),this.Ma=new Map,this.xa=new Set,this.Oa=new Y(O.comparator),this.Na=new Map,this.La=new Mr,this.Ba={},this.ka=new Map,this.qa=Qt.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Sg(n,e,t=!0){const i=$c(n);let s;const o=i.Fa.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await Lc(i,e,t,!0),s}async function Rg(n,e){const t=$c(n);await Lc(t,e,!0,!1)}async function Lc(n,e,t,i){const s=await Hp(n.localStore,ke(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return i&&(c=await Pg(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Cc(n.remoteStore,s),c}async function Pg(n,e,t,i,s){n.Ka=(I,b,S)=>async function(V,D,j,H){let W=D.view.ma(j);W.ns&&(W=await $a(V.localStore,D.query,!1).then(({documents:v})=>D.view.ma(v,W)));const ee=H&&H.targetChanges.get(D.targetId),we=H&&H.targetMismatches.get(D.targetId)!=null,te=D.view.applyChanges(W,V.isPrimaryClient,ee,we);return Xa(V,D.targetId,te.wa),te.snapshot}(n,I,b,S);const o=await $a(n.localStore,e,!0),a=new Ig(e,o.Ts),c=a.ma(o.documents),h=Xn.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Xa(n,t,d.wa);const p=new wg(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Cg(n,e,t){const i=B(n),s=i.Fa.get(e),o=i.Ma.get(s.targetId);if(o.length>1)return i.Ma.set(s.targetId,o.filter(a=>!ns(a,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await dr(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Br(i.remoteStore,s.targetId),pr(i,s.targetId)}).catch(Wn)):(pr(i,s.targetId),await dr(i.localStore,s.targetId,!0))}async function kg(n,e){const t=B(n),i=t.Fa.get(e),s=t.Ma.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Br(t.remoteStore,i.targetId))}async function Dg(n,e,t){const i=Fg(n);try{const s=await function(a,c){const h=B(a),d=re.now(),p=c.reduce((S,k)=>S.add(k.key),U());let I,b;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=He(),V=U();return h.cs.getEntries(S,p).next(D=>{k=D,k.forEach((j,H)=>{H.isValidDocument()||(V=V.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,k)).next(D=>{I=D;const j=[];for(const H of c){const W=Xf(H,I.get(H.key).overlayedDocument);W!=null&&j.push(new Pt(H.key,W,Ql(W.value.mapValue),qe.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,j,c)}).next(D=>{b=D;const j=D.applyToLocalDocumentSet(I,V);return h.documentOverlayCache.saveOverlays(S,D.batchId,j)})}).then(()=>({batchId:b.batchId,changes:rc(I)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new Y(G)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(i,s.batchId,t),await Jn(i,s.changes),await cs(i.remoteStore)}catch(s){const o=zr(s,"Failed to persist write");t.reject(o)}}async function Fc(n,e){const t=B(n);try{const i=await qp(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Na.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?K(a.va):s.removedDocuments.size>0&&(K(a.va),a.va=!1))}),await Jn(t,i,e)}catch(i){await Wn(i)}}function Qa(n,e,t){const i=B(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Fa.forEach((o,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=B(a);h.onlineState=c;let d=!1;h.queries.forEach((p,I)=>{for(const b of I.j_)b.Z_(c)&&(d=!0)}),d&&Gr(h)}(i.eventManager,e),s.length&&i.Ca.d_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function xg(n,e,t){const i=B(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Na.get(e),o=s&&s.key;if(o){let a=new Y(O.comparator);a=a.insert(o,ye.newNoDocument(o,F.min()));const c=U().add(o),h=new os(F.min(),new Map,new Y(G),a,c);await Fc(i,h),i.Oa=i.Oa.remove(o),i.Na.delete(e),Hr(i)}else await dr(i.localStore,e,!1).then(()=>pr(i,e,t)).catch(Wn)}async function Vg(n,e){const t=B(n),i=e.batch.batchId;try{const s=await $p(t.localStore,e);Uc(t,i,null),Bc(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Jn(t,s)}catch(s){await Wn(s)}}async function Ng(n,e,t){const i=B(n);try{const s=await function(a,c){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,c).next(I=>(K(I!==null),p=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(i.localStore,e);Uc(i,e,t),Bc(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Jn(i,s)}catch(s){await Wn(s)}}function Bc(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Uc(n,e,t){const i=B(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),i.Ba[i.currentUser.toKey()]=s}}function pr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||jc(n,i)})}function jc(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Br(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Hr(n))}function Xa(n,e,t){for(const i of t)i instanceof Oc?(n.La.addReference(i.key,e),Og(n,i)):i instanceof Mc?(x("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||jc(n,i.key)):L()}function Og(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(x("SyncEngine","New document in limbo: "+t),n.xa.add(i),Hr(n))}function Hr(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new O(Z.fromString(e)),i=n.qa.next();n.Na.set(i,new Ag(t)),n.Oa=n.Oa.insert(t,i),Cc(n.remoteStore,new ot(ke(Dr(t.path)),i,"TargetPurposeLimboResolution",br.oe))}}async function Jn(n,e,t){const i=B(n),s=[],o=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((c,h)=>{a.push(i.Ka(h,e,t).then(d=>{var p;if((d||t)&&i.isPrimaryClient){const I=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;i.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){s.push(d);const I=Fr.Wi(h.targetId,d);o.push(I)}}))}),await Promise.all(a),i.Ca.d_(s),await async function(h,d){const p=B(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>R.forEach(d,b=>R.forEach(b.$i,S=>p.persistence.referenceDelegate.addReference(I,b.targetId,S)).next(()=>R.forEach(b.Ui,S=>p.persistence.referenceDelegate.removeReference(I,b.targetId,S)))))}catch(I){if(!Kn(I))throw I;x("LocalStore","Failed to update sequence numbers: "+I)}for(const I of d){const b=I.targetId;if(!I.fromCache){const S=p.os.get(b),k=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(k);p.os=p.os.insert(b,V)}}}(i.localStore,o))}async function Mg(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const i=await bc(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Jn(t,i.hs)}}function Lg(n,e){const t=B(n),i=t.Na.get(e);if(i&&i.va)return U().add(i.key);{let s=U();const o=t.Ma.get(e);if(!o)return s;for(const a of o){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function $c(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xg.bind(null,e),e.Ca.d_=vg.bind(null,e.eventManager),e.Ca.$a=Tg.bind(null,e.eventManager),e}function Fg(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ng.bind(null,e),e}class zi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=as(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return jp(this.persistence,new Bp,e.initialUser,this.serializer)}Ga(e){return new Mp(Lr.Zr,this.serializer)}Wa(e){return new Kp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zi.provider={build:()=>new zi};class gr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Qa(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mg.bind(null,this.syncEngine),await pg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mg}()}createDatastore(e){const t=as(e.databaseInfo.databaseId),i=function(o){return new Jp(o)}(e.databaseInfo);return function(o,a,c,h){return new tg(o,a,c,h)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,o,a,c){return new ig(i,s,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Qa(this.syncEngine,t,0),function(){return za.D()?new za:new Qp}())}createSyncEngine(e,t){return function(s,o,a,c,h,d,p){const I=new bg(s,o,a,c,h,d);return p&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=B(s);x("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Yn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}gr.provider={build:()=>new gr};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,i,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=_e.UNAUTHENTICATED,this.clientId=Hl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=zr(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Hs(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await bc(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress();const t=await jg(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Ga(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ga(e.remoteStore,s)),n._onlineComponents=e}async function jg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Gt("Error using user provided cache. Falling back to memory cache: "+t),await Hs(n,new zi)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Hs(n,new zi);return n._offlineComponents}async function qc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Ya(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Ya(n,new gr))),n._onlineComponents}function $g(n){return qc(n).then(e=>e.syncEngine)}async function qg(n){const e=await qc(n),t=e.eventManager;return t.onListen=Sg.bind(null,e.syncEngine),t.onUnlisten=Cg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Rg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kg.bind(null,e.syncEngine),t}function zg(n,e,t={}){const i=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const p=new Bg({next:b=>{p.Za(),a.enqueueAndForget(()=>yg(o,I));const S=b.docs.has(c);!S&&b.fromCache?d.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&b.fromCache&&h&&h.source==="server"?d.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(b)},error:b=>d.reject(b)}),I=new Eg(Dr(c.path),p,{includeMetadataChanges:!0,_a:!0});return _g(o,I)}(await qg(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e,t){if(!t)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hg(n,e,t,i){if(e===!0&&i===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Za(n){if(!O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L()}function $n(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wr(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zc((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kr{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new sf;switch(i.type){case"firstParty":return new lf(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Ja.get(t);i&&(x("ComponentProvider","Removing Datastore"),Ja.delete(t),i.terminate())}(this),Promise.resolve()}}function Wg(n,e,t,i={}){var s;const o=(n=$n(n,Kr))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Gt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let c,h;if(typeof i.mockUserToken=="string")c=i.mockUserToken,h=_e.MOCK_USER;else{c=Dh(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=i.mockUserToken.sub||i.mockUserToken.user_id;if(!d)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _e(d)}n._authCredentials=new rf(new Gl(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class be{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}}class qn extends Qr{constructor(e,t,i){super(e,t,Dr(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new O(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function mr(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=Hl.newId()),Gg("doc","path",e),n instanceof Kr){const i=Z.fromString(e,...t);return Za(i),new be(n,null,new O(i))}{if(!(n instanceof be||n instanceof qn))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Z.fromString(e,...t));return Za(i),new be(n.firestore,n instanceof qn?n.converter:null,new O(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Rc(this,"async_queue_retry"),this.Vu=()=>{const i=Gs();i&&x("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Gs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Gs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ut;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Kn(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(i);throw Ge("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=qr.createAndSchedule(this,e,t,i,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Xr extends Kr{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new tl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tl(e),this._firestoreClient=void 0,await e}}}function Kg(n,e){const t=typeof n=="object"?n:Ml(),i=typeof n=="string"?n:"(default)",s=wr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Ch("firestore");o&&Wg(s,...o)}return s}function Gc(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qg(n),n._firestoreClient}function Qg(n){var e,t,i;const s=n._freezeSettings(),o=function(c,h,d,p){return new Ef(c,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,zc(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Ug(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(he.fromBase64String(e))}catch(t){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Yt(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=/^__.*__$/;class Yg{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qn(e,this.data,t,this.fieldTransforms)}}function Wc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class eo{constructor(e,t,i,s,o,a){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new eo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:i,xu:!1});return s.Ou(e),s}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Gi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Wc(this.Cu)&&Xg.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Jg{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||as(e)}Qu(e,t,i,s=!1){return new eo({Cu:e,methodName:t,qu:i,path:ce.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zg(n){const e=n._freezeSettings(),t=as(n._databaseId);return new Jg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function em(n,e,t,i,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,s);Yc("Data must be an object, but it was:",a,i);const c=Qc(i,a);let h,d;if(o.merge)h=new Pe(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const I of o.mergeFields){const b=tm(e,I,t);if(!a.contains(b))throw new N(P.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);im(p,b)||p.push(b)}h=new Pe(p),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new Yg(new Ae(c),h,d)}function Kc(n,e){if(Xc(n=Ce(n)))return Yc("Unsupported field value:",e,n),Qc(n,e);if(n instanceof Hc)return function(i,s){if(!Wc(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,s){const o=[];let a=0;for(const c of i){let h=Kc(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(i,s){if((i=Ce(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return zf(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=re.fromDate(i);return{timestampValue:$i(s.serializer,o)}}if(i instanceof re){const o=new re(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:$i(s.serializer,o)}}if(i instanceof Jr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Yt)return{bytesValue:yc(s.serializer,i._byteString)};if(i instanceof be){const o=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Or(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Zr)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return xr(c.serializer,h)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${Wr(i)}`)}(n,e)}function Qc(n,e){const t={};return Wl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):en(n,(i,s)=>{const o=Kc(s,e.Mu(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function Xc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof Jr||n instanceof Yt||n instanceof be||n instanceof Hc||n instanceof Zr)}function Yc(n,e,t){if(!Xc(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=Wr(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function tm(n,e,t){if((e=Ce(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return Jc(n,e);throw Gi("Field path arguments must be of type string or ",n,!1,void 0,t)}const nm=new RegExp("[~\\*/\\[\\]]");function Jc(n,e,t){if(e.search(nm)>=0)throw Gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yr(...e.split("."))._internalPath}catch{throw Gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gi(n,e,t,i,s){const o=i&&!i.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${i}`),a&&(h+=` in document ${s}`),h+=")"),new N(P.INVALID_ARGUMENT,c+n+h)}function im(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,i,s,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sm extends Zc{data(){return super.data()}}function eu(n,e){return typeof e=="string"?Jc(n,e):e instanceof Yr?e._internalPath:e._delegate._internalPath}class rm{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return en(e,(s,o)=>{i[s]=this.convertValue(o,t)}),i}convertVectorValue(e){var t,i,s;const o=(s=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(a=>ne(a.doubleValue));return new Zr(o)}convertGeoPoint(e){return new Jr(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Rr(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ln(e));default:return null}}convertTimestamp(e){const t=ft(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Z.fromString(e);K(Ac(i));const s=new Fn(i.get(1),i.get(3)),o=new O(i.popFirst(5));return s.isEqual(t)||Ge(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tu extends Zc{constructor(e,t,i,s,o,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(eu("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class lm extends tu{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){n=$n(n,be);const e=$n(n.firestore,Xr);return zg(Gc(e),n._key).then(t=>hm(e,n,t))}class cm extends rm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function nu(n,e,t){n=$n(n,be);const i=$n(n.firestore,Xr),s=om(n.converter,e,t);return um(i,[em(Zg(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,qe.none())])}function um(n,e){return function(i,s){const o=new ut;return i.asyncQueue.enqueueAndForget(async()=>Dg(await $g(i),s,o)),o.promise}(Gc(n),e)}function hm(n,e,t){const i=t.docs.get(e._key),s=new cm(n);return new tu(n,s,e._key,i,new am(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Zt=s})(Jt),zt(new wt("firestore",(i,{instanceIdentifier:s,options:o})=>{const a=i.getProvider("app").getImmediate(),c=new Xr(new of(i.getProvider("auth-internal")),new uf(i.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ct(Ea,"4.7.3",e),ct(Ea,"4.7.3","esm2017")})();const dm={apiKey:"AIzaSyBXEK9qg-glaJ-vUjX0UkkQyAimNRZOaOo",authDomain:"cannonball-c6c51.firebaseapp.com",projectId:"cannonball-c6c51",storageBucket:"cannonball-c6c51.firebasestorage.app",messagingSenderId:"672576412698",appId:"1:672576412698:web:27f25b3b35d25c389fc5a3"};function to(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function iu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fm=iu,su=new Gn("auth","Firebase",iu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Er("@firebase/auth");function pm(n,...e){Hi.logLevel<=$.WARN&&Hi.warn(`Auth (${Jt}): ${n}`,...e)}function ki(n,...e){Hi.logLevel<=$.ERROR&&Hi.error(`Auth (${Jt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,...e){throw no(n,...e)}function xe(n,...e){return no(n,...e)}function ru(n,e,t){const i=Object.assign(Object.assign({},fm()),{[e]:t});return new Gn("auth","Firebase",i).create(e,{appName:n.name})}function ht(n){return ru(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function no(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return su.create(n,...e)}function M(n,e,...t){if(!n)throw no(e,...t)}function Ue(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ki(e),new Error(e)}function Ke(n,e){n||Ue(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gm(){return il()==="http:"||il()==="https:"}function il(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gm()||Oh()||"connection"in navigator)?navigator.onLine:!0}function _m(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ke(t>e,"Short delay should be less than long delay!"),this.isMobile=xh()||Mh()}get(){return mm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n,e){Ke(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Zn(3e4,6e4);function us(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function sn(n,e,t,i,s={}){return au(n,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const c=Hn(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return Nh()||(d.referrerPolicy="no-referrer"),ou.fetch()(cu(n,n.config.apiHost,t,c),d)})}async function au(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},ym),e);try{const s=new Tm(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw bi(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw bi(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw bi(n,"user-disabled",a);const p=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ru(n,p,d);We(n,p)}}catch(s){if(s instanceof Qe)throw s;We(n,"network-request-failed",{message:String(s)})}}async function lu(n,e,t,i,s={}){const o=await sn(n,e,t,i,s);return"mfaPendingCredential"in o&&We(n,"multi-factor-auth-required",{_serverResponse:o}),o}function cu(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?io(n.config,s):`${n.config.apiScheme}://${s}`}class Tm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(xe(this.auth,"network-request-failed")),vm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=xe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(n,e){return sn(n,"POST","/v1/accounts:delete",e)}async function uu(n,e){return sn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Im(n,e=!1){const t=Ce(n),i=await t.getIdToken(e),s=so(i);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:Dn(Ws(s.auth_time)),issuedAtTime:Dn(Ws(s.iat)),expirationTime:Dn(Ws(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ws(n){return Number(n)*1e3}function so(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cl(t);return s?JSON.parse(s):(ki("Failed to decode base64 JWT payload"),null)}catch(s){return ki("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sl(n){const e=so(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Qe&&wm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function wm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dn(this.lastLoginAt),this.creationTime=Dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await zn(n,uu(t,{idToken:i}));M(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?hu(o.providerUserInfo):[],c=Sm(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),p=h?d:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new yr(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,I)}async function bm(n){const e=Ce(n);await Wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sm(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function hu(n){return n.map(e=>{var{providerId:t}=e,i=to(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(n,e){const t=await au(n,{},async()=>{const i=Hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=cu(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ou.fetch()(a,{method:"POST",headers:c,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pm(n,e){return sn(n,"POST","/v2/accounts:revokeToken",us(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=sl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:o}=await Rm(e,t);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:o}=t,a=new Ut;return i&&(M(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(M(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ut,this.toJSON())}_performRefresh(){return Ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class je{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,o=to(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Am(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new yr(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await zn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Im(this,e)}reload(){return bm(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Wi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await zn(this,Em(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,o,a,c,h,d,p;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,b=(s=t.email)!==null&&s!==void 0?s:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,H=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:ee,isAnonymous:we,providerData:te,stsTokenManager:v}=t;M(W&&v,e,"internal-error");const g=Ut.fromJSON(this.name,v);M(typeof W=="string",e,"internal-error"),et(I,e.name),et(b,e.name),M(typeof ee=="boolean",e,"internal-error"),M(typeof we=="boolean",e,"internal-error"),et(S,e.name),et(k,e.name),et(V,e.name),et(D,e.name),et(j,e.name),et(H,e.name);const _=new je({uid:W,auth:e,email:b,emailVerified:ee,displayName:I,isAnonymous:we,photoURL:k,phoneNumber:S,tenantId:V,stsTokenManager:g,createdAt:j,lastLoginAt:H});return te&&Array.isArray(te)&&(_.providerData=te.map(y=>Object.assign({},y))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,i=!1){const s=new Ut;s.updateFromServerResponse(t);const o=new je({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Wi(o),o}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];M(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?hu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new Ut;c.updateFromIdToken(i);const h=new je({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new yr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Map;function $e(n){Ke(n instanceof Function,"Expected a class definition");let e=rl.get(n);return e?(Ke(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}du.type="NONE";const ol=du;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n,e,t){return`firebase:${n}:${e}:${t}`}class jt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Di(this.userKey,s.apiKey,o),this.fullPersistenceKey=Di("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new jt($e(ol),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||$e(ol);const a=Di(i,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const I=je._fromJSON(e,p);d!==o&&(c=I),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new jt(o,e,i):(o=h[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new jt(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yu(e))return"Blackberry";if(vu(e))return"Webos";if(pu(e))return"Safari";if((e.includes("chrome/")||gu(e))&&!e.includes("edge/"))return"Chrome";if(_u(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fu(n=ve()){return/firefox\//i.test(n)}function pu(n=ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gu(n=ve()){return/crios\//i.test(n)}function mu(n=ve()){return/iemobile/i.test(n)}function _u(n=ve()){return/android/i.test(n)}function yu(n=ve()){return/blackberry/i.test(n)}function vu(n=ve()){return/webos/i.test(n)}function ro(n=ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cm(n=ve()){var e;return ro(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function km(){return Lh()&&document.documentMode===10}function Tu(n=ve()){return ro(n)||_u(n)||vu(n)||yu(n)||/windows phone/i.test(n)||mu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n,e=[]){let t;switch(n){case"Browser":t=al(ve());break;case"Worker":t=`${al(ve())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((a,c)=>{try{const h=e(o);a(h)}catch(h){c(h)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(n,e={}){return sn(n,"GET","/v2/passwordPolicy",us(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=6;class Nm{constructor(e){var t,i,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Vm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,o,a,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ll(this),this.idTokenSubscription=new ll(this),this.beforeStateQueue=new Dm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=su,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$e(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await jt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await uu(this,{idToken:e}),i=await je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_m()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(ht(this));const t=e?Ce(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($e(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xm(this),t=new Nm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Pm(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$e(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await jt.create(this,[$e(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,i,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hs(n){return Ce(n)}class ll{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gh(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mm(n){oo=n}function Lm(n){return oo.loadJS(n)}function Fm(){return oo.gapiScript}function Bm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n,e){const t=wr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Oi(o,e??{}))return s;We(s,"already-initialized")}return t.initialize({options:e})}function jm(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map($e);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function $m(n,e,t){const i=hs(n);M(i._canInitEmulator,i,"emulator-config-failed"),M(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=Iu(e),{host:a,port:c}=qm(e),h=c===null?"":`:${c}`;i.config.emulator={url:`${o}//${a}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),zm()}function Iu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qm(n){const e=Iu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:cl(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:cl(a)}}}function cl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function zm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ue("not implemented")}_getIdTokenResponse(e){return Ue("not implemented")}_linkToIdToken(e,t){return Ue("not implemented")}_getReauthenticationResolver(e){return Ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(n,e){return lu(n,"POST","/v1/accounts:signInWithIdp",us(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="http://localhost";class Rt extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,o=to(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Rt(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return $t(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,$t(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$t(e,t)}buildRequest(){const e={requestUri:Gm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends ei{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return it.credential(t,i)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ei{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends ei{constructor(){super("twitter.com")}static credential(e,t){return Rt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return rt.credential(t,i)}catch{return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com";rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(n,e){return lu(n,"POST","/v1/accounts:signUp",us(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const o=await je._fromIdTokenResponse(e,i,s),a=ul(i);return new gt({user:o,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ul(i);return new gt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ul(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(n){var e;if(Be(n.app))return Promise.reject(ht(n));const t=hs(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new gt({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Hm(t,{returnSecureToken:!0}),s=await gt._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Qe{constructor(e,t,i,s){var o;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ki.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Ki(e,t,i,s)}}function bu(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ki._fromErrorAndOperation(n,o,e,i):o})}async function Km(n,e,t=!1){const i=await zn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(n,e,t=!1){const{auth:i}=n;if(Be(i.app))return Promise.reject(ht(i));const s="reauthenticate";try{const o=await zn(n,bu(i,s,e,n),t);M(o.idToken,i,"internal-error");const a=so(o.idToken);M(a,i,"internal-error");const{sub:c}=a;return M(n.uid===c,i,"user-mismatch"),gt._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&We(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(n,e,t=!1){if(Be(n.app))return Promise.reject(ht(n));const i="signIn",s=await bu(n,i,e),o=await gt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(o.user),o}function Ym(n,e,t,i){return Ce(n).onIdTokenChanged(e,t,i)}function Jm(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function Zm(n,e,t,i){return Ce(n).onAuthStateChanged(e,t,i)}const Qi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qi,"1"),this.storage.removeItem(Qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=1e3,t_=10;class Ru extends Su{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);km()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,t_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},e_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ru.type="LOCAL";const n_=Ru;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends Su{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pu.type="SESSION";const Cu=Pu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ds(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,o)),h=await i_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ds.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,h)=>{const d=ao("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(I){const b=I;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(b.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function r_(n){Ve().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function o_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function l_(){return ku()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="firebaseLocalStorageDb",c_=1,Xi="firebaseLocalStorage",xu="fbase_key";class ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fs(n,e){return n.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function u_(){const n=indexedDB.deleteDatabase(Du);return new ti(n).toPromise()}function vr(){const n=indexedDB.open(Du,c_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Xi,{keyPath:xu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Xi)?e(i):(i.close(),await u_(),e(await vr()))})})}async function hl(n,e,t){const i=fs(n,!0).put({[xu]:e,value:t});return new ti(i).toPromise()}async function h_(n,e){const t=fs(n,!1).get(e),i=await new ti(t).toPromise();return i===void 0?null:i.value}function dl(n,e){const t=fs(n,!0).delete(e);return new ti(t).toPromise()}const d_=800,f_=3;class Vu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>f_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ds._getInstance(l_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await o_(),!this.activeServiceWorker)return;this.sender=new s_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vr();return await hl(e,Qi,"1"),await dl(e,Qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>hl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>h_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=fs(s,!1).getAll();return new ti(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vu.type="LOCAL";const p_=Vu;new Zn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n,e){return e?$e(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $t(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $t(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $t(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function m_(n){return Xm(n.auth,new lo(n),n.bypassAuthState)}function __(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Qm(t,new lo(n),n.bypassAuthState)}async function y_(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Km(t,new lo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m_;case"linkViaPopup":case"linkViaRedirect":return y_;case"reauthViaPopup":case"reauthViaRedirect":return __;default:We(this.auth,"internal-error")}}resolve(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new Zn(2e3,1e4);class Ft extends Nu{constructor(e,t,i,s,o){super(e,t,s,o),this.provider=i,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Ke(this.filter.length===1,"Popup operations only handle one event");const e=ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v_.get())};e()}}Ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="pendingRedirect",xi=new Map;class E_ extends Nu{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=xi.get(this.auth._key());if(!e){try{const i=await I_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}xi.set(this.auth._key(),e)}return this.bypassAuthState||xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I_(n,e){const t=b_(e),i=A_(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function w_(n,e){xi.set(n._key(),e)}function A_(n){return $e(n._redirectPersistence)}function b_(n){return Di(T_,n.config.apiKey,n.name)}async function S_(n,e,t=!1){if(Be(n.app))return Promise.reject(ht(n));const i=hs(n),s=g_(i,e),a=await new E_(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=10*60*1e3;class P_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ou(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=R_&&this.cachedEventUids.clear(),this.cachedEventUids.has(fl(e))}saveEventToCache(e){this.cachedEventUids.add(fl(e)),this.lastProcessedEventTime=Date.now()}}function fl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ou({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ou(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(n,e={}){return sn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x_=/^https?/;async function V_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await k_(n);for(const t of e)try{if(N_(t))return}catch{}We(n,"unauthorized-domain")}function N_(n){const e=_r(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!x_.test(t))return!1;if(D_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new Zn(3e4,6e4);function pl(){const n=Ve().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function M_(n){return new Promise((e,t)=>{var i,s,o;function a(){pl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pl(),t(xe(n,"network-request-failed"))},timeout:O_.get()})}if(!((s=(i=Ve().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Ve().gapi)===null||o===void 0)&&o.load)a();else{const c=Bm("iframefcb");return Ve()[c]=()=>{gapi.load?a():t(xe(n,"network-request-failed"))},Lm(`${Fm()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw Vi=null,e})}let Vi=null;function L_(n){return Vi=Vi||M_(n),Vi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Zn(5e3,15e3),B_="__/auth/iframe",U_="emulator/auth/iframe",j_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function q_(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?io(e,U_):`https://${n.config.authDomain}/${B_}`,i={apiKey:e.apiKey,appName:n.name,v:Jt},s=$_.get(n.config.apiHost);s&&(i.eid=s);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${Hn(i).slice(1)}`}async function z_(n){const e=await L_(n),t=Ve().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:q_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j_,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=xe(n,"network-request-failed"),c=Ve().setTimeout(()=>{o(a)},F_.get());function h(){Ve().clearTimeout(c),s(i)}i.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H_=500,W_=600,K_="_blank",Q_="http://localhost";class gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X_(n,e,t,i=H_,s=W_){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const h=Object.assign(Object.assign({},G_),{width:i.toString(),height:s.toString(),top:o,left:a}),d=ve().toLowerCase();t&&(c=gu(d)?K_:t),fu(d)&&(e=e||Q_,h.scrollbars="yes");const p=Object.entries(h).reduce((b,[S,k])=>`${b}${S}=${k},`,"");if(Cm(d)&&c!=="_self")return Y_(e||"",c),new gl(null);const I=window.open(e||"",c,p);M(I,n,"popup-blocked");try{I.focus()}catch{}return new gl(I)}function Y_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="__/auth/handler",Z_="emulator/auth/handler",ey=encodeURIComponent("fac");async function ml(n,e,t,i,s,o){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Jt,eventId:s};if(e instanceof Au){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,I]of Object.entries({}))a[p]=I}if(e instanceof ei){const p=e.getScopes().filter(I=>I!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const h=await n._getAppCheckToken(),d=h?`#${ey}=${encodeURIComponent(h)}`:"";return`${ty(n)}?${Hn(c).slice(1)}${d}`}function ty({config:n}){return n.emulator?io(n,Z_):`https://${n.authDomain}/${J_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="webStorageSupport";class ny{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cu,this._completeRedirectFn=S_,this._overrideRedirectResult=w_}async _openPopup(e,t,i,s){var o;Ke((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ml(e,t,i,_r(),s);return X_(e,a,ao())}async _openRedirect(e,t,i,s){await this._originValidation(e);const o=await ml(e,t,i,_r(),s);return r_(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Ke(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await z_(e),i=new P_(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ks,{type:Ks},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Ks];a!==void 0&&t(!!a),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=V_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tu()||pu()||ro()}}const iy=ny;var _l="@firebase/auth",yl="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oy(n){zt(new wt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eu(n)},d=new Om(i,s,o,h);return jm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),zt(new wt("auth-internal",e=>{const t=hs(e.getProvider("auth").getImmediate());return(i=>new sy(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(_l,yl,ry(n)),ct(_l,yl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=5*60,ly=xl("authIdTokenMaxAge")||ay;let vl=null;const cy=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ly)return;const s=t==null?void 0:t.token;vl!==s&&(vl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uy(n=Ml()){const e=wr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Um(n,{popupRedirectResolver:iy,persistence:[p_,n_,Cu]}),i=xl("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=cy(o.toString());Jm(t,a,()=>a(t.currentUser)),Ym(t,c=>a(c))}}const s=kl("auth");return s&&$m(t,`http://${s}`),t}function hy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Mm({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const o=xe("internal-error");o.customData=s,t(o)},i.type="text/javascript",i.charset="UTF-8",hy().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oy("Browser");const Mu=Ol(dm),Tl=uy(Mu),qt=Kg(Mu);function dy(){return new Promise((n,e)=>{Wm(Tl).catch(t=>{console.error(t.code),console.error(t.message),document.body.innerHTML=`
            <div id="mainDiv">
              <div class="jspsych-display-element">
                <h1>Oops</h1>
                Looks like there's a problem! Try hard refreshing your browser (Ctrl + F5).
                <br><br>
                Thank you!
              </div>
            </div>`,e(t)}),Zm(Tl,t=>{if(t){const i=t.uid;n(i)}})})}function fy(n){if(n.length===0)throw new Error("The array is empty.");return Tr[Math.floor(Math.random()*Tr.length)]}const Tr=["trial_info_model-free_LW_SF.json","trial_info_model-free_LW_VF.json","trial_info_model-free_RW_SF.json","trial_info_model-free_RW_VF.json"],Lu={redirectURL:"https://app.prolific.com/submissions/complete?cc=CC6FNRFD",alienSpeed:120,debugPhysics:!1,dataSaveInterval:5,MB:{showExplodeChanceBars:!1,showBallColourProbabilities:!1,ballsAreGrey:!1,leftPinkChance:.7,rightPinkChance:.3,showBrokenInstructions:!0,trialInfoFile:"trial_info_transition-learning.json"},MBMF:{showExplodeChanceBars:!1,showBallColourProbabilities:!0,ballsAreGrey:!1,leftPinkChance:.7,rightPinkChance:.3,showBrokenInstructions:!1,trialInfoFile:"trial_info_two-step.json"},MF:{showExplodeChanceBars:!1,showBallColourProbabilities:!1,ballsAreGrey:!0,leftPinkChance:-1,rightPinkChance:-1,showBrokenInstructions:!1,trialInfoFile:fy(Tr)}};async function py(n,e){if(!qt){console.error("Firestore database not initialized.");return}const t=n.config.uid,i=`Cannonball_MF_test_retest_3sessions/session ${e}/subjects`,s=`Cannonball_MF_test_retest_3sessions/session ${e-1}/subjects`,o=mr(qt,i,t);try{if((await nl(o)).exists()){console.log(`Participant already exists in session ${e}`);return}let c=Lu.MF.trialInfoFile;if(e>1){const h=mr(qt,s,t),d=await nl(h);d.exists()?(c=d.data().trial_info_file,console.log(`Using trial info file from session ${e-1}: ${c}`)):console.warn(`No data found for participant in session ${e-1}`)}await nu(o,{subjectID:n.registry.get("subjectID"),date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString(),trial_info_file:c,trial_data:[],attention_checks:[]},{merge:!0}),console.log(`Participant initialized for session ${e} with trial info file: ${c}`)}catch(a){console.error(`Error initializing participant for session ${e}:`,a)}}function gy(n,e){const{redirectURL:t,alienSpeed:i,debugPhysics:s,dataSaveInterval:o,MB:a}=Lu;switch(n.registry.set("trial",0),n.registry.set("data",{}),n.registry.set("redirectURL",t),n.registry.set("alienSpeed",i),n.registry.set("debugPhysics",s),n.registry.set("dataSaveInterval",o),e){case"MB":Qs(n,a);break;case"MBMF":Qs(n,a);break;case"MF":Qs(n,a);break;default:throw new Error("Invalid task type")}}function Qs(n,e){Object.keys(e).forEach(t=>{n.registry.set(t,e[t])})}let wn=n=>{const t=window.location.search.substring(1).split("&");for(const i of t.map(s=>s.split("=")))if(i[0]===n)return i[1];return!1};function my(){var n=new URLSearchParams(window.location.search),e=n.has("PROLIFIC_PID")?wn("PROLIFIC_PID"):Math.floor(Math.random()*2000001),t=n.has("TEST")?wn("TEST"):"FALSE",i=n.has("STUDY")?wn("STUDY"):"NONE",s=n.has("SHORT"),o=n.has("TASK")?wn("TASK"):"MB",a=n.has("SESSION")?parseInt(wn("SESSION"),10):1;return{subjectID:e,testing:t,studyID:i,short:s,task:o,session:a}}class Re extends Phaser.GameObjects.Container{constructor(e,t,i,s,o,a,c=1,h=15,d="down",p="",I=100){let b,S;d=="down"?(b=i+o/2,S=1):d=="up"&&(b=i-o/6,S=-1);const k=e.add.triangle(a,b,0,0,s/5,0,0+s/10,S*40,"0xe8e8e8");k.setOrigin(.5,.5),k.setScale(c),k.setDepth(I-1);const V=e.add.rectangle(t,i,s,o,"0xe8e8e8");V.setOrigin(.5),V.setDepth(I);const D=e.add.text(t,i,"Test",{color:"0xff0000",fontFamily:"Rubik",fontSize:h,wordWrap:{width:s*.95}});D.setOrigin(.5),D.setDepth(I+1),D.setAlign("center");const j=e.add.text(t,i+o/3.5,p,{color:"#8c8c8c",fontFamily:"Rubik",fontSize:h*.8,wordWrap:{width:s*.95}});j.setOrigin(.5),j.setDepth(I+1),super(e,0,0,[k,V,D,j]),e.add.existing(this),this.bubbleText=D,this.setDepth(20)}setText(e){this.bubbleText.text=e}show(){this.setVisible(!0)}hide(){this.setVisible(!1)}}const xn=class xn{static preloadAssets(e){e.load.image("cannon_pointer","/assets/cannon_pointer.png"),e.load.image("mask","/assets/mask.png"),xn.assetsPreloaded=!0}constructor(e){if(!xn.assetsPreloaded)throw new Error("Assets for CannonPointer have not been preloaded.");this.scene=e,this.createCannonPointer(),this.createCannonPointerMask()}createCannonPointer(){this.cannonPointer=this.scene.physics.add.sprite(250,545,"cannon_pointer").setOrigin(1,1).setDepth(-2).setScale(1.5)}createCannonPointerMask(){this.mask=this.scene.add.image(0,0,"mask").setScale(1).setOrigin(0,0).setDepth(-1).setVisible(!1)}setRotation(e){this.cannonPointer.rotation=e}show(){this.cannonPointer.setVisible(!0),this.mask.setVisible(!0)}hide(){this.cannonPointer.setVisible(!1),this.mask.setVisible(!1)}};Nt(xn,"assetsPreloaded",!1);let Yi=xn;class Xs{static preloadAssets(e,t){e.load.image("ball_container_ring",`${t}/ball_container_ring.png`),e.load.image("blocked",`${t}/blocked.png`),["pink","purple","grey"].forEach(s=>{e.textures.exists(`ball_${s}`)||e.load.image(`ball_${s}`,`${t}/ball_${s}.png`)})}constructor(e,t,i,s=!1){this.ring=e.add.image(t,i,"ball_container_ring"),this.ring.setScale(.04),this.ring.setOrigin(.5),this.ring.setDepth(11),this.blockedIndicator=e.add.image(t,i,"blocked"),this.blockedIndicator.setScale(.5),this.blockedIndicator.visible=!1,this.blockedIndicator.setDepth(16),this.blocked=!1,this.scene=e,this.showBallColourProbs=s,this.pinkProb=0,s&&(this.ring.setScale(.07),this.createBalls(),this.updateBallColourProbabilities(this.pinkProb))}createBalls(){this.balls=this.scene.physics.add.group({key:"ball_grey",repeat:9,setXY:{x:this.ring.x,y:this.ring.y,stepX:0}}),this.boundaryCircle=new Phaser.Geom.Circle(this.ring.x,this.ring.y,15),this.balls.children.iterate(e=>{e.setScale(.2),e.setCollideWorldBounds(!0),e.setBounce(1),e.setVelocity(Phaser.Math.Between(-50,50),Phaser.Math.Between(-50,50)),e.setDepth(15)})}update(){this.blocked||(this.ring.rotation+=.01),this.showBallColourProbs&&this.balls.children.iterate(e=>{if(!this.boundaryCircle.contains(e.x,e.y)){e.rotation+=.05;let t=new Phaser.Math.Vector2(this.boundaryCircle.x-e.x,this.boundaryCircle.y-e.y).normalize();e.x+=t.x*2,e.y+=t.y*2;let i=Phaser.Math.FloatBetween(0,2*Math.PI),a=new Phaser.Math.Vector2(Math.cos(i),Math.sin(i)).normalize().scale(50);e.body.velocity.set(a.x,a.y)}})}setBlocked(e){this.blocked=e,this.blockedIndicator.visible=e}flash(){this.ring.alpha!=1&&(this.ring.alpha=1),this.blocked?this.scene.tweens.add({targets:this,alpha:.6,duration:100,ease:"Quad",repeat:0,yoyo:!0,callbackScope:this}):this.scene.tweens.add({targets:this.ring,alpha:.2,duration:100,ease:"Quad",repeat:0,yoyo:!0,callbackScope:this})}updateBallColourProbabilities(e){if(this.pinkProb<0){this.balls.children.iterate(t=>{t.setTexture("ball_grey")});return}else{this.pinkProb=e;let t=Math.floor(10*e);for(let i=0;i<t;i++)this.balls.children.entries[i].setTexture("ball_pink");for(let i=t;i<10;i++)this.balls.children.entries[i].setTexture("ball_purple")}}}class El extends Phaser.GameObjects.Image{constructor(e,t,i,s=!1){super(e,t,i,"cannon"),this.pointer=new Yi(e),e.add.existing(this),this.scene=e,this.setScale(.1),this.setOrigin(.5,.6666),this.cannonStuff=e.add.image(t,i+15,"cannon_stuff"),this.cannonStuff.setScale(.15),this.cannonStuff.setOrigin(.5),this.cannonStuff.setDepth(10),this.setDepth(9),this.showBallColourProbs=s,this.ball_container_left=new Xs(e,137.51,548.5,s),this.ball_container_right=new Xs(e,358.5,548.5,s),this.frozen=!1}static preloadAssets(e,t){e.load.image("cannon",`${t}/cannon.png`),e.load.image("cannon_stuff",`${t}/cannon_stuff.png`),Yi.preloadAssets(e),Xs.preloadAssets(e,t)}setFrozen(e){this.frozen=e}update(){this.frozen||(this.rotation=Phaser.Math.Angle.BetweenPoints(this,this.scene.input.activePointer)+1.5708,this.pointer.setRotation(Phaser.Math.Angle.BetweenPoints(this.pointer.cannonPointer,this.scene.input.activePointer)+1.5708),this.rotation>1.22173?this.rotation=1.22173:this.rotation<-1.22173&&(this.rotation=-1.22173)),this.ball_container_left.update(),this.ball_container_right.update()}showPointer(){this.pointer.show()}hidePointer(){this.pointer.hide()}flashContainer(e){(e===0?this.ball_container_left:this.ball_container_right).flash()}blockContainer(e){(e===0?this.ball_container_left:this.ball_container_right).setBlocked(!0)}unblockContainers(){this.ball_container_left.setBlocked(!1),this.ball_container_right.setBlocked(!1)}updateBallColourProbabilities(e,t){this.showBallColourProbs&&(this.ball_container_left.updateBallColourProbabilities(e),this.ball_container_right.updateBallColourProbabilities(t))}}const Vn=class Vn extends Phaser.Physics.Arcade.Sprite{static preloadAssets(e,t,i,s,o){t.forEach(a=>{e.load.image(`ball_${a}`,`${i}/ball_${a}.png`),e.load.spritesheet(`ball_${a}_explode`,`${i}/ball_${a}_explode.png`,s)}),e.load.spritesheet("ball_grey_explode",`${i}_grey_explode.png`,o),Vn.assetsPreloaded=!0}constructor(e,t,i,s,o){if(!Vn.assetsPreloaded)throw new Error("Assets for Ball have not been preloaded.");super(e,t,i,`ball_${s}`),e.add.existing(this),e.physics.add.existing(this),this.scene=e,this.rotationSpeed=o,this.originalColour=s,this.currentColour=s,this.setInitialProperties(e),this.createExplosionAnimations(e),this.createExplosionGroup(e),this.visible=!1,this.setDepth(5)}setInitialProperties(e){this.setScale(.4),this.setBounce(1),this.setCollideWorldBounds(!0),this.setData("colour",this.currentColour)}resetPosition(){this.x=20,this.y=20,this.setVelocity(0),this.visible=!1,this.alpha=1}moveToBottom(){this.y=620}createExplosionAnimations(e){e.ballColours.forEach(t=>{e.anims.get(`ball_${t}_explode`)||e.anims.create({key:`ball_${t}_explode`,frames:e.anims.generateFrameNumbers(`ball_${t}_explode`,{start:0,end:6}),frameRate:50,maxsize:30,repeat:0,hideOnComplete:!0})}),this.explosionKey=`ball_${this.currentColour}_explode`}createExplosionGroup(e){e.ballColours.forEach(t=>{this[`${t}Explosions`]=e.add.group({defaultKey:`ball_${t}_explode`,maxSize:30})})}setGrey(){this.setTexture("ball_grey"),this.currentColour="grey",this.explosionKey="ball_grey_explode",this.setData("colour","grey")}setColoured(){this.setTexture(`ball_${this.originalColour}`),this.currentColour=this.originalColour,this.explosionKey=`ball_${this.originalColour}_explode`,this.setData("colour",this.originalColour)}explode(){this.scene.time.delayedCall(150,()=>{let t=this[this.currentColour+"Explosions"].get(this.x,this.y);t&&(t.setActive(!0).setVisible(!0),this.setVelocity(0),this.setVisible(!1),t.play(this.explosionKey),t.once("animationcomplete",()=>{t.setActive(!1).setVisible(!1),this.emit("exploded",this)}))},[],this)}fire(e,t){e=="left"?(this.x=150,this.y=560,this.rotationSpeed=.2):(this.x=350,this.y=560,this.rotationSpeed=-.2),this.scene.ballColour=this.currentColour,this.scene.confidenceShown&&this.scene.cannon.setFrozen(!0),this.visible=!0,this.scene.tweens.add({targets:this,x:250,duration:1e3,ease:"Quad",repeat:0,yoyo:!1,onComplete:()=>{this.x=this.scene.cannon.x,this.y=this.scene.cannon.y,this.setVelocity(Math.cos(this.scene.cannon.rotation-Math.PI/2)*1e3,Math.sin(this.scene.cannon.rotation-Math.PI/2)*1e3),this.scene.cannon.setFrozen(!1),this.emit("fired",this),t?this.explode():this.scene.exploded=!1}})}update(){this.rotation+=this.rotationSpeed,this.y>620&&this.visible&&this.body.velocity.length()>0&&this.alpha!==0&&(this.setVelocity(0),this.setVisible(!1),this.emit("offScreen",this)),this.y<50&&this.emit("missed",this)}};Nt(Vn,"assetsPreloaded",!1);let tt=Vn;const Nn=class Nn{static preloadAssets(e,t){if(typeof t!="string"||t.trim()==="")throw new Error("starImagePath must be a valid string.");e.load.image("star",t),Nn.assetsPreloaded=!0}constructor(e,t={}){if(!Nn.assetsPreloaded)throw new Error("Assets for TwinklingStars have not been preloaded. Call 'TwinklingStars.preloadAssets' in the scene's 'preload' method.");const i={numberOfStars:30,minX:0,maxX:800,minY:0,maxY:600,initialScale:.2,initialAlpha:.5,endScale:.3,endAlpha:.9,minDuration:1e3,maxDuration:3e3,ease:"Quad"};this.options=Object.assign({},i,t),this.scene=e,this.createStars()}createStars(){for(let e=0;e<this.options.numberOfStars;e++){let t=Phaser.Math.Between(this.options.minX,this.options.maxX),i=Phaser.Math.Between(this.options.minY,this.options.maxY),s=this.scene.add.image(t,i,"star").setScale(this.options.initialScale).setDepth(0).setAlpha(this.options.initialAlpha);this.scene.tweens.add({targets:s,scaleX:this.options.endScale,scaleY:this.options.endScale,alpha:this.options.endAlpha,duration:Phaser.Math.Between(this.options.minDuration,this.options.maxDuration),ease:this.options.ease||"Quad",yoyo:!0,repeat:-1})}}};Nt(Nn,"assetsPreloaded",!1);let Ji=Nn;class Il extends Phaser.Physics.Arcade.Sprite{static preloadAssets(e,t){e.load.image("alien",`${t}/spaceship4.png`)}constructor(e,t,i,s=50){super(e,t,i,"alien"),e.add.existing(this),e.physics.add.existing(this),this.setOrigin(.5),this.setCollideWorldBounds(!0),this.body.checkCollision.up=!0,this.body.checkCollision.down=!0,this.body.checkCollision.left=!0,this.body.checkCollision.right=!0,this.setBounce(1,1),this.setScale(.5),this.speed=s,this.createInvisibleLine(e,300),this.createInvisibleLine(e,90),this.moving=!0}createInvisibleLine(e,t){const i=e.add.rectangle(0,t,2e3,1,0);e.physics.add.existing(i,!0),i.visible=!1,e.physics.add.collider(this,i)}setMoving(e){this.moving=e,e?(this.visible=!0,this.body.enable=!0,this.setVelocityX(this.speed)):(this.visible=!1,this.body.enable=!1,this.setVelocityX(0))}reset(){this.scene.tweens.add({targets:this,scaleX:.8,scaleY:.8,duration:100,ease:"Quad",repeat:0,yoyo:!0,onComplete:()=>{this.visible=!1,this.scene.time.delayedCall(700,()=>{this.scene.trialType!="confidence"&&(this.visible=!0),this.x=Math.random()*300+100,this.y=Math.random()*100+150,this.setScale(.5)},[],this)},callbackScope:this})}}class _y{constructor(e){this.scene=e,this.score=0,this.scoreText=e.add.text(110,10,"Score",{color:"white",fontFamily:"Rubik",fontSize:"20px"}),this.scoreValueText=e.add.text(165,30,this.score.toString(),{color:"#FF0180",fontFamily:"Rubik",fontSize:"20px"}),this.scoreValueText.setOrigin(1,0)}updateScore(e){this.score=e,this.scoreValueText.setText(this.score.toString())}}class yy{constructor(e,t){this.scene=e,this.totalTrials=t,this.trialNumber=0,this.attemptsText=e.add.text(250,32,this.totalTrials-this.trialNumber,{color:"#FF0180",fontFamily:"Rubik",fontSize:"45px"}),this.attemptsText.setOrigin(.5)}updateTrial(e,t){this.attemptsText.setText(e-t)}}class wl{static preloadAssets(e,t){e.load.image("alien",`${t}/spaceship4.png`)}constructor(e){this.scene=e,this.alienCount=0,this.alienIcon=e.add.image(330,32,"alien"),this.alienIcon.setScale(.2),this.alienIcon.setOrigin(.5),this.alienCounterText=e.add.text(355,22,"x "+this.alienCount,{color:"#FF0180",fontFamily:"Rubik",fontSize:"20px"})}updateAlienCount(e){this.alienCount=e,this.alienCounterText.setText("x "+this.alienCount)}}class Al{static preloadAssets(e,t){e.load.image("explode_icon",`${t}/explode_icon.png`),e.load.image("safe_icon",`${t}/safe_icon.png`),e.load.image("blocked_indicator",`${t}/blocked_indicator.png`)}constructor(e){this.scene=e,this.pinkBallExplodeChance=.5,this.purpleBallExplodeChance=.5,this.barBackground1=e.add.rectangle(125,65,250,10,1842204),this.barBackground1.setStrokeStyle(0,"white"),this.barBackground1.setOrigin(0,.5),this.barBackground1.setFillStyle("0xaba9a9"),this.barBackground2=e.add.rectangle(125,80,250,10,1842204),this.barBackground2.setStrokeStyle(0,"white"),this.barBackground2.setOrigin(0,.5),this.barBackground2.setFillStyle("0xaba9a9"),this.bar1=e.add.rectangle(125,65,250,10,1842204),this.bar1.setStrokeStyle(0,"white"),this.bar1.setOrigin(0,.5),this.bar1.setFillStyle("0xFF0180"),this.bar1.setScale(1-this.pinkBallExplodeChance,1),this.bar2=e.add.rectangle(125,80,250,10,1842204),this.bar2.setStrokeStyle(0,"white"),this.bar2.setOrigin(0,.5),this.bar2.setFillStyle("0x6A00FF"),this.bar2.setScale(1-this.purpleBallExplodeChance,1),this.explodeIcon=e.add.image(115,72.5,"explode_icon"),this.explodeIcon.setOrigin(1,.5),this.explodeIcon.setScale(.4),this.safeIcon=e.add.image(385,72.5,"safe_icon"),this.safeIcon.setOrigin(0,.5),this.safeIcon.setScale(.5),this.blockedIndicator=e.add.image(125,72.5,"blocked_indicator"),this.blockedIndicator.setOrigin(0,.5),this.blockedIndicator.visible=!1}updateExplodeChanceBars(e,t){this.pinkBallExplodeChance=1-e,this.purpleBallExplodeChance=1-t,this.scene.tweens.add({targets:this.bar1,scaleX:1-this.pinkBallExplodeChance,duration:500,ease:"Quad",repeat:0,yoyo:!1}),this.scene.tweens.add({targets:this.bar2,scaleX:1-this.purpleBallExplodeChance,duration:500,ease:"Quad",repeat:0,yoyo:!1})}setBlocked(e){e&&this.updateExplodeChanceBars(0,0),this.blockedIndicator.visible=e}}class bl{static preloadAssets(e,t){wl.preloadAssets(e,t),Al.preloadAssets(e,t)}constructor(e,t,i=!0){this.scene=e,this.score=new _y(e),this.attemptsCounter=new yy(e,t),this.alienCounter=new wl(e),this.showExplodeChanceBars=i,i&&(this.explodeBars=new Al(e))}updateScore(e){this.score.updateScore(e)}updateTrial(e,t){this.attemptsCounter.updateTrial(e,t)}resetTrials(){this.attemptsCounter.resetTrials()}updateAlienCount(e){this.alienCounter.updateAlienCount(e)}updateExplodeChanceBars(e,t){this.showExplodeChanceBars&&this.explodeBars.updateExplodeChanceBars(e,t)}setBlocked(e){this.showExplodeChanceBars&&this.explodeBars.setBlocked(e)}}class vy extends Phaser.GameObjects.Text{constructor(e,t,i,s){super(e,t,i,s,{color:"#292929",fontFamily:"Rubik",fontSize:"60px"}),this.setOrigin(.5),this.visible=!1,e.add.existing(this)}setBonusText(e){this.setText(e)}setBonusTextColour(e){this.setColor(e)}reset(){this.visible=!1,this.alpha=1,this.scaleX=1,this.scaleY=1}show(e=1e3,t=1.5,i=400){this.scene.time.delayedCall(i,()=>{this.visible=!0,this.scene.tweens.add({targets:this,scaleX:t,scaleY:t,alpha:0,duration:e,ease:"Quad",repeat:0,delay:200,yoyo:!1,onComplete:()=>{this.visible=!1,this.emit("shown")},callbackScope:this})})}}class Ty extends Phaser.GameObjects.Text{constructor(e,t=250,i=200,s="Bonus Round!",o={}){super(e,t,i,s,{color:"#FF0180",fontFamily:"Rubik",fontSize:"50px",...o}),this.setOrigin(.5),this.visible=!1,e.add.existing(this)}flash(){this.visible=!0,this.setAlpha(1),this.setScale(1,1),this.scene.tweens.add({targets:this,scaleX:1.5,scaleY:1.5,alpha:0,duration:1e3,ease:"Quad",repeat:0,delay:200,yoyo:!1,onComplete:()=>{this.visible=!1,this.setAlpha(1),this.setScale(1,1)},callbackScope:this})}}class Ey extends Phaser.GameObjects.Text{constructor(e,t=250,i=200,s="1000 points!",o={}){super(e,t,i,s,{color:"#ffffff",fontFamily:"Rubik",fontSize:"50px",...o}),this.setOrigin(.5),this.visible=!1,e.add.existing(this)}flash(e){this.setText(e+" points!"),this.setScale(.3,.3),this.visible=!0,this.alpha=1,this.scene.tweens.add({targets:this,scaleX:1,scaleY:1,alpha:0,duration:1e3,ease:"Quad",repeat:0,delay:200,yoyo:!1,onComplete:()=>{this.scene.tweens.add({targets:this,alpha:0,duration:1e3,ease:"Quad",repeat:0,delay:1e3,yoyo:!1,onComplete:()=>{this.visible=!1}})}})}}class Iy extends Phaser.Physics.Arcade.Sprite{constructor(e,t,i,s,o,a){super(e,t,i,s),this.scene=e,this.color=o,this.baseValue=a,this.setScale(.3),this.setAlpha((a+1)/6),this.setData("betAmount",(a+1)*10),this.setData("colour",o),this.setData("baseValue",a),e.add.existing(this),e.physics.add.existing(this)}explode(){this.scene.tweens.add({targets:this,scaleX:.75,scaleY:.75,duration:100,ease:"Quad",repeat:0,yoyo:!0,onComplete:()=>{this.visible=!1,this.onExplodeComplete()},callbackScope:this})}onExplodeComplete(){}}class Sl{static preloadAssets(e,t){e.load.image("asteroid_pink_1",`${t}/asteroid_pink1.png`),e.load.image("asteroid_pink_2",`${t}/asteroid_pink2.png`),e.load.image("asteroid_pink_3",`${t}/asteroid_pink3.png`),e.load.image("asteroid_pink_4",`${t}/asteroid_pink4.png`),e.load.image("asteroid_pink_5",`${t}/asteroid_pink5.png`),e.load.image("asteroid_purple_1",`${t}/asteroid_purple1.png`),e.load.image("asteroid_purple_2",`${t}/asteroid_purple2.png`),e.load.image("asteroid_purple_3",`${t}/asteroid_purple3.png`),e.load.image("asteroid_purple_4",`${t}/asteroid_purple4.png`),e.load.image("asteroid_purple_5",`${t}/asteroid_purple5.png`)}constructor(e,t,i,s,o,a){this.scene=e,this.centerX=t,this.centerY=i,this.radius=s,this.numSprites=o;const c=Math.PI/1.8,h=Math.PI/1.3,d=Math.PI/4.4,p=Math.PI/2.2,I=(h-c)/(o-1),b=(p-d)/(o-1);this.asteroidGroup=e.physics.add.group(),this.asteroidTextGroup=e.add.group();for(let S=0;S<o;S++)this.addAsteroid(S,c,I,`asteroid_pink_${S+1}`,"#FF0180","pink",a,0),this.addAsteroid(S,d,b,`asteroid_purple_${o-S}`,"#b078ff","purple",a,1);this.hide()}addAsteroid(e,t,i,s,o,a,c,h){const d=t+e*i,p=this.centerX+this.radius*Math.cos(d),I=this.centerY-this.radius*Math.sin(d),b=h===0?e:this.numSprites-(e+1),S=new Iy(this.scene,p,I,s,a,b);S.onExplodeComplete=()=>{this.hide()},this.scene.physics.add.overlap(S,this.scene.ball_pink,c,null,this.scene),this.scene.physics.add.overlap(S,this.scene.ball_purple,c,null,this.scene);const k=this.scene.add.text(p,I-30,`${e+1}`,{color:o,fontFamily:"Rubik",fontSize:"18px"});k.setOrigin(.5),h==0?k.setData("baseValue",e+1):k.setData("baseValue",this.numSprites-e),this.asteroidGroup.add(S),this.asteroidTextGroup.add(k)}hide(){this.asteroidGroup.getChildren().forEach(function(e){this.scene.tweens.add({targets:e,alpha:0,duration:100,ease:"Quad",repeat:0,yoyo:!1,callbackScope:this,onComplete:function(){e.visible=!1,e.body.enable=!1}})},this),this.asteroidTextGroup.getChildren().forEach(function(e){this.scene.tweens.add({targets:e,alpha:0,duration:100,ease:"Quad",repeat:0,yoyo:!1,callbackScope:this,onComplete:function(){e.visible=!1}})},this)}show(e){this.asteroidGroup.getChildren().forEach(function(t){t.visible=!0,t.alpha=1,t.body.enable=!0,t.setData("betAmount",(t.getData("baseValue")+1)*e),this.scene.tweens.add({targets:t,scaleX:.27,scaleY:.27,duration:1e3,ease:"Quad",repeat:-1,yoyo:!0,callbackScope:this})},this),this.asteroidTextGroup.getChildren().forEach(function(t){t.alpha=1,t.visible=!0,t.setText(t.getData("baseValue")*e)},this)}}function wy(n){var t,i;if(!qt){console.error("Firestore database not initialized correctly.");return}if(!((t=n==null?void 0:n.config)!=null&&t.studyID)||!((i=n==null?void 0:n.config)!=null&&i.uid)){console.error("Missing studyID or uid in game config.");return}const e=mr(qt,"Cannonball_MF_pilot",String(n.config.studyID),"subjects",String(n.config.uid));nu(e,{trial_data:n.registry.get("data")||[]},{merge:!0}).then(()=>{console.log("Data successfully saved!")}).catch(s=>{console.error("Error saving document:",s)})}class Fu extends Phaser.Scene{constructor(t){super({key:t});Nt(this,"calculateScoreIncrease",(t,i,s,o)=>{if(i===-999)return 0;const a=s===t?1:-1;this.bonusText.setBonusText(`${a>0?"+":"-"}${i}`);const c=i*a;return this.bonusText.setBonusTextColour(o),c});Nt(this,1)}init(t){this.trialNumber=-1,this.score=0,this.nHits=0,this.pinkBallExplodeChance=0,this.purpleBallExplodeChance=0,this.confidence=.5,this.pinkBet=-999,this.purpleBet=-999,this.confidenceTargetHit=!1,this.scoreIncrease=0,this.ballStartY=560,this.trialType="trial",this.betScaling=-999,this.blockedSide=-1,this.brokenTrial=!1,this.cannonActive=!0,this.brokenInstructionsShown=!1,this.ballColours=["pink","purple","grey"],this.scoreAnnouncementInterval=1e3,this.confidenceShown=!0,this.response=-999,this.ballColour="",this.exploded=!1,this.startTime=this.game.loop.time,this.RT=-999,this.alienSpeed=this.registry.get("alienSpeed"),this.debugPhysics=this.registry.get("debugPhysics"),this.dataSaveInterval=this.registry.get("dataSaveInterval"),this.showExplodeChanceBars=this.registry.get("showExplodeChanceBars"),this.ballsAreGrey=this.registry.get("ballsAreGrey"),this.showBallColourProbabilities=this.registry.get("showBallColourProbabilities"),this.leftPinkChance=this.registry.get("leftPinkChance"),this.rightPinkChance=this.registry.get("rightPinkChance"),this.showBrokenInstructions=this.registry.get("showBrokenInstructions"),this.trialInfoFile=this.registry.get("trialInfoFile")}preload(){Ji.preloadAssets(this,"/assets/star.png"),tt.preloadAssets(this,this.ballColours,"/assets",{frameWidth:100,frameHeight:100},{frameWidth:100,frameHeight:100}),El.preloadAssets(this,"/assets"),Il.preloadAssets(this,"/assets"),bl.preloadAssets(this,"/assets"),Sl.preloadAssets(this,"/assets"),this.load.json("trial_info",`/assets/trial_info/${this.trialInfoFile}`),this.load.image("planet","/assets/planet.png"),this.load.image("background","/assets/BG1_resized.png")}setBackground(){this.background=this.add.image(0,0,"background"),this.background.setOrigin(0),this.background.setDepth(-10),this.planet=this.add.image(250,615,"planet"),this.planet.setScale(.12)}getBetInfo(t,i){const s=t.getData("betAmount"),o=i.getData("colour"),a=t.getData("colour");this.confidence=t.getData("baseValue")*(a==="pink"?-1:1),o==="pink"?this.pinkBet=s:this.purpleBet=s}handleBallAlienOverlap(t){t.resetPosition(),t.moveToBottom(),this.updateScore(),this.alien.reset()}handleBallAsteroidOverlap(t,i){if(!this.confidenceTargetHit){if(this.confidenceTargetHit=!0,this.cannon.hidePointer(),this.getBetInfo(t,i),this.pinkBet!==-999||this.purpleBet!==-999){const s=this.pinkBet!==-999?"pink":"purple";this.scoreIncrease=this.calculateScoreIncrease(s,t.getData("betAmount"),t.getData("colour"),t.getData("colour")==="pink"?"#FF0180":"#6A00FF"),this.bonusText.show(1e3,1.5,400)}i.resetPosition(),t.explode()}}createUI(){this.topUI=new bl(this,this.totalTrials,this.showExplodeChanceBars),this.bonusText=new vy(this,250,320,"+100"),this.bonusText.on("shown",()=>{this.score+=this.scoreIncrease,this.hideConfidence(),this.startNewTrial()}),this.bonusRoundText=new Ty(this)}loadTrialInfo(){this.trialInfo=this.cache.json.get("trial_info"),this.registry.get("short")?this.totalTrials=5:this.totalTrials=Object.keys(this.trialInfo).length}createBackground(){this.setBackground(),new Ji(this,{numberOfStars:30,minX:0,maxX:500,minY:0,maxY:600,initialScale:.2,initialAlpha:.5,endScale:.3,endAlpha:.9,minDuration:1e3,maxDuration:3e3,ease:"Quad"})}createBalls(){this.ball_grey=new tt(this,300,800,"grey",.05),this.ballsAreGrey==!0?(this.ball_pink=new tt(this,300,800,"grey",.05),this.ball_purple=new tt(this,300,800,"grey",.05)):(this.ball_pink=new tt(this,300,800,"pink",.05),this.ball_purple=new tt(this,300,800,"purple",.05)),this.ball_pink.on("exploded",t=>{this.handleBallExplosion(t)}),this.ball_purple.on("exploded",t=>{this.handleBallExplosion(t)}),this.ball_pink.on("offScreen",t=>{this.startNewTrial()}),this.ball_purple.on("offScreen",t=>{this.startNewTrial()}),this.ball_pink.on("missed",t=>{this.confidenceShown&!this.confidenceTargetHit&&this.handleMissedConfidenceTrial(t)}),this.ball_purple.on("missed",t=>{this.confidenceShown&!this.confidenceTargetHit&&this.handleMissedConfidenceTrial(t)})}createAlien(){this.alien=new Il(this,250,200,this.alienSpeed),this.alien.setMoving(!0),this.physics.add.overlap(this.alien,this.ball_pink,()=>{this.handleBallAlienOverlap(this.ball_pink)}),this.physics.add.overlap(this.alien,this.ball_purple,()=>{this.handleBallAlienOverlap(this.ball_purple)})}createBrokenInstructionBox(){this.instructionBoxGrey=new Re(this,250,610,300,50,250,.5,15,"up","",15),this.instructionBoxGrey.setText("Uh oh! Looks like the colour ball generator is broken!"),this.instructionBoxGrey.hide()}create(){this.loadTrialInfo(),this.debugPhysics&&this.physics.world.createDebugGraphic(),this.createBackground(),this.cannon=new El(this,250,545,this.showBallColourProbabilities),this.createBalls(),this.createAlien(),this.createUI(),this.asteroids=new Sl(this,250,590,300,5,this.handleBallAsteroidOverlap),this.createBrokenInstructionBox(),this.scoreAnnouncementText=new Ey(this,250,300,"1000 points!"),this.startNewTrial()}handleMissedConfidenceTrial(t){this.confidence=0,this.pinkBet=0,this.purpleBet=0,this.confidenceTargetHit=!0,this.startNewTrial(),this.hideConfidence(),t.resetPosition()}handleBallExplosion(t){t.y=620,this.score-=50,this.topUI.updateScore(this.score),this.exploded=!0,this.startNewTrial()}start(){}handleResponse(t){if(this.time.delayedCall(1e3,this.instructionBoxGrey.hide,[],this.instructionBoxGrey),this.cannon.flashContainer(t),this.blockedSide!==t&&this.cannonActive){this.response=t+1;const i=t===0?"left":"right";this.RT=this.game.loop.time-this.startTime,this.cannonActive=!1,this.trialInfo[this.trialNumber][`purpleOption${t+1}`]===1?this.ball_purple.fire(i,this.trialInfo[this.trialNumber].purpleExplode===0):this.ball_pink.fire(i,this.trialInfo[this.trialNumber].pinkExplode===0)}}handleKeyPress(t,i){this.input.keyboard.checkDown(this.input.keyboard.addKey(t),500)&&!this.ball_pink.visible&&!this.ball_purple.visible&&this.handleResponse(i)}update(){this.cannon.update(),this.ball_pink.update(),this.ball_purple.update(),this.handleKeyPress("ONE",0),this.handleKeyPress("TWO",1)}updateScore(){this.score+=100,this.nHits+=1,this.topUI.updateScore(this.score),this.topUI.updateAlienCount(this.nHits),this.startNewTrial()}storeData(){var t={trial:this.trialNumber,trialType:this.trialType,score:this.score,nHits:this.nHits,response:this.response,ballColour:this.ballColour,exploded:this.exploded,RT:this.RT,confidence:this.confidence,pinkBet:this.pinkBet,purpleBet:this.purpleBet,betScaling:this.betScaling};this.game.registry.values.data[this.trialNumber]=t}handleBrokenTrial(t){this.brokenTrial=t.pinkExplodeChance>1,this.topUI.setBlocked(this.brokenTrial),this.brokenTrial?([this.ball_pink,this.ball_purple].forEach(i=>i.setGrey()),!this.brokenInstructionsShown&&this.showBrokenInstructions&&(this.instructionBoxGrey.show(),this.brokenInstructionsShown=!0)):([this.ball_pink,this.ball_purple].forEach(i=>i.setColoured()),this.instructionBoxGrey.hide(),this.updateExplodeChanceBars(!0),this.brokenInstructionsShown=!1)}handleConfidenceTrial(t){t.confidence===1&&t.pinkExplodeChance<=1?(t.pinkExplode=1,t.purpleExplode=1,[this.ball_pink,this.ball_purple].forEach(i=>{i.visible=!0,i.alpha=0}),this.time.delayedCall(500,()=>{[this.ball_pink,this.ball_purple].forEach(i=>{i.visible=!1,i.alpha=1}),this.showConfidence()},[],this)):(this.hideConfidence(),this.trialType="trial")}startNewTrial(){if(this.trialNumber+=1,this.trialNumber!=0&&this.storeData(),!this.handleEndScene()){this.topUI.updateTrial(this.totalTrials,this.trialNumber),this.pinkBet=this.purpleBet=-999,this.trialNumber!=0&&this.trialNumber%this.dataSaveInterval==0&&this.saveData();const i=this.trialInfo[this.trialNumber];this.updateExplodeChanceBars(!0),this.cannon.updateBallColourProbabilities(this.leftPinkChance,this.rightPinkChance),this.handleBrokenTrial(i),this.handleCannonBlocking(i),this.handleConfidenceTrial(i),this.handleScoreAnnouncement(),this.startTime=this.game.loop.time,this.cannonActive=!0}}handleCannonBlocking(t){this.blockedSide=t.blockedSide,this.blockedSide>-1?this.cannon.blockContainer(this.blockedSide):this.cannon.unblockContainers()}handleScoreAnnouncement(){this.score%this.scoreAnnouncementInterval===0&&this.score>0&&this.scoreAnnouncementText.flash(this.score)}handleEndScene(){return this.trialNumber===this.totalTrials?(console.log("Ending game..."),this.saveData(),this.scene.start("EndScene"),!0):!1}updateExplodeChanceBars(t){t?this.topUI.updateExplodeChanceBars(this.trialInfo[this.trialNumber].pinkExplodeChance,this.trialInfo[this.trialNumber].purpleExplodeChance):this.topUI.updateExplodeChanceBars(0,0)}saveData(){if(this.registry.get("init_subject_failed")){console.warn("Failed to save data because subject initialization failed.");return}else wy(this.game)}showConfidence(){this.brokenTrial?this.trialType="forced_choice":(this.trialType="confidence",this.ball_pink.moveToBottom(),this.ball_purple.moveToBottom(),this.betScaling=this.trialInfo[this.trialNumber].confidenceScaling,this.alien.visible=!1,this.asteroids.show(this.betScaling),this.cannon.showPointer(),this.bonusRoundText.flash(),this.confidenceShown=!0,this.alien.setMoving(!1),this.updateExplodeChanceBars(!1),this.confidenceTargetHit=!1)}hideConfidence(){this.topUI.updateScore(this.score),this.bonusText.reset(),this.alien.visible=!0,this.alien.setMoving(!0),this.cannon.hidePointer(),this.asteroids.hide(),this.confidenceShown=!1,this.ball_pink.resetPosition(),this.ball_purple.resetPosition()}}class Ay extends Fu{constructor(e){super("TrainingScene")}init(e){super.init(e),this.trainingPhase=0,this.task=this.game.registry.get("task")}preload(){super.preload()}create(){super.create(),this.cannonMoving=!0,this.instructionBoxCannon=new Re(this,250,350,300,100,250,1,15,"down","Click to continue"),this.instructionBoxCannon.setText("Use the mouse to aim the cannon"),this.instructionBoxCannon.hide(),this.instructionBoxContainerLeft=new Re(this,100,400,150,100,100,1,15,"down","Choose one!"),this.instructionBoxContainerLeft.setText("Press 1 to fire from the left"),this.instructionBoxContainerRight=new Re(this,400,400,150,100,400,1,15,"down","Choose one!"),this.instructionBoxContainerRight.setText("Press 2 to fire from the right"),this.instructionBoxContainerLeft.hide(),this.instructionBoxContainerRight.hide(),this.instructionBoxBalls=new Re(this,250,350,350,150,250,1,15,"down","Click to continue"),this.task==="MB"?this.instructionBoxBalls.setText("The two containers have a different chance to fire pink or purple balls, which changes from time to time"):this.task==="MBMF"?this.instructionBoxBalls.setText("The two containers have a different chance to fire pink or purple balls, depending on how many of each colour there are"):this.task==="MF"&&this.instructionBoxBalls.setText("Both containers fire grey coloured balls"),this.instructionBoxBalls.hide(),this.instructionBoxBalls2=new Re(this,250,350,350,150,250,1,15,"down","Click to continue"),this.instructionBoxBalls2.setText("If one container is shooting one colour, this means the other one is more likely to shoot the other colour"),this.instructionBoxBalls2.hide(),this.instructionBoxExplosions=new Re(this,250,180,320,130,250,1,15,"up"),this.task==="MB"?this.instructionBoxExplosions.setText(`Some balls will explode and you will lose points!

The fuller the bar, the MORE likely the ball will be safe`):this.task==="MBMF"?this.instructionBoxExplosions.setText(`Some balls will explode and you will lose points!

Pink and purple balls have different chances of exploding, which changes from time to time`):this.task==="MF"&&this.instructionBoxExplosions.setText(`Some balls will explode and you will lose points!

The left and right options have different chances to fire exploding balls, which changes from time to time`),this.instructionBoxExplosions.hide(),this.instructionBoxAsteroid=new Re(this,250,290,300,70,250,.7,15,"up"),this.instructionBoxAsteroid.setText("Your goal is to hit the spaceships with the balls!"),this.instructionBoxAsteroid.hide(),this.instructionBoxBallNumber=new Re(this,250,105,300,70,250,.7,15,"up"),this.instructionBoxBallNumber.setText("The number at the top shows how many balls you have left"),this.instructionBoxBallNumber.hide(),this.instructionBoxBonusRound=new Re(this,250,175,300,70,250,.7,15,"down"),this.instructionBoxBonusRound.setText("On bonus rounds, earn extra points by matching the colours of the ball and asteroids"),this.instructionBoxBonusRound.hide(),this.instructionBoxAsteroidBonus=new Re(this,300,200,300,70,400,.7,15,"down"),this.instructionBoxAsteroidBonus.setText("If the ball colour matches, you win the bonus amount. If not, you lose the amount!"),this.instructionBoxAsteroidBonus.hide(),this.timeSinceStepShown=0,this.stepTraining(),this.input.on("pointerdown",function(e){this.handleClick()},this),this.ball_pink.on("offScreen",function(){this.stepTraining()},this),this.ball_purple.on("offScreen",function(){this.stepTraining()},this),this.trialInfo[0].pinkExplode=1,this.trialInfo[0].purpleExplode=1}handleClick(){this.timeSinceStepShown>1e3&&this.trainingPhase!==2&&this.stepTraining()}update(){this.cannon.update(),this.ball_pink.update(),this.ball_purple.update(),this.trainingPhase===2&&(this.handleKeyPress("ONE",0),this.handleKeyPress("TWO",1)),this.timeSinceStepShown+=this.game.loop.delta}saveData(){}stepTraining(){switch(this.timeSinceStepShown=0,this.trainingPhase+=1,this.trainingPhase){case 1:this.instructionBoxCannon.show(),this.alien.setMoving(!1),this.alien.visible=!0;break;case 2:this.instructionBoxCannon.hide(),this.instructionBoxContainerLeft.show(),this.instructionBoxContainerRight.show();break;case 3:this.hideConfidence(),this.instructionBoxContainerLeft.hide(),this.instructionBoxContainerRight.hide(),this.instructionBoxBalls.show(),this.alien.setMoving(!1),this.alien.visible=!0;break;case 4:if(this.task==="MB"){this.instructionBoxBalls.hide(),this.instructionBoxBalls2.show();break}else{this.instructionBoxBalls.hide(),this.stepTraining();break}case 5:this.instructionBoxBalls2.hide(),this.instructionBoxExplosions.show();break;case 6:this.instructionBoxExplosions.hide(),this.instructionBoxAsteroid.show();break;case 7:this.instructionBoxAsteroid.hide(),this.instructionBoxBallNumber.show();break;case 8:if(this.task==="MB"){this.showConfidence(),this.instructionBoxBallNumber.hide(),this.instructionBoxBonusRound.show();break}else{this.instructionBoxBallNumber.hide(),this.trainingPhase=9,this.stepTraining();break}case 9:this.instructionBoxBonusRound.hide(),this.instructionBoxAsteroidBonus.show();break;case 10:this.instructionBoxBallNumber.hide(),this.scene.start("ReadyScene");break}}}class by extends Phaser.Scene{constructor(){super({key:"IntroScene"})}init(e){}create(){this.text=this.add.text(250,300,"Cannon Ball",{fontSize:"32px",fill:"#FF0180",fontFamily:"Rubik"}),this.text.setOrigin(.5,.5),this.tweens.add({targets:this.text,duration:1e3,scaleX:1.2,scaleY:1.2,ease:"Linear",yoyo:!0,repeat:-1}),this.textLower=this.add.text(250,350,"Click to play",{fontSize:"20px",fill:"#616161",fontFamily:"Rubik"}),this.textLower.setOrigin(.5,.5),this.textLower.alpha=0,this.input.on("pointerdown",(function(e){this.textLower.alpha>.9&!this.click&&(this.textLower.setColor("#FF0180"),this.click=!0,this.nextScene())}).bind(this)),this.tweens.add({targets:this.textLower,duration:1e3,alpha:1,ease:"Linear",yoyo:!1,repeat:0}),this.click=!1}update(){}nextScene(){this.tweens.add({targets:this.textLower,duration:500,alpha:0,delay:1e3,ease:"Quad",yoyo:!1,repeat:0}),this.tweens.add({targets:this.text,duration:500,alpha:0,delay:1500,ease:"Quad",yoyo:!1,repeat:0,onComplete:(function(){this.game.config.testing?this.scene.start("GameScene"):this.scene.start("TrainingScene")}).bind(this)})}}class Sy extends Phaser.Scene{constructor(){super({key:"EndScene"})}init(e){}create(){(new Date-this.cache.game.start_time)/6e4;var e=this.add.text(250,300,"Game over",{fontSize:"32px",fill:"#FF0180",fontFamily:"Rubik"});e.setOrigin(.5,.5),this.tweens.add({targets:e,duration:1e3,scaleX:1.2,scaleY:1.2,ease:"Linear",yoyo:!0,repeat:-1});var t=this.add.text(250,350,"Thanks for playing!",{fontSize:"20px",fill:"#616161",fontFamily:"Rubik"});t.setOrigin(.5,.5),t.alpha=0,this.tweens.add({targets:t,duration:1e3,alpha:1,delay:1e3,ease:"Linear",yoyo:!1,repeat:0});var i=this.add.text(250,400,"Click to move on",{fontSize:"20px",fill:"#616161",fontFamily:"Rubik"});i.setOrigin(.5,.5),i.alpha=0,this.tweens.add({targets:i,duration:1e3,alpha:1,delay:2e3,ease:"Linear",yoyo:!1,repeat:0}),this.registry.get("subjectID"),this.input.on("pointerdown",(function(s){window.location.href=this.registry.get("redirectURL")}).bind(this))}update(){}}class Ry extends Phaser.Scene{constructor(){super({key:"ReadyScene"})}init(e){}create(){this.text=this.add.text(250,300,"Ready?",{fontSize:"32px",fill:"#FF0180",fontFamily:"Rubik"}),this.text.setOrigin(.5,.5),this.tweens.add({targets:this.text,duration:1e3,scaleX:1.2,scaleY:1.2,ease:"Linear",yoyo:!0,repeat:-1}),this.textLower=this.add.text(250,350,"Click to start!",{fontSize:"20px",fill:"#616161",fontFamily:"Rubik"}),this.textLower.setOrigin(.5,.5),this.textLower.alpha=0,this.tweens.add({targets:this.textLower,duration:1e3,alpha:1,delay:1e3,ease:"Linear",yoyo:!1,repeat:0}),this.click=!1,this.input.on("pointerdown",(function(e){this.textLower.alpha>.9&!this.click&&(this.textLower.setColor("#FF0180"),this.click=!0,this.nextScene())}).bind(this))}update(){}nextScene(){this.tweens.add({targets:this.textLower,duration:500,alpha:0,delay:1e3,ease:"Quad",yoyo:!1,repeat:0}),this.tweens.add({targets:this.text,duration:500,alpha:0,delay:1500,ease:"Quad",yoyo:!1,repeat:0,onComplete:(function(){this.scene.start("GameScene")}).bind(this)})}}const Py=new Ay("TrainingScene"),Cy=new by("IntroScene"),ky=new Ry("ReadyScene"),Dy=new Fu("GameScene"),xy=new Sy("EndScene"),Vy={type:Phaser.AUTO,parent:"start",width:500,height:640,backgroundColor:"#f0f0f0",scene:[Cy,Py,ky,Dy,xy],physics:{default:"arcade",arcade:{gravity:{y:0}}}};var Ny=function(n){let{subjectID:e,testing:t,studyID:i,short:s,task:o}=my();document.getElementById("start").innerHTML="",window.scrollTo(0,0),setTimeout(function(){let a=new Phaser.Game(Vy);a.registry.set("subjectID",e),a.registry.set("studyID",i.toLowerCase()),gy(a,o),a.config.testing=t!=="FALSE",a.config.studyID=i,a.registry.set("short",s),a.registry.set("task",o),a.config.db=qt,a.config.uid=n;const c=parseInt(1,10)||1;try{py(a,c)}catch(h){console.warn("Failed to initialise subject:",h),a.registry.set("init_subject_failed",!0)}a.registry.set("start_time",new Date),a.registry.set("data",{})},1e3)};dy().then(n=>{console.log("Signed in with UID:",n),Ny(n)}).catch(n=>{console.error("Sign-in failed:",n)});
