import{r as n,h as p,j as e}from"./index-DRGkhgkg.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...t)=>t.filter((s,a,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===a).join(" ").trim();/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...m},u)=>n.createElement("svg",{ref:u,...b,width:s,height:s,stroke:t,strokeWidth:r?Number(a)*24/Number(s):a,className:i("lucide",o),...m},[...c.map(([x,h])=>n.createElement(x,h)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(t,s)=>{const a=n.forwardRef(({className:r,...o},l)=>n.createElement(g,{ref:l,iconNode:s,className:i(`lucide-${f(t)}`,r),...o}));return a.displayName=`${t}`,a};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],v=d("ArrowLeft",j);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],y=d("ShieldAlert",w),k=()=>{const t=p();return e.jsxs("div",{className:"min-h-screen w-full flex items-center justify-center bg-background px-4 py-12 overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse-subtle"}),e.jsx("div",{className:"absolute right-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px] animate-pulse-subtle"})]}),e.jsx("div",{className:"relative z-10 w-full max-w-md mx-auto",children:e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"glass dark:glass-dark rounded-full p-4 animate-scale-in",children:e.jsx(y,{className:"h-10 w-10 text-[#7F265B]"})})}),e.jsxs("div",{className:"glass dark:glass-dark rounded-xl p-6 md:p-8 mb-4 animate-fade-up",style:{animationDelay:"0.1s"},children:[e.jsx("h1",{className:"text-2xl font-semibold tracking-tight mb-2 text-center",children:"Unauthorized Access"}),e.jsx("p",{className:"text-muted-foreground text-center mb-6",children:"You don't have permission to access this page."}),e.jsx("div",{className:"space-y-4",children:e.jsxs("button",{onClick:()=>t(-1),className:"flex items-center justify-center w-full py-2.5 px-4 bg-[#7F265B] hover:bg-[#7F265B]/90 text-white rounded-lg transition-all duration-200 font-medium",children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),"Go Back"]})})]}),e.jsx("p",{className:"text-sm text-muted-foreground text-center animate-fade-up",style:{animationDelay:"0.2s"},children:"If you believe this is a mistake, please contact support."})]})})]})};export{k as default};
