(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[668],{40709:function(t,n,e){Promise.resolve().then(e.bind(e,79172))},79172:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return r}});var o=e(9753),i=e(74717),a=e(65369);e(98567);var r=()=>{let t=(0,i.useSearchParams)(),n=t.get("skeleton");return n||(0,i.notFound)(),(0,o.jsx)(a.LandingPage,{skeleton:n},t.toString())}},98567:function(t,n,e){"use strict";e.d(n,{LandingNotFoundPage:function(){return c}});var o=e(9753),i=e(9544),a=e(98639),r=e(23948),s=e(44367);let c=(0,i.Pi)(()=>{let{landing:t}=(0,s.oR)();return(0,a.useEffect)(()=>()=>{t.reset()},[t]),(0,o.jsx)(r.T,{})})},65369:function(t,n,e){"use strict";e.d(n,{LandingPage:function(){return N}});var o=e(9753),i=e(9544),a=e(74717),r=e(98639),s=e(23881),c=e(41055),l=e(2570),d=e(61493),_=e(68106),g=e(5293),u=e(55784),x=e(44367),h=e(67868),m=e(27510),p=e.n(m);let N=(0,i.Pi)(t=>{let{skeleton:n}=t,{landing:e,experiments:i}=(0,x.oR)(),m=(0,x.k6)(),[N,v]=(0,g.zU)();return(i.checkExperiment(x.pe.WebNextUniversalLandingPage,"on")||(0,a.notFound)(),e.loadingState===x.Gu.IDLE&&(0,r.use)(e.getSkeleton({id:n,showWizard:!1},{preloadBlocks:3})),(0,r.useEffect)(()=>()=>e.reset(),[e]),(0,x.NO)(e.loadingState===x.Gu.RESOLVE),e.loadingState===x.Gu.REJECT)?(0,o.jsx)(_.D,{}):(0,o.jsx)(x.Lh,{pageId:x.Rh.LANDING,children:(0,o.jsx)(x.Yv,{skeleton:n,children:(0,o.jsx)(g.I7,{scrollElement:N,headerThreshold:134,children:(0,o.jsxs)(c.t,{className:p().root,containerClassName:p().content,ref:v,...(0,s.BA)(s.Br.landing.LANDING_PAGE),children:[(0,o.jsxs)("div",{className:p().header,children:[m.canBack&&(0,o.jsx)(u.n,{withForwardControl:!1,withBackwardControl:m.canBack}),(0,o.jsx)(l.Heading,{variant:"h2",weight:"bold",size:"xl",className:p().title,children:e.title})]}),(0,o.jsx)("div",{className:p().landing,children:(0,o.jsx)(d.Od,{landing:e,errorComponent:(0,o.jsx)(_.D,{className:p().error,withBackwardControl:!1})})}),(0,o.jsx)(h.$_,{className:p().footer})]})})})})})},23948:function(t,n,e){"use strict";e.d(n,{T:function(){return o.NotFound}});var o=e(8964)},8964:function(t,n,e){"use strict";e.d(n,{NotFound:function(){return x}});var o=e(9753),i=e(60836),a=e(9544),r=e(31014),s=e(39513),c=e(28852),l=e(2570),d=e(55784),_=e(44367),g=e(23067),u=e.n(g);let x=(0,a.Pi)(t=>{let{className:n}=t,{contentRef:e}=(0,_.$Y)(),a=(0,_.s0)("/");return(0,_.ZP)(!0),(0,o.jsxs)("div",{className:(0,i.W)(u().root,{[u().root_desktop]:!e},n),children:[(0,o.jsx)(d.n,{withBackwardFallback:"/",className:u().navigation,withForwardControl:!1}),(0,o.jsxs)("div",{className:u().content,children:[(0,o.jsx)(c.J,{className:u().icon,variant:"musicLogo",size:"xxl"}),(0,o.jsx)(l.Heading,{className:(0,i.W)(u().title,u().important),variant:"h3",size:"xs",children:(0,o.jsx)(r.Z,{id:"page-error.page-does-not-exist"})}),(0,o.jsx)(l.Caption,{className:(0,i.W)(u().text,u().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,o.jsx)(r.Z,{id:"page-error.page-does-not-exist-description"})}),(0,o.jsx)(s.z,{onClick:a,className:u().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,o.jsx)(l.Caption,{type:"controls",variant:"span",size:"m",children:(0,o.jsx)(r.Z,{id:"navigation.page-main"})})})]})]})})},68106:function(t,n,e){"use strict";e.d(n,{D:function(){return o.SomethingWentWrong}});var o=e(18723)},18723:function(t,n,e){"use strict";e.d(n,{SomethingWentWrong:function(){return h}});var o=e(9753),i=e(60836),a=e(9544),r=e(98639),s=e(31014),c=e(39513),l=e(28852),d=e(2570),_=e(55784),g=e(44367),u=e(88178),x=e.n(u);let h=(0,a.Pi)(t=>{let{className:n,withBackwardControl:e=!0}=t,a=(0,r.useCallback)(()=>{window.location.href="/"},[]),{contentRef:u}=(0,g.$Y)();return(0,o.jsxs)("div",{className:(0,i.W)(x().root,n),children:[e&&(0,o.jsx)(_.n,{withBackwardFallback:"/",className:(0,i.W)(x().navigation,{[x().navigation_desktop]:!u}),withForwardControl:!1}),(0,o.jsxs)("div",{className:(0,i.W)(x().content,{[x().content_shrink]:!e}),children:[(0,o.jsx)(l.J,{className:x().icon,variant:"attention",size:"xxl"}),(0,o.jsx)(d.Heading,{className:(0,i.W)(x().title,x().important),variant:"h3",size:"xs",children:(0,o.jsx)(s.Z,{id:"error-messages.something-went-wrong"})}),(0,o.jsxs)(d.Caption,{className:(0,i.W)(x().text,x().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,o.jsx)(s.Z,{id:"page-error.try-to-restart-app"})]}),(0,o.jsx)(c.z,{onClick:a,className:x().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,o.jsxs)(d.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,o.jsx)(s.Z,{id:"page-error.restart-app-button"})]})})]})]})})},27510:function(t){t.exports={content:"LandingPage_content__ovHlJ",root:"LandingPage_root__B2lPp",header:"LandingPage_header__TiraG",title:"LandingPage_title__gsIx4",footer:"LandingPage_footer__K9y8K",error:"LandingPage_error__mEsH2"}},23067:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},88178:function(t){t.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}},function(t){t.O(0,[5675,7169,8754,3500,5736,560,3056,991,6113,5107,2498,7873,2330,7403,3621,9448,4367,7868,3196,4901,3490,1055,9352,5545,9598,1493,2171,361,1744],function(){return t(t.s=40709)}),_N_E=t.O()}]);