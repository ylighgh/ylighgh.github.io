import{d as h,a as k,D as g,m as v,o as t,b as B,w as $,f as w,h as c,e,i as o,p as _,F as u,_ as x,t as l}from"./app.c92189e8.js";import{_ as y}from"./PageHeader.ee9fbb9f.js";const D={class:"links-wrapper"},F={class:"link-group"},L={class:"content"},b=["href"],C=["src"],N={class:"sitename"},T={class:"desc"},P=h({setup(V){const a=k(),p=g(),d=v(()=>{var i;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(i=a.value.pageText)==null?void 0:i.links),s});return(s,i)=>(t(),B(x,null,{page:$(()=>[w(y,{"page-info":c(d)},null,8,["page-info"]),e("div",D,[(t(!0),o(u,null,_(c(p).links,(r,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,l(r.title),1),e("div",F,[(t(!0),o(u,null,_(r.items,(n,f)=>(t(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",L,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,C),e("span",N,l(n.sitename),1),e("div",T,l(n.desc),1)],8,b)])]))),128))])]))),128))])]),_:1}))}});export{P as default};
