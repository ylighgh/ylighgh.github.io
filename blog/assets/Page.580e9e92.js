import{d as w,l as H,a as b,D as I,r as x,o as a,i as n,h as e,x as R,k as u,e as d,F as T,p as G,E as U,G as O,t as g,f as m,j,y as B,v as z,m as C,H as A,I as P,w as J,g as K,J as N,K as q,L as Q,M as W,N as X,O as Y,P as Z,B as M}from"./app.b3194870.js";const ee={class:"article-header-content"},te={key:0,class:"article-tags"},se=["onClick"],ae={class:"article-title"},ne={key:1,class:"article-subtitle"},oe={class:"article-icons"},re={key:0,class:"article-icon"},ie={key:1,class:"article-icon"},le={key:2,class:"article-icon"},Te=w({props:{currentTag:{type:String,default:""}},setup(D){const h=H(),p=b(),s=I(),v=r=>{h.currentRoute.value.path!==`/tags/${r}/`&&h.push({path:`/tags/${r}/`})},f=()=>{const r={};return s.value.layout==="Post"&&s.value.useHeaderImage&&s.value.headerImage&&(r.backgroundImage=`url(${z(s.value.headerImage)})`),r};return(r,_)=>{const t=x("VIcon");return a(),n("div",{class:U(["article-header",{"use-image":e(s).useHeaderImage}]),style:R(f())},[e(s).useHeaderImage&&e(s).headerMask?(a(),n("div",{key:0,class:"article-header-mask",style:R({background:e(s).headerMask})},null,4)):u("",!0),d("div",ee,[e(s).tags?(a(),n("div",te,[(a(!0),n(T,null,G(e(s).tags,(i,c)=>(a(),n("span",{key:c,class:U(["article-tag",{active:D.currentTag==i}]),onClick:O(k=>v(i),["stop"])},g(i),11,se))),128))])):u("",!0),d("h1",ae,g(e(s).title),1),e(s).subtitle?(a(),n("p",ne,g(e(s).subtitle),1)):u("",!0),d("div",oe,[e(s).author||e(p).personalInfo.name?(a(),n("div",re,[m(t,{name:"fa-regular-user",scale:"0.9"}),d("span",null,g(e(s).author||e(p).personalInfo.name),1)])):u("",!0),e(s).date?(a(),n("div",ie,[m(t,{name:"fa-regular-calendar",scale:"0.9"}),d("span",null,g(e(j)(e(s).date)),1)])):u("",!0),e(B).readingTime?(a(),n("div",le,[m(t,{name:"ri-timer-line",scale:"0.9"}),d("span",null,g(e(B).readingTime.minutes)+" min",1)])):u("",!0)])])],6)}}}),ce={class:"page-meta"},ue={key:0,class:"meta-item edit-link"},de={key:1,class:"meta-item last-updated"},me={class:"meta-item-label"},_e={class:"meta-item-info"},he={key:2,class:"meta-item contributors"},pe={class:"meta-item-label"},ve={class:"meta-item-info"},ge=["title"],fe=K(", "),ke=w({setup(D){const h=()=>{const t=b(),i=N(),c=I();return C(()=>{var V,E,F;if(!((E=(V=c.value.editLink)!=null?V:t.value.editLink)!=null?E:!0))return null;const{repo:o,docsRepo:l=o,docsBranch:L="main",docsDir:y="",editLinkText:$}=t.value;if(!l)return null;const S=A({docsRepo:l,docsBranch:L,docsDir:y,filePathRelative:i.value.filePathRelative,editLinkPattern:(F=c.value.editLinkPattern)!=null?F:t.value.editLinkPattern});return S?{text:$!=null?$:"Edit this page",link:S}:null})},p=()=>{const t=b(),i=N(),c=I();return C(()=>{var l,L,y,$;return!((L=(l=c.value.lastUpdated)!=null?l:t.value.lastUpdated)!=null?L:!0)||!((y=i.value.git)!=null&&y.updatedTime)?null:new Date(($=i.value.git)==null?void 0:$.updatedTime).toLocaleString()})},s=()=>{const t=b(),i=N(),c=I();return C(()=>{var o,l,L,y;return((l=(o=c.value.contributors)!=null?o:t.value.contributors)!=null?l:!0)&&(y=(L=i.value.git)==null?void 0:L.contributors)!=null?y:null})},v=b(),f=h(),r=p(),_=s();return(t,i)=>{const c=x("VIcon"),k=x("ClientOnly");return a(),n("footer",ce,[e(f)?(a(),n("div",ue,[m(c,{name:"fa-pencil-alt",scale:"0.9"}),m(P,{class:"meta-item-label",item:e(f)},null,8,["item"])])):u("",!0),e(r)?(a(),n("div",de,[d("span",me,g(e(v).lastUpdatedText)+": ",1),m(k,null,{default:J(()=>[d("span",_e,g(e(r)),1)]),_:1})])):u("",!0),e(_)&&e(_).length?(a(),n("div",he,[d("span",pe,g(e(v).contributorsText)+": ",1),d("span",ve,[(a(!0),n(T,null,G(e(_),(o,l)=>(a(),n(T,{key:l},[d("span",{class:"contributor",title:`email: ${o.email}`},g(o.name),9,ge),l!==e(_).length-1?(a(),n(T,{key:0},[fe],64)):u("",!0)],64))),128))])])):u("",!0)])}}}),Le={key:0,class:"page-nav"},ye={class:"inner"},$e={key:0,class:"prev"},be={key:1,class:"next"},Ce=w({setup(D){const h=t=>t===!1?null:W(t)?X(t):Y(t)?t:!1,p=(t,i,c)=>{const k=t.findIndex(o=>o.link===i);if(k!==-1){const o=t[k+c];return o!=null&&o.link?o:null}for(const o of t)if(o.children){const l=p(o.children,i,c);if(l)return l}return null},s=I(),v=q(),f=Q(),r=C(()=>{const t=h(s.value.prev);return t!==!1?t:p(v.value,f.path,-1)}),_=C(()=>{const t=h(s.value.next);return t!==!1?t:p(v.value,f.path,1)});return(t,i)=>e(r)||e(_)?(a(),n("nav",Le,[d("p",ye,[e(r)?(a(),n("span",$e,[m(P,{item:e(r)},null,8,["item"])])):u("",!0),e(_)?(a(),n("span",be,[m(P,{item:e(_)},null,8,["item"])])):u("",!0)])])):u("",!0)}}),Ie={class:"page"},xe={class:"theme-gungnir-content"},we=w({setup(D){const h=b(),{isDarkMode:p}=Z(),s=C(()=>p.value?h.value.giscusDarkTheme:h.value.giscusLightTheme);return(v,f)=>{const r=x("Content"),_=x("GungnirGiscus");return a(),n("main",Ie,[M(v.$slots,"top"),d("div",xe,[m(r)]),m(ke),m(Ce),M(v.$slots,"bottom"),m(_,{theme:e(s)},null,8,["theme"])])}}});export{we as _,Te as a};
