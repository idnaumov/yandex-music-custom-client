(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9901],{86511:function(t,e,a){Promise.resolve().then(a.bind(a,35428))},26928:function(t,e,a){"use strict";a.d(e,{Ji:function(){return g}});var i,n,r,o,l=a(72669),s=a(91207),u=a(37184);(i=r||(r={})).formatDate="FormattedDate",i.formatTime="FormattedTime",i.formatNumber="FormattedNumber",i.formatList="FormattedList",i.formatDisplayName="FormattedDisplayName",(n=o||(o={})).formatDate="FormattedDateParts",n.formatTime="FormattedTimeParts",n.formatNumber="FormattedNumberParts",n.formatList="FormattedListParts";var c=function(t){var e=(0,u.Z)(),a=t.value,i=t.children,n=(0,l.__rest)(t,["value","children"]);return i(e.formatNumberToParts(a,n))};function d(t){var e=function(e){var a=(0,u.Z)(),i=e.value,n=e.children,r=(0,l.__rest)(e,["value","children"]),o="string"==typeof i?new Date(i||0):i;return n("formatDate"===t?a.formatDateToParts(o,r):a.formatTimeToParts(o,r))};return e.displayName=o[t],e}function m(t){var e=function(e){var a=(0,u.Z)(),i=e.value,n=e.children,r=(0,l.__rest)(e,["value","children"]),o=a[t](i,r);if("function"==typeof n)return n(o);var c=a.textComponent||s.Fragment;return s.createElement(c,null,o)};return e.displayName=r[t],e}c.displayName="FormattedNumberParts",c.displayName="FormattedNumberParts";var g=m("formatDate");m("formatTime"),m("formatNumber"),m("formatList"),m("formatDisplayName"),d("formatDate"),d("formatTime")},35428:function(t,e,a){"use strict";a.r(e);var i=a(65301),n=a(99678),r=a(60345);e.default=()=>{let t=(0,n.useSearchParams)().get("artistId");return t||(0,n.notFound)(),(0,i.jsx)(r.vQ,{artistId:t})}},81097:function(t,e,a){"use strict";a.d(e,{HS:function(){return d.AfishaWidget},aD:function(){return m.a},kb:function(){return g.ConcertCard},CS:function(){return p.ConcertDate},Z:function(){return c},m:function(){return v.ConcertsBlock},zj:function(){return l},eU:function(){return r}});var i=a(2685);let n=/[+-]\d{2}:?\d{2}/,r=t=>null==t?void 0:t.replace(n,""),o=t=>{if(t)return{value:t.value,currency:t.currency}},l=t=>{var e,a;return(0,i.pj)({id:t.id,dataSessionId:null!==(a=t["data-session-id"])&&void 0!==a?a:"",datetime:t.datetime&&r(t.datetime),city:t.city,place:t.place,contentRating:t.contentRating,price:o(t.minPrice),cashbackTitle:null===(e=t.cashback)||void 0===e?void 0:e.title})};var s=a(56198);let u=i.V5.model("Price",{value:i.V5.number,currency:i.V5.string}),c=i.V5.model("Concert",{id:i.V5.string,dataSessionId:i.V5.maybe(i.V5.string),datetime:i.V5.maybe(i.V5.string),city:i.V5.maybe(i.V5.string),place:i.V5.maybe(i.V5.string),contentRating:i.V5.maybe(i.V5.string),price:i.V5.maybe(u),cashbackTitle:i.V5.maybe(i.V5.string)}).views(t=>({get isCashbackExperimentEnabled(){let{experiments:e}=(0,i.yj)(t);return e.checkExperiment(s.peG.WebNextConcertsCashback,"on")}}));var d=a(39173),m=a(9684),g=a(34486),p=a(26579),v=a(96572)},98862:function(t,e,a){"use strict";a.d(e,{x:function(){return o}});var i=a(91207),n=a(3283),r=a(56198);let o=t=>{let{artistId:e,viewUuid:a}=t,l=(0,r.z$f)(),{hash:s}=(0,r.RQn)(),{pageId:u}=(0,r.lVB)(),{objectsCount:c,objectType:d,objectId:m,objectPosX:g,objectPosY:p,objectPos:v}=(0,r.rKX)(),C=(0,r.wLl)(),N=(0,i.useCallback)(t=>{let a=(0,r.KOr)({params:{hash:s,artistId:e,objectsCount:c,objectType:d,objectId:m,objectPosX:g,objectPosY:p,to:t},logger:C,context:o.name});l&&a&&(0,n.f7)(l.evgenInstance,a)},[l,e,s,C,m,g,p,d,c]),b=(0,i.useCallback)(t=>{let i=(0,r.KOr)({params:{hash:s,artistId:e,viewUuid:a,objectId:m,objectPos:v,to:t},logger:C,context:o.name});l&&i&&a&&(0,n.Mn)(l.evgenInstance,i)},[l,e,s,C,m,v,a]);return(0,i.useCallback)(t=>{if(l&&u&&r.$PW.includes(u))switch(u){case r.Rhz.ARTIST:N(t);break;case r.Rhz.ARTIST_CONCERTS:b(t)}},[l,u,b,N])}},39173:function(t,e,a){"use strict";a.d(e,{AfishaWidget:function(){return m}});var i=a(65301),n=a(91207),r=a(37184),o=a(78372),l=a(14386),s=a(22455),u=a(56198),c=a(18042),d=a.n(c);let m=t=>{let{dataSessionId:e,isOpened:a,onOpen:c,onClose:m}=t,g=(0,u.uK4)().get(u.U5t),{formatMessage:p}=(0,r.Z)(),v=(0,n.useCallback)(t=>{t.origin===g.afisha.host&&"close"===t.data.type&&m()},[m,g.afisha.host]);(0,n.useEffect)(()=>(window.addEventListener("message",v),()=>{window.removeEventListener("message",v)}),[v]);let C=(0,n.useCallback)(t=>{t?c():m()},[m,c]),N="".concat(g.afisha.host,"/w/sessions/").concat(e,"?clientKey=").concat(g.afisha.clientId);return(0,i.jsxs)(l.u,{size:"fitContent",placement:"center",open:a,onOpenChange:C,onClose:m,showHeader:!1,className:d().widget,contentClassName:d().content,overlayColor:"full",children:[(0,i.jsx)(s.y,{children:(0,i.jsx)(o.z,{"aria-label":p({id:"interface-actions.close"}),onClick:m})}),(0,i.jsx)("iframe",{src:N,className:d().root,referrerPolicy:"no-referrer",sandbox:"allow-forms allow-modals allow-popups allow-scripts allow-same-origin",allow:"clipboard-read clipboard-write"})]})}},9684:function(t,e,a){"use strict";a.d(e,{a:function(){return u}});var i=a(65301),n=a(9695),r=a(82036),o=a(81437),l=a(83181),s=a.n(l);let u=t=>{let{title:e,className:a}=t;return(0,i.jsxs)("div",{className:(0,n.W)(s().root,a),children:[(0,i.jsx)(r.Icon,{"aria-hidden":!0,className:s().icon,variant:"plus",size:"xxxs"}),(0,i.jsx)(o.Caption,{variant:"span",type:"text",size:"m",weight:"medium",lineClamp:1,className:s().title,children:e})]})}},34486:function(t,e,a){"use strict";a.d(e,{ConcertCard:function(){return S}});var i=a(65301),n=a(91207),r=a(37184),o=a(3283),l=a(33387),s=a(2319),u=a(60383),c=a(78372),d=a(43998),m=a(81437),g=a(56198),p=a(98862);let v=t=>{let{artistId:e,viewUuid:a}=t,i=(0,g.z$f)(),{hash:r}=(0,g.RQn)(),{pageId:l}=(0,g.lVB)(),{objectsCount:s,objectType:u,objectId:c,objectPosX:d,objectPosY:m,objectPos:p}=(0,g.rKX)(),C=(0,g.wLl)(),N=(0,n.useCallback)(()=>{let t=(0,g.KOr)({params:{hash:r,artistId:e,objectsCount:s,objectType:u,objectId:c,objectPosX:d,objectPosY:m},logger:C,context:v.name});i&&t&&(0,o.F5)(i.evgenInstance,t)},[i,e,r,C,c,d,m,u,s]),b=(0,n.useCallback)(()=>{let t=(0,g.KOr)({params:{hash:r,artistId:e,viewUuid:a,objectId:c,objectPos:p},logger:C,context:v.name});i&&t&&a&&(0,o.b5)(i.evgenInstance,t)},[i,e,r,C,c,p,a]);return(0,n.useCallback)(()=>{if(i&&l&&g.$PW.includes(l))switch(l){case g.Rhz.ARTIST:N();break;case g.Rhz.ARTIST_CONCERTS:b()}},[i,l,b,N])};var C=a(39173),N=a(26579),b=a(9684),h=a(45461),y=a.n(h);let S=t=>{var e,a;let{artistId:h,concert:S,viewUuid:f}=t,{formatDate:E,formatNumber:V,formatMessage:_}=(0,r.Z)(),{state:k,toggleTrue:G,toggleFalse:T}=(0,s.O)(!1),D=v({artistId:h,viewUuid:f}),x=(0,p.x)({artistId:h,viewUuid:f}),{ref:A,intersectionPropertyId:I}=(0,g.VfV)({callback:D,singleEvent:!0}),R=(0,n.useId)(),P=(0,n.useId)(),j=(0,n.useMemo)(()=>{let t=(0,i.jsx)(m.Caption,{variant:"span",size:"m",weight:"medium","aria-hidden":!0,children:"•"}),e=[];return S.place&&e.push((0,i.jsx)(m.Caption,{variant:"span",size:"m",weight:"medium",lineClamp:1,children:S.place})),S.datetime&&(e.push(t),e.push((0,i.jsx)(m.Caption,{variant:"span",size:"m",weight:"medium",children:E(S.datetime,(0,g.Svi)())}))),S.contentRating&&(e.push(t),e.push((0,i.jsx)(m.Caption,{variant:"span",size:"m",weight:"medium",children:S.contentRating}))),(0,i.jsx)("div",{className:y().info,children:e.map((t,e)=>(0,n.cloneElement)(t,{key:e}))})},[S.contentRating,S.datetime,S.place,E]),L=(0,n.useMemo)(()=>{var t,e;return(null===(t=S.price)||void 0===t?void 0:t.value)?_({id:"payment.min-price"},{value:V(S.price.value,{style:"currency",currency:null===(e=S.price)||void 0===e?void 0:e.currency,maximumFractionDigits:0})}):_({id:"payment.buy"})},[null===(e=S.price)||void 0===e?void 0:e.currency,null===(a=S.price)||void 0===a?void 0:a.value,_,V]),O=(0,l.W)(t=>{(0,u.m)(t,y().ripple)}),F=(0,l.W)(t=>{G(),x(o.Ks.ConcertPurchaseScreen),t.stopPropagation()});return(0,i.jsxs)(d.Paper,{radius:"l",className:y().root,onClick:O,ref:A,"data-intersection-property-id":I,children:[S.datetime&&(0,i.jsx)(N.ConcertDate,{datetime:S.datetime,id:R,className:y().date,dayClassName:y().dateColor,monthClassName:y().dateColor}),(0,i.jsxs)("div",{className:y().meta,id:P,children:[(0,i.jsx)(m.Caption,{variant:"div",size:"m",weight:"medium",className:y().city,lineClamp:1,children:S.city}),j,S.isCashbackExperimentEnabled&&S.cashbackTitle&&(0,i.jsx)(b.a,{className:y().cashback,title:S.cashbackTitle})]}),S.dataSessionId&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.z,{color:"primary",radius:"xxxl",className:y().button,"aria-describedby":"".concat(R," ").concat(P),"aria-label":L,onClick:F,children:L}),(0,i.jsx)(C.AfishaWidget,{dataSessionId:S.dataSessionId,isOpened:k,onOpen:G,onClose:T})]})]})}},26579:function(t,e,a){"use strict";a.d(e,{ConcertDate:function(){return d}});var i=a(65301),n=a(9695),r=a(37184),o=a(55975),l=a(81437),s=a(56198),u=a(9434),c=a.n(u);let d=t=>{let{datetime:e,className:a,monthClassName:u,dayClassName:d,withWeekday:m=!0,...g}=t,{formatDate:p}=(0,r.Z)(),v=(0,s.KR6)(e);return(0,i.jsxs)("div",{className:(0,n.W)(c().root,a),"aria-label":p(e,(0,s.YTW)()),...g,...(0,o.BA)(o.FK.concerts.CONCERT_DATE),children:[(0,i.jsx)(l.Caption,{variant:"div",size:"xs",weight:"bold",className:(0,n.W)(c().month,u),children:v}),(0,i.jsx)(l.Caption,{variant:"div",className:(0,n.W)(c().day,d),children:p(e,(0,s.GL9)())}),m&&(0,i.jsx)(l.Caption,{variant:"div",size:"xs",weight:"bold",className:c().weekday,children:p(e,{weekday:"short"})})]})}},96572:function(t,e,a){"use strict";a.d(e,{ConcertsBlock:function(){return v}});var i=a(65301),n=a(9695),r=a(91246),o=a(91207),l=a(3283),s=a(62379),u=a(29778),c=a(98862),d=a(1336),m=a.n(d);let g=()=>Array.from({length:2},(t,e)=>(0,i.jsx)("div",{className:m().concertsColumn,children:(0,u.M4)(2)},e)),p=t=>{let{artistId:e,forwardRef:a,isLoading:d,title:p,viewAllActionLink:v,children:C,className:N,containerClassName:b,headerClassName:h,itemClassName:y,headingVariant:S,...f}=t,E=(0,o.useId)(),V=(0,o.useRef)(null),_=(0,c.x)({artistId:e}),k=(0,o.useCallback)(()=>{_(l.Ks.ArtistConcertsScreen)},[_]),G=(0,o.useMemo)(()=>(0,r.Z)(C,2).slice(0,4).map((t,e)=>(0,i.jsx)("div",{className:m().concertsColumn,children:t},e)),[C]);return(0,i.jsxs)("section",{ref:a,className:(0,n.W)(m().root,N),...f,children:[(0,i.jsx)(u.ti,{className:h,labeledForId:E,title:p,viewAllActionLink:v,onViewAllAction:k,controls:(0,i.jsx)(u.J8,{className:m().controls,carouselRef:V}),headingVariant:S}),(0,i.jsx)(s.l,{itemClassName:(0,n.W)(m().item,{[m().item_singleColumn]:2>=o.Children.count(C)},y),className:(0,n.W)(b,{[m().preventScroll]:d}),ref:V,"aria-labelledby":E,children:d?g():G})]})},v=(0,o.forwardRef)((t,e)=>(0,i.jsx)(p,{forwardRef:e,...t}))},73054:function(t,e,a){"use strict";a.d(e,{s$:function(){return C},$Z:function(){return f.RepeatButton},P4:function(){return E.ShuffleButton},WP:function(){return V.SonataControls},ps:function(){return S},NI:function(){return _.SonataVideoControls},jN:function(){return g},RN:function(){return n},B5:function(){return d}});var i=a(86348);let n=(t,e)=>({type:i.RX.Unloaded,meta:{id:t,albumId:e}});var r=a(2685),o=a(10420),l=a(48896),s=a(9096),u=a(26382),c=a(56198);let d=t=>{var e,a,n;switch(t.data.type){case o.A.Generative:{let a=t.data.meta,i=(0,c.Usz)(null==a?void 0:a.derivedColors);return(0,r.pj)({id:String(a.id),coverUri:a.imageUrl,title:null!==(e=a.title)&&void 0!==e?e:"",isAvailable:!0,isRemoved:!1,averageColor:i})}case i.RX.Unloaded:return null;default:{let e=t.data.meta,i=null===(a=e.artists)||void 0===a?void 0:a.map(s.d),o=null===(n=e.albums)||void 0===n?void 0:n.map(l.N);return(0,r.pj)({...(0,u.Ni)(e),artists:i,albums:o})}}},m=r.V5.model("UnloadedEntityMeta",{id:r.V5.union(r.V5.number,r.V5.string),albumId:r.V5.maybe(r.V5.union(r.V5.number,r.V5.string))}),g=r.V5.model("UnloadedEntityData",{meta:m,type:r.V5.literal(i.RX.Unloaded)});var p=a(35068),v=a(49724);let C=u.yp.props({artists:r.V5.array(s.Go),albums:r.V5.array(l.KX),chart:r.V5.maybe(v.BH)}).views(t=>({get idWithContext(){return t.albumId?"".concat(t.id,":").concat(t.albumId):t.id},get artistsNames(){var e;return null===(e=t.artists)||void 0===e?void 0:e.map(t=>t.name).join(", ")},get mainArtist(){var a,i;return null!==(i=null===(a=t.artists)||void 0===a?void 0:a[0])&&void 0!==i?i:null},get mainAlbum(){var n,r;return null!==(r=null===(n=t.albums)||void 0===n?void 0:n[0])&&void 0!==r?r:null},get index(){var o,l,s;return null!==(s=null===(l=t.albums[0])||void 0===l?void 0:null===(o=l.trackPosition)||void 0===o?void 0:o.index)&&void 0!==s?s:null},get isPodcast(){var u;return t.isTrackPodcast||(null===(u=this.mainAlbum)||void 0===u?void 0:u.isPodcast)},get isAudiobook(){return t.type===p.V.AUDIOBOOK},get isFairyTale(){return t.type===p.V.FAIRY_TALE},get isNonMusic(){return this.isPodcast||this.isAudiobook||this.isFairyTale},get isAvailableOnlyForPlus(){var c;return!!(null===(c=this.mainAlbum)||void 0===c?void 0:c.isAvailableOnlyForPlus)}})).actions(t=>({changeTrackInfo:(0,r.ls)(function*(e,a){let{ugcResource:i,modelActionsLogger:n}=(0,r.dU)(t);if(t.artists.map(t=>t.name).join(", ")===a&&e===t.title)return c.SLo.OK;try{var o;yield i.changeTrack({trackId:t.id,title:e,artist:a}),t.title=e;let n=(null===(o=t.artists[0])||void 0===o?void 0:o.id)||"0";if(t.artists=(0,r.pj)([]),a){let e=s.Go.create({id:n,name:a,isAvailable:!0});t.artists=(0,r.pj)([e])}return c.SLo.OK}catch(t){return n.error(t),c.SLo.ERROR}})}));var N=a(79491),b=a(19489),h=a(42982),y=a(35941);let S=r.V5.model("SonataState",{contextType:r.V5.maybeNull(r.V5.enumeration(Object.values(b.A))),contextId:r.V5.maybeNull(r.V5.string),entityMeta:r.V5.maybeNull(C),status:r.V5.enumeration(Object.values(i.Xz)),canMoveForward:r.V5.boolean,canMoveBackward:r.V5.boolean,canSpeed:r.V5.boolean,repeatMode:r.V5.enumeration(Object.values(y.zq)),canChangeRepeatMode:r.V5.boolean,volume:r.V5.maybe(r.V5.number),speed:r.V5.maybe(r.V5.number),canShuffle:r.V5.boolean,shuffle:r.V5.boolean,currentlyPlayingTrackIndex:r.V5.maybe(r.V5.number),quality:r.V5.enumeration(Object.values(h.n)),playlistFilter:r.V5.maybe(r.V5.string)}).volatile(()=>({unloadedEntitiesData:void 0})).views(t=>({get unloadedEntitiesDataFromModels(){return t.unloadedEntitiesData},get isVibeContext(){return t.contextType===b.A.Vibe},get isGenerativeContext(){return t.contextType===b.A.Generative},get isPaused(){return t.status===i.Xz.PAUSED},get isContextRepeatMode(){return t.repeatMode===y.zq.CONTEXT}})).actions(t=>({setContextId:e=>{t.contextId=String(e)},setContextType:e=>{t.contextType=e},setEntityMeta:e=>{e&&e.data.meta&&(t.entityMeta=d(e))},setUnloadedEntitiesData:e=>{e&&(t.unloadedEntitiesData=(0,N.ZN)(e))},resetUnloadedEntitiesData:()=>{t.unloadedEntitiesData=void 0},setStatus:e=>{t.status=e},setCanMoveForward:e=>{t.canMoveForward=e},setCanMoveBackward:e=>{t.canMoveBackward=e},setVolume:e=>{t.volume=e},setCanSpeed:e=>{t.canSpeed=e},setSpeed:e=>{t.speed=e},setRepeatMode:e=>{t.repeatMode=e},setCanChangeRepeatMode:e=>{t.canChangeRepeatMode=e},setCanShuffle:e=>{t.canShuffle=e},setShuffle:e=>{t.shuffle=e},setCurrentlyPlayingTrackIndex:e=>{t.currentlyPlayingTrackIndex=e},setQuality:e=>{t.quality=e},setPlaylistFilter:e=>{t.playlistFilter=e}}));a(1578),a(92624);var f=a(23116),E=a(93477),V=a(70676),_=a(88722)},60345:function(t,e,a){"use strict";a.d(e,{pr:function(){return R.ArtistAlbumsPage},MX:function(){return i.M},aG:function(){return P.ArtistConcertsPage},vQ:function(){return j.ArtistFamiliarPage},xA:function(){return L.ArtistPage},Od:function(){return I},x3:function(){return O.ArtistSimilarPage},hD:function(){return F.ArtistTracksPage}});var i=a(54348),n=a(56198),r=a(2685),o=a(49430),l=a(19522),s=a(92744),u=a(54709),c=a(30302),d=a(77702),m=a(81706),g=a(3154),p=a(9096),v=a(81097),C=a(91694);let N=(t,e)=>(0,r.pj)({artist:(0,p.d)(t),lastMonthListeners:null==e?void 0:e.lastMonthListeners});var b=a(5831);let h=t=>(0,r.pj)({clipId:t.clipId,title:t.title,thumbnail:t.thumbnail,previewUrl:t.previewUrl,duration:t.duration,artists:(t.artists||[]).map(t=>(0,p.tR)({artist:t})),contentWarning:t.explicit?b.F.EXPLICIT:void 0,...(0,n.NuW)(t)}),y=t=>{let e=t.artists.map(t=>(0,p.tR)({artist:t}));return(0,r.pj)({playlist:(0,m.RE)({playlist:t.playlist}),artists:e})},S=r.V5.compose(r.V5.model("ArtistAlbumsPage",{loadingState:r.V5.enumeration(Object.values(n.Gui)),pager:r.V5.maybeNull(C.Vn),variant:r.V5.maybeNull(r.V5.enumeration(Object.values(i.M))),alreadyRequestedPages:r.V5.map(r.V5.number),pendingPages:r.V5.map(r.V5.number),requests:r.V5.maybeNull(r.V5.number),errorStatusCode:r.V5.maybeNull(r.V5.number),items:r.V5.array(r.V5.maybeNull(u.ug))}),C.Al).views(t=>({get isNotFound(){var e;let a=t.loadingState===n.Gui.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,i=t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST;return t.loadingState===n.Gui.REJECT&&i||a}})).actions(t=>({setVariant:e=>{t.variant=e},getData:(0,r.ls)(function*(e){let{artistId:a,page:l=0,pageSize:s=20,sort:c}=e,{artistsResource:d,modelActionsLogger:m}=(0,r.dU)(t);if(!(t.loadingState===n.Gui.PENDING&&t.pendingPages.has("".concat(l))||t.alreadyRequestedPages.has("".concat(l)))){"number"==typeof l&&t.alreadyRequestedPages.set("".concat(l),l);try{var g;let e;t.loadingState=n.Gui.PENDING,t.pendingPages.set("".concat(l),l);let o={artistId:a,page:l,pageSize:s,sort:{sortBy:null==c?void 0:c.sortBy}};switch(t.variant){case i.M.COMPILATIONS:e=yield d.getAlsoAlbums(o);break;case i.M.DISCOGRAPHY:e=yield d.getDiscographyAlbums(o);break;default:e=yield d.getDirectAlbums(o)}let m={page:l,perPage:s,total:e.pager.total};0===t.items.length&&(t.items=(0,r.pj)(Array.from({length:m.total},()=>null)));let p=e.albums.map(u.ym);(0,n.AG_)({items:t.items,mappedRawItems:p,page:l,pageSize:s}),t.pager=m,t.requests=(null!==(g=t.requests)&&void 0!==g?g:0)+1,t.loadingState=n.Gui.RESOLVE}catch(e){m.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.REJECT)}finally{t.pendingPages.delete("".concat(l))}}}),reset(){t.loadingState=n.Gui.IDLE,t.pendingPages.clear(),t.variant=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.destroyItems([t.pager,t.items])}})),f=r.V5.compose(r.V5.model("ArtistConcertsPage",{loadingState:r.V5.enumeration(Object.values(n.Gui)),errorStatusCode:r.V5.maybeNull(r.V5.number),concerts:r.V5.maybeNull(r.V5.array(v.Z))}),C.Al).views(t=>({get isLoading(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING},get isNotFound(){var e;let a=t.loadingState===n.Gui.RESOLVE&&(null===(e=t.concerts)||void 0===e?void 0:e.length)===0,i=t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST;return t.loadingState===n.Gui.REJECT&&i||a}})).actions(t=>({getData:(0,r.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,r.dU)(t);if(t.loadingState!==n.Gui.PENDING)try{t.loadingState=n.Gui.PENDING;let{concerts:e}=yield i.getConcerts({artistId:a});t.concerts=(0,r.pj)(e.map(v.zj)),t.loadingState=n.Gui.RESOLVE}catch(e){l.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.REJECT)}}),reset(){t.loadingState=n.Gui.IDLE,t.errorStatusCode=null,t.destroyItems([t.concerts])}})),E=t=>(0,r.pj)({...(0,u.cO)({album:t,artists:t.artists}),version:t.version}),V=r.V5.compose(r.V5.model("ArtistFamiliarPage",{loadingState:r.V5.enumeration(Object.values(n.Gui)),errorStatusCode:r.V5.maybeNull(r.V5.number),vibeTracks:r.V5.maybeNull(r.V5.array(g.le)),collectionTracks:r.V5.maybeNull(r.V5.array(g.le)),collectionAlbums:r.V5.maybeNull(r.V5.array(u.ug))}),C.Al).views(t=>({get isLoading(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING},get isLoaded(){return t.loadingState===n.Gui.RESOLVE},get isRejected(){return t.loadingState===n.Gui.REJECT},get isNotFound(){let e=t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST;return t.loadingState===n.Gui.REJECT&&e},get hasCollectionEntities(){var e,a;return this.isLoaded&&Number(null===(e=t.collectionTracks)||void 0===e?void 0:e.length)>0||Number(null===(a=t.collectionAlbums)||void 0===a?void 0:a.length)>0},get shouldShowTitleBlocks(){var i,r;if(this.isLoading)return!0;return Number(null===(i=t.collectionTracks)||void 0===i?void 0:i.length)>0&&Number(null===(r=t.collectionAlbums)||void 0===r?void 0:r.length)>0},get hasVibeTracks(){var l;return Number(null===(l=t.vibeTracks)||void 0===l?void 0:l.length)>0},get collectionEntitiesData(){var s,u;return null!==(u=null===(s=t.collectionTracks)||void 0===s?void 0:s.map(g.E5))&&void 0!==u?u:[]},get vibeEntitiesData(){var c,d;return null!==(d=null===(c=t.vibeTracks)||void 0===c?void 0:c.map(g.E5))&&void 0!==d?d:[]}})).actions(t=>({getData:(0,r.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,r.dU)(t);if(t.loadingState!==n.Gui.PENDING)try{var s,u,c,d,m,p;t.loadingState=n.Gui.PENDING;let e=yield i.getFamiliarYou({artistId:a,waveTracksLimit:100,collectionTracksLimit:100,collectionAlbumsLimit:20});t.vibeTracks=(0,r.pj)(null===(u=e.wave)||void 0===u?void 0:null===(s=u.tracks)||void 0===s?void 0:s.map(t=>(0,g.Vt)(t))),t.collectionTracks=(0,r.pj)(null===(d=e.collection)||void 0===d?void 0:null===(c=d.tracks)||void 0===c?void 0:c.map(t=>(0,g.Vt)(t))),t.collectionAlbums=(0,r.pj)(null===(p=e.collection)||void 0===p?void 0:null===(m=p.albums)||void 0===m?void 0:m.map(E)),t.loadingState=n.Gui.RESOLVE}catch(e){l.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.REJECT)}}),reset(){t.loadingState=n.Gui.IDLE,t.errorStatusCode=null,t.destroyItems([t.vibeTracks,t.collectionTracks])}}));var _=a(50684);let k=r.V5.model("ArtistPick",{playlist:_.Cd,artists:r.V5.array(p.Go)}),G=r.V5.compose(r.V5.model("ArtistSimilarArtistsPage",{loadingState:r.V5.enumeration(Object.values(n.Gui)),errorStatusCode:r.V5.maybeNull(r.V5.number),similarArtists:r.V5.maybeNull(r.V5.array(p.Go))}),C.Al).views(t=>({get isLoading(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING},get isNotFound(){var e;let a=t.loadingState===n.Gui.RESOLVE&&(null===(e=t.similarArtists)||void 0===e?void 0:e.length)===0,i=t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST;return t.loadingState===n.Gui.REJECT&&i||a}})).actions(t=>({getData:(0,r.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,r.dU)(t);try{t.loadingState=n.Gui.PENDING;let e=yield i.getSimilarArtists({artistId:a});t.similarArtists=(0,r.pj)(e.similarArtists.map(p.d)),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.RESOLVE)}catch(e){l.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.REJECT)}}),reset(){t.loadingState=n.Gui.IDLE,t.errorStatusCode=null,t.destroyItems([t.similarArtists])}}));var T=a(44818);let D=r.V5.model("FamiliarInfo",{loadingState:r.V5.enumeration(Object.values(n.Gui)),vibeTrackCount:r.V5.optional(r.V5.number,0),collectionTrackCount:r.V5.optional(r.V5.number,0),collectionAlbumCount:r.V5.optional(r.V5.number,0)}).views(t=>({get isLoaded(){return t.loadingState===n.Gui.RESOLVE},get hasTracks(){return this.isLoaded&&(t.collectionTrackCount>0||t.vibeTrackCount>0)},get hasFamiliarInfo(){return this.isLoaded&&(this.hasTracks||t.collectionAlbumCount>0)},get tracksCount(){return t.collectionTrackCount+t.vibeTrackCount},get hasCollectionEntities(){return this.isLoaded&&(t.collectionTrackCount>0||t.collectionAlbumCount>0)},get hasVibeEntities(){return this.isLoaded&&t.vibeTrackCount>0},href(t){return t?this.hasCollectionEntities?"/artist/".concat(t,"/familiar?tab=").concat(T.g.COLLECTION):this.hasVibeEntities?"/artist/".concat(t,"/familiar?tab=").concat(T.g.VIBE):"/artist/".concat(t,"/familiar"):""}})).actions(t=>({getData:(0,r.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:o}=(0,r.dU)(t);if(t.loadingState!==n.Gui.PENDING)try{t.loadingState=n.Gui.PENDING;let e=yield i.getFamiliarYouInfo({artistId:a,withWaveInfo:!0,withCollectionInfo:!0});e.collection&&(t.collectionTrackCount=e.collection.trackCount,t.collectionAlbumCount=e.collection.albumCount),e.wave&&(t.vibeTrackCount=e.wave.trackCount),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.RESOLVE)}catch(e){o.error(e),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.REJECT)}}),reset(){t.loadingState=n.Gui.IDLE,t.vibeTrackCount=0,t.collectionTrackCount=0,t.collectionAlbumCount=0}}));var x=a(73054);let A=r.V5.compose(r.V5.model("FullTracksList",{loadingState:r.V5.enumeration(Object.values(n.Gui)),errorStatusCode:r.V5.maybeNull(r.V5.number),ids:r.V5.maybeNull(r.V5.array(r.V5.string)),tracks:r.V5.optional(r.V5.map(g.le),{})}),C.Al).views(t=>({getTrackByIndex(e){if(!t.ids||!t.ids.length)return null;let a=t.ids[e];return a&&t.tracks.get(a)||null},get isNotFound(){var e;let a=t.loadingState===n.Gui.RESOLVE&&(null===(e=t.ids)||void 0===e?void 0:e.length)===0,i=t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST;return t.loadingState===n.Gui.REJECT&&i||a}})).actions(t=>({getTracksIds:(0,r.ls)(function*(e){let{artistId:a}=e,{artistsResource:i,modelActionsLogger:l}=(0,r.dU)(t);try{t.loadingState=n.Gui.PENDING;let e=yield i.getArtistTrackIds({artistId:a}),{sonataState:o}=(0,r.yj)(t);o.setUnloadedEntitiesData(e.map(t=>(0,x.RN)(t))),t.ids=(0,r.pj)(e),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.RESOLVE)}catch(e){l.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.REJECT)}}),getTracks:(0,r.ls)(function*(e){let{trackIds:a}=e,{tracksResource:i,modelActionsLogger:n}=(0,r.dU)(t);try{let e=yield i.getTracksMeta({trackIds:a,withProgress:!0});t.tracks.merge(e.reduce((t,e)=>(t[e.id]=(0,g.Vt)(e),t),{}))}catch(t){n.error(t)}}),reset(){let{sonataState:e}=(0,r.yj)(t);e.resetUnloadedEntitiesData(),t.loadingState=n.Gui.IDLE,t.destroyItems([t.tracks,t.ids])}})),I=r.V5.compose(r.V5.model("ArtistPage",{loadingState:r.V5.enumeration(Object.values(n.Gui)),id:r.V5.maybeNull(r.V5.string),meta:r.V5.maybeNull(c.o9),popularTracks:r.V5.array(g.le),lastRelease:r.V5.maybeNull(u.ug),upcomingAlbum:r.V5.maybeNull(u.W9),concerts:r.V5.maybeNull(r.V5.array(v.Z)),similarArtists:r.V5.array(p.Go),playlists:r.V5.array(m.d2),errorStatusCode:r.V5.maybeNull(r.V5.number),deprecationTargetArtistId:r.V5.maybeNull(r.V5.number),albums:r.V5.array(u.ug),discography:r.V5.array(u.ug),compilations:r.V5.array(u.ug),clips:r.V5.array(d.x$),artistPick:r.V5.maybeNull(k),familiarInfo:D,albumsSubpage:S,fullTracksListSubpage:A,concertsSubpage:f,similarArtistsSubPage:G,familiarSubpage:V}),C.Al).views(t=>({get isLoading(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING},get hasPopularTracks(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING||t.popularTracks.length>0},get hasAlbums(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING||t.albums.length>0},get hasDiscography(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING||t.discography.length>0},get hasCompilations(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING||t.compilations.length>0},get hasSimilarArtists(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING||t.similarArtists.length>0},get hasPlaylists(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING||t.playlists&&t.playlists.length>0},get hasConcerts(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING||t.concerts&&t.concerts.length>0},get hasClips(){return t.loadingState===n.Gui.IDLE||t.loadingState===n.Gui.PENDING||t.clips.length>0},get concertsLink(){var e,a;if((null===(e=t.meta)||void 0===e?void 0:e.artist.id)&&t.concerts&&t.concerts.length>c.lj)return"/artist/".concat(null===(a=t.meta)||void 0===a?void 0:a.artist.id,"/concerts");return null},get isNotFound(){return t.loadingState===n.Gui.REJECT&&(t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST)},get isCacheNotFound(){return t.loadingState===n.Gui.REJECT&&t.errorStatusCode===s.DW},get isLoaded(){return t.loadingState===n.Gui.RESOLVE},get isRejected(){return t.loadingState===n.Gui.REJECT},get hasReleaseBlock(){return!!(this.isLoading||t.upcomingAlbum||t.lastRelease)}})).actions(t=>({getData:(0,r.ls)(function*(e){let{artistId:a,preloadedArtist:i}=e,{slides:s,experiments:d,disclaimer:C}=(0,r.yj)(t),{artistsResource:b,modelActionsLogger:S}=(0,r.dU)(t),f=d.checkExperiment(n.peG.WebNextArtistDisableLastReleases,"on"),E=d.checkExperiment(n.peG.WebNextArtistDisablePopularTracks,"on"),V=d.checkExperiment(n.peG.WebNextArtistDisableSimilarArtists,"on"),_=d.checkExperiment(n.peG.WebNextArtistDisablePopularAlbums,"on"),k=d.checkExperiment(n.peG.WebNextArtistDisableDiscography,"on"),G=d.checkExperiment(n.peG.WebNextArtistDisableCompilations,"on"),T=d.checkExperiment(n.peG.WebNextArtistDisablePlaylists,"on"),D=d.checkExperiment(n.peG.WebNextLegalRejectArtist,"on"),x=d.checkExperiment(n.peG.WebNextAgentArtist,"on"),A=d.checkExperiment(n.peG.WebNextNewExplicitApiModalFA,"on");if(t.id=a,t.loadingState!==n.Gui.PENDING)try{var I,R,P,j;t.loadingState=n.Gui.PENDING;let e=i;e||(e=yield b.getBriefInfo({artistId:a,popularTracksCount:c.ef,fetchPlaylistLikesCounts:!0,discographyBlockEnabled:!0,useClipDataFormat:!0}));let{popularTracks:d,error:S,artist:L,stats:O,albums:F,playlists:w,alsoAlbums:U,similarArtists:B,lastReleases:W,concerts:M,upcomingAlbum:z,discography:Z,artistPick:J,clips:Q}=e;if("not-found"===S||(null==L?void 0:L.error)==="not-found"){t.errorStatusCode=o.CN.NOT_FOUND,t.loadingState=n.Gui.REJECT;return}if(null===(I=L.deprecation)||void 0===I?void 0:I.targetArtistId){t.deprecationTargetArtistId=L.deprecation.targetArtistId,t.loadingState=n.Gui.RESOLVE;return}t.meta=(0,r.pj)(N(L,O));let q=(null!==(R=L.disclaimers)&&void 0!==R?R:[]).includes(l.e.MODAL),K=(null!==(P=L.disclaimers)&&void 0!==P?P:[]).includes(l.e.FOREIGN_AGENT),X=((0,n.V4d)(null!==(j=L.disclaimers)&&void 0!==j?j:[],l.e.FOREIGN_AGENT)||[])[0];if((!L.available&&q&&D||x&&K||A&&X)&&(yield C.getDisclaimerData({entityId:a,entityType:n.coP.ARTIST,newDisclaimerId:null==X?void 0:X.id})),!f&&W&&W.length>0){let e=W[0];e&&F&&F.length>1&&(t.lastRelease=(0,r.pj)((0,u.ym)(e)))}z&&(t.upcomingAlbum=(0,r.pj)((0,u.wq)(z))),M&&(t.concerts=(0,r.pj)(M.map(v.zj))),!E&&d&&d.length>0&&(t.popularTracks=(0,r.pj)(d.slice(0,c.ef).map(t=>(0,g.Vt)(t)))),!V&&B&&B.length>0&&(t.similarArtists=(0,r.pj)(B.slice(0,c.r2).map(p.d))),!_&&Number(null==F?void 0:F.length)>0&&(t.albums=(0,r.pj)(null==F?void 0:F.map(u.ym))),!k&&Number(null==Z?void 0:Z.length)>0&&(t.discography=(0,r.pj)(null==Z?void 0:Z.map(u.ym).slice(0,c.kT))),!G&&Number(null==U?void 0:U.length)>0&&(t.compilations=(0,r.pj)(null==U?void 0:U.map(u.ym).slice(0,c.kT))),!T&&w&&w.length>0&&(t.playlists=(0,r.pj)(w.map(m.Q9).slice(0,c.kT))),J&&(t.artistPick=y(J)),Q&&(t.clips=(0,r.pj)(Q.map(h).slice(0,c.rL))),s.resetArtist(),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.RESOLVE)}catch(e){S.error(e),e instanceof o.du&&(t.errorStatusCode=e.statusCode),t.loadingState!==n.Gui.IDLE&&(t.loadingState=n.Gui.REJECT)}}),reset(){t.loadingState=n.Gui.IDLE,t.id=null,t.errorStatusCode=null,t.deprecationTargetArtistId=null,t.destroyItems([t.clips,t.popularTracks,t.similarArtists,t.playlists,t.albums,t.discography,t.compilations,t.meta,t.lastRelease,t.upcomingAlbum,t.concerts,t.artistPick])}}));var R=a(92496),P=a(36438),j=a(65882);a(87633);var L=a(86441),O=a(67777),F=a(32420)},32544:function(t,e,a){"use strict";a.d(e,{T:function(){return i.NotFound}});var i=a(40334)},40334:function(t,e,a){"use strict";a.d(e,{NotFound:function(){return p}});var i=a(65301),n=a(9695),r=a(96233),o=a(44729),l=a(78372),s=a(82036),u=a(81437),c=a(56198),d=a(29778),m=a(36625),g=a.n(m);let p=(0,r.Pi)(t=>{let{className:e}=t,{contentRef:a}=(0,c.$Y6)(),r=(0,c.s0h)("/");return(0,c.ZP4)(!0),(0,i.jsxs)("div",{className:(0,n.W)(g().root,{[g().root_desktop]:!a},e),children:[(0,i.jsx)(d.nP,{withBackwardFallback:"/",className:g().navigation,withForwardControl:!1}),(0,i.jsxs)("div",{className:g().content,children:[(0,i.jsx)(s.Icon,{className:g().icon,variant:"musicLogo",size:"xxl"}),(0,i.jsx)(u.Heading,{className:(0,n.W)(g().title,g().important),variant:"h3",size:"xs",children:(0,i.jsx)(o.Z,{id:"page-error.page-does-not-exist"})}),(0,i.jsx)(u.Caption,{className:(0,n.W)(g().text,g().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,i.jsx)(o.Z,{id:"page-error.page-does-not-exist-description"})}),(0,i.jsx)(l.z,{onClick:r,className:g().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,i.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,i.jsx)(o.Z,{id:"navigation.page-main"})})})]})]})})},18042:function(t){t.exports={root:"AfishaWidget_root__Fu9a6",content:"AfishaWidget_content__YFmbs",widget:"AfishaWidget_widget__ZdvqS"}},83181:function(t){t.exports={root:"CashbackBadge_root__hStMF",icon:"CashbackBadge_icon__RJ6qe",title:"CashbackBadge_title__neGD7"}},45461:function(t){t.exports={root:"ConcertCard_root__fcR9B",ripple:"ConcertCard_ripple__PW4xI",date:"ConcertCard_date__ECoa3",dateColor:"ConcertCard_dateColor__muPRD",meta:"ConcertCard_meta__9uMgy",city:"ConcertCard_city__Pgt4S",info:"ConcertCard_info___mAu4",button:"ConcertCard_button__GQxNL",cashback:"ConcertCard_cashback__DVwFY"}},9434:function(t){t.exports={root:"ConcertDate_root__xnVG1",month:"ConcertDate_month__ti5Na",day:"ConcertDate_day__YibpP",weekday:"ConcertDate_weekday__fBZXo"}},1336:function(t){t.exports={root:"ConcertsBlock_root__d_1G3",controls:"ConcertsBlock_controls__oULxu",item:"ConcertsBlock_item__jMAX9",item_singleColumn:"ConcertsBlock_item_singleColumn__p8ilp",preventScroll:"ConcertsBlock_preventScroll__YeeZH",concertsColumn:"ConcertsBlock_concertsColumn__2M2t_"}},36625:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},3228:function(t,e,a){"use strict";a.d(e,{f:function(){return i},i:function(){return n}});let i=t=>String(t).split(":"),n=(t,e)=>e?[t,e].join(":"):t},10420:function(t,e,a){"use strict";var i,n;a.d(e,{A:function(){return i}}),(n=i||(i={})).Music="music",n.VibeTrack="vibeTrack",n.Generative="generative",n.Unknown="unknown",n.SmartPreview="smartPreview"}},function(t){t.O(0,[5153,6072,1884,7425,438,5722,85,5453,7873,5493,7311,2845,5537,9778,1694,721,4709,6642,3154,4474,437,166,2976,2744,3504,2291,1744],function(){return t(t.s=86511)}),_N_E=t.O()}]);