(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68],{53481:function(t,e,n){Promise.resolve().then(n.bind(n,17444))},17444:function(t,e,n){"use strict";n.r(e);var a=n(9753),o=n(74717),i=n(20070);e.default=()=>{let t=(0,o.useSearchParams)().get("tagId");return t||(0,o.notFound)(),(0,a.jsx)(i.uj,{tagId:t})}},5293:function(t,e,n){"use strict";n.d(e,{I7:function(){return m},b4:function(){return r},at:function(){return x},zU:function(){return v}});var a=n(9753),o=n(98639),i=n.t(o,2),s=n(67868);let r=t=>{let{children:e,title:n,className:i}=t,{setTitleElement:r,setTitle:l}=(0,o.useContext)(s.pI),u=(0,o.useRef)(null);return(0,o.useEffect)(()=>{(null==u?void 0:u.current)&&r(u),n&&l(n)},[u,n,r,l]),(0,o.useEffect)(()=>()=>{l("")},[l]),(0,a.jsx)("div",{ref:u,className:i,children:e})};var l=n(9544),u={810:t=>{t.exports=i}},d={},c={};(()=>{Object.defineProperty(c,"__esModule",{value:!0}),c.useScroll=void 0;let t=function t(e){var n=d[e];if(void 0!==n)return n.exports;var a=d[e]={exports:{}};return u[e](a,a.exports,t),a.exports}(810);c.useScroll=e=>{(0,t.useEffect)(()=>(window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e)}),[e])}})(),c.__esModule;var g=c.useScroll,p=n(63394);let _=t=>{let{element:e,scrollTop:n,isMobile:a}=t,o=.4*e.clientHeight;return n+(a?56:72)>=e.offsetTop+o},m=(0,l.Pi)(t=>{let{children:e,scrollElement:n,outerTitle:i="",headerElement:r,headerThreshold:l}=t,[u,d]=(0,o.useState)(i),[c,m]=(0,o.useState)(null),[v,x]=(0,o.useState)(!1),[N,f]=(0,o.useState)(!1),{settings:h}=(0,p.oR)(),y=h.layout===p.t8.Mobile;(0,o.useLayoutEffect)(()=>{d(i)},[i]);let S=(0,o.useCallback)(()=>{if(!n)return;let t=null!=l?l:10,e=r?Number(r.offsetTop)-t:t;e<0&&(e=0),f(n.scrollTop>e),(null==c?void 0:c.current)&&x(_({element:null==c?void 0:c.current,scrollTop:n.scrollTop,isMobile:y}))},[n,l,r,c,y]);(0,o.useEffect)(()=>{(null==n?void 0:n.scrollTop)===0&&f(!1)},[null==n?void 0:n.scrollTop]),g(S);let E=(0,o.useMemo)(()=>({title:u,setTitle:d,titleElement:c,scrollElement:n,setTitleElement:m,isScrolledTitle:v,isScrolling:N}),[u,v,c,n,N]);return(0,a.jsx)(s.pI.Provider,{value:E,children:e})});n(66414);let v=()=>{let[t,e]=(0,o.useState)(null),n=(0,o.useCallback)(n=>{t!==n&&e(n)},[t]);return[t,n]},x=(t,e)=>((0,p.uK)().get(p.Xt),[(0,o.useMemo)(()=>{if(void 0!==e){let n=e-17;return{"--average-color-background":t,transform:"translateY(".concat(e>=17?0:n,"px)"),opacity:1}}return{}},[e,!1,t]),(0,o.useMemo)(()=>({"--average-color-background":t}),[t])])},55784:function(t,e,n){"use strict";n.d(e,{h:function(){return o.h},n:function(){return a.n}});var a=n(33861),o=n(34906)},20070:function(t,e,n){"use strict";n.d(e,{uj:function(){return a.TagPage},tS:function(){return u}});var a=n(42751);n(29223);var o=n(42288),i=n(10542),s=n(12090),r=n(63394),l=n(58421);let u=o.V5.model("TagPage",{title:o.V5.maybe(o.V5.string),errorStatusCode:o.V5.maybeNull(o.V5.number),tagLoadingState:o.V5.enumeration(Object.values(r.Gu)),playlistsLoadingState:o.V5.enumeration(Object.values(r.Gu)),playlistsData:o.V5.array(o.V5.model({uid:o.V5.number,kind:o.V5.number})),playlists:o.V5.array(o.V5.maybeNull(s.Cd)),pager:o.V5.maybeNull(l.Vn),alreadyRequestedPages:o.V5.map(o.V5.number),pendingPages:o.V5.map(o.V5.number),requests:o.V5.maybeNull(o.V5.number)}).views(t=>({get isNotFound(){let e=t.playlistsLoadingState===r.Gu.RESOLVE&&0===t.playlists.length;return(t.tagLoadingState===r.Gu.REJECT||t.playlistsLoadingState===r.Gu.REJECT)&&(t.errorStatusCode===i.CN.NOT_FOUND||t.errorStatusCode===i.CN.BAD_REQUEST)||e}})).actions(t=>{let e={getPlaylists:(0,o.ls)(function*(e){let{page:n=0,pageSize:a=20}=e,{playlistsResource:l,modelActionsLogger:u}=(0,o.dU)(t);if(!(t.tagLoadingState!==r.Gu.RESOLVE||t.playlistsLoadingState===r.Gu.PENDING&&t.pendingPages.has("".concat(n))||t.alreadyRequestedPages.has("".concat(n)))){t.alreadyRequestedPages.set("".concat(n),n);try{var d;t.playlistsLoadingState=r.Gu.PENDING,t.pendingPages.set("".concat(n),n);let e=n*a,i=t.playlistsData.slice(e,e+a),u=yield l.getPlaylists({playlistIds:i.map(t=>"".concat(t.uid,":").concat(t.kind)),resumeStream:!1});t.requests=(null!==(d=t.requests)&&void 0!==d?d:0)+1;let c={page:n,perPage:a,total:t.playlistsData.length};0===t.playlists.length&&(t.playlists=(0,o.pj)(Array.from({length:c.total},()=>null)));let g=u.playlists.map(s.PV);(0,r.AG)({items:t.playlists,mappedRawItems:g,page:n,pageSize:a}),t.pager=c,t.playlistsLoadingState!==r.Gu.IDLE&&(t.playlistsLoadingState=r.Gu.RESOLVE)}catch(e){u.error(e),e instanceof i.du&&(e.statusCode===i.CN.NOT_FOUND||e.statusCode===i.CN.BAD_REQUEST)&&(t.errorStatusCode=i.CN.NOT_FOUND),t.playlistsLoadingState!==r.Gu.IDLE&&(t.playlistsLoadingState=r.Gu.REJECT)}finally{t.pendingPages.delete("".concat(n))}}}),reset(){t.tagLoadingState=r.Gu.IDLE,t.playlistsLoadingState=r.Gu.IDLE,t.alreadyRequestedPages.clear(),t.pendingPages.clear(),t.title=void 0,t.playlistsData=(0,o.pj)([]),t.playlists=(0,o.pj)([]),t.errorStatusCode=null},getTag:(0,o.ls)(function*(n){let{id:a,page:s=0,pageSize:l=20}=n,{tagResource:u,modelActionsLogger:d}=(0,o.dU)(t);if(t.tagLoadingState!==r.Gu.PENDING)try{var c;t.tagLoadingState=r.Gu.PENDING;let n=yield u.getPlaylistIds({id:a});t.title=null===(c=n.tag)||void 0===c?void 0:c.name,t.playlistsData=(0,o.pj)(n.ids.map(t=>({uid:t.uid,kind:t.kind}))),t.tagLoadingState!==r.Gu.IDLE&&(t.tagLoadingState=r.Gu.RESOLVE),yield e.getPlaylists({page:s,pageSize:l})}catch(e){d.error(e),e instanceof i.du&&(e.statusCode===i.CN.NOT_FOUND||e.statusCode===i.CN.BAD_REQUEST)&&(t.errorStatusCode=i.CN.NOT_FOUND),t.tagLoadingState!==r.Gu.IDLE&&(t.tagLoadingState=r.Gu.REJECT)}})};return e})},29223:function(t,e,n){"use strict";n.d(e,{TagNotFoundPage:function(){return s}});var a=n(9753),o=n(9544),i=n(23948);let s=(0,o.Pi)(()=>(0,a.jsx)(i.T,{}))},42751:function(t,e,n){"use strict";n.d(e,{TagPage:function(){return x}});var a=n(9753),o=n(60836),i=n(9544),s=n(74717),r=n(98639),l=n(80542),u=n(2570),d=n(68106),c=n(5293),g=n(31579),p=n(63394),_=n(67868),m=n(91631),v=n.n(m);let x=(0,i.Pi)(t=>{var e,n,i;let{tagId:m}=t,{tag:x}=(0,p.oR)(),{formatMessage:N}=(0,l.Z)(),[f,h]=(0,c.zU)(),y=(0,p.k6)();m||(0,s.notFound)();let S=(0,r.useCallback)(t=>{x.getPlaylists({page:t,pageSize:20})},[x]);x.tagLoadingState===p.Gu.IDLE&&(0,r.use)(x.getTag({id:m,page:0,pageSize:20})),x.isNotFound&&(0,s.notFound)(),(0,r.useEffect)(()=>()=>{x.reset()},[x]);let E=(0,r.useMemo)(()=>({Footer:()=>(0,a.jsx)(_.$_,{className:v().footer})}),[]);return((0,p.NO)(x.tagLoadingState===p.Gu.RESOLVE&&x.playlistsLoadingState===p.Gu.RESOLVE),x.tagLoadingState!==p.Gu.REJECT&&x.playlistsLoadingState!==p.Gu.REJECT||x.isNotFound)?(0,a.jsx)(p.Lh,{pageId:p.Rh.TAG,children:(0,a.jsx)(c.I7,{scrollElement:f,outerTitle:x.title,children:(0,a.jsxs)("div",{className:v().root,children:[(0,a.jsx)(_.h4,{variant:"text",withForwardControl:!1,withBackwardControl:y.canBack,children:(0,a.jsx)(u.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:x.title})}),(0,a.jsx)(_.Wv,{className:(0,o.W)(v().scrollContainer,v().important),customComponents:E,itemContentCallback:t=>{var e;let n=null==x?void 0:null===(e=x.playlists)||void 0===e?void 0:e[t],o=N({id:"loading-messages.entity-is-loading"},{entityName:N({id:"entity-names.playlist"})});return n?(0,a.jsx)(g.ZL,{playlist:n,contentLinesCount:3},n.key):(0,a.jsx)(_.hi,{"aria-label":o})},totalCount:null!==(n=null==x?void 0:null===(e=x.pager)||void 0===e?void 0:e.total)&&void 0!==n?n:0,onGetDataByPage:S,pageSize:20,totalRequests:null!==(i=x.requests)&&void 0!==i?i:0,listClassName:v().content,itemClassName:v().item,handleRef:h,context:{listAriaLabel:N({id:"mixes.albums-list"},{genreName:x.title||""})}})]})})}):(0,a.jsx)(d.D,{})})},23948:function(t,e,n){"use strict";n.d(e,{T:function(){return a.NotFound}});var a=n(8964)},8964:function(t,e,n){"use strict";n.d(e,{NotFound:function(){return _}});var a=n(9753),o=n(60836),i=n(9544),s=n(31014),r=n(39513),l=n(28852),u=n(2570),d=n(55784),c=n(63394),g=n(23067),p=n.n(g);let _=(0,i.Pi)(t=>{let{className:e}=t,{contentRef:n}=(0,c.$Y)(),i=(0,c.s0)("/");return(0,c.ZP)(!0),(0,a.jsxs)("div",{className:(0,o.W)(p().root,{[p().root_desktop]:!n},e),children:[(0,a.jsx)(d.n,{withBackwardFallback:"/",className:p().navigation,withForwardControl:!1}),(0,a.jsxs)("div",{className:p().content,children:[(0,a.jsx)(l.J,{className:p().icon,variant:"musicLogo",size:"xxl"}),(0,a.jsx)(u.Heading,{className:(0,o.W)(p().title,p().important),variant:"h3",size:"xs",children:(0,a.jsx)(s.Z,{id:"page-error.page-does-not-exist"})}),(0,a.jsx)(u.Caption,{className:(0,o.W)(p().text,p().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,a.jsx)(s.Z,{id:"page-error.page-does-not-exist-description"})}),(0,a.jsx)(r.z,{onClick:i,className:p().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,a.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,a.jsx)(s.Z,{id:"navigation.page-main"})})})]})]})})},68106:function(t,e,n){"use strict";n.d(e,{D:function(){return a.SomethingWentWrong}});var a=n(18723)},18723:function(t,e,n){"use strict";n.d(e,{SomethingWentWrong:function(){return m}});var a=n(9753),o=n(60836),i=n(9544),s=n(98639),r=n(31014),l=n(39513),u=n(28852),d=n(2570),c=n(55784),g=n(63394),p=n(88178),_=n.n(p);let m=(0,i.Pi)(t=>{let{className:e,withBackwardControl:n=!0}=t,i=(0,s.useCallback)(()=>{window.location.href="/"},[]),{contentRef:p}=(0,g.$Y)();return(0,a.jsxs)("div",{className:(0,o.W)(_().root,e),children:[n&&(0,a.jsx)(c.n,{withBackwardFallback:"/",className:(0,o.W)(_().navigation,{[_().navigation_desktop]:!p}),withForwardControl:!1}),(0,a.jsxs)("div",{className:(0,o.W)(_().content,{[_().content_shrink]:!n}),children:[(0,a.jsx)(u.J,{className:_().icon,variant:"attention",size:"xxl"}),(0,a.jsx)(d.Heading,{className:(0,o.W)(_().title,_().important),variant:"h3",size:"xs",children:(0,a.jsx)(r.Z,{id:"error-messages.something-went-wrong"})}),(0,a.jsxs)(d.Caption,{className:(0,o.W)(_().text,_().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,a.jsx)(r.Z,{id:"page-error.try-to-restart-app"})]}),(0,a.jsx)(l.z,{onClick:i,className:_().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,a.jsxs)(d.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,a.jsx)(r.Z,{id:"page-error.restart-app-button"})]})})]})]})})},91631:function(t){t.exports={root:"TagPage_root__EWN9A",scrollContainer:"TagPage_scrollContainer__lvG_1",important:"TagPage_important__Jq37E",content:"TagPage_content__rUC_l",footer:"TagPage_footer__W0mZr",item:"TagPage_item__X_lW7"}},23067:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},88178:function(t){t.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}},function(t){t.O(0,[8609,481,4153,2877,5340,2498,7873,2138,3621,3394,7868,4901,1579,2171,361,1744],function(){return t(t.s=53481)}),_N_E=t.O()}]);