import { iconFacebook, iconInstagram, iconTwitter } from '../components/icons';
export const createSocialList = socialMedia => {
  return `
    ${socialMedia
      .map(
        social => `
      <li class="social-item">
        <a href="${social.link}" class="social-link" aria-label="${social.platform}">
            ${social.icon}
        </a>
      </li>
    `
      )
      .join('')}
`;
};
