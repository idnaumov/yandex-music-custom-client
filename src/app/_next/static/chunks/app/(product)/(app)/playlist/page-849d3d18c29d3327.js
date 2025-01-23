(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9579],{89439:function(t,e,i){Promise.resolve().then(i.bind(i,31630))},31630:function(t,e,i){"use strict";i.r(e);var o=i(65301),a=i(99678),n=i(61527);e.default=()=>{let t=(0,a.useSearchParams)().get("playlistId");return t||(0,a.notFound)(),(0,o.jsx)(n.ws,{params:{playlistId:t}})}},61527:function(t,e,i){"use strict";i.d(e,{ws:function(){return s.PlaylistPersonalPage},uD:function(){return r}});var o=i(2685),a=i(49430),n=i(56198);let r=o.V5.model("PlaylistPersonalPage",{loadingState:o.V5.enumeration(Object.values(n.Gui)),errorStatusCode:o.V5.maybeNull(o.V5.number),playlistUuid:o.V5.maybeNull(o.V5.string),isReady:o.V5.optional(o.V5.boolean,!1),dummyCoverUrl:o.V5.maybe(o.V5.string),dummyDescription:o.V5.maybe(o.V5.string),title:o.V5.maybe(o.V5.string)}).views(t=>({get isNeededToLoad(){return t.loadingState===n.Gui.IDLE},get isLoaded(){return t.loadingState===n.Gui.RESOLVE},get isNotFound(){let e=t.errorStatusCode===a.CN.NOT_FOUND||t.errorStatusCode===a.CN.BAD_REQUEST;return t.loadingState===n.Gui.REJECT&&e},get isRejected(){return t.loadingState===n.Gui.REJECT}})).actions(t=>({getPlaylistPersonalDetails:(0,o.ls)(function*(e){if(!(0,o.fh)(t))return;let{playlistsResource:i,modelActionsLogger:r}=(0,o.dU)(t);if(t.loadingState!==n.Gui.PENDING)try{var s,l;t.loadingState=n.Gui.PENDING;let o=yield i.getPlaylistPersonal({playlistId:e});if((null===(s=o.error)||void 0===s?void 0:s.name)==="no-such-playlist"){t.errorStatusCode=a.CN.NOT_FOUND,t.loadingState=n.Gui.REJECT;return}t.isReady=o.ready,t.playlistUuid=o.data.playlistUuid,t.dummyCoverUrl=null===(l=o.data.dummyCover)||void 0===l?void 0:l.uri,t.dummyDescription=o.data.dummyDescription,t.title=o.data.title,t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.RESOLVE)}catch(e){r.error(e),e instanceof a.du&&(e.statusCode===a.CN.NOT_FOUND||e.statusCode===a.CN.BAD_REQUEST)&&(t.errorStatusCode=a.CN.NOT_FOUND),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.REJECT)}}),reset(){t.loadingState=n.Gui.IDLE,t.errorStatusCode=null,t.isReady=!1,t.playlistUuid=null,t.dummyCoverUrl=void 0,t.dummyDescription=void 0,t.title=void 0}}));i(66285),i(65301),i(32544);var s=i(10169)},66285:function(t,e,i){"use strict";i.d(e,{PlaylistPersonalDummyPage:function(){return c}});var o=i(65301),a=i(9695),n=i(96233),r=i(81437),s=i(56198),l=i(29778),u=i(29217),d=i.n(u);let c=(0,n.Pi)(()=>{let{playlistPersonal:{dummyCoverUrl:t,dummyDescription:e,title:i}}=(0,s.oR4)();return(0,o.jsxs)("div",{className:d().root,children:[(0,o.jsx)(l.h4,{}),(0,o.jsx)(l.BE,{src:t,size:200,fit:"cover",withAvatarReplace:!0,"aria-hidden":!0,className:d().cover}),i&&(0,o.jsx)(r.Heading,{className:(0,a.W)(d().title,d().important),variant:"h1",size:"xs",children:i}),e&&(0,o.jsx)(r.Caption,{className:(0,a.W)(d().text,d().important),variant:"span",type:"text",size:"l",weight:"normal",children:e})]})})},10169:function(t,e,i){"use strict";i.d(e,{PlaylistPersonalPage:function(){return u}});var o=i(65301),a=i(96233),n=i(99678),r=i(91207),s=i(56198),l=i(66285);let u=(0,a.Pi)(t=>{let{params:e,searchParams:i}=t,{playlistPersonal:a}=(0,s.oR4)(),{href:u}=(0,s.zBm)((0,s.rDv)("/playlists/".concat(a.playlistUuid),new URLSearchParams(i)));if((0,r.useEffect)(()=>{a.isNeededToLoad&&a.getPlaylistPersonalDetails(e.playlistId)},[a.isNeededToLoad,e.playlistId,a]),(0,r.useEffect)(()=>()=>{a.reset()},[a]),(0,s.NOh)(a.isLoaded),(a.isNotFound||a.isRejected)&&(0,n.notFound)(),a.isLoaded&&!a.isReady)return a.dummyDescription||(0,n.notFound)(),(0,o.jsx)(l.PlaylistPersonalDummyPage,{});a.isLoaded&&a.isReady&&(0,n.redirect)(u)})},32544:function(t,e,i){"use strict";i.d(e,{T:function(){return o.NotFound}});var o=i(40334)},40334:function(t,e,i){"use strict";i.d(e,{NotFound:function(){return N}});var o=i(65301),a=i(9695),n=i(96233),r=i(44729),s=i(78372),l=i(82036),u=i(81437),d=i(56198),c=i(29778),_=i(36625),m=i.n(_);let N=(0,n.Pi)(t=>{let{className:e}=t,{contentRef:i}=(0,d.$Y6)(),n=(0,d.s0h)("/");return(0,d.ZP4)(!0),(0,o.jsxs)("div",{className:(0,a.W)(m().root,{[m().root_desktop]:!i},e),children:[(0,o.jsx)(c.nP,{withBackwardFallback:"/",className:m().navigation,withForwardControl:!1}),(0,o.jsxs)("div",{className:m().content,children:[(0,o.jsx)(l.Icon,{className:m().icon,variant:"musicLogo",size:"xxl"}),(0,o.jsx)(u.Heading,{className:(0,a.W)(m().title,m().important),variant:"h3",size:"xs",children:(0,o.jsx)(r.Z,{id:"page-error.page-does-not-exist"})}),(0,o.jsx)(u.Caption,{className:(0,a.W)(m().text,m().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,o.jsx)(r.Z,{id:"page-error.page-does-not-exist-description"})}),(0,o.jsx)(s.z,{onClick:n,className:m().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,o.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,o.jsx)(r.Z,{id:"navigation.page-main"})})})]})]})})},29217:function(t){t.exports={root:"PlaylistPersonalDummyPage_root__tGxHG",cover:"PlaylistPersonalDummyPage_cover__XcCD1",title:"PlaylistPersonalDummyPage_title__ZSf9O",important:"PlaylistPersonalDummyPage_important__uEHGe",text:"PlaylistPersonalDummyPage_text__ci30d"}},36625:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},28817:function(t,e,i){"use strict";i.d(e,{d:function(){return n}});var o=i(58655),a=i(71603);class n extends a.e{constructor(t,e){super(t,{code:"E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE",cause:e.cause}),(0,o._)(this,"name","HttpErrorException"),(0,o._)(this,"statusCode",void 0),this.statusCode=e.statusCode,Object.setPrototypeOf(this,n.prototype)}}},71603:function(t,e,i){"use strict";i.d(e,{e:function(){return n}});var o=i(58655),a=i(46393);class n extends a.y{constructor(t="Http Client error",{code:e="E_HTTP_CLIENT",...i}={}){super(t,{code:e,...i}),(0,o._)(this,"name","HttpException"),Object.setPrototypeOf(this,n.prototype)}}},49430:function(t,e,i){"use strict";i.d(e,{CN:function(){return o.C},du:function(){return n.d},eY:function(){return a.e}});var o=i(25946),a=i(71603),n=i(28817)},25946:function(t,e,i){"use strict";var o,a;i.d(e,{C:function(){return o}}),(a=o||(o={}))[a.NOT_FOUND=404]="NOT_FOUND",a[a.BAD_REQUEST=400]="BAD_REQUEST",a[a.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",a[a.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",a[a.TEAPOT=418]="TEAPOT"}},function(t){t.O(0,[5153,6072,1884,438,85,5453,7873,7311,9778,3504,2291,1744],function(){return t(t.s=89439)}),_N_E=t.O()}]);