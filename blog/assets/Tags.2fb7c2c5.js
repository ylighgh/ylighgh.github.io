import{e as v,f as y,l as k,W as $,n as T,m as _,o as a,c as o,p as f,E as B,x as w,i as l,b as L,t as c,F as m,r as N,a as h,h as d,w as x,k as R,g as A,_ as V,X as P,Y as S}from"./app.74389c05.js";import{_ as b}from"./PageHeader.b5708d42.js";const z=["onClick"],D={key:0},E={key:1},F=v({props:{currentTag:{type:String,default:""}},setup(g){const i=y(),s=k(),u=$(),{posts:n}=T(),p=_(()=>[{name:i.value.showAllTagsText,path:"/tags/"},...u.tagsWithColor.value]);return(r,t)=>(a(!0),o(m,null,f(l(p),(e,C)=>(a(),o("span",{key:C,class:B(["article-tag",{active:e.name==g.currentTag,"tag-all":e.path=="/tags/"}]),style:w({backgroundColor:e.tagColor}),onClick:G=>l(s).push(e.path)},[L(c(e.name)+" ",1),e.path=="/tags/"?(a(),o("sup",D,c(l(n).length),1)):(a(),o("sup",E,c(e.pages.length),1))],14,z))),128))}}),W={class:"year"},Y={class:"title"},U={key:0,class:"subtitle"},X=h("hr",null,null,-1),j=v({props:{data:{type:Array,default:()=>[]}},setup(g){return(i,s)=>{const u=N("RouterLink");return a(!0),o(m,null,f(g.data,(n,p)=>(a(),o("section",{key:p},[h("span",W,c(n.year),1),(a(!0),o(m,null,f(n.data,(r,t)=>(a(),o("div",{key:t,class:"item"},[d(u,{to:r.path},{default:x(()=>[h("p",Y,c(r.frontmatter.title),1),r.frontmatter.subtitle?(a(),o("p",U,c(r.frontmatter.subtitle),1)):R("",!0)]),_:2},1032,["to"]),X]))),128))]))),128)}}}),q={class:"tags-wrapper"},K=v({setup(g){const i=k(),s=y(),{posts:u}=T(),n=_(()=>{const t=decodeURI(i.currentRoute.value.path.replace(/\/tags/g,"").replace(/\//g,""));return t===""?s.value.showAllTagsText:t}),p=_(()=>{const t=n.value===s.value.showAllTagsText?"":n.value;return P(S(u.value,t))}),r=_(()=>{var e;const t=s.value.pages&&s.value.pages.tags?s.value.pages.tags:{};return t.title===void 0&&(t.title=(e=s.value.pageText)==null?void 0:e.tags),t});return(t,e)=>(a(),A(V,null,{page:x(()=>[d(b,{"page-info":l(r)},null,8,["page-info"]),h("div",q,[d(F,{"current-tag":l(n)},null,8,["current-tag"]),d(j,{data:l(p)},null,8,["data"])])]),_:1}))}});export{K as default};
