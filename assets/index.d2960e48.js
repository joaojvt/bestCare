var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{R as s,L as i,N as o,u as m,S as d,a as u,B as E,b as p}from"./vendor.7dabca75.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g=()=>s.createElement("footer",null,s.createElement("div",{className:"links"},s.createElement(i,{to:"/"},s.createElement("img",{src:"/bestCare/assets/logo-white.c8ab15a3.svg",alt:"logo"})),s.createElement("div",{className:"social-media"},s.createElement("img",{src:"/bestCare/assets/whatsapp-logo.20cd8701.svg",alt:"logo"}),s.createElement("img",{src:"/bestCare/assets/facebook-logo.b9f059b0.svg",alt:"logo"}),s.createElement("img",{src:"/bestCare/assets/instagram-logo.e2295e30.svg",alt:"logo"}))),s.createElement("nav",null,s.createElement(o,{to:"/"},"Home"),s.createElement(o,{to:"/what-we-offer"},"What We Offer"),s.createElement(o,{to:"/prices"},"Prices"),s.createElement(o,{to:"/contact"},"Contact")));const v=()=>s.createElement("header",null,s.createElement("div",{className:"logo-container"},s.createElement(i,{to:"/"},s.createElement("img",{src:"/bestCare/assets/logo.779d9bb7.svg",alt:"Logo"}))),s.createElement("nav",null,s.createElement(o,{exact:!0,to:"/",activeClassName:"selected"},"Home"),s.createElement(o,{to:"/what-we-offer",activeClassName:"selected"},"What We Offer"),s.createElement(o,{to:"/prices",activeClassName:"selected"},"Prices"),s.createElement(o,{to:"/contact",activeClassName:"selected"},"Contact")));const f=()=>s.createElement("div",{id:"trip"},s.createElement("p",{className:""},"Going on a trip?"),s.createElement("p",null,"Leave ",s.createElement("span",null,"your best friend in the best hands")));const h=({icon:e,children:t})=>s.createElement("div",{className:"card"},s.createElement("img",{src:e}),s.createElement("p",null,t));const b=()=>{const e=[{text:"Our accommodations have thermal insulation to keep your pet warn in the winter",icon:"/bestCare/assets/house-winter.5836584e.svg"},{text:"We have a fan sistem in the cealin to avoid excessive heat",icon:"/bestCare/assets/fan-icon.1f6998ce.svg"},{text:"We have individual accommodations for the shy dogs",icon:"/bestCare/assets/fence-icon.ddf2dc8f.svg"},{text:"Your dog will have 400m² to play by himself or with friends",icon:"/bestCare/assets/grid-icon.eba6384c.svg"}];return s.createElement(s.Fragment,null,s.createElement("div",{className:"container"},s.createElement("div",{id:"dog-container"},s.createElement("div",{className:"text"},s.createElement("p",{className:"big-text"},"We have everything to ",s.createElement("span",{className:"yellow-text"},"guarantee your pet's comfort")),s.createElement("p",{className:"description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quibusdam amet possimus voluptate recusandae? Eos dignissimos impedit maiores ex voluptatum ad possimus architecto fugit rem optio, dolores magnam. Delectus, ratione?")),s.createElement("div",{className:"dog-img"},s.createElement("img",{src:"/bestCare/assets/dog-golden.14270c5d.png",alt:"dog"})))),s.createElement("div",{id:"infrasctrure"},s.createElement("div",{className:"container"},s.createElement("h3",{className:"big-text"},"Our infrastructure"),s.createElement("div",{className:"cards-container"},e.map(((e,t)=>s.createElement(h,{icon:e.icon,key:t},e.text)))))),s.createElement("div",{id:"vet-container"},s.createElement("div",{className:"container"},s.createElement("img",{src:"/bestCare/assets/woman-vet.54218e2a.png",alt:"Woman Vet"}),s.createElement("div",{className:"rigth-text"},s.createElement("h3",{className:"big-text"},"We have vets avaliable 24/7"),s.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc phasellus a, in eu at amet. Massa semper nulla tincidunt ut blandit senectus adipiscing dolor id. Faucibus vitae vitae diam dui, felis et arcu curabitur. Aliquet varius vitae mauris est tortor, maecenas.")))))};var y="/bestCare/assets/check-icon.5dbb8cf0.svg";const N=e=>{var i,o=e,{rounded:m,children:d}=o,u=((e,t)=>{var a={};for(var l in e)n.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&r)for(var l of r(e))t.indexOf(l)<0&&c.call(e,l)&&(a[l]=e[l]);return a})(o,["rounded","children"]);return s.createElement("button",(i=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))c.call(t,a)&&l(e,a,t[a]);return e})({},u),t(i,a({className:m?"rounded":""}))),d)};const w=({rows:e})=>s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,"Number of days"),s.createElement("th",null,"Small and medium size"),s.createElement("th",null,"Large size"))),s.createElement("tbody",null,e.map((e=>s.createElement("tr",{key:e.dayNum},s.createElement("td",null,e.dayNum),s.createElement("td",null,e.mediumPrice),s.createElement("td",null,e.lergePrice)))))),C=()=>{const e=m();return s.createElement(s.Fragment,null,s.createElement("div",{id:"params"},s.createElement("img",{className:"params-waves",src:"/bestCare/assets/price-waves.9d457e45.svg"}),s.createElement("div",{className:"container"},s.createElement("div",{className:"left"},s.createElement("h3",{className:"big-text"},"Our prices can change"),s.createElement("p",null,"Our prices may vary depending on:"),s.createElement("ul",null,s.createElement("li",null,s.createElement("img",{src:y,alt:"check"})," Size of your pet"),s.createElement("li",null,s.createElement("img",{src:y,alt:"check"})," Number of days"),s.createElement("li",null,s.createElement("img",{src:y,alt:"check"})," Time of the year")),s.createElement("p",{className:"params-description"},"Also, if you have more than one ",s.createElement("span",{className:"yellow-text"},"pet you get a discount! "),"To know the exact price, get in touch!"),s.createElement(N,{type:"button",onClick:()=>e.push("/contact")},"Contact")))),s.createElement("div",{id:"table-prices"},s.createElement("div",{className:"container"},s.createElement("h3",{className:"big-text"},"Check our prices!"),s.createElement(w,{rows:[{dayNum:1,mediumPrice:30,lergePrice:35},{dayNum:2,mediumPrice:55,lergePrice:60},{dayNum:3,mediumPrice:80,lergePrice:85},{dayNum:4,mediumPrice:105,lergePrice:110},{dayNum:5,mediumPrice:130,lergePrice:135},{dayNum:6,mediumPrice:155,lergePrice:160}]}))))};const P=()=>s.createElement("h1",null,"Contato");function x(){return s.createElement(d,null,s.createElement(u,{path:"/",component:f,exact:!0}),s.createElement(u,{path:"/what-we-offer",component:b}),s.createElement(u,{path:"/prices",component:C}),s.createElement(u,{path:"/contact",component:P}))}function O(){return s.createElement(E,{basename:"/bestCare"},s.createElement("div",{id:"App"},s.createElement(v,null),s.createElement(x,null),s.createElement(g,null)))}p.render(s.createElement(s.StrictMode,null,s.createElement(O,null)),document.getElementById("root"));