(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1579],
  {
    31579: function (e, i, t) {
      "use strict";
      t.d(i, {
        vY: function () {
          return s.EmptyPlaylistBlock;
        },
        ZL: function () {
          return l.PlaylistCard;
        },
        Nn: function () {
          return k;
        },
        d2: function () {
          return c;
        },
        VD: function () {
          return n.PlaylistsCarousel;
        },
        RE: function () {
          return x;
        },
        Q9: function () {
          return f;
        },
        VB: function () {
          return _;
        },
      });
      var l = t(22003),
        n = t(18921),
        s = t(6030),
        a = t(42288),
        r = t(33589),
        o = t(12090);
      let c = o.Cd.props({ artists: a.V5.maybe(a.V5.array(r.Go)) });
      var u = t(63394),
        d = t(58421),
        p = t(21585);
      let m = a.V5.model("PlaylistOwner", {
          uid: a.V5.number,
          login: a.V5.string,
          name: a.V5.string,
          sex: a.V5.enumeration(Object.values(p.oF)),
          verified: a.V5.boolean,
        }),
        y = a.V5.model("PlaylistOwner", {
          userInfo: a.V5.maybeNull(m),
          caseForms: a.V5.maybeNull(d.S2),
        }),
        k = o.Cd.props({
          owner: a.V5.maybe(m),
          modified: a.V5.string,
          description: a.V5.maybe(a.V5.string),
          madeFor: a.V5.maybeNull(y),
        })
          .views((e) => ({
            get seeds() {
              var i;
              return [
                "playlist:"
                  .concat(
                    null === (i = e.owner) || void 0 === i ? void 0 : i.login,
                    "_",
                  )
                  .concat(e.kind),
              ];
            },
          }))
          .actions((e) => ({
            changeDescription: (0, a.ls)(function* (i) {
              if (!(0, a.fh)(e)) return u.SL.ERROR;
              if (e.description === i) return u.SL.OK;
              if (i.length > o.Zn) return u.SL.ERROR;
              let { usersResource: t, modelActionsLogger: l } = (0, a.dU)(e);
              if (e.canUserChange) {
                let n = e.description;
                e.description = i;
                try {
                  let l = yield t.changePlaylistDescription({
                    description: i,
                    userId: e.uid,
                    playlistKind: e.kind,
                  });
                  return (e.description = l.description), u.SL.OK;
                } catch (i) {
                  (e.description = n), l.error(i);
                }
              }
              return u.SL.ERROR;
            }),
            changePlaylistCover: (0, a.ls)(function* (i) {
              if (!(0, a.fh)(e)) return u.SL.ERROR;
              let { usersResource: t, modelActionsLogger: l } = (0, a.dU)(e);
              try {
                return (
                  yield t.uploadPlaylistCover({
                    userId: e.uid,
                    formData: i,
                    playlistKind: e.kind,
                  }),
                  u.SL.OK
                );
              } catch (e) {
                l.error(e);
              }
              return u.SL.ERROR;
            }),
          })),
        C = (e) => ({
          uid: e.uid,
          login: e.login,
          name: e.name,
          sex: e.sex,
          verified: e.verified,
        }),
        v = (e) =>
          (0, a.pj)({
            userInfo: e.userInfo ? C(e.userInfo) : null,
            caseForms: e.caseForms ? (0, u.GA)(e.caseForms) : null,
          }),
        f = (e) =>
          (0, a.pj)({
            ...(0, o.PV)(e),
            owner: e.owner ? C(e.owner) : void 0,
            description: e.description,
            modified: e.modified,
            madeFor: e.madeFor ? v(e.madeFor) : null,
          }),
        _ = (e) => {
          var i, t;
          return (0, a.pj)({
            ...(0, o.PV)(e),
            artists:
              null !==
                (t =
                  null == e
                    ? void 0
                    : null === (i = e.artists) || void 0 === i
                      ? void 0
                      : i.map(r.d)) && void 0 !== t
                ? t
                : [],
          });
        },
        x = (e) => {
          var i, t;
          let { playlist: l, generatedPlaylistType: n, likesCount: s } = e;
          return (0, a.pj)({
            isAvailable: null === (t = l.available) || void 0 === t || t,
            uuid: l.playlistUuid,
            title: l.title,
            uid: l.uid,
            kind: l.kind,
            coverUri: null === (i = l.cover) || void 0 === i ? void 0 : i.uri,
            generatedPlaylistType: n,
            likesCount: s,
          });
        };
    },
    6030: function (e, i, t) {
      "use strict";
      t.d(i, {
        EmptyPlaylistBlock: function () {
          return d;
        },
      });
      var l = t(9753),
        n = t(60836),
        s = t(98639),
        a = t(31014),
        r = t(28852),
        o = t(2570),
        c = t(98746),
        u = t.n(c);
      let d = (e) => {
        let { className: i, isEmptySearch: t } = e,
          c = (0, s.useMemo)(
            () =>
              t
                ? (0, l.jsx)(a.Z, { id: "search-results.not-found-title" })
                : (0, l.jsx)(a.Z, {
                    id: "error-messages.empty-collection-playlist-title",
                  }),
            [t],
          ),
          d = (0, s.useMemo)(
            () =>
              t
                ? (0, l.jsx)(a.Z, {
                    id: "search-results.not-found-description",
                  })
                : (0, l.jsx)(a.Z, {
                    id: "error-messages.empty-collection-playlist-description",
                  }),
            [t],
          );
        return (0, l.jsxs)("div", {
          className: (0, n.W)(u().root, i),
          children: [
            (0, l.jsx)("div", {
              className: u().iconBackground,
              children: (0, l.jsx)(r.J, {
                variant: "search",
                size: "l",
                className: u().icon,
              }),
            }),
            (0, l.jsx)(o.Heading, {
              variant: "h3",
              size: "xs",
              className: u().title,
              children: c,
            }),
            (0, l.jsx)(o.Caption, {
              variant: "span",
              size: "l",
              className: u().subtitle,
              children: d,
            }),
          ],
        });
      };
    },
    22003: function (e, i, t) {
      "use strict";
      t.d(i, {
        PlaylistCard: function () {
          return b;
        },
      });
      var l = t(9753),
        n = t(60836),
        s = t(9544),
        a = t(98639),
        r = t(80542),
        o = t(52122),
        c = t(23881),
        u = t(84338),
        d = t(39513),
        p = t(27491),
        m = t(28852),
        y = t(12404),
        k = t(2570),
        C = t(33589),
        v = t(12090),
        f = t(63394),
        _ = t(67868);
      let x = (e) => {
        let { formatMessage: i } = (0, r.Z)();
        return (0, a.useMemo)(() => {
          let t = "";
          e.isLiked && !e.actualLikesCount
            ? (t = i({ id: "entity-names.has-your-like" }))
            : "number" == typeof e.actualLikesCount &&
              (t =
                e.actualLikesCount > 0
                  ? i(
                      { id: "entity-names.likes-counter" },
                      { counter: e.actualLikesCount },
                    )
                  : i({ id: "entity-names.likes-counter-empty" }));
          let l = i(
            { id: "entity-names.playlist-name" },
            { playlistName: e.title },
          );
          return "".concat(l, " ").concat(t);
        }, [i, e]);
      };
      var h = t(385);
      let P = (0, s.Pi)((e) => {
        let {
            playlist: i,
            reference: t,
            onOpenChange: n,
            open: s,
            returnFocus: r,
          } = e,
          { settings: o, experiments: c, trailer: u } = (0, f.oR)(),
          d = (0, v.SB)(i),
          p = (0, v.BV)(i),
          m = o.layout === f.t8.Mobile,
          y =
            c.checkExperiment(f.pe.WebNextEntityTrailer, "on") &&
            true &&
            i.hasTrailer;
        (0, f.ZP)(s);
        let k = (0, a.useCallback)(() => {
          u.openPlaylistTrailer(i.uid, i.kind);
        }, [i.kind, i.uid, u]);
        return (0, l.jsxs)(h.v2, {
          title: i.title,
          onOpenChange: n,
          open: s,
          offsetOptions: 10,
          reference: t,
          isMobile: m,
          returnFocus: r,
          children: [
            !m && (0, l.jsx)(_.Zd, { onClick: p, isPinned: i.isPinned }),
            !i.isFavouritePlaylist &&
              (0, l.jsx)(_.xZ, { onClick: d, isLiked: i.isLiked }),
            y && (0, l.jsx)(_.NB, { onClick: k }),
          ],
        });
      });
      var L = t(88308),
        j = t.n(L);
      let b = (0, s.Pi)((e) => {
        let {
            className: i,
            playlist: t,
            children: s,
            contentLinesCount: h,
            customDescription: L,
          } = e,
          { ref: b, intersectionPropertyId: B } = (0, f.Vf)(),
          N = (0, f.x5)(),
          { formatMessage: g } = (0, r.Z)(),
          {
            sendLikeSearchFeedback: S,
            sendNavigateSearchFeedback: R,
            sendPlaySearchFeedback: V,
          } = (0, f.sA)(),
          [E, w] = (0, a.useState)(!1),
          [A, z] = (0, a.useState)(!1),
          [O, T] = (0, a.useState)(!1),
          F = x(t),
          I = (0, v.SB)(t),
          U = (0, v.BV)(t),
          M = (0, f.zx)(),
          W = (0, f.s0)(t.url),
          [Z, Y] = (0, a.useState)(!1),
          { isPlaying: D, togglePlay: K } = (0, f.qm)({
            playContextParams: {
              contextData: {
                type: u.Ak.Playlist,
                meta: { id: t.id, uuid: t.uuid },
                from: N,
              },
              loadContextMeta: !0,
            },
          }),
          G = (0, a.useCallback)(() => {
            M({ to: o.qU.PlaylistScreen }), null == R || R();
          }, [M, R]),
          H = (0, a.useCallback)(() => {
            G(), W();
          }, [G, W]),
          J = (0, a.useCallback)(() => {
            E || D || (w(!0), null == V || V()), K();
          }, [D, E, V, K]),
          q = (0, a.useCallback)(() => {
            A || t.isLiked || (z(!0), null == S || S()), I();
          }, [I, A, t.isLiked, S]),
          Q = (0, a.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          X = (0, a.useCallback)(() => {
            T(!O), Y(!O);
          }, [O]),
          $ = (0, a.useMemo)(() => {
            var e;
            return L
              ? (0, l.jsx)(k.Caption, {
                  variant: "span",
                  type: "entity",
                  size: "s",
                  weight: "medium",
                  lineClamp: 2,
                  children: L,
                })
              : (null === (e = t.artists) || void 0 === e ? void 0 : e.length)
                ? (0, l.jsx)(C.jO, {
                    className: j().artists,
                    artists: t.artists,
                    lineClamp: 1,
                    linkClassName: j().artistLink,
                    captionSize: "s",
                  })
                : void 0;
          }, [t.artists, L]),
          ee = (0, a.useMemo)(() => {
            if (!t.isFavouritePlaylist)
              return (0, l.jsx)(_.dJ, {
                className: (0, n.W)(j().likeButton, j().control),
                isLiked: t.isLiked,
                onClick: q,
                variant: "default",
                size: "s",
                iconSize: "xxs",
              });
          }, [q, t.isFavouritePlaylist, t.isLiked]),
          ei = (0, a.useMemo)(
            () =>
              (0, l.jsx)(y.Paper, {
                className: j().cover,
                radius: "s",
                withShadow: !0,
                ...(0, c.BA)(c.bG.playlist.PLAYLIST_CARD),
                children: (0, l.jsxs)("div", {
                  className: j().coverBlock,
                  onClick: H,
                  children: [
                    (0, l.jsx)(_.BE, {
                      className: j().image,
                      src: t.coverUri,
                      size: 200,
                      fit: "cover",
                      alt: F,
                      withAvatarReplace: !0,
                      "aria-hidden": !0,
                    }),
                    (0, l.jsx)(p.kk, {
                      isVisible: O || Z,
                      className: j().controls,
                      playControl: (0, l.jsx)(_.JM, {
                        className: (0, n.W)(j().playButton, j().control),
                        buttonVariant: "default",
                        withHover: !1,
                        iconSize: "xl",
                        variant: "filled",
                        onClick: J,
                        isPlaying: D,
                        disabled: !t.isAvailable,
                      }),
                      likeControl: ee,
                      menuControl: (0, l.jsx)(P, {
                        playlist: t,
                        onOpenChange: X,
                        open: O,
                        returnFocus: !1,
                        reference: (0, l.jsx)(d.z, {
                          onClick: Q,
                          className: (0, n.W)(j().menuButton, j().control),
                          "aria-label": g({
                            id: "interface-actions.context-menu",
                          }),
                          icon: (0, l.jsx)(m.J, {
                            size: "xxs",
                            variant: "more",
                          }),
                          size: "s",
                          radius: "round",
                          ...(0, c.BA)(
                            c.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                          ),
                        }),
                      }),
                      pinControl: (0, l.jsx)(_.RT, {
                        onClick: U,
                        isPinned: t.isPinned,
                        className: (0, n.W)(j().pinButton, j().control),
                        withRipple: !1,
                      }),
                    }),
                  ],
                }),
              }),
            [H, t, F, O, Z, J, D, ee, X, Q, g, U],
          ),
          et = !!t.actualLikesCount && !t.isLikesCountHidden;
        return (0, l.jsxs)(p.m7, {
          ref: b,
          "aria-label": F,
          className: (0, n.W)(j().root, i),
          title: (0, l.jsx)(k.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            ...(0, c.BA)(c.bG.playlist.PLAYLIST_TITLE),
            children: (0, l.jsx)(_.rU, {
              className: j().titleLink,
              href: t.url,
              onClick: G,
              children: t.title,
            }),
          }),
          srTitle: (0, l.jsx)(_.rU, {
            href: t.url,
            onClick: G,
            children: t.title,
          }),
          "data-intersection-property-id": B,
          contentLinesCount: h,
          view: ei,
          description: $,
          ...(0, c.BA)(c.bG.playlist.PLAYLIST_ITEM),
          children: [
            et &&
              (0, l.jsx)(_.DB, {
                ariaLabel: g(
                  { id: "entity-names.likes-counter" },
                  { counter: t.actualLikesCount },
                ),
                likesCount: t.actualLikesCount,
                isLiked: t.isLiked,
                handleLikeClick: I,
              }),
            s,
          ],
        });
      });
    },
    18921: function (e, i, t) {
      "use strict";
      t.d(i, {
        PlaylistsCarousel: function () {
          return o;
        },
      });
      var l = t(9753),
        n = t(98639),
        s = t(67868),
        a = t(22003);
      let r = (e) => {
          let {
            forwardRef: i,
            isShimmerVisible: t,
            isShimmerActive: n,
            title: r,
            description: o,
            playlists: c,
            containerClassName: u,
            className: d,
            headerClassName: p,
            viewAllActionLink: m,
            ...y
          } = e;
          return (0, l.jsx)(s.HY, {
            isShimmerVisible: t,
            isShimmerActive: n,
            className: d,
            headerClassName: p,
            containerClassName: u,
            ref: i,
            title: r,
            description: o,
            viewAllActionLink: m,
            ...y,
            children:
              null == c
                ? void 0
                : c.map((e) =>
                    (0, l.jsx)(
                      a.PlaylistCard,
                      { playlist: e, contentLinesCount: 3 },
                      e.key,
                    ),
                  ),
          });
        },
        o = (0, n.forwardRef)((e, i) => (0, l.jsx)(r, { forwardRef: i, ...e }));
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
  },
]);
