"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6642],{46642:function(e,t,r){r.d(t,{t:function(){return f}});var n,o,u=r(80766),l=r(91207),c={5881:(e,t,r)=>{function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}r.r(t),r.d(t,{clsx:()=>n,default:()=>o});let o=n},561:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});let n={root:"By12CU9obvaH0jYtauNw",root_scrolling:"MFfv7uDaaJhS_oiAzQNT",root_notScrolling:"pnFSEGiRmI9JuhUxbfVe",container:"YsFmmSnMXb5VMh5VyqeV"}},6161:(e,t,r)=>{var n=r(810),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,u={},s=null,a=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:a,props:u,_owner:c.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},9541:(e,t,r)=>{e.exports=r(6161)},9110:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCallbackRef=t.useDebouncedToggle=t.useResize=t.useIsomorphicEffect=t.useForceUpdateRef=t.useElementOffsetY=t.getElementNameByDataAttribute=t.createIntersectionObserver=t.useIntersectionObserver=t.useKeyboardNavigation=t.useScroll=t.useForwardRef=void 0;var n=r(245);Object.defineProperty(t,"useForwardRef",{enumerable:!0,get:function(){return n.useForwardRef}});var o=r(2067);Object.defineProperty(t,"useScroll",{enumerable:!0,get:function(){return o.useScroll}});var u=r(5188);Object.defineProperty(t,"useKeyboardNavigation",{enumerable:!0,get:function(){return u.useKeyboardNavigation}});var l=r(5663);Object.defineProperty(t,"useIntersectionObserver",{enumerable:!0,get:function(){return l.useIntersectionObserver}}),Object.defineProperty(t,"createIntersectionObserver",{enumerable:!0,get:function(){return l.createIntersectionObserver}}),Object.defineProperty(t,"getElementNameByDataAttribute",{enumerable:!0,get:function(){return l.getElementNameByDataAttribute}});var c=r(2101);Object.defineProperty(t,"useElementOffsetY",{enumerable:!0,get:function(){return c.useElementOffsetY}});var i=r(2767);Object.defineProperty(t,"useForceUpdateRef",{enumerable:!0,get:function(){return i.useForceUpdateRef}});var s=r(9019);Object.defineProperty(t,"useIsomorphicEffect",{enumerable:!0,get:function(){return s.useIsomorphicEffect}});var a=r(2947);Object.defineProperty(t,"useResize",{enumerable:!0,get:function(){return a.useResize}});var f=r(6699);Object.defineProperty(t,"useDebouncedToggle",{enumerable:!0,get:function(){return f.useDebouncedToggle}});var d=r(8691);Object.defineProperty(t,"useCallbackRef",{enumerable:!0,get:function(){return d.useCallbackRef}})},8691:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCallbackRef=void 0;let n=r(810);t.useCallbackRef=function(e){let t=(0,n.useRef)({stableFn:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current.callback(...r)},callback:e});return(0,n.useInsertionEffect)(()=>{t.current.callback=e}),t.current.stableFn}},6699:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDebouncedToggle=void 0;let n=r(352),o=r(810);t.useDebouncedToggle=e=>{let{delay:t,initialState:r,throttleTimeout:u}=e,l=(0,o.useRef)(null),[c,i]=(0,o.useState)(!!r),s=(0,o.useMemo)(()=>(0,n.throttle)(()=>{i(!r),l.current&&window.clearTimeout(l.current),l.current=window.setTimeout(()=>{i(!!r)},t)},u),[t,r,u]),a=(0,o.useCallback)(()=>{i(!!r),l.current&&window.clearTimeout(l.current)},[r]);return(0,o.useEffect)(()=>()=>{l.current&&window.clearTimeout(l.current)},[]),{state:c,handleDebouncedToggle:s,reset:a}}},2101:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useElementOffsetY=void 0;let n=r(810),o=r(2067),u=r(2767);t.useElementOffsetY=e=>{let[t,r]=(0,u.useForceUpdateRef)(),[l,c]=(0,n.useState)(),i=(0,n.useCallback)(()=>{let e=null==t?void 0:t.getBoundingClientRect();e&&c(e.y)},[t]);return(0,n.useLayoutEffect)(i),(0,o.useScroll)({onScroll:i,elementRef:e}),{forceUpdateRefCallback:r,offsetY:l}}},2767:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useForceUpdateRef=void 0;let n=r(810);t.useForceUpdateRef=()=>{let[e,t]=(0,n.useState)(null);return[e,(0,n.useCallback)(e=>{t(t=>t!==e?e:t)},[])]}},245:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useForwardRef=void 0;let n=r(810);t.useForwardRef=function(e,t){let r=(0,n.useRef)(t);return(0,n.useEffect)(()=>{e&&("function"==typeof e?e(r.current):e.current=r.current)},[e]),r}},5663:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersectionObserver=t.createIntersectionObserver=t.getElementNameByDataAttribute=t.isInViewportNow=t.defaultOptions=void 0;let n=r(810),{innerWidth:o=0,innerHeight:u=0}=window;function l(e){let{top:t,right:r,bottom:n,left:l}=e.getBoundingClientRect();return(t>=0&&t<=u||n>=0&&n<=u)&&(l>=0&&l<=o||r>=0&&r<=o)}function c(e){var t,r;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data-intersection-property-id";return null!==(r=null==e?void 0:null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,n))&&void 0!==r?r:e.attributes[0]}function i(e,t){let r=new IntersectionObserver(t=>{t.forEach(t=>{e(t,r)})},t);return r}t.defaultOptions={threshold:0,preflightCheck:!0},t.isInViewportNow=l,t.getElementNameByDataAttribute=c,t.createIntersectionObserver=i,t.useIntersectionObserver=function(e,r,o){let[{freezeOnceVisible:u,preflightCheck:s,...a},f=!1]="boolean"==typeof r||void 0===r?[t.defaultOptions,r]:[{...t.defaultOptions,...r},o],[d,b]=(0,n.useState)({}),v=(0,n.useMemo)(()=>f?null:i(e=>{let t=c(e.target);t&&v&&(e.isIntersecting?b(e=>({...e,[t]:{isIntersecting:!0}})):b(e=>({...e,[t]:{isIntersecting:!1}})),u&&v&&e.isIntersecting&&v.unobserve(e.target))},a),[f]);return(0,n.useLayoutEffect)(()=>(v&&!f&&e.forEach(e=>{if(e.current){let t=!1;if(s&&(t=l(e.current))){let t=c(e.current);b(e=>({...e,[t]:{isIntersecting:!0}}))}t||v.observe(e.current)}}),()=>{v&&v.disconnect()}),[f,v,e.length]),d}},9019:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useIsomorphicEffect=void 0;let n=r(810);t.useIsomorphicEffect="undefined"!=typeof document?n.useLayoutEffect:n.useEffect},5188:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useKeyboardNavigation=void 0;let n=r(810);function o(e,t){return e.current?Array.from(t?e.current.querySelectorAll(t):e.current.children):[]}t.useKeyboardNavigation=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{navigationItemsSelector:r,activeAttributeName:u="aria-selected"}=t,l=(0,n.useCallback)(t=>{let n=o(e,r);if(!n.length)return;let u=t.target,l=n.indexOf(u);if(-1===l)return;let[c]=n,i=n.at(-1),s=null;switch(t.key){case"ArrowLeft":case"ArrowUp":s=n[l-1]||i;break;case"ArrowRight":case"ArrowDown":s=n[l+1]||c;break;case"Home":s=c;break;case"End":s=i}null!==s&&(s.focus(),t.preventDefault())},[r,e]);(0,n.useEffect)(()=>{let t=e.current;return null==t||t.addEventListener("keydown",l),()=>null==t?void 0:t.removeEventListener("keydown",l)},[e,l]),(0,n.useEffect)(()=>{o(e,r).forEach(e=>{e.hasAttribute(u)&&("true"===e.getAttribute(u)?e.tabIndex=0:e.tabIndex=-1)})})}},2947:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useResize=void 0;let n=r(810),o=r(361);t.useResize=(e,t)=>{(0,n.useEffect)(()=>{let r=(0,o.getElementFromRefOrElement)(t);if(null===r)return;let n=null!=r?r:document.documentElement,u=new ResizeObserver(e);return u.observe(n),()=>u.disconnect()},[t,e])}},2067:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useScroll=void 0;let n=r(810),o=r(361),u=r(6699);t.useScroll=e=>{let{onScroll:t,listenIsScrolling:r,elementRef:l}=e,{state:c,handleDebouncedToggle:i}=(0,u.useDebouncedToggle)({delay:1e3,throttleTimeout:100}),s=(0,n.useCallback)(()=>{r&&i(),null==t||t()},[r,i,t]);return(0,n.useEffect)(()=>{let e=(0,o.getElementFromRefOrElement)(l);if(null===e)return;let t=null!=e?e:window,r={capture:!0,passive:!0};return t.addEventListener("scroll",s,r),()=>t.removeEventListener("scroll",s,r)},[l,s]),c}},361:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getElementFromRefOrElement=void 0,t.getElementFromRefOrElement=e=>void 0===e?void 0:null===e||e instanceof HTMLElement?e:null===e.current||e.current instanceof HTMLElement?e.current:void 0},8429:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollableContent=t.ScrollableContentComponent=void 0;let o=r(9541),u=r(810),l=r(5881),c=r(9110),i=n(r(561));t.ScrollableContentComponent=e=>{let{forwardRef:t,className:r,containerClassName:n,children:u,...s}=e,a=(0,c.useForwardRef)(t,null),f=(0,c.useScroll)({listenIsScrolling:!0,elementRef:a});return(0,o.jsx)("div",{className:(0,l.clsx)(i.default.root,{[i.default.root_scrolling]:f,[i.default.root_notScrolling]:!f},r),ref:a,...s,children:(0,o.jsx)("div",{className:(0,l.clsx)(i.default.container,n),children:u})})},t.ScrollableContent=(0,u.forwardRef)((e,r)=>(0,o.jsx)(t.ScrollableContentComponent,{forwardRef:r,...e}))},352:e=>{e.exports=u},810:e=>{e.exports=o||(o=r.t(l,2))}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return c[e].call(r.exports,r,r.exports,s),r.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};Object.defineProperty(a,"X",{value:!0}),a.t=void 0,n=s(8429),Object.defineProperty(a,"t",{enumerable:!0,get:function(){return n.ScrollableContent}});var f=a.t;a.X}}]);