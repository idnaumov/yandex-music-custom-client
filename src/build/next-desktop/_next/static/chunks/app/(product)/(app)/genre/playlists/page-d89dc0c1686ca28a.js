(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5623],{4010:function(t,e,n){Promise.resolve().then(n.bind(n,20444))},20444:function(t,e,n){"use strict";n.r(e);var i=n(8759),r=n(11769),o=n(30651);e.default=()=>{let t=(0,r.useSearchParams)(),e=t.get("metatagId");return e||(0,r.notFound)(),(0,i.jsx)(o.Fe,{metatagId:e})}},81546:function(t,e,n){"use strict";n.d(e,{IT:function(){return s.ArtistCard},xG:function(){return l.ArtistContextMenu},o9:function(){return o},Op:function(){return a},v2:function(){return u.useArtistDisclaimer}});var i=n(96555),r=n(81446);let o=i.V5.model("ArtistMeta",{artist:r.Go,lastMonthListeners:i.V5.maybe(i.V5.number)});var s=n(8752),l=n(265);let a=function(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.reduce((e,n)=>{var i;return e+(null!==(t=null===(i=n.decomposed)||void 0===i?void 0:i.length)&&void 0!==t?t:0)},0);return e.length+n};var u=n(99485)},99485:function(t,e,n){"use strict";n.r(e),n.d(e,{useArtistDisclaimer:function(){return s}});var i=n(99616),r=n(42503),o=n(84133);let s=t=>{let{artist:e,callback:n,shouldHistoryBack:s}=t,{disclaimer:l,modals:{disclaimerModal:a}}=(0,o.oR)(),u=(0,i.useRef)(String((0,r.Z)())),c=(0,i.useRef)(!1),d=(0,o.uK)(),v=d.get(o.ce);return(0,i.useEffect)(()=>{l.isUnsafeDisclaimerConfirmed&&l.id===u.current&&!c.current&&(null==n||n(),c.current=!0)},[n,l.id,l.isUnsafeDisclaimerConfirmed]),(0,i.useCallback)(async t=>{let i=v.get(o.BU.ExEx);if((null==e?void 0:e.isUnsafeLegal)&&(null==i?void 0:i.includes("".concat(o.co.ARTIST,"_").concat(e.id)))){null==n||n();return}if((null==e?void 0:e.isLegalRejected)||(null==e?void 0:e.isUnsafeLegal)){null==t||t.preventDefault(),await l.getArtistDisclaimer({artistId:e.id}),e.isUnsafeLegal&&l.setType(o.Gq.UNSAFE),l.setId(u.current),l.setEntityId(e.id),l.setEntityType(o.co.ARTIST),l.setShouldHistoryBack(!!s),c.current=!1,a.open();return}null==n||n()},[null==e?void 0:e.id,null==e?void 0:e.isLegalRejected,null==e?void 0:e.isUnsafeLegal,n,l,a,v,s])}},8752:function(t,e,n){"use strict";n.r(e),n.d(e,{ArtistCard:function(){return j}});var i=n(8759),r=n(35338),o=n(33423),s=n(99616),l=n(65244),a=n(2814),u=n(86742),c=n(71440),d=n(15527),v=n(14077),f=n(14581),p=n(96437),m=n(1918),_=n(53433),x=n(81446),C=n(84133),k=n(44285),b=n(99485),g=n(265),h=n(38755),A=n.n(h);let j=(0,o.Pi)(t=>{let{artist:e,className:n,children:o,contentLinesCount:h}=t,{ref:j,intersectionPropertyId:y}=(0,C.Vf)(),N=(0,C.x5)(),{formatMessage:S}=(0,l.Z)(),[T,B]=(0,s.useState)(!1),[P,E]=(0,s.useState)(!1),[F,L]=(0,s.useState)(!1),{sendLikeSearchFeedback:M,sendNavigateSearchFeedback:R,sendPlaySearchFeedback:w}=(0,C.sA)(),z=(0,C.zx)(),I=(0,x.SB)(e),U=(0,x.BV)(e),{id:D,name:W,coverUri:Z,isLiked:O}=e,G=(0,C.s0)(e.url),{sonataState:{status:q},experiments:V}=(0,C.oR)(),[H,J]=(0,s.useState)(!1),X=(0,s.useMemo)(()=>{let t=S({id:"entity-names.artist-name"},{artistName:W}),e=O?S({id:"entity-names.has-your-like"}):"";return"".concat(t," ").concat(e)},[W,O,S]),{isPlaying:K,togglePlay:Q}=(0,C.qm)({playContextParams:{contextData:{type:c.Ak.Artist,meta:{id:Number(D)},from:N},loadContextMeta:!0},sonataStatus:q}),Y=(0,b.useArtistDisclaimer)({artist:e,callback:G}),$=(0,b.useArtistDisclaimer)({artist:e,callback:Q}),tt=(0,s.useCallback)(t=>{null==R||R(),z({to:u.qU.ArtistScreen}),Y(t)},[z,R,Y]),te=(0,s.useCallback)(t=>{tt(t)},[tt]),tn=(0,s.useCallback)(()=>{T||K||(B(!0),null==w||w()),$()},[K,T,w,$]),ti=(0,s.useCallback)(()=>{P||O||(E(!0),null==M||M()),I()},[O,I,P,M]),tr=(0,s.useCallback)(t=>{t.preventDefault(),t.stopPropagation()},[]),to=(0,s.useCallback)(()=>{L(!F),J(!F)},[F]),ts=(0,s.useMemo)(()=>(0,i.jsx)(g.ArtistContextMenu,{artist:e,onOpenChange:to,open:F,returnFocus:!1,reference:(0,i.jsx)(d.z,{onClick:tr,className:(0,r.W)(A().menuButton,A().control),"aria-label":S({id:"interface-actions.context-menu"}),icon:(0,i.jsx)(f.J,{size:"xxs",variant:"more"}),size:"s",radius:"round",...(0,_.BA)(_.bG.artist.ARTIST_CONTEXT_MENU_BUTTON)})}),[e,S,tr,to,F]),tl=(0,s.useMemo)(()=>{if(V.checkExperiment(C.pe.WebPins,"on"))return(0,i.jsx)(k.RT,{onClick:U,isPinned:e.isPinned,className:(0,r.W)(A().pinButton,A().control),withRipple:!1})},[e.isPinned,V,U]),ta=(0,s.useMemo)(()=>{if(e.isAvailable)return(0,i.jsx)(v.kk,{isVisible:F||H,className:A().controls,radius:"round",playControl:(0,i.jsx)(k.JM,{buttonVariant:"default",withHover:!1,className:(0,r.W)(A().playButton,A().control),iconSize:"xl",variant:"filled",onClick:tn,isPlaying:K,disabled:!e.isAvailableForPlaying}),likeControl:(0,i.jsx)(k.dJ,{className:(0,r.W)(A().likeButton,A().control),isLiked:O,onClick:ti,variant:"default",size:"s",iconSize:"xxs"}),menuControl:ts,pinControl:tl})},[e.isAvailable,e.isAvailableForPlaying,ts,ti,tn,F,H,O,K,tl]),tu=(0,s.useMemo)(()=>(0,i.jsx)(p.Paper,{className:A().cover,radius:"round",withShadow:!0,...(0,_.BA)(_.bG.artist.ARTIST_CARD),children:(0,i.jsxs)("div",{className:A().coverBlock,onClick:te,children:[(0,i.jsx)(k.BE,{className:A().image,src:Z,size:200,fit:"cover",alt:X,withAvatarReplace:!0,isAvailable:e.isAvailable,"aria-hidden":!0}),ta]})}),[te,Z,X,e.isAvailable,ta]);return(0,i.jsx)(v.m7,{ref:j,className:(0,r.W)(A().root,n),textPosition:"center","aria-label":X,title:(0,i.jsx)(m.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,i.jsx)(k.rU,{className:A().titleLink,href:e.url,"aria-label":X,onClick:tt,children:W})}),"data-intersection-property-id":y,description:(0,i.jsx)(m.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",children:(0,i.jsx)(a.Z,{id:"entity-names.singer"})}),contentLinesCount:h,view:tu,...(0,_.BA)(_.bG.artist.ARTIST_ITEM),children:o})})},265:function(t,e,n){"use strict";n.r(e),n.d(e,{ArtistContextMenu:function(){return c}});var i=n(8759),r=n(33423),o=n(99616),s=n(52317),l=n(81446),a=n(84133),u=n(44285);let c=(0,r.Pi)(t=>{var e,n;let{artist:r,lastMonthListeners:c,reference:d,onOpenChange:v,open:f,returnFocus:p}=t,{settings:m,experiments:_}=(0,a.oR)(),x=(0,l.BV)(r),C=(0,l.SB)(r),k="".concat(a.aU.ARTIST,"-").concat(null==r?void 0:r.id),b=m.layout===a.t8.Mobile,g=_.checkExperiment(a.pe.WebPins,"on")&&!b,{href:h}=(0,a.qK)(null!==(e=null==r?void 0:r.url)&&void 0!==e?e:""),{isPlaying:A,togglePlay:j}=(0,a.Qh)({seeds:null!==(n=null==r?void 0:r.seeds)&&void 0!==n?n:[],pageIdForFrom:a.Rh.RADIO,blockIdForFrom:k}),y=(0,o.useCallback)(()=>{A||j()},[A,j]);return(0,a.ZP)(f),(0,i.jsxs)(s.v2,{reference:d,isMobile:b,title:null==r?void 0:r.name,description:c,offsetOptions:10,open:f,onOpenChange:v,returnFocus:p,children:[g&&(0,i.jsx)(u.Zd,{onClick:x,isPinned:null==r?void 0:r.isPinned}),(0,i.jsx)(u.xZ,{onClick:C,isLiked:null==r?void 0:r.isLiked,disabled:!(null==r?void 0:r.isAvailable)}),(0,i.jsx)(u.GQ,{onClick:y,disabled:!(null==r?void 0:r.isAvailable),variant:"artist"}),(0,i.jsx)(u.zq,{disabled:!r,shareLink:h,entityVariant:"artist",entityTitle:null==r?void 0:r.name})]})})},13236:function(t,e,n){"use strict";n.d(e,{I7:function(){return m},b4:function(){return l},at:function(){return x},zU:function(){return _}});var i=n(8759),r=n(99616),o=n.t(r,2),s=n(44285);let l=t=>{let{children:e,title:n,className:o}=t,{setTitleElement:l,setTitle:a}=(0,r.useContext)(s.pI),u=(0,r.useRef)(null);return(0,r.useEffect)(()=>{(null==u?void 0:u.current)&&l(u),n&&a(n)},[u,n,l,a]),(0,r.useEffect)(()=>()=>{a("")},[a]),(0,i.jsx)("div",{ref:u,className:o,children:e})};var a=n(33423),u={810:t=>{t.exports=o}},c={},d={};(()=>{Object.defineProperty(d,"__esModule",{value:!0}),d.useScroll=void 0;let t=function t(e){var n=c[e];if(void 0!==n)return n.exports;var i=c[e]={exports:{}};return u[e](i,i.exports,t),i.exports}(810);d.useScroll=e=>{(0,t.useEffect)(()=>(window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e)}),[e])}})(),d.__esModule;var v=d.useScroll,f=n(84133);let p=t=>{let{element:e,scrollTop:n,isMobile:i}=t,r=.4*e.clientHeight;return n+(i?56:72)>=e.offsetTop+r},m=(0,a.Pi)(t=>{let{children:e,scrollElement:n,outerTitle:o="",headerElement:l,headerThreshold:a}=t,[u,c]=(0,r.useState)(o),[d,m]=(0,r.useState)(null),[_,x]=(0,r.useState)(!1),[C,k]=(0,r.useState)(!1),{settings:b}=(0,f.oR)(),g=b.layout===f.t8.Mobile;(0,r.useLayoutEffect)(()=>{c(o)},[o]);let h=(0,r.useCallback)(()=>{if(!n)return;let t=null!=a?a:10,e=l?Number(l.offsetTop)-t:t;e<0&&(e=0),k(n.scrollTop>e),(null==d?void 0:d.current)&&x(p({element:null==d?void 0:d.current,scrollTop:n.scrollTop,isMobile:g}))},[n,a,l,d,g]);(0,r.useEffect)(()=>{(null==n?void 0:n.scrollTop)===0&&k(!1)},[null==n?void 0:n.scrollTop]),v(h);let A=(0,r.useMemo)(()=>({title:u,setTitle:c,titleElement:d,scrollElement:n,setTitleElement:m,isScrolledTitle:_,isScrolling:C}),[u,_,d,n,C]);return(0,i.jsx)(s.pI.Provider,{value:A,children:e})});n(41197);let _=()=>{let[t,e]=(0,r.useState)(null),n=(0,r.useCallback)(n=>{t!==n&&e(n)},[t]);return[t,n]},x=(t,e)=>{let n=(0,f.uK)();n.get(f.Xt);let i=(0,r.useMemo)(()=>{if(void 0!==e){let n=e-17;return{"--average-color-background":t,transform:"translateY(".concat(e>=17?0:n,"px)"),opacity:1}}return{}},[e,!1,t]),o=(0,r.useMemo)(()=>({"--average-color-background":t}),[t]);return[i,o]}},42769:function(t,e,n){"use strict";n.d(e,{h:function(){return r.h},n:function(){return i.n}});var i=n(22008),r=n(38828)},2365:function(t,e,n){"use strict";n.d(e,{T:function(){return i.NotFound}});var i=n(54529)},54529:function(t,e,n){"use strict";n.r(e),n.d(e,{NotFound:function(){return p}});var i=n(8759),r=n(35338),o=n(33423),s=n(2814),l=n(15527),a=n(14581),u=n(1918),c=n(42769),d=n(84133),v=n(94170),f=n.n(v);let p=(0,o.Pi)(t=>{let{className:e}=t,{contentRef:n}=(0,d.$Y)(),o=(0,d.s0)("/");return(0,d.ZP)(!0),(0,i.jsxs)("div",{className:(0,r.W)(f().root,{[f().root_desktop]:!n},e),children:[(0,i.jsx)(c.n,{withBackwardFallback:"/",className:f().navigation,withForwardControl:!1}),(0,i.jsxs)("div",{className:f().content,children:[(0,i.jsx)(a.J,{className:f().icon,variant:"musicLogo",size:"xxl"}),(0,i.jsx)(u.Heading,{className:(0,r.W)(f().title,f().important),variant:"h3",size:"xs",children:(0,i.jsx)(s.Z,{id:"page-error.page-does-not-exist"})}),(0,i.jsx)(u.Caption,{className:(0,r.W)(f().text,f().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,i.jsx)(s.Z,{id:"page-error.page-does-not-exist-description"})}),(0,i.jsx)(l.z,{onClick:o,className:f().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,i.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,i.jsx)(s.Z,{id:"navigation.page-main"})})})]})]})})},38755:function(t){t.exports={root:"ArtistCard_root__x67BK",controls:"ArtistCard_controls__jsqqI",cover:"ArtistCard_cover__29ShU",coverBlock:"ArtistCard_coverBlock__dBL4x",image:"ArtistCard_image__pONJx",titleLink:"ArtistCard_titleLink__G8Puz",playButton:"ArtistCard_playButton__XZoTr",likeButton:"ArtistCard_likeButton__LU9TL",menuButton:"ArtistCard_menuButton__EynXG",pinButton:"ArtistCard_pinButton__G_VOi",control:"ArtistCard_control___qv5j"}},94170:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}}},function(t){t.O(0,[2498,7873,5455,8628,2008,6217,2015,3263,6911,210,1716,2428,651,4025,4164,1744],function(){return t(t.s=4010)}),_N_E=t.O()}]);