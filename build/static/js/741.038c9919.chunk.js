"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[741],{1112:(e,a,s)=>{s.d(a,{A:()=>n});var t=s(2139),r=s(579);const c={initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95}},n=e=>{let{children:a}=e;return(0,r.jsx)(t.P.div,{variants:c,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5},children:a})}},1425:(e,a,s)=>{s.d(a,{A:()=>c});const t=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var r=s(579);const c=()=>(0,r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"Error"})},6489:(e,a,s)=>{s.r(a),s.d(a,{default:()=>k});var t=s(5043),r=s(1591),c=s(1112),n=s(897),i=s(8069);const l=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var o=s(579);const h=e=>{let{data:a}=e;const{name:s,description:t,thumbnail:r,homepage:c,wiki:n}=a;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"unset"}),(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:s}),(0,o.jsx)("p",{className:"randomchar__descr",children:t}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:n,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=()=>{const[e,a]=(0,t.useState)(null),{getCharacter:s,clearError:r,process:c,setProcess:d}=(0,n.A)();(0,t.useEffect)((()=>{u()}),[]);const m=e=>{a(e)},u=()=>{r();const e=Math.floor(400*Math.random()+1011e3);s(e).then(m).then((()=>d("confirmed")))};return(0,o.jsxs)("div",{className:"randomchar",children:[(0,i.A)(c,h,e),(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{onClick:u,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})};var m=s(1425),u=s(8502);const _=e=>{const[a,s]=(0,t.useState)([]),[r,c]=(0,t.useState)(!1),[i,l]=(0,t.useState)(210),[h,d]=(0,t.useState)(!1),{getAllCharacters:_,process:j,setProcess:p}=(0,n.A)();(0,t.useEffect)((()=>{x(i,!0)}),[]);const x=(e,a)=>{c(!a),_(e).then(b).then((()=>p("confirmed")))},b=async e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),c(!1),l((e=>e+9)),d((e=>a))},v=(0,t.useRef)([]),g=e=>{v.current.forEach((e=>e.classList.remove("char__item_selected"))),v.current[e].classList.add("char__item_selected"),v.current[e].focus()};const N=(0,t.useMemo)((()=>((e,a,s)=>{switch(e){case"waiting":return(0,o.jsx)(u.A,{});case"loading":return s?(0,o.jsx)(a,{}):(0,o.jsx)(u.A,{});case"confirmed":return(0,o.jsx)(a,{});case"error":return(0,o.jsx)(m.A,{});default:throw new Error("Unexpected process state")}})(j,(()=>function(a){const s=a.map(((a,s)=>{let t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==a.thumbnail&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==a.thumbnail||(t={objectFit:"unset"}),(0,o.jsxs)("li",{ref:e=>v.current[s]=e,className:"char__item",tabIndex:0,onClick:()=>{e.onCharSelected(a.id),g(s)},onKeyPress:t=>{t.preventDefault()," "!==t.key&&"Enter"!==t.key||(e.onCharSelected(a.id),g(s))},children:[(0,o.jsx)("img",{src:a.thumbnail,alt:a.name,style:t}),(0,o.jsx)("div",{className:"char__name",children:a.name})]},a.id)}));return(0,o.jsx)("ul",{className:"char__grid",children:s})}(a)),r)),[j]);return(0,o.jsxs)("div",{className:"char__list",children:[N,(0,o.jsx)("button",{className:"button button__main button__long",disabled:r,style:{display:h?"none":"block"},onClick:()=>x(i),children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})};var j=s(5475);const p=e=>{let{data:a}=e;const{name:s,description:t,thumbnail:r,homepage:c,wiki:n,comics:i}=a;let l={objectFit:"cover"};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(l={objectFit:"unset"});const h=0===i.length?"There is no comics with this character":i.slice(0,10).map((e=>{const a=e.resourceURI.slice(43);return(0,o.jsx)(j.N_,{to:"/comics/".concat(a),className:"char__comics-item",children:e.name},a)}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:r,alt:s,style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:s}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:n,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:t}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsx)("ul",{className:"char__comics-list",children:h})]})},x=e=>{const[a,s]=(0,t.useState)(null),{getCharacter:r,clearError:c,process:l,setProcess:h}=(0,n.A)();(0,t.useEffect)((()=>{!function(){const{charId:a}=e;if(!a)return;c(),r(a).then(d).then((()=>h("confirmed")))}()}),[e.charId]);const d=e=>{s(e)};return(0,o.jsx)("div",{className:"char__info",children:(0,i.A)(l,p,a)})};var b=s(3892),v=s(899);const g=()=>{const[e,a]=(0,t.useState)(null),{getCharacterByName:s,clearError:r,process:c,setProcess:i}=(0,n.A)(),l=e=>{a(e)},h="error"===c?(0,o.jsx)("div",{className:"char__search-critical-error",children:(0,o.jsx)(m.A,{})}):null,d=e?e.length>0?(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",e[0].name," page?"]}),(0,o.jsx)(j.N_,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})]}):(0,o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,o.jsxs)("div",{className:"char__search-form",children:[(0,o.jsx)(b.l1,{initialValues:{charName:""},validationSchema:v.Ik({charName:v.Yj().required("This field is required")}),onSubmit:e=>{let{charName:a}=e;var t;t=a,r(),s(t).then(l).then((()=>i("confirmed")))},children:(0,o.jsxs)(b.lV,{children:[(0,o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)(b.D0,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,o.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===c,children:(0,o.jsx)("div",{className:"inner",children:"find"})})]}),(0,o.jsx)(b.Kw,{component:"div",className:"char__search-error",name:"charName"})]})}),d,h]})};class N extends t.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,o.jsx)(m.A,{}):this.props.children}}const f=N,y=s.p+"static/media/vision.067d4ae1936d64a577ce.png",k=()=>{const[e,a]=(0,t.useState)(null);return(0,o.jsxs)(c.A,{children:[(0,o.jsxs)(r.m,{children:[(0,o.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,o.jsx)("title",{children:"Marvel information portal"})]}),(0,o.jsx)(f,{children:(0,o.jsx)(d,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(f,{children:(0,o.jsx)(_,{onCharSelected:e=>{a(e)}})}),(0,o.jsxs)("div",{className:"char__informations",children:[(0,o.jsx)(f,{children:(0,o.jsx)(x,{charId:e})}),(0,o.jsx)(f,{children:(0,o.jsx)(g,{})})]})]}),(0,o.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}},897:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(5043);const r=()=>{const{request:e,clearError:a,process:s,setProcess:r}=(()=>{const[e,a]=(0,t.useState)("waiting");return{request:(0,t.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a("loading");try{const a=await fetch(e,{method:s,headers:r,body:t});if(!a.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));return await a.json()}catch(c){throw a("error"),c}}),[]),clearError:(0,t.useCallback)((()=>{a("loading")}),[]),process:e,setProcess:a}})(),c="https://gateway.marvel.com:443/v1/public/",n="apikey=0481e59bf467b69f70671a30361d50b4",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:a,process:s,setProcess:r,getAllCharacters:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(c,"characters?limit=9&offset=").concat(a,"&").concat(n))).data.results.map(i)},getCharacter:async a=>{const s=await e("".concat(c,"characters/").concat(a,"?&").concat(n));return i(s.data.results[0])},getCharacterByName:async a=>(await e("".concat(c,"characters?name=").concat(a,"&").concat(n))).data.results.map(i),getAllComics:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(c,"comics?orderBy=issueNumber&limit=8&offset=").concat(a,"&").concat(n))).data.results.map(l)},getComic:async a=>{const s=await e("".concat(c,"comics/").concat(a,"?&").concat(n));return l(s.data.results[0])}}}},8069:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(8502),r=s(1425),c=s(579);const n=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,c.jsxs)("div",{className:"skeleton",children:[(0,c.jsxs)("div",{className:"pulse skeleton__header",children:[(0,c.jsx)("div",{className:"pulse skeleton__circle"}),(0,c.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"})]})]}),i=(e,a,s)=>{switch(e){case"waiting":return(0,c.jsx)(n,{});case"loading":return(0,c.jsx)(t.A,{});case"confirmed":return(0,c.jsx)(a,{data:s});case"error":return(0,c.jsx)(r.A,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=741.038c9919.chunk.js.map