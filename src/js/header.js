const navItems = [
  { title: 'About', link: '#' },
  { title: 'Pricing', link: '#' },
  { title: 'Contact', link: '#' },
];

const socialMedia = [
  {
    platform: 'Twitter',
    link: '#',
    icon: '#icon-twitter',
  },
  {
    platform: 'Facebook',
    link: '#',
    icon: '#icon-facebook',
  },
  {
    platform: 'Instagram',
    link: '#',
    icon: '#icon-instagram',
  },
];

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
