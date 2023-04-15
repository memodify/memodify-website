(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{9553:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{fC:function(){return k},bU:function(){return _}});var l=r(7294);function o(...e){return t=>e.forEach(e=>{var r;"function"==typeof(r=e)?r(t):null!=r&&(r.current=t)})}function u(e){let t=(0,l.useRef)(e);return(0,l.useEffect)(()=>{t.current=e}),(0,l.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}let a=(null==globalThis?void 0:globalThis.document)?l.useLayoutEffect:()=>{};r(3935);let i=(0,l.forwardRef)((e,t)=>{let{children:r,...o}=e,u=l.Children.toArray(r),a=u.find(s);if(a){let e=a.props.children,r=u.map(t=>t!==a?t:l.Children.count(e)>1?l.Children.only(null):(0,l.isValidElement)(e)?e.props.children:null);return(0,l.createElement)(c,n({},o,{ref:t}),(0,l.isValidElement)(e)?(0,l.cloneElement)(e,void 0,r):null)}return(0,l.createElement)(c,n({},o,{ref:t}),r)});i.displayName="Slot";let c=(0,l.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,l.isValidElement)(r)?(0,l.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let l=e[n],o=t[n],u=/^on[A-Z]/.test(n);u?l&&o?r[n]=(...e)=>{o(...e),l(...e)}:l&&(r[n]=l):"style"===n?r[n]={...l,...o}:"className"===n&&(r[n]=[l,o].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:o(t,r.ref)}):l.Children.count(r)>1?l.Children.only(null):null});c.displayName="SlotClone";let f=({children:e})=>(0,l.createElement)(l.Fragment,null,e);function s(e){return(0,l.isValidElement)(e)&&e.type===f}let d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,l.forwardRef)((e,r)=>{let{asChild:o,...u}=e,a=o?i:t;return(0,l.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,l.createElement)(a,n({},u,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),p="Switch",[h,v]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,l.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,l.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let o=(0,l.createContext)(n),u=r.length;function a(t){let{scope:r,children:n,...a}=t,i=(null==r?void 0:r[e][u])||o,c=(0,l.useMemo)(()=>a,Object.values(a));return(0,l.createElement)(i.Provider,{value:c},n)}return r=[...r,n],a.displayName=t+"Provider",[a,function(r,a){let i=(null==a?void 0:a[e][u])||o,c=(0,l.useContext)(i);if(c)return c;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let l=r(e),o=l[`__scope${n}`];return{...t,...o}},{});return(0,l.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}(p),[b,m]=h(p),y=(0,l.forwardRef)((e,t)=>{let{__scopeSwitch:r,name:a,checked:i,defaultChecked:c,required:f,disabled:s,value:p="on",onCheckedChange:h,...v}=e,[m,y]=(0,l.useState)(null),g=function(...e){return(0,l.useCallback)(o(...e),e)}(t,e=>y(e)),k=(0,l.useRef)(!1),_=!m||!!m.closest("form"),[w=!1,P]=function({prop:e,defaultProp:t,onChange:r=()=>{}}){let[n,o]=function({defaultProp:e,onChange:t}){let r=(0,l.useState)(e),[n]=r,o=(0,l.useRef)(n),a=u(t);return(0,l.useEffect)(()=>{o.current!==n&&(a(n),o.current=n)},[n,o,a]),r}({defaultProp:t,onChange:r}),a=void 0!==e,i=u(r),c=(0,l.useCallback)(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&i(r)}else o(t)},[a,e,o,i]);return[a?e:n,c]}({prop:i,defaultProp:c,onChange:h});return(0,l.createElement)(b,{scope:r,checked:w,disabled:s},(0,l.createElement)(d.button,n({type:"button",role:"switch","aria-checked":w,"aria-required":f,"data-state":E(w),"data-disabled":s?"":void 0,disabled:s,value:p},v,{ref:g,onClick:function(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}(e.onClick,e=>{P(e=>!e),_&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})})),_&&(0,l.createElement)(C,{control:m,bubbles:!k.current,name:a,value:p,checked:w,required:f,disabled:s,style:{transform:"translateX(-100%)"}}))}),g=(0,l.forwardRef)((e,t)=>{let{__scopeSwitch:r,...o}=e,u=m("SwitchThumb",r);return(0,l.createElement)(d.span,n({"data-state":E(u.checked),"data-disabled":u.disabled?"":void 0},o,{ref:t}))}),C=e=>{let{control:t,checked:r,bubbles:o=!0,...u}=e,i=(0,l.useRef)(null),c=function(e){let t=(0,l.useRef)({value:e,previous:e});return(0,l.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r),f=function(e){let[t,r]=(0,l.useState)(void 0);return a(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,l;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,l=t.blockSize}else n=e.offsetWidth,l=e.offsetHeight;r({width:n,height:l})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}(t);return(0,l.useEffect)(()=>{let e=i.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked"),l=n.set;if(c!==r&&l){let t=new Event("click",{bubbles:o});l.call(e,r),e.dispatchEvent(t)}},[c,r,o]),(0,l.createElement)("input",n({type:"checkbox","aria-hidden":!0,defaultChecked:r},u,{tabIndex:-1,ref:i,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function E(e){return e?"checked":"unchecked"}let k=y,_=g},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,o=n(r(7294)),u=r(4532),a=r(3353),i=r(1410),c=r(9064),f=r(370),s=r(9955),d=r(4224),p=r(508),h=r(1516),v=r(4266);let b=new Set;function m(e,t,r,n,l){if(l||a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(b.has(o))return;b.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:i.formatUrl(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:b,children:g,prefetch:C,passHref:E,replace:k,shallow:_,scroll:w,locale:P,onClick:M,onMouseEnter:S,onTouchStart:j,legacyBehavior:O=!1}=e,x=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,O&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=!1!==C,N=o.default.useContext(s.RouterContext),L=o.default.useContext(d.AppRouterContext),T=null!=N?N:L,A=!N,{href:I,as:z}=o.default.useMemo(()=>{if(!N){let e=y(i);return{href:e,as:b?y(b):e}}let[e,t]=u.resolveHref(N,i,!0);return{href:e,as:b?u.resolveHref(N,b):t||e}},[N,i,b]),D=o.default.useRef(I),H=o.default.useRef(z);O&&(n=o.default.Children.only(r));let U=O?n&&"object"==typeof n&&n.ref:t,[$,B,q]=p.useIntersection({rootMargin:"200px"}),K=o.default.useCallback(e=>{(H.current!==z||D.current!==I)&&(q(),H.current=z,D.current=I),$(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[z,U,I,q,$]);o.default.useEffect(()=>{T&&B&&R&&m(T,I,z,{locale:P},A)},[z,I,B,P,R,null==N?void 0:N.locale,T,A]);let V={ref:K,onClick(e){O||"function"!=typeof M||M(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,l,u,i,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!a.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:u,locale:c,scroll:i}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};f?o.default.startTransition(h):h()}(e,T,I,z,k,_,w,P,A,R)},onMouseEnter(e){O||"function"!=typeof S||S(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),T&&(R||!A)&&m(T,I,z,{locale:P,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){O||"function"!=typeof j||j(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),T&&(R||!A)&&m(T,I,z,{locale:P,priority:!0,bypassPrefetchedCheck:!0},A)}};if(c.isAbsoluteUrl(z))V.href=z;else if(!O||E||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&h.getDomainLocale(z,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);V.href=t||v.addBasePath(f.addLocale(z,e,null==N?void 0:N.defaultLocale))}return O?o.default.cloneElement(n,V):o.default.createElement("a",Object.assign({},x,V),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!o,[f,s]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(o){if(c||f)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},a.push(r),u.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=l.requestIdleCallback(()=>s(!0));return()=>l.cancelIdleCallback(e)}},[c,r,t,f,d.current]);let h=n.useCallback(()=>{s(!1)},[]);return[p,f,h]};var n=r(7294),l=r(29);let o="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5569)}}]);