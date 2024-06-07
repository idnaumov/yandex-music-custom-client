"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7957],{7957:function(e,t,r){r.d(t,{createClientContainer:function(){return I}});var i=r(87249),n=r(13362),a=r(9052),o=r(93691),s=r(69764),l=r(13427),g=r(36019),c=r(89788),u=r(68085),p=r(24807),m=r(63198),d=r(58486),h=r(35070);class f extends h.z{getRedirectUri(){let e="".concat(this.pathname).concat(this.searchParams?"?".concat(this.searchParams):"");return encodeURIComponent("https://".concat(this.host).concat(e))}get authorizationUrl(){if(!this.host||!this.tld)return;let{passportCredentials:{host:e,origin:t}}=this.config,r=(0,d.z)(e,this.tld),i=this.getRedirectUri();return"".concat(r,"/auth?origin=").concat(t,"&retpath=").concat(i,"&language=").concat(this.language)}redirectToAuthorizationUrl(){}get token(){}constructor(e,t,r){super(e,t),(0,p._)(this,"language",void 0),this.language=r}}class U extends f{setPassportLoginCookieObserver(){setInterval(this.checkPassportLoginCookieChange.bind(this),5e3)}checkPassportLoginCookieChange(){this.passportLogin!==this.passportLoginCached&&(this.passportLoginCached=this.passportLogin,this.reloadPage())}reloadPage(){window.location.reload()}redirectToAuthorizationUrl(){this.authorizationUrl&&(window.location.href=this.authorizationUrl)}get passportLogin(){return this.storage.get(m.B.YandexLogin,!1)||void 0}get hasAuthorizationCredentials(){return!!this.storage.get(m.B.YandexLogin,!1)}async check(){}constructor(e,t,r){super(e,t,r),(0,p._)(this,"passportLoginCached",void 0),this.passportLoginCached=this.passportLogin,this.setPassportLoginCookieObserver()}}var w=r(31450);class x{onChangeLanguage(e){if("string"==typeof this.token&&this.token.length>0){let t="https://yandex.".concat(this.tld,"/portal/set/lang/"),r=encodeURIComponent(window.location.href),i="".concat(t,"?intl=").concat(e,"&retpath=").concat(r,"&sk=").concat(this.token);window.location.assign(i)}else window.location.reload()}constructor(e,t){(0,p._)(this,"tld",void 0),(0,p._)(this,"token",void 0),this.tld=e,this.token=t}}var L=r(36410),R=r(56813),y=r(27615),v=r(75402);let z=e=>{if(e&&"object"==typeof e&&"type"in e&&"captcha"===e.type){let{captcha:t}=e;if(t&&t["captcha-page"])return!0}return!1},k=e=>{let t;try{let r=e.map(e=>{let t=new URL(e);return"".concat(t.protocol).concat(t.hostname.split(".").slice(-2).join("."))});t=r.every(e=>e===r[0])}catch(e){t=!1}return t};class E{async afterResponse(e){try{if(!e.headers["content-range"]){let t=await e.clone().json();if(z(t)){let{captcha:e}=t;window.location.replace(e["captcha-page"])}}}catch(e){e instanceof Error&&this.logger.error(e)}return e}beforeRequest(e){let t=window.location.href;k([t,e.url])&&(e.headers.set("X-Requested-With","XMLHttpRequest"),e.headers.set("X-Retpath-Y",t))}get afterResponseHook(){return this.afterResponse.bind(this)}get beforeRequestHook(){return this.beforeRequest.bind(this)}constructor(e){(0,p._)(this,"logger",void 0),this.logger=e}}var S=r(6030),A=r(2734);async function I(e){let{tld:t,env:r,serverDetectedLang:p,changeLanguageToken:h}=e,f=(0,S.n)(await (0,w.i)(r));return new i.s().registerMany({[v.U5]:(0,n.ri)(()=>f),[v.Hz]:(0,n.ri)(()=>new R.E),[v.P0]:(0,n.ri)(()=>new l.j({maxLogLevel:s.B$.DEBUG,secureFields:A.B,disableLogToConsole:!0})),[v.V0]:(0,n.ri)(()=>new c.NS),[v.Xt]:(0,n.ri)(()=>new c.NS),[v.ce]:(0,n.ri)(()=>new c.JC),[v.Ar]:(0,n.ri)(()=>new c.$V),[v.SL]:(0,n.ri)(e=>{let r=e.get(v.V0),i=e.get(v.P0);return new L.h({config:o.w8[y.J],serverDetectedLang:p,logger:i,enableLanguageChanging:"on"===r.get(m.B.EnableChangingLanguage),changeLanguageHandler:new x(t,h),storage:{get:()=>r.get(m.B.SavedUserLanguage,!1),set(e){r.set(m.B.SavedUserLanguage,e,{path:"/",domain:"".concat(y.J,".").concat(t)},!1)}}})})}).registerMany({[v.pI]:(0,n.d5)(e=>function(){var t,r,i,n,o,s;let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},g=e.get(v.P0),{resources:{musicExternalApi:c}}=e.get(v.U5),u=e.get(v.Hz),p=new A.D(g,u),m=new E(g);return l.timeout=c.defaultTimeout,l.hooks={afterResponse:[m.afterResponseHook,...(null==l?void 0:null===(t=l.hooks)||void 0===t?void 0:t.afterResponse)||[]],afterTimeout:[p.afterTimeoutHook,...(null==l?void 0:null===(r=l.hooks)||void 0===r?void 0:r.afterTimeout)||[]],beforeError:[p.beforeErrorHook,...(null==l?void 0:null===(i=l.hooks)||void 0===i?void 0:i.beforeError)||[]],beforeRequest:[m.beforeRequestHook,...(null==l?void 0:null===(n=l.hooks)||void 0===n?void 0:n.beforeRequest)||[]],beforeRetry:[p.beforeRetryHook,...(null==l?void 0:null===(o=l.hooks)||void 0===o?void 0:o.beforeRetry)||[]],onRequestDone:[...(null==l?void 0:null===(s=l.hooks)||void 0===s?void 0:s.onRequestDone)||[]]},new a.w(l)}),[v.xi]:(0,n.ri)(e=>new U(e.get(v.Xt),e.get(v.U5),e.get(v.SL).getLanguage()))}).registerMany({[v.c5]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.Rc(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.accountResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.Eu]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.Vn(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.usersResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.YR]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a,landing:o}=r.musicExternalApi,s=e.get(v.SL).getLanguage(),l=e.get(v.pI),c=l({credentials:"include"});return new g.Fr(c,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},...o?{landing:{...o,prefixUrl:(0,d.z)(o.prefixUrl,t)}}:{},retryPolicyConfig:n,timeouts:i.landingResource,params:{common:{client:(0,u.$)(),language:s}}})}),[v.cG]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.pi(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.landing3Resource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.qV]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.SZ(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.landingResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.OT]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.TA(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.libraryResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.g5]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.HZ(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.tracksResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.q2]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.O3(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.topResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.n]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.cn(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.artistsResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.Ci]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.tz(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.slidesResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.w5]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.Ud(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.rotorResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.Rt]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.xW(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.searchResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.zQ]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.Po(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.searchResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.lk]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.Bl(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.playlistResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.SR]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.m3(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.playlistsResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.vl]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.mD(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.pinResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.ZO]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.kF(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.metatagsResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.o]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.cp(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.tagResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.dk]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.l(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.feedResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.X8]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.IW(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.pinsResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.O_]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.E6(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.musicHistoryResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.EN]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.Y7(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.dynamicPagesResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.sD]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.UN(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.chartResource,params:{common:{client:(0,u.$)(),language:o}}})}),[v.Ve]:(0,n.ri)(e=>{let{resources:r}=e.get(v.U5),{timeouts:i,retryPolicyConfig:n,gateway:a}=r.musicExternalApi,o=e.get(v.SL).getLanguage(),s=e.get(v.pI),l=s({credentials:"include"});return new g.Ai(l,{gateway:{...a,prefixUrl:(0,d.z)(a.prefixUrl,t)},retryPolicyConfig:n,timeouts:i.lyricViewsResource,params:{common:{client:(0,u.$)(),language:o}}})})})}}}]);