(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7645, 1579, 6290, 154],
  {
    99340: function (e, t, a) {
      "use strict";
      a.d(t, {
        ContainerProvider: function () {
          return r;
        },
      });
      var i = a(9753),
        l = a(98639),
        s = a(63394);
      let n = async (e) => {
          let {
              hostTld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: l,
              traceparent: n,
              serverDetectedLang: r,
              env: o,
            } = e,
            u = await (0, s.ZO)({
              tld: t,
              forwardedForY: a,
              changeLanguageToken: i,
              tracestate: l,
              traceparent: n,
              serverDetectedLang: r,
              env: o,
            });
          return await u.get(s.uh).loadDictionary(), u;
        },
        r = (e) => {
          let {
              children: t,
              hostTld: a,
              env: r,
              forwardedForY: o,
              tracestate: u,
              traceparent: d,
              changeLanguageToken: c,
              serverDetectedLang: g,
            } = e,
            m = (0, l.use)(
              n({
                hostTld: a,
                env: r,
                forwardedForY: o,
                tracestate: u,
                traceparent: d,
                changeLanguageToken: c,
                serverDetectedLang: g,
              }),
            );
          return (0, i.jsx)(s.Xl.Provider, { value: m, children: t });
        };
    },
    88746: function (e, t, a) {
      "use strict";
      a.d(t, {
        StoreProvider: function () {
          return eR;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(42288),
        n = a(74717),
        r = a(98639),
        o = a(63394),
        u = a(76894),
        d = a(87181),
        c = a(15419);
      let g = {
        experiments: { loadingState: o.Gu.IDLE, experiments: {} },
        user: {
          account: { loadingState: o.Gu.IDLE },
          settings: { loadingState: o.Gu.IDLE, showWizard: !0 },
        },
        collection: {
          albums: {
            loadingState: o.Gu.IDLE,
            upcomingAlbumsLoadingState: o.Gu.IDLE,
            items: [],
          },
          playlistsCreated: { loadingState: o.Gu.IDLE, items: [] },
          playlistsLiked: { loadingState: o.Gu.IDLE, items: [] },
          artists: { loadingState: o.Gu.IDLE, items: [] },
          landing: {
            loadingState: o.Gu.IDLE,
            tabs: { loadingState: o.Gu.IDLE, data: [] },
          },
          shelf: {
            recentlyPlayed: { loadingState: o.Gu.IDLE },
            liked: { loadingState: o.Gu.IDLE },
          },
          nonMusicLiked: { loadingState: o.Gu.IDLE, items: [] },
          dislikes: {
            artists: { loadingState: o.Gu.IDLE },
            tracks: { loadingState: o.Gu.IDLE },
          },
        },
        main: {
          landing: {
            loadingState: o.Gu.IDLE,
            tabs: { loadingState: o.Gu.IDLE, data: [] },
          },
        },
        nonMusic: {
          landing: {
            loadingState: o.Gu.IDLE,
            tabs: { loadingState: o.Gu.IDLE, data: [] },
          },
        },
        settings: { layout: null },
        currentTrackInfo: {
          trackLoadingState: o.Gu.IDLE,
          creditsLoadingState: o.Gu.IDLE,
          id: null,
          albumId: null,
          isUGC: null,
          fullTrack: null,
          credits: null,
        },
        album: {
          loadingState: o.Gu.IDLE,
          items: [],
          meta: null,
          otherAlbumVersions: [],
          donations: { loadingState: o.Gu.IDLE, items: [] },
          latestGenreAlbums: { loadingState: o.Gu.IDLE, items: [] },
          otherArtistAlbums: { loadingState: o.Gu.IDLE, items: [] },
          relatedContent: { loadingState: o.Gu.IDLE, items: [] },
        },
        artist: {
          loadingState: o.Gu.IDLE,
          meta: null,
          popularTracks: [],
          similarArtists: [],
          albums: [],
          discography: [],
          compilations: [],
          playlists: [],
          fullTracksListSubpage: { loadingState: o.Gu.IDLE },
          albumsSubpage: { loadingState: o.Gu.IDLE },
          concertsSubpage: { loadingState: o.Gu.IDLE },
          similarArtistsSubPage: { loadingState: o.Gu.IDLE },
          familiarInfo: { loadingState: o.Gu.IDLE },
          familiarSubpage: { loadingState: o.Gu.IDLE },
        },
        library: {
          loadingState: o.Gu.IDLE,
          tracks: {},
          artists: {},
          playlists: {},
          albums: {},
        },
        sonataState: {
          contextId: null,
          contextType: null,
          entityMeta: null,
          status: c.Xz.IDLE,
          canMoveBackward: !1,
          canMoveForward: !1,
          canSpeed: !1,
          canChangeRepeatMode: !0,
          repeatMode: d.zq.NONE,
          quality: u.nJ.HQ,
          canShuffle: !0,
          shuffle: !1,
        },
        playlist: {
          loadingState: o.Gu.IDLE,
          searchLoadingState: o.Gu.IDLE,
          meta: null,
          items: [],
          searchItems: {},
          similarPlaylists: [],
        },
        slides: {
          userSlidesLoadingState: o.Gu.IDLE,
          artistSlidesLoadingState: o.Gu.IDLE,
          userItems: [],
          artistItems: [],
        },
        vibe: {
          getLastLoadingState: o.Gu.IDLE,
          vibeResetLoadingState: o.Gu.IDLE,
          isLoading: !1,
        },
        search: {
          searchCorrectedText: null,
          loadingState: o.Gu.IDLE,
          results: [],
          history: { loadingState: o.Gu.IDLE, items: [] },
          mixes: { loadingState: o.Gu.IDLE, items: [] },
        },
        vibeSettings: { loadingState: o.Gu.IDLE },
        pinsCollection: { loadingState: o.Gu.IDLE, index: {} },
        genre: {
          loadingState: o.Gu.IDLE,
          albumsSubpage: { loadingState: o.Gu.IDLE },
          artistsSubpage: { loadingState: o.Gu.IDLE },
          playlistsSubpage: { loadingState: o.Gu.IDLE },
        },
        genres: { title: null, loadingState: o.Gu.IDLE, items: [] },
        mixes: { loadingState: o.Gu.IDLE, items: [] },
        tag: {
          tagLoadingState: o.Gu.IDLE,
          playlistsLoadingState: o.Gu.IDLE,
          playlistsData: [],
          playlists: [],
        },
        chart: {
          title: null,
          playlistMeta: null,
          loadingState: o.Gu.IDLE,
          items: [],
        },
        post: { loadingState: o.Gu.IDLE },
        landingBlockEntities: { loadingState: o.Gu.IDLE },
        contextMenuPlaylists: { loadingState: o.Gu.IDLE, items: [] },
        musicHistory: { loadingState: o.Gu.IDLE, tabs: null },
        createPlaylist: {},
        location: {},
        disclaimer: { loadingState: o.Gu.IDLE },
        trailer: {
          loadingState: o.Gu.IDLE,
          withAnimation: !0,
          shouldAutoStartPlaying: !0,
          modal: {},
          state: {
            contextId: null,
            contextType: null,
            entityMeta: null,
            status: c.Xz.IDLE,
          },
        },
        communication: { loadingState: o.Gu.IDLE },
        modals: {
          disclaimerModal: {},
          trackModal: {},
          releaseNotesModal: {},
          shortcutsModal: {},
          aboutAppModal: {},
          overviewModal: {},
        },
        landing: {
          loadingState: o.Gu.IDLE,
          tabs: { loadingState: o.Gu.IDLE, data: [] },
        },
        fullscreenPlayer: {
          modal: {},
          syncLyrics: { loadingState: o.Gu.IDLE },
        },
      };
      var m = a(78601),
        S = a(96290),
        p = a(93438),
        E = a(28326),
        y = a(93490),
        h = a(58421);
      let G = s.V5.model("CollectionAlbumsPage", {
        loadingState: s.V5.enumeration(Object.values(o.Gu)),
        sort: s.V5.maybeNull(h.$4),
        items: s.V5.array(s.V5.maybeNull(y.ug)),
        pager: s.V5.maybeNull(h.Vn),
        alreadyRequestedPages: s.V5.map(s.V5.number),
        pendingPages: s.V5.map(s.V5.number),
        requestsCount: s.V5.maybeNull(s.V5.number),
        upcomingAlbumsLoadingState: s.V5.enumeration(Object.values(o.Gu)),
        upcomingAlbums: s.V5.maybeNull(s.V5.array(y.W9)),
      })
        .views((e) => ({
          get isAlbumsLoading() {
            return (
              e.loadingState === o.Gu.IDLE ||
              (e.loadingState === o.Gu.PENDING && 0 === e.items.length)
            );
          },
          get isLoading() {
            return (
              this.isAlbumsLoading ||
              e.upcomingAlbumsLoadingState === o.Gu.IDLE ||
              e.upcomingAlbumsLoadingState === o.Gu.PENDING
            );
          },
          get isUpcomingAlbumsLoading() {
            return (
              e.upcomingAlbumsLoadingState === o.Gu.IDLE ||
              e.upcomingAlbumsLoadingState === o.Gu.PENDING
            );
          },
          get isUpcomingAlbumsEmpty() {
            var t;
            return (
              !this.isUpcomingAlbumsLoading &&
              (!e.upcomingAlbums ||
                (null === (t = e.upcomingAlbums) || void 0 === t
                  ? void 0
                  : t.length) === 0)
            );
          },
          get isAlbumsEmpty() {
            var a;
            return (
              !this.isAlbumsLoading &&
              (!e.items ||
                (null === (a = e.items) || void 0 === a ? void 0 : a.length) ===
                  0)
            );
          },
        }))
        .actions((e) => ({
          getData: (0, s.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: n,
                sortOrder: r,
                metaType: u,
              } = t,
              { usersResource: d, modelActionsLogger: c } = (0, s.dU)(e);
            if (
              !(
                (e.loadingState === o.Gu.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
            ) {
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i),
                (e.sort = null),
                n && r && (e.sort = { sortBy: n, sortOrder: r });
              try {
                var g, m, S;
                (e.loadingState = o.Gu.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield d.getLikedAlbums({
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: n,
                    sortOrder: r,
                    metaType: u,
                  }),
                  c = { page: i, perPage: l, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, s.pj)(
                    Array.from({ length: c.total }, () => null),
                  ));
                let p =
                  null !==
                    (m =
                      null === (g = t.albums) || void 0 === g
                        ? void 0
                        : g.map((e) => {
                            let { album: t } = e;
                            return (0, y.ym)(t);
                          })) && void 0 !== m
                    ? m
                    : [];
                (0, o.AG)({
                  items: e.items,
                  mappedRawItems: p,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = c),
                  (e.requestsCount =
                    (null !== (S = e.requestsCount) && void 0 !== S ? S : 0) +
                    1),
                  e.loadingState !== o.Gu.IDLE &&
                    (e.loadingState = o.Gu.RESOLVE);
              } catch (t) {
                c.error(t), (e.loadingState = o.Gu.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }
          }),
          getPresaves: (0, s.ls)(function* (t) {
            let { userId: a } = t,
              { usersResource: i, modelActionsLogger: l } = (0, s.dU)(e);
            if (e.upcomingAlbumsLoadingState !== o.Gu.PENDING)
              try {
                var n;
                e.upcomingAlbumsLoadingState = o.Gu.PENDING;
                let t = yield i.getPresaves({
                  userId: a,
                  includeReleased: !1,
                  includeUpcoming: !0,
                });
                (e.upcomingAlbums = (0, s.pj)(
                  null === (n = t.upcomingAlbums) || void 0 === n
                    ? void 0
                    : n.map(y.wq),
                )),
                  e.upcomingAlbumsLoadingState !== o.Gu.IDLE &&
                    (e.upcomingAlbumsLoadingState = o.Gu.RESOLVE);
              } catch (t) {
                l.error(t),
                  e.upcomingAlbumsLoadingState !== o.Gu.IDLE &&
                    (e.upcomingAlbumsLoadingState = o.Gu.REJECT);
              }
          }),
          reset() {
            (e.loadingState = o.Gu.IDLE),
              (e.sort = null),
              (e.items = (0, s.pj)([])),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.upcomingAlbumsLoadingState = o.Gu.IDLE),
              (e.upcomingAlbums = null);
          },
        }));
      var N = a(33589);
      let b = s.V5.model("CollectionArtistsPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          sort: s.V5.maybeNull(h.$4),
          items: s.V5.array(s.V5.maybeNull(N.Go)),
          pager: s.V5.maybeNull(h.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
        }).actions((e) => ({
          getData: (0, s.ls)(function* (t) {
            let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: n,
                sortOrder: r,
              } = t,
              { usersResource: u, modelActionsLogger: d } = (0, s.dU)(e);
            if (
              !(
                (e.loadingState === o.Gu.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
            ) {
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i),
                (e.sort = null),
                n && r && (e.sort = { sortBy: n, sortOrder: r });
              try {
                var c, g, m;
                (e.loadingState = o.Gu.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let t = yield u.getLikedArtists({
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: n,
                    sortOrder: r,
                  }),
                  d = { page: i, perPage: l, total: t.pager.total };
                0 === e.items.length &&
                  (e.items = (0, s.pj)(
                    Array.from({ length: d.total }, () => null),
                  )),
                  (e.loadingState = o.Gu.RESOLVE);
                let S =
                  null !==
                    (g =
                      null === (c = t.artists) || void 0 === c
                        ? void 0
                        : c.map(N.d)) && void 0 !== g
                    ? g
                    : [];
                (0, o.AG)({
                  items: e.items,
                  mappedRawItems: S,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = d),
                  (e.requests =
                    (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                  e.loadingState !== o.Gu.IDLE &&
                    (e.loadingState = o.Gu.RESOLVE);
              } catch (t) {
                d.error(t), (e.loadingState = o.Gu.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }
          }),
          reset() {
            (e.loadingState = o.Gu.IDLE),
              (e.sort = null),
              e.pendingPages.clear(),
              (e.pager = null),
              e.alreadyRequestedPages.clear(),
              (e.items = (0, s.pj)([]));
          },
        })),
        v = s.V5.model("CollectionNonMusicPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          items: s.V5.array(s.V5.maybeNull(y.ug)),
          pager: s.V5.maybeNull(h.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requestsCount: s.V5.maybeNull(s.V5.number),
        })
          .views((e) => ({
            get isAlbumsLoading() {
              return (
                e.loadingState === o.Gu.IDLE ||
                (e.loadingState === o.Gu.PENDING && 0 === e.items.length)
              );
            },
            get isLoading() {
              return this.isAlbumsLoading;
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isResolved() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isEmptyItems() {
              var t;
              return !!(
                !(null === (t = e.items) || void 0 === t ? void 0 : t.length) &&
                e.requestsCount
              );
            },
          }))
          .actions((e) => ({
            getData: (0, s.ls)(function* (t) {
              let { userId: a, page: i = 0, pageSize: l = 20, metaType: n } = t,
                { usersResource: r, modelActionsLogger: u } = (0, s.dU)(e);
              if (
                !(
                  (e.loadingState === o.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var d, c, g;
                  (e.loadingState = o.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield r.getLikedAlbums({
                      userId: a,
                      page: i,
                      pageSize: l,
                      metaType: n,
                    }),
                    u = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, s.pj)(
                      Array.from({ length: u.total }, () => null),
                    ));
                  let m =
                    null !==
                      (c =
                        null === (d = t.albums) || void 0 === d
                          ? void 0
                          : d.map((e) => {
                              let { album: t } = e;
                              return (0, y.ym)(t);
                            })) && void 0 !== c
                      ? c
                      : [];
                  (0, o.AG)({
                    items: e.items,
                    mappedRawItems: m,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = u),
                    (e.requestsCount =
                      (null !== (g = e.requestsCount) && void 0 !== g ? g : 0) +
                      1),
                    e.loadingState !== o.Gu.IDLE &&
                      (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  u.error(t), (e.loadingState = o.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = o.Gu.IDLE),
                (e.items = (0, s.pj)([])),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.requestsCount = 0);
            },
          }));
      var C = a(12090);
      let L = s.V5.model("CollectionPlaylistsCreatedPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          sort: s.V5.maybeNull(h.$4),
          items: s.V5.array(s.V5.maybeNull(C.Cd)),
          pager: s.V5.maybeNull(h.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          kinds: s.V5.array(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => {
            let t = {
              getKinds: (0, s.ls)(function* (t) {
                let a = [],
                  { usersResource: i } = (0, s.dU)(e);
                (a = yield i.getPlaylistsKinds({ userId: t })),
                  (e.kinds = (0, s.pj)(a));
              }),
              getData: (0, s.ls)(function* (a) {
                let {
                    userId: i,
                    page: l = 0,
                    pageSize: n = 20,
                    withLikesCount: r,
                  } = a,
                  { usersResource: u, modelActionsLogger: d } = (0, s.dU)(e);
                if (
                  !(
                    (e.loadingState === o.Gu.PENDING &&
                      e.pendingPages.has("".concat(l))) ||
                    e.alreadyRequestedPages.has("".concat(l))
                  )
                ) {
                  "number" == typeof l &&
                    e.alreadyRequestedPages.set("".concat(l), l);
                  try {
                    var c;
                    e.isLoaded || (e.loadingState = o.Gu.PENDING),
                      e.pendingPages.set("".concat(l), l),
                      0 === e.kinds.length && (yield t.getKinds(i));
                    let a = l * n,
                      d = e.kinds.slice(a, a + n),
                      g = yield u.getPlaylistsByKinds({
                        userId: i,
                        kinds: d,
                        withLikesCount: r,
                        withTracks: !1,
                      });
                    e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1;
                    let m = { page: l, perPage: n, total: e.kinds.length };
                    0 === e.items.length &&
                      (e.items = (0, s.pj)(
                        Array.from({ length: m.total }, () => null),
                      ));
                    let S = g.map(C.PV);
                    (0, o.AG)({
                      items: e.items,
                      mappedRawItems: S,
                      page: l,
                      pageSize: n,
                    }),
                      (e.pager = m),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    d.error(t), (e.loadingState = o.Gu.REJECT);
                  } finally {
                    e.pendingPages.delete("".concat(l));
                  }
                }
              }),
              reset() {
                (e.loadingState = o.Gu.IDLE),
                  (e.sort = null),
                  (e.items = (0, s.pj)([])),
                  (e.pager = null),
                  e.alreadyRequestedPages.clear(),
                  e.pendingPages.clear(),
                  (e.kinds = (0, s.pj)([])),
                  (e.requests = null);
              },
            };
            return t;
          }),
        P = s.V5.model("CollectionPlaylistsLikedPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          sort: s.V5.maybeNull(h.$4),
          items: s.V5.array(s.V5.maybeNull(C.Cd)),
          pager: s.V5.maybeNull(h.Vn),
          alreadyRequestedPages: s.V5.map(s.V5.number),
          pendingPages: s.V5.map(s.V5.number),
          requests: s.V5.maybeNull(s.V5.number),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isEmpty() {
              return this.isLoaded && (!e.pager || 0 === e.pager.total);
            },
          }))
          .actions((e) => ({
            getData: (0, s.ls)(function* (t) {
              let {
                userId: a,
                page: i = 0,
                pageSize: l = 20,
                sortBy: n,
                sortOrder: r,
                metaType: u,
                withTracks: d,
              } = t;
              if (
                (e.loadingState === o.Gu.PENDING &&
                  e.pendingPages.has("".concat(i))) ||
                e.alreadyRequestedPages.has("".concat(i))
              )
                return;
              "number" == typeof i &&
                e.alreadyRequestedPages.set("".concat(i), i);
              let { usersResource: c, modelActionsLogger: g } = (0, s.dU)(e);
              (e.sort = null), n && r && (e.sort = { sortBy: n, sortOrder: r });
              try {
                var m;
                (e.loadingState = o.Gu.PENDING),
                  e.pendingPages.set("".concat(i), i);
                let { likedPlaylists: t, pager: g } = yield c.getLikedPlaylists(
                  {
                    userId: a,
                    page: i,
                    pageSize: l,
                    sortBy: n,
                    sortOrder: r,
                    metaType: u,
                    withTracks: d,
                  },
                );
                (e.requests =
                  (null !== (m = e.requests) && void 0 !== m ? m : 0) + 1),
                  0 === e.items.length &&
                    (e.items = (0, s.pj)(
                      Array.from({ length: g.total }, () => null),
                    ));
                let S = t.map((e) => {
                  let { playlist: t } = e;
                  return (0, C.PV)(t);
                });
                (0, o.AG)({
                  items: e.items,
                  mappedRawItems: S,
                  page: i,
                  pageSize: l,
                }),
                  (e.pager = g),
                  (e.loadingState = o.Gu.RESOLVE);
              } catch (t) {
                g.error(t),
                  "number" == typeof i &&
                    e.alreadyRequestedPages.delete("".concat(i)),
                  (e.requests =
                    "number" == typeof e.requests ? e.requests - 1 : 0),
                  (e.loadingState = o.Gu.REJECT);
              } finally {
                e.pendingPages.delete("".concat(i));
              }
            }),
            reset() {
              (e.loadingState = o.Gu.IDLE),
                (e.sort = null),
                (e.items = (0, s.pj)([])),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.requests = null);
            },
          }));
      var f = a(10542),
        V = a(48892);
      let _ = (e) => (0, s.pj)({ type: e.type, track: (0, V.Vt)(e.track) });
      var I = a(31579);
      let D = (e) =>
          (0, s.pj)({
            type: e.type,
            album: e.album && (0, y.ym)(e.album),
            playlist: e.playlist && (0, I.Q9)(e.playlist),
            track: (0, V.Vt)(e.track),
          }),
        T = s.V5.model("ShelfLikedItem", { type: s.V5.string, track: V.le }),
        A = s.V5.model("ShelfRecentlyPlayedItem", {
          type: s.V5.string,
          album: s.V5.maybe(y.ug),
          playlist: s.V5.maybe(I.d2),
          track: V.le,
        }),
        R = s.V5.model("CollectionShelfLiked", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          title: s.V5.maybeNull(s.V5.string),
          typeForFrom: s.V5.maybeNull(s.V5.string),
          entities: s.V5.maybeNull(s.V5.array(T)),
          pager: s.V5.maybeNull(h.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isResolved() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isEmpty() {
              var t;
              return (
                this.isResolved &&
                (null === (t = e.entities) || void 0 === t
                  ? void 0
                  : t.length) === 0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, s.ls)(function* () {
              let { nonMusicResource: t, logger: a } = (0, s.dU)(e);
              if (e.loadingState !== o.Gu.PENDING)
                try {
                  var i, l;
                  e.loadingState = o.Gu.PENDING;
                  let a = yield t.getShelfLiked();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (l = a.pager) && void 0 !== l ? l : null),
                    (e.entities = (0, s.pj)(
                      a.entities ? a.entities.map(_) : [],
                    )),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof f.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    a.error(t),
                    (e.loadingState = o.Gu.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = o.Gu.IDLE);
            },
          })),
        x = s.V5.model("CollectionShelfRecentlyPlayed", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          title: s.V5.maybeNull(s.V5.string),
          typeForFrom: s.V5.maybeNull(s.V5.string),
          entities: s.V5.maybeNull(s.V5.array(A)),
          pager: s.V5.maybeNull(h.Vn),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isResolved() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isEmpty() {
              return !!(
                this.isResolved &&
                e.entities &&
                0 === e.entities.length
              );
            },
          }))
          .actions((e) => ({
            getData: (0, s.ls)(function* () {
              let { nonMusicResource: t, logger: a } = (0, s.dU)(e);
              if (e.loadingState !== o.Gu.PENDING)
                try {
                  var i, l;
                  e.loadingState = o.Gu.PENDING;
                  let a = yield t.getShelfRecentlyPlayed();
                  (e.title = a.title),
                    (e.typeForFrom =
                      null !== (i = a.typeForFrom) && void 0 !== i ? i : null),
                    (e.pager =
                      null !== (l = a.pager) && void 0 !== l ? l : null),
                    (e.entities = (0, s.pj)(a.entities.map(D))),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  !(t instanceof f.eY) &&
                    (t instanceof Error || "string" == typeof t) &&
                    a.error(t),
                    (e.loadingState = o.Gu.REJECT);
                }
            }),
            reset() {
              (e.entities = null),
                (e.title = null),
                (e.typeForFrom = null),
                (e.pager = null),
                (e.loadingState = o.Gu.IDLE);
            },
          })),
        k = s.V5.model("CollectionShelfPage", { recentlyPlayed: x, liked: R })
          .views((e) => ({
            get isLoading() {
              return e.recentlyPlayed.isLoading && e.liked.isLoading;
            },
            get isRejected() {
              return e.recentlyPlayed.isRejected && e.liked.isRejected;
            },
            get isResolved() {
              return e.recentlyPlayed.isResolved && e.liked.isResolved;
            },
            get isIdle() {
              return (
                e.recentlyPlayed.loadingState === o.Gu.IDLE &&
                e.liked.loadingState === o.Gu.IDLE
              );
            },
            get hasRecentlyPlayed() {
              var t;
              return (
                e.recentlyPlayed.isLoading ||
                ((null === (t = e.recentlyPlayed.entities) || void 0 === t
                  ? void 0
                  : t.length) || 0) > 0
              );
            },
            get hasLiked() {
              var a;
              return (
                e.liked.isLoading ||
                ((null === (a = e.liked.entities) || void 0 === a
                  ? void 0
                  : a.length) || 0) > 0
              );
            },
          }))
          .actions((e) => ({
            reset() {
              e.recentlyPlayed.reset(), e.liked.reset();
            },
          })),
        j = s.V5.model("CollectionDislikesPageArtists", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          items: s.V5.maybeNull(s.V5.array(N.Go)),
        })
          .views((e) => ({
            get isIdle() {
              return e.loadingState === o.Gu.IDLE;
            },
            get isPending() {
              return e.loadingState === o.Gu.PENDING;
            },
            get isResolved() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isLoading() {
              return this.isPending || this.isIdle;
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                !this.isLoading &&
                (null === (t = e.items) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
          }))
          .actions((e) => ({
            getData: (0, s.ls)(function* () {
              let { usersResource: t, modelActionsLogger: a } = (0, s.dU)(e);
              if (!(0, s.fh)(e)) return null;
              let { user: i } = (0, s.yj)(e);
              if (e.loadingState === o.Gu.PENDING) return null;
              if (((e.loadingState = o.Gu.PENDING), i.account.uid))
                try {
                  let a = yield t.getDislikedArtists({ userId: i.account.uid });
                  return (
                    (e.items = (0, s.pj)((a || []).map(N.d))),
                    e.loadingState !== o.Gu.IDLE &&
                      (e.loadingState = o.Gu.RESOLVE),
                    a
                  );
                } catch (t) {
                  a.error(t),
                    e.loadingState !== o.Gu.IDLE &&
                      (e.loadingState = o.Gu.REJECT);
                }
              return (e.loadingState = o.Gu.REJECT), null;
            }),
            reset() {
              (e.loadingState = o.Gu.IDLE), (e.items = null);
            },
          }));
      var O = a(75191);
      let U = (e, t) =>
          t.map((t) => {
            let a = e[t];
            return String(null == a ? void 0 : a.id);
          }),
        B = (e, t, a) => {
          let i = [];
          for (let n = t; n <= a; n++) {
            var l, s;
            ((null === (l = e[n]) || void 0 === l ? void 0 : l.loadingState) ===
              o.Gu.IDLE ||
              (null === (s = e[n]) || void 0 === s
                ? void 0
                : s.loadingState) === o.Gu.REJECT) &&
              i.push(n);
          }
          return i;
        },
        w = s.V5.model("CollectionDislikesPageTracksItem", {
          id: s.V5.string,
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          data: s.V5.maybeNull(V.le),
        }),
        F = s.V5.model("CollectionDislikesPageTracks", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          items: s.V5.maybeNull(s.V5.array(w)),
        })
          .views((e) => ({
            get isIdle() {
              return e.loadingState === o.Gu.IDLE;
            },
            get isPending() {
              return e.loadingState === o.Gu.PENDING;
            },
            get isResolved() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isLoading() {
              return this.isPending || this.isIdle;
            },
            get isEmpty() {
              var t;
              return (
                !this.isLoading &&
                (null === (t = e.items) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get sonataEntitiesData() {
              var a, i;
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.map((e) => (0, O.RN)(e.id))) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => ({
            getData: (0, s.ls)(function* () {
              let { modelActionsLogger: t } = (0, s.dU)(e);
              if (e.loadingState === o.Gu.PENDING) return;
              if (((e.loadingState = o.Gu.PENDING), !(0, s.fh)(e))) {
                e.loadingState = o.Gu.REJECT;
                return;
              }
              let { library: a, user: i } = (0, s.yj)(e);
              try {
                if (
                  i.isAuthorized &&
                  (yield a.getData(), a.loadingState === o.Gu.RESOLVE)
                ) {
                  e.loadingState = o.Gu.RESOLVE;
                  let t = [...a.tracks.keys()]
                    .filter((e) => a.isTrackDisliked(e))
                    .map((e) => ({ id: e, loadingState: o.Gu.IDLE }));
                  e.items = (0, s.pj)(t);
                  return;
                }
              } catch (a) {
                t.error(a),
                  e.loadingState !== o.Gu.IDLE &&
                    (e.loadingState = o.Gu.REJECT);
              }
              e.loadingState = o.Gu.REJECT;
            }),
            getTracksByRange: (0, s.ls)(function* (t, a) {
              var i;
              let { tracksResource: l, modelActionsLogger: n } = (0, s.dU)(e);
              if (!(null === (i = e.items) || void 0 === i ? void 0 : i.length))
                return null;
              (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
              let r = B(e.items, t, a);
              try {
                let t = U(e.items, r);
                if (!t.length) return null;
                r.forEach((t) => {
                  var a;
                  let i =
                    null === (a = e.items) || void 0 === a ? void 0 : a[t];
                  i && (i.loadingState = o.Gu.PENDING);
                });
                let a = yield l.getTracksMeta({
                  trackIds: t,
                  withProgress: !0,
                });
                r.forEach((t, i) => {
                  var l;
                  let s = null == a ? void 0 : a[i];
                  (null === (l = e.items) || void 0 === l ? void 0 : l[t]) &&
                    s &&
                    (e.items[t] = {
                      id: String(s.id),
                      data: (0, V.Vt)(s),
                      loadingState: o.Gu.RESOLVE,
                    });
                });
              } catch (t) {
                n.error(t),
                  r.forEach((t) => {
                    var a;
                    let i =
                      null === (a = e.items) || void 0 === a ? void 0 : a[t];
                    i && (i.loadingState = o.Gu.REJECT);
                  });
              }
              return null;
            }),
            reset() {
              (e.loadingState = o.Gu.IDLE), (e.items = null);
            },
          })),
        M = s.V5.model("CollectionDislikesPage", { artists: j, tracks: F })
          .views((e) => ({
            get isIdle() {
              return e.tracks.isIdle && e.artists.isIdle;
            },
            get isLoading() {
              return e.tracks.isLoading && e.artists.isLoading;
            },
            get isResolved() {
              return e.tracks.isResolved && e.artists.isResolved;
            },
          }))
          .actions((e) => ({
            reset() {
              e.artists.reset(), e.tracks.reset();
            },
          })),
        q = s.V5.model("CollectionPage", {
          landing: E.d5,
          albums: G,
          playlistsLiked: P,
          playlistsCreated: L,
          artists: b,
          shelf: k,
          nonMusicLiked: v,
          dislikes: M,
        });
      a(27539),
        a(54267),
        a(25906),
        a(47139),
        a(74680),
        a(35141),
        a(55742),
        a(70640),
        a(69069),
        a(20297),
        a(50971),
        a(36832),
        a(34590);
      var J = a(95946),
        W = a(72636);
      a(58101);
      let z = s.V5.model("MainPage", { landing: E.d5 });
      a(38525);
      var H = a(69869),
        Z = a(61134),
        Y = a(40029);
      let K = (e) =>
          e.reduce((e, t) => {
            let a = "".concat(t.type, "_").concat(t.id);
            if (a in e) {
              var i;
              null === (i = e[a]) || void 0 === i || i.push(t);
            } else e[a] = [t];
            return e;
          }, {}),
        Q = (e) => {
          switch (e.type) {
            case H.EW.ALBUM:
              return "".concat(e.type, "_").concat((0, Z.un)(e));
            case H.EW.TRACK:
              return "".concat(e.type, "_").concat((0, Z.LV)(e));
            case H.EW.WAVE:
              return "".concat(e.type, "_").concat((0, Z.R3)(e));
            case H.EW.PLAYLIST:
              return "".concat(e.type, "_").concat((0, Z.aQ)(e));
            case H.EW.ARTIST:
              return "".concat(e.type, "_").concat((0, Z.H5)(e));
          }
        },
        X = (e) => {
          let t = { historyTabs: [] },
            a = 0;
          for (let s of e.historyTabs) {
            var i, l;
            if (a > 1e3) break;
            let e = { ...s, items: [] };
            for (let t of null !== (i = s.items) && void 0 !== i ? i : []) {
              if (a > 1e3) break;
              let i = { ...t, tracks: [] };
              for (let e of t.tracks) {
                if (a > 1e3) break;
                i.tracks.push(e), ++a;
              }
              null === (l = e.items) || void 0 === l || l.push(i);
            }
            e.items && e.items.length > 0 && t.historyTabs.push(e);
          }
          return t;
        },
        $ = (e) =>
          e
            .map((e) => {
              switch (e.type) {
                case H.EW.ARTIST:
                case H.EW.ALBUM:
                  return { type: e.type, data: { itemId: { id: e.id } } };
                case H.EW.PLAYLIST: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { uid: Number(t), kind: Number(a) } },
                  };
                }
                case H.EW.WAVE:
                  return {
                    type: e.type,
                    data: { itemId: { seeds: e.id.split(",") } },
                  };
                case H.EW.TRACK: {
                  let [t, a] = e.id.split(":");
                  return {
                    type: e.type,
                    data: { itemId: { trackId: String(t), albumId: a } },
                  };
                }
                default:
                  return null;
              }
            })
            .filter((e) => e),
        ee = s.V5.model("MusicHistoryPage", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          indexesMap: s.V5.map(s.V5.number),
          items: s.V5.maybeNull(s.V5.array(Z.Mf)),
          datesMap: s.V5.map(s.V5.boolean),
          tabs: s.V5.maybeNull(s.V5.array(Z.t9)),
        })
          .views((e) => ({
            get isNeededToLoad() {
              return e.loadingState === o.Gu.IDLE;
            },
            get isLoading() {
              return e.loadingState === o.Gu.PENDING;
            },
            get isLoaded() {
              return e.loadingState === o.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === o.Gu.REJECT;
            },
            get isEmpty() {
              var t;
              return (
                (this.isLoaded || this.isRejected) &&
                (null === (t = e.tabs) || void 0 === t ? void 0 : t.length) ===
                  0
              );
            },
            get isShimmerVisible() {
              return this.isNeededToLoad || this.isLoading || this.isRejected;
            },
            get isShimmerActive() {
              return this.isLoading;
            },
            getStartAndEndIndexes(t) {
              var a, i;
              let l = t,
                s = t + 1;
              return (
                (null === (a = e.items) || void 0 === a
                  ? void 0
                  : a.slice(t - 25 + 1, t).some((e) => !e.isLoaded)) &&
                  (l = t - 25 + 1),
                (null === (i = e.items) || void 0 === i
                  ? void 0
                  : i.slice(t, t + 25).some((e) => !e.isLoaded)) &&
                  (s = t + 25),
                [l, s]
              );
            },
            getItemsToLoad(t) {
              var a, i;
              let [l, s] = this.getStartAndEndIndexes(t);
              return null !==
                (i =
                  null === (a = e.items) || void 0 === a
                    ? void 0
                    : a.slice(l, s).filter((e) => !e.isLoaded)) && void 0 !== i
                ? i
                : [];
            },
            isInObservationRange(t) {
              var a;
              return (
                (0 !== t && t % 25 == 0) ||
                (e.items &&
                  t ===
                    (null === (a = e.items) || void 0 === a
                      ? void 0
                      : a.length) -
                      1)
              );
            },
            get dates() {
              var a, i;
              return null !==
                (i =
                  null === (a = e.tabs) || void 0 === a
                    ? void 0
                    : a.map((e) => e.date)) && void 0 !== i
                ? i
                : [];
            },
          }))
          .actions((e) => {
            let t = {
              fillItemsAndIndexes() {
                var t;
                let a = 0;
                (e.items = (0, s.pj)([])),
                  null === (t = e.tabs) ||
                    void 0 === t ||
                    t.forEach((t, i) => {
                      var l;
                      e.datesMap.set(t.date, !1),
                        null === (l = t.blocks) ||
                          void 0 === l ||
                          l.forEach((t, l) => {
                            var s;
                            let n = t.id;
                            e.indexesMap.set(
                              "".concat(i, "_").concat(l, "_").concat(n),
                              a,
                            ),
                              null === (s = e.items) ||
                                void 0 === s ||
                                s.push({
                                  id: n,
                                  type: t.type,
                                  tabIndex: i,
                                  blockIndex: l,
                                  trackIndex: null,
                                  loadingState:
                                    a < 25 ? o.Gu.RESOLVE : o.Gu.IDLE,
                                }),
                              ++a,
                              t.tracks.forEach((t, s) => {
                                var n;
                                e.indexesMap.set(
                                  ""
                                    .concat(i, "_")
                                    .concat(l, "_")
                                    .concat(s, "_")
                                    .concat(t.id),
                                  a,
                                ),
                                  null === (n = e.items) ||
                                    void 0 === n ||
                                    n.push({
                                      id: t.id,
                                      type: t.type,
                                      tabIndex: i,
                                      blockIndex: l,
                                      trackIndex: s,
                                      loadingState:
                                        a < 25 ? o.Gu.RESOLVE : o.Gu.IDLE,
                                    }),
                                  ++a;
                              });
                          });
                    });
              },
              setTrack(t, a) {
                var i, l, s, n;
                let { tabIndex: r, blockIndex: u, trackIndex: d } = t,
                  { fullModel: c } = a.data;
                if (null === d) return;
                let g =
                  null === (n = e.tabs) || void 0 === n
                    ? void 0
                    : null === (s = n[r]) || void 0 === s
                      ? void 0
                      : null === (l = s.blocks) || void 0 === l
                        ? void 0
                        : null === (i = l[u]) || void 0 === i
                          ? void 0
                          : i.tracks[d];
                g && ((g.data = (0, V.Vt)(c)), (g.loadingState = o.Gu.RESOLVE));
              },
              setAlbum(t, a) {
                var i, l, s;
                let { tabIndex: n, blockIndex: r } = t,
                  { fullModel: u } = a.data,
                  d =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (l = s[n]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, Z.Ql)(d) &&
                  ((d.meta = (0, y.cO)({ album: u.album, artists: u.artists })),
                  (d.loadingState = o.Gu.RESOLVE));
              },
              setArtist(t, a) {
                var i, l, s;
                let { tabIndex: n, blockIndex: r } = t,
                  { fullModel: u } = a.data,
                  d =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (l = s[n]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, Z.DF)(d) &&
                  ((d.meta = (0, N.tR)(u.artist)),
                  (d.loadingState = o.Gu.RESOLVE));
              },
              setPlaylist(t, a) {
                var i, l, s;
                let { tabIndex: n, blockIndex: r } = t,
                  { fullModel: u } = a.data,
                  d =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (l = s[n]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, Z.v3)(d) &&
                  ((d.meta = {
                    ...(0, I.RE)({ playlist: u.playlist }),
                    tracksCount: u.tracksCount,
                  }),
                  (d.loadingState = o.Gu.RESOLVE));
              },
              setVibe(t, a) {
                var i, l, s;
                let { tabIndex: n, blockIndex: r } = t,
                  { fullModel: u } = a.data,
                  d =
                    null === (s = e.tabs) || void 0 === s
                      ? void 0
                      : null === (l = s[n]) || void 0 === l
                        ? void 0
                        : null === (i = l.blocks) || void 0 === i
                          ? void 0
                          : i[r];
                (0, Z.eE)(d) &&
                  ((d.meta = {
                    ...(0, Y.FF)(u.wave),
                    imageUrl: u.simpleWaveForegroundImageUrl,
                    backgroundColor: u.simpleWaveBackgroundColor,
                  }),
                  (d.loadingState = o.Gu.RESOLVE));
              },
              getMusicHistory: (0, s.ls)(function* () {
                let { musicHistoryResource: a, modelActionsLogger: i } = (0,
                s.dU)(e);
                if (e.loadingState !== o.Gu.PENDING)
                  try {
                    e.loadingState = o.Gu.PENDING;
                    let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                      l = X(i);
                    (e.tabs = (0, s.pj)(l.historyTabs.map(Z.OE))),
                      t.fillItemsAndIndexes(),
                      (e.loadingState = o.Gu.RESOLVE);
                  } catch (t) {
                    i.error(t), (e.loadingState = o.Gu.REJECT);
                  }
              }),
              getItems: (0, s.ls)(function* (a) {
                let { musicHistoryResource: i, modelActionsLogger: l } = (0,
                s.dU)(e);
                try {
                  let l = e.getItemsToLoad(a);
                  l.forEach((e) => {
                    e.loadingState = o.Gu.RESOLVE;
                  });
                  let s = yield i.getMusicHistoryItems({ items: $(l) }),
                    n = K(l);
                  s.items.forEach((e) => {
                    var a;
                    let i = Q(e);
                    null === (a = n[i]) ||
                      void 0 === a ||
                      a.forEach((a) => {
                        switch (e.type) {
                          case H.EW.ALBUM:
                            t.setAlbum(a, e);
                            break;
                          case H.EW.TRACK:
                            t.setTrack(a, e);
                            break;
                          case H.EW.WAVE:
                            t.setVibe(a, e);
                            break;
                          case H.EW.PLAYLIST:
                            t.setPlaylist(a, e);
                            break;
                          case H.EW.ARTIST:
                            t.setArtist(a, e);
                        }
                        a.loadingState = o.Gu.RESOLVE;
                      });
                  });
                } catch (e) {
                  l.error(e);
                }
              }),
              setDatesMap(t, a) {
                e.datesMap.set(t, a);
              },
              reset() {
                (e.items = null),
                  (e.tabs = null),
                  e.indexesMap.clear(),
                  e.datesMap.clear(),
                  (e.loadingState = o.Gu.IDLE);
              },
            };
            return t;
          });
      a(23948), a(55549);
      let et = s.V5.model("NonMusicPage", { landing: E.d5 });
      a(34790);
      var ea = a(61533),
        ei = a(23976);
      a(46044);
      var el = a(21901),
        es = a(23194);
      let en = [
          H.Sc.ARTIST,
          H.Sc.ALBUM,
          H.Sc.TRACK,
          H.Sc.PLAYLIST,
          H.Sc.WAVE,
          H.Sc.PODCAST,
          H.Sc.PODCAST_EPISODE,
        ],
        er = (e, t) => {
          let a = [...en];
          return (
            (0, o.Z7)(e) ||
              t.checkExperiment(o.pe.WebNextPodcastSearch, "on") ||
              (a = a.filter(
                (e) => ![H.Sc.PODCAST, H.Sc.PODCAST_EPISODE].includes(e),
              )),
            a
          );
        },
        eo = [
          H.Sc.ALBUM,
          H.Sc.ARTIST,
          H.Sc.PLAYLIST,
          H.Sc.TRACK,
          H.Sc.UGC_TRACK,
          H.Sc.WAVE,
          H.Sc.PODCAST,
          H.Sc.PODCAST_EPISODE,
        ],
        eu = (e, t, a) => {
          let i = [...eo];
          return (
            e === H.ay.TOP && (i = i.filter((e) => e !== H.Sc.UGC_TRACK)),
            (0, o.Z7)(t) ||
              a.checkExperiment(o.pe.WebNextPodcastSearch, "on") ||
              (i = i.filter(
                (e) => ![H.Sc.PODCAST, H.Sc.PODCAST_EPISODE].includes(e),
              )),
            i
          );
        },
        ed = (e) => {
          let { wave: t } = e,
            a = "".concat(t.id.type, ":").concat(t.id.tag);
          return (0, s.pj)({
            title: t.title,
            subtitle: t.subTitle,
            stationId: a,
            seeds: [a],
            backgroundColor: t.color,
            imageUrl: t.image,
          });
        },
        ec = (e) => {
          let { type: t } = e;
          switch (t) {
            case H.Sc.UGC_TRACK:
              return { type: t, data: (0, V.Z2)(e.track) };
            case H.Sc.TRACK:
              return { type: t, data: (0, V.Vt)(e.track) };
            case H.Sc.ARTIST:
              return { type: t, data: (0, N.d)(e.artist) };
            case H.Sc.PLAYLIST:
              return {
                type: t,
                data: (0, I.VB)({ ...e.playlist, artists: [] }),
              };
            case H.Sc.ALBUM:
              return { type: t, data: (0, y.ym)(e.album) };
            case H.Sc.WAVE:
              return { type: t, data: ed(e) };
            case H.Sc.PODCAST:
              return { type: t, data: (0, y.ym)(e.podcast) };
            case H.Sc.PODCAST_EPISODE:
              return { type: t, data: (0, V.Vt)(e.podcast_episode) };
            default:
              return null;
          }
        },
        eg = (e) =>
          e.map((e) => {
            switch (e.type) {
              case H.Sc.ALBUM:
                return { type: H.Sc.ALBUM, data: (0, y.ym)(e.album) };
              case H.Sc.ARTIST:
                return { type: H.Sc.ARTIST, data: (0, N.d)(e.artist) };
              case H.Sc.PLAYLIST:
                return {
                  type: H.Sc.PLAYLIST,
                  data: (0, I.VB)({ ...e.playlist, artists: [] }),
                };
              case H.Sc.UGC_TRACK:
                return { type: H.Sc.UGC_TRACK, data: (0, V.Z2)(e.track) };
              case H.Sc.TRACK:
                return { type: H.Sc.TRACK, data: (0, V.Vt)(e.track) };
              case H.Sc.WAVE:
                return { type: H.Sc.WAVE, data: ed(e) };
              case H.Sc.PODCAST:
                return { type: H.Sc.PODCAST, data: (0, y.ym)(e.podcast) };
              case H.Sc.PODCAST_EPISODE:
                return {
                  type: H.Sc.PODCAST_EPISODE,
                  data: (0, V.Vt)(e.podcast_episode),
                };
            }
          }),
        em = s.V5.model("SearchHistoryPage", {
          items: s.V5.array(es.Iv),
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
        }),
        eS = s.V5.model("SearchPage", {
          searchCorrectedText: s.V5.maybeNull(s.V5.string),
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          searchRequestId: s.V5.optional(s.V5.string, ""),
          results: s.V5.array(es.Iv),
          history: em,
          mixes: el.ZP,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === o.Gu.IDLE || e.loadingState === o.Gu.PENDING
              );
            },
            get isEmpty() {
              return (
                (e.loadingState === o.Gu.RESOLVE ||
                  e.loadingState === o.Gu.REJECT) &&
                0 === e.results.length
              );
            },
            get isHistoryLoading() {
              return (
                e.history.loadingState === o.Gu.IDLE ||
                e.history.loadingState === o.Gu.PENDING
              );
            },
            get isHistoryReady() {
              return e.history.loadingState === o.Gu.IDLE;
            },
            get isEmptyHistory() {
              return (
                !e.history.items.length &&
                e.history.loadingState === o.Gu.RESOLVE
              );
            },
          }))
          .actions((e) => ({
            getSearchResults: (0, s.ls)(function* (t) {
              let { text: a, filter: i, config: l, experiments: n } = t,
                { searchResource: r } = (0, s.dU)(e);
              try {
                e.loadingState = o.Gu.PENDING;
                let t = yield r.getInstantMixedSearch({
                  text: a,
                  type: eu(i, l, n),
                  filter: i === H.ay.TOP ? void 0 : i,
                  withLikesCount: !0,
                  page: 0,
                  pageSize: 36,
                });
                t.misspellResult && (e.searchCorrectedText = t.misspellResult),
                  t.results &&
                    t.results.length > 0 &&
                    ((e.results = (0, s.pj)(eg(t.results).filter((e) => e))),
                    (e.searchRequestId = t.searchRequestId)),
                  (e.loadingState = o.Gu.RESOLVE);
              } catch (t) {
                e.loadingState = o.Gu.REJECT;
              }
            }),
            getHistory: (0, s.ls)(function* (t) {
              let { userId: a, config: i, experiments: l } = t;
              if (e.history.loadingState === o.Gu.PENDING) return;
              let { usersResource: n } = (0, s.dU)(e);
              try {
                e.history.loadingState = o.Gu.PENDING;
                let t = yield n.getSearchHistory({
                  userId: a,
                  supportedTypes: er(i, l),
                });
                (e.history.items = (0, s.pj)(t.map(ec).filter((e) => e))),
                  (e.history.loadingState = o.Gu.RESOLVE);
              } catch (t) {
                console.error(t), (e.history.loadingState = o.Gu.REJECT);
              }
            }),
            clearHistory: (0, s.ls)(function* (t) {
              let { userId: a } = t,
                { usersResource: i } = (0, s.dU)(e);
              if (e.loadingState !== o.Gu.PENDING)
                try {
                  (e.loadingState = o.Gu.PENDING),
                    yield i.clearSearchHistory({ userId: a }),
                    (e.loadingState = o.Gu.RESOLVE);
                } catch (t) {
                  console.error(t), (e.loadingState = o.Gu.REJECT);
                }
            }),
            resetHistoryItems() {
              e.history.items = (0, s.pj)([]);
            },
            resetHistoryStateRequest() {
              (e.history.loadingState = o.Gu.IDLE),
                (e.history.items = (0, s.pj)([]));
            },
            resetResults() {
              e.results = (0, s.pj)([]);
            },
            resetSearchCorrectedText() {
              e.searchCorrectedText = null;
            },
            reset() {
              (e.searchCorrectedText = null),
                (e.loadingState = o.Gu.IDLE),
                (e.results = (0, s.pj)([]));
            },
            sendFeedback: (0, s.ls)(function* (t) {
              let { searchResource: a, modelActionsLogger: i } = (0, s.dU)(e);
              try {
                yield a.sendFeedback(t);
              } catch (e) {
                i.error(e);
              }
            }),
          }));
      a(17777);
      var ep = a(20070),
        eE = a(56570);
      let ey = (e) => {
          let t = [];
          return (
            e.triggers.forEach((e) => {
              if (e.meta.notificationId === H.Mx.BAR_BELLOW) {
                let a = (0, eE.MC)(e);
                t.push(a);
              }
            }),
            (0, s.pj)({ barBellow: { list: t } })
          );
        },
        eh = s.V5.model("CommunicationList", { barBellow: eE.ag }),
        eG = s.V5.model("Communication", {
          loadingState: s.V5.enumeration(Object.values(o.Gu)),
          list: s.V5.maybe(eh),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
        }).actions((e) => {
          let t = {
            getData: (0, s.ls)(function* () {
              let { dynamicPagesResource: a, logger: i } = (0, s.dU)(e);
              if (
                e.loadingState !== o.Gu.PENDING &&
                e.loadingState !== o.Gu.RESOLVE
              )
                try {
                  e.loadingState = o.Gu.PENDING;
                  let i = yield a.getTriggers({
                    anchorIds: Object.values(H.o1),
                  });
                  if (
                    ((e.list = ey(i)),
                    e.loadingState !== o.Gu.IDLE &&
                      (e.loadingState = o.Gu.RESOLVE),
                    !e.list)
                  )
                    return;
                  let { barBellow: l } = e.list;
                  l.setAnchorId(H.o1.ON_START_BAR_BELLOW),
                    l.barBellowItem &&
                      (l.show(),
                      t.shown(
                        l.barBellowItem.anchorId,
                        l.barBellowItem.screenId,
                      ));
                } catch (t) {
                  ("string" == typeof t || t instanceof Error) && i.error(t),
                    t instanceof f.du &&
                      (t.statusCode === f.CN.NOT_FOUND ||
                        t.statusCode === f.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = f.CN.NOT_FOUND),
                    e.loadingState !== o.Gu.IDLE &&
                      (e.loadingState = o.Gu.REJECT);
                }
            }),
            shown: (0, s.ls)(function* (t, a) {
              let { dynamicPagesResource: i, logger: l } = (0, s.dU)(e);
              try {
                yield i.shown({ anchorIds: [t], screenId: a });
              } catch (e) {
                ("string" == typeof e || e instanceof Error) && l.error(e);
              }
            }),
            action: (0, s.ls)(function* (t, a, i) {
              let { dynamicPagesResource: l, logger: n } = (0, s.dU)(e);
              try {
                yield l.action({ anchorIds: [t], screenId: a, actionId: i });
              } catch (e) {
                ("string" == typeof e || e instanceof Error) && n.error(e);
              }
            }),
          };
          return t;
        });
      var eN = a(51952),
        eb = a(5222),
        ev = a(94112),
        eC = a(92324),
        eL = a(25672),
        eP = a(20121),
        ef = a(61602),
        eV = a(2959);
      let e_ = s.V5.model("Root", {
          experiments: h.i_,
          user: eV.T_,
          collection: q,
          main: z,
          settings: h.ao,
          currentTrackInfo: V.Jx,
          album: m.Lf,
          artist: S.Od,
          library: h.f8,
          sonataState: O.ps,
          playlist: ea.nb,
          slides: ef.iV,
          vibe: eC.a,
          search: eS,
          vibeSettings: eL.Ux,
          pinsCollection: eN.Lc,
          genre: J.Kx,
          genres: W.EU,
          mixes: el.ZP,
          tag: ep.tS,
          chart: p._,
          post: ei.vU,
          landingBlockEntities: E.oT,
          contextMenuPlaylists: L,
          musicHistory: ee,
          createPlaylist: C.b_,
          location: h.CU,
          nonMusic: et,
          disclaimer: eP.nU,
          communication: eG,
          trailer: ev.L,
          modals: h.dC,
          landing: E.d5,
          fullscreenPlayer: eb.Oe,
        }),
        eI = (e, t) => e_.create(e, t);
      var eD = a(26965);
      let eT = ["settings", "sonataState"],
        eA = (e, t) => eT.reduce((t, a) => ((t[a] = e[a]), t), (0, eD.Z)(t));
      (0, l.DT)(!1);
      let eR = (e) => {
        let { children: t, nonce: a } = e;
        (0, r.useRef)([]), (0, r.useContext)(n.ServerInsertedHTMLContext);
        let l = (0, o.YS)(),
          u = (0, o.wL)(),
          d = (0, o.dE)(),
          [c] = (0, r.useState)(() => {
            var e;
            let t = { ...l, logger: u, modelActionsLogger: d };
            return (
              null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                ? void 0
                : e.length
            )
              ? eI(
                  window.__STATE_SNAPSHOT__[
                    window.__STATE_SNAPSHOT__.length - 1
                  ],
                  t,
                )
              : eI(g, t);
          });
        return (
          (0, r.useLayoutEffect)(() => {
            function e() {
              var e;
              let t =
                null === (e = window.__STATE_SNAPSHOT__) || void 0 === e
                  ? void 0
                  : e[window.__STATE_SNAPSHOT__.length - 1];
              t && (0, s.Xx)(c, eA(c, t)), delete window.__STATE_SNAPSHOT__;
            }
            return (
              e(),
              window.addEventListener("yMusicStateSnapshotUpdated", e),
              () => window.removeEventListener("yMusicStateSnapshotUpdated", e)
            );
          }, [c]),
          (0, i.jsx)(o.xf.Provider, { value: c, children: t })
        );
      };
    },
    76154: function (e, t, a) {
      "use strict";
      a.d(t, {
        mH: function () {
          return n.Genre;
        },
        fm: function () {
          return s;
        },
        uG: function () {
          return r;
        },
      });
      var i = a(42288);
      let l = i.V5.model("GenreListItemSubGenreModel", {
          tag: i.V5.string,
          title: i.V5.string,
        }),
        s = i.V5.model("GenreListItemModel", {
          tag: i.V5.string,
          title: i.V5.string,
          subGenres: i.V5.array(l),
        });
      var n = a(86555);
      let r = (e) => ({
        tag: e.tag,
        title: e.title,
        subGenres: (0, i.pj)(
          (e.leaves || []).map((e) => ({ tag: e.tag, title: e.title })),
        ),
      });
    },
    86555: function (e, t, a) {
      "use strict";
      a.d(t, {
        Genre: function () {
          return u;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(2570),
        n = a(67868),
        r = a(78914),
        o = a.n(r);
      let u = (0, l.Pi)((e) => {
        let { tag: t, title: a, subGenres: l } = e;
        return (0, i.jsxs)("div", {
          className: o().root,
          children: [
            (0, i.jsx)(n.rU, {
              className: o().link,
              href: "/genre/".concat(t),
              children: (0, i.jsx)(s.Heading, {
                variant: "h2",
                size: "m",
                lineClamp: 1,
                className: o().linkTitle,
                children: a,
              }),
            }),
            l.length > 0 &&
              (0, i.jsx)("div", {
                className: o().list,
                children: l.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: o().item,
                      children: (0, i.jsx)(n.rU, {
                        className: o().link,
                        href: "/genre/".concat(e.tag),
                        children: (0, i.jsx)(s.Caption, {
                          variant: "span",
                          size: "l",
                          lineClamp: 1,
                          className: o().linkTitle,
                          children: e.title,
                        }),
                      }),
                    },
                    e.tag,
                  ),
                ),
              }),
          ],
        });
      });
    },
    31579: function (e, t, a) {
      "use strict";
      a.d(t, {
        vY: function () {
          return s.EmptyPlaylistBlock;
        },
        ZL: function () {
          return i.PlaylistCard;
        },
        Nn: function () {
          return p;
        },
        d2: function () {
          return u;
        },
        VD: function () {
          return l.PlaylistsCarousel;
        },
        RE: function () {
          return N;
        },
        Q9: function () {
          return h;
        },
        VB: function () {
          return G;
        },
      });
      var i = a(22003),
        l = a(18921),
        s = a(6030),
        n = a(42288),
        r = a(33589),
        o = a(12090);
      let u = o.Cd.props({ artists: n.V5.maybe(n.V5.array(r.Go)) });
      var d = a(63394),
        c = a(58421),
        g = a(69869);
      let m = n.V5.model("PlaylistOwner", {
          uid: n.V5.number,
          login: n.V5.string,
          name: n.V5.string,
          sex: n.V5.enumeration(Object.values(g.oF)),
          verified: n.V5.boolean,
        }),
        S = n.V5.model("PlaylistOwner", {
          userInfo: n.V5.maybeNull(m),
          caseForms: n.V5.maybeNull(c.S2),
        }),
        p = o.Cd.props({
          owner: n.V5.maybe(m),
          modified: n.V5.string,
          description: n.V5.maybe(n.V5.string),
          madeFor: n.V5.maybeNull(S),
        })
          .views((e) => ({
            get seeds() {
              var t;
              return [
                "playlist:"
                  .concat(
                    null === (t = e.owner) || void 0 === t ? void 0 : t.login,
                    "_",
                  )
                  .concat(e.kind),
              ];
            },
          }))
          .actions((e) => ({
            changeDescription: (0, n.ls)(function* (t) {
              if (!(0, n.fh)(e)) return d.SL.ERROR;
              if (e.description === t) return d.SL.OK;
              if (t.length > o.Zn) return d.SL.ERROR;
              let { usersResource: a, modelActionsLogger: i } = (0, n.dU)(e);
              if (e.canUserChange) {
                let l = e.description;
                e.description = t;
                try {
                  let i = yield a.changePlaylistDescription({
                    description: t,
                    userId: e.uid,
                    playlistKind: e.kind,
                  });
                  return (e.description = i.description), d.SL.OK;
                } catch (t) {
                  (e.description = l), i.error(t);
                }
              }
              return d.SL.ERROR;
            }),
            changePlaylistCover: (0, n.ls)(function* (t) {
              if (!(0, n.fh)(e)) return d.SL.ERROR;
              let { usersResource: a, modelActionsLogger: i } = (0, n.dU)(e);
              try {
                return (
                  yield a.uploadPlaylistCover({
                    userId: e.uid,
                    formData: t,
                    playlistKind: e.kind,
                  }),
                  d.SL.OK
                );
              } catch (e) {
                i.error(e);
              }
              return d.SL.ERROR;
            }),
          })),
        E = (e) => ({
          uid: e.uid,
          login: e.login,
          name: e.name,
          sex: e.sex,
          verified: e.verified,
        }),
        y = (e) =>
          (0, n.pj)({
            userInfo: e.userInfo ? E(e.userInfo) : null,
            caseForms: e.caseForms ? (0, d.GA)(e.caseForms) : null,
          }),
        h = (e) =>
          (0, n.pj)({
            ...(0, o.PV)(e),
            owner: e.owner ? E(e.owner) : void 0,
            description: e.description,
            modified: e.modified,
            madeFor: e.madeFor ? y(e.madeFor) : null,
          }),
        G = (e) => {
          var t, a;
          return (0, n.pj)({
            ...(0, o.PV)(e),
            artists:
              null !==
                (a =
                  null == e
                    ? void 0
                    : null === (t = e.artists) || void 0 === t
                      ? void 0
                      : t.map(r.d)) && void 0 !== a
                ? a
                : [],
          });
        },
        N = (e) => {
          var t, a;
          let { playlist: i, generatedPlaylistType: l, likesCount: s } = e;
          return (0, n.pj)({
            isAvailable: null === (a = i.available) || void 0 === a || a,
            uuid: i.playlistUuid,
            title: i.title,
            uid: i.uid,
            kind: i.kind,
            coverUri: null === (t = i.cover) || void 0 === t ? void 0 : t.uri,
            generatedPlaylistType: l,
            likesCount: s,
          });
        };
    },
    6030: function (e, t, a) {
      "use strict";
      a.d(t, {
        EmptyPlaylistBlock: function () {
          return c;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(98639),
        n = a(31014),
        r = a(28852),
        o = a(2570),
        u = a(98746),
        d = a.n(u);
      let c = (e) => {
        let { className: t, isEmptySearch: a } = e,
          u = (0, s.useMemo)(
            () =>
              a
                ? (0, i.jsx)(n.Z, { id: "search-results.not-found-title" })
                : (0, i.jsx)(n.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [a],
          ),
          c = (0, s.useMemo)(
            () =>
              a
                ? (0, i.jsx)(n.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, i.jsx)(n.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [a],
          );
        return (0, i.jsxs)("div", {
          className: (0, l.W)(d().root, t),
          children: [
            (0, i.jsx)("div", {
              className: d().iconBackground,
              children: (0, i.jsx)(r.J, {
                variant: "search",
                size: "l",
                className: d().icon,
              }),
            }),
            (0, i.jsx)(o.Heading, {
              variant: "h3",
              size: "xs",
              className: d().title,
              children: u,
            }),
            (0, i.jsx)(o.Caption, {
              variant: "span",
              size: "l",
              className: d().subtitle,
              children: c,
            }),
          ],
        });
      };
    },
    22003: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistCard: function () {
          return P;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(98639),
        r = a(80542),
        o = a(52122),
        u = a(23881),
        d = a(84338),
        c = a(39513),
        g = a(27491),
        m = a(28852),
        S = a(12404),
        p = a(2570),
        E = a(33589),
        y = a(12090),
        h = a(63394),
        G = a(67868);
      let N = (e) => {
        let { formatMessage: t } = (0, r.Z)();
        return (0, n.useMemo)(() => {
          let a = "";
          e.isLiked && !e.actualLikesCount
            ? (a = t({ id: "entity-names.has-your-like" }))
            : "number" == typeof e.actualLikesCount &&
              (a =
                e.actualLikesCount > 0
                  ? t(
                      { id: "entity-names.likes-counter" },
                      { counter: e.actualLikesCount },
                    )
                  : t({ id: "entity-names.likes-counter-empty" }));
          let i = t(
            { id: "entity-names.playlist-name" },
            { playlistName: e.title },
          );
          return "".concat(i, " ").concat(a);
        }, [t, e]);
      };
      var b = a(385);
      let v = (0, s.Pi)((e) => {
        let {
            playlist: t,
            reference: a,
            onOpenChange: l,
            open: s,
            returnFocus: r,
          } = e,
          { settings: o, experiments: u, trailer: d } = (0, h.oR)(),
          c = (0, y.SB)(t),
          g = (0, y.BV)(t),
          m = o.layout === h.t8.Mobile,
          S =
            u.checkExperiment(h.pe.WebNextEntityTrailer, "on") &&
            true &&
            t.hasTrailer;
        (0, h.ZP)(s);
        let p = (0, n.useCallback)(() => {
          d.openPlaylistTrailer(t.uid, t.kind);
        }, [t.kind, t.uid, d]);
        return (0, i.jsxs)(b.v2, {
          title: t.title,
          onOpenChange: l,
          open: s,
          offsetOptions: 10,
          reference: a,
          isMobile: m,
          returnFocus: r,
          children: [
            !m && (0, i.jsx)(G.Zd, { onClick: g, isPinned: t.isPinned }),
            !t.isFavouritePlaylist &&
              (0, i.jsx)(G.xZ, { onClick: c, isLiked: t.isLiked }),
            S && (0, i.jsx)(G.NB, { onClick: p }),
          ],
        });
      });
      var C = a(88308),
        L = a.n(C);
      let P = (0, s.Pi)((e) => {
        let {
            className: t,
            playlist: a,
            children: s,
            contentLinesCount: b,
            customDescription: C,
          } = e,
          { ref: P, intersectionPropertyId: f } = (0, h.Vf)(),
          V = (0, h.x5)(),
          { formatMessage: _ } = (0, r.Z)(),
          {
            sendLikeSearchFeedback: I,
            sendNavigateSearchFeedback: D,
            sendPlaySearchFeedback: T,
          } = (0, h.sA)(),
          [A, R] = (0, n.useState)(!1),
          [x, k] = (0, n.useState)(!1),
          [j, O] = (0, n.useState)(!1),
          U = N(a),
          B = (0, y.SB)(a),
          w = (0, y.BV)(a),
          F = (0, h.zx)(),
          M = (0, h.s0)(a.url),
          q = (0, h.s0)(a.url, !0),
          J = (0, E.ik)(q, M),
          [W, z] = (0, n.useState)(!1),
          { isPlaying: H, togglePlay: Z } = (0, h.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Playlist,
                meta: { id: a.id, uuid: a.uuid },
                from: V,
              },
              loadContextMeta: !0,
            },
          }),
          Y = (0, n.useCallback)(() => {
            F({ to: o.qU.PlaylistScreen }), null == D || D();
          }, [F, D]),
          K = (0, n.useCallback)(
            (e) => {
              Y(), J(e);
            },
            [J, Y],
          ),
          Q = (0, n.useCallback)(() => {
            A || H || (R(!0), null == T || T()), Z();
          }, [H, A, T, Z]),
          X = (0, n.useCallback)(() => {
            x || a.isLiked || (k(!0), null == I || I()), B();
          }, [B, x, a.isLiked, I]),
          $ = (0, n.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          ee = (0, n.useCallback)(() => {
            O(!j), z(!j);
          }, [j]),
          et = (0, n.useMemo)(() => {
            var e;
            return C
              ? (0, i.jsx)(p.Caption, {
                  variant: "span",
                  type: "entity",
                  size: "s",
                  weight: "medium",
                  lineClamp: 2,
                  children: C,
                })
              : (null === (e = a.artists) || void 0 === e ? void 0 : e.length)
                ? (0, i.jsx)(E.jO, {
                    className: L().artists,
                    artists: a.artists,
                    lineClamp: 1,
                    linkClassName: L().artistLink,
                    captionSize: "s",
                  })
                : void 0;
          }, [a.artists, C]),
          ea = (0, n.useMemo)(() => {
            if (!a.isFavouritePlaylist)
              return (0, i.jsx)(G.dJ, {
                className: (0, l.W)(L().likeButton, L().control),
                isLiked: a.isLiked,
                onClick: X,
                variant: "default",
                size: "s",
                iconSize: "xxs",
              });
          }, [X, a.isFavouritePlaylist, a.isLiked]),
          ei = (0, n.useMemo)(
            () =>
              (0, i.jsx)(S.Paper, {
                className: L().cover,
                radius: "s",
                withShadow: !0,
                ...(0, u.BA)(u.bG.playlist.PLAYLIST_CARD),
                children: (0, i.jsxs)("div", {
                  className: L().coverBlock,
                  onClick: K,
                  children: [
                    (0, i.jsx)(G.BE, {
                      className: L().image,
                      src: a.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: U,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsx)(g.kk, {
                      isVisible: j || W,
                      className: L().controls,
                      playControl: (0, i.jsx)(G.JM, {
                        className: (0, l.W)(L().playButton, L().control),
                        buttonVariant: "default",
                        withHover: !1,
                        iconSize: "xl",
                        variant: "filled",
                        onClick: Q,
                        isPlaying: H,
                        disabled: !a.isAvailable,
                      }),
                      likeControl: ea,
                      menuControl: (0, i.jsx)(v, {
                        playlist: a,
                        onOpenChange: ee,
                        open: j,
                        returnFocus: !1,
                        reference: (0, i.jsx)(c.z, {
                          onClick: $,
                          className: (0, l.W)(L().menuButton, L().control),
                          "aria-label": _({
                            id: "interface-actions.context-menu",
                          }),
                          icon: (0, i.jsx)(m.J, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          radius: "round",
                          ...(0, u.BA)(
                            u.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        }),
                      }),
                      pinControl: (0, i.jsx)(G.RT, {
                        onClick: w,
                        isPinned: a.isPinned,
                        className: (0, l.W)(L().pinButton, L().control),
                        withRipple: !1,
                      }),
                    }),
                  ],
                }),
              }),
            [K, a, U, j, W, Q, H, ea, ee, $, _, w],
          ),
          el = !!a.actualLikesCount && !a.isLikesCountHidden;
        return (0, i.jsxs)(g.m7, {
          ref: P,
          "aria-label": U,
          className: (0, l.W)(L().root, t),
          title: (0, i.jsx)(p.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, u.BA)(u.bG.playlist.PLAYLIST_TITLE),
            children: (0, i.jsx)(G.rU, {
              className: L().titleLink,
              href: a.url,
              onClick: Y,
              children: a.title,
            }),
          }),
          srTitle: (0, i.jsx)(G.rU, {
            href: a.url,
            onClick: Y,
            children: a.title,
          }),
          "data-intersection-property-id": f,
          contentLinesCount: b,
          view: ei,
          description: et,
          ...(0, u.BA)(u.bG.playlist.PLAYLIST_ITEM),
          children: [
            el &&
              (0, i.jsx)(G.DB, {
                ariaLabel: _(
                  { id: "entity-names.likes-counter" },
                  { counter: a.actualLikesCount },
                ),
                likesCount: a.actualLikesCount,
                isLiked: a.isLiked,
                handleLikeClick: B,
              }),
            s,
          ],
        });
      });
    },
    18921: function (e, t, a) {
      "use strict";
      a.d(t, {
        PlaylistsCarousel: function () {
          return o;
        },
      });
      var i = a(9753),
        l = a(98639),
        s = a(67868),
        n = a(22003);
      let r = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: a,
            isShimmerActive: l,
            title: r,
            description: o,
            playlists: u,
            containerClassName: d,
            className: c,
            headerClassName: g,
            viewAllActionLink: m,
            ...S
          } = e;
          return (0, i.jsx)(s.HY, {
            isShimmerVisible: a,
            isShimmerActive: l,
            className: c,
            headerClassName: g,
            containerClassName: d,
            ref: t,
            title: r,
            description: o,
            viewAllActionLink: m,
            ...S,
            children:
              null == u
                ? void 0
                : u.map((e) =>
                    (0, i.jsx)(
                      n.PlaylistCard,
                      { playlist: e, contentLinesCount: 3 },
                      e.key,
                    ),
                  ),
          });
        },
        o = (0, l.forwardRef)((e, t) => (0, i.jsx)(r, { forwardRef: t, ...e }));
    },
    78601: function (e, t, a) {
      "use strict";
      a.d(t, {
        Xb: function () {
          return i.AlbumPage;
        },
        Lf: function () {
          return _;
        },
      });
      var i = a(93289);
      a(74488);
      var l = a(42288),
        s = a(10542),
        n = a(69869),
        r = a(82857),
        o = a(93490),
        u = a(10064),
        d = a(75191),
        c = a(38360),
        g = a(63394),
        m = a(58421);
      let S = (e, t) => e.map((e) => "".concat(e, ":").concat(t));
      var p = a(48892);
      let E = (e) => ({ type: c.lf.TEXT, data: e || null }),
        y = (e, t, a, i, l) => ({
          type: (null == a ? void 0 : a.type) || n.Vc.TRACK,
          id: e,
          data: a || null,
          loadingState: t,
          position: i,
          isBest: l,
        }),
        h = (e) => "".concat(e, "-text"),
        G = (e) => String(e),
        N = (e, t, a, i) => {
          e.forEach((e) => {
            var l, s, n, r, o;
            if (null === (l = e.albums) || void 0 === l ? void 0 : l[0]) {
              let l = a.get(G(e.id));
              void 0 !== l &&
                (t[l] = y(
                  e.id,
                  g.Gu.RESOLVE,
                  (0, p.Vt)(e),
                  null === (n = e.albums[0]) || void 0 === n
                    ? void 0
                    : null === (s = n.trackPosition) || void 0 === s
                      ? void 0
                      : s.index,
                  null == i ? void 0 : i.includes(Number(e.id)),
                ));
              let u = a.get(h(e.id));
              void 0 !== u &&
                (t[u] = E(
                  null === (o = e.albums[0]) || void 0 === o
                    ? void 0
                    : null === (r = o.trackPosition) || void 0 === r
                      ? void 0
                      : r.volume,
                ));
            }
          });
        },
        b = (e, t, a, i) => {
          let l = 0;
          e.volumes.forEach((s) => {
            e.volumes.length > 1 &&
              s[0] &&
              (t.push(E()), a.set(h(s[0].id), t.length - 1)),
              s.forEach((e) => {
                t.push(y(e.id, g.Gu.IDLE)),
                  a.set(G(e.id), t.length - 1),
                  i.set(G(e.id), l),
                  l++;
              });
          });
        },
        v = (e) =>
          (0, l.pj)({
            id: e.id,
            type: e.type,
            title: e.title,
            albums: e.albums.map(o.ym),
          }),
        C = (e, t, a, i) => {
          e.forEach((e) => {
            let l = a.get(String(e));
            void 0 !== l && (t[l] = y(e, i));
          });
        },
        L = l.V5.model("AlbumDonations", {
          loadingState: l.V5.enumeration(Object.values(g.Gu)),
          items: l.V5.maybeNull(l.V5.array(u.Ew)),
        }),
        P = l.V5.model("LabelItem", { id: l.V5.number, name: l.V5.string }),
        f = l.V5.model("RelatedAlbumsPage", {
          loadingState: l.V5.enumeration(Object.values(g.Gu)),
          items: l.V5.array(o.ug),
        }),
        V = l.V5.model("RelatedContent", {
          loadingState: l.V5.enumeration(Object.values(g.Gu)),
          items: l.V5.maybeNull(l.V5.array(r.fd)),
        }),
        _ = l.V5.compose(
          l.V5.model("AlbumPage", {
            id: l.V5.maybeNull(l.V5.number),
            meta: l.V5.maybeNull(o.ug),
            items: l.V5.array(r.JP),
            indexItems: l.V5.map(l.V5.number),
            trackIndexInContext: l.V5.map(l.V5.number),
            loadingState: l.V5.enumeration(Object.values(g.Gu)),
            errorStatusCode: l.V5.maybeNull(l.V5.number),
            deprecationTargetAlbumId: l.V5.maybeNull(l.V5.number),
            latestGenreAlbums: f,
            otherArtistAlbums: f,
            otherAlbumVersions: l.V5.array(o.ug),
            labels: l.V5.maybeNull(l.V5.array(P)),
            description: l.V5.maybe(l.V5.string),
            donations: L,
            relatedContent: V,
          }),
          m.ie,
        )
          .views((e) => ({
            get isNonMusicType() {
              var t;
              if (null === (t = e.meta) || void 0 === t ? void 0 : t.type)
                return [n.VZ.PODCAST, n.VZ.AUDIOBOOK].includes(e.meta.type);
              return !1;
            },
            get isOtherArtistAlbumsAvailable() {
              var a, i, l, r;
              return !!(
                !this.isNonMusicType &&
                (null === (i = e.meta) || void 0 === i
                  ? void 0
                  : null === (a = i.artists) || void 0 === a
                    ? void 0
                    : a.length) === 1 &&
                !(null === (r = e.meta) || void 0 === r
                  ? void 0
                  : null === (l = r.artists[0]) || void 0 === l
                    ? void 0
                    : l.various)
              );
            },
            get isLatestGenreAlbumsAvailable() {
              var o;
              return !!(
                !this.isNonMusicType &&
                (null === (o = e.meta) || void 0 === o ? void 0 : o.genre)
              );
            },
            get isNotFound() {
              return (
                e.loadingState === g.Gu.REJECT &&
                e.errorStatusCode === s.CN.NOT_FOUND
              );
            },
            get isRejected() {
              return e.loadingState === g.Gu.REJECT;
            },
            get hasOtherAlbumVersions() {
              return !!(
                e.loadingState === g.Gu.IDLE ||
                e.loadingState === g.Gu.PENDING ||
                (e.otherAlbumVersions && e.otherAlbumVersions.length > 0)
              );
            },
            get hasLatestGenreAlbums() {
              return !!(
                e.latestGenreAlbums.loadingState === g.Gu.IDLE ||
                e.latestGenreAlbums.loadingState === g.Gu.PENDING ||
                (e.latestGenreAlbums.items &&
                  e.latestGenreAlbums.items.length > 0)
              );
            },
            get hasOtherArtistAlbums() {
              return !!(
                e.otherArtistAlbums.loadingState === g.Gu.IDLE ||
                e.otherArtistAlbums.loadingState === g.Gu.PENDING ||
                (e.otherArtistAlbums.items &&
                  e.otherArtistAlbums.items.length > 0)
              );
            },
            get isLoading() {
              return (
                e.loadingState === g.Gu.IDLE || e.loadingState === g.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === g.Gu.RESOLVE;
            },
            get isLatestGenreAlbumsLoading() {
              return (
                e.latestGenreAlbums.loadingState === g.Gu.IDLE ||
                e.latestGenreAlbums.loadingState === g.Gu.PENDING
              );
            },
            get isOtherArtistAlbumsLoading() {
              return (
                e.otherArtistAlbums.loadingState === g.Gu.IDLE ||
                e.otherArtistAlbums.loadingState === g.Gu.PENDING
              );
            },
            get isRelatedContentLoading() {
              return (
                e.relatedContent.loadingState === g.Gu.IDLE ||
                e.relatedContent.loadingState === g.Gu.PENDING
              );
            },
            get contextMeta() {
              var u, d, m, S, p, E, y, h, G, N;
              return {
                id: e.meta.id,
                title: null === (u = e.meta) || void 0 === u ? void 0 : u.title,
                coverUri:
                  null === (d = e.meta) || void 0 === d ? void 0 : d.coverUri,
                type: null === (m = e.meta) || void 0 === m ? void 0 : m.type,
                year: null === (S = e.meta) || void 0 === S ? void 0 : S.year,
                version:
                  null === (p = e.meta) || void 0 === p ? void 0 : p.version,
                contentWarning:
                  null === (E = e.meta) || void 0 === E
                    ? void 0
                    : E.contentWarning,
                genre: null === (y = e.meta) || void 0 === y ? void 0 : y.genre,
                likesCount:
                  null === (h = e.meta) || void 0 === h ? void 0 : h.likesCount,
                averageColor:
                  null === (G = e.meta) || void 0 === G
                    ? void 0
                    : G.averageColor,
                available:
                  null === (N = e.meta) || void 0 === N
                    ? void 0
                    : N.isAvailable,
              };
            },
            get lastEpisodes() {
              return e.items
                .filter((e) => e.type !== c.lf.TEXT)
                .slice(0, 5)
                .map((e) => e);
            },
            get lastEpisodesTrackIds() {
              return this.lastEpisodes.map((e) => e.id);
            },
          }))
          .actions((e) => {
            let t = {
              getLatestGenreAlbums: (0, l.ls)(function* (t) {
                let { topResource: a, modelActionsLogger: i } = (0, l.dU)(e);
                if (e.latestGenreAlbums.loadingState !== g.Gu.PENDING)
                  try {
                    e.latestGenreAlbums.loadingState = g.Gu.PENDING;
                    let i = yield a.getTopByGenre(t);
                    (e.latestGenreAlbums.items = (0, l.pj)(i.albums.map(o.ym))),
                      (e.latestGenreAlbums.loadingState = g.Gu.RESOLVE);
                  } catch (t) {
                    i.error(t),
                      (e.latestGenreAlbums.loadingState = g.Gu.REJECT);
                  }
              }),
              getOtherArtistAlbums: (0, l.ls)(function* (t, a) {
                let { artistsResource: i, modelActionsLogger: s } = (0, l.dU)(
                  e,
                );
                if (e.otherArtistAlbums.loadingState !== g.Gu.PENDING)
                  try {
                    if (!t.artistId) {
                      e.otherArtistAlbums.loadingState = g.Gu.REJECT;
                      return;
                    }
                    e.otherArtistAlbums.loadingState = g.Gu.PENDING;
                    let s = yield i.getSafeDirectAlbums({
                      ...t,
                      artistId: t.artistId,
                    });
                    (e.otherArtistAlbums.items = (0, l.pj)(
                      s.albums
                        .filter((e) => String(e.id) !== String(a))
                        .map(o.ym),
                    )),
                      (e.otherArtistAlbums.loadingState = g.Gu.RESOLVE);
                  } catch (t) {
                    s.error(t),
                      (e.otherArtistAlbums.loadingState = g.Gu.REJECT);
                  }
              }),
              getTracks: (0, l.ls)(function* (t) {
                let { trackIds: a } = t,
                  { tracksResource: i, modelActionsLogger: s } = (0, l.dU)(e);
                try {
                  var n;
                  if (!(null === (n = e.meta) || void 0 === n ? void 0 : n.id))
                    return;
                  C(a, e.items, e.indexItems, g.Gu.PENDING);
                  let t = yield i.getTracksMeta({
                    trackIds: S(a, e.meta.id),
                    withProgress: !0,
                  });
                  N(t, e.items, e.indexItems, e.meta.bestAlbumTracks);
                } catch (t) {
                  s.error(t), C(a, e.items, e.indexItems, g.Gu.REJECT);
                }
              }),
              getDonations: (0, l.ls)(function* (t) {
                let { albumId: a } = t,
                  { experiments: i } = (0, l.yj)(e),
                  { donationResource: s, modelActionsLogger: n } = (0, l.dU)(e);
                if (
                  i.checkExperiment(
                    g.pe.WebNextAlbumDonateChooserButton,
                    "on",
                  ) &&
                  e.donations.loadingState !== g.Gu.PENDING
                )
                  try {
                    e.donations.loadingState = g.Gu.PENDING;
                    let { donations: t } = yield s.getAlbumDonations({
                      albumId: a,
                    });
                    t && (e.donations.items = (0, l.pj)(t.map(u.fv))),
                      (e.donations.loadingState = g.Gu.RESOLVE);
                  } catch (t) {
                    n.error(t), (e.donations.loadingState = g.Gu.REJECT);
                  }
              }),
              getData: (0, l.ls)(function* (a) {
                let { albumId: i, resumeStream: r } = a,
                  { albumResource: u, modelActionsLogger: c } = (0, l.dU)(e),
                  { experiments: m, disclaimer: S } = (0, l.yj)(e),
                  p = m.checkExperiment(g.pe.WebNextAlbumDisableVersions, "on"),
                  E = m.checkExperiment(g.pe.WebNextAlbumDisableTracks, "on"),
                  y = m.checkExperiment(
                    g.pe.WebNextAlbumDisableLatestGenreAlbums,
                    "on",
                  ),
                  h = m.checkExperiment(
                    g.pe.WebNextAlbumDisableOtherArtistAlbums,
                    "on",
                  ),
                  G = m.checkExperiment(g.pe.WebNextLegalRejectAlbum, "on");
                if (((e.id = i), e.loadingState !== g.Gu.PENDING))
                  try {
                    var N, v, C, L;
                    let a, c;
                    e.loadingState = g.Gu.PENDING;
                    let m = yield u.getAlbumWithTracksIds({
                      albumId: i,
                      resumeStream: r,
                    });
                    if ((null == m ? void 0 : m.error) === "not-found") {
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                        (e.loadingState = g.Gu.REJECT),
                        (e.otherArtistAlbums.loadingState = g.Gu.REJECT),
                        (e.latestGenreAlbums.loadingState = g.Gu.REJECT);
                      return;
                    }
                    if (
                      null === (N = m.deprecation) || void 0 === N
                        ? void 0
                        : N.targetAlbumId
                    ) {
                      (e.deprecationTargetAlbumId =
                        m.deprecation.targetAlbumId),
                        (e.loadingState = g.Gu.RESOLVE);
                      return;
                    }
                    (null !== (v = m.disclaimers) && void 0 !== v
                      ? v
                      : []
                    ).includes(n.em.MODAL) &&
                      G &&
                      (yield S.getAlbumDisclaimer({ albumId: i }));
                    let { sonataState: P } = (0, l.yj)(e);
                    if (
                      (P.setUnloadedEntitiesData(
                        m.volumes.flat().map((e) => (0, d.RN)(e.id)),
                      ),
                      (e.meta = (0, o.ym)(m)),
                      (e.labels = (0, l.pj)(m.labels)),
                      (e.contentWarning = (0, l.pj)(m.contentWarning)),
                      (e.description = (0, l.pj)(m.description)),
                      !p &&
                        m.duplicates &&
                        m.duplicates.length > 0 &&
                        (e.otherAlbumVersions = (0, l.pj)(
                          null === (C = m.duplicates) || void 0 === C
                            ? void 0
                            : C.map(o.ym),
                        )),
                      !E)
                    ) {
                      b(m, e.items, e.indexItems, e.trackIndexInContext);
                      let a = [];
                      for (let t = 0; t < 10; t++) {
                        let i = e.items[t];
                        (null == i ? void 0 : i.type) === n.Vc.TRACK &&
                          a.push(String(i.id));
                      }
                      yield t.getTracks({ trackIds: a });
                    }
                    !y && e.isLatestGenreAlbumsAvailable
                      ? (a = t.getLatestGenreAlbums({
                          category: n.mk.RECENT_ALBUMS,
                          period: n.pH.WEEK,
                          pageSize: 8,
                          genre: m.genre,
                        }))
                      : (e.latestGenreAlbums.loadingState = g.Gu.RESOLVE),
                      !h && e.isOtherArtistAlbumsAvailable
                        ? (c = t.getOtherArtistAlbums(
                            {
                              artistId: String(
                                null === (L = m.artists[0]) || void 0 === L
                                  ? void 0
                                  : L.id,
                              ),
                              limit: 8,
                            },
                            i,
                          ))
                        : (e.otherArtistAlbums.loadingState = g.Gu.RESOLVE),
                      yield Promise.allSettled([a, c]),
                      e.loadingState !== g.Gu.IDLE &&
                        (e.loadingState = g.Gu.RESOLVE);
                  } catch (t) {
                    c.error(t),
                      t instanceof s.du &&
                        (t.statusCode === s.CN.NOT_FOUND ||
                          t.statusCode === s.CN.BAD_REQUEST) &&
                        (e.errorStatusCode = s.CN.NOT_FOUND),
                      e.loadingState !== g.Gu.IDLE &&
                        ((e.loadingState = g.Gu.REJECT),
                        (e.otherArtistAlbums.loadingState = g.Gu.REJECT),
                        (e.latestGenreAlbums.loadingState = g.Gu.REJECT));
                  }
              }),
              loadLastEpisodes() {
                t.getTracks({ trackIds: e.lastEpisodesTrackIds });
              },
              getRelatedContent: (0, l.ls)(function* () {
                let { albumResource: t, modelActionsLogger: a } = (0, l.dU)(e);
                if (e.relatedContent.loadingState !== g.Gu.PENDING)
                  try {
                    var i, s;
                    if (
                      !(null === (i = e.meta) || void 0 === i ? void 0 : i.id)
                    )
                      return;
                    e.relatedContent.loadingState = g.Gu.PENDING;
                    let a = yield t.getRelatedContent({ albumId: e.meta.id });
                    (e.relatedContent.items = (0, l.pj)(
                      null === (s = a.blocks) || void 0 === s
                        ? void 0
                        : s.map(v),
                    )),
                      (e.relatedContent.loadingState = g.Gu.RESOLVE);
                  } catch (t) {
                    a.error(t), (e.relatedContent.loadingState = g.Gu.REJECT);
                  }
              }),
              reset() {
                let { sonataState: t } = (0, l.yj)(e);
                t.resetUnloadedEntitiesData(),
                  (e.id = null),
                  (e.meta = null),
                  (e.errorStatusCode = null),
                  (e.deprecationTargetAlbumId = null),
                  (e.items = (0, l.pj)([])),
                  e.indexItems.clear(),
                  e.trackIndexInContext.clear(),
                  (e.loadingState = g.Gu.IDLE),
                  (e.donations.loadingState = g.Gu.IDLE),
                  (e.donations.items = null),
                  (e.latestGenreAlbums.loadingState = g.Gu.IDLE),
                  (e.latestGenreAlbums.items = (0, l.pj)([])),
                  (e.otherArtistAlbums.loadingState = g.Gu.IDLE),
                  (e.otherArtistAlbums.items = (0, l.pj)([])),
                  (e.otherAlbumVersions = (0, l.pj)([])),
                  (e.description = ""),
                  (e.labels = null),
                  (e.relatedContent.loadingState = g.Gu.IDLE),
                  (e.relatedContent.items = null);
              },
            };
            return t;
          });
    },
    96290: function (e, t, a) {
      "use strict";
      a.d(t, {
        pr: function () {
          return n.ArtistAlbumsPage;
        },
        MX: function () {
          return o.M;
        },
        aG: function () {
          return r.ArtistConcertsPage;
        },
        vQ: function () {
          return x.ArtistFamiliarPage;
        },
        xA: function () {
          return i.ArtistPage;
        },
        Od: function () {
          return R;
        },
        x3: function () {
          return s.ArtistSimilarPage;
        },
        hD: function () {
          return l.ArtistTracksPage;
        },
      });
      var i = a(72244),
        l = a(55908),
        s = a(99931),
        n = a(84292),
        r = a(65295),
        o = a(38007);
      a(98171);
      var u = a(42288),
        d = a(10542),
        c = a(69869),
        g = a(93490),
        m = a(87908),
        S = a(31579),
        p = a(48892),
        E = a(33589),
        y = a(76351),
        h = a(63394);
      let G = (e, t) =>
          (0, u.pj)({
            artist: (0, E.d)(e),
            lastMonthListeners: null == t ? void 0 : t.lastMonthListeners,
          }),
        N = (e) => {
          let t = e.artists.map(E.tR);
          return (0, u.pj)({
            playlist: (0, S.RE)({ playlist: e.playlist }),
            artists: t,
          });
        };
      var b = a(58421);
      let v = u.V5.model("ArtistAlbumsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          pager: u.V5.maybeNull(b.Vn),
          variant: u.V5.maybeNull(u.V5.enumeration(Object.values(o.M))),
          alreadyRequestedPages: u.V5.map(u.V5.number),
          pendingPages: u.V5.map(u.V5.number),
          requests: u.V5.maybeNull(u.V5.number),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          items: u.V5.array(u.V5.maybeNull(g.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === h.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === d.CN.NOT_FOUND ||
                  e.errorStatusCode === d.CN.BAD_REQUEST;
              return (e.loadingState === h.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            setVariant: (t) => {
              e.variant = t;
            },
            getData: (0, u.ls)(function* (t) {
              let { artistId: a, page: i = 0, pageSize: l = 20, sort: s } = t,
                { artistsResource: n, modelActionsLogger: r } = (0, u.dU)(e);
              if (
                !(
                  (e.loadingState === h.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var c;
                  let t;
                  (e.loadingState = h.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let r = {
                    artistId: a,
                    page: i,
                    pageSize: l,
                    sort: { sortBy: null == s ? void 0 : s.sortBy },
                  };
                  switch (e.variant) {
                    case o.M.COMPILATIONS:
                      t = yield n.getAlsoAlbums(r);
                      break;
                    case o.M.DISCOGRAPHY:
                      t = yield n.getDiscographyAlbums(r);
                      break;
                    default:
                      t = yield n.getDirectAlbums(r);
                  }
                  let d = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, u.pj)(
                      Array.from({ length: d.total }, () => null),
                    ));
                  let m = t.albums.map(g.ym);
                  (0, h.AG)({
                    items: e.items,
                    mappedRawItems: m,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = d),
                    (e.requests =
                      (null !== (c = e.requests) && void 0 !== c ? c : 0) + 1),
                    (e.loadingState = h.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    t instanceof d.du &&
                      (t.statusCode === d.CN.NOT_FOUND ||
                        t.statusCode === d.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = d.CN.NOT_FOUND),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                (e.variant = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, u.pj)([]));
            },
          })),
        C = u.V5.model("ArtistConcertsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          concerts: u.V5.maybeNull(u.V5.array(y.Z)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gu.IDLE || e.loadingState === h.Gu.PENDING
              );
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === h.Gu.RESOLVE &&
                  (null === (t = e.concerts) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i =
                  e.errorStatusCode === d.CN.NOT_FOUND ||
                  e.errorStatusCode === d.CN.BAD_REQUEST;
              return (e.loadingState === h.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              if (e.loadingState !== h.Gu.PENDING)
                try {
                  e.loadingState = h.Gu.PENDING;
                  let { concerts: t } = yield i.getConcerts({ artistId: a });
                  (e.concerts = (0, u.pj)(t.map(y.zj))),
                    (e.loadingState = h.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
                    t instanceof d.du &&
                      (t.statusCode === d.CN.NOT_FOUND ||
                        t.statusCode === d.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = d.CN.NOT_FOUND),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                (e.errorStatusCode = null),
                (e.concerts = null);
            },
          })),
        L = (e) =>
          (0, u.pj)({
            ...(0, g.cO)({ album: e, artists: e.artists }),
            version: e.version,
          }),
        P = u.V5.model("ArtistFamiliarPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          vibeTracks: u.V5.maybeNull(u.V5.array(p.le)),
          collectionTracks: u.V5.maybeNull(u.V5.array(p.le)),
          collectionAlbums: u.V5.maybeNull(u.V5.array(g.ug)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gu.IDLE || e.loadingState === h.Gu.PENDING
              );
            },
            get isLoaded() {
              return e.loadingState === h.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === h.Gu.REJECT;
            },
            get isNotFound() {
              let t =
                e.errorStatusCode === d.CN.NOT_FOUND ||
                e.errorStatusCode === d.CN.BAD_REQUEST;
              return e.loadingState === h.Gu.REJECT && t;
            },
            get hasCollectionEntities() {
              var t, a;
              return (
                (this.isLoaded &&
                  Number(
                    null === (t = e.collectionTracks) || void 0 === t
                      ? void 0
                      : t.length,
                  ) > 0) ||
                Number(
                  null === (a = e.collectionAlbums) || void 0 === a
                    ? void 0
                    : a.length,
                ) > 0
              );
            },
            get shouldShowTitleBlocks() {
              var i, l;
              if (this.isLoading) return !0;
              return (
                Number(
                  null === (i = e.collectionTracks) || void 0 === i
                    ? void 0
                    : i.length,
                ) > 0 &&
                Number(
                  null === (l = e.collectionAlbums) || void 0 === l
                    ? void 0
                    : l.length,
                ) > 0
              );
            },
            get hasVibeTracks() {
              var s;
              return (
                Number(
                  null === (s = e.vibeTracks) || void 0 === s
                    ? void 0
                    : s.length,
                ) > 0
              );
            },
            get collectionEntitiesData() {
              var n, r;
              return null !==
                (r =
                  null === (n = e.collectionTracks) || void 0 === n
                    ? void 0
                    : n.map(p.E5)) && void 0 !== r
                ? r
                : [];
            },
            get vibeEntitiesData() {
              var o, u;
              return null !==
                (u =
                  null === (o = e.vibeTracks) || void 0 === o
                    ? void 0
                    : o.map(p.E5)) && void 0 !== u
                ? u
                : [];
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              if (e.loadingState !== h.Gu.PENDING)
                try {
                  var s, n, r, o, c, g;
                  e.loadingState = h.Gu.PENDING;
                  let t = yield i.getFamiliarYou({
                    artistId: a,
                    waveTracksLimit: 100,
                    collectionTracksLimit: 100,
                    collectionAlbumsLimit: 20,
                  });
                  (e.vibeTracks = (0, u.pj)(
                    null === (n = t.wave) || void 0 === n
                      ? void 0
                      : null === (s = n.tracks) || void 0 === s
                        ? void 0
                        : s.map((e) => (0, p.Vt)(e)),
                  )),
                    (e.collectionTracks = (0, u.pj)(
                      null === (o = t.collection) || void 0 === o
                        ? void 0
                        : null === (r = o.tracks) || void 0 === r
                          ? void 0
                          : r.map((e) => (0, p.Vt)(e)),
                    )),
                    (e.collectionAlbums = (0, u.pj)(
                      null === (g = t.collection) || void 0 === g
                        ? void 0
                        : null === (c = g.albums) || void 0 === c
                          ? void 0
                          : c.map(L),
                    )),
                    (e.loadingState = h.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
                    t instanceof d.du &&
                      (t.statusCode === d.CN.NOT_FOUND ||
                        t.statusCode === d.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = d.CN.NOT_FOUND),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                (e.errorStatusCode = null),
                (e.vibeTracks = null),
                (e.collectionTracks = null);
            },
          }));
      var f = a(12090);
      let V = u.V5.model("ArtistPick", {
          playlist: f.Cd,
          artists: u.V5.array(E.Go),
        }),
        _ = u.V5.model("ArtistSimilarArtistsPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          similarArtists: u.V5.maybeNull(u.V5.array(E.Go)),
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gu.IDLE || e.loadingState === h.Gu.PENDING
              );
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === h.Gu.RESOLVE &&
                  (null === (t = e.similarArtists) || void 0 === t
                    ? void 0
                    : t.length) === 0,
                i =
                  e.errorStatusCode === d.CN.NOT_FOUND ||
                  e.errorStatusCode === d.CN.BAD_REQUEST;
              return (e.loadingState === h.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              try {
                e.loadingState = h.Gu.PENDING;
                let t = yield i.getSimilarArtists({ artistId: a });
                (e.similarArtists = (0, u.pj)(t.similarArtists.map(E.d))),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.RESOLVE);
              } catch (t) {
                l.error(t),
                  t instanceof d.du &&
                    (t.statusCode === d.CN.NOT_FOUND ||
                      t.statusCode === d.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = d.CN.NOT_FOUND),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.REJECT);
              }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                (e.errorStatusCode = null),
                (e.similarArtists = (0, u.pj)([]));
            },
          }));
      var I = a(72587);
      let D = u.V5.model("FamiliarInfo", {
        loadingState: u.V5.enumeration(Object.values(h.Gu)),
        vibeTrackCount: u.V5.optional(u.V5.number, 0),
        collectionTrackCount: u.V5.optional(u.V5.number, 0),
        collectionAlbumCount: u.V5.optional(u.V5.number, 0),
      })
        .views((e) => ({
          get isLoaded() {
            return e.loadingState === h.Gu.RESOLVE;
          },
          get hasTracks() {
            return (
              this.isLoaded &&
              (e.collectionTrackCount > 0 || e.vibeTrackCount > 0)
            );
          },
          get hasFamiliarInfo() {
            return (
              this.isLoaded && (this.hasTracks || e.collectionAlbumCount > 0)
            );
          },
          get tracksCount() {
            return e.collectionTrackCount + e.vibeTrackCount;
          },
          get hasCollectionEntities() {
            return (
              this.isLoaded &&
              (e.collectionTrackCount > 0 || e.collectionAlbumCount > 0)
            );
          },
          get hasVibeEntities() {
            return this.isLoaded && e.vibeTrackCount > 0;
          },
          href(e) {
            return e
              ? this.hasCollectionEntities
                ? "/artist/".concat(e, "/familiar?tab=").concat(I.g.COLLECTION)
                : this.hasVibeEntities
                  ? "/artist/".concat(e, "/familiar?tab=").concat(I.g.VIBE)
                  : "/artist/".concat(e, "/familiar")
              : "";
          },
        }))
        .actions((e) => ({
          getData: (0, u.ls)(function* (t) {
            let { artistId: a } = t,
              { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
            if (e.loadingState !== h.Gu.PENDING)
              try {
                e.loadingState = h.Gu.PENDING;
                let t = yield i.getFamiliarYouInfo({
                  artistId: a,
                  withWaveInfo: !0,
                  withCollectionInfo: !0,
                });
                t.collection &&
                  ((e.collectionTrackCount = t.collection.trackCount),
                  (e.collectionAlbumCount = t.collection.albumCount)),
                  t.wave && (e.vibeTrackCount = t.wave.trackCount),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.RESOLVE);
              } catch (t) {
                l.error(t),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.REJECT);
              }
          }),
          reset() {
            (e.loadingState = h.Gu.IDLE),
              (e.vibeTrackCount = 0),
              (e.collectionTrackCount = 0),
              (e.collectionAlbumCount = 0);
          },
        }));
      var T = a(75191);
      let A = u.V5.model("FullTracksList", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          ids: u.V5.maybeNull(u.V5.array(u.V5.string)),
          tracks: u.V5.optional(u.V5.map(p.le), {}),
        })
          .views((e) => ({
            getTrackByIndex(t) {
              if (!e.ids || !e.ids.length) return null;
              let a = e.ids[t];
              return (a && e.tracks.get(a)) || null;
            },
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === h.Gu.RESOLVE &&
                  (null === (t = e.ids) || void 0 === t ? void 0 : t.length) ===
                    0,
                i =
                  e.errorStatusCode === d.CN.NOT_FOUND ||
                  e.errorStatusCode === d.CN.BAD_REQUEST;
              return (e.loadingState === h.Gu.REJECT && i) || a;
            },
          }))
          .actions((e) => ({
            getTracksIds: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { artistsResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              try {
                e.loadingState = h.Gu.PENDING;
                let t = yield i.getArtistTrackIds({ artistId: a }),
                  { sonataState: l } = (0, u.yj)(e);
                l.setUnloadedEntitiesData(t.map((e) => (0, T.RN)(e))),
                  (e.ids = (0, u.pj)(t)),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.RESOLVE);
              } catch (t) {
                l.error(t),
                  t instanceof d.du &&
                    (t.statusCode === d.CN.NOT_FOUND ||
                      t.statusCode === d.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = d.CN.NOT_FOUND),
                  e.loadingState !== h.Gu.IDLE &&
                    (e.loadingState = h.Gu.REJECT);
              }
            }),
            getTracks: (0, u.ls)(function* (t) {
              let { trackIds: a } = t,
                { tracksResource: i, modelActionsLogger: l } = (0, u.dU)(e);
              try {
                let t = yield i.getTracksMeta({
                  trackIds: a,
                  withProgress: !0,
                });
                e.tracks.merge(
                  t.reduce((e, t) => ((e[t.id] = (0, p.Vt)(t)), e), {}),
                );
              } catch (e) {
                l.error(e);
              }
            }),
            reset() {
              let { sonataState: t } = (0, u.yj)(e);
              t.resetUnloadedEntitiesData(),
                (e.loadingState = h.Gu.IDLE),
                (e.ids = (0, u.pj)([])),
                e.tracks.clear();
            },
          })),
        R = u.V5.model("ArtistPage", {
          loadingState: u.V5.enumeration(Object.values(h.Gu)),
          id: u.V5.maybeNull(u.V5.string),
          meta: u.V5.maybeNull(m.o9),
          popularTracks: u.V5.array(p.le),
          lastRelease: u.V5.maybeNull(g.ug),
          upcomingAlbum: u.V5.maybeNull(g.W9),
          concerts: u.V5.maybeNull(u.V5.array(y.Z)),
          similarArtists: u.V5.array(E.Go),
          playlists: u.V5.array(S.d2),
          errorStatusCode: u.V5.maybeNull(u.V5.number),
          deprecationTargetArtistId: u.V5.maybeNull(u.V5.number),
          albums: u.V5.array(g.ug),
          discography: u.V5.array(g.ug),
          compilations: u.V5.array(g.ug),
          artistPick: u.V5.maybeNull(V),
          familiarInfo: D,
          albumsSubpage: v,
          fullTracksListSubpage: A,
          concertsSubpage: C,
          similarArtistsSubPage: _,
          familiarSubpage: P,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === h.Gu.IDLE || e.loadingState === h.Gu.PENDING
              );
            },
            get hasPopularTracks() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.popularTracks.length > 0
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.albums.length > 0
              );
            },
            get hasDiscography() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.discography.length > 0
              );
            },
            get hasCompilations() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.compilations.length > 0
              );
            },
            get hasSimilarArtists() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                e.similarArtists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                (e.playlists && e.playlists.length > 0)
              );
            },
            get hasConcerts() {
              let { experiments: t } = (0, u.yj)(e);
              return (
                e.loadingState === h.Gu.IDLE ||
                e.loadingState === h.Gu.PENDING ||
                (e.concerts &&
                  e.concerts.length > 0 &&
                  t.checkExperiment(h.pe.WebNewBlockConcerts, "on"))
              );
            },
            get concertsLink() {
              var t, a;
              let { experiments: i } = (0, u.yj)(e);
              if (
                i.checkExperiment(h.pe.WebNewConcertsList, "on") &&
                (null === (t = e.meta) || void 0 === t
                  ? void 0
                  : t.artist.id) &&
                e.concerts &&
                e.concerts.length > 3
              )
                return "/artist/".concat(
                  null === (a = e.meta) || void 0 === a ? void 0 : a.artist.id,
                  "/concerts",
                );
              return null;
            },
            get isNotFound() {
              return (
                e.loadingState === h.Gu.REJECT &&
                e.errorStatusCode === d.CN.NOT_FOUND
              );
            },
            get isLoaded() {
              return e.loadingState === h.Gu.RESOLVE;
            },
            get isRejected() {
              return e.loadingState === h.Gu.REJECT;
            },
            get hasReleaseBlock() {
              return !!(this.isLoading || e.upcomingAlbum || e.lastRelease);
            },
          }))
          .actions((e) => ({
            getData: (0, u.ls)(function* (t) {
              let { artistId: a } = t,
                { slides: i, experiments: l, disclaimer: s } = (0, u.yj)(e),
                { artistsResource: n, modelActionsLogger: r } = (0, u.dU)(e),
                o = l.checkExperiment(
                  h.pe.WebNextArtistDisableLastReleases,
                  "on",
                ),
                m = l.checkExperiment(
                  h.pe.WebNextArtistDisablePopularTracks,
                  "on",
                ),
                b = l.checkExperiment(
                  h.pe.WebNextArtistDisableSimilarArtists,
                  "on",
                ),
                v = l.checkExperiment(
                  h.pe.WebNextArtistDisablePopularAlbums,
                  "on",
                ),
                C = l.checkExperiment(
                  h.pe.WebNextArtistDisableDiscography,
                  "on",
                ),
                L = l.checkExperiment(
                  h.pe.WebNextArtistDisableCompilations,
                  "on",
                ),
                P = l.checkExperiment(h.pe.WebNextArtistDisablePlaylists, "on"),
                f = l.checkExperiment(h.pe.WebNextLegalRejectArtist, "on");
              if (((e.id = a), e.loadingState !== h.Gu.PENDING))
                try {
                  var V, _;
                  e.loadingState = h.Gu.PENDING;
                  let {
                    popularTracks: t,
                    error: l,
                    artist: r,
                    stats: I,
                    albums: D,
                    playlists: T,
                    alsoAlbums: A,
                    similarArtists: R,
                    lastReleases: x,
                    concerts: k,
                    upcomingAlbum: j,
                    discography: O,
                    artistPick: U,
                  } = yield n.getBriefInfo({
                    artistId: a,
                    popularTracksCount: 5,
                    fetchPlaylistLikesCounts: !0,
                    discographyBlockEnabled: !0,
                  });
                  if (
                    "not-found" === l ||
                    (null == r ? void 0 : r.error) === "not-found"
                  ) {
                    (e.errorStatusCode = d.CN.NOT_FOUND),
                      (e.loadingState = h.Gu.REJECT);
                    return;
                  }
                  if (
                    null === (V = r.deprecation) || void 0 === V
                      ? void 0
                      : V.targetArtistId
                  ) {
                    (e.deprecationTargetArtistId =
                      r.deprecation.targetArtistId),
                      (e.loadingState = h.Gu.RESOLVE);
                    return;
                  }
                  e.meta = (0, u.pj)(G(r, I));
                  let B = (
                    null !== (_ = r.disclaimers) && void 0 !== _ ? _ : []
                  ).includes(c.em.MODAL);
                  if (
                    (!r.available &&
                      B &&
                      f &&
                      (yield s.getArtistDisclaimer({ artistId: a })),
                    !o && x && x.length > 0)
                  ) {
                    let t = x[0];
                    t &&
                      D &&
                      D.length > 1 &&
                      (e.lastRelease = (0, u.pj)((0, g.ym)(t)));
                  }
                  j && (e.upcomingAlbum = (0, u.pj)((0, g.wq)(j))),
                    k && (e.concerts = (0, u.pj)(k.map(y.zj))),
                    !m &&
                      t &&
                      t.length > 0 &&
                      (e.popularTracks = (0, u.pj)(
                        t.slice(0, 5).map((e) => (0, p.Vt)(e)),
                      )),
                    !b &&
                      R &&
                      R.length > 0 &&
                      (e.similarArtists = (0, u.pj)(R.slice(0, 9).map(E.d))),
                    !v &&
                      Number(null == D ? void 0 : D.length) > 0 &&
                      (e.albums = (0, u.pj)(null == D ? void 0 : D.map(g.ym))),
                    !C &&
                      Number(null == O ? void 0 : O.length) > 0 &&
                      (e.discography = (0, u.pj)(
                        null == O ? void 0 : O.map(g.ym).slice(0, 9),
                      )),
                    !L &&
                      Number(null == A ? void 0 : A.length) > 0 &&
                      (e.compilations = (0, u.pj)(
                        null == A ? void 0 : A.map(g.ym).slice(0, 9),
                      )),
                    !P &&
                      T &&
                      T.length > 0 &&
                      (e.playlists = (0, u.pj)(T.map(S.Q9).slice(0, 9))),
                    U && (e.artistPick = N(U)),
                    i.resetArtist(),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.RESOLVE);
                } catch (t) {
                  r.error(t),
                    t instanceof d.du &&
                      (t.statusCode === d.CN.NOT_FOUND ||
                        t.statusCode === d.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = d.CN.NOT_FOUND),
                    e.loadingState !== h.Gu.IDLE &&
                      (e.loadingState = h.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = h.Gu.IDLE),
                (e.id = null),
                (e.meta = null),
                (e.errorStatusCode = null),
                (e.deprecationTargetArtistId = null),
                (e.lastRelease = null),
                (e.upcomingAlbum = null),
                (e.concerts = null),
                (e.artistPick = null),
                (e.popularTracks = (0, u.pj)([])),
                (e.similarArtists = (0, u.pj)([])),
                (e.playlists = (0, u.pj)([])),
                (e.albums = (0, u.pj)([])),
                (e.discography = (0, u.pj)([])),
                (e.compilations = (0, u.pj)([]));
            },
          }));
      var x = a(60325);
    },
    93438: function (e, t, a) {
      "use strict";
      a.d(t, {
        D: function () {
          return G;
        },
        _: function () {
          return v;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(98639),
        r = a(80542),
        o = a(23881),
        u = a(84338),
        d = a(90679),
        c = a(2570),
        g = a(68106),
        m = a(5293),
        S = a(48892),
        p = a(63394),
        E = a(67868),
        y = a(10929),
        h = a.n(y);
      let G = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, r.Z)(),
          { chart: t } = (0, p.oR)(),
          a = (0, p.k6)(),
          [s, y] = (0, m.zU)(),
          G = (0, p.x5)({ pageId: p.Rh.CHART });
        t.loadingState === p.Gu.IDLE && (0, n.use)(t.getTracks()),
          (0, p.NO)(t.loadingState === p.Gu.RESOLVE);
        let N = (0, n.useCallback)(
            (e) => {
              let a = t.items[e];
              return a && !t.isLoading && t.playlistMeta
                ? (0, i.jsx)(S._3, {
                    track: a,
                    playContextParams: {
                      contextData: {
                        type: u.Ak.Playlist,
                        meta: {
                          id: ""
                            .concat(t.playlistMeta.uid, ":")
                            .concat(t.playlistMeta.kind),
                        },
                        from: G,
                      },
                      queueParams: { index: e },
                      loadContextMeta: !0,
                    },
                  })
                : (0, i.jsx)(E.DX, {
                    isActive: !0,
                    className: h().shimmerItem,
                    variant: p.Lx.PLAYLIST,
                  });
            },
            [G, t.items, t.isLoading, t.playlistMeta],
          ),
          b = (0, n.useMemo)(
            () => ({
              Footer: () => (0, i.jsx)(E.$_, { className: h().footer }),
            }),
            [],
          ),
          v = (0, n.useMemo)(
            () =>
              t.title
                ? (0, i.jsx)(c.Heading, {
                    id: "collection-artists-header",
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: t.title,
                  })
                : (0, i.jsx)(d.Shimmer, {
                    className: h().shimmerTitle,
                    radius: "l",
                  }),
            [t.title],
          );
        return t.loadingState === p.Gu.REJECT
          ? (0, i.jsx)(g.D, {})
          : (0, i.jsx)(p.Lh, {
              pageId: p.Rh.CHART,
              children: (0, i.jsx)(m.I7, {
                scrollElement: s,
                ...(t.title && { outerTitle: t.title }),
                children: (0, i.jsxs)("div", {
                  className: h().root,
                  ...(0, o.BA)(o.Br.chart.CHART_PAGE),
                  children: [
                    (0, i.jsx)(E.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: a.canBack,
                      children: v,
                    }),
                    (0, i.jsx)(E.Wv, {
                      className: (0, l.W)(h().scrollContainer, h().important),
                      listClassName: h().content,
                      customComponents: b,
                      totalCount: t.items.length,
                      itemContentCallback: N,
                      debounceDurationInMs: 300,
                      handleRef: y,
                      context: {
                        listAriaLabel: e({
                          id: "entity-names.chart-tracks-list",
                        }),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
      var N = a(42288);
      let b = N.V5.model("ChartPagePlaylistModel", {
          uuid: N.V5.string,
          uid: N.V5.number,
          kind: N.V5.number,
        }),
        v = N.V5.model("ChartPageModel", {
          title: N.V5.maybeNull(N.V5.string),
          playlistMeta: N.V5.maybeNull(b),
          items: N.V5.array(S.le),
          loadingState: N.V5.enumeration(Object.values(p.Gu)),
        })
          .actions((e) => ({
            getTracks: (0, N.ls)(function* () {
              let { chartResource: t, modelActionsLogger: a } = (0, N.dU)(e);
              if (e.loadingState !== p.Gu.PENDING)
                try {
                  e.loadingState = p.Gu.PENDING;
                  let a = yield t.getChart();
                  (e.title = a.title),
                    (e.playlistMeta = (0, N.pj)({
                      uuid: a.playContext.playlistUuid,
                      uid: a.playContext.uid,
                      kind: a.playContext.kind,
                    })),
                    (e.items = (0, N.pj)(
                      a.chartPositions.map((e) =>
                        (0, S.S7)(e.track, e.chartPosition),
                      ),
                    )),
                    e.loadingState !== p.Gu.IDLE &&
                      (e.loadingState = p.Gu.RESOLVE);
                } catch (t) {
                  a.error(t),
                    e.loadingState !== p.Gu.IDLE &&
                      (e.loadingState = p.Gu.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === p.Gu.PENDING || e.loadingState === p.Gu.IDLE
              );
            },
            get isLoadingError() {
              return e.loadingState === p.Gu.REJECT;
            },
          }));
    },
    95946: function (e, t, a) {
      "use strict";
      a.d(t, {
        rT: function () {
          return l.GenreAlbumsPage;
        },
        eq: function () {
          return s.GenreArtistsPage;
        },
        a0: function () {
          return i.GenrePage;
        },
        Kx: function () {
          return h;
        },
        Fe: function () {
          return n.GenrePlaylistsPage;
        },
      });
      var i = a(5112),
        l = a(70660),
        s = a(12788),
        n = a(91477);
      a(20806);
      var r = a(42288),
        o = a(10542),
        u = a(93490),
        d = a(31579),
        c = a(33589),
        g = a(63394),
        m = a(58421);
      let S = r.V5.model("GenreAlbumsPage", {
          loadingState: r.V5.enumeration(Object.values(g.Gu)),
          pager: r.V5.maybeNull(m.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          fullTitle: r.V5.maybeNull(r.V5.string),
          items: r.V5.array(r.V5.maybeNull(u.ug)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === g.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === g.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === g.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                { metatagsResource: s, modelActionsLogger: n } = (0, r.dU)(e);
              if (
                !(
                  (e.loadingState === g.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var d;
                  (e.loadingState = g.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getMetatagAlbums({
                    id: a,
                    offset: i,
                    limit: l,
                  });
                  e.fullTitle = t.title.fullTitle;
                  let n = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let o = t.albums.map(u.ym);
                  (0, g.AG)({
                    items: e.items,
                    mappedRawItems: o,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = n),
                    (e.requests =
                      (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.RESOLVE);
                } catch (t) {
                  n.error(t),
                    t instanceof o.du &&
                      (t.statusCode === o.CN.NOT_FOUND ||
                        t.statusCode === o.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = g.Gu.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, r.pj)([]));
            },
          })),
        p = r.V5.model("GenreArtistsPage", {
          loadingState: r.V5.enumeration(Object.values(g.Gu)),
          pager: r.V5.maybeNull(m.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          fullTitle: r.V5.maybeNull(r.V5.string),
          items: r.V5.array(r.V5.maybeNull(c.Go)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === g.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === g.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return e.loadingState === g.Gu.REJECT && !this.isNotFound;
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                { metatagsResource: s, modelActionsLogger: n } = (0, r.dU)(e);
              if (
                !(
                  (e.loadingState === g.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var u;
                  (e.loadingState = g.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getMetatagArtists({
                    id: a,
                    offset: i,
                    limit: l,
                    period: "week",
                  });
                  e.fullTitle = t.title.fullTitle;
                  let n = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let o = t.artists.map((e) => (0, c.d)(e.artist));
                  (0, g.AG)({
                    items: e.items,
                    mappedRawItems: o,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = n),
                    (e.requests =
                      (null !== (u = e.requests) && void 0 !== u ? u : 0) + 1),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.RESOLVE);
                } catch (t) {
                  n.error(t),
                    t instanceof o.du &&
                      (t.statusCode === o.CN.NOT_FOUND ||
                        t.statusCode === o.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = g.Gu.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, r.pj)([]));
            },
          }));
      var E = a(12090);
      let y = r.V5.model("GenrePlaylistsPage", {
          loadingState: r.V5.enumeration(Object.values(g.Gu)),
          pager: r.V5.maybeNull(m.Vn),
          alreadyRequestedPages: r.V5.map(r.V5.number),
          pendingPages: r.V5.map(r.V5.number),
          requests: r.V5.maybeNull(r.V5.number),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          fullTitle: r.V5.maybeNull(r.V5.string),
          items: r.V5.array(r.V5.maybeNull(E.Cd)),
        })
          .views((e) => ({
            get isNotFound() {
              var t;
              let a =
                  e.loadingState === g.Gu.RESOLVE &&
                  (null === (t = e.pager) || void 0 === t
                    ? void 0
                    : t.total) === 0,
                i =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === g.Gu.REJECT && i) || a;
            },
            get isSomethingWrong() {
              return (
                !this.isNotFound &&
                e.loadingState === g.Gu.REJECT &&
                0 === e.alreadyRequestedPages.size
              );
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { metatagId: a, page: i = 0, pageSize: l = 20 } = t,
                { metatagsResource: s, modelActionsLogger: n } = (0, r.dU)(e);
              if (
                !(
                  (e.loadingState === g.Gu.PENDING &&
                    e.pendingPages.has("".concat(i))) ||
                  e.alreadyRequestedPages.has("".concat(i))
                )
              ) {
                "number" == typeof i &&
                  e.alreadyRequestedPages.set("".concat(i), i);
                try {
                  var o;
                  (e.loadingState = g.Gu.PENDING),
                    e.pendingPages.set("".concat(i), i);
                  let t = yield s.getMetatagPlaylists({
                    id: a,
                    offset: i,
                    limit: l,
                    withLikesCount: !0,
                  });
                  e.fullTitle = t.title.fullTitle;
                  let n = { page: i, perPage: l, total: t.pager.total };
                  0 === e.items.length &&
                    (e.items = (0, r.pj)(
                      Array.from({ length: n.total }, () => null),
                    ));
                  let u = t.playlists.map(E.PV);
                  (0, g.AG)({
                    items: e.items,
                    mappedRawItems: u,
                    page: i,
                    pageSize: l,
                  }),
                    (e.pager = n),
                    (e.requests =
                      (null !== (o = e.requests) && void 0 !== o ? o : 0) + 1),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.RESOLVE);
                } catch (t) {
                  n.error(t),
                    e.alreadyRequestedPages.delete("".concat(i)),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(i));
                }
              }
            }),
            reset() {
              (e.loadingState = g.Gu.IDLE),
                e.pendingPages.clear(),
                (e.pager = null),
                e.alreadyRequestedPages.clear(),
                (e.errorStatusCode = null),
                (e.items = (0, r.pj)([]));
            },
          })),
        h = r.V5.model("GenrePage", {
          id: r.V5.maybeNull(r.V5.string),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
          loadingState: r.V5.enumeration(Object.values(g.Gu)),
          fullTitle: r.V5.maybeNull(r.V5.string),
          artists: r.V5.array(c.Go),
          albums: r.V5.array(u.ug),
          playlists: r.V5.array(d.d2),
          albumsSubpage: S,
          artistsSubpage: p,
          playlistsSubpage: y,
        })
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === g.Gu.IDLE || e.loadingState === g.Gu.PENDING
              );
            },
            get hasAlbums() {
              return (
                e.loadingState === g.Gu.IDLE ||
                e.loadingState === g.Gu.PENDING ||
                e.albums.length > 0
              );
            },
            get hasArtists() {
              return (
                e.loadingState === g.Gu.IDLE ||
                e.loadingState === g.Gu.PENDING ||
                e.artists.length > 0
              );
            },
            get hasPlaylists() {
              return (
                e.loadingState === g.Gu.IDLE ||
                e.loadingState === g.Gu.PENDING ||
                e.playlists.length > 0
              );
            },
            get isNotFound() {
              let t =
                  e.loadingState === g.Gu.RESOLVE &&
                  !this.hasAlbums &&
                  !this.hasArtists &&
                  !this.hasPlaylists,
                a =
                  e.errorStatusCode === o.CN.NOT_FOUND ||
                  e.errorStatusCode === o.CN.BAD_REQUEST;
              return (e.loadingState === g.Gu.REJECT && a) || t;
            },
          }))
          .actions((e) => ({
            getData: (0, r.ls)(function* (t) {
              let { id: a } = t,
                { metatagsResource: i, modelActionsLogger: l } = (0, r.dU)(e);
              if (e.loadingState !== g.Gu.PENDING)
                try {
                  e.loadingState = g.Gu.PENDING;
                  let t = yield i.getMetatagById({ id: a });
                  (e.id = t.id),
                    (e.fullTitle = t.title.fullTitle),
                    (e.artists = (0, r.pj)(t.artists.map(c.d))),
                    (e.albums = (0, r.pj)(t.albums.map(u.ym))),
                    (e.playlists = (0, r.pj)(t.playlists.map(d.Q9))),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.RESOLVE);
                } catch (t) {
                  l.error(t),
                    t instanceof o.du &&
                      (t.statusCode === o.CN.NOT_FOUND ||
                        t.statusCode === o.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = o.CN.NOT_FOUND),
                    e.loadingState !== g.Gu.IDLE &&
                      (e.loadingState = g.Gu.REJECT);
                }
            }),
            reset() {
              (e.loadingState = g.Gu.IDLE),
                (e.fullTitle = null),
                (e.artists = (0, r.pj)([])),
                (e.albums = (0, r.pj)([])),
                (e.playlists = (0, r.pj)([]));
            },
          }));
    },
    70660: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreAlbumsPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(93490),
        g = a(5293),
        m = a(63394),
        S = a(67868),
        p = a(40489),
        E = a.n(p);
      let y = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: p } = e,
          {
            genre: { albumsSubpage: y },
          } = (0, m.oR)(),
          { formatMessage: h } = (0, o.Z)(),
          [G, N] = (0, g.zU)(),
          b = (0, m.k6)();
        p &&
          y.loadingState === m.Gu.IDLE &&
          (0, r.use)(y.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let v = (0, r.useCallback)(
          (e) => {
            p && y.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [y, p],
        );
        (0, r.useEffect)(
          () => () => {
            y.reset();
          },
          [y],
        ),
          y.isNotFound && (0, n.notFound)(),
          (0, m.NO)(y.loadingState === m.Gu.RESOLVE);
        let C = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: E().footer }) }),
          [],
        );
        return y.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh, {
              pageId: m.Rh.GENRE_ALBUMS,
              children: (0, i.jsx)(g.I7, {
                scrollElement: G,
                outerTitle: y.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: b.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(E().scrollContainer, E().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == y
                              ? void 0
                              : null === (t = y.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = h(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: h({ id: "entity-names.album" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.rf,
                              { album: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == y
                              ? void 0
                              : null === (t = y.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: v,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = y.requests) && void 0 !== s ? s : 0,
                      listClassName: E().content,
                      itemClassName: E().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: h(
                          { id: "mixes.albums-list" },
                          { genreName: y.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    12788: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreArtistsPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(87908),
        g = a(5293),
        m = a(63394),
        S = a(67868),
        p = a(6380),
        E = a.n(p);
      let y = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: p } = e,
          {
            genre: { artistsSubpage: y },
          } = (0, m.oR)(),
          { formatMessage: h } = (0, o.Z)(),
          [G, N] = (0, g.zU)(),
          b = (0, m.k6)();
        p &&
          y.loadingState === m.Gu.IDLE &&
          (0, r.use)(y.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let v = (0, r.useCallback)(
          (e) => {
            p && y.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [y, p],
        );
        (0, r.useEffect)(
          () => () => {
            y.reset();
          },
          [y],
        ),
          y.isNotFound && (0, n.notFound)(),
          (0, m.NO)(y.loadingState === m.Gu.RESOLVE);
        let C = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: E().footer }) }),
          [],
        );
        return y.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh, {
              pageId: m.Rh.GENRE_ARTISTS,
              children: (0, i.jsx)(g.I7, {
                scrollElement: G,
                outerTitle: y.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: b.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(E().scrollContainer, E().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == y
                              ? void 0
                              : null === (t = y.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = h(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: h({ id: "entity-names.artist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              c.IT,
                              { artist: a, contentLinesCount: 3 },
                              a.id,
                            )
                          : (0, i.jsx)(S.hi, {
                              "aria-label": l,
                              round: !0,
                              centered: !0,
                            });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == y
                              ? void 0
                              : null === (t = y.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: v,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = y.requests) && void 0 !== s ? s : 0,
                      listClassName: E().content,
                      itemClassName: E().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: h(
                          { id: "mixes.artists-list" },
                          { genreName: y.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    20806: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenreNotFoundPage: function () {
          return n;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(23948);
      let n = (0, l.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    5112: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePage: function () {
          return N;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(41055),
        d = a(2570),
        c = a(68106),
        g = a(93490),
        m = a(87908),
        S = a(5293),
        p = a(31579),
        E = a(63394),
        y = a(67868),
        h = a(60015),
        G = a.n(h);
      let N = (0, s.Pi)((e) => {
        let { metatagId: t } = e,
          { genre: a } = (0, E.oR)(),
          { formatMessage: s } = (0, o.Z)(),
          [h, N] = (0, S.zU)(),
          b = (0, E.k6)();
        return (t &&
          a.loadingState === E.Gu.IDLE &&
          (0, r.use)(a.getData({ id: t })),
        a.isNotFound && (0, n.notFound)(),
        (0, r.useEffect)(
          () => () => {
            a.reset();
          },
          [a],
        ),
        (0, E.NO)(a.loadingState === E.Gu.RESOLVE),
        a.loadingState !== E.Gu.REJECT || a.isNotFound)
          ? (0, i.jsx)(E.Lh, {
              pageId: E.Rh.GENRE,
              children: (0, i.jsxs)(S.I7, {
                scrollElement: h,
                outerTitle: a.fullTitle,
                children: [
                  (0, i.jsx)(y.h4, {
                    variant: "text",
                    withForwardControl: !1,
                    withBackwardControl: b.canBack,
                    children: (0, i.jsx)(d.Heading, {
                      variant: "h2",
                      weight: "bold",
                      size: "xl",
                      lineClamp: 1,
                      children: a.fullTitle,
                    }),
                  }),
                  (0, i.jsx)(u.t, {
                    className: G().root,
                    containerClassName: G().content,
                    ref: N,
                    children: (0, i.jsxs)("div", {
                      className: G().carouselBlocks,
                      children: [
                        a.hasPlaylists &&
                          (0, i.jsx)(E.J, {
                            blockId: E.BE.PLAYLISTS_CAROUSEL,
                            blockType: E.BE.PLAYLISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 1,
                            blockIdForFrom: E.BE.PLAYLISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(p.VD, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                G().carouselBlockHeader,
                                G().carouselBlock,
                              ),
                              containerClassName: G().carouselBlock,
                              playlists: a.playlists,
                              title: s({
                                id: "entity-names.popular-playlists",
                              }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/playlists",
                              ),
                            }),
                          }),
                        a.hasAlbums &&
                          (0, i.jsx)(E.J, {
                            blockId: E.BE.ALBUMS_CAROUSEL,
                            blockType: E.BE.ALBUMS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 2,
                            blockIdForFrom: E.BE.ALBUMS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(g.wk, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                G().carouselBlockHeader,
                                G().carouselBlock,
                              ),
                              containerClassName: G().carouselBlock,
                              albums: a.albums,
                              title: s({ id: "entity-names.new-albums" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/albums",
                              ),
                            }),
                          }),
                        a.hasArtists &&
                          (0, i.jsx)(E.J, {
                            blockId: E.BE.ARTISTS_CAROUSEL,
                            blockType: E.BE.ARTISTS_CAROUSEL,
                            blockPosX: 1,
                            blockPosY: 3,
                            blockIdForFrom: E.BE.ARTISTS_CAROUSEL,
                            objectsCount: a.albums.length,
                            children: (0, i.jsx)(y.HY, {
                              isShimmerVisible: a.isLoading,
                              isShimmerActive: !0,
                              headerClassName: (0, l.W)(
                                G().carouselBlockHeader,
                                G().carouselBlock,
                              ),
                              containerClassName: G().carouselBlock,
                              title: s({ id: "entity-names.popular-artists" }),
                              viewAllActionLink: "/genre/".concat(
                                a.id,
                                "/artists",
                              ),
                              children: a.artists.map((e) =>
                                (0, i.jsx)(
                                  m.IT,
                                  { artist: e, contentLinesCount: 3 },
                                  e.id,
                                ),
                              ),
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : (0, i.jsx)(c.D, {});
      });
    },
    91477: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenrePlaylistsPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(5293),
        g = a(31579),
        m = a(63394),
        S = a(67868),
        p = a(15874),
        E = a.n(p);
      let y = (0, s.Pi)((e) => {
        var t, a, s;
        let { metatagId: p } = e,
          {
            genre: { playlistsSubpage: y },
          } = (0, m.oR)(),
          { formatMessage: h } = (0, o.Z)(),
          [G, N] = (0, c.zU)(),
          b = (0, m.k6)();
        p &&
          y.loadingState === m.Gu.IDLE &&
          (0, r.use)(y.getData({ metatagId: p, page: 0, pageSize: 20 }));
        let v = (0, r.useCallback)(
          (e) => {
            p && y.getData({ metatagId: p, page: e, pageSize: 20 });
          },
          [y, p],
        );
        (0, r.useEffect)(
          () => () => {
            y.reset();
          },
          [y],
        ),
          y.isNotFound && (0, n.notFound)(),
          (0, m.NO)(y.loadingState === m.Gu.RESOLVE);
        let C = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: E().footer }) }),
          [],
        );
        return y.isSomethingWrong
          ? (0, i.jsx)(d.D, {})
          : (0, i.jsx)(m.Lh, {
              pageId: m.Rh.GENRE_PLAYLISTS,
              children: (0, i.jsx)(c.I7, {
                scrollElement: G,
                outerTitle: y.fullTitle,
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: b.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.fullTitle,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(E().scrollContainer, E().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == y
                              ? void 0
                              : null === (t = y.items) || void 0 === t
                                ? void 0
                                : t[e],
                          l = h(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: h({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              g.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == y
                              ? void 0
                              : null === (t = y.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: v,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = y.requests) && void 0 !== s ? s : 0,
                      listClassName: E().content,
                      itemClassName: E().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: h(
                          { id: "mixes.playlists-list" },
                          { genreName: y.fullTitle || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            });
      });
    },
    72636: function (e, t, a) {
      "use strict";
      a.d(t, {
        rx: function () {
          return i.GenresPage;
        },
        EU: function () {
          return o;
        },
      });
      var i = a(95002);
      a(49535);
      var l = a(42288),
        s = a(10542),
        n = a(76154),
        r = a(63394);
      let o = l.V5.model("GenresPageModel", {
        title: l.V5.maybeNull(l.V5.string),
        items: l.V5.array(n.fm),
        loadingState: l.V5.enumeration(Object.values(r.Gu)),
        errorStatusCode: l.V5.maybeNull(l.V5.number),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === r.Gu.IDLE || e.loadingState === r.Gu.PENDING
            );
          },
          get isNotFound() {
            let t = e.loadingState === r.Gu.RESOLVE && 0 === e.items.length;
            return e.errorStatusCode === s.CN.NOT_FOUND || t;
          },
        }))
        .actions((e) => ({
          getData: (0, l.ls)(function* (t) {
            let { landing3Resource: a, modelActionsLogger: i } = (0, l.dU)(e);
            if (e.loadingState !== r.Gu.PENDING)
              try {
                e.loadingState = r.Gu.PENDING;
                let i = (yield a.getMetatags({})).trees.find(
                  (e) => e.navigationId === t,
                );
                if (!i) {
                  e.errorStatusCode = s.CN.NOT_FOUND;
                  return;
                }
                (e.title = i.title),
                  (e.items = (0, l.pj)(i.leaves.map(n.uG))),
                  e.loadingState !== r.Gu.IDLE &&
                    (e.loadingState = r.Gu.RESOLVE);
              } catch (t) {
                i.error(t),
                  t instanceof s.du &&
                    (t.statusCode === s.CN.NOT_FOUND ||
                      t.statusCode === s.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                  e.loadingState !== r.Gu.IDLE &&
                    (e.loadingState = r.Gu.REJECT);
              }
          }),
          reset() {
            (e.loadingState = r.Gu.IDLE),
              (e.title = null),
              (e.items = (0, l.pj)([])),
              (e.errorStatusCode = null);
          },
        }));
    },
    49535: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresNotFoundPage: function () {
          return s;
        },
      });
      var i = a(9753),
        l = a(23948);
      let s = () => (0, i.jsx)(l.T, {});
    },
    95002: function (e, t, a) {
      "use strict";
      a.d(t, {
        GenresPage: function () {
          return E;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(74717),
        n = a(98639),
        r = a(41055),
        o = a(2570),
        u = a(68106),
        d = a(5293),
        c = a(76154),
        g = a(63394),
        m = a(67868),
        S = a(69836),
        p = a.n(S);
      let E = (0, l.Pi)((e) => {
        let { navigationId: t } = e,
          { genres: a } = (0, g.oR)(),
          [l, S] = (0, d.zU)(),
          E = (0, g.k6)();
        return ((0, n.useEffect)(
          () => () => {
            a.reset();
          },
          [a, t],
        ),
        a.isNotFound && (0, s.notFound)(),
        t && a.loadingState === g.Gu.IDLE && (0, n.use)(a.getData(t)),
        (0, g.NO)(a.loadingState === g.Gu.RESOLVE),
        a.loadingState === g.Gu.REJECT)
          ? (0, i.jsx)(u.D, {})
          : (0, i.jsxs)(d.I7, {
              scrollElement: l,
              outerTitle: a.title,
              children: [
                (0, i.jsx)(m.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: E.canBack,
                  children: (0, i.jsx)(o.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    lineClamp: 1,
                    children: a.title,
                  }),
                }),
                (0, i.jsx)(r.t, {
                  className: p().root,
                  containerClassName: p().content,
                  ref: S,
                  children: (0, i.jsx)("div", {
                    className: p().list,
                    children: a.items.map((e) =>
                      (0, i.jsx)(
                        c.mH,
                        { tag: e.tag, title: e.title, subGenres: e.subGenres },
                        e.tag,
                      ),
                    ),
                  }),
                }),
              ],
            });
      });
    },
    34790: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicNotFoundPage: function () {
          return o;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(98639),
        n = a(23948),
        r = a(63394);
      let o = (0, l.Pi)(() => {
        let { nonMusic: e } = (0, r.oR)();
        return (
          (0, s.useEffect)(
            () => () => {
              e.landing.reset();
            },
            [e.landing],
          ),
          (0, i.jsx)(n.T, {})
        );
      });
    },
    55549: function (e, t, a) {
      "use strict";
      a.d(t, {
        NonMusicPage: function () {
          return b;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(31014),
        d = a(23881),
        c = a(69869),
        g = a(41055),
        m = a(2570),
        S = a(28326),
        p = a(68106),
        E = a(5293),
        y = a(63394),
        h = a(67868),
        G = a(35857),
        N = a.n(G);
      let b = (0, s.Pi)(() => {
        let { experiments: e, nonMusic: t, user: a } = (0, y.oR)(),
          { formatMessage: s } = (0, o.Z)(),
          [G, b] = (0, E.zU)();
        e.checkExperiment(y.pe.WebNextNonMusicLanding, "on") ||
          (0, n.notFound)(),
          t.landing.loadingState === y.Gu.IDLE &&
            (0, r.use)(
              t.landing.getSkeleton(
                { id: c.jB.WEB_NON_MUSIC, showWizard: a.settings.showWizard },
                { preloadBlocks: 3 },
              ),
            ),
          (0, r.useEffect)(() => () => t.landing.reset(), [t.landing]),
          (0, y.NO)(t.landing.loadingState === y.Gu.RESOLVE);
        let v = (0, S._B)(t.landing);
        return (0, i.jsx)(y.Lh, {
          pageId: y.Rh.NON_MUSIC,
          children: (0, i.jsxs)(E.I7, {
            scrollElement: G,
            outerTitle: s({ id: "entity-names.podcasts" }),
            children: [
              (0, i.jsx)(h.h4, {
                variant: "text",
                showControls: !1,
                children: (0, i.jsx)("div", {
                  className: N().header,
                  children: (0, i.jsx)(m.Heading, {
                    variant: "h2",
                    weight: "bold",
                    size: "xl",
                    children: (0, i.jsx)(u.Z, { id: "entity-names.podcasts" }),
                  }),
                }),
              }),
              (0, i.jsxs)(g.t, {
                className: N().root,
                containerClassName: N().content,
                ref: b,
                ...(0, d.BA)(d.Br.nonMusic.NON_MUSIC_PAGE),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, l.W)(N().landing, {
                      [N().landing_onlyWizard]: v,
                    }),
                    children: (0, i.jsx)(S.Od, {
                      landing: t.landing,
                      errorComponent: (0, i.jsx)(p.D, {
                        className: N().error,
                        withBackwardControl: !1,
                      }),
                    }),
                  }),
                  (0, i.jsx)(h.$_, { className: N().footer }),
                ],
              }),
            ],
          }),
        });
      });
    },
    23976: function (e, t, a) {
      "use strict";
      a.d(t, {
        s6: function () {
          return i.PostPage;
        },
        vU: function () {
          return g;
        },
      });
      var i = a(18211);
      a(45833);
      var l = a(42288),
        s = a(10542),
        n = a(99287),
        r = a(93490),
        o = a(31579),
        u = a(33589),
        d = a(12090),
        c = a(63394);
      let g = l.V5.model("PostPage", {
        errorStatusCode: l.V5.maybe(l.V5.number),
        loadingState: l.V5.enumeration(Object.values(c.Gu)),
        title: l.V5.maybeNull(l.V5.string),
        promotionType: l.V5.maybeNull(l.V5.enumeration(Object.values(n.qe))),
        artists: l.V5.maybe(l.V5.array(u.Go)),
        albums: l.V5.maybe(l.V5.array(r.ug)),
        playlists: l.V5.maybe(l.V5.array(o.d2)),
      })
        .views((e) => ({
          get isLoading() {
            return (
              e.loadingState === c.Gu.IDLE || e.loadingState === c.Gu.PENDING
            );
          },
          get isNotFound() {
            let t =
              e.errorStatusCode === s.CN.NOT_FOUND ||
              e.errorStatusCode === s.CN.BAD_REQUEST;
            return e.loadingState === c.Gu.REJECT && t;
          },
          get isSomethingWrong() {
            return e.loadingState === c.Gu.REJECT && !this.isNotFound;
          },
        }))
        .actions((e) => ({
          getData: (0, l.ls)(function* (t) {
            let { promoId: a } = t,
              { feedResource: i, modelActionsLogger: n } = (0, l.dU)(e);
            if (e.loadingState !== c.Gu.PENDING)
              try {
                e.loadingState = c.Gu.PENDING;
                let t = yield i.getPromotionsById({ promoId: a });
                (e.title = t.title),
                  (e.promotionType = t.promotionType),
                  t.artists &&
                    t.artists.length > 0 &&
                    (e.artists = (0, l.pj)(t.artists.map(u.d))),
                  t.albums &&
                    t.albums.length > 0 &&
                    (e.albums = (0, l.pj)(t.albums.map(r.ym))),
                  t.playlists &&
                    t.playlists.length > 0 &&
                    (e.playlists = (0, l.pj)(
                      t.playlists.map((e) => {
                        let { playlist: t } = e;
                        return (0, d.PV)(t);
                      }),
                    )),
                  e.loadingState !== c.Gu.IDLE &&
                    (e.loadingState = c.Gu.RESOLVE);
              } catch (t) {
                n.error(t),
                  t instanceof s.du &&
                    (t.statusCode === s.CN.NOT_FOUND ||
                      t.statusCode === s.CN.BAD_REQUEST) &&
                    (e.errorStatusCode = s.CN.NOT_FOUND),
                  e.loadingState !== c.Gu.IDLE &&
                    (e.loadingState = c.Gu.REJECT);
              }
          }),
          reset() {
            (e.loadingState = c.Gu.IDLE),
              (e.title = null),
              (e.artists = (0, l.pj)([])),
              (e.albums = (0, l.pj)([]));
          },
        }));
    },
    45833: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostNotFoundPage: function () {
          return n;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(23948);
      let n = (0, l.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    18211: function (e, t, a) {
      "use strict";
      a.d(t, {
        PostPage: function () {
          return A;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(74717),
        n = a(98639),
        r = a(69869),
        o = a(41055),
        u = a(90679),
        d = a(2570),
        c = a(68106),
        g = a(5293),
        m = a(63394),
        S = a(67868),
        p = a(41949),
        E = a.n(p);
      let y = () =>
        (0, i.jsxs)("div", {
          className: E().root,
          children: [
            (0, i.jsx)(u.Shimmer, { radius: "l", className: E().top }),
            (0, i.jsx)(u.Shimmer, { radius: "l", className: E().bottom }),
          ],
        });
      var h = a(90978),
        G = a.n(h),
        N = a(93490),
        b = a(12903),
        v = a.n(b);
      let C = (0, l.Pi)((e) => {
        let { albums: t = [] } = e;
        return (0, i.jsx)("div", {
          className: v().root,
          children: (0, i.jsx)("div", {
            className: v().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                N.rf,
                { className: v().item, album: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var L = a(87908),
        P = a(13209),
        f = a.n(P);
      let V = (0, l.Pi)((e) => {
        let { artists: t = [] } = e;
        return (0, i.jsx)("div", {
          className: f().root,
          children: (0, i.jsx)("div", {
            className: f().content,
            "aria-labelledby": "post-page-header",
            tabIndex: 0,
            children: t.map((e) =>
              (0, i.jsx)(
                L.IT,
                { className: f().item, artist: e, contentLinesCount: 3 },
                e.id,
              ),
            ),
          }),
        });
      });
      var _ = a(31579),
        I = a(39679),
        D = a.n(I);
      let T = (0, l.Pi)((e) => {
          let { playlists: t = [] } = e;
          return (0, i.jsx)("div", {
            className: D().root,
            children: (0, i.jsx)("div", {
              className: D().content,
              "aria-labelledby": "post-page-header",
              tabIndex: 0,
              children: t.map((e) =>
                (0, i.jsx)(
                  _.ZL,
                  { className: D().item, playlist: e, contentLinesCount: 3 },
                  e.id,
                ),
              ),
            }),
          });
        }),
        A = (0, l.Pi)((e) => {
          let { promoId: t } = e,
            { post: a } = (0, m.oR)(),
            l = (0, m.k6)(),
            [p, E] = (0, g.zU)();
          if (
            (t &&
              a.loadingState === m.Gu.IDLE &&
              (0, n.use)(a.getData({ promoId: t })),
            (0, n.useEffect)(
              () => () => {
                a.reset();
              },
              [a],
            ),
            a.isNotFound && (0, s.notFound)(),
            (0, m.NO)(a.loadingState === m.Gu.RESOLVE),
            a.isSomethingWrong)
          )
            return (0, i.jsx)(c.D, {});
          let h = (0, n.useMemo)(() => {
            if (a.isLoading) return (0, i.jsx)(y, {});
            switch (a.promotionType) {
              case r.qe.ARTISTS:
                return (0, i.jsx)(V, { artists: a.artists });
              case r.qe.ALBUMS:
                return (0, i.jsx)(C, { albums: a.albums });
              case r.qe.PLAYLISTS:
                return (0, i.jsx)(T, { playlists: a.playlists });
              default:
                (0, s.notFound)();
            }
          }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
          return (0, i.jsx)(m.Lh, {
            pageId: m.Rh.POST,
            children: (0, i.jsxs)(g.I7, {
              scrollElement: p,
              outerTitle: a.title || void 0,
              children: [
                (0, i.jsx)(S.h4, {
                  variant: "text",
                  withForwardControl: !1,
                  withBackwardControl: l.canBack,
                  children: a.title
                    ? (0, i.jsx)(d.Heading, {
                        id: "post-header",
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: a.title,
                      })
                    : (0, i.jsx)(u.Shimmer, {
                        className: G().shimmerTitle,
                        radius: "l",
                      }),
                }),
                (0, i.jsx)(o.t, {
                  className: G().scrollableContainer,
                  ref: E,
                  children: (0, i.jsx)("div", {
                    className: G().container,
                    children: h,
                  }),
                }),
              ],
            }),
          });
        });
    },
    17777: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchHistoryPage: function () {
          return h;
        },
      });
      var i = a(9753),
        l = a(98780),
        s = a(9544),
        n = a(98639),
        r = a(80542),
        o = a(31014),
        u = a(23881),
        d = a(39513),
        c = a(28852),
        g = a(41055),
        m = a(2570),
        S = a(23194),
        p = a(63394),
        E = a(15739),
        y = a.n(E);
      let h = (0, s.Pi)(() => {
        var e;
        let t = (0, p.uK)().get(p.U5),
          { search: a, user: s, settings: E, experiments: h } = (0, p.oR)(),
          { formatMessage: G } = (0, r.Z)(),
          N = (0, p.k6)(),
          b = (0, n.useRef)(!1),
          v = (0, n.useRef)(null),
          C = (0, S.vy)(() => {
            b.current = !0;
          }),
          L = E.layout === p.t8.Mobile,
          P = a.history.items.length;
        a.isHistoryReady &&
          (null === (e = s.account) || void 0 === e ? void 0 : e.uid) &&
          (0, n.use)(
            a.getHistory({ userId: s.account.uid, config: t, experiments: h }),
          ),
          (0, n.useEffect)(() => {
            v.current && N.canBack && v.current.focus();
          }, [N.canBack]),
          (0, n.useEffect)(
            () => () => {
              (null == b ? void 0 : b.current)
                ? (a.resetHistoryItems(), (b.current = !1))
                : a.resetHistoryStateRequest();
            },
            [a],
          );
        let f = (0, n.useMemo)(
            () =>
              (0, l.Z)(() => {
                null == N || N.back();
              }, 200),
            [N],
          ),
          V = (0, n.useMemo)(
            () =>
              P
                ? (0, i.jsx)("div", {
                    className: y().items,
                    children: a.history.items.map(S.Fu).filter((e) => !!e),
                  })
                : (0, i.jsx)(m.Caption, {
                    className: y().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, i.jsx)(o.Z, { id: "search.history-empty" }),
                  }),
            [a.history.items, P],
          );
        return (0, i.jsx)("div", {
          className: y().root,
          ...(0, u.BA)(u.Br.search.SEARCH_HISTORY_PAGE),
          children: (0, i.jsxs)(g.t, {
            className: y().scrollContent,
            containerClassName: y().scrollContainer,
            children: [
              (0, i.jsxs)("div", {
                className: y().header,
                children: [
                  (0, i.jsxs)("div", {
                    className: y().title,
                    children: [
                      N.canBack &&
                        (0, i.jsx)(d.z, {
                          ref: v,
                          "aria-label": G({ id: "navigation.go-back" }),
                          radius: "round",
                          disabled: !N.canBack,
                          size: "s",
                          icon: (0, i.jsx)(c.J, {
                            size: "xxs",
                            variant: "arrowLeft",
                          }),
                          onClick: f,
                        }),
                      (0, i.jsx)(m.Heading, {
                        variant: "h2",
                        size: L ? "m" : "xl",
                        children: (0, i.jsx)(o.Z, { id: "search.history" }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(d.z, {
                    "aria-label": G({ id: "search.clear-history" }),
                    radius: "xxxl",
                    variant: "outline",
                    disabled: !P,
                    size: L ? "s" : "default",
                    onClick: C,
                    children: (0, i.jsx)(m.Caption, {
                      variant: "span",
                      size: "m",
                      type: "text",
                      children: (0, i.jsx)(o.Z, { id: "search.clear-history" }),
                    }),
                  }),
                ],
              }),
              !a.isHistoryLoading && V,
            ],
          }),
        });
      });
    },
    46044: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchPage: function () {
          return v;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(98780),
        n = a(9544),
        r = a(74717),
        o = a(98639),
        u = a(80542),
        d = a(23881),
        c = a(69869),
        g = a(41055),
        m = a(54950),
        S = a(14102),
        p = a(21901),
        E = a(23194),
        y = a(63394),
        h = a(67868);
      let G = [
        c.ay.TOP,
        c.ay.TRACK,
        c.ay.ALBUM,
        c.ay.ARTIST,
        c.ay.PLAYLIST,
        c.ay.PODCAST,
      ];
      var N = a(77722),
        b = a.n(N);
      let v = (0, n.Pi)(() => {
        let e = (0, S.useTabsState)(0),
          [t, a] = (0, o.useState)(c.ay.TOP),
          [n, N] = (0, o.useState)(!1),
          { formatMessage: v } = (0, u.Z)(),
          { search: C, experiments: L } = (0, y.oR)(),
          P = (0, y.uK)().get(y.U5),
          f = (0, y.RV)(),
          V = G.filter((e) => {
            if (
              e !== c.ay.PODCAST ||
              f ||
              L.checkExperiment(y.pe.WebNextPodcastSearch, "on")
            )
              return e;
          });
        L.checkExperiment(y.pe.WebNextDisableSearch, "on") &&
          (0, r.redirect)("/");
        let [_, I] = (0, o.useState)(""),
          D = _.length > 0;
        (0, o.useEffect)(
          () => () => {
            C.reset();
          },
          [C],
        );
        let T = (0, o.useCallback)(
            (e, t) => {
              C.resetResults(),
                0 !== e.length &&
                  C.getSearchResults({
                    text: decodeURIComponent(e),
                    filter: t,
                    config: P,
                    experiments: L,
                  });
            },
            [C, P, L],
          ),
          A = (0, o.useCallback)(
            (e) => {
              let a = encodeURIComponent(e.trim());
              I(a), T(a, t), C.resetSearchCorrectedText(), N(!1);
            },
            [C, T, t, N],
          ),
          R = (0, o.useCallback)(() => {
            N(!0);
          }, [N]),
          x = (0, o.useMemo)(
            () =>
              (0, s.Z)((t) => {
                var i;
                if (!e.onTabChange || t === e.value) return;
                e.onTabChange(t);
                let l = null !== (i = G[t]) && void 0 !== i ? i : c.ay.TOP;
                a(l), T(_, l);
              }, 300),
            [T, _, e],
          ),
          k = (0, o.useMemo)(
            () => (e) => {
              let {
                id: t,
                type: a,
                blockPosition: i,
                position: l,
                feedbackType: s,
              } = e;
              C.sendFeedback({
                blockType: a,
                entityId: "".concat(a, ":").concat(t),
                timestamp: new Date().toISOString(),
                searchRequestId: C.searchRequestId,
                query: _,
                clickType: s,
                blockPosition: i,
                position: l,
                page: 0,
              });
            },
            [C, _],
          ),
          j = (0, o.useMemo)(
            () =>
              C.searchCorrectedText
                ? (0, i.jsx)(E.gK, {
                    searchCorrectedText: C.searchCorrectedText,
                    onCorrectText: R,
                  })
                : null,
            [R, C.searchCorrectedText],
          ),
          O = (0, o.useMemo)(() => {
            if (!C.isLoading && 0 === C.results.length)
              return (0, i.jsx)(E.hF, { searchCorrectedText: j });
            switch (t) {
              case c.ay.TOP:
                return (0, i.jsx)(E.Id, {
                  className: b().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  sendSearchFeedback: k,
                  searchCorrectedText: j,
                });
              case c.ay.TRACK:
                return (0, i.jsx)(E.XM, {
                  className: b().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  sendSearchFeedback: k,
                  searchCorrectedText: j,
                });
              case c.ay.ALBUM:
                return (0, i.jsx)(E.xz, {
                  className: b().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  filter: c.ay.ALBUM,
                  sendSearchFeedback: k,
                  searchCorrectedText: j,
                });
              case c.ay.PLAYLIST:
                return (0, i.jsx)(E.xz, {
                  className: b().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  filter: c.ay.PLAYLIST,
                  sendSearchFeedback: k,
                  searchCorrectedText: j,
                });
              case c.ay.ARTIST:
                return (0, i.jsx)(E.xz, {
                  className: b().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  filter: c.ay.ARTIST,
                  sendSearchFeedback: k,
                  searchCorrectedText: j,
                });
              case c.ay.PODCAST:
                return (0, i.jsx)(E.R_, {
                  className: b().searchResults,
                  isLoading: C.isLoading,
                  results: C.results,
                  sendSearchFeedback: k,
                  searchCorrectedText: j,
                });
              default:
                return j;
            }
          }, [C.isLoading, C.results, t, k, j]),
          U = (0, o.useMemo)(
            () =>
              _.length > 0
                ? O
                : (0, i.jsxs)(g.t, {
                    className: b().scrollableContent,
                    containerClassName: b().main,
                    children: [
                      (0, i.jsx)(o.Suspense, {
                        children: (0, i.jsx)(y.J, {
                          blockId: y.BE.SEARCH_HISTORY,
                          blockType: y.BE.SEARCH_HISTORY,
                          blockPosX: 1,
                          blockPosY: 1,
                          blockIdForFrom: y.BE.SEARCH_HISTORY,
                          objectsCount: C.history.items.length,
                          children: (0, i.jsx)(E.y9, {}),
                        }),
                      }),
                      (0, i.jsx)(o.Suspense, {
                        children: (0, i.jsx)(p.JG, {}),
                      }),
                      (0, i.jsx)(h.$_, { className: b().footer }),
                    ],
                  }),
            [_.length, O, C.history.items.length],
          ),
          B = (0, o.useMemo)(
            () => ({
              top: v({ id: "search-filters.top" }),
              track: v({ id: "search-filters.track" }),
              album: v({ id: "search-filters.album" }),
              artist: v({ id: "search-filters.artist" }),
              playlist: v({ id: "search-filters.playlist" }),
              podcast: v({ id: "search-filters.podcast" }),
            }),
            [v],
          );
        return (0, i.jsx)(y.Lh, {
          pageId: y.Rh.SEARCH,
          children: (0, i.jsxs)("div", {
            className: (0, l.W)(b().root, { [b().root_showFilters]: D }),
            ...(0, d.BA)(d.Br.search.SEARCH_PAGE),
            children: [
              (0, i.jsxs)("div", {
                className: b().header,
                children: [
                  (0, i.jsx)(m.M, {
                    className: b().input,
                    autoFocus: !0,
                    initialValue: _,
                    placeholder: v({ id: "search.input-placeholder" }),
                    onChange: A,
                    resetButtonAriaLabel: v({
                      id: "interface-actions.reset-search-input",
                    }),
                    correctedValue: n ? C.searchCorrectedText : null,
                  }),
                  D &&
                    (0, i.jsx)(h.no, {
                      className: b().tabCarousel,
                      ...e,
                      onTabChange: x,
                      children: V.map((t, a) =>
                        (0, i.jsx)(
                          h.OK,
                          {
                            className: (0, l.W)(b().filter, {
                              [b().filter_selected]: a === e.value,
                            }),
                            title: B[t],
                            value: a,
                          },
                          a,
                        ),
                      ),
                    }),
                ],
              }),
              (0, i.jsx)("div", { className: b().content, children: U }),
            ],
          }),
        });
      });
    },
    20070: function (e, t, a) {
      "use strict";
      a.d(t, {
        uj: function () {
          return i.TagPage;
        },
        tS: function () {
          return u;
        },
      });
      var i = a(42751);
      a(29223);
      var l = a(42288),
        s = a(10542),
        n = a(12090),
        r = a(63394),
        o = a(58421);
      let u = l.V5.model("TagPage", {
        title: l.V5.maybe(l.V5.string),
        errorStatusCode: l.V5.maybeNull(l.V5.number),
        tagLoadingState: l.V5.enumeration(Object.values(r.Gu)),
        playlistsLoadingState: l.V5.enumeration(Object.values(r.Gu)),
        playlistsData: l.V5.array(
          l.V5.model({ uid: l.V5.number, kind: l.V5.number }),
        ),
        playlists: l.V5.array(l.V5.maybeNull(n.Cd)),
        pager: l.V5.maybeNull(o.Vn),
        alreadyRequestedPages: l.V5.map(l.V5.number),
        pendingPages: l.V5.map(l.V5.number),
        requests: l.V5.maybeNull(l.V5.number),
      })
        .views((e) => ({
          get isNotFound() {
            let t =
              e.playlistsLoadingState === r.Gu.RESOLVE &&
              0 === e.playlists.length;
            return (
              ((e.tagLoadingState === r.Gu.REJECT ||
                e.playlistsLoadingState === r.Gu.REJECT) &&
                (e.errorStatusCode === s.CN.NOT_FOUND ||
                  e.errorStatusCode === s.CN.BAD_REQUEST)) ||
              t
            );
          },
        }))
        .actions((e) => {
          let t = {
            getPlaylists: (0, l.ls)(function* (t) {
              let { page: a = 0, pageSize: i = 20 } = t,
                { playlistsResource: o, modelActionsLogger: u } = (0, l.dU)(e);
              if (
                !(
                  e.tagLoadingState !== r.Gu.RESOLVE ||
                  (e.playlistsLoadingState === r.Gu.PENDING &&
                    e.pendingPages.has("".concat(a))) ||
                  e.alreadyRequestedPages.has("".concat(a))
                )
              ) {
                e.alreadyRequestedPages.set("".concat(a), a);
                try {
                  var d;
                  (e.playlistsLoadingState = r.Gu.PENDING),
                    e.pendingPages.set("".concat(a), a);
                  let t = a * i,
                    s = e.playlistsData.slice(t, t + i),
                    u = yield o.getPlaylists({
                      playlistIds: s.map((e) =>
                        "".concat(e.uid, ":").concat(e.kind),
                      ),
                      resumeStream: !1,
                    });
                  e.requests =
                    (null !== (d = e.requests) && void 0 !== d ? d : 0) + 1;
                  let c = {
                    page: a,
                    perPage: i,
                    total: e.playlistsData.length,
                  };
                  0 === e.playlists.length &&
                    (e.playlists = (0, l.pj)(
                      Array.from({ length: c.total }, () => null),
                    ));
                  let g = u.playlists.map(n.PV);
                  (0, r.AG)({
                    items: e.playlists,
                    mappedRawItems: g,
                    page: a,
                    pageSize: i,
                  }),
                    (e.pager = c),
                    e.playlistsLoadingState !== r.Gu.IDLE &&
                      (e.playlistsLoadingState = r.Gu.RESOLVE);
                } catch (t) {
                  u.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.playlistsLoadingState !== r.Gu.IDLE &&
                      (e.playlistsLoadingState = r.Gu.REJECT);
                } finally {
                  e.pendingPages.delete("".concat(a));
                }
              }
            }),
            reset() {
              (e.tagLoadingState = r.Gu.IDLE),
                (e.playlistsLoadingState = r.Gu.IDLE),
                e.alreadyRequestedPages.clear(),
                e.pendingPages.clear(),
                (e.title = void 0),
                (e.playlistsData = (0, l.pj)([])),
                (e.playlists = (0, l.pj)([])),
                (e.errorStatusCode = null);
            },
            getTag: (0, l.ls)(function* (a) {
              let { id: i, page: n = 0, pageSize: o = 20 } = a,
                { tagResource: u, modelActionsLogger: d } = (0, l.dU)(e);
              if (e.tagLoadingState !== r.Gu.PENDING)
                try {
                  var c;
                  e.tagLoadingState = r.Gu.PENDING;
                  let a = yield u.getPlaylistIds({ id: i });
                  (e.title =
                    null === (c = a.tag) || void 0 === c ? void 0 : c.name),
                    (e.playlistsData = (0, l.pj)(
                      a.ids.map((e) => ({ uid: e.uid, kind: e.kind })),
                    )),
                    e.tagLoadingState !== r.Gu.IDLE &&
                      (e.tagLoadingState = r.Gu.RESOLVE),
                    yield t.getPlaylists({ page: n, pageSize: o });
                } catch (t) {
                  d.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.tagLoadingState !== r.Gu.IDLE &&
                      (e.tagLoadingState = r.Gu.REJECT);
                }
            }),
          };
          return t;
        });
    },
    29223: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagNotFoundPage: function () {
          return n;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(23948);
      let n = (0, l.Pi)(() => (0, i.jsx)(s.T, {}));
    },
    42751: function (e, t, a) {
      "use strict";
      a.d(t, {
        TagPage: function () {
          return y;
        },
      });
      var i = a(9753),
        l = a(60836),
        s = a(9544),
        n = a(74717),
        r = a(98639),
        o = a(80542),
        u = a(2570),
        d = a(68106),
        c = a(5293),
        g = a(31579),
        m = a(63394),
        S = a(67868),
        p = a(91631),
        E = a.n(p);
      let y = (0, s.Pi)((e) => {
        var t, a, s;
        let { tagId: p } = e,
          { tag: y } = (0, m.oR)(),
          { formatMessage: h } = (0, o.Z)(),
          [G, N] = (0, c.zU)(),
          b = (0, m.k6)();
        p || (0, n.notFound)();
        let v = (0, r.useCallback)(
          (e) => {
            y.getPlaylists({ page: e, pageSize: 20 });
          },
          [y],
        );
        y.tagLoadingState === m.Gu.IDLE &&
          (0, r.use)(y.getTag({ id: p, page: 0, pageSize: 20 })),
          y.isNotFound && (0, n.notFound)(),
          (0, r.useEffect)(
            () => () => {
              y.reset();
            },
            [y],
          );
        let C = (0, r.useMemo)(
          () => ({ Footer: () => (0, i.jsx)(S.$_, { className: E().footer }) }),
          [],
        );
        return ((0, m.NO)(
          y.tagLoadingState === m.Gu.RESOLVE &&
            y.playlistsLoadingState === m.Gu.RESOLVE,
        ),
        (y.tagLoadingState !== m.Gu.REJECT &&
          y.playlistsLoadingState !== m.Gu.REJECT) ||
          y.isNotFound)
          ? (0, i.jsx)(m.Lh, {
              pageId: m.Rh.TAG,
              children: (0, i.jsx)(c.I7, {
                scrollElement: G,
                outerTitle: y.title,
                children: (0, i.jsxs)("div", {
                  className: E().root,
                  children: [
                    (0, i.jsx)(S.h4, {
                      variant: "text",
                      withForwardControl: !1,
                      withBackwardControl: b.canBack,
                      children: (0, i.jsx)(u.Heading, {
                        variant: "h2",
                        weight: "bold",
                        size: "xl",
                        lineClamp: 1,
                        children: y.title,
                      }),
                    }),
                    (0, i.jsx)(S.Wv, {
                      className: (0, l.W)(E().scrollContainer, E().important),
                      customComponents: C,
                      itemContentCallback: (e) => {
                        var t;
                        let a =
                            null == y
                              ? void 0
                              : null === (t = y.playlists) || void 0 === t
                                ? void 0
                                : t[e],
                          l = h(
                            { id: "loading-messages.entity-is-loading" },
                            { entityName: h({ id: "entity-names.playlist" }) },
                          );
                        return a
                          ? (0, i.jsx)(
                              g.ZL,
                              { playlist: a, contentLinesCount: 3 },
                              a.key,
                            )
                          : (0, i.jsx)(S.hi, { "aria-label": l });
                      },
                      totalCount:
                        null !==
                          (a =
                            null == y
                              ? void 0
                              : null === (t = y.pager) || void 0 === t
                                ? void 0
                                : t.total) && void 0 !== a
                          ? a
                          : 0,
                      onGetDataByPage: v,
                      pageSize: 20,
                      totalRequests:
                        null !== (s = y.requests) && void 0 !== s ? s : 0,
                      listClassName: E().content,
                      itemClassName: E().item,
                      handleRef: N,
                      context: {
                        listAriaLabel: h(
                          { id: "mixes.albums-list" },
                          { genreName: y.title || "" },
                        ),
                      },
                    }),
                  ],
                }),
              }),
            })
          : (0, i.jsx)(d.D, {});
      });
    },
    21901: function (e, t, a) {
      "use strict";
      a.d(t, {
        JG: function () {
          return i.Mixes;
        },
        RB: function () {
          return l.MixesGrid;
        },
        ZP: function () {
          return c;
        },
      });
      var i = a(8564),
        l = a(54140),
        s = a(42288),
        n = a(10542),
        r = a(69869),
        o = a(48606),
        u = a(63394);
      let d = (e) => ({
          items: (0, s.pj)(e.items.map((e) => (0, o.Fh)(e.data))),
        }),
        c = s.V5.model("Mixes", {
          loadingState: s.V5.enumeration(Object.values(u.Gu)),
          items: s.V5.array(o.zn),
          errorStatusCode: s.V5.maybeNull(s.V5.number),
        })
          .actions((e) => ({
            getMixes: (0, s.ls)(function* (t) {
              let { landingResource: a, modelActionsLogger: i } = (0, s.dU)(e);
              if (e.loadingState !== u.Gu.PENDING)
                try {
                  e.loadingState = u.Gu.PENDING;
                  let i = yield a.getBlock(
                    { uri: "/landing/block/mixes", fullList: t },
                    r.gQ.MIXES,
                  );
                  (e.items = d(i).items), (e.loadingState = u.Gu.RESOLVE);
                } catch (t) {
                  i.error(t),
                    t instanceof n.du &&
                      (t.statusCode === n.CN.NOT_FOUND ||
                        t.statusCode === n.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = n.CN.NOT_FOUND),
                    e.loadingState !== u.Gu.IDLE &&
                      (e.loadingState = u.Gu.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === u.Gu.IDLE || e.loadingState === u.Gu.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === u.Gu.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === u.Gu.RESOLVE && 0 === e.items.length;
              return e.errorStatusCode === n.CN.NOT_FOUND || t;
            },
          }));
    },
    8564: function (e, t, a) {
      "use strict";
      a.d(t, {
        Mixes: function () {
          return p;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(98639),
        n = a(63394),
        r = a(80542),
        o = a(5993),
        u = a(48606),
        d = a(67868),
        c = a(66051),
        g = a.n(c);
      let m = (0, l.Pi)((e) => {
        let { isShimmerVisible: t, isShimmerActive: a, mixes: l } = e,
          { formatMessage: n } = (0, r.Z)(),
          c = (0, s.useMemo)(
            () =>
              t
                ? (0, d.Cl)({ isActive: a, withInfo: !1 })
                : l.map((e) =>
                    (0, i.jsx)(
                      u.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        coverSize: 80,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, l],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.ti, {
              className: g().carouselHeader,
              title: n({ id: "entity-names.mixes" }),
              titleSize: "xs",
              viewAllActionLink: "/mixes",
            }),
            (0, i.jsx)(o.l, {
              containerClassName: g().carouselBlock,
              itemClassName: g().mixItem,
              children: c,
            }),
          ],
        });
      });
      var S = a(54140);
      let p = (0, l.Pi)(() => {
        let { settings: e, search: t } = (0, n.oR)(),
          a = e.layout === n.t8.Mobile;
        return (t.mixes.loadingState === n.Gu.IDLE &&
          (0, s.use)(t.mixes.getMixes(!1)),
        a)
          ? (0, i.jsx)(m, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
            })
          : (0, i.jsx)(S.MixesGrid, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
              withTitle: !0,
            });
      });
    },
    54140: function (e, t, a) {
      "use strict";
      a.d(t, {
        MixesGrid: function () {
          return g;
        },
      });
      var i = a(9753),
        l = a(9544),
        s = a(98639),
        n = a(31014),
        r = a(2570),
        o = a(48606),
        u = a(67868),
        d = a(8104),
        c = a.n(d);
      let g = (0, l.Pi)((e) => {
        let {
            isShimmerVisible: t,
            isShimmerActive: a,
            withTitle: l,
            mixes: d,
            shimmerCount: g = 5,
          } = e,
          m = (0, s.useMemo)(
            () =>
              t
                ? (0, i.jsx)(u.Wm, {
                    isActive: a,
                    round: !1,
                    centered: !1,
                    withInfo: !1,
                    count: g,
                  })
                : d.map((e) =>
                    (0, i.jsx)(
                      o.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, d, g],
          );
        return (0, i.jsxs)("div", {
          children: [
            l &&
              (0, i.jsx)(r.Heading, {
                className: c().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                children: (0, i.jsx)(n.Z, { id: "entity-names.mixes" }),
              }),
            (0, i.jsx)("div", { className: c().mixesGrid, children: m }),
          ],
        });
      });
    },
    78914: function (e) {
      e.exports = {
        root: "Genre_root__80dlk",
        link: "Genre_link__Wewaq",
        linkTitle: "Genre_linkTitle__ORAsw",
        list: "Genre_list__C2Pxf",
      };
    },
    98746: function (e) {
      e.exports = {
        root: "EmptyPlaylistBlock_root__wpA0j",
        iconBackground: "EmptyPlaylistBlock_iconBackground__pnUlz",
        title: "EmptyPlaylistBlock_title__pQQLf",
        subtitle: "EmptyPlaylistBlock_subtitle__P4Q7x",
      };
    },
    88308: function (e) {
      e.exports = {
        root: "PlaylistCard_root__i3pR4",
        controls: "PlaylistCard_controls__Ej8Rz",
        cover: "PlaylistCard_cover__tpK5L",
        coverBlock: "PlaylistCard_coverBlock__1slsN",
        image: "PlaylistCard_image__Li6oy",
        titleLink: "PlaylistCard_titleLink__H8qEc",
        artists: "PlaylistCard_artists__HtVIF",
        artistLink: "PlaylistCard_artistLink__jx3KB",
        playButton: "PlaylistCard_playButton__eaduk",
        likeButton: "PlaylistCard_likeButton__RYXJz",
        menuButton: "PlaylistCard_menuButton__jFcWr",
        pinButton: "PlaylistCard_pinButton__jhWnL",
        control: "PlaylistCard_control__73YUq",
      };
    },
    10929: function (e) {
      e.exports = {
        root: "ChartPage_root__JwQua",
        container: "ChartPage_container__mdNLA",
        scrollContent: "ChartPage_scrollContent__Hz3LW",
        scrollContainer: "ChartPage_scrollContainer__VJzA3",
        important: "ChartPage_important__HCgQ4",
        content: "ChartPage_content__adrCP",
        footer: "ChartPage_footer__JyfRg",
        shimmerItem: "ChartPage_shimmerItem__n3Z_s",
      };
    },
    40489: function (e) {
      e.exports = {
        root: "GenreAlbumsPage_root__r_Sts",
        scrollContent: "GenreAlbumsPage_scrollContent__sBMMq",
        scrollContainer: "GenreAlbumsPage_scrollContainer__K_v_b",
        important: "GenreAlbumsPage_important__r3P2T",
        footer: "GenreAlbumsPage_footer__vmCiR",
        item: "GenreAlbumsPage_item__zRzB0",
        content: "GenreAlbumsPage_content__PRJUm",
      };
    },
    6380: function (e) {
      e.exports = {
        root: "GenreArtistsPage_root__PgtIz",
        scrollContent: "GenreArtistsPage_scrollContent__fDonT",
        scrollContainer: "GenreArtistsPage_scrollContainer__s_HLR",
        important: "GenreArtistsPage_important__YxR3i",
        footer: "GenreArtistsPage_footer__fYaCO",
        item: "GenreArtistsPage_item__OX8zl",
        content: "GenreArtistsPage_content__cz47x",
      };
    },
    60015: function (e) {
      e.exports = {
        root: "GenrePage_root___kL_v",
        content: "GenrePage_content__NRwAJ",
        shimmerTitle: "GenrePage_shimmerTitle__hrgjK",
        carouselBlocks: "GenrePage_carouselBlocks__kR63B",
        carouselBlock: "GenrePage_carouselBlock__QCkpK",
        carouselBlockHeader: "GenrePage_carouselBlockHeader__u12sn",
      };
    },
    15874: function (e) {
      e.exports = {
        root: "GenrePlaylistsPage_root__WZwkl",
        scrollContent: "GenrePlaylistsPage_scrollContent__rahSG",
        scrollContainer: "GenrePlaylistsPage_scrollContainer__N3BZw",
        important: "GenrePlaylistsPage_important__986BX",
        footer: "GenrePlaylistsPage_footer__aMDul",
        item: "GenrePlaylistsPage_item__tUsqJ",
        content: "GenrePlaylistsPage_content__2rKJY",
      };
    },
    69836: function (e) {
      e.exports = {
        root: "GenresPage_root__LhP_S",
        shimmerTitle: "GenresPage_shimmerTitle__4j8uH",
        content: "GenresPage_content__yhKrQ",
        list: "GenresPage_list__l2Cuc",
      };
    },
    35857: function (e) {
      e.exports = {
        root: "NonMusicPage_root__IPKkH",
        content: "NonMusicPage_content__7_TYy",
        header: "NonMusicPage_header__dijgk",
        landing: "NonMusicPage_landing__kGKTh",
        landing_onlyWizard: "NonMusicPage_landing_onlyWizard__P9nN3",
        footer: "NonMusicPage_footer__juz5v",
        error: "NonMusicPage_error__oW0V3",
      };
    },
    90978: function (e) {
      e.exports = {
        scrollableContainer: "PostPage_scrollableContainer__iV9Bo",
        container: "PostPage_container__orSfz",
        shimmerTitle: "PostPage_shimmerTitle__EeFCD",
      };
    },
    12903: function (e) {
      e.exports = {
        root: "PostAlbums_root__u2a1q",
        content: "PostAlbums_content__uMSez",
      };
    },
    13209: function (e) {
      e.exports = {
        root: "PostArtists_root__Zxmjq",
        content: "PostArtists_content__JzGOH",
      };
    },
    39679: function (e) {
      e.exports = {
        root: "PostPlaylists_root__3tea0",
        content: "PostPlaylists_content__2fXI5",
      };
    },
    41949: function (e) {
      e.exports = {
        root: "PostShimmer_root__MlLkY",
        top: "PostShimmer_top__ySpmZ",
        bottom: "PostShimmer_bottom__ajW_P",
      };
    },
    15739: function (e) {
      e.exports = {
        root: "SearchHistoryPage_root__Wbvyf",
        title: "SearchHistoryPage_title__gnJuo",
        header: "SearchHistoryPage_header__YdTG5",
        scrollContainer: "SearchHistoryPage_scrollContainer__ScAez",
        scrollContent: "SearchHistoryPage_scrollContent__5AXWC",
        content: "SearchHistoryPage_content__iPgVO",
        desktopItem: "SearchHistoryPage_desktopItem__Xv9C_",
        items: "SearchHistoryPage_items___okS8",
        emptyHistory: "SearchHistoryPage_emptyHistory__gzfUu",
      };
    },
    77722: function (e) {
      e.exports = {
        header: "SearchPage_header__BOkdn",
        root: "SearchPage_root__i7sE0",
        root_showFilters: "SearchPage_root_showFilters__reB44",
        input: "SearchPage_input__TSbxK",
        content: "SearchPage_content__ycqK5",
        scrollableContent: "SearchPage_scrollableContent__gzoBu",
        main: "SearchPage_main__FV4Cr",
        tabCarousel: "SearchPage_tabCarousel__9cWOl",
        filter: "SearchPage_filter__5xzTL",
        filter_selected: "SearchPage_filter_selected__FOfyJ",
        compilations: "SearchPage_compilations__52N9u",
        footer: "SearchPage_footer__20bvg",
      };
    },
    91631: function (e) {
      e.exports = {
        root: "TagPage_root__EWN9A",
        scrollContainer: "TagPage_scrollContainer__lvG_1",
        important: "TagPage_important__Jq37E",
        content: "TagPage_content__rUC_l",
        footer: "TagPage_footer__W0mZr",
        item: "TagPage_item__X_lW7",
      };
    },
    66051: function (e) {
      e.exports = {
        carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
        carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
        mixItem: "MixesCarousel_mixItem__YNSsB",
      };
    },
    8104: function (e) {
      e.exports = {
        mixesTitle: "MixesGrid_mixesTitle__QawnL",
        mixesGrid: "MixesGrid_mixesGrid__uZQtt",
      };
    },
  },
]);
