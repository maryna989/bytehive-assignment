(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const u=[{title:"About",link:"#"},{title:"Pricing",link:"#"},{title:"Contact",link:"#"}],a=[{platform:"Twitter",link:"#",icon:"#icon-twitter"},{platform:"Facebook",link:"#",icon:"#icon-facebook"},{platform:"Instagram",link:"#",icon:"#icon-instagram"}],c=e=>`
    ${e.map(t=>`
      <li class="social-item">
        <a href="${t.link}" class="social-link" aria-label="${t.platform}">
          <svg class="social-icon" width="26" height="26">
            <use href="../img/icons.svg${t.icon}"></use>
          </svg>
        </a>
      </li>
    `).join("")}
`,p=u.map(e=>`<li class="nav-item"><a class="nav-link" href="${e.link}">${e.title}</a></li>`).join(""),d=document.querySelector(".nav-list"),f=document.querySelector(".header-socials");d.innerHTML=p;f.innerHTML=c(a);const m=[{title:"People",value:"200"},{title:"Our users the world",value:"50"},{title:"Succesfull projects",value:"100"}],g=m.map((e,t)=>{let r=e.value;return t===0?r=`${r}+`:t===1?r=`${r}K`:t===2&&(r=`${r}%`),`<li class="static-item"><h3>${e.title}</h3><p class="item-value">${r}</p></li>`}).join(""),h=document.querySelector(".js-statistics-list");h.innerHTML=g;const v=[{title:"Basic",price:"9",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Starter",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"]},{title:"Standart",price:"29",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Medium",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"],popular:!0},{title:"Business",price:"99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Large",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"]}];function $(e){return`
        <li class="feature-items">
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="13.125" cy="13.5625" r="10.125" stroke="#22282B" stroke-width="1.5"/>
           <path d="M17 11.4375L13.402 15.755C12.7465 16.5417 12.4187 16.9351 11.9781 16.9551C11.5375 16.975 11.1755 16.613 10.4514 15.8889L9 14.4375" stroke="#22282B" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p class="feature-text">${e}</p>
        </li>`}const y=document.querySelector(".js-plans-list");function n(e,t){return t?`${e} ${e}-standart`:e}function L(e,t){return`
            <li class="${n("pricing-items",e.popular)}">
                 ${e.popular?'<div class="most-popular"><span>Most popular</span></div>':""}
                <div class="${n("plan-header",e.popular)}">
               
                    <h3 class="${n("title-plan",e.popular)}">${e.title}</h3> 
                    <div class="price-container"><span class="${n("currency",e.popular)}">$</span><p class="${n("plan-price",e.popular)}">${e.price}</p><span class="${n("month",e.popular)}">month</span>
                    </div><p class="${n("description",e.popular)}">${e.description}</p>
                    <button type="button" class="${n("buy-now",e.popular)}">Buy now</button>
                    
                </div>
                <div class="plan-features">
                
                 ${t===0?'<p class="plan-features-item">What’s included</p>':""}

                    <h4 class="plan-title">${e.plan}</h4>
                    <ul class="list-features">
                        ${e.features.map($).join("")}
                    </ul>
                </div>
            </li>
        `}y.innerHTML=v.map((e,t)=>L(e,t)).join("");const S=[["Creative Direction","Art Direction","Visual Design","Service Design"],["UX Design","Brand Identity","Concepting","Interaction Design"],["Design Systems","Strategy","Digital Experiences","Consulting"]],w=()=>`
        ${S.map(e=>`
          <div class="services-group">
            ${e.map(t=>`<a href="#" class="service-item">${t}<svg class="icon-arrow" width="13" height="13"><use href='../img/icons.svg#icon-arrow'></use></svg></a>`).join("")}
            </div>`).join("")}
    `,C=document.querySelector(".js-our-services");C.innerHTML=w();const k=document.querySelector(".js-footer-social");k.innerHTML=c(a);
//# sourceMappingURL=index.js.map
