import{S as t,i as s,s as n,I as e,e as o,c as r,a,d as l,b as c,f as $,K as i,L as f,M as u,x as p,u as h,j as d,m as g,o as m,v,l as x,r as w,w as b,P as j}from"../chunks/vendor-31538bbd.js";import{S as E,B as k}from"../chunks/blog-post-card-7d550164.js";import"../chunks/image-0fe386ae.js";function I(t){let s,n;const d=t[1].default,g=e(d,t,t[0],null);return{c(){s=o("div"),g&&g.c(),this.h()},l(t){s=r(t,"DIV",{class:!0});var n=a(s);g&&g.l(n),n.forEach(l),this.h()},h(){c(s,"class","grid-container svelte-qnddn2")},m(t,e){$(t,s,e),g&&g.m(s,null),n=!0},p(t,[s]){g&&g.p&&(!n||1&s)&&i(g,d,t,t[0],n?u(d,t[0],s,null):f(t[0]),null)},i(t){n||(p(g,t),n=!0)},o(t){h(g,t),n=!1},d(t){t&&l(s),g&&g.d(t)}}}function y(t,s,n){let{$$slots:e={},$$scope:o}=s;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,e]}class S extends t{constructor(t){super(),s(this,t,y,I,n,{})}}function B(t,s,n){const e=t.slice();return e[1]=s[n],e}function C(t){let s,n;return s=new k({props:{post:t[1]}}),{c(){d(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,e){m(s,t,e),n=!0},p(t,n){const e={};1&n&&(e.post=t[1]),s.$set(e)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){h(s.$$.fragment,t),n=!1},d(t){v(s,t)}}}function D(t){let s,n,e=t[0],o=[];for(let a=0;a<e.length;a+=1)o[a]=C(B(t,e,a));const r=t=>h(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();s=x()},l(t){for(let s=0;s<o.length;s+=1)o[s].l(t);s=x()},m(t,e){for(let s=0;s<o.length;s+=1)o[s].m(t,e);$(t,s,e),n=!0},p(t,n){if(1&n){let a;for(e=t[0],a=0;a<e.length;a+=1){const r=B(t,e,a);o[a]?(o[a].p(r,n),p(o[a],1)):(o[a]=C(r),o[a].c(),p(o[a],1),o[a].m(s.parentNode,s))}for(w(),a=e.length;a<o.length;a+=1)r(a);b()}},i(t){if(!n){for(let t=0;t<e.length;t+=1)p(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)h(o[s]);n=!1},d(t){j(o,t),t&&l(s)}}}function N(t){let s,n,e;return n=new S({props:{$$slots:{default:[D]},$$scope:{ctx:t}}}),{c(){s=o("div"),d(n.$$.fragment),this.h()},l(t){s=r(t,"DIV",{class:!0});var e=a(s);g(n.$$.fragment,e),e.forEach(l),this.h()},h(){c(s,"class","container")},m(t,o){$(t,s,o),m(n,s,null),e=!0},p(t,s){const e={};17&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){t&&l(s),v(n)}}}function V(t){let s,n,e;return n=new E({props:{align:"top",title:"Все записи",$$slots:{default:[N]},$$scope:{ctx:t}}}),{c(){s=o("section"),d(n.$$.fragment),this.h()},l(t){s=r(t,"SECTION",{id:!0});var e=a(s);g(n.$$.fragment,e),e.forEach(l),this.h()},h(){c(s,"id","blog")},m(t,o){$(t,s,o),m(n,s,null),e=!0},p(t,[s]){const e={};17&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){h(n.$$.fragment,t),e=!1},d(t){t&&l(s),v(n)}}}async function q({fetch:t}){const s="/blog.json",n=await t(s);return n.ok?{props:{posts:await n.json()}}:{status:n.status,error:new Error(`Could not load ${s}`)}}function K(t,s,n){let{posts:e}=s;return t.$$set=t=>{"posts"in t&&n(0,e=t.posts)},[e]}class L extends t{constructor(t){super(),s(this,t,K,V,n,{posts:0})}}export{L as default,q as load};
