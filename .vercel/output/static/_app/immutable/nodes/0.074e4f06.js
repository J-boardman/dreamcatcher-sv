import{s as j,f as g,g as p,h as S,d as m,i as _,r as Y,u as K,v,w as q,x as L,y as N,j as d,z as D,e as G,a as y,c as I,A as C,B as Q,C as W,D as O,E as Z,F as ee,G as te,H as ne,I as re}from"../chunks/scheduler.24c66ff4.js";import{S as A,i as B,b as E,d as R,m as x,a as b,t as k,e as T}from"../chunks/index.175ea22e.js";import{c as se}from"../chunks/index.793d310b.js";import{c as le,S as ae}from"../chunks/SignedOut.3bbe5fe5.js";import{S as ie}from"../chunks/SignedIn.d2a3fd63.js";import{S as oe}from"../chunks/SignInButton.b086cb0a.js";import{e as V,T as ce}from"../chunks/Title.2ff95952.js";import{h as ue,l as w,p as fe}from"../chunks/stores.745d342d.js";import{o as de}from"../chunks/navigation.ce6aac00.js";import{p as M}from"../chunks/stores.18c5f3a7.js";function me(l){let e,s,t,n;return{c(){e=g("div")},l(r){e=p(r,"DIV",{}),S(e).forEach(m)},m(r,a){_(r,e,a),t||(n=Y(s=le.call(null,e,{clerk:l[0],componentType:"UserButton",props:l[1]})),t=!0)},p(r,[a]){s&&K(s.update)&&a&3&&s.update.call(null,{clerk:r[0],componentType:"UserButton",props:r[1]})},i:v,o:v,d(r){r&&m(e),t=!1,n()}}}function he(l,e,s){let t;return q(l,se,n=>s(0,t=n)),l.$$set=n=>{s(1,e=L(L({},e),N(n)))},e=N(e),[t,e]}class _e extends A{constructor(e){super(),B(this,e,he,me,j,{})}}function F(l,e,s){const t=l.slice();return t[1]=e[s][0],t[2]=e[s][1],t}function ge(l){let e,s,t;return{c(){e=g("img"),this.h()},l(n){e=p(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){D(e.src,s=l[0].src)||d(e,"src",s),d(e,"alt","logo"),d(e,"class",t="w-12 "+(l[0].rounded?"rounded-full":""))},m(n,r){_(n,e,r)},p(n,r){r&1&&!D(e.src,s=n[0].src)&&d(e,"src",s),r&1&&t!==(t="w-12 "+(n[0].rounded?"rounded-full":""))&&d(e,"class",t)},d(n){n&&m(e)}}}function pe(l){let e;function s(r,a){return typeof w=="string"?ve:$e}let n=s()(l);return{c(){n.c(),e=G()},l(r){n.l(r),e=G()},m(r,a){n.m(r,a),_(r,e,a)},p(r,a){n.p(r,a)},d(r){r&&m(e),n.d(r)}}}function $e(l){let e,s,t,n,r,a=V(Object.entries(w.sources)),u=[];for(let o=0;o<a.length;o+=1)u[o]=z(F(l,a,o));return{c(){e=g("picture");for(let o=0;o<u.length;o+=1)u[o].c();s=y(),t=g("img"),this.h()},l(o){e=p(o,"PICTURE",{});var c=S(e);for(let i=0;i<u.length;i+=1)u[i].l(c);s=I(c),t=p(c,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),c.forEach(m),this.h()},h(){D(t.src,n=w.img.src)||d(t,"src",n),d(t,"alt","logo"),d(t,"class",r="w-12 "+(l[0].rounded?"rounded-full":"")),d(t,"width",w.img.w),d(t,"height",w.img.h)},m(o,c){_(o,e,c);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(e,null);C(e,s),C(e,t)},p(o,c){if(c&0){a=V(Object.entries(w.sources));let i;for(i=0;i<a.length;i+=1){const $=F(o,a,i);u[i]?u[i].p($,c):(u[i]=z($),u[i].c(),u[i].m(e,s))}for(;i<u.length;i+=1)u[i].d(1);u.length=a.length}c&1&&r!==(r="w-12 "+(o[0].rounded?"rounded-full":""))&&d(t,"class",r)},d(o){o&&m(e),Q(u,o)}}}function ve(l){let e,s,t;return{c(){e=g("img"),this.h()},l(n){e=p(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){D(e.src,s=w.img.src)||d(e,"src",s),d(e,"alt","logo"),d(e,"class",t="w-12 "+(l[0].rounded?"rounded-full":"")),d(e,"width",w.img.w),d(e,"height",w.img.h)},m(n,r){_(n,e,r)},p(n,r){r&1&&t!==(t="w-12 "+(n[0].rounded?"rounded-full":""))&&d(e,"class",t)},d(n){n&&m(e)}}}function z(l){let e,s;return{c(){e=g("source"),this.h()},l(t){e=p(t,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){W(e,s=l[2])||d(e,"srcset",s),d(e,"type","image/"+l[1])},m(t,n){_(t,e,n)},p:v,d(t){t&&m(e)}}}function we(l){let e;function s(r,a){var u;return((u=r[0])==null?void 0:u.src)==w?pe:ge}let t=s(l),n=t(l);return{c(){e=g("a"),n.c(),this.h()},l(r){e=p(r,"A",{href:!0});var a=S(e);n.l(a),a.forEach(m),this.h()},h(){d(e,"href","/")},m(r,a){_(r,e,a),n.m(e,null)},p(r,[a]){t===(t=s(r))&&n?n.p(r,a):(n.d(1),n=t(r),n&&(n.c(),n.m(e,null)))},i:v,o:v,d(r){r&&m(e),n.d()}}}function be(l,e,s){let t;return q(l,ue,n=>s(0,t=n)),[t]}class ke extends A{constructor(e){super(),B(this,e,be,we,j,{})}}function Se(l){let e,s="Newsfeed",t,n,r="Dream Journal",a,u,o="Profile",c,i,$;return i=new _e({props:{afterSignOutUrl:"/"}}),{c(){e=g("a"),e.textContent=s,t=y(),n=g("a"),n.textContent=r,a=y(),u=g("a"),u.textContent=o,c=y(),E(i.$$.fragment),this.h()},l(f){e=p(f,"A",{href:!0,"data-svelte-h":!0}),O(e)!=="svelte-1b5e09w"&&(e.textContent=s),t=I(f),n=p(f,"A",{href:!0,"data-svelte-h":!0}),O(n)!=="svelte-11hw9n6"&&(n.textContent=r),a=I(f),u=p(f,"A",{href:!0,"data-svelte-h":!0}),O(u)!=="svelte-1okgglh"&&(u.textContent=o),c=I(f),R(i.$$.fragment,f),this.h()},h(){d(e,"href","/"),d(n,"href","/journal"),d(u,"href","/profile")},m(f,h){_(f,e,h),_(f,t,h),_(f,n,h),_(f,a,h),_(f,u,h),_(f,c,h),x(i,f,h),$=!0},p:v,i(f){$||(b(i.$$.fragment,f),$=!0)},o(f){k(i.$$.fragment,f),$=!1},d(f){f&&(m(e),m(t),m(n),m(a),m(u),m(c)),T(i,f)}}}function ye(l){let e,s;return e=new oe({props:{mode:"modal",class:"btn"}}),{c(){E(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,n){x(e,t,n),s=!0},p:v,i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Ie(l){let e,s,t,n,r,a,u,o,c,i,$;return t=new ke({}),r=new ce({props:{title:l[0]}}),o=new ie({props:{$$slots:{default:[Se]},$$scope:{ctx:l}}}),i=new ae({props:{$$slots:{default:[ye]},$$scope:{ctx:l}}}),{c(){e=g("header"),s=g("div"),E(t.$$.fragment),n=y(),E(r.$$.fragment),a=y(),u=g("nav"),E(o.$$.fragment),c=y(),E(i.$$.fragment),this.h()},l(f){e=p(f,"HEADER",{class:!0});var h=S(e);s=p(h,"DIV",{class:!0});var U=S(s);R(t.$$.fragment,U),n=I(U),R(r.$$.fragment,U),U.forEach(m),a=I(h),u=p(h,"NAV",{class:!0});var P=S(u);R(o.$$.fragment,P),c=I(P),R(i.$$.fragment,P),P.forEach(m),h.forEach(m),this.h()},h(){d(s,"class","flex gap-2 items-center"),d(u,"class","flex gap-4 items-center"),d(e,"class","hidden md:flex h-16 justify-between items-center px-4")},m(f,h){_(f,e,h),C(e,s),x(t,s,null),C(s,n),x(r,s,null),C(e,a),C(e,u),x(o,u,null),C(u,c),x(i,u,null),$=!0},p(f,[h]){const U={};h&1&&(U.title=f[0]),r.$set(U);const P={};h&2&&(P.$$scope={dirty:h,ctx:f}),o.$set(P);const H={};h&2&&(H.$$scope={dirty:h,ctx:f}),i.$set(H)},i(f){$||(b(t.$$.fragment,f),b(r.$$.fragment,f),b(o.$$.fragment,f),b(i.$$.fragment,f),$=!0)},o(f){k(t.$$.fragment,f),k(r.$$.fragment,f),k(o.$$.fragment,f),k(i.$$.fragment,f),$=!1},d(f){f&&m(e),T(t),T(r),T(o),T(i)}}}function Ce(l,e,s){let t;return q(l,fe,n=>s(0,t=n)),[t]}class Ee extends A{constructor(e){super(),B(this,e,Ce,Ie,j,{})}}function Re(l,e,s){const t=l.slice();return t[0]=e[s],t[2]=s,t}function xe(l){let e;return{c(){e=g("span"),this.h()},l(s){e=p(s,"SPAN",{class:!0}),S(e).forEach(m),this.h()},h(){d(e,"class","svelte-1p4nxwv")},m(s,t){_(s,e,t)},p:v,d(s){s&&m(e)}}}function Te(l){let e,s=V(Array(50)),t=[];for(let n=0;n<s.length;n+=1)t[n]=xe(Re(l,s,n));return{c(){e=g("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=p(n,"DIV",{class:!0});var r=S(e);for(let a=0;a<t.length;a+=1)t[a].l(r);r.forEach(m),this.h()},h(){d(e,"class","background svelte-1p4nxwv")},m(n,r){_(n,e,r);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p:v,i:v,o:v,d(n){n&&m(e),Q(t,n)}}}class Ue extends A{constructor(e){super(),B(this,e,null,Te,j,{})}}var Pe="@vercel/speed-insights",je="1.0.2",Ae=()=>{window.si||(window.si=function(...e){(window.siq=window.siq||[]).push(e)})};function Be(){return typeof window<"u"}function De(){try{const l="production"}catch{}return"production"}function J(){return De()==="development"}var X="https://va.vercel-scripts.com/v1/speed-insights",Oe=`${X}/script.js`,Ve=`${X}/script.debug.js`,qe="/_vercel/speed-insights/script.js";function He(l){var e;if(!Be()||l.route===null)return null;Ae();const t=!!l.dsn?Oe:qe,n=l.scriptSrc||(J()?Ve:t);if(document.head.querySelector(`script[src*="${n}"]`))return null;l.beforeSend&&((e=window.si)==null||e.call(window,"beforeSend",l.beforeSend));const r=document.createElement("script");return r.src=n,r.defer=!0,r.dataset.sdkn=Pe+(l.framework?`/${l.framework}`:""),r.dataset.sdkv=je,l.sampleRate&&(r.dataset.sampleRate=l.sampleRate.toString()),l.route&&(r.dataset.route=l.route),l.endpoint&&(r.dataset.endpoint=l.endpoint),l.dsn&&(r.dataset.dsn=l.dsn),J()&&l.debug===!1&&(r.dataset.debug="false"),r.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(r),{setRoute:a=>{r.dataset.route=a??void 0}}}function Le(l={}){var e;{const s=He({route:(e=Z(M).route)==null?void 0:e.id,...l,framework:"sveltekit"});s&&M.subscribe(t=>{var n;(n=t.route)!=null&&n.id&&s.setRoute(t.route.id)})}}function Ne(l){let e,s,t,n,r,a;e=new Ue({}),n=new Ee({});const u=l[1].default,o=ee(u,l,l[0],null);return{c(){E(e.$$.fragment),s=y(),t=g("section"),E(n.$$.fragment),r=y(),o&&o.c(),this.h()},l(c){R(e.$$.fragment,c),s=I(c),t=p(c,"SECTION",{class:!0});var i=S(t);R(n.$$.fragment,i),r=I(i),o&&o.l(i),i.forEach(m),this.h()},h(){d(t,"class","min-h-dvh flex flex-col")},m(c,i){x(e,c,i),_(c,s,i),_(c,t,i),x(n,t,null),C(t,r),o&&o.m(t,null),a=!0},p(c,[i]){o&&o.p&&(!a||i&1)&&te(o,u,c,c[0],a?re(u,c[0],i,null):ne(c[0]),null)},i(c){a||(b(e.$$.fragment,c),b(n.$$.fragment,c),b(o,c),a=!0)},o(c){k(e.$$.fragment,c),k(n.$$.fragment,c),k(o,c),a=!1},d(c){c&&(m(s),m(t)),T(e,c),T(n),o&&o.d(c)}}}function Ge(l,e,s){let{$$slots:t={},$$scope:n}=e;return Le(),de(r=>{if(document!=null&&document.startViewTransition)return new Promise(a=>{document.startViewTransition(async()=>{a(),await r.complete})})}),l.$$set=r=>{"$$scope"in r&&s(0,n=r.$$scope)},[n,t]}class et extends A{constructor(e){super(),B(this,e,Ge,Ne,j,{})}}export{et as component};
