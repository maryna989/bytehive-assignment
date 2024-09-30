import { navItems } from '../mocks/navItemsMocks';
import { socialMedia } from '../mocks/socialMediaMocks';

const navList = navItems
  .map(
    item => `<li class="nav-item"><a href="${item.link}">${item.title}</a></li>`
  )
  .join('');

const nav = `
      <nav class="nav-header">
        <ul class="nav-list">
          ${navList}
        </ul>
      </nav>
    `;

const socialList = `
  <ul class="social-icons-list">
    ${socialMedia
      .map(
        social => `
      <li class="social-item">
        <a href="${social.link}" aria-label="${social.platform}">
          <svg class="icon js-icon-${social.platform.toLowerCase()}" width="26" height="26">
            <use href="../img/icons.svg${social.icon}"></use>
          </svg>
        </a>
      </li>
    `
      )
      .join('')}
  </ul>
`;

const headerContainer = document.querySelector('#header');
const iconsList = document.querySelector('.js-logo');

headerContainer.insertAdjacentHTML('afterbegin', nav);

headerContainer.insertAdjacentHTML('beforeend', socialList);
