"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6027],
  {
    66027: function (e, a, t) {
      t.d(a, {
        config: function () {
          return y;
        },
      });
      var s = t(86930),
        n = t(19190),
        c = t(43845),
        i = t(65713),
        o = t(49080),
        r = t(70435),
        l = t(34960),
        u = t(64069),
        p = t(80685),
        d = t(21535);
      let y = () => {
        let { LOCAL_PROD_BUILD: e } = d.env,
          a = e
            ? "https://api.music.qa.yandex.net"
            : "http://music-backend-music-api-gateway.envoy.localhost:9080",
          t = "https://api.music.qa.yandex.".concat(o.M);
        return (0, s.Z)((0, r.config)(), {
          resources: {
            musicExternalApi: {
              gateway: { prefixUrl: (0, p.s)(a) },
              externalGateway: { prefixUrl: (0, p.s)(t) },
              retryPolicyConfig: l.c,
              defaultTimeout: c.ys,
              timeouts: c.mZ,
            },
          },
          player: {
            overembed: !1,
            secretKey: (0, i.S)(),
            externalDomain: "localhost.music.yandex.ru",
            gateway: { prefixUrl: (0, p.s)(t) },
          },
          dev: { panel: !0 },
          passportCredentials: {
            host: "https://passport.yandex.".concat(o.M),
            origin: "music",
          },
          blackbox: {
            ...((0, n.s)(e)
              ? {
                  host: "http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox",
                }
              : {}),
            enabled: !0,
          },
          tvm: { enabled: (0, n.s)(e) },
          oldWebHost: "music.qa.yandex.".concat(o.M),
          afisha: {
            clientId: (0, u.$)(),
            host: "https://widget.afisha.yandex.ru",
          },
          features: { nonMusic: !0 },
        });
      };
    },
  },
]);
