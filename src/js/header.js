import { navItems } from '../mocks/navItemsMocks';
import { socialMedia } from '../mocks/socialMediaMocks';
import { createSocialList } from '../components/createSocialList';

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

const headerContainer = document.querySelector('#header');
const iconsList = document.querySelector('.js-logo');

headerContainer.insertAdjacentHTML('afterbegin', nav);

headerContainer.insertAdjacentHTML('beforeend', createSocialList(socialMedia));
