import{_ as q,u as z,r as p,j as F,c as o,e as a,t as e,b as s,F as v,k as m,d as B,a as j,w as N,G as E,o as n,n as G,l as O,p as R,h as J,H as K}from"./index-WWJJeb02.js";/* empty css              */import{_ as Q}from"./a-B6TbTye6.js";import{_ as U,a as W}from"./c-mgw-oB0D.js";import{h as y}from"./moment-BjLXg0w5.js";import{a as X,p as Y,b as k}from"./yingyuan-BKTncc5a.js";import"./request-D79iTt0s.js";const I=h=>(R("data-v-3658b52a"),h=h(),J(),h),Z={class:"yyxq"},aa={class:"ee"},sa={class:"xia"},ea={class:"name"},ta={class:"biao"},la={class:"di"},na={class:"left"},oa=I(()=>a("img",{src:U,alt:""},null,-1)),ia={class:"ellipsis"},ca=I(()=>a("div",{class:"right"},[a("img",{src:W,alt:""})],-1)),ra={class:"flex"},da=["src","onClick"],ua=I(()=>a("div",{class:"cha"},">",-1)),_a={class:"sui"},pa=I(()=>a("span",null,"分",-1)),va={class:"miao ellipsis"},ma={class:"ellipsis"},ha={key:0,class:"content"},fa={class:"item"},ga={class:"left"},Ia={class:"right"},ya={key:1,class:"zan"},ka={__name:"index",setup(h){let w=z(),x=w.params.cinemaId,f=p({});async function P(){let r=await X(x);f.value=r.data.cinema}let i=p(0),u=p([]),c=p([]),b=p([]),_=p({filmId:"",cinemaId:w.params.cinemaId,date:""});async function S(){let r=await Y(x);c.value=r.data.films,_.value.filmId=r.data.films[0].filmId,_.value.date=c.value[i.value].showDate[0],b.value=c.value[i.value].showDate.map(t=>t*1e3);try{let t=await k(_.value);u.value=t.data.schedules}catch{u.value=[]}}async function T(r,t){try{_.value.filmId=r.filmId,i.value=t;let g=await k(_.value);u.value=g.data.schedules}catch{u.value=[]}}async function H(r){try{_.value.date=r.name;let t=await k(_.value);u.value=t.data.schedules}catch{u.value=[]}}return F(()=>{P(),S()}),(r,t)=>{var C,D,M,$,A,L;const g=K,V=E;return n(),o("div",Z,[a("div",aa,[a("img",{src:Q,alt:"",onClick:t[0]||(t[0]=l=>r.$router.back())})]),a("div",sa,[a("p",ea,e(s(f).name),1),a("p",ta,[(n(!0),o(v,null,m(s(f).services,l=>(n(),o("span",{class:"kuang",key:l},e(l.name),1))),128))]),a("div",la,[a("div",na,[oa,a("span",ia,e(s(f).address),1)]),ca]),a("div",ra,[(n(!0),o(v,null,m(s(c),(l,d)=>(n(),o("div",{class:"flex_item",key:l.filmId},[a("img",{src:l.poster,alt:"",onClick:wa=>T(l,d),class:G({active:d===s(i)})},null,10,da)]))),128))]),a("div",{class:"gan",onClick:t[1]||(t[1]=l=>r.$router.push(`/dyxq/${s(c)[s(i)].filmId}`))},[ua,a("div",_a,[a("span",null,e((C=s(c)[s(i)])==null?void 0:C.name),1),a("span",null,[B(e((D=s(c)[s(i)])==null?void 0:D.grade),1),pa])]),a("div",va,[B(e((M=s(c)[s(i)])==null?void 0:M.category)+"| "+e(($=s(c)[s(i)])==null?void 0:$.runtime)+"分钟| "+e((A=s(c)[s(i)])==null?void 0:A.director)+"| ",1),a("span",ma,[(n(!0),o(v,null,m((L=s(c)[s(i)])==null?void 0:L.actors,l=>(n(),o("span",null,e(l.name),1))),256))])])]),j(V,{onClickTab:H},{default:N(()=>[(n(!0),o(v,null,m(s(b),l=>(n(),O(g,{key:l,name:parseInt(l/1e3),title:s(y)(l).format("M月D日")},{default:N(()=>[s(u).length!==0?(n(),o("div",ha,[(n(!0),o(v,null,m(s(u),d=>(n(),o("div",fa,[a("div",ga,[a("p",null,[a("span",null,e(s(y)(d.showAt*1e3).format("H:MM")),1),a("span",null,e(s(y)(d.endAt*1e3).format("H:MM"))+"散场",1)]),a("p",null,[a("span",null,e(d.filmLanguage)+e(d.imagery),1),a("span",null,e(d.hallName),1)])]),a("div",Ia,[a("span",null,"￥"+e(d.salePrice/100),1),a("span",null,e(d.isOnsell?"购票":"停票"),1)])]))),256))])):(n(),o("div",ya,"暂无场次"))]),_:2},1032,["name","title"]))),128))]),_:1})])])}}},La=q(ka,[["__scopeId","data-v-3658b52a"]]);export{La as default};