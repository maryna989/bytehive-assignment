(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const a=[{title:"About",link:"#"},{title:"Pricing",link:"#"},{title:"Contact",link:"#"}],l=[{platform:"Twitter",link:"#",icon:"#icon-twitter"},{platform:"Facebook",link:"#",icon:"#icon-facebook"},{platform:"Instagram",link:"#",icon:"#icon-instagram"}],u=s=>`
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
`,d=a.map(s=>`<li class="nav-item"><a href="${s.link}">${s.title}</a></li>`).join(""),f=`
      <nav class="nav-header">
        <ul class="nav-list">
          ${d}
        </ul>
      </nav>
    `,c=document.querySelector("#header");document.querySelector(".js-logo");c.insertAdjacentHTML("afterbegin",f);c.insertAdjacentHTML("beforeend",u(l));const m=[{title:"People",value:"200"},{title:"Our users the world",value:"50"},{title:"Succesfull projects",value:"100"}],v=m.map((s,t)=>{let r=s.value;return t===0?r=`${r}+`:t===1?r=`${r}K`:t===2&&(r=`${r}%`),`<li class="static-item"><h3>${s.title}</h3><p class="item-value">${r}</p></li>`}).join(""),g=`<ul class="statistics-list">${v}</ul>`,p=document.querySelector(".js-statistics");document.querySelector("#js-statis");p.insertAdjacentHTML("beforeend",g);const h=[["Creative Direction","Art Direction","Visual Design","Service Design"],["UX Design","Brand Identity","Concepting","Interaction Design"],["Design Systems","Strategy","Digital Experiences","Consulting"]],y=()=>`
      <div class="our-services">
        ${h.map(s=>`
          <div class="services-group">
            ${s.map(t=>`<a href="#" class="service-item">${t}<svg class="icon-arrow" width="13" height="13"><use href='../img/icons.svg#icon-arrow'></use></svg></a>`).join("")}
          </div>
        `).join("")}
      </div>
    `,$=document.querySelector("#js-services");$.insertAdjacentHTML("beforeend",y());
//# sourceMappingURL=index.js.map
