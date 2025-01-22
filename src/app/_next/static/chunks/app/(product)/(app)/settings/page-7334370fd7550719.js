(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3555],
  {
    98041: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 59313));
    },
    59313: function (e, t, i) {
      "use strict";
      i.d(t, {
        SettingsPage: function () {
          return G;
        },
      });
      var n = i(95660),
        s = i(44744),
        o = i(36621),
        a = i(71037),
        l = i(9883),
        r = i(64275),
        c = i(42255),
        d = i(71859),
        m = i(19645),
        p = i(20794),
        _ = i(96235);
      let x = () => {
        let e = (0, p.uK4)().get(p.U5t),
          t = (0, p.yyu)(e.oldWebHost),
          { language: i } = (0, p.ZSk)();
        return "https://".concat(t, "/newimport?lang=").concat(i);
      };
      var h = i(52074),
        g = i(29364),
        u = i.n(g);
      let C = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          {
            location: t,
            modals: { aboutAppModal: i },
          } = (0, p.oR4)(),
          s = (0, p.bop)(),
          l = (0, p.aMu)(),
          { language: r } = (0, p.ZSk)();
        return (0, n.jsxs)(h.u, {
          className: u().root,
          headerClassName: u().modalHeader,
          contentClassName: u().modalContent,
          title: e({ id: "settings.about-app" }),
          open: i.isOpened,
          onOpenChange: i.onOpenChange,
          onClose: i.close,
          size: "fitContent",
          placement: "center",
          overlayColor: "full",
          labelClose: e({ id: "interface-actions.close" }),
          children: [
            (0, n.jsxs)("ul", {
              className: u().list,
              children: [
                (0, n.jsx)("li", {
                  className: u().item,
                  children: (0, n.jsx)(_.rU, {
                    className: u().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(
                        t.tld,
                        "/support/music/performers-and-copyright-holders.html?lang=",
                      )
                      .concat(r),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(a.Z, {
                        id: "footer.links-copyright-holders",
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: u().item,
                  children: (0, n.jsx)(_.rU, {
                    className: u().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(t.tld, "/legal/music_mobile_agreement?lang=")
                      .concat(r),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(a.Z, { id: "footer.links-terms" }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: u().item,
                  children: (0, n.jsx)(_.rU, {
                    className: u().link,
                    target: "_blank",
                    href: "https://music.yandex."
                      .concat(t.tld, "/legal/recommendations/ru/#music?lang=")
                      .concat(r),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(a.Z, {
                        id: "footer.links-recommendation-rules",
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: u().item,
                  children: (0, n.jsx)(_.rU, {
                    className: u().link,
                    target: "_blank",
                    href: "https://yandex."
                      .concat(t.tld, "/support/music/index.html?lang=")
                      .concat(r),
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: (0, n.jsx)(a.Z, { id: "footer.links-help" }),
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: u().item,
                  children: (0, n.jsx)(_.rU, {
                    className: u().link,
                    target: "_blank",
                    href: "https://github.com/TheKing-OfTime/YandexMusicModClient",
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: "Репозиторий модификации на GitHub",
                    }),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: u().item,
                  children: (0, n.jsx)(_.rU, {
                    className: u().link,
                    target: "_blank",
                    href: "https://boosty.to/thekingoftime/donate",
                    children: (0, n.jsx)(c.Caption, {
                      type: "controls",
                      variant: "span",
                      size: "l",
                      weight: "medium",
                      children: "Поддержать автора модификации",
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(c.Caption, {
              className: u().explicitText,
              type: "controls",
              variant: "div",
              size: "xs",
              weight: "medium",
              dangerouslySetInnerHTML: {
                __html: e({ id: "about-app.explicit-content" }),
              },
            }),
            (0, n.jsx)(c.Caption, {
              className: u().companyText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: (0, n.jsx)(a.Z, { id: "about-app.app-name" }),
            }),
            (0, n.jsx)(c.Caption, {
              className: u().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: e({ id: "desktop.app-version-short" }, { version: s }),
            }),
            (0, n.jsx)(c.Caption, {
              className: u().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: e({ id: "desktop.app-revision" }, { revision: l }),
            }),
            (0, n.jsx)(c.Caption, {
              className: u().versionText,
              type: "controls",
              variant: "div",
              size: "xs",
              children: "YandexMusicModClient " + window.MOD_VERSION,
            }),
          ],
        });
      });
      var j = i(93062),
        N = i(28227),
        v = i(10995),
        f = i.n(v);
      let b = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          {
            modals: { clearMemoryModal: t },
          } = (0, p.oR4)(),
          { notify: i } = (0, p.d$W)(),
          s = (0, p.pL3)(),
          l = (0, d.useCallback)(() => {
            s.clearAll().then(() => {
              window.onDownloadedTracksDeleted();
              t.close(),
                i(
                  (0, n.jsx)(_.Yj, {
                    message: (0, n.jsx)(c.Caption, {
                      className: f().message,
                      variant: "div",
                      type: "controls",
                      size: "m",
                      children: (0, n.jsx)(a.Z, {
                        id: "offline.memory-cleared",
                      }),
                    }),
                  }),
                  { containerId: p.W$x.INFO },
                );
            });
          }, [t, i, s]);
        return (0, n.jsxs)(h.u, {
          className: f().root,
          headerClassName: f().modalHeader,
          contentClassName: f().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: [
            (0, n.jsx)(N.Image, {
              src: "/_next/static/media/clearMemory.33a5df30.png",
              className: f().image,
              fit: "contain",
              "aria-hidden": !0,
            }),
            (0, n.jsx)(c.Caption, {
              className: f().description,
              type: "text",
              variant: "div",
              size: "l",
              weight: "normal",
              children: (0, n.jsx)(a.Z, {
                id: "offline.clear-memory-description",
              }),
            }),
            (0, n.jsx)(j.z, {
              color: "primary",
              radius: "xxxl",
              size: "default",
              onClick: l,
              children: (0, n.jsx)(a.Z, { id: "interface-actions.clear" }),
            }),
          ],
        });
      });

      let discordRpcSettings = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          {
            modals: { discordRpcSettingsModal: t },
          } = (0, p.oR4)(),
          { notify: i } = (0, p.d$W)(),
          onDiscordStatusToggle = (0, d.useCallback)(async (e) => {
            console.log("modFeatures.discordRPC.enable toggled. Value: ", e);
            window.nativeSettings.set("modFeatures.discordRPC.enable", e);
          }, []),
          onDiscordShowButtonsToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.discordRPC.showButtons toggled. Value: ",
              e,
            );
            window.nativeSettings.set("modFeatures.discordRPC.showButtons", e);
          }, []),
          onDiscordOverrideDeepLinksExperimentToggle = (0, d.useCallback)(
            async (e) => {
              console.log(
                "modFeatures.discordRPC.overrideDeepLinksExperiment toggled. Value: ",
                e,
              );
              window.nativeSettings.set(
                "modFeatures.discordRPC.overrideDeepLinksExperiment",
                e,
              );
            },
            [],
          ),
          onDiscordShowGitHubButtonToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.discordRPC.showGitHubButton toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.discordRPC.showGitHubButton",
              e,
            );
          }, []),
          onDiscordShowSmallIconToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.discordRPC.showSmallIcon toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.discordRPC.showSmallIcon",
              e,
            );
          }, []),
          onDiscordShowAlbumToggle = (0, d.useCallback)(async (e) => {
            console.log("modFeatures.discordRPC.showAlbum toggled. Value: ", e);
            window.nativeSettings.set("modFeatures.discordRPC.showAlbum", e);
          }, []);
        return (0, n.jsxs)(h.u, {
          className: f().root,
          style: { "max-width": "500px" },
          title: "Discord RPC",
          headerClassName: O().modalHeader,
          contentClassName: O().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsx)("ul", {
            className: H().root,
            style: { width: "466px" },
            children: [
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Включить интеграцию с Discord",
                  onChange: onDiscordStatusToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.enable",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать кнопки",
                  description: "Отображает кнопки-ссылки в статусе",
                  onChange: onDiscordShowButtonsToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.showButtons",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать Альбом",
                  description: "Отображать ли название альбома в статусе",
                  onChange: onDiscordShowAlbumToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.showAlbum",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать маленькую иконку",
                  description:
                    "Отображать ли иконку статуса воспроизведения (Playing, Paused)",
                  onChange: onDiscordShowSmallIconToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.showSmallIcon",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Переопределить эксперимент Глубоких ссылок",
                  description:
                    "Уберёт ссылку открывающую приложение т.к. это сделает ссылка на сайт",
                  onChange: onDiscordOverrideDeepLinksExperimentToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.overrideDeepLinksExperiment",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать кнопку на Гитхаб",
                  description:
                    "Если предыдущий пункт включён, отображает кнопку установки мода",
                  onChange: onDiscordShowGitHubButtonToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.discordRPC.overrideDeepLinksExperiment",
                  ),
                }),
              }),
            ],
          }),
        });
      });

      let playerBarEnhancementsSettings = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          {
            modals: { playerBarEnhancementsSettingsModal: t },
          } = (0, p.oR4)(),
          { notify: i } = (0, p.d$W)(),
          onShowDislikeToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.showDislikeButton toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.showDislikeButton",
              e,
            );
          }, []),
          onShowCodecToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark",
              e,
            );
          }, []),
          onAlwaysShowPlayerTimestampsToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps",
              e,
            );
          }, []);
        return (0, n.jsx)(h.u, {
          className: f().root,
          style: { "max-width": "500px" },
          title: "Улучшения панели плеера",
          headerClassName: O().modalHeader,
          contentClassName: O().modalContent,
          open: t.isOpened,
          onOpenChange: t.onOpenChange,
          onClose: t.close,
          size: "fitContent",
          placement: "center",
          labelClose: e({ id: "interface-actions.close" }),
          children: (0, n.jsx)("ul", {
            className: H().root,
            style: { width: "466px" },
            children: [
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Вернуть Дизлайк",
                  description: "Возвращает кнопку дизлайка на панель плеера",
                  onChange: onShowDislikeToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.showDislikeButton",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Отображать кодек",
                  description: "Отображает кодек вместо качества трека",
                  onChange: onShowCodecToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Всегда отображать временные метки",
                  description:
                    "Отображает временные метки независимо от положения курсора",
                  onChange: onAlwaysShowPlayerTimestampsToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.playerBarEnhancement.alwaysShowPlayerTimestamps",
                  ),
                }),
              }),
            ],
          }),
        });
      });

      var k = i(23974),
        S = i(15706),
        y = i(5951),
        M = i.n(y);
      let I = (e) => {
        let {
          title: t,
          description: i,
          onClick: s,
          descriptionProps: o,
          ...a
        } = e;
        return (0, n.jsx)(j.z, {
          className: (0, k.W)(M().root, M().important),
          iconContainerClassName: M().iconContainer,
          icon: (0, n.jsx)(S.Icon, {
            className: M().icon,
            size: "xs",
            variant: "arrowRight",
          }),
          iconPosition: "right",
          onClick: s,
          isBlock: !0,
          withRipple: !1,
          withHover: !1,
          variant: "text",
          size: "xs",
          ...a,
          children: (0, n.jsxs)("div", {
            className: M().content,
            children: [
              (0, n.jsx)(c.Caption, {
                className: M().title,
                variant: "div",
                size: "l",
                weight: "bold",
                lineClamp: 1,
                children: t,
              }),
              i &&
                (0, n.jsx)(c.Caption, {
                  variant: "div",
                  type: "text",
                  size: "xs",
                  weight: "medium",
                  className: M().description,
                  ...o,
                  children: i,
                }),
            ],
          }),
        });
      };
      var z = i(19603),
        T = i.n(z);
      let L = (e) => {
        let { link: t, title: i, description: s, target: o } = e;
        return (0, n.jsxs)(_.rU, {
          className: T().root,
          containerClassName: T().container,
          textClassName: T().linkText,
          icon: (0, n.jsx)(S.Icon, {
            className: T().icon,
            size: "xs",
            variant: "arrowRight",
          }),
          iconPosition: "right",
          href: t,
          ...(o ? { target: o } : {}),
          children: [
            (0, n.jsx)(c.Caption, {
              className: T().title,
              variant: "div",
              size: "l",
              weight: "bold",
              lineClamp: 1,
              children: i,
            }),
            s &&
              (0, n.jsx)(c.Caption, {
                variant: "div",
                type: "text",
                size: "xs",
                weight: "medium",
                className: T().description,
                children: s,
              }),
          ],
        });
      };
      var w = i(22473),
        E = i(40935),
        A = i.n(E);
      let P = (e) => {
        let { title: t, onChange: i, isChecked: s, description: o } = e,
          a = (0, d.useId)();
        return (0, n.jsxs)("div", {
          className: A().root,
          children: [
            (0, n.jsxs)("div", {
              className: A().textContainer,
              children: [
                (0, n.jsx)(c.Caption, {
                  className: A().title,
                  id: a,
                  variant: "div",
                  size: "l",
                  weight: "bold",
                  lineClamp: 1,
                  "aria-hidden": !0,
                  children: t,
                }),
                o &&
                  (0, n.jsx)(c.Caption, {
                    variant: "div",
                    type: "text",
                    size: "xs",
                    weight: "medium",
                    className: A().description,
                    children: o,
                  }),
              ],
            }),
            (0, n.jsx)(w.Z, {
              isChecked: s,
              "aria-describedby": a,
              onChange: i,
            }),
          ],
        });
      };
      var B = i(65339),
        O = i.n(B);
      let Z = (0, s.Pi)(() => {
        let {
            modals: { shortcutsModal: e },
          } = (0, p.oR4)(),
          { formatMessage: t } = (0, o.Z)(),
          i = (0, d.useMemo)(() => {
            let e = (0, n.jsx)(
              c.Caption,
              {
                className: O().text,
                variant: "div",
                type: "text",
                size: "xs",
                weight: "normal",
                children: (0, n.jsx)(a.Z, { id: "shortcuts.or" }),
              },
              "or",
            );
            return p.ed$.map((t) => {
              let { shortcutsAction: i, formattedMessage: s } = t,
                o = p.ftz[i].map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: O().button,
                      children: (0, n.jsx)(c.Caption, {
                        variant: "div",
                        type: "text",
                        size: "xs",
                        weight: "normal",
                        children: e,
                      }),
                    },
                    t,
                  ),
                );
              return (
                o.length > 1 && o.splice(1, 0, e),
                (0, n.jsx)(
                  "li",
                  {
                    children: (0, n.jsxs)("div", {
                      className: O().content,
                      children: [
                        (0, n.jsx)(c.Caption, {
                          className: O().text,
                          variant: "div",
                          type: "text",
                          size: "xs",
                          weight: "normal",
                          children: s,
                        }),
                        (0, n.jsx)("div", {
                          className: O().buttons,
                          children: o,
                        }),
                      ],
                    }),
                  },
                  i,
                )
              );
            });
          }, []);
        return (0, n.jsx)(h.u, {
          className: O().root,
          headerClassName: O().modalHeader,
          contentClassName: O().modalContent,
          title: t({ id: "settings.shortcuts" }),
          open: e.isOpened,
          onOpenChange: e.onOpenChange,
          onClose: e.close,
          size: "fitContent",
          placement: "center",
          overlayColor: "full",
          labelClose: t({ id: "interface-actions.close" }),
          children: (0, n.jsx)("ul", { className: O().list, children: i }),
        });
      });
      var R = i(47921),
        H = i.n(R);
      let W = (0, s.Pi)(() => {
        let e = (0, p.bop)(),
          {
            modals: {
              shortcutsModal: t,
              aboutAppModal: i,
              clearMemoryModal: s,
              discordRpcSettingsModal: discordRpcSettingsModal,
              playerBarEnhancementsSettingsModal:
                playerBarEnhancementsSettingsModal,
            },
            equalizer: a,
            experiments: r,
            wizard: c,
            user: h,
            slam: g,
          } = (0, p.oR4)(),
          { notify: u } = (0, p.d$W)(),
          { formatMessage: j } = (0, o.Z)(),
          N = (0, p.jpI)(),
          v = (0, p.XNW)(),
          f = x(),
          k =
            r.checkExperiment(p.peG.WebNextEqualizer, "on") &&
            (null == N ? void 0 : N.equalizer),
          S = r.checkExperiment(p.peG.WebNextKids, "on"),
          y =
            r.checkExperiment(p.peG.WebNextEnableDownloadControls, "on") &&
            h.hasPlus,
          M = a.isEnabled
            ? j({ id: "equalizer.enabled" })
            : j({ id: "equalizer.disabled" }),
          z = (0, d.useMemo)(
            () =>
              `${j({ id: "desktop.app-version-short" }, { version: e })} / Мод ${window.MOD_VERSION}`,
            [!0, j, e],
          ),
          T = (0, d.useMemo)(
            () =>
              r.checkExperiment(p.peG.WebNextWizard, "on")
                ? (0, n.jsx)(I, {
                    title: j({ id: "settings.preferences" }),
                    description: j({ id: "settings.preferences-description" }),
                    onClick: c.modal.open,
                  })
                : (0, n.jsx)(L, {
                    title: j({ id: "settings.preferences" }),
                    description: j({ id: "settings.preferences-description" }),
                    link: v,
                    target: "_self",
                  }),
            [r, j, c, v, !0],
          ),
          w = (0, d.useCallback)(
            async (e) => {
              (await h.setSettings({ isChildModeEnabled: e })) ===
                p.SLo.ERROR &&
                u(
                  (0, n.jsx)(_.Q, {
                    error: j({ id: "settings.failed-to-change-child-mode" }),
                  }),
                  { containerId: p.W$x.ERROR },
                );
            },
            [h, j, u],
          ),
          E = (0, d.useCallback)(
            (e) => {
              g.setOfflineModeEnabled(e);
            },
            [g],
          ),
          A = (0, d.useCallback)(() => {
            s.open();
          }, [s]),
          onDevtoolsToggle = (0, d.useCallback)(
            async (e) => {
              console.log("devtools toggled. Value: ", e);
              window.nativeSettings.set("enableDevTools", e);
              u(
                (0, n.jsx)(_.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: p.W$x.ERROR },
              );
            },
            [u],
          ),
          onAutoUpdatesToggle = (0, d.useCallback)(
            async (e) => {
              console.log("auto updates toggled. Value: ", e);
              window.nativeSettings.set("enableAutoUpdates", e);
              u(
                (0, n.jsx)(_.Q, {
                  error:
                    "Для применения этой настройки требуется перезапуск приложения",
                }),
                { containerId: p.W$x.ERROR },
              );
            },
            [u],
          ),
          onDisableVibeRenderingToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.vibeAnimationEnhancement.disableRendering toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.disableRendering",
              e,
            );
          }, []),
          onPlayOnAnyEntityToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.vibeAnimationEnhancement.playOnAnyEntity. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.vibeAnimationEnhancement.playOnAnyEntity",
              e,
            );
          }, []),
          onShowDislikeToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.showDislikeButton toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.showDislikeButton",
              e,
            );
          }, []),
          onShowCodecToggle = (0, d.useCallback)(async (e) => {
            console.log(
              "modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark toggled. Value: ",
              e,
            );
            window.nativeSettings.set(
              "modFeatures.playerBarEnhancement.showCodecInsteadOfQualityMark",
              e,
            );
          }, []),
          onOpenMoreSettings = (0, d.useCallback)(async (e) => {
            console.log("User navigated to config.json", e);
            window.openConfigFile();
          }, []),
          [downloadedTracksInfo, setDownloadedTracksInfo] = (0, d.useState)({
            tracksCount: undefined,
            tracksSize: undefined,
          }),
          formatBytes = (n) => {
            if (typeof n !== "number" || n < 0) {
              return "0 B";
            }

            const units = ["B", "KB", "MB", "GB"];
            let index = 0;

            while (n >= 1024 && index < units.length - 1) {
              n /= 1024;
              index++;
            }

            return `${n.toFixed(2)} ${units[index]}`;
          },
          getTrackWordForm = (number) => {
            if (
              typeof number !== "number" ||
              number < 0 ||
              !Number.isInteger(number)
            ) {
              return "треков";
            }

            const remainder10 = number % 10;
            const remainder100 = number % 100;

            if (remainder100 >= 11 && remainder100 <= 19) {
              return "треков";
            } else if (remainder10 === 1) {
              return "трек";
            } else if (remainder10 >= 2 && remainder10 <= 4) {
              return "трека";
            } else {
              return "треков";
            }
          };

        return (
          (0, d.useEffect)(() => {
            let callfunc = async () => {
              const getDownloadedTracksSize = async (t) => {
                let forkSize = 0;
                for await (let r of t.values()) {
                  if ("directory" === r.kind) {
                    forkSize += await getDownloadedTracksSize(r);
                  } else if ("file" === r.kind) {
                    try {
                      let t = await r.getFile();
                      forkSize += t.size;
                    } catch (e) {
                      console.warn("Track file is in use. Skipping...", e);
                    }
                  }
                }
                return forkSize;
              };

              const getDownloadedTracksCount = async (t) => {
                let trackCount = 0;
                for await (let r of t.values()) {
                  if ("directory" === r.kind && r.name === "tracks") {
                    trackCount = await getDownloadedTracksCount(r);
                  } else if ("file" === r.kind && !r.name.endsWith(".crswap")) {
                    trackCount += 1;
                  }
                }
                return trackCount;
              };

              const fileStorage = await window.navigator.storage.getDirectory();

              setDownloadedTracksInfo({
                tracksCount: await getDownloadedTracksCount(fileStorage),
                tracksSize: await getDownloadedTracksSize(fileStorage),
              });
            };

            window.onDownloadedTracksDeleted = () =>
              // That's a bad solution to update the info on clear memory modal close
              setDownloadedTracksInfo({
                tracksCount: 0,
                tracksSize: 0,
              });

            callfunc();
          }, []),
          (0, n.jsxs)("ul", {
            className: H().root,
            ...(0, l.BA)(l.QM.settings.SETTINGS_LIST),
            children: [
              y &&
                (0, n.jsx)("li", {
                  className: H().item,
                  children: (0, n.jsx)(P, {
                    title: j({ id: "offline.offline-mode" }),
                    description: j({ id: "offline.offline-mode-description" }),
                    onChange: E,
                    isChecked: g.isOfflineModeEnabled,
                  }),
                }),
              y &&
                (0, n.jsxs)("li", {
                  className: H().item,
                  children: [
                    (0, n.jsx)(I, {
                      title: j({ id: "offline.clear-memory" }),
                      description: `Скачан${downloadedTracksInfo.tracksCount % 10 === 1 && downloadedTracksInfo.tracksCount % 100 !== 11 ? "" : "о"} ${downloadedTracksInfo.tracksCount ?? "0"} ${getTrackWordForm(downloadedTracksInfo.tracksCount)} (${formatBytes(downloadedTracksInfo.tracksSize)})`,
                      onClick: A,
                    }),
                    (0, n.jsx)(b, {}),
                  ],
                }),
              (0, n.jsx)("li", { className: H().item, children: T }),
              k &&
                (0, n.jsxs)("li", {
                  className: H().item,
                  children: [
                    (0, n.jsx)(I, {
                      title: j({ id: "equalizer.title" }),
                      description: M,
                      onClick: a.modal.open,
                      descriptionProps: (0, l.BA)(
                        l.QM.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION,
                      ),
                      ...(0, l.BA)(l.QM.settings.SETTINGS_EQUALIZER_BUTTON),
                    }),
                    (0, n.jsx)(m.Qk, {}),
                  ],
                }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(L, {
                  title: j({ id: "settings.import-media" }),
                  description: j({ id: "settings.import-media-description" }),
                  link: f,
                }),
              }),
              (0, n.jsxs)("li", {
                className: H().item,
                children: [
                  (0, n.jsx)(I, {
                    title: j({ id: "settings.shortcuts" }),
                    onClick: t.open,
                  }),
                  (0, n.jsx)(Z, {}),
                ],
              }),
              z &&
                (0, n.jsxs)("li", {
                  className: H().item,
                  children: [
                    (0, n.jsx)(I, {
                      title: j({ id: "settings.about-app" }),
                      description: z,
                      onClick: i.open,
                    }),
                    (0, n.jsx)(C, {}),
                  ],
                }),
              S &&
                (0, n.jsx)("li", {
                  className: H().item,
                  children: (0, n.jsx)(P, {
                    title: j({ id: "settings.show-child-section" }),
                    onChange: w,
                    isChecked: h.settings.isChildModeEnabled,
                  }),
                }),
              (0, n.jsx)("li", {
                className: H().item,
                children: [
                  (0, n.jsx)(I, {
                    title: "Discord RPC",
                    description: "Настройки интеграции с Discord",
                    onClick: discordRpcSettingsModal.open,
                  }),
                  (0, n.jsx)(discordRpcSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Отключить отрисовку анимации Волны",
                  onChange: onDisableVibeRenderingToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.vibeAnimationEnhancement.disableRendering",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Реакция анимации Волны на любые треки",
                  description:
                    "Анимация станет реагировать на треки из плейлистов, альбомов и т.п.",
                  onChange: onPlayOnAnyEntityToggle,
                  isChecked: window.nativeSettings.get(
                    "modFeatures.vibeAnimationEnhancement.playOnAnyEntity",
                  ),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: [
                  (0, n.jsx)(I, {
                    title: "Улучшения панели плеера",
                    description: "Настройки элементов на панели плеера",
                    onClick: playerBarEnhancementsSettingsModal.open,
                  }),
                  (0, n.jsx)(playerBarEnhancementsSettings, {}),
                ],
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Режим разработчика",
                  description:
                    "Разблокирует Chromium Devtools и dev панель в правом нижнем углу",
                  onChange: onDevtoolsToggle,
                  isChecked: window.nativeSettings.get("enableDevTools"),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(P, {
                  title: "Обновлять автоматически",
                  description:
                    "Управляет авто обновлениями как программы, так и модификации",
                  onChange: onAutoUpdatesToggle,
                  isChecked: window.nativeSettings.get("enableAutoUpdates"),
                }),
              }),
              (0, n.jsx)("li", {
                className: H().item,
                children: (0, n.jsx)(I, {
                  title: "Остальные настройки",
                  description: "Откроется config.json",
                  onClick: onOpenMoreSettings,
                }),
              }),
            ],
          })
        );
      });
      var U = i(30476),
        Q = i(99773),
        q = i.n(Q);
      let G = (0, s.Pi)(() => {
        let { formatMessage: e } = (0, o.Z)(),
          { contentScrollRef: t, setContentScrollRef: i } = (0, p.$Y6)(),
          s = (0, p.k67)();
        return (0, n.jsxs)(U.I7, {
          scrollElement: t,
          outerTitle: e({ id: "page.settings" }),
          children: [
            (0, n.jsx)(_.h4, {
              variant: "text",
              withForwardControl: !1,
              withBackwardControl: s.canBack,
              children: (0, n.jsx)(c.Heading, {
                variant: "h2",
                weight: "bold",
                size: "xl",
                lineClamp: 1,
                children: (0, n.jsx)(a.Z, { id: "page.settings" }),
              }),
            }),
            (0, n.jsx)(r.t, {
              ref: i,
              className: q().root,
              containerClassName: q().scrollableContainer,
              ...(0, l.BA)(l.Br.settings.SETTINGS_PAGE),
              children: (0, n.jsxs)("div", {
                className: q().container,
                children: [
                  (0, n.jsx)("div", {
                    className: q().content,
                    children: (0, n.jsx)(W, {}),
                  }),
                  (0, n.jsx)(_.$_, { className: q().footer }),
                ],
              }),
            }),
          ],
        });
      });
    },
    99773: function (e) {
      e.exports = {
        root: "SettingsPage_root__BB4lC",
        scrollableContainer: "SettingsPage_scrollableContainer__qD32i",
        container: "SettingsPage_container__bIwea",
        content: "SettingsPage_content__cR6Ra",
        footer: "SettingsPage_footer__QIqyx",
      };
    },
    29364: function (e) {
      e.exports = {
        root: "AboutAppModal_root__yBvgU",
        modalHeader: "AboutAppModal_modalHeader__q1NPj",
        modalContent: "AboutAppModal_modalContent__SHO_X",
        list: "AboutAppModal_list__HfB82",
        link: "AboutAppModal_link__i3P3P",
        explicitText: "AboutAppModal_explicitText__29HUD",
        companyText: "AboutAppModal_companyText__yroW0",
        versionText: "AboutAppModal_versionText__iFb8L",
      };
    },
    10995: function (e) {
      e.exports = {
        root: "ClearMemoryModal_root__gKdij",
        modalHeader: "ClearMemoryModal_modalHeader__veasf",
        modalContent: "ClearMemoryModal_modalContent__b7yHr",
        image: "ClearMemoryModal_image__evvTq",
        description: "ClearMemoryModal_description__ue94L",
        message: "ClearMemoryModal_message__mYQpM",
      };
    },
    47921: function (e) {
      e.exports = {
        root: "Settings_root__FVVrn",
        item: "Settings_item__Ksa9h",
      };
    },
    5951: function (e) {
      e.exports = {
        icon: "SettingsListButtonItem_icon__WULZ1",
        root: "SettingsListButtonItem_root__3dtV2",
        important: "SettingsListButtonItem_important__AcEon",
        iconContainer: "SettingsListButtonItem_iconContainer__KECtv",
        content: "SettingsListButtonItem_content___Opuo",
        title: "SettingsListButtonItem_title__npCza",
        description: "SettingsListButtonItem_description__g8_Ba",
      };
    },
    19603: function (e) {
      e.exports = {
        icon: "SettingsListLinkItem_icon__p4P_V",
        root: "SettingsListLinkItem_root__rTPC9",
        container: "SettingsListLinkItem_container__k7bhS",
        linkText: "SettingsListLinkItem_linkText__0PHlQ",
        title: "SettingsListLinkItem_title__duJnL",
        description: "SettingsListLinkItem_description__xWeAD",
      };
    },
    40935: function (e) {
      e.exports = {
        root: "SettingsListToggleItem_root__yEEYT",
        textContainer: "SettingsListToggleItem_textContainer__tRjyt",
        title: "SettingsListToggleItem_title__Xz8_Q",
        description: "SettingsListToggleItem_description__JBOzV",
      };
    },
    65339: function (e) {
      e.exports = {
        root: "ShortcutsModal_root__ro7m4",
        modalHeader: "ShortcutsModal_modalHeader__IYJ9m",
        modalContent: "ShortcutsModal_modalContent__SCpYX",
        list: "ShortcutsModal_list__eS4ox",
        text: "ShortcutsModal_text__5JJ0j",
        content: "ShortcutsModal_content__Li9Ip",
        buttons: "ShortcutsModal_buttons__o_xlC",
        button: "ShortcutsModal_button__cTIee",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        4361, 5087, 7191, 2498, 5453, 7873, 6891, 6235, 1990, 476, 4275, 9645,
        4205, 5134, 1744,
      ],
      function () {
        return e((e.s = 98041));
      },
    ),
      (_N_E = e.O());
  },
]);
