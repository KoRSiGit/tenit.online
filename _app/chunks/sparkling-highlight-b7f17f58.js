import{S as s,i as t,s as e,e as l,D as o,c as r,a,E as n,d as c,b as i,N as h,f,G as $,H as p,l as u,j as d,m as g,o as v,x as m,u as w,v as x,I as y,k as z,n as C,r as E,T as D,w as I,K as M,L as S,M as V,A as b,U as k,V as A}from"./vendor-bf2546bf.js";function j(s){let t,e,u;return{c(){t=l("div"),e=o("svg"),u=o("path"),this.h()},l(s){t=r(s,"DIV",{class:!0,style:!0});var l=a(t);e=n(l,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var o=a(e);u=n(o,"path",{d:!0,fill:!0}),a(u).forEach(c),o.forEach(c),l.forEach(c),this.h()},h(){i(u,"d","M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"),i(u,"fill",s[0]),i(e,"width",s[1]),i(e,"height",s[1]),i(e,"viewBox","0 0 160 160"),i(e,"fill","none"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","svelte-sixv8c"),i(t,"class","wrapper svelte-sixv8c"),h(t,"top",s[2].top),h(t,"left",s[2].left)},m(s,l){f(s,t,l),$(t,e),$(e,u)},p(s,[l]){1&l&&i(u,"fill",s[0]),2&l&&i(e,"width",s[1]),2&l&&i(e,"height",s[1]),4&l&&h(t,"top",s[2].top),4&l&&h(t,"left",s[2].left)},i:p,o:p,d(s){s&&c(t)}}}function B(s,t,e){let{color:l}=t,{size:o}=t,{style:r}=t;return s.$$set=s=>{"color"in s&&e(0,l=s.color),"size"in s&&e(1,o=s.size),"style"in s&&e(2,r=s.style)},[l,o,r]}class G extends s{constructor(s){super(),t(this,s,B,j,e,{color:0,size:1,style:2})}}function N(s,t,e){const l=s.slice();return l[6]=t[e],l}function T(s,t){let e,l,o;return l=new G({props:{color:t[6].color,size:t[6].size,style:t[6].style}}),{key:s,first:null,c(){e=u(),d(l.$$.fragment),this.h()},l(s){e=u(),g(l.$$.fragment,s),this.h()},h(){this.first=e},m(s,t){f(s,e,t),v(l,s,t),o=!0},p(s,e){t=s;const o={};1&e&&(o.color=t[6].color),1&e&&(o.size=t[6].size),1&e&&(o.style=t[6].style),l.$set(o)},i(s){o||(m(l.$$.fragment,s),o=!0)},o(s){w(l.$$.fragment,s),o=!1},d(s){s&&c(e),x(l,s)}}}function H(s){let t,e,o,n,h=[],p=new Map,u=s[0];const d=s=>s[6].id;for(let l=0;l<u.length;l+=1){let t=N(s,u,l),e=d(t);p.set(e,h[l]=T(e,t))}const g=s[2].default,v=y(g,s,s[1],null);return{c(){t=l("div");for(let s=0;s<h.length;s+=1)h[s].c();e=z(),o=l("div"),v&&v.c(),this.h()},l(s){t=r(s,"DIV",{class:!0});var l=a(t);for(let t=0;t<h.length;t+=1)h[t].l(l);e=C(l),o=r(l,"DIV",{class:!0});var n=a(o);v&&v.l(n),n.forEach(c),l.forEach(c),this.h()},h(){i(o,"class","slot-wrapper svelte-exdx8u"),i(t,"class","sparkle-wrapper svelte-exdx8u")},m(s,l){f(s,t,l);for(let e=0;e<h.length;e+=1)h[e].m(t,null);$(t,e),$(t,o),v&&v.m(o,null),n=!0},p(s,[l]){1&l&&(u=s[0],E(),h=D(h,l,d,1,s,u,p,t,A,T,e,N),I()),v&&v.p&&(!n||2&l)&&M(v,g,s,s[1],n?V(g,s[1],l,null):S(s[1]),null)},i(s){if(!n){for(let s=0;s<u.length;s+=1)m(h[s]);m(v,s),n=!0}},o(s){for(let t=0;t<h.length;t+=1)w(h[t]);w(v,s),n=!1},d(s){s&&c(t);for(let t=0;t<h.length;t+=1)h[t].d();v&&v.d(s)}}}function K(s,t,e){let{$$slots:l={},$$scope:o}=t;const r=(s,t)=>Math.floor(Math.random()*(t-s))+s;let a,n=[];return b((()=>{a=setInterval((()=>{const s=Date.now(),t=((s="hsl(50deg, 100%, 50%)")=>({id:String(r(1e4,99999)),createdAt:Date.now(),color:s,size:r(10,20),style:{top:r(-10,80)+"%",left:r(0,100)+"%"}}))(),l=n.filter((t=>s-t.createdAt<1500));l.push(t),e(0,n=l)}),400)})),k((()=>{clearInterval(a)})),s.$$set=s=>{"$$scope"in s&&e(1,o=s.$$scope)},[n,o,l]}class L extends s{constructor(s){super(),t(this,s,K,H,e,{})}}function O(s){let t,e;const o=s[0].default,n=y(o,s,s[1],null);return{c(){t=l("strong"),n&&n.c(),this.h()},l(s){t=r(s,"STRONG",{class:!0});var e=a(t);n&&n.l(e),e.forEach(c),this.h()},h(){i(t,"class","text-secondary")},m(s,l){f(s,t,l),n&&n.m(t,null),e=!0},p(s,t){n&&n.p&&(!e||2&t)&&M(n,o,s,s[1],e?V(o,s[1],t,null):S(s[1]),null)},i(s){e||(m(n,s),e=!0)},o(s){w(n,s),e=!1},d(s){s&&c(t),n&&n.d(s)}}}function R(s){let t,e;return t=new L({props:{$$slots:{default:[O]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},l(s){g(t.$$.fragment,s)},m(s,l){v(t,s,l),e=!0},p(s,[e]){const l={};2&e&&(l.$$scope={dirty:e,ctx:s}),t.$set(l)},i(s){e||(m(t.$$.fragment,s),e=!0)},o(s){w(t.$$.fragment,s),e=!1},d(s){x(t,s)}}}function U(s,t,e){let{$$slots:l={},$$scope:o}=t;return s.$$set=s=>{"$$scope"in s&&e(1,o=s.$$scope)},[l,o]}class Z extends s{constructor(s){super(),t(this,s,U,R,e,{})}}export{Z as S};
