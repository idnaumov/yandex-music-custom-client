(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7384],{82007:function(e,t,n){Promise.resolve().then(n.bind(n,69863)),Promise.resolve().then(n.bind(n,86555)),Promise.resolve().then(n.bind(n,49535)),Promise.resolve().then(n.bind(n,95002)),Promise.resolve().then(n.bind(n,8496)),Promise.resolve().then(n.bind(n,11858)),Promise.resolve().then(n.bind(n,97161)),Promise.resolve().then(n.bind(n,91401)),Promise.resolve().then(n.bind(n,84661)),Promise.resolve().then(n.bind(n,30446)),Promise.resolve().then(n.bind(n,91844)),Promise.resolve().then(n.bind(n,82025)),Promise.resolve().then(n.bind(n,47347)),Promise.resolve().then(n.bind(n,34999)),Promise.resolve().then(n.bind(n,19476)),Promise.resolve().then(n.bind(n,58554)),Promise.resolve().then(n.bind(n,96115)),Promise.resolve().then(n.bind(n,85969)),Promise.resolve().then(n.bind(n,94326)),Promise.resolve().then(n.bind(n,87004)),Promise.resolve().then(n.bind(n,68721)),Promise.resolve().then(n.bind(n,82124)),Promise.resolve().then(n.bind(n,44490)),Promise.resolve().then(n.bind(n,64035)),Promise.resolve().then(n.bind(n,98723)),Promise.resolve().then(n.bind(n,92994)),Promise.resolve().then(n.bind(n,91042)),Promise.resolve().then(n.bind(n,79285)),Promise.resolve().then(n.bind(n,30410)),Promise.resolve().then(n.bind(n,92225)),Promise.resolve().then(n.bind(n,21920)),Promise.resolve().then(n.bind(n,5979)),Promise.resolve().then(n.bind(n,85449)),Promise.resolve().then(n.bind(n,37869)),Promise.resolve().then(n.bind(n,11408)),Promise.resolve().then(n.bind(n,54605)),Promise.resolve().then(n.bind(n,29665)),Promise.resolve().then(n.bind(n,90981)),Promise.resolve().then(n.bind(n,1843)),Promise.resolve().then(n.bind(n,89672)),Promise.resolve().then(n.bind(n,89949)),Promise.resolve().then(n.bind(n,82116)),Promise.resolve().then(n.bind(n,17852)),Promise.resolve().then(n.bind(n,55302)),Promise.resolve().then(n.bind(n,56691)),Promise.resolve().then(n.bind(n,13862)),Promise.resolve().then(n.bind(n,55553)),Promise.resolve().then(n.bind(n,695)),Promise.resolve().then(n.bind(n,76100))},76154:function(e,t,n){"use strict";n.d(t,{mH:function(){return s.Genre},fm:function(){return i},uG:function(){return l}});var r=n(42288);let o=r.V5.model("GenreListItemSubGenreModel",{tag:r.V5.string,title:r.V5.string}),i=r.V5.model("GenreListItemModel",{tag:r.V5.string,title:r.V5.string,subGenres:r.V5.array(o)});var s=n(86555);let l=e=>({tag:e.tag,title:e.title,subGenres:(0,r.pj)((e.leaves||[]).map(e=>({tag:e.tag,title:e.title})))})},86555:function(e,t,n){"use strict";n.d(t,{Genre:function(){return c}});var r=n(9753),o=n(9544),i=n(2570),s=n(67868),l=n(78914),a=n.n(l);let c=(0,o.Pi)(e=>{let{tag:t,title:n,subGenres:o}=e;return(0,r.jsxs)("div",{className:a().root,children:[(0,r.jsx)(s.rU,{className:a().link,href:"/genre/".concat(t),children:(0,r.jsx)(i.Heading,{variant:"h2",size:"m",lineClamp:1,className:a().linkTitle,children:n})}),o.length>0&&(0,r.jsx)("div",{className:a().list,children:o.map(e=>(0,r.jsx)("div",{className:a().item,children:(0,r.jsx)(s.rU,{className:a().link,href:"/genre/".concat(e.tag),children:(0,r.jsx)(i.Caption,{variant:"span",size:"l",lineClamp:1,className:a().linkTitle,children:e.title})})},e.tag))})]})})},5293:function(e,t,n){"use strict";n.d(t,{I7:function(){return _},b4:function(){return l},at:function(){return b},zU:function(){return g}});var r=n(9753),o=n(98639),i=n.t(o,2),s=n(67868);let l=e=>{let{children:t,title:n,className:i}=e,{setTitleElement:l,setTitle:a}=(0,o.useContext)(s.pI),c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{(null==c?void 0:c.current)&&l(c),n&&a(n)},[c,n,l,a]),(0,o.useEffect)(()=>()=>{a("")},[a]),(0,r.jsx)("div",{ref:c,className:i,children:t})};var a=n(9544),c={810:e=>{e.exports=i}},d={},u={};(()=>{Object.defineProperty(u,"__esModule",{value:!0}),u.useScroll=void 0;let e=function e(t){var n=d[t];if(void 0!==n)return n.exports;var r=d[t]={exports:{}};return c[t](r,r.exports,e),r.exports}(810);u.useScroll=t=>{(0,e.useEffect)(()=>(window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",t)}),[t])}})(),u.__esModule;var m=u.useScroll,h=n(63394);let v=e=>{let{element:t,scrollTop:n,isMobile:r}=e,o=.4*t.clientHeight;return n+(r?56:72)>=t.offsetTop+o},_=(0,a.Pi)(e=>{let{children:t,scrollElement:n,outerTitle:i="",headerElement:l,headerThreshold:a}=e,[c,d]=(0,o.useState)(i),[u,_]=(0,o.useState)(null),[g,b]=(0,o.useState)(!1),[x,p]=(0,o.useState)(!1),{settings:f}=(0,h.oR)(),P=f.layout===h.t8.Mobile;(0,o.useLayoutEffect)(()=>{d(i)},[i]);let j=(0,o.useCallback)(()=>{if(!n)return;let e=null!=a?a:10,t=l?Number(l.offsetTop)-e:e;t<0&&(t=0),p(n.scrollTop>t),(null==u?void 0:u.current)&&b(v({element:null==u?void 0:u.current,scrollTop:n.scrollTop,isMobile:P}))},[n,a,l,u,P]);(0,o.useEffect)(()=>{n&&(null==n?void 0:n.scrollTop)!==0||p(!1)},[n,null==n?void 0:n.scrollTop]),m(j);let N=(0,o.useMemo)(()=>({title:c,setTitle:d,titleElement:u,scrollElement:n,setTitleElement:_,isScrolledTitle:g,isScrolling:x}),[c,g,u,n,x]);return(0,r.jsx)(s.pI.Provider,{value:N,children:t})});n(66414);let g=()=>{let[e,t]=(0,o.useState)(null),n=(0,o.useCallback)(n=>{e!==n&&t(n)},[e]);return[e,n]},b=(e,t)=>((0,h.uK)().get(h.Xt),[(0,o.useMemo)(()=>{if(void 0!==t){let n=t-17;return{"--average-color-background":e,transform:"translateY(".concat(t>=17?0:n,"px)"),opacity:1}}return{}},[t,!1,e]),(0,o.useMemo)(()=>({"--average-color-background":e}),[e])])},55784:function(e,t,n){"use strict";n.d(t,{h:function(){return o.h},n:function(){return r.n}});var r=n(33861),o=n(34906)},49535:function(e,t,n){"use strict";n.d(t,{GenresNotFoundPage:function(){return i}});var r=n(9753),o=n(23948);let i=()=>(0,r.jsx)(o.T,{})},95002:function(e,t,n){"use strict";n.d(t,{GenresPage:function(){return g}});var r=n(9753),o=n(9544),i=n(74717),s=n(98639),l=n(41055),a=n(2570),c=n(68106),d=n(5293),u=n(76154),m=n(63394),h=n(67868),v=n(69836),_=n.n(v);let g=(0,o.Pi)(e=>{let{navigationId:t}=e,{genres:n}=(0,m.oR)(),[o,v]=(0,d.zU)(),g=(0,m.k6)();return((0,s.useEffect)(()=>()=>{n.reset()},[n,t]),n.isNotFound&&(0,i.notFound)(),t&&n.loadingState===m.Gu.IDLE&&(0,s.use)(n.getData(t)),(0,m.NO)(n.loadingState===m.Gu.RESOLVE),n.loadingState===m.Gu.REJECT)?(0,r.jsx)(c.D,{}):(0,r.jsxs)(d.I7,{scrollElement:o,outerTitle:n.title,children:[(0,r.jsx)(h.h4,{variant:"text",withForwardControl:!1,withBackwardControl:g.canBack,children:(0,r.jsx)(a.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:n.title})}),(0,r.jsx)(l.t,{className:_().root,containerClassName:_().content,ref:v,children:(0,r.jsx)("div",{className:_().list,children:n.items.map(e=>(0,r.jsx)(u.mH,{tag:e.tag,title:e.title,subGenres:e.subGenres},e.tag))})})]})})},23948:function(e,t,n){"use strict";n.d(t,{T:function(){return r.NotFound}});var r=n(8964)},8964:function(e,t,n){"use strict";n.d(t,{NotFound:function(){return v}});var r=n(9753),o=n(60836),i=n(9544),s=n(31014),l=n(39513),a=n(28852),c=n(2570),d=n(55784),u=n(63394),m=n(23067),h=n.n(m);let v=(0,i.Pi)(e=>{let{className:t}=e,{contentRef:n}=(0,u.$Y)(),i=(0,u.s0)("/");return(0,u.ZP)(!0),(0,r.jsxs)("div",{className:(0,o.W)(h().root,{[h().root_desktop]:!n},t),children:[(0,r.jsx)(d.n,{withBackwardFallback:"/",className:h().navigation,withForwardControl:!1}),(0,r.jsxs)("div",{className:h().content,children:[(0,r.jsx)(a.J,{className:h().icon,variant:"musicLogo",size:"xxl"}),(0,r.jsx)(c.Heading,{className:(0,o.W)(h().title,h().important),variant:"h3",size:"xs",children:(0,r.jsx)(s.Z,{id:"page-error.page-does-not-exist"})}),(0,r.jsx)(c.Caption,{className:(0,o.W)(h().text,h().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,r.jsx)(s.Z,{id:"page-error.page-does-not-exist-description"})}),(0,r.jsx)(l.z,{onClick:i,className:h().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,r.jsx)(c.Caption,{type:"controls",variant:"span",size:"m",children:(0,r.jsx)(s.Z,{id:"navigation.page-main"})})})]})]})})},68106:function(e,t,n){"use strict";n.d(t,{D:function(){return r.SomethingWentWrong}});var r=n(18723)},18723:function(e,t,n){"use strict";n.d(t,{SomethingWentWrong:function(){return _}});var r=n(9753),o=n(60836),i=n(9544),s=n(98639),l=n(31014),a=n(39513),c=n(28852),d=n(2570),u=n(55784),m=n(63394),h=n(88178),v=n.n(h);let _=(0,i.Pi)(e=>{let{className:t,withBackwardControl:n=!0}=e,i=(0,s.useCallback)(()=>{window.location.href="/"},[]),{contentRef:h}=(0,m.$Y)();return(0,r.jsxs)("div",{className:(0,o.W)(v().root,t),children:[n&&(0,r.jsx)(u.n,{withBackwardFallback:"/",className:(0,o.W)(v().navigation,{[v().navigation_desktop]:!h}),withForwardControl:!1}),(0,r.jsxs)("div",{className:(0,o.W)(v().content,{[v().content_shrink]:!n}),children:[(0,r.jsx)(c.J,{className:v().icon,variant:"attention",size:"xxl"}),(0,r.jsx)(d.Heading,{className:(0,o.W)(v().title,v().important),variant:"h3",size:"xs",children:(0,r.jsx)(l.Z,{id:"error-messages.something-went-wrong"})}),(0,r.jsxs)(d.Caption,{className:(0,o.W)(v().text,v().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,r.jsx)(l.Z,{id:"page-error.try-to-restart-app"})]}),(0,r.jsx)(a.z,{onClick:i,className:v().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,r.jsxs)(d.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,r.jsx)(l.Z,{id:"page-error.restart-app-button"})]})})]})]})})},78914:function(e){e.exports={root:"Genre_root__80dlk",link:"Genre_link__Wewaq",linkTitle:"Genre_linkTitle__ORAsw",list:"Genre_list__C2Pxf"}},69836:function(e){e.exports={root:"GenresPage_root__LhP_S",shimmerTitle:"GenresPage_shimmerTitle__4j8uH",content:"GenresPage_content__yhKrQ",list:"GenresPage_list__l2Cuc"}},23067:function(e){e.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},88178:function(e){e.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}},function(e){e.O(0,[8609,8670,6088,953,3813,2498,7873,8695,3621,3394,7868,1055,2171,361,1744],function(){return e(e.s=82007)}),_N_E=e.O()}]);