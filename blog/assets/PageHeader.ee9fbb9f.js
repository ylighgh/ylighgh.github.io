import{d as u,Q as i,D as p,m as d,v as b,o as a,i as s,h as t,x as o,k as r,e as h,t as n,E as k}from"./app.c92189e8.js";const f={class:"title"},I={key:1,class:"subtitle"},B=u({props:{pageInfo:{type:Object,default:()=>({})}},setup(l){const c=l,{pageInfo:e}=i(c),m=p(),g=d(()=>e.value.bgImage?{backgroundImage:`url(${b(e.value.bgImage.path)})`}:{});return(_,y)=>(a(),s("div",{class:k(["page-header",{"use-image":t(e).bgImage}]),style:o(t(g))},[t(e).bgImage&&t(e).bgImage.mask?(a(),s("div",{key:0,class:"header-mask",style:o({background:t(e).bgImage.mask})},null,4)):r("",!0),h("h1",f,n(t(e).title||t(m).title),1),t(e).subtitle?(a(),s("h3",I,n(t(e).subtitle),1)):r("",!0)],6))}});export{B as _};
