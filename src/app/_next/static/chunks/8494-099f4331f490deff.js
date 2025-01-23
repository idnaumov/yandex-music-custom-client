(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8494],{49055:function(e,t,a){"use strict";a.d(t,{PlaylistNotFoundPage:function(){return o}});var i=a(65301),l=a(96233),s=a(91207),r=a(32544),n=a(56198);let o=(0,l.Pi)(()=>{let{playlist:e}=(0,n.oR4)();return(0,s.useEffect)(()=>{e.reset()},[]),(0,i.jsx)(r.T,{})})},81735:function(e,t,a){"use strict";a.d(t,{PlaylistPage:function(){return ei}});var i=a(65301),l=a(9695),s=a(96233),r=a(99678),n=a(91207),o=a(37184),d=a(55975),c=a(63261),u=a(36643),m=a(21016),g=a(56198),v=a(29778);let p=e=>{let{theme:t}=(0,g.FgM)(),a=t===g.Q2A.Light?.7:.36;return(0,g.paG)(e,.6,a)};var y=a(86566),P=a.n(y),h=a(44006),_=a(80672),f=a.n(_);let x=(0,s.Pi)((0,n.forwardRef)((e,t)=>{var a;let{children:s,"data-index":r,...o}=e,{playlist:d}=(0,g.oR4)(),{isDragging:c,listeners:u,setNodeRef:m,transform:v,transition:p,attributes:y}=(0,h.nB)({id:String(null===(a=d.items[r])||void 0===a?void 0:a.key)}),P=(0,n.useCallback)(e=>{m(e),"function"==typeof t&&t(e)},[t,m]),_={transition:p,"--translate-y":v?"".concat(Math.round(v.y),"px"):void 0};return(0,i.jsx)("div",{ref:P,"data-index":r,style:_,...o,className:f().root,children:(0,i.jsx)("div",{className:(0,l.W)(f().inner,{[f().dragging]:c}),...u,...y,children:s})})}));var k=a(71582),I=a(73484),b=a(26670);let j=(e,t)=>{var a;let i=t-1;if(!e.items.length||i<0||i>e.items.length)return"";let l=e.items[i];return(null==l?void 0:null===(a=l.data)||void 0===a?void 0:a.title)||""},F=e=>{let{formatMessage:t}=(0,o.Z)();return{screenReaderInstructions:{draggable:t({id:"drag-and-drop.playlist-move-instructions"})},announcements:{onDragStart(a){let{active:i}=a;return t({id:"drag-and-drop.playlist-on-move-start"},{trackName:j(e,Number(i.id)),index:i.id})},onDragOver(a){let{active:i,over:l}=a,s=j(e,Number(i.id));return l?t({id:"drag-and-drop.playlist-on-move"},{trackName:s,index:l.id}):t({id:"drag-and-drop.playlist-on-move-fail"},{trackName:s})},onDragEnd(a){let{active:i,over:l}=a,s=j(e,Number(i.id));return l?t({id:"drag-and-drop.playlist-on-move-end-with-index"},{trackName:s,index:l.id}):t({id:"drag-and-drop.playlist-on-move-end"},{trackName:s})},onDragCancel:()=>t({id:"drag-and-drop.playlist-on-move-cancel"})}}};var S=a(50684);let N=e=>{let{notify:t}=(0,g.d$W)(),{formatMessage:a}=(0,o.Z)();return(0,n.useCallback)(async l=>{var s,r,n,o;let{from:d,to:c}=l;if(d<0||c<0||d>=e.items.length||c>=e.items.length)return;let u=String(null===(s=e.items[d])||void 0===s?void 0:s.id);if(!u)return;let m=(null===(r=e.items[d])||void 0===r?void 0:r.albumId)?Number(null===(n=e.items[d])||void 0===n?void 0:n.albumId):void 0;e.moveTrack(d,c);let p=await (null===(o=e.meta)||void 0===o?void 0:o.changePlaylist((0,S.PG)({operation:S.aL.MOVE,startPosition:d,endPosition:c,tracks:[{id:u,albumId:m}]})));p&&p===S.pX.OK||(p===S.pX.RELOAD?e.refresh():e.moveTrack(c,d),t((0,i.jsx)(v.Q,{error:a({id:"drag-and-drop.failed-to-move"})}),{containerId:g.W$x.ERROR}))},[a,t,e])};var T=a(19489),C=a(81437),D=a(3154),L=a(42278),E=a.n(L);let A=(0,s.Pi)(e=>{var t,a,s;let r,{index:o,className:d,isDragging:c,draggingClassName:u}=e,{playlist:m,sonataState:p,experiments:y}=(0,g.oR4)(),{shouldShowMajor:P,shouldShowGenre:h,shouldShowDuplicate:_}=m.editorFeature,f=y.checkExperiment(g.peG.WebEditorsFeatures,"on"),x=(null===(t=m.meta)||void 0===t?void 0:t.uuid)||m.uuid,{from:k,utmLink:I}=(0,g.MhG)({pageId:g.Rhz.PLAYLIST,blockId:g.aUg.PLAYLIST,pageEntityId:x,contextType:T.A.Playlist,contextId:x}),b=m.isDragAndDropEnabled,j=null===(a=m.items)||void 0===a?void 0:a[o],F=(0,n.useMemo)(()=>f&&_?m.editorFeature.getNumberGroupTrackDuplicated(j):null,[j,m.editorFeature,_,f]),N=(0,n.useMemo)(()=>{var e,t,a,l,s;if(!f||!j||!h&&!P&&!F)return null;let r=[],o=null===(t=j.data)||void 0===t?void 0:null===(e=t.major)||void 0===e?void 0:e.name,d=null===(s=j.data)||void 0===s?void 0:null===(l=s.albums)||void 0===l?void 0:null===(a=l[0])||void 0===a?void 0:a.genre;if(F&&r.push("№".concat(F)),P&&o){let e=m.editorFeature.getColorForMajor(o),t=(0,i.jsx)("span",{className:E().major,style:{"--major-color":e},children:o});r.push(t)}if(h&&d&&r.push(d),!r.length)return null;let c=r.map((e,t,a)=>(0,i.jsxs)(n.Fragment,{children:[e,t<a.length-1&&"; "]},t));return(0,i.jsxs)(C.Caption,{className:E().beforeTitle,type:"entity",size:"m",weight:"medium",variant:"span",children:["[",c,"] \xa0"]})},[j,F,m.editorFeature,h,P,f]);return r=j&&j.data&&m.meta?j.data.isTrackNonMusic||(null===(s=j.data.mainAlbum)||void 0===s?void 0:s.isNonMusic)?(0,i.jsx)(D.FP,{beforeTitle:N,withPodcastName:!0,withDNDBlock:b,isDragging:c,track:j.data,draggingClassName:u,playContextParams:{contextData:{type:T.A.Playlist,meta:m.contextMeta,from:k,utmLink:I},entitiesData:p.unloadedEntitiesDataFromModels,queueParams:{index:o},loadContextMeta:!0},className:d}):(0,i.jsx)(D.O2,{beforeTitle:N,withDNDBlock:b,isDragging:c,track:j.data,draggingClassName:u,playContextParams:{contextData:{type:T.A.Playlist,meta:m.contextMeta,from:k,utmLink:I,filter:m.activeFilter,filterName:m.activeFilterName,enableVariousAutoFlow:m.enableVariousAutoFlow},entitiesData:p.unloadedEntitiesDataFromModels,queueParams:{index:o},loadContextMeta:!0},activeFilter:m.activeFilter,activeFilterIndex:m.analyticsParamsActiveFilterIndex,className:(0,l.W)(d,{[E().isDuplicate]:F})}):(0,i.jsx)(v.DX,{isActive:!0,className:E().shimmerItem,variant:g.Lxt.PLAYLIST}),(0,i.jsx)(S.jK.Provider,{value:{playlist:m.meta,trackIndex:o},children:r})});var R=a(12240),w=a.n(R);let M=(0,s.Pi)(e=>{let{children:t,playlist:a}=e,{announcements:l,screenReaderInstructions:s}=F(a),r=N(a),{activeId:o,handleDragStart:d,handleDragCancel:c,sensors:u}=(0,g.iMz)(),m=(0,n.useCallback)(e=>{let{active:t,over:i}=e;if(!t.id||!(null==i?void 0:i.id))return;let l=a.itemsKeys.indexOf(String(t.id)),s=a.itemsKeys.indexOf(String(i.id));Number.isInteger(l)&&Number.isInteger(s)&&r({from:l,to:s})},[r,a.itemsKeys]),v=(0,n.useMemo)(()=>a.itemsKeys.indexOf(String(o)),[o,a.itemsKeys]);return a.isDragAndDropEnabled?(0,i.jsxs)(k.LB,{sensors:u,collisionDetection:k.pE,onDragStart:d,onDragEnd:m,onDragCancel:c,modifiers:[I.DL,I.F4],accessibility:{announcements:l,screenReaderInstructions:s},children:[(0,i.jsx)("div",{className:w().root,children:(0,i.jsx)(h.Fo,{items:a.itemsKeys,strategy:h.qw,children:t})}),(0,b.createPortal)((0,i.jsx)(k.y9,{dropAnimation:{duration:0},children:o?(0,i.jsx)("div",{className:w().draggableItemWrapper,children:(0,i.jsx)(A,{index:v,className:w().noHoverItem,isDragging:!0,draggingClassName:w().dots})}):null}),window.document.body)]}):t});var V=a(81706),W=a(40415),B=a.n(W);let O=(0,s.Pi)(e=>{let{playlist:t}=e,{formatMessage:a}=(0,o.Z)();return(0,i.jsxs)("div",{className:B().root,children:[(0,i.jsx)("div",{children:t.hasSimilarPlaylists&&(0,i.jsx)(g.Ja5,{blockId:g.BEo.PLAYLISTS_SIMILAR_PLAYLIST,blockType:g.BEo.PLAYLISTS_SIMILAR_PLAYLIST,blockPosX:1,blockPosY:2,blockIdForFrom:g.BEo.PLAYLISTS_SIMILAR_PLAYLIST,objectsCount:t.similarPlaylists.length,children:(0,i.jsx)(V.VD,{headingVariant:"h2",isShimmerVisible:t.isLoading,isShimmerActive:!0,className:B().carouselContainer,headerClassName:(0,l.W)(B().carouselBlockHeader,B().carouselBlock),containerClassName:B().carouselBlock,title:a({id:"entity-names.similar-playlists"}),playlists:t.similarPlaylists})})}),(0,i.jsx)(v.$_,{className:B().footer})]})});var K=a(77670),G=a(30106),Y=a(83085),H=a(42621),U=a(44729),X=a(46884);let q=e=>{let{item:t,from:a,tracks:i}=e,l=t.albumId?"".concat(t.id,":").concat(t.albumId):t.id,s=i.map(e=>{if(e)return(0,D.E5)(e)}).filter(e=>e);return{contextData:{type:T.A.Various,meta:{id:l},from:a},queueParams:{entityId:l},loadContextMeta:!0,entitiesData:s}},Z=(e,t)=>{let a=e.id,i=e.albumId;return{contextData:{type:T.A.Various,meta:{id:i?"".concat(a,":").concat(i):a},from:t},queueParams:{index:0},loadContextMeta:!0}};var z=a(31967),Q=a.n(z);let $=(0,s.Pi)(e=>{var t,a,s,r,d,c,u,m;let{autoFocus:p,className:y}=e,{formatMessage:P}=(0,o.Z)(),{playlist:h}=(0,g.oR4)(),{search:_}=h,f=(0,D.Wc)(),x=(0,n.useRef)(0),k=(null===(t=h.meta)||void 0===t?void 0:t.isOwnPlaylist)?g.Rhz.OWN_PLAYLISTS:g.Rhz.PLAYLIST,{from:I}=(0,g.MhG)({pageId:k,blockId:g.aUg.FILTERED}),{from:b}=(0,g.MhG)({pageId:k,blockId:g.aUg.SUGGESTED}),[j,F]=(0,n.useState)(!1);(0,n.useEffect)(()=>()=>{window.clearTimeout(x.current)},[]);let N=(0,n.useMemo)(()=>(0,H.Z)(e=>{let t=e.trim();_.setText(t),t&&(null==h?void 0:h.meta)&&(_.reset(),_.getTracks({uid:h.meta.uid,kind:h.meta.kind})),t&&0!==t.length||(j&&(F(!1),h.refreshTracks()),_.setIdleState())},100),[_,h,j]),T=(0,n.useCallback)(async e=>{if(h.meta){_.setAdditionTrackAnimation(e.id);let t=f({track:e,playlist:h.meta,withSuccessNotification:!1,withPageRefresh:!1}),a=new Promise(e=>{x.current=window.setTimeout(e,300)}),[i]=await Promise.all([t,a]);i===S.pX.OK?(_.replaceAdditionTrackInProggress(),F(!0)):_.resetAdditionTrackAnimation()}},[f,h.meta,_]),L=(0,n.useMemo)(()=>{var e;return _.isLoading?(0,i.jsx)(v.DX,{isActive:!0,className:Q().shimmerItem,variant:g.Lxt.PLAYLIST}):null===(e=_.playlistTracks)||void 0===e?void 0:e.map(e=>e?e.isTrackNonMusic?(0,i.jsx)(D.FP,{withPodcastName:!0,track:e,playContextParams:q({item:e,from:I,tracks:_.playlistTracks}),className:(0,l.W)(Q().track,{[Q().appearingTrack]:e.id===_.additionTrackInProggress})},e.id):(0,i.jsx)(D.O2,{className:(0,l.W)(Q().track,{[Q().appearingTrack]:e.id===_.additionTrackInProggress}),track:e,playContextParams:q({item:e,from:I,tracks:_.playlistTracks})},e.id):null)},[_.isLoading,_.playlistTracks,_.additionTrackInProggress,I]),E=(0,n.useMemo)(()=>{var e,t;return(null===(e=h.meta)||void 0===e?void 0:e.canUserChange)?_.isLoading?(0,i.jsx)(v.DX,{isActive:!0,className:Q().shimmerItem,variant:g.Lxt.PLAYLIST}):null===(t=_.suggestedTracks)||void 0===t?void 0:t.map(e=>e?(0,i.jsx)(D.VZ,{track:e,className:(0,l.W)({[Q().disappearingTrack]:e.id===_.additionTrackInProggress}),playContextParams:Z(e,b),onClick:T},e.id):null):void 0},[null===(a=h.meta)||void 0===a?void 0:a.canUserChange,_.isLoading,_.suggestedTracks,_.additionTrackInProggress,b,T]),A=(0,n.useMemo)(()=>{var e,t,a;let l=!(null===(e=_.suggestedTracks)||void 0===e?void 0:e.length)||!(null===(t=h.meta)||void 0===t?void 0:t.canUserChange);return(null===(a=_.playlistTrackIds)||void 0===a?void 0:a.length)||!l||_.isLoading?null:(0,i.jsx)(V.vY,{className:Q().emptyBlockContainer,isEmptySearch:!0})},[null===(s=_.suggestedTracks)||void 0===s?void 0:s.length,null===(r=_.playlistTrackIds)||void 0===r?void 0:r.length,_.isLoading,null===(d=h.meta)||void 0===d?void 0:d.canUserChange]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(X.M,{className:(0,l.W)(Q().root,y),autoFocus:p,initialValue:_.text,correctedValue:null,placeholder:P({id:"search.track-placeholder"}),onChange:N,resetButtonAriaLabel:P({id:"interface-actions.reset-search-input"}),onResetClick:_.reset}),_.text&&(0,i.jsxs)("div",{className:Q().content,children:[A,L,Number(null===(c=_.suggestedTracks)||void 0===c?void 0:c.length)>0&&(null===(u=h.meta)||void 0===u?void 0:u.canUserChange)&&(0,i.jsx)(C.Heading,{variant:"h3",className:(0,l.W)(Q().catalog,{[Q().catalog_withTracks]:null===(m=_.playlistTrackIds)||void 0===m?void 0:m.length}),children:(0,i.jsx)(U.Z,{id:"search.search-catalog"})},"search.search-catalog-caption"),E]})]})}),J=(0,s.Pi)(e=>{var t;let{className:a}=e,{ugcUploadCenter:l,playlist:s}=(0,g.oR4)();if(!(null===(t=s.meta)||void 0===t?void 0:t.kind)||!s.search.isIdle)return;let r=l.getUploadingTracksByPlaylistKind(s.meta.kind);if(0!==r.length)return(0,i.jsx)("div",{className:a,children:r.map((e,t)=>(0,i.jsx)(D.qL,{track:e},t))})});var ee=a(61497),et=a.n(ee);let ea=(0,s.Pi)(e=>{var t,a;let{playlistHeaderRef:l}=e,{playlist:s,experiments:r}=(0,g.oR4)(),o=s.isFavouritePlaylist&&(null===(t=s.meta)||void 0===t?void 0:t.isOwnPlaylist)&&r.checkExperiment(g.peG.WebNextPlaylistFilters,"on"),d=(0,n.useMemo)(()=>({objectId:s.uuid||void 0,tabId:s.activeFilter,tabPos:s.analyticsParamsActiveFilterIndex}),[s.uuid,s.activeFilter,s.analyticsParamsActiveFilterIndex]),c=(0,g.H95)(d),u=(0,g.opW)(d),v=(0,g.Vsk)(d);(0,n.useEffect)(()=>{var e;s.shouldSendEventOnTabOpened&&o&&(null===(e=s.filters.items)||void 0===e?void 0:e.length)&&(v(),s.setShouldSendEventOnTabOpened(!1))},[s,s.shouldSendEventOnTabOpened,s.setShouldSendEventOnTabOpened,v,o,null===(a=s.filters.items)||void 0===a?void 0:a.length]),(0,n.useEffect)(()=>{o&&s.isResolved&&!s.isFiltersResolved&&s.getPlaylistFilters()},[o,s,s.loadingState]);let p=(0,n.useMemo)(()=>({objectId:s.uuid}),[s.uuid]),y=(0,g._mq)(p);(0,n.useEffect)(()=>{var e;null===(e=s.filters.items)||void 0===e||e.forEach((e,t)=>{y({tabId:e.id,tabPos:t})})},[y,s.filters.items]);let P=(0,K.useTabsState)(s.activeFilterIndex),h=(0,n.useRef)(null),_=(0,n.useMemo)(()=>e=>{var t;if(!P.onTabChange||e===P.value)return;setTimeout(()=>{var t,a,i;null===(i=h.current)||void 0===i||null===(a=i.children[e])||void 0===a||null===(t=a.focus)||void 0===t||t.call(a)}),P.onTabChange(e);let a=null===(t=s.filters.items)||void 0===t?void 0:t[e];a&&s.handleFilterClick(a)},[P,s]),f=(0,n.useMemo)(()=>r.checkExperiment(g.peG.WebNextPlaylistStickyFilters,"on")?(0,i.jsx)(m.kl,{child:(0,i.jsx)(Y._K,{className:et().stickyFilters,tabsState:P,handleFilterClick:_}),children:(0,i.jsx)(Y._K,{className:et().staticFilters,tabsState:P,handleFilterClick:_,ref:h,carouselClassName:et().staticFiltersCarousel})}):(0,i.jsx)(Y._K,{tabsState:P,handleFilterClick:_,ref:h}),[r,_,P]);return((0,n.useEffect)(()=>(c(),()=>{u()}),[c,u]),s.isLoading||!s.meta||s.isRejected)?(0,i.jsx)(G.KC,{className:et().header}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(G.Vm,{className:et().header,playlist:s.meta,isDisabled:s.isDisabled,ref:l}),(0,i.jsx)($,{autoFocus:!s.items.length}),o&&f,(0,i.jsx)(J,{className:et().content}),s.shouldShowEmptyBlock&&(0,i.jsx)(V.vY,{className:et().emptyPlaylist})]})}),ei=(0,s.Pi)(e=>{var t,a,s;let{userId:y,kind:h,playlistUuid:_,preloadedPlaylistByUuid:f}=e,{playlist:k,experiments:I,settings:{isMobile:b}}=(0,g.oR4)(),{formatMessage:j}=(0,o.Z)(),{contentScrollRef:F,setContentScrollRef:S}=(0,g.$Y6)(),{forceUpdateRefCallback:N,offsetY:T}=(0,c.e)(F),C=(0,n.useMemo)(()=>{var e;return k.isRewind2024Playlist&&(null===(e=k.meta)||void 0===e?void 0:e.personalColor)?p(k.meta.personalColor):null},[k.isRewind2024Playlist,null===(t=k.meta)||void 0===t?void 0:t.personalColor]),[D,L]=(0,m.at)(C,T);(0,g.NOh)(k.loadingState===g.Gui.RESOLVE),(0,n.useEffect)(()=>()=>{k.reset()},[k,_,y,h]);let E=(0,n.useMemo)(()=>({Header:()=>(0,i.jsx)(ea,{playlistHeaderRef:N}),Item:k.isDragAndDropEnabled?x:void 0,Footer:()=>(0,i.jsx)(O,{playlist:k})}),[N,k,k.isDragAndDropEnabled]),R=(0,n.useCallback)(e=>{k.getTracksByRange(e)},[k]),w=(0,n.useCallback)(e=>{var t;return null===(t=k.items[e])||void 0===t?void 0:t.key},[k.items]),V=(0,n.useCallback)(e=>e,[]),W=(0,n.useMemo)(()=>[(0,g.FsJ)(I.checkExperiment(g.peG.WebNextEntityTrailerOnboarding,"on"))],[I]);return(k.loadingState===g.Gui.IDLE&&("string"==typeof _?(0,n.use)(k.getPlaylistByUuid({playlistUuid:_,resumeStream:!1,preloadedPlaylist:f})):"string"==typeof y&&"string"==typeof h&&(0,n.use)(k.getPlaylistByUserIdAndKind({userId:y,playlistKind:Number(h),resumeStream:!1}))),k.isNotFound&&(0,r.notFound)(),k.isRejected)?(0,i.jsx)(u.D,{}):(0,i.jsx)(g.Lh6,{pageId:g.Rhz.PLAYLIST,pageEntityId:_,children:(0,i.jsx)(g.kZw,{config:W,children:(0,i.jsxs)(m.I7,{scrollElement:F,children:[(0,i.jsx)(v.h4,{style:L}),(0,i.jsx)("div",{className:P().averageColorBackground,style:D}),(0,i.jsx)(M,{playlist:k,children:(0,i.jsx)(v.Wv,{context:{listAriaLabel:j({id:"entity-names.playlist-tracks-list"},{playlistName:(null===(a=k.meta)||void 0===a?void 0:a.title)||""})},className:(0,l.W)(P().root,P().important),listClassName:P().content,customComponents:E,computeItemKey:k.isDragAndDropEnabled?w:V,totalCount:k.virtualListItemsCount,itemContentCallback:e=>(0,i.jsx)(A,{index:e}),onGetDataByRange:R,debounceDurationInMs:300,initialItemCount:null===(s=k.items)||void 0===s?void 0:s.length,handleRef:S,shouldTriggerRangeChangedOnTotalCountChange:!0,testId:d.Br.playlist.PLAYLIST_PAGE,isMobileLayout:b,useWindowScroll:b,withFooter:!0,withForceScroll:!0})})]})})})})},4040:function(e,t,a){"use strict";a.d(t,{PlaylistShimmersPage:function(){return o}});var i=a(65301),l=a(30106),s=a(29778),r=a(18632),n=a.n(r);let o=()=>(0,i.jsxs)("div",{className:n().root,children:[(0,i.jsx)(s.h4,{className:n().header}),(0,i.jsx)(l.KC,{isActive:!0})]})},83085:function(e,t,a){"use strict";a.d(t,{W:function(){return i},_K:function(){return g.PlaylistFilters},Nj:function(){return m},Wj:function(){return c},M:function(){return s}}),(i||(i={})).ALL="all";var i,l=a(86348);let s=e=>{let[t,a]=e.split(":");return{type:l.RX.Unloaded,meta:{id:String(t),albumId:a}}};var r=a(2685),n=a(73054),o=a(3154),d=a(56198);let c=r.V5.model("PlaylistItem",{id:r.V5.union(r.V5.string,r.V5.number),albumId:r.V5.maybeNull(r.V5.union(r.V5.string,r.V5.number)),key:r.V5.string,data:r.V5.maybeNull(o.le),loadingState:r.V5.enumeration(Object.values(d.Gui))}),u=r.V5.model("PlaylistFiltersItem",{id:r.V5.string,name:r.V5.string,tracks:r.V5.array(c),unloadedTracks:r.V5.maybe(r.V5.array(n.jN))}),m=r.V5.model("PlaylistFilters",{items:r.V5.maybe(r.V5.array(u)),loadingState:r.V5.enumeration(Object.values(d.Gui))});var g=a(93326);a(14169)},93326:function(e,t,a){"use strict";a.d(t,{PlaylistFilters:function(){return g}});var i=a(65301),l=a(9695),s=a(96233),r=a(91207),n=a(56198),o=a(29778),d=a(14169),c=a(68490),u=a.n(c);let m=(0,s.Pi)(e=>{let{tabsState:t,handleFilterClick:a,forwardRef:s,className:c,carouselClassName:m}=e,{playlist:g}=(0,n.oR4)(),v=(0,r.useMemo)(()=>{var e;return(0,i.jsx)(o.no,{ref:s,className:(0,l.W)(u().carousel,m),...t,onTabChange:a,children:null===(e=g.filters.items)||void 0===e?void 0:e.map((e,a)=>(0,i.jsx)(o.OK,{className:(0,l.W)(u().filter,{[u().filter_selected]:a===t.value}),title:e.name,value:a},a))})},[s,t,a,g.filters.items,m]);return g.isFiltersLoading?(0,i.jsx)(d.PlaylistFiltersShimmer,{}):g.filters.items&&0!==g.filters.items.length&&g.search.isIdle?(0,i.jsx)(o.J3,{className:c,carouselElement:v}):void 0}),g=(0,r.forwardRef)((e,t)=>(0,i.jsx)(m,{forwardRef:t,...e}))},14169:function(e,t,a){"use strict";a.d(t,{PlaylistFiltersShimmer:function(){return d}});var i=a(65301),l=a(9695),s=a(96233),r=a(29778),n=a(19342),o=a.n(n);let d=(0,s.Pi)(e=>{let{className:t}=e;return(0,i.jsx)(r.no,{className:(0,l.W)(o().root,t),isShimmerVisible:!0,value:0,shimmer:(0,i.jsx)(r.tS,{className:o().root,shimmerClassName:o().shimmer,count:3})})})},86566:function(e){e.exports={root:"PlaylistPage_root__ajyaP",important:"PlaylistPage_important__1Xpl5",averageColorBackground:"PlaylistPage_averageColorBackground__3wEkw",content:"PlaylistPage_content__T7zOm"}},80672:function(e){e.exports={root:"PlaylistPageDnDItemWrapper_root__eBm1E",inner:"PlaylistPageDnDItemWrapper_inner__UXQZf",dragging:"PlaylistPageDnDItemWrapper_dragging__Pl94m",dragOverlay:"PlaylistPageDnDItemWrapper_dragOverlay__tWQut"}},12240:function(e){e.exports={root:"PlaylistPageDnDList_root__6Fryw",draggableItemWrapper:"PlaylistPageDnDList_draggableItemWrapper__vvEWL",dots:"PlaylistPageDnDList_dots__F4qh2",noHoverItem:"PlaylistPageDnDList_noHoverItem__dbPTH"}},40415:function(e){e.exports={root:"PlaylistPageFooter_root__h6jh8",carouselContainer:"PlaylistPageFooter_carouselContainer__fIwg5",carouselBlock:"PlaylistPageFooter_carouselBlock__OFRtz",carouselBlockHeader:"PlaylistPageFooter_carouselBlockHeader__HbjLr",footer:"PlaylistPageFooter_footer__Mqwre"}},61497:function(e){e.exports={header:"PlaylistPageHeader_header__Fgqns",stickyFilters:"PlaylistPageHeader_stickyFilters__48Rk7",staticFilters:"PlaylistPageHeader_staticFilters__IQW_4",staticFiltersCarousel:"PlaylistPageHeader_staticFiltersCarousel__UQKpn",content:"PlaylistPageHeader_content__boBkt",emptyPlaylist:"PlaylistPageHeader_emptyPlaylist__oiG4B"}},42278:function(e){e.exports={emptyBlockContainer:"PlaylistPageItem_emptyBlockContainer__K5xRV",shimmerItem:"PlaylistPageItem_shimmerItem__s_fFo",isDuplicate:"PlaylistPageItem_isDuplicate__Fhcc1",major:"PlaylistPageItem_major__WCX_W",beforeTitle:"PlaylistPageItem_beforeTitle__hYsws"}},18632:function(e){e.exports={root:"PlaylistShimmersPage_root__RsNRj",header:"PlaylistShimmersPage_header__vm4q3"}},68490:function(e){e.exports={carousel:"PlaylistFilters_carousel__AfoU1",filter:"PlaylistFilters_filter__s_myh",filter_selected:"PlaylistFilters_filter_selected__y3GuB"}},19342:function(e){e.exports={root:"PlaylistFiltersShimmer_root__dFSKz",shimmer:"PlaylistFiltersShimmer_shimmer__7myrt"}},31967:function(e){e.exports={root:"SearchPlaylistInput_root__o14iM",content:"SearchPlaylistInput_content__iDyfU",catalog:"SearchPlaylistInput_catalog__5r6Xm",catalog_withTracks:"SearchPlaylistInput_catalog_withTracks__B2ZYF",track:"SearchPlaylistInput_track__2TGLS",shimmerItem:"SearchPlaylistInput_shimmerItem__V0cOt",emptyBlockContainer:"SearchPlaylistInput_emptyBlockContainer__NSQKG",disappearingTrack:"SearchPlaylistInput_disappearingTrack__D6ja5",disappearing:"SearchPlaylistInput_disappearing__w48Cd",appearingTrack:"SearchPlaylistInput_appearingTrack__CYHzN",appearing:"SearchPlaylistInput_appearing__SafaE"}}}]);