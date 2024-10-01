(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const u=[{title:"About",link:"#"},{title:"Pricing",link:"#"},{title:"Contact",link:"#"}],l=[{platform:"Twitter",link:"#",icon:"#icon-twitter"},{platform:"Facebook",link:"#",icon:"#icon-facebook"},{platform:"Instagram",link:"#",icon:"#icon-instagram"}],a=i=>`
    ${i.map(t=>`
      <li class="social-item">
        <a href="${t.link}" aria-label="${t.platform}">
          <svg class="social-icon" width="26" height="26">
            <use href="../img/icons.svg${t.icon}"></use>
          </svg>
        </a>
      </li>
    `).join("")}
`,f=u.map(i=>`<li class="nav-item"><a href="${i.link}">${i.title}</a></li>`).join(""),d=document.querySelector(".nav-list"),m=document.querySelector(".header-socials");d.innerHTML=f;m.innerHTML=a(l);const p=[{title:"People",value:"200"},{title:"Our users the world",value:"50"},{title:"Succesfull projects",value:"100"}],g=p.map((i,t)=>{let o=i.value;return t===0?o=`${o}+`:t===1?o=`${o}K`:t===2&&(o=`${o}%`),`<li class="static-item"><h3>${i.title}</h3><p class="item-value">${o}</p></li>`}).join(""),v=document.querySelector(".js-statistics-list");v.innerHTML=g;const h=[["Creative Direction","Art Direction","Visual Design","Service Design"],["UX Design","Brand Identity","Concepting","Interaction Design"],["Design Systems","Strategy","Digital Experiences","Consulting"]],y=()=>`
        ${h.map(i=>`
          <div class="services-group">
            ${i.map(t=>`<a href="#" class="service-item">${t}<svg class="icon-arrow" width="13" height="13"><use href='../img/icons.svg#icon-arrow'></use></svg></a>`).join("")}
            </div>`).join("")}
    `,S=document.querySelector(".js-our-services");S.innerHTML=y();const n=document.querySelector("#js-footer");n.innerHTML=a(l);const L=n.querySelector(".social-icons-list");L.classList.add("soclist-icons-footer");n.querySelectorAll(".social-item").forEach(i=>i.classList.add("footer-soc-item"));
//# sourceMappingURL=index.js.map
