(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5569],{70526:function(t,e,a){Promise.resolve().then(a.bind(a,19512))},19512:function(t,e,a){"use strict";a.r(e);var l=a(9753),i=a(74717),r=a(96290);e.default=()=>{let t=(0,i.useSearchParams)().get("artistId");return t||(0,i.notFound)(),(0,l.jsx)(r.pr,{artistId:t,variant:r.MX.DISCOGRAPHY})}},96290:function(t,e,a){"use strict";a.d(e,{pr:function(){return o.ArtistAlbumsPage},MX:function(){return s.M},aG:function(){return n.ArtistConcertsPage},vQ:function(){return R.ArtistFamiliarPage},xA:function(){return l.ArtistPage},Od:function(){return P},x3:function(){return r.ArtistSimilarPage},hD:function(){return i.ArtistTracksPage}});var l=a(72244),i=a(55908),r=a(99931),o=a(84292),n=a(65295),s=a(38007);a(98171);var u=a(42288),d=a(10542),c=a(59131),g=a(93490),m=a(4491),N=a(31579),E=a(75545),S=a(33589),p=a(76351),C=a(44367);let b=(t,e)=>(0,u.pj)({artist:(0,S.d)(t),lastMonthListeners:null==e?void 0:e.lastMonthListeners}),G=t=>{let e=t.artists.map(S.tR);return(0,u.pj)({playlist:(0,N.RE)({playlist:t.playlist}),artists:e})};var v=a(13196);let D=u.V5.model("ArtistAlbumsPage",{loadingState:u.V5.enumeration(Object.values(C.Gu)),pager:u.V5.maybeNull(v.Vn),variant:u.V5.maybeNull(u.V5.enumeration(Object.values(s.M))),alreadyRequestedPages:u.V5.map(u.V5.number),pendingPages:u.V5.map(u.V5.number),requests:u.V5.maybeNull(u.V5.number),errorStatusCode:u.V5.maybeNull(u.V5.number),items:u.V5.array(u.V5.maybeNull(g.ug))}).views(t=>({get isNotFound(){var e;let a=t.loadingState===C.Gu.RESOLVE&&(null===(e=t.pager)||void 0===e?void 0:e.total)===0,l=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===C.Gu.REJECT&&l||a}})).actions(t=>({setVariant:e=>{t.variant=e},getData:(0,u.ls)(function*(e){let{artistId:a,page:l=0,pageSize:i=20,sort:r}=e,{artistsResource:o,modelActionsLogger:n}=(0,u.dU)(t);if(!(t.loadingState===C.Gu.PENDING&&t.pendingPages.has("".concat(l))||t.alreadyRequestedPages.has("".concat(l)))){"number"==typeof l&&t.alreadyRequestedPages.set("".concat(l),l);try{var c;let e;t.loadingState=C.Gu.PENDING,t.pendingPages.set("".concat(l),l);let n={artistId:a,page:l,pageSize:i,sort:{sortBy:null==r?void 0:r.sortBy}};switch(t.variant){case s.M.COMPILATIONS:e=yield o.getAlsoAlbums(n);break;case s.M.DISCOGRAPHY:e=yield o.getDiscographyAlbums(n);break;default:e=yield o.getDirectAlbums(n)}let d={page:l,perPage:i,total:e.pager.total};0===t.items.length&&(t.items=(0,u.pj)(Array.from({length:d.total},()=>null)));let m=e.albums.map(g.ym);(0,C.AG)({items:t.items,mappedRawItems:m,page:l,pageSize:i}),t.pager=d,t.requests=(null!==(c=t.requests)&&void 0!==c?c:0)+1,t.loadingState=C.Gu.RESOLVE}catch(e){n.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.REJECT)}finally{t.pendingPages.delete("".concat(l))}}}),reset(){t.loadingState=C.Gu.IDLE,t.pendingPages.clear(),t.pager=null,t.variant=null,t.alreadyRequestedPages.clear(),t.errorStatusCode=null,t.items=(0,u.pj)([])}})),V=u.V5.model("ArtistConcertsPage",{loadingState:u.V5.enumeration(Object.values(C.Gu)),errorStatusCode:u.V5.maybeNull(u.V5.number),concerts:u.V5.maybeNull(u.V5.array(p.Z))}).views(t=>({get isLoading(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING},get isNotFound(){var e;let a=t.loadingState===C.Gu.RESOLVE&&(null===(e=t.concerts)||void 0===e?void 0:e.length)===0,l=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===C.Gu.REJECT&&l||a}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:l,modelActionsLogger:i}=(0,u.dU)(t);if(t.loadingState!==C.Gu.PENDING)try{t.loadingState=C.Gu.PENDING;let{concerts:e}=yield l.getConcerts({artistId:a});t.concerts=(0,u.pj)(e.map(p.zj)),t.loadingState=C.Gu.RESOLVE}catch(e){i.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.REJECT)}}),reset(){t.loadingState=C.Gu.IDLE,t.errorStatusCode=null,t.concerts=null}})),h=t=>(0,u.pj)({...(0,g.cO)({album:t,artists:t.artists}),version:t.version}),y=u.V5.model("ArtistFamiliarPage",{loadingState:u.V5.enumeration(Object.values(C.Gu)),errorStatusCode:u.V5.maybeNull(u.V5.number),vibeTracks:u.V5.maybeNull(u.V5.array(E.le)),collectionTracks:u.V5.maybeNull(u.V5.array(E.le)),collectionAlbums:u.V5.maybeNull(u.V5.array(g.ug))}).views(t=>({get isLoading(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING},get isLoaded(){return t.loadingState===C.Gu.RESOLVE},get isRejected(){return t.loadingState===C.Gu.REJECT},get isNotFound(){let e=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===C.Gu.REJECT&&e},get hasCollectionEntities(){var e,a;return this.isLoaded&&Number(null===(e=t.collectionTracks)||void 0===e?void 0:e.length)>0||Number(null===(a=t.collectionAlbums)||void 0===a?void 0:a.length)>0},get shouldShowTitleBlocks(){var l,i;if(this.isLoading)return!0;return Number(null===(l=t.collectionTracks)||void 0===l?void 0:l.length)>0&&Number(null===(i=t.collectionAlbums)||void 0===i?void 0:i.length)>0},get hasVibeTracks(){var r;return Number(null===(r=t.vibeTracks)||void 0===r?void 0:r.length)>0},get collectionEntitiesData(){var o,n;return null!==(n=null===(o=t.collectionTracks)||void 0===o?void 0:o.map(E.E5))&&void 0!==n?n:[]},get vibeEntitiesData(){var s,u;return null!==(u=null===(s=t.vibeTracks)||void 0===s?void 0:s.map(E.E5))&&void 0!==u?u:[]}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:l,modelActionsLogger:i}=(0,u.dU)(t);if(t.loadingState!==C.Gu.PENDING)try{var r,o,n,s,c,g;t.loadingState=C.Gu.PENDING;let e=yield l.getFamiliarYou({artistId:a,waveTracksLimit:100,collectionTracksLimit:100,collectionAlbumsLimit:20});t.vibeTracks=(0,u.pj)(null===(o=e.wave)||void 0===o?void 0:null===(r=o.tracks)||void 0===r?void 0:r.map(t=>(0,E.Vt)(t))),t.collectionTracks=(0,u.pj)(null===(s=e.collection)||void 0===s?void 0:null===(n=s.tracks)||void 0===n?void 0:n.map(t=>(0,E.Vt)(t))),t.collectionAlbums=(0,u.pj)(null===(g=e.collection)||void 0===g?void 0:null===(c=g.albums)||void 0===c?void 0:c.map(h)),t.loadingState=C.Gu.RESOLVE}catch(e){i.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.REJECT)}}),reset(){t.loadingState=C.Gu.IDLE,t.errorStatusCode=null,t.vibeTracks=null,t.collectionTracks=null}}));var T=a(12090);let A=u.V5.model("ArtistPick",{playlist:T.Cd,artists:u.V5.array(S.Go)}),k=u.V5.model("ArtistSimilarArtistsPage",{loadingState:u.V5.enumeration(Object.values(C.Gu)),errorStatusCode:u.V5.maybeNull(u.V5.number),similarArtists:u.V5.maybeNull(u.V5.array(S.Go))}).views(t=>({get isLoading(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING},get isNotFound(){var e;let a=t.loadingState===C.Gu.RESOLVE&&(null===(e=t.similarArtists)||void 0===e?void 0:e.length)===0,l=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===C.Gu.REJECT&&l||a}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:l,modelActionsLogger:i}=(0,u.dU)(t);try{t.loadingState=C.Gu.PENDING;let e=yield l.getSimilarArtists({artistId:a});t.similarArtists=(0,u.pj)(e.similarArtists.map(S.d)),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.RESOLVE)}catch(e){i.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.REJECT)}}),reset(){t.loadingState=C.Gu.IDLE,t.errorStatusCode=null,t.similarArtists=(0,u.pj)([])}}));var I=a(72587);let L=u.V5.model("FamiliarInfo",{loadingState:u.V5.enumeration(Object.values(C.Gu)),vibeTrackCount:u.V5.optional(u.V5.number,0),collectionTrackCount:u.V5.optional(u.V5.number,0),collectionAlbumCount:u.V5.optional(u.V5.number,0)}).views(t=>({get isLoaded(){return t.loadingState===C.Gu.RESOLVE},get hasTracks(){return this.isLoaded&&(t.collectionTrackCount>0||t.vibeTrackCount>0)},get hasFamiliarInfo(){return this.isLoaded&&(this.hasTracks||t.collectionAlbumCount>0)},get tracksCount(){return t.collectionTrackCount+t.vibeTrackCount},get hasCollectionEntities(){return this.isLoaded&&(t.collectionTrackCount>0||t.collectionAlbumCount>0)},get hasVibeEntities(){return this.isLoaded&&t.vibeTrackCount>0},href(t){return t?this.hasCollectionEntities?"/artist/".concat(t,"/familiar?tab=").concat(I.g.COLLECTION):this.hasVibeEntities?"/artist/".concat(t,"/familiar?tab=").concat(I.g.VIBE):"/artist/".concat(t,"/familiar"):""}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:l,modelActionsLogger:i}=(0,u.dU)(t);if(t.loadingState!==C.Gu.PENDING)try{t.loadingState=C.Gu.PENDING;let e=yield l.getFamiliarYouInfo({artistId:a,withWaveInfo:!0,withCollectionInfo:!0});e.collection&&(t.collectionTrackCount=e.collection.trackCount,t.collectionAlbumCount=e.collection.albumCount),e.wave&&(t.vibeTrackCount=e.wave.trackCount),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.RESOLVE)}catch(e){i.error(e),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.REJECT)}}),reset(){t.loadingState=C.Gu.IDLE,t.vibeTrackCount=0,t.collectionTrackCount=0,t.collectionAlbumCount=0}}));var O=a(75191);let f=u.V5.model("FullTracksList",{loadingState:u.V5.enumeration(Object.values(C.Gu)),errorStatusCode:u.V5.maybeNull(u.V5.number),ids:u.V5.maybeNull(u.V5.array(u.V5.string)),tracks:u.V5.optional(u.V5.map(E.le),{})}).views(t=>({getTrackByIndex(e){if(!t.ids||!t.ids.length)return null;let a=t.ids[e];return a&&t.tracks.get(a)||null},get isNotFound(){var e;let a=t.loadingState===C.Gu.RESOLVE&&(null===(e=t.ids)||void 0===e?void 0:e.length)===0,l=t.errorStatusCode===d.CN.NOT_FOUND||t.errorStatusCode===d.CN.BAD_REQUEST;return t.loadingState===C.Gu.REJECT&&l||a}})).actions(t=>({getTracksIds:(0,u.ls)(function*(e){let{artistId:a}=e,{artistsResource:l,modelActionsLogger:i}=(0,u.dU)(t);try{t.loadingState=C.Gu.PENDING;let e=yield l.getArtistTrackIds({artistId:a}),{sonataState:i}=(0,u.yj)(t);i.setUnloadedEntitiesData(e.map(t=>(0,O.RN)(t))),t.ids=(0,u.pj)(e),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.RESOLVE)}catch(e){i.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.REJECT)}}),getTracks:(0,u.ls)(function*(e){let{trackIds:a}=e,{tracksResource:l,modelActionsLogger:i}=(0,u.dU)(t);try{let e=yield l.getTracksMeta({trackIds:a,withProgress:!0});t.tracks.merge(e.reduce((t,e)=>(t[e.id]=(0,E.Vt)(e),t),{}))}catch(t){i.error(t)}}),reset(){let{sonataState:e}=(0,u.yj)(t);e.resetUnloadedEntitiesData(),t.loadingState=C.Gu.IDLE,t.ids=(0,u.pj)([]),t.tracks.clear()}})),P=u.V5.model("ArtistPage",{loadingState:u.V5.enumeration(Object.values(C.Gu)),id:u.V5.maybeNull(u.V5.string),meta:u.V5.maybeNull(m.o9),popularTracks:u.V5.array(E.le),lastRelease:u.V5.maybeNull(g.ug),upcomingAlbum:u.V5.maybeNull(g.W9),concerts:u.V5.maybeNull(u.V5.array(p.Z)),similarArtists:u.V5.array(S.Go),playlists:u.V5.array(N.d2),errorStatusCode:u.V5.maybeNull(u.V5.number),deprecationTargetArtistId:u.V5.maybeNull(u.V5.number),albums:u.V5.array(g.ug),discography:u.V5.array(g.ug),compilations:u.V5.array(g.ug),artistPick:u.V5.maybeNull(A),familiarInfo:L,albumsSubpage:D,fullTracksListSubpage:f,concertsSubpage:V,similarArtistsSubPage:k,familiarSubpage:y}).views(t=>({get isLoading(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING},get hasPopularTracks(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING||t.popularTracks.length>0},get hasAlbums(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING||t.albums.length>0},get hasDiscography(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING||t.discography.length>0},get hasCompilations(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING||t.compilations.length>0},get hasSimilarArtists(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING||t.similarArtists.length>0},get hasPlaylists(){return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING||t.playlists&&t.playlists.length>0},get hasConcerts(){let{experiments:e}=(0,u.yj)(t);return t.loadingState===C.Gu.IDLE||t.loadingState===C.Gu.PENDING||t.concerts&&t.concerts.length>0&&e.checkExperiment(C.pe.WebNewBlockConcerts,"on")},get concertsLink(){var e,a;let{experiments:l}=(0,u.yj)(t);if(l.checkExperiment(C.pe.WebNewConcertsList,"on")&&(null===(e=t.meta)||void 0===e?void 0:e.artist.id)&&t.concerts&&t.concerts.length>3)return"/artist/".concat(null===(a=t.meta)||void 0===a?void 0:a.artist.id,"/concerts");return null},get isNotFound(){return t.loadingState===C.Gu.REJECT&&t.errorStatusCode===d.CN.NOT_FOUND},get isLoaded(){return t.loadingState===C.Gu.RESOLVE},get isRejected(){return t.loadingState===C.Gu.REJECT},get hasReleaseBlock(){return!!(this.isLoading||t.upcomingAlbum||t.lastRelease)}})).actions(t=>({getData:(0,u.ls)(function*(e){let{artistId:a}=e,{slides:l,experiments:i,disclaimer:r}=(0,u.yj)(t),{artistsResource:o,modelActionsLogger:n}=(0,u.dU)(t),s=i.checkExperiment(C.pe.WebNextArtistDisableLastReleases,"on"),m=i.checkExperiment(C.pe.WebNextArtistDisablePopularTracks,"on"),v=i.checkExperiment(C.pe.WebNextArtistDisableSimilarArtists,"on"),D=i.checkExperiment(C.pe.WebNextArtistDisablePopularAlbums,"on"),V=i.checkExperiment(C.pe.WebNextArtistDisableDiscography,"on"),h=i.checkExperiment(C.pe.WebNextArtistDisableCompilations,"on"),y=i.checkExperiment(C.pe.WebNextArtistDisablePlaylists,"on"),T=i.checkExperiment(C.pe.WebNextLegalRejectArtist,"on");if(t.id=a,t.loadingState!==C.Gu.PENDING)try{var A,k;t.loadingState=C.Gu.PENDING;let{popularTracks:e,error:i,artist:n,stats:I,albums:L,playlists:O,alsoAlbums:f,similarArtists:P,lastReleases:R,concerts:j,upcomingAlbum:U,discography:_,artistPick:F}=yield o.getBriefInfo({artistId:a,popularTracksCount:5,fetchPlaylistLikesCounts:!0,discographyBlockEnabled:!0});if("not-found"===i||(null==n?void 0:n.error)==="not-found"){t.errorStatusCode=d.CN.NOT_FOUND,t.loadingState=C.Gu.REJECT;return}if(null===(A=n.deprecation)||void 0===A?void 0:A.targetArtistId){t.deprecationTargetArtistId=n.deprecation.targetArtistId,t.loadingState=C.Gu.RESOLVE;return}t.meta=(0,u.pj)(b(n,I));let x=(null!==(k=n.disclaimers)&&void 0!==k?k:[]).includes(c.em.MODAL);if(!n.available&&x&&T&&(yield r.getArtistDisclaimer({artistId:a})),!s&&R&&R.length>0){let e=R[0];e&&L&&L.length>1&&(t.lastRelease=(0,u.pj)((0,g.ym)(e)))}U&&(t.upcomingAlbum=(0,u.pj)((0,g.wq)(U))),j&&(t.concerts=(0,u.pj)(j.map(p.zj))),!m&&e&&e.length>0&&(t.popularTracks=(0,u.pj)(e.slice(0,5).map(t=>(0,E.Vt)(t)))),!v&&P&&P.length>0&&(t.similarArtists=(0,u.pj)(P.slice(0,9).map(S.d))),!D&&Number(null==L?void 0:L.length)>0&&(t.albums=(0,u.pj)(null==L?void 0:L.map(g.ym))),!V&&Number(null==_?void 0:_.length)>0&&(t.discography=(0,u.pj)(null==_?void 0:_.map(g.ym).slice(0,9))),!h&&Number(null==f?void 0:f.length)>0&&(t.compilations=(0,u.pj)(null==f?void 0:f.map(g.ym).slice(0,9))),!y&&O&&O.length>0&&(t.playlists=(0,u.pj)(O.map(N.Q9).slice(0,9))),F&&(t.artistPick=G(F)),l.resetArtist(),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.RESOLVE)}catch(e){n.error(e),e instanceof d.du&&(e.statusCode===d.CN.NOT_FOUND||e.statusCode===d.CN.BAD_REQUEST)&&(t.errorStatusCode=d.CN.NOT_FOUND),t.loadingState!==C.Gu.IDLE&&(t.loadingState=C.Gu.REJECT)}}),reset(){t.loadingState=C.Gu.IDLE,t.id=null,t.meta=null,t.errorStatusCode=null,t.deprecationTargetArtistId=null,t.lastRelease=null,t.upcomingAlbum=null,t.concerts=null,t.artistPick=null,t.popularTracks=(0,u.pj)([]),t.similarArtists=(0,u.pj)([]),t.playlists=(0,u.pj)([]),t.albums=(0,u.pj)([]),t.discography=(0,u.pj)([]),t.compilations=(0,u.pj)([])}}));var R=a(60325)}},function(t){t.O(0,[5675,7169,5107,6113,8754,3500,5736,560,2498,7873,2330,7403,3621,9448,4367,7868,3196,4901,3490,1055,9352,5545,9598,1071,4667,5191,2171,361,1744],function(){return t(t.s=70526)}),_N_E=t.O()}]);