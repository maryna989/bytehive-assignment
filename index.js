(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const c=[{title:"About",link:"#"},{title:"Pricing",link:"#"},{title:"Contact",link:"#"}],a=[{platform:"Twitter",link:"#",icon:"#icon-twitter"},{platform:"Facebook",link:"#",icon:"#icon-facebook"},{platform:"Instagram",link:"#",icon:"#icon-instagram"}],u=c.map(t=>`<li class="nav-item"><a href="${t.link}">${t.title}</a></li>`).join(""),f=`
      <nav class="nav-header">
        <ul class="nav-list">
          ${u}
        </ul>
      </nav>
    `,d=`
  <ul class="social-icons-list">
    ${a.map(t=>`
      <li class="social-item">
        <a href="${t.link}" aria-label="${t.platform}">
          <svg class="icon js-icon-${t.platform.toLowerCase()}" width="26" height="26">
            <use href="../img/icons.svg${t.icon}"></use>
          </svg>
        </a>
      </li>
    `).join("")}
  </ul>
`,l=document.querySelector("#header");document.querySelector(".js-logo");l.insertAdjacentHTML("afterbegin",f);l.insertAdjacentHTML("beforeend",d);const m=[{title:"People",value:"200"},{title:"Our users the world",value:"50"},{title:"Succesfull projects",value:"100"}],p=m.map((t,o)=>{let i=t.value;return o===0?i=`${i}+`:o===1?i=`${i}K`:o===2&&(i=`${i}%`),`<li class="static-item"><h3>${t.title}</h3><p class="item-value">${i}</p></li>`}).join(""),h=`<ul class="statistics-list">${p}</ul>`,g=document.querySelector(".js-statistics");document.querySelector("#js-statis");g.insertAdjacentHTML("beforeend",h);
//# sourceMappingURL=index.js.map
