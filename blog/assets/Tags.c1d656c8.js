import{d as v,e as y,k,V as $,m as T,l as _,o as a,c as o,n as f,D as B,v as w,h as l,b as L,t as c,F as m,r as N,a as h,g as d,w as x,j as R,f as V,_ as A,W as D,X as P}from"./app.1ed1182d.js";import{_ as S}from"./PageHeader.17d89568.js";const b=["onClick"],z={key:0},F={key:1},W=v({props:{currentTag:{type:String,default:""}},setup(g){const i=y(),s=k(),u=$(),{posts:n}=T(),p=_(()=>[{name:i.value.showAllTagsText,path:"/tags/"},...u.tagsWithColor.value]);return(r,t)=>(a(!0),o(m,null,f(l(p),(e,C)=>(a(),o("span",{key:C,class:B(["article-tag",{active:e.name==g.currentTag,"tag-all":e.path=="/tags/"}]),style:w({backgroundColor:e.tagColor}),onClick:G=>l(s).push(e.path)},[L(c(e.name)+" ",1),e.path=="/tags/"?(a(),o("sup",z,c(l(n).length),1)):(a(),o("sup",F,c(e.pages.length),1))],14,b))),128))}}),j={class:"year"},E={class:"title"},U={key:0,class:"subtitle"},X=h("hr",null,null,-1),Y=v({props:{data:{type:Array,default:()=>[]}},setup(g){return(i,s)=>{const u=N("RouterLink");return a(!0),o(m,null,f(g.data,(n,p)=>(a(),o("section",{key:p},[h("span",j,c(n.year),1),(a(!0),o(m,null,f(n.data,(r,t)=>(a(),o("div",{key:t,class:"item"},[d(u,{to:r.path},{default:x(()=>[h("p",E,c(r.frontmatter.title),1),r.frontmatter.subtitle?(a(),o("p",U,c(r.frontmatter.subtitle),1)):R("",!0)]),_:2},1032,["to"]),X]))),128))]))),128)}}}),q={class:"tags-wrapper"},K=v({setup(g){const i=k(),s=y(),{posts:u}=T(),n=_(()=>{const t=decodeURI(i.currentRoute.value.path.replace(/\/tags/g,"").replace(/\//g,""));return t===""?s.value.showAllTagsText:t}),p=_(()=>{const t=n.value===s.value.showAllTagsText?"":n.value;return D(P(u.value,t))}),r=_(()=>{var e;const t=s.value.pages&&s.value.pages.tags?s.value.pages.tags:{};return t.title===void 0&&(t.title=(e=s.value.pageText)==null?void 0:e.tags),t});return(t,e)=>(a(),V(A,null,{page:x(()=>[d(S,{"page-info":l(r)},null,8,["page-info"]),h("div",q,[d(W,{"current-tag":l(n)},null,8,["current-tag"]),d(Y,{data:l(p)},null,8,["data"])])]),_:1}))}});export{K as default};
