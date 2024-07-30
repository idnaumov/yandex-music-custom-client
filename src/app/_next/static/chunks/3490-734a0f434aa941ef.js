(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3490],
  {
    38360: function (e, t, i) {
      "use strict";
      i.d(t, {
        KX: function () {
          return c;
        },
        gI: function () {
          return d;
        },
        lf: function () {
          return n;
        },
        N: function () {
          return m;
        },
        hh: function () {
          return b;
        },
        H0: function () {
          return v.useAlbumEntityName;
        },
        SB: function () {
          return p.useOnLikeClick;
        },
        BV: function () {
          return k.useOnPinClick;
        },
        IK: function () {
          return _.useOnPresaveClick;
        },
        TL: function () {
          return C;
        },
      });
      var r,
        n,
        a = i(42288),
        s = i(69869),
        l = i(63394),
        o = i(58421);
      let u = a.V5.model("TrackPosition", {
          volume: a.V5.number,
          index: a.V5.number,
        }),
        c = a.V5.compose(
          a.V5.model({
            id: a.V5.number,
            title: a.V5.string,
            type: a.V5.maybe(a.V5.enumeration(Object.values(s.VZ))),
            coverUri: a.V5.maybe(a.V5.string),
            averageColor: a.V5.maybe(a.V5.string),
            year: a.V5.maybe(a.V5.number),
            version: a.V5.maybe(a.V5.string),
            isAvailable: a.V5.optional(a.V5.boolean, !0),
            availableForOptions: a.V5.maybe(
              a.V5.array(a.V5.enumeration(Object.values(s.Yk))),
            ),
            availableForPremiumUsers: a.V5.maybe(a.V5.boolean),
            bookmateOptionRequired: a.V5.maybe(a.V5.boolean),
            genre: a.V5.maybe(a.V5.string),
            trackPosition: a.V5.maybe(u),
            disclaimers: a.V5.maybe(a.V5.array(a.V5.string)),
            trackCount: a.V5.maybe(a.V5.number),
            bestAlbumTracks: a.V5.maybe(a.V5.array(a.V5.number)),
            hasTrailer: a.V5.optional(a.V5.boolean, !1),
            durationSec: a.V5.maybe(a.V5.number),
          }),
          o.fE,
          o.ie,
        )
          .views((e) => ({
            get url() {
              return "/album/".concat(e.id);
            },
            get isLiked() {
              if (!(0, a.fh)(e)) return !1;
              let { library: t } = (0, a.yj)(e);
              return t.isAlbumLiked(e.id);
            },
            get pinId() {
              return "".concat(s.Qm.ALBUM).concat(e.id);
            },
            get seeds() {
              return ["album:".concat(e.id)];
            },
            get isPodcast() {
              return e.type === s.VZ.PODCAST;
            },
            get isAudiobook() {
              return e.type === s.VZ.AUDIOBOOK;
            },
            get isNonMusic() {
              return this.isAudiobook || this.isPodcast;
            },
            get isPinned() {
              if (!(0, a.fh)(e)) return !1;
              let { pinsCollection: t } = (0, a.yj)(e);
              return t.isPinned(this.pinId);
            },
            get isLegalRejected() {
              if (!(0, a.fh)(e)) return !1;
              let { experiments: t } = (0, a.yj)(e),
                i = t.checkExperiment(l.pe.WebNextLegalRejectAlbum, "on");
              if (e.disclaimers && i)
                return !e.isAvailable && e.disclaimers.includes(s.em.MODAL);
              return !1;
            },
            get isUnsafeLegal() {
              if (!(0, a.fh)(e)) return !1;
              let { experiments: t } = (0, a.yj)(e),
                i = t.checkExperiment(l.pe.WebNextLegalUnsafeAlbum, "on");
              if (e.disclaimers && i)
                return e.isAvailable && e.disclaimers.includes(s.em.MODAL);
              return !1;
            },
          }))
          .actions((e) => ({
            toggleLike: (0, a.ls)(function* () {
              if (!(0, a.fh)(e)) return;
              let { library: t, user: i } = (0, a.yj)(e);
              if (i.isAuthorized) {
                let r = yield t.toggleAlbumLike({
                  entityId: e.id,
                  userId: i.account.uid,
                });
                return (
                  (0, a.fh)(e) &&
                    r === s.Bi.OK &&
                    (e.isLiked ? e.likePending() : e.unlikePending()),
                  r
                );
              }
            }),
            togglePin: (0, a.ls)(function* () {
              if (!(0, a.fh)(e)) return;
              let { pinsCollection: t, user: i } = (0, a.yj)(e);
              if (i.isAuthorized)
                return yield t.toggleAlbumPin({ id: e.id }, e.pinId);
            }),
          }))
          .named("BaseAlbum"),
        d = a.V5.compose(
          a.V5.model("BaseUpcomingAlbum", {
            id: a.V5.number,
            isPresave: a.V5.boolean,
            title: a.V5.maybe(a.V5.string),
            type: a.V5.maybe(a.V5.enumeration(Object.values(s.VZ))),
            coverUri: a.V5.maybe(a.V5.string),
            releaseDate: a.V5.maybe(a.V5.string),
          }),
          o.ie,
        ).actions((e) => {
          let t = {
            presaveAlbum: (0, a.ls)(function* (t) {
              let { usersResource: i, modelActionsLogger: r } = (0, a.dU)(e);
              try {
                e.isPresave = !0;
                let r = yield i.presaveAlbum(t);
                return r === s.ZW.ERROR && (e.isPresave = !1), r;
              } catch (t) {
                return (e.isPresave = !1), r.error(t), s.ZW.ERROR;
              }
            }),
            removePresaveAlbum: (0, a.ls)(function* (t) {
              let { usersResource: i, modelActionsLogger: r } = (0, a.dU)(e);
              try {
                e.isPresave = !1;
                let r = yield i.removePresaveAlbum(t);
                return r === s.ZW.ERROR && (e.isPresave = !0), r;
              } catch (t) {
                return (e.isPresave = !0), r.error(t), s.ZW.ERROR;
              }
            }),
            toggleLike: (0, a.ls)(function* () {
              let i;
              if (!(0, a.fh)(e)) return;
              let { user: r } = (0, a.yj)(e);
              if (r.account.uid)
                return (
                  (i = e.isPresave
                    ? yield t.removePresaveAlbum({
                        albumId: e.id,
                        userId: r.account.uid,
                      })
                    : yield t.presaveAlbum({
                        albumId: e.id,
                        userId: r.account.uid,
                        likeAfterRelease: !0,
                      })),
                  (0, a.fh)(e),
                  i
                );
            }),
          };
          return t;
        });
      ((r = n || (n = {})).TRACK = "track"), (r.TEXT = "text");
      let m = (e) =>
          (0, a.pj)({
            id: e.id,
            title: e.title,
            coverUri: e.coverUri,
            type: e.type,
            year: e.year,
            version: e.version,
            contentWarning: e.contentWarning,
            genre: e.genre,
            likesCount: e.likesCount,
            averageColor: (0, l.Us)(e.derivedColors),
            isAvailable: !!e.available,
            trackPosition: e.trackPosition,
            disclaimers: e.disclaimers,
            trackCount: e.trackCount,
            availableForPremiumUsers: e.availableForPremiumUsers,
            availableForOptions: e.availableForOptions || [],
            bestAlbumTracks: e.bests,
            hasTrailer: e.hasTrailer,
            durationSec: e.durationSec,
          }),
        b = (e) => {
          let t = !1;
          return (
            e.presaveDate ? (t = !0) : e.presaved && (t = e.presaved),
            (0, a.pj)({
              id: e.id,
              contentWarning: e.contentWarning,
              disclaimers: e.disclaimers,
              isPresave: t,
              title: e.title,
              type: e.type,
              coverUri: e.coverUri,
              releaseDate: e.releaseDate,
            })
          );
        };
      var v = i(25053),
        p = i(41345),
        _ = i(51578),
        k = i(9266);
      let C = (e) => {
        let { experiments: t } = (0, l.oR)(),
          i = (0, l.RV)(),
          r = t.checkExperiment(l.pe.WebNextPodcastPage, "on");
        if (!(i && r)) return !1;
        let { availableForOptions: n, availableForPremiumUsers: a } = e;
        return (
          !!e.bookmateOptionRequired ||
          !!(!a && (null == n ? void 0 : n.includes(s.Yk.BOOKMATE)))
        );
      };
    },
    25053: function (e, t, i) {
      "use strict";
      i.d(t, {
        useAlbumEntityName: function () {
          return l;
        },
      });
      var r = i(98639),
        n = i(80542),
        a = i(69869),
        s = i(63394);
      let l = (e) => {
        let { formatMessage: t } = (0, n.Z)(),
          i = (0, s.RV)();
        return (0, r.useMemo)(() => {
          if (!i)
            return e === a.VZ.SINGLE
              ? t({ id: "entity-names.single" })
              : t({ id: "entity-names.album" });
          switch (e) {
            case a.VZ.SINGLE:
              return t({ id: "entity-names.single" });
            case a.VZ.PODCAST:
              return t({ id: "entity-names.podcast" });
            case a.VZ.AUDIOBOOK:
              return t({ id: "entity-names.audiobook" });
            case a.VZ.FAIRY_TALE:
              return t({ id: "entity-names.fairy-tale" });
            default:
              return t({ id: "entity-names.album" });
          }
        }, [e, t, i]);
      };
    },
    94721: function (e, t, i) {
      "use strict";
      i.d(t, {
        C: function () {
          return s;
        },
      });
      var r = i(69869),
        n = i(63394),
        a = i(67868);
      let s = (e) => {
        if (!(0, n.RV)()) return a.j9.ALBUM;
        switch (e.type) {
          case r.VZ.PODCAST:
            return a.j9.PODCAST;
          case r.VZ.AUDIOBOOK:
            return a.j9.AUDIOBOOK;
          default:
            return a.j9.ALBUM;
        }
      };
    },
    41345: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnLikeClick: function () {
          return p;
        },
      });
      var r = i(9753),
        n = i(24244),
        a = i(98639),
        s = i(80542),
        l = i(69869),
        o = i(63394),
        u = i(67868),
        c = i(9544),
        d = i(94721);
      let m = "/collection/albums",
        b = (e) => {
          if (!(0, o.RV)()) return m;
          switch (e.type) {
            case l.VZ.PODCAST:
              return "/collection/non-music/liked";
            case l.VZ.AUDIOBOOK:
              return "/collection/shelf/liked";
            default:
              return m;
          }
        },
        v = (0, c.Pi)((e) => {
          let { album: t, closeToast: i } = e,
            n = b(t),
            a = (0, d.C)(t);
          return (0, r.jsx)(u.AP, {
            closeToast: i,
            entityVariant: a,
            coverUri: t.coverUri,
            entityUrl: "/album/".concat(t.id),
            collectionUrl: n,
            entityTitle: t.title,
            isLiked: t.isLiked,
          });
        }),
        p = (e) => {
          let { user: t } = (0, o.oR)(),
            { notify: i } = (0, o.d$)(),
            [c, d] = (0, a.useState)(!1),
            { formatMessage: m } = (0, s.Z)();
          return (0, a.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(u.Q, {
                  error: m({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: o.W$.ERROR },
              );
              return;
            }
            if (c) return;
            let a = { ...(0, n.ZN)(e), isLiked: !e.isLiked };
            d(!0);
            let s = await e.toggleLike();
            d(!1),
              s === l.Bi.OK
                ? i((0, r.jsx)(v, { album: a }), { containerId: o.W$.INFO })
                : i(
                    (0, r.jsx)(u.Q, {
                      error: m({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: o.W$.ERROR },
                  );
          }, [t.isAuthorized, c, e, m, i]);
        };
    },
    9266: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPinClick: function () {
          return m;
        },
      });
      var r = i(9753),
        n = i(24244),
        a = i(98639),
        s = i(80542),
        l = i(63394),
        o = i(67868),
        u = i(9544),
        c = i(94721);
      let d = (0, u.Pi)((e) => {
          let { album: t, closeToast: i } = e,
            n = (0, c.C)(t);
          return (0, r.jsx)(o.K1, {
            closeToast: i,
            entityVariant: n,
            coverUri: t.coverUri,
            entityUrl: "/album/".concat(t.id),
            entityTitle: t.title,
            isPinned: t.isPinned,
          });
        }),
        m = (e) => {
          let { user: t } = (0, l.oR)(),
            { notify: i } = (0, l.d$)(),
            { formatMessage: u } = (0, s.Z)(),
            [c, m] = (0, a.useState)(!1);
          return (0, a.useCallback)(async () => {
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(o.Q, {
                  error: u({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: l.W$.ERROR },
              );
              return;
            }
            if (c) return;
            let a = { ...(0, n.ZN)(e), isPinned: !e.isPinned };
            m(!0);
            let s = await e.togglePin();
            m(!1),
              s
                ? i((0, r.jsx)(d, { album: a }), { containerId: l.W$.INFO })
                : i(
                    (0, r.jsx)(o.Q, {
                      error: u({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: l.W$.ERROR },
                  );
          }, [e, u, i, c, t.isAuthorized]);
        };
    },
    51578: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPresaveClick: function () {
          return d;
        },
      });
      var r = i(9753),
        n = i(24244),
        a = i(98639),
        s = i(80542),
        l = i(69869),
        o = i(63394),
        u = i(67868);
      let c = (e) => {
          let { upcomingAlbum: t, closeToast: i } = e;
          return (0, r.jsx)(u.V1, {
            closeToast: i,
            albumTitle: t.title,
            coverUri: t.coverUri,
            entityTitle: t.title,
            isPresave: t.isPresave,
          });
        },
        d = (e) => {
          let { user: t } = (0, o.oR)(),
            { notify: i } = (0, o.d$)(),
            [d, m] = (0, a.useState)(!1),
            { formatMessage: b } = (0, s.Z)();
          return (0, a.useCallback)(async () => {
            if (!t.isAuthorized) {
              i(
                (0, r.jsx)(u.Q, {
                  error: b({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: o.W$.ERROR },
              );
              return;
            }
            if (d) return;
            let a = { ...(0, n.ZN)(e), isPresave: !e.isPresave };
            m(!0);
            let s = await e.toggleLike();
            m(!1),
              s === l.ZW.OK
                ? i((0, r.jsx)(c, { upcomingAlbum: a }), {
                    containerId: o.W$.INFO,
                  })
                : i(
                    (0, r.jsx)(u.Q, {
                      error: b({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: o.W$.ERROR },
                  );
          }, [t.isAuthorized, d, e, i, b]);
        };
    },
    94342: function (e, t, i) {
      "use strict";
      i.d(t, {
        kL: function () {
          return s.Chart;
        },
        BH: function () {
          return a;
        },
        W5: function () {
          return l;
        },
      });
      var r = i(42288),
        n = i(69869);
      let a = r.V5.model("Chart", {
        position: r.V5.maybe(r.V5.number),
        progress: r.V5.maybe(r.V5.enumeration(Object.values(n.h9))),
      });
      var s = i(59558);
      let l = (e) => (0, r.pj)({ position: e.position, progress: e.progress });
    },
    59558: function (e, t, i) {
      "use strict";
      i.d(t, {
        Chart: function () {
          return m;
        },
      });
      var r = i(9753),
        n = i(60836),
        a = i(9544),
        s = i(98639),
        l = i(69869),
        o = i(28852),
        u = i(2570),
        c = i(7005),
        d = i.n(c);
      let m = (0, a.Pi)((e) => {
        let {
            progress: t,
            position: i,
            isDisliked: a,
            isDisabled: c,
            className: m,
          } = e,
          b = (0, s.useMemo)(() => {
            switch (t) {
              case l.h9.UP:
                return "chartUp";
              case l.h9.DOWN:
                return "chartDown";
              case l.h9.NEW:
                return "chartNew";
              default:
                return "chartSame";
            }
          }, [t]);
        return (0, r.jsxs)("div", {
          className: (0, n.W)(d().root, m),
          children: [
            (0, r.jsx)(u.Caption, {
              variant: "div",
              weight: "normal",
              type: "entity",
              size: "m",
              className: (0, n.W)(d().position, {
                [d().position_disliked]: a,
                [d().position_disabled]: c,
              }),
              children: i,
            }),
            (0, r.jsx)(o.J, {
              variant: b,
              size: "xxs",
              className: (0, n.W)(d().progress, d()["progress_".concat(t)], {
                [d().progress_disliked]: a,
                [d().progress_disabled]: c,
              }),
            }),
          ],
        });
      });
    },
    93490: function (e, t, i) {
      "use strict";
      i.d(t, {
        rf: function () {
          return r.AlbumCard;
        },
        oK: function () {
          return A.AlbumContextMenu;
        },
        ug: function () {
          return c.u;
        },
        wk: function () {
          return u;
        },
        vK: function () {
          return n.UpcomingAlbumCard;
        },
        W9: function () {
          return v;
        },
        ym: function () {
          return p;
        },
        cO: function () {
          return k;
        },
        wJ: function () {
          return f;
        },
        wq: function () {
          return _;
        },
        jV: function () {
          return g.useAlbumDisclaimer;
        },
      });
      var r = i(49473),
        n = i(24298),
        a = i(9753),
        s = i(98639),
        l = i(67868);
      let o = (e) => {
          let {
            forwardRef: t,
            isShimmerVisible: i,
            isShimmerActive: n,
            title: s,
            description: o,
            albums: u,
            className: c,
            containerClassName: d,
            headerClassName: m,
            viewAllActionLink: b,
            headingRef: v,
            ...p
          } = e;
          return (0, a.jsx)(l.HY, {
            isShimmerVisible: i,
            isShimmerActive: n,
            className: c,
            headerClassName: m,
            containerClassName: d,
            ref: t,
            title: s,
            description: o,
            viewAllActionLink: b,
            headingRef: v,
            ...p,
            children:
              null == u
                ? void 0
                : u.map((e) =>
                    (0, a.jsx)(
                      r.AlbumCard,
                      { album: e, contentLinesCount: 3 },
                      e.id,
                    ),
                  ),
          });
        },
        u = (0, s.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
      var c = i(75422),
        d = i(42288),
        m = i(38360),
        b = i(33589);
      let v = m.gI
          .props({ artists: d.V5.maybe(d.V5.array(b.Go)) })
          .views((e) => ({
            get artistNames() {
              var t;
              return null === (t = e.artists) || void 0 === t
                ? void 0
                : t.map((e) => e.name).join(", ");
            },
          })),
        p = (e) => {
          let t = e.artists.map((e) => (0, b.d)(e));
          return (0, d.pj)({ ...(0, m.N)(e), artists: t });
        },
        _ = (e) => {
          var t;
          let i =
            null === (t = e.artists) || void 0 === t ? void 0 : t.map(b.tR);
          return (0, d.pj)({ ...(0, m.hh)(e), artists: i });
        },
        k = (e) => {
          var t, i;
          let {
            album: r,
            artists: n,
            bookmateOptionRequired: a,
            chart: s,
            likesCount: l,
          } = e;
          return (0, d.pj)({
            id: r.id,
            title: r.title,
            coverUri: null === (t = r.cover) || void 0 === t ? void 0 : t.uri,
            type: r.albumType,
            contentWarning: r.contentWarning,
            disclaimers: r.disclaimers,
            artists: null == n ? void 0 : n.map(b.tR),
            averageColor:
              null === (i = r.cover) || void 0 === i ? void 0 : i.color,
            isAvailable: r.available,
            likesCount: l,
            bookmateOptionRequired: a,
            chart: s,
          });
        };
      var C = i(94342);
      let f = (e) => {
        let { album: t, artists: i, likesCount: r, chart: n } = e;
        return (0, d.pj)({
          ...k({ album: t, artists: i, likesCount: r }),
          chart: n && (0, C.W5)(n),
        });
      };
      var g = i(11856),
        A = i(41566);
    },
    11856: function (e, t, i) {
      "use strict";
      i.d(t, {
        useAlbumDisclaimer: function () {
          return s;
        },
      });
      var r = i(98639),
        n = i(3429),
        a = i(63394);
      let s = (e) => {
        let { album: t, callback: i, shouldHistoryBack: s } = e,
          {
            disclaimer: l,
            modals: { disclaimerModal: o },
          } = (0, a.oR)(),
          u = (0, r.useRef)(String((0, n.Z)())),
          c = (0, r.useRef)(!1),
          d = (0, a.uK)().get(a.ce);
        return (
          (0, r.useEffect)(() => {
            l.isUnsafeDisclaimerConfirmed &&
              l.id === u.current &&
              !c.current &&
              (null == i || i(), (c.current = !0));
          }, [i, l.isUnsafeDisclaimerConfirmed, l.id]),
          (0, r.useCallback)(
            async (e) => {
              let r = d.get(a.BU.ExEx),
                n = (null == t ? void 0 : t.isPodcast)
                  ? null == r
                    ? void 0
                    : r.includes("".concat(a.co.PODCAST, "_").concat(t.id))
                  : null == r
                    ? void 0
                    : r.includes(
                        ""
                          .concat(a.co.ALBUM, "_")
                          .concat(null == t ? void 0 : t.id),
                      );
              if ((null == t ? void 0 : t.isUnsafeLegal) && n) {
                null == i || i();
                return;
              }
              if (
                (null == t ? void 0 : t.isLegalRejected) ||
                (null == t ? void 0 : t.isUnsafeLegal)
              ) {
                null == e || e.preventDefault(),
                  await l.getAlbumDisclaimer({ albumId: t.id }),
                  t.isUnsafeLegal && l.setType(a.Gq.UNSAFE),
                  l.setId(u.current),
                  l.setEntityId(t.id),
                  t.isPodcast
                    ? l.setEntityType(a.co.PODCAST)
                    : l.setEntityType(a.co.ALBUM),
                  l.setShouldHistoryBack(!!s),
                  (c.current = !1),
                  o.open();
                return;
              }
              null == e || e.preventDefault(), null == i || i();
            },
            [
              null == t ? void 0 : t.id,
              null == t ? void 0 : t.isLegalRejected,
              null == t ? void 0 : t.isPodcast,
              null == t ? void 0 : t.isUnsafeLegal,
              i,
              l,
              o,
              d,
              s,
            ],
          )
        );
      };
    },
    75422: function (e, t, i) {
      "use strict";
      i.d(t, {
        u: function () {
          return l;
        },
      });
      var r = i(42288),
        n = i(38360),
        a = i(33589),
        s = i(94342);
      let l = n.KX.props({
        artists: r.V5.maybe(r.V5.array(a.Go)),
        chart: r.V5.maybe(s.BH),
      }).views((e) => ({
        get artistNames() {
          var t;
          return null === (t = e.artists) || void 0 === t
            ? void 0
            : t.map((e) => e.name).join(", ");
        },
      }));
    },
    49473: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          AlbumCard: function () {
            return j;
          },
        });
      var r = i(9753),
        n = i(60836),
        a = i(9544),
        s = i(98639),
        l = i(80542),
        o = i(52122),
        u = i(23881),
        c = i(84338),
        d = i(69869),
        m = i(39513),
        b = i(27491),
        v = i(28852),
        p = i(12404),
        _ = i(2570),
        k = i(38360),
        C = i(33589),
        f = i(94342),
        g = i(63394),
        A = i(67868),
        h = i(11856),
        y = i(41566),
        x = i(96027),
        V = i.n(x);
      let j = (0, a.Pi)((e) => {
        let {
            className: t,
            children: i,
            album: a,
            contentLinesCount: x,
            withLikesCount: j,
            withChart: P,
            withAddition: L = !0,
          } = e,
          { ref: U, intersectionPropertyId: N } = (0, g.Vf)(),
          O = (0, g.x5)(),
          { formatMessage: B } = (0, l.Z)(),
          {
            sendLikeSearchFeedback: R,
            sendNavigateSearchFeedback: w,
            sendPlaySearchFeedback: T,
          } = (0, g.sA)(),
          [E, I] = (0, s.useState)(!1),
          [M, S] = (0, s.useState)(!1),
          [z, D] = (0, s.useState)(!1),
          W = (0, g.zx)(),
          Z = (0, k.SB)(a),
          K = (0, k.BV)(a),
          F = (0, g.s0)(a.url),
          G = (0, g.s0)(a.url, !0),
          [q, J] = (0, s.useState)(!1),
          $ = (0, k.TL)(a),
          Q =
            a.type === d.VZ.SINGLE ? B({ id: "entity-names.single" }) : void 0,
          Y = (0, g.tN)([a.year, Q]),
          H = (0, k.H0)(a.type),
          X = (0, s.useMemo)(() => {
            var e;
            let t = a.isLiked ? B({ id: "entity-names.has-your-like" }) : "";
            return ""
              .concat(H, " ")
              .concat(a.title, " ")
              .concat(null !== (e = a.version) && void 0 !== e ? e : "", " ")
              .concat(t);
          }, [H, B, a.title, a.isLiked, a.version]),
          { isPlaying: ee, togglePlay: et } = (0, g.qm)({
            playContextParams: {
              contextData: { type: c.Ak.Album, meta: { id: a.id }, from: O },
              loadContextMeta: !0,
            },
          }),
          ei = (0, h.useAlbumDisclaimer)({ album: a, callback: F }),
          er = (0, h.useAlbumDisclaimer)({ album: a, callback: G }),
          en = (0, h.useAlbumDisclaimer)({ album: a, callback: et }),
          ea = (0, C.ik)(er, ei),
          es = (0, s.useCallback)(
            (e) => {
              W({ to: o.qU.AlbumScreen }), null == w || w(), ea(e);
            },
            [W, w, ea],
          ),
          el = (0, s.useCallback)(
            (e) => {
              es(e);
            },
            [es],
          ),
          eo = (0, s.useCallback)(() => {
            M || ee || (S(!0), null == T || T()), en();
          }, [ee, M, T, en]),
          eu = (0, s.useCallback)(() => {
            E || a.isLiked || (I(!0), null == R || R()), Z();
          }, [a.isLiked, Z, E, R]),
          ec = (0, s.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          ed = (0, s.useCallback)(() => {
            D(!z), J(!z);
          }, [z]),
          em = (0, s.useMemo)(() => {
            var e;
            return (0, r.jsxs)(_.Caption, {
              className: (0, n.W)(V().title, {
                [V().title_withVersion]: a.version,
                [V().title_withChart]: P,
              }),
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 2,
              ...(0, u.BA)(u.bG.album.ALBUM_TITLE),
              children: [
                (0, r.jsx)(A.rU, {
                  "aria-label": ""
                    .concat(a.title, " ")
                    .concat(null !== (e = a.version) && void 0 !== e ? e : ""),
                  className: V().titleLink,
                  href: a.url,
                  onClick: es,
                  children: a.title,
                }),
                a.version &&
                  (0, r.jsx)(_.Caption, {
                    className: V().version,
                    variant: "span",
                    ...(0, u.BA)(u.bG.album.ALBUM_VERSION),
                    children: " ".concat(a.version),
                  }),
              ],
            });
          }, [a.title, a.url, a.version, es, P]),
          eb = (0, s.useMemo)(() => {
            var e;
            return (0, r.jsx)(A.rU, {
              href: a.url,
              onClick: es,
              children: ""
                .concat(a.title, " ")
                .concat(null !== (e = a.version) && void 0 !== e ? e : ""),
            });
          }, [a.title, a.url, a.version, es]),
          ev = (0, s.useMemo)(
            () =>
              (0, r.jsx)(y.AlbumContextMenu, {
                album: a,
                onOpenChange: ed,
                open: z,
                returnFocus: !1,
                reference: (0, r.jsx)(m.z, {
                  onClick: ec,
                  className: (0, n.W)(V().menuButton, V().control),
                  "aria-label": B({ id: "interface-actions.context-menu" }),
                  icon: (0, r.jsx)(v.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, u.BA)(u.bG.album.ALBUM_CONTEXT_MENU_BUTTON),
                }),
              }),
            [a, B, ec, ed, z],
          ),
          ep = (0, s.useMemo)(() => {
            if (a.isAvailable)
              return (0, r.jsx)(b.kk, {
                isVisible: z || q,
                className: V().controls,
                playControl: (0, r.jsx)(A.JM, {
                  className: (0, n.W)(V().playButton, V().control),
                  buttonVariant: "default",
                  withHover: !1,
                  iconSize: "xl",
                  variant: "filled",
                  onClick: eo,
                  isPlaying: ee,
                }),
                likeControl: (0, r.jsx)(A.dJ, {
                  className: (0, n.W)(V().likeButton, V().control),
                  isLiked: a.isLiked,
                  onClick: eu,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: ev,
                pinControl: (0, r.jsx)(A.RT, {
                  onClick: K,
                  isPinned: a.isPinned,
                  className: (0, n.W)(V().pinButton, V().control),
                  withRipple: !1,
                }),
              });
          }, [a.isAvailable, a.isLiked, ev, eu, eo, z, q, ee, a.isPinned, K]),
          e_ = (0, s.useMemo)(
            () =>
              (0, r.jsx)(p.Paper, {
                className: V().cover,
                radius: "s",
                withShadow: !0,
                ...(0, u.BA)(u.bG.album.ALBUM_CARD),
                children: (0, r.jsxs)("div", {
                  className: V().coverBlock,
                  onClick: el,
                  children: [
                    (0, r.jsx)(A.BE, {
                      className: V().image,
                      src: a.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: X,
                      withAvatarReplace: !0,
                      isAvailable: a.isAvailable,
                      "aria-hidden": !0,
                    }),
                    $ &&
                      (0, r.jsx)(v.J, {
                        variant: "bookmateBadge",
                        className: V().bookmateBadge,
                      }),
                    ep,
                  ],
                }),
              }),
            [el, a.coverUri, a.isAvailable, X, $, ep],
          );
        return (0, r.jsxs)(b.m7, {
          ref: U,
          className: (0, n.W)(V().root, { [V().root_withChart]: P }, t),
          "aria-label": X,
          explicitMark: a.albumExplicitMark,
          title: em,
          srTitle: eb,
          "data-intersection-property-id": N,
          contentLinesCount: x,
          view: e_,
          description: (0, r.jsx)(C.jO, {
            className: V().artists,
            artists: a.artists,
            lineClamp: 1,
            linkClassName: V().artistLink,
            captionSize: "s",
          }),
          chart:
            P &&
            a.chart &&
            (0, r.jsx)(f.kL, {
              className: V().chart,
              position: a.chart.position,
              progress: a.chart.progress,
            }),
          ...(0, u.BA)(u.bG.album.ALBUM_ITEM),
          children: [
            L &&
              Y &&
              (0, r.jsx)(_.Caption, {
                className: V().addition,
                variant: "div",
                type: "entity",
                size: "s",
                weight: "medium",
                lineClamp: 1,
                children: Y,
              }),
            j &&
              !!a.actualLikesCount &&
              (0, r.jsx)(A.DB, {
                className: V().likeTextButton,
                ariaLabel: B(
                  { id: "entity-names.likes-counter" },
                  { counter: a.actualLikesCount },
                ),
                likesCount: a.actualLikesCount,
                isLiked: a.isLiked,
                handleLikeClick: Z,
              }),
            i,
          ],
        });
      });
    },
    41566: function (e, t, i) {
      "use strict";
      i.d(t, {
        AlbumContextMenu: function () {
          return c;
        },
      });
      var r = i(9753),
        n = i(9544),
        a = i(98639),
        s = i(385),
        l = i(38360),
        o = i(63394),
        u = i(67868);
      let c = (0, n.Pi)((e) => {
        var t;
        let {
            album: i,
            reference: n,
            onOpenChange: c,
            open: d,
            returnFocus: m,
          } = e,
          { settings: b, experiments: v, trailer: p } = (0, o.oR)(),
          _ = (0, l.SB)(i),
          k = (0, l.BV)(i),
          C = "".concat(o.aU.ALBUM, "-").concat(i.id),
          f = b.layout === o.t8.Mobile,
          g = (0, o.RV)() && i.isNonMusic,
          A =
            v.checkExperiment(o.pe.WebNextEntityTrailer, "on") &&
            true &&
            i.hasTrailer,
          { href: h } = (0, o.qK)(i.url),
          { isPlaying: y, togglePlay: x } = (0, o.Qh)({
            seeds:
              null !== (t = null == i ? void 0 : i.seeds) && void 0 !== t
                ? t
                : [],
            pageIdForFrom: o.Rh.RADIO,
            blockIdForFrom: C,
          }),
          V = (0, a.useCallback)(() => {
            y || x();
          }, [y, x]),
          j = (0, a.useCallback)(() => {
            p.openAlbumTrailer(i.id);
          }, [i.id, p]);
        (0, o.ZP)(d);
        let P = (0, a.useMemo)(() => {
            if (!f)
              return (0, r.jsx)(u.Zd, {
                onClick: k,
                isPinned: i.isPinned,
                disabled: !i.isAvailable,
              });
          }, [i.isAvailable, i.isPinned, k, f]),
          L = (0, a.useMemo)(
            () =>
              g
                ? (0, r.jsx)(u.qq, {
                    onClick: _,
                    isLiked: null == i ? void 0 : i.isLiked,
                    albumType: i.type,
                  })
                : (0, r.jsx)(u.xZ, {
                    onClick: _,
                    isLiked: null == i ? void 0 : i.isLiked,
                    disabled: !i.isAvailable,
                  }),
            [i.isAvailable, null == i ? void 0 : i.isLiked, i.type, _, g],
          ),
          U = (0, a.useMemo)(() => {
            if (!g && A) return (0, r.jsx)(u.NB, { onClick: j });
          }, [j, g, A]),
          N = (0, a.useMemo)(() => {
            if (!g)
              return (0, r.jsx)(u.GQ, {
                onClick: V,
                disabled: !i.isAvailable,
                variant: "album",
              });
          }, [i.isAvailable, V, g]);
        return (0, r.jsxs)(s.v2, {
          reference: n,
          title: null == i ? void 0 : i.title,
          description: null == i ? void 0 : i.artistNames,
          isMobile: f,
          offsetOptions: 10,
          open: d,
          returnFocus: m,
          onOpenChange: c,
          children: [
            P,
            L,
            U,
            N,
            (0, r.jsx)(u.zq, {
              shareLink: h,
              entityVariant: "album",
              entityTitle: i.title,
            }),
          ],
        });
      });
    },
    24298: function (e, t, i) {
      "use strict";
      i.d(t, {
        UpcomingAlbumCard: function () {
          return g;
        },
      });
      var r = i(9753),
        n = i(60836),
        a = i(9544),
        s = i(98639),
        l = i(80542),
        o = i(31014),
        u = i(39513),
        c = i(27491),
        d = i(28852),
        m = i(12404),
        b = i(2570),
        v = i(38360),
        p = i(33589),
        _ = i(63394),
        k = i(67868),
        C = i(38994),
        f = i.n(C);
      let g = (0, a.Pi)((e) => {
        let {
            className: t,
            children: i,
            upcomingAlbum: a,
            contentLinesCount: C,
          } = e,
          { ref: g, intersectionPropertyId: A } = (0, _.Vf)(),
          { formatMessage: h, formatDate: y } = (0, l.Z)(),
          x = (0, v.IK)(a),
          V = (0, s.useMemo)(() => {
            let e = h(
                { id: "entity-names.upcoming-album-name" },
                { upcomingAlbumName: a.title },
              ),
              t = a.isPresave ? h({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(t);
          }, [h, a.title, a.isPresave]),
          j = (0, s.useMemo)(
            () =>
              (0, r.jsxs)(m.Paper, {
                className: f().cover,
                radius: "s",
                withShadow: !0,
                children: [
                  (0, r.jsx)(k.BE, {
                    className: f().image,
                    src: a.coverUri,
                    size: 200,
                    fit: "cover",
                    alt: V,
                    withAvatarReplace: !0,
                  }),
                  (0, r.jsx)(c.kk, {
                    className: f().controls,
                    playControl: (0, r.jsx)(u.z, {
                      className: f().lockButton,
                      disabled: !0,
                      radius: "xxxl",
                      variant: "default",
                      size: "s",
                      icon: (0, r.jsx)(d.J, {
                        variant: "lock",
                        size: "xxs",
                        className: f().lockIcon,
                      }),
                      "aria-label": h({
                        id: "entity-names.upcoming-album-play-disabled",
                      }),
                    }),
                    likeControl: (0, r.jsx)(k.dJ, {
                      className: (0, n.W)(f().control, f().presaveButton),
                      isLiked: a.isPresave,
                      onClick: x,
                      variant: "default",
                      size: "s",
                      iconSize: "xxs",
                    }),
                  }),
                ],
              }),
            [h, x, a.coverUri, a.isPresave, V],
          );
        return (0, r.jsxs)(c.m7, {
          ref: g,
          className: (0, n.W)(f().root, t),
          "aria-label": V,
          explicitMark: a.albumExplicitMark,
          title: (0, r.jsx)(b.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: a.title,
          }),
          "data-intersection-property-id": A,
          contentLinesCount: C,
          view: j,
          description: (0, r.jsx)(p.jO, {
            className: f().artists,
            artists: a.artists,
            lineClamp: 1,
            linkClassName: f().artistLink,
            captionSize: "s",
          }),
          children: [
            (0, r.jsx)(b.Caption, {
              className: f().releaseDate,
              variant: "div",
              type: "entity",
              size: "s",
              weight: "medium",
              lineClamp: 1,
              children: (0, r.jsx)(o.Z, {
                id: "entity-names.upcoming-album-date",
                values: { releaseDate: y(a.releaseDate, (0, _.YT)()) },
              }),
            }),
            i,
          ],
        });
      });
    },
    7005: function (e) {
      e.exports = {
        card_root: "HorizontalCardContainer_root__YoAAP",
        root: "Chart_root__ODed_",
        position: "Chart_position__7UNY9",
        position_disliked: "Chart_position_disliked__HzjC7",
        position_disabled: "Chart_position_disabled__poZzD",
        progress: "Chart_progress__sGj4s",
        progress_up: "Chart_progress_up__y083c",
        progress_same: "Chart_progress_same__Cnbdb",
        progress_down: "Chart_progress_down__lv_ae",
        progress_new: "Chart_progress_new__7DobI",
        progress_disliked: "Chart_progress_disliked__maVAk",
        progress_disabled: "Chart_progress_disabled__JoFqG",
      };
    },
    96027: function (e) {
      e.exports = {
        root: "AlbumCard_root__vP6k4",
        root_withChart: "AlbumCard_root_withChart__J2SZv",
        artists: "AlbumCard_artists__phKco",
        likeTextButton: "AlbumCard_likeTextButton__2AQd9",
        controls: "AlbumCard_controls__yuO40",
        cover: "AlbumCard_cover__zXmdl",
        coverBlock: "AlbumCard_coverBlock__94ZzY",
        image: "AlbumCard_image__Mm55s",
        titleLink: "AlbumCard_titleLink__u_WLG",
        title: "AlbumCard_title__8YvhT",
        title_withVersion: "AlbumCard_title_withVersion__NClAp",
        title_withChart: "AlbumCard_title_withChart__PVOiJ",
        chart: "AlbumCard_chart__gASdj",
        version: "AlbumCard_version__h2aJz",
        artistLink: "AlbumCard_artistLink__uPR_2",
        playButton: "AlbumCard_playButton__mYK9R",
        likeButton: "AlbumCard_likeButton__9B9C0",
        menuButton: "AlbumCard_menuButton__pxkA6",
        pinButton: "AlbumCard_pinButton__Mdi_E",
        control: "AlbumCard_control__qx7Xh",
        bookmateBadge: "AlbumCard_bookmateBadge__Ewbyg",
      };
    },
    38994: function (e) {
      e.exports = {
        root: "UpcomingAlbumCard_root__lSZ5l",
        controls: "UpcomingAlbumCard_controls__fQ50f",
        cover: "UpcomingAlbumCard_cover__qvU1m",
        image: "UpcomingAlbumCard_image__WKtGR",
        releaseDate: "UpcomingAlbumCard_releaseDate__EvDzB",
        artists: "UpcomingAlbumCard_artists__Jp1OE",
        artistLink: "UpcomingAlbumCard_artistLink__RSqXw",
        control: "UpcomingAlbumCard_control__pSMdI",
        presaveButton: "UpcomingAlbumCard_presaveButton__ixwy_",
        lockButton: "UpcomingAlbumCard_lockButton__9_qyp",
        lockIcon: "UpcomingAlbumCard_lockIcon__wtvkP",
      };
    },
  },
]);
