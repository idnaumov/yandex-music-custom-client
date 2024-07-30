(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9434],
  {
    17295: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return r;
        },
      });
      var a,
        s = n(98639),
        i = {
          810: (e) => {
            e.exports = a || (a = n.t(s, 2));
          },
        },
        o = {},
        l = {};
      (() => {
        Object.defineProperty(l, "__esModule", { value: !0 }),
          (l.useToggle = void 0);
        let e = (function e(t) {
          var n = o[t];
          if (void 0 !== n) return n.exports;
          var a = (o[t] = { exports: {} });
          return i[t](a, a.exports, e), a.exports;
        })(810);
        l.useToggle = (t) => {
          let [n, a] = (0, e.useState)(t);
          return {
            state: n,
            toggle: (0, e.useCallback)(() => {
              a((e) => !e);
            }, []),
            toggleTrue: (0, e.useCallback)(() => {
              a(!0);
            }, []),
            toggleFalse: (0, e.useCallback)(() => {
              a(!1);
            }, []),
          };
        };
      })(),
        l.__esModule;
      var r = l.useToggle;
    },
    87908: function (e, t, n) {
      "use strict";
      n.d(t, {
        IT: function () {
          return o.ArtistCard;
        },
        xG: function () {
          return l.ArtistContextMenu;
        },
        o9: function () {
          return i;
        },
        Op: function () {
          return r;
        },
        v2: function () {
          return u.useArtistDisclaimer;
        },
      });
      var a = n(42288),
        s = n(33589);
      let i = a.V5.model("ArtistMeta", {
        artist: s.Go,
        lastMonthListeners: a.V5.maybe(a.V5.number),
      });
      var o = n(99654),
        l = n(54864);
      let r = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = e.reduce((e, t) => {
            var n, a;
            return (
              e +
              (null !==
                (a =
                  null === (n = t.decomposed) || void 0 === n
                    ? void 0
                    : n.length) && void 0 !== a
                ? a
                : 0)
            );
          }, 0);
        return e.length + t;
      };
      var u = n(66975);
    },
    66975: function (e, t, n) {
      "use strict";
      n.d(t, {
        useArtistDisclaimer: function () {
          return o;
        },
      });
      var a = n(98639),
        s = n(3429),
        i = n(63394);
      let o = (e) => {
        let { artist: t, callback: n, shouldHistoryBack: o } = e,
          {
            disclaimer: l,
            modals: { disclaimerModal: r },
          } = (0, i.oR)(),
          u = (0, a.useRef)(String((0, s.Z)())),
          c = (0, a.useRef)(!1),
          d = (0, i.uK)().get(i.ce);
        return (
          (0, a.useEffect)(() => {
            l.isUnsafeDisclaimerConfirmed &&
              l.id === u.current &&
              !c.current &&
              (null == n || n(), (c.current = !0));
          }, [n, l.id, l.isUnsafeDisclaimerConfirmed]),
          (0, a.useCallback)(
            async (e) => {
              let a = d.get(i.BU.ExEx);
              if (
                (null == t ? void 0 : t.isUnsafeLegal) &&
                (null == a
                  ? void 0
                  : a.includes("".concat(i.co.ARTIST, "_").concat(t.id)))
              ) {
                null == n || n();
                return;
              }
              if (
                (null == t ? void 0 : t.isLegalRejected) ||
                (null == t ? void 0 : t.isUnsafeLegal)
              ) {
                null == e || e.preventDefault(),
                  await l.getArtistDisclaimer({ artistId: t.id }),
                  t.isUnsafeLegal && l.setType(i.Gq.UNSAFE),
                  l.setId(u.current),
                  l.setEntityId(t.id),
                  l.setEntityType(i.co.ARTIST),
                  l.setShouldHistoryBack(!!o),
                  (c.current = !1),
                  r.open();
                return;
              }
              null == e || e.preventDefault(), null == n || n();
            },
            [
              null == t ? void 0 : t.id,
              null == t ? void 0 : t.isLegalRejected,
              null == t ? void 0 : t.isUnsafeLegal,
              n,
              l,
              r,
              d,
              o,
            ],
          )
        );
      };
    },
    99654: function (e, t, n) {
      "use strict";
      n.d(t, {
        ArtistCard: function () {
          return T;
        },
      });
      var a = n(9753),
        s = n(60836),
        i = n(9544),
        o = n(98639),
        l = n(80542),
        r = n(31014),
        u = n(52122),
        c = n(23881),
        d = n(84338),
        _ = n(39513),
        f = n(27491),
        p = n(28852),
        x = n(12404),
        v = n(2570),
        m = n(33589),
        C = n(63394),
        h = n(67868),
        N = n(66975),
        b = n(54864),
        k = n(62914),
        B = n.n(k);
      let T = (0, i.Pi)((e) => {
        let { artist: t, className: n, children: i, contentLinesCount: k } = e,
          { ref: T, intersectionPropertyId: y } = (0, C.Vf)(),
          S = (0, C.x5)(),
          { formatMessage: A } = (0, l.Z)(),
          [j, E] = (0, o.useState)(!1),
          [R, I] = (0, o.useState)(!1),
          [g, z] = (0, o.useState)(!1),
          {
            sendLikeSearchFeedback: O,
            sendNavigateSearchFeedback: P,
            sendPlaySearchFeedback: M,
          } = (0, C.sA)(),
          L = (0, C.zx)(),
          F = (0, m.SB)(t),
          D = (0, m.BV)(t),
          { id: G, name: U, coverUri: q, isLiked: w } = t,
          W = (0, C.s0)(t.url),
          J = (0, C.s0)(t.url, !0),
          [Z, X] = (0, o.useState)(!1),
          V = (0, o.useMemo)(() => {
            let e = A({ id: "entity-names.artist-name" }, { artistName: U }),
              t = w ? A({ id: "entity-names.has-your-like" }) : "";
            return "".concat(e, " ").concat(t);
          }, [U, w, A]),
          { isPlaying: K, togglePlay: H } = (0, C.qm)({
            playContextParams: {
              contextData: {
                type: d.Ak.Artist,
                meta: { id: Number(G) },
                from: S,
              },
              loadContextMeta: !0,
            },
          }),
          $ = (0, N.useArtistDisclaimer)({ artist: t, callback: W }),
          Q = (0, N.useArtistDisclaimer)({ artist: t, callback: J }),
          Y = (0, N.useArtistDisclaimer)({ artist: t, callback: H }),
          ee = (0, m.ik)(Q, $),
          et = (0, o.useCallback)(
            (e) => {
              null == P || P(), L({ to: u.qU.ArtistScreen }), ee(e);
            },
            [P, L, ee],
          ),
          en = (0, o.useCallback)(
            (e) => {
              et(e);
            },
            [et],
          ),
          ea = (0, o.useCallback)(() => {
            j || K || (E(!0), null == M || M()), Y();
          }, [K, j, M, Y]),
          es = (0, o.useCallback)(() => {
            R || w || (I(!0), null == O || O()), F();
          }, [w, F, R, O]),
          ei = (0, o.useCallback)((e) => {
            e.preventDefault(), e.stopPropagation();
          }, []),
          eo = (0, o.useCallback)(() => {
            z(!g), X(!g);
          }, [g]),
          el = (0, o.useMemo)(
            () =>
              (0, a.jsx)(b.ArtistContextMenu, {
                artist: t,
                onOpenChange: eo,
                open: g,
                returnFocus: !1,
                reference: (0, a.jsx)(_.z, {
                  onClick: ei,
                  className: (0, s.W)(B().menuButton, B().control),
                  "aria-label": A({ id: "interface-actions.context-menu" }),
                  icon: (0, a.jsx)(p.J, { size: "xxs", variant: "more" }),
                  size: "s",
                  radius: "round",
                  ...(0, c.BA)(c.bG.artist.ARTIST_CONTEXT_MENU_BUTTON),
                }),
              }),
            [t, A, ei, eo, g],
          ),
          er = (0, o.useMemo)(() => {
            if (t.isAvailable)
              return (0, a.jsx)(f.kk, {
                isVisible: g || Z,
                className: B().controls,
                radius: "round",
                playControl: (0, a.jsx)(h.JM, {
                  buttonVariant: "default",
                  withHover: !1,
                  className: (0, s.W)(B().playButton, B().control),
                  iconSize: "xl",
                  variant: "filled",
                  onClick: ea,
                  isPlaying: K,
                  disabled: !t.isAvailableForPlaying,
                }),
                likeControl: (0, a.jsx)(h.dJ, {
                  className: (0, s.W)(B().likeButton, B().control),
                  isLiked: w,
                  onClick: es,
                  variant: "default",
                  size: "s",
                  iconSize: "xxs",
                }),
                menuControl: el,
                pinControl: (0, a.jsx)(h.RT, {
                  onClick: D,
                  isPinned: t.isPinned,
                  className: (0, s.W)(B().pinButton, B().control),
                  withRipple: !1,
                }),
              });
          }, [
            t.isAvailable,
            t.isAvailableForPlaying,
            el,
            es,
            ea,
            g,
            Z,
            w,
            K,
            t.isPinned,
            D,
          ]),
          eu = (0, o.useMemo)(
            () =>
              (0, a.jsx)(x.Paper, {
                className: B().cover,
                radius: "round",
                withShadow: !0,
                ...(0, c.BA)(c.bG.artist.ARTIST_CARD),
                children: (0, a.jsxs)("div", {
                  className: B().coverBlock,
                  onClick: en,
                  children: [
                    (0, a.jsx)(h.BE, {
                      className: B().image,
                      src: q,
                      size: 200,
                      fit: "cover",
                      alt: V,
                      withAvatarReplace: !0,
                      isAvailable: t.isAvailable,
                      "aria-hidden": !0,
                    }),
                    er,
                  ],
                }),
              }),
            [en, q, V, t.isAvailable, er],
          );
        return (0, a.jsx)(f.m7, {
          ref: T,
          className: (0, s.W)(B().root, n),
          textPosition: "center",
          "aria-label": V,
          title: (0, a.jsx)(v.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: (0, a.jsx)(h.rU, {
              className: B().titleLink,
              href: t.url,
              "aria-label": V,
              onClick: et,
              ...(0, c.BA)(c.bG.artist.ARTIST_TITLE),
              children: U,
            }),
          }),
          srTitle: (0, a.jsx)(h.rU, { href: t.url, onClick: et, children: V }),
          "data-intersection-property-id": y,
          description: (0, a.jsx)(v.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            ...(0, c.BA)(c.bG.artist.ARTIST_SUBTITLE),
            children: (0, a.jsx)(r.Z, { id: "entity-names.singer" }),
          }),
          contentLinesCount: k,
          view: eu,
          ...(0, c.BA)(c.bG.artist.ARTIST_ITEM),
          children: i,
        });
      });
    },
    54864: function (e, t, n) {
      "use strict";
      n.d(t, {
        ArtistContextMenu: function () {
          return c;
        },
      });
      var a = n(9753),
        s = n(9544),
        i = n(98639),
        o = n(385),
        l = n(33589),
        r = n(63394),
        u = n(67868);
      let c = (0, s.Pi)((e) => {
        var t, n;
        let {
            artist: s,
            lastMonthListeners: c,
            reference: d,
            onOpenChange: _,
            open: f,
            returnFocus: p,
          } = e,
          { settings: x, experiments: v, trailer: m } = (0, r.oR)(),
          C = (0, l.BV)(s),
          h = (0, l.SB)(s),
          N = "".concat(r.aU.ARTIST, "-").concat(null == s ? void 0 : s.id),
          b = x.layout === r.t8.Mobile,
          k =
            v.checkExperiment(r.pe.WebNextEntityTrailer, "on") &&
            true &&
            (null == s ? void 0 : s.hasTrailer),
          { href: B } = (0, r.qK)(
            null !== (t = null == s ? void 0 : s.url) && void 0 !== t ? t : "",
          ),
          { isPlaying: T, togglePlay: y } = (0, r.Qh)({
            seeds:
              null !== (n = null == s ? void 0 : s.seeds) && void 0 !== n
                ? n
                : [],
            pageIdForFrom: r.Rh.RADIO,
            blockIdForFrom: N,
          }),
          S = (0, i.useCallback)(() => {
            T || y();
          }, [T, y]),
          A = (0, i.useCallback)(() => {
            (null == s ? void 0 : s.id) &&
              m.openArtistTrailer(null == s ? void 0 : s.id);
          }, [null == s ? void 0 : s.id, m]);
        return (
          (0, r.ZP)(f),
          (0, a.jsxs)(o.v2, {
            reference: d,
            isMobile: b,
            title: null == s ? void 0 : s.name,
            description: c,
            offsetOptions: 10,
            open: f,
            onOpenChange: _,
            returnFocus: p,
            children: [
              !b &&
                (0, a.jsx)(u.Zd, {
                  onClick: C,
                  isPinned: null == s ? void 0 : s.isPinned,
                }),
              (0, a.jsx)(u.xZ, {
                onClick: h,
                isLiked: null == s ? void 0 : s.isLiked,
                disabled: !(null == s ? void 0 : s.isAvailable),
              }),
              k && (0, a.jsx)(u.NB, { onClick: A }),
              (0, a.jsx)(u.GQ, {
                onClick: S,
                disabled: !(null == s ? void 0 : s.isAvailable),
                variant: "artist",
              }),
              (0, a.jsx)(u.zq, {
                disabled: !s,
                shareLink: B,
                entityVariant: "artist",
                entityTitle: null == s ? void 0 : s.name,
              }),
            ],
          })
        );
      });
    },
    55784: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return s.h;
        },
        n: function () {
          return a.n;
        },
      });
      var a = n(33861),
        s = n(34906);
    },
    91173: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return r;
        },
      });
      var a = n(9753),
        s = n(98639),
        i = n(87181),
        o = n(63394),
        l = n(80128);
      let r = () => {
        let { notify: e } = (0, o.d$)(),
          { sonataState: t, fullscreenPlayer: n } = (0, o.oR)(),
          r = (0, o.R$)();
        return (0, s.useCallback)(() => {
          if (null === t.entityMeta || !t.canChangeRepeatMode) return;
          let s = i.zq.NONE;
          switch (t.repeatMode) {
            case i.zq.NONE:
              s = i.zq.CONTEXT;
              break;
            case i.zq.CONTEXT:
              s = i.zq.ONE;
          }
          null == r || r.setRepeatMode(s),
            e((0, a.jsx)(l.NotificationRepeat, { repeatMode: s }), {
              containerId: n.modal.isOpened ? o.W$.FULLSCREEN_INFO : o.W$.INFO,
            });
        }, [
          n.modal.isOpened,
          e,
          r,
          t.canChangeRepeatMode,
          t.entityMeta,
          t.repeatMode,
        ]);
      };
    },
    16129: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return l;
        },
      });
      var a = n(9753),
        s = n(98639),
        i = n(63394),
        o = n(18143);
      let l = () => {
        let { notify: e } = (0, i.d$)(),
          { sonataState: t, fullscreenPlayer: n } = (0, i.oR)(),
          l = (0, i.R$)();
        return (0, s.useCallback)(() => {
          null !== t.entityMeta &&
            t.canShuffle &&
            (null == l || l.toggleShuffle(),
            e(
              (0, a.jsx)(o.NotificationShuffle, {
                shuffle: !!(null == l
                  ? void 0
                  : l.state.queueState.shuffle.value),
              }),
              {
                containerId: n.modal.isOpened
                  ? i.W$.FULLSCREEN_INFO
                  : i.W$.INFO,
              },
            ));
        }, [n.modal.isOpened, e, l, t.canShuffle, t.entityMeta]);
      };
    },
    80128: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationRepeat: function () {
          return f;
        },
      });
      var a = n(9753),
        s = n(60836),
        i = n(98639),
        o = n(31014),
        l = n(87181),
        r = n(28852),
        u = n(2570),
        c = n(67868),
        d = n(15450),
        _ = n.n(d);
      let f = (e) => {
        let { repeatMode: t, closeToast: n } = e,
          d = t === l.zq.ONE ? "repeat_one" : "repeat",
          f = (0, i.useMemo)(() => {
            let e;
            switch (t) {
              case l.zq.CONTEXT:
                e = (0, a.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-context",
                });
                break;
              case l.zq.ONE:
                e = (0, a.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-track",
                });
                break;
              case l.zq.NONE:
              default:
                e = (0, a.jsx)(o.Z, {
                  id: "notifications-info.change-repeat-none",
                });
            }
            return (0, a.jsx)(u.Caption, {
              className: _().message,
              variant: "div",
              type: "controls",
              size: "m",
              children: e,
            });
          }, [t]);
        return (0, a.jsx)(c.Yj, {
          cover: (0, a.jsx)(r.J, {
            className: (0, s.W)(_().icon, {
              [_().icon_unset]: t === l.zq.NONE,
            }),
            size: "xs",
            variant: d,
          }),
          message: f,
          closeToast: n,
        });
      };
    },
    18143: function (e, t, n) {
      "use strict";
      n.d(t, {
        NotificationShuffle: function () {
          return _;
        },
      });
      var a = n(9753),
        s = n(60836),
        i = n(98639),
        o = n(31014),
        l = n(28852),
        r = n(2570),
        u = n(67868),
        c = n(54394),
        d = n.n(c);
      let _ = (e) => {
        let { shuffle: t, closeToast: n } = e,
          c = (0, i.useMemo)(() => {
            let e;
            return (
              (e = t
                ? (0, a.jsx)(o.Z, { id: "notifications-info.shuffle-enabled" })
                : (0, a.jsx)(o.Z, {
                    id: "notifications-info.shuffle-disabled",
                  })),
              (0, a.jsx)(r.Caption, {
                className: d().message,
                variant: "div",
                type: "controls",
                size: "m",
                children: e,
              })
            );
          }, [t]);
        return (0, a.jsx)(u.Yj, {
          cover: (0, a.jsx)(l.J, {
            className: (0, s.W)(d().icon, { [d().icon_unset]: !t }),
            size: "xs",
            variant: "shuffle",
          }),
          message: c,
          closeToast: n,
        });
      };
    },
    99331: function (e, t, n) {
      "use strict";
      n.d(t, {
        RepeatButton: function () {
          return x;
        },
      });
      var a = n(9753),
        s = n(60836),
        i = n(80542),
        o = n(23881),
        l = n(87181),
        r = n(39513),
        u = n(28852),
        c = n(91173),
        d = n(24749),
        _ = n.n(d);
      let f = (e, t, n) =>
          t(
            e === l.zq.NONE || n
              ? { id: "player-actions.repeat" }
              : e === l.zq.ONE
                ? { id: "player-actions.repeat-one" }
                : { id: "player-actions.repeat-context" },
          ),
        p = (e, t) =>
          e === l.zq.NONE || t
            ? o.bG.sonata.REPEAT_BUTTON_NO_REPEAT
            : e === l.zq.ONE
              ? o.bG.sonata.REPEAT_BUTTON_REPEAT_ONE
              : o.bG.sonata.REPEAT_BUTTON_REPEAT_CONTEXT,
        x = (e) => {
          let {
              isDisabled: t,
              repeatMode: n,
              className: d,
              iconClassName: x,
              size: v = "xxxs",
              iconSize: m = "xs",
              color: C,
              variant: h = "default",
            } = e,
            N = (0, c.t)(),
            { formatMessage: b } = (0, i.Z)(),
            k = t || n !== l.zq.ONE ? "repeat" : "repeat_one",
            B = f(n, b, t);
          return (0, a.jsx)(r.z, {
            className: d,
            radius: "round",
            size: v,
            variant: h,
            color: C,
            disabled: t,
            withRipple: !1,
            "aria-label": B,
            "aria-pressed": !t && n !== l.zq.NONE,
            onClick: N,
            icon: (0, a.jsx)(u.J, {
              size: m,
              variant: k,
              className: (0, s.W)(
                _().repeatIcon,
                _()["repeatIcon_".concat(n)],
                { [_().repeatIcon_disabled]: t },
                x,
              ),
            }),
            ...(0, o.BA)(p(n, t)),
          });
        };
    },
    94975: function (e, t, n) {
      "use strict";
      n.d(t, {
        ShuffleButton: function () {
          return _;
        },
      });
      var a = n(9753),
        s = n(60836),
        i = n(80542),
        o = n(23881),
        l = n(39513),
        r = n(28852),
        u = n(16129),
        c = n(24584),
        d = n.n(c);
      let _ = (e) => {
        let {
            isDisabled: t,
            shuffle: n,
            className: c,
            size: _ = "xxxs",
            variant: f = "default",
            iconSize: p = "xs",
            color: x,
          } = e,
          v = (0, u.m)(),
          { formatMessage: m } = (0, i.Z)();
        return (0, a.jsx)(l.z, {
          className: c,
          radius: "round",
          size: _,
          variant: f,
          color: x,
          withRipple: !1,
          disabled: t,
          "aria-label": m({ id: "player-actions.shuffle" }),
          "aria-pressed": !t && n,
          icon: (0, a.jsx)(r.J, {
            variant: "shuffle",
            size: p,
            className: (0, s.W)(d().shuffleIcon, {
              [d().shuffleIcon_disabled]: t,
              [d().shuffleIcon_on]: !t && n,
              [d().shuffleIcon_off]: !t && !n,
            }),
          }),
          onClick: v,
          ...(0, o.BA)(o.bG.sonata.SHUFFLE_BUTTON),
        });
      };
    },
    78457: function (e, t, n) {
      "use strict";
      n.d(t, {
        SonataControls: function () {
          return I;
        },
      });
      var a = n(9753),
        s = n(9544),
        i = n(98639),
        o = n(15419),
        l = n(63394),
        r = n(91173),
        u = n(16129),
        c = n(60836),
        d = n(80542),
        _ = n(23881),
        f = n(39513),
        p = n(28852),
        x = n(67868),
        v = n(99331),
        m = n(94975),
        C = n(13689),
        h = n.n(C);
      let N = (0, s.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: n,
            repeatMode: s,
            canMoveForward: i,
            canMoveBackward: o,
            canShuffle: l,
            shuffle: r,
            onClickNext: u,
            onClickPrev: C,
            onClickPlayPause: N,
            canChangeRepeatMode: b,
            className: k,
          } = e,
          { formatMessage: B } = (0, d.Z)();
        return (0, a.jsxs)("div", {
          className: (0, c.W)(h().root, k),
          children: [
            (0, a.jsx)("div", {
              className: h().buttonContainer,
              children:
                (t || l) &&
                (0, a.jsx)(m.ShuffleButton, {
                  className: h().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  iconSize: "xs",
                  isDisabled: t,
                  shuffle: r,
                }),
            }),
            (0, a.jsxs)("div", {
              className: h().sonataButtons,
              children: [
                (0, a.jsx)(f.z, {
                  className: h().sonataButton,
                  variant: "text",
                  size: "m",
                  radius: "round",
                  disabled: !o,
                  withRipple: !1,
                  "aria-label": B({ id: "player-actions.previous-track" }),
                  icon: (0, a.jsx)(p.J, { variant: "previous" }),
                  onClick: C,
                  ...(0, _.BA)(_.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, a.jsx)(x.JM, {
                  className: h().sonataButton,
                  iconSize: "l",
                  variant: "filled",
                  isPlaying: n,
                  iconClassName: h().playButtonIcon,
                  onClick: N,
                }),
                (0, a.jsx)(f.z, {
                  className: h().sonataButton,
                  radius: "round",
                  size: "m",
                  variant: "text",
                  disabled: !i,
                  withRipple: !1,
                  "aria-label": B({ id: "player-actions.next-track" }),
                  icon: (0, a.jsx)(p.J, { variant: "next" }),
                  onClick: u,
                  ...(0, _.BA)(_.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: h().buttonContainer,
              children:
                (t || b) &&
                (0, a.jsx)(v.RepeatButton, {
                  className: h().sonataButton,
                  size: "xxxs",
                  variant: "text",
                  isDisabled: t,
                  iconSize: "xs",
                  repeatMode: s,
                }),
            }),
          ],
        });
      });
      var b = n(73069);
      let k = (e) => {
        let {
          disabled: t,
          isPlaying: n,
          onClickPlayPause: s,
          className: i,
        } = e;
        return (0, a.jsx)(b.PlayButton, {
          className: i,
          size: "s",
          disabled: t,
          isPlaying: n,
          onClick: s,
        });
      };
      var B = n(98014),
        T = n.n(B);
      let y = (0, s.Pi)((e) => {
        let {
            disabled: t,
            isPlaying: n,
            repeatMode: s,
            canMoveForward: i,
            canMoveBackward: o,
            canShuffle: l,
            onClickNext: r,
            onClickPrev: u,
            onClickPlayPause: C,
            canChangeRepeatMode: h,
            shuffle: N,
            className: b,
          } = e,
          { formatMessage: k } = (0, d.Z)();
        return (0, a.jsxs)("div", {
          className: (0, c.W)(T().root, b),
          children: [
            (0, a.jsx)("div", {
              className: T().buttonContainer,
              children:
                (t || l) &&
                (0, a.jsx)(m.ShuffleButton, {
                  className: T().sonataButton,
                  size: "s",
                  iconSize: "xxs",
                  color: "secondary",
                  isDisabled: t,
                  shuffle: N,
                }),
            }),
            (0, a.jsxs)("div", {
              className: T().sonataButtons,
              children: [
                (0, a.jsx)(f.z, {
                  className: T().sonataButton,
                  color: "secondary",
                  size: "m",
                  radius: "round",
                  disabled: !o,
                  withRipple: !1,
                  "aria-label": k({ id: "player-actions.previous-track" }),
                  icon: (0, a.jsx)(p.J, { variant: "previous" }),
                  onClick: u,
                  ...(0, _.BA)(_.bG.sonata.PREVIOUS_TRACK_BUTTON),
                }),
                (0, a.jsx)(x.JM, {
                  className: T().sonataButton,
                  iconSize: "m",
                  size: "l",
                  radius: "round",
                  color: "secondary",
                  buttonVariant: "default",
                  isPlaying: n,
                  iconClassName: T().playPauseButtonIcon,
                  onClick: C,
                }),
                (0, a.jsx)(f.z, {
                  className: T().sonataButton,
                  radius: "round",
                  size: "m",
                  color: "secondary",
                  disabled: !i,
                  withRipple: !1,
                  "aria-label": k({ id: "player-actions.next-track" }),
                  icon: (0, a.jsx)(p.J, { variant: "next" }),
                  onClick: r,
                  ...(0, _.BA)(_.bG.sonata.NEXT_TRACK_BUTTON),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: T().buttonContainer,
              children:
                (t || h) &&
                (0, a.jsx)(v.RepeatButton, {
                  className: T().sonataButton,
                  size: "s",
                  color: "secondary",
                  isDisabled: t,
                  iconSize: "xxs",
                  repeatMode: s,
                }),
            }),
          ],
        });
      });
      var S = n(84338),
        A = n(77070),
        j = n(75731),
        E = n.n(j);
      let R = (0, s.Pi)((e) => {
          let {
              isPlaying: t,
              canMoveForward: n,
              canMoveBackward: s,
              onClickNext: o,
              onClickPrev: r,
              onClickPlayPause: u,
              className: _,
            } = e,
            { formatMessage: v } = (0, d.Z)(),
            { user: m, sonataState: C } = (0, l.oR)(),
            h = (0, l.XU)(),
            N = C.entityMeta,
            b = C.contextType === S.Ak.Generative,
            k = m.isAuthorized && !b,
            B = (0, A.SB)(C.entityMeta),
            T = (0, A.KX)(C.entityMeta);
          return (
            (0, i.useEffect)(() => {
              if (!C.isGenerativeContext)
                return (
                  null == h || h.addShortcutsListener(l.yx.LIKE, B),
                  null == h || h.addShortcutsListener(l.yx.DISLIKE, T),
                  () => {
                    null == h || h.removeShortcutsListener(l.yx.LIKE),
                      null == h || h.removeShortcutsListener(l.yx.DISLIKE);
                  }
                );
            }, [T, B, h, C.isGenerativeContext]),
            (0, a.jsxs)("div", {
              className: (0, c.W)(E().root, _),
              children: [
                (0, a.jsx)("div", {
                  className: E().buttonContainer,
                  children:
                    N &&
                    k &&
                    (0, a.jsx)(x.Q1, { isDisliked: N.isDisliked, onClick: T }),
                }),
                (0, a.jsxs)("div", {
                  className: E().sonataButtons,
                  children: [
                    (0, a.jsx)(f.z, {
                      className: E().sonataButton,
                      variant: "text",
                      color: "secondary",
                      size: "m",
                      radius: "round",
                      disabled: !s,
                      withRipple: !1,
                      "aria-label": v({ id: "player-actions.previous-track" }),
                      icon: (0, a.jsx)(p.J, { variant: "previous" }),
                      onClick: r,
                    }),
                    (0, a.jsx)(x.JM, {
                      className: E().sonataButton,
                      iconSize: "xxl",
                      variant: "filled",
                      color: "secondary",
                      isPlaying: t,
                      iconClassName: E().playPauseButtonIcon,
                      onClick: u,
                    }),
                    (0, a.jsx)(f.z, {
                      className: E().sonataButton,
                      variant: "text",
                      radius: "round",
                      size: "m",
                      color: "secondary",
                      disabled: !n,
                      withRipple: !1,
                      "aria-label": v({ id: "player-actions.next-track" }),
                      icon: (0, a.jsx)(p.J, { variant: "next" }),
                      onClick: o,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: E().buttonContainer,
                  children:
                    N &&
                    k &&
                    (0, a.jsx)(x.dJ, { isLiked: N.isLiked, onClick: B }),
                }),
              ],
            })
          );
        }),
        I = (0, s.Pi)((e) => {
          var t, n;
          let { isMobile: s, entityMeta: c, isFullscreen: d, className: _ } = e,
            { sonataState: f, vibe: p } = (0, l.oR)(),
            x = (0, l.XU)(),
            v = (0, l.R$)(),
            { togglePlay: m } = (0, l.Qh)({
              seeds:
                null !==
                  (n =
                    null === (t = p.meta) || void 0 === t ? void 0 : t.seeds) &&
                void 0 !== n
                  ? n
                  : [],
              pageIdForFrom: l.Rh.HOME,
              blockIdForFrom: l.BE.RUP_MAIN_RADIO,
            }),
            C = (0, i.useMemo)(
              () =>
                [
                  o.Xz.PLAYING,
                  o.Xz.LOADING_MEDIA_SOURCE,
                  o.Xz.LOADING_MEDIA_DATA,
                ].includes(f.status),
              [f.status],
            ),
            h = (0, i.useCallback)(() => {
              c ? null == v || v.togglePause() : m();
            }, [c, v, m]),
            b = (0, i.useCallback)(() => {
              null == v || v.moveForward();
            }, [v]),
            B = (0, i.useCallback)(() => {
              null == v || v.moveBackward();
            }, [v]),
            T = (0, u.m)(),
            S = (0, r.t)();
          (0, i.useEffect)(() => {
            if (!d)
              return (
                null == x || x.addShortcutsListener(l.yx.TOGGLE_PLAY, h),
                null == x || x.addShortcutsListener(l.yx.TOGGLE_REPEAT, S),
                null == x || x.addShortcutsListener(l.yx.TOGGLE_SHUFFLE, T),
                () => {
                  null == x || x.removeShortcutsListener(l.yx.TOGGLE_PLAY),
                    null == x || x.removeShortcutsListener(l.yx.TOGGLE_SHUFFLE),
                    null == x || x.removeShortcutsListener(l.yx.TOGGLE_REPEAT);
                }
              );
          }, [d, h, S, T, x]);
          let A = (0, i.useMemo)(() => (d ? (s ? R : y) : s ? k : N), [s, d]);
          return (0, a.jsx)(A, {
            className: _,
            disabled: null === f.entityMeta,
            isPlaying: C,
            canMoveBackward: f.canMoveBackward,
            canMoveForward: f.canMoveForward,
            canShuffle: f.canShuffle,
            shuffle: f.shuffle,
            onClickPlayPause: h,
            onClickNext: b,
            onClickPrev: B,
            canChangeRepeatMode: f.canChangeRepeatMode,
            repeatMode: f.repeatMode,
          });
        });
    },
    62914: function (e) {
      e.exports = {
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
    15450: function (e) {
      e.exports = {
        icon: "NotificationRepeat_icon__TjQ9H",
        message: "NotificationRepeat_message__IeQXU",
        icon_unset: "NotificationRepeat_icon_unset__Dr5iH",
      };
    },
    54394: function (e) {
      e.exports = {
        icon: "NotificationShuffle_icon__lIKky",
        message: "NotificationShuffle_message___Tpxo",
        icon_unset: "NotificationShuffle_icon_unset__VTrhj",
      };
    },
    24749: function (e) {
      e.exports = {
        repeatIcon_none: "RepeatButton_repeatIcon_none__GQOWG",
        repeatIcon_context: "RepeatButton_repeatIcon_context__HRK2F",
        repeatIcon_one: "RepeatButton_repeatIcon_one__vVtqR",
        repeatIcon_disabled: "RepeatButton_repeatIcon_disabled__PYLys",
      };
    },
    24584: function (e) {
      e.exports = {
        shuffleIcon_off: "ShuffleButton_shuffleIcon_off__PWssl",
        shuffleIcon_on: "ShuffleButton_shuffleIcon_on__3B_Rm",
        shuffleIcon_disabled: "ShuffleButton_shuffleIcon_disabled__vT_hB",
      };
    },
    13689: function (e) {
      e.exports = {
        root: "SonataControlsDesktop_root__oluUH",
        sonataButtons: "SonataControlsDesktop_sonataButtons__ux0qT",
        sonataButton: "SonataControlsDesktop_sonataButton__FTykq",
        playButtonIcon: "SonataControlsDesktop_playButtonIcon__BgNUF",
        buttonContainer: "SonataControlsDesktop_buttonContainer__PczhH",
      };
    },
    98014: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsDesktop_root__l4a2W",
        sonataButtons: "SonataFullscreenControlsDesktop_sonataButtons__BNse_",
        sonataButton: "SonataFullscreenControlsDesktop_sonataButton__qmSTF",
        playPauseButtonIcon:
          "SonataFullscreenControlsDesktop_playPauseButtonIcon__nD8zZ",
        buttonContainer:
          "SonataFullscreenControlsDesktop_buttonContainer__mkxBw",
      };
    },
    75731: function (e) {
      e.exports = {
        root: "SonataFullscreenControlsMobile_root__lsmD7",
        sonataButtons: "SonataFullscreenControlsMobile_sonataButtons__PkHh6",
        sonataButton: "SonataFullscreenControlsMobile_sonataButton__2P1xg",
        playPauseButtonIcon:
          "SonataFullscreenControlsMobile_playPauseButtonIcon__veX3T",
        buttonContainer:
          "SonataFullscreenControlsMobile_buttonContainer__JavFn",
      };
    },
  },
]);
