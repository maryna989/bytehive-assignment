(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const d=[{title:"About",link:"#"},{title:"Pricing",link:"#"},{title:"Contact",link:"#"}],l=[{platform:"Twitter",link:"#",icon:"#icon-twitter"},{platform:"Facebook",link:"#",icon:"#icon-facebook"},{platform:"Instagram",link:"#",icon:"#icon-instagram"}],a=s=>`
  <ul class="social-icons-list">
    ${s.map(t=>`
      <li class="social-item">
        <a href="${t.link}" aria-label="${t.platform}">
          <svg class="icon js-icon-${t.platform.toLowerCase()}" width="26" height="26">
            <use href="../img/icons.svg${t.icon}"></use>
          </svg>
        </a>
      </li>
    `).join("")}
  </ul>
`,f=d.map(s=>`<li class="nav-item"><a href="${s.link}">${s.title}</a></li>`).join(""),m=`
      <nav class="nav-header">
        <ul class="nav-list">
          ${f}
        </ul>
      </nav>
    `,u=document.querySelector("#header");document.querySelector(".js-logo");u.insertAdjacentHTML("afterbegin",m);u.insertAdjacentHTML("beforeend",a(l));const v=[{title:"People",value:"200"},{title:"Our users the world",value:"50"},{title:"Succesfull projects",value:"100"}],g=v.map((s,t)=>{let o=s.value;return t===0?o=`${o}+`:t===1?o=`${o}K`:t===2&&(o=`${o}%`),`<li class="static-item"><h3>${s.title}</h3><p class="item-value">${o}</p></li>`}).join(""),p=`<ul class="statistics-list">${g}</ul>`,h=document.querySelector(".js-statistics");document.querySelector("#js-statis");h.insertAdjacentHTML("beforeend",p);const y=[["Creative Direction","Art Direction","Visual Design","Service Design"],["UX Design","Brand Identity","Concepting","Interaction Design"],["Design Systems","Strategy","Digital Experiences","Consulting"]],S=()=>`
      <div class="our-services">
        ${y.map(s=>`
          <div class="services-group">
            ${s.map(t=>`<a href="#" class="service-item">${t}<svg class="icon-arrow" width="13" height="13"><use href='../img/icons.svg#icon-arrow'></use></svg></a>`).join("")}
          </div>
        `).join("")}
      </div>
    `,$=document.querySelector("#js-services");$.insertAdjacentHTML("beforeend",S());const n=document.querySelector("#js-footer");n.innerHTML=a(l);const j=n.querySelector(".social-icons-list");j.classList.add("soclist-icons-footer");n.querySelectorAll(".social-item").forEach(s=>s.classList.add("footer-soc-item"));
//# sourceMappingURL=index.js.map
