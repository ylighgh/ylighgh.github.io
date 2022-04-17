import{d as y,r as x,o as a,i as m,e as t,t as w,h as u,j as V,k as v,f as d,w as S,l as A,a as B,m as $,n as D,F as M,p as R,b as L,q as C,s as H,v as T,x as I,_ as P}from"./app.d8bd959b.js";import{_ as q}from"./Pager.3ad6668b.js";const z={class:"post-item"},F=["src"],j={class:"else"},E={key:0,class:"post-item__date"},O={key:0},G=["innerHTML"],U=y({props:{item:{type:Object,required:!0}},setup(i){const h=e=>e.replaceAll("<RouterLink to","<a href").replaceAll("</RouterLink>","</a>");return(e,r)=>{const f=x("RouterLink");return a(),m("div",z,[t("div",{class:"post-item__img",onClick:r[0]||(r[0]=k=>e.$router.push(i.item.path))},[t("img",{src:e.$withBase(i.item.frontmatter.headerImage)},null,8,F)]),t("div",j,[i.item.frontmatter.date?(a(),m("p",E,w(u(V)(i.item.frontmatter.date)),1)):v("",!0),d(f,{to:i.item.path,class:"post-item__title"},{default:S(()=>[t("h2",null,w(i.item.frontmatter.title),1),i.item.frontmatter.subtitle?(a(),m("h3",O,w(i.item.frontmatter.subtitle),1)):v("",!0)]),_:1},8,["to"]),t("div",{class:"post-item__content",innerHTML:h(i.item.excerpt)},null,8,G)])])}}}),J={class:"postlist-wrapper"},K=y({setup(i){const h=A(),e=B(),r=$(()=>{const n=decodeURI(h.currentRoute.value.path.replace(/\/page/g,"").replace(/\//g,""));return n===""?1:Number(n)}),{slicedPosts:f,pagerLink:k}=D(r),p=$(()=>{const n=k.value,o=n&&n.next?{text:e.value.homeNext,link:n.next}:null,l=n&&n.prev?{text:e.value.homePrev,link:n.prev}:null;return{next:o,prev:l}});return(n,o)=>(a(),m("div",J,[(a(!0),m(M,null,R(u(f),l=>(a(),L(U,{key:l.path,item:l},null,8,["item"]))),128)),u(p).next||u(p).prev?(a(),L(q,{key:0,data:u(p)},null,8,["data"])):v("",!0)]))}});const Q={class:"sns-wrapper"},W=["href"],X=y({props:{large:{type:Boolean,default:!0}},setup(i){var n;const h={github:{icon:"fa-github-alt",preLink:"https://github.com/"},linkedin:{icon:"fa-linkedin-in",preLink:"https://www.linkedin.com/in/"},facebook:{icon:"fa-facebook-f",preLink:"https://www.facebook.com/"},twitter:{icon:"fa-twitter",preLink:"https://www.twitter.com/"},zhihu:{icon:"ri-zhihu-line",preLink:"https://www.zhihu.com/people/"},weibo:{icon:"ri-weibo-fill",preLink:"http://weibo.com/u/"},email:{icon:"fa-envelope",preLink:"mailto:"},rss:{icon:"ri-rss-fill",preLink:"",iconScale:.9}},r=(n=B().value.personalInfo)==null?void 0:n.sns,f=(o,l)=>typeof o=="string"?h[l].preLink+o:o.link,k=(o,l)=>typeof o=="string"?h[l].icon:o.icon,p=(o,l)=>(typeof o=="string"?h[l].iconScale:o.iconScale)||1;return(o,l)=>{const g=x("VIcon");return a(),m("div",Q,[(a(!0),m(M,null,R(u(r),(_,c)=>(a(),m("a",{key:`${c}-${_}`,href:f(_,c),target:"_blank",rel:"noopener noreferrer"},[d(g,{class:"icon-stack"},{default:S(()=>[i.large?(a(),L(g,{key:0,name:"fa-circle",scale:"2.3",class:"icon-circle"})):v("",!0),d(g,{name:k(_,c),scale:p(_,c),class:"icon-sns",inverse:""},null,8,["name","scale"])]),_:2},1024)],8,W))),128))])}}}),Y={class:"home-blog"},Z=["src"],ee={key:0,class:"hero-bubble"},te=t("div",{class:"hero-bubble__body"},[t("p",{id:"hitokoto"},"\u6B63\u5728\u52A0\u8F7D\u4E00\u8A00...")],-1),oe=t("div",{class:"hero-bubble__tile"},null,-1),ne=[te,oe],se={class:"hero-info"},ae={class:"description"},ie=y({setup(i){const h=B(),e=h.value.homeHeaderImages,r=C(-1),f=C(1),k=()=>{window.scrollTo({top:document.querySelector(".hero").clientHeight,behavior:"smooth"})},p=h.value.hitokoto,n=()=>{let c=p;c=typeof c=="string"?c:"https://v1.hitokoto.cn",fetch(c).then(s=>s.json()).then(s=>{const b=document.querySelector("#hitokoto");b.innerHTML=s.hitokoto}).catch(s=>{console.log(`Get ${c} error: `,s)})};H(()=>{p&&n(),e&&e.length>0&&(r.value=Math.floor(Math.random()*e.length))});const o=c=>{if(!(e&&e.length>0))return;const s=e.length;r.value=(r.value+c+s)%s},l=$(()=>e&&e.length>0&&r.value!==-1?`url(${T(e[r.value].path)})`:"none"),g=$(()=>e&&e.length>0&&r.value!==-1?e[r.value].mask:null),_=h.value.personalInfo;return(c,s)=>{const b=x("VIcon");return a(),m("main",Y,[t("div",{class:"hero",style:I({"background-image":u(l)})},[u(g)?(a(),m("div",{key:0,class:"hero-mask",style:I({background:u(g)})},null,4)):v("",!0),t("div",{class:"hero-content",style:I({opacity:f.value})},[t("img",{class:"hero-avatar hide-on-mobile",src:c.$withBase(u(_).avatar),alt:"hero"},null,8,Z),u(p)?(a(),m("div",ee,ne)):v("",!0),t("div",se,[t("h1",null,w(u(_).name),1),t("p",ae,w(u(_).description),1)]),d(X,{class:"hide-on-mobile",large:""}),t("button",{class:"hero-img-prev hide-on-mobile",onClick:s[0]||(s[0]=N=>o(-1))},[d(b,{name:"fa-chevron-left"})]),t("button",{class:"hero-img-next hide-on-mobile",onClick:s[1]||(s[1]=N=>o(1))},[d(b,{name:"fa-chevron-right"})]),t("span",{class:"hero-arrow-down hide-on-mobile",onClick:s[2]||(s[2]=N=>k())},[d(b,{name:"fa-chevron-down",animation:"float"})])],4)],4),d(K)])}}}),le=y({setup(i){return(h,e)=>(a(),L(P,null,{page:S(()=>[d(ie)]),_:1}))}});export{le as default};
