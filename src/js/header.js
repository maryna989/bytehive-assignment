import { navItems } from '../mocks/navItemsMocks';
import { socialMedia } from '../mocks/socialMediaMocks';
import { createSocialList } from '../components/createSocialList';

const navElements = navItems
  .map(
    item => `<li class="nav-item"><a href="${item.link}">${item.title}</a></li>`
  )
  .join('');

const navList = document.querySelector('.nav-list');

const headerSocials = document.querySelector('.header-socials');

navList.innerHTML = navElements;
headerSocials.innerHTML = createSocialList(socialMedia);
