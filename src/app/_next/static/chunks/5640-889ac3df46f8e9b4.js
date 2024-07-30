(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5640],
  {
    63955: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hsl2rgb = t.adjustHue = t.safeHue = void 0),
        (t.safeHue = (e, t) => (t >= 280 && t < 360 ? e % 360 : e)),
        (t.adjustHue = (e) => (e + 280) % 360),
        (t.hsl2rgb = (e, t, i) => {
          let n = (n) => {
            let o = (n + e / 30) % 12;
            return (
              i -
              t * Math.min(i, 1 - i) * Math.max(-1, Math.min(o - 3, 9 - o, 1))
            );
          };
          return [n(0), n(8), n(4)];
        });
    },
    43055: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeSettings =
          t.normalizeCollectionHue =
          t.normalizeFrequency =
            void 0);
      let n = i(83664),
        o = i(97456);
      (t.normalizeFrequency = (e) => Math.min(1, (0, o.round)(e))),
        (t.normalizeCollectionHue = (e) =>
          null != e ? e : n.DEFAULT_COLLECTION_HUE),
        (t.normalizeSettings = (e) => {
          let { hue: i, collectionHue: o, energy: r, backgroundColor: a } = e,
            s = { collectionHue: (0, t.normalizeCollectionHue)(o) };
          return (
            i && (s.hue = i),
            r && (s.energy = (r + 1) * n.ENERGY_FACTOR),
            a && (s.backgroundColor = a),
            s
          );
        });
    },
    97456: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomNumber = t.round = void 0),
        (t.round = (e) => Math.round(100 * e) / 100),
        (t.randomNumber = (e, t) =>
          Math.floor(Math.random() * (Math.floor(t) - e + 1)) + e);
    },
    83664: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENERGY_FACTOR =
          t.DEFAULT_ENERGY =
          t.DEFAULT_COLLECTION_LIGHTNESS =
          t.DEFAULT_COLLECTION_SATURATION =
          t.DEFAULT_COLLECTION_HUE =
          t.DEFAULT_LIGHTNESS =
          t.DEFAULT_SATURATION =
          t.DEFAULT_HUE =
          t.MAX_FPS =
            void 0),
        (t.MAX_FPS = 25),
        (t.DEFAULT_HUE = 22.968),
        (t.DEFAULT_SATURATION = 1),
        (t.DEFAULT_LIGHTNESS = 0.5),
        (t.DEFAULT_COLLECTION_HUE = 10),
        (t.DEFAULT_COLLECTION_SATURATION = 0.8),
        (t.DEFAULT_COLLECTION_LIGHTNESS = 0.46),
        (t.DEFAULT_ENERGY = 0.2),
        (t.ENERGY_FACTOR = 0.4);
    },
    54098: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DumbAnalyzer = t.FrequencyAnalyzer = void 0);
      let o = i(43055);
      class r {
        handleUserAction() {
          this.audioContext.resume(),
            document.removeEventListener("click", this.handleUserAction);
        }
        setupListeners() {
          document.addEventListener("click", this.handleUserAction);
        }
        getAverageFrequencies(e) {
          var t, i;
          let { low: n, high: r } = e,
            a = Math.floor(
              n / (this.audioContext.sampleRate / this.bufferLength),
            ),
            s = Math.floor(
              r / (this.audioContext.sampleRate / this.bufferLength),
            );
          null === (t = this.analyserNode) ||
            void 0 === t ||
            t.getByteFrequencyData(this.spectrum);
          let l = 0,
            d = 0;
          for (let e = a; e <= s; e++)
            (l +=
              (null !== (i = this.spectrum[e]) && void 0 !== i ? i : 0) / 256),
              d++;
          return (0, o.normalizeFrequency)(l / d);
        }
        constructor(e) {
          n._(this, "audioContext", void 0),
            n._(this, "sourceNode", void 0),
            n._(this, "analyserNode", void 0),
            n._(this, "bufferLength", 0),
            n._(this, "spectrum", new Uint8Array()),
            (this.audioContext = new AudioContext()),
            (this.sourceNode = this.audioContext.createMediaElementSource(e)),
            (this.analyserNode = this.audioContext.createAnalyser()),
            (this.analyserNode.fftSize = 32),
            (this.analyserNode.smoothingTimeConstant = 0.9),
            this.sourceNode.connect(this.analyserNode),
            this.analyserNode.connect(this.audioContext.destination),
            (this.bufferLength = this.analyserNode.frequencyBinCount),
            (this.spectrum = new Uint8Array(this.bufferLength)),
            (this.handleUserAction = this.handleUserAction.bind(this)),
            this.setupListeners();
        }
      }
      t.FrequencyAnalyzer = r;
      class a {
        getAverageFrequencies() {
          return 0;
        }
      }
      t.DumbAnalyzer = a;
    },
    47456: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Color = void 0);
      let o = i(63955),
        r = i(97456),
        a = i(83664),
        s = i(80749);
      class l {
        get value() {
          return [
            this.bottomStart.value,
            this.middleStart.value,
            this.topStart.value,
            this.bottomEnd.value,
            this.middleEnd.value,
            this.topEnd.value,
          ];
        }
        update(e, t) {
          (this.hue = e), (this.collectionHue = t);
          let i = (0, o.adjustHue)(e),
            n = (0, o.safeHue)(i + (0, r.randomNumber)(40, 80), i),
            a = (0, o.adjustHue)(t);
          this.topStart.update(i),
            this.topEnd.update(
              (0, o.safeHue)(i + (0, r.randomNumber)(30, 40), i),
            ),
            this.middleStart.update(n),
            this.middleEnd.update(
              (0, o.safeHue)(n + (0, r.randomNumber)(30, 40), i),
            ),
            this.bottomStart.update(a),
            this.bottomEnd.update(
              (0, o.safeHue)(a + (0, r.randomNumber)(30, 40), i),
            );
        }
        next(e) {
          this.topStart.next(e),
            this.topEnd.next(e),
            this.middleStart.next(e),
            this.middleEnd.next(e),
            this.bottomStart.next(e),
            this.bottomEnd.next(e);
        }
        constructor(e) {
          n._(this, "hue", a.DEFAULT_HUE),
            n._(this, "collectionHue", a.DEFAULT_COLLECTION_HUE),
            n._(this, "topStart", void 0),
            n._(this, "topEnd", void 0),
            n._(this, "middleStart", void 0),
            n._(this, "middleEnd", void 0),
            n._(this, "bottomStart", void 0),
            n._(this, "bottomEnd", void 0),
            (this.collectionHue = e);
          let t = (0, o.adjustHue)(e),
            i = (0, o.safeHue)(t + (0, r.randomNumber)(30, 40), t);
          (this.topStart = new s.RGB(50)),
            (this.topEnd = new s.RGB(50)),
            (this.middleStart = new s.RGB(300)),
            (this.middleEnd = new s.RGB(320)),
            (this.bottomStart = new s.RGB(t)),
            (this.bottomEnd = new s.RGB(i));
        }
      }
      t.Color = l;
    },
    69407: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DynamicValue = void 0);
      class o {
        clamp(e, t, i) {
          return Math.min(Math.max(e, t), i);
        }
        get value() {
          return this.formatter
            ? this.formatter(this.currentValue)
            : this.currentValue;
        }
        update(e) {
          (this.targetValue = e), (this.elapsedTime = 0);
        }
        next(e) {
          let t = this.clamp(this.elapsedTime / this.duration, 0, 1);
          return (
            (this.elapsedTime += e),
            (this.currentValue =
              this.currentValue + (this.targetValue - this.currentValue) * t),
            this.currentValue
          );
        }
        constructor(e, t, i, o) {
          n._(this, "currentValue", void 0),
            n._(this, "targetValue", void 0),
            n._(this, "elapsedTime", void 0),
            n._(this, "duration", void 0),
            n._(this, "formatter", void 0),
            (this.currentValue = e),
            (this.targetValue = t),
            (this.duration = i),
            (this.elapsedTime = 0),
            (this.formatter = o);
        }
      }
      t.DynamicValue = o;
    },
    19434: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VibeAnimationRenderer = void 0);
      let o = i(26716),
        r = i(43055),
        a = i(83664),
        s = i(52999),
        l = i(98355),
        d = i(61939),
        u = i(49198);
      class c {
        get rendererOptions() {
          return { alpha: !1, antialias: !1, preserveDrawingBuffer: !1 };
        }
        get vertexAndFragment() {
          return { vertex: s.VertexShaderV2, fragment: s.FragmentShaderV2 };
        }
        setupListeners() {
          window.addEventListener("resize", this.handleOnResize),
            document.addEventListener(
              "visibilitychange",
              this.handleOnVisibilityChange,
            );
        }
        createElement(e) {
          (e.innerHTML = ""), e.appendChild(this.renderer.gl.canvas);
        }
        createShader() {
          let e = this.renderer.gl,
            t = new o.Plane(e, { width: 2, height: 2 }),
            i = new o.Program(e, {
              ...this.vertexAndFragment,
              uniforms: this.uniforms.toObject(),
            });
          return (
            new o.Mesh(e, { geometry: t, program: i }).setParent(this.scene), i
          );
        }
        render() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.uniforms.update(t, this.analyzer),
            (this.shader.uniforms = this.uniforms.toObject()),
            null === (e = this.renderer) ||
              void 0 === e ||
              e.render({ scene: this.scene });
        }
        handleOnResize() {
          this.renderer.setSize(this.uniforms.width, this.uniforms.height);
        }
        handleOnVisibilityChange() {
          "visible" === document.visibilityState
            ? this.enableRender(l.RenderState.ACTIVE_TAB)
            : this.disableRender(l.RenderState.ACTIVE_TAB);
        }
        updateRenderingState() {
          Object.values(this.renderState).every((e) => e)
            ? this.ticker.start()
            : this.ticker.stop();
        }
        applySettings() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            {
              hue: t,
              collectionHue: i,
              energy: n,
              backgroundColor: o,
            } = (0, r.normalizeSettings)(e);
          t && i && this.uniforms.updateColor(t, i),
            n && this.uniforms.updateEnergy(n),
            o && this.uniforms.updateBackgroundColor(o);
        }
        likeAnimation() {
          this.uniforms.updateReactTop(0.7),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0.7);
            }, 100),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0.7);
            }, 150),
            setTimeout(() => {
              this.uniforms.updateReactTop(0);
            }, 850),
            setTimeout(() => {
              this.uniforms.updateReactMiddle(0);
            }, 950),
            setTimeout(() => {
              this.uniforms.updateReactBottom(0);
            }, 1050);
        }
        playAnimation(e) {
          this.uniforms.updatePlayingState(!0), this.applySettings(e);
        }
        idleAnimation() {
          this.uniforms.updateEnergy(a.DEFAULT_ENERGY),
            this.uniforms.updatePlayingState(!1);
        }
        enableRender(e) {
          (this.renderState[e] = !0), this.updateRenderingState();
        }
        disableRender(e) {
          (this.renderState[e] = !1), this.updateRenderingState();
        }
        destroy() {
          this.handleOnResize &&
            window.removeEventListener("resize", this.handleOnResize),
            this.handleOnVisibilityChange &&
              document.removeEventListener(
                "visibilitychange",
                this.handleOnVisibilityChange,
              );
        }
        constructor(e, t, i) {
          n._(this, "analyzer", void 0),
            n._(this, "ticker", void 0),
            n._(this, "scene", new o.Transform()),
            n._(this, "shader", void 0),
            n._(this, "renderer", void 0),
            n._(this, "uniforms", void 0),
            n._(this, "renderState", {
              [l.RenderState.ACTIVE_TAB]: !0,
              [l.RenderState.BLOCK_VISIBILITY]: !0,
              [l.RenderState.MANUAL]: !0,
            }),
            (this.uniforms = new u.Uniforms((0, r.normalizeCollectionHue)(i))),
            (this.renderer = new o.Renderer(this.rendererOptions)),
            (this.ticker = new d.Ticker(a.MAX_FPS, this.render.bind(this))),
            (this.analyzer = t),
            this.createElement(e),
            (this.handleOnResize = this.handleOnResize.bind(this)),
            (this.handleOnVisibilityChange =
              this.handleOnVisibilityChange.bind(this)),
            (this.shader = this.createShader()),
            this.handleOnResize(),
            this.handleOnVisibilityChange(),
            this.setupListeners();
        }
      }
      t.VibeAnimationRenderer = c;
    },
    80749: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RGB = void 0);
      let o = i(63955),
        r = i(83664),
        a = i(69407);
      class s {
        get value() {
          return [this.r.value, this.g.value, this.b.value];
        }
        update(e) {
          let t = (0, o.hsl2rgb)(e, r.DEFAULT_SATURATION, r.DEFAULT_LIGHTNESS);
          this.r.update(t[0]), this.g.update(t[1]), this.b.update(t[2]);
        }
        next(e) {
          this.r.next(e), this.g.next(e), this.b.next(e);
        }
        constructor(e) {
          n._(this, "r", void 0),
            n._(this, "g", void 0),
            n._(this, "b", void 0);
          let t = (0, o.hsl2rgb)(e, r.DEFAULT_SATURATION, r.DEFAULT_LIGHTNESS);
          (this.r = new a.DynamicValue(t[0], t[0], 3e3)),
            (this.g = new a.DynamicValue(t[1], t[1], 3e3)),
            (this.b = new a.DynamicValue(t[2], t[2], 3e3));
        }
      }
      t.RGB = s;
    },
    61939: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Ticker = void 0);
      class o {
        start() {
          if (this.isActive) return;
          let e = window.performance.now(),
            t = 1e3 / this.fps,
            i = (n) => {
              this.requestId = requestAnimationFrame(i);
              let o = n - e;
              o >= t - 0.1 && ((e = n - (o % t)), this.render(o));
            };
          (this.isActive = !0), (this.requestId = requestAnimationFrame(i));
        }
        stop() {
          this.isActive &&
            ((this.isActive = !1), cancelAnimationFrame(this.requestId));
        }
        constructor(e, t) {
          n._(this, "fps", void 0),
            n._(this, "render", void 0),
            n._(this, "isActive", !1),
            n._(this, "requestId", 0),
            (this.fps = e),
            (this.render = t);
        }
      }
      t.Ticker = o;
    },
    49198: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(8655);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Uniforms = void 0);
      let o = i(26716),
        r = i(83664),
        a = i(47456),
        s = i(69407);
      class l {
        toValue(e) {
          return { value: e };
        }
        get width() {
          return Math.min(window.innerWidth * this.quality, 800);
        }
        get height() {
          let e = window.innerHeight / window.innerWidth;
          return Math.min(window.innerHeight * this.quality, 800 * e);
        }
        updatePlayingState(e) {
          (this.isPlaying = e),
            e
              ? (this.audioLowRatio.update(1),
                this.audioMiddleRatio.update(1),
                this.audioHighRatio.update(1))
              : (this.audioLowRatio.update(0),
                this.audioMiddleRatio.update(0),
                this.audioHighRatio.update(0));
        }
        updateColor(e, t) {
          this.color.update(e, t);
        }
        updateBackgroundColor(e) {
          this.background = new o.Vec3(e, e, e);
        }
        updateEnergy(e) {
          this.energy.update(e);
        }
        updateReactTop(e) {
          this.reactTop.update(e);
        }
        updateReactMiddle(e) {
          this.reactMiddle.update(e);
        }
        updateReactBottom(e) {
          this.reactBottom.update(e);
        }
        updateTime(e) {
          let t = (this.energy.value * e) / 1e3;
          this.time = (this.time + t) % 86400;
        }
        update(e, t) {
          if (
            (this.energy.next(e),
            this.color.next(e),
            this.reactTop.next(e),
            this.reactMiddle.next(e),
            this.reactBottom.next(e),
            this.updateTime(e),
            t)
          ) {
            let i = t.getAverageFrequencies({ low: 0, high: 250 }),
              n = t.getAverageFrequencies({ low: 500, high: 2e3 }),
              o = t.getAverageFrequencies({ low: 2e3, high: 4e3 });
            this.audioLowRatio.next(e),
              this.audioMiddleRatio.next(e),
              this.audioHighRatio.next(e),
              (this.audio = [
                i * this.audioLowRatio.value,
                n * this.audioMiddleRatio.value,
                o * this.audioHighRatio.value,
              ]);
          }
        }
        toObject() {
          return {
            vScreenSize: this.toValue(new o.Vec2(this.width, this.height)),
            vTime: this.toValue(this.time),
            vColorBackground: this.toValue(this.background),
            vColor: this.toValue(this.color.value),
            vRotation: this.toValue(this.rotation),
            vAudio: this.toValue(this.audio),
            vReact: this.toValue([
              this.reactTop.value,
              this.reactMiddle.value,
              this.reactBottom.value,
            ]),
            vInteractionPoint: this.toValue(this.point),
            vInteraction: this.toValue(this.interaction),
          };
        }
        constructor(e) {
          n._(this, "isPlaying", !1),
            n._(this, "quality", 0.6),
            n._(this, "background", new o.Vec3(0, 0, 0)),
            n._(
              this,
              "energy",
              new s.DynamicValue(r.DEFAULT_ENERGY, r.DEFAULT_ENERGY, 1e3),
            ),
            n._(this, "time", Math.floor(3600 * Math.random())),
            n._(this, "color", void 0),
            n._(this, "rotation", [
              new o.Vec3(-0.3, 0.3, 0.2),
              new o.Vec3(-0.3, -0.3, -0.2),
              new o.Vec3(-0.3, -0.3, 0.2),
            ]),
            n._(this, "audio", [0, 0, 0]),
            n._(this, "audioLowRatio", new s.DynamicValue(0, 0, 1e3)),
            n._(this, "audioMiddleRatio", new s.DynamicValue(0, 0, 1e3)),
            n._(this, "audioHighRatio", new s.DynamicValue(0, 0, 1e3)),
            n._(this, "reactTop", new s.DynamicValue(0, 0, 600)),
            n._(this, "reactMiddle", new s.DynamicValue(0, 0, 600)),
            n._(this, "reactBottom", new s.DynamicValue(0, 0, 600)),
            n._(this, "point", [0, 0]),
            n._(this, "interaction", 0),
            (this.color = new a.Color(e));
        }
      }
      t.Uniforms = l;
    },
    53367: function (e, t, i) {
      "use strict";
      t.TP = t.UE = t.nT = t.dr = t.Qz = t.WZ = t.kB = t.wX = void 0;
      var n = i(63955);
      Object.defineProperty(t, "wX", {
        enumerable: !0,
        get: function () {
          return n.hsl2rgb;
        },
      }),
        Object.defineProperty(t, "kB", {
          enumerable: !0,
          get: function () {
            return n.adjustHue;
          },
        });
      var o = i(54098);
      Object.defineProperty(t, "WZ", {
        enumerable: !0,
        get: function () {
          return o.FrequencyAnalyzer;
        },
      }),
        Object.defineProperty(t, "Qz", {
          enumerable: !0,
          get: function () {
            return o.DumbAnalyzer;
          },
        });
      var r = i(19434);
      Object.defineProperty(t, "dr", {
        enumerable: !0,
        get: function () {
          return r.VibeAnimationRenderer;
        },
      });
      var a = i(98355);
      Object.defineProperty(t, "nT", {
        enumerable: !0,
        get: function () {
          return a.RenderState;
        },
      });
      var s = i(83664);
      Object.defineProperty(t, "UE", {
        enumerable: !0,
        get: function () {
          return s.DEFAULT_COLLECTION_SATURATION;
        },
      }),
        Object.defineProperty(t, "TP", {
          enumerable: !0,
          get: function () {
            return s.DEFAULT_COLLECTION_LIGHTNESS;
          },
        });
    },
    52999: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FragmentShaderV2 = t.VertexShaderV2 = void 0),
        (t.VertexShaderV2 =
          "\nprecision highp float;\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = position;\n}\n"),
        (t.FragmentShaderV2 =
          "\nprecision highp float;\n\nuniform vec2 vScreenSize;\nuniform float vTime;\n\nuniform vec3 vColorBackground;\n\nuniform vec3 vColor[6];\nuniform vec3 vRotation[3];\n\nuniform float vAudio[3];\nuniform float vReact[3];\n\nuniform vec2 vInteractionPoint;\nuniform float vInteraction;\n\n#define CIRCLE_WIDTH_BASE 0.8\n#define CIRCLE_WIDTH_STEP 0.2\n\n#define SPARK_STRENGTH_BASE 1.0\n#define SPARK_STRENGTH_STEP 0.3\n\n#define CIRCLE_RADIUS_BASE 0.95\n#define CIRCLE_RADIUS_STEP 0.15\n\n#define CIRCLE_OFFSET_BASE 0.0\n#define CIRCLE_OFFSET_STEP 1.57\n\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise3(vec3 v) {\n  const vec2 C = vec2(0.1666667, 0.3333333); // vec2(1.0/6.0, 1.0/3.0)\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  // x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  // Gradients ( N*N points uniformly over a square, mapped onto an octahedron.)\n  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z); //  mod(p,N*N), N=7\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  //Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n}\n\nfloat tri(in float x){return abs(fract(x)-.5);}\nvec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y*20.)), tri(p.z+tri(p.x*1.)), tri(p.y+tri(p.x*1.)));}\n\nfloat triNoise3D(in vec3 p, in float spd)\n{\n  float z=0.4;\n  float rz = 0.1;\n  vec3 bp = p;\n  for (float i=0.; i<=4.; i++ )\n  {\n    vec3 dg = tri3(bp*0.01); // Increase the scale factor to make noise less frequent\n    p += (dg+vTime*.1*spd);\n\n    bp *= 4.; // Increase the scale factor\n    z *= 0.9;\n    p *= 1.6; // Increase the scale factor\n\n    rz+= (tri(p.z+tri(0.6*p.x+0.1*tri(p.y))))/z;\n  }\n  return smoothstep(0.0, 8., rz + sin(rz + sin(z) * 2.8) * 2.2);\n}\n\nvec2 rotate(vec2 p, float a) {\n  float s = sin(a);\n  float c = cos(a);\n  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}\n\nfloat light(float intensity, float attenuation, float dist) {\n  return intensity / (1.0 + dist + dist * attenuation);\n}\n\nvec4 makeNoiseBlob2(vec2 uv, vec3 color1, vec3 color2, float strength, float offset) {\n  float len = length(uv);\n  float v0, v1, cl;\n  float r0, d0, n0;\n  float r, d;\n\n  n0 = snoise3( vec3(uv * 1.2 + offset, vTime * 0.5 + offset) ) * 0.5 + 0.5;\n  r0 = mix(0.0, 1.0, n0);\n  d0 = distance(uv, r0 / len * uv);\n  v0 = smoothstep(r0 + 0.1 + (sin(vTime + offset) + 1.0), r0, len);\n\n  v1 = light(0.15 * (1.0 + 1.5 * (-sin(vTime * 2. + offset * 0.5) * 0.5)) + 0.3 * strength, 10.0 , d0);\n\n  vec3 col = mix(color1, color2, uv.y * 2.);\n  col = col + v1;\n  col.rgb = clamp(col.rgb, 0.0, 1.0);\n  return vec4(col, v0);\n}\n\nvec4 makeBlob(vec2 uv,\n              float blob,\n              vec3 color1,\n              vec3 color2,\n              float width,\n              float baseReaction,\n              float likeReaction,\n              float audioStrength,\n              float offset,\n              vec2 noiseOffset) {\n  float len = length(uv);\n\n  float outerRadius = blob + width * 0.5 + baseReaction * (1.0 + max(likeReaction, audioStrength * 0.6) * 50. * baseReaction);\n\n  float strength = max(likeReaction, audioStrength);\n\n  vec4 noise = makeNoiseBlob2(uv * (1.0 - likeReaction * 0.5) + noiseOffset, color1, color2, strength, offset);\n  noise.a = mix(0.0, noise.a, smoothstep(outerRadius, 0.5, len));\n  noise.rgb += 0.6 * likeReaction * (1.0 - smoothstep(0.2, outerRadius * 0.8, len));\n\n  return noise;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / vScreenSize.xy;\n\n  uv = uv * 2.0 - 1.0;\n  uv.y *= vScreenSize.y / min(vScreenSize.x, vScreenSize.y) / 0.55;\n  uv.x *= vScreenSize.x / min(vScreenSize.x, vScreenSize.y) / 0.55;\n\n  vec2 ruv = uv * 2.0;\n  float pr = length(ruv);\n  float pa = atan(ruv.y, ruv.x);\n\n  float idx = (pa/3.1415) / 2.0;   // 0 to 1\n\n  vec2 ruv1 = rotate(uv * 2.0, 3.1415);\n  float pa1 = atan(ruv1.y, ruv1.x);\n  float idx1 = (pa1/3.1415) / 2.0;   // 0 to 1\n  float idx21 = (pa1/3.1415 + 1.0) / 2.0 * 3.1415; // 0 to PI\n\n  float spark = triNoise3D(vec3(idx, 0.0, 0.0), 0.1);\n  spark = mix(spark, triNoise3D(vec3(idx1, 0.0, idx1), 0.1), smoothstep(0.9, 1.0, sin(idx21)));\n  spark = spark * 0.2 + pow(spark, 10.);\n  spark = smoothstep(0.0, spark, 0.3) * spark;\n\n  vec3 color = vColorBackground;\n  vec4 blobColor;\n  float floatIndex;\n  float radius;\n\n  float n0 = snoise3(vec3(uv * 1.2, vTime * 0.5));\n\n  for (int i = 0; i < 3; i++) {\n    floatIndex = float(i);\n    radius = CIRCLE_RADIUS_BASE - CIRCLE_RADIUS_STEP * floatIndex;\n    blobColor = makeBlob(uv,\n                         mix(radius, radius + 0.3, n0),\n                         vColor[i],\n                         vColor[i+3],\n                         CIRCLE_WIDTH_BASE - CIRCLE_WIDTH_STEP * floatIndex,\n                         (SPARK_STRENGTH_BASE - SPARK_STRENGTH_STEP * floatIndex) * spark,\n                         vReact[i],\n                         vAudio[i],\n                         CIRCLE_OFFSET_BASE + CIRCLE_OFFSET_STEP * floatIndex,\n                         rotate(vRotation[i].xy, vTime * vRotation[i].z));\n    color = mix(color, blobColor.rgb, blobColor.a);\n  }\n\n  gl_FragColor = vec4(color, 1.0);\n}\n");
    },
    98355: function (e, t) {
      "use strict";
      var i, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RenderState = void 0),
        ((n = i || (t.RenderState = i = {})).ACTIVE_TAB = "ACTIVE_TAB"),
        (n.BLOCK_VISIBILITY = "BLOCK_VISIBILITY"),
        (n.MANUAL = "MANUAL");
    },
    10905: function (e, t, i) {
      "use strict";
      i.d(t, {
        DefaultLayout: function () {
          return O;
        },
      });
      var n = i(9753),
        o = i(60836),
        r = i(9544),
        a = i(74717),
        s = i(69863),
        l = i(98639),
        d = (i(1263), i(37117), i(63394));
      let u = ["album", "users", "artist", "chart"],
        c = () => {
          let e = (0, a.usePathname)();
          return (0, l.useMemo)(() => {
            let [, t] = e.split("/");
            return !!t && u.includes(t);
          }, [e]);
        };
      var h = i(3924),
        v = i.n(h);
      v().secondaryEnter, v().secondaryEnterActive;
      let _ = (0, r.Pi)((e) => {
        let { className: t, children: i } = e;
        (0, d.uK)();
        let { setContentRef: r } = (0, d.$Y)(),
          { settings: a } = (0, d.oR)();
        return (
          a.layout,
          d.t8.Mobile,
          c(),
          (0, l.useRef)(null),
          (0, n.jsx)("main", {
            className: (0, o.W)(v().rootOld, t),
            ref: r,
            children: (0, n.jsx)(l.Suspense, { children: i }),
          })
        );
      });
      var m = i(80542),
        p = i(96622),
        f = i(89352),
        g = i(2570),
        y = i(87908),
        b = i(33589),
        x = i(67868),
        C = i(81829),
        T = i.n(C);
      let E = (e) => {
          let { title: t, description: i, children: o } = e;
          return (0, n.jsxs)("div", {
            className: T().infoBlock,
            children: [
              (0, n.jsx)(g.Caption, {
                variant: "div",
                size: "l",
                className: T().infoTitle,
                children: t,
              }),
              (0, n.jsxs)(g.Caption, {
                variant: "div",
                size: "l",
                children: [i, " ", o],
              }),
            ],
          });
        },
        S = (0, r.Pi)(() => {
          let { formatMessage: e } = (0, m.Z)(),
            { notify: t } = (0, d.d$)(),
            {
              currentTrackInfo: i,
              settings: r,
              modals: { trackModal: a },
              fullscreenPlayer: s,
            } = (0, d.oR)(),
            u = i.isUGC,
            c = r.platform === d.t4.WINDOWS;
          u && i.isTrackIdle && i.getTrackMeta(),
            i.fullTrack || !i.isTrackIdle || u || i.getFullTrack(),
            !i.credits && i.isCreditsIdle && i.getCreditsInfo(),
            (0, l.useEffect)(
              () => () => {
                i.reset();
              },
              [i],
            );
          let h = (0, l.useCallback)(() => {
              a.close(), i.reset();
            }, [i, a]),
            v = (0, l.useCallback)(
              (e) => {
                var t;
                e || i.reset(),
                  null === (t = a.onOpenChange) || void 0 === t || t.call(a, e);
              },
              [i, a],
            );
          i.isRejected &&
            (h(),
            t(
              (0, n.jsx)(x.Q, {
                error: e({ id: "error-messages.error-during-action" }),
              }),
              { containerId: d.W$.ERROR },
            ));
          let _ = i.fullTrack,
            C = (0, l.useMemo)(() => {
              var t;
              return (
                null === (t = i.credits) || void 0 === t ? void 0 : t.length
              )
                ? i.credits
                    .filter((t) => t.title !== e({ id: "track-modal.artist" }))
                    .map((e) => {
                      let { title: t, value: i } = e;
                      return (0, n.jsx)(E, { title: t, description: i }, t);
                    })
                : null;
            }, [i.credits, e]),
            S = (0, l.useMemo)(
              () => (null == _ ? void 0 : _.artists.filter((e) => e.composer)),
              [null == _ ? void 0 : _.artists],
            ),
            k =
              (null == _ ? void 0 : _.artists) && (0, y.Op)(_.artists) > 1
                ? e({ id: "track-modal.artists" })
                : e({ id: "track-modal.artist" }),
            R =
              Number(null == S ? void 0 : S.length) > 1
                ? e({ id: "track-modal.composers" })
                : e({ id: "track-modal.composer" }),
            A = null == _ ? void 0 : _.isExplicit;
          return (0, n.jsx)(f.u, {
            open: a.isOpened,
            onClose: h,
            placement: "right",
            contentClassName: T().modalContent,
            title: e({ id: "track-modal.title" }),
            headerClassName: T().headerClassName,
            className: (0, o.W)(T().root, {
              [T().root_withFullscreen]: s.modal.isOpened,
              [T().root_withWindows]: c,
            }),
            overlayClassName: T().overlay,
            onOpenChange: v,
            labelClose: e({ id: "interface-actions.close" }),
            children: (0, n.jsxs)("div", {
              className: T().content,
              children: [
                (i.isTrackLoading || i.isTrackRejected) && (0, n.jsx)(x.AH, {}),
                _ &&
                  (0, n.jsx)(E, {
                    title: e({ id: "track-modal.track-name" }),
                    description: _.title,
                    children:
                      (null == _ ? void 0 : _.trackExplicitMark) &&
                      (0, n.jsx)(p.ExplicitMark, {
                        className: A ? T().explicit : "",
                        iconSize: "xs",
                        variant: _.trackExplicitMark,
                      }),
                  }),
                (null == _ ? void 0 : _.version) &&
                  (0, n.jsx)(E, {
                    title: e({ id: "track-modal.version" }),
                    description: _.version,
                  }),
                Number(null == _ ? void 0 : _.artists.length) > 0 &&
                  (0, n.jsxs)("div", {
                    className: T().infoBlock,
                    children: [
                      (0, n.jsx)(g.Caption, {
                        variant: "div",
                        size: "l",
                        className: T().infoTitle,
                        children: k,
                      }),
                      (0, n.jsx)(g.Caption, {
                        variant: "div",
                        size: "l",
                        children: (0, n.jsx)(b.jO, {
                          className: (0, o.W)(T().important, T().artists),
                          linkClassName: T().artistLink,
                          artists: null == _ ? void 0 : _.artists,
                          withLink: !(null == _ ? void 0 : _.isUGC),
                          captionSize: "l",
                          withComposer: !1,
                        }),
                      }),
                    ],
                  }),
                Number(null == S ? void 0 : S.length) > 0 &&
                  (0, n.jsxs)("div", {
                    className: T().infoBlock,
                    children: [
                      (0, n.jsx)(g.Caption, {
                        variant: "div",
                        size: "l",
                        className: T().infoTitle,
                        children: R,
                      }),
                      (0, n.jsx)(g.Caption, {
                        variant: "div",
                        size: "l",
                        children: (0, n.jsx)(b.jO, {
                          className: (0, o.W)(T().important, T().artists),
                          linkClassName: T().artistLink,
                          artists: S,
                          withLink: !(null == _ ? void 0 : _.isUGC),
                          captionSize: "l",
                        }),
                      }),
                    ],
                  }),
                (i.isCreditsLoading || i.isCreditsRejected) &&
                  (0, n.jsx)(x.AH, {}),
                C,
              ],
            }),
          });
        }),
        k = (0, r.Pi)(() => {
          let { settings: e } = (0, d.oR)();
          return e.layout === d.t8.Mobile ? null : (0, n.jsx)(S, {});
        });
      var R = i(51952),
        A = i(5222),
        w = i(68106),
        V = i(94112),
        I = i(56570),
        L = i(20121),
        N = i(6494),
        j = i.n(N);
      let O = (0, r.Pi)((e) => {
        var t, i;
        let { children: r } = e,
          l = (0, a.usePathname)(),
          u = (0, d.uK)().get(d.U5),
          { settings: c, experiments: h, communication: v } = (0, d.oR)(),
          m = c.layout === d.t8.Mobile,
          p = c.layout !== d.t8.Mobile,
          f = c.platform === d.t4.MACOS,
          g = c.platform === d.t4.WINDOWS,
          y = true;
        return (0, n.jsxs)("div", {
          className: (0, o.W)(j().root, {
            [j().root_applicationPreserveTitleBar]: g,
            [j().root_withBarBelow]:
              p &&
              (null === (t = v.list) || void 0 === t
                ? void 0
                : t.barBellow.isVisible) &&
              (null === (i = v.list) || void 0 === i
                ? void 0
                : i.barBellow.hasAnimationAlreadyBeenStarted),
          }),
          children: [
            (0, n.jsx)(R.wp, {
              className: (0, o.W)(j().navbar, {
                [j().navbar_application_macos]: f,
                [j().navbar_application_windows]: g,
              }),
            }),
            (0, n.jsx)(_, {
              className: (0, o.W)(j().content, {
                [j().content_withPlayerBar]: m,
              }),
              children: (0, n.jsxs)(
                x.SV,
                {
                  fallback: w.D,
                  children: [
                    r,
                    (0, n.jsx)(s.P, {
                      className: j().notificationInfoContainer,
                      enableMultiContainer: !0,
                      containerId: d.W$.INFO,
                      position: "bottom-center",
                    }),
                    (0, n.jsx)(s.P, {
                      className: j().notificationErrorContainer,
                      enableMultiContainer: !0,
                      containerId: d.W$.ERROR,
                      position: "bottom-center",
                    }),
                  ],
                },
                l,
              ),
            }),
            (0, n.jsx)(A.ev, { className: j().playerBar }),
            p &&
              v.list &&
              (0, n.jsx)(I.Bm, {
                className: j().barBellow,
                barBellow: v.list.barBellow,
              }),
            (0, n.jsx)(A.Rt, {}),
            (0, n.jsx)(L.F8, {}),
            (0, n.jsx)(V._, {}),
            y && (0, n.jsx)(k, {}),
            u.dev.panel && (0, n.jsx)(x.bs, {}),
          ],
        });
      });
    },
    40029: function (e, t, i) {
      "use strict";
      i.d(t, {
        k_: function () {
          return c.VibeButton;
        },
        xJ: function () {
          return c.VibeButtonShimmer;
        },
        op: function () {
          return d.VibeCard;
        },
        KW: function () {
          return a;
        },
        FF: function () {
          return l;
        },
        BV: function () {
          return u.useOnPinClick;
        },
        xF: function () {
          return s;
        },
      });
      var n = i(42288),
        o = i(84338),
        r = i(63394);
      let a = n.V5.model("Vibe", {
          title: n.V5.optional(n.V5.string, ""),
          header: n.V5.optional(n.V5.string, ""),
          subtitle: n.V5.maybe(n.V5.string),
          stationId: n.V5.string,
          seeds: n.V5.array(n.V5.string),
          idForFrom: n.V5.maybe(n.V5.string),
          imageUrl: n.V5.maybe(n.V5.string),
          animationUrl: n.V5.maybe(n.V5.string),
          backgroundImageUrl: n.V5.maybe(n.V5.string),
          backgroundColor: n.V5.maybe(n.V5.string),
          colors: n.V5.maybe(
            n.V5.model({
              average: n.V5.maybe(n.V5.string),
              waveText: n.V5.maybe(n.V5.string),
            }),
          ),
        })
          .views((e) => ({
            get context() {
              if (e.seeds && (e.stationId !== r.sH || e.seeds.length > 1))
                return e.title;
              return null;
            },
            get pinId() {
              return (0, o.$k)(e.seeds);
            },
            get isPinned() {
              if (!(0, n.fh)(e)) return !1;
              let { pinsCollection: t } = (0, n.yj)(e);
              return t.isPinned(this.pinId);
            },
          }))
          .actions((e) => ({
            togglePin: (0, n.ls)(function* () {
              if (!(0, n.fh)(e)) return;
              let { pinsCollection: t, user: i } = (0, n.yj)(e);
              if (i.isAuthorized)
                return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
            }),
          })),
        s = (e) =>
          (0, n.pj)({
            title: e.name,
            seeds: e.seeds,
            stationId: e.stationId,
            idForFrom: e.idForFrom,
          }),
        l = (e) => {
          var t, i, o, r;
          return (0, n.pj)({
            title: e.title,
            header: e.header,
            stationId: e.stationId,
            seeds: e.seeds,
            animationUrl: e.animationUrl,
            backgroundImageUrl: e.backgroundImageUrl,
            imageUrl: e.imageUrl,
            colors: {
              average:
                null !==
                  (o =
                    null === (t = e.colors) || void 0 === t
                      ? void 0
                      : t.average) && void 0 !== o
                  ? o
                  : "",
              waveText:
                null !==
                  (r =
                    null === (i = e.colors) || void 0 === i
                      ? void 0
                      : i.waveText) && void 0 !== r
                  ? r
                  : "",
            },
          });
        };
      var d = i(76356),
        u = i(77027),
        c = i(85533);
    },
    77027: function (e, t, i) {
      "use strict";
      i.d(t, {
        useOnPinClick: function () {
          return u;
        },
      });
      var n = i(9753),
        o = i(24244),
        r = i(98639),
        a = i(80542),
        s = i(63394),
        l = i(67868);
      let d = (e) => {
          var t;
          let { vibe: i, closeToast: o } = e;
          return (0, n.jsx)(l.K1, {
            closeToast: o,
            entityVariant: l.j9.VIBE,
            entityTitle: i.title,
            averageColor:
              null === (t = i.colors) || void 0 === t ? void 0 : t.average,
            isPinned: i.isPinned,
          });
        },
        u = (e) => {
          let { user: t } = (0, s.oR)(),
            { notify: i } = (0, s.d$)(),
            { formatMessage: u } = (0, a.Z)(),
            [c, h] = (0, r.useState)(!1);
          return (0, r.useCallback)(async () => {
            if (!e) return;
            if (!t.isAuthorized) {
              i(
                (0, n.jsx)(l.Q, {
                  error: u({
                    id: "authorization-messages.need-to-authorizate",
                  }),
                }),
                { containerId: s.W$.ERROR },
              );
              return;
            }
            if (c) return;
            let r = { ...(0, o.ZN)(e), isPinned: !e.isPinned };
            h(!0);
            let a = await e.togglePin();
            h(!1),
              a
                ? i((0, n.jsx)(d, { vibe: r }), { containerId: s.W$.INFO })
                : i(
                    (0, n.jsx)(l.Q, {
                      error: u({ id: "error-messages.error-during-action" }),
                    }),
                    { containerId: s.W$.ERROR },
                  );
          }, [u, i, c, t.isAuthorized, e]);
        };
    },
    85533: function (e, t, i) {
      "use strict";
      i.d(t, {
        VibeButton: function () {
          return b;
        },
        VibeButtonShimmer: function () {
          return y;
        },
      });
      var n = i(9753),
        o = i(60836),
        r = i(9544),
        a = i(98639),
        s = i(31014),
        l = i(23881),
        d = i(17295),
        u = i(98342),
        c = i(39513),
        h = i(28852),
        v = i(86939),
        _ = i(90679),
        m = i(2570),
        p = i(63394),
        f = i(70010),
        g = i.n(f);
      let y = (e) => {
          let { isActive: t, className: i } = e;
          return (0, n.jsx)(_.Shimmer, {
            isActive: t,
            className: (0, o.W)(g().root, i),
          });
        },
        b = (0, r.Pi)((e) => {
          let { className: t, vibe: i } = e,
            { pageId: r } = (0, p.lV)(),
            { blockIdForFrom: _ } = (0, p.qY)(),
            { ref: f, intersectionPropertyId: y } = (0, p.Vf)(),
            { toggleTrue: b, toggleFalse: x, state: C } = (0, d.O)(!1),
            { isPlaying: T, togglePlay: E } = (0, p.Qh)({
              seeds: i.seeds,
              pageIdForFrom: r,
              blockIdForFrom: _,
            }),
            S = (0, p.lA)(),
            k = (0, a.useCallback)(
              (e) => {
                (0, u.m)(e, g().ripple),
                  b(),
                  E().finally(() => {
                    x(), S(!T);
                  });
              },
              [x, b, E, T, S],
            ),
            R = (0, a.useMemo)(() => {
              var e, t;
              return {
                "--vibe-button-background":
                  null === (e = i.colors) || void 0 === e ? void 0 : e.average,
                "--vibe-button-text-color":
                  null === (t = i.colors) || void 0 === t ? void 0 : t.waveText,
              };
            }, [i.colors]),
            A = T ? "pause" : "play";
          return (0, n.jsxs)(c.z, {
            style: R,
            withRipple: !1,
            withHover: !1,
            variant: "text",
            onClick: k,
            className: (0, o.W)(
              g().root,
              g().button,
              { [g().button_loading]: C },
              t,
            ),
            "data-intersection-property-id": y,
            ref: f,
            ...(0, l.BA)(l.QM.landing.VIBE_DISCOVERY_ITEM),
            children: [
              (0, n.jsx)(v.Image, {
                className: g().image,
                withAvatarReplace: !0,
                withFallback: !1,
                src: i.backgroundImageUrl,
                withAspectRatio: !0,
                size: 400,
                fit: "cover",
              }),
              (0, n.jsxs)("span", {
                className: g().textContainer,
                children: [
                  (0, n.jsx)(m.Caption, {
                    className: g().subtitle,
                    variant: "span",
                    type: "controls",
                    size: "s",
                    weight: "bold",
                    children: (0, n.jsx)(s.Z, { id: "entity-names.my-vibe" }),
                  }),
                  (0, n.jsxs)("span", {
                    className: g().titleContainer,
                    children: [
                      (0, n.jsx)(h.J, {
                        className: g().icon,
                        size: "xxs",
                        variant: A,
                      }),
                      (0, n.jsx)(m.Heading, {
                        className: g().title,
                        variant: "h2",
                        size: "xs",
                        lineClamp: 1,
                        children: i.title,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
    },
    76356: function (e, t, i) {
      "use strict";
      i.d(t, {
        VibeCard: function () {
          return _;
        },
      });
      var n = i(9753),
        o = i(60836),
        r = i(9544),
        a = i(98639),
        s = i(27491),
        l = i(12404),
        d = i(2570),
        u = i(63394),
        c = i(67868),
        h = i(55215),
        v = i.n(h);
      let _ = (0, r.Pi)((e) => {
        let { vibe: t, children: i, className: r } = e,
          { pageId: h } = (0, u.lV)(),
          [_, m] = (0, a.useState)(!1),
          { blockIdForFrom: p } = (0, u.qY)(),
          { settings: f } = (0, u.oR)(),
          { sendPlaySearchFeedback: g } = (0, u.sA)(),
          y = f.layout === u.t8.Mobile,
          {
            isPlaying: b,
            isPaused: x,
            togglePlay: C,
          } = (0, u.Qh)({
            seeds: t.seeds,
            pageIdForFrom: h,
            blockIdForFrom: p,
          }),
          T = b || x,
          E = (0, a.useCallback)(() => {
            y && (_ || b || (m(!0), null == g || g()), C());
          }, [y, b, _, g, C]),
          S = (0, a.useCallback)(() => {
            _ || b || (m(!0), null == g || g()), C();
          }, [b, _, g, C]),
          k = (0, a.useMemo)(
            () =>
              (0, n.jsxs)(l.Paper, {
                className: v().cover,
                radius: "round",
                withShadow: !0,
                onClick: E,
                children: [
                  (0, n.jsx)(c.BE, {
                    size: 200,
                    fit: "cover",
                    className: v().image,
                    style: { backgroundColor: t.backgroundColor },
                    src: t.imageUrl,
                    alt: t.title,
                    withAvatarReplace: !0,
                  }),
                  T &&
                    (0, n.jsx)(c.Up, {
                      stopAnimation: x,
                      className: v().playingAnimation,
                    }),
                  (0, n.jsx)(s.kk, {
                    className: (0, o.W)(
                      v().controls,
                      { [v().controls_isPlaying]: T },
                      v().important,
                    ),
                    bottomContainerClassName: v().playControl,
                    radius: "round",
                    playControl: (0, n.jsx)(c.JM, {
                      isPlaying: b,
                      onClick: S,
                      className: (0, o.W)(v().playButton, v().control),
                      buttonVariant: "default",
                      withHover: !1,
                      iconSize: "xl",
                      variant: "filled",
                    }),
                  }),
                ],
              }),
            [E, S, x, b, T, t.backgroundColor, t.imageUrl, t.title],
          );
        return (0, n.jsx)(s.m7, {
          className: (0, o.W)(v().root, r),
          textPosition: "center",
          title: (0, n.jsx)(d.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 2,
            children: t.title,
          }),
          description: (0, n.jsx)(d.Caption, {
            variant: "div",
            type: "entity",
            size: "s",
            weight: "medium",
            lineClamp: 1,
            children: t.subtitle,
          }),
          view: k,
          children: i,
        });
      });
    },
    54050: function (e, t, i) {
      "use strict";
      i.d(t, {
        y5: function () {
          return o;
        },
        iX: function () {
          return f;
        },
        Cx: function () {
          return g;
        },
      });
      var n = i(98639);
      let o = (0, n.createContext)(null);
      var r = i(9753),
        a = i(9544),
        s = i(23881),
        l = i(84338),
        d = i(78507),
        u = i(15419),
        c = i(53367),
        h = i(63394);
      let v = (e) => {
        var t, i;
        let [o, r] = (0, n.useState)({}),
          { sonataState: a } = (0, h.oR)();
        (0, n.useEffect)(() => {
          if (a.contextType === l.Ak.Vibe) {
            var t, i, n, s;
            o.id ===
              (null === (t = a.entityMeta) || void 0 === t ? void 0 : t.id) &&
              !o.isLiked &&
              (null === (s = a.entityMeta) || void 0 === s
                ? void 0
                : s.isLiked) &&
              e(),
              r({
                id: null === (i = a.entityMeta) || void 0 === i ? void 0 : i.id,
                isLiked:
                  null === (n = a.entityMeta) || void 0 === n
                    ? void 0
                    : n.isLiked,
              });
          }
        }, [
          a.contextType,
          null === (t = a.entityMeta) || void 0 === t ? void 0 : t.id,
          null === (i = a.entityMeta) || void 0 === i ? void 0 : i.isLiked,
          o.id,
          o.isLiked,
          e,
        ]);
      };
      var _ = i(11799),
        m = i.n(_);
      let p = "vibe-animation",
        f = (0, a.Pi)((e) => {
          var t, i, a, _, f, g, y;
          let { className: b } = e,
            x = (0, n.useRef)(null),
            C = (0, n.useRef)(null),
            { isIntersecting: T } =
              null !== (y = (0, d.S1)([x])[p]) && void 0 !== y ? y : {},
            { sonataState: E, user: S } = (0, h.oR)(),
            { theme: k } = (0, h.Fg)(),
            R = (0, n.useContext)(o),
            A = E.status === u.Xz.PLAYING && E.contextType === l.Ak.Vibe;
          return (
            (0, n.useEffect)(() => {
              if (x.current && R) {
                var e, t;
                let i =
                    null === (t = E.entityMeta) || void 0 === t
                      ? void 0
                      : null === (e = t.trackParameters) || void 0 === e
                        ? void 0
                        : e.hue,
                  n = S.collectionHue;
                (C.current = new c.dr(x.current, R, n)),
                  C.current.applySettings({ hue: i, collectionHue: n }),
                  x.current.classList.add(m().root_visible);
              }
              return () => {
                var e;
                null === (e = C.current) || void 0 === e || e.destroy();
              };
            }, []),
            (0, n.useEffect)(() => {
              var e, t, i, n, o, r, a, s;
              let l =
                  null === (t = E.entityMeta) || void 0 === t
                    ? void 0
                    : null === (e = t.trackParameters) || void 0 === e
                      ? void 0
                      : e.hue,
                d =
                  null === (n = E.entityMeta) || void 0 === n
                    ? void 0
                    : null === (i = n.trackParameters) || void 0 === i
                      ? void 0
                      : i.energy,
                u =
                  null === (r = E.entityMeta) || void 0 === r
                    ? void 0
                    : null === (o = r.trackParameters) || void 0 === o
                      ? void 0
                      : o.userCollectionHue;
              u && S.setUserCollectionHue(u),
                A
                  ? null === (a = C.current) ||
                    void 0 === a ||
                    a.playAnimation({ hue: l, collectionHue: u, energy: d })
                  : null === (s = C.current) ||
                    void 0 === s ||
                    s.idleAnimation();
            }, [
              S,
              A,
              null === (i = E.entityMeta) || void 0 === i
                ? void 0
                : null === (t = i.trackParameters) || void 0 === t
                  ? void 0
                  : t.hue,
              null === (_ = E.entityMeta) || void 0 === _
                ? void 0
                : null === (a = _.trackParameters) || void 0 === a
                  ? void 0
                  : a.energy,
              null === (g = E.entityMeta) || void 0 === g
                ? void 0
                : null === (f = g.trackParameters) || void 0 === f
                  ? void 0
                  : f.userCollectionHue,
            ]),
            (0, n.useEffect)(() => {
              var e;
              let t = k === h.Q2.Dark ? 0.0705 : 0.9607;
              null === (e = C.current) ||
                void 0 === e ||
                e.applySettings({ backgroundColor: t });
            }, [k]),
            (0, n.useEffect)(() => {
              if (C.current) {
                var e, t;
                T
                  ? null === (e = C.current) ||
                    void 0 === e ||
                    e.enableRender(c.nT.BLOCK_VISIBILITY)
                  : null === (t = C.current) ||
                    void 0 === t ||
                    t.disableRender(c.nT.BLOCK_VISIBILITY);
              }
            }, [T]),
            v(
              (0, n.useCallback)(() => {
                var e;
                null === (e = C.current) || void 0 === e || e.likeAnimation();
              }, []),
            ),
            (0, r.jsx)("div", {
              className: b,
              "data-intersection-property-id": p,
              ref: x,
              ...(0, s.BA)(s.bG.vibeAnimation.VIBE_ANIMATION),
            })
          );
        }),
        g = (e) => {
          let t = (0, c.wX)((0, c.kB)(e), c.UE, c.TP),
            i = Math.round(255 * t[0]),
            n = Math.round(255 * t[1]),
            o = Math.round(255 * t[2]);
          return "rgb(".concat(i, ", ").concat(n, ", ").concat(o, ")");
        };
    },
    68106: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return n.SomethingWentWrong;
        },
      });
      var n = i(18723);
    },
    18723: function (e, t, i) {
      "use strict";
      i.d(t, {
        SomethingWentWrong: function () {
          return m;
        },
      });
      var n = i(9753),
        o = i(60836),
        r = i(9544),
        a = i(98639),
        s = i(31014),
        l = i(39513),
        d = i(28852),
        u = i(2570),
        c = i(55784),
        h = i(63394),
        v = i(88178),
        _ = i.n(v);
      let m = (0, r.Pi)((e) => {
        let { className: t, withBackwardControl: i = !0 } = e,
          r = (0, a.useCallback)(() => {
            window.location.href = "/";
          }, []),
          { contentRef: v } = (0, h.$Y)();
        return (0, n.jsxs)("div", {
          className: (0, o.W)(_().root, t),
          children: [
            i &&
              (0, n.jsx)(c.n, {
                withBackwardFallback: "/",
                className: (0, o.W)(_().navigation, {
                  [_().navigation_desktop]: !v,
                }),
                withForwardControl: !1,
              }),
            (0, n.jsxs)("div", {
              className: (0, o.W)(_().content, { [_().content_shrink]: !i }),
              children: [
                (0, n.jsx)(d.J, {
                  className: _().icon,
                  variant: "attention",
                  size: "xxl",
                }),
                (0, n.jsx)(u.Heading, {
                  className: (0, o.W)(_().title, _().important),
                  variant: "h3",
                  size: "xs",
                  children: (0, n.jsx)(s.Z, {
                    id: "error-messages.something-went-wrong",
                  }),
                }),
                (0, n.jsxs)(u.Caption, {
                  className: (0, o.W)(_().text, _().important),
                  variant: "span",
                  type: "text",
                  size: "l",
                  weight: "normal",
                  children: [
                    !1,
                    (0, n.jsx)(s.Z, { id: "page-error.try-to-restart-app" }),
                  ],
                }),
                (0, n.jsx)(l.z, {
                  onClick: r,
                  className: _().button,
                  role: "link",
                  color: "secondary",
                  size: "l",
                  radius: "xxxl",
                  children: (0, n.jsxs)(u.Caption, {
                    type: "controls",
                    variant: "span",
                    size: "m",
                    children: [
                      !1,
                      (0, n.jsx)(s.Z, { id: "page-error.restart-app-button" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    6494: function (e) {
      e.exports = {
        root: "DefaultLayout_root__7J0wo",
        root_applicationPreserveTitleBar:
          "DefaultLayout_root_applicationPreserveTitleBar__ygJtq",
        root_withBarBelow: "DefaultLayout_root_withBarBelow__jPsaV",
        content: "DefaultLayout_content__md70Z",
        content_withPlayerBar: "DefaultLayout_content_withPlayerBar__9uFJT",
        notificationErrorContainer:
          "DefaultLayout_notificationErrorContainer__Qz_mD",
        notificationInfoContainer:
          "DefaultLayout_notificationInfoContainer__tKt7J",
        navbar: "DefaultLayout_navbar__LIQWG",
        navbar_application_macos:
          "DefaultLayout_navbar_application_macos__9dj3u",
        navbar_application_windows:
          "DefaultLayout_navbar_application_windows__3hDQ_",
        playerBar: "DefaultLayout_playerBar___9IaS",
        barBellow: "DefaultLayout_barBellow__DmTmx",
      };
    },
    70010: function (e) {
      e.exports = {
        root: "VibeButton_root___i3R5",
        ripple: "VibeButton_ripple__cmoBR",
        textContainer: "VibeButton_textContainer__j9nOW",
        titleContainer: "VibeButton_titleContainer__yrRRu",
        title: "VibeButton_title__sLC0I",
        subtitle: "VibeButton_subtitle__MQ_Ca",
        image: "VibeButton_image__GOwKJ",
        button: "VibeButton_button__tXFAm",
        button_loading: "VibeButton_button_loading__LYnUR",
        "applying-setting": "VibeButton_applying-setting__Jd_3C",
        icon: "VibeButton_icon__KIv7n",
      };
    },
    55215: function (e) {
      e.exports = {
        root: "VibeCard_root__9TDjP",
        playingAnimation: "VibeCard_playingAnimation__iRgvh",
        cover: "VibeCard_cover__LbX93",
        image: "VibeCard_image__luolD",
        controls: "VibeCard_controls__CcEVx",
        controls_isPlaying: "VibeCard_controls_isPlaying__1_Ass",
        important: "VibeCard_important__WPWqc",
        control: "VibeCard_control__SM3H4",
        playControl: "VibeCard_playControl__pZxq5",
        playButton: "VibeCard_playButton__LWepP",
      };
    },
    11799: function (e) {
      e.exports = {
        root_visible: "VibeAnimation_root_visible__S7kXl",
        "fade-in": "VibeAnimation_fade-in__hx6bD",
      };
    },
    3924: function (e) {
      e.exports = {
        rootOld: "Content_rootOld__g85_m",
        root: "Content_root__IsH8s",
        primary: "Content_primary__dInSS",
        primary_isMobile: "Content_primary_isMobile__ApDi2",
        primary_short: "Content_primary_short__TSM3L",
        secondary: "Content_secondary__tGLLS",
        secondary_isMobile: "Content_secondary_isMobile__CbF7M",
        secondaryEnter: "Content_secondaryEnter__Nsp_f",
        secondaryEnterActive: "Content_secondaryEnterActive__Ks_PK",
        secondaryExit: "Content_secondaryExit__m4gOK",
        secondaryExitActive: "Content_secondaryExitActive__miNnR",
      };
    },
    81829: function (e) {
      e.exports = {
        root: "TrackModalDesktop_root__GB2Y3",
        root_withFullscreen: "TrackModalDesktop_root_withFullscreen__17XCc",
        root_withWindows: "TrackModalDesktop_root_withWindows__72ONf",
        headerClassName: "TrackModalDesktop_headerClassName__PQYEu",
        modalContent: "TrackModalDesktop_modalContent__mc2tL",
        infoBlock: "TrackModalDesktop_infoBlock__YQv3l",
        infoTitle: "TrackModalDesktop_infoTitle__KWsVO",
        explicit: "TrackModalDesktop_explicit__bzKYo",
        content: "TrackModalDesktop_content__seXQ5",
        artistLink: "TrackModalDesktop_artistLink__PRr3M",
        artists: "TrackModalDesktop_artists__SU8pt",
        important: "TrackModalDesktop_important__6JUV2",
        overlay: "TrackModalDesktop_overlay__HY_wm",
      };
    },
    88178: function (e) {
      e.exports = {
        root: "SomethingWentWrong_root__d77VJ",
        content: "SomethingWentWrong_content__8_YkJ",
        content_shrink: "SomethingWentWrong_content_shrink__GOR_7",
        navigation: "SomethingWentWrong_navigation__a8eMG",
        navigation_desktop: "SomethingWentWrong_navigation_desktop__WGGBX",
        icon: "SomethingWentWrong_icon__f15_y",
        title: "SomethingWentWrong_title__Kn89B",
        important: "SomethingWentWrong_important__namIb",
        text: "SomethingWentWrong_text__KEfGc",
        button: "SomethingWentWrong_button__dmh7t",
      };
    },
  },
]);
