import{r as mn,j as Ae,a as ki}from"./index-CaaIHyZZ.js";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ss=function(r,n){return(Ss=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(r,n)};function bn(r,n){function e(){this.constructor=r}Ss(r,n),r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function X(r,n,e,t){return new(e||(e=Promise))(function(a,o){function i(c){try{u(t.next(c))}catch(l){o(l)}}function s(c){try{u(t.throw(c))}catch(l){o(l)}}function u(c){c.done?a(c.value):new e(function(l){l(c.value)}).then(i,s)}u((t=t.apply(r,[])).next())})}function $(r,n){var e,t,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(a=2&l[0]?t.return:l[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,l[1])).done)return a;switch(t=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(l[0]===6&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(r,i)}catch(f){l=[6,f],t=0}finally{e=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Jc=function(){function r(n){this.global=n,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(n,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=n,this.platform=e},r.prototype.registerFlag=function(n,e,t){if(this.flagRegistry[n]={evaluationFn:e,setHook:t},this.urlFlags[n]!=null){var a=this.urlFlags[n];console.warn("Setting feature override from URL "+n+": "+a+"."),this.set(n,a)}},r.prototype.get=function(n){return n in this.flags?this.flags[n]:(this.flags[n]=this.evaluateFlag(n),this.flags[n])},r.prototype.getNumber=function(n){return this.get(n)},r.prototype.getBool=function(n){return this.get(n)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(n,e){if(this.flagRegistry[n]==null)throw new Error("Cannot set flag "+n+" as it has not been registered.");this.flags[n]=e,this.flagRegistry[n].setHook!=null&&this.flagRegistry[n].setHook(e)},r.prototype.evaluateFlag=function(n){if(this.flagRegistry[n]==null)throw new Error("Cannot evaluate flag '"+n+"': no evaluation function found.");return this.flagRegistry[n].evaluationFn()},r.prototype.setFlags=function(n){this.flags=Object.assign({},n)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var n=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,t,a=(e=this.global.location.search,t={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Qc(t,i[0],i[1]),i.join("=")}),t);"tfjsflags"in a&&a.tfjsflags.split(",").forEach(function(o){var i=o.split(":"),s=i[0],u=i[1];n.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function Qc(r,n,e){r[decodeURIComponent(n)]=decodeURIComponent(e||"")}function O(){return Ds}var Ds=null,Br=new Map,eo=new Map;function As(r,n){var e=Ns(r,n);return Br.get(e)}function Zc(r){return eo.get(r)}function Si(r){for(var n=Br.entries(),e=[];;){var t=n.next(),a=t.done,o=t.value;if(a)break;var i=o[0],s=o[1];i.split("_")[0]===r&&e.push(s)}return e}function Ts(r){var n=r.kernelName,e=r.backendName,t=Ns(n,e);if(Br.has(t))throw new Error("The kernel '"+n+"' for backend '"+e+"' is already registered");Br.set(t,r)}function el(r){var n=r.kernelName;eo.has(n)&&console.warn("Overriding the gradient for '"+n+"'"),eo.set(n,r)}function Ns(r,n){return n+"_"+r}function no(r,n,e){return Math.max(r,Math.min(n,e))}function Fs(r){return r%2==0?r:r+1}function nl(r){for(var n=0,e=0;e<r.length;e++)n+=r[e];return n}function E(r,n){if(!r)throw new Error(typeof n=="string"?n:n())}function ye(r,n,e){e===void 0&&(e=""),E(ze(r,n),function(){return e+" Shapes "+r+" and "+n+" must match"})}function Kt(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Gt(r,n,e){if(n===void 0&&(n=[]),e===void 0&&(e=!1),n==null&&(n=[]),Array.isArray(r)||Tn(r)&&!e)for(var t=0;t<r.length;++t)Gt(r[t],n,e);else n.push(r);return n}function Y(r){if(r.length===0)return 1;for(var n=r[0],e=1;e<r.length;e++)n*=r[e];return n}function ze(r,n){if(r===n)return!0;if(r==null||n==null||r.length!==n.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==n[e])return!1;return!0}function Te(r){return r%1==0}function tl(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var n=Math.exp(2*r);return(n-1)/(n+1)}function to(r){var n=Math.ceil(Math.sqrt(r));return[n,Math.ceil(r/n)]}function Ot(r,n){return n<=r.length?r:r+" ".repeat(n-r.length)}function Di(r,n,e){return n===void 0&&(n=function(t){return 0}),new Promise(function(t,a){var o=0,i=function(){if(r())t();else{o++;var s=n(o);e!=null&&o>=e?a():setTimeout(i,s)}};i()})}function rl(r,n){for(var e=1,t=-1,a=0;a<r.length;++a)if(r[a]>=0)e*=r[a];else if(r[a]===-1){if(t!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+t+" and dim "+a);t=a}else if(r[a]<0)throw Error("Shapes can not be < 0. Found "+r[a]+" at dim "+a);if(t===-1){if(n>0&&n!==e)throw Error("Size("+n+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(n%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+n+" / "+e);var o=r.slice();return o[t]=n/e,o}function Le(r,n){var e=n.length;return E((r=r==null?n.map(function(t,a){return a}):[].concat(r)).every(function(t){return t>=-e&&t<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(t){return Te(t)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(t){return t<0?e+t:t})}function pt(r,n){for(var e=[],t=[],a=n!=null&&Array.isArray(n)&&n.length===0,o=n==null||a?null:Le(n,r).sort(),i=0,s=0;s<r.length;++s){if(o!=null){if(o[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(o[i]==null||o[i]>s)&&r[s]===1&&(e.push(r[s]),t.push(s)),o[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),t.push(s))}return{newShape:e,keptDims:t}}function rr(r,n){var e=null;if(r==null||r==="float32")e=new Float32Array(n);else if(r==="int32")e=new Int32Array(n);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(n)}return e}function Lr(r,n){var e=null;if(r==null||r==="float32")e=new Float32Array(n);else if(r==="int32")e=new Int32Array(n);else if(r==="bool")e=new Uint8Array(n);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(n)}return e}function al(r,n){for(var e=0;e<r.length;e++){var t=r[e];if(isNaN(t)||!isFinite(t))throw Error("A tensor of type "+n+" being uploaded contains "+t+".")}}function ol(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function il(r,n){return n!=="complex64"&&(n!=="float32"||r==="complex64")&&(n!=="int32"||r==="float32"||r==="complex64")&&(n!=="bool"||r!=="bool")}function Tn(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Ps(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function sl(r){if(r==null)return 0;var n=0;return r.forEach(function(e){return n+=e.length}),n}function Eo(r){return typeof r=="string"||r instanceof String}function ul(r){return typeof r=="boolean"}function cl(r){return typeof r=="number"}function hr(r){return Array.isArray(r)?hr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":cl(r)?"float32":Eo(r)?"string":ul(r)?"bool":"float32"}function ro(r){return!!(r&&r.constructor&&r.call&&r.apply)}function ao(r,n){for(var e=n;e<r;++e)if(r%e==0)return e;return r}function Nn(r){var n=r.length;if(n<2)return[];var e=new Array(n-1);e[n-2]=r[n-1];for(var t=n-3;t>=0;--t)e[t]=e[t+1]*r[t+1];return e}function Ms(r,n,e){if(n==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Gt(r)),e&&al(r,n),function(o,i){return o instanceof Float32Array&&i==="float32"||o instanceof Int32Array&&i==="int32"||o instanceof Uint8Array&&i==="bool"}(r,n))return r;if(n==null||n==="float32"||n==="complex64")return new Float32Array(r);if(n==="int32")return new Int32Array(r);if(n==="bool"){for(var t=new Uint8Array(r.length),a=0;a<t.length;++a)Math.round(r[a])!==0&&(t[a]=1);return t}throw new Error("Unknown data type "+n)}function Ai(r,n){if(r.length===0)return n[0];var e=r.reduce(function(t,a){return t*a});if(e===0)return[];if(e!==n.length)throw new Error("["+r+"] does not match the input size.");return function t(a,o,i){var s=new Array;if(o.length===1)for(var u=o[0],c=0;c<u;c++)s[c]=i[a+c];else{u=o[0];var l=o.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=t(a+c*f,l,i)}return s}(0,r,n)}function Os(r,n){for(var e=dr(r,n),t=0;t<e.length;t++)e[t]=1;return e}function dr(r,n){if(n==null||n==="float32"||n==="complex64")return new Float32Array(r);if(n==="int32")return new Int32Array(r);if(n==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+n)}function kn(){return O().platform.now()}function Bs(r){r.forEach(function(n){E(Number.isInteger(n)&&n>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function ll(r,n){return n===void 0&&(n="utf-8"),n=n||"utf-8",O().platform.encode(r,n)}function Wr(r,n){return n===void 0&&(n="utf-8"),n=n||"utf-8",O().platform.decode(r,n)}function Ti(r,n,e){if(n===0)return 0;if(n===1)return r[0];for(var t=r[r.length-1],a=0;a<r.length-1;++a)t+=e[a]*r[a];return t}function fl(r,n,e){if(n===0)return[];if(n===1)return[r];for(var t=new Array(n),a=0;a<t.length-1;++a)t[a]=Math.floor(r/e[a]),r-=t[a]*e[a];return t[t.length-1]=r,t}var hl=function(){function r(n,e){this.backendTimer=n,this.logger=e,e==null&&(this.logger=new dl)}return r.prototype.profileKernel=function(n,e,t){var a,o=this,i=this.backendTimer.time(function(){a=t()});return a.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,n),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),o.logger.logKernelProfile(n,s,u,c.kernelMs,e,l)})})}),a},r}(),dl=function(){function r(){}return r.prototype.logKernelProfile=function(n,e,t,a,o,i){var s=typeof a=="number"?Ot(a+"ms",9):a.error,u=Ot(n,25),c=e.rank,l=e.size,f=Ot(e.shape.toString(),14),h="";for(var d in o){var p=o[d].shape||e.shape,v=p.length;h+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Ni=20,$t=3,ka=7;function pl(r,n,e,t){var a=Nn(n),o=function(c,l,f,h){var d=Y(l),p=h[h.length-1],v=new Array(p).fill(0),m=l.length,g=f==="complex64"?Jt(c):c;if(m>1)for(var x=0;x<d/p;x++)for(var b=x*p,y=0;y<p;y++)v[y]=Math.max(v[y],Yt(g[b+y],0,f).length);return v}(r,n,e,a),i=n.length,s=function c(l,f,h,d,p,v){v===void 0&&(v=!0);var m=h==="complex64"?2:1,g=f[0],x=f.length;if(x===0)return h==="complex64"?[Yt(Jt(l)[0],0,h)]:h==="bool"?[Ls(l[0])]:[l[0].toString()];if(x===1){if(g>Ni){var b=$t*m,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-$t)*m,g*m));return h==="complex64"&&(y=Jt(y),w=Jt(w)),["["+y.map(function(L,U){return Yt(L,p[U],h)}).join(", ")+", ..., "+w.map(function(L,U){return Yt(L,p[g-$t+U],h)}).join(", ")+"]"]}return["["+(h==="complex64"?Jt(l):Array.from(l)).map(function(L,U){return Yt(L,p[U],h)}).join(", ")+"]"]}var C=f.slice(1),S=d.slice(1),k=d[0]*m,R=[];if(g>Ni){for(var I=0;I<$t;I++){var N=(A=I*k)+k;R.push.apply(R,c(l.slice(A,N),C,h,S,p,!1))}for(R.push("..."),I=g-$t;I<g;I++)N=(A=I*k)+k,R.push.apply(R,c(l.slice(A,N),C,h,S,p,I===g-1))}else for(I=0;I<g;I++){var A;N=(A=I*k)+k,R.push.apply(R,c(l.slice(A,N),C,h,S,p,I===g-1))}var B=x===2?",":"";for(R[0]="["+R[0]+B,I=1;I<R.length-1;I++)R[I]=" "+R[I]+B;var M=`,
`;for(I=2;I<x;I++)M+=`
`;return R[R.length-1]=" "+R[R.length-1]+"]"+(v?"":M),R}(r,n,e,a,o),u=["Tensor"];return t&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+n+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function Yt(r,n,e){return Ot(Array.isArray(r)?parseFloat(r[0].toFixed(ka))+" + "+parseFloat(r[1].toFixed(ka))+"j":Eo(r)?"'"+r+"'":e==="bool"?Ls(r):parseFloat(r.toFixed(ka)).toString(),n)}function Ls(r){return r===0?"false":"true"}function Jt(r){for(var n=[],e=0;e<r.length;e+=2)n.push([r[e],r[e+1]]);return n}var ar=function(){function r(n,e,t){var a=this;if(this.dtype=e,this.shape=n.slice(),this.size=Y(n),t!=null){var o=t.length;E(o===this.size,function(){return"Length of values '"+o+"' does not match the size inferred by the shape '"+a.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=t||Lr(e,this.size),this.strides=Nn(n)}return r.prototype.set=function(n){for(var e=this,t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];t.length===0&&(t=[0]),E(t.length===this.rank,function(){return"The number of provided coordinates ("+t.length+") must match the rank ("+e.rank+")"});var o=this.locToIndex(t);this.values[o]=n},r.prototype.get=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];n.length===0&&(n=[0]);for(var t=0,a=0,o=n;a<o.length;a++){var i=o[a];if(i<0||i>=this.shape[t]){var s="Requested out of range element at "+n+".   Buffer shape="+this.shape;throw new Error(s)}t++}for(var u=n[n.length-1],c=0;c<n.length-1;++c)u+=this.strides[c]*n[c];return this.values[u]},r.prototype.locToIndex=function(n){if(this.rank===0)return 0;if(this.rank===1)return n[0];for(var e=n[n.length-1],t=0;t<n.length-1;++t)e+=this.strides[t]*n[t];return e},r.prototype.indexToLoc=function(n){if(this.rank===0)return[];if(this.rank===1)return[n];for(var e=new Array(this.shape.length),t=0;t<e.length-1;++t)e[t]=Math.floor(n/this.strides[t]),n-=e[t]*this.strides[t];return e[e.length-1]=n,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Sn().makeTensor(this.values,this.shape,this.dtype)},r}(),Sn=null,P=null,Ws=null,Ee=function(){function r(n,e,t,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=n.slice(),this.dtype=e||"float32",this.size=Y(n),this.strides=Nn(n),this.dataId=t,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(n,e){return this.throwIfDisposed(),this.reshape([n,e])},r.prototype.as3D=function(n,e,t){return this.throwIfDisposed(),this.reshape([n,e,t])},r.prototype.as4D=function(n,e,t,a){return this.throwIfDisposed(),this.reshape([n,e,t,a])},r.prototype.as5D=function(n,e,t,a,o){return this.throwIfDisposed(),this.reshape([n,e,t,a,o])},r.prototype.asType=function(n){return this.throwIfDisposed(),P.cast(this,n)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return X(this,void 0,void 0,function(){var n;return $(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return n=e.sent(),[2,P.buffer(this.shape,this.dtype,n)]}})})},r.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return X(this,void 0,void 0,function(){var n;return $(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return n=e.sent(),[2,Ai(this.shape,n)]}})})},r.prototype.arraySync=function(){return Ai(this.shape,this.dataSync())},r.prototype.data=function(){return X(this,void 0,void 0,function(){var n,e;return $(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),n=Sn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,n];case 1:e=t.sent();try{return[2,e.map(function(a){return Wr(a)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}t.label=2;case 2:return[2,n]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var n=Sn().readSync(this.dataId);if(this.dtype==="string")try{return n.map(function(e){return Wr(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return n},r.prototype.bytes=function(){return X(this,void 0,void 0,function(){var n;return $(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Sn().read(this.dataId)];case 1:return n=e.sent(),this.dtype==="string"?[2,n]:[2,new Uint8Array(n.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Sn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(n){return n===void 0&&(n=!1),P.print(this,n)},r.prototype.reshape=function(n){return this.throwIfDisposed(),P.reshape(this,n)},r.prototype.reshapeAs=function(n){return this.throwIfDisposed(),this.reshape(n.shape)},r.prototype.expandDims=function(n){return n===void 0&&(n=0),P.expandDims(this,n)},r.prototype.cumsum=function(n,e,t){return n===void 0&&(n=0),e===void 0&&(e=!1),t===void 0&&(t=!1),P.cumsum(this,n,e,t)},r.prototype.squeeze=function(n){return this.throwIfDisposed(),P.squeeze(this,n)},r.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},r.prototype.oneHot=function(n,e,t){return this.throwIfDisposed(),P.oneHot(this,n,e,t)},r.prototype.toString=function(n){return n===void 0&&(n=!1),pl(this.dataSync(),this.shape,this.dtype,n)},r.prototype.tile=function(n){return this.throwIfDisposed(),P.tile(this,n)},r.prototype.gather=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.gather(this,n,e)},r.prototype.matMul=function(n,e,t){return e===void 0&&(e=!1),t===void 0&&(t=!1),this.throwIfDisposed(),P.matMul(this,n,e,t)},r.prototype.dot=function(n){return this.throwIfDisposed(),P.dot(this,n)},r.prototype.norm=function(n,e,t){return n===void 0&&(n="euclidean"),e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.norm(this,n,e,t)},r.prototype.slice=function(n,e){return this.throwIfDisposed(),P.slice(this,n,e)},r.prototype.reverse=function(n){return this.throwIfDisposed(),P.reverse(this,n)},r.prototype.concat=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),n instanceof r&&(n=[n]),P.concat([this].concat(n),e)},r.prototype.split=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.split(this,n,e)},r.prototype.stack=function(n,e){return e===void 0&&(e=0),P.stack([this,n],e)},r.prototype.unstack=function(n){return n===void 0&&(n=0),P.unstack(this,n)},r.prototype.pad=function(n,e){return e===void 0&&(e=0),P.pad(this,n,e)},r.prototype.batchNormalization=function(n,e,t,a,o){return t===void 0&&(t=.001),Ws("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(n,e,o,a,t)},r.prototype.batchNorm=function(n,e,t,a,o){return o===void 0&&(o=.001),this.throwIfDisposed(),P.batchNorm(this,n,e,t,a,o)},r.prototype.all=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.all(this,n,e)},r.prototype.any=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.any(this,n,e)},r.prototype.logSumExp=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.logSumExp(this,n,e)},r.prototype.sum=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.sum(this,n,e)},r.prototype.prod=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.prod(this,n,e)},r.prototype.mean=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.mean(this,n,e)},r.prototype.min=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.min(this,n,e)},r.prototype.max=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.max(this,n,e)},r.prototype.argMin=function(n){return n===void 0&&(n=null),this.throwIfDisposed(),P.argMin(this,n)},r.prototype.argMax=function(n){return n===void 0&&(n=null),this.throwIfDisposed(),P.argMax(this,n)},r.prototype.cast=function(n){return this.throwIfDisposed(),P.cast(this,n)},r.prototype.add=function(n){return this.throwIfDisposed(),P.add(this,n)},r.prototype.addStrict=function(n){return this.throwIfDisposed(),P.addStrict(this,n)},r.prototype.atan2=function(n){return this.throwIfDisposed(),P.atan2(this,n)},r.prototype.sub=function(n){return this.throwIfDisposed(),P.sub(this,n)},r.prototype.subStrict=function(n){return this.throwIfDisposed(),P.subStrict(this,n)},r.prototype.pow=function(n){return this.throwIfDisposed(),P.pow(this,n)},r.prototype.powStrict=function(n){return this.throwIfDisposed(),P.powStrict(this,n)},r.prototype.mul=function(n){return this.throwIfDisposed(),P.mul(this,n)},r.prototype.mulStrict=function(n){return this.throwIfDisposed(),P.mulStrict(this,n)},r.prototype.div=function(n){return this.throwIfDisposed(),P.div(this,n)},r.prototype.divNoNan=function(n){return this.throwIfDisposed(),P.divNoNan(this,n)},r.prototype.floorDiv=function(n){return this.throwIfDisposed(),P.floorDiv(this,n)},r.prototype.divStrict=function(n){return this.throwIfDisposed(),P.divStrict(this,n)},r.prototype.minimum=function(n){return this.throwIfDisposed(),P.minimum(this,n)},r.prototype.minimumStrict=function(n){return this.throwIfDisposed(),P.minimumStrict(this,n)},r.prototype.maximum=function(n){return this.throwIfDisposed(),P.maximum(this,n)},r.prototype.maximumStrict=function(n){return this.throwIfDisposed(),P.maximumStrict(this,n)},r.prototype.mod=function(n){return this.throwIfDisposed(),P.mod(this,n)},r.prototype.modStrict=function(n){return this.throwIfDisposed(),P.modStrict(this,n)},r.prototype.squaredDifferenceStrict=function(n){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,n)},r.prototype.transpose=function(n){return this.throwIfDisposed(),P.transpose(this,n)},r.prototype.notEqual=function(n){return this.throwIfDisposed(),P.notEqual(this,n)},r.prototype.notEqualStrict=function(n){return this.throwIfDisposed(),P.notEqualStrict(this,n)},r.prototype.less=function(n){return this.throwIfDisposed(),P.less(this,n)},r.prototype.lessStrict=function(n){return this.throwIfDisposed(),P.lessStrict(this,n)},r.prototype.equal=function(n){return this.throwIfDisposed(),P.equal(this,n)},r.prototype.equalStrict=function(n){return this.throwIfDisposed(),P.equalStrict(this,n)},r.prototype.lessEqual=function(n){return this.throwIfDisposed(),P.lessEqual(this,n)},r.prototype.lessEqualStrict=function(n){return this.throwIfDisposed(),P.lessEqualStrict(this,n)},r.prototype.greater=function(n){return this.throwIfDisposed(),P.greater(this,n)},r.prototype.greaterStrict=function(n){return this.throwIfDisposed(),P.greaterStrict(this,n)},r.prototype.greaterEqual=function(n){return this.throwIfDisposed(),P.greaterEqual(this,n)},r.prototype.greaterEqualStrict=function(n){return this.throwIfDisposed(),P.greaterEqualStrict(this,n)},r.prototype.logicalAnd=function(n){return this.throwIfDisposed(),P.logicalAnd(this,n)},r.prototype.logicalOr=function(n){return this.throwIfDisposed(),P.logicalOr(this,n)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},r.prototype.logicalXor=function(n){return this.throwIfDisposed(),P.logicalXor(this,n)},r.prototype.where=function(n,e){return this.throwIfDisposed(),P.where(n,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},r.prototype.clipByValue=function(n,e){return this.throwIfDisposed(),P.clipByValue(this,n,e)},r.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},r.prototype.leakyRelu=function(n){return n===void 0&&(n=.2),this.throwIfDisposed(),P.leakyRelu(this,n)},r.prototype.prelu=function(n){return this.throwIfDisposed(),P.prelu(this,n)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},r.prototype.step=function(n){return n===void 0&&(n=0),this.throwIfDisposed(),P.step(this,n)},r.prototype.softmax=function(n){return n===void 0&&(n=-1),this.throwIfDisposed(),P.softmax(this,n)},r.prototype.logSoftmax=function(n){return n===void 0&&(n=-1),this.throwIfDisposed(),P.logSoftmax(this,n)},r.prototype.resizeBilinear=function(n,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,n,e)},r.prototype.resizeNearestNeighbor=function(n,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,n,e)},r.prototype.conv1d=function(n,e,t,a,o,i){return a===void 0&&(a="NWC"),o===void 0&&(o=1),this.throwIfDisposed(),P.conv1d(this,n,e,t,a,o,i)},r.prototype.conv2d=function(n,e,t,a,o,i){return a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]),this.throwIfDisposed(),P.conv2d(this,n,e,t,a,o,i)},r.prototype.conv2dTranspose=function(n,e,t,a,o){return this.throwIfDisposed(),P.conv2dTranspose(this,n,e,t,a,o)},r.prototype.depthwiseConv2D=function(n,e,t,a,o,i){return a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,n,e,t,a,o,i)},r.prototype.separableConv2d=function(n,e,t,a,o,i){return o===void 0&&(o=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,n,e,t,a,o,i)},r.prototype.avgPool=function(n,e,t,a){return this.throwIfDisposed(),P.avgPool(this,n,e,t,a)},r.prototype.maxPool=function(n,e,t,a){return this.throwIfDisposed(),P.maxPool(this,n,e,t,a)},r.prototype.localResponseNormalization=function(n,e,t,a){return n===void 0&&(n=5),e===void 0&&(e=1),t===void 0&&(t=1),a===void 0&&(a=.5),P.localResponseNormalization(this,n,e,t,a)},r.prototype.pool=function(n,e,t,a,o){return this.throwIfDisposed(),P.pool(this,n,e,t,a,o)},r.prototype.variable=function(n,e,t){return n===void 0&&(n=!0),this.throwIfDisposed(),Sn().makeVariable(this,n,e,t)},r.prototype.unsortedSegmentSum=function(n,e){return this.throwIfDisposed(),P.unsortedSegmentSum(this,n,e)},r.prototype.batchToSpaceND=function(n,e){return this.throwIfDisposed(),P.batchToSpaceND(this,n,e)},r.prototype.spaceToBatchND=function(n,e){return this.throwIfDisposed(),P.spaceToBatchND(this,n,e)},r.prototype.topk=function(n,e){return n===void 0&&(n=1),e===void 0&&(e=!0),this.throwIfDisposed(),P.topk(this,n,e)},r.prototype.stridedSlice=function(n,e,t,a,o,i,s,u){return a===void 0&&(a=0),o===void 0&&(o=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,n,e,t,a,o,i,s,u)},r.prototype.depthToSpace=function(n,e){return this.throwIfDisposed(),P.depthToSpace(this,n,e)},r.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},r}();Object.defineProperty(Ee,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Fi,oo,io,so,uo,Ht=function(r){function n(e,t,a,o){var i=r.call(this,e.shape,e.dtype,e.dataId,o)||this;return i.trainable=t,i.name=a,i}return bn(n,r),n.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!ze(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Sn().disposeTensor(this),this.dataId=e.dataId,Sn().incRef(this,null)},n.prototype.dispose=function(){Sn().disposeVariable(this),this.isDisposedInternal=!0},n}(Ee);Object.defineProperty(Ht,Symbol.hasInstance,{value:function(r){return r instanceof Ee&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Fi||(Fi={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(oo||(oo={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(io||(io={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(so||(so={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(uo||(uo={}));var vl={float32:so,int32:oo,bool:io,complex64:uo};function Ge(r,n){if(r==="string"||n==="string"){if(r==="string"&&n==="string")return"string";throw new Error("Can not upcast "+r+" with "+n)}return vl[r][n]}function Sa(r){return Ge(r,"int32")}function Ie(r,n){if(r.dtype===n.dtype)return[r,n];var e=Ge(r.dtype,n.dtype);return[r.cast(e),n.cast(e)]}function ml(r,n){E(r.dtype===n.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+n.dtype+") input must match"})}function zs(r){var n=[];return function e(t,a,o){if(t!=null){if(t instanceof Ee)return void a.push(t);if(i=t,!(!Array.isArray(i)&&typeof i!="object")){var i,s=t;for(var u in s){var c=s[u];o.has(c)||(o.add(c),e(c,a,o))}}}}(r,n,new Set),n}var Da,Pi=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var n in this.registeredVariables)this.registeredVariables[n].dispose()},r}(),gl=function(){function r(n){this.ENV=n,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Pi}return r.prototype.ready=function(){return X(this,void 0,void 0,function(){var n,e,t;return $(this,function(a){switch(a.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];n=this.getSortedBackends(),e=0,a.label=1;case 1:return e<n.length?(t=n[e],[4,this.initializeBackend(t).success]):[3,5];case 2:return a.sent()?[4,this.setBackend(t)]:[3,4];case 3:return a.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var n=this.initializeBackendsAndReturnBest(),e=n.name;if(n.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(n){return!(n in this.registry)&&(!(n in this.registryFactory)||this.initializeBackend(n).asyncInit)?null:this.registry[n]},r.prototype.findBackendFactory=function(n){return n in this.registryFactory?this.registryFactory[n].factory:null},r.prototype.registerBackend=function(n,e,t){return t===void 0&&(t=1),n in this.registryFactory?(console.warn(n+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[n]={factory:e,priority:t},!0)},r.prototype.setBackend=function(n){return X(this,void 0,void 0,function(){var e,t,a;return $(this,function(o){switch(o.label){case 0:if(this.registryFactory[n]==null)throw new Error("Backend name '"+n+"' not found in registry");return this.backendName=n,this.registry[n]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(n),t=e.success,e.asyncInit?[4,t]:[3,2]);case 1:return a=o.sent(),[3,3];case 2:a=t,o.label=3;case 3:if(!a)return[2,!1];o.label=4;case 4:return this.backendInstance=this.registry[n],this.setupRegisteredKernels(),this.profiler=new hl(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var n=this;Si(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(n.backendInstance)})},r.prototype.disposeRegisteredKernels=function(n){var e=this;Si(n).forEach(function(t){t.disposeFunc!=null&&t.disposeFunc(e.registry[n])})},r.prototype.initializeBackend=function(n){var e=this,t=this.registryFactory[n];if(t==null)throw new Error("Cannot initialize backend "+n+", no registration found.");try{var a=t.factory();if(Promise.resolve(a)===a){var o=++this.pendingBackendInitId,i=a.then(function(s){return!(o<e.pendingBackendInitId)&&(e.registry[n]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(o<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+n+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[n]=a,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+n+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(n){if(!(n in this.registryFactory))throw new Error(n+" backend not found in registry");this.backendName===n&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,n in this.registry&&(this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n]),delete this.registryFactory[n],this.backendName===n&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var n=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,t){return n.registryFactory[t].priority-n.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var n=this.getSortedBackends(),e=0;e<n.length;e++){var t=n[e],a=this.initializeBackend(t),o=a.success,i=a.asyncInit;if(i||o)return{name:t,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(n,e){var t=this.state.tensorInfo.get(e),a=t.backend,o=this.readSync(e);a.disposeData(e),t.backend=n,n.move(e,o,t.shape,t.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(n,e){var t,a=this,o=null;if(e==null){if(typeof n!="function")throw new Error("Please provide a function to tidy()");e=n}else{if(typeof n!="string"&&!(n instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=n}return this.scopedRun(function(){return a.startScope(o)},function(){return a.endScope(t)},function(){return(t=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),t})},r.prototype.scopedRun=function(n,e,t){n();try{var a=t();return e(),a}catch(o){throw e(),o}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(n){var e=this.makeTensorFromDataId(n.dataId,n.shape,n.dtype),t={x:n};return this.addTapeNode(this.state.activeScope.name,t,[e],function(a){return{x:function(){return a.toFloat()}}},[]),e},r.prototype.runKernel=function(n,e,t,a,o){return this.runKernelFunc(null,e,null,n,t,a,o)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(n,e,t){var a=this.backend.numDataIds(),o=0;t.forEach(function(u){o+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=a-e-o-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+n+"'")},r.prototype.runKernelFunc=function(n,e,t,a,o,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();a==null&&(a=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(x){f&&(l=x.map(function(b){return c.keep(c.clone(b))}))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=As(a,this.backendName);return h=g!=null?function(){var x=c.backend.numDataIds();m=g.kernelFunc({inputs:e,attrs:o,backend:c.backend});var b=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(a,x,b);var y=b.map(function(C){var S=C.dataId,k=C.shape,R=C.dtype;return c.makeTensorFromDataId(S,k,R)}),w=y.filter(function(C,S){return s[S]});return d((i||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();m=c.tidy(function(){return n(c.backend,d)});var b=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(a,x,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(a,e,function(){return h()}):h()}),f&&this.addTapeNode(a,e,u,t,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:a,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(m)?u:u[0]},r.prototype.makeTensor=function(n,e,t,a){if(n==null)throw new Error("Values passed to engine.makeTensor() are null");t=t||"float32",a=a||this.backend;var o=n;t==="string"&&Eo(n[0])&&(o=n.map(function(l){return ll(l)}));var i=a.write(o,e,t),s=new Ee(e,t,i,this.nextTensorId());if(this.incRef(s,a),t==="string"){var u=this.state.tensorInfo.get(i),c=sl(o);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(n,e,t,a){var o=new Ee(e,t=t||"float32",n,this.nextTensorId());return this.incRef(o,a),o},r.prototype.makeVariable=function(n,e,t,a){e===void 0&&(e=!0),t=t||this.nextVariableId().toString(),a!=null&&a!==n.dtype&&(n=n.asType(a));var o=new Ht(n,e,t,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error("Variable with name "+o.name+" was already registered");return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o},r.prototype.incRef=function(n,e){var t=this.state.tensorInfo.has(n.dataId)?this.state.tensorInfo.get(n.dataId).refCount:0;if(this.state.numTensors++,n.dtype==="string"&&this.state.numStringTensors++,t===0){this.state.numDataBuffers++;var a=0;n.dtype!=="complex64"&&n.dtype!=="string"&&(a=n.size*Ps(n.dtype)),this.state.tensorInfo.set(n.dataId,{backend:e||this.backend,dtype:n.dtype,shape:n.shape,bytes:a,refCount:0}),this.state.numBytes+=a}this.state.tensorInfo.get(n.dataId).refCount++,n instanceof Ht||this.track(n)},r.prototype.disposeTensor=function(n){if(this.state.tensorInfo.has(n.dataId)){this.state.numTensors--,n.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(n.dataId);e.refCount<=1?(n.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(n.dataId),this.state.tensorInfo.delete(n.dataId)):this.state.tensorInfo.get(n.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var n in this.state.registeredVariables){var e=this.state.registeredVariables[n];this.disposeVariable(e)}},r.prototype.disposeVariable=function(n){this.disposeTensor(n),this.state.registeredVariables[n.name]!=null&&delete this.state.registeredVariables[n.name]},r.prototype.memory=function(){var n=this.backend.memory();return n.numTensors=this.state.numTensors,n.numDataBuffers=this.state.numDataBuffers,n.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(n.unreliable=!0,n.reasons==null&&(n.reasons=[]),n.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),n},r.prototype.profile=function(n){return X(this,void 0,void 0,function(){var e,t;return $(this,function(a){return this.state.profiling=!0,e=this.state.numBytes,t=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=n(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(o){return o.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-t,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(n,e,t,a,o){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:n,inputs:e,outputs:t,saved:o},u=Zc(n);u!=null&&(a=u.gradFunc),a!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=t[f],d=dr(h.size,h.dtype);return i.makeTensor(d,h.shape,h.dtype)}return l}),a(c.length>1?c:c[0],o)}),this.state.activeTape.push(s)},r.prototype.keep=function(n){return n.kept=!0,n},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(n){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};n&&(e.name=n),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(n){for(var e=this,t=zs(n),a=new Set(t.map(function(u){return u.id})),o=0;o<this.state.activeScope.track.length;o++){var i=this.state.activeScope.track[o];i.kept||a.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(n,e,t,a){var o=this;if(a===void 0&&(a=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),t!=null&&t.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+t.dtype+"'");var i=this.scopedRun(function(){return o.startTape()},function(){return o.endTape()},function(){return o.tidy("forward",n)});E(i instanceof Ee,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(C=u[d]).inputs;for(var v in p){for(var m=p[v],g=!1,x=0;x<c.length;x++)if(f[m.id]){C.outputs.forEach(function(I){return f[I.id]=!0}),g=!0,h[C.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(C=u[d]).inputs,x=0;x<C.outputs.length;x++)if(b[C.outputs[x].id]){for(var v in p)b[p[v].id]=!0,y[C.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var C;if(h[(C=u[d]).id]&&y[C.id]){var S={};for(var v in C.inputs){var k=C.inputs[v];f[k.id]&&(S[v]=k)}var R=Object.assign({},C);R.inputs=S,R.outputs=C.outputs,w.push(R)}}return w}(this.state.activeTape,e,i);if(!a&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=t??(u=i.shape,c=Os(Y(u),"float32"),T.makeTensor(c,u,"float32")),function(h,d,p){for(var v=function(g){var x=d[g],b=[];if(x.outputs.forEach(function(S){var k=h[S.id];k!=null?b.push(k):b.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(S){if(!(S in y))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(y)+".");var k=p(function(){return y[S]()});if(k.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+k.dtype+"'");var R=x.inputs[S];if(!ze(k.shape,R.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+S+"' has shape '"+k.shape+"', which does not match the shape of the input '"+R.shape+"'");if(h[R.id]==null)h[R.id]=k;else{var I=h[R.id];h[R.id]=I.add(k),I.dispose()}};for(var C in x.inputs)w(C)},m=d.length-1;m>=0;m--)v(m)}(l,s,function(h){return o.tidy(h)});var f=e.map(function(h){return l[h.id]});return o.state.gradientDepth===0&&(o.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),o.state.activeTape=null),{value:i,grads:f}})},r.prototype.customGrad=function(n){var e=this;return E(ro(n),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var t,a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];E(a.every(function(s){return s instanceof Ee}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return a.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((t=n.apply(void 0,a.concat([u]))).value instanceof Ee,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(ro(t.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),t.value},i,function(s,u){var c=t.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===a.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(h){return h instanceof Ee}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},r.prototype.readSync=function(n){return this.state.tensorInfo.get(n).backend.readSync(n)},r.prototype.read=function(n){return this.state.tensorInfo.get(n).backend.read(n)},r.prototype.time=function(n){return X(this,void 0,void 0,function(){var e,t;return $(this,function(a){switch(a.label){case 0:return e=kn(),[4,this.backend.time(n)];case 1:return(t=a.sent()).wallMs=kn()-e,[2,t]}})})},r.prototype.track=function(n){return this.state.activeScope!=null&&(n.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(n)),n},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var n in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Pi,this.registry)this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),T=function(){var r=function(){if(Da==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Da=e}return Da}();if(r._tfengine==null){var n=new Jc(r);r._tfengine=new gl(n)}return function(e){Ds=e}(r._tfengine.ENV),Sn=function(){return r._tfengine},r._tfengine}();function Us(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Vn=O();Vn.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Vn.registerFlag("IS_BROWSER",function(){return Us()}),Vn.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Vn.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Vn.registerFlag("PROD",function(){return!1}),Vn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Vn.getBool("DEBUG")}),Vn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Vn.registerFlag("IS_TEST",function(){return!1});var or,sn,on,ht={},Aa={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function yl(r,n){ht[r]=n}function On(r){r in ht||(ht[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var t=function(a){if(typeof OffscreenCanvas<"u"&&a===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return t.addEventListener("webglcontextlost",function(a){a.preventDefault(),delete ht[e]},!1),e===1?t.getContext("webgl",Aa)||t.getContext("experimental-webgl",Aa):t.getContext("webgl2",Aa)}(r));var n=ht[r];return n.isContextLost()?(delete ht[r],On(r)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),ht[r])}function ia(r,n){return[n,r]}function er(r){var n=Y(r);return to(Math.ceil(n/4))}function pr(r,n){return[Math.max(1,Math.ceil(n/2)),Math.max(1,Math.ceil(r/2))]}function Ro(r,n){var e,t,a,o,i,s,u,c,l,f=r;return O().getNumber("WEBGL_VERSION")===2?(e=f.R32F,t=f.R16F,a=f.RGBA16F,o=f.RGBA32F,i=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=r.RGBA,t=r.RGBA,a=r.RGBA,o=f.RGBA,i=r.RGBA,s=4,u=4,c=n!=null?n.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:t,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,n,e){var t=e();return n&&function(a){var o=a.getError();if(o!==a.NO_ERROR)throw new Error("WebGL Error: "+Cl(a,o))}(r),t}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(or||(or={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(sn||(sn={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(on||(on={}));var xl=596e-10,bl=65504;function wl(r){return!!(O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||xl<Math.abs(r)&&Math.abs(r)<bl)}function Cl(r,n){switch(n){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+n}}function _r(r,n,e){return qn(r,n,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function _l(r,n,e){var t=qn(r,n,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(r,n,function(){return r.shaderSource(t,e)}),J(r,n,function(){return r.compileShader(t)}),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function El(r,n,e){var t=qn(r,n,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(r,n,function(){return r.shaderSource(t,e)}),J(r,n,function(){return r.compileShader(t)}),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw function(a,o){var i=Rl.exec(o);if(i==null)return console.log("Couldn't parse line number in error: "+o),void console.log(a);for(var s=+i[1],u=a.split(`
`),c=u.length.toString().length+2,l=u.map(function(m,g){return Ot((g+1).toString(),c)+m}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(o.split(`
`)[0]),console.log("%c "+Ot(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(e,r.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}var Ta,Na,Rl=/ERROR: [0-9]+:([0-9]+):/g;function Il(r,n){return qn(r,n,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function kl(r,n,e){if(J(r,n,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Fa(r,n,e){if(J(r,n,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Sl(r,n,e){var t=qn(r,n,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,t)}),J(r,n,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),t}function Dl(r,n,e){var t=qn(r,n,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,n,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t)}),J(r,n,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),t}function Al(r,n){return qn(r,n,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Tl(r,n){var e=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||n<=0){var t="["+r+"x"+n+"]";throw new Error("Requested texture size "+t+" is invalid.")}if(r>e||n>e)throw t="["+r+"x"+n+"]",new Error("Requested texture size "+t+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Nl(r,n){return qn(r,n,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Mi(r,n,e,t,a,o,i,s){var u=r.getAttribLocation(e,t);return u!==-1&&(J(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,a)}),J(r,n,function(){return r.vertexAttribPointer(u,o,r.FLOAT,!1,i,s)}),J(r,n,function(){return r.enableVertexAttribArray(u)}),!0)}function Fl(r,n,e,t){Ll(r,t),J(r,n,function(){return r.activeTexture(r.TEXTURE0+t)}),J(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function Pl(r,n,e,t){return qn(r,n,function(){return r.getUniformLocation(e,t)},'uniform "'+t+'" not present in program.')}function Ml(r,n,e){return r.getUniformLocation(n,e)}function Ol(r,n,e,t,a,o){J(r,n,function(){return Fl(r,n,t,o)}),J(r,n,function(){return r.uniform1i(a,o)})}function Pa(r,n,e,t){J(r,n,function(){return r.bindFramebuffer(r.FRAMEBUFFER,t)}),J(r,n,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function Oi(r,n,e){J(r,n,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),J(r,n,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function Er(r){var n=r.checkFramebufferStatus(r.FRAMEBUFFER);if(n!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Bl(r,n))}function Bl(r,n){switch(n){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+n}}function qn(r,n,e,t){var a=J(r,n,function(){return e()});if(a==null)throw new Error(t);return a}function Ll(r,n){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,t=n+r.TEXTURE0;if(t<r.TEXTURE0||t>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function zr(r,n){return n===void 0&&(n=2),Y(r.slice(0,r.length-n))}function Ur(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Ma(r){var n=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(n=[zr(r)].concat(Ur(r))),n}function Wl(r,n){var e;n===void 0&&(n=!1);var t=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n&&(t*=2,(r=r.map(function(c,l){return l>=r.length-2?Fs(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var a=pt(r);r=a.newShape}var o=Y(r);if(r.length<=1&&o<=t)return[1,o];if(r.length===2&&r[0]<=t&&r[1]<=t)return r;if(r.length===3&&r[0]*r[1]<=t&&r[2]<=t)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=t&&r[1]*r[2]<=t)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=t&&r[3]<=t)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=t&&r[1]*r[2]*r[3]<=t)return[r[0],r[1]*r[2]*r[3]];if(n){var i=zr(r),s=2,u=2;return r.length&&(s=(e=Ur(r))[0],u=e[1]),to(o=i*(s/2)*(u/2)).map(function(c){return 2*c})}return to(o)}function Rr(r){return r%2==0}function Ir(r,n){if(ze(r=r.slice(-2),n=n.slice(-2))||!r.length||!n.length||r[0]===0||r[1]===0||n[0]===0||n[1]===0)return!0;if(r.length!==n.length){var e=r.slice(-1)[0],t=n.slice(-1)[0];if(e===t||Rr(e)&&Rr(t)&&(r[0]===1||n[0]===1))return!0}return r[1]===n[1]&&Rr(r[0])&&Rr(n[0])}function zl(r){if(Ta==null){var n=On(r);Ta=n.getParameter(n.MAX_TEXTURE_SIZE)}return Ta}function Ul(r){if(Na==null){var n=On(r);Na=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Na)}function Vl(r){if(r===0)return 0;var n=On(r);return pn(n,"EXT_disjoint_timer_query_webgl2")&&r===2?2:pn(n,"EXT_disjoint_timer_query")?1:0}function pn(r,n){return r.getExtension(n)!=null}function Bi(r){try{if(On(r)!=null)return!0}catch{return!1}return!1}function Gl(r){if(r===0)return!1;var n=On(r);if(r===1){if(!pn(n,"OES_texture_float"))return!1}else if(!pn(n,"EXT_color_buffer_float"))return!1;return co(n)}function Hl(r){if(r===0)return!1;var n=On(r);if(r!==1){if(pn(n,"EXT_color_buffer_float"))return co(n);if(pn(n,"EXT_color_buffer_half_float")){var e=n.getExtension("EXT_color_buffer_half_float");return function(t,a){var o=Ro(t,a),i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,o.internalFormatHalfFloat,1,1,0,o.textureFormatFloat,o.textureTypeHalfFloat,null);var s=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0);var u=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(i),t.deleteFramebuffer(s),u}(n,e)}return!1}return!!pn(n,"OES_texture_float")&&!!pn(n,"WEBGL_color_buffer_float")&&co(n)}function co(r){var n=Ro(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,n.internalFormatFloat,1,1,0,n.textureFormatFloat,n.textureTypeFloat,null);var t=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,t),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var a=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(t),a}function jl(r){return r===2&&On(r).fenceSync!=null}var te=O();function Vs(r){O().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function K(r,n){return T.tidy(r,n)}function en(r){zs(r).forEach(function(n){return n.dispose()})}function ql(r){return T.keep(r)}function Vr(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];O().getBool("IS_TEST")||console.warn.apply(console,r)}function ut(r,n){var e=r;if(Tn(r))return n==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var t=[];Array.isArray(e)||Tn(e)&&n!=="string";)t.push(e.length),e=e[0];return Array.isArray(r)&&O().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function a(o,i,s){if(s=s||[],!Array.isArray(o)&&!Tn(o))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+o.length+" elements"}),E(o.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+o.length+" elements"});for(var u=i.slice(1),c=0;c<o.length;++c)a(o[c],u,s.concat(c))}(r,t,[]),t}function Li(r,n,e,t){if(r!=null&&(r!=="numeric"&&r!==n||r==="numeric"&&n==="string"))throw new Error("Argument '"+e+"' passed to '"+t+"' must be "+r+" tensor, but got "+n+" tensor")}function _(r,n,e,t){if(t===void 0&&(t="numeric"),r instanceof Ee)return Li(t,r.dtype,n,e),r;var a=hr(r);if(a!=="string"&&["bool","int32","float32"].indexOf(t)>=0&&(a=t),Li(t,a,n,e),r==null||!Tn(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var o=r==null?"null":r.constructor.name;throw new Error("Argument '"+n+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+o+"'")}var i=ut(r,a);Tn(r)||Array.isArray(r)||(r=[r]);var s=a!=="string"?Ms(r,a,O().getBool("DEBUG")):Gt(r,[],!0);return T.makeTensor(s,i,a)}function Gr(r,n,e,t){if(t===void 0&&(t="numeric"),!Array.isArray(r))throw new Error("Argument "+n+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(a,o){return _(a,n+"["+o+"]",e)},t)}function Gs(r,n){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==n-1-e)return!1;return!0}function Kl(r,n,e){for(var t=r.length+n.length,a=[],o=0,i=0,s=0;s<t;s++)e.indexOf(s)===-1?a.push(r[o++]):a.push(n[i++]);return a}function je(r,n){for(var e=[],t=r.length,a=0;a<t;a++)n.indexOf(a)===-1&&e.push(r[a]);return[e,n.map(function(o){return r[o]})]}function nn(r,n){return Kl(r,n.map(function(e){return 1}),n)}function an(r,n,e){E(Gs(n,e),function(){return r+" supports only inner-most axes for now. Got axes "+n+" and rank-"+e+" input."})}function Bn(r,n){if(Gs(r,n))return null;for(var e=[],t=0;t<n;++t)r.indexOf(t)===-1&&e.push(t);return r.forEach(function(a){return e.push(a)}),e}function Io(r){return r.map(function(n,e){return[e,n]}).sort(function(n,e){return n[1]-e[1]}).map(function(n){return n[0]})}function Ln(r,n){for(var e=[],t=n-r;t<n;++t)e.push(t);return e}function Xl(r,n){var e=r[0].length;r.forEach(function(a,o){E(a.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+o+"] must be the same as the rank of the rest ("+e+")"})}),E(n>=0&&n<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var t=r[0];r.forEach(function(a,o){for(var i=0;i<e;i++)E(i===n||a[i]===t[i],function(){return"Error in concat"+e+"D: Shape of tensors["+o+"] ("+a+") does not match the shape of the rest ("+t+") along the non-concatenated axis "+o+"."})})}function jt(r,n){for(var e=r[0].slice(),t=1;t<r.length;t++)e[n]+=r[t][n];return e}function D(r){var n=Object.keys(r);if(n.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+n.length+" keys.");var e=n[0],t=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var a=function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];T.startScope(e);try{var s=t.apply(void 0,o);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(a,"name",{value:e,configurable:!0}),a}te.registerFlag("HAS_WEBGL",function(){return te.getNumber("WEBGL_VERSION")>0}),te.registerFlag("WEBGL_VERSION",function(){return Bi(2)?2:Bi(1)?1:0}),te.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return te.get("WEBGL_VERSION")===2}),te.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),te.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),te.registerFlag("WEBGL_PACK",function(){return te.getBool("HAS_WEBGL")}),te.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_CLIP",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),te.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_REDUCE",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_LAZILY_UNPACK",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_CONV_IM2COL",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return zl(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Ul(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=te.getNumber("WEBGL_VERSION");return r===0?0:Vl(r)}),te.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return te.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),te.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Gl(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!te.getBool("WEBGL_FORCE_F16_TEXTURES")&&te.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),te.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Hl(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return jl(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return te.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Ws=Vs;var Ve=D({complex_:function(r,n){var e=_(r,"real","complex"),t=_(n,"imag","complex");return ye(e.shape,t.shape,"real and imag shapes, "+e.shape+" and "+t.shape+", must match in call to tf.complex()."),T.runKernelFunc(function(a){return a.complex(e,t)},{$real:e,$imag:t})}}),dn=D({real_:function(r){var n=_(r,"input","real");return T.runKernelFunc(function(e){return e.real(n)},{$input:n})}}),Dn=D({imag_:function(r){var n=_(r,"input","imag");return T.runKernelFunc(function(e){return e.imag(n)},{$input:n})}});function He(r,n,e){return ct(r,n,ut(r,e),e)}function ct(r,n,e,t){if(t==null&&(t=hr(r)),t==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Tn(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(n!=null){Bs(n);var a=Y(n),o=Y(e);E(a===o,function(){return"Based on the provided shape, ["+n+"], the tensor should have "+a+" values but has "+o});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==Y(n.slice(i));E(e[i]===n[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+n+"). "})}}return Tn(r)||Array.isArray(r)||(r=[r]),n=n||e,r=t!=="string"?Ms(r,t,O().getBool("DEBUG")):Gt(r,[],!0),T.makeTensor(r,n,t)}function j(r,n){if((Tn(r)&&n!=="string"||Array.isArray(r))&&n!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(n==="string"&&Tn(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ct(r,[],[],n)}function Ne(r,n){Kt(r);var e=ut(r,n);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ct(r,null,e,n)}function at(r,n,e){if(Kt(r),n!=null&&n.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var t=ut(r,e);if(t.length!==2&&t.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ct(r,n,t,e)}function ko(r,n,e){if(Kt(r),n!=null&&n.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var t=ut(r,e);if(t.length!==3&&t.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ct(r,n,t,e)}function Qe(r,n,e){if(Kt(r),n!=null&&n.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var t=ut(r,e);if(t.length!==4&&t.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ct(r,n,t,e)}function $l(r,n,e){if(Kt(r),n!=null&&n.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var t=ut(r,e);if(t.length!==5&&t.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return ct(r,n,t,e)}function Yl(r,n,e){if(Kt(r),n!=null&&n.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var t=ut(r,e);if(t.length!==6&&t.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return ct(r,n=n||t,t,e)}function Jl(r,n,e,t){return n===void 0&&(n=!0),T.makeVariable(r,n,e,t)}function Xt(r,n){if(n===void 0&&(n="float32"),n==="complex64"){var e=Xt(r,"float32"),t=we(r,"float32");return Ve(e,t)}var a=Os(Y(r),n);return T.makeTensor(a,r,n)}function we(r,n){if(n===void 0&&(n="float32"),n==="complex64"){var e=we(r,"float32"),t=we(r,"float32");return Ve(e,t)}var a=dr(Y(r),n);return T.makeTensor(a,r,n)}function Fn(r,n,e){return T.runKernelFunc(function(t){return t.fill(r,n,e)},{})}function Ql(r,n,e){if(e<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc(function(t){return t.linspace(r,n,e)},{})}function Hr(r,n,e,t){if(e===void 0&&(e=1),t===void 0&&(t="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===n||r<n&&e<0||n<r&&e>1)return we([0],t);var a=dr(Math.abs(Math.ceil((n-r)/e)),t);n<r&&e===1&&(e=-1),a[0]=r;for(var o=1;o<a.length;o++)a[o]=a[o-1]+e;return Ne(a,t)}var Hs=D({onesLike_:function(r){var n=_(r,"x","onesLike");if(n.dtype==="complex64"){var e=Hs(dn(n)),t=ve(Dn(n));return Ve(e,t)}return T.runKernelFunc(function(a){return a.onesLike(n)},{$x:n},function(a,o){return{$x:function(){return ve(a)}}})}}),ve=D({zerosLike_:function(r){var n=_(r,"x","zerosLike");return T.runKernelFunc(function(e){return e.zerosLike(n)},{$x:n},function(e,t){return{$x:function(){return ve(e)}}})}}),Pe=D({concat_:function(r,n){n===void 0&&(n=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=Gr(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),n=Le(n,e[0].shape)[0];var t=jt(e.map(function(s){return s.shape}),n);if(Y(t)===0)return He([],t);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var a=e.map(function(s){return s.shape});Xl(a,n);var o=e,i={axis:n};return T.runKernelFunc(function(s){return s.concat(e,n)},o,function(s){var u=a.map(function(c){return c[n]});return So(s,u,n).map(function(c){return function(){return c}})},"Concat",i)}}),Zl=D({concat1d_:function(r){return Pe(r,0)}}),ef=D({concat2d_:function(r,n){return Pe(r,n)}}),nf=D({concat3d_:function(r,n){return Pe(r,n)}}),tf=D({concat4d_:function(r,n){return Pe(r,n)}}),So=D({split_:function(r,n,e){e===void 0&&(e=0);var t,a=_(r,"x","split");return e=Le(e,a.shape)[0],typeof n=="number"?(E(a.shape[e]%n==0,function(){return"Number of splits must evenly divide the axis."}),t=new Array(n).fill(a.shape[e]/n)):(E(a.shape[e]===n.reduce(function(o,i){return o+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),t=n),T.runKernelFunc(function(o){return o.split(a,t,e)},{$x:a},function(o){return{$x:function(){return Pe(o,e)}}})}});function bt(r,n){return r(n={exports:{}},n.exports),n.exports}var rf=bt(function(r){(function(n,e,t){function a(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function o(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new a(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&o(l,c),f.state=function(){return o(c,{})}),f}e&&e.exports?e.exports=i:this.alea=i})(0,r)}),af=bt(function(r){(function(n,e,t){function a(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function o(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new a(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&o(l,c),f.state=function(){return o(c,{})}),f}e&&e.exports?e.exports=i:this.xor128=i})(0,r)}),of=bt(function(r){(function(n,e,t){function a(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function o(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new a(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&o(l,c),f.state=function(){return o(c,{})}),f}e&&e.exports?e.exports=i:this.xorwow=i})(0,r)}),sf=bt(function(r){(function(n,e,t){function a(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function o(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new a(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&o(l,c),f.state=function(){return o(c,{})}),f}e&&e.exports?e.exports=i:this.xorshift7=i})(0,r)}),uf=bt(function(r){(function(n,e,t){function a(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,v,m=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(v=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(v=v+1640531527|0,d=(f=m[127&p]^=h+v)==0?d+1:0);for(d>=128&&(m[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=m[d+34&127],f=m[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,m[d]=h^f;c.w=v,c.X=m,c.i=d}(u,s)}function o(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new a(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&o(l,c),f.state=function(){return o(c,{})}),f}e&&e.exports?e.exports=i:this.xor4096=i})(0,r)}),cf=bt(function(r){(function(n,e,t){function a(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function o(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new a(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&o(l,c),f.state=function(){return o(c,{})}),f}e&&e.exports?e.exports=i:this.tychei=i})(0,r)}),dt=bt(function(r){(function(n,e){var t,a=this,o=256,i=6,s="random",u=e.pow(o,i),c=e.pow(2,52),l=2*c,f=o-1;function h(g,x,b){var y=[],w=v(function k(R,I){var N,A=[],B=typeof R;if(I&&B=="object")for(N in R)try{A.push(k(R[N],I-1))}catch{}return A.length?A:B=="string"?R:R+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,m(n)]:g??function(){try{var k;return t&&(k=t.randomBytes)?k=k(o):(k=new Uint8Array(o),(a.crypto||a.msCrypto).getRandomValues(k)),m(k)}catch{var R=a.navigator,I=R&&R.plugins;return[+new Date,a,I,a.screen,m(n)]}}(),3),y),C=new d(y),S=function(){for(var k=C.g(i),R=u,I=0;k<c;)k=(k+I)*o,R*=o,I=C.g(1);for(;k>=l;)k/=2,R/=2,I>>>=1;return(k+I)/R};return S.int32=function(){return 0|C.g(4)},S.quick=function(){return C.g(4)/4294967296},S.double=S,v(m(C.S),n),(x.pass||b||function(k,R,I,N){return N&&(N.S&&p(N,C),k.state=function(){return p(C,{})}),I?(e[s]=k,R):k})(S,w,"global"in x?x.global:this==e,x.state)}function d(g){var x,b=g.length,y=this,w=0,C=y.i=y.j=0,S=y.S=[];for(b||(g=[b++]);w<o;)S[w]=w++;for(w=0;w<o;w++)S[w]=S[C=f&C+g[w%b]+(x=S[w])],S[C]=x;(y.g=function(k){for(var R,I=0,N=y.i,A=y.j,B=y.S;k--;)R=B[N=f&N+1],I=I*o+B[f&(B[N]=B[A=f&A+R])+(B[A]=R)];return y.i=N,y.j=A,I})(o)}function p(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function v(g,x){for(var b,y=g+"",w=0;w<y.length;)x[f&w]=f&(b^=19*x[f&w])+y.charCodeAt(w++);return m(x)}function m(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,v(e.random(),n),r.exports){r.exports=h;try{t=require("crypto")}catch{}}})([],Math)});dt.alea=rf,dt.xor128=af,dt.xorwow=of,dt.xorshift7=sf,dt.xor4096=uf,dt.tychei=cf;var sa=dt.alea,Do=function(){function r(n,e,t,a,o){this.mean=n,this.stdDev=e,this.dtype=t,this.nextVal=NaN,this.truncated=a,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=o||Math.random();this.random=sa(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var n=this.nextVal;return this.nextVal=NaN,n}for(var e,t,a=!1;!a;){var o=void 0,i=void 0,s=void 0;do s=(o=2*this.random()-1)*o+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*o*u,t=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(a=!0)}return this.truncated&&!this.isValidTruncated(t)||(this.nextVal=this.convertValue(t)),this.convertValue(e)},r.prototype.convertValue=function(n){return this.dtype==null||this.dtype==="float32"?n:Math.round(n)},r.prototype.isValidTruncated=function(n){return n<=this.upper&&n>=this.lower},r}(),lf=function(){function r(n,e,t,a){this.alpha=n,this.beta=1/e,this.dtype=t;var o=a||Math.random();this.randu=sa(o.toString()),this.randn=new Do(0,1,t,!1,this.randu()),this.d=n<1?n+2/3:n-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var n,e,t,a,o,i;;){do a=this.randn.nextValue(),i=1+this.c*a;while(i<=0);if(i*=i*i,e=1-.331*(n=a*a)*n,t=.5*n+this.d*(1-i+Math.log(i)),(o=this.randu())<e||Math.log(o)<t)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(n){return this.dtype==="float32"?n:Math.round(n)},r}(),ff=function(){function r(n,e,t,a){var o=this;if(n===void 0&&(n=0),e===void 0&&(e=1),this.canReturnFloat=function(){return o.dtype==null||o.dtype==="float32"},this.min=n,this.range=e-n,this.dtype=t,a==null&&(a=Math.random()),typeof a=="number"&&(a=a.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+n+" - "+e+" <= 1 and dtype is not float");this.random=sa(a)}return r.prototype.convertValue=function(n){return this.canReturnFloat()?n:Math.round(n)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function ae(r,n,e){return n===void 0&&(n="float32"),n=n||"float32",Bs(r),new ar(r,n,e)}function hf(r,n){n===void 0&&(n=!1),console.log(r.toString(n))}var js=D({batchToSpaceND_:function(r,n,e){var t=_(r,"x","batchToSpaceND"),a=n.reduce(function(o,i){return o*i});return E(t.rank>=1+n.length,function(){return"input rank is "+t.rank+" but should be > than blockShape.length "+n.length}),E(e.length===n.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+n.length}),E(t.shape[0]%a==0,function(){return"input tensor batch is "+t.shape[0]+" but is not divisible by the product of the elements of blockShape "+n.join(" * ")+" === "+a}),T.runKernelFunc(function(o){return o.batchToSpaceND(t,n,e)},{$x:t},function(o){return{$x:function(){return o.spaceToBatchND(n,e)}}})}}),df=D({broadcastTo_:function(r,n){var e=_(r,"broadcastTo","x"),t=e.shape;if(n.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+n+"].");if(n.length<e.rank)throw new Error("broadcastTo(): shape.length="+n.length+" < input.rank="+e.rank+".");if(n.length>e.rank){for(var a=e.shape.slice();a.length<n.length;)a.unshift(1);e=e.reshape(a)}for(var o=Array.from(n),i=n.length-1;i>=0;i--)if(e.shape[i]===n[i])o[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+t+"] cannot be broadcast to ["+n+"].");var s=o.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():T.runKernelFunc(function(u){return u.tile(e,o)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),pf=D({cast_:function(r,n){var e=_(r,"x","cast");if(!ol(n))throw new Error("Failed to cast to unknown dtype "+n);if(n==="string"&&e.dtype!=="string"||n!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var t={dtype:n};return T.runKernelFunc(function(a){return a.cast(e,n)},{x:e},function(a){return{x:function(){return a.clone()}}},"Cast",t)}}),vf=D({clone_:function(r){var n=_(r,"x","clone",null);return T.runKernelFunc(function(){return T.makeTensorFromDataId(n.dataId,n.shape,n.dtype)},{$x:n},function(e){return{$x:function(){return e.toFloat()}}})}}),mf=D({cumsum_:function(r,n,e,t){n===void 0&&(n=0),e===void 0&&(e=!1),t===void 0&&(t=!1);var a=_(r,"x","cumsum"),o=Bn([n|=0],a.rank),i=a;o!=null&&(i=a.transpose(o));var s=Ln(1,a.rank)[0],u=T.runKernelFunc(function(c){return c.cumsum(i,s,e,t)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(n,e,!t)}}});return o!=null&&(u=u.transpose(o)),u}}),gf=D({depthToSpace_:function(r,n,e){e===void 0&&(e="NHWC");var t=_(r,"x","depthToSpace"),a=e==="NHWC"?t.shape[1]:t.shape[2],o=e==="NHWC"?t.shape[2]:t.shape[3],i=e==="NHWC"?t.shape[3]:t.shape[1];return E(a*n>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+n+`  for depthToSpace with input shape
      `+t.shape}),E(o*n>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+n+` for depthToSpace with input shape
          `+t.shape}),E(i%(n*n)==0,function(){return"Dimension size must be evenly divisible by "+n*n+" but is "+i+" for depthToSpace with input shape "+t.shape}),T.runKernelFunc(function(s){return s.depthToSpace(t,n,e)},{$x:t})}}),hn=D({expandDims_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","expandDims",null);E(n<=e.rank,function(){return"Axis must be <= rank of the tensor"});var t=e.shape.slice();return n<0&&(E(-(e.rank+1)<=n,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),n=e.rank+n+1),t.splice(n,0,1),yn(e,t)}}),qs=D({eye_:function(r,n,e,t){t===void 0&&(t="float32"),n==null&&(n=r);for(var a=ae([r,n],t),o=r<=n?r:n,i=0;i<o;++i)a.set(1,i,i);var s=a.toTensor().as2D(r,n);if(e==null)return s;if(e.length===1)return Bt(hn(s,0),[e[0],1,1]);if(e.length===2)return Bt(hn(hn(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Bt(hn(hn(hn(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),yf=D({multinomial_:function(r,n,e,t){t===void 0&&(t=!1);var a=_(r,"logits","multinomial"),o=a.size,i=a.rank;if(o<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+o+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?a.as2D(1,-1):a,u=T.runKernelFunc(function(c){return c.multinomial(s,t,n,e)},{logits2D:s});return i===1?u.as1D():u}}),lo=D({oneHot_:function(r,n,e,t){if(e===void 0&&(e=1),t===void 0&&(t=0),n<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+n);var a=_(r,"indices","oneHot","int32"),o=a.shape.concat([n]);return a=a.flatten(),T.runKernelFunc(function(i){return i.oneHot(a,n,e,t)},{$indices:a},function(i){return{$indices:function(){return we(a.shape,"float32")}}}).reshape(o)}}),wt=D({pad_:function(r,n,e){e===void 0&&(e=0);var t=_(r,"x","pad");if(t.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var a={paddings:n,constantValue:e};return T.runKernelFunc(function(o){return o.pad(t,n,e)},{x:t},function(o){var i=n.map(function(s){return s[0]});return{x:function(){return o.slice(i,t.shape)}}},"PadV2",a)}}),xf=D({pad1d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),wt(r,[n],e)}}),bf=D({pad2d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===2&&n[0].length===2&&n[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wt(r,n,e)}}),wf=D({pad3d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===3&&n[0].length===2&&n[1].length===2&&n[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wt(r,n,e)}}),Cf=D({pad4d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===4&&n[0].length===2&&n[1].length===2&&n[2].length===2&&n[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wt(r,n,e)}}),_f=D({rand_:function(r,n,e){var t=Y(r),a=null;if(e==null||e==="float32")a=new Float32Array(t);else if(e==="int32")a=new Int32Array(t);else{if(e!=="bool")throw new Error("Unknown data type "+e);a=new Uint8Array(t)}for(var o=0;o<t;o++)a[o]=n();return T.makeTensor(a,r,e)}}),Ef=D({randomNormal_:function(r,n,e,t,a){if(n===void 0&&(n=0),e===void 0&&(e=1),t!=null&&t==="bool")throw new Error("Unsupported data type "+t);for(var o=new Do(n,e,t,!1,a),i=ae(r,t),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Rf=D({randomGamma_:function(r,n,e,t,a){if(e===void 0&&(e=1),t===void 0&&(t="float32"),e==null&&(e=1),t==null&&(t="float32"),t!=="float32"&&t!=="int32")throw new Error("Unsupported data type "+t);for(var o=new lf(n,e,t,a),i=ae(r,t),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Ks=D({randomUniform_:function(r,n,e,t,a){n===void 0&&(n=0),e===void 0&&(e=1),t===void 0&&(t="float32");for(var o=ae(r,t),i=new ff(n,e,null,a),s=0;s<o.values.length;s++)o.values[s]=i.nextValue();return o.toTensor()}}),yn=D({reshape_:function(r,n){var e=_(r,"x","reshape",null);n=rl(n,e.size),E(e.size===Y(n),function(){return"new shape and old shape must have the same number of elements."});var t={shape:n};return T.runKernelFunc(function(a){return a.reshape(e,n)},{x:e},function(a){return{x:function(){return a.reshape(e.shape)}}},"Reshape",t)}}),Xs=D({spaceToBatchND_:function(r,n,e){var t=_(r,"x","spaceToBatchND");return E(t.rank>=1+n.length,function(){return"input rank "+t.rank+" should be > than [blockShape] "+n.length}),E(e.length===n.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+n.length}),E(t.shape.reduce(function(a,o,i){return i>0&&i<=n.length?a&&(o+e[i-1][0]+e[i-1][1])%n[i-1]==0:a},!0),function(){return"input spatial dimensions "+t.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+n.toString()}),T.runKernelFunc(function(a){return a.spaceToBatchND(t,n,e)},{$x:t},function(a){return{$x:function(){return a.batchToSpaceND(n,e)}}})}}),$s=D({squeeze_:function(r,n){var e=_(r,"x","squeeze");return yn(e,pt(e.shape,n).newShape)}}),ln=D({stack_:function(r,n){n===void 0&&(n=0);var e=Gr(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(n);var t=e[0].rank,a=e[0].shape,o=e[0].dtype;E(n<=t,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){ye(a,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(o===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(n)});return Pe(i,n)}}),Bt=D({tile_:function(r,n){var e=_(r,"x","tile",null);E(e.rank===n.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+n+"."});var t=[e],a={reps:n};return T.runKernelFunc(function(o,i){var s=o.tile(e,n);return i([e]),s},{x:e},function(o,i){var s=i[0];return{x:function(){var u=ve(s);if(s.rank===1)for(var c=0;c<n[0];++c)u=u.add(o.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<n[0];++c)for(var l=0;l<n[1];++l)u=u.add(o.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<n[0];++c)for(l=0;l<n[1];++l)for(var f=0;f<n[2];++f)u=u.add(o.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<n[0];++c)for(l=0;l<n[1];++l)for(f=0;f<n[2];++f)for(var h=0;h<n[3];++h)u=u.add(o.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",a,t)}}),If=D({truncatedNormal_:function(r,n,e,t,a){if(n===void 0&&(n=0),e===void 0&&(e=1),t!=null&&t==="bool")throw new Error("Unsupported data type "+t);for(var o=new Do(n,e,t,!0,a),i=ae(r,t),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Me=D({unstack_:function(r,n){n===void 0&&(n=0),n=n||0;var e=_(r,"x","unstack");E(n>=-e.shape.length&&n<e.shape.length,function(){return"Axis = "+n+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),n<0&&(n+=e.shape.length);var t={axis:n};return T.runKernelFunc(function(a){return a.unstack(e,n)},{x:e},function(a){return{x:function(){return ln(a,n)}}},"Unpack",t)}}),kf=function(r,n){return X(this,void 0,void 0,function(){var e,t,a,o,i,s,u,c,l,f;return $(this,function(h){switch(h.label){case 0:return e=_(r,"x","setdiff1d"),t=_(n,"y","setdiff1d"),E(e.dtype===t.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+t.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(t.rank===1,function(){return"y should be 1D tensor, but got y ("+t.shape+")."}),[4,e.data()];case 1:return a=h.sent(),[4,t.data()];case 2:for(o=h.sent(),i=new Set(o),s=0,l=0;l<a.length;l++)i.has(a[l])||s++;for(u=new ar([s],e.dtype),c=new ar([s],"int32"),l=0,f=0;l<a.length;l++)i.has(a[l])||(u.values[f]=a[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function jr(r,n,e,t){t===void 0&&(t=!0);var a=[];if(t)(a=a.concat(n.slice(0))).push(r[0]/e),a=a.concat(r.slice(1));else{a=a.concat(r[0]);for(var o=n.length,i=0;i<o;++i)a=a.concat([r[i+1]/n[i],n[i]]);a=a.concat(r.slice(o+1))}return a}function qr(r,n,e){e===void 0&&(e=!0);var t=[];if(e){t.push(n);for(var a=n+1;a<r;++a)a<=2*n?(t.push(a),t.push(a-(n+1))):t.push(a)}else{var o=[],i=[];for(a=1;a<r;++a)a>=2*n+1||a%2==1?i.push(a):o.push(a);t.push.apply(t,o),t.push(0),t.push.apply(t,i)}return t}function Kr(r,n,e,t){t===void 0&&(t=!0);var a=[];t?a.push(r[0]/e):a.push(r[0]*e);for(var o=1;o<r.length;++o)o<=n.length?t?a.push(n[o-1]*r[o]):a.push(r[o]/n[o-1]):a.push(r[o]);return a}function Ys(r,n){for(var e=[0],t=0;t<n;++t)e.push(r[t][0]);return e}function Js(r,n,e){for(var t=r.slice(0,1),a=0;a<e;++a)t.push(r[a+1]-n[a][0]-n[a][1]);return t}function Qs(r,n){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(n.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+n.rank+".");if(n.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+n.dtype+".");if(n.shape[n.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+n.shape[n.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=n.shape,t=e[e.length-1],a=1,o=0;o<e.length-1;++o)a*=e[o];var i=r.shape,s=e.slice();s.pop();var u=1;for(o=t;o<r.rank;++o)u*=i[o],s.push(i[o]);var c=Nn(r.shape).map(function(l){return l/u}).concat([1]).slice(0,t);return[s,a,u,c]}var Zs=30;function Oa(r){return r<=Zs?r:ao(r,Math.floor(Math.sqrt(r)))}function Sf(r,n,e){var t=n.rank>1?n.shape[n.rank-1]:1,a=n.rank>1?n.rank-1:1,o="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+n.shape+", shape: "+r+", sliceDim: "+t+", and batchDim: "+a+".";if(e.rank<a)throw new Error(o+" update.rank < "+a+". ");if(r.length<t+(e.rank-a))throw new Error(o+" Output shape length < "+(t+(e.rank-a)));if(e.rank!==a+r.length-t)throw new Error(o+" update.rank != "+(a+r.length-t));for(var i=0;i<a;++i)if(e.shape[i]!==n.shape[i])throw new Error(o+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+n.shape[i]+").");for(i=0;i<e.rank-a;++i)if(e.shape[i+a]!==r[i+t])throw new Error(o+" updates.shape["+(i+a)+"] ("+e.shape[i+a]+") != shape["+(i+a)+"] ("+r[i+a]+")")}function Df(r,n,e){if(n.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+n.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(n.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+n.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(n.size===0)throw new Error("Indices specified for empty output. indices shape: "+n.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Sf(e,n,r)}function Xr(r,n,e){for(var t=n.shape.length,a=t>1?n.shape[t-1]:1,o=e.length,i=1,s=a;s<o;++s)i*=e[s];var u=a<1?1:a;return{sliceRank:a,numUpdates:Y(n.shape)/u,sliceSize:i,strides:Nn(e.slice(0,a)).concat([1]),outputSize:Y(e)}}function Af(r,n,e){E(r.rank===n.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+n+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var t=function(o){E(n[o]+e[o]<=r.shape[o],function(){return"Error in slice"+r.rank+"D: begin["+o+"] + size["+o+"] ("+(n[o]+e[o])+") would overflow input.shape["+o+"] ("+r.shape[o]+")"})},a=0;a<r.rank;++a)t(a)}function Wi(r){for(var n=[],e=0;r>0;)1&r&&n.push(e),r/=2,e++;return n}function Ao(r,n,e){for(var t=[],a=0;a<r.length;a++)t[a]=Math.ceil((n[a]-r[a])/e[a]);return t}function Tf(r,n,e,t,a){var o=n[a],i=e[a]||1;(r&1<<a||o==null)&&(o=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=t[a];return o<0&&(o+=s),o=no(0,o,s-1)}function Nf(r,n,e,t,a){var o=n[a],i=e[a]||1;(r&1<<a||o==null)&&(o=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=t[a];return o<0&&(o+=s),o=i>0?no(0,o,s):no(-1,o,s-1)}function eu(r,n,e){for(var t=e.length,a=0;a<e.length;a++)if(e[a]>1){t=a;break}for(a=t+1;a<e.length;a++)if(n[a]>0||e[a]!==r[a])return!1;return!0}function nu(r,n){for(var e=r.length>0?r[r.length-1]:1,t=0;t<r.length-1;t++)e+=r[t]*n[t];return e}function Ff(r,n){E(ro(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(n==null||Array.isArray(n)&&n.every(function(l){return l instanceof Ht}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=n!=null;if(!e)for(var t in n=[],T.registeredVariables)n.push(T.registeredVariables[t]);var a=e?n.filter(function(l){return!l.trainable}):null,o=n.length;E((n=n.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+o+" variables is trainable."});var i=T.gradients(r,n,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return n.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),a!=null&&a.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ua(r){return T.customGrad(r)}var Kn=D({softmax_:function(r,n){n===void 0&&(n=-1);var e=_(r,"logits","softmax","float32");if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+n);return T.runKernelFunc(function(t,a){var o=t.softmax(e,n);return a([o]),o},{logits:e},function(t,a){var o=a[0],i=t.mul(o);return{logits:function(){return i.sub(i.sum([n],!0).mul(o))}}},"Softmax",{dim:n},[],[!0])}}),Pf=D({logSoftmax_:function(r,n){n===void 0&&(n=-1);var e=_(r,"logits","logSoftmax");if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+n);return ua(function(t,a){var o=t.max(n,!0),i=t.sub(o),s=i.toFloat().sub(i.exp().sum(n,!0).log());return a([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(n,!0).mul(l))}}})(e)}}),tu=function(){function r(n,e){this.backend=n,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(n){return this.data.has(n)||this.dataMover.moveData(this.backend,n),this.data.get(n)},r.prototype.set=function(n,e){this.dataIdsCount++,this.data.set(n,e)},r.prototype.has=function(n){return this.data.has(n)},r.prototype.delete=function(n){return this.dataIdsCount--,this.data.delete(n)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),ru=function(){function r(){}return r.prototype.time=function(n){return F("time")},r.prototype.read=function(n){return F("read")},r.prototype.readSync=function(n){return F("readSync")},r.prototype.numDataIds=function(){return F("numDataIds")},r.prototype.disposeData=function(n){return F("disposeData")},r.prototype.write=function(n,e,t){return F("write")},r.prototype.move=function(n,e,t,a){return F("move")},r.prototype.memory=function(){return F("memory")},r.prototype.floatPrecision=function(){return F("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(n,e,t,a){return F("batchMatMul")},r.prototype.fusedBatchMatMul=function(n){return n.a,n.b,n.transposeA,n.transposeB,n.bias,n.activation,n.preluActivationWeights,F("fusedBatchMatMul")},r.prototype.slice=function(n,e,t){return F("slice")},r.prototype.stridedSlice=function(n,e,t,a){return F("stridedSlice")},r.prototype.unstack=function(n,e){return F("unstack")},r.prototype.reverse=function(n,e){return F("reverse")},r.prototype.concat=function(n,e){return F("concat")},r.prototype.neg=function(n){return F("neg")},r.prototype.add=function(n,e){return F("add")},r.prototype.addN=function(n){return F("addN")},r.prototype.subtract=function(n,e){return F("subtract")},r.prototype.multiply=function(n,e){return F("multiply")},r.prototype.realDivide=function(n,e){return F("realDivide")},r.prototype.floorDiv=function(n,e){return F("floorDiv")},r.prototype.sum=function(n,e){return F("sum")},r.prototype.prod=function(n,e){return F("prod")},r.prototype.unsortedSegmentSum=function(n,e,t){return F("unsortedSegmentSum")},r.prototype.argMin=function(n,e){return F("argMin")},r.prototype.argMax=function(n,e){return F("argMax")},r.prototype.equal=function(n,e){return F("equal")},r.prototype.notEqual=function(n,e){return F("notEqual")},r.prototype.less=function(n,e){return F("less")},r.prototype.lessEqual=function(n,e){return F("lessEqual")},r.prototype.greater=function(n,e){return F("greater")},r.prototype.greaterEqual=function(n,e){return F("greaterEqual")},r.prototype.logicalNot=function(n){return F("logicalNot")},r.prototype.logicalAnd=function(n,e){return F("logicalAnd")},r.prototype.logicalOr=function(n,e){return F("logicalOr")},r.prototype.where=function(n){return F("where")},r.prototype.select=function(n,e,t){return F("select")},r.prototype.topk=function(n,e,t){return F("topk")},r.prototype.min=function(n,e){return F("min")},r.prototype.minimum=function(n,e){return F("minimum")},r.prototype.mod=function(n,e){return F("mod")},r.prototype.max=function(n,e){return F("max")},r.prototype.maximum=function(n,e){return F("maximum")},r.prototype.all=function(n,e){return F("all")},r.prototype.any=function(n,e){return F("any")},r.prototype.squaredDifference=function(n,e){return F("squaredDifference")},r.prototype.ceil=function(n){return F("ceil")},r.prototype.floor=function(n){return F("floor")},r.prototype.round=function(n){return F("round")},r.prototype.sign=function(n){return F("sign")},r.prototype.isNaN=function(n){return F("isNaN")},r.prototype.isInf=function(n){return F("isInf")},r.prototype.isFinite=function(n){return F("isFinite")},r.prototype.pow=function(n,e){return F("pow")},r.prototype.exp=function(n){return F("exp")},r.prototype.expm1=function(n){return F("expm1")},r.prototype.softmax=function(n,e){return F("softmax")},r.prototype.log=function(n){return F("log")},r.prototype.log1p=function(n){return F("log1p")},r.prototype.sqrt=function(n){return F("sqrt")},r.prototype.rsqrt=function(n){return F("rsqrt")},r.prototype.square=function(n){return F("square")},r.prototype.reciprocal=function(n){return F("reciprocal")},r.prototype.relu=function(n){return F("relu")},r.prototype.relu6=function(n){return F("relu6")},r.prototype.prelu=function(n,e){return F("prelu")},r.prototype.elu=function(n){return F("elu")},r.prototype.eluDer=function(n,e){return F("eluDer")},r.prototype.selu=function(n){return F("selu")},r.prototype.int=function(n){return F("int")},r.prototype.clip=function(n,e,t){return F("clip")},r.prototype.abs=function(n){return F("abs")},r.prototype.complexAbs=function(n){return F("complexAbs")},r.prototype.sigmoid=function(n){return F("sigmoid")},r.prototype.softplus=function(n){return F("softplus")},r.prototype.sin=function(n){return F("sin")},r.prototype.cos=function(n){return F("cos")},r.prototype.tan=function(n){return F("tan")},r.prototype.asin=function(n){return F("asin")},r.prototype.acos=function(n){return F("acos")},r.prototype.atan=function(n){return F("atan")},r.prototype.atan2=function(n,e){return F("atan2")},r.prototype.sinh=function(n){return F("sinh")},r.prototype.cosh=function(n){return F("cosh")},r.prototype.tanh=function(n){return F("tanh")},r.prototype.asinh=function(n){return F("asinh")},r.prototype.acosh=function(n){return F("acosh")},r.prototype.atanh=function(n){return F("atanh")},r.prototype.erf=function(n){return F("erf")},r.prototype.step=function(n,e){return F("step")},r.prototype.fusedConv2d=function(n){return n.input,n.filter,n.convInfo,n.bias,n.activation,n.preluActivationWeights,F("fusedConv2d")},r.prototype.conv2d=function(n,e,t){return F("conv2d")},r.prototype.conv2dDerInput=function(n,e,t){return F("conv2dDerInput")},r.prototype.conv2dDerFilter=function(n,e,t){return F("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(n){return n.input,n.filter,n.convInfo,n.bias,n.activation,n.preluActivationWeights,F("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(n,e,t){return F("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(n,e,t){return F("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(n,e,t){return F("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(n,e,t){return F("conv3d")},r.prototype.conv3dDerInput=function(n,e,t){return F("conv3dDerInput")},r.prototype.conv3dDerFilter=function(n,e,t){return F("conv3dDerFilter")},r.prototype.maxPool=function(n,e){return F("maxPool")},r.prototype.maxPoolBackprop=function(n,e,t,a){return F("maxPoolBackprop")},r.prototype.avgPool=function(n,e){return F("avgPool")},r.prototype.avgPoolBackprop=function(n,e,t){return F("avgPoolBackprop")},r.prototype.avgPool3d=function(n,e){return F("avgPool3d")},r.prototype.avgPool3dBackprop=function(n,e,t){return F("avgPool3dBackprop")},r.prototype.maxPool3d=function(n,e){return F("maxPool3d")},r.prototype.maxPool3dBackprop=function(n,e,t,a){return F("maxPool3dBackprop")},r.prototype.reshape=function(n,e){return F("reshape")},r.prototype.cast=function(n,e){return F("cast")},r.prototype.tile=function(n,e){return F("tile")},r.prototype.pad=function(n,e,t){return F("pad")},r.prototype.transpose=function(n,e){return F("transpose")},r.prototype.gather=function(n,e,t){return F("gather")},r.prototype.gatherND=function(n,e){return F("gatherND")},r.prototype.scatterND=function(n,e,t){return F("scatterND")},r.prototype.batchToSpaceND=function(n,e,t){return F("batchToSpaceND")},r.prototype.spaceToBatchND=function(n,e,t){return F("spaceToBatchND")},r.prototype.resizeBilinear=function(n,e,t,a){return F("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(n,e,t){return F("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(n,e,t,a){return F("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(n,e,t){return F("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(n,e,t,a,o,i){return F("batchNormalization")},r.prototype.localResponseNormalization4D=function(n,e,t,a,o){return F("localResponseNormalization4D")},r.prototype.LRNGrad=function(n,e,t,a,o,i,s){return F("LRNGrad")},r.prototype.multinomial=function(n,e,t,a){return F("multinomial")},r.prototype.oneHot=function(n,e,t,a){return F("oneHot")},r.prototype.cumsum=function(n,e,t,a){return F("cumsum")},r.prototype.nonMaxSuppression=function(n,e,t,a,o){return F("nonMaxSuppression")},r.prototype.fft=function(n){return F("fft")},r.prototype.ifft=function(n){return F("ifft")},r.prototype.complex=function(n,e){return F("complex")},r.prototype.real=function(n){return F("real")},r.prototype.imag=function(n){return F("imag")},r.prototype.cropAndResize=function(n,e,t,a,o,i){return F("cropAndResize")},r.prototype.depthToSpace=function(n,e,t){return F("depthToSpace")},r.prototype.split=function(n,e,t){return F("split")},r.prototype.sparseToDense=function(n,e,t,a){return F("sparseToDense")},r.prototype.diag=function(n){return F("diag")},r.prototype.fill=function(n,e,t){return F("fill")},r.prototype.onesLike=function(n){return F("onesLike")},r.prototype.zerosLike=function(n){return F("zerosLike")},r.prototype.linspace=function(n,e,t){return F("linspace")},r.prototype.dispose=function(){return F("dispose")},r}();function F(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function nt(r,n){for(var e=r.length,t=[],a=0;a<e;a++){var o=e-1-a,i=r[o]||1;(n[n.length-1-a]||1)>1&&i===1&&t.unshift(o)}return t}function Oe(r,n){for(var e=[],t=0;t<n.length;t++){var a=r[r.length-t-1],o=n.length-t-1,i=n[o];(a==null||a===1&&i>1)&&e.unshift(o)}return e}function le(r,n){for(var e=[],t=Math.max(r.length,n.length),a=0;a<t;a++){var o=r[r.length-a-1];o==null&&(o=1);var i=n[n.length-a-1];if(i==null&&(i=1),o===1)e.unshift(i);else if(i===1)e.unshift(o);else{if(o!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+n+".");e.unshift(o)}}return e}function ir(r,n,e,t,a,o,i){i===void 0&&(i="channelsLast");var s,u=Jr(n),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return Ct(r,s,e,t,a,o,!1,i)}function $r(r,n,e,t,a,o,i){i===void 0&&(i="NDHWC");var s,u,c=fo(n),l=c[0],f=c[1],h=c[2];if(i==="NDHWC")u="channelsLast",s=[l,f,h,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,f,h,r[1],r[1]]}return Yr(r,s,e,t,a,!1,u,o)}function Ct(r,n,e,t,a,o,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],h=r[1],l=r[2],f=r[3]}var d,p=n[0],v=n[1],m=n[3],g=Jr(e),x=g[0],b=g[1],y=Jr(t),w=y[0],C=y[1],S=Lt(p,w),k=Lt(v,C),R=function(M,L,U,z,W,G,H,q){var ee,ne,ie;if(typeof M=="number"){ee={top:M,bottom:M,left:M,right:M,type:M===0?"VALID":"NUMBER"};var se=function(he,xe,me,ke,Ce){ke==null&&(ke=au(he,xe,me));var _e=he[0],Cn=he[1],_n=nr((_e-xe+2*ke)/me+1,Ce);E(Te(_n),function(){return"The output # of rows ("+_n+") must be an integer. Change the stride and/or zero pad parameters"});var rn=nr((Cn-xe+2*ke)/me+1,Ce);return E(Te(rn),function(){return"The output # of columns ("+rn+") must be an integer. Change the stride and/or zero pad parameters"}),[_n,rn]}([L,U],G,z,M,q);ne=se[0],ie=se[1]}else if(M==="same"){ne=Math.ceil(L/z),ie=Math.ceil(U/W);var ce=Math.max(0,(ne-1)*z+G-L),de=Math.max(0,(ie-1)*W+H-U),fe=Math.floor(ce/2),pe=ce-fe,De=Math.floor(de/2);ee={top:fe,bottom:pe,left:De,right:de-De,type:"SAME"}}else{if(M!=="valid")throw Error("Unknown padding parameter: "+M);ee={top:0,bottom:0,left:0,right:0,type:"VALID"},ne=Math.ceil((L-G+1)/z),ie=Math.ceil((U-H+1)/W)}return{padInfo:ee,outHeight:ne,outWidth:ie}}(a,l,f,x,b,S,k,o),I=R.padInfo,N=R.outHeight,A=R.outWidth,B=i?m*h:m;return s==="channelsFirst"?d=[c,B,N,A]:s==="channelsLast"&&(d=[c,N,A,B]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:N,outWidth:A,outChannels:B,padInfo:I,strideHeight:x,strideWidth:b,filterHeight:p,filterWidth:v,effectiveFilterHeight:S,effectiveFilterWidth:k,dilationHeight:w,dilationWidth:C,inShape:r,outShape:d,filterShape:n}}function Yr(r,n,e,t,a,o,i,s){o===void 0&&(o=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],f=r[3],h=r[4]}var p,v=n[0],m=n[1],g=n[2],x=n[4],b=fo(e),y=b[0],w=b[1],C=b[2],S=fo(t),k=S[0],R=S[1],I=S[2],N=Lt(v,k),A=Lt(m,R),B=Lt(g,I),M=function(H,q,ee,ne,ie,se,ce,de,fe,pe,De){var he,xe,me,ke;if(typeof H=="number"){he={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var Ce=function(It,Un,Ca,kt,En,_a){En==null&&(En=au(It,Un,kt));var Xc=It[0],$c=It[1],Yc=It[2],Ea=nr((Xc-Un+2*En)/kt+1,_a);E(Te(Ea),function(){return"The output # of depths ("+Ea+") must be an integer. Change the stride and/or zero pad parameters"});var Ra=nr(($c-Un+2*En)/kt+1,_a);E(Te(Ra),function(){return"The output # of rows ("+Ra+") must be an integer. Change the stride and/or zero pad parameters"});var Ia=nr((Yc-Un+2*En)/kt+1,_a);return E(Te(Ia),function(){return"The output # of columns ("+Ia+") must be an integer. Change the stride and/or zero pad parameters"}),[Ea,Ra,Ia,Ca]}([q,ee,ne,1],de,1,ie,H,De);xe=Ce[0],me=Ce[1],ke=Ce[2]}else if(H==="same"){xe=Math.ceil(q/ie),me=Math.ceil(ee/se),ke=Math.ceil(ne/ce);var _e=(xe-1)*ie+de-q,Cn=(me-1)*se+fe-ee,_n=(ke-1)*ce+pe-ne,rn=Math.floor(_e/2),Rt=_e-rn,Wn=Math.floor(Cn/2),Qn=Cn-Wn,zn=Math.floor(_n/2);he={top:Wn,bottom:Qn,left:zn,right:_n-zn,front:rn,back:Rt,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);he={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},xe=Math.ceil((q-de+1)/ie),me=Math.ceil((ee-fe+1)/se),ke=Math.ceil((ne-pe+1)/ce)}return{padInfo:he,outDepth:xe,outHeight:me,outWidth:ke}}(a,l,f,h,y,w,C,N,A,B,s),L=M.padInfo,U=M.outDepth,z=M.outHeight,W=M.outWidth,G=o?x*d:x;return i==="channelsFirst"?p=[c,G,U,z,W]:i==="channelsLast"&&(p=[c,U,z,W,G]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:U,outHeight:z,outWidth:W,outChannels:G,padInfo:L,strideDepth:y,strideHeight:w,strideWidth:C,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:N,effectiveFilterHeight:A,effectiveFilterWidth:B,dilationDepth:k,dilationHeight:R,dilationWidth:I,inShape:r,outShape:p,filterShape:n}}function au(r,n,e,t){t===void 0&&(t=1);var a=Lt(n,t);return Math.floor((r[0]*(e-1)-e+a)/2)}function Jr(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function fo(r){return typeof r=="number"?[r,r,r]:r}function Lt(r,n){return n<=1?r:r+(r-1)*(n-1)}function nr(r,n){if(!n)return r;switch(n){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+n)}}function qt(r){var n=Jr(r),e=n[0],t=n[1],a=n[2];return e===1&&t===1&&a===1}function tn(r,n){return qt(r)||qt(n)}function To(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function ou(r,n,e){if(n==="complex64"){if(r.dtype==="complex64")return r.clone();var t=we(r.shape),a=r.toFloat(),o=e.complex(a,t);return t.dispose(),a.dispose(),o}if(!il(r.dtype,n))return T.makeTensorFromDataId(r.dataId,r.shape,n);if(r.dtype==="complex64"){var i=e.real(r);return o=i.cast(n),i.dispose(),o}if(n==="int32")return e.int(r);if(n==="bool"){var s=j(0,r.dtype);return o=e.notEqual(r,s),s.dispose(),o}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+n)}function ho(r,n){return T.makeTensorFromDataId(r.dataId,n,r.dtype)}function iu(r,n,e){var t=(n-r)/(e-1),a=dr(e,"float32");a[0]=r;for(var o=1;o<a.length;o++)a[o]=a[o-1]+t;return Ne(a,"float32")}function po(r,n){if(r.length!==n.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+n.length+".");for(var e=new Float32Array(2*r.length),t=0;t<e.length;t+=2)e[t]=r[t/2],e[t+1]=n[t/2];return e}function zi(r,n){return{real:r[2*n],imag:r[2*n+1]}}function Mf(r,n,e,t){r[2*t]=n,r[2*t+1]=e}function Of(r,n,e){var t=(e?2:-2)*Math.PI*(r/n);return{real:Math.cos(t),imag:Math.sin(t)}}function Bf(r,n,e){var t=function(o,i,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var v=l(c,u[d=f+(h-f>>>1)]);v>0?f=d+1:(h=d,p=!v)}return p?f:-f-1}(o,i,s||Lf)}(r,n,e),a=t<0?-(t+1):t;r.splice(a,0,n)}function Lf(r,n){return r>n?1:r<n?-1:0}function No(r,n,e,t,a){return su(r,n,e,t,a,0).selectedIndices}function Fo(r,n,e,t,a,o){var i=su(r,n,e,t,a,o);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function su(r,n,e,t,a,o,i,s){s===void 0&&(s=!1);for(var u=Array.from(n).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>a}).sort(Ui),c=o>0?-.5/o:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,v=h.suppressBeginIndex;if(d<a)break;for(var m=!1,g=l.length-1;g>=v;--g){var x=Wf(r,p,l[g]);if(x>=t){m=!0;break}if(h.score=h.score*zf(t,c,x),h.score<=a)break}h.suppressBeginIndex=l.length,m||(h.score===d?(l.push(p),f.push(h.score)):h.score>a&&Bf(u,h,Ui))}var b=l.length;return s&&(l.fill(0,b),f.fill(0,b)),{selectedIndices:Ne(l,"int32"),selectedScores:Ne(f,"float32"),numValidOutputs:j(b,"int32")}}function Wf(r,n,e){var t=r.subarray(4*n,4*n+4),a=r.subarray(4*e,4*e+4),o=Math.min(t[0],t[2]),i=Math.min(t[1],t[3]),s=Math.max(t[0],t[2]),u=Math.max(t[1],t[3]),c=Math.min(a[0],a[2]),l=Math.min(a[1],a[3]),f=Math.max(a[0],a[2]),h=Math.max(a[1],a[3]),d=(s-o)*(u-i),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var v=Math.max(o,c),m=Math.max(i,l),g=Math.min(s,f),x=Math.min(u,h),b=Math.max(g-v,0)*Math.max(x-m,0);return b/(d+p-b)}function zf(r,n,e){var t=Math.exp(n*e*e);return e<=r?t:0}function Ui(r,n){return r.score-n.score||r.score===n.score&&n.boxIndex-r.boxIndex}function uu(r,n,e){var t=new Array(r.rank).fill(0),a=r.shape.slice();return n.map(function(o){a[e]=o;var i=r.slice(t,a);return t[e]+=o,i})}function cu(r,n){for(var e=new Array(r.rank),t=0;t<e.length;t++)e[t]=r.shape[t]*n[t];var a=ae(e,r.dtype);for(t=0;t<a.values.length;++t){for(var o=a.indexToLoc(t),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=o[s]%r.shape[s];var u=r.locToIndex(i);a.values[t]=r.values[u]}return a.toTensor()}function lu(r,n,e,t,a){for(var o=n[n.length-1],i=[r.length/o,o],s=i[0],u=i[1],c=rr(e,s*t),l=rr("int32",s*t),f=0;f<s;f++){for(var h=f*u,d=r.subarray(h,h+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort(function(y,w){return w.value-y.value});var m=f*t,g=c.subarray(m,m+t),x=l.subarray(m,m+t);for(v=0;v<t;v++)g[v]=p[v].value,x[v]=p[v].index}var b=n.slice();return b[b.length-1]=t,[He(c,b,e),He(l,b,"int32")]}function Po(r,n){for(var e=[],t=0;t<n.length;t++)n[t]&&e.push(t);var a=ae(r,"int32"),o=ae([e.length,r.length],"int32");for(t=0;t<e.length;t++){var i=a.indexToLoc(e[t]),s=t*r.length;o.values.set(i,s)}return o.toTensor()}var Uf=function(r,n){this.outputShape=[],this.outputShape=r,this.variableNames=n.map(function(a,o){return"T"+o});var e=[];this.variableNames.forEach(function(a){e.push("float v"+a+" = get"+a+"AtOutCoords();")});var t=this.variableNames.map(function(a){return"v"+a}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+t+`;
        setOutput(result);
      }
    `},Vf=function(r,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=n.map(function(a,o){return"T"+o});var e=[];this.variableNames.forEach(function(a){e.push("vec4 v"+a+" = get"+a+"AtOutCoords();")});var t=this.variableNames.map(function(a){return"v"+a}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+t+`;
        setOutput(result);
      }
    `},Gf=function(r,n,e){this.variableNames=["A"];var t=r.windowSize,a=r.batchSize,o=r.inSize,i=Math.ceil(o/t);e||this.variableNames.push("bestIndicesA"),this.outputShape=[a,i];var s=n==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+t+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+t+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function fu(r,n){return["x","y","z","w","u","v"].slice(0,n).map(function(e){return r+"."+e})}function Ze(r,n){return n===1?[r]:fu(r,n)}function Ke(){var r,n,e,t,a,o,i,s,u,c;return O().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",n="in",e="out",t="in",a="texture",o="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",n="attribute",e="varying",t="varying",a="texture2D",o="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:n,varyingVs:e,varyingFs:t,texture2D:a,output:o,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function vt(r,n,e){e===void 0&&(e="index");var t=Nn(n);return t.map(function(a,o){return"int "+r[o]+" = "+e+" / "+a+"; "+(o===t.length-1?"int "+r[o+1]+" = "+e+" - "+r[o]+" * "+a:"index -= "+r[o]+" * "+a)+";"}).join("")}function Mo(r){var n=Nn(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+n[0]+" + coords.y * "+n[1]+` + coords.z;
  }
`}var hu=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Hf(r,n,e,t){var a=[];r.forEach(function(d){var p=Y(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?a.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(a.push("uniform sampler2D "+d.name+";"),a.push("uniform int offset"+d.name+";"))});var o,i,s=a.join(`
`),u=r.map(function(d){return function(p,v,m){m===void 0&&(m=!1);var g="";g+=m?du(p):Nt(p);var x=p.shapeInfo.logicalShape,b=v.logicalShape;return x.length<=b.length&&(g+=m?function(y,w){var C,S=y.name,k=S.charAt(0).toUpperCase()+S.slice(1),R="get"+k+"AtOutCoords",I=y.shapeInfo.logicalShape.length,N=w.logicalShape.length,A=nt(y.shapeInfo.logicalShape,w.logicalShape),B=be(N),M=N-I,L=["x","y","z","w","u","v"];C=I===0?"":N<2&&A.length>=1?"coords = 0;":A.map(function(ee){return"coords."+L[ee+M]+" = 0;"}).join(`
`);var U="";U=N<2&&I>0?"coords":y.shapeInfo.logicalShape.map(function(ee,ne){return"coords."+L[ne+M]}).join(", ");var z="return outputValue;",W=Y(y.shapeInfo.logicalShape)===1,G=Y(w.logicalShape)===1;if(I!==1||W||G){if(W&&!G)z=N===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var H=I-2,q=I-1;A.indexOf(H)>-1&&A.indexOf(q)>-1?z="return vec4(outputValue.x);":A.indexOf(H)>-1?z="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(q)>-1&&(z="return vec4(outputValue.xx, outputValue.zz);")}}else z=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+R+`() {
      `+B+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+k+"("+U+`);
      `+z+`
    }
  `}(p,v):function(y,w){var C=y.name,S=C.charAt(0).toUpperCase()+C.slice(1),k="get"+S+"AtOutCoords",R=w.texShape,I=y.shapeInfo.texShape,N=y.shapeInfo.logicalShape.length,A=w.logicalShape.length;if(!y.shapeInfo.isUniform&&N===A&&y.shapeInfo.flatOffset==null&&ze(I,R))return`
      float `+k+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var B,M=be(A),L=nt(y.shapeInfo.logicalShape,w.logicalShape),U=A-N,z=["x","y","z","w","u","v"];B=N===0?"":A<2&&L.length>=1?"coords = 0;":L.map(function(G){return"coords."+z[G+U]+" = 0;"}).join(`
`);var W="";return W=A<2&&N>0?"coords":y.shapeInfo.logicalShape.map(function(G,H){return"coords."+z[H+U]}).join(", "),`
    float `+k+`() {
      `+M+` coords = getOutputCoords();
      `+B+`
      return get`+S+"("+W+`);
    }
  `}(p,v)),g}(d,n,t)}).join(`
`),c=n.texShape,l=Ke(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+jf+`
    `+qf+`
    `+Kf+`
  `}(l);return n.isPacked?(o=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(ze(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var S=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=d,m=p,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],x=Math.ceil(v[2]/2),b=x*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],S=Math.ceil(y[y.length-1]/2),k=S*Math.ceil(y[y.length-2]/2),R=k,I="",N="b, r, c",A=2;A<y.length-1;A++)R*=y[y.length-A-1],I=`
      int b`+A+" = index / "+R+`;
      index -= b`+A+" * "+R+`;
    `+I,N="b"+A+", "+N;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+I+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+y.length+"("+N+`);
    }
  `}(d,p)}var v,m,g,x,b}(n.logicalShape,c),i=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(o=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,x){return ze(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=p,m=vt(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var b=vt(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,x){var b=vt(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,x){var b=vt(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,m}(n.logicalShape,c),i=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),t&&(h+=Xf),[h,f,i,s,o,u,e].join(`
`)}function Nt(r){var n=r.shapeInfo.logicalShape;switch(n.length){case 0:return function(e){var t=e.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return"float "+a+"() {return "+t+";}";var o=e.shapeInfo.texShape,i=o[0],s=o[1];if(i===1&&s===1)return`
      float `+a+`() {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=ft(t);return`
    float `+a+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(r);case 1:return function(e){var t=e.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`
      float `+a+`(int index) {
        `+St(e)+`
      }
    `;var o=e.shapeInfo.texShape,i=o[0],s=o[1];if(s===1&&i===1)return`
      float `+a+`(int index) {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var u=ft(t);return s===1?`
      float `+a+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+t+`, uv);
      }
    `:i===1?`
      float `+a+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+t+`, uv);
      }
    `:`
    float `+a+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(r);case 2:return function(e){var t=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=e.shapeInfo.texShape;if(i!=null&&ze(t,i)){var s=i[0],u=i[1];return`
    float `+o+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `}var c=pt(t),l=c.newShape,f=c.keptDims,h=l;if(h.length<t.length){var d=Ft(e,h);return`
      `+Nt(d)+`
      float `+o+`(int row, int col) {
        return `+o+"("+Pt(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+t[1]+`, 1)));
        `+St(e)+`
      }
    `;var p=i[0],v=i[1],m=ft(a);return v===1?`
    float `+o+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+t[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `:p===1?`
    float `+o+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+t[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+a+`, uv);
    }
  `:`
  float `+o+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+t[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+a+`, uv);
  }
`}(r);case 3:return function(e){var t=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=t[1]*t[2],s=t[2],u=pt(t),c=u.newShape,l=u.keptDims,f=c;if(f.length<t.length){var h=Ft(e,f);return`
        `+Nt(h)+`
        float `+o+`(int row, int col, int depth) {
          return `+o+"("+Pt(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+St(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],v=d[1],m=e.shapeInfo.flatOffset;if(v===i&&m==null)return`
        float `+o+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+a+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+o+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+t[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `;var g=ft(a);return`
      float `+o+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+a+`, uv);
      }
  `}(r);case 4:return function(e){var t=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=t[3],s=t[2]*i,u=t[1]*s,c=pt(t),l=c.newShape,f=c.keptDims;if(l.length<t.length){var h=Ft(e,l);return`
      `+Nt(h)+`
      float `+o+`(int row, int col, int depth, int depth2) {
        return `+o+"("+Pt(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+St(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,v=p[0],m=p[1];if(m===u&&d==null)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(m===i&&d==null)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+t[1]*t[2]+", "+t[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var g=ft(a);return`
    float `+o+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+a+`, uv);
    }
  `}(r);case 5:return function(e){var t=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=t[4],s=t[3]*i,u=t[2]*s,c=t[1]*u,l=pt(t),f=l.newShape,h=l.keptDims;if(f.length<t.length){var d=Ft(e,f);return`
      `+Nt(d)+`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        return `+o+"("+Pt(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+St(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&p==null)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(g===i&&p==null)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+t[1]*t[2]*t[3]+`,
               `+t[2]*t[3]+", "+t[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var x=ft(a);return`
    float `+o+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+a+`, uv);
    }
  `}(r);case 6:return function(e){var t=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=pt(t),s=i.newShape,u=i.keptDims;if(s.length<t.length){var c=Ft(e,s);return`
      `+Nt(c)+`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+o+"("+Pt(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=t[5],f=t[4]*l,h=t[3]*f,d=t[2]*h,p=t[1]*d;if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+St(e)+`
      }
    `;var v=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,g=m[0],x=m[1];if(x===p&&v==null)return`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(x===l&&v==null)return`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+t[1]*t[2]*t[3]*t[4]+`,
               `+t[2]*t[3]*t[4]+`,
               `+t[3]*t[4]+`,
               `+t[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var b=ft(a);return`
    float `+o+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+a+`, uv);
    }
  `}(r);default:throw new Error(n.length+"-D input sampling is not yet supported")}}function du(r){var n,e,t;switch(r.shapeInfo.logicalShape.length){case 0:return n=r.name,e="get"+n.charAt(0).toUpperCase()+n.slice(1),t=Ke(),`
    vec4 `+e+`() {
      return `+t.texture2D+"("+n+`, halfCR);
    }
  `;case 1:return function(a){var o=a.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),s=a.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Ke();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+o+`, uv);
    }
  `}(r);case 2:return function(a){var o=a.shapeInfo.logicalShape,i=a.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=a.shapeInfo.texShape,c=u[0],l=u[1],f=Ke();if(u!=null&&ze(o,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+i+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(o[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(a){var o=a.shapeInfo.logicalShape,i=a.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=a.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(o[0]===1){var l=o.slice(1),f=Ft(a,l);return`
        `+du(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Pt(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(o[2]/2),v=p*Math.ceil(o[1]/2),m=Ke();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+v+", "+p+`, b, row, col);
      return `+m.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(a){for(var o=a.shapeInfo.logicalShape,i=o.length,s=a.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=a.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(o[i-1]/2),p=d*Math.ceil(o[i-2]/2),v="int b, int row, int col",m="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<i-1;g++)v="int b"+g+", "+v,p*=o[i-g-1],m="b"+g+" * "+p+" + "+m;var x=Ke();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(r)}}var jf=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,qf=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Kf=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Xf=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function ft(r){return"offset"+r}function St(r){var n=r.name,e=Y(r.shapeInfo.logicalShape);return e<2?"return "+n+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+n+`[i];
      }
    }
  `}function be(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Ft(r,n){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=n,e}function Pt(r,n){return n.map(function(e){return r[e]}).join(", ")}var $f=function(r,n,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var a=r[r.length-1],o=Math.ceil(a/n);this.outputShape=r.slice(0,-1),o>1&&this.outputShape.push(o),t||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=be(c),f=Ze("coords",c);if(o===1){var h=be(s=c+1);i=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map(function(k){return"int "+k}),m=Ze("sourceLocR",s-1).concat("inIdx.r"),g=Ze("sourceLocG",s-1).concat("inIdx.g"),x=Ze("sourceLocB",s-1).concat("inIdx.b"),b=Ze("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=t?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",S=t?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+n+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+n+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},Yf=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,a=r.strideWidth,o=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,f=1/(n*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+o+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},Jf=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var n=r.filterDepth,e=r.filterHeight,t=r.filterWidth,a=r.strideDepth,o=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=f-1-r.padInfo.top,v=h-1-r.padInfo.left,m=1/(n*e*t);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+a+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+o+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Qf=function(r,n,e,t,a,o){this.outputShape=[],this.variableNames=["x","mean","variance"],le(r,n),le(r,e);var i="0.0";t!=null&&(le(r,t),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";a!=null&&(le(r,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+o+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Zf=function(r,n,e,t,a,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],le(r,n),le(r,e);var i="vec4(0.0)";t!=null&&(le(r,t),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";a!=null&&(le(r,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+o+`));

        setOutput((x - mean) * inv + offset);
      }
    `},eh="return areal * breal - aimag * bimag;",nh="return areal * bimag + aimag * breal;",Vi=function(r,n,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=le(n,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Ba="return a + b;",La="return a - b;",Gi="return a * b;",pu="return (a < 0.) ? b * a : a;",Se=function(r,n,e){this.variableNames=["A","B"],this.outputShape=le(n,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},vu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Gn=function(r,n,e,t){t===void 0&&(t=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=le(n,e);var a=this.outputShape.length,o="";if(t)if(a===0||Y(this.outputShape)===1)o=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(o=`
          `+be(a)+` coords = getOutputCoords();
        `,a===1)o+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=Ze("coords",a);o+=`
            bool nextRowOutOfBounds =
              (`+i[a-2]+" + 1) >= "+this.outputShape[a-2]+`;
            bool nextColOutOfBounds =
              (`+i[a-1]+" + 1) >= "+this.outputShape[a-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+o+`

        setOutput(result);
      }
    `},th=function(){function r(n){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(n,e){var t=this;return function(a,o){t.minLoc==null&&(t.minLoc=a.getUniformLocationNoThrow(o,"minVal"),t.maxLoc=a.getUniformLocationNoThrow(o,"maxVal")),a.gl.uniform1f(t.minLoc,n),a.gl.uniform1f(t.maxLoc,e)}},r}(),rh=function(){function r(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(n,e){var t=this;return function(a,o){t.minLoc==null&&(t.minLoc=a.getUniformLocationNoThrow(o,"minVal"),t.maxLoc=a.getUniformLocationNoThrow(o,"maxVal")),a.gl.uniform1f(t.minLoc,n),a.gl.uniform1f(t.maxLoc,e)}},r}(),ah=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},oh=function(r){this.outputShape=[],this.outputShape=jt(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var n=new Array(r.length-1);n[0]=r[0][1];for(var e=1;e<n.length;e++)n[e]=n[e-1]+r[e][1];var t=["if (yC < "+n[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<n.length;e++){var a=n[e-1];t.push("else if (yC < "+n[e]+") setOutput(getT"+e+"(yR, yC-"+a+"));")}var o=n.length,i=n[n.length-1];t.push("else setOutput(getT"+o+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+t.join(`
        `)+`
      }
    `},ih=function(r,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=jt(r,n);var e=this.outputShape,t=e.length,a=be(t),o=Ze("coords",t),i=["x","y","z","w","u","v"].slice(0,t);this.variableNames=r.map(function(m,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][n];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][n];var c=i[n],l=i.slice(-2),f=i.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+kr(i,c,d)+`),
            vec2(`+kr(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+kr(i,c,v)+`),
          vec2(`+kr(l,c,v)+"));",this.userCode=`
      float getValue(`+i.map(function(m){return"int "+m})+`) {
        `+h+`
      }

      void main() {
        `+a+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+o+`), 0., 0., 0.);

        `+o[t-1]+" = "+o[t-1]+` + 1;
        if (`+o[t-1]+" < "+e[t-1]+`) {
          result.g = getValue(`+o+`);
        }

        `+o[t-2]+" = "+o[t-2]+` + 1;
        if (`+o[t-2]+" < "+e[t-2]+`) {
          result.a = getValue(`+o+`);
        }

        `+o[t-1]+" = "+o[t-1]+` - 1;
        if (`+o[t-2]+" < "+e[t-2]+` &&
            `+o[t-1]+" < "+e[t-1]+`) {
          result.b = getValue(`+o+`);
        }
        setOutput(result);
      }
    `};function kr(r,n,e){var t=r.indexOf(n);return r.map(function(a,o){return o===t?a+" - "+e:a}).join()}var sh=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideHeight,e=r.strideWidth,t=r.padInfo.top,a=r.padInfo.left,o=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+n+" - "+t+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+a+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+o+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},uh=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,a=r.strideWidth,o=r.dataFormat==="channelsLast",i=n-1-r.padInfo.top,s=e-1-r.padInfo.left,u=o?1:2,c=o?2:3,l=o?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+n+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+n+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+o+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},ch=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideDepth,e=r.strideHeight,t=r.strideWidth,a=r.padInfo.front,o=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+n+" - "+a+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+o+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+t+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},lh=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterDepth,e=r.filterHeight,t=r.filterWidth,a=r.strideDepth,o=r.strideHeight,i=r.strideWidth,s=n-1-r.padInfo.front,u=e-1-r.padInfo.top,c=t-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+n+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+a+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+n+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+o+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+t+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+t+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},fh=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideHeight,e=r.strideWidth,t=r.padInfo.top,a=r.padInfo.left,o=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+o+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+n+" - "+t+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+a+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},hh=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,a=r.strideWidth,o=n-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+n+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+n+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Hi=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var a=r.padInfo.top,o=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,f=r.filterWidth,h=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",v=p?1:2,m=p?2:3,g=p?3:1,x="",b="";e&&(x=t?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+a+", "+o+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},dh=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var n=r.padInfo.front,e=r.padInfo.top,t=r.padInfo.left,a=r.strideDepth,o=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,f=r.filterHeight,h=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+a+", "+o+", "+i+`);
      const ivec3 pads = ivec3(`+n+", "+e+", "+t+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},ji=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var a=r.inHeight,o=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,v="",m="";e&&(v=t?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,m="result = activation(result);");var g=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+a+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+o+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},qi=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var a=r.inHeight,o=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<h;m++)for(var g=0;g<d;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<h;m++)for(var x=0;x<p;x++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*x)*f+`;
        `,c===1){if(g<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+a+" && xCOffset >= 0 && xCOffset < "+o+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+o+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+a+" && xCOffset >= 0 && xCOffset < "+o+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+o+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+a+" && xC >= 0 && xC < "+o+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<d)){var b=s%2==0?Fs(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+a+` &&
                    xCOffset >= 0 && xCOffset < `+o+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+a+` &&
                      xCOffset >= 0 && xCOffset < `+o+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+a+` &&
                    xCOffset >= 0 && xCOffset < `+o+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<d&&(v+=`
              if(xR >= 0 && xR < `+a+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+o+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+o+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+o+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+o+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+o+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<d&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<d&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<d&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<h;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var y="",w="";e&&(y=t?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},ph=function(r,n,e,t,a){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var o=r[0],i=r[1],s=r[2],u=r[3],c=n[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=t==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],x=m[1],b=m[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=y[0],C=y[1],S=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+o+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+a+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+a+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},vh=function(r,n,e){this.variableNames=["x"],this.outputShape=r;var t=r.length,a=r[r.length-1],o=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+a+" -i - 1;":"return i;")+`
      }

      void main() {
        `+be(t)+` coords = getOutputCoords();
        int end = `+Ki(t,"coords")+`;
        float val = 0.0;
        for (int i = `+a+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+o+` end) {
            continue;
          }
          if (idx == end && `+n+`) {
            continue;
          }
          `+Ki(t,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(t,"coords")+`);
        }
        setOutput(val);
      }
    `};function Ki(r,n){if(r===1)return""+n;if(r===2)return n+".y";if(r===3)return n+".z";if(r===4)return n+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var mh=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=or.DENSE;var n=er(r),e=Ke();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+vt(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+n[0]+", "+n[1]+`));
        int index = 4 * (resTexRC.x * `+n[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},gh=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=or.DENSE;var n=er(r),e=Ke();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+vt(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+n[0]+", "+n[1]+`));
        int index = 4 * (resTexRC.x * `+n[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},yh=function(){function r(n,e,t){this.variableNames=["x"],this.outputShape=[],this.outputShape=n,this.blockSize=e,this.dataFormat=t,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),xh=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},bh=function(r){this.variableNames=["A"],this.outTexUsage=sn.DOWNLOAD;var n=Ke();this.outputShape=r,this.userCode=`
      `+hu+`

      void main() {
        float x = getAAtOutCoords();
        `+n.output+` = encode_float(x);
      }
    `},wh=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=sn.DOWNLOAD;var n=Ke();this.outputShape=r,this.userCode=`
      `+hu+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+n.output+` = encode_float(x);
      }
    `},Ch=function(r,n,e){e===void 0&&(e=!1),this.variableNames=["A"];var t=Ke(),a=n[0],o=n[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Mo(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+o+`;
        int c = imod(flatIndex, `+o+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+o+".0, "+a+`.0);
        vec4 values = `+t.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+t.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},_h=function(r,n,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Ke(),a=n[0],o=n[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+o+`;
              c = imod(flatIndex, `+o+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+o+".0, "+a+`.0);
              values = `+t.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Mo(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+t.output+" = "+s+`;
      }
    `},Eh="return real * expR - imag * expI;",Rh="return real * expI + imag * expR;",Xi=function(r,n,e){this.variableNames=["real","imag"];var t=n[1];this.outputShape=n;var a=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,o=e?t+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+a+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+t+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+t+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+o+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Ih=function(){function r(n,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=n,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;return function(t,a){e.valueLoc==null&&(e.valueLoc=t.getUniformLocationNoThrow(a,"value")),t.gl.uniform1f(e.valueLoc,n)}},r}(),kh=function(r,n,e){this.variableNames=["A","indices"];var t=r.slice();t[e]=n,this.outputShape=t,this.rank=t.length;var a=be(this.rank),o=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<i.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+a+` resRC = getOutputCoords();
        setOutput(getA(`+o+`));
      }
    `},Sh=function(r,n,e){this.sliceDim=r,this.strides=n,this.variableNames=["x","indices"],this.outputShape=e;var t=be(n.length),a=be(e.length),o=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+t+" strides = "+t+"("+this.strides+`);
         void main() {
          `+a+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+o+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Dh(r,n){var e=Ke();return _l(r,n,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Ah(r,n){return Sl(r,n,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Th(r,n){return Dl(r,n,new Uint16Array([0,1,2,2,1,3]))}function vr(r,n,e,t,a,o,i){Tl(e,t);var s=Al(r,n),u=r.TEXTURE_2D;return J(r,n,function(){return r.bindTexture(u,s)}),J(r,n,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),J(r,n,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),J(r,n,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),J(r,n,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),J(r,n,function(){return r.texImage2D(u,0,a,e,t,0,o,i,null)}),J(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function Nh(r,n,e,t,a){var o=ia(e,t);return vr(r,n,o[0],o[1],a.internalFormatFloat,a.textureFormatFloat,r.FLOAT)}function Fh(r,n,e,t,a){var o=ia(e,t);return vr(r,n,o[0],o[1],a.internalFormatHalfFloat,a.textureFormatFloat,a.textureTypeHalfFloat)}function Ph(r,n,e,t,a){var o=ia(e,t);return vr(r,n,o[0],o[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Mh(r,n,e,t,a){var o=pr(e,t);return vr(r,n,o[0],o[1],a.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Oh(r,n,e,t,a){var o=pr(e,t);return vr(r,n,o[0],o[1],a.internalFormatPackedHalfFloat,r.RGBA,a.textureTypeHalfFloat)}function Bh(r,n,e,t){return J(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,t)}),Mi(r,n,e,"clipSpacePos",t,3,20,0)&&Mi(r,n,e,"uv",t,2,20,12)}function Lh(r,n,e,t,a,o,i){var s,u,c;J(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)}),o instanceof Uint8Array?(s=new Uint8Array(t*a*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(t*a*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(o),J(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,c,t,a,0,r.RGBA,u,s)}),J(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Wh(r,n,e,t){J(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)}),t.data instanceof Uint8Array?J(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t.width,t.height,0,r.RGBA,r.UNSIGNED_BYTE,t.data)}):J(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}),J(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function zh(r,n,e,t,a){var o=r.createBuffer();J(r,n,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,o)});var i=16*e*t;return J(r,n,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),J(r,n,function(){return r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,0)}),J(r,n,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),o}function Uh(r,n,e){var t=r,a=new Float32Array(e);return t.bindBuffer(t.PIXEL_PACK_BUFFER,n),t.getBufferSubData(t.PIXEL_PACK_BUFFER,0,a),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),a}function Vh(r,n,e,t,a){var o=ia(e,t),i=o[0],s=o[1],u=new Uint8Array(e*t*4);return J(r,n,function(){return r.readPixels(0,0,i,s,a.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Gh(r,n,e,t,a,o,i,s){var u=r,c=new Float32Array(function(l,f){var h=pr(l,f);return h[0]*h[1]*4}(o,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,n),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Hh(r,n,e,t){var a=new Float32Array(e*t*4);return J(r,n,function(){return r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,a)}),a}var jh=function(){function r(n){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=O().getNumber("WEBGL_VERSION");n!=null?(this.gl=n,yl(e,n)):this.gl=On(e);var t="WEBGL_color_buffer_float";if(O().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=_r(this.gl,this.debug,"OES_texture_float"),pn(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=_r(this.gl,this.debug,"OES_texture_half_float");else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(t),pn(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=_r(this.gl,this.debug,"EXT_color_buffer_half_float");else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(t="EXT_color_buffer_float",pn(this.gl,t))this.colorBufferFloatExtension=this.gl.getExtension(t);else{if(!pn(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Ah(this.gl,this.debug),this.indexBuffer=Th(this.gl,this.debug),this.framebuffer=Nl(this.gl,this.debug),this.textureConfig=Ro(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return O().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var n=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;J(e,this.debug,function(){return e.finish()}),J(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),J(e,this.debug,function(){return e.deleteFramebuffer(n.framebuffer)}),J(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.deleteBuffer(n.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(n,e){return this.throwIfDisposed(),Nh(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(n,e){return this.throwIfDisposed(),Fh(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(n,e){return this.throwIfDisposed(),Ph(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(n,e){this.throwIfDisposed(),Wh(this.gl,this.debug,n,e)},r.prototype.uploadDenseMatrixToTexture=function(n,e,t,a){this.throwIfDisposed(),Lh(this.gl,this.debug,n,e,t,a,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(n,e){return this.throwIfDisposed(),Oh(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(n,e){return this.throwIfDisposed(),Mh(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(n){var e=this;this.throwIfDisposed(),this.outputTexture===n&&(Oi(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return e.gl.deleteTexture(n)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(n,e,t){var a=this;return this.downloadMatrixDriver(n,function(){return Vh(a.gl,a.debug,e,t,a.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(n,e,t,a,o,i){return Gh(this.gl,n,0,0,0,o,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(n,e){return Uh(this.gl,n,e)},r.prototype.createBufferFromTexture=function(n,e,t){this.bindTextureToFrameBuffer(n);var a=zh(this.gl,this.debug,e,t,this.textureConfig);return this.unbindTextureToFrameBuffer(),a},r.prototype.createAndWaitForFence=function(){var n=this.createFence(this.gl);return this.pollFence(n)},r.prototype.createFence=function(n){var e,t,a=this;if(O().getBool("WEBGL_FENCE_API_ENABLED")){var o=n,i=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);n.flush(),t=function(){var s=o.clientWaitSync(i,0,0);return s===o.ALREADY_SIGNALED||s===o.CONDITION_SATISFIED},e=i}else O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),t=function(){return a.isQueryAvailable(e,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):t=function(){return!0};return{query:e,isFencePassed:t}},r.prototype.downloadMatrixFromPackedTexture=function(n,e,t){var a=this;return this.downloadMatrixDriver(n,function(){return Hh(a.gl,a.debug,e,t)})},r.prototype.createProgram=function(n){this.throwIfDisposed();var e=this.gl,t=El(e,this.debug,n),a=Dh(e,this.debug),o=Il(e,this.debug);return J(e,this.debug,function(){return e.attachShader(o,a)}),J(e,this.debug,function(){return e.attachShader(o,t)}),kl(e,this.debug,o),this.debug&&Fa(e,this.debug,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=Bh(e,this.debug,this.program,this.vertexBuffer)),o},r.prototype.deleteProgram=function(n){var e=this;this.throwIfDisposed(),n===this.program&&(this.program=null),n!=null&&J(this.gl,this.debug,function(){return e.gl.deleteProgram(n)})},r.prototype.setProgram=function(n){var e=this;this.throwIfDisposed(),this.program=n,this.program!=null&&this.debug&&Fa(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return e.gl.useProgram(n)})},r.prototype.getUniformLocation=function(n,e,t){return t===void 0&&(t=!0),this.throwIfDisposed(),t?Pl(this.gl,this.debug,n,e):Ml(this.gl,n,e)},r.prototype.getAttributeLocation=function(n,e){var t=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return t.gl.getAttribLocation(n,e)})},r.prototype.getUniformLocationNoThrow=function(n,e){return this.throwIfDisposed(),this.gl.getUniformLocation(n,e)},r.prototype.setInputMatrixTexture=function(n,e,t){this.throwIfDisposed(),this.throwIfNoProgram(),Ol(this.gl,this.debug,this.program,n,e,t)},r.prototype.setOutputMatrixTexture=function(n,e,t){this.setOutputMatrixTextureDriver(n,t,e)},r.prototype.setOutputPackedMatrixTexture=function(n,e,t){this.throwIfDisposed();var a=pr(e,t),o=a[0],i=a[1];this.setOutputMatrixTextureDriver(n,o,i)},r.prototype.setOutputMatrixWriteRegion=function(n,e,t,a){this.setOutputMatrixWriteRegionDriver(t,n,a,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(n,e,t,a){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&Fa(this.gl,this.debug,this.program),Er(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var n=this.gl;this.debug&&this.debugValidate(),J(n,this.debug,function(){return n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var n=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return n.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=_r(this.gl,this.debug,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var n=this.gl,e=this.getQueryTimerExtensionWebGL2(),t=n.createQuery();return n.beginQuery(e.TIME_ELAPSED_EXT,t),t}var a=this.getQueryTimerExtensionWebGL1(),o=a.createQueryEXT();return a.beginQueryEXT(a.TIME_ELAPSED_EXT,o),o},r.prototype.endQuery=function(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var n=this.getQueryTimerExtensionWebGL1();n.endQueryEXT(n.TIME_ELAPSED_EXT)}else{var e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(n){return X(this,void 0,void 0,function(){var e=this;return $(this,function(t){switch(t.label){case 0:return[4,Di(function(){return e.disposed||e.isQueryAvailable(n,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return t.sent(),[2,this.getQueryTime(n,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(n,e){if(e===0)return null;if(e===2){var t=this.gl;return t.getQueryParameter(n,t.QUERY_RESULT)/1e6}var a=this.getQueryTimerExtensionWebGL1();return a.getQueryObjectEXT(n,a.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(n,e){if(e===0)return!0;if(e===2){var t=this.gl,a=this.getQueryTimerExtensionWebGL2(),o=t.getQueryParameter(n,t.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(a.GPU_DISJOINT_EXT)),o&&!this.disjoint}return o=(a=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(n,a.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(a.GPU_DISJOINT_EXT)),o&&!this.disjoint},r.prototype.pollFence=function(n){var e=this;return new Promise(function(t){e.addItemToPoll(function(){return n.isFencePassed()},function(){return t()})})},r.prototype.pollItems=function(){for(var n=function(t){for(var a=0;a<t.length&&t[a]();++a);return a-1}(this.itemsToPoll.map(function(t){return t.isDoneFn})),e=0;e<=n;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(n+1)},r.prototype.addItemToPoll=function(n,e){var t=this;this.itemsToPoll.push({isDoneFn:n,resolveFn:e}),this.itemsToPoll.length>1||Di(function(){return t.pollItems(),t.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(n){this.throwIfDisposed(),Pa(this.gl,this.debug,n,this.framebuffer),this.debug&&Er(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Pa(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Er(this.gl)):Oi(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(n,e){this.bindTextureToFrameBuffer(n);var t=e();return this.unbindTextureToFrameBuffer(),t},r.prototype.setOutputMatrixTextureDriver=function(n,e,t){this.throwIfDisposed();var a=this.gl;Pa(a,this.debug,n,this.framebuffer),this.debug&&Er(a),this.outputTexture=n,J(a,this.debug,function(){return a.viewport(0,0,e,t)}),J(a,this.debug,function(){return a.scissor(0,0,e,t)})},r.prototype.setOutputMatrixWriteRegionDriver=function(n,e,t,a){var o=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return o.gl.scissor(n,e,t,a)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function $i(r,n){if(r.length!==n.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+n.length+" inputs");r.forEach(function(e,t){var a=e.logicalShape,o=n[t],i=o.shape;if(!ze(a,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+a+" and "+i+" must match");if(!e.isUniform||!o.isUniform){var s=e.texShape,u=o.isUniform?null:o.texData.texShape;if(!ze(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var qh=function(r,n,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var t=e.filterWidth,a=e.inChannels,o=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=a*t,v=Ke(),m=f==="channelsLast",g=m?0:1,x=m?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+n[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+o+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+a+`.));

              if(d1 < `+n[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+a+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+v.output+` = result;
      }
    `},Kh=function(r,n,e,t,a){this.variableNames=["x"],this.outputShape=[];var o,i=n,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+t+") * sum";o=a===.5?"inversesqrt("+u+")":a===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+a+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+o+`;
        setOutput(val);
      }
    `},Xh=function(r,n,e,t,a){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=n,this.bias=e,this.alpha=t,this.beta=a,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+n+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+n+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+t+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+t+`)
                * float(`+a+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+a+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},$h=function(r,n,e,t,a){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var o,i=n,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+t+") * sum";o=a===.5?"inversesqrt("+u+")":a===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+a+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+o+`;
        setOutput(result);
      }
    `},Yh=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var n=r.strideHeight,e=r.strideWidth,t=r.dilationHeight,a=r.effectiveFilterHeight,o=r.effectiveFilterWidth,i=a-1-r.padInfo.top,s=o-1-r.padInfo.left,u=a*o-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+a+`;
          wR += `+t+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+o+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+o+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Jh=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var n=r.strideDepth,e=r.strideHeight,t=r.strideWidth,a=r.dilationDepth,o=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,f=u-1-r.padInfo.top,h=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+a+`) {
          float dyD = float(dyDCorner + wD) / `+n+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+o+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+t+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Wa=function(r,n,e,t,a,o,i){e===void 0&&(e=!1),t===void 0&&(t=!1),a===void 0&&(a=!1),o===void 0&&(o=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=t?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=t?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";o&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+o+`
        }`:`vec4 activation(vec4 x) {
          `+o+`
        }`,p="result = activation(result);");var v=a?"result += getBiasAtOutCoords();":"";a&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},Qh=function(){function r(n,e,t){this.variableNames=["probs"],this.outputShape=[n,t],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;return function(t,a){e.seedLoc==null&&(e.seedLoc=t.getUniformLocation(a,"seed")),t.gl.uniform1f(e.seedLoc,n)}},r}(),Zh=function(r,n,e,t){this.variableNames=["indices"],this.outputShape=[r,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+t+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},ed=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var n=r.length;if(n===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=Ze("rc",n),t=be(n),a=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(n,r,e),o=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(n,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var m=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<f;g++)m=h[h.length-1-g]+","+m;d.push(m)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+t+` rc = getOutputCoords();

          if(`+a+`) {
            setOutput(vec4(0));
          } else {
            `+o+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},nd=function(r,n,e){this.variableNames=["x"],this.outputShape=n.map(function(u,c){return u[0]+r[c]+u[1]});var t=r.length,a=be(t),o=n.map(function(u){return u[0]}).join(","),i=n.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,t);this.userCode=t!==1?`
      `+a+" start = "+a+"("+o+`);
      `+a+" end = "+a+"("+i+`);

      void main() {
        `+a+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+a+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+o+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},td=function(r,n,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map(function(m,g){return m[0]+r[g]+m[1]});for(var t=r.length,a=be(t),o=n.map(function(m){return m[0]}).join(","),i=n.map(function(m,g){return m[0]+r[g]}).join(","),s=Ze("rc",t),u=Ze("source",t),c=s[t-1]+" < "+this.outputShape[t-1],l=t===1?"source":"vec2("+u.slice(-2).join()+")",f=[a+" rc = outputLoc;",s[t-1]+` += 1;
       if(`+c+`) {
      `,t===1?"":`}
       rc = outputLoc;
       `+s[t-2]+` += 1;
       if(`+s[t-2]+" < "+this.outputShape[t-2]+") {",t===1?"":"  "+s[t-1]+` += 1;
         if(`+c+") {"],h=t===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=t===1?2:4;p<v;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+a+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=t===1?"} ":"}}",this.userCode=`
      const `+a+" start = "+a+"("+o+`);
      const `+a+" end = "+a+"("+i+`);

      void main() {
        `+a+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},za=function(r,n,e){if(this.variableNames=["x"],n==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var t=r.filterWidth,a=r.strideHeight,o=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,f=r.padInfo.left;this.outputShape=r.outShape;var h=n==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+a+", "+o+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="avg"&&(p="avgValue / count");var v=4*Math.floor(t/4),m=t%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+a+", "+o+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},Ua=function(r,n,e){if(this.variableNames=["x"],n==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var t=r.filterWidth,a=r.strideDepth,o=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,v=r.padInfo.left;this.outputShape=r.outShape;var m=n==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+a+", "+o+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="avg"&&(x="avgValue / count");var b=4*Math.floor(t/4),y=t%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+a+", "+o+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},rd=function(r,n){this.variableNames=["x"];var e=r.windowSize,t=r.batchSize,a=r.inSize,o=Math.ceil(a/e);this.outputShape=[t,o];var i="0.0",s="";n==="prod"?i="1.0":n==="min"?(i="1.0 / 1e-20",s="min"):n==="max"&&(i="-1.0 / 1e-20",s="max");var u=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="sum"?u="sumValue":n==="prod"?u="prodValue":n==="all"?u="allValue":n==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(n==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(n==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";n==="all"?(i="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):n==="any"&&(i="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";a%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},ad=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",t=0;t<4;t++){var a="thisRC = rc;";t%2==1&&(a+="thisRC.z += 1;"),t>1&&(a+="thisRC.y += 1;"),e+=`
        `+a+`
        `+(t>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+t+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(t>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+vt(["r","c","d"],n)+`
      return ivec3(r, c, d);
    }
  
      `+Mo(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},od=function(r,n,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n.shape;var t=n.shape,a=t[1],o=t[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?a-1:a,e&&u>1?o-1:o],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(a-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(o-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},id=function(r,n,e,t){this.variableNames=["A"],this.outputShape=[];var a=r[0],o=r[1],i=r[2],s=r[3];this.outputShape=[a,n,e,s];var u=[t&&n>1?o-1:o,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+o+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},sd=function(r,n,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var a=r[0],o=r[1],i=r[2],s=r[3];this.outputShape=[a,n,e,s];var u=[t&&n>1?o-1:o,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+o+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},ud=function(r,n,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n.shape;var t=n.shape,a=t[1],o=t[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?a-1:a,e&&u>1?o-1:o],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},cd=function(r,n,e,t){this.variableNames=["A"],this.outputShape=[];var a=r[0],o=r[1],i=r[2],s=r[3];this.outputShape=[a,n,e,s];var u=[t&&n>1?o-1:o,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e],l=t?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+o+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},ld=function(r,n){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var t=r.map(function(o,i){return function(s){return n.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),a=be(e);this.userCode=`
      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+t+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},fd=function(r,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var t=Ze("rc",e),a=t[e-1]+" + 1 < "+this.outputShape[e-1],o=t[e-2]+" + 1 < "+this.outputShape[e-2],i=be(e);function s(u){var c=r.map(function(l,f){return function(h,d){return n.indexOf(h)!==-1&&r[h]!==1?r[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+a+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(t.slice())+`;
          if(`+a+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(t.slice())+`;
          }
          if(`+o+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(t.slice())+`;
            if(`+a+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(t.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Yi=function(r,n,e,t,a,o,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=o;var s=be(a.length),u=be(o.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";t===1?f="i":t===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=n>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+a+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+n+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},hd=function(r,n){this.variableNames=["x","segmentIds"];var e=r.windowSize,t=r.batchSize,a=r.inSize,o=r.numSegments,i=o*Math.ceil(a/e);this.outputShape=[t,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";a%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return initializationValue;
        }
      `);var f="";a%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+o+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+o+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},dd=function(r,n,e){var t,a;if(this.variableNames=["c","a","b"],this.outputShape=n,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)a="resRC",t="resRC";else{for(var o=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<n.length;u++)s.push(""+o[u]),u<r&&i.push(""+o[u]);t=i.join(),a=s.join()}var c=be(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+t+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+a+`));
        } else {
          setOutput(getB(`+a+`));
        }
      }
    `},pd=function(){function r(n){this.variableNames=["source"],this.outputShape=n,this.rank=n.length;var e,t=be(this.rank),a="uniform int start["+this.rank+"];",o=function(i){if(i===1)return"sourceLoc";if(i<=6)return Va.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+t+` sourceLoc;
        `+t+` coords = getOutputCoords();
        `+n.map(function(i,s){return"sourceLoc."+Va[s]+" = start["+s+"] + coords."+Va[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+a+`
      void main() {
        `+e+`
        setOutput(getSource(`+o+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;if(n.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+n.length+")");return function(t,a){e.startLoc==null&&(e.startLoc=t.getUniformLocationNoThrow(a,"start"),e.startLoc==null)||t.gl.uniform1iv(e.startLoc,n)}},r}(),Va=["x","y","z","w","u","v"],vd=function(){function r(n){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.rank=n.length;var e=be(this.rank),t=Ze("coords",this.rank),a=Ze("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":"vec2("+a.slice(-2).join()+")",i="getChannel(getSource("+a.join()+"), "+o+")",s=`
      result.x = `+i+`;
      if (++`+t[this.rank-1]+" < "+n[this.rank-1]+`) {
        ++`+a[this.rank-1]+`;
        result.y = `+i+`;
        --`+a[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+t[this.rank-1]+`;
      if (++`+t[this.rank-2]+" < "+n[this.rank-2]+`) {
        ++`+a[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+t[this.rank-1]+" < "+n[this.rank-1]+`) {
          ++`+a[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+n.map(function(l,f){return"start["+f+"]"}).join()+");":n.map(function(l,f){return a[f]+" = "+t[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;if(n.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+n.length+")");return function(t,a){e.startLoc==null&&(e.startLoc=t.getUniformLocationNoThrow(a,"start"),e.startLoc==null)||t.gl.uniform1iv(e.startLoc,n)}},r}(),md=function(r,n,e){this.variableNames=["x"],this.outputShape=e;var t=e.length,a=be(e.length),o=be(e.length),i="";if(t===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+a+" begin = "+a+"("+r+`);
      `+a+" strides = "+a+"("+n+`);

      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},gd=function(){function r(n){this.gpgpu=n,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(n,e,t){var a,o=Ji(e,t),i=Qi(n,o,t);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),o===on.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(n[0],n[1]):o===on.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(n[0],n[1]):o===on.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(n[0],n[1]):o===on.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(n[0],n[1]):o===on.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(n[0],n[1])),this.usedTextures[i].push(a),a},r.prototype.releaseTexture=function(n,e,t,a){if(this.freeTextures!=null){var o=Qi(e,Ji(t,a),a);o in this.freeTextures||(this.freeTextures[o]=[]),this.freeTextures[o].push(n),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[o],s=i.indexOf(n);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var n=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+n+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var n=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(t){n.gpgpu.deleteMatrixTexture(t)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(a){n.gpgpu.deleteMatrixTexture(a)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Ji(r,n){if(r===sn.UPLOAD)return on.PACKED_2X2_FLOAT32;if(r===sn.RENDER||r==null)return function(e){return O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?on.PACKED_2X2_FLOAT32:on.UNPACKED_FLOAT32:e?on.PACKED_2X2_FLOAT16:on.UNPACKED_FLOAT16}(n);if(r===sn.DOWNLOAD||r===sn.PIXELS)return on.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function Qi(r,n,e){return r[0]+"_"+r[1]+"_"+n+"_"+e}var yd=function(r,n){this.variableNames=["A"];for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[t]*n[t];this.outputShape=e,this.rank=e.length;var a=be(this.rank),o=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+a+` resRC = getOutputCoords();
        setOutput(getA(`+o+`));
      }
    `},xd=function(r,n){this.variableNames=["A"];for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[n[t]];this.outputShape=e,this.rank=e.length;var a=be(this.rank),o=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(n);this.userCode=`
    void main() {
      `+a+` resRC = getOutputCoords();
      setOutput(getA(`+o+`));
    }
    `},bd=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[n[t]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var a=be(this.rank),o=fu("rc",this.rank),i=new Array(this.rank);for(t=0;t<n.length;t++)i[n[t]]=o[t];var s="vec2("+i.slice(-2).join()+")",u="++"+o[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+a+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+o[this.rank-1]+`;
      if(++`+o[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Oo=1.7580993408473768,Bo=1.0507009873554805,oe=function(r,n){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+n+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},wn="if (isnan(x)) return x;",wd="return x;",Zi="return abs(x);",mu=wn+`
  return (x < 0.0) ? 0.0 : x;
`,gu=wn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,yu="return (x >= 0.0) ? x : (exp(x) - 1.0);",Cd=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Oo+`;
  float scale = `+Bo+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,es="return -x;",ns="return ceil(x);",ts="return floor(x);",rs="return exp(x);",as="return exp(x) - 1.0;",_d=wn+`
  return sin(x);
`,Ed=wn+`
  return cos(x);
`,Rd=wn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Id=wn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,kd=wn+`
  return atan(x);
`,Sd=wn+"return log(x + sqrt(x * x + 1.0));",Dd=wn+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Ad=wn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Sr="return x;",Td="return x;",xu=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,bu=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,wu=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Qt=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+n+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Nd=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var n=r.length,e=Ze("rc",n),t=be(n),a=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(n,e),o=e.slice(-2),i=n<=1?"rc":"vec2("+o.join(",")+")";this.userCode=`
      void main() {
        `+t+` rc = getOutputCoords();
        vec4 packedInput = getA(`+a+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Dr={};function Ar(r,n){if(n===void 0&&(n=!1),r==="linear")return n?Td:wd;if(r==="relu")return n?xu:mu;if(r==="elu")return n?wu:yu;if(r==="relu6")return n?bu:gu;if(r==="prelu")return n?vu:pu;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Fd=600,Pd=function(r){function n(e){var t,a=r.call(this)||this;if(a.pendingRead=new WeakMap,a.pendingDisposal=new WeakSet,a.dataRefCount=new WeakMap,a.numBytesInGPU=0,a.uploadWaitMs=0,a.downloadWaitMs=0,a.warnedAboutMemory=!1,a.pendingDeletes=0,a.disposed=!1,!O().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var o=On(O().getNumber("WEBGL_VERSION"));a.binaryCache=((t=O().getNumber("WEBGL_VERSION"))in Dr||(Dr[t]={}),Dr[t]),a.gpgpu=new jh(o),a.canvas=o.canvas,a.gpgpuCreatedLocally=!0}else a.gpgpu=e,a.binaryCache={},a.gpgpuCreatedLocally=!1,a.canvas=e.gl.canvas;return a.textureManager=new gd(a.gpgpu),a.numMBBeforeWarning=O().global.screen==null?1024:O().global.screen.height*O().global.screen.width*window.devicePixelRatio*Fd/1024/1024,a.texData=new tu(a,T),a}return bn(n,r),n.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},n.prototype.write=function(e,t,a){if(O().getBool("DEBUG")&&this.checkNumericalProblems(e),a==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var o={};return this.texData.set(o,{shape:t,dtype:a,values:e,usage:sn.UPLOAD}),o},n.prototype.move=function(e,t,a,o){if(O().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:a,dtype:o,values:t,usage:sn.UPLOAD})},n.prototype.readSync=function(e){var t=this.texData.get(e),a=t.values,o=t.dtype,i=t.complexTensors,s=t.slice,u=t.shape,c=t.isPacked;if(s!=null){var l=void 0;l=c?new Qt(u,Sr):new oe(u,Sr);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:o}],o),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(a!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return a;var d,p,v=this.activeTimers!=null;return v&&(d=kn()),o==="complex64"?p=po(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(e),v&&(this.downloadWaitMs+=kn()-d),this.convertAndCacheOnCPU(e,p)},n.prototype.read=function(e){return X(this,void 0,void 0,function(){var t,a,o,i,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,C,S,k;return $(this,function(R){switch(R.label){case 0:if(this.pendingRead.has(e))return t=this.pendingRead.get(e),[2,new Promise(function(I){return t.push(I)})];if(a=this.texData.get(e),o=a.values,i=a.shape,s=a.slice,u=a.dtype,c=a.complexTensors,l=a.isPacked,s!=null)return f=void 0,f=l?new Qt(i,Sr):new oe(i,Sr),h=this.runWebGLProgram(f,[{dataId:e,shape:i,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(o!=null)return[2,this.convertAndCacheOnCPU(e)];if(!O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&O().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&O().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(e),m=this.texData.get(v.dataId),p=(k=this.gpgpu).createBufferFromTexture.apply(k,[m.texture].concat(er(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:R.sent(),R.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=R.sent(),b=x[0],y=x[1],g=po(b,y),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=Y(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),R.label=5;case 5:return v!=null&&this.disposeData(v.dataId),C=this.convertAndCacheOnCPU(e,g),S=this.pendingRead.get(e),this.pendingRead.delete(e),S.forEach(function(I){return I(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},n.prototype.checkNumericalProblems=function(e){if(e!=null)for(var t=0;t<e.length;t++){var a=e[t];if(!wl(a))throw O().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+a+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+a+" cannot be represented on this device.")}},n.prototype.getValuesFromTexture=function(e){var t,a=this.texData.get(e),o=a.shape,i=a.dtype,s=a.isPacked,u=Y(o);if(O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(t=this.gpgpu).downloadMatrixFromPackedTexture.apply(t,[l.texture].concat(er(o))).subarray(0,u);return this.disposeData(c.dataId),f}var h=O().getBool("WEBGL_PACK")&&s===!0,d=h?Ma(o):o,p=h?new wh(d):new bh(d),v=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:e}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},n.prototype.time=function(e){return X(this,void 0,void 0,function(){var t,a,o,i,s,u,c;return $(this,function(l){switch(l.label){case 0:return t=this.activeTimers,a=[],o=!1,this.programTimersStack==null?(this.programTimersStack=a,o=!0):this.activeTimers.push(a),this.activeTimers=a,e(),i=Gt(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=Gt(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=t,o&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=nl(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},n.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},n.prototype.startTimer=function(){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:kn(),endMs:null}},n.prototype.endTimer=function(e){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=kn(),e)},n.prototype.getQueryTime=function(e){return X(this,void 0,void 0,function(){var t;return $(this,function(a){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(t=e).endMs-t.startMs]})})},n.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var t=this.texData.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.texData.delete(e)}}},n.prototype.releaseGPUData=function(e){var t=this.texData.get(e),a=t.texture,o=t.dtype,i=t.texShape,s=t.usage,u=t.isPacked,c=t.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),a!=null&&(this.numBytesInGPU-=this.computeBytes(i,o),this.textureManager.releaseTexture(a,i,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},n.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},n.prototype.getDataInfo=function(e){return this.texData.get(e)},n.prototype.getCPUBackend=function(){return O().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},n.prototype.shouldExecuteOnCPU=function(e,t){var a=this;return t===void 0&&(t=128),this.getCPUBackend()!=null&&e.every(function(o){return a.texData.get(o.dataId).texture==null&&o.size<t})},n.prototype.getGPGPUContext=function(){return this.gpgpu},n.prototype.complex=function(e,t){var a=this.makeOutput(e.shape,"complex64");return this.texData.get(a.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(t.clone())},a},n.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},n.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},n.prototype.slice=function(e,t,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,t,a);if(Y(a)===0)return He([],a,e.dtype);var o=this.texData.get(e.dataId).isPacked,i=eu(e.shape,t,a);if(o||!i){var s=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new vd(a):new pd(a),u=s.getCustomSetupFunc(t);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,t,a)},n.prototype.shallowSlice=function(e,t,a){var o=this.texData.get(e.dataId),i=this.makeOutput(a,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,o),s.shape=a,s.dtype=e.dtype;var u=nu(t,e.strides);o.slice&&(u+=o.slice.flatOffset),s.slice={flatOffset:u,origDataId:o.slice&&o.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},n.prototype.stridedSlice=function(e,t,a,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,t,a,o);var i=Ao(t,a,o);if(i.some(function(u){return u===0}))return He([],i);var s=new md(t,o,i);return this.compileAndRun(s,[e])},n.prototype.reverse=function(e,t){var a=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fd(e.shape,t):new ld(e.shape,t);return this.compileAndRun(a,[e])},n.prototype.concat=function(e,t){if(e[0].dtype==="complex64"){var a=e.map(function(d){return dn(d)}),o=e.map(function(d){return Dn(d)});return Ve(this.concat(a,t),this.concat(o,t))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,t);if(e.length===1)return e[0];if(e.length>O().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),t),u=this.concat(e.slice(i),t);return this.concat([s,u],t)}if(O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new ih(e.map(function(d){return d.shape}),t);return this.compileAndRun(c,e)}var l=jt(e.map(function(d){return d.shape}),t),f=e.map(function(d){return d.as2D(-1,Y(d.shape.slice(t)))}),h=new oh(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},n.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,es,e.dtype);var t=new oe(e.shape,es);return this.compileAndRun(t,[e])},n.prototype.batchMatMul=function(e,t,a,o){var i=a?e.shape[2]:e.shape[1],s=o?t.shape[1]:t.shape[2],u=a?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){a&&(e=e.transpose([0,2,1])),o&&(t=t.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?t.as3D(c,1,u):t;return this.multiply(l,h).sum(f,!0)}var d=Ge(e.dtype,t.dtype),p=new Wa(e.shape,[c,i,s],a,o);return this.compileAndRun(p,[e,t],d)},n.prototype.fusedBatchMatMul=function(e){var t=e.a,a=e.b,o=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=o?t.shape[2]:t.shape[1],f=i?a.shape[1]:a.shape[2],h=t.shape[0],d=Ge(t.dtype,a.dtype),p=s!=null,v=c!=null,m=u?Ar(u,!0):null,g=new Wa(t.shape,[h,l,f],o,i,p,m,v),x=[t,a];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,d)},n.prototype.multiply=function(e,t){if(e.dtype==="complex64"){var a=this.texData.get(e.dataId),o=this.texData.get(t.dataId),i=new Vi(eh,e.shape,t.shape),s=new Vi(nh,e.shape,t.shape),u=[this.makeComplexComponentTensorInfo(e,a.complexTensors.real),this.makeComplexComponentTensorInfo(e,a.complexTensors.imag),this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.multiply(e,t);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,Gi,e.dtype);var h=new Se(Gi,e.shape,t.shape);return this.compileAndRun(h,[e,t],e.dtype)},n.prototype.batchNormalization=function(e,t,a,o,i,s){var u=[e,t,a],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),O().getBool("WEBGL_PACK_NORMALIZATION")){var f=new Zf(e.shape,t.shape,a.shape,c,l,o);return this.compileAndRun(f,u)}var h=new Qf(e.shape,t.shape,a.shape,c,l,o);return this.compileAndRun(h,u)},n.prototype.localResponseNormalization4D=function(e,t,a,o,i){var s=O().getBool("WEBGL_PACK_NORMALIZATION")?new $h(e.shape,t,a,o,i):new Kh(e.shape,t,a,o,i);return this.compileAndRun(s,[e])},n.prototype.LRNGrad=function(e,t,a,o,i,s,u){var c=new Xh(t.shape,o,i,s,u);return this.compileAndRun(c,[t,a,e])},n.prototype.tile=function(e,t){if(e.dtype==="string"){var a=this.readSync(e.dataId).map(function(i){return Wr(i)});return cu(ae(e.shape,e.dtype,a),t)}var o=new yd(e.shape,t);return this.compileAndRun(o,[e])},n.prototype.pad=function(e,t,a){var o=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new td(e.shape,t,a):new nd(e.shape,t,a);return this.compileAndRun(o,[e])},n.prototype.transpose=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,t);var a=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new bd(e.shape,t):new xd(e.shape,t);return this.compileAndRun(a,[e])},n.prototype.gather=function(e,t,a){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.gather(e,t,a);var o=new kh(e.shape,t.size,a);return this.compileAndRun(o,[e,t])},n.prototype.batchToSpaceND=function(e,t,a){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var o=t.reduce(function(f,h){return f*h}),i=jr(e.shape,t,o),s=qr(i.length,t.length),u=Kr(e.shape,t,o),c=Ys(a,t.length),l=Js(u,a,t.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},n.prototype.spaceToBatchND=function(e,t,a){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var o=t.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,a);for(var s=1+t.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=jr(u.shape,t,o,!1),l=qr(c.length,t.length,!1),f=Kr(u.shape,t,o,!1);return u.reshape(c).transpose(l).reshape(f)},n.prototype.reduce=function(e,t,a){var o=e.shape[0],i=e.shape[1],s=Oa(i),u=new rd({windowSize:s,inSize:i,batchSize:o},t),c=this.compileAndRun(u,[e],a);return c.shape[1]===1?c:this.reduce(c,t,a)},n.prototype.argReduce=function(e,t,a){a===void 0&&(a=null);var o=e.shape[0],i=e.shape[1];a!=null&&(o=a.shape[0],i=a.shape[1]);var s=Oa(i),u=new Gf({windowSize:s,inSize:i,batchSize:o},t,a==null),c=[e];a!=null&&c.push(a);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,t,l)},n.prototype.argReducePacked=function(e,t,a){a===void 0&&(a=null);var o=a!=null?a.shape:e.shape,i=Oa(o[o.length-1]),s=new $f(o,i,t,a==null),u=a==null?[e]:[e,a],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,t,c):c},n.prototype.sum=function(e,t){an("sum",t,e.rank);var a=je(e.shape,t),o=a[0],i=Y(a[1]),s=e.as2D(-1,i),u=Sa(e.dtype);return this.reduce(s,"sum",u).reshape(o)},n.prototype.prod=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,t);var a=je(e.shape,t),o=a[0],i=Y(a[1]),s=e.as2D(-1,i),u=Sa(e.dtype);return this.reduce(s,"prod",u).reshape(o)},n.prototype.unsortedSegmentSum=function(e,t,a){var o=0,i=Bn([o],e.rank),s=e;i!=null&&(s=e.transpose(i),o=Ln(1,e.rank)[0]);var u=function(d,p,v){for(var m=[],g=d.length,x=0;x<g;x++)x!==p?m.push(d[x]):m.push(v);return m}(s.shape,o,a),c=Y([s.shape[o]]),l=s.as2D(-1,c),f=Sa(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",t,f,a).reshape(u);return i!=null&&(h=h.transpose(Io(i))),h},n.prototype.segOpCompute=function(e,t,a,o,i){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,v=!1;for(h<=Zs?(p=h,v=!0):p=ao(h,Math.floor(Math.sqrt(h)));!v;)p>d||p===h?v=!0:p=ao(h,p+1);return p}(u,i),l=new hd({windowSize:c,inSize:u,batchSize:s,numSegments:i}),f=this.compileAndRun(l,[e,a],o);return f.shape[1]===i?f:(a=Hr(0,i).tile([u/c]),this.segOpCompute(f,t,a,o,i))},n.prototype.argMinMaxReduce=function(e,t,a){var o=[t];if(an("arg"+a.charAt(0).toUpperCase()+a.slice(1),o,e.rank),!O().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=je(e.shape,o),s=i[0],u=Y(i[1]),c=e.as2D(-1,u);return this.argReduce(c,a).reshape(s)}return this.argReducePacked(e,a)},n.prototype.argMin=function(e,t){return this.argMinMaxReduce(e,t,"min")},n.prototype.argMax=function(e,t){return this.argMinMaxReduce(e,t,"max")},n.prototype.cumsum=function(e,t,a,o){if(t!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+t);var i=new vh(e.shape,a,o);return this.compileAndRun(i,[e])},n.prototype.equal=function(e,t){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(equal(a, b));
`,"bool");var a=new Se("return float(a == b);",e.shape,t.shape);return this.compileAndRun(a,[e,t],"bool")},n.prototype.notEqual=function(e,t){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(notEqual(a, b));
`,"bool");var a=new Se("return float(a != b);",e.shape,t.shape);return this.compileAndRun(a,[e,t],"bool")},n.prototype.less=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.less(e,t);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(lessThan(a, b));
`,"bool");var a=new Se("return float(a < b);",e.shape,t.shape);return this.compileAndRun(a,[e,t],"bool")},n.prototype.lessEqual=function(e,t){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(lessThanEqual(a, b));
`,"bool");var a=new Se("return float(a <= b);",e.shape,t.shape);return this.compileAndRun(a,[e,t],"bool")},n.prototype.greater=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.greater(e,t);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(greaterThan(a, b));
`,"bool");var a=new Se("return float(a > b);",e.shape,t.shape);return this.compileAndRun(a,[e,t],"bool")},n.prototype.greaterEqual=function(e,t){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var a=new Se("return float(a >= b);",e.shape,t.shape);return this.compileAndRun(a,[e,t],"bool")},n.prototype.logicalNot=function(e){var t=new oe(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(t,[e])},n.prototype.logicalAnd=function(e,t){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var a=new Se("return float(a >= 1.0 && b >= 1.0);",e.shape,t.shape);return this.compileAndRun(a,[e,t],"bool")},n.prototype.logicalOr=function(e,t){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var a=new Se("return float(a >= 1.0 || b >= 1.0);",e.shape,t.shape);return this.compileAndRun(a,[e,t],"bool")},n.prototype.select=function(e,t,a){var o=new dd(e.rank,t.shape,t.rank);return this.compileAndRun(o,[e,t,a],Ge(t.dtype,a.dtype))},n.prototype.where=function(e){Vr("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var t=e.dataSync();return Po(e.shape,t)},n.prototype.topk=function(e,t,a){return lu(e.dataSync(),e.shape,e.dtype,t)},n.prototype.min=function(e,t){an("min",t,e.rank);var a=je(e.shape,t),o=a[0],i=Y(a[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(o)},n.prototype.minimum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.minimum(e,t);var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,t.shape);return this.compileAndRun(a,[e,t])},n.prototype.mod=function(e,t){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,t.shape);return this.compileAndRun(a,[e,t])},n.prototype.max=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,t);an("max",t,e.rank);var a=je(e.shape,t),o=a[0],i=Y(a[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(o)},n.prototype.maximum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.maximum(e,t);var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,t.shape);return this.compileAndRun(a,[e,t])},n.prototype.all=function(e,t){an("all",t,e.rank);var a=je(e.shape,t),o=a[0],i=Y(a[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(o)},n.prototype.any=function(e,t){an("any",t,e.rank);var a=je(e.shape,t),o=a[0],i=Y(a[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(o)},n.prototype.realDivide=function(e,t){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var a=new Se(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,t.shape);return this.compileAndRun(a,[e,t],"float32")},n.prototype.floorDiv=function(e,t){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var a=new Se(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,t.shape);return this.compileAndRun(a,[e,t],"int32")},n.prototype.add=function(e,t){if(e.dtype==="complex64"&&t.dtype==="complex64")return this.complexSeparableBinaryOp(e,t,Ba);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.add(e,t);var a=Ge(e.dtype,t.dtype);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,Ba,a);var o=new Se(Ba,e.shape,t.shape);return this.compileAndRun(o,[e,t],a)},n.prototype.packedUnaryOp=function(e,t,a){var o=new Qt(e.shape,t);return this.compileAndRun(o,[e],a)},n.prototype.packedBinaryOp=function(e,t,a,o,i){i===void 0&&(i=!1);var s=new Gn(a,e.shape,t.shape,i);return this.compileAndRun(s,[e,t],o)},n.prototype.complexSeparableBinaryOp=function(e,t,a){var o=this,i=this.texData.get(e.dataId),s=this.texData.get(t.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],v=o.makeComplexComponentTensorInfo(e,d),m=o.makeComplexComponentTensorInfo(t,p),g=new Se(a,e.shape,t.shape);return o.compileAndRun(g,[v,m],Ge(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},n.prototype.makeComplexComponentTensorInfo=function(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}},n.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>O().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var t=Math.floor(e.length/2),a=this.addN(e.slice(0,t)),o=this.addN(e.slice(t));return this.addN([a,o])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Ge(c,l)}),s=e.map(function(c){return c.shape}),u=O().getBool("WEBGL_PACK")?new Vf(e[0].shape,s):new Uf(e[0].shape,s);return this.compileAndRun(u,e,i)},n.prototype.subtract=function(e,t){if(e.dtype==="complex64"&&t.dtype==="complex64")return this.complexSeparableBinaryOp(e,t,La);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.subtract(e,t);var a=Ge(e.dtype,t.dtype);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,La,e.dtype);var o=new Se(La,e.shape,t.shape);return this.compileAndRun(o,[e,t],a)},n.prototype.pow=function(e,t){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,t.shape),o=Ge(e.dtype,t.dtype);return this.compileAndRun(a,[e,t],o)},n.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ns,e.dtype);var t=new oe(e.shape,ns);return this.compileAndRun(t,[e])},n.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ts,e.dtype);var t=new oe(e.shape,ts);return this.compileAndRun(t,[e])},n.prototype.sign=function(e){var t=new oe(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(t,[e])},n.prototype.isNaN=function(e){var t=new oe(e.shape,"return float(isnan(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.isInf=function(e){var t=new oe(e.shape,"return float(isinf(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.isFinite=function(e){var t=new oe(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.round=function(e){var t=new oe(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(t,[e])},n.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,rs,e.dtype);var t=new oe(e.shape,rs);return this.compileAndRun(t,[e])},n.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,as,e.dtype);var t=new oe(e.shape,as);return this.compileAndRun(t,[e])},n.prototype.softmax=function(e,t){var a=Le([t],e.shape),o=this.max(e,a),i=nn(o.shape,a),s=this.subtract(e,o.reshape(i)),u=this.exp(s),c=this.sum(u,a).reshape(i);return this.realDivide(u,c)},n.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var t=new oe(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(t,[e])},n.prototype.log1p=function(e){var t=new oe(e.shape,"return log(1.0 + x);");return this.compileAndRun(t,[e])},n.prototype.sqrt=function(e){var t=new oe(e.shape,"return sqrt(x);");return this.compileAndRun(t,[e])},n.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var t=new oe(e.shape,"return inversesqrt(x);");return this.compileAndRun(t,[e])},n.prototype.reciprocal=function(e){var t=new oe(e.shape,"return 1.0 / x;");return this.compileAndRun(t,[e])},n.prototype.relu=function(e){var t;return t=O().getBool("WEBGL_PACK")?new Qt(e.shape,xu):new oe(e.shape,mu),this.compileAndRun(t,[e])},n.prototype.relu6=function(e){var t;return t=O().getBool("WEBGL_PACK")?new Qt(e.shape,bu):new oe(e.shape,gu),this.compileAndRun(t,[e])},n.prototype.prelu=function(e,t){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(vu,e.shape,t.shape):new Se(pu,e.shape,t.shape);return this.compileAndRun(a,[e,t])},n.prototype.elu=function(e){if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,wu,e.dtype);var t=new oe(e.shape,yu);return this.compileAndRun(t,[e])},n.prototype.eluDer=function(e,t){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,t.shape):new Se("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,t.shape);return this.compileAndRun(a,[e,t])},n.prototype.selu=function(e){var t=new oe(e.shape,Cd);return this.compileAndRun(t,[e])},n.prototype.int=function(e){var t=new oe(e.shape,"return float(int(x));");return this.compileAndRun(t,[e],"int32")},n.prototype.clip=function(e,t,a){var o,i=(o=O().getBool("WEBGL_PACK_CLIP")?new rh(e.shape):new th(e.shape)).getCustomSetupFunc(t,a);return this.compileAndRun(o,[e],null,i)},n.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Zi,e.dtype);var t=new oe(e.shape,Zi);return this.compileAndRun(t,[e])},n.prototype.complexAbs=function(e){var t=this.texData.get(e.dataId),a=new ah(e.shape),o=[this.makeComplexComponentTensorInfo(e,t.complexTensors.real),this.makeComplexComponentTensorInfo(e,t.complexTensors.imag)];return this.compileAndRun(a,o)},n.prototype.sigmoid=function(e){var t=new oe(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(t,[e])},n.prototype.softplus=function(e){var t=new oe(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(t,[e])},n.prototype.sin=function(e){var t=new oe(e.shape,_d);return this.compileAndRun(t,[e])},n.prototype.cos=function(e){var t=new oe(e.shape,Ed);return this.compileAndRun(t,[e])},n.prototype.tan=function(e){var t=new oe(e.shape,"return tan(x);");return this.compileAndRun(t,[e])},n.prototype.asin=function(e){var t=new oe(e.shape,Rd);return this.compileAndRun(t,[e])},n.prototype.acos=function(e){var t=new oe(e.shape,Id);return this.compileAndRun(t,[e])},n.prototype.atan=function(e){var t=new oe(e.shape,kd);return this.compileAndRun(t,[e])},n.prototype.atan2=function(e,t){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Se(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,t.shape);return this.compileAndRun(a,[e,t])},n.prototype.sinh=function(e){var t=new oe(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},n.prototype.cosh=function(e){var t=new oe(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},n.prototype.tanh=function(e){var t=new oe(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(t,[e])},n.prototype.asinh=function(e){var t=new oe(e.shape,Sd);return this.compileAndRun(t,[e])},n.prototype.acosh=function(e){var t=new oe(e.shape,Dd);return this.compileAndRun(t,[e])},n.prototype.atanh=function(e){var t=new oe(e.shape,Ad);return this.compileAndRun(t,[e])},n.prototype.erf=function(e){var t=new oe(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(t,[e])},n.prototype.step=function(e,t){var a=new oe(e.shape,function(o){return o===void 0&&(o=0),wn+`
    return x > 0.0 ? 1.0 : float(`+o+`);
  `}(t));return this.compileAndRun(a,[e])},n.prototype.conv2dByMatMul=function(e,t,a,o,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=a.inChannels,f=u[0]*u[1]*u[2],h=a.outChannels,d=a.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!O().getBool("WEBGL_LAZILY_UNPACK")||!O().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,m,a.inChannels]),x=this.reshape(t,[1,a.inChannels,a.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:o,activation:i,preluActivationWeights:s}),a.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,a.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(Ir(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var C=this.reshape(t,[1,a.inChannels,a.outChannels]),S=this.fusedBatchMatMul({a:y,b:C,transposeA:!1,transposeB:!1,bias:o,activation:i,preluActivationWeights:s}),k=this.texData.get(S.dataId);return E(k.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,k.shape=a.outShape,T.makeTensorFromDataId(S.dataId,a.outShape,S.dtype)},n.prototype.conv2dWithIm2Row=function(e,t,a,o,i,s){var u=a.filterWidth,c=a.filterHeight,l=a.inChannels,f=a.outWidth,h=a.outHeight,d=a.dataFormat==="channelsLast",p=u*c*l,v=h*f,m=[p,v],g=e.squeeze([0]),x=t.reshape([1,p,-1]),b=new qh(m,g.shape,a),y=this.compileAndRun(b,[g]).reshape([1,m[0],m[1]]),w=o!=null,C=s!=null,S=i?Ar(i,!0):null,k=new Wa(y.shape,[1,v,a.outChannels],!0,!1,w,S,C),R=[y,x];o&&R.push(o),C&&R.push(s);var I=this.compileAndRun(k,R);return d?I.reshape([1,h,f,a.outChannels]):I.reshape([1,a.outChannels,h,f])},n.prototype.fusedConv2d=function(e){var t=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(t,a,o,i,s,u);if(O().getBool("WEBGL_CONV_IM2COL")&&t.shape[0]===1)return this.conv2dWithIm2Row(t,a,o,i,s,u);var c=i!=null,l=u!=null,f=s?Ar(s,!1):null,h=new Hi(o,c,f,l),d=[t,a];return i&&d.push(i),u&&d.push(u),this.compileAndRun(h,d)},n.prototype.conv2d=function(e,t,a){if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(e,t,a);if(O().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,t,a);var o=new Hi(a);return this.compileAndRun(o,[e,t])},n.prototype.conv2dDerInput=function(e,t,a){var o=new uh(a);return this.compileAndRun(o,[e,t])},n.prototype.conv2dDerFilter=function(e,t,a){var o=new sh(a);return this.compileAndRun(o,[e,t])},n.prototype.fusedDepthwiseConv2D=function(e){var t,a=e.input,o=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=O().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,f=u?Ar(u,l):null,h=[a,o],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(t=new qi(i,d,f,p),this.compileAndRun(t,h)):(t=new ji(i,d,f,p),this.compileAndRun(t,h))},n.prototype.depthwiseConv2D=function(e,t,a){var o;return O().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1?(o=new qi(a),this.compileAndRun(o,[e,t])):(o=new ji(a),this.compileAndRun(o,[e,t]))},n.prototype.depthwiseConv2DDerInput=function(e,t,a){var o=new hh(a);return this.compileAndRun(o,[e,t])},n.prototype.depthwiseConv2DDerFilter=function(e,t,a){var o=new fh(a);return this.compileAndRun(o,[e,t])},n.prototype.conv3d=function(e,t,a){var o=new dh(a);return this.compileAndRun(o,[e,t])},n.prototype.conv3dDerInput=function(e,t,a){var o=new lh(a);return this.compileAndRun(o,[e,t])},n.prototype.conv3dDerFilter=function(e,t,a){var o=new ch(a);return this.compileAndRun(o,[e,t])},n.prototype.maxPool=function(e,t){var a=new za(t,"max",!1);return this.compileAndRun(a,[e])},n.prototype.avgPool=function(e,t){var a=new za(t,"avg",!1);return this.compileAndRun(a,[e],"float32")},n.prototype.maxPoolBackprop=function(e,t,a,o){var i=new za(o,"max",!0),s=this.compileAndRun(i,[t]),u=new Yh(o),c=this.compileAndRun(u,[e,s],t.dtype);return s.dispose(),c},n.prototype.avgPoolBackprop=function(e,t,a){var o=new Yf(a);return this.compileAndRun(o,[e],t.dtype)},n.prototype.cast=function(e,t){return ou(e,t,this)},n.prototype.unstack=function(e,t){for(var a=e.shape[t],o=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==t&&(o[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[t]=1;var l=new Array(a);for(s=0;s<l.length;s++)u[t]=s,l[s]=this.slice(e,u,c).reshape(o);return l},n.prototype.avgPool3d=function(e,t){var a=new Ua(t,"avg",!1);return this.compileAndRun(a,[e],"float32")},n.prototype.avgPool3dBackprop=function(e,t,a){var o=new Jf(a);return this.compileAndRun(o,[e],t.dtype)},n.prototype.maxPool3d=function(e,t){var a=new Ua(t,"max",!1);return this.compileAndRun(a,[e],"float32")},n.prototype.maxPool3dBackprop=function(e,t,a,o){var i=new Ua(o,"max",!0),s=this.compileAndRun(i,[t]),u=new Jh(o),c=this.compileAndRun(u,[e,s],t.dtype);return s.dispose(),c},n.prototype.reshape=function(e,t){var a=this.texData.get(e.dataId);if(a.isPacked&&!Ir(e.shape,t)&&(a.texture===null||!Ir(a.shape,t))){var o=this.packedReshape(e,t);return T.makeTensorFromDataId(o.dataId,o.shape,o.dtype)}return ho(e,t)},n.prototype.resizeBilinear=function(e,t,a,o){var i=O().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new sd(e.shape,t,a,o):new id(e.shape,t,a,o);return this.compileAndRun(i,[e],"float32")},n.prototype.resizeBilinearBackprop=function(e,t,a){var o=new od(e,t,a);return this.compileAndRun(o,[e])},n.prototype.resizeNearestNeighbor=function(e,t,a,o){var i=new cd(e.shape,t,a,o);return this.compileAndRun(i,[e])},n.prototype.resizeNearestNeighborBackprop=function(e,t,a){var o=new ud(e,t,a);return this.compileAndRun(o,[e])},n.prototype.multinomial=function(e,t,a,o){var i=t?e:Kn(e),s=i.shape[0],u=i.shape[1],c=new Qh(s,u,a),l=c.getCustomSetupFunc(o);return this.compileAndRun(c,[i],"int32",l)},n.prototype.oneHot=function(e,t,a,o){var i=new Zh(e.size,t,a,o);return this.compileAndRun(i,[e])},n.prototype.diag=function(e){var t=new xh(e.size);return this.compileAndRun(t,[e])},n.prototype.nonMaxSuppression=function(e,t,a,o,i){return Vr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),No(e.dataSync(),t.dataSync(),a,o,i)},n.prototype.cropAndResize=function(e,t,a,o,i,s){var u=new ph(e.shape,t.shape,o,i,s);return this.compileAndRun(u,[e,t,a],"float32")},n.prototype.depthToSpace=function(e,t,a){E(t>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+t});var o=e.shape[0],i=a==="NHWC"?e.shape[1]:e.shape[2],s=a==="NHWC"?e.shape[2]:e.shape[3],u=a==="NHWC"?e.shape[3]:e.shape[1],c=i*t,l=s*t,f=u/(t*t),h=new yh(a==="NHWC"?[o,c,l,f]:[o,f,c,l],t,a);return this.compileAndRun(h,[e])},n.prototype.split=function(e,t,a){return uu(e,t,a)},n.prototype.scatterND=function(e,t,a){var o=Xr(0,e,a),i=o.sliceRank,s=o.numUpdates,u=o.sliceSize,c=o.strides,l=o.outputSize,f=[l/u,u],h=e.reshape([s,i]),d=t.reshape([s,u]);if(l===0)return ho(He([]),a);var p=j(0),v=new Yi(s,i,h.rank,d.rank,c,f);return this.compileAndRun(v,[d,h,p]).reshape(a)},n.prototype.sparseToDense=function(e,t,a,o){var i=Xr(0,e,a),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,f=new Yi(u,s,e.rank,t.rank,c,[l,1]);return this.compileAndRun(f,[t,e,o]).reshape(a)},n.prototype.fft=function(e){return this.fftImpl(e,!1)},n.prototype.ifft=function(e){return this.fftImpl(e,!0)},n.prototype.fftImpl=function(e,t){var a=this.texData.get(e.dataId),o=new Xi(Eh,e.shape,t),i=new Xi(Rh,e.shape,t),s=[this.makeComplexComponentTensorInfo(e,a.complexTensors.real),this.makeComplexComponentTensorInfo(e,a.complexTensors.imag)],u=this.compileAndRun(o,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},n.prototype.gatherND=function(e,t){var a=t.shape,o=a[a.length-1],i=Qs(e,t),s=i[0],u=i[1],c=i[2],l=i[3],f=t.reshape([u,o]),h=e.reshape([e.size/c,c]),d=new Sh(o,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},n.prototype.fill=function(e,t,a){if((a=a||hr(t))==="string"){var o=Lr(a,Y(e));return o.fill(t),T.makeTensor(o,e,a,this)}var i=new Ih(e,t),s=i.getCustomSetupFunc(t);return this.compileAndRun(i,[],a,s)},n.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},n.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},n.prototype.linspace=function(e,t,a){return iu(e,t,a)},n.prototype.makeTensorInfo=function(e,t){var a=this.write(null,e,t);return this.texData.get(a).usage=null,{dataId:a,shape:e,dtype:t}},n.prototype.makeOutput=function(e,t){var a=this.makeTensorInfo(e,t).dataId;return T.makeTensorFromDataId(a,e,t,this)},n.prototype.unpackTensor=function(e){var t=new Nd(e.shape);return this.runWebGLProgram(t,[e],e.dtype)},n.prototype.packTensor=function(e){var t=new ed(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)},n.prototype.packedReshape=function(e,t){var a=[zr(e.shape)].concat(Ur(e.shape)),o={dtype:e.dtype,shape:a,dataId:e.dataId},i=[zr(t)].concat(Ur(t)),s=new ad(i,a),u=this.runWebGLProgram(s,[o],e.dtype,null,!0);return{dataId:u.dataId,shape:t,dtype:u.dtype}},n.prototype.decode=function(e){var t,a=this.texData.get(e),o=a.isPacked,i=a.shape,s=a.dtype,u=Ma(i);return t=o?new gh(u):new mh(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(t,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},n.prototype.runWebGLProgram=function(e,t,a,o,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,a),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===or.DENSE){var l=er(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Y(u.shape)===0)return c.values=rr(u.dtype,0),u;var f=[],h=t.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&Y(b.shape)<=O().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),f.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!Ir(y.shape,b.shape)){var w=b,C=b.shape;b.shape=y.shape,b=s.packedReshape(b,C),f.push(b),y=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=function(b,y,w){var C="";y.concat(w).forEach(function(R){var I=R.texData!=null&&R.texData.slice!=null&&R.texData.slice.flatOffset>0,N=R.isUniform?"uniform":R.texData.texShape;C+=R.shape+"_"+N+"_"+I});var S=b.userCode,k=b.constructor.name;return k+="_"+C+"_"+S}(e,h,p),m=this.getAndSaveBinary(v,function(){return function(b,y,w,C){var S=y.userCode,k=w.map(function(W,G){var H={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(H.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[G],shapeInfo:H}}),R=k.map(function(W){return W.shapeInfo}),I={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},N=Hf(k,I,S,y.packedInputs),A=b.createProgram(N),B=null,M=b.getUniformLocation(A,"NAN",!1);O().getNumber("WEBGL_VERSION")===1&&(B=b.getUniformLocation(A,"INFINITY",!1));for(var L={},U=0;U<y.variableNames.length;U++){var z=y.variableNames[U];L[z]=b.getUniformLocation(A,z,!1),L["offset"+z]=b.getUniformLocation(A,"offset"+z,!1)}return{program:y,source:N,webGLProgram:A,uniformLocations:L,inShapeInfos:R,outShapeInfo:I,infLoc:B,nanLoc:M}}(s.gpgpu,e,h,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(b,y,w,C,S){$i(y.inShapeInfos,w),$i([y.outShapeInfo],[C]);var k=C.texData.texture,R=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(k,R[0],R[1]):b.setOutputMatrixTexture(k,R[0],R[1]),b.setProgram(y.webGLProgram),O().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(I,N){var A=y.program.variableNames[N],B=y.uniformLocations[A],M=y.uniformLocations["offset"+A];if(B!=null)if(I.isUniform)if(Y(I.shape)<2)b.gl.uniform1f(B,I.uniformValues[0]);else{var L=I.uniformValues;L instanceof Float32Array||(L=new Float32Array(L)),b.gl.uniform1fv(B,L)}else I.texData.slice!=null&&M!=null&&b.gl.uniform1i(M,I.texData.slice.flatOffset),b.setInputMatrixTexture(I.texData.texture,B,N)}),S!=null&&S(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,m,h,p,o),f.forEach(function(b){return s.disposeData(b.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!O().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},n.prototype.compileAndRun=function(e,t,a,o,i){i===void 0&&(i=!1),a=a||t[0].dtype;var s=this.runWebGLProgram(e,t,a,o,i);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},n.prototype.getAndSaveBinary=function(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]},n.prototype.getTextureManager=function(){return this.textureManager},n.prototype.dispose=function(){var e=this;this.disposed||(O().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(t){e.gpgpu.deleteProgram(e.binaryCache[t].webGLProgram),delete e.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},n.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=K(function(){if(!O().get("WEBGL_RENDER_FLOAT32_ENABLED")){var t=O().getBool("DEBUG");O().set("DEBUG",!1);var a=e.abs(j(1e-8)).dataSync()[0];if(O().set("DEBUG",t),a>0)return 32}return 16})),this.floatPrecisionValue},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.uploadToGPU=function(e){var t,a=this.texData.get(e),o=a.shape,i=a.dtype,s=a.values,u=a.texture,c=a.usage,l=a.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=kn());var d=a.texShape;if(d==null&&(d=Wl(o,l),a.texShape=d),s!=null){var p=Ma(o),v=void 0,m=d[1],g=d[0],x=s instanceof Uint8Array;l?(m=(t=pr(d[0],d[1]))[0],g=t[1],v=new _h(p,[g,m],x)):v=new Ch(p,[g,m],x);var b=this.makeTensorInfo([g,m],i);this.texData.get(b.dataId).usage=x?sn.PIXELS:sn.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),m,g,s);var y=this.runWebGLProgram(v,[b],i,null,!0),w=this.texData.get(y.dataId);a.texture=w.texture,a.texShape=w.texShape,a.isPacked=w.isPacked,a.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),a.values=null,h&&(this.uploadWaitMs+=kn()-f)}else{var C=this.acquireTexture(d,c,i,l);a.texture=C}}},n.prototype.convertAndCacheOnCPU=function(e,t){var a=this.texData.get(e),o=a.dtype;return this.releaseGPUData(e),t!=null&&(a.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(t,o)),a.values},n.prototype.acquireTexture=function(e,t,a,o){if(this.numBytesInGPU+=this.computeBytes(e,a),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,t,o)},n.prototype.computeBytes=function(e,t){return e[0]*e[1]*Ps(t)},n}(ru);Us()&&T.registerBackend("webgl",function(){return new Pd},2);var Md=D({square_:function(r){var n=_(r,"x","square"),e=[n];return T.runKernelFunc(function(t,a){return a([n]),t.square(n)},{x:n},null,"Square",{},e,[])}}),sr="SquaredDifference",Cu=D({squaredDifference_:function(r,n){var e,t=_(r,"a","squaredDifference"),a=_(n,"b","squaredDifference");e=Ie(t,a),t=e[0],a=e[1],le(t.shape,a.shape);var o={a:t,b:a},i=[t,a];return T.runKernelFunc(function(s,u){var c=s.squaredDifference(t,a);return u([t,a]),c},o,function(s,u){var c=u[0],l=u[1],f=j(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},sr,{},i,[])}}),Od=D({abs_:function(r){var n=_(r,"x","abs");return n.dtype==="complex64"?T.runKernelFunc(function(e){return e.complexAbs(n)},{$x:n}):T.runKernelFunc(function(e,t){var a=e.abs(n);return t([n]),a},{x:n},function(e,t){var a=t[0];return{x:function(){return e.mul(a.toFloat().step(-1))}}},"Abs")}}),Bd=D({acos_:function(r){var n=_(r,"x","acos");return T.runKernelFunc(function(e,t){var a=e.acos(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.divStrict(j(1).sub(a.toFloat().square()).sqrt()).neg()}}})}}),Ld=D({acosh_:function(r){var n=_(r,"x","acosh");return T.runKernelFunc(function(e,t){var a=e.acosh(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.divStrict(a.toFloat().square().sub(1).sqrt())}}})}}),Wd=D({asin_:function(r){var n=_(r,"x","asin");return T.runKernelFunc(function(e,t){var a=e.asin(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.divStrict(j(1).sub(a.toFloat().square()).sqrt())}}})}}),zd=D({asinh_:function(r){var n=_(r,"x","asinh");return T.runKernelFunc(function(e,t){var a=e.asinh(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.divStrict(j(1).add(a.toFloat().square()).sqrt())}}})}}),Ud=D({atan_:function(r){var n=_(r,"x","atan");return T.runKernelFunc(function(e,t){var a=e.atan(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.div(a.toFloat().square().add(1))}}})}}),Vd=D({atanh_:function(r){var n=_(r,"x","atanh");return T.runKernelFunc(function(e,t){var a=e.atanh(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.div(j(1).sub(a.toFloat().square()))}}})}}),Gd=D({ceil_:function(r){var n=_(r,"x","ceil");return T.runKernelFunc(function(e){return e.ceil(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),Lo=D({clipByValue_:function(r,n,e){var t=_(r,"x","clipByValue");E(n<=e,function(){return"Error in clip: min ("+n+") must be less than or equal to max ("+e+")."});var a=[t],o={min:n,max:e};return T.runKernelFunc(function(i,s){var u=i.clip(t,n,e);return s([t]),u},{x:t},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(n).logicalAnd(u.lessEqual(e)),ve(i))}}},"ClipByValue",o,a)}}),Hd=D({cos_:function(r){var n=_(r,"x","cos"),e=[n];return T.runKernelFunc(function(t,a){var o=t.cos(n);return a([n]),o},{x:n},function(t,a){var o=a[0];return{x:function(){return o.toFloat().sin().neg().mul(t)}}},"Cos",{},e)}}),jd=D({cosh_:function(r){var n=_(r,"x","cosh");return T.runKernelFunc(function(e,t){var a=e.cosh(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return a.toFloat().sinh().mulStrict(e)}}})}}),qd=D({erf_:function(r){var n=_(r,"x","erf");return E(n.dtype==="int32"||n.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),n.dtype==="int32"&&(n=n.toFloat()),T.runKernelFunc(function(e,t){var a=e.erf(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.mul(a.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),vo=D({exp_:function(r){var n=_(r,"x","exp");return T.runKernelFunc(function(e,t){var a=e.exp(n);return t([a]),a},{x:n},function(e,t){return{x:function(){return e.mulStrict(t[0])}}},"Exp",{},[],[!0])}}),Kd=D({expm1_:function(r){var n=_(r,"x","expm1");return T.runKernelFunc(function(e,t){var a=e.expm1(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.mul(a.exp())}}})}}),Xd=D({floor_:function(r){var n=_(r,"x","floor");return T.runKernelFunc(function(e){return e.floor(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),$d=D({log_:function(r){var n=_(r,"x","log"),e=[n];return T.runKernelFunc(function(t,a){var o=t.log(n);return a([n]),o},{x:n},function(t,a){var o=a[0];return{x:function(){return t.div(o.toFloat())}}},"Log",{},e)}}),Yd=D({log1p_:function(r){var n=_(r,"x","log1p");return T.runKernelFunc(function(e,t){var a=e.log1p(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.div(a.add(1))}}})}}),Jd=D({logSigmoid_:function(r){var n=_(r,"x","logSigmoid");return T.runKernelFunc(function(e,t){var a=e.softplus(n.neg()).neg();return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.mul(a.neg().sigmoid())}}})}}),Qr=D({neg_:function(r){var n=_(r,"x","neg"),e=[n];return T.runKernelFunc(function(t){return t.neg(n)},{x:n},function(t){return{x:function(){return t.neg()}}},"Neg",{},e)}}),Qd=D({reciprocal_:function(r){var n=_(r,"x","reciprocal");return T.runKernelFunc(function(e,t){var a=e.reciprocal(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.div(a.square().neg())}}})}}),Zd=D({round_:function(r){var n=_(r,"x","round");return T.runKernelFunc(function(e){return e.round(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),_u=D({rsqrt_:function(r){var n=_(r,"x","rsqrt"),e=[n];return T.runKernelFunc(function(t,a){var o=t.rsqrt(n);return a([n]),o},{x:n},function(t,a){var o=a[0];return{x:function(){return t.div(o.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Eu=D({sigmoid_:function(r){var n=_(r,"x","sigmoid");return T.runKernelFunc(function(e,t){var a=e.sigmoid(n);return t([a]),a},{x:n},function(e,t){var a=t[0];return{x:function(){return e.mul(a.mul(j(1).sub(a)))}}},"Sigmoid")}}),ep=D({sign_:function(r){var n=_(r,"x","sign");return T.runKernelFunc(function(e){return e.sign(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),np=D({isNaN_:function(r){var n=_(r,"x","isNaN");return T.runKernelFunc(function(e){return e.isNaN(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),tp=D({isInf_:function(r){var n=_(r,"x","isInf");return T.runKernelFunc(function(e){return e.isInf(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),rp=D({isFinite_:function(r){var n=_(r,"x","isFinite");return T.runKernelFunc(function(e){return e.isFinite(n)},{$x:n},function(e){return{$x:function(){return ve(e)}}})}}),ap=D({sin_:function(r){var n=_(r,"x","sin"),e=[n];return T.runKernelFunc(function(t,a){var o=t.sin(n);return a([n]),o},{x:n},function(t,a){var o=a[0];return{x:function(){return o.toFloat().cos().mul(t)}}},"Sin",{},e)}}),op=D({sinh_:function(r){var n=_(r,"x","sinh");return T.runKernelFunc(function(e,t){var a=e.sinh(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return a.toFloat().cosh().mulStrict(e)}}})}}),ip=D({softplus_:function(r){var n=_(r,"x","softplus");return T.runKernelFunc(function(e,t){var a=e.softplus(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.mul(a.sigmoid())}}})}}),sp=D({sqrt_:function(r){var n=_(r,"x","sqrt");return T.runKernelFunc(function(e,t){var a=e.sqrt(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.div(a.toFloat().sqrt().mul(2))}}})}}),up=D({step_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","step");return T.runKernelFunc(function(t){return t.step(e,n)},{$x:e},function(t){return{$x:function(){return ve(t)}}})}}),cp=D({tan_:function(r){var n=_(r,"x","tan");return T.runKernelFunc(function(e,t){var a=e.tan(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return e.div(a.cos().square())}}})}}),lp=D({tanh_:function(r){var n=_(r,"x","tanh");return T.runKernelFunc(function(e,t){var a=e.tanh(n);return t([a]),a},{x:n},function(e,t){var a=t[0];return{x:function(){return j(1).sub(a.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Ru(r,n,e,t,a,o){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return a!=null&&(i=_(a,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),mr(u,c,l,s,i,o)}function Iu(r,n,e,t,a,o){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return a!=null&&(i=_(a,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),mr(u,c,l,s,i,o)}function ku(r,n,e,t,a,o){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return a!=null&&(i=_(a,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),mr(u,c,l,s,i,o)}function mr(r,n,e,t,a,o){o==null&&(o=.001);var i,s,u,c=_(r,"x","batchNorm"),l=_(n,"mean","batchNorm"),f=_(e,"variance","batchNorm");a!=null&&(i=_(a,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,i];return T.runKernelFunc(function(d,p){var v=d.batchNormalization(u,Tr(l),Tr(f),o,Tr(i),Tr(s));return p([c,l,f,i]),v},{x:c,mean:l,variance:f,scale:i,offset:s},function(d,p){var v=p,m=v[0],g=v[1],x=v[2],b=v[3],y=b??j(1),w=Oe(g.shape,u.shape),C=[];if(g.rank===1){for(var S=0;S<u.shape.length-1;++S)C.push(u.shape[S]);C.push(1)}var k=m.sub(g),R=d.mul(y),I=_u(x.add(j(o))),N=I.mul(I).mul(I).mul(j(-.5));return{x:function(){return g.rank===1?d.mul(Bt(I.as4D(1,1,1,g.shape[0]),C)).mul(y).reshape(m.shape):d.mul(I).mul(y).reshape(m.shape)},mean:function(){var A=I.mul(j(-1)).mul(R);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},variance:function(){var A=N.mul(k).mul(R);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},scale:function(){var A=k.mul(I),B=d.mul(A);return g.rank===1&&(B=B.sum(w)),B.reshape(g.shape)},offset:function(){var A=d;return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:o},h).reshape(c.shape)}function Tr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function ca(){Vs("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var fp=D({batchNormalization2d_:function(r,n,e,t,a,o){return t===void 0&&(t=.001),ca(),Ru(r,n,e,o,a,t)}}),hp=D({batchNormalization3d_:function(r,n,e,t,a,o){return t===void 0&&(t=.001),ca(),Iu(r,n,e,o,a,t)}}),dp=D({batchNormalization4d_:function(r,n,e,t,a,o){return t===void 0&&(t=.001),ca(),ku(r,n,e,o,a,t)}}),pp=D({batchNormalization_:function(r,n,e,t,a,o){return t===void 0&&(t=.001),ca(),mr(r,n,e,o,a,t)}}),Su=D({batchNorm_:mr}),vp=D({batchNorm2d_:Ru}),mp=D({batchNorm3d_:Iu}),gp=D({batchNorm4d_:ku}),la=D({logicalAnd_:function(r,n){var e=_(r,"a","logicalAnd","bool"),t=_(n,"b","logicalAnd","bool");return le(e.shape,t.shape),T.runKernelFunc(function(a){return a.logicalAnd(e,t)},{a:e,b:t},null,"LogicalAnd")}}),yp=D({logicalNot_:function(r){var n=_(r,"x","logicalNot","bool");return T.runKernelFunc(function(e){return e.logicalNot(n)},{$x:n})}}),Du=D({logicalOr_:function(r,n){var e=_(r,"a","logicalOr","bool"),t=_(n,"b","logicalOr","bool");return le(e.shape,t.shape),T.runKernelFunc(function(a){return a.logicalOr(e,t)},{$a:e,$b:t})}}),xp=D({logicalXor_:function(r,n){var e=_(r,"a","logicalXor","bool"),t=_(n,"b","logicalXor","bool");return le(e.shape,t.shape),Du(r,n).logicalAnd(la(r,n).logicalNot())}}),xt=D({where_:function(r,n,e){var t=_(n,"a","where"),a=_(e,"b","where"),o=_(r,"condition","where","bool");return ye(t.shape,a.shape,"Error in where: "),o.rank===1?E(o.shape[0]===t.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):ye(o.shape,a.shape,"Error in where: "),T.runKernelFunc(function(i,s){var u=i.select(o,t,a);return s([o]),u},{$condition:o,$a:t,$b:a},function(i,s){var u=s[0];return{$condition:function(){return ve(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Au=function(r){return X(this,void 0,void 0,function(){var n,e,t;return $(this,function(a){switch(a.label){case 0:return[4,(n=_(r,"condition","whereAsync","bool")).data()];case 1:return e=a.sent(),t=Po(n.shape,e),r!==n&&n.dispose(),[2,t]}})})},ue=D({add_:function(r,n){var e,t=_(r,"a","add"),a=_(n,"b","add");e=Ie(t,a),t=e[0],a=e[1];var o=le(t.shape,a.shape);return T.runKernelFunc(function(i){return i.add(t,a)},{a:t,b:a},function(i){return{a:function(){var s=i,u=Oe(t.shape,o);return u.length>0&&(s=s.sum(u)),s.reshape(t.shape)},b:function(){var s=i,u=Oe(a.shape,o);return u.length>0&&(s=s.sum(u)),s.reshape(a.shape)}}},"Add")}}),bp=D({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var n=r.map(function(a,o){return _(a,"tensors"+o,"addN")}),e=n[0];n.forEach(function(a){if(a.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),n.forEach(function(a){if(!ze(a.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var t=n;return T.runKernelFunc(function(a){return a.addN(n)},t,function(a){var o={};return n.forEach(function(i,s){o[s]=function(){return a.clone()}}),o},"AddN")}}),wp=D({addStrict_:function(r,n){var e=_(r,"a","addStrict"),t=_(n,"b","addStrict");return ye(e.shape,t.shape,"Error in addStrict: "),e.add(t)}}),Cp=D({atan2_:function(r,n){var e,t=_(r,"a","atan2"),a=_(n,"b","atan2");e=Ie(t,a),t=e[0],a=e[1];var o=le(t.shape,a.shape);return T.runKernelFunc(function(i,s){var u=i.atan2(t,a);return s([t,a]),u},{$a:t,$b:a},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ue(u.square(),c.square()),f=i.mul(c.div(l)),h=Oe(u.shape,o);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=ue(u.square(),c.square()),f=Qr(i.mul(u.div(l))),h=Oe(c.shape,o);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),gn=D({div_:function(r,n){var e,t=_(r,"a","div"),a=_(n,"b","div");if(e=Ie(t,a),t=e[0],a=e[1],t.dtype==="int32"&&a.dtype==="int32")return Tu(t,a);var o=le(t.shape,a.shape);return T.runKernelFunc(function(i,s){var u=i.realDivide(t,a);return s([t,a]),u},{a:t,b:a},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Oe(u.shape,o);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Oe(c.shape,o);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),_p=D({divNoNan_:function(r,n){var e,t=_(r,"a","div"),a=_(n,"b","div");t=(e=Ie(t,a))[0],a=e[1];var o=gn(t,a),i=ve(o),s=a.equal(i);return xt(s,i,o)}}),Ep=D({divStrict_:function(r,n){var e=_(r,"a","div"),t=_(n,"b","div");return ye(e.shape,t.shape,"Error in divideStrict: "),e.div(t)}}),Tu=D({floorDiv_:function(r,n){var e,t=_(r,"a","floorDiv"),a=_(n,"b","floorDiv");e=Ie(t,a),t=e[0],a=e[1];var o=le(t.shape,a.shape);return T.runKernelFunc(function(i,s){var u=i.floorDiv(t,a);return s([t,a]),u},{a:t,b:a},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Oe(u.shape,o);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Oe(c.shape,o);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),Wo=D({maximum_:function(r,n){var e,t=_(r,"a","maximum"),a=_(n,"b","maximum");return e=Ie(t,a),t=e[0],a=e[1],t.dtype==="bool"&&(t=t.toInt(),a=a.toInt()),le(t.shape,a.shape),T.runKernelFunc(function(o,i){var s=o.maximum(t,a);return i([t,a]),s},{a:t,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return o.mul(s.greaterEqual(u).toFloat())},b:function(){return o.mul(s.less(u).toFloat())}}},"Maximum")}}),Rp=D({maximumStrict_:function(r,n){var e=_(r,"a","maximumStrict"),t=_(n,"b","maximumStrict");return ye(e.shape,t.shape,"Error in maximumStrict: "),e.maximum(t)}}),Nu=D({minimum_:function(r,n){var e,t=_(r,"a","minimum"),a=_(n,"b","minimum");return e=Ie(t,a),t=e[0],a=e[1],t.dtype==="bool"&&(t=t.toInt(),a=a.toInt()),le(t.shape,a.shape),T.runKernelFunc(function(o,i){var s=o.minimum(t,a);return i([t,a]),s},{a:t,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return o.mul(s.lessEqual(u).toFloat())},b:function(){return o.mul(s.greater(u).toFloat())}}},"Minimum")}}),Ip=D({minimumStrict_:function(r,n){var e=_(r,"a","minimumStrict"),t=_(n,"b","minimumStrict");return ye(e.shape,t.shape,"Error in minimumStrict: "),e.minimum(t)}}),kp=D({mod_:function(r,n){var e,t=_(r,"a","mod"),a=_(n,"b","mod");e=Ie(t,a),t=e[0],a=e[1];var o=le(t.shape,a.shape);return T.runKernelFunc(function(i,s){var u=i.mod(t,a);return s([t,a]),u},{$a:t,$b:a},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Oe(u.shape,o);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),f=Oe(c.shape,o);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),Sp=D({modStrict_:function(r,n){var e=_(r,"a","modStrict"),t=_(n,"b","modStrict");return ye(e.shape,t.shape,"Error in modStrict: "),e.mod(t)}}),$e=D({mul_:function(r,n){var e,t=_(r,"a","mul"),a=_(n,"b","mul");e=Ie(t,a),t=e[0],a=e[1];var o=le(t.shape,a.shape);return T.runKernelFunc(function(i,s){var u=i.multiply(t,a);return s([t,a]),u},{a:t,b:a},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),f=Oe(u.shape,o);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Oe(c.shape,o);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),Dp=D({mulStrict_:function(r,n){var e=_(r,"a","mul"),t=_(n,"b","mul");return ye(e.shape,t.shape,"Error in multiplyStrict: "),e.mul(t)}}),Zr=D({pow_:function(r,n){var e,t=_(r,"base","pow"),a=_(n,"exp","pow");e=Ie(t,a),t=e[0],a=e[1];var o=le(t.shape,a.shape),i=[t,a];return T.runKernelFunc(function(s,u){var c=s.pow(t,a);return u([t,a,c]),c},{a:t,b:a},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(j(1))))),p=Oe(c.shape,o);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,ve(c)),p=s.mul(f.mul(d)),v=Oe(l.shape,o);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Ap=D({powStrict_:function(r,n){return ye(r.shape,n.shape,"Error in powStrict: "),r.pow(n)}}),Tp=D({squaredDifferenceStrict_:function(r,n){var e=_(r,"a","squaredDifferenceStrict"),t=_(n,"b","squaredDifferenceStrict");return ye(e.shape,t.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(t)}}),Be=D({sub_:function(r,n){var e,t=_(r,"a","sub"),a=_(n,"b","sub");e=Ie(t,a),t=e[0],a=e[1];var o=le(t.shape,a.shape);return T.runKernelFunc(function(i){return i.subtract(t,a)},{a:t,b:a},function(i){return{a:function(){var s=i,u=Oe(t.shape,o);return u.length>0&&(s=s.sum(u)),s.reshape(t.shape)},b:function(){var s=i,u=Oe(a.shape,o);return u.length>0&&(s=s.sum(u)),s.neg().reshape(a.shape)}}},"Sub")}}),Np=D({subStrict_:function(r,n){var e=_(r,"a","subStrict"),t=_(n,"b","subStrict");return ye(e.shape,t.shape,"Error in subStrict: "),e.sub(t)}}),Fu=D({equal_:function(r,n){var e,t=_(r,"a","equal"),a=_(n,"b","equal");return e=Ie(t,a),t=e[0],a=e[1],le(t.shape,a.shape),T.runKernelFunc(function(o){return o.equal(t,a)},{$a:t,$b:a})}}),Fp=D({equalStrict_:function(r,n){var e=_(r,"a","equalStrict"),t=_(n,"b","equalStrict");return ye(e.shape,t.shape,"Error in equalStrict: "),e.equal(t)}}),Pp=D({greater_:function(r,n){var e,t=_(r,"a","greater"),a=_(n,"b","greater");return e=Ie(t,a),t=e[0],a=e[1],le(t.shape,a.shape),T.runKernelFunc(function(o){return o.greater(t,a)},{a:t,b:a},null,"Greater")}}),Pu=D({greaterEqual_:function(r,n){var e,t=_(r,"a","greaterEqual"),a=_(n,"b","greaterEqual");return e=Ie(t,a),t=e[0],a=e[1],le(t.shape,a.shape),T.runKernelFunc(function(o,i){var s=o.greaterEqual(t,a);return i([t,a]),s},{a:t,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return ve(s)},b:function(){return ve(u)}}},"GreaterEqual")}}),Mp=D({greaterEqualStrict_:function(r,n){var e=_(r,"a","greaterEqualStrict"),t=_(n,"b","greaterEqualStrict");return ye(e.shape,t.shape,"Error in greaterEqualStrict: "),e.greaterEqual(t)}}),Op=D({greaterStrict_:function(r,n){var e=_(r,"a","greaterStrict"),t=_(n,"b","greaterStrict");return ye(e.shape,t.shape,"Error in greaterStrict: "),e.greater(t)}}),Bp=D({less_:function(r,n){var e,t=_(r,"a","less"),a=_(n,"b","less");return e=Ie(t,a),t=e[0],a=e[1],le(t.shape,a.shape),T.runKernelFunc(function(o){return o.less(t,a)},{a:t,b:a},null,"Less")}}),Lp=D({lessEqual_:function(r,n){var e,t=_(r,"a","lessEqual"),a=_(n,"b","lessEqual");return e=Ie(t,a),t=e[0],a=e[1],le(t.shape,a.shape),T.runKernelFunc(function(o,i){var s=o.lessEqual(t,a);return i([t,a]),s},{a:t,b:a},null,"LessEqual")}}),Wp=D({lessEqualStrict_:function(r,n){var e=_(r,"a","lessEqualStrict"),t=_(n,"b","lessEqualStrict");return ye(e.shape,t.shape,"Error in lessEqualStrict: "),e.lessEqual(t)}}),zp=D({lessStrict_:function(r,n){var e=_(r,"a","lessStrict"),t=_(n,"b","lessStrict");return ye(e.shape,t.shape,"Error in lessStrict: "),e.less(t)}}),Up=D({notEqual_:function(r,n){var e,t=_(r,"a","notEqual"),a=_(n,"b","notEqual");return e=Ie(t,a),t=e[0],a=e[1],le(t.shape,a.shape),T.runKernelFunc(function(o){return o.notEqual(t,a)},{a:t,b:a},null,"NotEqual")}}),Vp=D({notEqualStrict_:function(r,n){var e=_(r,"a","notEqualStrict"),t=_(n,"b","notEqualStrict");return ye(e.shape,t.shape,"Error in notEqualStrict: "),e.notEqual(t)}});function os(r,n){for(var e=[],t=r;t<n;++t)e.push(t);return e}function is(r){for(var n=[],e=0;e<r.length;++e)for(var t=0;t<r[e].length;++t)n.push(r[e][t]);return n}var zo=D({gather_:function(r,n,e){e===void 0&&(e=0);var t=_(r,"x","gather"),a=_(n,"indices","gather","int32");e=Le(e,t.shape)[0];var o=function(i,s,u){for(var c=i.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(i.shape[d]),f*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),h*=i.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(t,a,e);return T.runKernelFunc(function(i,s){var u=i.gather(t,a.flatten(),e);return s([a]),u},{x:t,indices:a},function(i,s){var u=s[0];return{x:function(){var c=t.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,v=os(0,h),m=os(h+1,h+1+p),g=is([f,[l],d]),x=i.reshape(g),b=u.reshape([l]),y=is([[h],v,m]),w=x.transpose(y),C=Mu(w,b,t.shape[e]),S=Io(y);return C=C.transpose(S)},indices:function(){return u}}},"Gather",{axis:e}).reshape(o.outputShape)}}),Mu=D({unsortedSegmentSum_:function(r,n,e){var t=_(r,"x","unsortedSegmentSum"),a=_(n,"segmentIds","unsortedSegmentSum","int32");return E(Te(e),function(){return"numSegments must be of dtype int"}),T.runKernelFunc(function(o,i){var s=o.unsortedSegmentSum(t,a,e);return i([a]),s},{$x:t},function(o,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Wo(c,ve(c)),f=zo(u,l),h=Pu(c,j(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=hn(h,p+1);h=la(h,Xt(f.shape,"bool"));var v=ve(f);return xt(h,f,v)}(o,s)}}})}}),Gp=function(r,n,e){return X(this,void 0,void 0,function(){var t,a,o,i,s,u,c,l,f,h,d,p,v;return $(this,function(m){switch(m.label){case 0:for(t=_(r,"tensor","boolMask"),a=_(n,"mask","boolMask","bool"),o=e??0,i=a.rank,s=t.shape,E(i>0,function(){return"mask cannot be scalar"}),ye(s.slice(o,o+i),a.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=o;c<o+i;c++)u*=s[c];return l=s.slice(0,o).concat([u],s.slice(o+i)),f=t.reshape(l),h=a.reshape([-1]),[4,Au(h)];case 1:return d=m.sent(),p=d.squeeze([1]),v=zo(f,p,o),r!==t&&t.dispose(),n!==a&&a.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,v]}})})};function Ou(r,n,e,t,a,o,i){o===void 0&&(o="NHWC"),E(r.length===n.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+n.rank+") must match"});var s=r,u=n,c=!1;n.rank===3&&(c=!0,u=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=o==="NHWC"?s[3]:s[1],f=o==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(Te(a),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."});var h=To(o),d=Ct(s,e.shape,t,1,a,i,!1,h),p=T.runKernelFunc(function(v,m){var g=v.conv2dDerInput(u,e,d);return m([e,u]),g},{dy4D:u,filter:e},function(v,m){var g=m[0],x=m[1];return{dy4D:function(){return vn(v,g,t,a,o,1,i)},filter:function(){return Uo(v,x,g.shape,t,a,o,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function Ga(r){var n=function(o){return typeof o=="number"?[o,o,o]:o.length===2?[o[0],o[1],1]:o}(r),e=n[0],t=n[1],a=n[2];return e===1&&t===1&&a===1}function Bu(r,n,e,t,a){E(r.length===n.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+n.rank+") must match"});var o=r,i=n,s=!1;n.rank===4&&(s=!0,i=n.as5D(1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]),o=[1,r[0],r[1],r[2],r[3]]);var u=o[4],c=i.shape[4];E(o.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+o.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Yr(o,e.shape,t,1,a),f=T.runKernelFunc(function(h){return h.conv3dDerInput(i,e,l)},{dy5D:i});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var Hp=D({conv1d_:function(r,n,e,t,a,o,i){a===void 0&&(a="NWC"),o===void 0&&(o=1);var s=_(r,"x","conv1d"),u=_(n,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Te(t),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(tn(e,o),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+o+"'"}),E(a==="NWC",function(){return"Error in conv1d: got dataFormat of "+a+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=vn(h,f,[1,e],t,"NHWC",[1,o],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),vn=D({conv2d_:function(r,n,e,t,a,o,i){a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]);var s=_(r,"x","conv2d"),u=_(n,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Te(t),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."});var f=a==="NHWC"?c.shape[3]:c.shape[1];E(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),E(tn(e,o),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"});var h=To(a),d=Ct(c.shape,u.shape,e,o,t,i,!1,h),p=[u,c],v=T.runKernelFunc(function(m,g){var x=m.conv2d(c,u,d);return g([u,c]),x},{x:c,filter:u},function(m,g){var x=g,b=x[0],y=x[1];return E(qt(o),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+o+"'"}),{x:function(){return Lu(y.shape,m,b,e,t,a)},filter:function(){return Uo(y,m,b.shape,e,t,a)}}},"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),jp=D({conv3d_:function(r,n,e,t,a,o){a===void 0&&(a="NDHWC"),o===void 0&&(o=[1,1,1]);var i=_(r,"x","conv3d"),s=_(n,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(h,d){return Ga(h)||Ga(d)}(e,o),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"}),E(a==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+a+" but only NDHWC is currently supported."});var l=Yr(u.shape,s.shape,e,o,t),f=T.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){E(Ga(o),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+o+"'"});var p=d[0],v=d[1];return{x:function(){return Bu(p.shape,h,v,e,t)},$filter:function(){return function(m,g,x,b,y){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),E(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),E(w.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."}),E(C.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+x[4]+")."});var S=Yr(w.shape,x,b,1,y);return T.runKernelFunc(function(k){return k.conv3dDerFilter(w,C,S)},{x5D:w,dy5D:C})}(p,h,v.shape,e,t)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Uo=D({conv2dDerFilter_:function(r,n,e,t,a,o,i){o===void 0&&(o="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=n;u.rank===3&&(u=n.as4D(1,n.shape[0],n.shape[1],n.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=o==="NHWC"?s.shape[3]:s.shape[1],l=o==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(Te(a),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."});var f=To(o),h=Ct(s.shape,e,t,1,a,i,!1,f);return T.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),Lu=D({conv2dDerInput_:Ou}),fa=D({depthwiseConv2d_:function(r,n,e,t,a,o,i){o===void 0&&(o=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(n,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),o==null&&(o=[1,1]),E(tn(e,o),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"}),i!=null&&E(Te(t),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."});var f=Ct(c.shape,u.shape,e,o,t,i,!0),h=[c,u],d=T.runKernelFunc(function(p,v){var m=p.depthwiseConv2D(c,u,f);return v([c,u]),m},{x:c,filter:u},function(p,v){E(qt(o),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+o+"'"});var m=v[0],g=v[1];return{x:function(){return Wu(m.shape,p,g,f)},filter:function(){return zu(m,p,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),Wu=D({depthwiseConv2dDerInput_:function(r,n,e,t){var a=n,o=!1;n.rank===3&&(o=!0,a=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=T.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(a,e,t)},{dy4D:a});return o?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),zu=D({depthwiseConv2dDerFilter_:function(r,n,e,t){var a=r;r.rank===3&&(a=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var o=n;return o.rank===3&&(o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2])),T.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(a,o,t)},{x4D:a,dy4D:o})}}),Vo=D({separableConv2d_:function(r,n,e,t,a,o,i){o===void 0&&(o=[1,1]),i===void 0&&(i="NHWC");var s=_(r,"x","separableConv2d"),u=_(n,"depthwiseFilter","separableConv2d"),c=_(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];E(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=fa(l,u,t,a,i,o),v=vn(p,c,1,"valid",i);return f?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),qp=D({conv2dTranspose_:function(r,n,e,t,a,o){return Ou(e,_(r,"x","conv2dTranspose"),_(n,"filter","conv2dTranspose"),t,a,"NHWC",o)}}),Kp=D({conv3dTranspose_:function(r,n,e,t,a){return Bu(e,_(r,"x","conv3dTranspose"),_(n,"filter","conv3dTranspose"),t,a)}}),ha=D({matMul_:function(r,n,e,t){var a;e===void 0&&(e=!1),t===void 0&&(t=!1);var o=_(r,"a","matMul"),i=_(n,"b","matMul");a=Ie(o,i),o=a[0],i=a[1];var s=e?o.shape[o.rank-2]:o.shape[o.rank-1],u=t?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?o.shape[o.rank-1]:o.shape[o.rank-2],l=t?i.shape[i.rank-2]:i.shape[i.rank-1],f=o.shape.slice(0,-2),h=i.shape.slice(0,-2),d=Y(f),p=Y(h);E(o.rank>=2&&i.rank>=2&&o.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+o.rank+" and "+i.rank+"."}),E(ze(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+o.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+o.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+t+" must match."});var v=o.shape.slice(0,-2).concat([c,l]),m=e?o.as3D(d,s,c):o.as3D(d,c,s),g=t?i.as3D(p,l,u):i.as3D(p,u,l),x={transposeA:e,transposeB:t};return T.runKernelFunc(function(b,y){var w=b.batchMatMul(m,g,e,t);return y([m,g]),w},{a:m,b:g},function(b,y){var w=y,C=w[0],S=w[1];return e||t?!e&&t?{a:function(){return b.matMul(S,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:e&&!t?{a:function(){return S.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return S.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(S,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}},"BatchMatMul",x).reshape(v)}}),Xp=D({dot_:function(r,n){var e=_(r,"t1","dot"),t=_(n,"t2","dot");E(!(e.rank!==1&&e.rank!==2||t.rank!==1&&t.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+t.rank+"."});var a=e.rank===1?e.size:e.shape[1],o=t.rank===1?t.size:t.shape[0];return E(a===o,function(){return"Error in dot: inner dimensions of inputs must match, but got "+a+" and "+o+"."}),e.rank===1&&t.rank===1?e.as2D(1,-1).matMul(t.as2D(-1,1)).asScalar():e.rank===1&&t.rank===2?e.as2D(1,-1).matMul(t.as2D(t.shape[0],t.shape[1])).as1D():e.rank===2&&t.rank===1?e.matMul(t.as2D(-1,1)).as1D():e.matMul(t.as2D(t.shape[0],t.shape[1]))}}),$p=D({outerProduct_:function(r,n){var e=_(r,"v1","outerProduct"),t=_(n,"v2","outerProduct");return E(e.rank===1&&t.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+t.rank+"."}),e.as2D(-1,1).matMul(t.as2D(1,-1))}}),gr=D({reverse_:function(r,n){var e=_(r,"x","reverse");if(e.rank===0)return e.clone();var t=Le(n,e.shape);return T.runKernelFunc(function(a){return a.reverse(e,t)},{$x:e},function(a){return{$x:function(){return a.reverse(t)}}}).reshapeAs(e)}}),Yp=D({reverse1d_:function(r){var n=_(r,"x","reverse");return E(n.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+n.rank+"."}),gr(n,0)}}),Jp=D({reverse2d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),gr(e,n)}}),Qp=D({reverse3d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),gr(e,n)}}),Zp=D({reverse4d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),gr(e,n)}});function Uu(r,n,e,t,a,o){var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(tn(e,t),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+t+"'"}),o!=null&&E(Te(a),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+"."});var c=ir(s.shape,n,e,t,a,o);if(c.filterWidth===1&&c.filterHeight===1&&ze(c.inShape,c.outShape))return i.clone();var l=[s],f=T.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,x,b,y,w,C,S){var k=_(m,"dy","maxPoolBackprop"),R=_(g,"input","maxPoolBackprop"),I=_(x,"output","maxPoolBackprop");E(R.rank===k.rank,function(){return"Rank of input ("+R.rank+") does not match rank of dy ("+k.rank+")"}),E(tn(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),E(k.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."}),E(R.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+R.rank+"."});var N=ir(R.shape,b,y,w,C,S);return T.runKernelFunc(function(A){return A.maxPoolBackprop(k,R,I,N)},{$dy:k,$input:R})}(h,p,v,n,e,t,a)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Vu(r,n,e,t,a,o){var i=_(r,"x","avgPool","float32");E(tn(e,t),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+t+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),o!=null&&E(Te(a),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+"."});var c=ir(s.shape,n,e,t,a,o);if(c.filterWidth===1&&c.filterHeight===1&&ze(c.inShape,c.outShape))return i.clone();var l=T.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,v,m,g){var x=_(h,"dy","avgPoolBackprop"),b=_(d,"input","avgPoolBackprop");E(b.rank===x.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"}),E(tn(v,m),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"});var y=b,w=x,C=!1;b.rank===3&&(C=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var S=ir(y.shape,p,v,m,g),k=T.runKernelFunc(function(R){return R.avgPoolBackprop(w,y,S)},{dy4D:w,input4D:y});return C?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}(f,s,n,e,t,a)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var We=D({maxPool_:function(r,n,e,t,a){return Uu(r,n,e,1,t,a)}}),yr=D({avgPool_:function(r,n,e,t,a){return Vu(r,n,e,1,t,a)}}),ev=D({pool_:function(r,n,e,t,a,o){a==null&&(a=[1,1]),o==null&&(o=1),t===0&&(t="valid");var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(tn(o,a),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"});var c,l=ir(s.shape,n,o,a,t),f=[l.dilationHeight,l.dilationWidth];c=t==="same"?function(y,w){var C=y.map(function(R,I){return R+(R-1)*(w[I]-1)}).map(function(R){return R-1}),S=C.map(function(R){return Math.floor(R/2)}),k=C.map(function(R,I){return R-S[I]});return C.map(function(R,I){return[S[I],k[I]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(y,w,C){var S=C.map(function(M){return M[0]}),k=C.map(function(M){return M[1]}),R=y.concat(S,k),I=w.map(function(M,L){return(M-R[L]%M)%M}),N=k.map(function(M,L){return M+I[L]}),A=w.map(function(M,L){return[S[L],N[L]]}),B=w.map(function(M,L){return[0,I[L]]});return[A,B]}([l.inHeight,l.inWidth],f,c),p=d[0],v=d[1],m=h?t:"valid",g=h?s:Xs(s,f,p),x=(e==="avg"?function(){return Vu(g,n,o,1,m)}:function(){return Uu(g,n,o,1,m)})(),b=h?x:js(x,f,v);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),nv=D({maxPool3d_:function(r,n,e,t,a,o,i){o===void 0&&(o="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(o==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+o}),E(tn(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&E(Te(t),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+t+"."});var l=$r(u.shape,n,e,i,t,a,o),f=T.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,x,b,y,w,C,S){var k=_(m,"dy","maxPool3dBackprop"),R=_(g,"input","maxPool3dBackprop"),I=_(x,"output","maxPool3dBackprop"),N=k,A=R,B=I,M=!1;R.rank===4&&(M=!0,N=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),A=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),B=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3])),E(N.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+N.rank+"."}),E(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),E(B.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+B.rank+"."}),w==null&&(w=[1,1,1]),E(tn(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),S!=null&&E(Te(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+C+"."});var L=$r(A.shape,b,y,w,C,S),U=T.runKernelFunc(function(z){return z.maxPool3dBackprop(N,A,B,L)},{dy5D:N,input5D:A});return M?U.as4D(U.shape[1],U.shape[2],U.shape[3],U.shape[4]):U}(h,p,v,n,e,i,t,a)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),tv=D({avgPool3d_:function(r,n,e,t,a,o,i){o===void 0&&(o="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(o==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+o}),E(tn(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&E(Te(t),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+t+"."});var l=$r(u.shape,n,e,i,t,a,o),f=T.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,v,m,g,x,b){var y=_(d,"dy","avgPool3dBackprop"),w=_(p,"input","avgPool3dBackprop"),C=y,S=w,k=!1;w.rank===4&&(k=!0,C=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),S=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),E(S.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."}),g==null&&(g=[1,1,1]),E(tn(m,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"}),b!=null&&E(Te(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."});var R=$r(S.shape,v,m,g,x,b),I=T.runKernelFunc(function(N){return N.avgPool3dBackprop(C,S,R)},{dy5D:C,input5D:S});return k?I.as4D(I.shape[1],I.shape[2],I.shape[3],I.shape[4]):I}(h,u,n,e,i,t,a)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Pn=D({slice_:function(r,n,e){var t,a,o=_(r,"x","slice");if(o.rank===0)throw new Error("Slicing scalar is not possible");(t=typeof n=="number"?[n].concat(new Array(o.rank-1).fill(0)):n.length<o.rank?n.concat(new Array(o.rank-n.length).fill(0)):n.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),a=(a=e==null?new Array(o.rank).fill(-1):typeof e=="number"?[e].concat(new Array(o.rank-1).fill(-1)):e.length<o.rank?e.concat(new Array(o.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),o.shape[c]-t[c])}),Af(o,t,a);var i=o.shape,s={begin:t,size:a};return T.runKernelFunc(function(u){return u.slice(o,t,a)},{x:o},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([t[l],i[l]-t[l]-a[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),rv=D({slice1d_:function(r,n,e){var t=_(r,"x","slice1d");return E(t.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+t.rank+" tensor"}),Pn(t,[n],[e])}}),av=D({slice2d_:function(r,n,e){var t=_(r,"x","slice2d");return E(t.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+t.rank+" tensor"}),Pn(t,n,e)}}),Gu=D({slice3d_:function(r,n,e){var t=_(r,"x","slice3d");return E(t.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+t.rank+" tensor"}),Pn(t,n,e)}}),ov=D({slice4d_:function(r,n,e){var t=_(r,"x","slice4d");return E(t.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+t.rank+" tensor"}),Pn(t,n,e)}});function Hu(r,n,e,t,a){return n.rank<e.rank&&(n=n.reshape(nn(n.shape,t))),r.rank<e.rank&&(r=r.reshape(nn(r.shape,t))),{x:function(){var o=r.mul(e.equal(n).cast(r.dtype));return a==null?o:o.transpose(a)}}}var iv=D({all_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","all","bool"),a=Le(n,t.shape),o=a,i=Bn(o,t.rank);i!=null&&(t=t.transpose(i),o=Ln(o.length,t.rank));var s=T.runKernelFunc(function(c){return c.all(t,o)},{$x:t});if(e){var u=nn(s.shape,a);return s.reshape(u)}return s}}),sv=D({any_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","any","bool"),a=Le(n,t.shape),o=a,i=Bn(o,t.rank);i!=null&&(t=t.transpose(i),o=Ln(o.length,t.rank));var s=T.runKernelFunc(function(c){return c.any(t,o)},{$x:t});if(e){var u=nn(s.shape,a);return s.reshape(u)}return s}}),uv=D({argMax_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","argMax");n==null&&(n=0);var t=Le(n,e.shape),a=Bn(t,e.rank);a!=null&&(e=e.transpose(a),t=Ln(t.length,e.rank));var o={axis:t[0]},i=[e];return T.runKernelFunc(function(s,u){var c=s.argMax(e,t[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ve(c)}}},"ArgMax",o,i)}}),cv=D({argMin_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","argMin");n==null&&(n=0);var t=Le(n,e.shape),a=Bn(t,e.rank);return a!=null&&(e=e.transpose(a),t=Ln(t.length,e.rank)),T.runKernelFunc(function(o,i){var s=o.argMin(e,t[0]);return i([e]),s},{$x:e},function(o,i){var s=i[0];return{$x:function(){return ve(s)}}})}}),lv=D({logSumExp_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","logSumExp"),a=Le(n,t.shape),o=t.max(a,!0),i=t.sub(o).exp().sum(a).log(),s=o.reshape(i.shape).add(i);if(e){var u=nn(s.shape,a);return s.reshape(u)}return s}}),da=D({max_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","max"),a=t,o=Le(n,t.shape),i=o,s=Bn(i,t.rank);s!=null&&(t=t.transpose(s),i=Ln(i.length,t.rank));var u=[t],c=T.runKernelFunc(function(f,h){var d=f.max(t,i);return h([a,d]),d},{x:t},function(f,h){return Hu(f,h[1],h[0],o,s)},"Max",{axes:i},u,[!0]);if(e){var l=nn(c.shape,o);c=c.reshape(l)}return c}}),fv=D({mean_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","mean"),a=Le(n,t.shape),o=Y(je(t.shape,a)[1]);return ua(function(i){var s=j(o);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(n,e),gradFunc:function(u){var c=i.shape.slice();return a.forEach(function(l){c[l]=1}),u.reshape(c).mul(Xt(i.shape,"float32")).div(o)}}})(t)}}),hv=D({min_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","min"),a=t,o=Le(n,t.shape),i=o,s=Bn(i,t.rank);s!=null&&(t=t.transpose(s),i=Ln(i.length,t.rank));var u=[t],c=T.runKernelFunc(function(f,h){var d=f.min(t,i);return h([a,d]),d},{x:t},function(f,h){return Hu(f,h[1],h[0],o,s)},"Min",{axes:i},u,[!0]);if(e){var l=nn(c.shape,o);c=c.reshape(l)}return c}}),dv=D({moments_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=Le(n,(r=_(r,"x","moments")).shape),a=r.mean(t,e),o=a.shape;e||(o=nn(a.shape,t));var i=r.toFloat().sub(a.reshape(o)).square();return{mean:a,variance:i.mean(t,e)}}}),ju=D({sum_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","sum");t.dtype==="bool"&&(t=t.toInt());var a=Le(n,t.shape);return ua(function(o){var i=Bn(a,o.rank),s=a,u=o;i!=null&&(u=o.transpose(i),s=Ln(s.length,o.rank));var c=function(d){var p=o.shape.slice();return a.forEach(function(v){p[v]=1}),d.reshape(p).mul(Xt(o.shape,"float32"))},l={axes:s},f=T.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=nn(f.shape,a);f=f.reshape(h)}return{value:f,gradFunc:c}})(t)}}),pv=D({prod_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","prod");t.dtype==="bool"&&(t=t.toInt());var a=Le(n,t.shape),o=Bn(a,t.rank),i=a,s=t;o!=null&&(s=t.transpose(o),i=Ln(i.length,t.rank));var u=T.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=nn(u.shape,a);u=u.reshape(c)}return u}}),qu=D({elu_:function(r){var n=_(r,"x","elu");return T.runKernelFunc(function(e,t){var a=e.elu(n);return t([a]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){return T.runKernelFunc(function(o){return o.eluDer(e,a)},{dy:e,y:a})}}})}}),vv=D({leakyRelu_:function(r,n){n===void 0&&(n=.2);var e=_(r,"x","leakyRelu");return Wo(j(n).mul(e),e)}}),Ku=D({prelu_:function(r,n){var e=_(r,"x","prelu"),t=_(n,"alpha","prelu");return T.runKernelFunc(function(a,o){var i=a.prelu(e,t);return o([e,t]),i},{x:e,alpha:t},function(a,o){var i=o[0],s=o[1],u=i.greater(0);return{x:function(){return xt(u,a,a.mul(s))},alpha:function(){var c=xt(u,ve(a),a.mul(i)),l=Oe(s.shape,a.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Re=D({relu_:function(r){var n=_(r,"x","relu");return n.dtype==="bool"?n.toInt():T.runKernelFunc(function(e,t){var a=e.relu(n);return t([n]),a},{x:n},function(e,t){var a=t[0];return{x:function(){return e.mulStrict(a.step().toFloat())}}},"Relu")}}),Xu=D({relu6_:function(r){var n=_(r,"x","relu6");return n.dtype==="bool"?n.toInt():T.runKernelFunc(function(e,t){var a=e.relu6(n);return t([n]),a},{x:n},function(e,t){var a=t[0],o=a.lessEqual(6).mul(a.step());return{x:function(){return e.mulStrict(o.toFloat())}}},"Relu6")}}),mv=D({selu_:function(r){var n=_(r,"x","selu");return T.runKernelFunc(function(e,t){var a=e.selu(n);return t([n]),a},{$x:n},function(e,t){var a=t[0];return{$x:function(){var o=a.greater(j(0)),i=j(Oo),s=j(Bo),u=e.mul(s),c=e.mul(i).mul(a.toFloat().exp());return xt(o,u,c)}}})}}),st=D({transpose_:function(r,n){var e=_(r,"x","transpose");if(n==null&&(n=e.shape.map(function(a,o){return o}).reverse()),E(e.rank===n.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+n+"."}),n.forEach(function(a){E(a>=0&&a<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+n})}),e.rank<=1)return e.clone();var t={perm:n};return T.runKernelFunc(function(a){return a.transpose(e,n)},{x:e},function(a){var o=Io(n);return{x:function(){return a.transpose(o)}}},"Transpose",t)}}),gv=D({localResponseNormalization_:function(r,n,e,t,a){n===void 0&&(n=5),e===void 0&&(e=1),t===void 0&&(t=1),a===void 0&&(a=.5);var o=_(r,"x","localResponseNormalization");E(o.rank===4||o.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+o.rank+"."}),E(Te(n),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+n+"."});var i=o,s=!1;o.rank===3&&(s=!0,i=o.as4D(1,o.shape[0],o.shape[1],o.shape[2]));var u=T.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(i,n,e,t,a);return l([i,f]),f},{x4D:i},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return T.runKernelFunc(function(d){return d.LRNGrad(c,f,h,n,e,t,a)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),$u=D({norm_:function(r,n,e,t){n===void 0&&(n="euclidean"),e===void 0&&(e=null),t===void 0&&(t=!1);var a=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(j(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=_(r,"x","norm"),n,e),o=a.shape;if(t){var i=Le(e,r.shape);o=nn(a.shape,i)}return a.reshape(o)}}),yv=D({basicLSTMCell_:function(r,n,e,t,a,o){var i=_(r,"forgetBias","basicLSTMCell"),s=_(n,"lstmKernel","basicLSTMCell"),u=_(e,"lstmBias","basicLSTMCell"),c=_(t,"data","basicLSTMCell"),l=_(a,"c","basicLSTMCell"),f=_(o,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,v=[d,p],m=h.slice([0,0],v),g=h.slice([0,p],v),x=h.slice([0,2*p],v),b=h.slice([0,3*p],v),y=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),xv=D({multiRNNCell_:function(r,n,e,t){for(var a=_(n,"data","multiRNNCell"),o=Gr(e,"c","multiRNNCell"),i=Gr(t,"h","multiRNNCell"),s=a,u=[],c=0;c<r.length;c++){var l=r[c](s,o[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),bv=D({movingAverage_:function(r,n,e,t,a){a===void 0&&(a=!0);var o=_(r,"v","movingAverage"),i=_(n,"x","movingAverage"),s=_(e,"decay","movingAverage");ml(o,i),E(ze(o.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=j(1),c=u.sub(s),l=i.sub(o).mul(c);if(a){E(t!=null,function(){return"When using zeroDebias: true, step is required."});var f=_(t,"step","movingAverage");l=l.div(u.sub(Zr(s,f)))}return o.add(l)}}),wv=D({stridedSlice_:function(r,n,e,t,a,o,i,s,u){if(a===void 0&&(a=0),o===void 0&&(o=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),t==null&&(t=new Array(n.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=Wi(s),f=c.shape.slice();l.forEach(function(m){n[m]=0,e[m]=1,f.splice(m,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)n[h]=Tf(a,n,t,c.shape,h),e[h]=Nf(o,e,t,c.shape,h),t[h]=t[h]||1;var d=Wi(u);d.forEach(function(m){e[m]=n[m]+1,t[m]=1});var p=Ao(n,e,t),v=p.filter(function(m,g){return d.indexOf(g)===-1});return t.every(function(m){return m===1})?Pn(c,n,p).reshape(v):T.runKernelFunc(function(m){return m.stridedSlice(c,n,e,t)},{$x:c}).reshape(v)}}),Cv=D({topk_:function(r,n,e){n===void 0&&(n=1),e===void 0&&(e=!0);var t=_(r,"x","topk");if(t.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var a=t.shape[t.shape.length-1];if(n>a)throw new Error("'k' passed to topk() must be <= the last dimension ("+a+") but got "+n);var o=T.runKernelFunc(function(i){return i.topk(t,n,e)},{$x:t});return{values:o[0],indices:o[1]}}}),_v=D({scatterND_:function(r,n,e){var t=_(r,"indices","scatterND","int32"),a=_(n,"updates","scatterND");return Df(a,t,e),T.runKernelFunc(function(o){return o.scatterND(t,a,e)},{indices:t,updates:a},null,"ScatterNd",{shape:e})}}),Go=D({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var n=r.shape[r.shape.length-1],e=r.size/n,t=r.as2D(e,n);return T.runKernelFunc(function(a){return a.fft(t)},{input:r}).reshape(r.shape)}}),ea=D({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var n=r.shape[r.shape.length-1],e=r.size/n,t=r.as2D(e,n);return T.runKernelFunc(function(a){return a.ifft(t)},{input:r}).reshape(r.shape)}}),Ho=D({rfft_:function(r,n){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,t=r.shape[r.shape.length-1],a=r.size/t;if(n!=null&&n<t){var o=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=n,e=r.slice(o,i),t=n}else if(n!=null&&n>t){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=n-t,e=r.concat(we(s),r.shape.length-1),t=n}else e=r;var u=e.zerosLike(),c=Ve(e,u).as2D(a,t),l=Go(c),f=Math.floor(t/2)+1,h=dn(l),d=Dn(l),p=h.split([f,t-f],h.shape.length-1),v=d.split([f,t-f],d.shape.length-1),m=e.shape.slice();return m[e.shape.length-1]=f,Ve(p[0],v[0]).reshape(m)}}),Yu=D({irfft_:function(r){var n=r.shape[r.shape.length-1],e=r.size/n;if(n<=2){var t=r.as2D(e,n),a=ea(t);return dn(a)}var o=[e,2*(n-1)],i=dn(r).as2D(e,n),s=Dn(r).as2D(e,n),u=i.slice([0,1],[e,n-2]).reverse(1),c=s.slice([0,1],[e,n-2]).reverse(1).mul(j(-1)),l=i.concat(u,1),f=s.concat(c,1);return t=Ve(l,f).as2D(o[0],o[1]),a=ea(t),dn(a)}}),Ev=Object.freeze({fft:Go,ifft:ea,rfft:Ho,irfft:Yu}),Rv=D({sparseToDense_:function(r,n,e,t){t===void 0&&(t=0);var a=_(r,"sparseIndices","sparseToDense","int32"),o=_(n,"sparseValues","sparseToDense"),i=_(t,"defaultValue","sparseToDense",o.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(a,o,e,i),T.runKernelFunc(function(s){return s.sparseToDense(a,o,e,i)},{$sparseIndices:a,$sparseValues:o,$defaultValue:i})}}),Iv=D({gatherND_:function(r,n){var e=_(n,"indices","gatherND","int32"),t=_(r,"x","gatherND");return T.runKernelFunc(function(a){return a.gatherND(t,e)},{x:t,indices:e},null,"GatherNd")}}),kv=D({diag_:function(r){var n=_(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return T.runKernelFunc(function(t){return t.diag(n)},{$x:n}).reshape(e)}}),Sv=D({dropout_:function(r,n,e,t){var a=_(r,"x","dropout");if(E(a.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+a.dtype+" tensor instead."}),E(n>=0&&n<1,function(){return"rate must be a float in the range [0, 1), but got "+n+"."}),n===0)return r instanceof Ee?a.clone():a;var o=function(u,c){if(c==null)return u.shape.slice();if(ze(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(a,e),i=1-n,s=Ks(o,0,1,"float32",t).add(i).floor().div(i);return a.mul(s)}});function Ju(r,n,e){for(var t=1-r%2,a=new Float32Array(r),o=0;o<r;++o){var i=2*Math.PI*o/(r+t-1);a[o]=n-e*Math.cos(i)}return Ne(a,"float32")}var jo=D({hannWindow_:function(r){return Ju(r,.5,.5)}}),Qu=D({hammingWindow_:function(r){return Ju(r,.54,.46)}}),qo=D({frame_:function(r,n,e,t,a){t===void 0&&(t=!1),a===void 0&&(a=0);for(var o=0,i=[];o+n<=r.size;)i.push(Pn(r,o,n)),o+=e;if(t)for(;o<r.size;){var s=o+n-r.size,u=Pe([Pn(r,o,n-s),Fn([s],a)]);i.push(u),o+=e}return i.length===0?at([],[0,n]):Pe(i).as2D(i.length,n)}}),Zu=D({stft_:function(r,n,e,t,a){var o;a===void 0&&(a=jo),t==null&&(o=n,t=Math.floor(Math.pow(2,Math.ceil(Math.log(o)/Math.log(2)))));for(var i=qo(r,n,e),s=$e(i,a(n)),u=[],c=0;c<i.shape[0];c++)u.push(Ho(s.slice([c,0],[1,n]),t));return Pe(u)}}),Dv=Object.freeze({hannWindow:jo,hammingWindow:Qu,frame:qo,stft:Zu}),Xe,Av=function(r,n,e){return e===void 0&&(e=1),X(this,void 0,void 0,function(){var t,a,o,i,s,u,c,l,f,h,d,p,v,m;return $(this,function(g){switch(g.label){case 0:return t=_(r,"predictions","inTopK"),a=_(n,"targets","inTopK"),E(t.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+t.rank}),E(t.rank-1===a.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+t.rank+" and targets rank "+a.rank}),ye(t.shape.slice(0,t.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),o=t.shape[t.shape.length-1],E(e>0&&e<=o,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+o+"), but got "+e}),[4,t.data()];case 1:return i=g.sent(),[4,a.data()];case 2:for(s=g.sent(),u=[i.length/o,o],l=u[1],f=rr("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=i.subarray(d,d+l),v=[],m=0;m<p.length;m++)v.push({value:p[m],index:m});for(v.sort(function(x,b){return b.value-x.value}),f[h]=0,m=0;m<e;m++)if(v[m].index===s[h]){f[h]=1;break}}return r!==t&&t.dispose(),n!==a&&a.dispose(),[2,He(f,a.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Xe||(Xe={}));var Tv=D({absoluteDifference_:function(r,n,e,t){t===void 0&&(t=Xe.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","absoluteDifference"),o=_(n,"predictions","absoluteDifference"),i=null;e!=null&&(i=_(e,"weights","absoluteDifference")),ye(a.shape,o.shape,"Error in absoluteDifference: ");var s=a.sub(o).abs();return Xn(s,i,t)}}),Xn=D({computeWeightedLoss_:function(r,n,e){e===void 0&&(e=Xe.SUM_BY_NONZERO_WEIGHTS);var t=_(r,"losses","computeWeightedLoss"),a=null;n!=null&&(a=_(n,"weights","computeWeightedLoss"));var o=a==null?t:t.mul(a);if(e===Xe.NONE)return o;if(e===Xe.SUM)return o.sum();if(e===Xe.MEAN){if(a==null)return o.mean();var i=t.size/a.size,s=o.sum().div(a.sum());return i>1?s.div(j(i)):s}if(e===Xe.SUM_BY_NONZERO_WEIGHTS){if(a==null)return o.sum().div(j(t.size));var u=a.mul(Xt(t.shape)).notEqual(j(0)).sum().toFloat();return o.sum().div(u)}throw Error("Unknown reduction: "+e)}}),Nv=D({cosineDistance_:function(r,n,e,t,a){a===void 0&&(a=Xe.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","cosineDistance"),i=_(n,"predictions","cosineDistance"),s=null;t!=null&&(s=_(t,"weights","cosineDistance")),ye(o.shape,i.shape,"Error in cosineDistance: ");var u=j(1).sub(o.mul(i).sum(e,!0));return Xn(u,s,a)}}),Fv=D({hingeLoss_:function(r,n,e,t){t===void 0&&(t=Xe.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","hingeLoss"),o=_(n,"predictions","hingeLoss"),i=null;e!=null&&(i=_(e,"weights","hingeLoss")),ye(a.shape,o.shape,"Error in hingeLoss: ");var s=j(1);a=j(2).mul(a).sub(s);var u=s.sub(a.mul(o)).relu();return Xn(u,i,t)}}),Pv=D({huberLoss_:function(r,n,e,t,a){t===void 0&&(t=1),a===void 0&&(a=Xe.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","huberLoss"),i=_(n,"predictions","huberLoss"),s=null;e!=null&&(s=_(e,"weights","huberLoss")),ye(o.shape,i.shape,"Error in huberLoss: ");var u=j(t),c=i.sub(o).abs(),l=Nu(c,u),f=c.sub(l),h=j(.5).mul(l.square()).add(u.mul(f));return Xn(h,s,a)}}),Mv=D({logLoss_:function(r,n,e,t,a){t===void 0&&(t=1e-7),a===void 0&&(a=Xe.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","logLoss"),i=_(n,"predictions","logLoss"),s=null;e!=null&&(s=_(e,"weights","logLoss")),ye(o.shape,i.shape,"Error in logLoss: ");var u=j(1),c=j(t),l=o.mul(i.add(c).log()).neg().sub(u.sub(o).mul(u.sub(i).add(c).log()));return Xn(l,s,a)}}),Ov=D({meanSquaredError_:function(r,n,e,t){t===void 0&&(t=Xe.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","meanSquaredError"),o=_(n,"predictions","meanSquaredError"),i=null;e!=null&&(i=_(e,"weights","meanSquaredError")),ye(a.shape,o.shape,"Error in meanSquaredError: ");var s=a.squaredDifference(o);return Xn(s,i,t)}}),Bv=D({sigmoidCrossEntropy_:function(r,n,e,t,a){t===void 0&&(t=0),a===void 0&&(a=Xe.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"multiClassLabels","sigmoidCrossEntropy"),i=_(n,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","sigmoidCrossEntropy")),ye(o.shape,i.shape,"Error in sigmoidCrossEntropy: "),t>0){var u=j(t),c=j(1),l=j(.5);o=o.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=_(h,"labels","sigmoidCrossEntropyWithLogits"),v=_(d,"logits","sigmoidCrossEntropyWithLogits");ye(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(p),x=v.abs().neg().exp().log1p();return m.sub(g).add(x)}(o,i);return Xn(f,s,a)}}),Lv=D({softmaxCrossEntropy_:function(r,n,e,t,a){t===void 0&&(t=0),a===void 0&&(a=Xe.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"onehotLabels","softmaxCrossEntropy"),i=_(n,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","softmaxCrossEntropy")),ye(o.shape,i.shape,"Error in softmaxCrossEntropy: "),t>0){var u=j(t),c=j(1),l=j(o.shape[1]);o=o.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return ua(function(v,m,g){var x=m.logSumExp([p],!0),b=m.toFloat().sub(x);return g([v,b]),{value:b.mul(v).neg().sum([p]),gradFunc:function(y,w){var C=w[0],S=w[1],k=nn(y.shape,[p]);return[y.reshape(k).mul(C.toFloat().sub(S.exp())),y.reshape(k).mul(S.exp().sub(C.toFloat()))]}}})(h,d)}(o,i);return Xn(f,s,a)}}),Wv=Object.freeze({get Reduction(){return Xe},absoluteDifference:Tv,computeWeightedLoss:Xn,cosineDistance:Nv,hingeLoss:Fv,huberLoss:Pv,logLoss:Mv,meanSquaredError:Ov,sigmoidCrossEntropy:Bv,softmaxCrossEntropy:Lv});function ss(r,n){return n===void 0&&(n=!1),T.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],t=r.shape[1],a=qs(e),o=r.clone(),i=at([[1]],[1,1]),s=i.clone(),u=e>=t?t:e,c=function(f){var h,d=o,p=s,v=a;h=T.tidy(function(){var m=o.slice([f,f],[e-f,1]),g=m.norm(),x=o.slice([f,f],[1,1]),b=at([[-1]]).where(x.greater(0),at([[1]])),y=x.sub(b.mul(g)),w=m.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(y).div(g).neg(),S=o.slice([f,0],[e-f,t]),k=C.mul(s);if(f===0)o=S.sub(k.matMul(s.transpose().matMul(S)));else{var R=S.sub(k.matMul(s.transpose().matMul(S)));o=o.slice([0,0],[f,t]).concat(R,0)}var I=a.slice([0,f],[e,a.shape[1]-f]);if(f===0)a=I.sub(I.matMul(s).matMul(k.transpose()));else{var N=I.sub(I.matMul(s).matMul(k.transpose()));a=a.slice([0,0],[e,f]).concat(N,1)}return[s,o,a]}),s=h[0],o=h[1],a=h[2],en([d,p,v])},l=0;l<u;++l)c(l);return!n&&e>t&&(a=a.slice([0,0],[e,t]),o=o.slice([0,0],[t,t])),[a,o]})}var zv=D({bandPart_:function(r,n,e){if(n%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+n+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var t=_(r,"a","bandPart");if(t.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+t.rank+".");var a=t.shape,o=t.shape.slice(-2),i=o[0],s=o[1];if(!(n<=i))throw new Error("bandPart(): numLower ("+n+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");n<0&&(n=i),e<0&&(e=s);var u=Hr(0,i,1,"int32").reshape([-1,1]),c=Hr(0,s,1,"int32"),l=Be(u,c),f=la(l.lessEqual(j(+n,"int32")),l.greaterEqual(j(-e,"int32"))),h=we([i,s],t.dtype);return ln(Me(t.reshape([-1,i,s])).map(function(d){return xt(f,d,h)})).reshape(a)}}),Uv=D({gramSchmidt_:function(r){var n;if(Array.isArray(r)){n=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],t=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},a=1;a<r.length;++a)t(a)}else n=!0,r=So(r,r.shape[0],0).map(function(u){return $s(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var o=[],i=r,s=function(u){o.push(T.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var f=ju(o[l].mulStrict(c)).mul(o[l]);c=c.sub(f)}return c.div($u(c,"euclidean"))}))};for(a=0;a<r.length;++a)s(a);return n?ln(o,0):o}}),Vv=D({qr_:function(r,n){if(n===void 0&&(n=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return ss(r,n);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),t=Me(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),a=[],o=[];return t.forEach(function(i){var s=ss(i,n),u=s[0],c=s[1];a.push(u),o.push(c)}),[ln(a,0).reshape(r.shape),ln(o,0).reshape(r.shape)]}}),Gv=Object.freeze({bandPart:zv,gramSchmidt:Uv,qr:Vv});function pa(r,n,e,t,a,o){t==null&&(t=.5),a==null&&(a=Number.NEGATIVE_INFINITY),o==null&&(o=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=t&&t<=1,function(){return"iouThreshold must be in [0, 1], but was '"+t+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(n.rank===1,function(){return"scores must be a 1D tensor"}),E(n.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+n.shape[0]}),E(0<=o&&o<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+o+"'"}),{maxOutputSize:e,iouThreshold:t,scoreThreshold:a,softNmsSigma:o}}var Hv=D({resizeBilinear_:function(r,n,e){e===void 0&&(e=!1);var t=_(r,"images","resizeBilinear");E(t.rank===3||t.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+t.rank+"."}),E(n.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+n+"."});var a=t,o=!1;t.rank===3&&(o=!0,a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=n[0],s=n[1],u=T.runKernelFunc(function(c,l){return l([a]),c.resizeBilinear(a,i,s,e)},{x:a},function(c,l){return{x:function(){return T.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return o?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),jv=D({resizeNearestNeighbor_:function(r,n,e){e===void 0&&(e=!1);var t=_(r,"images","resizeNearestNeighbor");E(t.rank===3||t.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+t.rank+"."}),E(n.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+n+"."}),E(t.dtype==="float32"||t.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var a=t,o=!1;t.rank===3&&(o=!0,a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=n[0],s=n[1],u=T.runKernelFunc(function(c,l){return l([a]),c.resizeNearestNeighbor(a,i,s,e)},{batchImages:a},function(c,l){return{batchImages:function(){return T.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return o?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),qv=D({nonMaxSuppression_:function(r,n,e,t,a){t===void 0&&(t=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY);var o=_(r,"boxes","nonMaxSuppression"),i=_(n,"scores","nonMaxSuppression"),s=pa(o,i,e,t,a);e=s.maxOutputSize,t=s.iouThreshold,a=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:t,scoreThreshold:a};return T.runKernelFunc(function(c){return c.nonMaxSuppression(o,i,e,t,a)},{boxes:o,scores:i},null,"NonMaxSuppressionV3",u)}}),Kv=function(r,n,e,t,a){return t===void 0&&(t=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),X(this,void 0,void 0,function(){var o,i,s,u,c,l,f;return $(this,function(h){switch(h.label){case 0:return o=_(r,"boxes","nonMaxSuppressionAsync"),i=_(n,"scores","nonMaxSuppressionAsync"),s=pa(o,i,e,t,a),e=s.maxOutputSize,t=s.iouThreshold,a=s.scoreThreshold,[4,Promise.all([o.data(),i.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=No(c,l,e,t,a),o!==r&&o.dispose(),i!==n&&i.dispose(),[2,f]}})})},Xv=D({nonMaxSuppressionWithScore_:function(r,n,e,t,a,o){t===void 0&&(t=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),o===void 0&&(o=0);var i=_(r,"boxes","nonMaxSuppression"),s=_(n,"scores","nonMaxSuppression"),u=pa(i,s,e,t,a,o),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:t=u.iouThreshold,scoreThreshold:a=u.scoreThreshold,softNmsSigma:o=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),$v=function(r,n,e,t,a,o){return t===void 0&&(t=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),o===void 0&&(o=0),X(this,void 0,void 0,function(){var i,s,u,c,l,f,h;return $(this,function(d){switch(d.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),s=_(n,"scores","nonMaxSuppressionAsync"),u=pa(i,s,e,t,a,o),e=u.maxOutputSize,t=u.iouThreshold,a=u.scoreThreshold,o=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=Fo(l,f,e,t,a,o),i!==r&&i.dispose(),s!==n&&s.dispose(),[2,h]}})})},Yv=D({cropAndResize_:function(r,n,e,t,a,o){var i=_(r,"image","cropAndResize"),s=_(n,"boxes","cropAndResize","float32"),u=_(e,"boxInd","cropAndResize","int32");a=a||"bilinear",o=o||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(t.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+t.length+"."}),E(t[0]>=1&&t[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+t}),E(a==="bilinear"||a==="nearest",function(){return"method must be bilinear or nearest, but was "+a}),T.runKernelFunc(function(l,f){return l.cropAndResize(i,s,u,t,a,o)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:a,extrapolationValue:o,cropSize:t})}}),Ko=Object.freeze({resizeBilinear:Hv,resizeNearestNeighbor:jv,nonMaxSuppression:qv,nonMaxSuppressionAsync:Kv,nonMaxSuppressionWithScore:Xv,nonMaxSuppressionWithScoreAsync:$v,cropAndResize:Yv}),Xo=function(r,n){return!(r>0)||n==="linear"},$o=function(r,n,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(n.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Yo=function(r,n){var e=n,t=Oe(r.shape,n.shape);return t.length>0&&(e=e.sum(t)),e.reshape(r.shape)},Jo=function(r,n,e){if(n==="linear")return r;if(n==="relu")return Re(r);if(n==="elu")return qu(r);if(n==="relu6")return Xu(r);if(n==="prelu")return Ku(r,e);throw new Error("Unknown fused activation "+n+".")},Jv=D({fusedMatMul_:function(r){var n,e=r.a,t=r.b,a=r.transposeA,o=a!==void 0&&a,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,f=r.preluActivationWeights;if(Xo(T.state.gradientDepth,l)===!1){var h=ha(e,t,o,s);return u!=null&&(h=ue(h,u)),Jo(h,l,f)}var d=_(e,"a","fused matMul"),p=_(t,"b","fused matMul");n=Ie(d,p),d=n[0],p=n[1];var v=o?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=o?d.shape[d.rank-1]:d.shape[d.rank-2],x=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),y=p.shape.slice(0,-2),w=Y(b),C=Y(y);E(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),E(ze(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),E(v===m,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+o+" and transposeB="+s+" must match."});var S,k,R=d.shape.slice(0,-2).concat([g,x]),I=o?d.as3D(w,v,g):d.as3D(w,g,v),N=s?p.as3D(C,x,m):p.as3D(C,m,x);u!=null&&le(R,(S=Ie(S=_(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(k=_(f,"prelu weights","fused matMul"));var A={a:I,b:N};u!=null&&(A.bias=S),f!=null&&(A.preluActivationWeights=k);var B=[I,N];return T.runKernelFunc(function(M,L){var U=M.fusedBatchMatMul({a:I,b:N,transposeA:o,transposeB:s,bias:S,activation:l,preluActivationWeights:k});return L([I,N,U]),U},A,function(M,L){var U=L[0],z=L[1],W=L[2],G=$o(M,W,l),H={};return u!=null&&(H={bias:function(){return Yo(S,G)}}),Object.assign(o||s?!o&&s?{a:function(){return G.matMul(z,!1,!1)},b:function(){return G.matMul(U,!0,!1)}}:o&&!s?{a:function(){return z.matMul(G,!1,!0)},b:function(){return U.matMul(G,!1,!1)}}:{a:function(){return z.matMul(G,!0,!0)},b:function(){return G.matMul(U,!0,!0)}}:{a:function(){return G.matMul(z,!1,!0)},b:function(){return U.matMul(G,!0,!1)}},H)},"_FusedMatMul",{transposeA:o,transposeB:s,activation:l},B,[!0]).reshape(R)}}),Qv=D({fusedConv2d_:function(r){var n=r.x,e=r.filter,t=r.strides,a=r.pad,o=r.dataFormat,i=o===void 0?"NHWC":o,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(h=h||"linear",Xo(T.state.gradientDepth,h)===!1){var p=vn(n,e,t,a,i,u,c);return l!=null&&(p=ue(p,l)),Jo(p,h,d)}var v=_(n,"x","conv2d"),m=_(e,"filter","conv2d"),g=v,x=!1;v.rank===3&&(x=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(m.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),c!=null&&E(Te(a),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+a+"."}),E(g.shape[3]===m.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),E(tn(t,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,y,w=Ct(g.shape,m.shape,t,u,a,c);l!=null&&(b=Ie(b=_(l,"bias","fused conv2d"),v)[0],le(w.outShape,b.shape)),d!=null&&(y=_(d,"prelu weights","fused conv2d"));var C={x:g,filter:m};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=y);var S=[m,g],k=T.runKernelFunc(function(R,I){var N=R.fusedConv2d({input:g,filter:m,convInfo:w,bias:b,activation:h,preluActivationWeights:y});return I([m,g,N]),N},C,function(R,I){var N=I,A=N[0],B=N[1],M=N[2],L=$o(R,M,h);E(qt(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var U={};return l!=null&&(U={bias:function(){return Yo(b,L)}}),Object.assign({x:function(){return Lu(B.shape,L,A,t,a)},filter:function(){return Uo(B,L,A.shape,t,a)}},U)},"FusedConv2D",{convInfo:w,activation:h},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),Zv=D({fusedDepthwiseConv2d_:function(r){var n=r.x,e=r.filter,t=r.strides,a=r.pad,o=r.dataFormat,i=o===void 0?"NHWC":o,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(Xo(T.state.gradientDepth,h)===!1){var p=fa(n,e,t,a,i,u,c);return l!=null&&(p=ue(p,l)),Jo(p,h,d)}var v=_(n,"x","depthwiseConv2d"),m=_(e,"filter","depthwiseConv2d"),g=v,x=!1;v.rank===3&&(x=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(m.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),E(g.shape[3]===m.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),u==null&&(u=[1,1]),E(tn(t,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+u+"'"}),c!=null&&E(Te(a),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+a+"."});var b,y,w=Ct(g.shape,m.shape,t,u,a,c,!0);l!=null&&(b=Ie(b=_(l,"bias","fused conv2d"),v)[0],le(w.outShape,b.shape)),d!=null&&(y=_(d,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:m};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=y);var S=[m,g],k=T.runKernelFunc(function(R,I){var N=R.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:b,activation:h,preluActivationWeights:y});return I([m,g,N]),N},C,function(R,I){E(qt(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var N=I[0],A=I[1],B=I[2],M=$o(R,B,h),L={};return l!=null&&(L={bias:function(){return Yo(b,M)}}),Object.assign({x:function(){return Wu(A.shape,M,N,w)},filter:function(){return zu(A,M,N.shape,w)}},L)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),em=Object.freeze({matMul:Jv,conv2d:Qv,depthwiseConv2d:Zv}),nm=Object.freeze({image:Ko,linalg:Gv,losses:Wv,spectral:Ev,fused:em,signal:Dv,square:Md,squaredDifference:Cu,conv1d:Hp,conv2d:vn,conv3d:jp,depthwiseConv2d:fa,separableConv2d:Vo,conv2dTranspose:qp,conv3dTranspose:Kp,op:D,batchNormalization2d:fp,batchNormalization3d:hp,batchNormalization4d:dp,batchNormalization:pp,batchNorm:Su,batchNorm2d:vp,batchNorm3d:mp,batchNorm4d:gp,booleanMaskAsync:Gp,complex:Ve,real:dn,imag:Dn,concat:Pe,concat1d:Zl,concat2d:ef,concat3d:nf,concat4d:tf,split:So,matMul:ha,dot:Xp,outerProduct:$p,reverse:gr,reverse1d:Yp,reverse2d:Jp,reverse3d:Qp,reverse4d:Zp,maxPool:We,avgPool:yr,pool:ev,maxPool3d:nv,avgPool3d:tv,slice:Pn,slice1d:rv,slice2d:av,slice3d:Gu,slice4d:ov,abs:Od,acos:Bd,acosh:Ld,asin:Wd,asinh:zd,atan:Ud,atanh:Vd,ceil:Gd,clipByValue:Lo,cos:Hd,cosh:jd,erf:qd,exp:vo,expm1:Kd,floor:Xd,log:$d,log1p:Yd,logSigmoid:Jd,neg:Qr,reciprocal:Qd,round:Zd,rsqrt:_u,sigmoid:Eu,sign:ep,isNaN:np,isInf:tp,isFinite:rp,sin:ap,sinh:op,softplus:ip,sqrt:sp,step:up,tan:cp,tanh:lp,all:iv,any:sv,argMax:uv,argMin:cv,logSumExp:lv,max:da,mean:fv,min:hv,moments:dv,sum:ju,prod:pv,equal:Fu,equalStrict:Fp,greater:Pp,greaterEqual:Pu,greaterEqualStrict:Mp,greaterStrict:Op,less:Bp,lessEqual:Lp,lessEqualStrict:Wp,lessStrict:zp,notEqual:Up,notEqualStrict:Vp,add:ue,addN:bp,addStrict:wp,atan2:Cp,div:gn,divNoNan:_p,divStrict:Ep,floorDiv:Tu,maximum:Wo,maximumStrict:Rp,minimum:Nu,minimumStrict:Ip,mod:kp,modStrict:Sp,mul:$e,mulStrict:Dp,pow:Zr,powStrict:Ap,squaredDifferenceStrict:Tp,sub:Be,subStrict:Np,elu:qu,leakyRelu:vv,prelu:Ku,relu:Re,relu6:Xu,selu:mv,logicalAnd:la,logicalNot:yp,logicalOr:Du,logicalXor:xp,where:xt,whereAsync:Au,buffer:ae,print:hf,batchToSpaceND:js,broadcastTo:df,cast:pf,clone:vf,cumsum:mf,depthToSpace:gf,expandDims:hn,eye:qs,multinomial:yf,oneHot:lo,pad:wt,pad1d:xf,pad2d:bf,pad3d:wf,pad4d:Cf,rand:_f,randomNormal:Ef,randomGamma:Rf,randomUniform:Ks,reshape:yn,spaceToBatchND:Xs,squeeze:$s,stack:ln,tile:Bt,truncatedNormal:If,unstack:Me,setdiff1dAsync:kf,fill:Fn,linspace:Ql,ones:Xt,range:Hr,scalar:j,tensor:He,tensor1d:Ne,tensor2d:at,tensor3d:ko,tensor4d:Qe,tensor5d:$l,tensor6d:Yl,variable:Jl,zeros:we,onesLike:Hs,zerosLike:ve,transpose:st,softmax:Kn,logSoftmax:Pf,localResponseNormalization:gv,norm:$u,gather:zo,unsortedSegmentSum:Mu,basicLSTMCell:yv,multiRNNCell:xv,movingAverage:bv,stridedSlice:wv,topk:Cv,scatterND:_v,fft:Go,ifft:ea,rfft:Ho,irfft:Yu,sparseToDense:Rv,gatherND:Iv,diag:kv,dropout:Sv,hannWindow:jo,hammingWindow:Qu,frame:qo,stft:Zu,inTopKAsync:Av});function V(r,n){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return n+" does not support complex64 tensors."})})}function Ha(r,n,e,t){if(e==="linear")return r.linear(n);if(e==="relu")return r.relu(n);if(e==="elu")return r.elu(n);if(e==="relu6")return r.relu6(n);if(e==="prelu")return r.prelu(n,t);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var tm=function(r){function n(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new tu(e,T),e}return bn(n,r),n.prototype.write=function(e,t,a){this.firstUse&&(this.firstUse=!1,O().get("IS_NODE")&&Vr(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var o={};return this.data.set(o,{values:e,dtype:a}),o},n.prototype.move=function(e,t,a,o){this.data.set(e,{values:t,dtype:o})},n.prototype.numDataIds=function(){return this.data.numDataIds()},n.prototype.read=function(e){return X(this,void 0,void 0,function(){return $(this,function(t){return[2,this.readSync(e)]})})},n.prototype.readSync=function(e){var t=this.data.get(e),a=t.dtype,o=t.complexTensors;return a==="complex64"?po(this.readSync(o.real.dataId),this.readSync(o.imag.dataId)):this.data.get(e).values},n.prototype.bufferSync=function(e){var t=this.readSync(e.dataId),a=t;if(e.dtype==="string")try{a=t.map(function(o){return Wr(o)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ae(e.shape,e.dtype,a)},n.prototype.makeOutput=function(e,t,a){var o=this.write(e,t,a);return T.makeTensorFromDataId(o,t,a,this)},n.prototype.disposeData=function(e){if(this.data.has(e)){var t=this.data.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.data.delete(e)}},n.prototype.time=function(e){return X(this,void 0,void 0,function(){var t;return $(this,function(a){return t=kn(),e(),[2,{kernelMs:kn()-t}]})})},n.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},n.prototype.complex=function(e,t){var a=this.makeOutput(null,e.shape,"complex64");return this.data.get(a.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(t.clone())},a},n.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},n.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},n.prototype.slice=function(e,t,a){if(V(e,"slice"),eu(e.shape,t,a)){var o=nu(t,e.strides),i=Y(a);return He(this.readSync(e.dataId).subarray(o,o+i),a,e.dtype)}for(var s=ae(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+t[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},n.prototype.stridedSlice=function(e,t,a,o){V(e,"stridedSlice");var i=Ao(t,a,o);if(i.some(function(d){return d===0}))return He([],i);for(var s=ae(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*o[h]+t[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},n.prototype.diag=function(e){for(var t=this.readSync(e.dataId),a=ae([e.size,e.size],e.dtype),o=a.values,i=0;i<t.length;i++)o[i*e.size+i]=t[i];return a.toTensor()},n.prototype.unstack=function(e,t){for(var a=e.shape[t],o=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==t&&(o[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[t]=1;var l=new Array(a);for(s=0;s<l.length;s++)u[t]=s,l[s]=this.slice(e,u,c).reshape(o);return l},n.prototype.reverse=function(e,t){V(e,"reverse");for(var a=ae(e.shape,e.dtype),o=this.bufferSync(e),i=function(u){var c=a.indexToLoc(u),l=c.slice();t.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),a.set.apply(a,[o.get.apply(o,l)].concat(c))},s=0;s<a.size;s++)i(s);return a.toTensor()},n.prototype.concat=function(e,t){var a=this;if(e[0].dtype==="complex64"){var o=e.map(function(d){return dn(d)}),i=e.map(function(d){return Dn(d)});return Ve(this.concat(o,t),this.concat(i,t))}var s=e.map(function(d){var p=Y(d.shape.slice(t));return d.as2D(-1,p)}),u=jt(s.map(function(d){return d.shape}),1),c=ae(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(a.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=a.readSync(d.dataId),v=0,m=0;m<d.shape[0];++m)for(var g=m*u[1]+f,x=0;x<d.shape[1];++x)c[g+x]=p[v++];f+=d.shape[1]})}var h=jt(e.map(function(d){return d.shape}),t);return He(c,h,e[0].dtype)},n.prototype.neg=function(e){return V(e,"neg"),this.multiply(j(-1),e)},n.prototype.add=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(a,o,i,s){return{real:a+i,imag:o+s}}):this.broadcastedBinaryOp(e,t,Ge(e.dtype,t.dtype),function(a,o){return a+o})},n.prototype.addN=function(e){var t=this;V(e,"addN");for(var a=e.map(function(l){return t.readSync(l.dataId)}),o=ae(e[0].shape,e[0].dtype),i=o.values,s=0;s<e.length;s++)for(var u=a[s],c=0;c<i.length;c++)i[c]+=u[c];return o.toTensor()},n.prototype.softmax=function(e,t){var a=Le([t],e.shape),o=this.max(e,a),i=nn(o.shape,a),s=this.subtract(e,o.reshape(i)),u=this.exp(s),c=this.sum(u,a).reshape(i);return this.realDivide(u,c)},n.prototype.subtract=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(a,o,i,s){return{real:a-i,imag:o-s}}):this.broadcastedBinaryOp(e,t,Ge(e.dtype,t.dtype),function(a,o){return a-o})},n.prototype.pow=function(e,t){return V([e,t],"pow"),this.broadcastedBinaryOp(e,t,e.dtype,function(a,o){return Math.pow(a,o)})},n.prototype.batchMatMul=function(e,t,a,o){V([e,t],"matMul");for(var i=a?e.shape[1]:e.shape[2],s=a?e.shape[2]:e.shape[1],u=o?t.shape[1]:t.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(t.dataId),h=a?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],v=h[2],m=o?[1,t.strides[1],t.strides[0]]:[t.strides[1],1,t.strides[0]],g=m[0],x=m[1],b=m[2],y=s*u,w=ae([c,s,u],e.dtype),C=w.values,S=this.blockSize,k=0;k<c;k++)for(var R=0;R<s;R+=S)for(var I=0;I<u;I+=S)for(var N=0;N<i;N+=S)for(var A=Math.min(R+S,s),B=Math.min(I+S,u),M=Math.min(N+S,i),L=R;L<A;L++)for(var U=I;U<B;U++){for(var z=0,W=N;W<M;W++)z+=l[k*d+L*p+W*v]*f[W*g+U*x+k*b];C[k*y+(L*u+U)]+=z}return w.toTensor()},n.prototype.fusedBatchMatMul=function(e){var t=e.a,a=e.b,o=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(t,a,o,i);return s&&(l=this.add(l,s)),u&&(l=Ha(this,l,u,c)),l},n.prototype.multiply=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(a,o,i,s){return{real:a*i-o*s,imag:a*s+o*i}}):this.broadcastedBinaryOp(e,t,Ge(e.dtype,t.dtype),function(a,o){return a*o})},n.prototype.realDivide=function(e,t){return V([e,t],"realDivide"),this.broadcastedBinaryOp(e,t,"float32",function(a,o){return a/o})},n.prototype.floorDiv=function(e,t){return V([e,t],"floorDiv"),this.broadcastedBinaryOp(e,t,"int32",function(a,o){return Math.floor(a/o)})},n.prototype.sum=function(e,t){V(e,"sum"),an("sum",t,e.rank);for(var a=je(e.shape,t),o=a[0],i=a[1],s=we(o,Ge(e.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},n.prototype.prod=function(e,t){V(e,"sum");for(var a=je(e.shape,t),o=a[0],i=a[1],s=we(o,Ge(e.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},n.prototype.unsortedSegmentSum=function(e,t,a){V(e,"unsortedSegmentSum");for(var o=[],i=e.rank-t.rank,s=0;s<i;++s)t=t.expandDims(s+1);for(s=0;s<a;++s){var u=j(s,"int32"),c=Fu(u,t).asType("float32").mul(e).sum(0);o.push(c)}return ln(o)},n.prototype.argMin=function(e,t){V(e,"argMin");var a=[t];an("argMin",a,e.rank);for(var o=je(e.shape,a),i=o[0],s=o[1],u=we(i,"int32"),c=Y(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g<p&&(p=g,v=m)}l[h]=v}return u},n.prototype.argMax=function(e,t){V(e,"argMax");var a=[t];an("argMax",a,e.rank);for(var o=je(e.shape,a),i=o[0],s=o[1],u=we(i,"int32"),c=Y(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g>p&&(p=g,v=m)}l[h]=v}return u},n.prototype.cumsum=function(e,t,a,o){if(V(e,"cumsum"),t!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+t);for(var i=Ge(e.dtype,"int32"),s=we(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=o?function(m,g){return m+l-g-1}:function(m,g){return m+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=a?0:c[p];else{var v=f(h,d-1);u[p]=a?c[v]+u[v]:c[p]+u[v]}}return s},n.prototype.equal=function(e,t){return V([e,t],"equal"),this.broadcastedBinaryOp(e,t,"bool",function(a,o){return a===o?1:0})},n.prototype.notEqual=function(e,t){return V([e,t],"notEqual"),this.broadcastedBinaryOp(e,t,"bool",function(a,o){return a!==o?1:0})},n.prototype.less=function(e,t){return V([e,t],"less"),this.broadcastedBinaryOp(e,t,"bool",function(a,o){return a<o?1:0})},n.prototype.lessEqual=function(e,t){return V([e,t],"lessEqual"),this.broadcastedBinaryOp(e,t,"bool",function(a,o){return a<=o?1:0})},n.prototype.greater=function(e,t){return V([e,t],"greater"),this.broadcastedBinaryOp(e,t,"bool",function(a,o){return a>o?1:0})},n.prototype.greaterEqual=function(e,t){return V([e,t],"greaterEqual"),this.broadcastedBinaryOp(e,t,"bool",function(a,o){return a>=o?1:0})},n.prototype.logicalNot=function(e){V(e,"logicalNot");for(var t=this.readSync(e.dataId),a=new Uint8Array(t.length),o=0;o<t.length;++o)a[o]=t[o]?0:1;return this.makeOutput(a,e.shape,"bool")},n.prototype.logicalAnd=function(e,t){return V([e,t],"logicalAnd"),this.broadcastedBinaryOp(e,t,"bool",function(a,o){return a&&o})},n.prototype.logicalOr=function(e,t){return V([e,t],"logicalOr"),this.broadcastedBinaryOp(e,t,"bool",function(a,o){return a||o})},n.prototype.select=function(e,t,a){V([e,t,a],"select");for(var o=this.readSync(e.dataId),i=this.readSync(t.dataId),s=this.readSync(a.dataId),u=we(t.shape,Ge(t.dtype,a.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||t.rank===1?1:Y(t.shape.slice(1)),h=0;h<o.length;h++)for(var d=0;d<f;d++)o[h]===1?c[l++]=i[h]:c[l++]=s[h];return u},n.prototype.where=function(e){V([e],"where");var t=this.readSync(e.dataId);return Po(e.shape,t)},n.prototype.topk=function(e,t,a){return V(e,"topk"),lu(this.readSync(e.dataId),e.shape,e.dtype,t)},n.prototype.min=function(e,t){V(e,"min"),an("min",t,e.rank);for(var a=je(e.shape,t),o=a[0],i=a[1],s=we(o,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v<d&&(d=v)}c[f]=d}return s},n.prototype.minimum=function(e,t){return V([e,t],"minimum"),this.broadcastedBinaryOp(e,t,e.dtype,function(a,o){return Math.min(a,o)})},n.prototype.mod=function(e,t){return V([e,t],"mod"),this.broadcastedBinaryOp(e,t,e.dtype,function(a,o){var i=a%o;return a<0&&o<0||a>=0&&o>=0?i:(i+o)%o})},n.prototype.max=function(e,t){V(e,"max"),an("max",t,e.rank);for(var a=je(e.shape,t),o=a[0],i=a[1],s=we(o,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v>d&&(d=v)}c[f]=d}return s},n.prototype.maximum=function(e,t){return V([e,t],"maximum"),this.broadcastedBinaryOp(e,t,e.dtype,function(a,o){return Math.max(a,o)})},n.prototype.all=function(e,t){V(e,"all"),an("all",t,e.rank);for(var a=je(e.shape,t),o=a[0],i=a[1],s=we(o,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d&&v}c[f]=d}return s},n.prototype.any=function(e,t){V(e,"any"),an("any",t,e.rank);for(var a=je(e.shape,t),o=a[0],i=a[1],s=we(o,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d||v}c[f]=d}return s},n.prototype.squaredDifference=function(e,t){return V([e,t],"squaredDifference"),this.broadcastedBinaryOp(e,t,e.dtype,function(a,o){var i=a-o;return i*i})},n.prototype.ceil=function(e){V(e,"ceil");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o)a[o]=Math.ceil(t[o]);return this.makeOutput(a,e.shape,"float32")},n.prototype.floor=function(e){V(e,"floor");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o)a[o]=Math.floor(t[o]);return this.makeOutput(a,e.shape,"float32")},n.prototype.sign=function(e){V(e,"x");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o)t[o]<0?a[o]=-1:t[o]>0?a[o]=1:a[o]=0;return this.makeOutput(a,e.shape,"float32")},n.prototype.isNaN=function(e){V(e,"x");for(var t=this.readSync(e.dataId),a=new Uint8Array(t.length),o=0;o<t.length;++o)Number.isNaN(t[o])&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},n.prototype.isInf=function(e){V(e,"x");for(var t=this.readSync(e.dataId),a=new Uint8Array(t.length),o=0;o<t.length;++o)Math.abs(t[o])===1/0&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},n.prototype.isFinite=function(e){V(e,"x");for(var t=this.readSync(e.dataId),a=new Uint8Array(t.length),o=0;o<t.length;++o)Number.isFinite(t[o])&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},n.prototype.round=function(e){V(e,"round");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o){var i=Math.floor(t[o]);t[o]-i<.5?a[o]=Math.floor(t[o]):t[o]-i>.5?a[o]=Math.ceil(t[o]):a[o]=i%2==0?i:i+1}return this.makeOutput(a,e.shape,"float32")},n.prototype.exp=function(e){V(e,"exp");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o)a[o]=Math.exp(t[o]);return this.makeOutput(a,e.shape,"float32")},n.prototype.expm1=function(e){V(e,"expm1");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o)a[o]=Math.expm1(t[o]);return this.makeOutput(a,e.shape,"float32")},n.prototype.log=function(e){V(e,"log");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o){var i=t[o];a[o]=Math.log(i)}return this.makeOutput(a,e.shape,"float32")},n.prototype.log1p=function(e){V(e,"log1p");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o){var i=t[o];a[o]=Math.log1p(i)}return this.makeOutput(a,e.shape,"float32")},n.prototype.sqrt=function(e){V(e,"sqrt");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o){var i=t[o];a[o]=Math.sqrt(i)}return this.makeOutput(a,e.shape,"float32")},n.prototype.rsqrt=function(e){V(e,"rsqrt");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o){var i=t[o];a[o]=1/Math.sqrt(i)}return this.makeOutput(a,e.shape,"float32")},n.prototype.reciprocal=function(e){V(e,"reciprocal");for(var t=this.readSync(e.dataId),a=new Float32Array(t.length),o=0;o<t.length;++o)a[o]=1/t[o];return this.makeOutput(a,e.shape,"float32")},n.prototype.linear=function(e){return e},n.prototype.relu=function(e){V(e,"relu");for(var t=we(e.shape,e.dtype),a=this.readSync(t.dataId),o=this.readSync(e.dataId),i=0;i<o.length;++i)a[i]=Math.max(0,o[i]);return t},n.prototype.relu6=function(e){V(e,"relu");for(var t=we(e.shape,e.dtype),a=this.readSync(t.dataId),o=this.readSync(e.dataId),i=0;i<o.length;++i)a[i]=Math.min(Math.max(0,o[i]),6);return t},n.prototype.prelu=function(e,t){return V([e,t],"prelu"),this.broadcastedBinaryOp(e,t,e.dtype,function(a,o){return a<0?o*a:a})},n.prototype.elu=function(e){V(e,"elu");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o){var i=a[o];t[o]=i>=0?i:Math.exp(i)-1}return this.makeOutput(t,e.shape,"float32")},n.prototype.eluDer=function(e,t){V([e,t],"eluDer");for(var a=new Float32Array(t.size),o=this.readSync(t.dataId),i=this.readSync(e.dataId),s=0;s<o.length;++s){var u=o[s];a[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(a,t.shape,"float32")},n.prototype.selu=function(e){V(e,"selu");for(var t=Oo,a=Bo,o=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=0?a*u:t*(Math.exp(u)-1)}return this.makeOutput(o,e.shape,"float32")},n.prototype.clip=function(e,t,a){V(e,"clip");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>a?a:u<t?t:u}return this.makeOutput(o,e.shape,"float32")},n.prototype.abs=function(e){for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.abs(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.complexAbs=function(e){for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<e.size;++o){var i=a[2*o],s=a[2*o+1];t[o]=Math.hypot(i,s)}return this.makeOutput(t,e.shape,"float32")},n.prototype.int=function(e){V(e,"int");for(var t=new Int32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=a[o];return this.makeOutput(t,e.shape,"int32")},n.prototype.sigmoid=function(e){V(e,"sigmoid");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=1/(1+Math.exp(-a[o]));return this.makeOutput(t,e.shape,"float32")},n.prototype.softplus=function(e){V(e,"softplus");for(var t=Math.log(11920928955078125e-23)+2,a=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var s=o[i]>-t,u=o[i]<t,c=Math.exp(o[i]),l=void 0;l=u?c:s?o[i]:Math.log(1+c),a[i]=l}return this.makeOutput(a,e.shape,"float32")},n.prototype.sin=function(e){V(e,"sin");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.sin(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.cos=function(e){V(e,"cos");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.cos(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.tan=function(e){V(e,"tan");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.tan(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.asin=function(e){V(e,"asin");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.asin(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.acos=function(e){V(e,"acos");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.acos(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atan=function(e){V(e,"atan");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.atan(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atan2=function(e,t){return V([e,t],"atan2"),this.broadcastedBinaryOp(e,t,e.dtype,function(a,o){return Math.atan2(a,o)})},n.prototype.sinh=function(e){V(e,"sinh");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.sinh(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.cosh=function(e){V(e,"cosh");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.cosh(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.tanh=function(e){V(e,"tanh");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=tl(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.asinh=function(e){V(e,"asinh");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.asinh(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.acosh=function(e){V(e,"acosh");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.acosh(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atanh=function(e){V(e,"atanh");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)t[o]=Math.atanh(a[o]);return this.makeOutput(t,e.shape,"float32")},n.prototype.erf=function(e){V(e,"erf");for(var t=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o){var i=Math.sign(a[o]),s=Math.abs(a[o]),u=1/(1+.3275911*s);t[o]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(t,e.shape,"float32")},n.prototype.step=function(e,t){t===void 0&&(t=0),V(e,"step");for(var a=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var s=o[i];isNaN(s)?a[i]=NaN:a[i]=s>0?1:t}return this.makeOutput(a,e.shape,"float32")},n.prototype.fusedConv2d=function(e){var t=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(t,a,o);return i&&(c=this.add(c,i)),s&&(c=Ha(this,c,s,u)),c},n.prototype.conv2d=function(e,t,a){V([e,t],"conv2d");for(var o=a.filterHeight,i=a.filterWidth,s=a.dilationHeight,u=a.dilationWidth,c=a.padInfo.left,l=a.padInfo.top,f=a.dataFormat==="channelsLast",h=ae(a.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],v=f?e.strides[2]:1,m=f?1:e.strides[1],g=h.strides[0],x=f?h.strides[1]:h.strides[2],b=f?h.strides[2]:1,y=f?1:h.strides[1],w=this.readSync(e.dataId),C=this.readSync(t.dataId),S=h.values,k=0;k<a.batchSize;++k)for(var R=k*d,I=k*g,N=0;N<a.outHeight;++N)for(var A=I+N*x,B=N*a.strideHeight-l,M=0;M<o;M++){var L=B+M*s;if(!(L<0||L>=a.inHeight))for(var U=M*t.strides[0],z=R+L*p,W=0;W<a.outWidth;++W)for(var G=A+W*b,H=W*a.strideWidth-c,q=0;q<i;q++){var ee=H+q*u;if(!(ee<0||ee>=a.inWidth))for(var ne=z+ee*v,ie=U+q*t.strides[1],se=0;se<a.inChannels;++se){for(var ce=w[ne+se*m],de=0;de<a.outChannels;++de)S[G+de*y]+=ce*C[ie+de];ie+=a.outChannels}}}return h.toTensor()},n.prototype.conv3d=function(e,t,a){for(var o=a.filterDepth,i=a.filterHeight,s=a.filterWidth,u=a.dilationDepth,c=a.dilationHeight,l=a.dilationWidth,f=a.padInfo.front,h=a.padInfo.left,d=a.padInfo.top,p=ae(a.outShape,e.dtype),v=this.readSync(e.dataId),m=this.readSync(t.dataId),g=p.values,x=0;x<a.batchSize;++x)for(var b=x*e.strides[0],y=x*p.strides[0],w=0;w<a.outDepth;++w)for(var C=y+w*p.strides[1],S=w*a.strideDepth-f,k=0;k<o;k++){var R=S+k*u;if(!(R<0||R>=a.inDepth))for(var I=k*t.strides[0],N=b+R*e.strides[1],A=0;A<a.outHeight;++A)for(var B=C+A*p.strides[2],M=A*a.strideHeight-d,L=0;L<i;L++){var U=M+L*c;if(!(U<0||U>=a.inHeight))for(var z=I+L*t.strides[1],W=N+U*e.strides[2],G=0;G<a.outWidth;++G)for(var H=B+G*a.outChannels,q=G*a.strideWidth-h,ee=0;ee<s;ee++){var ne=q+ee*l;if(!(ne<0||ne>=a.inWidth))for(var ie=z+ee*t.strides[2],se=W+ne*a.inChannels,ce=ie,de=0;de<a.inChannels;++de){for(var fe=v[se+de],pe=0;pe<a.outChannels;++pe)g[H+pe]+=fe*m[ce+pe];ce+=a.outChannels}}}}return p.toTensor()},n.prototype.conv2dDerInput=function(e,t,a){V([e,t],"conv2dDerInput");for(var o=ae(a.inShape,"float32"),i=o.values,s=this.readSync(e.dataId),u=this.readSync(t.dataId),c=t.strides,l=c[0],f=c[1],h=c[2],d=a.batchSize,p=a.filterHeight,v=a.filterWidth,m=a.inChannels,g=a.inHeight,x=a.inWidth,b=a.outChannels,y=a.outHeight,w=a.outWidth,C=a.strideHeight,S=a.strideWidth,k=a.dataFormat,R=p-1-a.padInfo.top,I=v-1-a.padInfo.left,N=k==="channelsLast",A=o.strides[0],B=N?o.strides[1]:o.strides[2],M=N?o.strides[2]:1,L=N?1:o.strides[1],U=e.strides[0],z=N?e.strides[1]:e.strides[2],W=N?e.strides[2]:1,G=N?1:e.strides[1],H=0;H<d;++H)for(var q=0;q<m;++q)for(var ee=0;ee<g;++ee)for(var ne=ee-R,ie=Math.max(0,Math.ceil(ne/C)),se=Math.min(y,(p+ne)/C),ce=0;ce<x;++ce){for(var de=ce-I,fe=Math.max(0,Math.ceil(de/S)),pe=Math.min(w,(v+de)/S),De=0,he=ie;he<se;++he)for(var xe=he*C-ne,me=fe;me<pe;++me)for(var ke=U*H+z*he+W*me,Ce=l*(p-1-xe)+f*(v-1-(me*S-de))+h*q,_e=0;_e<b;++_e)De+=s[ke+G*_e]*u[Ce+_e];i[A*H+B*ee+M*ce+L*q]=De}return o.toTensor()},n.prototype.conv3dDerInput=function(e,t,a){for(var o=ae(a.inShape,"float32"),i=o.values,s=o.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],v=d[1],m=d[2],g=d[3],x=this.readSync(t.dataId),b=t.strides,y=b[0],w=b[1],C=b[2],S=b[3],k=a.batchSize,R=a.filterDepth,I=a.filterHeight,N=a.filterWidth,A=a.inChannels,B=a.inDepth,M=a.inHeight,L=a.inWidth,U=a.outChannels,z=a.outDepth,W=a.outHeight,G=a.outWidth,H=a.strideDepth,q=a.strideHeight,ee=a.strideWidth,ne=R-1-a.padInfo.front,ie=I-1-a.padInfo.top,se=N-1-a.padInfo.left,ce=0;ce<k;++ce)for(var de=0;de<A;++de)for(var fe=0;fe<B;++fe)for(var pe=fe-ne,De=Math.max(0,Math.ceil(pe/H)),he=Math.min(z,(R+pe)/H),xe=0;xe<M;++xe)for(var me=xe-ie,ke=Math.max(0,Math.ceil(me/q)),Ce=Math.min(W,(I+me)/q),_e=0;_e<L;++_e){for(var Cn=_e-se,_n=Math.max(0,Math.ceil(Cn/ee)),rn=Math.min(G,(N+Cn)/ee),Rt=0,Wn=De;Wn<he;++Wn)for(var Qn=Wn*H-pe,zn=ke;zn<Ce;++zn)for(var It=zn*q-me,Un=_n;Un<rn;++Un)for(var Ca=p*ce+v*Wn+m*zn+g*Un,kt=y*(R-1-Qn)+w*(I-1-It)+C*(N-1-(Un*ee-Cn))+S*de,En=0;En<U;++En)Rt+=h[Ca+En]*x[kt+En];i[u*ce+c*fe+l*xe+f*_e+de]=Rt}return o.toTensor()},n.prototype.conv2dDerFilter=function(e,t,a){V([e,t],"conv2dDerFilter");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=a.dataFormat==="channelsLast",l=ae(a.filterShape,"float32"),f=a.padInfo.left,h=a.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(t),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/o)),g=Math.min(a.outHeight,(a.inHeight+h-v)/o),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((f-x)/i)),y=Math.min(a.outWidth,(a.inWidth+f-x)/i),w=0;w<a.inChannels;++w)for(var C=0;C<a.outChannels;++C){for(var S=0,k=0;k<a.batchSize;++k)for(var R=m;R<g;++R)for(var I=v+R*o-h,N=b;N<y;++N){var A=x+N*i-f;S+=c?d.get(k,I,A,w)*p.get(k,R,N,C):d.get(k,w,I,A)*p.get(k,C,R,N)}l.set(S,v,x,w,C)}return l.toTensor()},n.prototype.conv3dDerFilter=function(e,t,a){for(var o=a.strideDepth,i=a.strideHeight,s=a.strideWidth,u=a.filterDepth,c=a.filterHeight,l=a.filterWidth,f=ae(a.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],v=d[1],m=d[2],g=d[3],x=this.readSync(t.dataId),b=t.strides,y=b[0],w=b[1],C=b[2],S=b[3],k=this.readSync(e.dataId),R=e.strides,I=R[0],N=R[1],A=R[2],B=R[3],M=a.padInfo.front,L=a.padInfo.left,U=a.padInfo.top,z=0;z<u;++z)for(var W=Math.max(0,Math.ceil((M-z)/o)),G=Math.min(a.outDepth,(a.inDepth+M-z)/o),H=z*p,q=0;q<c;++q)for(var ee=Math.max(0,Math.ceil((U-q)/i)),ne=Math.min(a.outHeight,(a.inHeight+U-q)/i),ie=q*v+H,se=0;se<l;++se)for(var ce=Math.max(0,Math.ceil((L-se)/s)),de=Math.min(a.outWidth,(a.inWidth+L-se)/s),fe=se*m+ie,pe=0;pe<a.inChannels;++pe)for(var De=pe*g+fe,he=0;he<a.outChannels;++he){for(var xe=0,me=0;me<a.batchSize;++me)for(var ke=me*I,Ce=me*y,_e=W;_e<G;++_e)for(var Cn=(z+_e*o-M)*N+ke,_n=_e*w+Ce,rn=ee;rn<ne;++rn)for(var Rt=(q+rn*i-U)*A+Cn,Wn=rn*C+_n,Qn=ce;Qn<de;++Qn){var zn=Qn*S+Wn;xe+=k[(se+Qn*s-L)*B+Rt+pe]*x[zn+he]}h[De+he]=xe}return f.toTensor()},n.prototype.fusedDepthwiseConv2D=function(e){var t=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(t,a,o);return i&&(c=this.add(c,i)),s&&(c=Ha(this,c,s,u)),c},n.prototype.depthwiseConv2D=function(e,t,a){V([e,t],"depthwiseConv2D");for(var o=a.filterHeight,i=a.filterWidth,s=a.dilationHeight,u=a.dilationWidth,c=a.padInfo.left,l=a.padInfo.top,f=a.outChannels/a.inChannels,h=ae(a.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(t.dataId),v=h.values,m=0;m<a.batchSize;++m)for(var g=m*e.strides[0],x=m*h.strides[0],b=0;b<a.outHeight;++b)for(var y=x+b*h.strides[1],w=b*a.strideHeight-c,C=0;C<o;++C){var S=w+C*s;if(!(S<0||S>=a.inHeight))for(var k=C*t.strides[0],R=g+S*e.strides[1],I=0;I<a.outWidth;++I)for(var N=y+I*h.strides[2],A=I*a.strideWidth-l,B=0;B<i;++B){var M=A+B*u;if(!(M<0||M>=a.inWidth))for(var L=k+B*t.strides[1],U=R+M*a.inChannels,z=N,W=L,G=0;G<a.inChannels;++G){for(var H=d[U+G],q=0;q<f;++q)v[z+q]+=H*p[W+q];z+=f,W+=f}}}return h.toTensor()},n.prototype.depthwiseConv2DDerInput=function(e,t,a){V([e,t],"depthwiseConv2DDerInput");for(var o=ae(a.inShape,"float32"),i=o.values,s=o.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],v=h[2],m=this.readSync(t.dataId),g=t.strides,x=g[0],b=g[1],y=g[2],w=a.batchSize,C=a.filterHeight,S=a.filterWidth,k=a.inChannels,R=a.inHeight,I=a.inWidth,N=a.outChannels,A=a.outHeight,B=a.outWidth,M=a.strideHeight,L=a.strideWidth,U=C-1-a.padInfo.top,z=S-1-a.padInfo.left,W=N/k,G=0;G<w;++G)for(var H=0;H<k;++H)for(var q=0;q<R;++q)for(var ee=q-U,ne=Math.max(0,Math.ceil(ee/M)),ie=Math.min(A,(C+ee)/M),se=0;se<I;++se){for(var ce=se-z,de=Math.max(0,Math.ceil(ce/L)),fe=Math.min(B,(S+ce)/L),pe=0,De=ne;De<ie;++De)for(var he=De*M-ee,xe=de;xe<fe;++xe)for(var me=d*G+p*De+v*xe,ke=x*(C-1-he)+b*(S-1-(xe*L-ce))+y*H,Ce=0;Ce<W;++Ce)pe+=f[me+(H*W+Ce)]*m[ke+Ce];i[u*G+c*q+l*se+H]=pe}return o.toTensor()},n.prototype.depthwiseConv2DDerFilter=function(e,t,a){V([e,t],"depthwiseConv2DDerFilter");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=ae(a.filterShape,"float32"),l=a.padInfo.left,f=a.padInfo.top,h=a.outChannels/a.inChannels,d=this.bufferSync(e),p=this.bufferSync(t),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/o)),g=Math.min(a.outHeight,(a.inHeight+f-v)/o),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/i)),y=Math.min(a.outWidth,(a.inWidth+l-x)/i),w=0;w<a.outChannels;++w){for(var C=Math.trunc(w/h),S=w%h,k=0,R=0;R<a.batchSize;++R)for(var I=m;I<g;++I)for(var N=v+I*o-f,A=b;A<y;++A){var B=x+A*i-l;k+=d.get(R,N,B,C)*p.get(R,I,A,w)}c.set(k,v,x,C,S)}return c.toTensor()},n.prototype.tile=function(e,t){return V(e,"tile"),cu(this.bufferSync(e),t)},n.prototype.pad=function(e,t,a){V(e,"pad");var o=t.map(function(h,d){return h[0]+e.shape[d]+h[1]}),i=t.map(function(h){return h[0]}),s=this.bufferSync(e),u=ae(o,e.dtype);a!==0&&u.values.fill(a);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+i[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},n.prototype.transpose=function(e,t){V(e,"transpose");for(var a=new Array(e.rank),o=0;o<a.length;o++)a[o]=e.shape[t[o]];var i=this.readSync(e.dataId),s=ae(a,e.dtype),u=this.bufferSync(e);for(o=0;o<e.size;++o){for(var c=u.indexToLoc(o),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[t[f]];var h=s.locToIndex(l);s.values[h]=i[o]}return s.toTensor()},n.prototype.gather=function(e,t,a){V([e,t],"gather");var o=e.shape.slice(),i=this.readSync(t.dataId);o[a]=i.length;for(var s=ae(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[a]=i[l[a]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},n.prototype.batchToSpaceND=function(e,t,a){V([e],"batchToSpaceND");var o=t.reduce(function(f,h){return f*h}),i=jr(e.shape,t,o),s=qr(i.length,t.length),u=Kr(e.shape,t,o),c=Ys(a,t.length),l=Js(u,a,t.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},n.prototype.spaceToBatchND=function(e,t,a){V([e],"spaceToBatchND");var o=t.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,a);for(var s=1+t.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=jr(u.shape,t,o,!1),l=qr(c.length,t.length,!1),f=Kr(u.shape,t,o,!1);return u.reshape(c).transpose(l).reshape(f)},n.prototype.pool=function(e,t,a){V(e,"pool");for(var o=t.strideHeight,i=t.strideWidth,s=t.dilationHeight,u=t.dilationWidth,c=t.effectiveFilterHeight,l=t.effectiveFilterWidth,f=t.padInfo.top,h=t.padInfo.left,d=a==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),v=ae(t.outShape,e.dtype),m=v.values,g=t.outShape[1]*t.outShape[2]*t.outShape[3],x=t.outShape[2]*t.outShape[3],b=t.outShape[3],y=0;y<t.batchSize;++y)for(var w=y*g,C=y*e.strides[0],S=0;S<t.inChannels;++S)for(var k=0;k<t.outHeight;++k)for(var R=k*o-f,I=Math.max(0,R),N=Math.min(t.inHeight,c+R),A=w+k*x,B=0;B<t.outWidth;++B){for(var M=B*i-h,L=Math.max(0,M),U=Math.min(t.inWidth,l+M),z=d,W=0,G=0,H=I;H<N;H+=s){for(var q=C+H*e.strides[1],ee=L;ee<U;ee+=u){var ne=p[q+ee*e.strides[2]+S];a==="max"&&ne>z?z=ne:a==="avg"&&(W+=ne,G++)}if(isNaN(z))break}m[A+B*b+S]=a==="avg"?W/G:z}return v.toTensor()},n.prototype.maxPool=function(e,t){return this.pool(e,t,"max")},n.prototype.maxPoolPositions=function(e,t){for(var a=ae(t.outShape,"int32"),o=t.strideHeight,i=t.strideWidth,s=t.dilationHeight,u=t.dilationWidth,c=t.effectiveFilterHeight,l=t.effectiveFilterWidth,f=t.padInfo.top,h=t.padInfo.left,d=this.bufferSync(e),p=0;p<t.batchSize;++p)for(var v=0;v<t.inChannels;++v)for(var m=0;m<t.outHeight;++m){for(var g=m*o-f,x=g;x<0;)x+=s;for(var b=Math.min(t.inHeight,c+g),y=0;y<t.outWidth;++y){for(var w=y*i-h,C=w;C<0;)C+=u;for(var S=Math.min(t.inWidth,l+w),k=Number.NEGATIVE_INFINITY,R=-1,I=x;I<b;I+=s)for(var N=I-g,A=C;A<S;A+=u){var B=A-w,M=d.get(p,I,A,v);M>k&&(k=M,R=N*l+B)}a.set(R,p,m,y,v)}}return a.toTensor()},n.prototype.maxPoolBackprop=function(e,t,a,o){V([t,a],"maxPoolBackprop");for(var i=this.maxPoolPositions(t,o),s=o.strideHeight,u=o.strideWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,v=ae(t.shape,"float32"),m=this.bufferSync(i),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var C=y-p,S=w-d,k=0,R=0;R<f;R+=c){var I=(C+R)/s;if(!(I<0||I>=o.outHeight||Math.floor(I)!==I))for(var N=0;N<h;N+=l){var A=(S+N)/u;if(!(A<0||A>=o.outWidth||Math.floor(A)!==A)){var B=f*h-1-m.get(x,I,A,b)===R*h+N?1:0;B!==0&&(k+=g.get(x,I,A,b)*B)}}}v.set(k,x,y,w,b)}return v.toTensor()},n.prototype.avgPoolBackprop=function(e,t,a){V([e,t],"avgPoolBackprop");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=a.dilationHeight,l=a.dilationWidth,f=a.effectiveFilterHeight,h=a.effectiveFilterWidth,d=h-1-a.padInfo.left,p=f-1-a.padInfo.top,v=ae(t.shape,"float32"),m=1/(s*u),g=this.bufferSync(e),x=0;x<a.batchSize;++x)for(var b=0;b<a.inChannels;++b)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var C=y-p,S=w-d,k=0,R=0;R<f;R+=c){var I=(C+R)/o;if(!(I<0||I>=a.outHeight||Math.floor(I)!==I))for(var N=0;N<h;N+=l){var A=(S+N)/i;A<0||A>=a.outWidth||Math.floor(A)!==A||(k+=g.get(x,I,A,b))}}v.set(k*m,x,y,w,b)}return v.toTensor()},n.prototype.pool3d=function(e,t,a){V(e,"pool3d");for(var o=t.strideDepth,i=t.strideHeight,s=t.strideWidth,u=t.dilationDepth,c=t.dilationHeight,l=t.dilationWidth,f=t.effectiveFilterDepth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,p=t.padInfo.front,v=t.padInfo.top,m=t.padInfo.left,g=a==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),b=ae(t.outShape,e.dtype),y=b.values,w=t.outShape[1]*t.outShape[2]*t.outShape[3]*t.outShape[4],C=t.outShape[2]*t.outShape[3]*t.outShape[4],S=t.outShape[3]*t.outShape[4],k=t.outShape[4],R=0;R<t.batchSize;++R)for(var I=R*w,N=R*e.strides[0],A=0;A<t.inChannels;++A)for(var B=0;B<t.outDepth;++B){for(var M=B*o-p,L=M;L<0;)L+=u;for(var U=Math.min(t.inDepth,f+M),z=I+B*C,W=0;W<t.outHeight;++W){for(var G=W*i-v,H=G;H<0;)H+=c;for(var q=Math.min(t.inHeight,h+G),ee=z+W*S,ne=0;ne<t.outWidth;++ne){for(var ie=ne*s-m,se=ie;se<0;)se+=l;for(var ce=Math.min(t.inWidth,d+ie),de=ee+ne*k,fe=g,pe=0,De=0,he=L;he<U;he+=u){for(var xe=N+he*e.strides[1],me=H;me<q;me+=c){for(var ke=xe+me*e.strides[2],Ce=se;Ce<ce;Ce+=l){var _e=x[ke+Ce*e.strides[3]+A];if(a==="max"&&_e>fe?fe=_e:a==="avg"&&(pe+=_e,De++),isNaN(fe))break}if(isNaN(fe))break}if(isNaN(fe))break}y[de+A]=a==="avg"?pe/De:fe}}}return b.toTensor()},n.prototype.avgPool3d=function(e,t){return V(e,"avgPool3d"),this.pool3d(e,t,"avg").toFloat()},n.prototype.avgPool3dBackprop=function(e,t,a){V([e,t],"avgPool3dBackprop");for(var o=a.strideDepth,i=a.strideHeight,s=a.strideWidth,u=a.filterDepth,c=a.filterHeight,l=a.filterWidth,f=a.dilationDepth,h=a.dilationHeight,d=a.dilationWidth,p=a.effectiveFilterDepth,v=a.effectiveFilterHeight,m=a.effectiveFilterWidth,g=p-1-a.padInfo.front,x=m-1-a.padInfo.left,b=v-1-a.padInfo.top,y=ae(t.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),S=0;S<a.batchSize;++S)for(var k=0;k<a.inChannels;++k)for(var R=0;R<a.inDepth;++R)for(var I=0;I<a.inHeight;++I)for(var N=0;N<a.inWidth;++N){for(var A=R-g,B=I-b,M=N-x,L=0,U=0;U<p;U+=f){var z=(A+U)/o;if(!(z<0||z>=a.outDepth||Math.floor(z)!==z))for(var W=0;W<v;W+=h){var G=(B+W)/i;if(!(G<0||G>=a.outHeight||Math.floor(G)!==G))for(var H=0;H<m;H+=d){var q=(M+H)/s;q<0||q>=a.outWidth||Math.floor(q)!==q||(L+=C.get(S,z,G,q,k))}}}y.set(L*w,S,R,I,N,k)}return y.toTensor()},n.prototype.maxPool3d=function(e,t){return V(e,"maxPool3d"),this.pool3d(e,t,"max").toFloat()},n.prototype.maxPool3dPositions=function(e,t){for(var a=ae(t.outShape,"int32"),o=t.strideDepth,i=t.strideHeight,s=t.strideWidth,u=t.dilationDepth,c=t.dilationHeight,l=t.dilationWidth,f=t.effectiveFilterDepth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,p=t.padInfo.front,v=t.padInfo.top,m=t.padInfo.left,g=this.bufferSync(e),x=0;x<t.batchSize;++x)for(var b=0;b<t.inChannels;++b)for(var y=0;y<t.outDepth;++y){for(var w=y*o-p,C=w;C<0;)C+=u;for(var S=Math.min(t.inDepth,f+w),k=0;k<t.outHeight;++k){for(var R=k*i-v,I=R;I<0;)I+=c;for(var N=Math.min(t.inHeight,h+R),A=0;A<t.outWidth;++A){for(var B=A*s-m,M=B;M<0;)M+=l;for(var L=Math.min(t.inWidth,d+B),U=Number.NEGATIVE_INFINITY,z=-1,W=C;W<S;W+=u)for(var G=W-w,H=I;H<N;H+=c)for(var q=H-R,ee=M;ee<L;ee+=l){var ne=ee-B,ie=g.get(x,W,H,ee,b);ie>=U&&(U=ie,z=G*h*d+q*h+ne)}a.set(z,x,y,k,A,b)}}}return a.toTensor()},n.prototype.maxPool3dBackprop=function(e,t,a,o){V([t,a],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(t,o),s=o.strideDepth,u=o.strideHeight,c=o.strideWidth,l=o.dilationDepth,f=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,p=o.effectiveFilterHeight,v=o.effectiveFilterWidth,m=d-1-o.padInfo.front,g=v-1-o.padInfo.left,x=p-1-o.padInfo.top,b=ae(t.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(e),C=0;C<o.batchSize;++C)for(var S=0;S<o.inChannels;++S)for(var k=0;k<o.inDepth;++k)for(var R=0;R<o.inHeight;++R)for(var I=0;I<o.inWidth;++I){for(var N=k-m,A=R-x,B=I-g,M=0,L=0;L<d;L+=l){var U=(N+L)/s;if(!(U<0||U>=o.outDepth||Math.floor(U)!==U))for(var z=0;z<p;z+=f){var W=(A+z)/u;if(!(W<0||W>=o.outHeight||Math.floor(W)!==W))for(var G=0;G<v;G+=h){var H=(B+G)/c;if(!(H<0||H>=o.outWidth||Math.floor(H)!==H)){var q=d*p*v-1-y.get(C,U,W,H,S)===L*p*v+z*v+G?1:0;q!==0&&(M+=w.get(C,U,W,H,S)*q)}}}}b.set(M,C,k,R,I,S)}return b.toTensor()},n.prototype.cast=function(e,t){return ou(e,t,this)},n.prototype.reshape=function(e,t){return ho(e,t)},n.prototype.avgPool=function(e,t){return V(e,"avgPool"),this.pool(e,t,"avg").toFloat()},n.prototype.resizeBilinear=function(e,t,a,o){V(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(Y([s,t,a,l])),d=[o&&t>1?u-1:u,o&&a>1?c-1:c],p=[o&&t>1?t-1:t,o&&a>1?a-1:a],v=0,m=d[0]/p[0],g=d[1]/p[1],x=0;x<s;x++)for(var b=0;b<t;b++)for(var y=m*b,w=Math.floor(y),C=y-w,S=Math.min(u-1,Math.ceil(y)),k=x*e.strides[0]+w*e.strides[1],R=x*e.strides[0]+S*e.strides[1],I=0;I<a;I++)for(var N=g*I,A=Math.floor(N),B=N-A,M=Math.min(c-1,Math.ceil(N)),L=k+A*e.strides[2],U=R+A*e.strides[2],z=k+M*e.strides[2],W=R+M*e.strides[2],G=0;G<l;G++){var H=f[L+G],q=f[U+G],ee=H+(f[z+G]-H)*B,ne=ee+(q+(f[W+G]-q)*B-ee)*C;h[v++]=ne}return He(h,[s,t,a,l])},n.prototype.resizeBilinearBackprop=function(e,t,a){V([e,t],"resizeBilinearBackprop");for(var o=t.shape,i=o[0],s=o[1],u=o[2],c=o[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=[a&&f>1?s-1:s,a&&h>1?u-1:u],v=[a&&f>1?f-1:f,a&&h>1?h-1:h],m=p[0]/v[0],g=p[1]/v[1],x=this.readSync(e.dataId),b=0,y=0;y<i;y++)for(var w=y*t.strides[0],C=0;C<f;C++)for(var S=C*m,k=Math.floor(S),R=Math.min(Math.ceil(S),s-1),I=w+k*t.strides[1],N=w+R*t.strides[1],A=S-k,B=1-A,M=0;M<h;M++)for(var L=M*g,U=Math.floor(L),z=Math.min(Math.ceil(L),u-1),W=L-U,G=1-W,H=I+U*t.strides[2],q=I+z*t.strides[2],ee=N+U*t.strides[2],ne=N+z*t.strides[2],ie=B*G,se=B*W,ce=A*G,de=A*W,fe=0;fe<c;fe++){var pe=x[b++];d[H+fe]+=pe*ie,d[q+fe]+=pe*se,d[ee+fe]+=pe*ce,d[ne+fe]+=pe*de}return Qe(d,[i,u,s,c],t.dtype)},n.prototype.resizeNearestNeighbor=function(e,t,a,o){V(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(s*t*a*l),d=[o&&t>1?u-1:u,o&&a>1?c-1:c],p=[o&&t>1?t-1:t,o&&a>1?a-1:a],v=d[0]/p[0],m=d[1]/p[1],g=0,x=0;x<s;x++)for(var b=x*e.strides[0],y=0;y<t;y++)for(var w=v*y,C=b+Math.min(u-1,o?Math.round(w):Math.floor(w))*e.strides[1],S=0;S<a;S++)for(var k=m*S,R=C+Math.min(c-1,o?Math.round(k):Math.floor(k))*e.strides[2],I=0;I<l;I++){var N=f[R+I];h[g++]=N}return He(h,[s,t,a,l],e.dtype)},n.prototype.resizeNearestNeighborBackprop=function(e,t,a){V([e,t],"resizeNearestNeighborBackprop");for(var o=t.shape,i=o[0],s=o[1],u=o[2],c=o[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(e.dataId),v=[a&&f>1?s-1:s,a&&h>1?u-1:u],m=[a&&f>1?f-1:f,a&&h>1?h-1:h],g=v[0]/m[0],x=v[1]/m[1],b=1/g,y=1/x,w=2*Math.ceil(b)+2,C=2*Math.ceil(y)+2,S=0;S<i;S++)for(var k=S*t.strides[0],R=0;R<s;R++)for(var I=k+R*t.strides[1],N=Math.floor(R*b),A=Math.floor(N-w/2),B=0;B<u;B++)for(var M=I+B*t.strides[2],L=Math.floor(B*y),U=Math.floor(L-C/2),z=0;z<c;z++){for(var W=0,G=0;G<w;G++){var H=G+A;if(!(H<0||H>=f)){var q=k+H*e.strides[1],ee=H*g;if(R===Math.min(s-1,a?Math.round(ee):Math.floor(ee)))for(var ne=0;ne<C;ne++){var ie=ne+U;if(!(ie<0||ie>=h)){var se=q+ie*e.strides[2],ce=ie*x;B===Math.min(u-1,a?Math.round(ce):Math.floor(ce))&&(W+=p[se+z])}}}}d[M+z]=W}return Qe(d,t.shape,t.dtype)},n.prototype.batchNormalization=function(e,t,a,o,i,s){V([e,t,a,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=this.readSync(a.dataId),f=i?this.readSync(i.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,v=f.length,m=l.length,g=c.length,x=0,b=0,y=0,w=0,C=0;C<u.length;++C)d[C]=h[x++]+(u[C]-c[b++])*f[y++]/Math.sqrt(l[w++]+o),x>=p&&(x=0),b>=g&&(b=0),y>=v&&(y=0),w>=m&&(w=0);return Qe(d,e.shape)},n.prototype.localResponseNormalization4D=function(e,t,a,o,i){V(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(m){for(var g=m%s,x=m-g+Math.max(0,g-t),b=m-g+Math.min(g+t,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var d=0;d<l;d++){var p=h(d),v=c[d]*Math.pow(a+o*p,-i);f[d]=v}return Qe(f,e.shape)},n.prototype.LRNGrad=function(e,t,a,o,i,s,u){V(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(t.dataId),h=this.readSync(a.dataId),d=new Float32Array(e.size),p=e.size,v=0;v<p;v++){for(var m=v%c,g=v-m+Math.max(0,m-o),x=v-m+Math.min(c,m+o+1),b=0,y=g;y<x;y++)b+=Math.pow(f[y],2);for(b=s*b+i,y=g;y<x;y++){var w=-2*s*u*f[y]*h[v]/b;v===y&&(w+=Math.pow(b,-u)),w*=l[v],d[y]+=w}}return Qe(d,e.shape)},n.prototype.multinomial=function(e,t,a,o){V(e,"multinomial");for(var i=t?e:Kn(e),s=i.shape[0],u=i.shape[1],c=we([s,a],"int32"),l=this.readSync(c.dataId),f=this.readSync(i.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+f[d+v];for(var m=sa(o.toString()),g=h*a,x=0;x<a;++x){var b=m();l[g+x]=p.length;for(var y=0;y<p.length;y++)if(b<p[y]){l[g+x]=y;break}}}return c},n.prototype.oneHot=function(e,t,a,o){V(e,"oneHot");var i=new Float32Array(e.size*t);i.fill(o);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<t&&(i[u*t+s[u]]=a);return at(i,[e.size,t],"int32")},n.prototype.nonMaxSuppression=function(e,t,a,o,i){return V(e,"nonMaxSuppression"),No(this.readSync(e.dataId),this.readSync(t.dataId),a,o,i)},n.prototype.fft=function(e){return this.fftBatch(e,!1)},n.prototype.ifft=function(e){return this.fftBatch(e,!0)},n.prototype.fftBatch=function(e,t){for(var a=e.shape[0],o=e.shape[1],i=ae(e.shape,"float32"),s=ae(e.shape,"float32"),u=dn(e).as2D(a,o),c=Dn(e).as2D(a,o),l=0;l<a;l++)for(var f=u.slice([l,0],[1,o]),h=c.slice([l,0],[1,o]),d=Ve(f,h),p=this.readSync(this.fftImpl(d,t).dataId),v=0;v<o;v++){var m=zi(p,v);i.values[l*o+v]=m.real,s.values[l*o+v]=m.imag}return Ve(i.toTensor(),s.toTensor()).as2D(a,o)},n.prototype.fftImpl=function(e,t){var a=e.as1D(),o=a.size;if(this.isExponentOf2(o)){var i=this.fftRadix2(a,o,t).as2D(e.shape[0],e.shape[1]);return t&&(i=Ve(dn(i).div(j(o)),Dn(i).div(j(o)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,o,t));return Ve(u.real,u.imag).as2D(e.shape[0],e.shape[1])},n.prototype.isExponentOf2=function(e){return(e&e-1)==0},n.prototype.fftRadix2=function(e,t,a){if(t===1)return e;var o=this.readSync(e.dataId),i=t/2,s=function(g){for(var x=Math.ceil(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(o),u=Ve(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(o),l=Ve(c.real,c.imag).as1D();u=this.fftRadix2(u,i,a),l=this.fftRadix2(l,i,a);var f=function(g,x){for(var b=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(x?2:-2)*Math.PI*(w/g);b[w]=Math.cos(C),y[w]=Math.sin(C)}return{real:b,imag:y}}(t,a),h=Ve(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),v=dn(d).concat(dn(p)),m=Dn(d).concat(Dn(p));return Ve(v,m).as1D()},n.prototype.fourierTransformByMatmul=function(e,t,a){for(var o=new Float32Array(2*t),i=0;i<t;i++){for(var s=0,u=0,c=0;c<t;c++){var l=Of(i*c,t,a),f=zi(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}a&&(s/=t,u/=t),Mf(o,s,u,i)}return o},n.prototype.depthToSpace=function(e,t,a){E(a==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+a}),E(t>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+t});for(var o=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*t,l=s*t,f=u/(t*t),h=this.readSync(e.dataId),d=new Float32Array(o*c*l*f),p=0,v=0;v<o;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/t),x=m%t,b=0;b<l;++b)for(var y=Math.floor(b/t),w=(x*t+b%t)*f,C=0;C<f;++C){var S=C+w+u*(y+s*(g+i*v));d[p++]=h[S]}return Qe(d,[o,c,l,f])},n.prototype.broadcastedBinaryOp=function(e,t,a,o){var i=le(e.shape,t.shape),s=ae(i,a),u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=nt(e.shape,i),f=nt(t.shape,i),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=o(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),v=this.bufferSync(t),m=function(g){var x=s.indexToLoc(g),b=x.slice(-e.rank);l.forEach(function(S){return b[S]=0});var y=p.locToIndex(b),w=x.slice(-t.rank);f.forEach(function(S){return w[S]=0});var C=v.locToIndex(w);h[g]=o(u[y],c[C])};for(d=0;d<h.length;++d)m(d)}return s.toTensor()},n.prototype.broadcastedBinaryComplexOp=function(e,t,a){var o=le(e.shape,t.shape),i=ae(o,"float32"),s=ae(o,"float32"),u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=nt(e.shape,o),f=nt(t.shape,o),h=i.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var v=p%u.length,m=p%c.length,g=a(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);h[p]=g.real,d[p]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(t.dataId).complexTensors.real),y=function(w){var C=i.indexToLoc(w),S=C.slice(-e.rank);l.forEach(function(A){return S[A]=0});var k=x.locToIndex(S),R=C.slice(-t.rank);f.forEach(function(A){return R[A]=0});var I=b.locToIndex(R),N=a(u[2*k],u[2*k+1],c[2*I],c[2*I+1]);h[w]=N.real,d[w]=N.imag};for(p=0;p<h.length;p++)y(p)}return this.complex(i.toTensor(),s.toTensor())},n.prototype.split=function(e,t,a){return uu(e,t,a)},n.prototype.dispose=function(){},n.prototype.floatPrecision=function(){return 32},n.prototype.epsilon=function(){return 1e-7},n.prototype.cropAndResize=function(e,t,a,o,i,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=t.shape[0],p=o[0],v=o[1],m=ae([d,p,v,h],"float32"),g=this.readSync(t.dataId),x=this.readSync(a.dataId),b=this.readSync(e.dataId),y=e.strides,w=m.strides,C=0;C<d;C++){var S=4*C,k=g[S],R=g[S+1],I=g[S+2],N=g[S+3],A=x[C];if(!(A>=c))for(var B=p>1?(I-k)*(l-1)/(p-1):0,M=v>1?(N-R)*(f-1)/(v-1):0,L=0;L<p;L++){var U=p>1?k*(l-1)+L*B:.5*(k+I)*(l-1);if(U<0||U>l-1)for(var z=0;z<v;z++)for(var W=0;W<h;W++){var G=W+z*w[2]+L*w[1]+C*w[0];m.values[G]=s}else if(i==="bilinear"){var H=Math.floor(U),q=Math.ceil(U),ee=U-H;for(z=0;z<v;z++)if((he=v>1?R*(f-1)+z*M:.5*(R+N)*(f-1))<0||he>f-1)for(W=0;W<h;W++)G=W+z*w[2]+L*w[1]+C*w[0],m.values[G]=s;else{var ne=Math.floor(he),ie=Math.ceil(he),se=he-ne;for(W=0;W<h;W++){var ce=b[G=W+ne*y[2]+H*y[1]+A*y[0]],de=b[G=W+ie*y[2]+H*y[1]+A*y[0]],fe=b[G=W+ne*y[2]+q*y[1]+A*y[0]],pe=ce+(de-ce)*se,De=fe+(b[G=W+ie*y[2]+q*y[1]+A*y[0]]-fe)*se;G=W+z*w[2]+L*w[1]+C*w[0],m.values[G]=pe+(De-pe)*ee}}}else for(z=0;z<v;++z){var he;if((he=v>1?R*(f-1)+z*M:.5*(R+N)*(f-1))<0||he>f-1)for(W=0;W<h;W++)G=W+z*w[2]+L*w[1]+C*w[0],m.values[G]=s;else{var xe=Math.round(he),me=Math.round(U);for(W=0;W<h;W++){var ke=W+xe*y[2]+me*y[1]+A*y[0],Ce=W+z*w[2]+L*w[1]+C*w[0];m.values[Ce]=b[ke]}}}}}return m.toTensor()},n.prototype.sparseToDense=function(e,t,a,o){var i=Xr(0,e,a),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,f=i.outputSize;return this.scatter(e,t,a,f,c,u,s,l,o,!1)},n.prototype.gatherND=function(e,t){var a=t.shape,o=a[a.length-1],i=Qs(e,t),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return He([],s,e.dtype);for(var f=new ar([u,c],e.dtype),h=this.readSync(t.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var v=[],m=0,g=0;g<o;g++){var x=h[p*o+g];m+=x*l[g],v.push(x)}if(m<0||m>=e.size/c)throw new Error("Invalid indices: "+v+" does not index into "+e.shape);for(var b=0;b<c;b++)f.values[p*c+b]=d[m*c+b]}return f.toTensor().reshape(s)},n.prototype.scatterND=function(e,t,a){var o=Xr(0,e,a),i=o.sliceRank,s=o.numUpdates,u=o.sliceSize,c=o.strides,l=o.outputSize,f=j(0);return this.scatter(e,t,a,l,u,s,i,c,f,!0)},n.prototype.fill=function(e,t,a){var o=Lr(a=a||hr(t),Y(e));return o.fill(t),T.makeTensor(o,e,a,this)},n.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},n.prototype.zerosLike=function(e){var t=Lr(e.dtype,Y(e.shape));return this.makeOutput(t,e.shape,e.dtype)},n.prototype.linspace=function(e,t,a){return iu(e,t,a)},n.prototype.scatter=function(e,t,a,o,i,s,u,c,l,f){var h=[o/i,i],d=this.readSync(e.dataId),p=this.readSync(t.dataId);if(o===0)return He([],a,t.dtype);var v=new ar(h,t.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],x=0,b=0;b<u;b++){var y=d[m*u+b];g.push(y),x+=y*c[b]}if(x<0||x>=o/i)throw new Error("Invalid indices: "+g+" does not index into "+a);for(var w=0;w<i;w++)f?v.values[x*i+w]+=p[m*i+w]:v.values[x*i+w]=t.rank===0?p[0]:p[m*i+w]}return v.toTensor().reshape(a)},n}(ru);T.registerBackend("cpu",function(){return new tm},1);for(var ja=0,us=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs,a=n,o=a.boxes,i=a.scores,s=t,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;V(o,"NonMaxSuppressionWithScore");var d=Fo(h.data.get(o.dataId).values,h.data.get(i.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n.x,a=e;V(t,"square");for(var o=a.data.get(t.dataId).values,i=new Float32Array(o.length),s=0;s<o.length;++s){var u=o[s];i[s]=u*u}return{dataId:a.write(i,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}},{kernelName:sr,backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n,a=t.a,o=t.b,i=e;V([a,o],sr);var s=i.data.get(a.dataId).values,u=i.data.get(o.dataId).values,c=function(h,d,p,v,m,g){var x=le(h,d),b=x.length,y=Nn(x),w=rr(m,Y(x)),C=h.length,S=d.length,k=Nn(h),R=Nn(d),I=nt(h,x),N=nt(d,x);if(I.length+N.length===0)for(var A=0;A<w.length;++A)w[A]=g(p[A%p.length],v[A%v.length]);else{var B=function(M){var L=fl(M,b,y),U=L.slice(-C);I.forEach(function(H){return U[H]=0});var z=Ti(U,C,k),W=L.slice(-S);N.forEach(function(H){return W[H]=0});var G=Ti(W,S,R);w[M]=g(p[z],v[G])};for(A=0;A<w.length;++A)B(A)}return[w,x]}(a.shape,o.shape,s,u,a.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:i.write(l,f,a.dtype),shape:f,dtype:a.dtype}}}];ja<us.length;ja++)Ts(us[ja]);var Dt,rm=function(r){this.variableNames=["A"];var n=Ke(),e=r[0],t=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+t+".0, "+e+`.0);

        vec4 values = `+n.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},am=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Ke(),e=r[0],t=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+t+".0, "+e+`.0);
            vec4 values = `+n.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+n.output+` = result;
      }
    `};for(var qa=0,cs=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs,a=n.pixels,o=t.numChannels,i=typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement,u=i?[a.videoWidth,a.videoHeight]:[a.width,a.height],c=u[0],l=u[1],f=[l,c],h=[l,c,o];(s||i)&&(Dt==null&&(Dt=document.createElement("canvas").getContext("2d")),Dt.canvas.width=c,Dt.canvas.height=l,Dt.drawImage(a,0,0,c,l),a=Dt.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=sn.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),a);var p=O().getBool("WEBGL_PACK")?new am(h):new rm(h),v=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs;Vr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var a=n,o=a.boxes,i=a.scores,s=t,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=Fo(h.readSync(o.dataId),h.readSync(i.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n.x,a=e,o=new oe(t.shape,"return x * x;");return a.runWebGLProgram(o,[t],t.dtype)}},{kernelName:sr,backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n,a=t.a,o=t.b,i=e,s=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn("return (a - b) * (a - b);",a.shape,o.shape):new Se("return (a - b) * (a - b);",a.shape,o.shape);return i.compileAndRun(s,[a,o])}}];qa<cs.length;qa++)Ts(cs[qa]);for(var Ka=0,ls=[{kernelName:"Square",gradFunc:function(r,n){var e=n[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:sr,gradFunc:function(r,n){var e=n[0],t=n[1],a=j(2);return{a:function(){return $e(r,$e(a,Be(e,t)))},b:function(){return $e(r,$e(a,Be(t,e)))}}}}];Ka<ls.length;Ka++)el(ls[Ka]);var om=function(){function r(){}return r.prototype.fetch=function(n,e){return fetch(n,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(n,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(n)},r.prototype.decode=function(n,e){return new TextDecoder(e).decode(n)},r}();O().get("IS_BROWSER")&&O().setPlatform("browser",new om);var Xa,im=function(){return require("node-fetch")},sm=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(n,e){return O().global.fetch!=null?O().global.fetch(n,e):(Xa==null&&(Xa=im()),Xa(n,e))},r.prototype.now=function(){var n=process.hrtime();return 1e3*n[0]+n[1]/1e6},r.prototype.encode=function(n,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(n)},r.prototype.decode=function(n,e){return n.length===0?"":new this.util.TextDecoder(e).decode(n)},r}();O().get("IS_NODE")&&O().setPlatform("node",new sm);var mo={float32:4,int32:4,uint16:2,uint8:1,bool:1},na=4;function ec(r,n){for(var e={},t=0,a=function(s){var u=s.name,c=s.dtype,l=s.shape,f=Y(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=mo[d.dtype],v=r.slice(t,t+f*p),m=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")h=Float32Array.from(m,function(C){return C*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(m,function(C){return Math.round(C*d.scale+d.min)})}t+=f*p}else if(c==="string"){var g=Y(s.shape);h=[];for(var x=0;x<g;x++){var b=new Uint32Array(r.slice(t,t+na))[0];t+=na;var y=new Uint8Array(r.slice(t,t+b));h.push(y),t+=b}}else{var w=mo[c];if(v=r.slice(t,t+f*w),c==="float32")h=new Float32Array(v);else if(c==="int32")h=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(v)}t+=f*w}e[u]=He(h,l,c)},o=0,i=n;o<i.length;o++)a(i[o]);return e}function um(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var n=0,e=[];r.forEach(function(o){if(n+=o.byteLength,e.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+o.constructor.name)});var t=new Uint8Array(n),a=0;return e.forEach(function(o){t.set(new Uint8Array(o.buffer),a),a+=o.byteLength}),t.buffer}var go=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function fs(r){return go?Buffer.byteLength(r):new Blob([r]).size}function Qo(r){var n=0;r.forEach(function(a){n+=a.byteLength});var e=new Uint8Array(n),t=0;return r.forEach(function(a){e.set(new Uint8Array(a),t),t+=a.byteLength}),e.buffer}function hs(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var n=r.split("/");return n[n.length-1]}function xr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:fs(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:fs(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var un=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(n){r.getInstance().saveRouters.push(n)},r.registerLoadRouter=function(n){r.getInstance().loadRouters.push(n)},r.getSaveHandlers=function(n){return r.getHandlers(n,"save")},r.getLoadHandlers=function(n,e){return r.getHandlers(n,"load",e)},r.getHandlers=function(n,e,t){var a=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(o){var i=o(n,t);i!==null&&a.push(i)}),a},r}(),Wt="://",ot=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(n,e){E(n!=null,function(){return"scheme must not be undefined or null."}),n.endsWith(Wt)&&(n=n.slice(0,n.indexOf(Wt))),E(n.length>0,function(){return"scheme must not be an empty string."});var t=r.getInstance();E(t.managers[n]==null,function(){return"A model store manager is already registered for scheme '"+n+"'."}),t.managers[n]=e},r.getManager=function(n){var e=this.getInstance().managers[n];if(e==null)throw new Error("Cannot find model manager for scheme '"+n+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function Or(r){if(r.indexOf(Wt)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+ot.getSchemes().join(","));return{scheme:r.split(Wt)[0],path:r.split(Wt)[1]}}function ds(r,n,e){return e===void 0&&(e=!1),X(this,void 0,void 0,function(){var t,a,o,i,s,u,c,l,f;return $(this,function(h){switch(h.label){case 0:return E(r!==n,function(){return"Old path and new path are the same: '"+r+"'"}),E((t=un.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(t.length<2,function(){return"Copying failed because more than one ("+t.length+") load handlers for source URL "+r+"."}),a=t[0],E((o=un.getSaveHandlers(n)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+n+"."}),E(o.length<2,function(){return"Copying failed because more than one ("+t.length+") save handlers for destination URL "+n+"."}),i=o[0],s=Or(r).scheme,u=Or(r).path,c=s===Or(r).scheme,[4,a.load()];case 1:return l=h.sent(),e&&c?[4,ot.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,i.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,ot.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var mt="models_store",tt="model_info_store";function nc(){if(!O().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,n=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(n==null)throw new Error("The current browser does not appear to support IndexedDB.");return n}function yo(r){var n=r.result;n.createObjectStore(mt,{keyPath:"modelPath"}),n.createObjectStore(tt,{keyPath:"modelPath"})}var zt=function(){function r(n){if(this.indexedDB=nc(),n==null||!n)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=n}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){return $(this,function(e){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,n)]})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){return $(this,function(n){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(n,e){var t=this;return new Promise(function(a,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return yo(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(mt,"readonly"),c=u.objectStore(mt).get(t.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),o(new Error("Cannot find model with path '"+t.modelPath+"' in IndexedDB."));a(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),o(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=xr(e),h=s.transaction(tt,"readwrite"),d=h.objectStore(tt),p=d.put({modelPath:t.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var v=(l=s.transaction(mt,"readwrite")).objectStore(mt).put({modelPath:t.modelPath,modelArtifacts:e,modelArtifactsInfo:f});v.onsuccess=function(){return a({modelArtifactsInfo:f})},v.onerror=function(m){var g=(d=h.objectStore(tt)).delete(t.modelPath);g.onsuccess=function(){return s.close(),o(v.error)},g.onerror=function(x){return s.close(),o(v.error)}}},p.onerror=function(v){return s.close(),o(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return o(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),ps=function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(zt.URL_SCHEME)?(n=r.slice(zt.URL_SCHEME.length),new zt(n)):null;var n};un.registerSaveRouter(ps),un.registerLoadRouter(ps);var cm=function(){function r(){this.indexedDB=nc()}return r.prototype.listModels=function(){return X(this,void 0,void 0,function(){var n=this;return $(this,function(e){return[2,new Promise(function(t,a){var o=n.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return yo(o)},o.onsuccess=function(){var i=o.result,s=i.transaction(tt,"readonly"),u=s.objectStore(tt).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}t(c)},u.onerror=function(c){return i.close(),a(u.error)},s.oncomplete=function(){return i.close()}},o.onerror=function(i){return a(o.error)}})]})})},r.prototype.removeModel=function(n){return X(this,void 0,void 0,function(){var e=this;return $(this,function(t){var a;return n=(a=n).startsWith(zt.URL_SCHEME)?a.slice(zt.URL_SCHEME.length):a,[2,new Promise(function(o,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return yo(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(tt,"readwrite"),f=l.objectStore(tt),h=f.get(n);h.onsuccess=function(){if(h.result==null)return c.close(),i(new Error("Cannot find model with path '"+n+"' in IndexedDB."));var d=f.delete(n),p=function(){var v=(u=c.transaction(mt,"readwrite")).objectStore(mt).delete(n);v.onsuccess=function(){return o(h.result.modelArtifactsInfo)},v.onerror=function(m){return i(h.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),i(h.error)}},h.onerror=function(d){return c.close(),i(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(O().getBool("IS_BROWSER"))try{ot.registerManager(zt.URL_SCHEME,new cm)}catch{}var Hn="/",Mt="tensorflowjs_models",tc="info",lm="model_topology",fm="weight_specs",hm="weight_data",dm="model_metadata";function rc(r){return{info:[Mt,r,tc].join(Hn),topology:[Mt,r,lm].join(Hn),weightSpecs:[Mt,r,fm].join(Hn),weightData:[Mt,r,hm].join(Hn),modelMetadata:[Mt,r,dm].join(Hn)}}function pm(r){var n=r.split(Hn);if(n.length<3)throw new Error("Invalid key format: "+r);return n.slice(1,n.length-1).join(Hn)}var Ut=function(){function r(n){if(!O().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,n==null||!n)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=n,this.keys=rc(this.modelPath)}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){var e,t,a;return $(this,function(o){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(n.modelTopology),t=JSON.stringify(n.weightSpecs),a=xr(n);try{return this.LS.setItem(this.keys.info,JSON.stringify(a)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,t),this.LS.setItem(this.keys.weightData,function(i){if(go)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(n.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,userDefinedMetadata:n.userDefinedMetadata})),[2,{modelArtifactsInfo:a}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+a.modelTopologyBytes+", weightSpecsBytes="+a.weightSpecsBytes+", weightDataBytes="+a.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){var n,e,t,a,o,i,s;return $(this,function(u){if((n=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(n.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(t=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=t,(a=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=a,(o=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(o),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(go){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),vs=function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Ut.URL_SCHEME)?(n=r.slice(Ut.URL_SCHEME.length),new Ut(n)):null;var n};un.registerSaveRouter(vs),un.registerLoadRouter(vs);var vm=function(){function r(){E(O().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return X(this,void 0,void 0,function(){var n,e,t,a,o,i;return $(this,function(s){for(n={},e=Mt+Hn,t=Hn+tc,a=0;a<this.LS.length;++a)(o=this.LS.key(a)).startsWith(e)&&o.endsWith(t)&&(i=pm(o),n[i]=JSON.parse(this.LS.getItem(o)));return[2,n]})})},r.prototype.removeModel=function(n){return X(this,void 0,void 0,function(){var e,t;return $(this,function(a){var o;if(n=(o=n).startsWith(Ut.URL_SCHEME)?o.slice(Ut.URL_SCHEME.length):o,e=rc(n),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+n+"'");return t=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,t]})})},r}();if(O().getBool("IS_BROWSER"))try{ot.registerManager(Ut.URL_SCHEME,new vm)}catch{}var mm="model",gm=".json",ym=".weights.bin";function ms(r){return new Promise(function(n){return setTimeout(n)}).then(r)}var $a=function(){function r(n){if(!O().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");n.startsWith(r.URL_SCHEME)&&(n=n.slice(r.URL_SCHEME.length)),n!=null&&n.length!==0||(n=mm),this.modelTopologyFileName=n+gm,this.weightDataFileName=n+ym}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){var e,t,a,o,i,s;return $(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([n.weightData],{type:"application/octet-stream"})),!(n.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return t=[{paths:["./"+this.weightDataFileName],weights:n.weightSpecs}],a={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t},o=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=o,[4,ms(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),n.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,ms(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:xr(n)}]}})})},r.URL_SCHEME="downloads://",r}(),xm=function(){function r(n){if(n==null||n.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+n);this.files=n}return r.prototype.load=function(){return X(this,void 0,void 0,function(){var n,e,t=this;return $(this,function(a){return n=this.files[0],e=this.files.slice(1),[2,new Promise(function(o,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&o({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=t.checkManifestAndWeightFiles(f,e)}catch(m){return void i(m)}var d=[],p=[],v=[];f.forEach(function(m){m.paths.forEach(function(g){p.push(g),v.push(null)}),d.push.apply(d,m.weights)}),f.forEach(function(m){m.paths.forEach(function(g){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=p.indexOf(g);v[w]=y,v.indexOf(null)===-1&&o({modelTopology:l,weightSpecs:d,weightData:Qo(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return i("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(h[g])})})}else i(new Error("weightManifest field is missing from file "+n.name))}else i(new Error("modelTopology field is missing from file "+n.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+n.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(n)})]})})},r.prototype.checkManifestAndWeightFiles=function(n,e){for(var t=[],a=e.map(function(u){return hs(u.name)}),o={},i=0,s=n;i<s.length;i++)s[i].paths.forEach(function(u){var c=hs(u);if(t.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(t.push(c),a.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");o[u]=e[a.indexOf(c)]});if(t.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+t.length+") and the number of weight files provided ("+e.length+").");return o},r}();function gs(r,n,e,t){(function(o){E(o!=null&&Array.isArray(o)&&o.length>0,function(){return"promises must be a none empty array"})})(r),function(o,i){E(o>=0&&o<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+o}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=o,function(){return"startFraction must be no more than endFraction, but got startFraction "+o+" and endFraction "+i})}(e=e??0,t=t??1);var a=0;return Promise.all(r.map(function(o){return o.then(function(i){var s=e+ ++a/r.length*(t-e);return n(s),i}),o}))}function ac(r,n){return X(this,void 0,void 0,function(){var e,t,a,o,i,s,u,c,l;return $(this,function(f){switch(f.label){case 0:return n==null&&(n={}),e=n.fetchFunc==null?O().platform.fetch:n.fetchFunc,t=r.map(function(h){return e(h,n.requestInit,{isBinary:!0})}),a=0,o=.5,n.onProgress!=null?[3,2]:[4,Promise.all(t)];case 1:return i=f.sent(),[3,4];case 2:return[4,gs(t,n.onProgress,a,o)];case 3:i=f.sent(),f.label=4;case 4:return s=i.map(function(h){return h.arrayBuffer()}),u=.5,c=1,n.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,gs(s,n.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function ys(r){var n=this;return function(e,t,a){return t===void 0&&(t=""),X(n,void 0,void 0,function(){var o,i,s,u,c,l,f,h,d,p;return $(this,function(v){switch(v.label){case 0:if(o=e.map(function(){return!1}),i={},s=a!=null?a.map(function(){return!1}):[],u=[],e.forEach(function(m,g){var x=0;m.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=mo[y]*Y(b.shape),C=function(){o[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};a!=null?a.forEach(function(S,k){S===b.name&&(C(),s[k]=!0)}):C(),u.push(b.name),x+=w})}),!s.every(function(m){return m}))throw c=a.filter(function(m,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=o.reduce(function(m,g,x){return g&&m.push(x),m},[]),f=[],l.forEach(function(m){e[m].paths.forEach(function(g){var x=t+(t.endsWith("/")?"":"/")+g;f.push(x)})}),[4,r(f)];case 1:return h=v.sent(),d={},p=0,l.forEach(function(m){for(var g=e[m].paths.length,x=0,b=0;b<g;b++)x+=h[p+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),C=0,S=0;S<g;S++){var k=new Uint8Array(h[p+S]);w.set(k,C),C+=k.byteLength}i[m].forEach(function(R){var I=ec(y.slice(R.groupOffset,R.groupOffset+R.sizeBytes),[R.manifestEntry]);for(var N in I)d[N]=I[N]}),p+=g}),[2,d]}})})}}un.registerSaveRouter(function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith($a.URL_SCHEME)?function(n){return n===void 0&&(n="model"),new $a(n)}(r.slice($a.URL_SCHEME.length)):null});var oc=function(){function r(n,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=O().platform.fetch,E(n!=null&&n.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(n)&&E(n.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+n.length+")."}),this.path=n,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){var e,t,a,o;return $(this,function(i){switch(i.label){case 0:if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,t=[{paths:["./model.weights.bin"],weights:n.weightSpecs}],a={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,userDefinedMetadata:n.userDefinedMetadata,weightsManifest:t},e.body.append("model.json",new Blob([JSON.stringify(a)],{type:"application/json"}),"model.json"),n.weightData!=null&&e.body.append("model.weights.bin",new Blob([n.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((o=i.sent()).ok)return[2,{modelArtifactsInfo:xr(n),responses:[o]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+o.status+".")}})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){var n,e,t,a,o,i,s,u,c,l,f,h;return $(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(n=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+n.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,n.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),t="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t);case 5:if(a=e.modelTopology,o=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,a==null&&o==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return o==null?[3,7]:[4,this.loadWeights(o)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:a,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(n){return X(this,void 0,void 0,function(){var e,t,a,o,i,s,u,c,l,f,h;return $(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,t=function(p){var v=p.lastIndexOf("/"),m=p.lastIndexOf("?"),g=p.substring(0,v),x=m>v?p.substring(m):"";return[g+"/",x]}(e),a=t[0],o=t[1],i=this.weightPathPrefix||a,s=[],u=0,c=n;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],n.forEach(function(p){p.paths.forEach(function(v){f.push(i+v+o)})}),[4,ac(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,Qo(h)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function xo(r){return r.match(oc.URL_SCHEME_REGEX)!=null}var xs=function(r,n){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return xo(e)}):xo(r))?bo(r,{onProgress:n}):null};function bo(r,n){return new oc(r,n)}un.registerSaveRouter(xs),un.registerLoadRouter(xs);var Ya=function(){function r(n){this.modelArtifacts=n}return r.prototype.load=function(){return X(this,void 0,void 0,function(){return $(this,function(n){return[2,this.modelArtifacts]})})},r}(),bm=function(){function r(n){this.saveHandler=n}return r.prototype.save=function(n){return X(this,void 0,void 0,function(){return $(this,function(e){return[2,this.saveHandler(n)]})})},r}(),ic=Object.freeze({browserFiles:function(r){return new xm(r)},browserHTTPRequest:function(r,n){return bo(r,n)},concatenateArrayBuffers:Qo,decodeWeights:ec,encodeWeights:function(r,n){return X(this,void 0,void 0,function(){var e,t,a,o,i,s=this;return $(this,function(u){switch(u.label){case 0:for(e=[],t=[],a=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),o=function(c){var l=a[c],f=Array.isArray(r)?r[c].tensor:r[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return X(s,void 0,void 0,function(){var v,m,g,x,b,y,w;return $(this,function(C){switch(C.label){case 0:return[4,f.bytes()];case 1:for(v=C.sent(),m=v.reduce(function(S,k){return S+k.length},0)+na*v.length,g=new Uint8Array(m),x=0,b=0;b<v.length;b++)y=v[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,x),x+=na,g.set(y,x),x+=y.length;return p(g),[2]}})})});t.push(d)}else t.push(f.data());n!=null&&(h.group=n),e.push(h)},i=0;i<a.length;++i)o(i);return[4,Promise.all(t)];case 1:return[2,{data:um(u.sent()),specs:e}]}})})},fromMemory:function(r,n,e,t){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Ya(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Ya({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Ya({modelTopology:r,weightSpecs:n,weightData:e,trainingConfig:t}))},getLoadHandlers:function(r,n){return un.getLoadHandlers(r,n)},getModelArtifactsInfoForJSON:xr,getSaveHandlers:function(r){return un.getSaveHandlers(r)},http:bo,isHTTPScheme:xo,loadWeights:function(r,n,e,t){return n===void 0&&(n=""),X(this,void 0,void 0,function(){return $(this,function(a){return[2,ys(function(o){return ac(o,{requestInit:t})})(r,n,e)]})})},registerLoadRouter:function(r){return un.registerLoadRouter(r)},registerSaveRouter:function(r){return un.registerSaveRouter(r)},weightsLoaderFactory:ys,withSaveHandler:function(r){return new bm(r)},copyModel:function(r,n){return X(this,void 0,void 0,function(){return $(this,function(e){return[2,ds(r,n,!1)]})})},listModels:function(){return X(this,void 0,void 0,function(){var r,n,e,t,a,o,i;return $(this,function(s){switch(s.label){case 0:r=ot.getSchemes(),n={},e=0,t=r,s.label=1;case 1:return e<t.length?(a=t[e],[4,ot.getManager(a).listModels()]):[3,4];case 2:for(i in o=s.sent())n[a+Wt+i]=o[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,n]}})})},moveModel:function(r,n){return X(this,void 0,void 0,function(){return $(this,function(e){return[2,ds(r,n,!0)]})})},removeModel:function(r){return X(this,void 0,void 0,function(){var n;return $(this,function(e){return n=Or(r),[2,ot.getManager(n.scheme).removeModel(n.path)]})})}}),At;D({confusionMatrix_:function(r,n,e){var t=_(r,"labels","confusionMatrix"),a=_(n,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(t.rank===1,function(){return"Expected the rank of labels to be 1, but got "+t.rank}),E(a.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+a.rank}),E(t.shape[0]===a.shape[0],function(){return"Mismatch in the number of examples: "+t.shape[0]+" vs. "+a.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var o=lo(t.asType("int32"),e),i=lo(a.asType("int32"),e);return o.transpose().matMul(i).asType("int32")}});var wm=D({fromPixels_:function(r,n){if(n===void 0&&(n=3),n>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,t=!1,a=!1,o=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)t=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)a=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)o=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(a&&a&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(As("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:n});var s,u,c=a?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],f=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,f).data:t||e?s=r.data:(o||a)&&(At==null&&(At=document.createElement("canvas").getContext("2d")),At.canvas.width=l,At.canvas.height=f,At.drawImage(r,0,0,l,f),s=At.getImageData(0,0,l,f).data),n===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*n);for(var d=0;d<h;d++)for(var p=0;p<n;++p)u[d*n+p]=s[4*d+p]}return ko(u,[f,l,n],"int32")}}),Zo=Object.freeze({toPixels:function(r,n){return X(this,void 0,void 0,function(){var e,t,a,o,i,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,C,S,k;return $(this,function(R){switch(R.label){case 0:if(e=_(r,"img","toPixels"),r instanceof Ee||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(t=e.shape.slice(0,2),a=t[0],o=t[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=R.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=R.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=e.dtype==="float32"?255:1,m=new Uint8ClampedArray(o*a*4),g=0;g<a*o;++g)x=void 0,b=void 0,y=void 0,w=void 0,i===1?(x=s[g]*v,b=s[g]*v,y=s[g]*v,w=255):i===3?(x=s[3*g]*v,b=s[3*g+1]*v,y=s[3*g+2]*v,w=255):i===4&&(x=s[4*g]*v,b=s[4*g+1]*v,y=s[4*g+2]*v,w=s[4*g+3]*v),m[(C=4*g)+0]=Math.round(x),m[C+1]=Math.round(b),m[C+2]=Math.round(y),m[C+3]=Math.round(w);return n!=null&&(n.width=o,n.height=a,S=n.getContext("2d"),k=new ImageData(m,o,a),S.putImageData(k,0,0)),e!==r&&e.dispose(),[2,m]}})})},fromPixels:wm}),Cm=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(n,e){return new n(e)},r}(),_m=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(n){r.getMap().classNameMap[n.className]=[n,n.fromConfig]},r}();function _t(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),_m.register(r)}var Et=function(r){function n(){return r!==null&&r.apply(this,arguments)||this}return bn(n,r),n.prototype.minimize=function(e,t,a){t===void 0&&(t=!1);var o=this.computeGradients(e,a),i=o.value,s=o.grads;if(a!=null){var u=a.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return en(s),t?i:(i.dispose(),null)},Object.defineProperty(n.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),n.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},n.prototype.computeGradients=function(e,t){return Ff(e,t)},n.prototype.dispose=function(){this.iterations_!=null&&en(this.iterations_)},n.prototype.saveIterations=function(){return X(this,void 0,void 0,function(){return $(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:j(this.iterations_,"int32")}]})})},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},n.prototype.extractIterations=function(e){return X(this,void 0,void 0,function(){var t;return $(this,function(a){switch(a.label){case 0:return t=this,[4,e[0].tensor.data()];case 1:return t.iterations_=a.sent()[0],[2,e.slice(1)]}})})},n}(Cm);Object.defineProperty(Et,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Em=function(r){function n(e,t,a){a===void 0&&(a=null);var o=r.call(this)||this;return o.learningRate=e,o.rho=t,o.epsilon=a,o.accumulatedGrads=[],o.accumulatedUpdates=[],a==null&&(o.epsilon=T.backend.epsilon()),o}return bn(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=T.registeredVariables[a];t.accumulatedGrads[o]==null&&(t.accumulatedGrads[o]={originalName:a+"/accum_grad",variable:K(function(){return ve(i).variable(!1)})}),t.accumulatedUpdates[o]==null&&(t.accumulatedUpdates[o]={originalName:a+"/accum_var",variable:K(function(){return ve(i).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=t.accumulatedGrads[o].variable,c=t.accumulatedUpdates[o].variable;K(function(){var l=u.mul(t.rho).add(s.square().mul(1-t.rho)),f=c.add(t.epsilon).sqrt().div(u.add(t.epsilon).sqrt()).mul(s),h=c.mul(t.rho).add(f.square().mul(1-t.rho));u.assign(l),c.assign(h);var d=f.mul(-t.learningRate).add(i);i.assign(d)})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedUpdates!=null&&(en(this.accumulatedGrads.map(function(e){return e.variable})),en(this.accumulatedUpdates.map(function(e){return e.variable})))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return $(this,function(t){switch(t.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var t;return $(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),t=e.length/2,this.accumulatedGrads=e.slice(0,t).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(t,2*t).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},n.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},n.className="Adadelta",n}(Et);_t(Em);var Rm=function(r){function n(e,t){t===void 0&&(t=.1);var a=r.call(this)||this;return a.learningRate=e,a.initialAccumulatorValue=t,a.accumulatedGrads=[],a}return bn(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=T.registeredVariables[a];t.accumulatedGrads[o]==null&&(t.accumulatedGrads[o]={originalName:a+"/accumulator",variable:K(function(){return Fn(i.shape,t.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=t.accumulatedGrads[o].variable;K(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-t.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedGrads!=null&&en(this.accumulatedGrads.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(t){return{name:t.originalName,tensor:t.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulatedGrads=e.map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},n.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},n.className="Adagrad",n}(Et);_t(Rm);var Im=function(r){function n(e,t,a,o){o===void 0&&(o=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=t,i.beta2=a,i.epsilon=o,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],K(function(){i.accBeta1=j(t).variable(),i.accBeta2=j(a).variable()}),o==null&&(i.epsilon=T.backend.epsilon()),i}return bn(n,r),n.prototype.applyGradients=function(e){var t=this,a=Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e);K(function(){var o=Be(1,t.accBeta1),i=Be(1,t.accBeta2);a.forEach(function(s,u){var c=T.registeredVariables[s];t.accumulatedFirstMoment[u]==null&&(t.accumulatedFirstMoment[u]={originalName:s+"/m",variable:K(function(){return ve(c).variable(!1)})}),t.accumulatedSecondMoment[u]==null&&(t.accumulatedSecondMoment[u]={originalName:s+"/v",variable:K(function(){return ve(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=t.accumulatedFirstMoment[u].variable,h=t.accumulatedSecondMoment[u].variable,d=f.mul(t.beta1).add(l.mul(1-t.beta1)),p=h.mul(t.beta2).add(l.square().mul(1-t.beta2)),v=d.div(o),m=p.div(i);f.assign(d),h.assign(p);var g=v.div(m.sqrt().add(t.epsilon)).mul(-t.learningRate).add(c);c.assign(g)}}),t.accBeta1.assign(t.accBeta1.mul(t.beta1)),t.accBeta2.assign(t.accBeta2.mul(t.beta2))}),this.incrementIterations()},n.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&en(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&en(this.accumulatedSecondMoment.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return $(this,function(t){switch(t.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var t,a=this;return $(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),K(function(){a.accBeta1.assign(Zr(a.beta1,a.iterations_+1)),a.accBeta2.assign(Zr(a.beta2,a.iterations_+1))}),t=e.length/2,this.accumulatedFirstMoment=e.slice(0,t).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(t,2*t).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},n.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},n.className="Adam",n}(Et);_t(Im);var km=function(r){function n(e,t,a,o,i){o===void 0&&(o=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=t,s.beta2=a,s.epsilon=o,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],K(function(){s.iteration=j(0).variable(),s.accBeta1=j(t).variable()}),o==null&&(s.epsilon=T.backend.epsilon()),s}return bn(n,r),n.prototype.applyGradients=function(e){var t=this,a=Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e);K(function(){var o=Be(1,t.accBeta1),i=gn(-t.learningRate,t.iteration.mul(t.decay).add(1));a.forEach(function(s,u){var c=T.registeredVariables[s];t.accumulatedFirstMoment[u]==null&&(t.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ve(c).variable(!1)}),t.accumulatedWeightedInfNorm[u]==null&&(t.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ve(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=t.accumulatedFirstMoment[u].variable,h=t.accumulatedWeightedInfNorm[u].variable,d=f.mul(t.beta1).add(l.mul(1-t.beta1)),p=h.mul(t.beta2),v=l.abs(),m=p.maximum(v);f.assign(d),h.assign(m);var g=i.div(o).mul(d.div(m.add(t.epsilon))).add(c);c.assign(g)}}),t.iteration.assign(t.iteration.add(1)),t.accBeta1.assign(t.accBeta1.mul(t.beta1))}),this.incrementIterations()},n.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&en(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&en(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(t){throw new Error("setWeights() is not implemented for Adamax yet.")})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},n.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},n.className="Adamax",n}(Et);_t(km);var sc=function(r){function n(e){var t=r.call(this)||this;return t.learningRate=e,t.setLearningRate(e),t}return bn(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=Array.isArray(e)?e[o].tensor:e[a];if(i!=null){var s=T.registeredVariables[a];K(function(){var u=t.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},n.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=ql(j(-e))},n.prototype.dispose=function(){this.c.dispose()},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=t.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate}},n.fromConfig=function(e,t){return new e(t.learningRate)},n.className="SGD",n}(Et);_t(sc);var Sm=function(r){function n(e,t,a){a===void 0&&(a=!1);var o=r.call(this,e)||this;return o.learningRate=e,o.momentum=t,o.useNesterov=a,o.accumulations=[],o.m=j(o.momentum),o}return bn(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=T.registeredVariables[a];t.accumulations[o]==null&&(t.accumulations[o]={originalName:a+"/momentum",variable:K(function(){return ve(i).variable(!1)})});var s=t.accumulations[o].variable,u=Array.isArray(e)?e[o].tensor:e[a];u!=null&&K(function(){var c,l=t.m.mul(s).add(u);c=t.useNesterov?t.c.mul(u.add(l.mul(t.m))).add(i):t.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},n.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&en(this.accumulations.map(function(e){return e.variable}))},n.prototype.setMomentum=function(e){this.momentum=e},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(t){return{name:t.originalName,tensor:t.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulations=e.map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},n.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},n.className="Momentum",n}(sc);_t(Sm);var Dm=function(r){function n(e,t,a,o,i){t===void 0&&(t=.9),a===void 0&&(a=0),o===void 0&&(o=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=t,s.momentum=a,s.epsilon=o,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,o==null&&(s.epsilon=T.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return bn(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=T.registeredVariables[a];t.accumulatedMeanSquares[o]==null&&(t.accumulatedMeanSquares[o]={originalName:a+"/rms",variable:K(function(){return ve(i).variable(!1)})}),t.accumulatedMoments[o]==null&&(t.accumulatedMoments[o]={originalName:a+"/momentum",variable:K(function(){return ve(i).variable(!1)})}),t.accumulatedMeanGrads[o]==null&&t.centered&&(t.accumulatedMeanGrads[o]={originalName:a+"/mg",variable:K(function(){return ve(i).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=t.accumulatedMeanSquares[o].variable,c=t.accumulatedMoments[o].variable;K(function(){var l=u.mul(t.decay).add(s.square().mul(1-t.decay));if(t.centered){var f=t.accumulatedMeanGrads[o].variable,h=f.mul(t.decay).add(s.mul(1-t.decay)),d=c.mul(t.momentum).add(s.mul(t.learningRate).div(l.sub(h.square().add(t.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=i.sub(d);i.assign(p)}else{var v=u.mul(t.decay).add(s.square().mul(1-t.decay));d=c.mul(t.momentum).add(s.mul(t.learningRate).div(v.add(t.epsilon).sqrt())),u.assign(v),c.assign(d),p=i.sub(d),i.assign(p)}})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&en(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&en(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&en(this.accumulatedMoments.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var e;return $(this,function(t){switch(t.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},n.prototype.setWeights=function(e){return X(this,void 0,void 0,function(){var t;return $(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),t=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,t).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(t,2*t).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},n.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},n.className="RMSProp",n}(Et);_t(Dm);Ee.prototype.squaredDifference=function(r){return Cu(this,r)},P=nm;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var wo=function(r,n){return wo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])},wo(r,n)};function re(r,n){wo(r,n);function e(){this.constructor=r}r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}var qe=function(){return qe=Object.assign||function(n){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},qe.apply(this,arguments)};function Q(r,n,e,t){function a(o){return o instanceof e?o:new e(function(i){i(o)})}return new(e||(e=Promise))(function(o,i){function s(l){try{c(t.next(l))}catch(f){i(f)}}function u(l){try{c(t.throw(l))}catch(f){i(f)}}function c(l){l.done?o(l.value):a(l.value).then(s,u)}c((t=t.apply(r,[])).next())})}function Z(r,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},t,a,o,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,a&&(o=c[0]&2?a.return:c[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,c[1])).done)return o;switch(a=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,a=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){e.label=c[1];break}if(c[0]===6&&e.label<o[1]){e.label=o[1],o=c;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(c);break}o[2]&&e.ops.pop(),e.trys.pop();continue}c=n.call(r,e)}catch(l){c=[6,l],a=0}finally{t=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function tr(){for(var r=0,n=0,e=arguments.length;n<e;n++)r+=arguments[n].length;for(var t=Array(r),a=0,n=0;n<e;n++)for(var o=arguments[n],i=0,s=o.length;i<s;i++,a++)t[a]=o[i];return t}var gt=function(){function r(n,e){if(!yt(n)||!yt(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:n,height:e}));this._width=n,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function va(r,n){return r instanceof Ee&&r.shape.length===n}function Am(r){return va(r,2)}function ma(r){return va(r,3)}function it(r){return va(r,4)}function Tm(r){return r%1!==0}function bs(r){return r%2===0}function uc(r,n){n===void 0&&(n=2);var e=Math.pow(10,n);return Math.floor(r*e)/e}function ws(r){return r&&r.width&&r.height}function Nm(r,n){var e=r.width,t=r.height,a=n/Math.max(t,e);return new gt(Math.round(e*a),Math.round(t*a))}function ei(r){return r.reduce(function(n,e){return n.add(e)},new ge(0,0)).div(new ge(r.length,r.length))}function ur(r,n,e){return Array(r).fill(0).map(function(t,a){return n+a*e})}function yt(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Cs(r){return yt(r)&&0<=r&&r<=1}var ge=function(){function r(n,e){this._x=n,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(n){return new r(this.x+n.x,this.y+n.y)},r.prototype.sub=function(n){return new r(this.x-n.x,this.y-n.y)},r.prototype.mul=function(n){return new r(this.x*n.x,this.y*n.y)},r.prototype.div=function(n){return new r(this.x/n.x,this.y/n.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),Mn=function(){function r(n,e){e===void 0&&(e=!0);var t=n||{},a=[t.left,t.top,t.right,t.bottom].every(yt),o=[t.x,t.y,t.width,t.height].every(yt);if(!o&&!a)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(t));var i=o?[t.x,t.y,t.width,t.height]:[t.left,t.top,t.right-t.left,t.bottom-t.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(n){return!!n&&[n.x,n.y,n.width,n.height].every(yt)},r.assertIsValidBox=function(n,e,t){if(t===void 0&&(t=!1),!r.isRect(n))throw new Error(e+" - invalid box: "+JSON.stringify(n)+", expected object with properties x, y, width, height");if(!t&&(n.width<0||n.height<0))throw new Error(e+" - width ("+n.width+") and height ("+n.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new ge(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new ge(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new ge(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new ge(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var n=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=n[0],t=n[1],a=n[2],o=n[3];return new r({x:e,y:t,width:a,height:o})},r.prototype.floor=function(){var n=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=n[0],t=n[1],a=n[2],o=n[3];return new r({x:e,y:t,width:a,height:o})},r.prototype.toSquare=function(){var n=this,e=n.x,t=n.y,a=n.width,o=n.height,i=Math.abs(a-o);return a<o&&(e-=i/2,a+=i),o<a&&(t-=i/2,o+=i),new r({x:e,y:t,width:a,height:o})},r.prototype.rescale=function(n){var e=ws(n)?n.width:n,t=ws(n)?n.height:n;return new r({x:this.x*e,y:this.y*t,width:this.width*e,height:this.height*t})},r.prototype.pad=function(n,e){var t=[this.x-n/2,this.y-e/2,this.width+n,this.height+e],a=t[0],o=t[1],i=t[2],s=t[3];return new r({x:a,y:o,width:i,height:s})},r.prototype.clipAtImageBorders=function(n,e){var t=this,a=t.x,o=t.y,i=t.right,s=t.bottom,u=Math.max(a,0),c=Math.max(o,0),l=i-u,f=s-c,h=Math.min(l,n-u),d=Math.min(f,e-c);return new r({x:u,y:c,width:h,height:d}).floor()},r.prototype.shift=function(n,e){var t=this,a=t.width,o=t.height,i=this.x+n,s=this.y+e;return new r({x:i,y:s,width:a,height:o})},r.prototype.padAtBorders=function(n,e){var t=this.width+1,a=this.height+1,o=1,i=1,s=t,u=a,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+t,f=e),h>n&&(u=-h+n+a,h=n),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:o,edx:s,y:l,ey:h,x:c,ex:f,w:t,h:a}},r.prototype.calibrate=function(n){return new r({left:this.left+n.left*this.width,top:this.top+n.top*this.height,right:this.right+n.right*this.width,bottom:this.bottom+n.bottom*this.height}).toSquare().round()},r}(),ga=function(r){re(n,r);function n(e,t,a,o,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:t,right:a,bottom:o},i)||this}return n}(Mn),cc=function(){function r(n,e,t,a,o){this._imageDims=new gt(o.width,o.height),this._score=n,this._classScore=e,this._className=t,this._box=new Mn(a).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new Mn(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(n,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:n,height:e})},r}(),fn=function(r){re(n,r);function n(e,t,a){return r.call(this,e,e,"",t,a)||this}return n.prototype.forSize=function(e,t){var a=r.prototype.forSize.call(this,e,t),o=a.score,i=a.relativeBox,s=a.imageDims;return new n(o,i,s)},n}(cc);function Fm(r,n,e){e===void 0&&(e=!0);var t=Math.max(0,Math.min(r.right,n.right)-Math.max(r.left,n.left)),a=Math.max(0,Math.min(r.bottom,n.bottom)-Math.max(r.top,n.top)),o=t*a;return e?o/(r.area+n.area-o):o/Math.min(r.area,n.area)}function Pm(r){var n=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),t=n.reduce(function(s,u){return u<s?u:s},1/0),a=e.reduce(function(s,u){return u<s?u:s},1/0),o=n.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new ga(t,a,o,i)}function cr(r,n,e,t){t===void 0&&(t=!0);for(var a=n.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),o=[],i=function(){var s=a.pop();o.push(s);for(var u=a,c=[],l=0;l<u.length;l++){var f=u[l],h=r[s],d=r[f];c.push(Fm(h,d,t))}a=a.filter(function(p,v){return c[v]<=e})};a.length>0;)i();return o}function br(r,n){return K(function(){var e=n[0],t=n[1],a=n[2],o=Fn(tr(r.shape.slice(0,3),[1]),e),i=Fn(tr(r.shape.slice(0,3),[1]),t),s=Fn(tr(r.shape.slice(0,3),[1]),a),u=Pe([o,i,s],3);return Be(r,u)})}function Mm(r,n){return n===void 0&&(n=!1),K(function(){var e=r.shape.slice(1),t=e[0],a=e[1];if(t===a)return r;var o=Math.abs(t-a),i=Math.round(o*(n?.5:1)),s=t>a?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,Fn(p,0)},c=u(i),l=o-c.shape[s],f=n&&l?u(l):null,h=[f,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Pe(h,s)})}function Ja(r){return 1/(1+Math.exp(-r))}var ni=function(r){re(n,r);function n(e,t,a,o,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:t,width:a,height:o},i)||this}return n}(Mn),Om=.5,Bm=.43,Lm=.45,lr=function(){function r(n,e,t){t===void 0&&(t=new ge(0,0));var a=e.width,o=e.height;this._imgDims=new gt(a,o),this._shift=t,this._positions=n.map(function(i){return i.mul(new ge(a,o)).add(t)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new ge(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var n=this;return this._positions.map(function(e){return e.sub(n._shift).div(new ge(n.imageWidth,n.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(n,e){return new this.constructor(this.relativePositions,{width:n,height:e})},r.prototype.shiftBy=function(n,e){return new this.constructor(this.relativePositions,this._imgDims,new ge(n,e))},r.prototype.shiftByPoint=function(n){return this.shiftBy(n.x,n.y)},r.prototype.align=function(n,e){if(e===void 0&&(e={}),n){var t=n instanceof fn?n.box.floor():new Mn(n);return this.shiftBy(t.x,t.y).align(null,e)}var a=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),o=a.useDlibAlignment,i=a.minBoxPadding;return o?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var n=this.getRefPointsForAlignment(),e=n[0],t=n[1],a=n[2],o=function(f){return a.sub(f).magnitude()},i=(o(e)+o(t))/2,s=Math.floor(i/Lm),u=ei(n),c=Math.floor(Math.max(0,u.x-Om*s)),l=Math.floor(Math.max(0,u.y-Bm*s));return new ni(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(n){var e=Pm(this.positions);return e.pad(e.width*n,e.height*n)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),Wm=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],ei([e[3],e[4]])]},n}(lr),zm=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.getJawOutline=function(){return this.positions.slice(0,17)},n.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},n.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},n.prototype.getNose=function(){return this.positions.slice(27,36)},n.prototype.getLeftEye=function(){return this.positions.slice(36,42)},n.prototype.getRightEye=function(){return this.positions.slice(42,48)},n.prototype.getMouth=function(){return this.positions.slice(48,68)},n.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(ei)},n}(lr),_s=function(){function r(n,e){this._label=n,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(n){return n===void 0&&(n=!0),""+this.label+(n?" ("+uc(this.distance)+")":"")},r}(),Es=function(r){re(n,r);function n(e,t){var a=r.call(this,e)||this;return a._label=t,a}return n.assertIsValidLabeledBox=function(e,t){if(Mn.assertIsValidBox(e,t),!yt(e.label))throw new Error(t+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),n}(Mn),Zt=function(){function r(n,e){if(typeof n!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(t){return!(t instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=n,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(n){return Array.from(n)})}},r.fromJSON=function(n){var e=n.descriptors.map(function(t){return new Float32Array(t)});return new r(n.label,e)},r}();(function(r){re(n,r);function n(e,t,a,o){var i=r.call(this,e,t)||this;return i._score=a,i._classScore=o,i}return n.assertIsValidPredictedBox=function(e,t){if(Es.assertIsValidLabeledBox(e,t),!Cs(e.score)||!Cs(e.classScore))throw new Error(t+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),n})(Es);function ta(r){return r.detection instanceof fn}function fr(r,n){var e={detection:n};return Object.assign({},r,e)}function lc(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},n=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:n}}function fc(r){var n="";if(!r)try{r=require("fs")}catch(t){n=t.toString()}var e=r?function(t){return new Promise(function(a,o){r.readFile(t,function(i,s){return i?o(i):a(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+n)};return{readFile:e}}function hc(){var r=global.Canvas||global.HTMLCanvasElement,n=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},t=function(){if(n)return new n;throw new Error("createImageElement - missing Image implementation for nodejs environment")},a=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},o=fc();return qe({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:n||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:t,fetch:a},o)}function dc(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function pc(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Fe;function Um(){if(!Fe)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Fe}function Co(r){Fe=r}function ti(){dc()&&Co(lc()),pc()&&Co(hc())}function Vm(r){if(Fe||ti(),!Fe)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var n=r.Canvas,e=n===void 0?Fe.Canvas:n,t=r.Image,a=t===void 0?Fe.Image:t;Fe.Canvas=e,Fe.Image=a,Fe.createCanvasElement=r.createCanvasElement||function(){return new e},Fe.createImageElement=r.createImageElement||function(){return new a},Fe.ImageData=r.ImageData||Fe.ImageData,Fe.Video=r.Video||Fe.Video,Fe.fetch=r.fetch||Fe.fetch,Fe.readFile=r.readFile||Fe.readFile}var Je={getEnv:Um,setEnv:Co,initialize:ti,createBrowserEnv:lc,createFileSystem:fc,createNodejsEnv:hc,monkeyPatch:Vm,isBrowser:dc,isNodejs:pc};ti();function ri(r){return!Je.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function jn(r){var n=Je.getEnv(),e=n.Canvas,t=n.CanvasRenderingContext2D;if(r instanceof t)return r;var a=ri(r);if(!(a instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var o=a.getContext("2d");if(!o)throw new Error("resolveContext2d - canvas 2d context is null");return o}var rt;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(rt||(rt={}));var vc=function(){function r(n){n===void 0&&(n={});var e=n.anchorPosition,t=n.backgroundColor,a=n.fontColor,o=n.fontSize,i=n.fontStyle,s=n.padding;this.anchorPosition=e||rt.TOP_LEFT,this.backgroundColor=t||"rgba(0, 0, 0, 0.5)",this.fontColor=a||"rgba(255, 255, 255, 1)",this.fontSize=o||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),Gm=function(){function r(n,e,t){t===void 0&&(t={}),this.text=typeof n=="string"?[n]:n instanceof r?n.text:n,this.anchor=e,this.options=new vc(t)}return r.prototype.measureWidth=function(n){var e=this.options.padding;return this.text.map(function(t){return n.measureText(t).width}).reduce(function(t,a){return t<a?a:t},0)+2*e},r.prototype.measureHeight=function(){var n=this.options,e=n.fontSize,t=n.padding;return this.text.length*e+2*t},r.prototype.getUpperLeft=function(n,e){var t=this.options.anchorPosition,a=t===rt.BOTTOM_RIGHT||t===rt.TOP_RIGHT,o=t===rt.BOTTOM_LEFT||t===rt.BOTTOM_RIGHT,i=this.measureWidth(n),s=this.measureHeight(),u=a?this.anchor.x-i:this.anchor.x,c=o?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,f=e.height,h=Math.max(Math.min(u,l-i),0),d=Math.max(Math.min(c,f-s),0);return{x:h,y:d}}return{x:u,y:c}},r.prototype.draw=function(n){var e=ri(n),t=jn(e),a=this.options,o=a.backgroundColor,i=a.fontColor,s=a.fontSize,u=a.fontStyle,c=a.padding;t.font=s+"px "+u;var l=this.measureWidth(t),f=this.measureHeight();t.fillStyle=o;var h=this.getUpperLeft(t,e);t.fillRect(h.x,h.y,l,f),t.fillStyle=i,this.text.forEach(function(d,p){var v=c+h.x,m=c+h.y+(p+1)*s;t.fillText(d,v,m)})},r}(),Hm=function(){function r(n){n===void 0&&(n={});var e=n.boxColor,t=n.lineWidth,a=n.label,o=n.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=t||2,this.label=a;var i={anchorPosition:rt.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new vc(Object.assign({},i,o))}return r}(),mc=function(){function r(n,e){e===void 0&&(e={}),this.box=new Mn(n),this.options=new Hm(e)}return r.prototype.draw=function(n){var e=jn(n),t=this.options,a=t.boxColor,o=t.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=a,e.lineWidth=o,e.strokeRect(s,u,c,l);var f=this.options.label;f&&new Gm([f],{x:s-o/2,y:u},this.options.drawLabelOptions).draw(n)},r}();function jm(r,n){var e=Array.isArray(n)?n:[n];e.forEach(function(t){var a=t instanceof fn?t.score:ta(t)?t.detection.score:void 0,o=t instanceof fn?t.box:ta(t)?t.detection.box:new Mn(t),i=a?""+uc(a):void 0;new mc(o,{label:i}).draw(r)})}function gc(r){var n=Je.getEnv(),e=n.Image,t=n.Video;return r instanceof e&&r.complete||r instanceof t&&r.readyState>=3}function qm(r){return new Promise(function(n,e){if(r instanceof Je.getEnv().Canvas||gc(r))return n();function t(o){o.currentTarget&&(o.currentTarget.removeEventListener("load",t),o.currentTarget.removeEventListener("error",a),n(o))}function a(o){o.currentTarget&&(o.currentTarget.removeEventListener("load",t),o.currentTarget.removeEventListener("error",a),e(o))}r.addEventListener("load",t),r.addEventListener("error",a)})}function ai(r){var n=Je.getEnv(),e=n.Image,t=n.Video;return r instanceof e?new gt(r.naturalWidth,r.naturalHeight):r instanceof t?new gt(r.videoWidth,r.videoHeight):new gt(r.width,r.height)}function ya(r){var n=r.width,e=r.height,t=Je.getEnv().createCanvasElement,a=t();return a.width=n,a.height=e,a}function oi(r,n){var e=Je.getEnv().ImageData;if(!(r instanceof e)&&!gc(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var t=ai(r),a=t.width,o=t.height,i=ya({width:a,height:o});return r instanceof e?jn(i).putImageData(r,0,0):jn(i).drawImage(r,0,0,a,o),i}function Km(r,n){return Q(this,void 0,void 0,function(){var e,t,a,o,i,s;return Z(this,function(u){switch(u.label){case 0:return e=Je.getEnv().createCanvasElement(),t=r.shape.slice(it(r)?1:0),a=t[0],o=t[1],i=t[2],s=K(function(){return r.as3D(a,o,i).toInt()}),[4,Zo.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Rs(r){var n=Je.getEnv(),e=n.Image,t=n.Canvas,a=n.Video;return r instanceof e||r instanceof t||r instanceof a}function Xm(r,n,e){e===void 0&&(e=!1);var t=Je.getEnv(),a=t.Image,o=t.Canvas;if(!(r instanceof a||r instanceof o))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=ai(r),s=n/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=ya({width:n,height:n}),f=r instanceof o?r:oi(r),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return jn(l).drawImage(f,d,p,u,c),l}var ra=function(){function r(n,e){var t=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(n))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+n);this._treatAsBatchInput=e,this._batchSize=n.length,n.forEach(function(a,o){if(ma(a)){t._imageTensors[o]=a,t._inputDimensions[o]=a.shape;return}if(it(a)){var i=a.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");t._imageTensors[o]=a,t._inputDimensions[o]=a.shape.slice(1);return}var s=a instanceof Je.getEnv().Canvas?a:oi(a);t._canvases[o]=s,t._inputDimensions[o]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var n=this;return ur(this.batchSize,0,1).map(function(e,t){return n.getReshapedInputDimensions(t)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(n){return this.canvases[n]||this.imageTensors[n]},r.prototype.getInputDimensions=function(n){return this._inputDimensions[n]},r.prototype.getInputHeight=function(n){return this._inputDimensions[n][0]},r.prototype.getInputWidth=function(n){return this._inputDimensions[n][1]},r.prototype.getReshapedInputDimensions=function(n){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(n),t=this.getInputHeight(n);return Nm({width:e,height:t},this.inputSize)},r.prototype.toBatchTensor=function(n,e){var t=this;return e===void 0&&(e=!0),this._inputSize=n,K(function(){var a=ur(t.batchSize,0,1).map(function(i){var s=t.getInput(i);if(s instanceof Ee){var u=it(s)?s:s.expandDims();return u=Mm(u,e),(u.shape[1]!==n||u.shape[2]!==n)&&(u=Ko.resizeBilinear(u,[n,n])),u.as3D(n,n,3)}if(s instanceof Je.getEnv().Canvas)return Zo.fromPixels(Xm(s,n,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),o=ln(a.map(function(i){return i.toFloat()})).as4D(t.batchSize,n,n,3);return o})},r}();function Ue(r){return Q(this,void 0,void 0,function(){var n,e,t;return Z(this,function(a){switch(a.label){case 0:if(r instanceof ra)return[2,r];if(n=Array.isArray(r)?r:[r],!n.length)throw new Error("toNetInput - empty array passed as input");return e=function(o){return Array.isArray(r)?" at input index "+o+":":""},t=n.map(ri),t.forEach(function(o,i){if(!Rs(o)&&!ma(o)&&!it(o))throw typeof n[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+n[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(it(o)){var s=o.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(t.map(function(o){return Rs(o)&&qm(o)}))];case 1:return a.sent(),[2,new ra(t,Array.isArray(r))]}})})}function ii(r,n){return Q(this,void 0,void 0,function(){var e,t,a,o,i,s,u;return Z(this,function(c){switch(c.label){case 0:return e=Je.getEnv().Canvas,t=r,r instanceof e?[3,5]:[4,Ue(r)];case 1:if(a=c.sent(),a.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return o=a.getInput(0),o instanceof e?(i=o,[3,4]):[3,2];case 2:return[4,Km(o)];case 3:i=c.sent(),c.label=4;case 4:t=i,c.label=5;case 5:return s=jn(t),u=n.map(function(l){return l instanceof fn?l.forSize(t.width,t.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(t.width,t.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,v=ya({width:d,height:p});return jn(v).putImageData(s.getImageData(f,h,d,p),0,0),v})]}})})}function si(r,n){return Q(this,void 0,void 0,function(){return Z(this,function(e){if(!ma(r)&&!it(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(it(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,K(function(){var t=r.shape.slice(it(r)?1:0),a=t[0],o=t[1],i=t[2],s=n.map(function(c){return c instanceof fn?c.forSize(o,a).box:c}).map(function(c){return c.clipAtImageBorders(o,a)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return Gu(r.as3D(a,o,i),[f,l,0],[d,h,i])});return u})]})})}function $m(r,n){return Q(this,void 0,void 0,function(){var e,t;return Z(this,function(a){switch(a.label){case 0:return e=Je.getEnv().fetch,[4,e(r,n)];case 1:if(t=a.sent(),!(t.status<400))throw new Error("failed to fetch: ("+t.status+") "+t.statusText+", from url: "+t.url);return[2,t]}})})}function Ym(r){return Q(this,void 0,void 0,function(){return Z(this,function(n){switch(n.label){case 0:return[4,$m(r)];case 1:return[2,n.sent().json()]}})})}function yc(r,n){var e=n+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var t=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(t,"");var a=r.split("/").filter(function(s){return s}),o=r.endsWith(".json")?a[a.length-1]:e,i=t+(r.endsWith(".json")?a.slice(0,a.length-1):a).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+o:i+"/"+o}}function Jm(r,n){return Q(this,void 0,void 0,function(){var e,t,a,o;return Z(this,function(i){switch(i.label){case 0:return e=yc(r,n),t=e.manifestUri,a=e.modelBaseUri,[4,Ym(t)];case 1:return o=i.sent(),[2,ic.loadWeights(o,a)]}})})}function Qm(r,n,e){e===void 0&&(e=!1);var t=e?ai(n):n,a=t.width,o=t.height;return r.width=a,r.height=o,{width:a,height:o}}var $n=function(){function r(n){this._name=n,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(n){var e=this.traversePropertyPath(n),t=e.obj,a=e.objProp;return t[a]},r.prototype.reassignParamFromPath=function(n,e){var t=this.traversePropertyPath(n),a=t.obj,o=t.objProp;a[o].dispose(),a[o]=e},r.prototype.getParamList=function(){var n=this;return this._paramMappings.map(function(e){var t=e.paramPath;return{path:t,tensor:n.getParamFromPath(t)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(n){return n.tensor instanceof Ht})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(n){return!(n.tensor instanceof Ht)})},r.prototype.variable=function(){var n=this;this.getFrozenParams().forEach(function(e){var t=e.path,a=e.tensor;n.reassignParamFromPath(t,a.variable())})},r.prototype.freeze=function(){var n=this;this.getTrainableParams().forEach(function(e){var t=e.path,a=e.tensor,o=He(a.dataSync());a.dispose(),n.reassignParamFromPath(t,o)})},r.prototype.dispose=function(n){n===void 0&&(n=!0),this.getParamList().forEach(function(e){if(n&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(n){var e=n.tensor;return Array.from(e.dataSync())}).reduce(function(n,e){return n.concat(e)}))},r.prototype.load=function(n){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return n instanceof Float32Array?(this.extractWeights(n),[2]):[4,this.loadFromUri(n)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(n){return Q(this,void 0,void 0,function(){var e;return Z(this,function(t){switch(t.label){case 0:if(n&&typeof n!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,Jm(n,this.getDefaultModelName())];case 1:return e=t.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(n){return Q(this,void 0,void 0,function(){var e,t,a,o,i,s,u,c,l,f;return Z(this,function(h){switch(h.label){case 0:if(n&&typeof n!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=Je.getEnv().readFile,t=yc(n,this.getDefaultModelName()),a=t.manifestUri,o=t.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return e(p).then(function(v){return v.buffer})}))},s=ic.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(a)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,o)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},r.prototype.loadFromWeightMap=function(n){var e=this.extractParamsFromWeigthMap(n),t=e.paramMappings,a=e.params;this._paramMappings=t,this._params=a},r.prototype.extractWeights=function(n){var e=this.extractParams(n),t=e.paramMappings,a=e.params;this._paramMappings=t,this._params=a},r.prototype.traversePropertyPath=function(n){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=n.split("/").reduce(function(o,i){if(!o.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+n);return{obj:o.nextObj,objProp:i,nextObj:o.nextObj[i]}},{nextObj:this.params}),t=e.obj,a=e.objProp;if(!t||!a||!(t[a]instanceof Ee))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+n);return{obj:t,objProp:a}},r}();function cn(r,n,e){return K(function(){var t=Vo(r,n.depthwise_filter,n.pointwise_filter,e,"same");return t=ue(t,n.bias),t})}function Qa(r,n,e){return e===void 0&&(e=!1),K(function(){var t=Re(e?ue(vn(r,n.conv0.filters,[2,2],"same"),n.conv0.bias):cn(r,n.conv0,[2,2])),a=cn(t,n.conv1,[1,1]),o=Re(ue(t,a)),i=cn(o,n.conv2,[1,1]);return Re(ue(t,ue(a,i)))})}function Nr(r,n,e,t){return e===void 0&&(e=!1),t===void 0&&(t=!0),K(function(){var a=Re(e?ue(vn(r,n.conv0.filters,t?[2,2]:[1,1],"same"),n.conv0.bias):cn(r,n.conv0,t?[2,2]:[1,1])),o=cn(a,n.conv1,[1,1]),i=Re(ue(a,o)),s=cn(i,n.conv2,[1,1]),u=Re(ue(a,ue(o,s))),c=cn(u,n.conv3,[1,1]);return Re(ue(a,ue(o,ue(s,c))))})}function xn(r,n,e,t){return e===void 0&&(e="same"),t===void 0&&(t=!1),K(function(){var a=ue(vn(r,n.filters,[1,1],e),n.bias);return t?Re(a):a})}function Yn(r,n){Object.keys(r).forEach(function(e){n.some(function(t){return t.originalPath===e})||r[e].dispose()})}function xa(r,n){return function(e,t,a,o){var i=Qe(r(e*t*a*a),[a,a,e,t]),s=Ne(r(t));return n.push({paramPath:o+"/filters"},{paramPath:o+"/bias"}),{filters:i,bias:s}}}function ui(r,n){return function(e,t,a){var o=at(r(e*t),[e,t]),i=Ne(r(t));return n.push({paramPath:a+"/weights"},{paramPath:a+"/bias"}),{weights:o,bias:i}}}var xc=function(){function r(n,e,t){this.depthwise_filter=n,this.pointwise_filter=e,this.bias=t}return r}();function ci(r,n){return function(e,t,a){var o=Qe(r(9*e),[3,3,e,1]),i=Qe(r(e*t),[1,1,e,t]),s=Ne(r(t));return n.push({paramPath:a+"/depthwise_filter"},{paramPath:a+"/pointwise_filter"},{paramPath:a+"/bias"}),new xc(o,i,s)}}function li(r){return function(n){var e=r(n+"/depthwise_filter",4),t=r(n+"/pointwise_filter",4),a=r(n+"/bias",1);return new xc(e,t,a)}}function lt(r,n){return function(e,t,a){var o=r[e];if(!va(o,t))throw new Error("expected weightMap["+e+"] to be a Tensor"+t+"D, instead have "+o);return n.push({originalPath:e,paramPath:a||e}),o}}function Jn(r){var n=r;function e(a){var o=n.slice(0,a);return n=n.slice(a),o}function t(){return n}return{extractWeights:e,getRemainingWeights:t}}function bc(r,n){var e=xa(r,n),t=ci(r,n);function a(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):t(i,s,u+"/conv0"),f=t(s,s,u+"/conv1"),h=t(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function o(i,s,u,c){c===void 0&&(c=!1);var l=a(i,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=t(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:o}}function Zm(r){var n=[],e=Jn(r),t=e.extractWeights,a=e.getRemainingWeights,o=bc(t,n).extractDenseBlock4Params,i=o(3,32,"dense0",!0),s=o(32,64,"dense1"),u=o(64,128,"dense2"),c=o(128,256,"dense3");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:n,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function wc(r){return function(n){var e=r(n+"/filters",4),t=r(n+"/bias",1);return{filters:e,bias:t}}}function Cc(r,n){var e=lt(r,n),t=wc(e),a=li(e);function o(s,u){u===void 0&&(u=!1);var c=u?t(s+"/conv0"):a(s+"/conv0"),l=a(s+"/conv1"),f=a(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function i(s,u){u===void 0&&(u=!1);var c=u?t(s+"/conv0"):a(s+"/conv0"),l=a(s+"/conv1"),f=a(s+"/conv2"),h=a(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function eg(r){var n=[],e=Cc(r,n).extractDenseBlock4Params,t={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Yn(r,n),{params:t,paramMappings:n}}var _c=function(r){re(n,r);function n(){return r.call(this,"FaceFeatureExtractor")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("FaceFeatureExtractor - load model before inference");return K(function(){var a=e.toBatchTensor(112,!0),o=[122.782,117.001,104.298],i=br(a,o).div(j(255)),s=Nr(i,t.dense0,!0);return s=Nr(s,t.dense1),s=Nr(s,t.dense2),s=Nr(s,t.dense3),s=yr(s,[7,7],[2,2],"valid"),s})},n.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(a){switch(a.label){case 0:return t=this.forwardInput,[4,Ue(e)];case 1:return[2,t.apply(this,[a.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},n.prototype.extractParamsFromWeigthMap=function(e){return eg(e)},n.prototype.extractParams=function(e){return Zm(e)},n}($n);function An(r,n){return K(function(){return ue(ha(r,n.weights),n.bias)})}function ng(r,n,e){var t=[],a=Jn(r),o=a.extractWeights,i=a.getRemainingWeights,s=ui(o,t),u=s(n,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:t,params:{fc:u}}}function tg(r){var n=[],e=lt(r,n);function t(o){var i=e(o+"/weights",2),s=e(o+"/bias",1);return{weights:i,bias:s}}var a={fc:t("fc")};return Yn(r,n),{params:a,paramMappings:n}}function Ec(r){var n={},e={};return Object.keys(r).forEach(function(t){var a=t.startsWith("fc")?e:n;a[t]=r[t]}),{featureExtractorMap:n,classifierMap:e}}var Rc=function(r){re(n,r);function n(e,t){var a=r.call(this,e)||this;return a._faceFeatureExtractor=t,a}return Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),n.prototype.runNet=function(e){var t=this,a=this.params;if(!a)throw new Error(this._name+" - load model before inference");return K(function(){var o=e instanceof ra?t.faceFeatureExtractor.forwardInput(e):e;return An(o.as2D(o.shape[0],-1),a.fc)})},n.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},n.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),a=t.params,o=t.paramMappings;this._params=a,this._paramMappings=o},n.prototype.extractClassifierParams=function(e){return ng(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},n.prototype.extractParamsFromWeigthMap=function(e){var t=Ec(e),a=t.featureExtractorMap,o=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(a),tg(o)},n.prototype.extractParams=function(e){var t=this.getClassifierChannelsIn(),a=this.getClassifierChannelsOut(),o=a*t+a,i=e.slice(0,e.length-o),s=e.slice(e.length-o);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},n}($n),Is=["neutral","happy","sad","angry","fearful","disgusted","surprised"],rg=function(){function r(n){var e=this;if(n.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+n.length);Is.forEach(function(t,a){e[t]=n[a]})}return r.prototype.asSortedArray=function(){var n=this;return Is.map(function(e){return{expression:e,probability:n[e]}}).sort(function(e,t){return t.probability-e.probability})},r}(),ag=function(r){re(n,r);function n(e){return e===void 0&&(e=new _c),r.call(this,"FaceExpressionNet",e)||this}return n.prototype.forwardInput=function(e){var t=this;return K(function(){return Kn(t.runNet(e))})},n.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(a){switch(a.label){case 0:return t=this.forwardInput,[4,Ue(e)];case 1:return[2,t.apply(this,[a.sent()])]}})})},n.prototype.predictExpressions=function(e){return Q(this,void 0,void 0,function(){var t,a,o,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,Ue(e)];case 1:return t=u.sent(),[4,this.forwardInput(t)];case 2:return a=u.sent(),[4,Promise.all(Me(a).map(function(c){return Q(s,void 0,void 0,function(){var l;return Z(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return o=u.sent(),a.dispose(),i=o.map(function(c){return new rg(c)}),[2,t.isBatchInput?i:i[0]]}})})},n.prototype.getDefaultModelName=function(){return"face_expression_model"},n.prototype.getClassifierChannelsIn=function(){return 256},n.prototype.getClassifierChannelsOut=function(){return 7},n}(Rc);function Ic(r,n){var e={expressions:n};return Object.assign({},r,e)}function kc(r){return ta(r)&&r.landmarks instanceof lr&&r.unshiftedLandmarks instanceof lr&&r.alignedRect instanceof fn}function ba(r,n){var e=r.detection.box,t=n.shiftBy(e.x,e.y),a=t.align(),o=r.detection.imageDims,i=new fn(r.detection.score,a.rescale(o.reverse()),o),s={landmarks:t,unshiftedLandmarks:n,alignedRect:i};return Object.assign({},r,s)}function og(r,n){var e=xa(r,n),t=ci(r,n);function a(i,s,u){var c=t(i,s,u+"/separable_conv0"),l=t(s,s,u+"/separable_conv1"),f=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function o(i,s){var u=t(i,i,s+"/separable_conv0"),c=t(i,i,s+"/separable_conv1"),l=t(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:t,extractReductionBlockParams:a,extractMainBlockParams:o}}function ig(r,n){var e=[],t=Jn(r),a=t.extractWeights,o=t.getRemainingWeights,i=og(a,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},v={};ur(n,0,1).forEach(function(b){v["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:m,separable_conv:g};if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:v,exit_flow:x}}}function sg(r,n){var e=lt(r,n),t=wc(e),a=li(e);function o(s){var u=a(s+"/separable_conv0"),c=a(s+"/separable_conv1"),l=t(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=a(s+"/separable_conv0"),c=a(s+"/separable_conv1"),l=a(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:t,extractSeparableConvParams:a,extractReductionBlockParams:o,extractMainBlockParams:i}}function ug(r,n){var e=[],t=sg(r,e),a=t.extractConvParams,o=t.extractSeparableConvParams,i=t.extractReductionBlockParams,s=t.extractMainBlockParams,u=a("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};ur(n,0,1).forEach(function(m){h["main_block_"+m]=s("middle_flow/main_block_"+m)});var d=i("exit_flow/reduction_block"),p=o("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return Yn(r,e),{params:{entry_flow:f,middle_flow:h,exit_flow:v},paramMappings:e}}function Sc(r,n,e){return ue(vn(r,n.filters,e,"same"),n.bias)}function Za(r,n,e){e===void 0&&(e=!0);var t=e?Re(r):r;return t=cn(t,n.separable_conv0,[1,1]),t=cn(Re(t),n.separable_conv1,[1,1]),t=We(t,[3,3],[2,2],"same"),t=ue(t,Sc(r,n.expansion_conv,[2,2])),t}function cg(r,n){var e=cn(Re(r),n.separable_conv0,[1,1]);return e=cn(Re(e),n.separable_conv1,[1,1]),e=cn(Re(e),n.separable_conv2,[1,1]),e=ue(e,r),e}var lg=function(r){re(n,r);function n(e){var t=r.call(this,"TinyXception")||this;return t._numMainBlocks=e,t}return n.prototype.forwardInput=function(e){var t=this,a=this.params;if(!a)throw new Error("TinyXception - load model before inference");return K(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=br(o,i).div(j(256)),u=Re(Sc(s,a.entry_flow.conv_in,[2,2]));return u=Za(u,a.entry_flow.reduction_block_0,!1),u=Za(u,a.entry_flow.reduction_block_1),ur(t._numMainBlocks,0,1).forEach(function(c){u=cg(u,a.middle_flow["main_block_"+c])}),u=Za(u,a.exit_flow.reduction_block),u=Re(cn(u,a.exit_flow.separable_conv,[1,1])),u})},n.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(a){switch(a.label){case 0:return t=this.forwardInput,[4,Ue(e)];case 1:return[2,t.apply(this,[a.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"tiny_xception_model"},n.prototype.extractParamsFromWeigthMap=function(e){return ug(e,this._numMainBlocks)},n.prototype.extractParams=function(e){return ig(e,this._numMainBlocks)},n}($n);function fg(r){var n=[],e=Jn(r),t=e.extractWeights,a=e.getRemainingWeights,o=ui(t,n),i=o(512,1,"fc/age"),s=o(512,2,"fc/gender");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:n,params:{fc:{age:i,gender:s}}}}function hg(r){var n=[],e=lt(r,n);function t(o){var i=e(o+"/weights",2),s=e(o+"/bias",1);return{weights:i,bias:s}}var a={fc:{age:t("fc/age"),gender:t("fc/gender")}};return Yn(r,n),{params:a,paramMappings:n}}var aa;(function(r){r.FEMALE="female",r.MALE="male"})(aa||(aa={}));var dg=function(r){re(n,r);function n(e){e===void 0&&(e=new lg(2));var t=r.call(this,"AgeGenderNet")||this;return t._faceFeatureExtractor=e,t}return Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),n.prototype.runNet=function(e){var t=this,a=this.params;if(!a)throw new Error(this._name+" - load model before inference");return K(function(){var o=e instanceof ra?t.faceFeatureExtractor.forwardInput(e):e,i=yr(o,[7,7],[2,2],"valid").as2D(o.shape[0],-1),s=An(i,a.fc.age).as1D(),u=An(i,a.fc.gender);return{age:s,gender:u}})},n.prototype.forwardInput=function(e){var t=this;return K(function(){var a=t.runNet(e),o=a.age,i=a.gender;return{age:o,gender:Kn(i)}})},n.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(a){switch(a.label){case 0:return t=this.forwardInput,[4,Ue(e)];case 1:return[2,t.apply(this,[a.sent()])]}})})},n.prototype.predictAgeAndGender=function(e){return Q(this,void 0,void 0,function(){var t,a,o,i,s,u,c=this;return Z(this,function(l){switch(l.label){case 0:return[4,Ue(e)];case 1:return t=l.sent(),[4,this.forwardInput(t)];case 2:return a=l.sent(),o=Me(a.age),i=Me(a.gender),s=o.map(function(f,h){return{ageTensor:f,genderTensor:i[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return Q(c,void 0,void 0,function(){var p,v,m,g,x;return Z(this,function(b){switch(b.label){case 0:return[4,h.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return v=b.sent()[0],m=v>.5,g=m?aa.MALE:aa.FEMALE,x=m?v:1-v,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),a.age.dispose(),a.gender.dispose(),[2,t.isBatchInput?u:u[0]]}})})},n.prototype.getDefaultModelName=function(){return"age_gender_model"},n.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},n.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),a=t.params,o=t.paramMappings;this._params=a,this._paramMappings=o},n.prototype.extractClassifierParams=function(e){return fg(e)},n.prototype.extractParamsFromWeigthMap=function(e){var t=Ec(e),a=t.featureExtractorMap,o=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(a),hg(o)},n.prototype.extractParams=function(e){var t=1539,a=e.slice(0,e.length-t),o=e.slice(e.length-t);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(o)},n}($n),Dc=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.postProcess=function(e,t,a){var o=a.map(function(s){var u=s.width,c=s.height,l=t/Math.max(c,u);return{width:u*l,height:c*l}}),i=o.length;return K(function(){var s=function(h,d){return ln([Fn([68],h),Fn([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=o[h],v=p.width,m=p.height;return d(v,m)?Math.abs(v-m)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(Fn([i,136],t)).sub(ln(Array.from(Array(i),function(h,d){return s(c(d),l(d))}))).div(ln(Array.from(Array(i),function(h,d){return s(o[d].width,o[d].height)})));return f})},n.prototype.forwardInput=function(e){var t=this;return K(function(){var a=t.runNet(e);return t.postProcess(a,e.inputSize,e.inputDimensions.map(function(o){var i=o[0],s=o[1];return{height:i,width:s}}))})},n.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(a){switch(a.label){case 0:return t=this.forwardInput,[4,Ue(e)];case 1:return[2,t.apply(this,[a.sent()])]}})})},n.prototype.detectLandmarks=function(e){return Q(this,void 0,void 0,function(){var t,a,o,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,Ue(e)];case 1:return t=s.sent(),a=K(function(){return Me(i.forwardInput(t))}),[4,Promise.all(a.map(function(u,c){return Q(i,void 0,void 0,function(){var l,f,h,d,p;return Z(this,function(v){switch(v.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[v.sent()]),d=l.filter(function(m,g){return bs(g)}),p=l.filter(function(m,g){return!bs(g)}),[2,new zm(Array(68).fill(0).map(function(m,g){return new ge(d[g],p[g])}),{height:t.getInputHeight(c),width:t.getInputWidth(c)})]}})})}))];case 2:return o=s.sent(),a.forEach(function(u){return u.dispose()}),[2,t.isBatchInput?o:o[0]]}})})},n.prototype.getClassifierChannelsOut=function(){return 136},n}(Rc),Ac=function(r){re(n,r);function n(e){return e===void 0&&(e=new _c),r.call(this,"FaceLandmark68Net",e)||this}return n.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},n.prototype.getClassifierChannelsIn=function(){return 256},n}(Dc);function pg(r){var n=[],e=Cc(r,n).extractDenseBlock3Params,t={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Yn(r,n),{params:t,paramMappings:n}}function vg(r){var n=[],e=Jn(r),t=e.extractWeights,a=e.getRemainingWeights,o=bc(t,n).extractDenseBlock3Params,i=o(3,32,"dense0",!0),s=o(32,64,"dense1"),u=o(64,128,"dense2");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:n,params:{dense0:i,dense1:s,dense2:u}}}var mg=function(r){re(n,r);function n(){return r.call(this,"TinyFaceFeatureExtractor")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("TinyFaceFeatureExtractor - load model before inference");return K(function(){var a=e.toBatchTensor(112,!0),o=[122.782,117.001,104.298],i=br(a,o).div(j(255)),s=Qa(i,t.dense0,!0);return s=Qa(s,t.dense1),s=Qa(s,t.dense2),s=yr(s,[14,14],[2,2],"valid"),s})},n.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(a){switch(a.label){case 0:return t=this.forwardInput,[4,Ue(e)];case 1:return[2,t.apply(this,[a.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},n.prototype.extractParamsFromWeigthMap=function(e){return pg(e)},n.prototype.extractParams=function(e){return vg(e)},n}($n),gg=function(r){re(n,r);function n(e){return e===void 0&&(e=new mg),r.call(this,"FaceLandmark68TinyNet",e)||this}return n.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},n.prototype.getClassifierChannelsIn=function(){return 128},n}(Dc);(function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n})(Ac);function yg(r,n){return ue($e(r,n.weights),n.biases)}function fi(r,n,e,t,a){a===void 0&&(a="same");var o=n.conv,i=o.filters,s=o.bias,u=vn(r,i,e,a);return u=ue(u,s),u=yg(u,n.scale),t?Re(u):u}function xg(r,n){return fi(r,n,[1,1],!0)}function Tc(r,n){return fi(r,n,[1,1],!1)}function Nc(r,n){return fi(r,n,[2,2],!0,"valid")}function bg(r,n){function e(s,u,c){var l=r(s),f=l.length/(u*c*c);if(Tm(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return K(function(){return st(Qe(l,[u,f,c,c]),[2,3,1,0])})}function t(s,u,c,l){var f=e(s,u,c),h=Ne(r(u));return n.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function a(s,u){var c=Ne(r(s)),l=Ne(r(s));return n.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function o(s,u,c,l){var f=t(s,u,c,l+"/conv"),h=a(u,l+"/scale");return{conv:f,scale:h}}function i(s,u,c,l,f){f===void 0&&(f=!1);var h=o((f?.5:1)*s,u,c,l+"/conv1"),d=o(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function wg(r){var n=Jn(r),e=n.extractWeights,t=n.getRemainingWeights,a=[],o=bg(e,a),i=o.extractConvLayerParams,s=o.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),S=K(function(){return st(at(e(256*128),[128,256]),[1,0])});if(a.push({paramPath:"fc"}),t().length!==0)throw new Error("weights remaing after extract: "+t().length);var k={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:C,fc:S};return{params:k,paramMappings:a}}function Cg(r,n){var e=lt(r,n);function t(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function a(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=t(i);return{conv:{filters:s,bias:u},scale:c}}function o(i){return{conv1:a(i+"/conv1"),conv2:a(i+"/conv2")}}return{extractConvLayerParams:a,extractResidualLayerParams:o}}function _g(r){var n=[],e=Cg(r,n),t=e.extractConvLayerParams,a=e.extractResidualLayerParams,o=t("conv32_down"),i=a("conv32_1"),s=a("conv32_2"),u=a("conv32_3"),c=a("conv64_down"),l=a("conv64_1"),f=a("conv64_2"),h=a("conv64_3"),d=a("conv128_down"),p=a("conv128_1"),v=a("conv128_2"),m=a("conv256_down"),g=a("conv256_1"),x=a("conv256_2"),b=a("conv256_down_out"),y=r.fc;if(n.push({originalPath:"fc",paramPath:"fc"}),!Am(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:o,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:x,conv256_down_out:b,fc:y};return Yn(r,n),{params:w,paramMappings:n}}function Rn(r,n){var e=xg(r,n.conv1);return e=Tc(e,n.conv2),e=ue(e,r),e=Re(e),e}function Fr(r,n){var e=Nc(r,n.conv1);e=Tc(e,n.conv2);var t=yr(r,2,2,"valid"),a=we(t.shape),o=t.shape[3]!==e.shape[3],i=t.shape[1]!==e.shape[1]||t.shape[2]!==e.shape[2];if(i){var s=tr(e.shape);s[1]=1;var u=we(s);e=Pe([e,u],1);var c=tr(e.shape);c[2]=1;var l=we(c);e=Pe([e,l],2)}return t=o?Pe([t,a],3):t,e=ue(t,e),e=Re(e),e}var Eg=function(r){re(n,r);function n(){return r.call(this,"FaceRecognitionNet")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("FaceRecognitionNet - load model before inference");return K(function(){var a=e.toBatchTensor(150,!0).toFloat(),o=[122.782,117.001,104.298],i=br(a,o).div(j(256)),s=Nc(i,t.conv32_down);s=We(s,3,2,"valid"),s=Rn(s,t.conv32_1),s=Rn(s,t.conv32_2),s=Rn(s,t.conv32_3),s=Fr(s,t.conv64_down),s=Rn(s,t.conv64_1),s=Rn(s,t.conv64_2),s=Rn(s,t.conv64_3),s=Fr(s,t.conv128_down),s=Rn(s,t.conv128_1),s=Rn(s,t.conv128_2),s=Fr(s,t.conv256_down),s=Rn(s,t.conv256_1),s=Rn(s,t.conv256_2),s=Fr(s,t.conv256_down_out);var u=s.mean([1,2]),c=ha(u,t.fc);return c})},n.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(a){switch(a.label){case 0:return t=this.forwardInput,[4,Ue(e)];case 1:return[2,t.apply(this,[a.sent()])]}})})},n.prototype.computeFaceDescriptor=function(e){return Q(this,void 0,void 0,function(){var t,a,o,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,Ue(e)];case 1:return t=s.sent(),a=K(function(){return Me(i.forwardInput(t))}),[4,Promise.all(a.map(function(u){return u.data()}))];case 2:return o=s.sent(),a.forEach(function(u){return u.dispose()}),[2,t.isBatchInput?o:o[0]]}})})},n.prototype.getDefaultModelName=function(){return"face_recognition_model"},n.prototype.extractParamsFromWeigthMap=function(e){return _g(e)},n.prototype.extractParams=function(e){return wg(e)},n}($n);function Fc(r,n){var e={descriptor:n};return Object.assign({},r,e)}function Pc(r,n){var e={age:n};return Object.assign({},r,e)}function Mc(r,n,e){var t={gender:n,genderProbability:e};return Object.assign({},r,t)}var Oc=function(){function r(n){var e=n===void 0?{}:n,t=e.minFaceSize,a=e.scaleFactor,o=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=t||20,this._scaleFactor=a||.709,this._maxNumScales=o||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Rg(r,n){function e(u,c){var l=Qe(r(9*u),[3,3,u,1]),f=Ne(r(u)),h=Ne(r(u)),d=Ne(r(u)),p=Ne(r(u));return n.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function t(u,c,l,f,h){var d=Qe(r(u*c*l*l),[l,l,u,c]),p=Ne(r(c));return n.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function a(u,c,l,f){var h=t(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function o(u,c,l){var f=e(u,l+"/depthwise_conv"),h=a(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function i(){var u=a(3,32,3,"mobilenetv1/conv_0"),c=o(32,64,"mobilenetv1/conv_1"),l=o(64,128,"mobilenetv1/conv_2"),f=o(128,128,"mobilenetv1/conv_3"),h=o(128,256,"mobilenetv1/conv_4"),d=o(256,256,"mobilenetv1/conv_5"),p=o(256,512,"mobilenetv1/conv_6"),v=o(512,512,"mobilenetv1/conv_7"),m=o(512,512,"mobilenetv1/conv_8"),g=o(512,512,"mobilenetv1/conv_9"),x=o(512,512,"mobilenetv1/conv_10"),b=o(512,512,"mobilenetv1/conv_11"),y=o(512,1024,"mobilenetv1/conv_12"),w=o(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,conv_8:m,conv_9:g,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=a(1024,256,1,"prediction_layer/conv_0"),c=a(256,512,3,"prediction_layer/conv_1"),l=a(512,128,1,"prediction_layer/conv_2"),f=a(128,256,3,"prediction_layer/conv_3"),h=a(256,128,1,"prediction_layer/conv_4"),d=a(128,256,3,"prediction_layer/conv_5"),p=a(256,64,1,"prediction_layer/conv_6"),v=a(64,128,3,"prediction_layer/conv_7"),m=t(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=t(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=t(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=t(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=t(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=t(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=t(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=t(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),k=t(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),R=t(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),I=t(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),N=t(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:m,class_predictor:g},B={box_encoding_predictor:x,class_predictor:b},M={box_encoding_predictor:y,class_predictor:w},L={box_encoding_predictor:C,class_predictor:S},U={box_encoding_predictor:k,class_predictor:R},z={box_encoding_predictor:I,class_predictor:N};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:A,box_predictor_1:B,box_predictor_2:M,box_predictor_3:L,box_predictor_4:U,box_predictor_5:z}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function Ig(r){var n=[],e=Jn(r),t=e.extractWeights,a=e.getRemainingWeights,o=Rg(t,n),i=o.extractMobilenetV1Params,s=o.extractPredictionLayerParams,u=i(),c=s(),l=ko(t(5118*4),[1,5118,4]),f={extra_dim:l};if(n.push({paramPath:"output_layer/extra_dim"}),a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:n}}function kg(r,n){var e=lt(r,n);function t(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function a(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),v=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),m=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),x=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:t("MobilenetV1",c,d)}}function o(){return{conv_0:t("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:a(1),conv_2:a(2),conv_3:a(3),conv_4:a(4),conv_5:a(5),conv_6:a(6),conv_7:a(7),conv_8:a(8),conv_9:a(9),conv_10:a(10),conv_11:a(11),conv_12:a(12),conv_13:a(13)}}function i(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:t("Prediction",0,"prediction_layer/conv_0"),conv_1:t("Prediction",1,"prediction_layer/conv_1"),conv_2:t("Prediction",2,"prediction_layer/conv_2"),conv_3:t("Prediction",3,"prediction_layer/conv_3"),conv_4:t("Prediction",4,"prediction_layer/conv_4"),conv_5:t("Prediction",5,"prediction_layer/conv_5"),conv_6:t("Prediction",6,"prediction_layer/conv_6"),conv_7:t("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:o,extractPredictionLayerParams:u}}function Sg(r){var n=[],e=kg(r,n),t=e.extractMobilenetV1Params,a=e.extractPredictionLayerParams,o=r["Output/extra_dim"];if(n.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!ma(o))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+o);var i={mobilenetv1:t(),prediction_layer:a(),output_layer:{extra_dim:o}};return Yn(r,n),{params:i,paramMappings:n}}function In(r,n,e){return K(function(){var t=vn(r,n.filters,e,"same");return t=ue(t,n.batch_norm_offset),Lo(t,0,6)})}var Dg=.0010000000474974513;function Ag(r,n,e){return K(function(){var t=fa(r,n.filters,e,"same");return t=Su(t,n.batch_norm_mean,n.batch_norm_variance,n.batch_norm_offset,n.batch_norm_scale,Dg),Lo(t,0,6)})}function Tg(r){return[2,4,6,12].some(function(n){return n===r})?[2,2]:[1,1]}function Ng(r,n){return K(function(){var e=null,t=In(r,n.conv_0,[2,2]),a=[n.conv_1,n.conv_2,n.conv_3,n.conv_4,n.conv_5,n.conv_6,n.conv_7,n.conv_8,n.conv_9,n.conv_10,n.conv_11,n.conv_12,n.conv_13];if(a.forEach(function(o,i){var s=i+1,u=Tg(s);t=Ag(t,o.depthwise_conv,u),t=In(t,o.pointwise_conv,[1,1]),s===11&&(e=t)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:t,conv11:e}})}function Fg(r,n,e,t,a){var o=r.shape[0],i=Math.min(e,o),s=n.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>a}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=t?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=Pg(r,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=a))break}f===l.score&&c.push(l.boxIndex)}}),c}function Pg(r,n,e){var t=r.arraySync(),a=Math.min(t[n][0],t[n][2]),o=Math.min(t[n][1],t[n][3]),i=Math.max(t[n][0],t[n][2]),s=Math.max(t[n][1],t[n][3]),u=Math.min(t[e][0],t[e][2]),c=Math.min(t[e][1],t[e][3]),l=Math.max(t[e][0],t[e][2]),f=Math.max(t[e][1],t[e][3]),h=(i-a)*(s-o),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(a,u),v=Math.max(o,c),m=Math.min(i,l),g=Math.min(s,f),x=Math.max(m-p,0)*Math.max(g-v,0);return x/(h+d-x)}function Mg(r){var n=Me(st(r,[1,0])),e=[Be(n[2],n[0]),Be(n[3],n[1])],t=[ue(n[0],gn(e[0],j(2))),ue(n[1],gn(e[1],j(2)))];return{sizes:e,centers:t}}function Og(r,n){var e=Mg(r),t=e.sizes,a=e.centers,o=Me(st(n,[1,0])),i=gn($e(vo(gn(o[2],j(5))),t[0]),j(2)),s=ue($e(gn(o[0],j(10)),t[0]),a[0]),u=gn($e(vo(gn(o[3],j(5))),t[1]),j(2)),c=ue($e(gn(o[1],j(10)),t[1]),a[1]);return st(ln([Be(s,i),Be(c,u),ue(s,i),ue(c,u)]),[1,0])}function Bg(r,n,e){return K(function(){var t=r.shape[0],a=Og(yn(Bt(e.extra_dim,[t,1,1]),[-1,4]),yn(r,[-1,4]));a=yn(a,[t,a.shape[0]/t,4]);var o=Eu(Pn(n,[0,0,1],[-1,-1,-1])),i=Pn(o,[0,0,0],[-1,-1,1]);i=yn(i,[t,i.shape[1]]);var s=Me(a),u=Me(i);return{boxes:s,scores:u}})}function Tt(r,n){return K(function(){var e=r.shape[0],t=yn(xn(r,n.box_encoding_predictor),[e,-1,1,4]),a=yn(xn(r,n.class_predictor),[e,-1,3]);return{boxPredictionEncoding:t,classPrediction:a}})}function Lg(r,n,e){return K(function(){var t=In(r,e.conv_0,[1,1]),a=In(t,e.conv_1,[2,2]),o=In(a,e.conv_2,[1,1]),i=In(o,e.conv_3,[2,2]),s=In(i,e.conv_4,[1,1]),u=In(s,e.conv_5,[2,2]),c=In(u,e.conv_6,[1,1]),l=In(c,e.conv_7,[2,2]),f=Tt(n,e.box_predictor_0),h=Tt(r,e.box_predictor_1),d=Tt(a,e.box_predictor_2),p=Tt(i,e.box_predictor_3),v=Tt(u,e.box_predictor_4),m=Tt(l,e.box_predictor_5),g=Pe([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),x=Pe([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var wr=function(){function r(n){var e=n===void 0?{}:n,t=e.minConfidence,a=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=t||.5,this._maxResults=a||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),Bc=function(r){re(n,r);function n(){return r.call(this,"SsdMobilenetv1")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("SsdMobilenetv1 - load model before inference");return K(function(){var a=e.toBatchTensor(512,!1).toFloat(),o=Be($e(a,j(.007843137718737125)),j(1)),i=Ng(o,t.mobilenetv1),s=Lg(i.out,i.conv11,t.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return Bg(u,c,t.output_layer)})},n.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return Z(this,function(a){switch(a.label){case 0:return t=this.forwardInput,[4,Ue(e)];case 1:return[2,t.apply(this,[a.sent()])]}})})},n.prototype.locateFaces=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var a,o,i,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,C,S,k;return Z(this,function(R){switch(R.label){case 0:return a=new wr(t),o=a.maxResults,i=a.minConfidence,[4,Ue(e)];case 1:for(s=R.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return m=(v=Array).from,[4,h.data()];case 2:return p=m.apply(v,[R.sent()]),g=.5,x=Fg(f,p,o,g,i),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,C=y/b.height,S=f.arraySync(),k=x.map(function(I){var N=[Math.max(0,S[I][0]),Math.min(1,S[I][2])].map(function(z){return z*C}),A=N[0],B=N[1],M=[Math.max(0,S[I][1]),Math.min(1,S[I][3])].map(function(z){return z*w}),L=M[0],U=M[1];return new fn(p[I],new ni(L,A,U-L,B-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,k]}})})},n.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},n.prototype.extractParamsFromWeigthMap=function(e){return Sg(e)},n.prototype.extractParams=function(e){return Ig(e)},n}($n);(function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n})(Bc);var Wg=.4,zg=[new ge(.738768,.874946),new ge(2.42204,2.65704),new ge(4.30971,7.04493),new ge(10.246,4.59428),new ge(12.6868,11.8741)],Ug=[new ge(1.603231,2.094468),new ge(6.041143,7.080126),new ge(2.882459,3.518061),new ge(4.266906,5.178857),new ge(9.041765,10.66308)],Vg=[117.001,114.697,97.404],Gg="tiny_yolov2_model",Hg="tiny_yolov2_separable_conv_model",Pr=function(r){return typeof r=="number"};function jg(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Pr(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(n){return typeof n=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(n){return n||{}}).every(function(n){return Pr(n.x)&&Pr(n.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Pr)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function hi(r){return K(function(){var n=$e(r,j(.10000000149011612));return ue(Re(Be(r,n)),n)})}function Zn(r,n){return K(function(){var e=wt(r,[[0,0],[1,1],[1,1],[0,0]]);return e=vn(e,n.conv.filters,[1,1],"valid"),e=Be(e,n.bn.sub),e=$e(e,n.bn.truediv),e=ue(e,n.conv.bias),hi(e)})}function et(r,n){return K(function(){var e=wt(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Vo(e,n.depthwise_filter,n.pointwise_filter,[1,1],"valid"),e=ue(e,n.bias),hi(e)})}function qg(r,n){var e=xa(r,n);function t(i,s){var u=Ne(r(i)),c=Ne(r(i));return n.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function a(i,s,u){var c=e(i,s,3,u+"/conv"),l=t(s,u+"/bn");return{conv:c,bn:l}}var o=ci(r,n);return{extractConvParams:e,extractConvWithBatchNormParams:a,extractSeparableConvParams:o}}function Kg(r,n,e,t){var a=Jn(r),o=a.extractWeights,i=a.getRemainingWeights,s=[],u=qg(o,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(n.withSeparableConvs){var d=t[0],p=t[1],v=t[2],m=t[3],g=t[4],x=t[5],b=t[6],y=t[7],w=t[8],C=n.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),S=f(p,v,"conv1"),k=f(v,m,"conv2"),R=f(m,g,"conv3"),I=f(g,x,"conv4"),N=f(x,b,"conv5"),A=y?f(b,y,"conv6"):void 0,B=w?f(y,w,"conv7"):void 0,M=c(w||y||b,5*e,1,"conv8");h={conv0:C,conv1:S,conv2:k,conv3:R,conv4:I,conv5:N,conv6:A,conv7:B,conv8:M}}else{var d=t[0],p=t[1],v=t[2],m=t[3],g=t[4],x=t[5],b=t[6],y=t[7],w=t[8],C=l(d,p,"conv0"),S=l(p,v,"conv1"),k=l(v,m,"conv2"),R=l(m,g,"conv3"),I=l(g,x,"conv4"),N=l(x,b,"conv5"),A=l(b,y,"conv6"),B=l(y,w,"conv7"),M=c(w,5*e,1,"conv8");h={conv0:C,conv1:S,conv2:k,conv3:R,conv4:I,conv5:N,conv6:A,conv7:B,conv8:M}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:h,paramMappings:s}}function Xg(r,n){var e=lt(r,n);function t(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function a(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function o(s){var u=a(s+"/conv"),c=t(s+"/bn");return{conv:u,bn:c}}var i=li(e);return{extractConvParams:a,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function $g(r,n){var e=[],t=Xg(r,e),a=t.extractConvParams,o=t.extractConvWithBatchNormParams,i=t.extractSeparableConvParams,s;if(n.withSeparableConvs){var u=n.filterSizes&&n.filterSizes.length||9;s={conv0:n.isFirstLayerConv2d?a("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:a("conv8")}}else s={conv0:o("conv0"),conv1:o("conv1"),conv2:o("conv2"),conv3:o("conv3"),conv4:o("conv4"),conv5:o("conv5"),conv6:o("conv6"),conv7:o("conv7"),conv8:a("conv8")};return Yn(r,e),{params:s,paramMappings:e}}var ks;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(ks||(ks={}));var di=function(){function r(n){var e=n===void 0?{}:n,t=e.inputSize,a=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=t||416,this._scoreThreshold=a||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Lc=function(r){re(n,r);function n(e){var t=r.call(this,"TinyYolov2")||this;return jg(e),t._config=e,t}return Object.defineProperty(n.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),n.prototype.runTinyYolov2=function(e,t){var a=Zn(e,t.conv0);return a=We(a,[2,2],[2,2],"same"),a=Zn(a,t.conv1),a=We(a,[2,2],[2,2],"same"),a=Zn(a,t.conv2),a=We(a,[2,2],[2,2],"same"),a=Zn(a,t.conv3),a=We(a,[2,2],[2,2],"same"),a=Zn(a,t.conv4),a=We(a,[2,2],[2,2],"same"),a=Zn(a,t.conv5),a=We(a,[2,2],[1,1],"same"),a=Zn(a,t.conv6),a=Zn(a,t.conv7),xn(a,t.conv8,"valid",!1)},n.prototype.runMobilenet=function(e,t){var a=this.config.isFirstLayerConv2d?hi(xn(e,t.conv0,"valid",!1)):et(e,t.conv0);return a=We(a,[2,2],[2,2],"same"),a=et(a,t.conv1),a=We(a,[2,2],[2,2],"same"),a=et(a,t.conv2),a=We(a,[2,2],[2,2],"same"),a=et(a,t.conv3),a=We(a,[2,2],[2,2],"same"),a=et(a,t.conv4),a=We(a,[2,2],[2,2],"same"),a=et(a,t.conv5),a=We(a,[2,2],[1,1],"same"),a=t.conv6?et(a,t.conv6):a,a=t.conv7?et(a,t.conv7):a,xn(a,t.conv8,"valid",!1)},n.prototype.forwardInput=function(e,t){var a=this,o=this.params;if(!o)throw new Error("TinyYolov2 - load model before inference");return K(function(){var i=e.toBatchTensor(t,!1).toFloat();return i=a.config.meanRgb?br(i,a.config.meanRgb):i,i=i.div(j(256)),a.config.withSeparableConvs?a.runMobilenet(i,o):a.runTinyYolov2(i,o)})},n.prototype.forward=function(e,t){return Q(this,void 0,void 0,function(){var a;return Z(this,function(o){switch(o.label){case 0:return a=this.forwardInput,[4,Ue(e)];case 1:return[4,a.apply(this,[o.sent(),t])];case 2:return[2,o.sent()]}})})},n.prototype.detect=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var a,o,i,s,u,c,l,f,h,d,p,v,m,g,x=this;return Z(this,function(b){switch(b.label){case 0:return a=new di(t),o=a.inputSize,i=a.scoreThreshold,[4,Ue(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,o)];case 2:return u=b.sent(),c=K(function(){return Me(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return f=b.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),d=f.map(function(y){return y.score}),p=f.map(function(y){return y.classScore}),v=f.map(function(y){return x.config.classes[y.label]}),m=cr(h.map(function(y){return y.rescale(o)}),d,this.config.iouThreshold,!0),g=m.map(function(y){return new cc(d[y],p[y],v[y],h[y],l)}),[2,g]}})})},n.prototype.getDefaultModelName=function(){return""},n.prototype.extractParamsFromWeigthMap=function(e){return $g(e,this.config)},n.prototype.extractParams=function(e){var t=this.config.filterSizes||n.DEFAULT_FILTER_SIZES,a=t?t.length:void 0;if(a!==7&&a!==8&&a!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+a+" filterSizes in config");return Kg(e,this.config,this.boxEncodingSize,t)},n.prototype.extractBoxes=function(e,t,a){return Q(this,void 0,void 0,function(){var o,i,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,C,S,k,R,I,N,A,B,M,L,U,z,W=this;return Z(this,function(G){switch(G.label){case 0:return o=t.width,i=t.height,s=Math.max(o,i),u=s/o,c=s/i,l=e.shape[1],f=this.config.anchors.length,h=K(function(){var H=e.reshape([l,l,f,W.boxEncodingSize]),q=H.slice([0,0,0,0],[l,l,f,4]),ee=H.slice([0,0,0,4],[l,l,f,1]),ne=W.withClassScores?Kn(H.slice([0,0,0,5],[l,l,f,W.config.classes.length]),3):j(0);return[q,ee,ne]}),d=h[0],p=h[1],v=h[2],m=[],[4,p.array()];case 1:return g=G.sent(),[4,d.array()];case 2:x=G.sent(),b=0,G.label=3;case 3:if(!(b<l))return[3,12];y=0,G.label=4;case 4:if(!(y<l))return[3,11];w=0,G.label=5;case 5:return w<f?(C=Ja(g[b][y][w][0]),!a||C>a?(S=(y+Ja(x[b][y][w][0]))/l*u,k=(b+Ja(x[b][y][w][1]))/l*c,R=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,I=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,N=S-R/2,A=k-I/2,B={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,B)]:[3,7]):[3,9]):[3,10];case 6:return z=G.sent(),[3,8];case 7:z={classScore:1,label:0},G.label=8;case 8:M=z,L=M.classScore,U=M.label,m.push(qe({box:new ga(N,A,N+R,A+I),score:C,classScore:C*L,label:U},B)),G.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,m]}})})},n.prototype.extractPredictedClass=function(e,t){return Q(this,void 0,void 0,function(){var a,o,i,s;return Z(this,function(u){switch(u.label){case 0:return a=t.row,o=t.col,i=t.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[a][o][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},n.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],n}($n),Yg=function(r){re(n,r);function n(e){e===void 0&&(e=!0);var t=this,a=Object.assign({},{withSeparableConvs:e,iouThreshold:Wg,classes:["face"]},e?{anchors:Ug,meanRgb:Vg}:{anchors:zg,withClassScores:!0});return t=r.call(this,a)||this,t}return Object.defineProperty(n.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),n.prototype.locateFaces=function(e,t){return Q(this,void 0,void 0,function(){var a;return Z(this,function(o){switch(o.label){case 0:return[4,this.detect(e,t)];case 1:return a=o.sent(),[2,a.map(function(i){return new fn(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},n.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Hg:Gg},n.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},n}(Lc),Jg=function(r){re(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return n}(di),Cr=function(){function r(){}return r.prototype.then=function(n){return Q(this,void 0,void 0,function(){var e;return Z(this,function(t){switch(t.label){case 0:return e=n,[4,this.run()];case 1:return[2,e.apply(void 0,[t.sent()])]}})})},r.prototype.run=function(){return Q(this,void 0,void 0,function(){return Z(this,function(n){throw new Error("ComposableTask - run is not implemented")})})},r}();function wa(r,n,e,t,a){return a===void 0&&(a=function(o){var i=o.alignedRect;return i}),Q(this,void 0,void 0,function(){var o,i,s,u,c;return Z(this,function(l){switch(l.label){case 0:return o=r.map(function(f){return kc(f)?a(f):f.detection}),s=t,s?[3,5]:n instanceof Ee?[4,si(n,o)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,ii(n,o)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(f){return f instanceof Ee&&f.dispose()}),[2,c]}})})}function pi(r,n,e,t,a){return Q(this,void 0,void 0,function(){var o=this;return Z(this,function(i){return[2,wa([r],n,function(s){return Q(o,void 0,void 0,function(){return Z(this,function(u){return[2,e(s[0])]})})},t,a)]})})}function Qg(r){return K(function(){return ln(Me(r,3).reverse(),3)})}var Mr=2,oa=12;function Zg(r,n){var e=xa(r,n),t=ui(r,n);function a(c,l){var f=Ne(r(c));return n.push({paramPath:l}),f}function o(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=a(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),v=a(c[2],l+"/prelu2_alpha"),m=e(c[2],c[3],f?2:3,l+"/conv3"),g=a(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function i(){var c=o([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return qe(qe({},c),{conv4_1:l,conv4_2:f})}function s(){var c=o([3,28,48,64],"rnet",!0),l=t(576,128,"rnet/fc1"),f=a(128,"rnet/prelu4_alpha"),h=t(128,2,"rnet/fc2_1"),d=t(128,4,"rnet/fc2_2");return qe(qe({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=o([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=a(128,"onet/prelu4_alpha"),h=t(1152,256,"onet/fc1"),d=a(256,"onet/prelu5_alpha"),p=t(256,2,"onet/fc2_1"),v=t(256,4,"onet/fc2_2"),m=t(256,10,"onet/fc2_3");return qe(qe({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:m})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function ey(r){var n=Jn(r),e=n.extractWeights,t=n.getRemainingWeights,a=[],o=Zg(e,a),i=o.extractPNetParams,s=o.extractRNetParams,u=o.extractONetParams,c=i(),l=s(),f=u();if(t().length!==0)throw new Error("weights remaing after extract: "+t().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:a}}function ny(r,n){var e=lt(r,n);function t(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function a(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function o(l){return e(l,1)}function i(l){var f=t(l+"/conv1"),h=o(l+"/prelu1_alpha"),d=t(l+"/conv2"),p=o(l+"/prelu2_alpha"),v=t(l+"/conv3"),m=o(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:m}}function s(){var l=i("pnet"),f=t("pnet/conv4_1"),h=t("pnet/conv4_2");return qe(qe({},l),{conv4_1:f,conv4_2:h})}function u(){var l=i("rnet"),f=a("rnet/fc1"),h=o("rnet/prelu4_alpha"),d=a("rnet/fc2_1"),p=a("rnet/fc2_2");return qe(qe({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),f=t("onet/conv4"),h=o("onet/prelu4_alpha"),d=a("onet/fc1"),p=o("onet/prelu5_alpha"),v=a("onet/fc2_1"),m=a("onet/fc2_2"),g=a("onet/fc2_3");return qe(qe({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function ty(r){var n=[],e=ny(r,n),t=e.extractPNetParams,a=e.extractRNetParams,o=e.extractONetParams,i=t(),s=a(),u=o();return Yn(r,n),{params:{pnet:i,rnet:s,onet:u},paramMappings:n}}function _o(r,n){var e=n[0],t=n[1];return{height:Math.floor(e*r),width:Math.floor(t*r)}}function ry(r,n,e){for(var t=e[0],a=e[1],o=oa/r,i=[],s=Math.min(t,a)*o,u=0;s>=12;)i.push(o*Math.pow(n,u)),s=s*n,u+=1;return i}var vi=function(r){re(n,r);function n(e,t,a,o){return r.call(this,{left:e,top:t,right:a,bottom:o},!0)||this}return n}(Mn);function Wc(r){return K(function(){return $e(Be(r,j(127.5)),j(.0078125))})}function Vt(r,n){return K(function(){return ue(Re(r),$e(n,Qr(Re(Qr(r)))))})}function mi(r,n,e){return e===void 0&&(e=!1),K(function(){var t=xn(r,n.conv1,"valid");return t=Vt(t,n.prelu1_alpha),t=We(t,e?[2,2]:[3,3],[2,2],"same"),t=xn(t,n.conv2,"valid"),t=Vt(t,n.prelu2_alpha),t=e?t:We(t,[3,3],[2,2],"valid"),t=xn(t,n.conv3,"valid"),t=Vt(t,n.prelu3_alpha),t})}function ay(r,n){return K(function(){var e=mi(r,n,!0),t=xn(e,n.conv4_1,"valid"),a=hn(da(t,3),3),o=Kn(Be(t,a),3),i=xn(e,n.conv4_2,"valid");return{prob:o,regions:i}})}function oy(r,n){return K(function(){var e=_o(n,r.shape.slice(1)),t=e.height,a=e.width,o=Ko.resizeBilinear(r,[t,a]),i=Wc(o);return st(i,[0,2,1,3])})}function iy(r,n,e,t){for(var a=[],o=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)o[i][s]>=t&&a.push(new ge(s,i));var u=a.map(function(c){var l=new ga(Math.round((c.y*Mr+1)/e),Math.round((c.x*Mr+1)/e),Math.round((c.y*Mr+oa)/e),Math.round((c.x*Mr+oa)/e)),f=o[c.y][c.x],h=n.arraySync(),d=new vi(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function sy(r,n,e,t,a){a.stage1=[];var o=n.map(function(h){return K(function(){var d={scale:h},p=oy(r,h),v=Date.now(),m=ay(p,t),g=m.prob,x=m.regions;d.pnet=Date.now()-v;var b=Me(Me(g,3)[1])[0],y=Me(x)[0];return{scoresTensor:b,regionsTensor:y,scale:h,statsForScale:d}})}),i=o.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,v=h.scale,m=h.statsForScale,g=iy(d,p,v,e);if(d.dispose(),p.dispose(),!g.length)return a.stage1.push(m),[];var x=Date.now(),b=cr(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return m.nms=Date.now()-x,m.numBoxes=b.length,a.stage1.push(m),b.map(function(y){return g[y]})}),s=i.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=cr(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);a.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new ga(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function zc(r,n,e){var t=e.width,a=e.height;return Q(this,void 0,void 0,function(){var o,i,s,u=this;return Z(this,function(c){switch(c.label){case 0:return o=jn(r),[4,Promise.all(n.map(function(l){return Q(u,void 0,void 0,function(){var f,h,d,p,v,m,g,x;return Z(this,function(b){return f=l.padAtBorders(r.height,r.width),h=f.y,d=f.ey,p=f.x,v=f.ex,m=p-1,g=h-1,x=o.getImageData(m,g,v-m,d-g),[2,Je.isNodejs()?oi(x):createImageBitmap(x)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var f=ya({width:t,height:a}),h=jn(f);h.drawImage(l,0,0,t,a);for(var d=h.getImageData(0,0,t,a).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var f=K(function(){var h=st(Qe(l,[1,t,a,3]),[0,2,1,3]).toFloat();return Wc(h)});return f})]}})})}function uy(r,n){return K(function(){var e=mi(r,n),t=yn(e,[e.shape[0],n.fc1.weights.shape[0]]),a=An(t,n.fc1),o=Vt(a,n.prelu4_alpha),i=An(o,n.fc2_1),s=hn(da(i,1),1),u=Kn(Be(i,s),1),c=An(o,n.fc2_2),l=Me(u,1)[1];return{scores:l,regions:c}})}function cy(r,n,e,t,a){return Q(this,void 0,void 0,function(){var o,i,s,u,c,l,f,h,d,p,v,m,g,x;return Z(this,function(b){switch(b.label){case 0:return o=Date.now(),[4,zc(r,n,{width:24,height:24})];case 1:return i=b.sent(),a.stage2_extractImagePatches=Date.now()-o,o=Date.now(),s=i.map(function(y){var w=uy(y,t);return y.dispose(),w}),a.stage2_rnet=Date.now()-o,u=s.length>1?Pe(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),h=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),d=h.map(function(y){return n[y]}),p=h.map(function(y){return c[y]}),v=[],m=[],d.length>0&&(o=Date.now(),g=cr(d,p,.7),a.stage2_nms=Date.now()-o,x=g.map(function(y){var w=s[h[y]].regions.arraySync();return new vi(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(y){return p[y]}),v=g.map(function(y,w){return d[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function ly(r,n){return K(function(){var e=mi(r,n);e=We(e,[2,2],[2,2],"same"),e=xn(e,n.conv4,"valid"),e=Vt(e,n.prelu4_alpha);var t=yn(e,[e.shape[0],n.fc1.weights.shape[0]]),a=An(t,n.fc1),o=Vt(a,n.prelu5_alpha),i=An(o,n.fc2_1),s=hn(da(i,1),1),u=Kn(Be(i,s),1),c=An(o,n.fc2_2),l=An(o,n.fc2_3),f=Me(u,1)[1];return{scores:f,regions:c,points:l}})}function fy(r,n,e,t,a){return Q(this,void 0,void 0,function(){var o,i,s,u,c,l,f,h,d,p,v,m,g,x,b;return Z(this,function(y){switch(y.label){case 0:return o=Date.now(),[4,zc(r,n,{width:48,height:48})];case 1:return i=y.sent(),a.stage3_extractImagePatches=Date.now()-o,o=Date.now(),s=i.map(function(w){var C=ly(w,t);return w.dispose(),C}),a.stage3_onet=Date.now()-o,u=s.length>1?Pe(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),d=h.map(function(w){var C=s[w].regions.arraySync();return new vi(C[0][0],C[0][1],C[0][2],C[0][3])}),p=h.map(function(w,C){return n[w].calibrate(d[C])}),v=h.map(function(w){return c[w]}),m=[],g=[],x=[],p.length>0&&(o=Date.now(),b=cr(p,v,.7,!1),a.stage3_nms=Date.now()-o,m=b.map(function(w){return p[w]}),g=b.map(function(w){return v[w]}),x=b.map(function(w,C){return Array(5).fill(0).map(function(S,k){var R=s[w].points.arraySync();return new ge(R[0][k]*(m[C].width+1)+m[C].left,R[0][k+5]*(m[C].height+1)+m[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:x}]}})})}var hy=function(r){re(n,r);function n(){return r.call(this,"Mtcnn")||this}return n.prototype.load=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(t){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},n.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(t){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},n.prototype.forwardInput=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var a,o,i,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,C,S,k;return Z(this,function(R){switch(R.label){case 0:if(a=this.params,!a)throw new Error("Mtcnn - load model before inference");if(o=e.canvases[0],!o)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=K(function(){return Qg(hn(Zo.fromPixels(o)).toFloat())}),c=function(I){return u.dispose(),i.total=Date.now()-s,I},l=u.shape.slice(1),f=l[0],h=l[1],d=new Oc(t),p=d.minFaceSize,v=d.scaleFactor,m=d.maxNumScales,g=d.scoreThresholds,x=d.scaleSteps,b=(x||ry(p,v,[f,h])).filter(function(I){var N=_o(I,[f,h]);return Math.min(N.width,N.height)>oa}).slice(0,m),i.scales=b,i.pyramid=b.map(function(I){return _o(I,[f,h])}),y=Date.now(),[4,sy(u,b,g[0],a.pnet,i)];case 1:return w=R.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,cy(o,w.boxes,g[1],a.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=R.sent(),i.total_stage2=Date.now()-y,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,y=Date.now(),[4,fy(o,C.boxes,g[2],a.onet,i)]):[2,c({results:[],stats:i})];case 3:return S=R.sent(),i.total_stage3=Date.now()-y,k=S.boxes.map(function(I,N){return ba(fr({},new fn(S.scores[N],new ni(I.left/h,I.top/f,I.width/h,I.height/f),{height:f,width:h})),new Wm(S.points[N].map(function(A){return A.sub(new ge(I.left,I.top)).div(new ge(I.width,I.height))}),{width:I.width,height:I.height}))}),[2,c({results:k,stats:i})]}})})},n.prototype.forward=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var a;return Z(this,function(o){switch(o.label){case 0:return a=this.forwardInput,[4,Ue(e)];case 1:return[4,a.apply(this,[o.sent(),t])];case 2:return[2,o.sent().results]}})})},n.prototype.forwardWithStats=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var a;return Z(this,function(o){switch(o.label){case 0:return a=this.forwardInput,[4,Ue(e)];case 1:return[2,a.apply(this,[o.sent(),t])]}})})},n.prototype.getDefaultModelName=function(){return"mtcnn_model"},n.prototype.extractParamsFromWeigthMap=function(e){return ty(e)},n.prototype.extractParams=function(e){return ey(e)},n}($n),dy=.4,py=[new ge(1.603231,2.094468),new ge(6.041143,7.080126),new ge(2.882459,3.518061),new ge(4.266906,5.178857),new ge(9.041765,10.66308)],vy=[117.001,114.697,97.404],my=function(r){re(n,r);function n(){var e=this,t={withSeparableConvs:!0,iouThreshold:dy,classes:["face"],anchors:py,meanRgb:vy,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,t)||this,e}return Object.defineProperty(n.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),n.prototype.locateFaces=function(e,t){return Q(this,void 0,void 0,function(){var a;return Z(this,function(o){switch(o.label){case 0:return[4,this.detect(e,t)];case 1:return a=o.sent(),[2,a.map(function(i){return new fn(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},n.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},n.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},n}(Lc),Ye={ssdMobilenetv1:new Bc,tinyFaceDetector:new my,tinyYolov2:new Yg,mtcnn:new hy,faceLandmark68Net:new Ac,faceLandmark68TinyNet:new gg,faceRecognitionNet:new Eg,faceExpressionNet:new ag,ageGenderNet:new dg},Uc=function(r){re(n,r);function n(e,t,a){var o=r.call(this)||this;return o.parentTask=e,o.input=t,o.extractedFaces=a,o}return n}(Cr),gi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,a=this;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,wa(e,this.input,function(i){return Q(a,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Ye.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return t=o.sent(),[2,e.map(function(i,s){return Ic(i,t[s])})]}})})},n.prototype.withAgeAndGender=function(){return new wi(this,this.input)},n}(Uc),yi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),e?[4,pi(e,this.input,function(o){return Ye.faceExpressionNet.predictExpressions(o)},this.extractedFaces)]:[2];case 2:return t=a.sent(),[2,Ic(e,t)]}})})},n.prototype.withAgeAndGender=function(){return new Ci(this,this.input)},n}(Uc),xi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withAgeAndGender=function(){return new _i(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Ri(this,this.input)},n}(gi),bi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withAgeAndGender=function(){return new Ei(this,this.input)},n.prototype.withFaceDescriptor=function(){return new Ii(this,this.input)},n}(yi),Vc=function(r){re(n,r);function n(e,t,a){var o=r.call(this)||this;return o.parentTask=e,o.input=t,o.extractedFaces=a,o}return n}(Cr),wi=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,a=this;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,wa(e,this.input,function(i){return Q(a,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Ye.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return t=o.sent(),[2,e.map(function(i,s){var u=t[s],c=u.age,l=u.gender,f=u.genderProbability;return Pc(Mc(i,l,f),c)})]}})})},n.prototype.withFaceExpressions=function(){return new gi(this,this.input)},n}(Vc),Ci=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,a,o,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,pi(e,this.input,function(u){return Ye.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return t=s.sent(),a=t.age,o=t.gender,i=t.genderProbability,[2,Pc(Mc(e,o,i),a)]}})})},n.prototype.withFaceExpressions=function(){return new yi(this,this.input)},n}(Vc),_i=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withFaceExpressions=function(){return new xi(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Ri(this,this.input)},n}(wi),Ei=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withFaceExpressions=function(){return new bi(this,this.input)},n.prototype.withFaceDescriptor=function(){return new Ii(this,this.input)},n}(Ci),Gc=function(r){re(n,r);function n(e,t){var a=r.call(this)||this;return a.parentTask=e,a.input=t,a}return n}(Cr),Ri=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,wa(e,this.input,function(o){return Promise.all(o.map(function(i){return Ye.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(o){return o.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return t=a.sent(),[2,t.map(function(o,i){return Fc(e[i],o)})]}})})},n.prototype.withFaceExpressions=function(){return new xi(this,this.input)},n.prototype.withAgeAndGender=function(){return new _i(this,this.input)},n}(Gc),Ii=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),e?[4,pi(e,this.input,function(o){return Ye.faceRecognitionNet.computeFaceDescriptor(o)},null,function(o){return o.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return t=a.sent(),[2,Fc(e,t)]}})})},n.prototype.withFaceExpressions=function(){return new bi(this,this.input)},n.prototype.withAgeAndGender=function(){return new Ei(this,this.input)},n}(Gc),Hc=function(r){re(n,r);function n(e,t,a){var o=r.call(this)||this;return o.parentTask=e,o.input=t,o.useTinyLandmarkNet=a,o}return Object.defineProperty(n.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Ye.faceLandmark68TinyNet:Ye.faceLandmark68Net},enumerable:!0,configurable:!0}),n}(Cr),gy=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,a,o,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),t=e.map(function(c){return c.detection}),this.input instanceof Ee?[4,si(this.input,t)]:[3,3];case 2:return o=u.sent(),[3,5];case 3:return[4,ii(this.input,t)];case 4:o=u.sent(),u.label=5;case 5:return a=o,[4,Promise.all(a.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),a.forEach(function(c){return c instanceof Ee&&c.dispose()}),[2,e.map(function(c,l){return ba(c,i[l])})]}})})},n.prototype.withFaceExpressions=function(){return new xi(this,this.input)},n.prototype.withAgeAndGender=function(){return new _i(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Ri(this,this.input)},n}(Hc),yy=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,a,o,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(t=e.detection,this.input instanceof Ee?[4,si(this.input,[t])]:[3,3]):[2];case 2:return o=s.sent(),[3,5];case 3:return[4,ii(this.input,[t])];case 4:o=s.sent(),s.label=5;case 5:return a=o,[4,this.landmarkNet.detectLandmarks(a[0])];case 6:return i=s.sent(),a.forEach(function(u){return u instanceof Ee&&u.dispose()}),[2,ba(e,i)]}})})},n.prototype.withFaceExpressions=function(){return new bi(this,this.input)},n.prototype.withAgeAndGender=function(){return new Ei(this,this.input)},n.prototype.withFaceDescriptor=function(){return new Ii(this,this.input)},n}(Hc),jc=function(r){re(n,r);function n(e,t){t===void 0&&(t=new wr);var a=r.call(this)||this;return a.input=e,a.options=t,a}return n}(Cr),qc=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,a,o;return Z(this,function(i){switch(i.label){case 0:return e=this,t=e.input,a=e.options,a instanceof Oc?[4,Ye.mtcnn.forward(t,a)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(o=a instanceof Jg?function(s){return Ye.tinyFaceDetector.locateFaces(s,a)}:a instanceof wr?function(s){return Ye.ssdMobilenetv1.locateFaces(s,a)}:a instanceof di?function(s){return Ye.tinyYolov2.locateFaces(s,a)}:null,!o)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,o(t)]}})})},n.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(t){return Q(e,void 0,void 0,function(){var a;return Z(this,function(o){switch(o.label){case 0:return[4,this.run()];case 1:return a=o.sent(),[2,t(a.map(function(i){return fr({},i)}))]}})})})},n.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new gy(this.runAndExtendWithFaceDetections(),this.input,e)},n.prototype.withFaceExpressions=function(){return new gi(this.runAndExtendWithFaceDetections(),this.input)},n.prototype.withAgeAndGender=function(){return new wi(this.runAndExtendWithFaceDetections(),this.input)},n}(jc),xy=function(r){re(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t;return Z(this,function(a){switch(a.label){case 0:return[4,new qc(this.input,this.options)];case 1:return e=a.sent(),t=e[0],e.forEach(function(o){o.score>t.score&&(t=o)}),[2,t]}})})},n.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(t){return Q(e,void 0,void 0,function(){var a;return Z(this,function(o){switch(o.label){case 0:return[4,this.run()];case 1:return a=o.sent(),[2,t(a?fr({},a):void 0)]}})})})},n.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new yy(this.runAndExtendWithFaceDetection(),this.input,e)},n.prototype.withFaceExpressions=function(){return new yi(this.runAndExtendWithFaceDetection(),this.input)},n.prototype.withAgeAndGender=function(){return new Ci(this.runAndExtendWithFaceDetection(),this.input)},n}(jc);function by(r,n){return n===void 0&&(n=new wr),new xy(r,n)}function wy(r,n){return n===void 0&&(n=new wr),new qc(r,n)}function Cy(r,n){if(r.length!==n.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),t=Array.from(n);return Math.sqrt(e.map(function(a,o){return a-t[o]}).reduce(function(a,o){return a+Math.pow(o,2)},0))}var _y=function(){function r(n,e){e===void 0&&(e=.6),this._distanceThreshold=e;var t=Array.isArray(n)?n:[n];if(!t.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var a=1,o=function(){return"person "+a++};this._labeledDescriptors=t.map(function(i){if(i instanceof Zt)return i;if(i instanceof Float32Array)return new Zt(o(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Zt(o(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(n,e){return e.map(function(t){return Cy(t,n)}).reduce(function(t,a){return t+a},0)/(e.length||1)},r.prototype.matchDescriptor=function(n){var e=this;return this.labeledDescriptors.map(function(t){var a=t.descriptors,o=t.label;return new _s(o,e.computeMeanDistance(n,a))}).reduce(function(t,a){return t.distance<a.distance?t:a})},r.prototype.findBestMatch=function(n){var e=this.matchDescriptor(n);return e.distance<this.distanceThreshold?e:new _s("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(n){return n.toJSON()})}},r.fromJSON=function(n){var e=n.labeledDescriptors.map(function(t){return Zt.fromJSON(t)});return new r(e,n.distanceThreshold)},r}();function Kc(r,n){var e=new gt(n.width,n.height),t=e.width,a=e.height;if(t<=0||a<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:t,height:a}));if(Array.isArray(r))return r.map(function(s){return Kc(s,{width:t,height:a})});if(kc(r)){var o=r.detection.forSize(t,a),i=r.unshiftedLandmarks.forSize(o.box.width,o.box.height);return ba(fr(r,o),i)}return ta(r)?fr(r,r.detection.forSize(t,a)):r instanceof lr||r instanceof fn?r.forSize(t,a):r}const Ry=()=>{const r=mn.useRef(null),n=mn.useRef(null),[e,t]=mn.useState(!0),[a,o]=mn.useState([]),[i,s]=mn.useState(null),[u,c]=mn.useState(!1),[l,f]=mn.useState(""),[h,d]=mn.useState("");mn.useEffect(()=>{const v=async()=>{try{await Promise.all([Ye.tinyFaceDetector.loadFromUri("/models"),Ye.faceLandmark68Net.loadFromUri("/models"),Ye.faceRecognitionNet.loadFromUri("/models"),Ye.ssdMobilenetv1.loadFromUri("/models")]),t(!1),m()}catch(g){console.error("Error loading models:",g)}},m=async()=>{try{const g=await ki.get("http://localhost:3000/api/image");o(g.data)}catch(g){console.error("Error loading known faces:",g)}};v()},[]),mn.useEffect(()=>e?void 0:((async()=>{try{const m=await navigator.mediaDevices.getUserMedia({video:{}});r.current&&(r.current.srcObject=m)}catch(m){console.error("Error accessing camera:",m)}})(),()=>{var m;(m=r.current)!=null&&m.srcObject&&r.current.srcObject.getTracks().forEach(x=>x.stop())}),[e]),mn.useEffect(()=>{if(e||!r.current||!n.current)return;const v=n.current,m={width:r.current.width,height:r.current.height};Qm(v,m);const x=setInterval(async()=>{var w;const b=await wy(r.current).withFaceLandmarks().withFaceDescriptors(),y=Kc(b,m);if((w=v.getContext("2d"))==null||w.clearRect(0,0,v.width,v.height),jm(v,y),a.length>0&&b.length>0){const C=a.map(R=>new Zt(`${R.firstName} ${R.lastName}`,[new Float32Array(R.descriptor)])),S=new _y(C,.6);y.map(R=>S.findBestMatch(R.descriptor)).forEach((R,I)=>{const N=y[I].detection.box;if(new mc(N,{label:R.toString()}).draw(v),R.label!=="unknown"){const[B,M]=R.label.split(" ");s({firstName:B,lastName:M})}else s(null)})}},500);return()=>clearInterval(x)},[e,a]);const p=async()=>{if(!(!r.current||!l||!h))try{const v=await by(r.current).withFaceLandmarks().withFaceDescriptor();if(v){const m=Array.from(v.descriptor),g=await ki.post("http://localhost:3000/api/image",{firstName:l,lastName:h,descriptor:m});o([...a,g.data]),f(""),d(""),c(!1)}}catch(v){console.error("Error registering face:",v)}};return Ae.jsxs("div",{style:{padding:"20px",maxWidth:"800px",margin:"0 auto"},children:[Ae.jsx("h1",{children:"Face Recognition System"}),Ae.jsxs("div",{style:{position:"relative",marginBottom:"20px"},children:[Ae.jsx("video",{ref:r,width:"720",height:"560",autoPlay:!0,muted:!0,playsInline:!0,style:{width:"100%",border:"1px solid #ccc"}}),Ae.jsx("canvas",{ref:n,width:"720",height:"560",style:{position:"absolute",top:0,left:0,width:"100%"}})]}),i?Ae.jsx("div",{style:{padding:"10px",margin:"10px 0",backgroundColor:"#e6f7ff",border:"1px solid #91d5ff"},children:Ae.jsxs("h2",{children:["Recognized: ",i.firstName," ",i.lastName]})}):Ae.jsx("div",{style:{padding:"10px",margin:"10px 0",backgroundColor:"#fff2e8",border:"1px solid #ffbb96"},children:Ae.jsx("p",{children:"No recognized face detected"})}),Ae.jsx("button",{onClick:()=>c(!u),style:{padding:"10px 15px",backgroundColor:"#1890ff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"20px"},children:u?"Cancel Registration":"Register New Face"}),u&&Ae.jsxs("div",{style:{padding:"20px",border:"1px solid #d9d9d9",borderRadius:"4px",marginBottom:"20px"},children:[Ae.jsx("h2",{children:"Register New Face"}),Ae.jsxs("div",{style:{marginBottom:"15px"},children:[Ae.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"First Name:"}),Ae.jsx("input",{type:"text",value:l,onChange:v=>f(v.target.value),style:{width:"100%",padding:"8px"}})]}),Ae.jsxs("div",{style:{marginBottom:"15px"},children:[Ae.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"Last Name:"}),Ae.jsx("input",{type:"text",value:h,onChange:v=>d(v.target.value),style:{width:"100%",padding:"8px"}})]}),Ae.jsx("button",{onClick:p,disabled:!l||!h,style:{padding:"10px 15px",backgroundColor:"#52c41a",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Register Face"})]}),e&&Ae.jsx("div",{style:{padding:"10px",backgroundColor:"#f6ffed",border:"1px solid #b7eb8f"},children:Ae.jsx("p",{children:"Loading face recognition models..."})})," "]})};export{Ry as default};
