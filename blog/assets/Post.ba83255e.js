import{l as E,R as L,d as D,D as N,a as R,S as W,m as v,U as z,s as V,V as q,n as A,o as l,b as c,w as m,f as H,e as O,z as U,A as j,h as t,k as $,E as S,x as J,T as M,_ as Y,J as G,C as I}from"./app.7bfd7539.js";import{a as K,_ as Q}from"./Page.ea2b28dd.js";import{_ as X}from"./Pager.cd0b7476.js";const _=({headers:k,activeLink:n})=>{const r=E();return L("ul",{class:{catalog:!0}},k.map(o=>L("li",{class:{active:n===o.slug,[`level-${o.level}`]:!0,[`toc-link-${o.slug}`]:!0},key:o.title,onClick:()=>{r.currentRoute.value.hash!==`#${o.slug}`&&r.push(`#${o.slug}`)}},o.title)))};_.displayName="Catalog";_.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};const oe=D({setup(k){const n=G();N();const r=R(),o=E(),x=I(),b=x.resolve,F=x.pending,i=W(),P=v(()=>i.value?n.value.headers:[]),T=a=>a.children.length>0?[a].concat(...a.children.map(T)):a,u=v(()=>[].concat(...P.value.map(T))),e=z({headerHeight:0,screenWidth:0,catalogTop:0,activeLink:"",isFixed:!1}),d=40,w=80,p=()=>{for(let s=u.value.length-1;s>=0;s--){const B=u.value[s].slug,C=document.querySelector(`#${B}`);if((C?C.getBoundingClientRect().top:0)<=100){e.activeLink=B;break}}window.pageYOffset>e.headerHeight+d-w?(e.isFixed=!0,e.catalogTop=w):(e.isFixed=!1,e.catalogTop=e.headerHeight+d),e.screenWidth<=719&&(e.catalogTop=-15)},g=()=>{const a=document.querySelector(".post-header");e.headerHeight=a?a.offsetHeight:0,e.screenWidth=document.body.clientWidth,e.screenWidth<=719?e.catalogTop=-15:e.catalogTop=e.headerHeight+d};let y;V(()=>{window.addEventListener("scroll",p),g(),window.onresize=()=>(()=>{g(),p()})(),y=o.afterEach(()=>{g()})}),q(()=>{window.removeEventListener("scroll",p),y()});const{post:f}=A(),h=v(()=>{if(!f.value)return{};const a=f.value.next;a&&(a.text=r.value.postNext);const s=f.value.prev;return s&&(s.text=r.value.postPrev),{next:a,prev:s}});return(a,s)=>(l(),c(Y,null,{page:m(()=>[H(M,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t(b),onBeforeLeave:t(F)},{default:m(()=>[O("div",{class:S(["post-wrapper",{"show-catalog":t(i)}])},[U(H(K,{class:"post-header"},null,512),[[j,t(n).title]]),(l(),c(Q,{key:t(n).path,class:"post-content"},{bottom:m(()=>[t(h).next||t(h).prev?(l(),c(X,{key:0,data:t(h)},null,8,["data"])):$("",!0)]),_:1})),t(i)?(l(),c(t(_),{key:0,headers:t(u),"active-link":t(e).activeLink,class:S({fixed:t(e).isFixed}),style:J({top:`${t(e).catalogTop}px`})},null,8,["headers","active-link","class","style"])):$("",!0)],2)]),_:1},8,["onBeforeEnter","onBeforeLeave"])]),_:1}))}});export{oe as default};