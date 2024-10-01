import { socialMedia } from '../mocks/socialMediaMocks';
import { createSocialList } from '../components/createSocialList';

const footerContainer = document.querySelector('.js-footer-social');

footerContainer.innerHTML = createSocialList(socialMedia);
