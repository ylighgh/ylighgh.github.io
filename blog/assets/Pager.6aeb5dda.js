import{d as i,r as u,o as e,c as o,f as c,w as d,b as l,t as a,j as n,a as r}from"./app.30c1b100.js";const x={class:"pager"},k=r("br",null,null,-1),m={key:0},v=r("br",null,null,-1),h={key:0},B=i({props:{data:{type:Object,required:!0}},setup(t){return(f,y)=>{const s=u("RouterLink");return e(),o("div",x,[t.data.next?(e(),c(s,{key:0,class:"next",to:t.data.next.link},{default:d(()=>[l(a(t.data.next.text),1),k,t.data.next.title?(e(),o("span",m,a(t.data.next.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0),t.data.prev?(e(),c(s,{key:1,class:"previous",to:t.data.prev.link},{default:d(()=>[l(a(t.data.prev.text),1),v,t.data.prev.title?(e(),o("span",h,a(t.data.prev.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0)])}}});export{B as _};
