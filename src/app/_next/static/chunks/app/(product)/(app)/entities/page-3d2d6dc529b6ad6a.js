(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6682],{36943:function(t,e,o){Promise.resolve().then(o.bind(o,13125))},26928:function(t,e,o){"use strict";o.d(e,{Ji:function(){return _}});var r,a,n,i,s=o(72669),c=o(91207),u=o(37184);(r=n||(n={})).formatDate="FormattedDate",r.formatTime="FormattedTime",r.formatNumber="FormattedNumber",r.formatList="FormattedList",r.formatDisplayName="FormattedDisplayName",(a=i||(i={})).formatDate="FormattedDateParts",a.formatTime="FormattedTimeParts",a.formatNumber="FormattedNumberParts",a.formatList="FormattedListParts";var l=function(t){var e=(0,u.Z)(),o=t.value,r=t.children,a=(0,s.__rest)(t,["value","children"]);return r(e.formatNumberToParts(o,a))};function d(t){var e=function(e){var o=(0,u.Z)(),r=e.value,a=e.children,n=(0,s.__rest)(e,["value","children"]),i="string"==typeof r?new Date(r||0):r;return a("formatDate"===t?o.formatDateToParts(i,n):o.formatTimeToParts(i,n))};return e.displayName=i[t],e}function m(t){var e=function(e){var o=(0,u.Z)(),r=e.value,a=e.children,n=(0,s.__rest)(e,["value","children"]),i=o[t](r,n);if("function"==typeof a)return a(i);var l=o.textComponent||c.Fragment;return c.createElement(l,null,i)};return e.displayName=n[t],e}l.displayName="FormattedNumberParts",l.displayName="FormattedNumberParts";var _=m("formatDate");m("formatTime"),m("formatNumber"),m("formatList"),m("formatDisplayName"),d("formatDate"),d("formatTime")},13125:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return i}});var r=o(65301),a=o(99678);o(35979);var n=o(57218),i=()=>{let t=(0,a.useSearchParams)(),e=t.get("blockType"),o=t.get("blockId");return e&&o||(0,a.notFound)(),(0,r.jsx)(n.EntitiesPage,{blockType:e,blockId:o})}},35979:function(t,e,o){"use strict";o.d(e,{EntitiesNotFoundPage:function(){return c}});var r=o(65301),a=o(96233),n=o(91207),i=o(32544),s=o(56198);let c=(0,a.Pi)(()=>{let{landingBlockEntities:t}=(0,s.oR4)();return(0,n.useEffect)(()=>()=>{t.reset()},[t]),(0,r.jsx)(i.T,{})})},57218:function(t,e,o){"use strict";o.d(e,{EntitiesPage:function(){return m}});var r=o(65301),a=o(96233),n=o(99678),i=o(91207),s=o(28385),c=o(56198),u=o(51921);let l={"new-releases":u.g.NEW_RELEASES,"editorial-new-releases":u.g.EDITORIAL_NEW_RELEASES,"personal-artists":u.g.PERSONAL_ARTISTS,"new-stars-artists":u.g.NEW_STARS_ARTISTS,"editorial-artists":u.g.EDITORIAL_ARTISTS,"new-playlists":u.g.NEW_PLAYLISTS,"editorial-compilation":u.g.EDITORIAL_COMPILATION,"non-music-editorial-compilation":u.g.EDITORIAL_COMPILATION,"chart-albums":u.g.CHART_ALBUMS,"mixes-grid":u.g.MIXES_GRID},d=t=>l[t],m=(0,a.Pi)(t=>{let{blockType:e,blockId:o}=t,{landingBlockEntities:a}=(0,c.oR4)();(0,i.useEffect)(()=>()=>{a.reset()},[a,e,o]),(0,c.NOh)(a.loadingState===c.Gui.RESOLVE);let u=d(e);return(a.isNotFound||!u)&&(0,n.notFound)(),(0,r.jsx)(c.Lh6,{pageId:c.Rhz.ENTITIES,children:(0,r.jsx)(c.Ja5,{blockId:"".concat(c.BEo.DISCOVERY_BLOCK,"-").concat(o),blockIdForFrom:"".concat(c.BEo.DISCOVERY_BLOCK,"-").concat(o),blockPosX:1,blockPosY:1,blockType:u,objectsCount:a.items.length,children:(0,r.jsx)(s.v8,{blockType:u,blockId:o})})})})},32544:function(t,e,o){"use strict";o.d(e,{T:function(){return r.NotFound}});var r=o(40334)},40334:function(t,e,o){"use strict";o.d(e,{NotFound:function(){return f}});var r=o(65301),a=o(9695),n=o(96233),i=o(44729),s=o(78372),c=o(82036),u=o(81437),l=o(56198),d=o(29778),m=o(36625),_=o.n(m);let f=(0,n.Pi)(t=>{let{className:e}=t,{contentRef:o}=(0,l.$Y6)(),n=(0,l.s0h)("/");return(0,l.ZP4)(!0),(0,r.jsxs)("div",{className:(0,a.W)(_().root,{[_().root_desktop]:!o},e),children:[(0,r.jsx)(d.nP,{withBackwardFallback:"/",className:_().navigation,withForwardControl:!1}),(0,r.jsxs)("div",{className:_().content,children:[(0,r.jsx)(c.Icon,{className:_().icon,variant:"musicLogo",size:"xxl"}),(0,r.jsx)(u.Heading,{className:(0,a.W)(_().title,_().important),variant:"h3",size:"xs",children:(0,r.jsx)(i.Z,{id:"page-error.page-does-not-exist"})}),(0,r.jsx)(u.Caption,{className:(0,a.W)(_().text,_().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,r.jsx)(i.Z,{id:"page-error.page-does-not-exist-description"})}),(0,r.jsx)(s.z,{onClick:n,className:_().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,r.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,r.jsx)(i.Z,{id:"navigation.page-main"})})})]})]})})},36625:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}}},function(t){t.O(0,[5153,6072,1884,438,9823,85,5453,7873,5493,7311,2845,9778,1694,721,4709,6642,3154,4474,437,8385,3504,2291,1744],function(){return t(t.s=36943)}),_N_E=t.O()}]);