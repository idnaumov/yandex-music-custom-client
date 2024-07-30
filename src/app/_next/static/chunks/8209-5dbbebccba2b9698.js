(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8209],
  {
    32693: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ji: function () {
          return v;
        },
      });
      var n,
        i,
        a,
        o,
        l = r(9092),
        s = r(98639),
        u = r(80542);
      ((n = a || (a = {})).formatDate = "FormattedDate"),
        (n.formatTime = "FormattedTime"),
        (n.formatNumber = "FormattedNumber"),
        (n.formatList = "FormattedList"),
        (n.formatDisplayName = "FormattedDisplayName"),
        ((i = o || (o = {})).formatDate = "FormattedDateParts"),
        (i.formatTime = "FormattedTimeParts"),
        (i.formatNumber = "FormattedNumberParts"),
        (i.formatList = "FormattedListParts");
      var c = function (t) {
        var e = (0, u.Z)(),
          r = t.value,
          n = t.children,
          i = (0, l.__rest)(t, ["value", "children"]);
        return n(e.formatNumberToParts(r, i));
      };
      function d(t) {
        var e = function (e) {
          var r = (0, u.Z)(),
            n = e.value,
            i = e.children,
            a = (0, l.__rest)(e, ["value", "children"]),
            o = "string" == typeof n ? new Date(n || 0) : n;
          return i(
            "formatDate" === t
              ? r.formatDateToParts(o, a)
              : r.formatTimeToParts(o, a),
          );
        };
        return (e.displayName = o[t]), e;
      }
      function m(t) {
        var e = function (e) {
          var r = (0, u.Z)(),
            n = e.value,
            i = e.children,
            a = (0, l.__rest)(e, ["value", "children"]),
            o = r[t](n, a);
          if ("function" == typeof i) return i(o);
          var c = r.textComponent || s.Fragment;
          return s.createElement(c, null, o);
        };
        return (e.displayName = a[t]), e;
      }
      (c.displayName = "FormattedNumberParts"),
        (c.displayName = "FormattedNumberParts");
      var v = m("formatDate");
      m("formatTime"),
        m("formatNumber"),
        m("formatList"),
        m("formatDisplayName"),
        d("formatDate"),
        d("formatTime");
    },
    17295: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return s;
        },
      });
      var n,
        i = r(98639),
        a = {
          810: (t) => {
            t.exports = n || (n = r.t(i, 2));
          },
        },
        o = {},
        l = {};
      (() => {
        Object.defineProperty(l, "__esModule", { value: !0 }),
          (l.useToggle = void 0);
        let t = (function t(e) {
          var r = o[e];
          if (void 0 !== r) return r.exports;
          var n = (o[e] = { exports: {} });
          return a[e](n, n.exports, t), n.exports;
        })(810);
        l.useToggle = (e) => {
          let [r, n] = (0, t.useState)(e);
          return {
            state: r,
            toggle: (0, t.useCallback)(() => {
              n((t) => !t);
            }, []),
            toggleTrue: (0, t.useCallback)(() => {
              n(!0);
            }, []),
            toggleFalse: (0, t.useCallback)(() => {
              n(!1);
            }, []),
          };
        };
      })(),
        l.__esModule;
      var s = l.useToggle;
    },
    87908: function (t, e, r) {
      "use strict";
      r.d(e, {
        IT: function () {
          return o.ArtistCard;
        },
        xG: function () {
          return l.ArtistContextMenu;
        },
        o9: function () {
          return a;
        },
        Op: function () {
          return s;
        },
        v2: function () {
          return u.useArtistDisclaimer;
        },
      });
      var n = r(42288),
        i = r(33589);
      let a = n.V5.model("ArtistMeta", {
        artist: i.Go,
        lastMonthListeners: n.V5.maybe(n.V5.number),
      });
      var o = r(99654),
        l = r(54864);
      let s = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = t.reduce((t, e) => {
            var r, n;
            return (
              t +
              (null !==
                (n =
                  null === (r = e.decomposed) || void 0 === r
                    ? void 0
                    : r.length) && void 0 !== n
                ? n
                : 0)
            );
          }, 0);
        return t.length + e;
      };
      var u = r(66975);
    },
    66975: function (t, e, r) {
      "use strict";
      r.d(e, {
        useArtistDisclaimer: function () {
          return o;
        },
      });
      var n = r(98639),
        i = r(3429),
        a = r(63394);
      let o = (t) => {
        let { artist: e, callback: r, shouldHistoryBack: o } = t,
          {
            disclaimer: l,
            modals: { disclaimerModal: s },
          } = (0, a.oR)(),
          u = (0, n.useRef)(String((0, i.Z)())),
          c = (0, n.useRef)(!1),
          d = (0, a.uK)().get(a.ce);
        return (
          (0, n.useEffect)(() => {
            l.isUnsafeDisclaimerConfirmed &&
              l.id === u.current &&
              !c.current &&
              (null == r || r(), (c.current = !0));
          }, [r, l.id, l.isUnsafeDisclaimerConfirmed]),
          (0, n.useCallback)(
            async (t) => {
              let n = d.get(a.BU.ExEx);
              if (
                (null == e ? void 0 : e.isUnsafeLegal) &&
                (null == n
                  ? void 0
                  : n.includes("".concat(a.co.ARTIST, "_").concat(e.id)))
              ) {
                null == r || r();
                return;
              }
              if (
                (null == e ? void 0 : e.isLegalRejected) ||
                (null == e ? void 0 : e.isUnsafeLegal)
              ) {
                null == t || t.preventDefault(),
                  await l.getArtistDisclaimer({ artistId: e.id }),
                  e.isUnsafeLegal && l.setType(a.Gq.UNSAFE),
                  l.setId(u.current),
                  l.setEntityId(e.id),
                  l.setEntityType(a.co.ARTIST),
                  l.setShouldHistoryBack(!!o),
                  (c.current = !1),
                  s.open();
                return;
              }
              null == t || t.preventDefault(), null == r || r();
            },
            [
              null == e ? void 0 : e.id,
              null == e ? void 0 : e.isLegalRejected,
              null == e ? void 0 : e.isUnsafeLegal,
              r,
              l,
              s,
              d,
              o,
            ],
          )
        );
      };
    },
    99654: function (t, e, r) {
      "use strict";
      r.d(e, {
        ArtistCard: function () {
          return N;
        },
      });
      var n = r(9753),
        i = r(60836),
        a = r(9544),
        o = r(98639),
        l = r(80542),
        s = r(31014),
        u = r(52122),
        c = r(23881),
        d = r(84338),
        m = r(39513),
        v = r(27491),
        f = r(28852),
        p = r(12404),
        _ = r(2570),
        x = r(33589),
        b = r(63394),
        T = r(67868),
        g = r(66975),
        k = r(54864),
        C = r(62914),
        A = r.n(C);
      let N = (0, a.Pi)((t) => {
        let { artist: e, className: r, children: a, contentLinesCount: C } = t,
          { ref: N, intersectionPropertyId: h } = (0, b.Vf)(),
          S = (0, b.x5)(),
          { formatMessage: y } = (0, l.Z)(),
          [E, j] = (0, o.useState)(!1),
          [L, I] = (0, o.useState)(!1),
          [P, F] = (0, o.useState)(!1),
          {
            sendLikeSearchFeedback: R,
            sendNavigateSearchFeedback: B,
            sendPlaySearchFeedback: D,
          } = (0, b.sA)(),
          w = (0, b.zx)(),
          M = (0, x.SB)(e),
          O = (0, x.BV)(e),
          { id: z, name: U, coverUri: W, isLiked: Z } = e,
          G = (0, b.s0)(e.url),
          V = (0, b.s0)(e.url, !0),
          [Q, q] = (0, o.useState)(!1),
          J = (0, o.useMemo)(() => {
            let t = y({ id: "entity-names.artist-name" }, { artistName: U }),
              e = Z ? y({ id: "entity-names.has-your-like" }) : "";
            return "".concat(t, " ").concat(e);
          }, [U, Z, y]),
          { isPlaying: H, togglePlay: K } = (0, b.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Artist,
                meta: { id: Number(z) },
                from: S,
              },
              loadContextMeta: !0,
            },
          }),
          X = (0, g.useArtistDisclaimer)({ artist: e, callback: G }),
          Y = (0, g.useArtistDisclaimer)({ artist: e, callback: V }),
          $ = (0, g.useArtistDisclaimer)({ artist: e, callback: K }),
          tt = (0, x.ik)(Y, X),
          te = (0, o.useCallback)(
            (t) => {
              null == B || B(), w({ to: u.qU.ArtistScreen }), tt(t);
            },
            [B, w, tt],
          ),
          tr = (0, o.useCallback)(
            (t) => {
              te(t);
            },
            [te],
          ),
          tn = (0, o.useCallback)(() => {
            E || H || (j(!0), null == D || D()), $();
          }, [H, E, D, $]),
          ti = (0, o.useCallback)(() => {
            L || Z || (I(!0), null == R || R()), M();
          }, [Z, M, L, R]),
          ta = (0, o.useCallback)((t) => {
            t.preventDefault(), t.stopPropagation();
          }, []),
          to = (0, o.useCallback)(() => {
            F(!P), q(!P);
          }, [P]),
          tl = (0, o.useMemo)(
            () =>
              (0, n.jsx)(k.ArtistContextMenu, {
                artist: e,
                onOpenChange: to,
                open: P,
                returnFocus: !1,
                reference: (0, n.jsx)(m.z, {
                  onClick: ta,
                  className: (0, i.W)(A().menuButton, A().control),
                  "aria-label": y({ id: "interface-actions.context-menu" }),
                  icon: (0, n.jsx)(f.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [e, y, ta, to, P],
          ),
          ts = (0, o.useMemo)(() => {
            if (e.isAvailable)
              return (0, n.jsx)(v.kk, {
                isVisible: P || Q,
                className: A().controls,
                radius: "round",
                playControl: (0, n.jsx)(T.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, i.W)(A().playButton, A().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: tn,
                  isPlaying: H,
                  disabled: !e.isAvailableForPlaying,
                }),
                likeControl: (0, n.jsx)(T.dJ, {
                  className: (0, i.W)(A().likeButton, A().control),
                  isLiked: Z,
                  onClick: ti,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: tl,
                pinControl: (0, n.jsx)(T.RT, {
                  onClick: O,
                  isPinned: e.isPinned,
                  className: (0, i.W)(A().pinButton, A().control),
                  withRipple: !1,
                }),
              });
          }, [
            e.isAvailable,
            e.isAvailableForPlaying,
            tl,
            ti,
            tn,
            P,
            Q,
            Z,
            H,
            e.isPinned,
            O,
          ]),
          tu = (0, o.useMemo)(
            () =>
              (0, n.jsx)(p.Paper, {
                className: A().cover,
                radius: "round",
                withShadow: !0,
                ...(0, c.BA)(c.bG.artist.ARTIST_CARD),
                children: (0, n.jsxs)("div", {
                  className: A().coverBlock,
                  onClick: tr,
                  children: [
                    (0, n.jsx)(T.BE, {
                      className: A().image,
                      src: W,
                      size: 200,
                      fit: "cover",
                      alt: J,
                      withAvatarReplace: !0,
                      isAvailable: e.isAvailable,
                      "aria-hidden": !0,
                    }),
                    ts,
                  ],
                }),
              }),
            [tr, W, J, e.isAvailable, ts],
          );
        return (0, n.jsx)(v.m7, {
          ref: N,
          className: (0, i.W)(A().root, r),
          textPosition: "center",
          "aria-label": J,
          title: (0, n.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, n.jsx)(T.rU, {
              className: A().titleLink,
              href: e.url,
              "aria-label": J,
              onClick: te,
              ...(0, c.BA)(c.bG.artist.ARTIST_TITLE),
              children: U,
            }),
          }),
          srTitle: (0, n.jsx)(T.rU, { href: e.url, onClick: te, children: J }),
          "data-intersection-property-id": h,
          description: (0, n.jsx)(_.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, c.BA)(c.bG.artist.ARTIST_SUBTITLE),
            children: (0, n.jsx)(s.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: C,
          view: tu,
          ...(0, c.BA)(c.bG.artist.ARTIST_ITEM),
          children: a,
        });
      });
    },
    54864: function (t, e, r) {
      "use strict";
      r.d(e, {
        ArtistContextMenu: function () {
          return c;
        },
      });
      var n = r(9753),
        i = r(9544),
        a = r(98639),
        o = r(385),
        l = r(33589),
        s = r(63394),
        u = r(67868);
      let c = (0, i.Pi)((t) => {
        var e, r;
        let {
            artist: i,
            lastMonthListeners: c,
            reference: d,
            onOpenChange: m,
            open: v,
            returnFocus: f,
          } = t,
          { settings: p, experiments: _, trailer: x } = (0, s.oR)(),
          b = (0, l.BV)(i),
          T = (0, l.SB)(i),
          g = "".concat(s.aU.ARTIST, "-").concat(null == i ? void 0 : i.id),
          k = p.layout === s.t8.Mobile,
          C =
            _.checkExperiment(s.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null == i ? void 0 : i.hasTrailer),
          { href: A } = (0, s.qK)(
            null !== (e = null == i ? void 0 : i.url) && void 0 !== e ? e : "",
          ),
          { isPlaying: N, togglePlay: h } = (0, s.Qh)({
            seeds:
              null !== (r = null == i ? void 0 : i.seeds) && void 0 !== r
                ? r
                : [],
            pageIdForFrom: s.Rh.RADIO,
            blockIdForFrom: g,
          }),
          S = (0, a.useCallback)(() => {
            N || h();
          }, [N, h]),
          y = (0, a.useCallback)(() => {
            (null == i ? void 0 : i.id) &&
              x.openArtistTrailer(null == i ? void 0 : i.id);
          }, [null == i ? void 0 : i.id, x]);
        return (
          (0, s.ZP)(v),
          (0, n.jsxs)(o.v2, {
            reference: d,
            isMobile: k,
            title: null == i ? void 0 : i.name,
            description: c,
            offsetOptions: 10,
            open: v,
            onOpenChange: m,
            returnFocus: f,
            children: [
              !k &&
                (0, n.jsx)(u.Zd, {
                  onClick: b,
                  isPinned: null == i ? void 0 : i.isPinned,
                }),
              (0, n.jsx)(u.xZ, {
                onClick: T,
                isLiked: null == i ? void 0 : i.isLiked,
                disabled: !(null == i ? void 0 : i.isAvailable),
              }),
              C && (0, n.jsx)(u.NB, { onClick: y }),
              (0, n.jsx)(u.GQ, {
                onClick: S,
                disabled: !(null == i ? void 0 : i.isAvailable),
                variant: "artist",
              }),
              (0, n.jsx)(u.zq, {
                disabled: !i,
                shareLink: A,
                entityVariant: "artist",
                entityTitle: null == i ? void 0 : i.name,
              }),
            ],
          })
        );
      });
    },
    5293: function (t, e, r) {
      "use strict";
      r.d(e, {
        I7: function () {
          return p;
        },
        b4: function () {
          return l;
        },
        at: function () {
          return x;
        },
        zU: function () {
          return _;
        },
      });
      var n = r(9753),
        i = r(98639),
        a = r.t(i, 2),
        o = r(67868);
      let l = (t) => {
        let { children: e, title: r, className: a } = t,
          { setTitleElement: l, setTitle: s } = (0, i.useContext)(o.pI),
          u = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            (null == u ? void 0 : u.current) && l(u), r && s(r);
          }, [u, r, l, s]),
          (0, i.useEffect)(
            () => () => {
              s("");
            },
            [s],
          ),
          (0, n.jsx)("div", { ref: u, className: a, children: e })
        );
      };
      var s = r(9544),
        u = {
          810: (t) => {
            t.exports = a;
          },
        },
        c = {},
        d = {};
      (() => {
        Object.defineProperty(d, "__esModule", { value: !0 }),
          (d.useScroll = void 0);
        let t = (function t(e) {
          var r = c[e];
          if (void 0 !== r) return r.exports;
          var n = (c[e] = { exports: {} });
          return u[e](n, n.exports, t), n.exports;
        })(810);
        d.useScroll = (e) => {
          (0, t.useEffect)(
            () => (
              window.addEventListener("scroll", e, {
                capture: !0,
                passive: !0,
              }),
              () => {
                window.removeEventListener("scroll", e);
              }
            ),
            [e],
          );
        };
      })(),
        d.__esModule;
      var m = d.useScroll,
        v = r(63394);
      let f = (t) => {
          let { element: e, scrollTop: r, isMobile: n } = t,
            i = 0.4 * e.clientHeight;
          return r + (n ? 56 : 72) >= e.offsetTop + i;
        },
        p = (0, s.Pi)((t) => {
          let {
              children: e,
              scrollElement: r,
              outerTitle: a = "",
              headerElement: l,
              headerThreshold: s,
            } = t,
            [u, c] = (0, i.useState)(a),
            [d, p] = (0, i.useState)(null),
            [_, x] = (0, i.useState)(!1),
            [b, T] = (0, i.useState)(!1),
            { settings: g } = (0, v.oR)(),
            k = g.layout === v.t8.Mobile;
          (0, i.useLayoutEffect)(() => {
            c(a);
          }, [a]);
          let C = (0, i.useCallback)(() => {
            if (!r) return;
            let t = null != s ? s : 10,
              e = l ? Number(l.offsetTop) - t : t;
            e < 0 && (e = 0),
              T(r.scrollTop > e),
              (null == d ? void 0 : d.current) &&
                x(
                  f({
                    element: null == d ? void 0 : d.current,
                    scrollTop: r.scrollTop,
                    isMobile: k,
                  }),
                );
          }, [r, s, l, d, k]);
          (0, i.useEffect)(() => {
            (r && (null == r ? void 0 : r.scrollTop) !== 0) || T(!1);
          }, [r, null == r ? void 0 : r.scrollTop]),
            m(C);
          let A = (0, i.useMemo)(
            () => ({
              title: u,
              setTitle: c,
              titleElement: d,
              scrollElement: r,
              setTitleElement: p,
              isScrolledTitle: _,
              isScrolling: b,
            }),
            [u, _, d, r, b],
          );
          return (0, n.jsx)(o.pI.Provider, { value: A, children: e });
        });
      r(66414);
      let _ = () => {
          let [t, e] = (0, i.useState)(null),
            r = (0, i.useCallback)(
              (r) => {
                t !== r && e(r);
              },
              [t],
            );
          return [t, r];
        },
        x = (t, e) => (
          (0, v.uK)().get(v.Xt),
          [
            (0, i.useMemo)(() => {
              if (void 0 !== e) {
                let r = e - 17;
                return {
                  "--average-color-background": t,
                  transform: "translateY(".concat(e >= 17 ? 0 : r, "px)"),
                  opacity: 1,
                };
              }
              return {};
            }, [e, !1, t]),
            (0, i.useMemo)(() => ({ "--average-color-background": t }), [t]),
          ]
        );
    },
    55784: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return i.h;
        },
        n: function () {
          return n.n;
        },
      });
      var n = r(33861),
        i = r(34906);
    },
    66482: function (t, e, r) {
      "use strict";
      r.d(e, {
        EntitiesNotFoundPage: function () {
          return s;
        },
      });
      var n = r(9753),
        i = r(9544),
        a = r(98639),
        o = r(23948),
        l = r(63394);
      let s = (0, i.Pi)(() => {
        let { landingBlockEntities: t } = (0, l.oR)();
        return (
          (0, a.useEffect)(
            () => () => {
              t.reset();
            },
            [t],
          ),
          (0, n.jsx)(o.T, {})
        );
      });
    },
    75418: function (t, e, r) {
      "use strict";
      r.d(e, {
        EntitiesPage: function () {
          return m;
        },
      });
      var n = r(9753),
        i = r(9544),
        a = r(74717),
        o = r(98639),
        l = r(28326),
        s = r(63394),
        u = r(69869);
      let c = {
          "new-releases": u.gQ.NEW_RELEASES,
          "editorial-new-releases": u.gQ.EDITORIAL_NEW_RELEASES,
          "personal-artists": u.gQ.PERSONAL_ARTISTS,
          "new-stars-artists": u.gQ.NEW_STARS_ARTISTS,
          "editorial-artists": u.gQ.EDITORIAL_ARTISTS,
          "new-playlists": u.gQ.NEW_PLAYLISTS,
          "editorial-compilation": u.gQ.EDITORIAL_COMPILATION,
          "chart-albums": u.gQ.CHART_ALBUMS,
        },
        d = (t) => c[t],
        m = (0, i.Pi)((t) => {
          let { blockType: e, blockId: r } = t,
            { landingBlockEntities: i } = (0, s.oR)();
          (0, o.useEffect)(
            () => () => {
              i.reset();
            },
            [i, e, r],
          ),
            (0, s.NO)(i.loadingState === s.Gu.RESOLVE);
          let u = d(e);
          return (
            (i.isNotFound || !u) && (0, a.notFound)(),
            (0, n.jsx)(s.Lh, {
              pageId: s.Rh.ENTITIES,
              children: (0, n.jsx)(s.J, {
                blockId: "".concat(s.BE.DISCOVERY_BLOCK, "-").concat(r),
                blockIdForFrom: "".concat(s.BE.DISCOVERY_BLOCK, "-").concat(r),
                blockPosX: 1,
                blockPosY: 1,
                blockType: u,
                objectsCount: i.items.length,
                children: (0, n.jsx)(l.v8, { blockType: u, blockId: r }),
              }),
            })
          );
        });
    },
    23948: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return n.NotFound;
        },
      });
      var n = r(8964);
    },
    8964: function (t, e, r) {
      "use strict";
      r.d(e, {
        NotFound: function () {
          return f;
        },
      });
      var n = r(9753),
        i = r(60836),
        a = r(9544),
        o = r(31014),
        l = r(39513),
        s = r(28852),
        u = r(2570),
        c = r(55784),
        d = r(63394),
        m = r(23067),
        v = r.n(m);
      let f = (0, a.Pi)((t) => {
        let { className: e } = t,
          { contentRef: r } = (0, d.$Y)(),
          a = (0, d.s0)("/");
        return (
          (0, d.ZP)(!0),
          (0, n.jsxs)("div", {
            className: (0, i.W)(v().root, { [v().root_desktop]: !r }, e),
            children: [
              (0, n.jsx)(c.n, {
                withBackwardFallback: "/",
                className: v().navigation,
                withForwardControl: !1,
              }),
              (0, n.jsxs)("div", {
                className: v().content,
                children: [
                  (0, n.jsx)(s.J, {
                    className: v().icon,
                    variant: "musicLogo",
                    size: "xxl",
                  }),
                  (0, n.jsx)(u.Heading, {
                    className: (0, i.W)(v().title, v().important),
                    variant: "h3",
                    size: "xs",
                    children: (0, n.jsx)(o.Z, {
                      id: "page-error.page-does-not-exist",
                    }),
                  }),
                  (0, n.jsx)(u.Caption, {
                    className: (0, i.W)(v().text, v().important),
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    children: (0, n.jsx)(o.Z, {
                      id: "page-error.page-does-not-exist-description",
                    }),
                  }),
                  (0, n.jsx)(l.z, {
                    onClick: a,
                    className: v().button,
                    role: "link",
                    color: "secondary",
                    size: "l",
                    radius: "xxxl",
                    children: (0, n.jsx)(u.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "m",
                      children: (0, n.jsx)(o.Z, { id: "navigation.page-main" }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    62914: function (t) {
      t.exports = {
        root: "ArtistCard_root__x67BK",
        controls: "ArtistCard_controls__jsqqI",
        cover: "ArtistCard_cover__29ShU",
        coverBlock: "ArtistCard_coverBlock__dBL4x",
        image: "ArtistCard_image__pONJx",
        titleLink: "ArtistCard_titleLink__G8Puz",
        playButton: "ArtistCard_playButton__XZoTr",
        likeButton: "ArtistCard_likeButton__LU9TL",
        menuButton: "ArtistCard_menuButton__EynXG",
        pinButton: "ArtistCard_pinButton__G_VOi",
        control: "ArtistCard_control___qv5j",
      };
    },
    23067: function (t) {
      t.exports = {
        root: "NotFound_root__47ZX6",
        root_desktop: "NotFound_root_desktop___QqSb",
        navigation: "NotFound_navigation__q8rIW",
        content: "NotFound_content__3kry_",
        icon: "NotFound_icon___Wa9y",
        title: "NotFound_title__akG_o",
        important: "NotFound_important__z1LWl",
        text: "NotFound_text__oxDZv",
        button: "NotFound_button__jF4uH",
      };
    },
  },
]);
