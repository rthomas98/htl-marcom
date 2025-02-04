import{r as i,R as E,t as ae}from"./app-DruEAryR.js";var Re=Object.defineProperty,Ae=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t,n)=>(Ae(e,typeof t!="symbol"?t+"":t,n),n);let Pe=class{constructor(){G(this,"current",this.detect()),G(this,"handoffState","pending"),G(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},I=new Pe;function ke(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function q(){let e=[],t={addEventListener(n,r,l,o){return n.addEventListener(r,l,o),t.add(()=>n.removeEventListener(r,l,o))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return ke(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let o=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:o})})},group(n){let r=q();return n(r),this.add(()=>r.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function fe(){let[e]=i.useState(q);return i.useEffect(()=>()=>e.dispose(),[e]),e}let O=(e,t)=>{I.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function de(e){let t=i.useRef(e);return O(()=>{t.current=e},[e]),t}let $=function(e){let t=de(e);return E.useCallback((...n)=>t.current(...n),[t])};function X(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}function D(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,D),r}var pe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(pe||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function me(){let e=xe();return i.useCallback(t=>Ne({mergeRefs:e,...t}),[e])}function Ne({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:o=!0,name:a,mergeRefs:u}){u=u??He;let s=he(t,e);if(o)return U(s,n,r,a,u);let p=l??0;if(p&2){let{static:f=!1,...h}=s;if(f)return U(h,n,r,a,u)}if(p&1){let{unmount:f=!0,...h}=s;return D(f?0:1,{0(){return null},1(){return U({...h,hidden:!0,style:{display:"none"}},n,r,a,u)}})}return U(s,n,r,a,u)}function U(e,t={},n,r,l){let{as:o=n,children:a,refName:u="ref",...s}=Q(e,["unmount","static"]),p=e.ref!==void 0?{[u]:e.ref}:{},f=typeof a=="function"?a(t):a;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t)),s["aria-labelledby"]&&s["aria-labelledby"]===s.id&&(s["aria-labelledby"]=void 0);let h={};if(t){let g=!1,d=[];for(let[c,v]of Object.entries(t))typeof v=="boolean"&&(g=!0),v===!0&&d.push(c.replace(/([A-Z])/g,m=>`-${m.toLowerCase()}`));if(g){h["data-headlessui-state"]=d.join(" ");for(let c of d)h[`data-${c}`]=""}}if(o===i.Fragment&&(Object.keys(R(s)).length>0||Object.keys(R(h)).length>0))if(!i.isValidElement(f)||Array.isArray(f)&&f.length>1){if(Object.keys(R(s)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(R(s)).concat(Object.keys(R(h))).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`))}else{let g=f.props,d=g==null?void 0:g.className,c=typeof d=="function"?(...C)=>X(d(...C),s.className):X(d,s.className),v=c?{className:c}:{},m=he(f.props,R(Q(s,["ref"])));for(let C in h)C in m&&delete h[C];return i.cloneElement(f,Object.assign({},m,h,p,{ref:l(Le(f),p.ref)},v))}return i.createElement(o,Object.assign({},Q(s,["ref"]),o!==i.Fragment&&p,o!==i.Fragment&&h),f)}function xe(){let e=i.useRef([]),t=i.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function He(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function he(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[l=>{var o;return(o=l==null?void 0:l.preventDefault)==null?void 0:o.call(l)}]);for(let r in n)Object.assign(t,{[r](l,...o){let a=n[r];for(let u of a){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;u(l,...o)}}});return t}function rt(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];for(let r in n)Object.assign(t,{[r](...l){let o=n[r];for(let a of o)a==null||a(...l)}});return t}function ee(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function R(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Q(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Le(e){return E.version.split(".")[0]>="19"?e.props.ref:e.ref}let ve=Symbol();function lt(e,t=!0){return Object.assign(e,{[ve]:t})}function ge(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let n=$(r=>{for(let l of t.current)l!=null&&(typeof l=="function"?l(r):l.current=r)});return e.every(r=>r==null||(r==null?void 0:r[ve]))?void 0:n}function Me(e=0){let[t,n]=i.useState(e),r=i.useCallback(s=>n(s),[t]),l=i.useCallback(s=>n(p=>p|s),[t]),o=i.useCallback(s=>(t&s)===s,[t]),a=i.useCallback(s=>n(p=>p&~s),[n]),u=i.useCallback(s=>n(p=>p^s),[n]);return{flags:t,setFlag:r,addFlag:l,hasFlag:o,removeFlag:a,toggleFlag:u}}var Ue={},ue,ce;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((ue=process==null?void 0:Ue)==null?void 0:ue.NODE_ENV)==="test"&&typeof((ce=Element==null?void 0:Element.prototype)==null?void 0:ce.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var Ie=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(Ie||{});function qe(e){let t={};for(let n in e)e[n]===!0&&(t[`data-${n}`]="");return t}function De(e,t,n,r){let[l,o]=i.useState(n),{hasFlag:a,addFlag:u,removeFlag:s}=Me(e&&l?3:0),p=i.useRef(!1),f=i.useRef(!1),h=fe();return O(()=>{var g;if(e){if(n&&o(!0),!t){n&&u(3);return}return(g=r==null?void 0:r.start)==null||g.call(r,n),Ve(t,{inFlight:p,prepare(){f.current?f.current=!1:f.current=p.current,p.current=!0,!f.current&&(n?(u(3),s(4)):(u(4),s(2)))},run(){f.current?n?(s(3),u(4)):(s(4),u(3)):n?s(1):u(1)},done(){var d;f.current&&typeof t.getAnimations=="function"&&t.getAnimations().length>0||(p.current=!1,s(7),n||o(!1),(d=r==null?void 0:r.end)==null||d.call(r,n))}})}},[e,n,t,h]),e?[l,{closed:a(1),enter:a(2),leave:a(4),transition:a(2)||a(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Ve(e,{prepare:t,run:n,done:r,inFlight:l}){let o=q();return ze(e,{prepare:t,inFlight:l}),o.nextFrame(()=>{n(),o.requestAnimationFrame(()=>{o.add(_e(e,r))})}),o.dispose}function _e(e,t){var n,r;let l=q();if(!e)return l.dispose;let o=!1;l.add(()=>{o=!0});let a=(r=(n=e.getAnimations)==null?void 0:n.call(e).filter(u=>u instanceof CSSTransition))!=null?r:[];return a.length===0?(t(),l.dispose):(Promise.allSettled(a.map(u=>u.finished)).then(()=>{o||t()}),l.dispose)}function ze(e,{inFlight:t,prepare:n}){if(t!=null&&t.current){n();return}let r=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=r}let V=i.createContext(null);V.displayName="OpenClosedContext";var A=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(A||{});function ye(){return i.useContext(V)}function Ke({value:e,children:t}){return E.createElement(V.Provider,{value:e},t)}function it({children:e}){return E.createElement(V.Provider,{value:null},e)}function We(){let e=typeof document>"u";return"useSyncExternalStore"in ae?(t=>t.useSyncExternalStore)(ae)(()=>()=>{},()=>!1,()=>!e):!1}function be(){let e=We(),[t,n]=i.useState(I.isHandoffComplete);return t&&I.isHandoffComplete===!1&&n(!1),i.useEffect(()=>{t!==!0&&n(!0)},[t]),i.useEffect(()=>I.handoff(),[]),e?!1:t}function Be(){let e=i.useRef(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ee(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:Fe)!==i.Fragment||E.Children.count(e.children)===1}let _=i.createContext(null);_.displayName="TransitionContext";var Ye=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ye||{});function Ze(){let e=i.useContext(_);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ge(){let e=i.useContext(z);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let z=i.createContext(null);z.displayName="NestingContext";function K(e){return"children"in e?K(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ce(e,t){let n=de(e),r=i.useRef([]),l=Be(),o=fe(),a=$((d,c=T.Hidden)=>{let v=r.current.findIndex(({el:m})=>m===d);v!==-1&&(D(c,{[T.Unmount](){r.current.splice(v,1)},[T.Hidden](){r.current[v].state="hidden"}}),o.microTask(()=>{var m;!K(r)&&l.current&&((m=n.current)==null||m.call(n))}))}),u=$(d=>{let c=r.current.find(({el:v})=>v===d);return c?c.state!=="visible"&&(c.state="visible"):r.current.push({el:d,state:"visible"}),()=>a(d,T.Unmount)}),s=i.useRef([]),p=i.useRef(Promise.resolve()),f=i.useRef({enter:[],leave:[]}),h=$((d,c,v)=>{s.current.splice(0),t&&(t.chains.current[c]=t.chains.current[c].filter(([m])=>m!==d)),t==null||t.chains.current[c].push([d,new Promise(m=>{s.current.push(m)})]),t==null||t.chains.current[c].push([d,new Promise(m=>{Promise.all(f.current[c].map(([C,P])=>P)).then(()=>m())})]),c==="enter"?p.current=p.current.then(()=>t==null?void 0:t.wait.current).then(()=>v(c)):v(c)}),g=$((d,c,v)=>{Promise.all(f.current[c].splice(0).map(([m,C])=>C)).then(()=>{var m;(m=s.current.shift())==null||m()}).then(()=>v(c))});return i.useMemo(()=>({children:r,register:u,unregister:a,onStart:h,onStop:g,wait:p,chains:f}),[u,a,r,h,g,f,p])}let Fe=i.Fragment,$e=pe.RenderStrategy;function Qe(e,t){var n,r;let{transition:l=!0,beforeEnter:o,afterEnter:a,beforeLeave:u,afterLeave:s,enter:p,enterFrom:f,enterTo:h,entered:g,leave:d,leaveFrom:c,leaveTo:v,...m}=e,[C,P]=i.useState(null),y=i.useRef(null),w=Ee(e),j=ge(...w?[y,t,P]:t===null?[]:[t]),te=(n=m.unmount)==null||n?T.Unmount:T.Hidden,{show:F,appear:ne,initial:re}=Ze(),[S,W]=i.useState(F?"visible":"hidden"),le=Ge(),{register:x,unregister:H}=le;O(()=>x(y),[x,y]),O(()=>{if(te===T.Hidden&&y.current){if(F&&S!=="visible"){W("visible");return}return D(S,{hidden:()=>H(y),visible:()=>x(y)})}},[S,y,x,H,F,te]);let B=be();O(()=>{if(w&&B&&S==="visible"&&y.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[y,S,B,w]);let Se=re&&!ne,ie=ne&&F&&re,Y=i.useRef(!1),L=Ce(()=>{Y.current||(W("hidden"),H(y))},le),se=$(Z=>{Y.current=!0;let M=Z?"enter":"leave";L.onStart(y,M,N=>{N==="enter"?o==null||o():N==="leave"&&(u==null||u())})}),oe=$(Z=>{let M=Z?"enter":"leave";Y.current=!1,L.onStop(y,M,N=>{N==="enter"?a==null||a():N==="leave"&&(s==null||s())}),M==="leave"&&!K(L)&&(W("hidden"),H(y))});i.useEffect(()=>{w&&l||(se(F),oe(F))},[F,w,l]);let Te=!(!l||!w||!B||Se),[,b]=De(Te,C,F,{start:se,end:oe}),Oe=R({ref:j,className:((r=X(m.className,ie&&p,ie&&f,b.enter&&p,b.enter&&b.closed&&f,b.enter&&!b.closed&&h,b.leave&&d,b.leave&&!b.closed&&c,b.leave&&b.closed&&v,!b.transition&&F&&g))==null?void 0:r.trim())||void 0,...qe(b)}),k=0;S==="visible"&&(k|=A.Open),S==="hidden"&&(k|=A.Closed),b.enter&&(k|=A.Opening),b.leave&&(k|=A.Closing);let je=me();return E.createElement(z.Provider,{value:L},E.createElement(Ke,{value:k},je({ourProps:Oe,theirProps:m,defaultTag:Fe,features:$e,visible:S==="visible",name:"Transition.Child"})))}function Xe(e,t){let{show:n,appear:r=!1,unmount:l=!0,...o}=e,a=i.useRef(null),u=Ee(e),s=ge(...u?[a,t]:t===null?[]:[t]);be();let p=ye();if(n===void 0&&p!==null&&(n=(p&A.Open)===A.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[f,h]=i.useState(n?"visible":"hidden"),g=Ce(()=>{n||h("hidden")}),[d,c]=i.useState(!0),v=i.useRef([n]);O(()=>{d!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),c(!1))},[v,n]);let m=i.useMemo(()=>({show:n,appear:r,initial:d}),[n,r,d]);O(()=>{n?h("visible"):!K(g)&&a.current!==null&&h("hidden")},[n,g]);let C={unmount:l},P=$(()=>{var j;d&&c(!1),(j=e.beforeEnter)==null||j.call(e)}),y=$(()=>{var j;d&&c(!1),(j=e.beforeLeave)==null||j.call(e)}),w=me();return E.createElement(z.Provider,{value:g},E.createElement(_.Provider,{value:m},w({ourProps:{...C,as:i.Fragment,children:E.createElement(we,{ref:s,...C,...o,beforeEnter:P,beforeLeave:y})},theirProps:{},defaultTag:i.Fragment,features:$e,visible:f==="visible",name:"Transition"})))}function Je(e,t){let n=i.useContext(_)!==null,r=ye()!==null;return E.createElement(E.Fragment,null,!n&&r?E.createElement(J,{ref:t,...e}):E.createElement(we,{ref:t,...e}))}let J=ee(Xe),we=ee(Qe),et=ee(Je),st=Object.assign(J,{Child:et,Root:J});export{et as F,ee as K,me as L,pe as O,qe as R,lt as T,rt as _,ye as a,I as b,Ke as c,q as d,de as e,Be as f,A as i,be as l,O as n,$ as o,fe as p,it as s,ke as t,D as u,De as x,ge as y,st as z};
