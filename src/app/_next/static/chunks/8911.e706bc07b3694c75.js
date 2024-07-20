"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8911],
  {
    28911: function (e, t, a) {
      a.d(t, {
        config: function () {
          return y;
        },
      });
      var n = a(86930),
        s = a(19190),
        c = a(43845),
        i = a(65713),
        o = a(49080),
        l = a(70435),
        r = a(34960),
        p = a(64069),
        u = a(80685),
        d = a(21535);
      let y = () => {
        let e = d.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
            ? "https://api.music.yandex.ru"
            : "https://api.music.qa.yandex.net",
          t = d.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
            ? "https://api.music.yandex.".concat(o.M)
            : "https://api.music.qa.yandex.".concat(o.M);
        return (0, n.Z)((0, l.config)(), {
          resources: {
            musicExternalApi: {
              gateway: { prefixUrl: (0, u.s)(e) },
              externalGateway: { prefixUrl: (0, u.s)(t) },
              retryPolicyConfig: r.c,
              defaultTimeout: c.ys,
              timeouts: c.mZ,
            },
          },
          player: {
            overembed: !1,
            secretKey: (0, i.S)(),
            externalDomain: "localhost.music.yandex.ru",
            gateway: { prefixUrl: t },
          },
          dev: { panel: !0 },
          tvm: {
            enabled: !0,
            destinations: ["blackbox"],
            ...((0, s.s)(d.env.USE_QYP_TVM)
              ? { host: "http://local-music-dev.vla.yp-c.yandex.net/tvm" }
              : {}),
          },
          passportCredentials: {
            host: "https://passport.yandex.".concat(o.M),
            origin: "music_desktop",
          },
          blackbox: {
            host: "http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox",
            enabled: !0,
          },
          oldWebHost: d.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
            ? "music.yandex.".concat(o.M)
            : "music.qa.yandex.".concat(o.M),
          afisha: {
            clientId: (0, p.$)(),
            host: "https://widget.afisha.yandex.ru",
          },
          features: { nonMusic: !0 },
        });
      };
    },
  },
]);
