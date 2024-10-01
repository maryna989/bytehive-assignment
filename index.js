(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const a=[{title:"About",link:"#"},{title:"Pricing",link:"#"},{title:"Contact",link:"#"}],l=[{platform:"Twitter",link:"#",icon:"#icon-twitter"},{platform:"Facebook",link:"#",icon:"#icon-facebook"},{platform:"Instagram",link:"#",icon:"#icon-instagram"}],c=e=>`
    ${e.map(t=>`
      <li class="social-item">
        <a href="${t.link}" aria-label="${t.platform}">
          <svg class="social-icon" width="26" height="26">
            <use href="../img/icons.svg${t.icon}"></use>
          </svg>
        </a>
      </li>
    `).join("")}
`,u=a.map(e=>`<li class="nav-item"><a href="${e.link}">${e.title}</a></li>`).join(""),p=document.querySelector(".nav-list"),d=document.querySelector(".header-socials");p.innerHTML=u;d.innerHTML=c(l);const f=[{title:"People",value:"200"},{title:"Our users the world",value:"50"},{title:"Succesfull projects",value:"100"}],m=f.map((e,t)=>{let r=e.value;return t===0?r=`${r}+`:t===1?r=`${r}K`:t===2&&(r=`${r}%`),`<li class="static-item"><h3>${e.title}</h3><p class="item-value">${r}</p></li>`}).join(""),g=document.querySelector(".js-statistics-list");g.innerHTML=m;const h=[{title:"Basic",price:"9",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Starter",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"]},{title:"Standart",price:"29",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Medium",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"],popular:!0},{title:"Business",price:"99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Large",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"]}];function v(e){return`
        <li>
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="13.125" cy="13.5625" r="10.125" stroke="#22282B" stroke-width="1.5"/>
           <path d="M17 11.4375L13.402 15.755C12.7465 16.5417 12.4187 16.9351 11.9781 16.9551C11.5375 16.975 11.1755 16.613 10.4514 15.8889L9 14.4375" stroke="#22282B" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
            ${e}
        </li>`}const y=document.querySelector(".js-plans-list");function $(e,t){return`
            <li class="pricing-items">
                <div class="plan-header">
                ${e.popular?'<span class="most-popular">Most popular</span>':""}
                    <h3 class="title-plan">${e.title}</h3> 
                    <span class="currency">$</span><p class="plan-price">${e.price}</p><span class="month">month</span>
                    <p class="description">${e.description}</p>
                    <button type="button" class="buy-now">Buy now</button>
                    
                </div>

                <div class="plan-features">
                
                 ${t===0?"<p>What’s included</p>":""}

                    <h4 class="plan">${e.plan}</h4>
                    <ul class="list-features">
                        ${e.features.map(v).join("")}
                    </ul>
                </div>
            </li>
        `}y.innerHTML=h.map((e,t)=>$(e,t)).join("");const L=[["Creative Direction","Art Direction","Visual Design","Service Design"],["UX Design","Brand Identity","Concepting","Interaction Design"],["Design Systems","Strategy","Digital Experiences","Consulting"]],w=()=>`
        ${L.map(e=>`
          <div class="services-group">
            ${e.map(t=>`<a href="#" class="service-item">${t}<svg class="icon-arrow" width="13" height="13"><use href='../img/icons.svg#icon-arrow'></use></svg></a>`).join("")}
            </div>`).join("")}
    `,S=document.querySelector(".js-our-services");S.innerHTML=w();const C=document.querySelector(".js-footer-social");C.innerHTML=c(l);
//# sourceMappingURL=index.js.map
