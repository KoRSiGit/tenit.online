import{S as t,i as e,s,I as n,e as o,c as a,a as r,d as l,b as c,f as i,K as m,L as p,M as $,x as f,u as d,X as g,j as u,m as h,o as v,v as y,k as E,t as x,J as w,n as j,g as I,G as T,h as k,w as A,P as M,r as D,l as V}from"../../chunks/vendor-31538bbd.js";import{H as b,F as P}from"../../chunks/footer-61b14a7b.js";import{I as C}from"../../chunks/image-0fe386ae.js";import{T as B,S as H,B as L}from"../../chunks/blog-post-card-7d550164.js";/* empty css                                                          */import{t as N,k as S,s as U}from"../../chunks/meta-3f6d5698.js";function F(t){let e,s;const g=t[1].default,u=n(g,t,t[0],null);return{c(){e=o("div"),u&&u.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);u&&u.l(s),s.forEach(l),this.h()},h(){c(e,"class","grid-container svelte-rrhmkd")},m(t,n){i(t,e,n),u&&u.m(e,null),s=!0},p(t,[e]){u&&u.p&&(!s||1&e)&&m(u,g,t,t[0],s?$(g,t[0],e,null):p(t[0]),null)},i(t){s||(f(u,t),s=!0)},o(t){d(u,t),s=!1},d(t){t&&l(e),u&&u.d(t)}}}function G(t,e,s){let{$$slots:n={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&s(0,o=t.$$scope)},[o,n]}class J extends t{constructor(t){super(),e(this,t,G,F,s,{})}}function K(t,e,s){const n=t.slice();return n[3]=e[s],n}function R(t,e,s){const n=t.slice();return n[6]=e[s],n}function X(t){let e,s=t[6]+"";return{c(){e=x(s)},l(t){e=I(t,s)},m(t,s){i(t,e,s)},p(t,n){1&n&&s!==(s=t[6]+"")&&k(e,s)},d(t){t&&l(e)}}}function _(t){let e,s;return e=new B({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){u(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};5&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function q(t){let e,s,n;return s=new H({props:{title:"Похожие записи журнала",description:"Есть ещё немного времени? Прочтите записи моего журнала со схожими темами.",align:"top",$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){e=o("div"),u(s.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);h(s.$$.fragment,n),n.forEach(l),this.h()},h(){c(e,"class","related-posts container")},m(t,o){i(t,e,o),v(s,e,null),n=!0},p(t,e){const n={};5&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(f(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){t&&l(e),y(s)}}}function z(t){let e,s;return e=new L({props:{post:t[3]}}),{c(){u(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.post=t[3]),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function O(t){let e,s,n=t[0].relatedPosts,o=[];for(let r=0;r<n.length;r+=1)o[r]=z(K(t,n,r));const a=t=>d(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=V()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=V()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);i(t,e,n),s=!0},p(t,s){if(1&s){let r;for(n=t[0].relatedPosts,r=0;r<n.length;r+=1){const a=K(t,n,r);o[r]?(o[r].p(a,s),f(o[r],1)):(o[r]=z(a),o[r].c(),f(o[r],1),o[r].m(e.parentNode,e))}for(D(),r=n.length;r<o.length;r+=1)a(r);A()}},i(t){if(!s){for(let t=0;t<n.length;t+=1)f(o[t]);s=!0}},o(t){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)d(o[e]);s=!1},d(t){M(o,t),t&&l(e)}}}function Q(t){let e,s;return e=new J({props:{$$slots:{default:[O]},$$scope:{ctx:t}}}),{c(){u(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,s){const n={};5&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function W(t){let e,s,V,B,H,L,F,G,J,K,X,z,O,Q,W,Y,Z,tt,et,st,nt,ot,at,rt,lt,ct,it,mt,pt,$t,ft,dt,gt,ut,ht,vt,yt,Et,xt,wt,jt,It,Tt,kt,At=t[0].title+"",Mt=g(t[0].date,"UTC:dd mmmm yyyy")+"",Dt=t[0].readingTime+"";document.title=J=t[0].title+" - "+N,st=new b({props:{animated:!1}});let Vt=t[0].tags,bt=[];for(let n=0;n<Vt.length;n+=1)bt[n]=_(R(t,Vt,n));const Pt=t=>d(bt[t],1,1,(()=>{bt[t]=null}));Et=new C({props:{path:"posts/"+t[0].slug,filename:"cover",alt:"Cover Image"}});const Ct=t[1].default,Bt=n(Ct,t,t[2],null);let Ht=t[0].relatedPosts&&t[0].relatedPosts.length>0&&q(t);return Tt=new P({}),{c(){e=o("meta"),V=o("meta"),H=o("meta"),F=o("meta"),K=o("meta"),z=o("meta"),Q=o("meta"),Y=o("meta"),tt=E(),et=o("div"),u(st.$$.fragment),nt=E(),ot=o("main"),at=o("article"),rt=o("div"),lt=o("h1"),ct=x(At),it=E(),mt=o("div"),pt=x("Запись от "),$t=x(Mt),ft=E(),dt=o("div"),gt=x(Dt),ut=E(),ht=o("div");for(let t=0;t<bt.length;t+=1)bt[t].c();vt=E(),yt=o("div"),u(Et.$$.fragment),xt=E(),wt=o("div"),Bt&&Bt.c(),jt=E(),Ht&&Ht.c(),It=E(),u(Tt.$$.fragment),this.h()},l(t){const s=w('[data-svelte="svelte-xwf28p"]',document.head);e=a(s,"META",{name:!0,content:!0}),V=a(s,"META",{name:!0,content:!0}),H=a(s,"META",{property:!0,content:!0}),F=a(s,"META",{name:!0,content:!0}),K=a(s,"META",{property:!0,content:!0}),z=a(s,"META",{name:!0,content:!0}),Q=a(s,"META",{property:!0,content:!0}),Y=a(s,"META",{name:!0,content:!0}),s.forEach(l),tt=j(t),et=a(t,"DIV",{class:!0});var n=r(et);h(st.$$.fragment,n),nt=j(n),ot=a(n,"MAIN",{});var o=r(ot);at=a(o,"ARTICLE",{id:!0,class:!0});var c=r(at);rt=a(c,"DIV",{class:!0});var i=r(rt);lt=a(i,"H1",{});var m=r(lt);ct=I(m,At),m.forEach(l),it=j(i),mt=a(i,"DIV",{class:!0});var p=r(mt);pt=I(p,"Запись от "),$t=I(p,Mt),p.forEach(l),ft=j(i),dt=a(i,"DIV",{class:!0});var $=r(dt);gt=I($,Dt),$.forEach(l),ut=j(i),ht=a(i,"DIV",{class:!0});var f=r(ht);for(let e=0;e<bt.length;e+=1)bt[e].l(f);f.forEach(l),i.forEach(l),vt=j(c),yt=a(c,"DIV",{class:!0});var d=r(yt);h(Et.$$.fragment,d),d.forEach(l),xt=j(c),wt=a(c,"DIV",{class:!0});var g=r(wt);Bt&&Bt.l(g),g.forEach(l),c.forEach(l),jt=j(o),Ht&&Ht.l(o),o.forEach(l),It=j(n),h(Tt.$$.fragment,n),n.forEach(l),this.h()},h(){c(e,"name","keywords"),c(e,"content",s=t[0].tags.concat(S).join(", ")),c(V,"name","description"),c(V,"content",B=t[0].excerpt),c(H,"property","og:description"),c(H,"content",L=t[0].excerpt),c(F,"name","twitter:description"),c(F,"content",G=t[0].excerpt),c(K,"property","og:title"),c(K,"content",X=t[0].title+" - "+N),c(z,"name","twitter:title"),c(z,"content",O=t[0].title+" - "+N),c(Q,"property","og:image"),c(Q,"content",W=U+"/images/posts/"+t[0].slug+"/cover.jpg"),c(Y,"name","twitter:image"),c(Y,"content",Z=U+"/images/posts/"+t[0].slug+"/cover.jpg"),c(mt,"class","note svelte-typr0s"),c(dt,"class","note svelte-typr0s"),c(ht,"class","tags svelte-typr0s"),c(rt,"class","header svelte-typr0s"),c(yt,"class","cover-image svelte-typr0s"),c(wt,"class","content svelte-typr0s"),c(at,"id","blog-post"),c(at,"class","svelte-typr0s"),c(et,"class","blog-layout svelte-typr0s")},m(t,s){T(document.head,e),T(document.head,V),T(document.head,H),T(document.head,F),T(document.head,K),T(document.head,z),T(document.head,Q),T(document.head,Y),i(t,tt,s),i(t,et,s),v(st,et,null),T(et,nt),T(et,ot),T(ot,at),T(at,rt),T(rt,lt),T(lt,ct),T(rt,it),T(rt,mt),T(mt,pt),T(mt,$t),T(rt,ft),T(rt,dt),T(dt,gt),T(rt,ut),T(rt,ht);for(let e=0;e<bt.length;e+=1)bt[e].m(ht,null);T(at,vt),T(at,yt),v(Et,yt,null),T(at,xt),T(at,wt),Bt&&Bt.m(wt,null),T(ot,jt),Ht&&Ht.m(ot,null),T(et,It),v(Tt,et,null),kt=!0},p(t,[n]){if((!kt||1&n&&s!==(s=t[0].tags.concat(S).join(", ")))&&c(e,"content",s),(!kt||1&n&&B!==(B=t[0].excerpt))&&c(V,"content",B),(!kt||1&n&&L!==(L=t[0].excerpt))&&c(H,"content",L),(!kt||1&n&&G!==(G=t[0].excerpt))&&c(F,"content",G),(!kt||1&n)&&J!==(J=t[0].title+" - "+N)&&(document.title=J),(!kt||1&n&&X!==(X=t[0].title+" - "+N))&&c(K,"content",X),(!kt||1&n&&O!==(O=t[0].title+" - "+N))&&c(z,"content",O),(!kt||1&n&&W!==(W=U+"/images/posts/"+t[0].slug+"/cover.jpg"))&&c(Q,"content",W),(!kt||1&n&&Z!==(Z=U+"/images/posts/"+t[0].slug+"/cover.jpg"))&&c(Y,"content",Z),(!kt||1&n)&&At!==(At=t[0].title+"")&&k(ct,At),(!kt||1&n)&&Mt!==(Mt=g(t[0].date,"UTC:dd mmmm yyyy")+"")&&k($t,Mt),(!kt||1&n)&&Dt!==(Dt=t[0].readingTime+"")&&k(gt,Dt),1&n){let e;for(Vt=t[0].tags,e=0;e<Vt.length;e+=1){const s=R(t,Vt,e);bt[e]?(bt[e].p(s,n),f(bt[e],1)):(bt[e]=_(s),bt[e].c(),f(bt[e],1),bt[e].m(ht,null))}for(D(),e=Vt.length;e<bt.length;e+=1)Pt(e);A()}const o={};1&n&&(o.path="posts/"+t[0].slug),Et.$set(o),Bt&&Bt.p&&(!kt||4&n)&&m(Bt,Ct,t,t[2],kt?$(Ct,t[2],n,null):p(t[2]),null),t[0].relatedPosts&&t[0].relatedPosts.length>0?Ht?(Ht.p(t,n),1&n&&f(Ht,1)):(Ht=q(t),Ht.c(),f(Ht,1),Ht.m(ot,null)):Ht&&(D(),d(Ht,1,1,(()=>{Ht=null})),A())},i(t){if(!kt){f(st.$$.fragment,t);for(let t=0;t<Vt.length;t+=1)f(bt[t]);f(Et.$$.fragment,t),f(Bt,t),f(Ht),f(Tt.$$.fragment,t),kt=!0}},o(t){d(st.$$.fragment,t),bt=bt.filter(Boolean);for(let e=0;e<bt.length;e+=1)d(bt[e]);d(Et.$$.fragment,t),d(Bt,t),d(Ht),d(Tt.$$.fragment,t),kt=!1},d(t){l(e),l(V),l(H),l(F),l(K),l(z),l(Q),l(Y),t&&l(tt),t&&l(et),y(st),M(bt,t),y(Et),Bt&&Bt.d(t),Ht&&Ht.d(),y(Tt)}}}async function Y({page:t,fetch:e}){const s=`/${t.path.split("/").slice(-1)[0]}.json`,n=await e(s);return n.ok?{props:{post:await n.json()}}:{status:n.status,error:new Error(`Could not load ${s}`)}}function Z(t,e,s){let{$$slots:n={},$$scope:o}=e,{post:a}=e;return t.$$set=t=>{"post"in t&&s(0,a=t.post),"$$scope"in t&&s(2,o=t.$$scope)},[a,n,o]}class tt extends t{constructor(t){super(),e(this,t,Z,W,s,{post:0})}}export{tt as default,Y as load};
