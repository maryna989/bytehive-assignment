import { socialMedia } from '../mocks/socialMediaMocks';
import { createSocialList } from '../components/createSocialList';

const footerContainer = document.querySelector('#js-footer');

footerContainer.innerHTML = createSocialList(socialMedia);

const socialIconsList = footerContainer.querySelector('.social-icons-list');
socialIconsList.classList.add('soclist-icons-footer');

footerContainer
  .querySelectorAll('.social-item')
  .forEach(item => item.classList.add('footer-soc-item'));
