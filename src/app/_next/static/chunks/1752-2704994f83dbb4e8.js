(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1752],{85933:function(e,t,l){"use strict";l.d(t,{O:function(){return a}});let a=20},76651:function(e,t,l){"use strict";l.d(t,{GenreAlbumsPage:function(){return b}});var a=l(65301),i=l(9695),s=l(96233),o=l(99678),n=l(91207),r=l(37184),c=l(81437),u=l(36643),d=l(54709),m=l(21016),g=l(56198),_=l(29778),h=l(85933),C=l(48384),S=l.n(C);let b=(0,s.Pi)(e=>{var t,l,s;let{metatagId:C,preloadedMeta:b}=e,{genre:{albumsSubpage:x},settings:{isMobile:k}}=(0,g.oR4)(),{formatMessage:p}=(0,r.Z)(),{contentScrollRef:P,setContentScrollRef:v}=(0,g.$Y6)(),f=(0,g.k67)();C&&x.loadingState===g.Gui.IDLE&&(0,n.use)(x.getData({preloadedMeta:b,metatagId:C,page:0,pageSize:h.O}));let L=(0,n.useCallback)(e=>{C&&x.getData({metatagId:C,page:e,pageSize:h.O})},[x,C]);(0,n.useEffect)(()=>()=>{x.reset()},[x]),x.isNotFound&&(0,o.notFound)(),(0,g.NOh)(x.loadingState===g.Gui.RESOLVE);let A=(0,n.useMemo)(()=>({Footer:()=>(0,a.jsx)(_.$_,{className:S().footer})}),[]);return x.isSomethingWrong?(0,a.jsx)(u.D,{}):(0,a.jsx)(g.Lh6,{pageId:g.Rhz.GENRE_ALBUMS,children:(0,a.jsx)(m.I7,{scrollElement:P,outerTitle:x.fullTitle,children:(0,a.jsxs)("div",{className:S().root,children:[(0,a.jsx)(_.h4,{variant:"text",withForwardControl:!1,withBackwardControl:f.canBack,children:(0,a.jsx)(c.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:x.fullTitle})}),(0,a.jsx)(_.Wv,{className:(0,i.W)(S().scrollContainer,S().important),customComponents:A,itemContentCallback:e=>{let t=x.items[e],l=p({id:"loading-messages.entity-is-loading"},{entityName:p({id:"entity-names.album"})});return t?(0,a.jsx)(d.rf,{album:t,contentLinesCount:4},t.id):(0,a.jsx)(_.hi,{"aria-label":l,linesCount:4})},totalCount:null!==(l=null==x?void 0:null===(t=x.pager)||void 0===t?void 0:t.total)&&void 0!==l?l:0,onGetDataByPage:L,pageSize:h.O,totalRequests:null!==(s=x.requests)&&void 0!==s?s:0,listClassName:S().content,itemClassName:S().item,handleRef:v,context:{listAriaLabel:p({id:"mixes.albums-list"},{genreName:x.fullTitle||""})},isMobileLayout:k,useWindowScroll:k})]})})})})},35156:function(e,t,l){"use strict";l.d(t,{GenreArtistsPage:function(){return b}});var a=l(65301),i=l(9695),s=l(96233),o=l(99678),n=l(91207),r=l(37184),c=l(81437),u=l(36643),d=l(30302),m=l(21016),g=l(56198),_=l(29778),h=l(85933),C=l(58006),S=l.n(C);let b=(0,s.Pi)(e=>{var t,l,s;let{metatagId:C,preloadedMeta:b}=e,{genre:{artistsSubpage:x},settings:{isMobile:k}}=(0,g.oR4)(),{formatMessage:p}=(0,r.Z)(),{contentScrollRef:P,setContentScrollRef:v}=(0,g.$Y6)(),f=(0,g.k67)();C&&x.loadingState===g.Gui.IDLE&&(0,n.use)(x.getData({preloadedMeta:b,metatagId:C,page:0,pageSize:h.O}));let L=(0,n.useCallback)(e=>{C&&x.getData({metatagId:C,page:e,pageSize:h.O})},[x,C]);(0,n.useEffect)(()=>()=>{x.reset()},[x]),x.isNotFound&&(0,o.notFound)(),(0,g.NOh)(x.loadingState===g.Gui.RESOLVE);let A=(0,n.useMemo)(()=>({Footer:()=>(0,a.jsx)(_.$_,{className:S().footer})}),[]);return x.isSomethingWrong?(0,a.jsx)(u.D,{}):(0,a.jsx)(g.Lh6,{pageId:g.Rhz.GENRE_ARTISTS,children:(0,a.jsx)(m.I7,{scrollElement:P,outerTitle:x.fullTitle,children:(0,a.jsxs)("div",{className:S().root,children:[(0,a.jsx)(_.h4,{variant:"text",withForwardControl:!1,withBackwardControl:f.canBack,children:(0,a.jsx)(c.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:x.fullTitle})}),(0,a.jsx)(_.Wv,{className:(0,i.W)(S().scrollContainer,S().important),customComponents:A,itemContentCallback:e=>{var t;let l=null==x?void 0:null===(t=x.items)||void 0===t?void 0:t[e],i=p({id:"loading-messages.entity-is-loading"},{entityName:p({id:"entity-names.artist"})});return l?(0,a.jsx)(d.IT,{artist:l,contentLinesCount:3},l.id):(0,a.jsx)(_.hi,{"aria-label":i,round:!0,centered:!0})},totalCount:null!==(l=null==x?void 0:null===(t=x.pager)||void 0===t?void 0:t.total)&&void 0!==l?l:0,onGetDataByPage:L,pageSize:h.O,totalRequests:null!==(s=x.requests)&&void 0!==s?s:0,listClassName:S().content,itemClassName:S().item,handleRef:v,context:{listAriaLabel:p({id:"mixes.artists-list"},{genreName:x.fullTitle||""})},isMobileLayout:k,useWindowScroll:k})]})})})})},32523:function(e,t,l){"use strict";l.d(t,{GenreNotFoundPage:function(){return o}});var a=l(65301),i=l(96233),s=l(32544);let o=(0,i.Pi)(()=>(0,a.jsx)(s.T,{}))},23865:function(e,t,l){"use strict";l.d(t,{GenrePage:function(){return k}});var a=l(65301),i=l(9695),s=l(96233),o=l(99678),n=l(91207),r=l(37184),c=l(46642),u=l(81437),d=l(36643),m=l(54709),g=l(30302),_=l(21016),h=l(81706),C=l(56198),S=l(29778),b=l(95585),x=l.n(b);let k=(0,s.Pi)(e=>{let{metatagId:t,preloadedMeta:l}=e,{genre:s}=(0,C.oR4)(),{formatMessage:b}=(0,r.Z)(),{contentScrollRef:k,setContentScrollRef:p}=(0,C.$Y6)(),P=(0,C.k67)();return(t&&s.loadingState===C.Gui.IDLE&&(0,n.use)(s.getData({id:t,preloadedMeta:l})),s.isNotFound&&(0,o.notFound)(),(0,n.useEffect)(()=>()=>{s.reset()},[s]),(0,C.NOh)(s.loadingState===C.Gui.RESOLVE),s.loadingState!==C.Gui.REJECT||s.isNotFound)?(0,a.jsx)(C.Lh6,{pageId:C.Rhz.GENRE,children:(0,a.jsxs)(_.I7,{scrollElement:k,outerTitle:s.fullTitle,children:[(0,a.jsx)(S.h4,{variant:"text",withForwardControl:!1,withBackwardControl:P.canBack,children:(0,a.jsx)(u.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:s.fullTitle})}),(0,a.jsx)(c.t,{className:x().root,containerClassName:x().content,ref:p,children:(0,a.jsxs)("div",{className:x().carouselBlocks,children:[s.hasPlaylists&&(0,a.jsx)(C.Ja5,{blockId:C.BEo.PLAYLISTS_CAROUSEL,blockType:C.BEo.PLAYLISTS_CAROUSEL,blockPosX:1,blockPosY:1,blockIdForFrom:C.BEo.PLAYLISTS_CAROUSEL,objectsCount:s.albums.length,children:(0,a.jsx)(h.VD,{isShimmerVisible:s.isLoading,isShimmerActive:!0,headerClassName:(0,i.W)(x().carouselBlockHeader,x().carouselBlock),containerClassName:x().carouselBlock,playlists:s.playlists,title:b({id:"entity-names.popular-playlists"}),viewAllActionLink:"/genre/".concat(s.id,"/playlists")})}),s.hasAlbums&&(0,a.jsx)(C.Ja5,{blockId:C.BEo.ALBUMS_CAROUSEL,blockType:C.BEo.ALBUMS_CAROUSEL,blockPosX:1,blockPosY:2,blockIdForFrom:C.BEo.ALBUMS_CAROUSEL,objectsCount:s.albums.length,children:(0,a.jsx)(m.wk,{isShimmerVisible:s.isLoading,isShimmerActive:!0,headerClassName:(0,i.W)(x().carouselBlockHeader,x().carouselBlock),containerClassName:x().carouselBlock,albums:s.albums,title:b({id:"entity-names.new-albums"}),viewAllActionLink:"/genre/".concat(s.id,"/albums")})}),s.hasArtists&&(0,a.jsx)(C.Ja5,{blockId:C.BEo.ARTISTS_CAROUSEL,blockType:C.BEo.ARTISTS_CAROUSEL,blockPosX:1,blockPosY:3,blockIdForFrom:C.BEo.ARTISTS_CAROUSEL,objectsCount:s.albums.length,children:(0,a.jsx)(S.HY,{isShimmerVisible:s.isLoading,isShimmerActive:!0,headerClassName:(0,i.W)(x().carouselBlockHeader,x().carouselBlock),containerClassName:x().carouselBlock,title:b({id:"entity-names.popular-artists"}),viewAllActionLink:"/genre/".concat(s.id,"/artists"),children:s.artists.map(e=>(0,a.jsx)(g.IT,{artist:e,contentLinesCount:3},e.id))})})]})})]})}):(0,a.jsx)(d.D,{})})},854:function(e,t,l){"use strict";l.d(t,{GenrePlaylistsPage:function(){return b}});var a=l(65301),i=l(9695),s=l(96233),o=l(99678),n=l(91207),r=l(37184),c=l(81437),u=l(36643),d=l(21016),m=l(81706),g=l(56198),_=l(29778),h=l(85933),C=l(42954),S=l.n(C);let b=(0,s.Pi)(e=>{var t,l,s;let{metatagId:C,preloadedMeta:b}=e,{genre:{playlistsSubpage:x},settings:{isMobile:k}}=(0,g.oR4)(),{formatMessage:p}=(0,r.Z)(),{contentScrollRef:P,setContentScrollRef:v}=(0,g.$Y6)(),f=(0,g.k67)();C&&x.loadingState===g.Gui.IDLE&&(0,n.use)(x.getData({preloadedMeta:b,metatagId:C,page:0,pageSize:h.O}));let L=(0,n.useCallback)(e=>{C&&x.getData({metatagId:C,page:e,pageSize:h.O})},[x,C]);(0,n.useEffect)(()=>()=>{x.reset()},[x]),x.isNotFound&&(0,o.notFound)(),(0,g.NOh)(x.loadingState===g.Gui.RESOLVE);let A=(0,n.useMemo)(()=>({Footer:()=>(0,a.jsx)(_.$_,{className:S().footer})}),[]);return x.isSomethingWrong?(0,a.jsx)(u.D,{}):(0,a.jsx)(g.Lh6,{pageId:g.Rhz.GENRE_PLAYLISTS,children:(0,a.jsx)(d.I7,{scrollElement:P,outerTitle:x.fullTitle,children:(0,a.jsxs)("div",{className:S().root,children:[(0,a.jsx)(_.h4,{variant:"text",withForwardControl:!1,withBackwardControl:f.canBack,children:(0,a.jsx)(c.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:x.fullTitle})}),(0,a.jsx)(_.Wv,{className:(0,i.W)(S().scrollContainer,S().important),customComponents:A,itemContentCallback:e=>{var t;let l=null==x?void 0:null===(t=x.items)||void 0===t?void 0:t[e],i=p({id:"loading-messages.entity-is-loading"},{entityName:p({id:"entity-names.playlist"})});return l?(0,a.jsx)(m.ZL,{playlist:l,contentLinesCount:3},l.key):(0,a.jsx)(_.hi,{"aria-label":i})},totalCount:null!==(l=null==x?void 0:null===(t=x.pager)||void 0===t?void 0:t.total)&&void 0!==l?l:0,onGetDataByPage:L,pageSize:h.O,totalRequests:null!==(s=x.requests)&&void 0!==s?s:0,listClassName:S().content,itemClassName:S().item,handleRef:v,context:{listAriaLabel:p({id:"mixes.playlists-list"},{genreName:x.fullTitle||""})},isMobileLayout:k,useWindowScroll:k})]})})})})},48384:function(e){e.exports={root:"GenreAlbumsPage_root__r_Sts",scrollContainer:"GenreAlbumsPage_scrollContainer__K_v_b",important:"GenreAlbumsPage_important__r3P2T",footer:"GenreAlbumsPage_footer__vmCiR",item:"GenreAlbumsPage_item__zRzB0",content:"GenreAlbumsPage_content__PRJUm"}},58006:function(e){e.exports={root:"GenreArtistsPage_root__PgtIz",scrollContainer:"GenreArtistsPage_scrollContainer__s_HLR",important:"GenreArtistsPage_important__YxR3i",footer:"GenreArtistsPage_footer__fYaCO",item:"GenreArtistsPage_item__OX8zl",content:"GenreArtistsPage_content__cz47x"}},95585:function(e){e.exports={root:"GenrePage_root___kL_v",content:"GenrePage_content__NRwAJ",shimmerTitle:"GenrePage_shimmerTitle__hrgjK",carouselBlocks:"GenrePage_carouselBlocks__kR63B",carouselBlock:"GenrePage_carouselBlock__QCkpK",carouselBlockHeader:"GenrePage_carouselBlockHeader__u12sn"}},42954:function(e){e.exports={root:"GenrePlaylistsPage_root__WZwkl",scrollContainer:"GenrePlaylistsPage_scrollContainer__N3BZw",important:"GenrePlaylistsPage_important__986BX",footer:"GenrePlaylistsPage_footer__aMDul",item:"GenrePlaylistsPage_item__tUsqJ",content:"GenrePlaylistsPage_content__2rKJY"}}}]);