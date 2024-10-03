(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const u=[{title:"About",link:"#"},{title:"Pricing",link:"#"},{title:"Contact",link:"#"}];function C(){return`<svg class="social-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7708 22.455V13.8303H17.7211L18.1637 10.4681H14.7708V8.32183C14.7708 7.3487 15.0452 6.68553 16.4695 6.68553L18.2832 6.6848V3.67753C17.9695 3.63756 16.8929 3.5459 15.6398 3.5459C13.0231 3.5459 11.2317 5.11248 11.2317 7.98884V10.4681H8.27246V13.8303H11.2317V22.455H14.7708Z" fill="#5B40FF"/>
  <mask id="mask0_2011_45" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="8" y="3" width="11" height="20">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7708 22.455V13.8303H17.7211L18.1637 10.4681H14.7708V8.32183C14.7708 7.3487 15.0452 6.68553 16.4695 6.68553L18.2832 6.6848V3.67753C17.9695 3.63756 16.8929 3.5459 15.6398 3.5459C13.0231 3.5459 11.2317 5.11248 11.2317 7.98884V10.4681H8.27246V13.8303H11.2317V22.455H14.7708Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2011_45)">
  </g>
  </svg>
  `}function p(){return`<svg class="social-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.1136 2.16833C14.9042 2.16529 15.6947 2.17324 16.4851 2.19216L16.6952 2.19974C16.9379 2.20841 17.1773 2.21924 17.4666 2.23224C18.6192 2.28641 19.4057 2.46841 20.0958 2.73599C20.8108 3.01116 21.4131 3.38383 22.0155 3.98616C22.5662 4.5274 22.9925 5.1821 23.2646 5.90474C23.5321 6.59483 23.7141 7.38241 23.7683 8.53508C23.7813 8.82324 23.7921 9.06374 23.8008 9.30641L23.8073 9.51658C23.8266 10.3065 23.8349 11.0967 23.8322 11.8869L23.8333 12.6951V14.1142C23.836 14.9048 23.8277 15.6953 23.8084 16.4857L23.8019 16.6958C23.7932 16.9385 23.7824 17.1779 23.7694 17.4672C23.7152 18.6198 23.5311 19.4063 23.2646 20.0964C22.9933 20.8198 22.567 21.4751 22.0155 22.0161C21.4738 22.5668 20.8187 22.993 20.0958 23.2652C19.4057 23.5327 18.6192 23.7147 17.4666 23.7689C17.1773 23.7819 16.9379 23.7927 16.6952 23.8014L16.4851 23.8079C15.6947 23.8272 14.9042 23.8355 14.1136 23.8328L13.3055 23.8339H11.8874C11.0968 23.8366 10.3063 23.8283 9.51597 23.809L9.30581 23.8025C9.04864 23.7932 8.79152 23.7823 8.53447 23.77C7.38181 23.7158 6.59531 23.5317 5.90414 23.2652C5.18121 22.9936 4.5264 22.5673 3.98556 22.0161C3.43419 21.4747 3.00755 20.8196 2.73539 20.0964C2.46781 19.4063 2.28581 18.6198 2.23164 17.4672C2.21958 17.2101 2.20874 16.953 2.19914 16.6958L2.19372 16.4857C2.17375 15.6953 2.16472 14.9048 2.16664 14.1142V11.8869C2.16362 11.0967 2.17156 10.3065 2.19047 9.51658L2.19806 9.30641C2.20672 9.06374 2.21756 8.82324 2.23056 8.53508C2.28472 7.38132 2.46672 6.59591 2.73431 5.90474C3.00663 5.18175 3.4341 4.52722 3.98664 3.98724C4.52711 3.43556 5.18152 3.00853 5.90414 2.73599C6.59531 2.46841 7.38072 2.28641 8.53447 2.23224L9.30581 2.19974L9.51597 2.19433C10.3059 2.17436 11.0961 2.16533 11.8863 2.16724L14.1136 2.16833ZM13 7.58499C12.2823 7.57484 11.5697 7.70743 10.9037 7.97507C10.2377 8.2427 9.63151 8.64003 9.12039 9.14397C8.60927 9.64791 8.20341 10.2484 7.92639 10.9106C7.64936 11.5727 7.50671 12.2833 7.50671 13.0011C7.50671 13.7189 7.64936 14.4295 7.92639 15.0917C8.20341 15.7538 8.60927 16.3543 9.12039 16.8583C9.63151 17.3622 10.2377 17.7595 10.9037 18.0272C11.5697 18.2948 12.2823 18.4274 13 18.4172C14.4366 18.4172 15.8143 17.8466 16.8301 16.8307C17.846 15.8149 18.4166 14.4372 18.4166 13.0006C18.4166 11.564 17.846 10.1862 16.8301 9.17041C15.8143 8.15459 14.4366 7.58499 13 7.58499ZM13 9.75166C13.4317 9.7437 13.8607 9.82186 14.2618 9.98155C14.663 10.1412 15.0283 10.3793 15.3365 10.6817C15.6446 10.9842 15.8894 11.3451 16.0565 11.7432C16.2237 12.1413 16.3098 12.5688 16.3098 13.0006C16.3099 13.4324 16.2239 13.8598 16.057 14.258C15.89 14.6562 15.6453 15.0171 15.3373 15.3197C15.0292 15.6223 14.664 15.8604 14.2628 16.0203C13.8617 16.1801 13.4328 16.2584 13.0011 16.2506C12.1391 16.2506 11.3125 15.9082 10.703 15.2987C10.0935 14.6892 9.75106 13.8625 9.75106 13.0006C9.75106 12.1386 10.0935 11.312 10.703 10.7025C11.3125 10.093 12.1391 9.75058 13.0011 9.75058L13 9.75166ZM18.6875 5.95999C18.338 5.97398 18.0075 6.12266 17.7651 6.37488C17.5228 6.6271 17.3875 6.9633 17.3875 7.31308C17.3875 7.66285 17.5228 7.99905 17.7651 8.25127C18.0075 8.5035 18.338 8.65217 18.6875 8.66616C19.0466 8.66616 19.3911 8.52349 19.645 8.26953C19.899 8.01558 20.0416 7.67114 20.0416 7.31199C20.0416 6.95284 19.899 6.60841 19.645 6.35445C19.3911 6.1005 19.0466 5.95783 18.6875 5.95783V5.95999Z" fill="#5B40FF"/>
  </svg>
  `}function d(){return`<svg class="social-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6368 6.6584C22.8973 6.98606 22.1039 7.20827 21.2702 7.30748C22.1215 6.79776 22.773 5.98926 23.0818 5.02884C22.2834 5.50087 21.4021 5.84364 20.463 6.02944C19.711 5.22722 18.6413 4.72754 17.4549 4.72754C15.1788 4.72754 13.3333 6.57305 13.3333 8.84792C13.3333 9.17055 13.3697 9.48567 13.44 9.787C10.0152 9.61498 6.97826 7.97413 4.9457 5.48078C4.5904 6.08844 4.38827 6.79648 4.38827 7.55228C4.38827 8.98225 5.11644 10.244 6.22124 10.9821C5.5458 10.9596 4.91054 10.7738 4.35439 10.4649V10.5164C4.35439 12.5125 5.77556 14.1785 7.65997 14.5577C7.31472 14.6506 6.95065 14.7021 6.57401 14.7021C6.30787 14.7021 6.0505 14.6757 5.79815 14.6255C6.32291 16.2638 7.84453 17.4552 9.64736 17.4879C8.23749 18.5927 6.45977 19.2493 4.52891 19.2493C4.19623 19.2493 3.86853 19.2292 3.5459 19.1928C5.37007 20.3641 7.53572 21.0471 9.86331 21.0471C17.4449 21.0471 21.5892 14.7673 21.5892 9.32123L21.5754 8.78768C22.3851 8.21013 23.0856 7.48449 23.6368 6.6584Z" fill="#5B40FF"/>
  <mask id="mask0_2011_42" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="4" width="21" height="18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6368 6.6584C22.8973 6.98606 22.1039 7.20827 21.2702 7.30748C22.1215 6.79776 22.773 5.98926 23.0818 5.02884C22.2834 5.50087 21.4021 5.84364 20.463 6.02944C19.711 5.22722 18.6413 4.72754 17.4549 4.72754C15.1788 4.72754 13.3333 6.57305 13.3333 8.84792C13.3333 9.17055 13.3697 9.48567 13.44 9.787C10.0152 9.61498 6.97826 7.97413 4.9457 5.48078C4.5904 6.08844 4.38827 6.79648 4.38827 7.55228C4.38827 8.98225 5.11644 10.244 6.22124 10.9821C5.5458 10.9596 4.91054 10.7738 4.35439 10.4649V10.5164C4.35439 12.5125 5.77556 14.1785 7.65997 14.5577C7.31472 14.6506 6.95065 14.7021 6.57401 14.7021C6.30787 14.7021 6.0505 14.6757 5.79815 14.6255C6.32291 16.2638 7.84453 17.4552 9.64736 17.4879C8.23749 18.5927 6.45977 19.2493 4.52891 19.2493C4.19623 19.2493 3.86853 19.2292 3.5459 19.1928C5.37007 20.3641 7.53572 21.0471 9.86331 21.0471C17.4449 21.0471 21.5892 14.7673 21.5892 9.32123L21.5754 8.78768C22.3851 8.21013 23.0856 7.48449 23.6368 6.6584Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2011_42)">
  </g>
  </svg>
  `}const a=[{platform:"Twitter",link:"#",icon:d()},{platform:"Facebook",link:"#",icon:C()},{platform:"Instagram",link:"#",icon:p()}],c=e=>`
    ${e.map(t=>`
      <li class="social-item">
        <a href="${t.link}" class="social-link" aria-label="${t.platform}">
            ${t.icon}
        </a>
      </li>
    `).join("")}
`,f=u.map(e=>`<li class="nav-item"><a class="nav-link" href="${e.link}">${e.title}</a></li>`).join(""),m=document.querySelector(".nav-list"),h=document.querySelector(".header-socials");m.innerHTML=f;h.innerHTML=c(a);const g=[{title:"People",value:"200"},{title:"Our users the world",value:"50"},{title:"Succesfull projects",value:"100"}],v=g.map((e,t)=>{let n=e.value;return t===0?n=`${n}+`:t===1?n=`${n}K`:t===2&&(n=`${n}%`),`<li class="static-item"><h3>${e.title}</h3><p class="item-value">${n}</p></li>`}).join(""),L=document.querySelector(".js-statistics-list");L.innerHTML=v;const w=[{title:"Basic",price:"9",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Starter",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"]},{title:"Standart",price:"29",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Medium",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"],popular:!0},{title:"Business",price:"99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",plan:"Large",features:["10-hour training","Coffee and lunch","Course files to your email","Individual consulting"]}];function $(e){return`
        <li class="feature-items">
        <svg width="27" height="27" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="13.125" cy="13.5625" r="10.125" stroke="#22282B" stroke-width="1.5"/>
           <path d="M17 11.4375L13.402 15.755C12.7465 16.5417 12.4187 16.9351 11.9781 16.9551C11.5375 16.975 11.1755 16.613 10.4514 15.8889L9 14.4375" stroke="#22282B" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p class="feature-text">${e}</p>
        </li>`}const y=document.querySelector(".js-plans-list");function r(e,t){return t?`${e} ${e}-standart`:e}function k(e,t){return`
            <li class="${r("pricing-items",e.popular)}">
                 ${e.popular?'<div class="most-popular"><span>Most popular</span></div>':""}
                <div class="${r("plan-header",e.popular)}">
               
                    <h3 class="${r("title-plan",e.popular)}">${e.title}</h3> 
                    <div class="price-container"><span class="${r("currency",e.popular)}">$</span><p class="${r("plan-price",e.popular)}">${e.price}</p><span class="${r("month",e.popular)}">month</span>
                    </div><p class="${r("description",e.popular)}">${e.description}</p>
                    <button type="button" class="${r("buy-now",e.popular)}">Buy now</button>
                    
                </div>
                <div class="plan-features">
                
                 ${t===0?'<p class="plan-features-item">What’s included</p>':""}

                    <h4 class="plan-title">${e.plan}</h4>
                    <ul class="list-features">
                        ${e.features.map($).join("")}
                    </ul>
                </div>
            </li>
        `}y.innerHTML=w.map((e,t)=>k(e,t)).join("");const M=[["Creative Direction","Art Direction","Visual Design","Service Design"],["UX Design","Brand Identity","Concepting","Interaction Design"],["Design Systems","Strategy","Digital Experiences","Consulting"]];function S(){return`<svg class="icon-arrow" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.54259 12.1143L5.30383 10.8875L9.01411 7.17725L0 7.17725L0 5.38526L9.01411 5.38526L5.30383 1.68099L6.54259 0.448242L12.3756 6.28125L6.54259 12.1143Z" />
</svg>
    `}const V=()=>`
        ${M.map(e=>`
          <div class="services-group">
            ${e.map(t=>`<a href="#" class="service-item">${t}${S()}</a>`).join("")}
            </div>`).join("")}
    `,H=document.querySelector(".js-our-services");H.innerHTML=V();const B=document.querySelector(".js-footer-social");B.innerHTML=c(a);
//# sourceMappingURL=index.js.map
