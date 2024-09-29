(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l=[{title:"About",link:"#"},{title:"Pricing",link:"#"},{title:"Contact",link:"#"}],a=[{platform:"Twitter",link:"#",icon:"#icon-twitter"},{platform:"Facebook",link:"#",icon:"#icon-facebook"},{platform:"Instagram",link:"#",icon:"#icon-instagram"}],u=l.map(i=>`<li class="nav-item"><a href="${i.link}">${i.title}</a></li>`).join(""),f=`
      <nav class="nav-header">
        <ul class="nav-list">
          ${u}
        </ul>
      </nav>
    `,d=`
  <ul class="social-icons-list">
    ${a.map(i=>`
      <li class="social-item">
        <a href="${i.link}" aria-label="${i.platform}">
          <svg class="icon js-icon-${i.platform.toLowerCase()}" width="26" height="26">
            <use href="../img/icons.svg${i.icon}"></use>
          </svg>
        </a>
      </li>
    `).join("")}
  </ul>
`,s=document.querySelector("#header");document.querySelector(".js-logo");s.insertAdjacentHTML("afterbegin",f);s.insertAdjacentHTML("beforeend",d);
//# sourceMappingURL=index.js.map
