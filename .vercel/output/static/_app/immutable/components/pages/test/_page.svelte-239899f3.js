import{S as ut,i as pt,s as ht,J as et,k as m,q as u,a as I,l as k,m as b,r as p,h as i,c as P,n as z,b as M,H as e,K as lt,B as _,e as F,L as rt}from"../../../chunks/index-27c39202.js";function at(n,t,c){const a=n.slice();return a[2]=t[c],a}function nt(n,t,c){const a=n.slice();return a[0]=t[c],a}function dt(n){return{c:_,l:_,m:_,p:_,d:_}}function _t(n){let t,c=n[5],a=[];for(let l=0;l<c.length;l+=1)a[l]=ot(nt(n,c,l));return{c(){for(let l=0;l<a.length;l+=1)a[l].c();t=F()},l(l){for(let s=0;s<a.length;s+=1)a[s].l(l);t=F()},m(l,s){for(let o=0;o<a.length;o+=1)a[o].m(l,s);M(l,t,s)},p(l,s){if(s&1){c=l[5];let o;for(o=0;o<c.length;o+=1){const r=nt(l,c,o);a[o]?a[o].p(r,s):(a[o]=ot(r),a[o].c(),a[o].m(t.parentNode,t))}for(;o<a.length;o+=1)a[o].d(1);a.length=c.length}},d(l){rt(a,l),l&&i(t)}}}function ot(n){let t,c,a,l=n[0].id+"",s,o,r,S,B=n[0].direction+"",R,y,v,j,J=n[0].lat+"",N,C,f,L,K=n[0].lon+"",H,q,h,E,d=n[0].vehicleType+"",D,U,T,g,A=it(n[0].updated)+"",G,$;return{c(){t=m("div"),c=m("p"),a=u("ID: "),s=u(l),o=I(),r=m("p"),S=u("Direction: "),R=u(B),y=I(),v=m("p"),j=u("Latitude: "),N=u(J),C=I(),f=m("p"),L=u("Longitude: "),H=u(K),q=I(),h=m("p"),E=u("Type: "),D=u(d),U=I(),T=m("p"),g=u("Last update: "),G=u(A),$=I(),this.h()},l(V){t=k(V,"DIV",{class:!0});var w=b(t);c=k(w,"P",{});var O=b(c);a=p(O,"ID: "),s=p(O,l),O.forEach(i),o=P(w),r=k(w,"P",{});var Q=b(r);S=p(Q,"Direction: "),R=p(Q,B),Q.forEach(i),y=P(w),v=k(w,"P",{});var W=b(v);j=p(W,"Latitude: "),N=p(W,J),W.forEach(i),C=P(w),f=k(w,"P",{});var X=b(f);L=p(X,"Longitude: "),H=p(X,K),X.forEach(i),q=P(w),h=k(w,"P",{});var Y=b(h);E=p(Y,"Type: "),D=p(Y,d),Y.forEach(i),U=P(w),T=k(w,"P",{});var Z=b(T);g=p(Z,"Last update: "),G=p(Z,A),Z.forEach(i),$=P(w),w.forEach(i),this.h()},h(){z(t,"class","my-2")},m(V,w){M(V,t,w),e(t,c),e(c,a),e(c,s),e(t,o),e(t,r),e(r,S),e(r,R),e(t,y),e(t,v),e(v,j),e(v,N),e(t,C),e(t,f),e(f,L),e(f,H),e(t,q),e(t,h),e(h,E),e(h,D),e(t,U),e(t,T),e(T,g),e(T,G),e(t,$)},p:_,d(V){V&&i(t)}}}function ft(n){return{c:_,l:_,m:_,p:_,d:_}}function vt(n){return{c:_,l:_,m:_,p:_,d:_}}function mt(n){let t,c=n[1],a=[];for(let l=0;l<c.length;l+=1)a[l]=ct(at(n,c,l));return{c(){for(let l=0;l<a.length;l+=1)a[l].c();t=F()},l(l){for(let s=0;s<a.length;s+=1)a[s].l(l);t=F()},m(l,s){for(let o=0;o<a.length;o+=1)a[o].m(l,s);M(l,t,s)},p(l,s){if(s&2){c=l[1];let o;for(o=0;o<c.length;o+=1){const r=at(l,c,o);a[o]?a[o].p(r,s):(a[o]=ct(r),a[o].c(),a[o].m(t.parentNode,t))}for(;o<a.length;o+=1)a[o].d(1);a.length=c.length}},d(l){rt(a,l),l&&i(t)}}}function ct(n){let t,c,a,l=n[2].line+"",s,o,r,S,B=n[2].lineID+"",R,y,v,j,J=n[2].direction+"",N,C,f,L,K=st(n[2].realTime)+"",H,q,h,E,d=st(n[2].programmed)+"",D,U;return{c(){t=m("div"),c=m("p"),a=u("Route: "),s=u(l),o=I(),r=m("p"),S=u("Route ID: "),R=u(B),y=I(),v=m("p"),j=u("Destination: "),N=u(J),C=I(),f=m("p"),L=u("Time (real time): "),H=u(K),q=I(),h=m("p"),E=u("Time (programmed): "),D=u(d),U=I(),this.h()},l(T){t=k(T,"DIV",{class:!0});var g=b(t);c=k(g,"P",{});var A=b(c);a=p(A,"Route: "),s=p(A,l),A.forEach(i),o=P(g),r=k(g,"P",{});var G=b(r);S=p(G,"Route ID: "),R=p(G,B),G.forEach(i),y=P(g),v=k(g,"P",{});var $=b(v);j=p($,"Destination: "),N=p($,J),$.forEach(i),C=P(g),f=k(g,"P",{});var V=b(f);L=p(V,"Time (real time): "),H=p(V,K),V.forEach(i),q=P(g),h=k(g,"P",{});var w=b(h);E=p(w,"Time (programmed): "),D=p(w,d),w.forEach(i),U=P(g),g.forEach(i),this.h()},h(){z(t,"class","my-2")},m(T,g){M(T,t,g),e(t,c),e(c,a),e(c,s),e(t,o),e(t,r),e(r,S),e(r,R),e(t,y),e(t,v),e(v,j),e(v,N),e(t,C),e(t,f),e(f,L),e(f,H),e(t,q),e(t,h),e(h,E),e(h,D),e(t,U)},p:_,d(T){T&&i(t)}}}function kt(n){return{c:_,l:_,m:_,p:_,d:_}}function bt(n){let t,c,a,l,s,o,r,S,B,R,y,v,j,J,N,C,f,L,K,H,q,h={ctx:n,current:null,token:null,hasCatch:!1,pending:ft,then:_t,catch:dt,value:5};et(n[0],h);let E={ctx:n,current:null,token:null,hasCatch:!1,pending:kt,then:mt,catch:vt,value:1};return et(n[1],E),{c(){t=m("div"),c=u("Tailwind works"),a=I(),l=m("div"),s=u("DaisyUI works"),o=I(),r=m("div"),S=m("h1"),B=u("GTTTools works"),R=I(),y=m("div"),v=m("span"),j=u("Line "),J=u(x),N=I(),h.block.c(),C=I(),f=m("div"),L=m("span"),K=u("Stop "),H=u(tt),q=I(),E.block.c(),this.h()},l(d){t=k(d,"DIV",{class:!0});var D=b(t);c=p(D,"Tailwind works"),D.forEach(i),a=P(d),l=k(d,"DIV",{class:!0});var U=b(l);s=p(U,"DaisyUI works"),U.forEach(i),o=P(d),r=k(d,"DIV",{});var T=b(r);S=k(T,"H1",{class:!0});var g=b(S);B=p(g,"GTTTools works"),g.forEach(i),R=P(T),y=k(T,"DIV",{});var A=b(y);v=k(A,"SPAN",{class:!0});var G=b(v);j=p(G,"Line "),J=p(G,x),G.forEach(i),N=P(A),h.block.l(A),A.forEach(i),C=P(T),f=k(T,"DIV",{class:!0});var $=b(f);L=k($,"SPAN",{class:!0});var V=b(L);K=p(V,"Stop "),H=p(V,tt),V.forEach(i),q=P($),E.block.l($),$.forEach(i),T.forEach(i),this.h()},h(){z(t,"class","text-red-600"),z(l,"class","btn"),z(S,"class","text-xl"),z(v,"class","font-bold"),z(L,"class","font-bold"),z(f,"class","mt-6")},m(d,D){M(d,t,D),e(t,c),M(d,a,D),M(d,l,D),e(l,s),M(d,o,D),M(d,r,D),e(r,S),e(S,B),e(r,R),e(r,y),e(y,v),e(v,j),e(v,J),e(y,N),h.block.m(y,h.anchor=null),h.mount=()=>y,h.anchor=null,e(r,C),e(r,f),e(f,L),e(L,K),e(L,H),e(f,q),E.block.m(f,E.anchor=null),E.mount=()=>f,E.anchor=null},p(d,[D]){n=d,lt(h,n,D),lt(E,n,D)},i:_,o:_,d(d){d&&i(t),d&&i(a),d&&i(l),d&&i(o),d&&i(r),h.block.d(),h.token=null,h=null,E.block.d(),E.token=null,E=null}}}const x="10",tt=27;async function gt(n){return await(await fetch(`/api/route/${n}.json`)).json()}async function Et(n){return await(await fetch(`/api/stop/${n}.json`)).json()}function st(n){return n.map(c=>it(c))}function it(n){return n=new Date(n),`${n.getHours()}:${n.getMinutes()}`}function Dt(n){const t=gt(x),c=Et(tt);return[t,c]}class wt extends ut{constructor(t){super(),pt(this,t,Dt,bt,ht,{})}}export{wt as default};