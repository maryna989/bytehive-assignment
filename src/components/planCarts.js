export function createFeatureItem(feature) {
  return `
        <li class="feature-items">
        <svg width="27" height="27" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="13.125" cy="13.5625" r="10.125" stroke="#22282B" stroke-width="1.5"/>
           <path d="M17 11.4375L13.402 15.755C12.7465 16.5417 12.4187 16.9351 11.9781 16.9551C11.5375 16.975 11.1755 16.613 10.4514 15.8889L9 14.4375" stroke="#22282B" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p class="feature-text">${feature}</p>
        </li>`;
}
