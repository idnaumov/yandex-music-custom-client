"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1021],
  {
    1021: function (e, a, t) {
      t.d(a, {
        config: function () {
          return y;
        },
      });
      var n = t(86930),
        s = t(19190),
        c = t(43845),
        i = t(65713),
        l = t(49080),
        r = t(70435),
        o = t(34960),
        u = t(64069),
        p = t(80685),
        d = t(21535);
      let y = () => {
        let { LOCAL_PROD_BUILD: e } = d.env,
          a = e
            ? "https://api.music.qa.yandex.net"
            : "http://music-backend-music-api-gateway.envoy.localhost:9080",
          t = "https://api.music.qa.yandex.".concat(l.M);
        return (0, n.Z)((0, r.config)(), {
          resources: {
            musicExternalApi: {
              gateway: { prefixUrl: (0, p.s)(a) },
              externalGateway: { prefixUrl: (0, p.s)(t) },
              retryPolicyConfig: o.c,
              defaultTimeout: c.ys,
              timeouts: c.mZ,
            },
          },
          player: {
            overembed: !1,
            secretKey: (0, i.S)(),
            externalDomain: "next.qa.music.yandex.ru",
            gateway: { prefixUrl: (0, p.s)(t) },
          },
          blackbox: {
            ...((0, s.s)(e)
              ? {
                  host: "http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox",
                }
              : {}),
            enabled: !0,
          },
          tvm: { enabled: (0, s.s)(e) },
          dev: { panel: !0 },
          oldWebHost: "music.qa.yandex.".concat(l.M),
          afisha: {
            clientId: (0, u.$)(),
            host: "https://widget.afisha.tst.yandex.ru",
          },
          features: { nonMusic: !0 },
        });
      };
    },
  },
]);
